function xm(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in r)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ym(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sm={};(function(){var r;function e(h){var p=0;return function(){return p<h.length?{done:!1,value:h[p++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,p,x){return h==Array.prototype||h==Object.prototype||(h[p]=x.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ra=="object"&&Ra];for(var p=0;p<h.length;++p){var x=h[p];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var i=n(this);function s(h,p){if(p)e:{var x=i;h=h.split(".");for(var S=0;S<h.length-1;S++){var L=h[S];if(!(L in x))break e;x=x[L]}h=h[h.length-1],S=x[h],p=p(S),p!=S&&p!=null&&t(x,h,{configurable:!0,writable:!0,value:p})}}s("Symbol",function(h){function p(U){if(this instanceof p)throw new TypeError("Symbol is not a constructor");return new x(S+(U||"")+"_"+L++,U)}function x(U,I){this.h=U,t(this,"description",{configurable:!0,writable:!0,value:I})}if(h)return h;x.prototype.toString=function(){return this.h};var S="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",L=0;return p}),s("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var p="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),x=0;x<p.length;x++){var S=i[p[x]];typeof S=="function"&&typeof S.prototype[h]!="function"&&t(S.prototype,h,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return h});function o(h){return h={next:h},h[Symbol.iterator]=function(){return this},h}function a(h){var p=typeof Symbol<"u"&&Symbol.iterator&&h[Symbol.iterator];return p?p.call(h):{next:e(h)}}function c(h){if(!(h instanceof Array)){h=a(h);for(var p,x=[];!(p=h.next()).done;)x.push(p.value);h=x}return h}var l=typeof Object.assign=="function"?Object.assign:function(h,p){for(var x=1;x<arguments.length;x++){var S=arguments[x];if(S)for(var L in S)Object.prototype.hasOwnProperty.call(S,L)&&(h[L]=S[L])}return h};s("Object.assign",function(h){return h||l});var u=typeof Object.create=="function"?Object.create:function(h){function p(){}return p.prototype=h,new p},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var d;e:{var m={a:!0},y={};try{y.__proto__=m,d=y.a;break e}catch{}d=!1}f=d?function(h,p){if(h.__proto__=p,h.__proto__!==p)throw new TypeError(h+" is not extensible");return h}:null}var v=f;function g(h,p){if(h.prototype=u(p.prototype),h.prototype.constructor=h,v)v(h,p);else for(var x in p)if(x!="prototype")if(Object.defineProperties){var S=Object.getOwnPropertyDescriptor(p,x);S&&Object.defineProperty(h,x,S)}else h[x]=p[x];h.ya=p.prototype}function _(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function C(h){if(h.m)throw new TypeError("Generator is already running");h.m=!0}_.prototype.u=function(h){this.i=h};function M(h,p){h.l={ma:p,na:!0},h.h=h.s||h.v}_.prototype.return=function(h){this.l={return:h},this.h=this.v};function T(h,p,x){return h.h=x,{value:p}}function O(h){this.h=new _,this.i=h}function D(h,p){C(h.h);var x=h.h.j;return x?w(h,"return"in x?x.return:function(S){return{value:S,done:!0}},p,h.h.return):(h.h.return(p),z(h))}function w(h,p,x,S){try{var L=p.call(h.h.j,x);if(!(L instanceof Object))throw new TypeError("Iterator result "+L+" is not an object");if(!L.done)return h.h.m=!1,L;var U=L.value}catch(I){return h.h.j=null,M(h.h,I),z(h)}return h.h.j=null,S.call(h.h,U),z(h)}function z(h){for(;h.h.h;)try{var p=h.i(h.h);if(p)return h.h.m=!1,{value:p.value,done:!1}}catch(x){h.h.i=void 0,M(h.h,x)}if(h.h.m=!1,h.h.l){if(p=h.h.l,h.h.l=null,p.na)throw p.ma;return{value:p.return,done:!0}}return{value:void 0,done:!0}}function E(h){this.next=function(p){return C(h.h),h.h.j?p=w(h,h.h.j.next,p,h.h.u):(h.h.u(p),p=z(h)),p},this.throw=function(p){return C(h.h),h.h.j?p=w(h,h.h.j.throw,p,h.h.u):(M(h.h,p),p=z(h)),p},this.return=function(p){return D(h,p)},this[Symbol.iterator]=function(){return this}}function P(h){function p(S){return h.next(S)}function x(S){return h.throw(S)}return new Promise(function(S,L){function U(I){I.done?S(I.value):Promise.resolve(I.value).then(p,x).then(U,L)}U(h.next())})}function G(h){return P(new E(new O(h)))}s("Promise",function(h){function p(I){this.i=0,this.j=void 0,this.h=[],this.u=!1;var B=this.l();try{I(B.resolve,B.reject)}catch(Y){B.reject(Y)}}function x(){this.h=null}function S(I){return I instanceof p?I:new p(function(B){B(I)})}if(h)return h;x.prototype.i=function(I){if(this.h==null){this.h=[];var B=this;this.j(function(){B.m()})}this.h.push(I)};var L=i.setTimeout;x.prototype.j=function(I){L(I,0)},x.prototype.m=function(){for(;this.h&&this.h.length;){var I=this.h;this.h=[];for(var B=0;B<I.length;++B){var Y=I[B];I[B]=null;try{Y()}catch(de){this.l(de)}}}this.h=null},x.prototype.l=function(I){this.j(function(){throw I})},p.prototype.l=function(){function I(de){return function(xe){Y||(Y=!0,de.call(B,xe))}}var B=this,Y=!1;return{resolve:I(this.I),reject:I(this.m)}},p.prototype.I=function(I){if(I===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(I instanceof p)this.L(I);else{e:switch(typeof I){case"object":var B=I!=null;break e;case"function":B=!0;break e;default:B=!1}B?this.F(I):this.s(I)}},p.prototype.F=function(I){var B=void 0;try{B=I.then}catch(Y){this.m(Y);return}typeof B=="function"?this.M(B,I):this.s(I)},p.prototype.m=function(I){this.v(2,I)},p.prototype.s=function(I){this.v(1,I)},p.prototype.v=function(I,B){if(this.i!=0)throw Error("Cannot settle("+I+", "+B+"): Promise already settled in state"+this.i);this.i=I,this.j=B,this.i===2&&this.K(),this.H()},p.prototype.K=function(){var I=this;L(function(){if(I.D()){var B=i.console;typeof B<"u"&&B.error(I.j)}},1)},p.prototype.D=function(){if(this.u)return!1;var I=i.CustomEvent,B=i.Event,Y=i.dispatchEvent;return typeof Y>"u"?!0:(typeof I=="function"?I=new I("unhandledrejection",{cancelable:!0}):typeof B=="function"?I=new B("unhandledrejection",{cancelable:!0}):(I=i.document.createEvent("CustomEvent"),I.initCustomEvent("unhandledrejection",!1,!0,I)),I.promise=this,I.reason=this.j,Y(I))},p.prototype.H=function(){if(this.h!=null){for(var I=0;I<this.h.length;++I)U.i(this.h[I]);this.h=null}};var U=new x;return p.prototype.L=function(I){var B=this.l();I.T(B.resolve,B.reject)},p.prototype.M=function(I,B){var Y=this.l();try{I.call(B,Y.resolve,Y.reject)}catch(de){Y.reject(de)}},p.prototype.then=function(I,B){function Y(ke,Ae){return typeof ke=="function"?function($e){try{de(ke($e))}catch(st){xe(st)}}:Ae}var de,xe,Ye=new p(function(ke,Ae){de=ke,xe=Ae});return this.T(Y(I,de),Y(B,xe)),Ye},p.prototype.catch=function(I){return this.then(void 0,I)},p.prototype.T=function(I,B){function Y(){switch(de.i){case 1:I(de.j);break;case 2:B(de.j);break;default:throw Error("Unexpected state: "+de.i)}}var de=this;this.h==null?U.i(Y):this.h.push(Y),this.u=!0},p.resolve=S,p.reject=function(I){return new p(function(B,Y){Y(I)})},p.race=function(I){return new p(function(B,Y){for(var de=a(I),xe=de.next();!xe.done;xe=de.next())S(xe.value).T(B,Y)})},p.all=function(I){var B=a(I),Y=B.next();return Y.done?S([]):new p(function(de,xe){function Ye($e){return function(st){ke[$e]=st,Ae--,Ae==0&&de(ke)}}var ke=[],Ae=0;do ke.push(void 0),Ae++,S(Y.value).T(Ye(ke.length-1),xe),Y=B.next();while(!Y.done)})},p});function Z(h,p){h instanceof String&&(h+="");var x=0,S=!1,L={next:function(){if(!S&&x<h.length){var U=x++;return{value:p(U,h[U]),done:!1}}return S=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.keys",function(h){return h||function(){return Z(this,function(p){return p})}}),s("Array.prototype.fill",function(h){return h||function(p,x,S){var L=this.length||0;for(0>x&&(x=Math.max(0,L+x)),(S==null||S>L)&&(S=L),S=Number(S),0>S&&(S=Math.max(0,L+S)),x=Number(x||0);x<S;x++)this[x]=p;return this}});function ne(h){return h||Array.prototype.fill}s("Int8Array.prototype.fill",ne),s("Uint8Array.prototype.fill",ne),s("Uint8ClampedArray.prototype.fill",ne),s("Int16Array.prototype.fill",ne),s("Uint16Array.prototype.fill",ne),s("Int32Array.prototype.fill",ne),s("Uint32Array.prototype.fill",ne),s("Float32Array.prototype.fill",ne),s("Float64Array.prototype.fill",ne),s("Object.is",function(h){return h||function(p,x){return p===x?p!==0||1/p===1/x:p!==p&&x!==x}}),s("Array.prototype.includes",function(h){return h||function(p,x){var S=this;S instanceof String&&(S=String(S));var L=S.length;for(x=x||0,0>x&&(x=Math.max(x+L,0));x<L;x++){var U=S[x];if(U===p||Object.is(U,p))return!0}return!1}}),s("String.prototype.includes",function(h){return h||function(p,x){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(p instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(p,x||0)!==-1}});var F=this||self;function V(h,p){h=h.split(".");var x=F;h[0]in x||typeof x.execScript>"u"||x.execScript("var "+h[0]);for(var S;h.length&&(S=h.shift());)h.length||p===void 0?x[S]&&x[S]!==Object.prototype[S]?x=x[S]:x=x[S]={}:x[S]=p}function j(h){var p;e:{if((p=F.navigator)&&(p=p.userAgent))break e;p=""}return p.indexOf(h)!=-1}var ee=Array.prototype.map?function(h,p){return Array.prototype.map.call(h,p,void 0)}:function(h,p){for(var x=h.length,S=Array(x),L=typeof h=="string"?h.split(""):h,U=0;U<x;U++)U in L&&(S[U]=p.call(void 0,L[U],U,h));return S},te={},ie=null;function se(h){var p=h.length,x=3*p/4;x%3?x=Math.floor(x):"=.".indexOf(h[p-1])!=-1&&(x="=.".indexOf(h[p-2])!=-1?x-2:x-1);var S=new Uint8Array(x),L=0;return fe(h,function(U){S[L++]=U}),L!==x?S.subarray(0,L):S}function fe(h,p){function x(Y){for(;S<h.length;){var de=h.charAt(S++),xe=ie[de];if(xe!=null)return xe;if(!/^[\s\xa0]*$/.test(de))throw Error("Unknown base64 encoding at char: "+de)}return Y}pe();for(var S=0;;){var L=x(-1),U=x(0),I=x(64),B=x(64);if(B===64&&L===-1)break;p(L<<2|U>>4),I!=64&&(p(U<<4&240|I>>2),B!=64&&p(I<<6&192|B))}}function pe(){if(!ie){ie={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),p=["+/=","+/","-_=","-_.","-_"],x=0;5>x;x++){var S=h.concat(p[x].split(""));te[x]=S;for(var L=0;L<S.length;L++){var U=S[L];ie[U]===void 0&&(ie[U]=L)}}}}var J=typeof Uint8Array<"u",oe=!(j("Trident")||j("MSIE"))&&typeof F.btoa=="function";function ve(h){if(!oe){var p;p===void 0&&(p=0),pe(),p=te[p];for(var x=Array(Math.floor(h.length/3)),S=p[64]||"",L=0,U=0;L<h.length-2;L+=3){var I=h[L],B=h[L+1],Y=h[L+2],de=p[I>>2];I=p[(I&3)<<4|B>>4],B=p[(B&15)<<2|Y>>6],Y=p[Y&63],x[U++]=de+I+B+Y}switch(de=0,Y=S,h.length-L){case 2:de=h[L+1],Y=p[(de&15)<<2]||S;case 1:h=h[L],x[U]=p[h>>2]+p[(h&3)<<4|de>>4]+Y+S}return x.join("")}for(p="";10240<h.length;)p+=String.fromCharCode.apply(null,h.subarray(0,10240)),h=h.subarray(10240);return p+=String.fromCharCode.apply(null,h),btoa(p)}var Ue=RegExp("[-_.]","g");function Pe(h){switch(h){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function He(h){if(!oe)return se(h);Ue.test(h)&&(h=h.replace(Ue,Pe)),h=atob(h);for(var p=new Uint8Array(h.length),x=0;x<h.length;x++)p[x]=h.charCodeAt(x);return p}var Je;function Oe(){return Je||(Je=new Uint8Array(0))}var Ve={},N=typeof Uint8Array.prototype.slice=="function",ce=0,Q=0;function _e(h){var p=0>h;h=Math.abs(h);var x=h>>>0;h=Math.floor((h-x)/4294967296),p&&(x=a(Ne(x,h)),p=x.next().value,h=x.next().value,x=p),ce=x>>>0,Q=h>>>0}var re=typeof BigInt=="function";function Ne(h,p){return p=~p,h?h=~h+1:p+=1,[h,p]}function Ce(h,p){this.i=h>>>0,this.h=p>>>0}function A(h){if(!h)return b||(b=new Ce(0,0));if(!/^-?\d+$/.test(h))return null;if(16>h.length)_e(Number(h));else if(re)h=BigInt(h),ce=Number(h&BigInt(4294967295))>>>0,Q=Number(h>>BigInt(32)&BigInt(4294967295));else{var p=+(h[0]==="-");Q=ce=0;for(var x=h.length,S=p,L=(x-p)%6+p;L<=x;S=L,L+=6)S=Number(h.slice(S,L)),Q*=1e6,ce=1e6*ce+S,4294967296<=ce&&(Q+=ce/4294967296|0,ce%=4294967296);p&&(p=a(Ne(ce,Q)),h=p.next().value,p=p.next().value,ce=h,Q=p)}return new Ce(ce,Q)}var b;function X(h,p){return Error("Invalid wire type: "+h+" (at position "+p+")")}function le(){return Error("Failed to read varint, encoding is invalid.")}function he(h,p){return Error("Tried to read past the end of the data "+p+" > "+h)}function ae(){throw Error("Invalid UTF8")}function Ie(h,p){return p=String.fromCharCode.apply(null,p),h==null?p:h+p}var ye=void 0,Re,Ge=typeof TextDecoder<"u",Qe,ue=typeof TextEncoder<"u",ct;function nt(h){if(h!==Ve)throw Error("illegal external caller")}function We(h,p){if(nt(p),this.V=h,h!=null&&h.length===0)throw Error("ByteString should be constructed with non-empty values")}function Be(){return ct||(ct=new We(null,Ve))}function Le(h){nt(Ve);var p=h.V;return p=p==null||J&&p!=null&&p instanceof Uint8Array?p:typeof p=="string"?He(p):null,p==null?p:h.V=p}function tt(h){if(typeof h=="string")return{buffer:He(h),C:!1};if(Array.isArray(h))return{buffer:new Uint8Array(h),C:!1};if(h.constructor===Uint8Array)return{buffer:h,C:!1};if(h.constructor===ArrayBuffer)return{buffer:new Uint8Array(h),C:!1};if(h.constructor===We)return{buffer:Le(h)||Oe(),C:!0};if(h instanceof Uint8Array)return{buffer:new Uint8Array(h.buffer,h.byteOffset,h.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ht(h,p){this.i=null,this.m=!1,this.h=this.j=this.l=0,yt(this,h,p)}function yt(h,p,x){x=x===void 0?{}:x,h.S=x.S===void 0?!1:x.S,p&&(p=tt(p),h.i=p.buffer,h.m=p.C,h.l=0,h.j=h.i.length,h.h=h.l)}ht.prototype.reset=function(){this.h=this.l};function qe(h,p){if(h.h=p,p>h.j)throw he(h.j,p)}function ge(h){var p=h.i,x=h.h,S=p[x++],L=S&127;if(S&128&&(S=p[x++],L|=(S&127)<<7,S&128&&(S=p[x++],L|=(S&127)<<14,S&128&&(S=p[x++],L|=(S&127)<<21,S&128&&(S=p[x++],L|=S<<28,S&128&&p[x++]&128&&p[x++]&128&&p[x++]&128&&p[x++]&128&&p[x++]&128)))))throw le();return qe(h,x),L}function k(h,p){if(0>p)throw Error("Tried to read a negative byte length: "+p);var x=h.h,S=x+p;if(S>h.j)throw he(p,h.j-x);return h.h=S,x}var Te=[];function Ee(){this.h=[]}Ee.prototype.length=function(){return this.h.length},Ee.prototype.end=function(){var h=this.h;return this.h=[],h};function Xe(h,p,x){for(;0<x||127<p;)h.h.push(p&127|128),p=(p>>>7|x<<25)>>>0,x>>>=7;h.h.push(p)}function Fe(h,p){for(;127<p;)h.h.push(p&127|128),p>>>=7;h.h.push(p)}function dt(h,p){if(Te.length){var x=Te.pop();yt(x,h,p),h=x}else h=new ht(h,p);this.h=h,this.j=this.h.h,this.i=this.l=-1,this.setOptions(p)}dt.prototype.setOptions=function(h){h=h===void 0?{}:h,this.ca=h.ca===void 0?!1:h.ca},dt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function pt(h){var p=h.h;if(p.h==p.j)return!1;h.j=h.h.h;var x=ge(h.h)>>>0;if(p=x>>>3,x&=7,!(0<=x&&5>=x))throw X(x,h.j);if(1>p)throw Error("Invalid field number: "+p+" (at position "+h.j+")");return h.l=p,h.i=x,!0}function At(h){switch(h.i){case 0:if(h.i!=0)At(h);else e:{h=h.h;for(var p=h.h,x=p+10,S=h.i;p<x;)if(!(S[p++]&128)){qe(h,p);break e}throw le()}break;case 1:h=h.h,qe(h,h.h+8);break;case 2:h.i!=2?At(h):(p=ge(h.h)>>>0,h=h.h,qe(h,h.h+p));break;case 5:h=h.h,qe(h,h.h+4);break;case 3:p=h.l;do{if(!pt(h))throw Error("Unmatched start-group tag: stream EOF");if(h.i==4){if(h.l!=p)throw Error("Unmatched end-group tag");break}At(h)}while(!0);break;default:throw X(h.i,h.j)}}var Ft=[];function mt(){this.j=[],this.i=0,this.h=new Ee}function It(h,p){p.length!==0&&(h.j.push(p),h.i+=p.length)}function Nn(h,p){if(p=p.R){It(h,h.h.end());for(var x=0;x<p.length;x++)It(h,Le(p[x])||Oe())}}var Fn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function ci(h,p){return Fn?h[Fn]|=p:h.A!==void 0?h.A|=p:(Object.defineProperties(h,{A:{value:p,configurable:!0,writable:!0,enumerable:!1}}),p)}function Ki(h,p){Fn?h[Fn]&&(h[Fn]&=~p):h.A!==void 0&&(h.A&=~p)}function bt(h){var p;return Fn?p=h[Fn]:p=h.A,p??0}function un(h,p){Fn?h[Fn]=p:h.A!==void 0?h.A=p:Object.defineProperties(h,{A:{value:p,configurable:!0,writable:!0,enumerable:!1}})}function Tr(h){return ci(h,1),h}function co(h,p){un(p,(h|0)&-51)}function br(h,p){un(p,(h|18)&-41)}var Ss={};function Cr(h){return h!==null&&typeof h=="object"&&!Array.isArray(h)&&h.constructor===Object}var R,W=[];un(W,23),R=Object.freeze(W);function q(h){if(bt(h.o)&2)throw Error("Cannot mutate an immutable Message")}function K(h){var p=h.length;(p=p?h[p-1]:void 0)&&Cr(p)?p.g=1:(p={},h.push((p.g=1,p)))}function $(h){var p=h.i+h.G;return h.B||(h.B=h.o[p]={})}function Se(h,p){return p===-1?null:p>=h.i?h.B?h.B[p]:void 0:h.o[p+h.G]}function we(h,p,x,S){q(h),ze(h,p,x,S)}function ze(h,p,x,S){h.j&&(h.j=void 0),p>=h.i||S?$(h)[p]=x:(h.o[p+h.G]=x,(h=h.B)&&p in h&&delete h[p])}function je(h,p,x,S){var L=Se(h,p);Array.isArray(L)||(L=R);var U=bt(L);if(U&1||Tr(L),S)U&2||ci(L,2),x&1||Object.freeze(L);else{S=!(x&2);var I=U&2;x&1||!I?S&&U&16&&!I&&Ki(L,16):(L=Tr(Array.prototype.slice.call(L)),ze(h,p,L))}return L}function et(h,p){var x=Se(h,p),S=x==null?x:typeof x=="number"||x==="NaN"||x==="Infinity"||x==="-Infinity"?Number(x):void 0;return S!=null&&S!==x&&ze(h,p,S),S}function Ze(h,p,x,S,L){h.h||(h.h={});var U=h.h[x],I=je(h,x,3,L);if(!U){var B=I;U=[];var Y=!!(bt(h.o)&16);I=!!(bt(B)&2);var de=B;!L&&I&&(B=Array.prototype.slice.call(B));for(var xe=I,Ye=0;Ye<B.length;Ye++){var ke=B[Ye],Ae=p,$e=!1;if($e=$e===void 0?!1:$e,ke=Array.isArray(ke)?new Ae(ke):$e?new Ae:void 0,ke!==void 0){Ae=ke.o;var st=$e=bt(Ae);I&&(st|=2),Y&&(st|=16),st!=$e&&un(Ae,st),Ae=st,xe=xe||!!(2&Ae),U.push(ke)}}return h.h[x]=U,Y=bt(B),p=Y|33,p=xe?p&-9:p|8,Y!=p&&(xe=B,Object.isFrozen(xe)&&(xe=Array.prototype.slice.call(xe)),un(xe,p),B=xe),de!==B&&ze(h,x,B),(L||S&&I)&&ci(U,2),S&&Object.freeze(U),U}return L||(L=Object.isFrozen(U),S&&!L?Object.freeze(U):!S&&L&&(U=Array.prototype.slice.call(U),h.h[x]=U)),U}function Ke(h,p,x){var S=!!(bt(h.o)&2);if(p=Ze(h,p,x,S,S),h=je(h,x,3,S),!(S||bt(h)&8)){for(S=0;S<p.length;S++){if(x=p[S],bt(x.o)&2){var L=ti(x,!1);L.j=x}else L=x;x!==L&&(p[S]=L,h[S]=L.o)}ci(h,8)}return p}function ut(h,p,x){if(x!=null&&typeof x!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof x+": "+x);we(h,p,x)}function tn(h,p,x,S,L){q(h);var U=Ze(h,x,p,!1,!1);return x=S??new x,h=je(h,p,2,!1),L!=null?(U.splice(L,0,x),h.splice(L,0,x.o)):(U.push(x),h.push(x.o)),x.C()&&Ki(h,8),x}function Rt(h,p){return h??p}function kt(h,p,x){return x=x===void 0?0:x,Rt(et(h,p),x)}var _t;function it(h){switch(typeof h){case"number":return isFinite(h)?h:String(h);case"object":if(h)if(Array.isArray(h)){if(bt(h)&128)return h=Array.prototype.slice.call(h),K(h),h}else{if(J&&h!=null&&h instanceof Uint8Array)return ve(h);if(h instanceof We){var p=h.V;return p==null?"":typeof p=="string"?p:h.V=ve(p)}}}return h}function Ar(h,p,x,S){if(h!=null){if(Array.isArray(h))h=St(h,p,x,S!==void 0);else if(Cr(h)){var L={},U;for(U in h)L[U]=Ar(h[U],p,x,S);h=L}else h=p(h,S);return h}}function St(h,p,x,S){var L=bt(h);S=S?!!(L&16):void 0,h=Array.prototype.slice.call(h);for(var U=0;U<h.length;U++)h[U]=Ar(h[U],p,x,S);return x(L,h),h}function li(h){return h.ja===Ss?h.toJSON():it(h)}function lo(h,p){h&128&&K(p)}function Ti(h,p,x){if(x=x===void 0?br:x,h!=null){if(J&&h instanceof Uint8Array)return h.length?new We(new Uint8Array(h),Ve):Be();if(Array.isArray(h)){var S=bt(h);return S&2?h:p&&!(S&32)&&(S&16||S===0)?(un(h,S|2),h):(h=St(h,Ti,S&4?br:x,!0),p=bt(h),p&4&&p&2&&Object.freeze(h),h)}return h.ja===Ss?Vt(h):h}}function Rr(h,p,x,S,L,U,I){if(h=h.h&&h.h[x]){if(S=bt(h),S&2?S=h:(U=ee(h,Vt),br(S,U),Object.freeze(U),S=U),q(p),I=S==null?R:Tr([]),S!=null){for(U=!!S.length,h=0;h<S.length;h++){var B=S[h];U=U&&!(bt(B.o)&2),I[h]=B.o}U=(U?8:0)|1,h=bt(I),(h&U)!==U&&(Object.isFrozen(I)&&(I=Array.prototype.slice.call(I)),un(I,h|U)),p.h||(p.h={}),p.h[x]=S}else p.h&&(p.h[x]=void 0);ze(p,x,I,L)}else we(p,x,Ti(S,U,I),L)}function Vt(h){return bt(h.o)&2||(h=ti(h,!0),ci(h.o,2)),h}function ti(h,p){var x=h.o,S=[];ci(S,16);var L=h.constructor.h;if(L&&S.push(L),L=h.B,L){S.length=x.length,S.fill(void 0,S.length,x.length);var U={};S[S.length-1]=U}bt(x)&128&&K(S),p=p||h.C()?br:co,U=h.constructor,_t=S,S=new U(S),_t=void 0,h.R&&(S.R=h.R.slice()),U=!!(bt(x)&16);for(var I=L?x.length-1:x.length,B=0;B<I;B++)Rr(h,S,B-h.G,x[B],!1,U,p);if(L)for(var Y in L)Rr(h,S,+Y,L[Y],!0,U,p);return S}function Yt(h,p,x){h==null&&(h=_t),_t=void 0;var S=this.constructor.i||0,L=0<S,U=this.constructor.h,I=!1;if(h==null){h=U?[U]:[];var B=48,Y=!0;L&&(S=0,B|=128),un(h,B)}else{if(!Array.isArray(h)||U&&U!==h[0])throw Error();var de=B=ci(h,0);if((Y=(16&de)!==0)&&((I=(32&de)!==0)||(de|=32)),L){if(128&de)S=0;else if(0<h.length){var xe=h[h.length-1];if(Cr(xe)&&"g"in xe){S=0,de|=128,delete xe.g;var Ye=!0,ke;for(ke in xe){Ye=!1;break}Ye&&h.pop()}}}else if(128&de)throw Error();B!==de&&un(h,de)}this.G=(U?0:-1)-S,this.h=void 0,this.o=h;e:{if(U=this.o.length,S=U-1,U&&(U=this.o[S],Cr(U))){this.B=U,this.i=S-this.G;break e}p!==void 0&&-1<p?(this.i=Math.max(p,S+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!L&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(x){p=Y&&!I&&!0,L=this.i;var Ae;for(Y=0;Y<x.length;Y++)I=x[Y],I<L?(I+=this.G,(S=h[I])?fn(S,p):h[I]=R):(Ae||(Ae=$(this)),(S=Ae[I])?fn(S,p):Ae[I]=R)}}Yt.prototype.toJSON=function(){return St(this.o,li,lo)},Yt.prototype.C=function(){return!!(bt(this.o)&2)};function fn(h,p){if(Array.isArray(h)){var x=bt(h),S=1;!p||x&2||(S|=16),(x&S)!==S&&un(h,x|S)}}Yt.prototype.ja=Ss,Yt.prototype.toString=function(){return this.o.toString()};function Pr(h,p,x){if(x){var S={},L;for(L in x){var U=x[L],I=U.qa;I||(S.J=U.wa||U.oa.W,U.ia?(S.aa=zl(U.ia),I=function(B){return function(Y,de,xe){return B.J(Y,de,xe,B.aa)}}(S)):U.ka?(S.Z=Gl(U.da.P,U.ka),I=function(B){return function(Y,de,xe){return B.J(Y,de,xe,B.Z)}}(S)):I=S.J,U.qa=I),I(p,h,U.da),S={J:S.J,aa:S.aa,Z:S.Z}}}Nn(p,h)}var wr=Symbol();function Ms(h,p,x){return h[wr]||(h[wr]=function(S,L){return p(S,L,x)})}function Fl(h){var p=h[wr];if(!p){var x=Ma(h);p=function(S,L){return Hl(S,L,x)},h[wr]=p}return p}function Gp(h){var p=h.ia;if(p)return Fl(p);if(p=h.va)return Ms(h.da.P,p,h.ka)}function Hp(h){var p=Gp(h),x=h.da,S=h.oa.U;return p?function(L,U){return S(L,U,x,p)}:function(L,U){return S(L,U,x)}}function kl(h,p){var x=h[p];return typeof x=="function"&&x.length===0&&(x=x(),h[p]=x),Array.isArray(x)&&(Ts in x||Es in x||0<x.length&&typeof x[0]=="function")?x:void 0}function Bl(h,p,x,S,L,U){p.P=h[0];var I=1;if(h.length>I&&typeof h[I]!="number"){var B=h[I++];x(p,B)}for(;I<h.length;){x=h[I++];for(var Y=I+1;Y<h.length&&typeof h[Y]!="number";)Y++;switch(B=h[I++],Y-=I,Y){case 0:S(p,x,B);break;case 1:(Y=kl(h,I))?(I++,L(p,x,B,Y)):S(p,x,B,h[I++]);break;case 2:Y=I++,Y=kl(h,Y),L(p,x,B,Y,h[I++]);break;case 3:U(p,x,B,h[I++],h[I++],h[I++]);break;case 4:U(p,x,B,h[I++],h[I++],h[I++],h[I++]);break;default:throw Error("unexpected number of binary field arguments: "+Y)}}return p}var ho=Symbol();function zl(h){var p=h[ho];if(!p){var x=Sa(h);p=function(S,L){return Vl(S,L,x)},h[ho]=p}return p}function Gl(h,p){var x=h[ho];return x||(x=function(S,L){return Pr(S,L,p)},h[ho]=x),x}var Es=Symbol();function Vp(h,p){h.push(p)}function Wp(h,p,x){h.push(p,x.W)}function Xp(h,p,x,S){var L=zl(S),U=Sa(S).P,I=x.W;h.push(p,function(B,Y,de){return I(B,Y,de,U,L)})}function jp(h,p,x,S,L,U){var I=Gl(S,U),B=x.W;h.push(p,function(Y,de,xe){return B(Y,de,xe,S,I)})}function Sa(h){var p=h[Es];return p||(p=Bl(h,h[Es]=[],Vp,Wp,Xp,jp),Ts in h&&Es in h&&(h.length=0),p)}var Ts=Symbol();function Yp(h,p){h[0]=p}function $p(h,p,x,S){var L=x.U;h[p]=S?function(U,I,B){return L(U,I,B,S)}:L}function qp(h,p,x,S,L){var U=x.U,I=Fl(S),B=Ma(S).P;h[p]=function(Y,de,xe){return U(Y,de,xe,B,I,L)}}function Kp(h,p,x,S,L,U,I){var B=x.U,Y=Ms(S,L,U);h[p]=function(de,xe,Ye){return B(de,xe,Ye,S,Y,I)}}function Ma(h){var p=h[Ts];return p||(p=Bl(h,h[Ts]={},Yp,$p,qp,Kp),Ts in h&&Es in h&&(h.length=0),p)}function Hl(h,p,x){for(;pt(p)&&p.i!=4;){var S=p.l,L=x[S];if(!L){var U=x[0];U&&(U=U[S])&&(L=x[S]=Hp(U))}if(!L||!L(p,h,S)){L=p,S=h,U=L.j,At(L);var I=L;if(!I.ca){if(L=I.h.h-U,I.h.h=U,I=I.h,L==0)L=Be();else{if(U=k(I,L),I.S&&I.m)L=I.i.subarray(U,U+L);else{I=I.i;var B=U;L=U+L,L=B===L?Oe():N?I.slice(B,L):new Uint8Array(I.subarray(B,L))}L=L.length==0?Be():new We(L,Ve)}(U=S.R)?U.push(L):S.R=[L]}}}return h}function Vl(h,p,x){for(var S=x.length,L=S%2==1,U=L?1:0;U<S;U+=2)(0,x[U+1])(p,h,x[U]);Pr(h,p,L?x[0]:void 0)}function bs(h,p){return{U:h,W:p}}var jn=bs(function(h,p,x){if(h.i!==5)return!1;h=h.h;var S=h.i,L=h.h,U=S[L],I=S[L+1],B=S[L+2];return S=S[L+3],qe(h,h.h+4),I=(U<<0|I<<8|B<<16|S<<24)>>>0,h=2*(I>>31)+1,U=I>>>23&255,I&=8388607,we(p,x,U==255?I?NaN:1/0*h:U==0?h*Math.pow(2,-149)*I:h*Math.pow(2,U-150)*(I+Math.pow(2,23))),!0},function(h,p,x){if(p=et(p,x),p!=null){Fe(h.h,8*x+5),h=h.h;var S=+p;S===0?0<1/S?ce=Q=0:(Q=0,ce=2147483648):isNaN(S)?(Q=0,ce=2147483647):(S=(x=0>S?-2147483648:0)?-S:S,34028234663852886e22<S?(Q=0,ce=(x|2139095040)>>>0):11754943508222875e-54>S?(S=Math.round(S/Math.pow(2,-149)),Q=0,ce=(x|S)>>>0):(p=Math.floor(Math.log(S)/Math.LN2),S*=Math.pow(2,-p),S=Math.round(8388608*S),16777216<=S&&++p,Q=0,ce=(x|p+127<<23|S&8388607)>>>0)),x=ce,h.h.push(x>>>0&255),h.h.push(x>>>8&255),h.h.push(x>>>16&255),h.h.push(x>>>24&255)}}),Jp=bs(function(h,p,x){if(h.i!==0)return!1;var S=h.h,L=0,U=h=0,I=S.i,B=S.h;do{var Y=I[B++];L|=(Y&127)<<U,U+=7}while(32>U&&Y&128);for(32<U&&(h|=(Y&127)>>4),U=3;32>U&&Y&128;U+=7)Y=I[B++],h|=(Y&127)<<U;if(qe(S,B),128>Y)S=L>>>0,Y=h>>>0,(h=Y&2147483648)&&(S=~S+1>>>0,Y=~Y>>>0,S==0&&(Y=Y+1>>>0)),S=4294967296*Y+(S>>>0);else throw le();return we(p,x,h?-S:S),!0},function(h,p,x){p=Se(p,x),p!=null&&(typeof p=="string"&&A(p),p!=null&&(Fe(h.h,8*x),typeof p=="number"?(h=h.h,_e(p),Xe(h,ce,Q)):(x=A(p),Xe(h.h,x.i,x.h))))}),Zp=bs(function(h,p,x){return h.i!==0?!1:(we(p,x,ge(h.h)),!0)},function(h,p,x){if(p=Se(p,x),p!=null&&p!=null)if(Fe(h.h,8*x),h=h.h,x=p,0<=x)Fe(h,x);else{for(p=0;9>p;p++)h.h.push(x&127|128),x>>=7;h.h.push(1)}}),Wl=bs(function(h,p,x){if(h.i!==2)return!1;var S=ge(h.h)>>>0;h=h.h;var L=k(h,S);if(h=h.i,Ge){var U=h,I;(I=Re)||(I=Re=new TextDecoder("utf-8",{fatal:!0})),h=L+S,U=L===0&&h===U.length?U:U.subarray(L,h);try{var B=I.decode(U)}catch(Ye){if(ye===void 0){try{I.decode(new Uint8Array([128]))}catch{}try{I.decode(new Uint8Array([97])),ye=!0}catch{ye=!1}}throw!ye&&(Re=void 0),Ye}}else{B=L,S=B+S,L=[];for(var Y=null,de,xe;B<S;)de=h[B++],128>de?L.push(de):224>de?B>=S?ae():(xe=h[B++],194>de||(xe&192)!==128?(B--,ae()):L.push((de&31)<<6|xe&63)):240>de?B>=S-1?ae():(xe=h[B++],(xe&192)!==128||de===224&&160>xe||de===237&&160<=xe||((U=h[B++])&192)!==128?(B--,ae()):L.push((de&15)<<12|(xe&63)<<6|U&63)):244>=de?B>=S-2?ae():(xe=h[B++],(xe&192)!==128||(de<<28)+(xe-144)>>30||((U=h[B++])&192)!==128||((I=h[B++])&192)!==128?(B--,ae()):(de=(de&7)<<18|(xe&63)<<12|(U&63)<<6|I&63,de-=65536,L.push((de>>10&1023)+55296,(de&1023)+56320))):ae(),8192<=L.length&&(Y=Ie(Y,L),L.length=0);B=Ie(Y,L)}return we(p,x,B),!0},function(h,p,x){if(p=Se(p,x),p!=null){var S=!1;if(S=S===void 0?!1:S,ue){if(S&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(p))throw Error("Found an unpaired surrogate");p=(Qe||(Qe=new TextEncoder)).encode(p)}else{for(var L=0,U=new Uint8Array(3*p.length),I=0;I<p.length;I++){var B=p.charCodeAt(I);if(128>B)U[L++]=B;else{if(2048>B)U[L++]=B>>6|192;else{if(55296<=B&&57343>=B){if(56319>=B&&I<p.length){var Y=p.charCodeAt(++I);if(56320<=Y&&57343>=Y){B=1024*(B-55296)+Y-56320+65536,U[L++]=B>>18|240,U[L++]=B>>12&63|128,U[L++]=B>>6&63|128,U[L++]=B&63|128;continue}else I--}if(S)throw Error("Found an unpaired surrogate");B=65533}U[L++]=B>>12|224,U[L++]=B>>6&63|128}U[L++]=B&63|128}}p=L===U.length?U:U.subarray(0,L)}Fe(h.h,8*x+2),Fe(h.h,p.length),It(h,h.h.end()),It(h,p)}}),Xl=bs(function(h,p,x,S,L){if(h.i!==2)return!1;p=tn(p,x,S),x=h.h.j,S=ge(h.h)>>>0;var U=h.h.h+S,I=U-x;if(0>=I&&(h.h.j=U,L(p,h,void 0,void 0,void 0),I=U-h.h.h),I)throw Error("Message parsing ended unexpectedly. Expected to read "+(S+" bytes, instead read "+(S-I)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return h.h.h=U,h.h.j=x,!0},function(h,p,x,S,L){if(p=Ke(p,S,x),p!=null)for(S=0;S<p.length;S++){var U=h;Fe(U.h,8*x+2);var I=U.h.end();It(U,I),I.push(U.i),U=I,L(p[S],h),I=h;var B=U.pop();for(B=I.i+I.h.length()-B;127<B;)U.push(B&127|128),B>>>=7,I.i++;U.push(B),I.i++}});function Ea(h){return function(p,x){e:{if(Ft.length){var S=Ft.pop();S.setOptions(x),yt(S.h,p,x),p=S}else p=new dt(p,x);try{var L=Ma(h),U=Hl(new L.P,p,L);break e}finally{L=p.h,L.i=null,L.m=!1,L.l=0,L.j=0,L.h=0,L.S=!1,p.l=-1,p.i=-1,100>Ft.length&&Ft.push(p)}U=void 0}return U}}function Ta(h){return function(){var p=new mt;Vl(this,p,Sa(h)),It(p,p.h.end());for(var x=new Uint8Array(p.i),S=p.j,L=S.length,U=0,I=0;I<L;I++){var B=S[I];x.set(B,U),U+=B.length}return p.j=[x],x}}function Lr(h){Yt.call(this,h)}g(Lr,Yt);var jl=[Lr,1,Zp,2,jn,3,Wl,4,Wl];Lr.prototype.l=Ta(jl);function ba(h){Yt.call(this,h,-1,Qp)}g(ba,Yt),ba.prototype.addClassification=function(h,p){return tn(this,1,Lr,h,p),this};var Qp=[1],Yl=Ea([ba,1,Xl,jl]);function Dr(h){Yt.call(this,h)}g(Dr,Yt);var $l=[Dr,1,jn,2,jn,3,jn,4,jn,5,jn];Dr.prototype.l=Ta($l);function ql(h){Yt.call(this,h,-1,em)}g(ql,Yt);var em=[1],Kl=Ea([ql,1,Xl,$l]);function uo(h){Yt.call(this,h)}g(uo,Yt);var Jl=[uo,1,jn,2,jn,3,jn,4,jn,5,jn,6,Jp],tm=Ea(Jl);uo.prototype.l=Ta(Jl);function Zl(h,p,x){if(x=h.createShader(x===0?h.VERTEX_SHADER:h.FRAGMENT_SHADER),h.shaderSource(x,p),h.compileShader(x),!h.getShaderParameter(x,h.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+h.getShaderInfoLog(x));return x}function Ql(h){return Ke(h,Lr,1).map(function(p){var x=Se(p,1);return{index:x??0,score:kt(p,2),label:Se(p,3)!=null?Rt(Se(p,3),""):void 0,displayName:Se(p,4)!=null?Rt(Se(p,4),""):void 0}})}function eh(h){return{x:kt(h,1),y:kt(h,2),z:kt(h,3),visibility:et(h,4)!=null?kt(h,4):void 0}}function th(h){return h.map(function(p){return Ke(Kl(p),Dr,1).map(eh)})}function Ca(h,p){this.i=h,this.h=p,this.m=0}function nh(h,p,x){return nm(h,p),typeof h.h.canvas.transferToImageBitmap=="function"?Promise.resolve(h.h.canvas.transferToImageBitmap()):x?Promise.resolve(h.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(h.h.canvas):(h.j===void 0&&(h.j=document.createElement("canvas")),new Promise(function(S){h.j.height=h.h.canvas.height,h.j.width=h.h.canvas.width,h.j.getContext("2d",{}).drawImage(h.h.canvas,0,0,h.h.canvas.width,h.h.canvas.height),S(h.j)}))}function nm(h,p){var x=h.h;if(h.s===void 0){var S=Zl(x,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),L=Zl(x,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),U=x.createProgram();if(x.attachShader(U,S),x.attachShader(U,L),x.linkProgram(U),!x.getProgramParameter(U,x.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+x.getProgramInfoLog(U));S=h.s=U,x.useProgram(S),L=x.getUniformLocation(S,"sampler0"),h.l={O:x.getAttribLocation(S,"aVertex"),N:x.getAttribLocation(S,"aTex"),xa:L},h.v=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,h.v),x.enableVertexAttribArray(h.l.O),x.vertexAttribPointer(h.l.O,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),h.u=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,h.u),x.enableVertexAttribArray(h.l.N),x.vertexAttribPointer(h.l.N,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),x.uniform1i(L,0)}S=h.l,x.useProgram(h.s),x.canvas.width=p.width,x.canvas.height=p.height,x.viewport(0,0,p.width,p.height),x.activeTexture(x.TEXTURE0),h.i.bindTexture2d(p.glName),x.enableVertexAttribArray(S.O),x.bindBuffer(x.ARRAY_BUFFER,h.v),x.vertexAttribPointer(S.O,2,x.FLOAT,!1,0,0),x.enableVertexAttribArray(S.N),x.bindBuffer(x.ARRAY_BUFFER,h.u),x.vertexAttribPointer(S.N,2,x.FLOAT,!1,0,0),x.bindFramebuffer(x.DRAW_FRAMEBUFFER?x.DRAW_FRAMEBUFFER:x.FRAMEBUFFER,null),x.clearColor(0,0,0,0),x.clear(x.COLOR_BUFFER_BIT),x.colorMask(!0,!0,!0,!0),x.drawArrays(x.TRIANGLE_FAN,0,4),x.disableVertexAttribArray(S.O),x.disableVertexAttribArray(S.N),x.bindBuffer(x.ARRAY_BUFFER,null),h.i.bindTexture2d(0)}function im(h){this.h=h}var rm=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function sm(h,p){return p+h}function ih(h,p){window[h]=p}function om(h){var p=document.createElement("script");return p.setAttribute("src",h),p.setAttribute("crossorigin","anonymous"),new Promise(function(x){p.addEventListener("load",function(){x()},!1),p.addEventListener("error",function(){x()},!1),document.body.appendChild(p)})}function am(){return G(function(h){switch(h.h){case 1:return h.s=2,T(h,WebAssembly.instantiate(rm),4);case 4:h.h=3,h.s=0;break;case 2:return h.s=0,h.l=null,h.return(!1);case 3:return h.return(!0)}})}function Aa(h){if(this.h=h,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=h&&h.locateFile||sm,typeof window=="object")var p=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")p=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=p,h.options){p=a(Object.keys(h.options));for(var x=p.next();!x.done;x=p.next()){x=x.value;var S=h.options[x].default;S!==void 0&&(this.l[x]=typeof S=="function"?S():S)}}}r=Aa.prototype,r.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function cm(h){var p,x,S,L,U,I,B,Y,de,xe,Ye;return G(function(ke){switch(ke.h){case 1:return h.ga?(p=h.h.files===void 0?[]:typeof h.h.files=="function"?h.h.files(h.l):h.h.files,T(ke,am(),2)):ke.return();case 2:if(x=ke.i,typeof window=="object")return ih("createMediapipeSolutionsWasm",{locateFile:h.locateFile}),ih("createMediapipeSolutionsPackedAssets",{locateFile:h.locateFile}),I=p.filter(function(Ae){return Ae.data!==void 0}),B=p.filter(function(Ae){return Ae.data===void 0}),Y=Promise.all(I.map(function(Ae){var $e=fo(h,Ae.url);if(Ae.path!==void 0){var st=Ae.path;$e=$e.then(function(Et){return h.overrideFile(st,Et),Promise.resolve(Et)})}return $e})),de=Promise.all(B.map(function(Ae){return Ae.simd===void 0||Ae.simd&&x||!Ae.simd&&!x?om(h.locateFile(Ae.url,h.ha)):Promise.resolve()})).then(function(){var Ae,$e,st;return G(function(Et){if(Et.h==1)return Ae=window.createMediapipeSolutionsWasm,$e=window.createMediapipeSolutionsPackedAssets,st=h,T(Et,Ae($e),2);st.i=Et.i,Et.h=0})}),xe=function(){return G(function(Ae){return h.h.graph&&h.h.graph.url?Ae=T(Ae,fo(h,h.h.graph.url),0):(Ae.h=0,Ae=void 0),Ae})}(),T(ke,Promise.all([de,Y,xe]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return S=p.filter(function(Ae){return Ae.simd===void 0||Ae.simd&&x||!Ae.simd&&!x}).map(function(Ae){return h.locateFile(Ae.url,h.ha)}),importScripts.apply(null,c(S)),L=h,T(ke,createMediapipeSolutionsWasm(Module),6);case 6:L.i=ke.i,h.m=new OffscreenCanvas(1,1),h.i.canvas=h.m,U=h.i.GL.createContext(h.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),h.i.GL.makeContextCurrent(U),ke.h=4;break;case 7:if(h.m=document.createElement("canvas"),Ye=h.m.getContext("webgl2",{}),!Ye&&(Ye=h.m.getContext("webgl",{}),!Ye))return alert("Failed to create WebGL canvas context when passing video frame."),ke.return();h.K=Ye,h.i.canvas=h.m,h.i.createContext(h.m,!0,!0,{});case 4:h.j=new h.i.SolutionWasm,h.ga=!1,ke.h=0}})}function lm(h){var p,x,S,L,U,I,B,Y;return G(function(de){if(de.h==1){if(h.h.graph&&h.h.graph.url&&h.fa===h.h.graph.url)return de.return();if(h.u=!0,!h.h.graph||!h.h.graph.url){de.h=2;return}return h.fa=h.h.graph.url,T(de,fo(h,h.h.graph.url),3)}for(de.h!=2&&(p=de.i,h.j.loadGraph(p)),x=a(Object.keys(h.D)),S=x.next();!S.done;S=x.next())L=S.value,h.j.overrideFile(L,h.D[L]);if(h.D={},h.h.listeners)for(U=a(h.h.listeners),I=U.next();!I.done;I=U.next())B=I.value,dm(h,B);Y=h.l,h.l={},h.setOptions(Y),de.h=0})}r.reset=function(){var h=this;return G(function(p){h.j&&(h.j.reset(),h.s={},h.v={}),p.h=0})},r.setOptions=function(h,p){var x=this;if(p=p||this.h.options){for(var S=[],L=[],U={},I=a(Object.keys(h)),B=I.next();!B.done;U={X:U.X,Y:U.Y},B=I.next())if(B=B.value,!(B in this.l&&this.l[B]===h[B])){this.l[B]=h[B];var Y=p[B];Y!==void 0&&(Y.onChange&&(U.X=Y.onChange,U.Y=h[B],S.push(function(de){return function(){var xe;return G(function(Ye){if(Ye.h==1)return T(Ye,de.X(de.Y),2);xe=Ye.i,xe===!0&&(x.u=!0),Ye.h=0})}}(U))),Y.graphOptionXref&&(B=Object.assign({},{calculatorName:"",calculatorIndex:0},Y.graphOptionXref,{valueNumber:Y.type===1?h[B]:0,valueBoolean:Y.type===0?h[B]:!1,valueString:Y.type===2?h[B]:""}),L.push(B)))}(S.length!==0||L.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(L),this.F=(this.F===void 0?[]:this.F).concat(S))}};function hm(h){var p,x,S,L,U,I,B;return G(function(Y){switch(Y.h){case 1:if(!h.u)return Y.return();if(!h.F){Y.h=2;break}p=a(h.F),x=p.next();case 3:if(x.done){Y.h=5;break}return S=x.value,T(Y,S(),4);case 4:x=p.next(),Y.h=3;break;case 5:h.F=void 0;case 2:if(h.H){for(L=new h.i.GraphOptionChangeRequestList,U=a(h.H),I=U.next();!I.done;I=U.next())B=I.value,L.push_back(B);h.j.changeOptions(L),L.delete(),h.H=void 0}h.u=!1,Y.h=0}})}r.initialize=function(){var h=this;return G(function(p){return p.h==1?T(p,cm(h),2):p.h!=3?T(p,lm(h),3):T(p,hm(h),0)})};function fo(h,p){var x,S;return G(function(L){return p in h.L?L.return(h.L[p]):(x=h.locateFile(p,""),S=fetch(x).then(function(U){return U.arrayBuffer()}),h.L[p]=S,L.return(S))})}r.overrideFile=function(h,p){this.j?this.j.overrideFile(h,p):this.D[h]=p},r.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},r.send=function(h,p){var x=this,S,L,U,I,B,Y,de,xe,Ye;return G(function(ke){switch(ke.h){case 1:return x.h.inputs?(S=1e3*(p??performance.now()),T(ke,x.I,2)):ke.return();case 2:return T(ke,x.initialize(),3);case 3:for(L=new x.i.PacketDataList,U=a(Object.keys(h)),I=U.next();!I.done;I=U.next())if(B=I.value,Y=x.h.inputs[B]){e:{var Ae=h[B];switch(Y.type){case"video":var $e=x.s[Y.stream];if($e||($e=new Ca(x.i,x.K),x.s[Y.stream]=$e),$e.m===0&&($e.m=$e.i.createTexture()),typeof HTMLVideoElement<"u"&&Ae instanceof HTMLVideoElement)var st=Ae.videoWidth,Et=Ae.videoHeight;else typeof HTMLImageElement<"u"&&Ae instanceof HTMLImageElement?(st=Ae.naturalWidth,Et=Ae.naturalHeight):(st=Ae.width,Et=Ae.height);Et={glName:$e.m,width:st,height:Et},st=$e.h,st.canvas.width=Et.width,st.canvas.height=Et.height,st.activeTexture(st.TEXTURE0),$e.i.bindTexture2d($e.m),st.texImage2D(st.TEXTURE_2D,0,st.RGBA,st.RGBA,st.UNSIGNED_BYTE,Ae),$e.i.bindTexture2d(0),$e=Et;break e;case"detections":for($e=x.s[Y.stream],$e||($e=new im(x.i),x.s[Y.stream]=$e),$e.data||($e.data=new $e.h.DetectionListData),$e.data.reset(Ae.length),Et=0;Et<Ae.length;++Et){st=Ae[Et];var Mt=$e.data,Jt=Mt.setBoundingBox,kn=Et,gn=st.la,ft=new uo;if(ut(ft,1,gn.ra),ut(ft,2,gn.sa),ut(ft,3,gn.height),ut(ft,4,gn.width),ut(ft,5,gn.rotation),we(ft,6,gn.pa),gn=ft.l(),Jt.call(Mt,kn,gn),st.ea)for(Mt=0;Mt<st.ea.length;++Mt){ft=st.ea[Mt],Jt=$e.data,kn=Jt.addNormalizedLandmark,gn=Et,ft=Object.assign({},ft,{visibility:ft.visibility?ft.visibility:0});var Zt=new Dr;ut(Zt,1,ft.x),ut(Zt,2,ft.y),ut(Zt,3,ft.z),ft.visibility&&ut(Zt,4,ft.visibility),ft=Zt.l(),kn.call(Jt,gn,ft)}if(st.ba)for(Mt=0;Mt<st.ba.length;++Mt)Jt=$e.data,kn=Jt.addClassification,gn=Et,ft=st.ba[Mt],Zt=new Lr,ut(Zt,2,ft.score),ft.index&&we(Zt,1,ft.index),ft.label&&we(Zt,3,ft.label),ft.displayName&&we(Zt,4,ft.displayName),ft=Zt.l(),kn.call(Jt,gn,ft)}$e=$e.data;break e;default:$e={}}}switch(de=$e,xe=Y.stream,Y.type){case"video":L.pushTexture2d(Object.assign({},de,{stream:xe,timestamp:S}));break;case"detections":Ye=de,Ye.stream=xe,Ye.timestamp=S,L.pushDetectionList(Ye);break;default:throw Error("Unknown input config type: '"+Y.type+"'")}}return x.j.send(L),T(ke,x.I,4);case 4:L.delete(),ke.h=0}})};function um(h,p,x){var S,L,U,I,B,Y,de,xe,Ye,ke,Ae,$e,st,Et;return G(function(Mt){switch(Mt.h){case 1:if(!x)return Mt.return(p);for(S={},L=0,U=a(Object.keys(x)),I=U.next();!I.done;I=U.next())B=I.value,Y=x[B],typeof Y!="string"&&Y.type==="texture"&&p[Y.stream]!==void 0&&++L;1<L&&(h.M=!1),de=a(Object.keys(x)),I=de.next();case 2:if(I.done){Mt.h=4;break}if(xe=I.value,Ye=x[xe],typeof Ye=="string")return st=S,Et=xe,T(Mt,fm(h,xe,p[Ye]),14);if(ke=p[Ye.stream],Ye.type==="detection_list"){if(ke){for(var Jt=ke.getRectList(),kn=ke.getLandmarksList(),gn=ke.getClassificationsList(),ft=[],Zt=0;Zt<Jt.size();++Zt){var bi=tm(Jt.get(Zt)),pm=kt(bi,1),mm=kt(bi,2),_m=kt(bi,3),gm=kt(bi,4),vm=kt(bi,5,0),po=void 0;po=po===void 0?0:po,bi={la:{ra:pm,sa:mm,height:_m,width:gm,rotation:vm,pa:Rt(Se(bi,6),po)},ea:Ke(Kl(kn.get(Zt)),Dr,1).map(eh),ba:Ql(Yl(gn.get(Zt)))},ft.push(bi)}Jt=ft}else Jt=[];S[xe]=Jt,Mt.h=7;break}if(Ye.type==="proto_list"){if(ke){for(Jt=Array(ke.size()),kn=0;kn<ke.size();kn++)Jt[kn]=ke.get(kn);ke.delete()}else Jt=[];S[xe]=Jt,Mt.h=7;break}if(ke===void 0){Mt.h=3;break}if(Ye.type==="float_list"){S[xe]=ke,Mt.h=7;break}if(Ye.type==="proto"){S[xe]=ke,Mt.h=7;break}if(Ye.type!=="texture")throw Error("Unknown output config type: '"+Ye.type+"'");return Ae=h.v[xe],Ae||(Ae=new Ca(h.i,h.K),h.v[xe]=Ae),T(Mt,nh(Ae,ke,h.M),13);case 13:$e=Mt.i,S[xe]=$e;case 7:Ye.transform&&S[xe]&&(S[xe]=Ye.transform(S[xe])),Mt.h=3;break;case 14:st[Et]=Mt.i;case 3:I=de.next(),Mt.h=2;break;case 4:return Mt.return(S)}})}function fm(h,p,x){var S;return G(function(L){return typeof x=="number"||x instanceof Uint8Array||x instanceof h.i.Uint8BlobList?L.return(x):x instanceof h.i.Texture2dDataOut?(S=h.v[p],S||(S=new Ca(h.i,h.K),h.v[p]=S),L.return(nh(S,x,h.M))):L.return(void 0)})}function dm(h,p){for(var x=p.name||"$",S=[].concat(c(p.wants)),L=new h.i.StringList,U=a(p.wants),I=U.next();!I.done;I=U.next())L.push_back(I.value);U=h.i.PacketListener.implement({onResults:function(B){for(var Y={},de=0;de<p.wants.length;++de)Y[S[de]]=B.get(de);var xe=h.listeners[x];xe&&(h.I=um(h,Y,p.outs).then(function(Ye){Ye=xe(Ye);for(var ke=0;ke<p.wants.length;++ke){var Ae=Y[S[ke]];typeof Ae=="object"&&Ae.hasOwnProperty&&Ae.hasOwnProperty("delete")&&Ae.delete()}Ye&&(h.I=Ye)}))}}),h.j.attachMultiListener(L,U),L.delete()}r.onResults=function(h,p){this.listeners[p||"$"]=h},V("Solution",Aa),V("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function rh(h){return h===void 0&&(h=0),h===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function sh(h){var p=this;h=h||{},this.h=new Aa({locateFile:h.locateFile,files:function(x){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:rh(x.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:th},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:th},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(x){return x.map(function(S){return Ql(Yl(S))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(x){var S,L,U;return G(function(I){return I.h==1?(S=rh(x),L="third_party/mediapipe/modules/hand_landmark/"+S,T(I,fo(p.h,S),2)):(U=I.i,p.h.overrideFile(L,U),I.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}r=sh.prototype,r.close=function(){return this.h.close(),Promise.resolve()},r.onResults=function(h){this.h.onResults(h)},r.initialize=function(){var h=this;return G(function(p){return T(p,h.h.initialize(),0)})},r.reset=function(){this.h.reset()},r.send=function(h){var p=this;return G(function(x){return T(x,p.h.send(h),0)})},r.setOptions=function(h){this.h.setOptions(h)},V("Hands",sh),V("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),V("VERSION","0.4.1675469240")}).call(Ra);class Mm{hands;videoElement;callback=null;isRunning=!1;animationId=null;canvasWidth=640;canvasHeight=480;constructor(e){this.videoElement=e,this.hands=new Sm.Hands({locateFile:t=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${t}`}),this.hands.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.6,minTrackingConfidence:.5}),this.hands.onResults(t=>this.onResults(t))}setCanvasSize(e,t){this.canvasWidth=e,this.canvasHeight=t}onResults(e){if(this.callback)if(e.multiHandLandmarks&&e.multiHandLandmarks.length>0){const t=e.multiHandLandmarks[0],n=e.multiHandWorldLandmarks?.[0],i=t.map(o=>({x:(1-o.x)*this.canvasWidth,y:o.y*this.canvasHeight})),s=n?.map(o=>({x:-o.x,y:-o.y,z:o.z}));this.callback({landmarks:i,worldLandmarks:s})}else this.callback(null)}async start(e){if(this.callback=e,!this.isRunning)try{const t=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:30},facingMode:"user"}});this.videoElement.srcObject=t,await this.videoElement.play(),this.isRunning=!0;const n=async()=>{this.isRunning&&(this.videoElement.readyState>=2&&await this.hands.send({image:this.videoElement}),this.animationId=requestAnimationFrame(n))};n()}catch(t){throw console.error("Failed to start hand tracking:",t),t}}stop(){this.isRunning=!1,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null);const e=this.videoElement.srcObject;e&&e.getTracks().forEach(t=>t.stop())}isActive(){return this.isRunning}}const me={WRIST:0,THUMB_CMC:1,THUMB_MCP:2,THUMB_IP:3,THUMB_TIP:4,INDEX_MCP:5,INDEX_PIP:6,INDEX_DIP:7,INDEX_TIP:8,MIDDLE_MCP:9,MIDDLE_PIP:10,MIDDLE_DIP:11,MIDDLE_TIP:12,RING_MCP:13,RING_PIP:14,RING_DIP:15,RING_TIP:16,PINKY_MCP:17,PINKY_PIP:18,PINKY_DIP:19,PINKY_TIP:20},Kr={PINCH_THRESHOLD:40,PALM_HOLD_TIME:500,SWIPE_VELOCITY:800,MIN_STROKE_LENGTH:50,FINGER_CURL_THRESHOLD:.6,PALM_STABILITY_THRESHOLD:30},oh={WIDTH:10,MIN_POINT_DISTANCE:8},Li={STROKE_CLOSE_PULSE:.2,INFLATE_DURATION:.7,OBJECT_SETTLE:.5,POKE_SQUISH_IN:.15,POKE_SQUISH_OUT:.4,OBJECT_POP:.25},Ut={CAMERA_FOV:50,CAMERA_NEAR:.1,CAMERA_FAR:1e3,CAMERA_Z:10,OBJECT_DEPTH:.8,INFLATION_AMOUNT:1.2,BOB_AMPLITUDE:.1,BOB_SPEED_MIN:.5,BOB_SPEED_MAX:1.5,ROTATION_SPEED_MAX:.3,DRIFT_SPEED:.02,COLLISION_RADIUS:1.5},Ji={CURSOR_SIZE:16,CURSOR_GLOW_SIZE:30,CURSOR_PULSE_SPEED:2,HAND_SKELETON_OPACITY:.3,HAND_SKELETON_WIDTH:2};class Em{lastLandmarks=null;lastTime=0;gestureStartTime=0;currentGesture="none";previousGesture="none";palmHistory=[];velocityHistory=[];detect(e){const t=performance.now(),n=this.lastTime>0?(t-this.lastTime)/1e3:0;if(this.lastTime=t,!e)return this.createState("none",{x:0,y:0},0);const i=this.calculateVelocity(e,n),s=this.detectGestureType(e,i);s!==this.currentGesture&&(this.previousGesture=this.currentGesture,this.currentGesture=s,this.gestureStartTime=t);const o=t-this.gestureStartTime;return this.lastLandmarks=e,this.createState(this.currentGesture,i,o)}createState(e,t,n){return{current:e,previous:this.previousGesture,duration:n,velocity:t,confidence:1}}calculateVelocity(e,t){if(!this.lastLandmarks||t===0)return{x:0,y:0};const n=this.getPalmCenter(e),i=this.getPalmCenter(this.lastLandmarks),s={x:(n.x-i.x)/t,y:(n.y-i.y)/t};this.velocityHistory.push(s),this.velocityHistory.length>2&&this.velocityHistory.shift();const o=this.velocityHistory.reduce((a,c)=>({x:a.x+c.x,y:a.y+c.y}),{x:0,y:0});return{x:o.x/this.velocityHistory.length,y:o.y/this.velocityHistory.length}}getPalmCenter(e){const t=e.landmarks[me.WRIST],n=e.landmarks[me.INDEX_MCP],i=e.landmarks[me.PINKY_MCP];return{x:(t.x+n.x+i.x)/3,y:(t.y+n.y+i.y)/3}}detectGestureType(e,t){const n=e.landmarks;if(Math.sqrt(t.x*t.x+t.y*t.y)>Kr.SWIPE_VELOCITY&&Math.abs(t.x)>Math.abs(t.y)*1.5)return"swipe";if(this.distance(n[me.THUMB_TIP],n[me.INDEX_TIP])<Kr.PINCH_THRESHOLD)return"pinch";if(this.isFist(e))return"fist";if(this.isOpenPalm(e)){if(this.palmHistory.push(this.getPalmCenter(e)),this.palmHistory.length>6&&this.palmHistory.shift(),this.palmHistory.length>=3&&this.isPalmStable())return"palm"}else this.palmHistory=[];return this.isPointingIndex(e)?"draw":"none"}distance(e,t){const n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)}isFingerExtended(e,t,n,i){const s=e.landmarks,o=s[t],a=s[n],c=this.distance(o,s[me.WRIST]),l=this.distance(a,s[me.WRIST]);return c>l*Kr.FINGER_CURL_THRESHOLD}isThumbExtended(e){const t=e.landmarks,n=t[me.THUMB_TIP],i=t[me.THUMB_IP],s=t[me.INDEX_MCP],o=this.distance(n,s),a=this.distance(n,i);return o>a*1.5}isPointingIndex(e){const t=this.isFingerExtended(e,me.INDEX_TIP,me.INDEX_PIP,me.INDEX_MCP),n=!this.isFingerExtended(e,me.MIDDLE_TIP,me.MIDDLE_PIP,me.MIDDLE_MCP),i=!this.isFingerExtended(e,me.RING_TIP,me.RING_PIP,me.RING_MCP),s=!this.isFingerExtended(e,me.PINKY_TIP,me.PINKY_PIP,me.PINKY_MCP);return t&&n&&i&&s}isOpenPalm(e){const t=this.isFingerExtended(e,me.INDEX_TIP,me.INDEX_PIP,me.INDEX_MCP),n=this.isFingerExtended(e,me.MIDDLE_TIP,me.MIDDLE_PIP,me.MIDDLE_MCP),i=this.isFingerExtended(e,me.RING_TIP,me.RING_PIP,me.RING_MCP),s=this.isFingerExtended(e,me.PINKY_TIP,me.PINKY_PIP,me.PINKY_MCP),o=this.isThumbExtended(e);return t&&n&&i&&s&&o}isFist(e){const t=!this.isFingerExtended(e,me.INDEX_TIP,me.INDEX_PIP,me.INDEX_MCP),n=!this.isFingerExtended(e,me.MIDDLE_TIP,me.MIDDLE_PIP,me.MIDDLE_MCP),i=!this.isFingerExtended(e,me.RING_TIP,me.RING_PIP,me.RING_MCP),s=!this.isFingerExtended(e,me.PINKY_TIP,me.PINKY_PIP,me.PINKY_MCP),o=!this.isThumbExtended(e);return t&&n&&i&&s&&o}isPalmStable(){if(this.palmHistory.length<3)return!1;const e=this.palmHistory.slice(-3),t=e[0];for(const n of e)if(this.distance(n,t)>Kr.PALM_STABILITY_THRESHOLD)return!1;return!0}getIndexTip(e){return e.landmarks[me.INDEX_TIP]}getThumbTip(e){return e.landmarks[me.THUMB_TIP]}getPinchCenter(e){const t=this.getThumbTip(e),n=this.getIndexTip(e);return{x:(t.x+n.x)/2,y:(t.y+n.y)/2}}}const Tm=3;class bm{canvas;ctx;currentStroke=null;completedStrokes=[];livePosition=null;filteredPosition=null;recentPoints=[];constructor(e){this.canvas=e;const t=e.getContext("2d",{alpha:!0});if(!t)throw new Error("Could not get 2D context");this.ctx=t,this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high"}resize(e,t){this.canvas.width=e,this.canvas.height=t,this.ctx.imageSmoothingEnabled=!0,this.ctx.imageSmoothingQuality="high"}startStroke(e,t){this.currentStroke={points:[e],color:t,width:oh.WIDTH,closed:!1},this.livePosition=e,this.filteredPosition=e,this.recentPoints=[e]}addPoint(e){if(!this.currentStroke)return;const t=this.applyJitterFilter(e);this.recentPoints.push(t),this.recentPoints.length>10&&this.recentPoints.shift();const n=this.getSmoothedPosition();this.livePosition=n;const i=this.currentStroke.points[this.currentStroke.points.length-1];this.distance(n,i)>=oh.MIN_POINT_DISTANCE&&this.currentStroke.points.push(n)}applyJitterFilter(e){return this.filteredPosition?this.distance(e,this.filteredPosition)<Tm?this.filteredPosition:(this.filteredPosition=e,e):(this.filteredPosition=e,e)}getSmoothedPosition(){if(this.recentPoints.length===0)return{x:0,y:0};let e=0,t=0;for(const n of this.recentPoints)e+=n.x,t+=n.y;return{x:e/this.recentPoints.length,y:t/this.recentPoints.length}}updateLivePosition(e){const t=this.applyJitterFilter(e);this.recentPoints.push(t),this.recentPoints.length>10&&this.recentPoints.shift(),this.livePosition=this.getSmoothedPosition()}clearLivePosition(){this.livePosition=null,this.filteredPosition=null,this.recentPoints=[]}distance(e,t){const n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)}pauseStroke(){}closeStroke(){if(!this.currentStroke)return null;if(this.calculateStrokeLength()<Kr.MIN_STROKE_LENGTH)return this.discardStroke(),null;if(this.currentStroke.points.length>2){this.currentStroke.closed=!0;const t={...this.currentStroke};return this.completedStrokes.push(t),this.currentStroke=null,t}return this.discardStroke(),null}discardStroke(){this.currentStroke=null}calculateStrokeLength(){if(!this.currentStroke||this.currentStroke.points.length<2)return 0;let e=0;for(let t=1;t<this.currentStroke.points.length;t++)e+=this.distance(this.currentStroke.points[t-1],this.currentStroke.points[t]);return e}getCurrentStroke(){return this.currentStroke}clearAll(){this.currentStroke=null,this.completedStrokes=[],this.clear()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}render(){this.clear();for(const e of this.completedStrokes)this.renderStroke(e,.3);this.currentStroke&&this.currentStroke.points.length>=1&&this.renderStrokeWithLiveExtension(this.currentStroke,1)}renderStrokeWithLiveExtension(e,t){if(e.points.length===0)return;this.ctx.save(),this.ctx.globalAlpha=t,this.ctx.fillStyle=e.color,this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.width,this.ctx.lineCap="round",this.ctx.lineJoin="round";let n=[...e.points];if(this.livePosition&&n.push(this.livePosition),n.length===1){this.ctx.beginPath(),this.ctx.arc(n[0].x,n[0].y,e.width/2,0,Math.PI*2),this.ctx.fill(),this.ctx.restore();return}this.drawSmoothCurve(n),this.ctx.stroke(),this.ctx.restore()}drawSmoothCurve(e){if(!(e.length<2)){if(this.ctx.beginPath(),this.ctx.moveTo(e[0].x,e[0].y),e.length===2){this.ctx.lineTo(e[1].x,e[1].y);return}for(let t=0;t<e.length-1;t++){const n=e[t],i=e[t+1];if(t===0){const s=(n.x+i.x)/2,o=(n.y+i.y)/2;this.ctx.lineTo(s,o)}else if(t===e.length-2)this.ctx.quadraticCurveTo(n.x,n.y,i.x,i.y);else{const s=(n.x+i.x)/2,o=(n.y+i.y)/2;this.ctx.quadraticCurveTo(n.x,n.y,s,o)}}}}renderStroke(e,t){if(e.points.length===0)return;if(this.ctx.save(),this.ctx.globalAlpha=t,this.ctx.fillStyle=e.color,this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.width,this.ctx.lineCap="round",this.ctx.lineJoin="round",e.points.length===1){this.ctx.beginPath(),this.ctx.arc(e.points[0].x,e.points[0].y,e.width/2,0,Math.PI*2),this.ctx.fill(),this.ctx.restore();return}let n=[...e.points];e.closed&&n.push(e.points[0]),this.drawSmoothCurve(n),this.ctx.stroke(),this.ctx.restore()}renderClosingAnimation(e,t){if(e.points.length<2)return;this.clear();const n=1+Math.sin(t*Math.PI)*.1,i=.5+Math.sin(t*Math.PI*2)*.5;this.ctx.save(),this.ctx.globalAlpha=i*.3,this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.width*n*2,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.filter="blur(8px)",this.drawStrokePath(e),this.ctx.stroke(),this.ctx.filter="none",this.ctx.globalAlpha=1,this.ctx.lineWidth=e.width*n,this.drawStrokePath(e),this.ctx.stroke(),this.ctx.restore()}drawStrokePath(e){let t=[...e.points];e.closed&&t.push(e.points[0]),this.drawSmoothCurve(t)}removeCompletedStroke(e){const t=this.completedStrokes.indexOf(e);t>-1&&this.completedStrokes.splice(t,1)}}const Cm=[[me.WRIST,me.THUMB_CMC],[me.THUMB_CMC,me.THUMB_MCP],[me.THUMB_MCP,me.THUMB_IP],[me.THUMB_IP,me.THUMB_TIP],[me.WRIST,me.INDEX_MCP],[me.INDEX_MCP,me.INDEX_PIP],[me.INDEX_PIP,me.INDEX_DIP],[me.INDEX_DIP,me.INDEX_TIP],[me.WRIST,me.MIDDLE_MCP],[me.MIDDLE_MCP,me.MIDDLE_PIP],[me.MIDDLE_PIP,me.MIDDLE_DIP],[me.MIDDLE_DIP,me.MIDDLE_TIP],[me.WRIST,me.RING_MCP],[me.RING_MCP,me.RING_PIP],[me.RING_PIP,me.RING_DIP],[me.RING_DIP,me.RING_TIP],[me.WRIST,me.PINKY_MCP],[me.PINKY_MCP,me.PINKY_PIP],[me.PINKY_PIP,me.PINKY_DIP],[me.PINKY_DIP,me.PINKY_TIP],[me.INDEX_MCP,me.MIDDLE_MCP],[me.MIDDLE_MCP,me.RING_MCP],[me.RING_MCP,me.PINKY_MCP]];class Am{canvas;ctx;cursorPulse=0;constructor(e){this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("Could not get 2D context");this.ctx=t}resize(e,t){this.canvas.width=e,this.canvas.height=t}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}render(e,t,n,i){if(this.clear(),!e)return;this.cursorPulse+=i*Ji.CURSOR_PULSE_SPEED,this.renderSkeleton(e);const s=e.landmarks[me.INDEX_TIP];this.renderCursor(s.x,s.y,n,t)}renderSkeleton(e){this.ctx.save(),this.ctx.globalAlpha=Ji.HAND_SKELETON_OPACITY,this.ctx.strokeStyle="white",this.ctx.lineWidth=Ji.HAND_SKELETON_WIDTH,this.ctx.lineCap="round";for(const[t,n]of Cm){const i=e.landmarks[t],s=e.landmarks[n];this.ctx.beginPath(),this.ctx.moveTo(i.x,i.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke()}this.ctx.fillStyle="white";for(const t of e.landmarks)this.ctx.beginPath(),this.ctx.arc(t.x,t.y,3,0,Math.PI*2),this.ctx.fill();this.ctx.restore()}renderCursor(e,t,n,i){const o=i.current==="draw"||i.current==="none"?Math.sin(this.cursorPulse)*.3+1:1;this.ctx.save();const a=this.ctx.createRadialGradient(e,t,0,e,t,Ji.CURSOR_GLOW_SIZE*o);a.addColorStop(0,n),a.addColorStop(.3,this.hexToRgba(n,.5)),a.addColorStop(1,this.hexToRgba(n,0)),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(e,t,Ji.CURSOR_GLOW_SIZE*o,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle=n,this.ctx.shadowColor=n,this.ctx.shadowBlur=10,this.ctx.beginPath(),this.ctx.arc(e,t,Ji.CURSOR_SIZE/2*o,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(e,t,Ji.CURSOR_SIZE/4,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}hexToRgba(e,t){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!n)return`rgba(255, 255, 255, ${t})`;const i=parseInt(n[1],16),s=parseInt(n[2],16),o=parseInt(n[3],16);return`rgba(${i}, ${s}, ${o}, ${t})`}renderGestureIndicator(e){}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="160",Rm=0,ah=1,Pm=2,lf=1,hf=2,mi=3,Wi=0,yn=1,Jn=2,ki=0,ns=1,ch=2,lh=3,hh=4,wm=5,ar=100,Lm=101,Dm=102,uh=103,fh=104,Im=200,Om=201,Um=202,Nm=203,Sc=204,Mc=205,Fm=206,km=207,Bm=208,zm=209,Gm=210,Hm=211,Vm=212,Wm=213,Xm=214,jm=0,Ym=1,$m=2,Zo=3,qm=4,Km=5,Jm=6,Zm=7,uf=0,Qm=1,e_=2,Bi=0,t_=1,n_=2,i_=3,ff=4,r_=5,s_=6,df=300,cs=301,ls=302,Ec=303,Tc=304,da=306,bc=1e3,Zn=1001,Cc=1002,pn=1003,dh=1004,Pa=1005,Gn=1006,o_=1007,Vs=1008,zi=1009,a_=1010,c_=1011,rl=1012,pf=1013,Di=1014,Ii=1015,Ws=1016,mf=1017,_f=1018,hr=1020,l_=1021,Qn=1023,h_=1024,u_=1025,ur=1026,hs=1027,f_=1028,gf=1029,d_=1030,vf=1031,xf=1033,wa=33776,La=33777,Da=33778,Ia=33779,ph=35840,mh=35841,_h=35842,gh=35843,yf=36196,vh=37492,xh=37496,yh=37808,Sh=37809,Mh=37810,Eh=37811,Th=37812,bh=37813,Ch=37814,Ah=37815,Rh=37816,Ph=37817,wh=37818,Lh=37819,Dh=37820,Ih=37821,Oa=36492,Oh=36494,Uh=36495,p_=36283,Nh=36284,Fh=36285,kh=36286,Sf=3e3,fr=3001,m_=3200,__=3201,Mf=0,g_=1,Vn="",Qt="srgb",Si="srgb-linear",sl="display-p3",pa="display-p3-linear",Qo="linear",Tt="srgb",ea="rec709",ta="p3",Ir=7680,Bh=519,v_=512,x_=513,y_=514,Ef=515,S_=516,M_=517,E_=518,T_=519,zh=35044,Gh="300 es",Ac=1035,vi=2e3,na=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ua=Math.PI/180,Rc=180/Math.PI;function xs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function on(r,e,t){return Math.max(e,Math.min(t,r))}function b_(r,e){return(r%e+e)%e}function Na(r,e,t){return(1-t)*r+t*e}function Hh(r){return(r&r-1)===0&&r!==0}function Pc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,s,o,a,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],y=n[8],v=i[0],g=i[3],_=i[6],C=i[1],M=i[4],T=i[7],O=i[2],D=i[5],w=i[8];return s[0]=o*v+a*C+c*O,s[3]=o*g+a*M+c*D,s[6]=o*_+a*T+c*w,s[1]=l*v+u*C+f*O,s[4]=l*g+u*M+f*D,s[7]=l*_+u*T+f*w,s[2]=d*v+m*C+y*O,s[5]=d*g+m*M+y*D,s[8]=d*_+m*T+y*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,m=l*s-o*c,y=t*f+n*d+i*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=f*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*c)*v,e[5]=(i*s-a*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new ot;function Tf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function C_(){const r=ia("canvas");return r.style.display="block",r}const Vh={};function Ns(r){r in Vh||(Vh[r]=!0,console.warn(r))}const Wh=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xh=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Si]:{transfer:Qo,primaries:ea,toReference:r=>r,fromReference:r=>r},[Qt]:{transfer:Tt,primaries:ea,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pa]:{transfer:Qo,primaries:ta,toReference:r=>r.applyMatrix3(Xh),fromReference:r=>r.applyMatrix3(Wh)},[sl]:{transfer:Tt,primaries:ta,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Xh),fromReference:r=>r.applyMatrix3(Wh).convertLinearToSRGB()}},A_=new Set([Si,pa]),gt={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!A_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=mo[e].toReference,i=mo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return mo[r].primaries},getTransfer:function(r){return r===Vn?Qo:mo[r].transfer}};function is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ka(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Or===void 0&&(Or=ia("canvas")),Or.width=e.width,Or.height=e.height;const n=Or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=is(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R_=0;class Cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=xs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ba(i[o].image)):s.push(Ba(i[o]))}else s=Ba(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ba(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P_=0;class Dn extends vs{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Zn,i=Zn,s=Gn,o=Vs,a=Qn,c=zi,l=Dn.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=xs(),this.name="",this.source=new Cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fr?Qt:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bc:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bc:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?fr:Sf}set encoding(e){Ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fr?Qt:Vn}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=df;Dn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,n=0,i=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],y=c[9],v=c[2],g=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,T=(m+1)/2,O=(_+1)/2,D=(u+d)/4,w=(f+v)/4,z=(y+g)/4;return M>T&&M>O?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=D/n,s=w/n):T>O?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=D/i,s=z/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=w/s,i=z/s),this.set(n,i,s,t),this}let C=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(g-y)/C,this.y=(f-v)/C,this.z=(d-u)/C,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fr?Qt:Vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends w_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Af extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class L_ extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],m=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=y,e[t+3]=v;return}if(f!==v||c!==d||l!==m||u!==y){let g=1-a;const _=c*d+l*m+u*y+f*v,C=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const O=Math.sqrt(M),D=Math.atan2(O,_*C);g=Math.sin(g*D)/O,a=Math.sin(a*D)/O}const T=a*C;if(c=c*g+d*T,l=l*g+m*T,u=u*g+y*T,f=f*g+v*T,g===1-a){const O=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=O,l*=O,u*=O,f*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],d=s[o+1],m=s[o+2],y=s[o+3];return e[t]=a*y+u*f+c*m-l*d,e[t+1]=c*y+u*d+l*f-a*m,e[t+2]=l*y+u*m+a*d-c*f,e[t+3]=u*y-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),d=c(n/2),m=c(i/2),y=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*m*y,this._y=l*m*f-d*u*y,this._z=l*u*y+d*m*f,this._w=l*u*f-d*m*y;break;case"YXZ":this._x=d*u*f+l*m*y,this._y=l*m*f-d*u*y,this._z=l*u*y-d*m*f,this._w=l*u*f+d*m*y;break;case"ZXY":this._x=d*u*f-l*m*y,this._y=l*m*f+d*u*y,this._z=l*u*y+d*m*f,this._w=l*u*f-d*m*y;break;case"ZYX":this._x=d*u*f-l*m*y,this._y=l*m*f+d*u*y,this._z=l*u*y-d*m*f,this._w=l*u*f+d*m*y;break;case"YZX":this._x=d*u*f+l*m*y,this._y=l*m*f+d*u*y,this._z=l*u*y-d*m*f,this._w=l*u*f-d*m*y;break;case"XZY":this._x=d*u*f-l*m*y,this._y=l*m*f-d*u*y,this._z=l*u*y+d*m*f,this._w=l*u*f+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=i+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new H,jh=new no;class io{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),go.subVectors(this.max,As),Ur.subVectors(e.a,As),Nr.subVectors(e.b,As),Fr.subVectors(e.c,As),Ci.subVectors(Nr,Ur),Ai.subVectors(Fr,Nr),Zi.subVectors(Ur,Fr);let t=[0,-Ci.z,Ci.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,Ci.z,0,-Ci.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-Ci.y,Ci.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!Ga(t,Ur,Nr,Fr,go)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Ur,Nr,Fr,go))?!1:(vo.crossVectors(Ci,Ai),t=[vo.x,vo.y,vo.z],Ga(t,Ur,Nr,Fr,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new H,new H,new H,new H,new H,new H,new H,new H],Yn=new H,_o=new io,Ur=new H,Nr=new H,Fr=new H,Ci=new H,Ai=new H,Zi=new H,As=new H,go=new H,vo=new H,Qi=new H;function Ga(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qi.fromArray(r,s);const a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const D_=new io,Rs=new H,Ha=new H;class ol{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):D_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Ha)),this.expandByPoint(Rs.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new H,Va=new H,xo=new H,Ri=new H,Wa=new H,yo=new H,Xa=new H;class Rf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Va.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Va);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=Ri.dot(this.direction),c=-Ri.dot(xo),l=Ri.lengthSq(),u=Math.abs(1-o*o);let f,d,m,y;if(u>0)if(f=o*c-a,d=o*a-c,y=s*u,f>=0)if(d>=-y)if(d<=y){const v=1/u;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-y?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=y?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Va).addScaledVector(xo,d),m}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,s){Wa.subVectors(t,e),yo.subVectors(n,e),Xa.crossVectors(Wa,yo);let o=this.direction.dot(Xa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const c=a*this.direction.dot(yo.crossVectors(Ri,yo));if(c<0)return null;const l=a*this.direction.dot(Wa.cross(Ri));if(l<0||c+l>o)return null;const u=-a*Ri.dot(Xa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,i,s,o,a,c,l,u,f,d,m,y,v,g){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,f,d,m,y,v,g)}set(e,t,n,i,s,o,a,c,l,u,f,d,m,y,v,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=d,_[3]=m,_[7]=y,_[11]=v,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,y=a*u,v=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+y*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=y+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,y=l*u,v=l*f;t[0]=d+v*a,t[4]=y*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-y,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,y=l*u,v=l*f;t[0]=d-v*a,t[4]=-o*f,t[8]=y+m*a,t[1]=m+y*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*f,y=a*u,v=a*f;t[0]=c*u,t[4]=y*l-m,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=m*l-y,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,y=a*c,v=a*l;t[0]=c*u,t[4]=v-d*f,t[8]=y*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+y,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*c,m=o*l,y=a*c,v=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+v,t[5]=o*u,t[9]=m*f-y,t[2]=y*f-m,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,O_)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Pi.crossVectors(n,Cn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Pi.crossVectors(n,Cn)),Pi.normalize(),So.crossVectors(Cn,Pi),i[0]=Pi.x,i[4]=So.x,i[8]=Cn.x,i[1]=Pi.y,i[5]=So.y,i[9]=Cn.y,i[2]=Pi.z,i[6]=So.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],y=n[2],v=n[6],g=n[10],_=n[14],C=n[3],M=n[7],T=n[11],O=n[15],D=i[0],w=i[4],z=i[8],E=i[12],P=i[1],G=i[5],Z=i[9],ne=i[13],F=i[2],V=i[6],j=i[10],ee=i[14],te=i[3],ie=i[7],se=i[11],fe=i[15];return s[0]=o*D+a*P+c*F+l*te,s[4]=o*w+a*G+c*V+l*ie,s[8]=o*z+a*Z+c*j+l*se,s[12]=o*E+a*ne+c*ee+l*fe,s[1]=u*D+f*P+d*F+m*te,s[5]=u*w+f*G+d*V+m*ie,s[9]=u*z+f*Z+d*j+m*se,s[13]=u*E+f*ne+d*ee+m*fe,s[2]=y*D+v*P+g*F+_*te,s[6]=y*w+v*G+g*V+_*ie,s[10]=y*z+v*Z+g*j+_*se,s[14]=y*E+v*ne+g*ee+_*fe,s[3]=C*D+M*P+T*F+O*te,s[7]=C*w+M*G+T*V+O*ie,s[11]=C*z+M*Z+T*j+O*se,s[15]=C*E+M*ne+T*ee+O*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],y=e[3],v=e[7],g=e[11],_=e[15];return y*(+s*c*f-i*l*f-s*a*d+n*l*d+i*a*m-n*c*m)+v*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*u-s*c*u)+g*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*u-n*l*u)+_*(-i*a*u-t*c*f+t*a*d+i*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],y=e[12],v=e[13],g=e[14],_=e[15],C=f*g*l-v*d*l+v*c*m-a*g*m-f*c*_+a*d*_,M=y*d*l-u*g*l-y*c*m+o*g*m+u*c*_-o*d*_,T=u*v*l-y*f*l+y*a*m-o*v*m-u*a*_+o*f*_,O=y*f*c-u*v*c-y*a*d+o*v*d+u*a*g-o*f*g,D=t*C+n*M+i*T+s*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/D;return e[0]=C*w,e[1]=(v*d*s-f*g*s-v*i*m+n*g*m+f*i*_-n*d*_)*w,e[2]=(a*g*s-v*c*s+v*i*l-n*g*l-a*i*_+n*c*_)*w,e[3]=(f*c*s-a*d*s-f*i*l+n*d*l+a*i*m-n*c*m)*w,e[4]=M*w,e[5]=(u*g*s-y*d*s+y*i*m-t*g*m-u*i*_+t*d*_)*w,e[6]=(y*c*s-o*g*s-y*i*l+t*g*l+o*i*_-t*c*_)*w,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*m+t*c*m)*w,e[8]=T*w,e[9]=(y*f*s-u*v*s-y*n*m+t*v*m+u*n*_-t*f*_)*w,e[10]=(o*v*s-y*a*s+y*n*l-t*v*l-o*n*_+t*a*_)*w,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*m-t*a*m)*w,e[12]=O*w,e[13]=(u*v*i-y*f*i+y*n*d-t*v*d-u*n*g+t*f*g)*w,e[14]=(y*a*i-o*v*i-y*n*c+t*v*c+o*n*g-t*a*g)*w,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,m=s*u,y=s*f,v=o*u,g=o*f,_=a*f,C=c*l,M=c*u,T=c*f,O=n.x,D=n.y,w=n.z;return i[0]=(1-(v+_))*O,i[1]=(m+T)*O,i[2]=(y-M)*O,i[3]=0,i[4]=(m-T)*D,i[5]=(1-(d+_))*D,i[6]=(g+C)*D,i[7]=0,i[8]=(y+M)*w,i[9]=(g-C)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=kr.set(i[0],i[1],i[2]).length();const o=kr.set(i[4],i[5],i[6]).length(),a=kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);const l=1/s,u=1/o,f=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=vi){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,y;if(a===vi)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===na)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=vi){const c=this.elements,l=1/(t-e),u=1/(n-i),f=1/(o-s),d=(t+e)*l,m=(n+i)*u;let y,v;if(a===vi)y=(o+s)*f,v=-2*f;else if(a===na)y=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kr=new H,$n=new Ht,I_=new H(0,0,0),O_=new H(1,1,1),Pi=new H,So=new H,Cn=new H,Yh=new Ht,$h=new no;class ro{constructor(e=0,t=0,n=0,i=ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ro.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const qh=new H,Br=new no,fi=new Ht,Mo=new H,Ps=new H,N_=new H,F_=new no,Kh=new H(1,0,0),Jh=new H(0,1,0),Zh=new H(0,0,1),k_={type:"added"},B_={type:"removed"};class cn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new H,t=new ro,n=new no,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ot}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Ps,Mo,this.up):fi.lookAt(Mo,Ps,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Br.setFromRotationMatrix(fi),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(k_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}cn.DEFAULT_UP=new H(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new H,di=new H,ja=new H,pi=new H,zr=new H,Gr=new H,Qh=new H,Ya=new H,$a=new H,qa=new H;let Eo=!1;class Kn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qn.subVectors(i,t),di.subVectors(n,t),ja.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(di),c=qn.dot(ja),l=di.dot(di),u=di.dot(ja),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-a*u)*d,y=(o*u-a*c)*d;return s.set(1-m-y,y,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,t,n,i,s,o,a,c){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),di.subVectors(e,t),qn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),qn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;zr.subVectors(i,n),Gr.subVectors(s,n),Ya.subVectors(e,n);const c=zr.dot(Ya),l=Gr.dot(Ya);if(c<=0&&l<=0)return t.copy(n);$a.subVectors(e,i);const u=zr.dot($a),f=Gr.dot($a);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(zr,o);qa.subVectors(e,s);const m=zr.dot(qa),y=Gr.dot(qa);if(y>=0&&m<=y)return t.copy(s);const v=m*l-c*y;if(v<=0&&l>=0&&y<=0)return a=l/(l-y),t.copy(n).addScaledVector(Gr,a);const g=u*y-m*f;if(g<=0&&f-u>=0&&m-y>=0)return Qh.subVectors(s,i),a=(f-u)/(f-u+(m-y)),t.copy(i).addScaledVector(Qh,a);const _=1/(g+v+d);return o=v*_,a=d*_,t.copy(n).addScaledVector(zr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},To={h:0,s:0,l:0};function Ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=b_(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ka(o,s,e+1/3),this.g=Ka(o,s,e),this.b=Ka(o,s,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return gt.fromWorkingColorSpace(rn.copy(this),e),Math.round(on(rn.r*255,0,255))*65536+Math.round(on(rn.g*255,0,255))*256+Math.round(on(rn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Qt){gt.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(To);const n=Na(wi.h,To.h,t),i=Na(wi.s,To.s,t),s=Na(wi.l,To.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new lt;lt.NAMES=Pf;let z_=0;class so extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=ns,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Mc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wf extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new H,bo=new be;class ei{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zh&&(e.usage=this.usage),e}}class Lf extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Df extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yi extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}let G_=0;const Bn=new Ht,Ja=new cn,Hr=new H,An=new io,ws=new io,$t=new H;class $i extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tf(e)?Df:Lf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(An.min,ws.min),An.expandByPoint($t),$t.addVectors(An.max,ws.max),An.expandByPoint($t)):(An.expandByPoint(ws.min),An.expandByPoint(ws.max))}An.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)$t.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(e,l),$t.add(Hr)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<a;P++)l[P]=new H,u[P]=new H;const f=new H,d=new H,m=new H,y=new be,v=new be,g=new be,_=new H,C=new H;function M(P,G,Z){f.fromArray(i,P*3),d.fromArray(i,G*3),m.fromArray(i,Z*3),y.fromArray(o,P*2),v.fromArray(o,G*2),g.fromArray(o,Z*2),d.sub(f),m.sub(f),v.sub(y),g.sub(y);const ne=1/(v.x*g.y-g.x*v.y);isFinite(ne)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(m,-v.y).multiplyScalar(ne),C.copy(m).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(ne),l[P].add(_),l[G].add(_),l[Z].add(_),u[P].add(C),u[G].add(C),u[Z].add(C))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let P=0,G=T.length;P<G;++P){const Z=T[P],ne=Z.start,F=Z.count;for(let V=ne,j=ne+F;V<j;V+=3)M(n[V+0],n[V+1],n[V+2])}const O=new H,D=new H,w=new H,z=new H;function E(P){w.fromArray(s,P*3),z.copy(w);const G=l[P];O.copy(G),O.sub(w.multiplyScalar(w.dot(G))).normalize(),D.crossVectors(z,G);const ne=D.dot(u[P])<0?-1:1;c[P*4]=O.x,c[P*4+1]=O.y,c[P*4+2]=O.z,c[P*4+3]=ne}for(let P=0,G=T.length;P<G;++P){const Z=T[P],ne=Z.start,F=Z.count;for(let V=ne,j=ne+F;V<j;V+=3)E(n[V+0]),E(n[V+1]),E(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new H,s=new H,o=new H,a=new H,c=new H,l=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let m=0,y=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let _=0;_<u;_++)d[y++]=l[m++]}return new ei(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eu=new Ht,er=new Rf,Co=new ol,tu=new H,Vr=new H,Wr=new H,Xr=new H,Za=new H,Ao=new H,Ro=new be,Po=new be,wo=new be,nu=new H,iu=new H,ru=new H,Lo=new H,Do=new H;class xi extends cn{constructor(e=new $i,t=new wf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ao.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Za.fromBufferAttribute(f,e),o?Ao.addScaledVector(Za,u):Ao.addScaledVector(Za.sub(t),u))}t.add(Ao)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(Co.containsPoint(er.origin)===!1&&(er.intersectSphere(Co,tu)===null||er.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(s).invert(),er.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const g=d[y],_=o[g.materialIndex],C=Math.max(g.start,m.start),M=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let T=C,O=M;T<O;T+=3){const D=a.getX(T),w=a.getX(T+1),z=a.getX(T+2);i=Io(this,_,e,n,l,u,f,D,w,z),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const y=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=y,_=v;g<_;g+=3){const C=a.getX(g),M=a.getX(g+1),T=a.getX(g+2);i=Io(this,o,e,n,l,u,f,C,M,T),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const g=d[y],_=o[g.materialIndex],C=Math.max(g.start,m.start),M=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let T=C,O=M;T<O;T+=3){const D=T,w=T+1,z=T+2;i=Io(this,_,e,n,l,u,f,D,w,z),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const y=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let g=y,_=v;g<_;g+=3){const C=g,M=g+1,T=g+2;i=Io(this,o,e,n,l,u,f,C,M,T),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function H_(r,e,t,n,i,s,o,a){let c;if(e.side===yn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Wi,a),c===null)return null;Do.copy(a),Do.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Do);return l<t.near||l>t.far?null:{distance:l,point:Do.clone(),object:r}}function Io(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Vr),r.getVertexPosition(c,Wr),r.getVertexPosition(l,Xr);const u=H_(r,e,t,n,Vr,Wr,Xr,Lo);if(u){i&&(Ro.fromBufferAttribute(i,a),Po.fromBufferAttribute(i,c),wo.fromBufferAttribute(i,l),u.uv=Kn.getInterpolation(Lo,Vr,Wr,Xr,Ro,Po,wo,new be)),s&&(Ro.fromBufferAttribute(s,a),Po.fromBufferAttribute(s,c),wo.fromBufferAttribute(s,l),u.uv1=Kn.getInterpolation(Lo,Vr,Wr,Xr,Ro,Po,wo,new be),u.uv2=u.uv1),o&&(nu.fromBufferAttribute(o,a),iu.fromBufferAttribute(o,c),ru.fromBufferAttribute(o,l),u.normal=Kn.getInterpolation(Lo,Vr,Wr,Xr,nu,iu,ru,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new H,materialIndex:0};Kn.getNormal(Vr,Wr,Xr,f.normal),u.face=f}return u}class oo extends $i{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,m=0;y("z","y","x",-1,-1,n,t,e,o,s,0),y("z","y","x",1,-1,n,t,-e,o,s,1),y("x","z","y",1,1,e,n,t,i,o,2),y("x","z","y",1,-1,e,n,-t,i,o,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new yi(l,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(f,2));function y(v,g,_,C,M,T,O,D,w,z,E){const P=T/w,G=O/z,Z=T/2,ne=O/2,F=D/2,V=w+1,j=z+1;let ee=0,te=0;const ie=new H;for(let se=0;se<j;se++){const fe=se*G-ne;for(let pe=0;pe<V;pe++){const J=pe*P-Z;ie[v]=J*C,ie[g]=fe*M,ie[_]=F,l.push(ie.x,ie.y,ie.z),ie[v]=0,ie[g]=0,ie[_]=D>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(pe/w),f.push(1-se/z),ee+=1}}for(let se=0;se<z;se++)for(let fe=0;fe<w;fe++){const pe=d+fe+V*se,J=d+fe+V*(se+1),oe=d+(fe+1)+V*(se+1),ve=d+(fe+1)+V*se;c.push(pe,J,ve),c.push(J,oe,ve),te+=6}a.addGroup(m,te,E),m+=te,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(r){const e={};for(let t=0;t<r.length;t++){const n=us(r[t]);for(const i in n)e[i]=n[i]}return e}function V_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function If(r){return r.getRenderTarget()===null?r.outputColorSpace:gt.workingColorSpace}const W_={clone:us,merge:dn};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Of extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends Of{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,Yr=1;class Y_ extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(jr,Yr,e,t);i.layers=this.layers,this.add(i);const s=new Hn(jr,Yr,e,t);s.layers=this.layers,this.add(s);const o=new Hn(jr,Yr,e,t);o.layers=this.layers,this.add(o);const a=new Hn(jr,Yr,e,t);a.layers=this.layers,this.add(a);const c=new Hn(jr,Yr,e,t);c.layers=this.layers,this.add(c);const l=new Hn(jr,Yr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Uf extends Dn{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $_ extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fr?Qt:Vn),this.texture=new Uf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oo(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:ki});s.uniforms.tEquirect.value=t;const o=new xi(i,s),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=Gn),new Y_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Qa=new H,q_=new H,K_=new ot;class rr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K_.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new ol,Oo=new H;class cl{constructor(e=new rr,t=new rr,n=new rr,i=new rr,s=new rr,o=new rr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],f=i[6],d=i[7],m=i[8],y=i[9],v=i[10],g=i[11],_=i[12],C=i[13],M=i[14],T=i[15];if(n[0].setComponents(c-s,d-l,g-m,T-_).normalize(),n[1].setComponents(c+s,d+l,g+m,T+_).normalize(),n[2].setComponents(c+o,d+u,g+y,T+C).normalize(),n[3].setComponents(c-o,d-u,g-y,T-C).normalize(),n[4].setComponents(c-a,d-f,g-v,T-M).normalize(),t===vi)n[5].setComponents(c+a,d+f,g+v,T+M).normalize();else if(t===na)n[5].setComponents(a,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Oo.x=i.normal.x>0?e.max.x:e.min.x,Oo.y=i.normal.y>0?e.max.y:e.min.y,Oo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function J_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,d=l.usage,m=f.byteLength,y=r.createBuffer();r.bindBuffer(u,y),r.bufferData(u,f,d),l.onUploadCallback();let v;if(f instanceof Float32Array)v=r.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=r.SHORT;else if(f instanceof Uint32Array)v=r.UNSIGNED_INT;else if(f instanceof Int32Array)v=r.INT;else if(f instanceof Int8Array)v=r.BYTE;else if(f instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,f){const d=u.array,m=u._updateRange,y=u.updateRanges;if(r.bindBuffer(f,l),m.count===-1&&y.length===0&&r.bufferSubData(f,0,d),y.length!==0){for(let v=0,g=y.length;v<g;v++){const _=y[v];t?r.bufferSubData(f,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count):r.bufferSubData(f,_.start*d.BYTES_PER_ELEMENT,d.subarray(_.start,_.start+_.count))}u.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,i(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}class ll extends $i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,d=t/c,m=[],y=[],v=[],g=[];for(let _=0;_<u;_++){const C=_*d-o;for(let M=0;M<l;M++){const T=M*f-s;y.push(T,-C,0),v.push(0,0,1),g.push(M/a),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let C=0;C<a;C++){const M=C+l*_,T=C+l*(_+1),O=C+1+l*(_+1),D=C+1+l*_;m.push(M,T,D),m.push(T,O,D)}this.setIndex(m),this.setAttribute("position",new yi(y,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q_=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eg=`vec3 transformedNormal = objectNormal;
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
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`
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
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#endif`,Jg=`struct PhysicalMaterial {
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
}`,Zg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,s0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,p0=`#ifdef USE_MORPHTARGETS
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
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
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
}`,rv=`#if DEPTH_PACKING == 3200
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
}`,sv=`#define DISTANCE
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
}`,ov=`#define DISTANCE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`uniform float scale;
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
}`,hv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,fv=`uniform vec3 diffuse;
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
}`,dv=`#define LAMBERT
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define MATCAP
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
}`,_v=`#define MATCAP
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
}`,gv=`#define NORMAL
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
}`,vv=`#define NORMAL
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
}`,xv=`#define PHONG
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
}`,yv=`#define PHONG
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
}`,Sv=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,Ev=`#define TOON
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
}`,Tv=`#define TOON
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
}`,bv=`uniform float size;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Rv=`uniform vec3 color;
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
}`,Pv=`uniform float rotation;
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
}`,wv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Z_,alphahash_pars_fragment:Q_,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:rg,aomap_pars_fragment:sg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:cg,beginnormal_vertex:lg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:fg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:_g,color_fragment:gg,color_pars_fragment:vg,color_pars_vertex:xg,color_vertex:yg,common:Sg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:Eg,displacementmap_pars_vertex:Tg,displacementmap_vertex:bg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Ag,colorspace_fragment:Rg,colorspace_pars_fragment:Pg,envmap_fragment:wg,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Dg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Xg,envmap_vertex:Og,fog_vertex:Ug,fog_pars_vertex:Ng,fog_fragment:Fg,fog_pars_fragment:kg,gradientmap_pars_fragment:Bg,lightmap_fragment:zg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Wg,lights_toon_fragment:jg,lights_toon_pars_fragment:Yg,lights_phong_fragment:$g,lights_phong_pars_fragment:qg,lights_physical_fragment:Kg,lights_physical_pars_fragment:Jg,lights_fragment_begin:Zg,lights_fragment_maps:Qg,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:r0,map_fragment:s0,map_pars_fragment:o0,map_particle_fragment:a0,map_particle_pars_fragment:c0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:h0,morphcolor_vertex:u0,morphnormal_vertex:f0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:_0,normal_pars_fragment:g0,normal_pars_vertex:v0,normal_vertex:x0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:T0,opaque_fragment:b0,packing:C0,premultiplied_alpha_fragment:A0,project_vertex:R0,dithering_fragment:P0,dithering_pars_fragment:w0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:O0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:k0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:G0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:j0,uv_pars_fragment:Y0,uv_pars_vertex:$0,uv_vertex:q0,worldpos_vertex:K0,background_vert:J0,background_frag:Z0,backgroundCube_vert:Q0,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:rv,distanceRGBA_vert:sv,distanceRGBA_frag:ov,equirect_vert:av,equirect_frag:cv,linedashed_vert:lv,linedashed_frag:hv,meshbasic_vert:uv,meshbasic_frag:fv,meshlambert_vert:dv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:_v,meshnormal_vert:gv,meshnormal_frag:vv,meshphong_vert:xv,meshphong_frag:yv,meshphysical_vert:Sv,meshphysical_frag:Mv,meshtoon_vert:Ev,meshtoon_frag:Tv,points_vert:bv,points_frag:Cv,shadow_vert:Av,shadow_frag:Rv,sprite_vert:Pv,sprite_frag:wv},Me={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ii={basic:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new lt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:dn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:dn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new lt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:dn([Me.points,Me.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:dn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:dn([Me.common,Me.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:dn([Me.sprite,Me.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:dn([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:dn([Me.lights,Me.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Uo={r:0,b:0,g:0};function Lv(r,e,t,n,i,s,o){const a=new lt(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function y(g,_){let C=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,c):M&&M.isColor&&(v(M,1),C=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||C)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===da)?(u===void 0&&(u=new xi(new oo(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:us(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=gt.getTransfer(M.colorSpace)!==Tt,(f!==M||d!==M.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,m=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new xi(new ll(2,2),new vr({name:"BackgroundMaterial",uniforms:us(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=gt.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,m=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,_){g.getRGB(Uo,If(r)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),c=_,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:y}}function Dv(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=g(null);let l=c,u=!1;function f(F,V,j,ee,te){let ie=!1;if(o){const se=v(ee,j,V);l!==se&&(l=se,m(l.object)),ie=_(F,ee,j,te),ie&&C(F,ee,j,te)}else{const se=V.wireframe===!0;(l.geometry!==ee.id||l.program!==j.id||l.wireframe!==se)&&(l.geometry=ee.id,l.program=j.id,l.wireframe=se,ie=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,z(F,V,j,ee),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function y(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function v(F,V,j){const ee=j.wireframe===!0;let te=a[F.id];te===void 0&&(te={},a[F.id]=te);let ie=te[V.id];ie===void 0&&(ie={},te[V.id]=ie);let se=ie[ee];return se===void 0&&(se=g(d()),ie[ee]=se),se}function g(F){const V=[],j=[],ee=[];for(let te=0;te<i;te++)V[te]=0,j[te]=0,ee[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:ee,object:F,attributes:{},index:null}}function _(F,V,j,ee){const te=l.attributes,ie=V.attributes;let se=0;const fe=j.getAttributes();for(const pe in fe)if(fe[pe].location>=0){const oe=te[pe];let ve=ie[pe];if(ve===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(ve=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(ve=F.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;se++}return l.attributesNum!==se||l.index!==ee}function C(F,V,j,ee){const te={},ie=V.attributes;let se=0;const fe=j.getAttributes();for(const pe in fe)if(fe[pe].location>=0){let oe=ie[pe];oe===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),te[pe]=ve,se++}l.attributes=te,l.attributesNum=se,l.index=ee}function M(){const F=l.newAttributes;for(let V=0,j=F.length;V<j;V++)F[V]=0}function T(F){O(F,0)}function O(F,V){const j=l.newAttributes,ee=l.enabledAttributes,te=l.attributeDivisors;j[F]=1,ee[F]===0&&(r.enableVertexAttribArray(F),ee[F]=1),te[F]!==V&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,V),te[F]=V)}function D(){const F=l.newAttributes,V=l.enabledAttributes;for(let j=0,ee=V.length;j<ee;j++)V[j]!==F[j]&&(r.disableVertexAttribArray(j),V[j]=0)}function w(F,V,j,ee,te,ie,se){se===!0?r.vertexAttribIPointer(F,V,j,te,ie):r.vertexAttribPointer(F,V,j,ee,te,ie)}function z(F,V,j,ee){if(n.isWebGL2===!1&&(F.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const te=ee.attributes,ie=j.getAttributes(),se=V.defaultAttributeValues;for(const fe in ie){const pe=ie[fe];if(pe.location>=0){let J=te[fe];if(J===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){const oe=J.normalized,ve=J.itemSize,Ue=t.get(J);if(Ue===void 0)continue;const Pe=Ue.buffer,He=Ue.type,Je=Ue.bytesPerElement,Oe=n.isWebGL2===!0&&(He===r.INT||He===r.UNSIGNED_INT||J.gpuType===pf);if(J.isInterleavedBufferAttribute){const Ve=J.data,N=Ve.stride,ce=J.offset;if(Ve.isInstancedInterleavedBuffer){for(let Q=0;Q<pe.locationSize;Q++)O(pe.location+Q,Ve.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Q=0;Q<pe.locationSize;Q++)T(pe.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Q=0;Q<pe.locationSize;Q++)w(pe.location+Q,ve/pe.locationSize,He,oe,N*Je,(ce+ve/pe.locationSize*Q)*Je,Oe)}else{if(J.isInstancedBufferAttribute){for(let Ve=0;Ve<pe.locationSize;Ve++)O(pe.location+Ve,J.meshPerAttribute);F.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ve=0;Ve<pe.locationSize;Ve++)T(pe.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Ve=0;Ve<pe.locationSize;Ve++)w(pe.location+Ve,ve/pe.locationSize,He,oe,ve*Je,ve/pe.locationSize*Ve*Je,Oe)}}else if(se!==void 0){const oe=se[fe];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(pe.location,oe);break;case 3:r.vertexAttrib3fv(pe.location,oe);break;case 4:r.vertexAttrib4fv(pe.location,oe);break;default:r.vertexAttrib1fv(pe.location,oe)}}}}D()}function E(){Z();for(const F in a){const V=a[F];for(const j in V){const ee=V[j];for(const te in ee)y(ee[te].object),delete ee[te];delete V[j]}delete a[F]}}function P(F){if(a[F.id]===void 0)return;const V=a[F.id];for(const j in V){const ee=V[j];for(const te in ee)y(ee[te].object),delete ee[te];delete V[j]}delete a[F.id]}function G(F){for(const V in a){const j=a[V];if(j[F.id]===void 0)continue;const ee=j[F.id];for(const te in ee)y(ee[te].object),delete ee[te];delete j[F.id]}}function Z(){ne(),u=!0,l!==c&&(l=c,m(l.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:ne,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:G,initAttributes:M,enableAttribute:T,disableUnusedAttributes:D}}function Iv(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,f){r.drawArrays(s,u,f),t.update(f,s,1)}function c(u,f,d){if(d===0)return;let m,y;if(i)m=r,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](s,u,f,d),t.update(f,s,d)}function l(u,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<d;y++)this.render(u[y],f[y]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,d);let y=0;for(let v=0;v<d;v++)y+=f[v];t.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ov(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,T=o||e.has("OES_texture_float"),O=M&&T,D=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:O,maxSamples:D}}function Uv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new rr,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,_=r.get(f);if(!i||y===null||y.length===0||s&&!g)s?u(null):l();else{const C=s?0:n,M=C*4;let T=_.clippingState||null;c.value=T,T=u(y,d,M,m);for(let O=0;O!==M;++O)T[O]=t[O];_.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,y){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=c.value,y!==!0||g===null){const _=m+v*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<_)&&(g=new Float32Array(_));for(let M=0,T=m;M!==v;++M,T+=4)o.copy(f[M]).applyMatrix4(C,a),o.normal.toArray(g,T),g[T+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Nv(r){let e=new WeakMap;function t(o,a){return a===Ec?o.mapping=cs:a===Tc&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ec||a===Tc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $_(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ff extends Of{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,su=[.125,.215,.35,.446,.526,.582],cr=20,ec=new Ff,ou=new lt;let tc=null,nc=0,ic=0;const sr=(1+Math.sqrt(5))/2,$r=1/sr,au=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,sr,$r),new H(0,sr,-$r),new H($r,0,sr),new H(-$r,0,sr),new H(sr,$r,0),new H(-sr,$r,0)];class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ws,format:Qn,colorSpace:Si,depthBuffer:!1},i=lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(s)),this._blurMaterial=kv(s,e,t)}return i}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,i){const a=new Hn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ou),u.toneMapping=Bi,u.autoClear=!1;const m=new wf({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),y=new xi(new oo,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(ou),v=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):C===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const M=this._cubeSize;No(i,C*M,_>2?M:0,M,M),u.setRenderTarget(i),v&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===cs||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new xi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;No(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=au[(i-1)%au.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xi(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*cr-1),v=s/y,g=isFinite(s)?1+Math.floor(u*v):cr;g>cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);const _=[];let C=0;for(let w=0;w<cr;++w){const z=w/v,E=Math.exp(-z*z/2);_.push(E),w===0?C+=E:w<g&&(C+=2*E)}for(let w=0;w<_.length;w++)_[w]=_[w]/C;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=y,d.mipInt.value=M-n;const T=this._sizeLods[i],O=3*T*(i>M-Jr?i-M+Jr:0),D=4*(this._cubeSize-T);No(t,O,D,3*T,2*T),c.setRenderTarget(t),c.render(f,ec)}}function Fv(r){const e=[],t=[],n=[];let i=r;const s=r-Jr+1+su.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Jr?c=su[o-r+Jr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,y=6,v=3,g=2,_=1,C=new Float32Array(v*y*m),M=new Float32Array(g*y*m),T=new Float32Array(_*y*m);for(let D=0;D<m;D++){const w=D%3*2/3-1,z=D>2?0:-1,E=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];C.set(E,v*y*D),M.set(d,g*y*D);const P=[D,D,D,D,D,D];T.set(P,_*y*D)}const O=new $i;O.setAttribute("position",new ei(C,v)),O.setAttribute("uv",new ei(M,g)),O.setAttribute("faceIndex",new ei(T,_)),e.push(O),i>Jr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lu(r,e,t){const n=new gr(r,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function kv(r,e,t){const n=new Float32Array(cr),i=new H(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hu(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function uu(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Bv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ec||c===Tc,u=c===cs||c===ls;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new cu(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new cu(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gv(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const v=d.morphAttributes[y];for(let g=0,_=v.length;g<_;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const y in d)e.update(d[y],r.ARRAY_BUFFER);const m=f.morphAttributes;for(const y in m){const v=m[y];for(let g=0,_=v.length;g<_;g++)e.update(v[g],r.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,y=f.attributes.position;let v=0;if(m!==null){const C=m.array;v=m.version;for(let M=0,T=C.length;M<T;M+=3){const O=C[M+0],D=C[M+1],w=C[M+2];d.push(O,D,D,w,w,O)}}else if(y!==void 0){const C=y.array;v=y.version;for(let M=0,T=C.length/3-1;M<T;M+=3){const O=M+0,D=M+1,w=M+2;d.push(O,D,D,w,w,O)}}else return;const g=new(Tf(d)?Df:Lf)(d,1);g.version=v;const _=s.get(f);_&&e.remove(_),s.set(f,g)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Hv(r,e,t,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,y){r.drawElements(s,y,a,m*c),t.update(y,s,1)}function f(m,y,v){if(v===0)return;let g,_;if(i)g=r,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,y,a,m*c,v),t.update(y,s,v)}function d(m,y,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<v;_++)this.render(m[_]/c,y[_]);else{g.multiDrawElementsWEBGL(s,y,0,a,m,0,v);let _=0;for(let C=0;C<v;C++)_+=y[C];t.update(_,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function Vv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wv(r,e){return r[0]-e[0]}function Xv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=y!==void 0?y.length:0;let g=s.get(u);if(g===void 0||g.count!==v){let V=function(){ne.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var m=V;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,O=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let E=0;M===!0&&(E=1),T===!0&&(E=2),O===!0&&(E=3);let P=u.attributes.position.count*E,G=1;P>e.maxTextureSize&&(G=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Z=new Float32Array(P*G*4*v),ne=new Af(Z,P,G,v);ne.type=Ii,ne.needsUpdate=!0;const F=E*4;for(let j=0;j<v;j++){const ee=D[j],te=w[j],ie=z[j],se=P*G*4*j;for(let fe=0;fe<ee.count;fe++){const pe=fe*F;M===!0&&(o.fromBufferAttribute(ee,fe),Z[se+pe+0]=o.x,Z[se+pe+1]=o.y,Z[se+pe+2]=o.z,Z[se+pe+3]=0),T===!0&&(o.fromBufferAttribute(te,fe),Z[se+pe+4]=o.x,Z[se+pe+5]=o.y,Z[se+pe+6]=o.z,Z[se+pe+7]=0),O===!0&&(o.fromBufferAttribute(ie,fe),Z[se+pe+8]=o.x,Z[se+pe+9]=o.y,Z[se+pe+10]=o.z,Z[se+pe+11]=ie.itemSize===4?o.w:1)}}g={count:v,texture:ne,size:new be(P,G)},s.set(u,g),u.addEventListener("dispose",V)}let _=0;for(let M=0;M<d.length;M++)_+=d[M];const C=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",C),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const y=d===void 0?0:d.length;let v=n[u.id];if(v===void 0||v.length!==y){v=[];for(let T=0;T<y;T++)v[T]=[T,0];n[u.id]=v}for(let T=0;T<y;T++){const O=v[T];O[0]=T,O[1]=d[T]}v.sort(Xv);for(let T=0;T<8;T++)T<y&&v[T][1]?(a[T][0]=v[T][0],a[T][1]=v[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(Wv);const g=u.morphAttributes.position,_=u.morphAttributes.normal;let C=0;for(let T=0;T<8;T++){const O=a[T],D=O[0],w=O[1];D!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+T)!==g[D]&&u.setAttribute("morphTarget"+T,g[D]),_&&u.getAttribute("morphNormal"+T)!==_[D]&&u.setAttribute("morphNormal"+T,_[D]),i[T]=w,C+=w):(g&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),_&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),i[T]=0)}const M=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Yv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class kf extends Dn{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:ur,u!==ur&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=Di),n===void 0&&u===hs&&(n=hr),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bf=new Dn,zf=new kf(1,1);zf.compareFunction=Ef;const Gf=new Af,Hf=new L_,Vf=new Uf,fu=[],du=[],pu=new Float32Array(16),mu=new Float32Array(9),_u=new Float32Array(4);function ys(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=fu[i];if(s===void 0&&(s=new Float32Array(i),fu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ma(r,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2fv(this.addr,e),jt(t,e)}}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;r.uniform3fv(this.addr,e),jt(t,e)}}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4fv(this.addr,e),jt(t,e)}}function Zv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;_u.set(n),r.uniformMatrix2fv(this.addr,!1,_u),jt(t,n)}}function Qv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;mu.set(n),r.uniformMatrix3fv(this.addr,!1,mu),jt(t,n)}}function ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;pu.set(n),r.uniformMatrix4fv(this.addr,!1,pu),jt(t,n)}}function tx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2iv(this.addr,e),jt(t,e)}}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3iv(this.addr,e),jt(t,e)}}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4iv(this.addr,e),jt(t,e)}}function sx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2uiv(this.addr,e),jt(t,e)}}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3uiv(this.addr,e),jt(t,e)}}function cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4uiv(this.addr,e),jt(t,e)}}function lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?zf:Bf;t.setTexture2D(e||s,i)}function hx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hf,i)}function ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vf,i)}function fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gf,i)}function dx(r){switch(r){case 5126:return $v;case 35664:return qv;case 35665:return Kv;case 35666:return Jv;case 35674:return Zv;case 35675:return Qv;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return rx;case 5125:return sx;case 36294:return ox;case 36295:return ax;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return fx}}function px(r,e){r.uniform1fv(this.addr,e)}function mx(r,e){const t=ys(e,this.size,2);r.uniform2fv(this.addr,t)}function _x(r,e){const t=ys(e,this.size,3);r.uniform3fv(this.addr,t)}function gx(r,e){const t=ys(e,this.size,4);r.uniform4fv(this.addr,t)}function vx(r,e){const t=ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xx(r,e){const t=ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yx(r,e){const t=ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sx(r,e){r.uniform1iv(this.addr,e)}function Mx(r,e){r.uniform2iv(this.addr,e)}function Ex(r,e){r.uniform3iv(this.addr,e)}function Tx(r,e){r.uniform4iv(this.addr,e)}function bx(r,e){r.uniform1uiv(this.addr,e)}function Cx(r,e){r.uniform2uiv(this.addr,e)}function Ax(r,e){r.uniform3uiv(this.addr,e)}function Rx(r,e){r.uniform4uiv(this.addr,e)}function Px(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bf,s[o])}function wx(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hf,s[o])}function Lx(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vf,s[o])}function Dx(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Xt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gf,s[o])}function Ix(r){switch(r){case 5126:return px;case 35664:return mx;case 35665:return _x;case 35666:return gx;case 35674:return vx;case 35675:return xx;case 35676:return yx;case 5124:case 35670:return Sx;case 35667:case 35671:return Mx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return bx;case 36294:return Cx;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}class Ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dx(t.type)}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ix(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function gu(r,e){r.seq.push(e),r.map[e.id]=e}function Fx(r,e,t){const n=r.name,i=n.length;for(rc.lastIndex=0;;){const s=rc.exec(n),o=rc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){gu(t,l===void 0?new Ox(a,r,e):new Ux(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Nx(a),gu(t,f)),t=f}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Fx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const kx=37297;let Bx=0;function zx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gx(r){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(r);let n;switch(e===t?n="":e===ta&&t===ea?n="LinearDisplayP3ToLinearSRGB":e===ea&&t===ta&&(n="LinearSRGBToLinearDisplayP3"),r){case Si:case pa:return[n,"LinearTransferOETF"];case Qt:case sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function xu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zx(r.getShaderSource(e),o)}else return i}function Hx(r,e){const t=Gx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vx(r,e){let t;switch(e){case t_:t="Linear";break;case n_:t="Reinhard";break;case i_:t="OptimizedCineon";break;case ff:t="ACESFilmic";break;case s_:t="AgX";break;case r_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function Xx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zr).join(`
`)}function jx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Zr(r){return r!==""}function yu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(r){return r.replace($x,Kx)}const qx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kx(r,e){let t=rt[e];if(t===void 0){const n=qx.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}const Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(r){return r.replace(Jx,Zx)}function Zx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Eu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function ey(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cs:case ls:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ty(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function ny(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case uf:e="ENVMAP_BLENDING_MULTIPLY";break;case Qm:e="ENVMAP_BLENDING_MIX";break;case e_:e="ENVMAP_BLENDING_ADD";break}return e}function iy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ry(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qx(t),l=ey(t),u=ty(t),f=ny(t),d=iy(t),m=t.isWebGL2?"":Wx(t),y=Xx(t),v=jx(s),g=i.createProgram();let _,C,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zr).join(`
`),_.length>0&&(_+=`
`),C=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zr).join(`
`),C.length>0&&(C+=`
`)):(_=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),C=[m,Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Hx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),o=wc(o),o=yu(o,t),o=Su(o,t),a=wc(a),a=yu(a,t),a=Su(a,t),o=Mu(o),a=Mu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const T=M+_+o,O=M+C+a,D=vu(i,i.VERTEX_SHADER,T),w=vu(i,i.FRAGMENT_SHADER,O);i.attachShader(g,D),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function z(Z){if(r.debug.checkShaderErrors){const ne=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(D).trim(),V=i.getShaderInfoLog(w).trim();let j=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,D,w);else{const te=xu(i,D,"vertex"),ie=xu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+te+`
`+ie)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(F===""||V==="")&&(ee=!1);ee&&(Z.diagnostics={runnable:j,programLog:ne,vertexShader:{log:F,prefix:_},fragmentShader:{log:V,prefix:C}})}i.deleteShader(D),i.deleteShader(w),E=new Ho(i,g),P=Yx(i,g)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(g,kx)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=w,this}let sy=0;class oy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ay(e),t.set(e,n)),n}}class ay{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}}function cy(r,e,t,n,i,s,o){const a=new al,c=new oy,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function g(E,P,G,Z,ne){const F=Z.fog,V=ne.geometry,j=E.isMeshStandardMaterial?Z.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),te=ee&&ee.mapping===da?ee.image.height:null,ie=y[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,fe=se!==void 0?se.length:0;let pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let J,oe,ve,Ue;if(ie){const Ft=ii[ie];J=Ft.vertexShader,oe=Ft.fragmentShader}else J=E.vertexShader,oe=E.fragmentShader,c.update(E),ve=c.getVertexShaderID(E),Ue=c.getFragmentShaderID(E);const Pe=r.getRenderTarget(),He=ne.isInstancedMesh===!0,Je=ne.isBatchedMesh===!0,Oe=!!E.map,Ve=!!E.matcap,N=!!ee,ce=!!E.aoMap,Q=!!E.lightMap,_e=!!E.bumpMap,re=!!E.normalMap,Ne=!!E.displacementMap,Ce=!!E.emissiveMap,A=!!E.metalnessMap,b=!!E.roughnessMap,X=E.anisotropy>0,le=E.clearcoat>0,he=E.iridescence>0,ae=E.sheen>0,Ie=E.transmission>0,ye=X&&!!E.anisotropyMap,Re=le&&!!E.clearcoatMap,Ge=le&&!!E.clearcoatNormalMap,Qe=le&&!!E.clearcoatRoughnessMap,ue=he&&!!E.iridescenceMap,ct=he&&!!E.iridescenceThicknessMap,nt=ae&&!!E.sheenColorMap,We=ae&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Le=!!E.specularColorMap,tt=!!E.specularIntensityMap,ht=Ie&&!!E.transmissionMap,yt=Ie&&!!E.thicknessMap,qe=!!E.gradientMap,ge=!!E.alphaMap,k=E.alphaTest>0,Te=!!E.alphaHash,Ee=!!E.extensions,Xe=!!V.attributes.uv1,Fe=!!V.attributes.uv2,dt=!!V.attributes.uv3;let pt=Bi;return E.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(pt=r.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:J,fragmentShader:oe,defines:E.defines,customVertexShaderID:ve,customFragmentShaderID:Ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Je,instancing:He,instancingColor:He&&ne.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Pe===null?r.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Si,map:Oe,matcap:Ve,envMap:N,envMapMode:N&&ee.mapping,envMapCubeUVHeight:te,aoMap:ce,lightMap:Q,bumpMap:_e,normalMap:re,displacementMap:d&&Ne,emissiveMap:Ce,normalMapObjectSpace:re&&E.normalMapType===g_,normalMapTangentSpace:re&&E.normalMapType===Mf,metalnessMap:A,roughnessMap:b,anisotropy:X,anisotropyMap:ye,clearcoat:le,clearcoatMap:Re,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Qe,iridescence:he,iridescenceMap:ue,iridescenceThicknessMap:ct,sheen:ae,sheenColorMap:nt,sheenRoughnessMap:We,specularMap:Be,specularColorMap:Le,specularIntensityMap:tt,transmission:Ie,transmissionMap:ht,thicknessMap:yt,gradientMap:qe,opaque:E.transparent===!1&&E.blending===ns,alphaMap:ge,alphaTest:k,alphaHash:Te,combine:E.combine,mapUv:Oe&&v(E.map.channel),aoMapUv:ce&&v(E.aoMap.channel),lightMapUv:Q&&v(E.lightMap.channel),bumpMapUv:_e&&v(E.bumpMap.channel),normalMapUv:re&&v(E.normalMap.channel),displacementMapUv:Ne&&v(E.displacementMap.channel),emissiveMapUv:Ce&&v(E.emissiveMap.channel),metalnessMapUv:A&&v(E.metalnessMap.channel),roughnessMapUv:b&&v(E.roughnessMap.channel),anisotropyMapUv:ye&&v(E.anisotropyMap.channel),clearcoatMapUv:Re&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(E.sheenRoughnessMap.channel),specularMapUv:Be&&v(E.specularMap.channel),specularColorMapUv:Le&&v(E.specularColorMap.channel),specularIntensityMapUv:tt&&v(E.specularIntensityMap.channel),transmissionMapUv:ht&&v(E.transmissionMap.channel),thicknessMapUv:yt&&v(E.thicknessMap.channel),alphaMapUv:ge&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(re||X),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Xe,vertexUv2s:Fe,vertexUv3s:dt,pointsUvs:ne.isPoints===!0&&!!V.attributes.uv&&(Oe||ge),fog:!!F,useFog:E.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:pe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===Tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Jn,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ee&&E.extensions.derivatives===!0,extensionFragDepth:Ee&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function _(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)P.push(G),P.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(C(P,E),M(P,E),P.push(r.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function C(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function M(E,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),E.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){const P=y[E.type];let G;if(P){const Z=ii[P];G=W_.clone(Z.uniforms)}else G=E.uniforms;return G}function O(E,P){let G;for(let Z=0,ne=l.length;Z<ne;Z++){const F=l[Z];if(F.cacheKey===P){G=F,++G.usedTimes;break}}return G===void 0&&(G=new ry(r,P,E,s),l.push(G)),G}function D(E){if(--E.usedTimes===0){const P=l.indexOf(E);l[P]=l[l.length-1],l.pop(),E.destroy()}}function w(E){c.remove(E)}function z(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:T,acquireProgram:O,releaseProgram:D,releaseShaderCache:w,programs:l,dispose:z}}function ly(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Tu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,y,v,g){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=v,_.group=g),e++,_}function a(f,d,m,y,v,g){const _=o(f,d,m,y,v,g);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(f,d,m,y,v,g){const _=o(f,d,m,y,v,g);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,d){t.length>1&&t.sort(f||hy),n.length>1&&n.sort(d||Tu),i.length>1&&i.sort(d||Tu)}function u(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function uy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new bu,r.set(n,[o])):i>=s.length?(o=new bu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function fy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new lt};break;case"SpotLight":t={position:new H,direction:new H,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function dy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let py=0;function my(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _y(r,e){const t=new fy,n=dy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const s=new H,o=new Ht,a=new Ht;function c(u,f){let d=0,m=0,y=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let v=0,g=0,_=0,C=0,M=0,T=0,O=0,D=0,w=0,z=0,E=0;u.sort(my);const P=f===!0?Math.PI:1;for(let Z=0,ne=u.length;Z<ne;Z++){const F=u[Z],V=F.color,j=F.intensity,ee=F.distance,te=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=V.r*j*P,m+=V.g*j*P,y+=V.b*j*P;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(F.sh.coefficients[ie],j);E++}else if(F.isDirectionalLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const se=F.shadow,fe=n.get(F);fe.shadowBias=se.bias,fe.shadowNormalBias=se.normalBias,fe.shadowRadius=se.radius,fe.shadowMapSize=se.mapSize,i.directionalShadow[v]=fe,i.directionalShadowMap[v]=te,i.directionalShadowMatrix[v]=F.shadow.matrix,T++}i.directional[v]=ie,v++}else if(F.isSpotLight){const ie=t.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(V).multiplyScalar(j*P),ie.distance=ee,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,i.spot[_]=ie;const se=F.shadow;if(F.map&&(i.spotLightMap[w]=F.map,w++,se.updateMatrices(F),F.castShadow&&z++),i.spotLightMatrix[_]=se.matrix,F.castShadow){const fe=n.get(F);fe.shadowBias=se.bias,fe.shadowNormalBias=se.normalBias,fe.shadowRadius=se.radius,fe.shadowMapSize=se.mapSize,i.spotShadow[_]=fe,i.spotShadowMap[_]=te,D++}_++}else if(F.isRectAreaLight){const ie=t.get(F);ie.color.copy(V).multiplyScalar(j),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),i.rectArea[C]=ie,C++}else if(F.isPointLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*P),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const se=F.shadow,fe=n.get(F);fe.shadowBias=se.bias,fe.shadowNormalBias=se.normalBias,fe.shadowRadius=se.radius,fe.shadowMapSize=se.mapSize,fe.shadowCameraNear=se.camera.near,fe.shadowCameraFar=se.camera.far,i.pointShadow[g]=fe,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=F.shadow.matrix,O++}i.point[g]=ie,g++}else if(F.isHemisphereLight){const ie=t.get(F);ie.skyColor.copy(F.color).multiplyScalar(j*P),ie.groundColor.copy(F.groundColor).multiplyScalar(j*P),i.hemi[M]=ie,M++}}C>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=y;const G=i.hash;(G.directionalLength!==v||G.pointLength!==g||G.spotLength!==_||G.rectAreaLength!==C||G.hemiLength!==M||G.numDirectionalShadows!==T||G.numPointShadows!==O||G.numSpotShadows!==D||G.numSpotMaps!==w||G.numLightProbes!==E)&&(i.directional.length=v,i.spot.length=_,i.rectArea.length=C,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=O,i.pointShadowMap.length=O,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=O,i.spotLightMatrix.length=D+w-z,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=E,G.directionalLength=v,G.pointLength=g,G.spotLength=_,G.rectAreaLength=C,G.hemiLength=M,G.numDirectionalShadows=T,G.numPointShadows=O,G.numSpotShadows=D,G.numSpotMaps=w,G.numLightProbes=E,i.version=py++)}function l(u,f){let d=0,m=0,y=0,v=0,g=0;const _=f.matrixWorldInverse;for(let C=0,M=u.length;C<M;C++){const T=u[C];if(T.isDirectionalLight){const O=i.directional[d];O.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(_),d++}else if(T.isSpotLight){const O=i.spot[y];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(_),O.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(_),y++}else if(T.isRectAreaLight){const O=i.rectArea[v];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(_),a.identity(),o.copy(T.matrixWorld),o.premultiply(_),a.extractRotation(o),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),O.halfWidth.applyMatrix4(a),O.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const O=i.point[m];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(_),m++}else if(T.isHemisphereLight){const O=i.hemi[g];O.direction.setFromMatrixPosition(T.matrixWorld),O.direction.transformDirection(_),g++}}}return{setup:c,setupView:l,state:i}}function Cu(r,e){const t=new _y(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gy(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Cu(r,e),t.set(s,[c])):o>=a.length?(c=new Cu(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class vy extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xy extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
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
}`;function My(r,e,t){let n=new cl;const i=new be,s=new be,o=new qt,a=new vy({depthPacking:__}),c=new xy,l={},u=t.maxTextureSize,f={[Wi]:yn,[yn]:Wi,[Jn]:Jn},d=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:yy,fragmentShader:Sy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new $i;y.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xi(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let _=this.type;this.render=function(D,w,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const E=r.getRenderTarget(),P=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ki),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ne=_!==mi&&this.type===mi,F=_===mi&&this.type!==mi;for(let V=0,j=D.length;V<j;V++){const ee=D[V],te=ee.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);const ie=te.getFrameExtents();if(i.multiply(ie),s.copy(te.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ie.x),i.x=s.x*ie.x,te.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ie.y),i.y=s.y*ie.y,te.mapSize.y=s.y)),te.map===null||ne===!0||F===!0){const fe=this.type!==mi?{minFilter:pn,magFilter:pn}:{};te.map!==null&&te.map.dispose(),te.map=new gr(i.x,i.y,fe),te.map.texture.name=ee.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();const se=te.getViewportCount();for(let fe=0;fe<se;fe++){const pe=te.getViewport(fe);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),Z.viewport(o),te.updateMatrices(ee,fe),n=te.getFrustum(),T(w,z,te.camera,ee,this.type)}te.isPointLightShadow!==!0&&this.type===mi&&C(te,z),te.needsUpdate=!1}_=this.type,g.needsUpdate=!1,r.setRenderTarget(E,P,G)};function C(D,w){const z=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new gr(i.x,i.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(w,null,z,d,v,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(w,null,z,m,v,null)}function M(D,w,z,E){let P=null;const G=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)P=G;else if(P=z.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=P.uuid,ne=w.uuid;let F=l[Z];F===void 0&&(F={},l[Z]=F);let V=F[ne];V===void 0&&(V=P.clone(),F[ne]=V,w.addEventListener("dispose",O)),P=V}if(P.visible=w.visible,P.wireframe=w.wireframe,E===mi?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:f[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,z.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const Z=r.properties.get(P);Z.light=z}return P}function T(D,w,z,E,P){if(D.visible===!1)return;if(D.layers.test(w.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&P===mi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const ne=e.update(D),F=D.material;if(Array.isArray(F)){const V=ne.groups;for(let j=0,ee=V.length;j<ee;j++){const te=V[j],ie=F[te.materialIndex];if(ie&&ie.visible){const se=M(D,ie,E,P);D.onBeforeShadow(r,D,w,z,ne,se,te),r.renderBufferDirect(z,null,ne,se,D,te),D.onAfterShadow(r,D,w,z,ne,se,te)}}}else if(F.visible){const V=M(D,F,E,P);D.onBeforeShadow(r,D,w,z,ne,V,null),r.renderBufferDirect(z,null,ne,V,D,null),D.onAfterShadow(r,D,w,z,ne,V,null)}}const Z=D.children;for(let ne=0,F=Z.length;ne<F;ne++)T(Z[ne],w,z,E,P)}function O(D){D.target.removeEventListener("dispose",O);for(const z in l){const E=l[z],P=D.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Ey(r,e,t){const n=t.isWebGL2;function i(){let k=!1;const Te=new qt;let Ee=null;const Xe=new qt(0,0,0,0);return{setMask:function(Fe){Ee!==Fe&&!k&&(r.colorMask(Fe,Fe,Fe,Fe),Ee=Fe)},setLocked:function(Fe){k=Fe},setClear:function(Fe,dt,pt,At,Ft){Ft===!0&&(Fe*=At,dt*=At,pt*=At),Te.set(Fe,dt,pt,At),Xe.equals(Te)===!1&&(r.clearColor(Fe,dt,pt,At),Xe.copy(Te))},reset:function(){k=!1,Ee=null,Xe.set(-1,0,0,0)}}}function s(){let k=!1,Te=null,Ee=null,Xe=null;return{setTest:function(Fe){Fe?Je(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(Fe){Te!==Fe&&!k&&(r.depthMask(Fe),Te=Fe)},setFunc:function(Fe){if(Ee!==Fe){switch(Fe){case jm:r.depthFunc(r.NEVER);break;case Ym:r.depthFunc(r.ALWAYS);break;case $m:r.depthFunc(r.LESS);break;case Zo:r.depthFunc(r.LEQUAL);break;case qm:r.depthFunc(r.EQUAL);break;case Km:r.depthFunc(r.GEQUAL);break;case Jm:r.depthFunc(r.GREATER);break;case Zm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=Fe}},setLocked:function(Fe){k=Fe},setClear:function(Fe){Xe!==Fe&&(r.clearDepth(Fe),Xe=Fe)},reset:function(){k=!1,Te=null,Ee=null,Xe=null}}}function o(){let k=!1,Te=null,Ee=null,Xe=null,Fe=null,dt=null,pt=null,At=null,Ft=null;return{setTest:function(mt){k||(mt?Je(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!k&&(r.stencilMask(mt),Te=mt)},setFunc:function(mt,It,Nn){(Ee!==mt||Xe!==It||Fe!==Nn)&&(r.stencilFunc(mt,It,Nn),Ee=mt,Xe=It,Fe=Nn)},setOp:function(mt,It,Nn){(dt!==mt||pt!==It||At!==Nn)&&(r.stencilOp(mt,It,Nn),dt=mt,pt=It,At=Nn)},setLocked:function(mt){k=mt},setClear:function(mt){Ft!==mt&&(r.clearStencil(mt),Ft=mt)},reset:function(){k=!1,Te=null,Ee=null,Xe=null,Fe=null,dt=null,pt=null,At=null,Ft=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let d={},m={},y=new WeakMap,v=[],g=null,_=!1,C=null,M=null,T=null,O=null,D=null,w=null,z=null,E=new lt(0,0,0),P=0,G=!1,Z=null,ne=null,F=null,V=null,j=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ie=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(se)[1]),te=ie>=1):se.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),te=ie>=2);let fe=null,pe={};const J=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),ve=new qt().fromArray(J),Ue=new qt().fromArray(oe);function Pe(k,Te,Ee,Xe){const Fe=new Uint8Array(4),dt=r.createTexture();r.bindTexture(k,dt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<Ee;pt++)n&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(Te,0,r.RGBA,1,1,Xe,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Te+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return dt}const He={};He[r.TEXTURE_2D]=Pe(r.TEXTURE_2D,r.TEXTURE_2D,1),He[r.TEXTURE_CUBE_MAP]=Pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(He[r.TEXTURE_2D_ARRAY]=Pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),He[r.TEXTURE_3D]=Pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Je(r.DEPTH_TEST),c.setFunc(Zo),Ce(!1),A(ah),Je(r.CULL_FACE),re(ki);function Je(k){d[k]!==!0&&(r.enable(k),d[k]=!0)}function Oe(k){d[k]!==!1&&(r.disable(k),d[k]=!1)}function Ve(k,Te){return m[k]!==Te?(r.bindFramebuffer(k,Te),m[k]=Te,n&&(k===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Te),k===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Te)),!0):!1}function N(k,Te){let Ee=v,Xe=!1;if(k)if(Ee=y.get(Te),Ee===void 0&&(Ee=[],y.set(Te,Ee)),k.isWebGLMultipleRenderTargets){const Fe=k.texture;if(Ee.length!==Fe.length||Ee[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,pt=Fe.length;dt<pt;dt++)Ee[dt]=r.COLOR_ATTACHMENT0+dt;Ee.length=Fe.length,Xe=!0}}else Ee[0]!==r.COLOR_ATTACHMENT0&&(Ee[0]=r.COLOR_ATTACHMENT0,Xe=!0);else Ee[0]!==r.BACK&&(Ee[0]=r.BACK,Xe=!0);Xe&&(t.isWebGL2?r.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function ce(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const Q={[ar]:r.FUNC_ADD,[Lm]:r.FUNC_SUBTRACT,[Dm]:r.FUNC_REVERSE_SUBTRACT};if(n)Q[uh]=r.MIN,Q[fh]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(Q[uh]=k.MIN_EXT,Q[fh]=k.MAX_EXT)}const _e={[Im]:r.ZERO,[Om]:r.ONE,[Um]:r.SRC_COLOR,[Sc]:r.SRC_ALPHA,[Gm]:r.SRC_ALPHA_SATURATE,[Bm]:r.DST_COLOR,[Fm]:r.DST_ALPHA,[Nm]:r.ONE_MINUS_SRC_COLOR,[Mc]:r.ONE_MINUS_SRC_ALPHA,[zm]:r.ONE_MINUS_DST_COLOR,[km]:r.ONE_MINUS_DST_ALPHA,[Hm]:r.CONSTANT_COLOR,[Vm]:r.ONE_MINUS_CONSTANT_COLOR,[Wm]:r.CONSTANT_ALPHA,[Xm]:r.ONE_MINUS_CONSTANT_ALPHA};function re(k,Te,Ee,Xe,Fe,dt,pt,At,Ft,mt){if(k===ki){_===!0&&(Oe(r.BLEND),_=!1);return}if(_===!1&&(Je(r.BLEND),_=!0),k!==wm){if(k!==C||mt!==G){if((M!==ar||D!==ar)&&(r.blendEquation(r.FUNC_ADD),M=ar,D=ar),mt)switch(k){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ch:r.blendFunc(r.ONE,r.ONE);break;case lh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ch:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case lh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,O=null,w=null,z=null,E.set(0,0,0),P=0,C=k,G=mt}return}Fe=Fe||Te,dt=dt||Ee,pt=pt||Xe,(Te!==M||Fe!==D)&&(r.blendEquationSeparate(Q[Te],Q[Fe]),M=Te,D=Fe),(Ee!==T||Xe!==O||dt!==w||pt!==z)&&(r.blendFuncSeparate(_e[Ee],_e[Xe],_e[dt],_e[pt]),T=Ee,O=Xe,w=dt,z=pt),(At.equals(E)===!1||Ft!==P)&&(r.blendColor(At.r,At.g,At.b,Ft),E.copy(At),P=Ft),C=k,G=!1}function Ne(k,Te){k.side===Jn?Oe(r.CULL_FACE):Je(r.CULL_FACE);let Ee=k.side===yn;Te&&(Ee=!Ee),Ce(Ee),k.blending===ns&&k.transparent===!1?re(ki):re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);const Xe=k.stencilWrite;l.setTest(Xe),Xe&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),X(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Je(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(k){Z!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),Z=k)}function A(k){k!==Rm?(Je(r.CULL_FACE),k!==ne&&(k===ah?r.cullFace(r.BACK):k===Pm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),ne=k}function b(k){k!==F&&(te&&r.lineWidth(k),F=k)}function X(k,Te,Ee){k?(Je(r.POLYGON_OFFSET_FILL),(V!==Te||j!==Ee)&&(r.polygonOffset(Te,Ee),V=Te,j=Ee)):Oe(r.POLYGON_OFFSET_FILL)}function le(k){k?Je(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function he(k){k===void 0&&(k=r.TEXTURE0+ee-1),fe!==k&&(r.activeTexture(k),fe=k)}function ae(k,Te,Ee){Ee===void 0&&(fe===null?Ee=r.TEXTURE0+ee-1:Ee=fe);let Xe=pe[Ee];Xe===void 0&&(Xe={type:void 0,texture:void 0},pe[Ee]=Xe),(Xe.type!==k||Xe.texture!==Te)&&(fe!==Ee&&(r.activeTexture(Ee),fe=Ee),r.bindTexture(k,Te||He[k]),Xe.type=k,Xe.texture=Te)}function Ie(){const k=pe[fe];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ye(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(k){ve.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ve.copy(k))}function ht(k){Ue.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ue.copy(k))}function yt(k,Te){let Ee=f.get(Te);Ee===void 0&&(Ee=new WeakMap,f.set(Te,Ee));let Xe=Ee.get(k);Xe===void 0&&(Xe=r.getUniformBlockIndex(Te,k.name),Ee.set(k,Xe))}function qe(k,Te){const Xe=f.get(Te).get(k);u.get(Te)!==Xe&&(r.uniformBlockBinding(Te,Xe,k.__bindingPointIndex),u.set(Te,Xe))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},fe=null,pe={},m={},y=new WeakMap,v=[],g=null,_=!1,C=null,M=null,T=null,O=null,D=null,w=null,z=null,E=new lt(0,0,0),P=0,G=!1,Z=null,ne=null,F=null,V=null,j=null,ve.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Je,disable:Oe,bindFramebuffer:Ve,drawBuffers:N,useProgram:ce,setBlending:re,setMaterial:Ne,setFlipSided:Ce,setCullFace:A,setLineWidth:b,setPolygonOffset:X,setScissorTest:le,activeTexture:he,bindTexture:ae,unbindTexture:Ie,compressedTexImage2D:ye,compressedTexImage3D:Re,texImage2D:Be,texImage3D:Le,updateUBOMapping:yt,uniformBlockBinding:qe,texStorage2D:nt,texStorage3D:We,texSubImage2D:Ge,texSubImage3D:Qe,compressedTexSubImage2D:ue,compressedTexSubImage3D:ct,scissor:tt,viewport:ht,reset:ge}}function Ty(r,e,t,n,i,s,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,b){return m?new OffscreenCanvas(A,b):ia("canvas")}function v(A,b,X,le){let he=1;if((A.width>le||A.height>le)&&(he=le/Math.max(A.width,A.height)),he<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=b?Pc:Math.floor,Ie=ae(he*A.width),ye=ae(he*A.height);f===void 0&&(f=y(Ie,ye));const Re=X?y(Ie,ye):f;return Re.width=Ie,Re.height=ye,Re.getContext("2d").drawImage(A,0,0,Ie,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ie+"x"+ye+")."),Re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Hh(A.width)&&Hh(A.height)}function _(A){return a?!1:A.wrapS!==Zn||A.wrapT!==Zn||A.minFilter!==pn&&A.minFilter!==Gn}function C(A,b){return A.generateMipmaps&&b&&A.minFilter!==pn&&A.minFilter!==Gn}function M(A){r.generateMipmap(A)}function T(A,b,X,le,he=!1){if(a===!1)return b;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=b;if(b===r.RED&&(X===r.FLOAT&&(ae=r.R32F),X===r.HALF_FLOAT&&(ae=r.R16F),X===r.UNSIGNED_BYTE&&(ae=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ae=r.R8UI),X===r.UNSIGNED_SHORT&&(ae=r.R16UI),X===r.UNSIGNED_INT&&(ae=r.R32UI),X===r.BYTE&&(ae=r.R8I),X===r.SHORT&&(ae=r.R16I),X===r.INT&&(ae=r.R32I)),b===r.RG&&(X===r.FLOAT&&(ae=r.RG32F),X===r.HALF_FLOAT&&(ae=r.RG16F),X===r.UNSIGNED_BYTE&&(ae=r.RG8)),b===r.RGBA){const Ie=he?Qo:gt.getTransfer(le);X===r.FLOAT&&(ae=r.RGBA32F),X===r.HALF_FLOAT&&(ae=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ae=Ie===Tt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function O(A,b,X){return C(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==pn&&A.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function D(A){return A===pn||A===dh||A===Pa?r.NEAREST:r.LINEAR}function w(A){const b=A.target;b.removeEventListener("dispose",w),E(b),b.isVideoTexture&&u.delete(b)}function z(A){const b=A.target;b.removeEventListener("dispose",z),G(b)}function E(A){const b=n.get(A);if(b.__webglInit===void 0)return;const X=A.source,le=d.get(X);if(le){const he=le[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&P(A),Object.keys(le).length===0&&d.delete(X)}n.remove(A)}function P(A){const b=n.get(A);r.deleteTexture(b.__webglTexture);const X=A.source,le=d.get(X);delete le[b.__cacheKey],o.memory.textures--}function G(A){const b=A.texture,X=n.get(A),le=n.get(b);if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(X.__webglFramebuffer[he]))for(let ae=0;ae<X.__webglFramebuffer[he].length;ae++)r.deleteFramebuffer(X.__webglFramebuffer[he][ae]);else r.deleteFramebuffer(X.__webglFramebuffer[he]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[he])}else{if(Array.isArray(X.__webglFramebuffer))for(let he=0;he<X.__webglFramebuffer.length;he++)r.deleteFramebuffer(X.__webglFramebuffer[he]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let he=0;he<X.__webglColorRenderbuffer.length;he++)X.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[he]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let he=0,ae=b.length;he<ae;he++){const Ie=n.get(b[he]);Ie.__webglTexture&&(r.deleteTexture(Ie.__webglTexture),o.memory.textures--),n.remove(b[he])}n.remove(b),n.remove(A)}let Z=0;function ne(){Z=0}function F(){const A=Z;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),Z+=1,A}function V(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function j(A,b){const X=n.get(A);if(A.isVideoTexture&&Ne(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const le=A.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(X,A,b);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function ee(A,b){const X=n.get(A);if(A.version>0&&X.__version!==A.version){ve(X,A,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function te(A,b){const X=n.get(A);if(A.version>0&&X.__version!==A.version){ve(X,A,b);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function ie(A,b){const X=n.get(A);if(A.version>0&&X.__version!==A.version){Ue(X,A,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}const se={[bc]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[Cc]:r.MIRRORED_REPEAT},fe={[pn]:r.NEAREST,[dh]:r.NEAREST_MIPMAP_NEAREST,[Pa]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[o_]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},pe={[v_]:r.NEVER,[T_]:r.ALWAYS,[x_]:r.LESS,[Ef]:r.LEQUAL,[y_]:r.EQUAL,[E_]:r.GEQUAL,[S_]:r.GREATER,[M_]:r.NOTEQUAL};function J(A,b,X){if(X?(r.texParameteri(A,r.TEXTURE_WRAP_S,se[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,se[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,se[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,fe[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,fe[b.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==Zn||b.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,D(b.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,D(b.minFilter)),b.minFilter!==pn&&b.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===pn||b.minFilter!==Pa&&b.minFilter!==Vs||b.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ws&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function oe(A,b){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const le=b.source;let he=d.get(le);he===void 0&&(he={},d.set(le,he));const ae=V(b);if(ae!==A.__cacheKey){he[ae]===void 0&&(he[ae]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),he[ae].usedTimes++;const Ie=he[A.__cacheKey];Ie!==void 0&&(he[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&P(b)),A.__cacheKey=ae,A.__webglTexture=he[ae].texture}return X}function ve(A,b,X){let le=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=r.TEXTURE_3D);const he=oe(A,b),ae=b.source;t.bindTexture(le,A.__webglTexture,r.TEXTURE0+X);const Ie=n.get(ae);if(ae.version!==Ie.__version||he===!0){t.activeTexture(r.TEXTURE0+X);const ye=gt.getPrimaries(gt.workingColorSpace),Re=b.colorSpace===Vn?null:gt.getPrimaries(b.colorSpace),Ge=b.colorSpace===Vn||ye===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Qe=_(b)&&g(b.image)===!1;let ue=v(b.image,Qe,!1,i.maxTextureSize);ue=Ce(b,ue);const ct=g(ue)||a,nt=s.convert(b.format,b.colorSpace);let We=s.convert(b.type),Be=T(b.internalFormat,nt,We,b.colorSpace,b.isVideoTexture);J(le,b,ct);let Le;const tt=b.mipmaps,ht=a&&b.isVideoTexture!==!0&&Be!==yf,yt=Ie.__version===void 0||he===!0,qe=O(b,ue,ct);if(b.isDepthTexture)Be=r.DEPTH_COMPONENT,a?b.type===Ii?Be=r.DEPTH_COMPONENT32F:b.type===Di?Be=r.DEPTH_COMPONENT24:b.type===hr?Be=r.DEPTH24_STENCIL8:Be=r.DEPTH_COMPONENT16:b.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ur&&Be===r.DEPTH_COMPONENT&&b.type!==rl&&b.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Di,We=s.convert(b.type)),b.format===hs&&Be===r.DEPTH_COMPONENT&&(Be=r.DEPTH_STENCIL,b.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=hr,We=s.convert(b.type))),yt&&(ht?t.texStorage2D(r.TEXTURE_2D,1,Be,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,Be,ue.width,ue.height,0,nt,We,null));else if(b.isDataTexture)if(tt.length>0&&ct){ht&&yt&&t.texStorage2D(r.TEXTURE_2D,qe,Be,tt[0].width,tt[0].height);for(let ge=0,k=tt.length;ge<k;ge++)Le=tt[ge],ht?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Le.width,Le.height,nt,We,Le.data):t.texImage2D(r.TEXTURE_2D,ge,Be,Le.width,Le.height,0,nt,We,Le.data);b.generateMipmaps=!1}else ht?(yt&&t.texStorage2D(r.TEXTURE_2D,qe,Be,ue.width,ue.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue.width,ue.height,nt,We,ue.data)):t.texImage2D(r.TEXTURE_2D,0,Be,ue.width,ue.height,0,nt,We,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ht&&yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,qe,Be,tt[0].width,tt[0].height,ue.depth);for(let ge=0,k=tt.length;ge<k;ge++)Le=tt[ge],b.format!==Qn?nt!==null?ht?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ue.depth,nt,Le.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Be,Le.width,Le.height,ue.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ue.depth,nt,We,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,Be,Le.width,Le.height,ue.depth,0,nt,We,Le.data)}else{ht&&yt&&t.texStorage2D(r.TEXTURE_2D,qe,Be,tt[0].width,tt[0].height);for(let ge=0,k=tt.length;ge<k;ge++)Le=tt[ge],b.format!==Qn?nt!==null?ht?t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Le.width,Le.height,nt,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,Be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Le.width,Le.height,nt,We,Le.data):t.texImage2D(r.TEXTURE_2D,ge,Be,Le.width,Le.height,0,nt,We,Le.data)}else if(b.isDataArrayTexture)ht?(yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,qe,Be,ue.width,ue.height,ue.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,nt,We,ue.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,ue.width,ue.height,ue.depth,0,nt,We,ue.data);else if(b.isData3DTexture)ht?(yt&&t.texStorage3D(r.TEXTURE_3D,qe,Be,ue.width,ue.height,ue.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,nt,We,ue.data)):t.texImage3D(r.TEXTURE_3D,0,Be,ue.width,ue.height,ue.depth,0,nt,We,ue.data);else if(b.isFramebufferTexture){if(yt)if(ht)t.texStorage2D(r.TEXTURE_2D,qe,Be,ue.width,ue.height);else{let ge=ue.width,k=ue.height;for(let Te=0;Te<qe;Te++)t.texImage2D(r.TEXTURE_2D,Te,Be,ge,k,0,nt,We,null),ge>>=1,k>>=1}}else if(tt.length>0&&ct){ht&&yt&&t.texStorage2D(r.TEXTURE_2D,qe,Be,tt[0].width,tt[0].height);for(let ge=0,k=tt.length;ge<k;ge++)Le=tt[ge],ht?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,nt,We,Le):t.texImage2D(r.TEXTURE_2D,ge,Be,nt,We,Le);b.generateMipmaps=!1}else ht?(yt&&t.texStorage2D(r.TEXTURE_2D,qe,Be,ue.width,ue.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,nt,We,ue)):t.texImage2D(r.TEXTURE_2D,0,Be,nt,We,ue);C(b,ct)&&M(le),Ie.__version=ae.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ue(A,b,X){if(b.image.length!==6)return;const le=oe(A,b),he=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+X);const ae=n.get(he);if(he.version!==ae.__version||le===!0){t.activeTexture(r.TEXTURE0+X);const Ie=gt.getPrimaries(gt.workingColorSpace),ye=b.colorSpace===Vn?null:gt.getPrimaries(b.colorSpace),Re=b.colorSpace===Vn||Ie===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ge=b.isCompressedTexture||b.image[0].isCompressedTexture,Qe=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let ge=0;ge<6;ge++)!Ge&&!Qe?ue[ge]=v(b.image[ge],!1,!0,i.maxCubemapSize):ue[ge]=Qe?b.image[ge].image:b.image[ge],ue[ge]=Ce(b,ue[ge]);const ct=ue[0],nt=g(ct)||a,We=s.convert(b.format,b.colorSpace),Be=s.convert(b.type),Le=T(b.internalFormat,We,Be,b.colorSpace),tt=a&&b.isVideoTexture!==!0,ht=ae.__version===void 0||le===!0;let yt=O(b,ct,nt);J(r.TEXTURE_CUBE_MAP,b,nt);let qe;if(Ge){tt&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Le,ct.width,ct.height);for(let ge=0;ge<6;ge++){qe=ue[ge].mipmaps;for(let k=0;k<qe.length;k++){const Te=qe[k];b.format!==Qn?We!==null?tt?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,0,0,Te.width,Te.height,We,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,0,0,Te.width,Te.height,We,Be,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k,Le,Te.width,Te.height,0,We,Be,Te.data)}}}else{qe=b.mipmaps,tt&&ht&&(qe.length>0&&yt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Le,ue[0].width,ue[0].height));for(let ge=0;ge<6;ge++)if(Qe){tt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue[ge].width,ue[ge].height,We,Be,ue[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,ue[ge].width,ue[ge].height,0,We,Be,ue[ge].data);for(let k=0;k<qe.length;k++){const Ee=qe[k].image[ge].image;tt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,0,0,Ee.width,Ee.height,We,Be,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,Le,Ee.width,Ee.height,0,We,Be,Ee.data)}}else{tt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,We,Be,ue[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,We,Be,ue[ge]);for(let k=0;k<qe.length;k++){const Te=qe[k];tt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,0,0,We,Be,Te.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,k+1,Le,We,Be,Te.image[ge])}}}C(b,nt)&&M(r.TEXTURE_CUBE_MAP),ae.__version=he.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Pe(A,b,X,le,he,ae){const Ie=s.convert(X.format,X.colorSpace),ye=s.convert(X.type),Re=T(X.internalFormat,Ie,ye,X.colorSpace);if(!n.get(b).__hasExternalTextures){const Qe=Math.max(1,b.width>>ae),ue=Math.max(1,b.height>>ae);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,ae,Re,Qe,ue,b.depth,0,Ie,ye,null):t.texImage2D(he,ae,Re,Qe,ue,0,Ie,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),re(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,he,n.get(X).__webglTexture,0,_e(b)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,he,n.get(X).__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(A,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let le=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||re(b)){const he=b.depthTexture;he&&he.isDepthTexture&&(he.type===Ii?le=r.DEPTH_COMPONENT32F:he.type===Di&&(le=r.DEPTH_COMPONENT24));const ae=_e(b);re(b)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,le,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,le,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,le,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){const le=_e(b);X&&re(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,b.width,b.height):re(b)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const le=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let he=0;he<le.length;he++){const ae=le[he],Ie=s.convert(ae.format,ae.colorSpace),ye=s.convert(ae.type),Re=T(ae.internalFormat,Ie,ye,ae.colorSpace),Ge=_e(b);X&&re(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Re,b.width,b.height):re(b)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,Re,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Re,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Je(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const le=n.get(b.depthTexture).__webglTexture,he=_e(b);if(b.depthTexture.format===ur)re(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(b.depthTexture.format===hs)re(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Oe(A){const b=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Je(b.__webglFramebuffer,A)}else if(X){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]=r.createRenderbuffer(),He(b.__webglDepthbuffer[le],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),He(b.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(A,b,X){const le=n.get(A);b!==void 0&&Pe(le.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Oe(A)}function N(A){const b=A.texture,X=n.get(A),le=n.get(b);A.addEventListener("dispose",z),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=b.version,o.memory.textures++);const he=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,Ie=g(A)||a;if(he){X.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ye]=[];for(let Re=0;Re<b.mipmaps.length;Re++)X.__webglFramebuffer[ye][Re]=r.createFramebuffer()}else X.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)X.__webglFramebuffer[ye]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ae)if(i.drawBuffers){const ye=A.texture;for(let Re=0,Ge=ye.length;Re<Ge;Re++){const Qe=n.get(ye[Re]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&re(A)===!1){const ye=ae?b:[b];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const Ge=ye[Re];X.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Re]);const Qe=s.convert(Ge.format,Ge.colorSpace),ue=s.convert(Ge.type),ct=T(Ge.internalFormat,Qe,ue,Ge.colorSpace,A.isXRRenderTarget===!0),nt=_e(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,ct,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,X.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),He(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),J(r.TEXTURE_CUBE_MAP,b,Ie);for(let ye=0;ye<6;ye++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)Pe(X.__webglFramebuffer[ye][Re],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Re);else Pe(X.__webglFramebuffer[ye],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);C(b,Ie)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const ye=A.texture;for(let Re=0,Ge=ye.length;Re<Ge;Re++){const Qe=ye[Re],ue=n.get(Qe);t.bindTexture(r.TEXTURE_2D,ue.__webglTexture),J(r.TEXTURE_2D,Qe,Ie),Pe(X.__webglFramebuffer,A,Qe,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),C(Qe,Ie)&&M(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ye=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,le.__webglTexture),J(ye,b,Ie),a&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)Pe(X.__webglFramebuffer[Re],A,b,r.COLOR_ATTACHMENT0,ye,Re);else Pe(X.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,ye,0);C(b,Ie)&&M(ye),t.unbindTexture()}A.depthBuffer&&Oe(A)}function ce(A){const b=g(A)||a,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,he=X.length;le<he;le++){const ae=X[le];if(C(ae,b)){const Ie=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=n.get(ae).__webglTexture;t.bindTexture(Ie,ye),M(Ie),t.unbindTexture()}}}function Q(A){if(a&&A.samples>0&&re(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,le=A.height;let he=r.COLOR_BUFFER_BIT;const ae=[],Ie=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(A),Re=A.isWebGLMultipleRenderTargets===!0;if(Re)for(let Ge=0;Ge<b.length;Ge++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ge=0;Ge<b.length;Ge++){ae.push(r.COLOR_ATTACHMENT0+Ge),A.depthBuffer&&ae.push(Ie);const Qe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Qe===!1&&(A.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),Re&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ge]),Qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ie]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ie])),Re){const ue=n.get(b[Ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,X,le,0,0,X,le,he,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Ge=0;Ge<b.length;Ge++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ge]);const Qe=n.get(b[Ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,Qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function _e(A){return Math.min(i.maxSamples,A.samples)}function re(A){const b=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ne(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ce(A,b){const X=A.colorSpace,le=A.format,he=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ac||X!==Si&&X!==Vn&&(gt.getTransfer(X)===Tt?a===!1?e.has("EXT_sRGB")===!0&&le===Qn?(A.format=Ac,A.minFilter=Gn,A.generateMipmaps=!1):b=bf.sRGBToLinear(b):(le!==Qn||he!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}this.allocateTextureUnit=F,this.resetTextureUnits=ne,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=ie,this.rebindTextures=Ve,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=re}function by(r,e,t){const n=t.isWebGL2;function i(s,o=Vn){let a;const c=gt.getTransfer(o);if(s===zi)return r.UNSIGNED_BYTE;if(s===mf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_f)return r.UNSIGNED_SHORT_5_5_5_1;if(s===a_)return r.BYTE;if(s===c_)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===pf)return r.INT;if(s===Di)return r.UNSIGNED_INT;if(s===Ii)return r.FLOAT;if(s===Ws)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===l_)return r.ALPHA;if(s===Qn)return r.RGBA;if(s===h_)return r.LUMINANCE;if(s===u_)return r.LUMINANCE_ALPHA;if(s===ur)return r.DEPTH_COMPONENT;if(s===hs)return r.DEPTH_STENCIL;if(s===Ac)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===f_)return r.RED;if(s===gf)return r.RED_INTEGER;if(s===d_)return r.RG;if(s===vf)return r.RG_INTEGER;if(s===xf)return r.RGBA_INTEGER;if(s===wa||s===La||s===Da||s===Ia)if(c===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===La)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ph||s===mh||s===_h||s===gh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ph)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vh||s===xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vh)return c===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===bh||s===Ch||s===Ah||s===Rh||s===Ph||s===wh||s===Lh||s===Dh||s===Ih)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Th)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ch)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ih)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oa||s===Oh||s===Uh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Oa)return c===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===p_||s===Nh||s===Fh||s===kh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Nh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Cy extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fo extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ay={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),_=this._getHandJoint(l,v);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,y=.005;l.inputState.pinching&&d>m+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ry extends vs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,y=null;const v=t.getContextAttributes();let g=null,_=null;const C=[],M=[],T=new be;let O=null;const D=new Hn;D.layers.enable(1),D.viewport=new qt;const w=new Hn;w.layers.enable(2),w.viewport=new qt;const z=[D,w],E=new Cy;E.layers.enable(1),E.layers.enable(2);let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=C[J];return oe===void 0&&(oe=new sc,C[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=C[J];return oe===void 0&&(oe=new sc,C[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=C[J];return oe===void 0&&(oe=new sc,C[J]=oe),oe.getHandSpace()};function Z(J){const oe=M.indexOf(J.inputSource);if(oe===-1)return;const ve=C[oe];ve!==void 0&&(ve.update(J.inputSource,J.frame,l||o),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function ne(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",F);for(let J=0;J<C.length;J++){const oe=M[J];oe!==null&&(M[J]=null,C[J].disconnect(oe))}P=null,G=null,e.setRenderTarget(g),m=null,d=null,f=null,i=null,_=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new gr(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,ve=null,Ue=null;v.depth&&(Ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?hs:ur,ve=v.stencil?hr:Di);const Pe={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gr(d.textureWidth,d.textureHeight,{format:Qn,type:zi,depthTexture:new kf(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const He=e.properties.get(_);He.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(J){for(let oe=0;oe<J.removed.length;oe++){const ve=J.removed[oe],Ue=M.indexOf(ve);Ue>=0&&(M[Ue]=null,C[Ue].disconnect(ve))}for(let oe=0;oe<J.added.length;oe++){const ve=J.added[oe];let Ue=M.indexOf(ve);if(Ue===-1){for(let He=0;He<C.length;He++)if(He>=M.length){M.push(ve),Ue=He;break}else if(M[He]===null){M[He]=ve,Ue=He;break}if(Ue===-1)break}const Pe=C[Ue];Pe&&Pe.connect(ve)}}const V=new H,j=new H;function ee(J,oe,ve){V.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);const Ue=V.distanceTo(j),Pe=oe.projectionMatrix.elements,He=ve.projectionMatrix.elements,Je=Pe[14]/(Pe[10]-1),Oe=Pe[14]/(Pe[10]+1),Ve=(Pe[9]+1)/Pe[5],N=(Pe[9]-1)/Pe[5],ce=(Pe[8]-1)/Pe[0],Q=(He[8]+1)/He[0],_e=Je*ce,re=Je*Q,Ne=Ue/(-ce+Q),Ce=Ne*-ce;oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ce),J.translateZ(Ne),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const A=Je+Ne,b=Oe+Ne,X=_e-Ce,le=re+(Ue-Ce),he=Ve*Oe/b*A,ae=N*Oe/b*A;J.projectionMatrix.makePerspective(X,le,he,ae,A,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function te(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;E.near=w.near=D.near=J.near,E.far=w.far=D.far=J.far,(P!==E.near||G!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,G=E.far);const oe=J.parent,ve=E.cameras;te(E,oe);for(let Ue=0;Ue<ve.length;Ue++)te(ve[Ue],oe);ve.length===2?ee(E,D,w):E.projectionMatrix.copy(D.projectionMatrix),ie(J,E,oe)};function ie(J,oe,ve){ve===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)};let se=null;function fe(J,oe){if(u=oe.getViewerPose(l||o),y=oe,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ue=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,Ue=!0);for(let Pe=0;Pe<ve.length;Pe++){const He=ve[Pe];let Je=null;if(m!==null)Je=m.getViewport(He);else{const Ve=f.getViewSubImage(d,He);Je=Ve.viewport,Pe===0&&(e.setRenderTargetTextures(_,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(_))}let Oe=z[Pe];Oe===void 0&&(Oe=new Hn,Oe.layers.enable(Pe),Oe.viewport=new qt,z[Pe]=Oe),Oe.matrix.fromArray(He.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(He.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Je.x,Je.y,Je.width,Je.height),Pe===0&&(E.matrix.copy(Oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ue===!0&&E.cameras.push(Oe)}}for(let ve=0;ve<C.length;ve++){const Ue=M[ve],Pe=C[ve];Ue!==null&&Pe!==void 0&&Pe.update(Ue,oe,l||o)}se&&se(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),y=null}const pe=new Nf;pe.setAnimationLoop(fe),this.setAnimationLoop=function(J){se=J},this.dispose=function(){}}}function Py(r,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,If(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function i(g,_,C,M,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),f(g,_)):_.isMeshPhongMaterial?(s(g,_),u(g,_)):_.isMeshStandardMaterial?(s(g,_),d(g,_),_.isMeshPhysicalMaterial&&m(g,_,T)):_.isMeshMatcapMaterial?(s(g,_),y(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),v(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?c(g,_,C,M):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===yn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===yn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const C=e.get(_).envMap;if(C&&(g.envMap.value=C,g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const M=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*M,t(_.lightMap,g.lightMapTransform)}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,C,M){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*C,g.scale.value=M*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,C){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===yn&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,_){_.matcap&&(g.matcap.value=_.matcap)}function v(g,_){const C=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wy(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,M){const T=M.program;n.uniformBlockBinding(C,T)}function l(C,M){let T=i[C.id];T===void 0&&(y(C),T=u(C),i[C.id]=T,C.addEventListener("dispose",g));const O=M.program;n.updateUBOMapping(C,O);const D=e.render.frame;s[C.id]!==D&&(d(C),s[C.id]=D)}function u(C){const M=f();C.__bindingPointIndex=M;const T=r.createBuffer(),O=C.__size,D=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,O,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,T),T}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const M=i[C.id],T=C.uniforms,O=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let D=0,w=T.length;D<w;D++){const z=Array.isArray(T[D])?T[D]:[T[D]];for(let E=0,P=z.length;E<P;E++){const G=z[E];if(m(G,D,E,O)===!0){const Z=G.__offset,ne=Array.isArray(G.value)?G.value:[G.value];let F=0;for(let V=0;V<ne.length;V++){const j=ne[V],ee=v(j);typeof j=="number"||typeof j=="boolean"?(G.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,Z+F,G.__data)):j.isMatrix3?(G.__data[0]=j.elements[0],G.__data[1]=j.elements[1],G.__data[2]=j.elements[2],G.__data[3]=0,G.__data[4]=j.elements[3],G.__data[5]=j.elements[4],G.__data[6]=j.elements[5],G.__data[7]=0,G.__data[8]=j.elements[6],G.__data[9]=j.elements[7],G.__data[10]=j.elements[8],G.__data[11]=0):(j.toArray(G.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(C,M,T,O){const D=C.value,w=M+"_"+T;if(O[w]===void 0)return typeof D=="number"||typeof D=="boolean"?O[w]=D:O[w]=D.clone(),!0;{const z=O[w];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return O[w]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function y(C){const M=C.uniforms;let T=0;const O=16;for(let w=0,z=M.length;w<z;w++){const E=Array.isArray(M[w])?M[w]:[M[w]];for(let P=0,G=E.length;P<G;P++){const Z=E[P],ne=Array.isArray(Z.value)?Z.value:[Z.value];for(let F=0,V=ne.length;F<V;F++){const j=ne[F],ee=v(j),te=T%O;te!==0&&O-te<ee.boundary&&(T+=O-te),Z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=ee.storage}}}const D=T%O;return D>0&&(T+=O-D),C.__size=T,C.__cache={},this}function v(C){const M={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function g(C){const M=C.target;M.removeEventListener("dispose",g);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(const C in i)r.deleteBuffer(i[C]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}class Wf{constructor(e={}){const{canvas:t=C_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),y=new Int32Array(4);let v=null,g=null;const _=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const M=this;let T=!1,O=0,D=0,w=null,z=-1,E=null;const P=new qt,G=new qt;let Z=null;const ne=new lt(0);let F=0,V=t.width,j=t.height,ee=1,te=null,ie=null;const se=new qt(0,0,V,j),fe=new qt(0,0,V,j);let pe=!1;const J=new cl;let oe=!1,ve=!1,Ue=null;const Pe=new Ht,He=new be,Je=new H,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return w===null?ee:1}let N=n;function ce(R,W){for(let q=0;q<R.length;q++){const K=R[q],$=t.getContext(K,W);if($!==null)return $}return null}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Te,!1),N===null){const W=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&W.shift(),N=ce(W,R),N===null)throw ce(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,_e,re,Ne,Ce,A,b,X,le,he,ae,Ie,ye,Re,Ge,Qe,ue,ct,nt,We,Be,Le,tt,ht;function yt(){Q=new zv(N),_e=new Ov(N,Q,e),Q.init(_e),Le=new by(N,Q,_e),re=new Ey(N,Q,_e),Ne=new Vv(N),Ce=new ly,A=new Ty(N,Q,re,Ce,_e,Le,Ne),b=new Nv(M),X=new Bv(M),le=new J_(N,_e),tt=new Dv(N,Q,le,_e),he=new Gv(N,le,Ne,tt),ae=new Yv(N,he,le,Ne),nt=new jv(N,_e,A),Qe=new Uv(Ce),Ie=new cy(M,b,X,Q,_e,tt,Qe),ye=new Py(M,Ce),Re=new uy,Ge=new gy(Q,_e),ct=new Lv(M,b,X,re,ae,d,c),ue=new My(M,ae,_e),ht=new wy(N,Ne,_e,re),We=new Iv(N,Q,Ne,_e),Be=new Hv(N,Q,Ne,_e),Ne.programs=Ie.programs,M.capabilities=_e,M.extensions=Q,M.properties=Ce,M.renderLists=Re,M.shadowMap=ue,M.state=re,M.info=Ne}yt();const qe=new Ry(M,N);this.xr=qe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(V,j,!1))},this.getSize=function(R){return R.set(V,j)},this.setSize=function(R,W,q=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,j=W,t.width=Math.floor(R*ee),t.height=Math.floor(W*ee),q===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(V*ee,j*ee).floor()},this.setDrawingBufferSize=function(R,W,q){V=R,j=W,ee=q,t.width=Math.floor(R*q),t.height=Math.floor(W*q),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,W,q,K){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,W,q,K),re.viewport(P.copy(se).multiplyScalar(ee).floor())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,W,q,K){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,W,q,K),re.scissor(G.copy(fe).multiplyScalar(ee).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){re.setScissorTest(pe=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(R=!0,W=!0,q=!0){let K=0;if(R){let $=!1;if(w!==null){const Se=w.texture.format;$=Se===xf||Se===vf||Se===gf}if($){const Se=w.texture.type,we=Se===zi||Se===Di||Se===rl||Se===hr||Se===mf||Se===_f,ze=ct.getClearColor(),je=ct.getClearAlpha(),et=ze.r,Ze=ze.g,Ke=ze.b;we?(m[0]=et,m[1]=Ze,m[2]=Ke,m[3]=je,N.clearBufferuiv(N.COLOR,0,m)):(y[0]=et,y[1]=Ze,y[2]=Ke,y[3]=je,N.clearBufferiv(N.COLOR,0,y))}else K|=N.COLOR_BUFFER_BIT}W&&(K|=N.DEPTH_BUFFER_BIT),q&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Re.dispose(),Ge.dispose(),Ce.dispose(),b.dispose(),X.dispose(),ae.dispose(),tt.dispose(),ht.dispose(),Ie.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Ft),qe.removeEventListener("sessionend",mt),Ue&&(Ue.dispose(),Ue=null),It.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Ne.autoReset,W=ue.enabled,q=ue.autoUpdate,K=ue.needsUpdate,$=ue.type;yt(),Ne.autoReset=R,ue.enabled=W,ue.autoUpdate=q,ue.needsUpdate=K,ue.type=$}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const W=R.target;W.removeEventListener("dispose",Ee),Xe(W)}function Xe(R){Fe(R),Ce.remove(R)}function Fe(R){const W=Ce.get(R).programs;W!==void 0&&(W.forEach(function(q){Ie.releaseProgram(q)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,q,K,$,Se){W===null&&(W=Oe);const we=$.isMesh&&$.matrixWorld.determinant()<0,ze=br(R,W,q,K,$);re.setMaterial(K,we);let je=q.index,et=1;if(K.wireframe===!0){if(je=he.getWireframeAttribute(q),je===void 0)return;et=2}const Ze=q.drawRange,Ke=q.attributes.position;let ut=Ze.start*et,tn=(Ze.start+Ze.count)*et;Se!==null&&(ut=Math.max(ut,Se.start*et),tn=Math.min(tn,(Se.start+Se.count)*et)),je!==null?(ut=Math.max(ut,0),tn=Math.min(tn,je.count)):Ke!=null&&(ut=Math.max(ut,0),tn=Math.min(tn,Ke.count));const Rt=tn-ut;if(Rt<0||Rt===1/0)return;tt.setup($,K,ze,q,je);let kt,_t=We;if(je!==null&&(kt=le.get(je),_t=Be,_t.setIndex(kt)),$.isMesh)K.wireframe===!0?(re.setLineWidth(K.wireframeLinewidth*Ve()),_t.setMode(N.LINES)):_t.setMode(N.TRIANGLES);else if($.isLine){let it=K.linewidth;it===void 0&&(it=1),re.setLineWidth(it*Ve()),$.isLineSegments?_t.setMode(N.LINES):$.isLineLoop?_t.setMode(N.LINE_LOOP):_t.setMode(N.LINE_STRIP)}else $.isPoints?_t.setMode(N.POINTS):$.isSprite&&_t.setMode(N.TRIANGLES);if($.isBatchedMesh)_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)_t.renderInstances(ut,Rt,$.count);else if(q.isInstancedBufferGeometry){const it=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ar=Math.min(q.instanceCount,it);_t.renderInstances(ut,Rt,Ar)}else _t.render(ut,Rt)};function dt(R,W,q){R.transparent===!0&&R.side===Jn&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,un(R,W,q),R.side=Wi,R.needsUpdate=!0,un(R,W,q),R.side=Jn):un(R,W,q)}this.compile=function(R,W,q=null){q===null&&(q=R),g=Ge.get(q),g.init(),C.push(g),q.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),R!==q&&R.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(M._useLegacyLights);const K=new Set;return R.traverse(function($){const Se=$.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const ze=Se[we];dt(ze,q,$),K.add(ze)}else dt(Se,q,$),K.add(Se)}),C.pop(),g=null,K},this.compileAsync=function(R,W,q=null){const K=this.compile(R,W,q);return new Promise($=>{function Se(){if(K.forEach(function(we){Ce.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){$(R);return}setTimeout(Se,10)}Q.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let pt=null;function At(R){pt&&pt(R)}function Ft(){It.stop()}function mt(){It.start()}const It=new Nf;It.setAnimationLoop(At),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(R){pt=R,qe.setAnimationLoop(R),R===null?It.stop():It.start()},qe.addEventListener("sessionstart",Ft),qe.addEventListener("sessionend",mt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(W),W=qe.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,W,w),g=Ge.get(R,C.length),g.init(),C.push(g),Pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(Pe),ve=this.localClippingEnabled,oe=Qe.init(this.clippingPlanes,ve),v=Re.get(R,_.length),v.init(),_.push(v),Nn(R,W,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(te,ie),this.info.render.frame++,oe===!0&&Qe.beginShadows();const q=g.state.shadowsArray;if(ue.render(q,R,W),oe===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(v,R),g.setupLights(M._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let $=0,Se=K.length;$<Se;$++){const we=K[$];Fn(v,R,we,we.viewport)}}else Fn(v,R,W);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(M,R,W),tt.resetDefaultState(),z=-1,E=null,C.pop(),C.length>0?g=C[C.length-1]:g=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function Nn(R,W,q,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){K&&Je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pe);const we=ae.update(R),ze=R.material;ze.visible&&v.push(R,we,ze,q,Je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const we=ae.update(R),ze=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Je.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Je.copy(we.boundingSphere.center)),Je.applyMatrix4(R.matrixWorld).applyMatrix4(Pe)),Array.isArray(ze)){const je=we.groups;for(let et=0,Ze=je.length;et<Ze;et++){const Ke=je[et],ut=ze[Ke.materialIndex];ut&&ut.visible&&v.push(R,we,ut,q,Je.z,Ke)}}else ze.visible&&v.push(R,we,ze,q,Je.z,null)}}const Se=R.children;for(let we=0,ze=Se.length;we<ze;we++)Nn(Se[we],W,q,K)}function Fn(R,W,q,K){const $=R.opaque,Se=R.transmissive,we=R.transparent;g.setupLightsView(q),oe===!0&&Qe.setGlobalState(M.clippingPlanes,q),Se.length>0&&ci($,Se,W,q),K&&re.viewport(P.copy(K)),$.length>0&&Ki($,W,q),Se.length>0&&Ki(Se,W,q),we.length>0&&Ki(we,W,q),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function ci(R,W,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Se=_e.isWebGL2;Ue===null&&(Ue=new gr(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Ws:zi,minFilter:Vs,samples:Se?4:0})),M.getDrawingBufferSize(He),Se?Ue.setSize(He.x,He.y):Ue.setSize(Pc(He.x),Pc(He.y));const we=M.getRenderTarget();M.setRenderTarget(Ue),M.getClearColor(ne),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear();const ze=M.toneMapping;M.toneMapping=Bi,Ki(R,q,K),A.updateMultisampleRenderTarget(Ue),A.updateRenderTargetMipmap(Ue);let je=!1;for(let et=0,Ze=W.length;et<Ze;et++){const Ke=W[et],ut=Ke.object,tn=Ke.geometry,Rt=Ke.material,kt=Ke.group;if(Rt.side===Jn&&ut.layers.test(K.layers)){const _t=Rt.side;Rt.side=yn,Rt.needsUpdate=!0,bt(ut,q,K,tn,Rt,kt),Rt.side=_t,Rt.needsUpdate=!0,je=!0}}je===!0&&(A.updateMultisampleRenderTarget(Ue),A.updateRenderTargetMipmap(Ue)),M.setRenderTarget(we),M.setClearColor(ne,F),M.toneMapping=ze}function Ki(R,W,q){const K=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Se=R.length;$<Se;$++){const we=R[$],ze=we.object,je=we.geometry,et=K===null?we.material:K,Ze=we.group;ze.layers.test(q.layers)&&bt(ze,W,q,je,et,Ze)}}function bt(R,W,q,K,$,Se){R.onBeforeRender(M,W,q,K,$,Se),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(M,W,q,K,R,Se),$.transparent===!0&&$.side===Jn&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,M.renderBufferDirect(q,W,K,$,R,Se),$.side=Wi,$.needsUpdate=!0,M.renderBufferDirect(q,W,K,$,R,Se),$.side=Jn):M.renderBufferDirect(q,W,K,$,R,Se),R.onAfterRender(M,W,q,K,$,Se)}function un(R,W,q){W.isScene!==!0&&(W=Oe);const K=Ce.get(R),$=g.state.lights,Se=g.state.shadowsArray,we=$.state.version,ze=Ie.getParameters(R,$.state,Se,W,q),je=Ie.getProgramCacheKey(ze);let et=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?X:b).get(R.envMap||K.environment),et===void 0&&(R.addEventListener("dispose",Ee),et=new Map,K.programs=et);let Ze=et.get(je);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===we)return co(R,ze),Ze}else ze.uniforms=Ie.getUniforms(R),R.onBuild(q,ze,M),R.onBeforeCompile(ze,M),Ze=Ie.acquireProgram(ze,je),et.set(je,Ze),K.uniforms=ze.uniforms;const Ke=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Qe.uniform),co(R,ze),K.needsLights=Cr(R),K.lightsStateVersion=we,K.needsLights&&(Ke.ambientLightColor.value=$.state.ambient,Ke.lightProbe.value=$.state.probe,Ke.directionalLights.value=$.state.directional,Ke.directionalLightShadows.value=$.state.directionalShadow,Ke.spotLights.value=$.state.spot,Ke.spotLightShadows.value=$.state.spotShadow,Ke.rectAreaLights.value=$.state.rectArea,Ke.ltc_1.value=$.state.rectAreaLTC1,Ke.ltc_2.value=$.state.rectAreaLTC2,Ke.pointLights.value=$.state.point,Ke.pointLightShadows.value=$.state.pointShadow,Ke.hemisphereLights.value=$.state.hemi,Ke.directionalShadowMap.value=$.state.directionalShadowMap,Ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ke.spotShadowMap.value=$.state.spotShadowMap,Ke.spotLightMatrix.value=$.state.spotLightMatrix,Ke.spotLightMap.value=$.state.spotLightMap,Ke.pointShadowMap.value=$.state.pointShadowMap,Ke.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function Tr(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ho.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function co(R,W){const q=Ce.get(R);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function br(R,W,q,K,$){W.isScene!==!0&&(W=Oe),A.resetTextureUnits();const Se=W.fog,we=K.isMeshStandardMaterial?W.environment:null,ze=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Si,je=(K.isMeshStandardMaterial?X:b).get(K.envMap||we),et=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ke=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,tn=!!q.morphAttributes.color;let Rt=Bi;K.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Rt=M.toneMapping);const kt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=kt!==void 0?kt.length:0,it=Ce.get(K),Ar=g.state.lights;if(oe===!0&&(ve===!0||R!==E)){const fn=R===E&&K.id===z;Qe.setState(K,R,fn)}let St=!1;K.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ar.state.version||it.outputColorSpace!==ze||$.isBatchedMesh&&it.batching===!1||!$.isBatchedMesh&&it.batching===!0||$.isInstancedMesh&&it.instancing===!1||!$.isInstancedMesh&&it.instancing===!0||$.isSkinnedMesh&&it.skinning===!1||!$.isSkinnedMesh&&it.skinning===!0||$.isInstancedMesh&&it.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&it.instancingColor===!1&&$.instanceColor!==null||it.envMap!==je||K.fog===!0&&it.fog!==Se||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Qe.numPlanes||it.numIntersection!==Qe.numIntersection)||it.vertexAlphas!==et||it.vertexTangents!==Ze||it.morphTargets!==Ke||it.morphNormals!==ut||it.morphColors!==tn||it.toneMapping!==Rt||_e.isWebGL2===!0&&it.morphTargetsCount!==_t)&&(St=!0):(St=!0,it.__version=K.version);let li=it.currentProgram;St===!0&&(li=un(K,W,$));let lo=!1,Ti=!1,Rr=!1;const Vt=li.getUniforms(),ti=it.uniforms;if(re.useProgram(li.program)&&(lo=!0,Ti=!0,Rr=!0),K.id!==z&&(z=K.id,Ti=!0),lo||E!==R){Vt.setValue(N,"projectionMatrix",R.projectionMatrix),Vt.setValue(N,"viewMatrix",R.matrixWorldInverse);const fn=Vt.map.cameraPosition;fn!==void 0&&fn.setValue(N,Je.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&Vt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Vt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Ti=!0,Rr=!0)}if($.isSkinnedMesh){Vt.setOptional(N,$,"bindMatrix"),Vt.setOptional(N,$,"bindMatrixInverse");const fn=$.skeleton;fn&&(_e.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Vt.setValue(N,"boneTexture",fn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Vt.setOptional(N,$,"batchingTexture"),Vt.setValue(N,"batchingTexture",$._matricesTexture,A));const Yt=q.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0&&_e.isWebGL2===!0)&&nt.update($,q,li),(Ti||it.receiveShadow!==$.receiveShadow)&&(it.receiveShadow=$.receiveShadow,Vt.setValue(N,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ti.envMap.value=je,ti.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Ti&&(Vt.setValue(N,"toneMappingExposure",M.toneMappingExposure),it.needsLights&&Ss(ti,Rr),Se&&K.fog===!0&&ye.refreshFogUniforms(ti,Se),ye.refreshMaterialUniforms(ti,K,ee,j,Ue),Ho.upload(N,Tr(it),ti,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ho.upload(N,Tr(it),ti,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Vt.setValue(N,"center",$.center),Vt.setValue(N,"modelViewMatrix",$.modelViewMatrix),Vt.setValue(N,"normalMatrix",$.normalMatrix),Vt.setValue(N,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const fn=K.uniformsGroups;for(let Pr=0,wr=fn.length;Pr<wr;Pr++)if(_e.isWebGL2){const Ms=fn[Pr];ht.update(Ms,li),ht.bind(Ms,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Ss(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Cr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,W,q){Ce.get(R.texture).__webglTexture=W,Ce.get(R.depthTexture).__webglTexture=q;const K=Ce.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const q=Ce.get(R);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,q=0){w=R,O=W,D=q;let K=!0,$=null,Se=!1,we=!1;if(R){const je=Ce.get(R);je.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(N.FRAMEBUFFER,null),K=!1):je.__webglFramebuffer===void 0?A.setupRenderTarget(R):je.__hasExternalTextures&&A.rebindTextures(R,Ce.get(R.texture).__webglTexture,Ce.get(R.depthTexture).__webglTexture);const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(we=!0);const Ze=Ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?$=Ze[W][q]:$=Ze[W],Se=!0):_e.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?$=Ce.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?$=Ze[q]:$=Ze,P.copy(R.viewport),G.copy(R.scissor),Z=R.scissorTest}else P.copy(se).multiplyScalar(ee).floor(),G.copy(fe).multiplyScalar(ee).floor(),Z=pe;if(re.bindFramebuffer(N.FRAMEBUFFER,$)&&_e.drawBuffers&&K&&re.drawBuffers(R,$),re.viewport(P),re.scissor(G),re.setScissorTest(Z),Se){const je=Ce.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,je.__webglTexture,q)}else if(we){const je=Ce.get(R.texture),et=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,je.__webglTexture,q||0,et)}z=-1},this.readRenderTargetPixels=function(R,W,q,K,$,Se,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze){re.bindFramebuffer(N.FRAMEBUFFER,ze);try{const je=R.texture,et=je.format,Ze=je.type;if(et!==Qn&&Le.convert(et)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ze===Ws&&(Q.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ze!==zi&&Le.convert(Ze)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Ii&&(_e.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&q>=0&&q<=R.height-$&&N.readPixels(W,q,K,$,Le.convert(et),Le.convert(Ze),Se)}finally{const je=w!==null?Ce.get(w).__webglFramebuffer:null;re.bindFramebuffer(N.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(R,W,q=0){const K=Math.pow(2,-q),$=Math.floor(W.image.width*K),Se=Math.floor(W.image.height*K);A.setTexture2D(W,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,R.x,R.y,$,Se),re.unbindTexture()},this.copyTextureToTexture=function(R,W,q,K=0){const $=W.image.width,Se=W.image.height,we=Le.convert(q.format),ze=Le.convert(q.type);A.setTexture2D(q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment),W.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,R.x,R.y,$,Se,we,ze,W.image.data):W.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,we,W.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,K,R.x,R.y,we,ze,W.image),K===0&&q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(R,W,q,K,$=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,ze=R.max.z-R.min.z+1,je=Le.convert(K.format),et=Le.convert(K.type);let Ze;if(K.isData3DTexture)A.setTexture3D(K,0),Ze=N.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),Ze=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);const Ke=N.getParameter(N.UNPACK_ROW_LENGTH),ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),Rt=N.getParameter(N.UNPACK_SKIP_ROWS),kt=N.getParameter(N.UNPACK_SKIP_IMAGES),_t=q.isCompressedTexture?q.mipmaps[$]:q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,R.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,R.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(Ze,$,W.x,W.y,W.z,Se,we,ze,je,et,_t.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ze,$,W.x,W.y,W.z,Se,we,ze,je,_t.data)):N.texSubImage3D(Ze,$,W.x,W.y,W.z,Se,we,ze,je,et,_t),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ke),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt),$===0&&K.generateMipmaps&&N.generateMipmap(Ze),re.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),re.unbindTexture()},this.resetState=function(){O=0,D=0,w=null,re.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sl?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?fr:Sf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fr?Qt:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ly extends Wf{}Ly.prototype.isWebGL1Renderer=!0;class Dy extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,m=(o-u)/d;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new be:new H);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new H,i=[],s=[],o=[],a=new H,c=new Ht;for(let m=0;m<=e;m++){const y=m/e;i[m]=this.getTangentAt(y,new H)}s[0]=new H,o[0]=new H;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(on(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,y))}o[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(on(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let y=1;y<=e;y++)s[y].applyMatrix4(c.makeRotationAxis(i[y],m*y)),o[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ul extends ai{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new be,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*u-m*f+this.aX,l=d*f+m*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Iy extends ul{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fl(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,m*=u,i(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const ko=new H,oc=new fl,ac=new fl,cc=new fl;class Xf extends ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(ko.subVectors(i[0],i[1]).add(i[0]),l=ko);const f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ko.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ko),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let y=Math.pow(l.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(u),m);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),oc.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,y,v,g),ac.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,y,v,g),cc.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,y,v,g)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),ac.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),cc.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return n.set(oc.calc(c),ac.calc(c),cc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Au(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function Oy(r,e){const t=1-r;return t*t*e}function Uy(r,e){return 2*(1-r)*r*e}function Ny(r,e){return r*r*e}function Fs(r,e,t,n){return Oy(r,e)+Uy(r,t)+Ny(r,n)}function Fy(r,e){const t=1-r;return t*t*t*e}function ky(r,e){const t=1-r;return 3*t*t*r*e}function By(r,e){return 3*(1-r)*r*r*e}function zy(r,e){return r*r*r*e}function ks(r,e,t,n,i){return Fy(r,e)+ky(r,t)+By(r,n)+zy(r,i)}class jf extends ai{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ks(e,i.x,s.x,o.x,a.x),ks(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gy extends ai{constructor(e=new H,t=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new H){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ks(e,i.x,s.x,o.x,a.x),ks(e,i.y,s.y,o.y,a.y),ks(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yf extends ai{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hy extends ai{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $f extends ai{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Fs(e,i.x,s.x,o.x),Fs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vy extends ai{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Fs(e,i.x,s.x,o.x),Fs(e,i.y,s.y,o.y),Fs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Au(a,c.x,l.x,u.x,f.x),Au(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new be().fromArray(i))}return this}}var Lc=Object.freeze({__proto__:null,ArcCurve:Iy,CatmullRomCurve3:Xf,CubicBezierCurve:jf,CubicBezierCurve3:Gy,EllipseCurve:ul,LineCurve:Yf,LineCurve3:Hy,QuadraticBezierCurve:$f,QuadraticBezierCurve3:Vy,SplineCurve:qf});class Wy extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Lc[i.type]().fromJSON(i))}return this}}class Ru extends Wy{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yf(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new $f(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new jf(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new ul(e,t,n,i,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Dc extends Ru{constructor(e){super(e),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ru().fromJSON(i))}return this}}const Xy={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Kf(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,f,d,m;if(n&&(s=Ky(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(let y=t;y<i;y+=t)f=r[y],d=r[y+1],f<a&&(a=f),d<c&&(c=d),f>l&&(l=f),d>u&&(u=d);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return Xs(s,o,t,a,c,m,0),o}};function Kf(r,e,t,n,i){let s,o;if(i===aS(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Pu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Pu(s,r[s],r[s+1],o);return o&&_a(o,o.next)&&(Ys(o),o=o.next),o}function xr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(_a(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Ys(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xs(r,e,t,n,i,s,o){if(!r)return;!o&&s&&tS(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Yy(r,n,i,s):jy(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Ys(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=$y(xr(r),e,t),Xs(r,e,t,n,i,s,2)):o===2&&qy(r,e,t,n,i,s):Xs(xr(r),e,t,n,i,s,1);break}}}function jy(r){const e=r.prev,t=r,n=r.next;if(Lt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,f=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l;let y=n.next;for(;y!==e;){if(y.x>=u&&y.x<=d&&y.y>=f&&y.y<=m&&Qr(i,a,s,c,o,l,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Yy(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Lt(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,f=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,y=u<f?u<d?u:d:f<d?f:d,v=a>c?a>l?a:l:c>l?c:l,g=u>f?u>d?u:d:f>d?f:d,_=Ic(m,y,e,t,n),C=Ic(v,g,e,t,n);let M=r.prevZ,T=r.nextZ;for(;M&&M.z>=_&&T&&T.z<=C;){if(M.x>=m&&M.x<=v&&M.y>=y&&M.y<=g&&M!==i&&M!==o&&Qr(a,u,c,f,l,d,M.x,M.y)&&Lt(M.prev,M,M.next)>=0||(M=M.prevZ,T.x>=m&&T.x<=v&&T.y>=y&&T.y<=g&&T!==i&&T!==o&&Qr(a,u,c,f,l,d,T.x,T.y)&&Lt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;M&&M.z>=_;){if(M.x>=m&&M.x<=v&&M.y>=y&&M.y<=g&&M!==i&&M!==o&&Qr(a,u,c,f,l,d,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;T&&T.z<=C;){if(T.x>=m&&T.x<=v&&T.y>=y&&T.y<=g&&T!==i&&T!==o&&Qr(a,u,c,f,l,d,T.x,T.y)&&Lt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function $y(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!_a(i,s)&&Jf(i,n,n.next,s)&&js(i,s)&&js(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ys(n),Ys(n.next),n=r=s),n=n.next}while(n!==r);return xr(n)}function qy(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rS(o,a)){let c=Zf(o,a);o=xr(o,o.next),c=xr(c,c.next),Xs(o,e,t,n,i,s,0),Xs(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ky(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=Kf(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(iS(l));for(i.sort(Jy),s=0;s<i.length;s++)t=Zy(i[s],t);return t}function Jy(r,e){return r.x-e.x}function Zy(r,e){const t=Qy(r,e);if(!t)return e;const n=Zf(t,r);return xr(n,n.next),xr(t,t.next)}function Qy(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,f;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Qr(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),js(t,r)&&(f<u||f===u&&(t.x>i.x||t.x===i.x&&eS(i,t)))&&(i=t,u=f)),t=t.next;while(t!==a);return i}function eS(r,e){return Lt(r.prev,r,e.prev)<0&&Lt(e.next,r,r.next)<0}function tS(r,e,t,n){let i=r;do i.z===0&&(i.z=Ic(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,nS(i)}function nS(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function Ic(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function iS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Qr(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function rS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!sS(r,e)&&(js(r,e)&&js(e,r)&&oS(r,e)&&(Lt(r.prev,r,e.prev)||Lt(r,e.prev,e))||_a(r,e)&&Lt(r.prev,r,r.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function _a(r,e){return r.x===e.x&&r.y===e.y}function Jf(r,e,t,n){const i=zo(Lt(r,e,t)),s=zo(Lt(r,e,n)),o=zo(Lt(t,n,r)),a=zo(Lt(t,n,e));return!!(i!==s&&o!==a||i===0&&Bo(r,t,e)||s===0&&Bo(r,n,e)||o===0&&Bo(t,r,n)||a===0&&Bo(t,e,n))}function Bo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function zo(r){return r>0?1:r<0?-1:0}function sS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Jf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function js(r,e){return Lt(r.prev,r,r.next)<0?Lt(r,e,r.next)>=0&&Lt(r,r.prev,e)>=0:Lt(r,e,r.prev)<0||Lt(r,r.next,e)<0}function oS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Zf(r,e){const t=new Oc(r.i,r.x,r.y),n=new Oc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Pu(r,e,t,n){const i=new Oc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ys(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Oc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aS(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Bs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Bs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];wu(e),Lu(n,e);let o=e.length;t.forEach(wu);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Lu(n,t[c]);const a=Xy.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function wu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Lu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class dl extends $i{constructor(e=new Dc([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new yi(i,3)),this.setAttribute("uv",new yi(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:cS;let M,T=!1,O,D,w,z;_&&(M=_.getSpacedPoints(u),T=!0,d=!1,O=_.computeFrenetFrames(u,!1),D=new H,w=new H,z=new H),d||(g=0,m=0,y=0,v=0);const E=a.extractPoints(l);let P=E.shape;const G=E.holes;if(!Bs.isClockWise(P)){P=P.reverse();for(let N=0,ce=G.length;N<ce;N++){const Q=G[N];Bs.isClockWise(Q)&&(G[N]=Q.reverse())}}const ne=Bs.triangulateShape(P,G),F=P;for(let N=0,ce=G.length;N<ce;N++){const Q=G[N];P=P.concat(Q)}function V(N,ce,Q){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ce,Q)}const j=P.length,ee=ne.length;function te(N,ce,Q){let _e,re,Ne;const Ce=N.x-ce.x,A=N.y-ce.y,b=Q.x-N.x,X=Q.y-N.y,le=Ce*Ce+A*A,he=Ce*X-A*b;if(Math.abs(he)>Number.EPSILON){const ae=Math.sqrt(le),Ie=Math.sqrt(b*b+X*X),ye=ce.x-A/ae,Re=ce.y+Ce/ae,Ge=Q.x-X/Ie,Qe=Q.y+b/Ie,ue=((Ge-ye)*X-(Qe-Re)*b)/(Ce*X-A*b);_e=ye+Ce*ue-N.x,re=Re+A*ue-N.y;const ct=_e*_e+re*re;if(ct<=2)return new be(_e,re);Ne=Math.sqrt(ct/2)}else{let ae=!1;Ce>Number.EPSILON?b>Number.EPSILON&&(ae=!0):Ce<-Number.EPSILON?b<-Number.EPSILON&&(ae=!0):Math.sign(A)===Math.sign(X)&&(ae=!0),ae?(_e=-A,re=Ce,Ne=Math.sqrt(le)):(_e=Ce,re=A,Ne=Math.sqrt(le/2))}return new be(_e/Ne,re/Ne)}const ie=[];for(let N=0,ce=F.length,Q=ce-1,_e=N+1;N<ce;N++,Q++,_e++)Q===ce&&(Q=0),_e===ce&&(_e=0),ie[N]=te(F[N],F[Q],F[_e]);const se=[];let fe,pe=ie.concat();for(let N=0,ce=G.length;N<ce;N++){const Q=G[N];fe=[];for(let _e=0,re=Q.length,Ne=re-1,Ce=_e+1;_e<re;_e++,Ne++,Ce++)Ne===re&&(Ne=0),Ce===re&&(Ce=0),fe[_e]=te(Q[_e],Q[Ne],Q[Ce]);se.push(fe),pe=pe.concat(fe)}for(let N=0;N<g;N++){const ce=N/g,Q=m*Math.cos(ce*Math.PI/2),_e=y*Math.sin(ce*Math.PI/2)+v;for(let re=0,Ne=F.length;re<Ne;re++){const Ce=V(F[re],ie[re],_e);Pe(Ce.x,Ce.y,-Q)}for(let re=0,Ne=G.length;re<Ne;re++){const Ce=G[re];fe=se[re];for(let A=0,b=Ce.length;A<b;A++){const X=V(Ce[A],fe[A],_e);Pe(X.x,X.y,-Q)}}}const J=y+v;for(let N=0;N<j;N++){const ce=d?V(P[N],pe[N],J):P[N];T?(w.copy(O.normals[0]).multiplyScalar(ce.x),D.copy(O.binormals[0]).multiplyScalar(ce.y),z.copy(M[0]).add(w).add(D),Pe(z.x,z.y,z.z)):Pe(ce.x,ce.y,0)}for(let N=1;N<=u;N++)for(let ce=0;ce<j;ce++){const Q=d?V(P[ce],pe[ce],J):P[ce];T?(w.copy(O.normals[N]).multiplyScalar(Q.x),D.copy(O.binormals[N]).multiplyScalar(Q.y),z.copy(M[N]).add(w).add(D),Pe(z.x,z.y,z.z)):Pe(Q.x,Q.y,f/u*N)}for(let N=g-1;N>=0;N--){const ce=N/g,Q=m*Math.cos(ce*Math.PI/2),_e=y*Math.sin(ce*Math.PI/2)+v;for(let re=0,Ne=F.length;re<Ne;re++){const Ce=V(F[re],ie[re],_e);Pe(Ce.x,Ce.y,f+Q)}for(let re=0,Ne=G.length;re<Ne;re++){const Ce=G[re];fe=se[re];for(let A=0,b=Ce.length;A<b;A++){const X=V(Ce[A],fe[A],_e);T?Pe(X.x,X.y+M[u-1].y,M[u-1].x+Q):Pe(X.x,X.y,f+Q)}}}oe(),ve();function oe(){const N=i.length/3;if(d){let ce=0,Q=j*ce;for(let _e=0;_e<ee;_e++){const re=ne[_e];He(re[2]+Q,re[1]+Q,re[0]+Q)}ce=u+g*2,Q=j*ce;for(let _e=0;_e<ee;_e++){const re=ne[_e];He(re[0]+Q,re[1]+Q,re[2]+Q)}}else{for(let ce=0;ce<ee;ce++){const Q=ne[ce];He(Q[2],Q[1],Q[0])}for(let ce=0;ce<ee;ce++){const Q=ne[ce];He(Q[0]+j*u,Q[1]+j*u,Q[2]+j*u)}}n.addGroup(N,i.length/3-N,0)}function ve(){const N=i.length/3;let ce=0;Ue(F,ce),ce+=F.length;for(let Q=0,_e=G.length;Q<_e;Q++){const re=G[Q];Ue(re,ce),ce+=re.length}n.addGroup(N,i.length/3-N,1)}function Ue(N,ce){let Q=N.length;for(;--Q>=0;){const _e=Q;let re=Q-1;re<0&&(re=N.length-1);for(let Ne=0,Ce=u+g*2;Ne<Ce;Ne++){const A=j*Ne,b=j*(Ne+1),X=ce+_e+A,le=ce+re+A,he=ce+re+b,ae=ce+_e+b;Je(X,le,he,ae)}}}function Pe(N,ce,Q){c.push(N),c.push(ce),c.push(Q)}function He(N,ce,Q){Oe(N),Oe(ce),Oe(Q);const _e=i.length/3,re=C.generateTopUV(n,i,_e-3,_e-2,_e-1);Ve(re[0]),Ve(re[1]),Ve(re[2])}function Je(N,ce,Q,_e){Oe(N),Oe(ce),Oe(_e),Oe(ce),Oe(Q),Oe(_e);const re=i.length/3,Ne=C.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);Ve(Ne[0]),Ve(Ne[1]),Ve(Ne[3]),Ve(Ne[1]),Ve(Ne[2]),Ve(Ne[3])}function Oe(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function Ve(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lc[i.type]().fromJSON(i)),new dl(n,e.options)}}const cS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new be(s,o),new be(a,c),new be(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[i*3],m=e[i*3+1],y=e[i*3+2],v=e[s*3],g=e[s*3+1],_=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new be(o,1-c),new be(l,1-f),new be(d,1-y),new be(v,1-_)]:[new be(a,1-c),new be(u,1-f),new be(m,1-y),new be(g,1-_)]}};function lS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qf extends so{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ed extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const lc=new Ht,Du=new H,Iu=new H;class hS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uS extends hS{constructor(){super(new Ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hc extends ed{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new uS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fS extends ed{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ou();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ou(){return(typeof performance>"u"?Date:performance).now()}class pS{constructor(e,t,n=0,i=1/0){this.ray=new Rf(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Uc(e,this,n,t),n.sort(Uu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Uc(e[i],this,n,t);return n.sort(Uu),n}}function Uu(r,e){return r.distance-e.distance}function Uc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Uc(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);class mS{scene;camera;renderer;ambientLight;directionalLight;clock;cameraDistance=Ut.CAMERA_Z;cameraTheta=0;cameraPhi=Math.PI/2;cameraTarget=new H(0,0,0);constructor(e){this.scene=new Dy,this.camera=new Hn(Ut.CAMERA_FOV,window.innerWidth/window.innerHeight,Ut.CAMERA_NEAR,Ut.CAMERA_FAR),this.updateCameraPosition(),this.renderer=new Wf({canvas:e,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hf,this.renderer.toneMapping=ff,this.renderer.toneMappingExposure=1.2,this.setupLighting(),this.clock=new dS}setupLighting(){this.ambientLight=new fS(16777215,.6),this.scene.add(this.ambientLight),this.directionalLight=new hc(16777215,.8),this.directionalLight.position.set(5,10,7),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.1,this.directionalLight.shadow.camera.far=50,this.directionalLight.shadow.camera.left=-10,this.directionalLight.shadow.camera.right=10,this.directionalLight.shadow.camera.top=10,this.directionalLight.shadow.camera.bottom=-10,this.directionalLight.shadow.bias=-1e-4,this.scene.add(this.directionalLight);const e=new hc(13220095,.3);e.position.set(-3,-5,3),this.scene.add(e);const t=new hc(16766181,.4);t.position.set(-5,3,-5),this.scene.add(t)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}render(){this.renderer.render(this.scene,this.camera)}getDeltaTime(){return this.clock.getDelta()}getElapsedTime(){return this.clock.getElapsedTime()}getCamera(){return this.camera}getScene(){return this.scene}screenToWorld(e,t,n=0){const i=new H;i.x=e/window.innerWidth*2-1,i.y=-(t/window.innerHeight)*2+1,i.z=.5,i.unproject(this.camera);const s=i.sub(this.camera.position).normalize(),o=(n-this.camera.position.z)/s.z;return this.camera.position.clone().add(s.multiplyScalar(o))}createBalloonMaterial(e){const t=new lt(e);return new Qf({color:t,roughness:.4,metalness:0,envMapIntensity:.5,side:Jn})}raycastObjects(e,t,n){const i=new pS,s=new be(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);return i.setFromCamera(s,this.camera),i.intersectObjects(n,!0)}updateCameraPosition(){const e=this.cameraDistance*Math.sin(this.cameraPhi)*Math.sin(this.cameraTheta),t=this.cameraDistance*Math.cos(this.cameraPhi),n=this.cameraDistance*Math.sin(this.cameraPhi)*Math.cos(this.cameraTheta);this.camera.position.set(this.cameraTarget.x+e,this.cameraTarget.y+t,this.cameraTarget.z+n),this.camera.lookAt(this.cameraTarget)}orbitCamera(e,t){this.cameraTheta+=e,this.cameraPhi+=t,this.cameraPhi=Math.max(.1,Math.min(Math.PI-.1,this.cameraPhi)),this.updateCameraPosition()}zoomCamera(e){this.cameraDistance+=e*5,this.cameraDistance=Math.max(3,Math.min(30,this.cameraDistance)),this.updateCameraPosition()}resetCamera(){this.cameraDistance=Ut.CAMERA_Z,this.cameraTheta=0,this.cameraPhi=Math.PI/2,this.cameraTarget.set(0,0,0),this.updateCameraPosition()}}function _i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function td(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},pl,en,Ct,Wn=1e8,xt=1/Wn,Nc=Math.PI*2,_S=Nc/4,gS=0,nd=Math.sqrt,vS=Math.cos,xS=Math.sin,Kt=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},Mi=function(e){return typeof e=="number"},ml=function(e){return typeof e>"u"},oi=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},_l=function(){return typeof window<"u"},Go=function(e){return Ot(e)||Kt(e)},id=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,yS=/random\([^)]+\)/g,SS=/,\s*/g,Nu=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,MS=/[^,'"\[\]\s]+/gi,ES=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,ni,Fc,gl,On={},ra={},od,ad=function(e){return(ra=ds(e,On))&&bn},vl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$s=function(e,t){return!t&&console.warn(e)},cd=function(e,t){return e&&(On[e]=t)&&ra&&(ra[e]=t)||On},qs=function(){return 0},TS={suppressEvents:!0,isStart:!0,kill:!1},Vo={suppressEvents:!0,kill:!1},bS={suppressEvents:!0},xl={},Gi=[],kc={},ld,Rn={},fc={},Fu=30,Wo=[],yl="",Sl=function(e){var t=e[0],n,i;if(oi(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wo.length;i--&&!Wo[i].targetTest(t););n=Wo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Id(e[i],n)))||e.splice(i,1);return e},dr=function(e){return e._gsap||Sl(Xn(e))[0]._gsap},hd=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():ml(n)&&e.getAttribute&&e.getAttribute(t)||n},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},CS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},sa=function(){var e=Gi.length,t=Gi.slice(0),n,i;for(kc={},Gi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ml=function(e){return!!(e._initted||e._startAt||e.add)},ud=function(e,t,n,i){Gi.length&&!en&&sa(),e.render(t,n,!!(en&&t<0&&Ml(e))),Gi.length&&!en&&sa()},fd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(MS).length<2?t:Kt(e)?e.trim():e},dd=function(e){return e},Un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},AS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ds=function(e,t){for(var n in t)e[n]=t[n];return e},ku=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=oi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},oa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},zs=function(e){var t=e.parent||wt,n=e.keyframes?AS(ln(e.keyframes)):Un;if(Sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},RS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},pd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ga=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},PS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bc=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(Vo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},wS=function r(e){return!e||e._ts&&r(e.parent)},Bu=function(e){return e._repeat?ps(e._tTime,e=e.duration()+e._rDelay)*e:0},ps=function(e,t){var n=Math.floor(e=Pt(e/t));return e&&n===e?n-1:n},aa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},va=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},xa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),va(e),n._dirty||pr(n,e)),e},md=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=aa(e.rawTime(),t),(!t._dur||ao(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},ri=function(e,t,n,i){return t.parent&&Xi(t),t._start=Pt((Mi(n)?n:n||e!==wt?zn(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pd(e,t,"_first","_last",e._sort?"_start":0),zc(t)||(e._recent=t),i||md(e,t),e._ts<0&&xa(e,e._tTime),e},_d=function(e,t){return(On.ScrollTrigger||vl("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},gd=function(e,t,n,i,s){if(Tl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!en&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ld!==Pn.frame)return Gi.push(e),e._lazy=[s,i],1},LS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},zc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&LS(e)&&!(!e._initted&&zc(e))||(e._ts<0||e._dp._ts<0)&&!zc(e))?0:1,a=e._rDelay,c=0,l,u,f;if(a&&e._repeat&&(c=ao(0,e._tDur,t),u=ps(c,a),e._yoyo&&u&1&&(o=1-o),u!==ps(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||en||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&gd(e,t,i,n,c))return;for(f=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Bc(e,t,n,!0),e._onUpdate&&!n&&wn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xi(e,1),!n&&!en&&(wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},IS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ms=function(e,t,n,i){var s=e._repeat,o=Pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Pt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&xa(e,e._tTime=e._tDur*a),e.parent&&va(e),n||pr(e.parent,e),e},zu=function(e){return e instanceof mn?pr(e):ms(e,e._dur)},OS={_start:0,endTime:qs,totalDuration:qs},zn=function r(e,t,n){var i=e.labels,s=e._recent||OS,o=e.duration()>=Wn?s.endTime(!1):e._dur,a,c,l;return Kt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Gs=function(e,t,n){var i=Mi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Sn(c.vars.inherit)&&c.parent;o.immediateRender=Sn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Gt(t[0],o,t[s+1])},qi=function(e,t){return e||e===0?t(e):t},ao=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!Kt(e)||!(t=ES.exec(e))?"":t[1]},US=function(e,t,n){return qi(n,function(i){return ao(e,t,i)})},Gc=[].slice,vd=function(e,t){return e&&oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&oi(e[0]))&&!e.nodeType&&e!==ni},NS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Kt(i)&&!t||vd(i,1)?(s=n).push.apply(s,Xn(i)):n.push(i)})||n},Xn=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):Kt(e)&&!n&&(Fc||!_s())?Gc.call((t||gl).querySelectorAll(e),0):ln(e)?NS(e,n):vd(e)?Gc.call(e,0):e?[e]:[]},Hc=function(e){return e=Xn(e)[0]||$s("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Xn(t,n.querySelectorAll?n:n===e?$s("Invalid scope")||gl.createElement("div"):e)}},xd=function(e){return e.sort(function(){return .5-Math.random()})},yd=function(e){if(Ot(e))return e;var t=oi(e)?e:{each:e},n=mr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,f=i;return Kt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],f=i[1]),function(d,m,y){var v=(y||t).length,g=o[v],_,C,M,T,O,D,w,z,E;if(!g){if(E=t.grid==="auto"?0:(t.grid||[1,Wn])[1],!E){for(w=-Wn;w<(w=y[E++].getBoundingClientRect().left)&&E<v;);E<v&&E--}for(g=o[v]=[],_=c?Math.min(E,v)*u-.5:i%E,C=E===Wn?0:c?v*f/E-.5:i/E|0,w=0,z=Wn,D=0;D<v;D++)M=D%E-_,T=C-(D/E|0),g[D]=O=l?Math.abs(l==="y"?T:M):nd(M*M+T*T),O>w&&(w=O),O<z&&(z=O);i==="random"&&xd(g),g.max=w-z,g.min=z,g.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(E>v?v-1:l?l==="y"?v/E:E:Math.max(E,v/E))||0)*(i==="edges"?-1:1),g.b=v<0?s-v:s,g.u=an(t.amount||t.each)||0,n=n&&v<0?wd(n):n}return v=(g[d]-g.min)/g.max||0,Pt(g.b+(n?n(v):v)*g.v)+g.u}},Vc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Mi(n)?0:an(n))}},Sd=function(e,t){var n=ln(e),i,s;return!n&&oi(e)&&(i=n=e.radius||Wn,e.values?(e=Xn(e.values),(s=!Mi(e[0]))&&(i*=i)):e=Vc(e.increment)),qi(t,n?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=Wn,u=0,f=e.length,d,m;f--;)s?(d=e[f].x-a,m=e[f].y-c,d=d*d+m*m):d=Math.abs(e[f]-a),d<l&&(l=d,u=f);return u=!i||l<=i?e[u]:o,s||u===o||Mi(o)?u:u+an(o)}:Vc(e))},Md=function(e,t,n,i){return qi(ln(e)?!t:n===!0?!!(n=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},FS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},kS=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},BS=function(e,t,n){return Td(e,t,0,1,n)},Ed=function(e,t,n){return qi(n,function(i){return e[~~t(i)]})},zS=function r(e,t,n){var i=t-e;return ln(e)?Ed(e,r(0,e.length),t):qi(n,function(s){return(i+(s-e)%i)%i+e})},GS=function r(e,t,n){var i=t-e,s=i*2;return ln(e)?Ed(e,r(0,e.length-1),t):qi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ks=function(e){return e.replace(yS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(SS);return Md(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Td=function(e,t,n,i,s){var o=t-e,a=i-n;return qi(s,function(c){return n+((c-e)/o*a||0)})},HS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Kt(e),a={},c,l,u,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(u=[],f=e.length,d=f-2,l=1;l<f;l++)u.push(r(e[l-1],e[l]));f--,s=function(y){y*=f;var v=Math.min(d,~~y);return u[v](y-v)},n=t}else i||(e=ds(ln(e)?[]:{},e));if(!u){for(c in t)El.call(a,e,c,"get",t[c]);s=function(y){return Al(y,a)||(o?e.p:e)}}}return qi(n,s)},Gu=function(e,t,n){var i=e.labels,s=Wn,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},wn=function(e,t,n){var i=e.vars,s=i[t],o=Ct,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Gi.length&&sa(),a&&(Ct=a),u=c?s.apply(l,c):s.call(l),Ct=o,u},Is=function(e){return Xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!en),e.progress()<1&&wn(e,"onInterrupt"),e},ts,bd=[],Cd=function(e){if(e)if(e=!e.name&&e.default||e,_l()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qs,render:Al,add:El,kill:rM,modifier:iM,rawVars:0},o={targetTest:0,get:0,getSetter:Cl,aliases:{},register:0};if(_s(),e!==i){if(Rn[t])return;Un(i,Un(oa(e,s),o)),ds(i.prototype,ds(s,oa(e,o))),Rn[i.prop=t]=i,e.targetTest&&(Wo.push(i),xl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cd(t,i),e.register&&e.register(bn,i,En)}else bd.push(e)},vt=255,Os={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},dc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},Ad=function(e,t,n){var i=e?Mi(e)?[e>>16,e>>8&vt,e&vt]:0:Os.black,s,o,a,c,l,u,f,d,m,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Os[e])i=Os[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&vt,i&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(Nu),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=dc(c+1/3,s,o),i[1]=dc(c,s,o),i[2]=dc(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(rd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nu)||Os.transparent;i=i.map(Number)}return t&&!y&&(s=i[0]/vt,o=i[1]/vt,a=i[2]/vt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?c=l=0:(m=f-d,l=u>.5?m/(2-f-d):m/(f+d),c=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Rd=function(e){var t=[],n=[],i=-1;return e.split(Hi).forEach(function(s){var o=s.match(es)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Hu=function(e,t,n){var i="",s=(e+i).match(Hi),o=t?"hsla(":"rgba(",a=0,c,l,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Ad(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Rd(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Hi,"1").split(es),f=l.length-1;a<f;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(Hi),f=l.length-1;a<f;a++)i+=l[a]+s[a];return i+l[f]},Hi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Os)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),VS=/hsl[a]?\(/,Pd=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=VS.test(t),e[1]=Hu(e[1],n),e[0]=Hu(e[0],n,Rd(e[1])),!0},Js,Pn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,f,d,m,y=function v(g){var _=r()-i,C=g===!0,M,T,O,D;if((_>e||_<0)&&(n+=_-t),i+=_,O=i-n,M=O-o,(M>0||C)&&(D=++f.frame,d=O-f.time*1e3,f.time=O=O/1e3,o+=M+(M>=s?4:s-M),T=1),C||(c=l(v)),T)for(m=0;m<a.length;m++)a[m](O,d,D,g)};return f={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){od&&(!Fc&&_l()&&(ni=Fc=window,gl=ni.document||{},On.gsap=bn,(ni.gsapVersions||(ni.gsapVersions=[])).push(bn.version),ad(ra||ni.GreenSockGlobals||!ni.gsap&&ni||{}),bd.forEach(Cd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=u||function(g){return setTimeout(g,o-f.time*1e3+1|0)},Js=1,y(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Js=0,l=qs},lagSmoothing:function(g,_){e=g||1/0,t=Math.min(_||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,_,C){var M=_?function(T,O,D,w){g(T,O,D,w),f.remove(M)}:g;return f.remove(g),a[C?"unshift":"push"](M),_s(),M},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},f}(),_s=function(){return!Js&&Pn.wake()},at={},WS=/^[\d.\-M][\d.\-,\s]/,XS=/["']/g,jS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(XS,"").trim():+l,i=c.substr(a+1).trim();return t},YS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$S=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[jS(t[1])]:YS(e).split(",").map(fd)):at._CE&&WS.test(e)?at._CE("",e):n},wd=function(e){return function(t){return 1-e(1-t)}},Ld=function r(e,t){for(var n=e._first,i;n;)n instanceof mn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(Ot(e)?e:at[e]||$S(e))||t},yr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Mn(e,function(a){at[a]=On[a]=s,at[o=a.toLowerCase()]=n;for(var c in s)at[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=at[a+"."+c]=s[c]}),s},Dd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Nc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*xS((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:Dd(a);return s=Nc/s,c.config=function(l,u){return r(e,l,u)},c},mc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Dd(n);return i.config=function(s){return r(e,s)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;yr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;yr("Elastic",pc("in"),pc("out"),pc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};yr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);yr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});yr("Circ",function(r){return-(nd(1-r*r)-1)});yr("Sine",function(r){return r===1?1:-vS(r*_S)+1});yr("Back",mc("in"),mc("out"),mc());at.SteppedEase=at.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-xt;return function(a){return((i*ao(0,o,a)|0)+s)*n}}};fs.ease=at["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yl+=r+","+r+"Params,"});var Id=function(e,t){this.id=gS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hd,this.set=t?t.getSetter:Cl},Zs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ms(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Js||Pn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(_s(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xa(this,n),!s._dp||s.parent||md(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ud(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ps(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?aa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime(ao(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),va(this),PS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_s(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ri(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?aa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bS);var i=en;return en=n,Ml(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zn(this,n),Sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Sn(i)),this._dur||(this._zTime=-xt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ot(n)?n:dd,c=function(){var u=i.then;i.then=null,s&&s(),Ot(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){Is(this)},r}();Un(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var mn=function(r){td(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Sn(n.sortChildren),wt&&ri(n.parent||wt,_i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_d(_i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Gs(0,arguments,this),this},t.from=function(i,s,o){return Gs(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Gs(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(i,s,zn(this,o),1),this},t.call=function(i,s,o){return ri(this,Gt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Gt(i,o,zn(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,zs(o).immediateRender=Sn(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,f){return a.startAt=o,zs(a).immediateRender=Sn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,f)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Pt(i),f=this._zTime<0!=i<0&&(this._initted||!l),d,m,y,v,g,_,C,M,T,O,D,w;if(this!==wt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||f){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,T=this._start,M=this._ts,_=!M,f&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,g=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=Pt(u%g),u===c?(v=this._repeat,d=l):(O=Pt(u/g),v=~~O,v&&v===O&&(d=l,v--),d>l&&(d=l)),O=ps(this._tTime,g),!a&&this._tTime&&O!==v&&this._tTime-O*g-this._dur<=0&&(O=v),D&&v&1&&(d=l-d,w=1),v!==O&&!this._lock){var z=D&&O&1,E=z===(D&&v&1);if(v<O&&(z=!z),a=z?0:u%l?l:u,this._lock=1,this.render(a||(w?0:Pt(v*g)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,O=v),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,E&&(this._lock=2,a=z?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Ld(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=IS(this,Pt(a),Pt(d)),C&&(u-=d-(d=C._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&l&&!s&&!O&&(wn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(y=m._next,(m._act||d>=m._start)&&m._ts&&C!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,o),d!==this._time||!this._ts&&!_){C=0,y&&(u+=this._zTime=-xt);break}}m=y}else{m=this._last;for(var P=i<0?i:d;m;){if(y=m._prev,(m._act||P<=m._end)&&m._ts&&C!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,s,o||en&&Ml(m)),d!==this._time||!this._ts&&!_){C=0,y&&(u+=this._zTime=P?-xt:xt);break}}m=y}}if(C&&!s&&(this.pause(),C.render(d>=a?0:-xt)._zTime=d>=a?1:-1,this._ts))return this._start=T,va(this),this.render(i,s,o);this._onUpdate&&!s&&wn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(T===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(wn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Mi(s)||(s=zn(this,s,i)),!(i instanceof Zs)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Kt(i))return this.addLabel(i,s);if(Ot(i))i=Gt.delayedCall(0,i);else return this}return this!==i?ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Gt?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Kt(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&ga(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(Pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=zn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Gt.delayedCall(0,s||qs,o);return a.data="isPause",this._hasPause=1,ri(this,a,zn(this,i))},t.removePause=function(i){var s=this._first;for(i=zn(this,i);s;)s._start===i&&s.data==="isPause"&&Xi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Oi!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Xn(i),c=this._first,l=Mi(s),u;c;)c instanceof Gt?CS(c._targets,a)&&(l?(!Oi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=zn(o,i),c=s,l=c.startAt,u=c.onStart,f=c.onStartParams,d=c.immediateRender,m,y=Gt.to(o,Un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||xt,onStart:function(){if(o.pause(),!m){var g=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());y._dur!==g&&ms(y,g,0,1).render(y._time,!0,!0),m=1}u&&u.apply(y,f||[])}},s));return d?y.render(0):y},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Un({startAt:{time:zn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Gu(this,zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Gu(this,zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(i=Pt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=Wn,l,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Pt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;ms(o,o===wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(wt._ts&&(ud(wt,aa(i,wt)),ld=Pn.frame),Pn.frame>=Fu){Fu+=In.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&In.autoSleep&&Pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pn.sleep()}}},e}(Zs);Un(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qS=function(e,t,n,i,s,o,a){var c=new En(this._pt,e,t,0,1,Bd,null,s),l=0,u=0,f,d,m,y,v,g,_,C;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ks(i)),o&&(C=[n,i],o(C,e,t),n=C[0],i=C[1]),d=n.match(uc)||[];f=uc.exec(i);)y=f[0],v=i.substring(l,f.index),m?m=(m+1)%5:v.substr(-5)==="rgba("&&(m=1),y!==d[u++]&&(g=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:v||u===1?v:",",s:g,c:y.charAt(1)==="="?rs(g,y)-g:parseFloat(y)-g,m:m&&m<4?Math.round:0},l=uc.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(sd.test(i)||_)&&(c.e=0),this._pt=c,c},El=function(e,t,n,i,s,o,a,c,l,u){Ot(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Ot(f)?l?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,m=Ot(f)?l?eM:Fd:bl,y;if(Kt(i)&&(~i.indexOf("random(")&&(i=Ks(i)),i.charAt(1)==="="&&(y=rs(d,i)+(an(d)||0),(y||y===0)&&(i=y))),!u||d!==i||Wc)return!isNaN(d*i)&&i!==""?(y=new En(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?nM:kd,0,m),l&&(y.fp=l),a&&y.modifier(a,this,e),this._pt=y):(!f&&!(t in e)&&vl(t,i),qS.call(this,e,t,d,i,m,c||In.stringFilter,l))},KS=function(e,t,n,i,s){if(Ot(e)&&(e=Hs(e,s,t,n,i)),!oi(e)||e.style&&e.nodeType||ln(e)||id(e))return Kt(e)?Hs(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Hs(e[a],s,t,n,i);return o},Od=function(e,t,n,i,s,o){var a,c,l,u;if(Rn[e]&&(a=new Rn[e]).init(s,a.rawVars?t[e]:KS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new En(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ts))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Oi,Wc,Tl=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,m=i.autoRevert,y=e._dur,v=e._startAt,g=e._targets,_=e.parent,C=_&&_.data==="nested"?_.vars.targets:g,M=e._overwrite==="auto"&&!pl,T=e.timeline,O,D,w,z,E,P,G,Z,ne,F,V,j,ee;if(T&&(!d||!s)&&(s="none"),e._ease=mr(s,fs.ease),e._yEase=f?wd(mr(f===!0?s:f,fs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!T&&!!i.runBackwards,!T||d&&!i.stagger){if(Z=g[0]?dr(g[0]).harness:0,j=Z&&i[Z.prop],O=oa(i,xl),v&&(v._zTime<0&&v.progress(1),t<0&&u&&a&&!m?v.render(-1,!0):v.revert(u&&y?Vo:TS),v._lazy=0),o){if(Xi(e._startAt=Gt.set(g,Un({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!v&&Sn(c),startAt:null,delay:0,onUpdate:l&&function(){return wn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en||!a&&!m)&&e._startAt.revert(Vo),a&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&y&&!v){if(t&&(a=!1),w=Un({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Sn(c),immediateRender:a,stagger:0,parent:_},O),j&&(w[Z.prop]=j),Xi(e._startAt=Gt.set(g,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en?e._startAt.revert(Vo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,c=y&&Sn(c)||c&&!y,D=0;D<g.length;D++){if(E=g[D],G=E._gsap||Sl(g)[D]._gsap,e._ptLookup[D]=F={},kc[G.id]&&Gi.length&&sa(),V=C===g?D:C.indexOf(E),Z&&(ne=new Z).init(E,j||O,e,V,C)!==!1&&(e._pt=z=new En(e._pt,E,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(te){F[te]=z}),ne.priority&&(P=1)),!Z||j)for(w in O)Rn[w]&&(ne=Od(w,O,e,V,E,C))?ne.priority&&(P=1):F[w]=z=El.call(e,E,w,"get",O[w],V,C,0,i.stringFilter);e._op&&e._op[D]&&e.kill(E,e._op[D]),M&&e._pt&&(Oi=e,wt.killTweensOf(E,F,e.globalTime(t)),ee=!e.parent,Oi=0),e._pt&&c&&(kc[G.id]=1)}P&&zd(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ee,d&&t<=0&&T.render(Wn,!0,!0)},JS=function(e,t,n,i,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,m;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Wc=1,e.vars[t]="+=0",Tl(e,a),Wc=0,c?$s(t+" not eligible for reset"):1;l.push(u)}for(m=l.length;m--;)f=l[m],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Nt(n)+an(f.e)),f.b&&(f.b=u.s+an(f.b))},ZS=function(e,t){var n=e[0]?dr(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=ds({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},QS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Hs=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):Kt(e)&&~e.indexOf("random(")?Ks(e):e},Ud=yl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Nd={};Mn(Ud+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Nd[r]=1});var Gt=function(r){td(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:zs(i))||this;var c=a.vars,l=c.duration,u=c.delay,f=c.immediateRender,d=c.stagger,m=c.overwrite,y=c.keyframes,v=c.defaults,g=c.scrollTrigger,_=c.yoyoEase,C=i.parent||wt,M=(ln(n)||id(n)?Mi(n[0]):"length"in i)?[n]:Xn(n),T,O,D,w,z,E,P,G;if(a._targets=M.length?Sl(M):$s("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,y||d||Go(l)||Go(u)){if(i=a.vars,T=a.timeline=new mn({data:"nested",defaults:v||{},targets:C&&C.data==="nested"?C.vars.targets:M}),T.kill(),T.parent=T._dp=_i(a),T._start=0,d||Go(l)||Go(u)){if(w=M.length,P=d&&yd(d),oi(d))for(z in d)~Ud.indexOf(z)&&(G||(G={}),G[z]=d[z]);for(O=0;O<w;O++)D=oa(i,Nd),D.stagger=0,_&&(D.yoyoEase=_),G&&ds(D,G),E=M[O],D.duration=+Hs(l,_i(a),O,E,M),D.delay=(+Hs(u,_i(a),O,E,M)||0)-a._delay,!d&&w===1&&D.delay&&(a._delay=u=D.delay,a._start+=u,D.delay=0),T.to(E,D,P?P(O,E,M):0),T._ease=at.none;T.duration()?l=u=0:a.timeline=0}else if(y){zs(Un(T.vars.defaults,{ease:"none"})),T._ease=mr(y.ease||i.ease||"none");var Z=0,ne,F,V;if(ln(y))y.forEach(function(j){return T.to(M,j,">")}),T.duration();else{D={};for(z in y)z==="ease"||z==="easeEach"||QS(z,y[z],D,y.easeEach);for(z in D)for(ne=D[z].sort(function(j,ee){return j.t-ee.t}),Z=0,O=0;O<ne.length;O++)F=ne[O],V={ease:F.e,duration:(F.t-(O?ne[O-1].t:0))/100*l},V[z]=F.v,T.to(M,V,Z),Z+=V.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||a.duration(l=T.duration())}else a.timeline=0;return m===!0&&!pl&&(Oi=_i(a),wt.killTweensOf(M),Oi=0),ri(C,_i(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!l&&!y&&a._start===Pt(C._time)&&Sn(f)&&wS(_i(a))&&C.data!=="nested")&&(a._tTime=-xt,a.render(Math.max(0,-u)||0)),g&&_d(_i(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,f=i>c-xt&&!u?c:i<xt?0:i,d,m,y,v,g,_,C,M,T;if(!l)DS(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,M=this.timeline,this._repeat){if(v=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+i,s,o);if(d=Pt(f%v),f===c?(y=this._repeat,d=l):(g=Pt(f/v),y=~~g,y&&y===g?(d=l,y--):d>l&&(d=l)),_=this._yoyo&&y&1,_&&(T=this._yEase,d=l-d),g=ps(this._tTime,v),d===a&&!o&&this._initted&&y===g)return this._tTime=f,this;y!==g&&(M&&this._yEase&&Ld(M,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==v&&this._initted&&(this._lock=o=1,this.render(Pt(v*y),!0).invalidate()._lock=0))}if(!this._initted){if(gd(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&y!==g))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(T||this._ease)(d/l),this._from&&(this.ratio=C=1-C),!a&&f&&!s&&!g&&(wn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(C,m.d),m=m._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Bc(this,i,s,o),wn(this,"onUpdate")),this._repeat&&y!==g&&this.vars.onRepeat&&!s&&this.parent&&wn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Bc(this,i,!0,!0),(i||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Xi(this,1),!s&&!(u&&!a)&&(f||a||_)&&(wn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,c){Js||Pn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Tl(this,l),u=this._ease(l/this._dur),JS(this,i,s,o,a,u,l,c)?this.resetTo(i,s,o,a,1):(xa(this,0),this.parent||pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Is(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Oi&&Oi.vars.overwrite!==!0)._first||Is(this),this.parent&&o!==this.timeline.totalDuration()&&ms(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Xn(i):a,l=this._ptLookup,u=this._pt,f,d,m,y,v,g,_;if((!s||s==="all")&&RS(a,c))return s==="all"&&(this._pt=0),Is(this);for(f=this._op=this._op||[],s!=="all"&&(Kt(s)&&(v={},Mn(s,function(C){return v[C]=1}),s=v),s=ZS(a,s)),_=a.length;_--;)if(~c.indexOf(a[_])){d=l[_],s==="all"?(f[_]=s,y=d,m={}):(m=f[_]=f[_]||{},y=s);for(v in y)g=d&&d[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&ga(this,g,"_pt"),delete d[v]),m!=="all"&&(m[v]=1)}return this._initted&&!this._pt&&u&&Is(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Gs(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Gs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return wt.killTweensOf(i,s,o)},e}(Zs);Un(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var e=new mn,t=Gc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var bl=function(e,t,n){return e[t]=n},Fd=function(e,t,n){return e[t](n)},eM=function(e,t,n,i){return e[t](i.fp,n)},tM=function(e,t,n){return e.setAttribute(t,n)},Cl=function(e,t){return Ot(e[t])?Fd:ml(e[t])&&e.setAttribute?tM:bl},kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Al=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iM=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},rM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ga(this,t,"_pt"):t.dep||(n=1),t=i;return!n},sM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},zd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},En=function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||kd,this.d=c||this,this.set=l||bl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=sM,this.m=n,this.mt=s,this.tween=i},r}();Mn(yl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xl[r]=1});On.TweenMax=On.TweenLite=Gt;On.TimelineLite=On.TimelineMax=mn;wt=new mn({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=Pd;var _r=[],Xo={},oM=[],Vu=0,aM=0,_c=function(e){return(Xo[e]||oM).map(function(t){return t()})},Xc=function(){var e=Date.now(),t=[];e-Vu>2&&(_c("matchMediaInit"),_r.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=ni.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),_c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vu=e,_c("matchMedia"))},Gd=function(){function r(t,n){this.selector=n&&Hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=aM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var o=this,a=function(){var l=Ct,u=o.selector,f;return l&&l!==o&&l.data.push(o),s&&(o.selector=Hc(s)),Ct=o,f=i.apply(o,arguments),Ot(f)&&o._r.push(f),Ct=l,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ot?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof mn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Gt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=_r.length;o--;)_r[o].id===this.id&&_r.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),cM=function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){oi(n)||(n={matches:n});var o=new Gd(0,s||this.scope),a=o.conditions={},c,l,u;Ct&&!o.selector&&(o.selector=Ct.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=ni.matchMedia(n[l]),c&&(_r.indexOf(o)<0&&_r.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Xc):c.addEventListener("change",Xc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ca={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Cd(i)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Kt(e)&&(e=Xn(e)[0]);var s=dr(e||{}).get,o=n?dd:fd;return n==="native"&&(n=""),e&&(t?o((Rn[t]&&Rn[t].get||s)(e,t,n,i)):function(a,c,l){return o((Rn[a]&&Rn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=Xn(e),e.length>1){var i=e.map(function(u){return bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Rn[t],a=dr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var f=new o;ts._pt=0,f.init(e,n?u+n:u,ts,0,[e]),f.render(1,f),ts._pt&&Al(1,ts)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=bn.to(e,Un((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,fs.ease)),ku(fs,e||{})},config:function(e){return ku(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Rn[a]&&!On[a]&&$s(t+" effect requires "+a+" plugin.")}),fc[t]=function(a,c,l){return n(Xn(a),Un(c||{},s),l)},o&&(mn.prototype[t]=function(a,c,l){return this.add(fc[t](a,oi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){at[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):at},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),i,s;for(n.smoothChildTiming=Sn(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,i=wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),i=s;return ri(wt,n,0),n},context:function(e,t){return e?new Gd(e,t):Ct},matchMedia:function(e){return new cM(e)},matchMediaRefresh:function(){return _r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xc()},addEventListener:function(e,t){var n=Xo[e]||(Xo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:zS,wrapYoyo:GS,distribute:yd,random:Md,snap:Sd,normalize:BS,getUnit:an,clamp:US,splitColor:Ad,toArray:Xn,selector:Hc,mapRange:Td,pipe:FS,unitize:kS,interpolate:HS,shuffle:xd},install:ad,effects:fc,ticker:Pn,updateRoot:mn.updateRoot,plugins:Rn,globalTimeline:wt,core:{PropTween:En,globals:cd,Tween:Gt,Timeline:mn,Animation:Zs,getCache:dr,_removeLinkedListItem:ga,reverting:function(){return en},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return pl=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ca[r]=Gt[r]});Pn.add(mn.updateRoot);ts=ca.to({},{duration:0});var lM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=lM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},gc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(Kt(s)&&(c={},Mn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}hM(a,s)}}}},bn=ca.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gc("roundProps",Vc),gc("modifiers"),gc("snap",Sd))||ca;Gt.version=mn.version=bn.version="3.14.2";od=1;_l()&&_s();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wu,Ui,ss,Rl,lr,Xu,Pl,uM=function(){return typeof window<"u"},Ei={},or=180/Math.PI,os=Math.PI/180,qr=Math.atan2,ju=1e8,wl=/([A-Z])/g,fM=/(left|right|width|margin|padding|x)/i,dM=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_M=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Hd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vM=function(e,t,n){return e.style[t]=n},xM=function(e,t,n){return e.style.setProperty(t,n)},yM=function(e,t,n){return e._gsap[t]=n},SM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},MM=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},EM=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Dt="transform",Tn=Dt+"Origin",TM=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ei&&s){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=gi(i,a)}):this.tfm[e]=o.x?o[e]:gi(i,e),e===Tn&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},Wd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pl(),(!s||!s.isStart)&&!n[Dt]&&(Wd(n),i.zOrigin&&n[Tn]&&(n[Tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xd=function(e,t){var n={target:e,props:[],revert:bM,save:TM};return e._gsap||bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},jd,Yc=function(e,t){var n=Ui.createElementNS?Ui.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ui.createElement(e);return n&&n.style?n:Ui.createElement(e)},Ln=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(wl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,gs(t)||t,1)||""},Yu="O,Moz,ms,Ms,Webkit".split(","),gs=function(e,t,n){var i=t||lr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Yu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Yu[o]:"")+e},$c=function(){uM()&&window.document&&(Wu=window,Ui=Wu.document,ss=Ui.documentElement,lr=Yc("div")||{style:{}},Yc("div"),Dt=gs(Dt),Tn=Dt+"Origin",lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jd=!!gs("perspective"),Pl=bn.core.reverting,Rl=1)},$u=function(e){var t=e.ownerSVGElement,n=Yc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ss.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ss.removeChild(n),s},qu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yd=function(e){var t,n;try{t=e.getBBox()}catch{t=$u(e),n=1}return t&&(t.width||t.height)||n||(t=$u(e)),t&&!t.width&&!t.x&&!t.y?{x:+qu(e,["x","cx","x1"])||0,y:+qu(e,["y","cy","y1"])||0,width:0,height:0}:t},$d=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yd(e))},ji=function(e,t){if(t){var n=e.style,i;t in Ei&&t!==Tn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(wl,"-$1").toLowerCase())):n.removeAttribute(t)}},Ni=function(e,t,n,i,s,o){var a=new En(e._pt,t,n,0,1,o?Vd:Hd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Ku={deg:1,rad:1,turn:1},CM={grid:1,flex:1},Yi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=lr.style,c=fM.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),f=100,d=i==="px",m=i==="%",y,v,g,_;if(i===o||!s||Ku[i]||Ku[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),_=e.getCTM&&$d(e),(m||o==="%")&&(Ei[t]||~t.indexOf("adius")))return y=_?e.getBBox()[c?"width":"height"]:e[u],Nt(m?s/y*f:s/100*y);if(a[c?"width":"height"]=f+(d?o:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Ui||!v.appendChild)&&(v=Ui.body),g=v._gsap,g&&m&&g.width&&c&&g.time===Pn.time&&!g.uncache)return Nt(s/g.width*f);if(m&&(t==="height"||t==="width")){var C=e.style[t];e.style[t]=f+i,y=e[u],C?e.style[t]=C:ji(e,t)}else(m||o==="%")&&!CM[Ln(v,"display")]&&(a.position=Ln(e,"position")),v===e&&(a.position="static"),v.appendChild(lr),y=lr[u],v.removeChild(lr),a.position="absolute";return c&&m&&(g=dr(v),g.time=Pn.time,g.width=v[u]),Nt(d?y*s/f:y&&s?f/y*s:0)},gi=function(e,t,n,i){var s;return Rl||$c(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ei[t]&&t!=="transform"?(s=eo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ha(Ln(e,Tn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=la[t]&&la[t](e,t,n)||Ln(e,t)||hd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Yi(e,t,s,n)+n:s},AM=function(e,t,n,i){if(!n||n==="none"){var s=gs(t,e,1),o=s&&Ln(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ln(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,Bd),c=0,l=0,u,f,d,m,y,v,g,_,C,M,T,O;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ln(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=Ln(e,t)||i,v?e.style[t]=v:ji(e,t)),u=[n,i],Pd(u),n=u[0],i=u[1],d=n.match(es)||[],O=i.match(es)||[],O.length){for(;f=es.exec(i);)g=f[0],C=i.substring(c,f.index),y?y=(y+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(y=1),g!==(v=d[l++]||"")&&(m=parseFloat(v)||0,T=v.substr((m+"").length),g.charAt(1)==="="&&(g=rs(m,g)+T),_=parseFloat(g),M=g.substr((_+"").length),c=es.lastIndex-M.length,M||(M=M||In.units[t]||T,c===i.length&&(i+=M,a.e+=M)),T!==M&&(m=Yi(e,t,v,M)||0),a._pt={_next:a._pt,p:C||l===1?C:",",s:m,c:_-m,m:y&&y<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Vd:Hd;return sd.test(i)&&(a.e=0),this._pt=a,a},Ju={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ju[n]||n,t[1]=Ju[i]||i,t.join(" ")},PM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Ei[a]&&(c=1,a=a==="transformOrigin"?Tn:Dt),ji(n,a);c&&(ji(n,Dt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",eo(n,1),o.uncache=1,Wd(i)))}},la={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new En(e._pt,t,n,0,0,PM);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Qs=[1,0,0,1,0,0],qd={},Kd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zu=function(e){var t=Ln(e,Dt);return Kd(t)?Qs:t.substr(7).match(rd).map(Nt)},Ll=function(e,t){var n=e._gsap||dr(e),i=e.style,s=Zu(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Qs:s):(s===Qs&&!e.offsetParent&&e!==ss&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,ss.appendChild(e)),s=Zu(e),c?i.display=c:ji(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):ss.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qc=function(e,t,n,i,s,o){var a=e._gsap,c=s||Ll(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,m=c[0],y=c[1],v=c[2],g=c[3],_=c[4],C=c[5],M=t.split(" "),T=parseFloat(M[0])||0,O=parseFloat(M[1])||0,D,w,z,E;n?c!==Qs&&(w=m*g-y*v)&&(z=T*(g/w)+O*(-v/w)+(v*C-g*_)/w,E=T*(-y/w)+O*(m/w)-(m*C-y*_)/w,T=z,O=E):(D=Yd(e),T=D.x+(~M[0].indexOf("%")?T/100*D.width:T),O=D.y+(~(M[1]||M[0]).indexOf("%")?O/100*D.height:O)),i||i!==!1&&a.smooth?(_=T-l,C=O-u,a.xOffset=f+(_*m+C*v)-_,a.yOffset=d+(_*y+C*g)-C):a.xOffset=a.yOffset=0,a.xOrigin=T,a.yOrigin=O,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Tn]="0px 0px",o&&(Ni(o,a,"xOrigin",l,T),Ni(o,a,"yOrigin",u,O),Ni(o,a,"xOffset",f,a.xOffset),Ni(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",T+" "+O)},eo=function(e,t){var n=e._gsap||new Id(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Ln(e,Tn)||"0",u,f,d,m,y,v,g,_,C,M,T,O,D,w,z,E,P,G,Z,ne,F,V,j,ee,te,ie,se,fe,pe,J,oe,ve;return u=f=d=v=g=_=C=M=T=0,m=y=1,n.svg=!!(e.getCTM&&$d(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Dt]!=="none"?c[Dt]:"")),i.scale=i.rotate=i.translate="none"),w=Ll(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),l=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",ee=""):ee=!t&&e.getAttribute("data-svg-origin"),qc(e,ee||l,!!ee||n.originIsAbsolute,n.smooth!==!1,w)),O=n.xOrigin||0,D=n.yOrigin||0,w!==Qs&&(G=w[0],Z=w[1],ne=w[2],F=w[3],u=V=w[4],f=j=w[5],w.length===6?(m=Math.sqrt(G*G+Z*Z),y=Math.sqrt(F*F+ne*ne),v=G||Z?qr(Z,G)*or:0,C=ne||F?qr(ne,F)*or+v:0,C&&(y*=Math.abs(Math.cos(C*os))),n.svg&&(u-=O-(O*G+D*ne),f-=D-(O*Z+D*F))):(ve=w[6],J=w[7],se=w[8],fe=w[9],pe=w[10],oe=w[11],u=w[12],f=w[13],d=w[14],z=qr(ve,pe),g=z*or,z&&(E=Math.cos(-z),P=Math.sin(-z),ee=V*E+se*P,te=j*E+fe*P,ie=ve*E+pe*P,se=V*-P+se*E,fe=j*-P+fe*E,pe=ve*-P+pe*E,oe=J*-P+oe*E,V=ee,j=te,ve=ie),z=qr(-ne,pe),_=z*or,z&&(E=Math.cos(-z),P=Math.sin(-z),ee=G*E-se*P,te=Z*E-fe*P,ie=ne*E-pe*P,oe=F*P+oe*E,G=ee,Z=te,ne=ie),z=qr(Z,G),v=z*or,z&&(E=Math.cos(z),P=Math.sin(z),ee=G*E+Z*P,te=V*E+j*P,Z=Z*E-G*P,j=j*E-V*P,G=ee,V=te),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,_=180-_),m=Nt(Math.sqrt(G*G+Z*Z+ne*ne)),y=Nt(Math.sqrt(j*j+ve*ve)),z=qr(V,j),C=Math.abs(z)>2e-4?z*or:0,T=oe?1/(oe<0?-oe:oe):0),n.svg&&(ee=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Kd(Ln(e,Dt)),ee&&e.setAttribute("transform",ee))),Math.abs(C)>90&&Math.abs(C)<270&&(s?(m*=-1,C+=v<=0?180:-180,v+=v<=0?180:-180):(y*=-1,C+=C<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Nt(m),n.scaleY=Nt(y),n.rotation=Nt(v)+a,n.rotationX=Nt(g)+a,n.rotationY=Nt(_)+a,n.skewX=C+a,n.skewY=M+a,n.transformPerspective=T+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Tn]=ha(l)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?LM:jd?Jd:wM,n.uncache=0,n},ha=function(e){return(e=e.split(" "))[0]+" "+e[1]},vc=function(e,t,n){var i=an(t);return Nt(parseFloat(t)+parseFloat(Yi(e,"x",n+"px",i)))+i},wM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jd(e,t)},nr="0deg",Ls="0px",ir=") ",Jd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,m=n.skewY,y=n.scaleX,v=n.scaleY,g=n.transformPerspective,_=n.force3D,C=n.target,M=n.zOrigin,T="",O=_==="auto"&&e&&e!==1||_===!0;if(M&&(f!==nr||u!==nr)){var D=parseFloat(u)*os,w=Math.sin(D),z=Math.cos(D),E;D=parseFloat(f)*os,E=Math.cos(D),o=vc(C,o,w*E*-M),a=vc(C,a,-Math.sin(D)*-M),c=vc(C,c,z*E*-M+M)}g!==Ls&&(T+="perspective("+g+ir),(i||s)&&(T+="translate("+i+"%, "+s+"%) "),(O||o!==Ls||a!==Ls||c!==Ls)&&(T+=c!==Ls||O?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ir),l!==nr&&(T+="rotate("+l+ir),u!==nr&&(T+="rotateY("+u+ir),f!==nr&&(T+="rotateX("+f+ir),(d!==nr||m!==nr)&&(T+="skew("+d+", "+m+ir),(y!==1||v!==1)&&(T+="scale("+y+", "+v+ir),C.style[Dt]=T||"translate(0, 0)"},LM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,m=n.target,y=n.xOrigin,v=n.yOrigin,g=n.xOffset,_=n.yOffset,C=n.forceCSS,M=parseFloat(o),T=parseFloat(a),O,D,w,z,E;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=os,l*=os,O=Math.cos(c)*f,D=Math.sin(c)*f,w=Math.sin(c-l)*-d,z=Math.cos(c-l)*d,l&&(u*=os,E=Math.tan(l-u),E=Math.sqrt(1+E*E),w*=E,z*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),O*=E,D*=E)),O=Nt(O),D=Nt(D),w=Nt(w),z=Nt(z)):(O=f,z=d,D=w=0),(M&&!~(o+"").indexOf("px")||T&&!~(a+"").indexOf("px"))&&(M=Yi(m,"x",o,"px"),T=Yi(m,"y",a,"px")),(y||v||g||_)&&(M=Nt(M+y-(y*O+v*w)+g),T=Nt(T+v-(y*D+v*z)+_)),(i||s)&&(E=m.getBBox(),M=Nt(M+i/100*E.width),T=Nt(T+s/100*E.height)),E="matrix("+O+","+D+","+w+","+z+","+M+","+T+")",m.setAttribute("transform",E),C&&(m.style[Dt]=E)},DM=function(e,t,n,i,s){var o=360,a=Kt(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?or:1),l=c-i,u=i+l+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),f==="cw"&&l<0?l=(l+o*ju)%o-~~(l/o)*o:f==="ccw"&&l>0&&(l=(l-o*ju)%o-~~(l/o)*o)),e._pt=d=new En(e._pt,t,n,i,l,pM),d.e=u,d.u="deg",e._props.push(n),d},Qu=function(e,t){for(var n in t)e[n]=t[n];return e},IM=function(e,t,n){var i=Qu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,f,d,m,y;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Dt]=t,a=eo(n,1),ji(n,Dt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Dt],o[Dt]=t,a=eo(n,1),o[Dt]=l);for(c in Ei)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(m=an(l),y=an(u),f=m!==y?Yi(n,c,l,y):parseFloat(l),d=parseFloat(u),e._pt=new En(e._pt,a,c,f,d-f,jc),e._pt.u=y||0,e._props.push(c));Qu(a,i)};Mn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});la[e>1?"border"+r:r]=function(a,c,l,u,f){var d,m;if(arguments.length<4)return d=o.map(function(y){return gi(a,y,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},o.forEach(function(y,v){return m[y]=d[v]=d[v]||d[(v-1)/2|0]}),a.init(c,m,f)}});var Zd={name:"css",register:$c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,f,d,m,y,v,g,_,C,M,T,O,D,w,z,E;Rl||$c(),this.styles=this.styles||Xd(e),z=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(u=t[v],!(Rn[v]&&Od(v,t,n,i,e,s)))){if(m=typeof u,y=la[v],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ks(u)),y)y(this,e,v,u,n)&&(w=1);else if(v.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(l)||(g=an(l),_=an(u),_?g!==_&&(l=Yi(e,v,l,_)+_):g&&(u+=g)),this.add(a,"setProperty",l,u,i,s,0,0,v),o.push(v),z.push(v,0,a[v]);else if(m!=="undefined"){if(c&&v in c?(l=typeof c[v]=="function"?c[v].call(n,i,e,s):c[v],Kt(l)&&~l.indexOf("random(")&&(l=Ks(l)),an(l+"")||l==="auto"||(l+=In.units[v]||an(gi(e,v))||""),(l+"").charAt(1)==="="&&(l=gi(e,v))):l=gi(e,v),d=parseFloat(l),C=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),C&&(u=u.substr(2)),f=parseFloat(u),v in si&&(v==="autoAlpha"&&(d===1&&gi(e,"visibility")==="hidden"&&f&&(d=0),z.push("visibility",0,a.visibility),Ni(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=si[v],~v.indexOf(",")&&(v=v.split(",")[0]))),M=v in Ei,M){if(this.styles.save(v),E=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=Ln(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=u,u=Ln(e,"perspective"),P?e.style.perspective=P:ji(e,"perspective")}f=parseFloat(u)}if(T||(O=e._gsap,O.renderTransform&&!t.parseTransform||eo(e,t.parseTransform),D=t.smoothOrigin!==!1&&O.smooth,T=this._pt=new En(this._pt,a,Dt,0,1,O.renderTransform,O,0,-1),T.dep=1),v==="scale")this._pt=new En(this._pt,O,"scaleY",O.scaleY,(C?rs(O.scaleY,C+f):f)-O.scaleY||0,jc),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){z.push(Tn,0,a[Tn]),u=RM(u),O.svg?qc(e,u,0,D,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==O.zOrigin&&Ni(this,O,"zOrigin",O.zOrigin,_),Ni(this,a,v,ha(l),ha(u)));continue}else if(v==="svgOrigin"){qc(e,u,1,D,0,this);continue}else if(v in qd){DM(this,O,v,d,C?rs(d,C+u):u);continue}else if(v==="smoothOrigin"){Ni(this,O,"smooth",O.smooth,u);continue}else if(v==="force3D"){O[v]=u;continue}else if(v==="transform"){IM(this,u,e);continue}}else v in a||(v=gs(v)||v);if(M||(f||f===0)&&(d||d===0)&&!dM.test(u)&&v in a)g=(l+"").substr((d+"").length),f||(f=0),_=an(u)||(v in In.units?In.units[v]:g),g!==_&&(d=Yi(e,v,l,_)),this._pt=new En(this._pt,M?O:a,v,d,(C?rs(d,C+f):f)-d,!M&&(_==="px"||v==="zIndex")&&t.autoRound!==!1?gM:jc),this._pt.u=_||0,M&&E!==u?(this._pt.b=l,this._pt.e=E,this._pt.r=_M):g!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=mM);else if(v in a)AM.call(this,e,v,l,C?C+u:u);else if(v in e)this.add(e,v,l||e[v],C?C+u:u,i,s);else if(v!=="parseTransform"){vl(v,u);continue}M||(v in a?z.push(v,0,a[v]):typeof e[v]=="function"?z.push(v,2,e[v]()):z.push(v,1,l||e[v])),o.push(v)}}w&&zd(this)},render:function(e,t){if(t.tween._time||!Pl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:si,getSetter:function(e,t,n){var i=si[t];return i&&i.indexOf(",")<0&&(t=i),t in Ei&&t!==Tn&&(e._gsap.x||gi(e,"x"))?n&&Xu===n?t==="scale"?SM:yM:(Xu=n||{})&&(t==="scale"?MM:EM):e.style&&!ml(e.style[t])?vM:~t.indexOf("-")?xM:Cl(e,t)},core:{_removeProperty:ji,_getMatrix:Ll}};bn.utils.checkPrefix=gs;bn.core.getStyleSaver=Xd;(function(r,e,t,n){var i=Mn(r+","+e+","+t,function(s){Ei[s]=1});Mn(e,function(s){In.units[s]="deg",qd[s]=1}),si[i[13]]=r+","+e,Mn(n,function(s){var o=s.split(":");si[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){In.units[r]="px"});bn.registerPlugin(Zd);var Wt=bn.registerPlugin(Zd)||bn;Wt.core.Tween;class OM{camera;canvasWidth;canvasHeight;constructor(e,t,n){this.camera=e,this.canvasWidth=t,this.canvasHeight=n}updateSize(e,t){this.canvasWidth=e,this.canvasHeight=t}createBalloonMesh(e){const t=this.simplifyPoints(e.points,20),n=this.createShape(t),i={depth:Ut.OBJECT_DEPTH,bevelEnabled:!0,bevelThickness:.3,bevelSize:.3,bevelOffset:0,bevelSegments:8,curveSegments:24};let s=new dl(n,i);s.center(),s=this.inflateGeometry(s);const o=new Qf({color:new lt(e.color),roughness:.35,metalness:0,side:Jn}),a=new xi(s,o);a.castShadow=!0,a.receiveShadow=!0;const c=this.getStrokeCenter(e.points),l=this.screenToWorld(c.x,c.y);a.position.copy(l);const u=this.getStrokeSize(e.points),f=Math.max(u.width,u.height)/600;return a.scale.set(f,f,f),a}simplifyPoints(e,t){if(e.length<=t)return e;const n=e.length/t,i=[];for(let s=0;s<t;s++){const o=Math.min(Math.floor(s*n),e.length-1);i.push(e[o])}return i}createShape(e){if(e.length<3){const a=new Dc;return a.absarc(0,0,1,0,Math.PI*2,!1),a}const t=this.getStrokeCenter(e),n=e.map(a=>({x:(a.x-t.x)/50,y:-(a.y-t.y)/50})),s=new Xf(n.map(a=>new H(a.x,a.y,0)),!0,"catmullrom",.5).getPoints(64),o=new Dc;o.moveTo(s[0].x,s[0].y);for(let a=1;a<s.length;a++)o.lineTo(s[a].x,s[a].y);return o.closePath(),o}inflateGeometry(e){const t=e.getAttribute("position"),n=e.getAttribute("normal");if(!t||!n)return e;e.computeBoundingBox();const i=e.boundingBox,s=new H;i.getCenter(s);const o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){const c=t.getX(a),l=t.getY(a),u=t.getZ(a),f=c-s.x,d=l-s.y,m=u-s.z,y=Math.sqrt(f*f+d*d+m*m);if(y>.001){const v=Ut.INFLATION_AMOUNT*.1;o[a*3]=c+f/y*v,o[a*3+1]=l+d/y*v,o[a*3+2]=u+m/y*v}else o[a*3]=c,o[a*3+1]=l,o[a*3+2]=u}return e.setAttribute("position",new ei(o,3)),e.computeVertexNormals(),e}getStrokeCenter(e){const t=e.reduce((n,i)=>({x:n.x+i.x,y:n.y+i.y}),{x:0,y:0});return{x:t.x/e.length,y:t.y/e.length}}getStrokeSize(e){let t=1/0,n=-1/0,i=1/0,s=-1/0;for(const o of e)t=Math.min(t,o.x),n=Math.max(n,o.x),i=Math.min(i,o.y),s=Math.max(s,o.y);return{width:n-t,height:s-i}}screenToWorld(e,t){const n=new H;n.x=e/this.canvasWidth*2-1,n.y=-(t/this.canvasHeight)*2+1,n.z=.5,n.unproject(this.camera);const i=n.sub(this.camera.position).normalize(),s=-this.camera.position.z/i.z;return this.camera.position.clone().add(i.multiplyScalar(s))}}class UM{scene;inflator;objects=[];idCounter=0;constructor(e,t,n){this.scene=e,this.inflator=new OM(e.getCamera(),t,n)}updateSize(e,t){this.inflator.updateSize(e,t)}async createFromStroke(e){const t=this.inflator.createBalloonMesh(e);t.scale.set(.001,.001,.001);const n={id:`balloon_${this.idCounter++}`,mesh:t,color:e.color,originalStroke:e,position:t.position.clone(),targetPosition:t.position.clone(),rotation:new ro(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),rotationSpeed:new H((Math.random()-.5)*Ut.ROTATION_SPEED_MAX,(Math.random()-.5)*Ut.ROTATION_SPEED_MAX,(Math.random()-.5)*Ut.ROTATION_SPEED_MAX),bobOffset:Math.random()*Math.PI*2,bobSpeed:Ut.BOB_SPEED_MIN+Math.random()*(Ut.BOB_SPEED_MAX-Ut.BOB_SPEED_MIN),scale:1,targetScale:1,createdAt:Date.now(),isGrabbed:!1,squishAmount:0};return this.scene.add(t),this.objects.push(n),await this.animateInflation(n),this.findBalancedPosition(n),n}async animateInflation(e){return new Promise(t=>{Wt.delayedCall(.3,()=>{Wt.to(e.mesh.scale,{x:e.scale,y:e.scale,z:e.scale,duration:Li.INFLATE_DURATION,ease:"elastic.out(1, 0.5)",onComplete:t}),Wt.to(e.mesh.rotation,{y:e.mesh.rotation.y+Math.PI*.25,duration:Li.INFLATE_DURATION,ease:"power2.out"})})})}findBalancedPosition(e){const t=e.position.clone();for(const n of this.objects){if(n.id===e.id)continue;const i=new H().subVectors(t,n.position),s=i.length();if(s<Ut.COLLISION_RADIUS){const o=(Ut.COLLISION_RADIUS-s)/Ut.COLLISION_RADIUS;i.normalize().multiplyScalar(o*.5),t.add(i)}}t.x=Math.max(-4,Math.min(4,t.x)),t.y=Math.max(-3,Math.min(3,t.y)),t.z=Math.max(-2,Math.min(2,t.z)),e.targetPosition=t,Wt.to(e.mesh.position,{x:t.x,y:t.y,z:t.z,duration:Li.OBJECT_SETTLE,ease:"power2.out"})}update(e,t){for(const n of this.objects){if(n.isGrabbed)continue;n.mesh.rotation.x+=n.rotationSpeed.x*e,n.mesh.rotation.y+=n.rotationSpeed.y*e,n.mesh.rotation.z+=n.rotationSpeed.z*e;const i=Math.sin(t*n.bobSpeed+n.bobOffset)*Ut.BOB_AMPLITUDE;if(n.mesh.position.y=n.targetPosition.y+i,n.mesh.position.x+=Math.sin(t*.2+n.bobOffset)*Ut.DRIFT_SPEED*e,this.softCollisionAvoidance(n,e),n.squishAmount>0){const s=1-n.squishAmount*.3,o=1+n.squishAmount*.15;n.mesh.scale.set(n.scale*o,n.scale*s,n.scale*o)}}}softCollisionAvoidance(e,t){for(const n of this.objects){if(n.id===e.id)continue;const i=new H().subVectors(e.mesh.position,n.mesh.position),s=i.length();if(s<Ut.COLLISION_RADIUS&&s>.001){const o=(Ut.COLLISION_RADIUS-s)/Ut.COLLISION_RADIUS*t*2;i.normalize().multiplyScalar(o),e.mesh.position.add(i),e.targetPosition.add(i.multiplyScalar(.5))}}}pokeObject(e){Wt.to(e,{squishAmount:1,duration:Li.POKE_SQUISH_IN,ease:"power2.out",onComplete:()=>{Wt.to(e,{squishAmount:0,duration:Li.POKE_SQUISH_OUT,ease:"elastic.out(1, 0.3)"})}}),Wt.to(e.mesh.rotation,{x:e.mesh.rotation.x+(Math.random()-.5)*.5,y:e.mesh.rotation.y+(Math.random()-.5)*.5,duration:.3,ease:"elastic.out(1, 0.5)"})}grabObject(e){e.isGrabbed=!0,Wt.killTweensOf(e.mesh.position),Wt.killTweensOf(e.mesh.scale),Wt.to(e.mesh.scale,{x:e.scale*1.1,y:e.scale*1.1,z:e.scale*1.1,duration:.15,ease:"power2.out"})}moveGrabbedObject(e,t,n){if(!e.isGrabbed)return;const i=this.scene.screenToWorld(t,n,0);e.mesh.position.copy(i),e.position.copy(i)}releaseObject(e){e.isGrabbed=!1,e.targetPosition.copy(e.mesh.position),Wt.to(e.mesh.scale,{x:e.scale,y:e.scale,z:e.scale,duration:.3,ease:"elastic.out(1, 0.5)"});for(const t of this.objects)t.id!==e.id&&this.findBalancedPosition(t)}async removeObject(e,t=!1){const n=this.objects.indexOf(e);if(n!==-1)return this.objects.splice(n,1),new Promise(i=>{t?Wt.to(e.mesh.scale,{x:0,y:0,z:0,duration:Li.OBJECT_POP,ease:"power2.in",onComplete:()=>{this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),i()}}):Wt.to(e.mesh.scale,{x:e.scale*1.3,y:e.scale*1.3,z:e.scale*1.3,duration:.1,ease:"power2.out",onComplete:()=>{Wt.to(e.mesh.scale,{x:0,y:0,z:0,duration:Li.OBJECT_POP,ease:"power2.in",onComplete:()=>{this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),i()}})}})})}async clearAll(){const e=[];for(let t=0;t<this.objects.length;t++){const n=t*.1;e.push(new Promise(i=>{Wt.delayedCall(n,async()=>{this.objects[t]&&await this.removeObject(this.objects[t],!0),i()})}))}await Promise.all(e),this.objects=[]}getObjectAtPosition(e,t){const n=this.objects.map(s=>s.mesh),i=this.scene.raycastObjects(e,t,n);if(i.length>0){const s=i[0].object;return this.objects.find(o=>o.mesh===s)||null}return null}getObjects(){return this.objects}getObjectCount(){return this.objects.length}rotateObject(e,t,n){e.mesh.rotation.y+=t,e.mesh.rotation.x+=n}selectObject(e){Wt.to(e.mesh.scale,{x:e.scale*1.15,y:e.scale*1.15,z:e.scale*1.15,duration:.15,ease:"power2.out",onComplete:()=>{Wt.to(e.mesh.scale,{x:e.scale,y:e.scale,z:e.scale,duration:.2,ease:"power2.out"})}}),Wt.to(e.mesh.rotation,{y:e.mesh.rotation.y+.3,duration:.3,ease:"elastic.out(1, 0.5)"})}}class NM{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return FM(e).buffer}}function FM(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(s,n),n+=i.byteLength}return t}function Qd(r){return new kM(r).unpack()}function ep(r){const e=new BM,t=e.pack(r);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class kM{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",s,o;for(;n<e;)s=t[n],s<160?(o=s,n++):(s^192)<32?(o=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(o=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class BM{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const s=this.pack(e[i]);return s instanceof Promise?s.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,s=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|s/o&1048575,c=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(s+1))}return i(s+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new NM,this._textEncoder=new TextEncoder}}let tp=!0,np=!0;function Us(r,e,t){const n=r.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Sr(r,e,t){if(!r.RTCPeerConnection)return;const n=r.RTCPeerConnection.prototype,i=n.addEventListener;n.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);const c=l=>{const u=t(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),i.apply(this,[o,c])};const s=n.removeEventListener;n.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);const c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(n,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function zM(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(tp=r,r?"adapter.js logging disabled":"adapter.js logging enabled")}function GM(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(np=!r,"adapter.js deprecation warnings "+(r?"disabled":"enabled"))}function ip(){if(typeof window=="object"){if(tp)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Dl(r,e){np&&console.warn(r+" is deprecated, please use "+e+" instead.")}function HM(r){const e={browser:null,version:null};if(typeof r>"u"||!r.navigator||!r.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=r;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n)return{browser:"chrome",version:parseInt(n.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Us(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||r.isSecureContext===!1&&r.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Us(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2));else if(r.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Us(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=r.RTCRtpTransceiver&&"currentDirection"in r.RTCRtpTransceiver.prototype,e._safariVersion=Us(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function ef(r){return Object.prototype.toString.call(r)==="[object Object]"}function rp(r){return ef(r)?Object.keys(r).reduce(function(e,t){const n=ef(r[t]),i=n?rp(r[t]):r[t],s=n&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,{[t]:i})},{}):r}function Kc(r,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Kc(r,r.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{Kc(r,r.get(i),t)})}))}function tf(r,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const s=[];return r.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{r.forEach(a=>{a.type===n&&a.trackId===o.id&&Kc(r,a,i)})}),i}const nf=ip;function sp(r,e){const t=r&&r.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof a[l]=="object"?a[l]:{ideal:a[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const f=function(d,m){return d?d+m.charAt(0).toUpperCase()+m.slice(1):m==="deviceId"?"sourceId":m};if(u.ideal!==void 0){c.optional=c.optional||[];let d={};typeof u.ideal=="number"?(d[f("min",l)]=u.ideal,c.optional.push(d),d={},d[f("max",l)]=u.ideal,c.optional.push(d)):(d[f("",l)]=u.ideal,c.optional.push(d))}u.exact!==void 0&&typeof u.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[f("",l)]=u.exact):["min","max"].forEach(d=>{u[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[f(d,l)]=u[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(u,f,d){f in u&&!(d in u)&&(u[d]=u[f],delete u[f])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete a.video.facingMode;let f;if(l.exact==="environment"||l.ideal==="environment"?f=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(f=["front"]),f)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(y=>y.kind==="videoinput");let m=d.find(y=>f.some(v=>y.label.toLowerCase().includes(v)));return!m&&d.length&&f.includes("back")&&(m=d[d.length-1]),m&&(a.video.deviceId=l.exact?{exact:m.deviceId}:{ideal:m.deviceId}),a.video=n(a.video),nf("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return nf("chrome: "+JSON.stringify(a)),c(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){i(a,u=>{t.webkitGetUserMedia(u,c,f=>{l&&l(s(f))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>a(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(f=>{f.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function op(r){r.MediaStream=r.MediaStream||r.webkitMediaStream}function ap(r){if(typeof r=="object"&&r.RTCPeerConnection&&!("ontrack"in r.RTCPeerConnection.prototype)){Object.defineProperty(r.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",i=>{let s;r.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===i.track.id):s={track:i.track};const o=new Event("track");o.track=i.track,o.receiver=s,o.transceiver={receiver:s},o.streams=[n.stream],this.dispatchEvent(o)}),n.stream.getTracks().forEach(i=>{let s;r.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===i.id):s={track:i};const o=new Event("track");o.track=i,o.receiver=s,o.transceiver={receiver:s},o.streams=[n.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else Sr(r,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function cp(r){if(typeof r=="object"&&r.RTCPeerConnection&&!("getSenders"in r.RTCPeerConnection.prototype)&&"createDTMFSender"in r.RTCPeerConnection.prototype){const e=function(i,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=i.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:i}};if(!r.RTCPeerConnection.prototype.getSenders){r.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(a,c){let l=i.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const s=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof r=="object"&&r.RTCPeerConnection&&"getSenders"in r.RTCPeerConnection.prototype&&"createDTMFSender"in r.RTCPeerConnection.prototype&&r.RTCRtpSender&&!("dtmf"in r.RTCRtpSender.prototype)){const e=r.RTCPeerConnection.prototype.getSenders;r.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(r.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function lp(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender&&r.RTCRtpReceiver))return;if(!("getStats"in r.RTCRtpSender.prototype)){const t=r.RTCPeerConnection.prototype.getSenders;t&&(r.RTCPeerConnection.prototype.getSenders=function(){const s=t.apply(this,[]);return s.forEach(o=>o._pc=this),s});const n=r.RTCPeerConnection.prototype.addTrack;n&&(r.RTCPeerConnection.prototype.addTrack=function(){const s=n.apply(this,arguments);return s._pc=this,s}),r.RTCRtpSender.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>tf(o,s.track,!0))}}if(!("getStats"in r.RTCRtpReceiver.prototype)){const t=r.RTCPeerConnection.prototype.getReceivers;t&&(r.RTCPeerConnection.prototype.getReceivers=function(){const i=t.apply(this,[]);return i.forEach(s=>s._pc=this),i}),Sr(r,"track",n=>(n.receiver._pc=n.srcElement,n)),r.RTCRtpReceiver.prototype.getStats=function(){const i=this;return this._pc.getStats().then(s=>tf(s,i.track,!1))}}if(!("getStats"in r.RTCRtpSender.prototype&&"getStats"in r.RTCRtpReceiver.prototype))return;const e=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof r.MediaStreamTrack){const n=arguments[0];let i,s,o;return this.getSenders().forEach(a=>{a.track===n&&(i?o=!0:i=a)}),this.getReceivers().forEach(a=>(a.track===n&&(s?o=!0:s=a),a.track===n)),o||i&&s?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):i?i.getStats():s?s.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function hp(r){r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(f=>f.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function up(r,e){if(!r.RTCPeerConnection)return;if(r.RTCPeerConnection.prototype.addTrack&&e.version>=65)return hp(r);const t=r.RTCPeerConnection.prototype.getLocalStreams;r.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(f=>this._reverseStreams[f.id])};const n=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(f=>{if(this.getSenders().find(m=>m.track===f))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const f=new r.MediaStream(u.getTracks());this._streams[u.id]=f,this._reverseStreams[f.id]=u,u=f}n.apply(this,[u])};const i=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},r.RTCPeerConnection.prototype.addTrack=function(u,f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(v=>v===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const y=this._streams[f.id];if(y)y.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new r.MediaStream([u]);this._streams[f.id]=v,this._reverseStreams[v.id]=f,this.addStream(v)}return this.getSenders().find(v=>v.track===u)};function s(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const m=l._reverseStreams[d],y=l._streams[m.id];f=f.replace(new RegExp(y.id,"g"),m.id)}),new RTCSessionDescription({type:u.type,sdp:f})}function o(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const m=l._reverseStreams[d],y=l._streams[m.id];f=f.replace(new RegExp(m.id,"g"),y.id)}),new RTCSessionDescription({type:u.type,sdp:f})}["createOffer","createAnswer"].forEach(function(l){const u=r.RTCPeerConnection.prototype[l],f={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[y=>{const v=s(this,y);d[0].apply(null,[v])},y=>{d[1]&&d[1].apply(null,y)},arguments[2]]):u.apply(this,arguments).then(y=>s(this,y))}};r.RTCPeerConnection.prototype[l]=f[l]});const a=r.RTCPeerConnection.prototype.setLocalDescription;r.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(r.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(r.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),r.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(m=>{this._streams[m].getTracks().find(v=>u.track===v)&&(d=this._streams[m])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Jc(r,e){!r.RTCPeerConnection&&r.webkitRTCPeerConnection&&(r.RTCPeerConnection=r.webkitRTCPeerConnection),r.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=r.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};r.RTCPeerConnection.prototype[t]=i[t]})}function fp(r,e){Sr(r,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const rf=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:fp,shimAddTrackRemoveTrack:up,shimAddTrackRemoveTrackWithNative:hp,shimGetSendersWithDtmf:cp,shimGetUserMedia:sp,shimMediaStream:op,shimOnTrack:ap,shimPeerConnection:Jc,shimSenderReceiverGetStats:lp},Symbol.toStringTag,{value:"Module"}));function dp(r,e){const t=r&&r.navigator,n=r&&r.MediaStreamTrack;if(t.getUserMedia=function(i,s,o){Dl("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function VM(r,e){r.navigator.mediaDevices&&"getDisplayMedia"in r.navigator.mediaDevices||r.navigator.mediaDevices&&(r.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,r.navigator.mediaDevices.getUserMedia(n)})}function pp(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Zc(r,e){if(typeof r!="object"||!(r.RTCPeerConnection||r.mozRTCPeerConnection))return;!r.RTCPeerConnection&&r.mozRTCPeerConnection&&(r.RTCPeerConnection=r.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const s=r.RTCPeerConnection.prototype[i],o={[i](){return arguments[0]=new(i==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),s.apply(this,arguments)}};r.RTCPeerConnection.prototype[i]=o[i]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return n.apply(this,[s||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((u,f)=>{c.set(f,Object.assign({},u,{type:t[u.type]||u.type}))})}return c}).then(o,a)}}function mp(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpSender.prototype)return;const e=r.RTCPeerConnection.prototype.getSenders;e&&(r.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(s=>s._pc=this),i});const t=r.RTCPeerConnection.prototype.addTrack;t&&(r.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),r.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function _p(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpReceiver.prototype)return;const e=r.RTCPeerConnection.prototype.getReceivers;e&&(r.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),Sr(r,"track",t=>(t.receiver._pc=t.srcElement,t)),r.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function gp(r){!r.RTCPeerConnection||"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){Dl("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function vp(r){r.DataChannel&&!r.RTCDataChannel&&(r.RTCDataChannel=r.DataChannel)}function xp(r){if(!(typeof r=="object"&&r.RTCPeerConnection))return;const e=r.RTCPeerConnection.prototype.addTransceiver;e&&(r.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];const i=n.length>0;i&&n.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const s=e.apply(this,arguments);if(i){const{sender:o}=s,a=o.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=n,o.sendEncodings=n,this.setParametersPromises.push(o.setParameters(a).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return s})}function yp(r){if(!(typeof r=="object"&&r.RTCRtpSender))return;const e=r.RTCRtpSender.prototype.getParameters;e&&(r.RTCRtpSender.prototype.getParameters=function(){const n=e.apply(this,arguments);return"encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n})}function Sp(r){if(!(typeof r=="object"&&r.RTCPeerConnection))return;const e=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function Mp(r){if(!(typeof r=="object"&&r.RTCPeerConnection))return;const e=r.RTCPeerConnection.prototype.createAnswer;r.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const sf=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:xp,shimCreateAnswer:Mp,shimCreateOffer:Sp,shimGetDisplayMedia:VM,shimGetParameters:yp,shimGetUserMedia:dp,shimOnTrack:pp,shimPeerConnection:Zc,shimRTCDataChannel:vp,shimReceiverGetStats:_p,shimRemoveStream:gp,shimSenderGetStats:mp},Symbol.toStringTag,{value:"Module"}));function Ep(r){if(!(typeof r!="object"||!r.RTCPeerConnection)){if("getLocalStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in r.RTCPeerConnection.prototype)){const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},r.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(s=>{i.includes(s.track)&&this.removeTrack(s)})})}}function Tp(r){if(!(typeof r!="object"||!r.RTCPeerConnection)&&("getRemoteStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in r.RTCPeerConnection.prototype))){Object.defineProperty(r.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const s=new Event("addstream");s.stream=i,this.dispatchEvent(s)})})}});const e=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function bp(r){if(typeof r!="object"||!r.RTCPeerConnection)return;const e=r.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d},e.createAnswer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d};let a=function(c,l,u){const f=i.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f};e.setLocalDescription=a,a=function(c,l,u){const f=s.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.setRemoteDescription=a,a=function(c,l,u){const f=o.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.addIceCandidate=a}function Cp(r){const e=r&&r.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Ap(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,i,s){e.mediaDevices.getUserMedia(n).then(i,s)}.bind(e))}function Ap(r){return r&&r.video!==void 0?Object.assign({},r,{video:rp(r.video)}):r}function Rp(r){if(!r.RTCPeerConnection)return;const e=r.RTCPeerConnection;r.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const s=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Dl("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(n.iceServers[o])}n.iceServers=s}return new e(n,i)},r.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(r.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Pp(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function wp(r){const e=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Lp(r){typeof r!="object"||r.AudioContext||(r.AudioContext=r.webkitAudioContext)}const of=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Lp,shimCallbacksAPI:bp,shimConstraints:Ap,shimCreateOfferLegacy:wp,shimGetUserMedia:Cp,shimLocalStreamsAPI:Ep,shimRTCIceServerUrls:Rp,shimRemoteStreamsAPI:Tp,shimTrackEventTransceiver:Pp},Symbol.toStringTag,{value:"Module"}));var Dp={exports:{}};(function(r){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,s)=>(s>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":i.relatedAddress=n[s+1];break;case"rport":i.relatedPort=parseInt(n[s+1],10);break;case"tcptype":i.tcpType=n[s+1];break;case"ufrag":i.ufrag=n[s+1],i.usernameFragment=n[s+1];break;default:i[n[s]]===void 0&&(i[n[s]]=n[s+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const s=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<s.length;o++)i=s[o].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?s.push(o+"="+t.parameters[o]):s.push(o)}),n+="a=fmtp:"+i+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+i+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(i.attribute=t.substring(n+1,s),i.value=t.substring(s+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{i+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&s?{usernameFragment:i.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let a=3;a<s.length;a++){const c=s[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const u=e.parseRtpMap(l),f=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(u.parameters=f.length?e.parseFmtp(f[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(u=>u.type===c.type&&u.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{i+=e.writeRtpMap(o),i+=e.writeFmtp(o),i+=e.writeRtcpFb(o)});let s=0;return n.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(i+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),s=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(y=>parseInt(y,10)));u.length>0&&u[0].length>1&&u[0][0]===c&&(l=u[0][1]),i.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let m={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(m.rtx={ssrc:l}),n.push(m),s&&(m=JSON.parse(JSON.stringify(m)),m.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(m))}}),n.length===0&&c&&n.push({ssrc:c});let f=e.matchPrefix(t,"b=");return f.length&&(f[0].indexOf("b=TIAS:")===0?f=parseInt(f[0].substring(7),10):f[0].indexOf("b=AS:")===0?f=parseInt(f[0].substring(5),10)*1e3*.95-50*40*8:f=void 0,n.forEach(d=>{d.maxBitrate=f})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let s;i.length>0&&(s=parseInt(i[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let s;const o=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let s=0;s<i.length;s++)switch(i[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},r.exports=e})(Dp);var Ip=Dp.exports;const as=ym(Ip),WM=xm({__proto__:null,default:as},[Ip]);function jo(r){if(!r.RTCIceCandidate||r.RTCIceCandidate&&"foundation"in r.RTCIceCandidate.prototype)return;const e=r.RTCIceCandidate;r.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),s=as.parseCandidate(n.candidate);for(const o in s)o in i||Object.defineProperty(i,o,{value:s[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},r.RTCIceCandidate.prototype=e.prototype,Sr(r,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new r.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Qc(r){!r.RTCIceCandidate||r.RTCIceCandidate&&"relayProtocol"in r.RTCIceCandidate.prototype||Sr(r,"icecandidate",e=>{if(e.candidate){const t=as.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Yo(r,e){if(!r.RTCPeerConnection)return;"sctp"in r.RTCPeerConnection.prototype||Object.defineProperty(r.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=as.splitSections(a.sdp);return c.shift(),c.some(l=>{const u=as.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=as.matchPrefix(a.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),u=s(arguments[0],c);let f;l===0&&u===0?f=Number.POSITIVE_INFINITY:l===0||u===0?f=Math.max(l,u):f=Math.min(l,u);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return f}}),this._sctp=d}return o.apply(this,arguments)}}function $o(r){if(!(r.RTCPeerConnection&&"createDataChannel"in r.RTCPeerConnection.prototype))return;function e(n,i){const s=n.send;n.send=function(){const a=arguments[0],c=a.length||a.size||a.byteLength;if(n.readyState==="open"&&i.sctp&&c>i.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+i.sctp.maxMessageSize+" bytes)");return s.apply(n,arguments)}}const t=r.RTCPeerConnection.prototype.createDataChannel;r.RTCPeerConnection.prototype.createDataChannel=function(){const i=t.apply(this,arguments);return e(i,this),i},Sr(r,"datachannel",n=>(e(n.channel,n.target),n))}function el(r){if(!r.RTCPeerConnection||"connectionState"in r.RTCPeerConnection.prototype)return;const e=r.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const s=i.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",i);s.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function tl(r,e){if(!r.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);r.RTCSessionDescription&&i instanceof r.RTCSessionDescription?arguments[0]=new r.RTCSessionDescription({type:i.type,sdp:s}):i.sdp=s}return t.apply(this,arguments)}}function qo(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(r.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Ko(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(r.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const XM=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:tl,shimAddIceCandidateNullOrEmpty:qo,shimConnectionState:el,shimMaxMessageSize:Yo,shimParameterlessSetLocalDescription:Ko,shimRTCIceCandidate:jo,shimRTCIceCandidateRelayProtocol:Qc,shimSendThrowTypeError:$o},Symbol.toStringTag,{value:"Module"}));function jM({window:r}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=ip,n=HM(r),i={browserDetails:n,commonShim:XM,extractVersion:Us,disableLog:zM,disableWarnings:GM,sdp:WM};switch(n.browser){case"chrome":if(!rf||!Jc||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=rf,qo(r,n),Ko(r),sp(r,n),op(r),Jc(r,n),ap(r),up(r,n),cp(r),lp(r),fp(r,n),jo(r),Qc(r),el(r),Yo(r,n),$o(r),tl(r,n);break;case"firefox":if(!sf||!Zc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=sf,qo(r,n),Ko(r),dp(r,n),Zc(r,n),pp(r),gp(r),mp(r),_p(r),vp(r),xp(r),yp(r),Sp(r),Mp(r),jo(r),el(r),Yo(r,n),$o(r);break;case"safari":if(!of||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=of,qo(r,n),Ko(r),Rp(r),wp(r),bp(r),Ep(r),Tp(r),Pp(r),Cp(r),Lp(r),jo(r),Qc(r),Yo(r,n),$o(r),tl(r,n);break;default:t("Unsupported browser!");break}return i}const af=jM({window:typeof window>"u"?void 0:window});function Mr(r,e,t,n){Object.defineProperty(r,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Op{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let s=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:s,data:c,total:i};t.push(l),o=a,s++}return this._dataCount++,t}}}function YM(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r)t.set(i,n),n+=i.byteLength;return t}const xc=af.default||af,Ds=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const r=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(r)?r==="chrome"?e>=this.minChromeVersion:r==="firefox"?e>=this.minFirefoxVersion:r==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return xc.browserDetails.browser}getVersion(){return xc.browserDetails.version||0}isUnifiedPlanSupported(){const r=this.getBrowser(),e=xc.browserDetails.version||0;if(r==="chrome"&&e<this.minChromeVersion)return!1;if(r==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},$M=r=>!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r),Up=()=>Math.random().toString(36).slice(2),cf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class qM extends Op{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=cf,this.browser=Ds.getBrowser(),this.browserVersion=Ds.getVersion(),this.pack=ep,this.unpack=Qd,this.supports=function(){const t={browser:Ds.isBrowserSupported(),webRTC:Ds.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(cf),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Ds.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=$M,this.randomToken=Up}}const xn=new qM,KM="PeerJS: ";class JM{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[KM,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var De=new JM,Il={},ZM=Object.prototype.hasOwnProperty,_n="~";function to(){}Object.create&&(to.prototype=Object.create(null),new to().__proto__||(_n=!1));function QM(r,e,t){this.fn=r,this.context=e,this.once=t||!1}function Np(r,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new QM(t,n||r,i),o=_n?_n+e:e;return r._events[o]?r._events[o].fn?r._events[o]=[r._events[o],s]:r._events[o].push(s):(r._events[o]=s,r._eventsCount++),r}function Jo(r,e){--r._eventsCount===0?r._events=new to:delete r._events[e]}function hn(){this._events=new to,this._eventsCount=0}hn.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)ZM.call(t,n)&&e.push(_n?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};hn.prototype.listeners=function(e){var t=_n?_n+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,s=n.length,o=new Array(s);i<s;i++)o[i]=n[i].fn;return o};hn.prototype.listenerCount=function(e){var t=_n?_n+e:e,n=this._events[t];return n?n.fn?1:n.length:0};hn.prototype.emit=function(e,t,n,i,s,o){var a=_n?_n+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,u,f;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,s),!0;case 6:return c.fn.call(c.context,t,n,i,s,o),!0}for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];c.fn.apply(c.context,u)}else{var d=c.length,m;for(f=0;f<d;f++)switch(c[f].once&&this.removeListener(e,c[f].fn,void 0,!0),l){case 1:c[f].fn.call(c[f].context);break;case 2:c[f].fn.call(c[f].context,t);break;case 3:c[f].fn.call(c[f].context,t,n);break;case 4:c[f].fn.call(c[f].context,t,n,i);break;default:if(!u)for(m=1,u=new Array(l-1);m<l;m++)u[m-1]=arguments[m];c[f].fn.apply(c[f].context,u)}}return!0};hn.prototype.on=function(e,t,n){return Np(this,e,t,n,!1)};hn.prototype.once=function(e,t,n){return Np(this,e,t,n,!0)};hn.prototype.removeListener=function(e,t,n,i){var s=_n?_n+e:e;if(!this._events[s])return this;if(!t)return Jo(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&Jo(this,s);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[s]=c.length===1?c[0]:c:Jo(this,s)}return this};hn.prototype.removeAllListeners=function(e){var t;return e?(t=_n?_n+e:e,this._events[t]&&Jo(this,t)):(this._events=new to,this._eventsCount=0),this};hn.prototype.off=hn.prototype.removeListener;hn.prototype.addListener=hn.prototype.on;hn.prefixed=_n;hn.EventEmitter=hn;Il=hn;var Er={};Mr(Er,"ConnectionType",()=>Vi);Mr(Er,"PeerErrorType",()=>zt);Mr(Er,"BaseConnectionErrorType",()=>nl);Mr(Er,"DataConnectionErrorType",()=>Ol);Mr(Er,"SerializationType",()=>ya);Mr(Er,"SocketEventType",()=>Fi);Mr(Er,"ServerMessageType",()=>sn);var Vi=function(r){return r.Data="data",r.Media="media",r}({}),zt=function(r){return r.BrowserIncompatible="browser-incompatible",r.Disconnected="disconnected",r.InvalidID="invalid-id",r.InvalidKey="invalid-key",r.Network="network",r.PeerUnavailable="peer-unavailable",r.SslUnavailable="ssl-unavailable",r.ServerError="server-error",r.SocketError="socket-error",r.SocketClosed="socket-closed",r.UnavailableID="unavailable-id",r.WebRTC="webrtc",r}({}),nl=function(r){return r.NegotiationFailed="negotiation-failed",r.ConnectionClosed="connection-closed",r}({}),Ol=function(r){return r.NotOpenYet="not-open-yet",r.MessageToBig="message-too-big",r}({}),ya=function(r){return r.Binary="binary",r.BinaryUTF8="binary-utf8",r.JSON="json",r.None="raw",r}({}),Fi=function(r){return r.Message="message",r.Disconnected="disconnected",r.Error="error",r.Close="close",r}({}),sn=function(r){return r.Heartbeat="HEARTBEAT",r.Candidate="CANDIDATE",r.Offer="OFFER",r.Answer="ANSWER",r.Open="OPEN",r.Error="ERROR",r.IdTaken="ID-TAKEN",r.InvalidKey="INVALID-KEY",r.Leave="LEAVE",r.Expire="EXPIRE",r}({});const Fp="1.5.5";class eE extends Il.EventEmitter{constructor(e,t,n,i,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Fp),this._disconnected=!1,this._socket.onmessage=i=>{let s;try{s=JSON.parse(i.data),De.log("Server message received:",s)}catch{De.log("Invalid server message",i.data);return}this.emit(Fi.Message,s)},this._socket.onclose=i=>{this._disconnected||(De.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(Fi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),De.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){De.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:sn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Fi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class kp{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Vi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},s=t.createDataChannel(n.label,i);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){De.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,s=this.connection.provider;De.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(De.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:sn.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":De.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(nl.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":De.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(nl.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":De.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},De.log("Listening for data channel"),e.ondatachannel=o=>{De.log("Received data channel");const a=o.channel;s.getConnection(t,n)._initializeDataChannel(a)},De.log("Listening for remote stream"),e.ontrack=o=>{De.log("Received remote stream");const a=o.streams[0],c=s.getConnection(t,n);if(c.type===Vi.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){De.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);De.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),De.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Vi.Data){const s=this.connection;i={...i,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:sn.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(zt.WebRTC,i),De.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(zt.WebRTC,n),De.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();De.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),De.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:sn.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(zt.WebRTC,i),De.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(zt.WebRTC,n),De.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;De.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),De.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){i.emitError(zt.WebRTC,o),De.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){De.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),De.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(zt.WebRTC,t),De.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(De.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return De.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){De.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Bp extends Il.EventEmitter{emitError(e,t){De.error("Error:",t),this.emit("error",new tE(`${e}`,t))}}class tE extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class zp extends Bp{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class ua extends zp{static#e=this.ID_PREFIX="mc_";get type(){return Vi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||ua.ID_PREFIX+xn.randomToken(),this._negotiator=new kp(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{De.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{De.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){De.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case sn.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case sn.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:De.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){De.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class nE{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:s,key:o}=this._options,a=new URL(`${t}://${n}:${i}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Fp),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){De.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==xn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===xn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw De.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class fa extends zp{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Vi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||fa.ID_PREFIX+Up(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new kp(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{De.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{De.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{De.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Ol.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case sn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case sn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:De.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class Ul extends fa{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>fa.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return De.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class yc extends Ul{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Op,this.serialization=ya.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Qd(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=YM(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=ep(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);De.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class iE extends Ul{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=ya.None}}class rE extends Ul{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=xn.chunkedMTU){this.emitError(Ol.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=ya.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class Nl extends Bp{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:iE,json:rE,binary:yc,"binary-utf8":yc,default:yc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:xn.CLOUD_HOST,port:xn.CLOUD_PORT,path:"/",key:Nl.DEFAULT_KEY,token:xn.randomToken(),config:xn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==xn.CLOUD_HOST?this._options.secure=xn.isSecure():this._options.host==xn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&De.setLogFunction(this._options.logFunction),De.logLevel=this._options.debug||0,this._api=new nE(t),this._socket=this._createServerConnection(),!xn.supports.audioVideo&&!xn.supports.data){this._delayedAbort(zt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!xn.validateId(n)){this._delayedAbort(zt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(zt.ServerError,i))}_createServerConnection(){const e=new eE(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Fi.Message,t=>{this._handleMessage(t)}),e.on(Fi.Error,t=>{this._abort(zt.SocketError,t)}),e.on(Fi.Disconnected,()=>{this.disconnected||(this.emitError(zt.Network,"Lost connection to server."),this.disconnect())}),e.on(Fi.Close,()=>{this.disconnected||this._abort(zt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case sn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case sn.Error:this._abort(zt.ServerError,n.msg);break;case sn.IdTaken:this._abort(zt.UnavailableID,`ID "${this.id}" is taken`);break;case sn.InvalidKey:this._abort(zt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case sn.Leave:De.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case sn.Expire:this.emitError(zt.PeerUnavailable,`Could not connect to peer ${i}`);break;case sn.Offer:{const s=n.connectionId;let o=this.getConnection(i,s);if(o&&(o.close(),De.warn(`Offer received for existing Connection ID:${s}`)),n.type===Vi.Media){const c=new ua(i,this,{connectionId:s,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===Vi.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{De.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(s);for(const c of a)o.handleMessage(c);break}default:{if(!n){De.warn(`You received a malformed message from ${i} of type ${t}`);return}const s=n.connectionId,o=this.getConnection(i,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):De.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){De.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(zt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){De.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(zt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){De.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new ua(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){De.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){De.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(De.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;De.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)De.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)De.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(zt.ServerError,t))}}var sE=Nl;class oE{peer=null;connections=new Map;roomCode="";statusCallback=null;eventCallback=null;isHost=!1;constructor(){this.roomCode=this.generateRoomCode()}generateRoomCode(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let n=0;n<6;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}getRoomCode(){return this.roomCode}onStatusChange(e){this.statusCallback=e}onEvent(e){this.eventCallback=e}updateStatus(e,t){this.statusCallback&&this.statusCallback(e,t)}emitEvent(e){this.eventCallback&&this.eventCallback(e)}async initialize(){return new Promise((e,t)=>{const n=`aircanvas-${this.roomCode}`;this.peer=new sE(n,{debug:0}),this.peer.on("open",i=>{console.log("Connected to PeerJS with ID:",i),this.isHost=!0,this.updateStatus("disconnected","Ready to connect"),e()}),this.peer.on("connection",i=>{this.handleConnection(i)}),this.peer.on("error",i=>{console.error("PeerJS error:",i),i.type==="unavailable-id"?(this.roomCode=this.generateRoomCode(),this.peer?.destroy(),this.initialize().then(e).catch(t)):i.type==="peer-unavailable"?this.updateStatus("disconnected","Room not found"):(this.updateStatus("disconnected","Connection error"),t(i))}),this.peer.on("disconnected",()=>{this.updateStatus("disconnected","Disconnected from server")})})}handleConnection(e){const t=e.peer;e.on("open",()=>{this.connections.set(t,e),this.updateStatus("connected",`Connected (${this.connections.size} peer${this.connections.size>1?"s":""})`),this.emitEvent({type:"peer_joined",peerId:t})}),e.on("data",n=>{const i=n;this.emitEvent(i),this.isHost&&this.broadcastExcept(i,t)}),e.on("close",()=>{this.connections.delete(t),this.connections.size===0?this.updateStatus("disconnected","Not connected"):this.updateStatus("connected",`Connected (${this.connections.size} peer${this.connections.size>1?"s":""})`),this.emitEvent({type:"peer_left",peerId:t})}),e.on("error",n=>{console.error("Connection error:",n),this.connections.delete(t)})}async joinRoom(e){if(!this.peer)throw new Error("Peer not initialized");const t=`aircanvas-${e.toUpperCase()}`;return this.updateStatus("connecting","Connecting..."),new Promise((n,i)=>{const s=this.peer.connect(t,{reliable:!0}),o=setTimeout(()=>{s.close(),this.updateStatus("disconnected","Connection timeout"),i(new Error("Connection timeout"))},1e4);s.on("open",()=>{clearTimeout(o),this.handleConnection(s),this.isHost=!1,n()}),s.on("error",a=>{clearTimeout(o),console.error("Failed to connect:",a),this.updateStatus("disconnected","Failed to connect"),i(a)})})}broadcast(e){const t=e;this.connections.forEach(n=>{n.open&&n.send(t)})}broadcastExcept(e,t){this.connections.forEach((n,i)=>{n.open&&i!==t&&n.send(e)})}isConnected(){return this.connections.size>0}getConnectionCount(){return this.connections.size}disconnect(){this.connections.forEach(e=>{e.close()}),this.connections.clear(),this.updateStatus("disconnected","Not connected")}destroy(){this.disconnect(),this.peer?.destroy(),this.peer=null}}class aE{handTracker;gestureDetector;drawingCanvas;handVisualizer;scene3D;objectManager;multiplayer;previewVideo;previewCanvas;previewCtx;loadingOverlay;statusMessage;colorSwatches;inviteModal;roomCodeDisplay;joinCodeInput;statusDot;statusText;isDrawing=!1;currentColor="#FFB3BA";lastGestureState=null;currentLandmarks=null;palmHoldStart=0;handDetected=!1;lastFrameTime=0;grabbedObject=null;lastPinchPosition=null;isDragging=!1;lastMouseX=0;lastMouseY=0;selectedObject=null;isPreviewDragging=!1;previewDragStartX=0;previewDragStartY=0;previewStartLeft=0;previewStartTop=0;constructor(){const e=document.getElementById("webcam"),t=document.getElementById("scene-canvas"),n=document.getElementById("draw-canvas"),i=document.getElementById("hand-canvas");this.previewVideo=document.getElementById("preview-video"),this.previewCanvas=document.getElementById("preview-canvas"),this.previewCtx=this.previewCanvas.getContext("2d"),this.loadingOverlay=document.getElementById("loading-overlay"),this.statusMessage=document.getElementById("status-message"),this.colorSwatches=document.querySelectorAll(".color-swatch"),this.inviteModal=document.getElementById("invite-modal"),this.roomCodeDisplay=document.getElementById("room-code"),this.joinCodeInput=document.getElementById("join-code-input"),this.statusDot=document.getElementById("status-dot"),this.statusText=document.getElementById("status-text"),this.handTracker=new Mm(e),this.gestureDetector=new Em,this.drawingCanvas=new bm(n),this.handVisualizer=new Am(i),this.scene3D=new mS(t),this.objectManager=new UM(this.scene3D,window.innerWidth,window.innerHeight),this.multiplayer=new oE,this.resize(),this.setupEventListeners(),this.setupButtonListeners(),this.setupPreviewDrag(),this.setupMultiplayer(),this.init()}setupEventListeners(){window.addEventListener("resize",()=>this.resize()),this.colorSwatches.forEach(t=>{t.addEventListener("click",()=>{this.colorSwatches.forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.currentColor=t.dataset.color||"#FFB3BA"})});const e=document.getElementById("scene-canvas");e.addEventListener("mousedown",t=>this.onMouseDown(t)),e.addEventListener("mousemove",t=>this.onMouseMove(t)),e.addEventListener("mouseup",()=>this.onMouseUp()),e.addEventListener("mouseleave",()=>this.onMouseUp()),e.addEventListener("wheel",t=>this.onWheel(t)),e.addEventListener("touchstart",t=>this.onTouchStart(t)),e.addEventListener("touchmove",t=>this.onTouchMove(t)),e.addEventListener("touchend",()=>this.onMouseUp()),e.addEventListener("click",t=>this.onSceneClick(t))}setupButtonListeners(){document.getElementById("clear-all-btn")?.addEventListener("click",()=>{this.clearAll(),this.multiplayer.isConnected()&&this.multiplayer.broadcast({type:"clear_all"})}),document.getElementById("invite-btn")?.addEventListener("click",()=>{this.openInviteModal()}),document.getElementById("modal-close")?.addEventListener("click",()=>{this.closeInviteModal()}),this.inviteModal?.addEventListener("click",c=>{c.target===this.inviteModal&&this.closeInviteModal()}),document.getElementById("copy-code-btn")?.addEventListener("click",()=>{this.copyRoomCode()}),document.getElementById("join-room-btn")?.addEventListener("click",()=>{this.joinRoom()}),this.joinCodeInput?.addEventListener("keypress",c=>{c.key==="Enter"&&this.joinRoom()});const o=document.getElementById("preview-expand-btn"),a=document.getElementById("camera-preview");o?.addEventListener("click",c=>{c.stopPropagation(),a?.classList.toggle("expanded"),this.updatePreviewCanvasSize()})}setupPreviewDrag(){const e=document.getElementById("camera-preview"),t=document.getElementById("preview-expand-btn");e&&(e.addEventListener("mousedown",n=>{n.target!==t&&this.startPreviewDrag(n.clientX,n.clientY,e)}),document.addEventListener("mousemove",n=>{this.isPreviewDragging&&this.movePreview(n.clientX,n.clientY,e)}),document.addEventListener("mouseup",()=>{this.endPreviewDrag(e)}),e.addEventListener("touchstart",n=>{n.target!==t&&n.touches.length===1&&(n.preventDefault(),this.startPreviewDrag(n.touches[0].clientX,n.touches[0].clientY,e))},{passive:!1}),document.addEventListener("touchmove",n=>{this.isPreviewDragging&&n.touches.length===1&&this.movePreview(n.touches[0].clientX,n.touches[0].clientY,e)},{passive:!0}),document.addEventListener("touchend",()=>{this.endPreviewDrag(e)}),e.addEventListener("dblclick",n=>{n.target!==t&&this.resetPreviewPosition(e)}))}resetPreviewPosition(e){e.classList.remove("custom-position"),e.style.left="",e.style.top=""}startPreviewDrag(e,t,n){this.isPreviewDragging=!0,this.previewDragStartX=e,this.previewDragStartY=t;const i=n.getBoundingClientRect();this.previewStartLeft=i.left,this.previewStartTop=i.top,n.classList.add("dragging")}movePreview(e,t,n){const i=e-this.previewDragStartX,s=t-this.previewDragStartY;let o=this.previewStartLeft+i,a=this.previewStartTop+s;const c=n.getBoundingClientRect(),l=window.innerWidth-c.width,u=window.innerHeight-c.height;o=Math.max(0,Math.min(o,l)),a=Math.max(0,Math.min(a,u)),n.classList.add("custom-position"),n.style.left=`${o}px`,n.style.top=`${a}px`}endPreviewDrag(e){this.isPreviewDragging&&(this.isPreviewDragging=!1,e.classList.remove("dragging"))}updatePreviewCanvasSize(){const e=document.getElementById("camera-preview");if(e){const t=e.getBoundingClientRect();this.previewCanvas.width=t.width,this.previewCanvas.height=t.height}}setupMultiplayer(){this.multiplayer.initialize().then(()=>{this.roomCodeDisplay.textContent=this.multiplayer.getRoomCode()}).catch(e=>{console.error("Failed to initialize multiplayer:",e)}),this.multiplayer.onStatusChange((e,t)=>{this.statusDot.className="status-dot",e==="connected"?this.statusDot.classList.add("connected"):e==="connecting"&&this.statusDot.classList.add("connecting"),this.statusText.textContent=t}),this.multiplayer.onEvent(e=>{this.handleMultiplayerEvent(e)})}handleMultiplayerEvent(e){switch(e.type){case"balloon_created":this.objectManager.createFromStroke(e.strokeData);break;case"clear_all":this.drawingCanvas.clearAll(),this.objectManager.clearAll();break;case"peer_joined":this.showStatus("Friend joined!",2e3);break;case"peer_left":this.showStatus("Friend left",2e3);break}}openInviteModal(){this.inviteModal.classList.add("visible")}closeInviteModal(){this.inviteModal.classList.remove("visible")}async copyRoomCode(){const e=this.multiplayer.getRoomCode();try{await navigator.clipboard.writeText(e);const t=document.getElementById("copy-code-btn");t&&(t.textContent="✓",setTimeout(()=>{t.textContent="📋"},2e3))}catch{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}async joinRoom(){const e=this.joinCodeInput.value.trim().toUpperCase();if(e.length!==6){this.statusText.textContent="Please enter a 6-character code";return}try{await this.multiplayer.joinRoom(e),this.showStatus("Connected!",2e3)}catch{this.statusText.textContent="Failed to connect"}}onMouseDown(e){this.isDragging=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY;const t=this.objectManager.getObjectAtPosition(e.clientX,e.clientY);t&&(this.selectedObject=t)}onMouseMove(e){if(!this.isDragging)return;const t=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY;this.selectedObject?this.objectManager.rotateObject(this.selectedObject,t*.01,n*.01):this.scene3D.orbitCamera(t*.005,n*.005),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY}onMouseUp(){this.isDragging=!1,this.selectedObject=null}onWheel(e){e.preventDefault(),this.scene3D.zoomCamera(e.deltaY*.001)}onTouchStart(e){if(e.touches.length===1){this.isDragging=!0,this.lastMouseX=e.touches[0].clientX,this.lastMouseY=e.touches[0].clientY;const t=this.objectManager.getObjectAtPosition(e.touches[0].clientX,e.touches[0].clientY);t&&(this.selectedObject=t)}}onTouchMove(e){if(!this.isDragging||e.touches.length!==1)return;const t=e.touches[0].clientX-this.lastMouseX,n=e.touches[0].clientY-this.lastMouseY;this.selectedObject?this.objectManager.rotateObject(this.selectedObject,t*.01,n*.01):this.scene3D.orbitCamera(t*.005,n*.005),this.lastMouseX=e.touches[0].clientX,this.lastMouseY=e.touches[0].clientY}onSceneClick(e){const t=this.objectManager.getObjectAtPosition(e.clientX,e.clientY);t&&this.objectManager.selectObject(t)}async init(){try{await this.handTracker.start(e=>this.onHandResults(e)),this.setupCameraPreview(),this.loadingOverlay.classList.add("hidden"),this.animate()}catch(e){console.error("Failed to initialize:",e),this.showStatus("Camera access denied. Please allow camera access and refresh.")}}setupCameraPreview(){const e=document.getElementById("webcam");e.srcObject&&(this.previewVideo.srcObject=e.srcObject,this.previewVideo.play()),this.previewCanvas.width=320,this.previewCanvas.height=240}resize(){const e=window.innerWidth,t=window.innerHeight;this.handTracker.setCanvasSize(e,t),this.drawingCanvas.resize(e,t),this.handVisualizer.resize(e,t),this.scene3D.resize(e,t),this.objectManager.updateSize(e,t)}onHandResults(e){const t=this.handDetected;if(this.handDetected=e!==null,this.currentLandmarks=e,!this.handDetected&&t?this.showStatus("Show your hand to begin"):this.handDetected&&!t&&this.hideStatus(),this.renderPreviewOverlay(e),!e){this.isDrawing&&(this.isDrawing=!1);return}const n=this.gestureDetector.detect(e);this.handleGesture(n,e),this.lastGestureState=n}renderPreviewOverlay(e){const t=this.previewCanvas.width||320,n=this.previewCanvas.height||240;if(this.previewCtx.clearRect(0,0,t,n),!e)return;const i=Math.min(t/window.innerWidth,n/window.innerHeight),s=(t-window.innerWidth*i)/2,o=(n-window.innerHeight*i)/2,a=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]],c=t/320;this.previewCtx.strokeStyle="#bee17d",this.previewCtx.lineWidth=2*c;for(const[l,u]of a){const f=e.landmarks[l],d=e.landmarks[u];this.previewCtx.beginPath(),this.previewCtx.moveTo(f.x*i+s,f.y*i+o),this.previewCtx.lineTo(d.x*i+s,d.y*i+o),this.previewCtx.stroke()}this.previewCtx.fillStyle="#bee17d";for(const l of e.landmarks)this.previewCtx.beginPath(),this.previewCtx.arc(l.x*i+s,l.y*i+o,3*c,0,Math.PI*2),this.previewCtx.fill()}handleGesture(e,t){const n=this.gestureDetector.getIndexTip(t);switch(e.current){case"draw":this.handleDraw(n);break;case"pinch":this.handlePinch(t);break;case"palm":this.handlePalm();break;case"swipe":this.handleSwipe(n);break;default:this.grabbedObject&&(this.objectManager.releaseObject(this.grabbedObject),this.grabbedObject=null,this.lastPinchPosition=null);break}this.lastGestureState&&e.current!==this.lastGestureState.current&&(this.palmHoldStart=0,this.lastGestureState.current==="draw"&&this.drawingCanvas.clearLivePosition())}handleDraw(e){this.drawingCanvas.updateLivePosition(e);const t=this.objectManager.getObjectAtPosition(e.x,e.y);if(t){this.objectManager.pokeObject(t);return}this.isDrawing?this.drawingCanvas.addPoint(e):(this.isDrawing=!0,this.drawingCanvas.startStroke(e,this.currentColor)),this.drawingCanvas.render()}handlePinch(e){const t=this.gestureDetector.getPinchCenter(e);if(this.isDrawing&&(this.isDrawing=!1,this.drawingCanvas.pauseStroke()),this.grabbedObject){if(this.lastPinchPosition){const n=t.x-this.lastPinchPosition.x,i=t.y-this.lastPinchPosition.y;this.objectManager.moveGrabbedObject(this.grabbedObject,t.x,t.y),this.objectManager.rotateObject(this.grabbedObject,n*.02,i*.02)}this.lastPinchPosition=t}else{const n=this.objectManager.getObjectAtPosition(t.x,t.y);n&&(this.grabbedObject=n,this.objectManager.grabObject(n),this.lastPinchPosition=t)}}handlePalm(){this.grabbedObject&&(this.objectManager.releaseObject(this.grabbedObject),this.grabbedObject=null,this.lastPinchPosition=null),this.palmHoldStart===0&&(this.palmHoldStart=performance.now()),performance.now()-this.palmHoldStart>=Kr.PALM_HOLD_TIME&&(this.closeAndInflate(),this.palmHoldStart=0)}handleSwipe(e){const t=this.objectManager.getObjectAtPosition(e.x,e.y);t&&this.objectManager.removeObject(t)}async closeAndInflate(){const e=this.drawingCanvas.closeStroke();if(this.drawingCanvas.clearLivePosition(),!e){this.showStatus("Draw a larger shape",1e3);return}this.isDrawing=!1;const t=performance.now(),n=()=>{const i=performance.now()-t,s=Math.min(i/(Li.STROKE_CLOSE_PULSE*1e3),1);this.drawingCanvas.renderClosingAnimation(e,s),s<1?requestAnimationFrame(n):this.createBalloon(e)};n()}async createBalloon(e){this.drawingCanvas.removeCompletedStroke(e),this.drawingCanvas.clear();try{await this.objectManager.createFromStroke(e),this.multiplayer.isConnected()&&this.multiplayer.broadcast({type:"balloon_created",strokeData:e})}catch(t){console.error("Failed to create balloon:",t),this.showStatus("Failed to create shape",2e3)}}async clearAll(){this.showStatus("Clearing all..."),this.drawingCanvas.clearAll(),await this.objectManager.clearAll(),this.hideStatus()}animate(){requestAnimationFrame(()=>this.animate());const e=performance.now(),t=this.lastFrameTime>0?(e-this.lastFrameTime)/1e3:.016;this.lastFrameTime=e,this.objectManager.update(t,e/1e3),this.scene3D.render(),this.drawingCanvas.render();const n=this.lastGestureState||{current:"none",previous:"none",duration:0,velocity:{x:0,y:0},confidence:0};this.handVisualizer.render(this.currentLandmarks,n,this.currentColor,t)}showStatus(e,t){this.statusMessage.textContent=e,this.statusMessage.classList.add("visible"),t&&setTimeout(()=>this.hideStatus(),t)}hideStatus(){this.statusMessage.classList.remove("visible")}}document.addEventListener("DOMContentLoaded",()=>{new aE});
