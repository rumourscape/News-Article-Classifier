(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function hi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Z={},Qe=[],Ut=()=>{},uc=()=>!1,hc=/^on[^a-z]/,Lr=t=>hc.test(t),fi=t=>t.startsWith("onUpdate:"),ht=Object.assign,di=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fc=Object.prototype.hasOwnProperty,B=(t,e)=>fc.call(t,e),A=Array.isArray,Cn=t=>Nr(t)==="[object Map]",dc=t=>Nr(t)==="[object Set]",L=t=>typeof t=="function",dt=t=>typeof t=="string",pi=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",_l=t=>at(t)&&L(t.then)&&L(t.catch),pc=Object.prototype.toString,Nr=t=>pc.call(t),gc=t=>Nr(t).slice(8,-1),bc=t=>Nr(t)==="[object Object]",gi=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vr=hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vc=/-(\w)/g,te=Br(t=>t.replace(vc,(e,n)=>n?n.toUpperCase():"")),mc=/\B([A-Z])/g,ln=Br(t=>t.replace(mc,"-$1").toLowerCase()),Mr=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),ws=Br(t=>t?`on${Mr(t)}`:""),Fr=(t,e)=>!Object.is(t,e),xs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Sr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},yc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let po;const Ws=()=>po||(po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bi(t){if(A(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=dt(r)?Fc(r):bi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(dt(t))return t;if(at(t))return t}}const wc=/;(?![^(]*\))/g,xc=/:([^]+)/,$c=/\/\*[^]*?\*\//g;function Fc(t){const e={};return t.replace($c,"").split(wc).forEach(n=>{if(n){const r=n.split(xc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vi(t){let e="";if(dt(t))e=t;else if(A(t))for(let n=0;n<t.length;n++){const r=vi(t[n]);r&&(e+=r+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cc=hi(Sc);function Il(t){return!!t||t===""}let Nt;class Dc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Tc(t,e=Nt){e&&e.active&&e.effects.push(t)}function Vc(){return Nt}const mi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},kl=t=>(t.w&we)>0,El=t=>(t.n&we)>0,Rc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=we},_c=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];kl(s)&&!El(s)?s.delete(t):e[n++]=s,s.w&=~we,s.n&=~we}e.length=n}},Gs=new WeakMap;let Fn=0,we=1;const Ys=30;let Ht;const Ae=Symbol(""),Js=Symbol("");class yi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Tc(this,r)}run(){if(!this.active)return this.fn();let e=Ht,n=ve;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,ve=!0,we=1<<++Fn,Fn<=Ys?Rc(this):go(this),this.fn()}finally{Fn<=Ys&&_c(this),we=1<<--Fn,Ht=this.parent,ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(go(this),this.onStop&&this.onStop(),this.active=!1)}}function go(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ve=!0;const Ol=[];function an(){Ol.push(ve),ve=!1}function cn(){const t=Ol.pop();ve=t===void 0?!0:t}function Ct(t,e,n){if(ve&&Ht){let r=Gs.get(t);r||Gs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=mi()),Pl(s)}}function Pl(t,e){let n=!1;Fn<=Ys?El(t)||(t.n|=we,n=!kl(t)):n=!t.has(Ht),n&&(t.add(Ht),Ht.deps.push(t))}function ae(t,e,n,r,s,i){const o=Gs.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&A(t)){const a=Number(r);o.forEach((c,h)=>{(h==="length"||h>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":A(t)?gi(n)&&l.push(o.get("length")):(l.push(o.get(Ae)),Cn(t)&&l.push(o.get(Js)));break;case"delete":A(t)||(l.push(o.get(Ae)),Cn(t)&&l.push(o.get(Js)));break;case"set":Cn(t)&&l.push(o.get(Ae));break}if(l.length===1)l[0]&&Qs(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Qs(mi(a))}}function Qs(t,e){const n=A(t)?t:[...t];for(const r of n)r.computed&&bo(r);for(const r of n)r.computed||bo(r)}function bo(t,e){(t!==Ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ic=hi("__proto__,__v_isRef,__isVue"),Al=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pi)),kc=wi(),Ec=wi(!1,!0),Oc=wi(!0),vo=Pc();function Pc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=j(this);for(let i=0,o=this.length;i<o;i++)Ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(j)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an();const r=j(this)[e].apply(this,n);return cn(),r}}),t}function Ac(t){const e=j(this);return Ct(e,"has",t),e.hasOwnProperty(t)}function wi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Zc:Hl:e?Ml:Bl).get(r))return r;const o=A(r);if(!t){if(o&&B(vo,s))return Reflect.get(vo,s,i);if(s==="hasOwnProperty")return Ac}const l=Reflect.get(r,s,i);return(pi(s)?Al.has(s):Ic(s))||(t||Ct(r,"get",s),e)?l:yt(l)?o&&gi(s)?l:l.value:at(l)?t?jl(l):Fi(l):l}}const Lc=Ll(),Nc=Ll(!0);function Ll(t=!1){return function(n,r,s,i){let o=n[r];if(kn(o)&&yt(o)&&!yt(s))return!1;if(!t&&(!Xs(s)&&!kn(s)&&(o=j(o),s=j(s)),!A(n)&&yt(o)&&!yt(s)))return o.value=s,!0;const l=A(n)&&gi(r)?Number(r)<n.length:B(n,r),a=Reflect.set(n,r,s,i);return n===j(i)&&(l?Fr(s,o)&&ae(n,"set",r,s):ae(n,"add",r,s)),a}}function Bc(t,e){const n=B(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ae(t,"delete",e,void 0),r}function Mc(t,e){const n=Reflect.has(t,e);return(!pi(e)||!Al.has(e))&&Ct(t,"has",e),n}function Hc(t){return Ct(t,"iterate",A(t)?"length":Ae),Reflect.ownKeys(t)}const Nl={get:kc,set:Lc,deleteProperty:Bc,has:Mc,ownKeys:Hc},jc={get:Oc,set(t,e){return!0},deleteProperty(t,e){return!0}},zc=ht({},Nl,{get:Ec,set:Nc}),xi=t=>t,Hr=t=>Reflect.getPrototypeOf(t);function tr(t,e,n=!1,r=!1){t=t.__v_raw;const s=j(t),i=j(e);n||(e!==i&&Ct(s,"get",e),Ct(s,"get",i));const{has:o}=Hr(s),l=r?xi:n?Di:Ci;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function er(t,e=!1){const n=this.__v_raw,r=j(n),s=j(t);return e||(t!==s&&Ct(r,"has",t),Ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function nr(t,e=!1){return t=t.__v_raw,!e&&Ct(j(t),"iterate",Ae),Reflect.get(t,"size",t)}function mo(t){t=j(t);const e=j(this);return Hr(e).has.call(e,t)||(e.add(t),ae(e,"add",t,t)),this}function yo(t,e){e=j(e);const n=j(this),{has:r,get:s}=Hr(n);let i=r.call(n,t);i||(t=j(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Fr(e,o)&&ae(n,"set",t,e):ae(n,"add",t,e),this}function wo(t){const e=j(this),{has:n,get:r}=Hr(e);let s=n.call(e,t);s||(t=j(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ae(e,"delete",t,void 0),i}function xo(){const t=j(this),e=t.size!==0,n=t.clear();return e&&ae(t,"clear",void 0,void 0),n}function rr(t,e){return function(r,s){const i=this,o=i.__v_raw,l=j(o),a=e?xi:t?Di:Ci;return!t&&Ct(l,"iterate",Ae),o.forEach((c,h)=>r.call(s,a(c),a(h),i))}}function sr(t,e,n){return function(...r){const s=this.__v_raw,i=j(s),o=Cn(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...r),h=n?xi:e?Di:Ci;return!e&&Ct(i,"iterate",a?Js:Ae),{next(){const{value:p,done:m}=c.next();return m?{value:p,done:m}:{value:l?[h(p[0]),h(p[1])]:h(p),done:m}},[Symbol.iterator](){return this}}}}function de(t){return function(...e){return t==="delete"?!1:this}}function Uc(){const t={get(i){return tr(this,i)},get size(){return nr(this)},has:er,add:mo,set:yo,delete:wo,clear:xo,forEach:rr(!1,!1)},e={get(i){return tr(this,i,!1,!0)},get size(){return nr(this)},has:er,add:mo,set:yo,delete:wo,clear:xo,forEach:rr(!1,!0)},n={get(i){return tr(this,i,!0)},get size(){return nr(this,!0)},has(i){return er.call(this,i,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:rr(!0,!1)},r={get(i){return tr(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return er.call(this,i,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[t,n,e,r]}const[qc,Wc,Gc,Yc]=Uc();function $i(t,e){const n=e?t?Yc:Gc:t?Wc:qc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(B(n,s)&&s in r?n:r,s,i)}const Jc={get:$i(!1,!1)},Qc={get:$i(!1,!0)},Xc={get:$i(!0,!1)},Bl=new WeakMap,Ml=new WeakMap,Hl=new WeakMap,Zc=new WeakMap;function Kc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tu(t){return t.__v_skip||!Object.isExtensible(t)?0:Kc(gc(t))}function Fi(t){return kn(t)?t:Si(t,!1,Nl,Jc,Bl)}function eu(t){return Si(t,!1,zc,Qc,Ml)}function jl(t){return Si(t,!0,jc,Xc,Hl)}function Si(t,e,n,r,s){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=tu(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Xe(t){return kn(t)?Xe(t.__v_raw):!!(t&&t.__v_isReactive)}function kn(t){return!!(t&&t.__v_isReadonly)}function Xs(t){return!!(t&&t.__v_isShallow)}function zl(t){return Xe(t)||kn(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Ul(t){return Sr(t,"__v_skip",!0),t}const Ci=t=>at(t)?Fi(t):t,Di=t=>at(t)?jl(t):t;function nu(t){ve&&Ht&&(t=j(t),Pl(t.dep||(t.dep=mi())))}function ru(t,e){t=j(t);const n=t.dep;n&&Qs(n)}function yt(t){return!!(t&&t.__v_isRef===!0)}function su(t){return yt(t)?t.value:t}const iu={get:(t,e,n)=>su(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ql(t){return Xe(t)?t:new Proxy(t,iu)}class ou{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new yi(e,()=>{this._dirty||(this._dirty=!0,ru(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=j(this);return nu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function lu(t,e,n=!1){let r,s;const i=L(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new ou(r,s,i||!s,n)}function me(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){jr(i,e,n)}return s}function qt(t,e,n,r){if(L(t)){const i=me(t,e,n,r);return i&&_l(i)&&i.catch(o=>{jr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(qt(t[i],e,n,r));return s}function jr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const c=i.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){me(a,null,10,[t,o,l]);return}}au(t,n,s,r)}function au(t,e,n,r=!0){console.error(t)}let En=!1,Zs=!1;const pt=[];let Kt=0;const Ze=[];let ie=null,ke=0;const Wl=Promise.resolve();let Ti=null;function cu(t){const e=Ti||Wl;return t?e.then(this?t.bind(this):t):e}function uu(t){let e=Kt+1,n=pt.length;for(;e<n;){const r=e+n>>>1;On(pt[r])<t?e=r+1:n=r}return e}function Vi(t){(!pt.length||!pt.includes(t,En&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?pt.push(t):pt.splice(uu(t.id),0,t),Gl())}function Gl(){!En&&!Zs&&(Zs=!0,Ti=Wl.then(Jl))}function hu(t){const e=pt.indexOf(t);e>Kt&&pt.splice(e,1)}function fu(t){A(t)?Ze.push(...t):(!ie||!ie.includes(t,t.allowRecurse?ke+1:ke))&&Ze.push(t),Gl()}function $o(t,e=En?Kt+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function Yl(t){if(Ze.length){const e=[...new Set(Ze)];if(Ze.length=0,ie){ie.push(...e);return}for(ie=e,ie.sort((n,r)=>On(n)-On(r)),ke=0;ke<ie.length;ke++)ie[ke]();ie=null,ke=0}}const On=t=>t.id==null?1/0:t.id,du=(t,e)=>{const n=On(t)-On(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Jl(t){Zs=!1,En=!0,pt.sort(du);const e=Ut;try{for(Kt=0;Kt<pt.length;Kt++){const n=pt[Kt];n&&n.active!==!1&&me(n,null,14)}}finally{Kt=0,pt.length=0,Yl(),En=!1,Ti=null,(pt.length||Ze.length)&&Jl()}}function pu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[h]||Z;m&&(s=n.map(D=>dt(D)?D.trim():D)),p&&(s=n.map(yc))}let l,a=r[l=ws(e)]||r[l=ws(te(e))];!a&&i&&(a=r[l=ws(ln(e))]),a&&qt(a,t,6,s);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qt(c,t,6,s)}}function Ql(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!L(t)){const a=c=>{const h=Ql(c,e,!0);h&&(l=!0,ht(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(at(t)&&r.set(t,null),null):(A(i)?i.forEach(a=>o[a]=null):ht(o,i),at(t)&&r.set(t,o),o)}function zr(t,e){return!t||!Lr(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,ln(e))||B(t,e))}let jt=null,Ur=null;function Cr(t){const e=jt;return jt=t,Ur=t&&t.type.__scopeId||null,e}function gu(t){Ur=t}function bu(){Ur=null}function Ge(t,e=jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Eo(-1);const i=Cr(e);let o;try{o=t(...s)}finally{Cr(i),r._d&&Eo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $s(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:p,data:m,setupState:D,ctx:E,inheritAttrs:R}=t;let M,X;const z=Cr(t);try{if(n.shapeFlag&4){const P=s||r;M=Zt(h.call(P,P,p,i,D,m,E)),X=a}else{const P=e;M=Zt(P.length>1?P(i,{attrs:a,slots:l,emit:c}):P(i,null)),X=e.props?a:vu(a)}}catch(P){Tn.length=0,jr(P,t,1),M=vt(Pn)}let q=M;if(X&&R!==!1){const P=Object.keys(X),{shapeFlag:Ft}=q;P.length&&Ft&7&&(o&&P.some(fi)&&(X=mu(X,o)),q=en(q,X))}return n.dirs&&(q=en(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),M=q,Cr(z),M}const vu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lr(n))&&((e||(e={}))[n]=t[n]);return e},mu=(t,e)=>{const n={};for(const r in t)(!fi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Fo(r,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const m=h[p];if(o[m]!==r[m]&&!zr(c,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Fo(r,o,c):!0:!!o;return!1}function Fo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!zr(n,i))return!0}return!1}function wu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xu=t=>t.__isSuspense;function $u(t,e){e&&e.pendingBranch?A(t)?e.effects.push(...t):e.effects.push(t):fu(t)}const ir={};function Fs(t,e,n){return Xl(t,e,n)}function Xl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){var l;const a=Vc()===((l=ft)==null?void 0:l.scope)?ft:null;let c,h=!1,p=!1;if(yt(t)?(c=()=>t.value,h=Xs(t)):Xe(t)?(c=()=>t,r=!0):A(t)?(p=!0,h=t.some(P=>Xe(P)||Xs(P)),c=()=>t.map(P=>{if(yt(P))return P.value;if(Xe(P))return Ye(P);if(L(P))return me(P,a,2)})):L(t)?e?c=()=>me(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return m&&m(),qt(t,a,3,[D])}:c=Ut,e&&r){const P=c;c=()=>Ye(P())}let m,D=P=>{m=z.onStop=()=>{me(P,a,4)}},E;if(Ln)if(D=Ut,e?n&&qt(e,a,3,[c(),p?[]:void 0,D]):c(),s==="sync"){const P=wh();E=P.__watcherHandles||(P.__watcherHandles=[])}else return Ut;let R=p?new Array(t.length).fill(ir):ir;const M=()=>{if(z.active)if(e){const P=z.run();(r||h||(p?P.some((Ft,Gt)=>Fr(Ft,R[Gt])):Fr(P,R)))&&(m&&m(),qt(e,a,3,[P,R===ir?void 0:p&&R[0]===ir?[]:R,D]),R=P)}else z.run()};M.allowRecurse=!!e;let X;s==="sync"?X=M:s==="post"?X=()=>St(M,a&&a.suspense):(M.pre=!0,a&&(M.id=a.uid),X=()=>Vi(M));const z=new yi(c,X);e?n?M():R=z.run():s==="post"?St(z.run.bind(z),a&&a.suspense):z.run();const q=()=>{z.stop(),a&&a.scope&&di(a.scope.effects,z)};return E&&E.push(q),q}function Fu(t,e,n){const r=this.proxy,s=dt(t)?t.includes(".")?Zl(r,t):()=>r[t]:t.bind(r,r);let i;L(e)?i=e:(i=e.handler,n=e);const o=ft;nn(this);const l=Xl(s,i.bind(r),n);return o?nn(o):Le(),l}function Zl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ye(t,e){if(!at(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),yt(t))Ye(t.value,e);else if(A(t))for(let n=0;n<t.length;n++)Ye(t[n],e);else if(dc(t)||Cn(t))t.forEach(n=>{Ye(n,e)});else if(bc(t))for(const n in t)Ye(t[n],e);return t}function Te(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(an(),qt(a,n,8,[t.el,l,t,e]),cn())}}function Su(t,e){return L(t)?(()=>ht({name:t.name},e,{setup:t}))():t}const mr=t=>!!t.type.__asyncLoader,Kl=t=>t.type.__isKeepAlive;function Cu(t,e){ta(t,"a",e)}function Du(t,e){ta(t,"da",e)}function ta(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Kl(s.parent.vnode)&&Tu(r,e,n,s),s=s.parent}}function Tu(t,e,n,r){const s=qr(e,t,r,!0);ea(()=>{di(r[e],s)},n)}function qr(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an(),nn(n);const l=qt(e,n,t,o);return Le(),cn(),l});return r?s.unshift(i):s.push(i),i}}const he=t=>(e,n=ft)=>(!Ln||t==="sp")&&qr(t,(...r)=>e(...r),n),Vu=he("bm"),Ru=he("m"),_u=he("bu"),Iu=he("u"),ku=he("bum"),ea=he("um"),Eu=he("sp"),Ou=he("rtg"),Pu=he("rtc");function Au(t,e=ft){qr("ec",t,e)}const na="components";function or(t,e){return Nu(na,t,!0,e)||t}const Lu=Symbol.for("v-ndc");function Nu(t,e,n=!0,r=!1){const s=jt||ft;if(s){const i=s.type;if(t===na){const l=bh(i,!1);if(l&&(l===e||l===te(e)||l===Mr(te(e))))return i}const o=So(s[t]||i[t],e)||So(s.appContext[t],e);return!o&&r?i:o}}function So(t,e){return t&&(t[e]||t[te(e)]||t[Mr(te(e))])}const Ks=t=>t?ga(t)?Ei(t)||t.proxy:Ks(t.parent):null,Dn=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ks(t.parent),$root:t=>Ks(t.root),$emit:t=>t.emit,$options:t=>Ri(t),$forceUpdate:t=>t.f||(t.f=()=>Vi(t.update)),$nextTick:t=>t.n||(t.n=cu.bind(t.proxy)),$watch:t=>Fu.bind(t)}),Ss=(t,e)=>t!==Z&&!t.__isScriptSetup&&B(t,e),Bu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const D=o[e];if(D!==void 0)switch(D){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ss(r,e))return o[e]=1,r[e];if(s!==Z&&B(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&B(c,e))return o[e]=3,i[e];if(n!==Z&&B(n,e))return o[e]=4,n[e];ti&&(o[e]=0)}}const h=Dn[e];let p,m;if(h)return e==="$attrs"&&Ct(t,"get",e),h(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Z&&B(n,e))return o[e]=4,n[e];if(m=a.config.globalProperties,B(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ss(s,e)?(s[e]=n,!0):r!==Z&&B(r,e)?(r[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Z&&B(t,o)||Ss(e,o)||(l=i[0])&&B(l,o)||B(r,o)||B(Dn,o)||B(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Co(t){return A(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ti=!0;function Mu(t){const e=Ri(t),n=t.proxy,r=t.ctx;ti=!1,e.beforeCreate&&Do(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:p,mounted:m,beforeUpdate:D,updated:E,activated:R,deactivated:M,beforeDestroy:X,beforeUnmount:z,destroyed:q,unmounted:P,render:Ft,renderTracked:Gt,renderTriggered:re,errorCaptured:At,serverPrefetch:pn,expose:Se,inheritAttrs:gn,components:Qn,directives:Xn,filters:vs}=e;if(c&&Hu(c,r,null),o)for(const et in o){const W=o[et];L(W)&&(r[et]=W.bind(n))}if(s){const et=s.call(n,n);at(et)&&(t.data=Fi(et))}if(ti=!0,i)for(const et in i){const W=i[et],Ce=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ut,Zn=!L(W)&&L(W.set)?W.set.bind(n):Ut,De=mh({get:Ce,set:Zn});Object.defineProperty(r,et,{enumerable:!0,configurable:!0,get:()=>De.value,set:Yt=>De.value=Yt})}if(l)for(const et in l)ra(l[et],r,n,et);if(a){const et=L(a)?a.call(n):a;Reflect.ownKeys(et).forEach(W=>{Gu(W,et[W])})}h&&Do(h,t,"c");function gt(et,W){A(W)?W.forEach(Ce=>et(Ce.bind(n))):W&&et(W.bind(n))}if(gt(Vu,p),gt(Ru,m),gt(_u,D),gt(Iu,E),gt(Cu,R),gt(Du,M),gt(Au,At),gt(Pu,Gt),gt(Ou,re),gt(ku,z),gt(ea,P),gt(Eu,pn),A(Se))if(Se.length){const et=t.exposed||(t.exposed={});Se.forEach(W=>{Object.defineProperty(et,W,{get:()=>n[W],set:Ce=>n[W]=Ce})})}else t.exposed||(t.exposed={});Ft&&t.render===Ut&&(t.render=Ft),gn!=null&&(t.inheritAttrs=gn),Qn&&(t.components=Qn),Xn&&(t.directives=Xn)}function Hu(t,e,n=Ut){A(t)&&(t=ei(t));for(const r in t){const s=t[r];let i;at(s)?"default"in s?i=yr(s.from||r,s.default,!0):i=yr(s.from||r):i=yr(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Do(t,e,n){qt(A(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ra(t,e,n,r){const s=r.includes(".")?Zl(n,r):()=>n[r];if(dt(t)){const i=e[t];L(i)&&Fs(s,i)}else if(L(t))Fs(s,t.bind(n));else if(at(t))if(A(t))t.forEach(i=>ra(i,e,n,r));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&Fs(s,i,t)}}function Ri(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(c=>Dr(a,c,o,!0)),Dr(a,e,o)),at(e)&&i.set(e,a),a}function Dr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Dr(t,i,n,!0),s&&s.forEach(o=>Dr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=ju[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const ju={data:To,props:Vo,emits:Vo,methods:Sn,computed:Sn,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Sn,directives:Sn,watch:Uu,provide:To,inject:zu};function To(t,e){return e?t?function(){return ht(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function zu(t,e){return Sn(ei(t),ei(e))}function ei(t){if(A(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?ht(Object.create(null),t,e):e}function Vo(t,e){return t?A(t)&&A(e)?[...new Set([...t,...e])]:ht(Object.create(null),Co(t),Co(e??{})):e}function Uu(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function sa(){return{app:null,config:{isNativeTag:uc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qu=0;function Wu(t,e){return function(r,s=null){L(r)||(r=ht({},r)),s!=null&&!at(s)&&(s=null);const i=sa(),o=new Set;let l=!1;const a=i.app={_uid:qu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xh,get config(){return i.config},set config(c){},use(c,...h){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(a,...h)):L(c)&&(o.add(c),c(a,...h))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,h){return h?(i.components[c]=h,a):i.components[c]},directive(c,h){return h?(i.directives[c]=h,a):i.directives[c]},mount(c,h,p){if(!l){const m=vt(r,s);return m.appContext=i,h&&e?e(m,c):t(m,c,p),l=!0,a._container=c,c.__vue_app__=a,Ei(m.component)||m.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return i.provides[c]=h,a},runWithContext(c){Tr=a;try{return c()}finally{Tr=null}}};return a}}let Tr=null;function Gu(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function yr(t,e,n=!1){const r=ft||jt;if(r||Tr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Tr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&L(e)?e.call(r&&r.proxy):e}}function Yu(t,e,n,r=!1){const s={},i={};Sr(i,Gr,1),t.propsDefaults=Object.create(null),ia(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:eu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ju(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=j(s),[a]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let m=h[p];if(zr(t.emitsOptions,m))continue;const D=e[m];if(a)if(B(i,m))D!==i[m]&&(i[m]=D,c=!0);else{const E=te(m);s[E]=ni(a,l,E,D,t,!1)}else D!==i[m]&&(i[m]=D,c=!0)}}}else{ia(t,e,s,i)&&(c=!0);let h;for(const p in l)(!e||!B(e,p)&&((h=ln(p))===p||!B(e,h)))&&(a?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=ni(a,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!B(e,p))&&(delete i[p],c=!0)}c&&ae(t,"set","$attrs")}function ia(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(vr(a))continue;const c=e[a];let h;s&&B(s,h=te(a))?!i||!i.includes(h)?n[h]=c:(l||(l={}))[h]=c:zr(t.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(i){const a=j(n),c=l||Z;for(let h=0;h<i.length;h++){const p=i[h];n[p]=ni(s,a,p,c[p],t,!B(c,p))}}return o}function ni(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=B(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&L(a)){const{propsDefaults:c}=s;n in c?r=c[n]:(nn(s),r=c[n]=a.call(null,e),Le())}else r=a}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ln(n))&&(r=!0))}return r}function oa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let a=!1;if(!L(t)){const h=p=>{a=!0;const[m,D]=oa(p,e,!0);ht(o,m),D&&l.push(...D)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!a)return at(t)&&r.set(t,Qe),Qe;if(A(i))for(let h=0;h<i.length;h++){const p=te(i[h]);Ro(p)&&(o[p]=Z)}else if(i)for(const h in i){const p=te(h);if(Ro(p)){const m=i[h],D=o[p]=A(m)||L(m)?{type:m}:ht({},m);if(D){const E=ko(Boolean,D.type),R=ko(String,D.type);D[0]=E>-1,D[1]=R<0||E<R,(E>-1||B(D,"default"))&&l.push(p)}}}const c=[o,l];return at(t)&&r.set(t,c),c}function Ro(t){return t[0]!=="$"}function _o(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Io(t,e){return _o(t)===_o(e)}function ko(t,e){return A(e)?e.findIndex(n=>Io(n,t)):L(e)&&Io(e,t)?0:-1}const la=t=>t[0]==="_"||t==="$stable",_i=t=>A(t)?t.map(Zt):[Zt(t)],Qu=(t,e,n)=>{if(e._n)return e;const r=Ge((...s)=>_i(e(...s)),n);return r._c=!1,r},aa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(la(s))continue;const i=t[s];if(L(i))e[s]=Qu(s,i,r);else if(i!=null){const o=_i(i);e[s]=()=>o}}},ca=(t,e)=>{const n=_i(e);t.slots.default=()=>n},Xu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),Sr(e,"_",n)):aa(e,t.slots={})}else t.slots={},e&&ca(t,e);Sr(t.slots,Gr,1)},Zu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(ht(s,e),!n&&l===1&&delete s._):(i=!e.$stable,aa(e,s)),o=e}else e&&(ca(t,e),o={default:1});if(i)for(const l in s)!la(l)&&!(l in o)&&delete s[l]};function ri(t,e,n,r,s=!1){if(A(t)){t.forEach((m,D)=>ri(m,e&&(A(e)?e[D]:e),n,r,s));return}if(mr(r)&&!s)return;const i=r.shapeFlag&4?Ei(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:a}=t,c=e&&e.r,h=l.refs===Z?l.refs={}:l.refs,p=l.setupState;if(c!=null&&c!==a&&(dt(c)?(h[c]=null,B(p,c)&&(p[c]=null)):yt(c)&&(c.value=null)),L(a))me(a,l,12,[o,h]);else{const m=dt(a),D=yt(a);if(m||D){const E=()=>{if(t.f){const R=m?B(p,a)?p[a]:h[a]:a.value;s?A(R)&&di(R,i):A(R)?R.includes(i)||R.push(i):m?(h[a]=[i],B(p,a)&&(p[a]=h[a])):(a.value=[i],t.k&&(h[t.k]=a.value))}else m?(h[a]=o,B(p,a)&&(p[a]=o)):D&&(a.value=o,t.k&&(h[t.k]=o))};o?(E.id=-1,St(E,n)):E()}}}const St=$u;function Ku(t){return th(t)}function th(t,e){const n=Ws();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:p,nextSibling:m,setScopeId:D=Ut,insertStaticContent:E}=t,R=(u,f,g,v=null,b=null,$=null,C=!1,w=null,S=!!f.dynamicChildren)=>{if(u===f)return;u&&!vn(u,f)&&(v=Kn(u),Yt(u,b,$,!0),u=null),f.patchFlag===-2&&(S=!1,f.dynamicChildren=null);const{type:y,ref:I,shapeFlag:T}=f;switch(y){case Wr:M(u,f,g,v);break;case Pn:X(u,f,g,v);break;case Cs:u==null&&z(f,g,v,C);break;case oe:Qn(u,f,g,v,b,$,C,w,S);break;default:T&1?Ft(u,f,g,v,b,$,C,w,S):T&6?Xn(u,f,g,v,b,$,C,w,S):(T&64||T&128)&&y.process(u,f,g,v,b,$,C,w,S,Ue)}I!=null&&b&&ri(I,u&&u.ref,$,f||u,!f)},M=(u,f,g,v)=>{if(u==null)r(f.el=l(f.children),g,v);else{const b=f.el=u.el;f.children!==u.children&&c(b,f.children)}},X=(u,f,g,v)=>{u==null?r(f.el=a(f.children||""),g,v):f.el=u.el},z=(u,f,g,v)=>{[u.el,u.anchor]=E(u.children,f,g,v,u.el,u.anchor)},q=({el:u,anchor:f},g,v)=>{let b;for(;u&&u!==f;)b=m(u),r(u,g,v),u=b;r(f,g,v)},P=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=m(u),s(u),u=g;s(f)},Ft=(u,f,g,v,b,$,C,w,S)=>{C=C||f.type==="svg",u==null?Gt(f,g,v,b,$,C,w,S):pn(u,f,b,$,C,w,S)},Gt=(u,f,g,v,b,$,C,w)=>{let S,y;const{type:I,props:T,shapeFlag:k,transition:O,dirs:N}=u;if(S=u.el=o(u.type,$,T&&T.is,T),k&8?h(S,u.children):k&16&&At(u.children,S,null,v,b,$&&I!=="foreignObject",C,w),N&&Te(u,null,v,"created"),re(S,u,u.scopeId,C,v),T){for(const U in T)U!=="value"&&!vr(U)&&i(S,U,null,T[U],$,u.children,v,b,se);"value"in T&&i(S,"value",null,T.value),(y=T.onVnodeBeforeMount)&&Qt(y,v,u)}N&&Te(u,null,v,"beforeMount");const G=(!b||b&&!b.pendingBranch)&&O&&!O.persisted;G&&O.beforeEnter(S),r(S,f,g),((y=T&&T.onVnodeMounted)||G||N)&&St(()=>{y&&Qt(y,v,u),G&&O.enter(S),N&&Te(u,null,v,"mounted")},b)},re=(u,f,g,v,b)=>{if(g&&D(u,g),v)for(let $=0;$<v.length;$++)D(u,v[$]);if(b){let $=b.subTree;if(f===$){const C=b.vnode;re(u,C,C.scopeId,C.slotScopeIds,b.parent)}}},At=(u,f,g,v,b,$,C,w,S=0)=>{for(let y=S;y<u.length;y++){const I=u[y]=w?ge(u[y]):Zt(u[y]);R(null,I,f,g,v,b,$,C,w)}},pn=(u,f,g,v,b,$,C)=>{const w=f.el=u.el;let{patchFlag:S,dynamicChildren:y,dirs:I}=f;S|=u.patchFlag&16;const T=u.props||Z,k=f.props||Z;let O;g&&Ve(g,!1),(O=k.onVnodeBeforeUpdate)&&Qt(O,g,f,u),I&&Te(f,u,g,"beforeUpdate"),g&&Ve(g,!0);const N=b&&f.type!=="foreignObject";if(y?Se(u.dynamicChildren,y,w,g,v,N,$):C||W(u,f,w,null,g,v,N,$,!1),S>0){if(S&16)gn(w,f,T,k,g,v,b);else if(S&2&&T.class!==k.class&&i(w,"class",null,k.class,b),S&4&&i(w,"style",T.style,k.style,b),S&8){const G=f.dynamicProps;for(let U=0;U<G.length;U++){const ot=G[U],Lt=T[ot],qe=k[ot];(qe!==Lt||ot==="value")&&i(w,ot,Lt,qe,b,u.children,g,v,se)}}S&1&&u.children!==f.children&&h(w,f.children)}else!C&&y==null&&gn(w,f,T,k,g,v,b);((O=k.onVnodeUpdated)||I)&&St(()=>{O&&Qt(O,g,f,u),I&&Te(f,u,g,"updated")},v)},Se=(u,f,g,v,b,$,C)=>{for(let w=0;w<f.length;w++){const S=u[w],y=f[w],I=S.el&&(S.type===oe||!vn(S,y)||S.shapeFlag&70)?p(S.el):g;R(S,y,I,null,v,b,$,C,!0)}},gn=(u,f,g,v,b,$,C)=>{if(g!==v){if(g!==Z)for(const w in g)!vr(w)&&!(w in v)&&i(u,w,g[w],null,C,f.children,b,$,se);for(const w in v){if(vr(w))continue;const S=v[w],y=g[w];S!==y&&w!=="value"&&i(u,w,y,S,C,f.children,b,$,se)}"value"in v&&i(u,"value",g.value,v.value)}},Qn=(u,f,g,v,b,$,C,w,S)=>{const y=f.el=u?u.el:l(""),I=f.anchor=u?u.anchor:l("");let{patchFlag:T,dynamicChildren:k,slotScopeIds:O}=f;O&&(w=w?w.concat(O):O),u==null?(r(y,g,v),r(I,g,v),At(f.children,g,I,b,$,C,w,S)):T>0&&T&64&&k&&u.dynamicChildren?(Se(u.dynamicChildren,k,g,b,$,C,w),(f.key!=null||b&&f===b.subTree)&&ua(u,f,!0)):W(u,f,g,I,b,$,C,w,S)},Xn=(u,f,g,v,b,$,C,w,S)=>{f.slotScopeIds=w,u==null?f.shapeFlag&512?b.ctx.activate(f,g,v,C,S):vs(f,g,v,b,$,C,S):lo(u,f,S)},vs=(u,f,g,v,b,$,C)=>{const w=u.component=hh(u,v,b);if(Kl(u)&&(w.ctx.renderer=Ue),fh(w),w.asyncDep){if(b&&b.registerDep(w,gt),!u.el){const S=w.subTree=vt(Pn);X(null,S,f,g)}return}gt(w,u,f,g,b,$,C)},lo=(u,f,g)=>{const v=f.component=u.component;if(yu(u,f,g))if(v.asyncDep&&!v.asyncResolved){et(v,f,g);return}else v.next=f,hu(v.update),v.update();else f.el=u.el,v.vnode=f},gt=(u,f,g,v,b,$,C)=>{const w=()=>{if(u.isMounted){let{next:I,bu:T,u:k,parent:O,vnode:N}=u,G=I,U;Ve(u,!1),I?(I.el=N.el,et(u,I,C)):I=N,T&&xs(T),(U=I.props&&I.props.onVnodeBeforeUpdate)&&Qt(U,O,I,N),Ve(u,!0);const ot=$s(u),Lt=u.subTree;u.subTree=ot,R(Lt,ot,p(Lt.el),Kn(Lt),u,b,$),I.el=ot.el,G===null&&wu(u,ot.el),k&&St(k,b),(U=I.props&&I.props.onVnodeUpdated)&&St(()=>Qt(U,O,I,N),b)}else{let I;const{el:T,props:k}=f,{bm:O,m:N,parent:G}=u,U=mr(f);if(Ve(u,!1),O&&xs(O),!U&&(I=k&&k.onVnodeBeforeMount)&&Qt(I,G,f),Ve(u,!0),T&&ys){const ot=()=>{u.subTree=$s(u),ys(T,u.subTree,u,b,null)};U?f.type.__asyncLoader().then(()=>!u.isUnmounted&&ot()):ot()}else{const ot=u.subTree=$s(u);R(null,ot,g,v,u,b,$),f.el=ot.el}if(N&&St(N,b),!U&&(I=k&&k.onVnodeMounted)){const ot=f;St(()=>Qt(I,G,ot),b)}(f.shapeFlag&256||G&&mr(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&St(u.a,b),u.isMounted=!0,f=g=v=null}},S=u.effect=new yi(w,()=>Vi(y),u.scope),y=u.update=()=>S.run();y.id=u.uid,Ve(u,!0),y()},et=(u,f,g)=>{f.component=u;const v=u.vnode.props;u.vnode=f,u.next=null,Ju(u,f.props,v,g),Zu(u,f.children,g),an(),$o(),cn()},W=(u,f,g,v,b,$,C,w,S=!1)=>{const y=u&&u.children,I=u?u.shapeFlag:0,T=f.children,{patchFlag:k,shapeFlag:O}=f;if(k>0){if(k&128){Zn(y,T,g,v,b,$,C,w,S);return}else if(k&256){Ce(y,T,g,v,b,$,C,w,S);return}}O&8?(I&16&&se(y,b,$),T!==y&&h(g,T)):I&16?O&16?Zn(y,T,g,v,b,$,C,w,S):se(y,b,$,!0):(I&8&&h(g,""),O&16&&At(T,g,v,b,$,C,w,S))},Ce=(u,f,g,v,b,$,C,w,S)=>{u=u||Qe,f=f||Qe;const y=u.length,I=f.length,T=Math.min(y,I);let k;for(k=0;k<T;k++){const O=f[k]=S?ge(f[k]):Zt(f[k]);R(u[k],O,g,null,b,$,C,w,S)}y>I?se(u,b,$,!0,!1,T):At(f,g,v,b,$,C,w,S,T)},Zn=(u,f,g,v,b,$,C,w,S)=>{let y=0;const I=f.length;let T=u.length-1,k=I-1;for(;y<=T&&y<=k;){const O=u[y],N=f[y]=S?ge(f[y]):Zt(f[y]);if(vn(O,N))R(O,N,g,null,b,$,C,w,S);else break;y++}for(;y<=T&&y<=k;){const O=u[T],N=f[k]=S?ge(f[k]):Zt(f[k]);if(vn(O,N))R(O,N,g,null,b,$,C,w,S);else break;T--,k--}if(y>T){if(y<=k){const O=k+1,N=O<I?f[O].el:v;for(;y<=k;)R(null,f[y]=S?ge(f[y]):Zt(f[y]),g,N,b,$,C,w,S),y++}}else if(y>k)for(;y<=T;)Yt(u[y],b,$,!0),y++;else{const O=y,N=y,G=new Map;for(y=N;y<=k;y++){const Vt=f[y]=S?ge(f[y]):Zt(f[y]);Vt.key!=null&&G.set(Vt.key,y)}let U,ot=0;const Lt=k-N+1;let qe=!1,uo=0;const bn=new Array(Lt);for(y=0;y<Lt;y++)bn[y]=0;for(y=O;y<=T;y++){const Vt=u[y];if(ot>=Lt){Yt(Vt,b,$,!0);continue}let Jt;if(Vt.key!=null)Jt=G.get(Vt.key);else for(U=N;U<=k;U++)if(bn[U-N]===0&&vn(Vt,f[U])){Jt=U;break}Jt===void 0?Yt(Vt,b,$,!0):(bn[Jt-N]=y+1,Jt>=uo?uo=Jt:qe=!0,R(Vt,f[Jt],g,null,b,$,C,w,S),ot++)}const ho=qe?eh(bn):Qe;for(U=ho.length-1,y=Lt-1;y>=0;y--){const Vt=N+y,Jt=f[Vt],fo=Vt+1<I?f[Vt+1].el:v;bn[y]===0?R(null,Jt,g,fo,b,$,C,w,S):qe&&(U<0||y!==ho[U]?De(Jt,g,fo,2):U--)}}},De=(u,f,g,v,b=null)=>{const{el:$,type:C,transition:w,children:S,shapeFlag:y}=u;if(y&6){De(u.component.subTree,f,g,v);return}if(y&128){u.suspense.move(f,g,v);return}if(y&64){C.move(u,f,g,Ue);return}if(C===oe){r($,f,g);for(let T=0;T<S.length;T++)De(S[T],f,g,v);r(u.anchor,f,g);return}if(C===Cs){q(u,f,g);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter($),r($,f,g),St(()=>w.enter($),b);else{const{leave:T,delayLeave:k,afterLeave:O}=w,N=()=>r($,f,g),G=()=>{T($,()=>{N(),O&&O()})};k?k($,N,G):G()}else r($,f,g)},Yt=(u,f,g,v=!1,b=!1)=>{const{type:$,props:C,ref:w,children:S,dynamicChildren:y,shapeFlag:I,patchFlag:T,dirs:k}=u;if(w!=null&&ri(w,null,g,u,!0),I&256){f.ctx.deactivate(u);return}const O=I&1&&k,N=!mr(u);let G;if(N&&(G=C&&C.onVnodeBeforeUnmount)&&Qt(G,f,u),I&6)cc(u.component,g,v);else{if(I&128){u.suspense.unmount(g,v);return}O&&Te(u,null,f,"beforeUnmount"),I&64?u.type.remove(u,f,g,b,Ue,v):y&&($!==oe||T>0&&T&64)?se(y,f,g,!1,!0):($===oe&&T&384||!b&&I&16)&&se(S,f,g),v&&ao(u)}(N&&(G=C&&C.onVnodeUnmounted)||O)&&St(()=>{G&&Qt(G,f,u),O&&Te(u,null,f,"unmounted")},g)},ao=u=>{const{type:f,el:g,anchor:v,transition:b}=u;if(f===oe){ac(g,v);return}if(f===Cs){P(u);return}const $=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:w}=b,S=()=>C(g,$);w?w(u.el,$,S):S()}else $()},ac=(u,f)=>{let g;for(;u!==f;)g=m(u),s(u),u=g;s(f)},cc=(u,f,g)=>{const{bum:v,scope:b,update:$,subTree:C,um:w}=u;v&&xs(v),b.stop(),$&&($.active=!1,Yt(C,u,f,g)),w&&St(w,f),St(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},se=(u,f,g,v=!1,b=!1,$=0)=>{for(let C=$;C<u.length;C++)Yt(u[C],f,g,v,b)},Kn=u=>u.shapeFlag&6?Kn(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),co=(u,f,g)=>{u==null?f._vnode&&Yt(f._vnode,null,null,!0):R(f._vnode||null,u,f,null,null,null,g),$o(),Yl(),f._vnode=u},Ue={p:R,um:Yt,m:De,r:ao,mt:vs,mc:At,pc:W,pbc:Se,n:Kn,o:t};let ms,ys;return e&&([ms,ys]=e(Ue)),{render:co,hydrate:ms,createApp:Wu(co,ms)}}function Ve({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ua(t,e,n=!1){const r=t.children,s=e.children;if(A(r)&&A(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ge(s[i]),l.el=o.el),n||ua(o,l)),l.type===Wr&&(l.el=o.el)}}function eh(t){const e=t.slice(),n=[0];let r,s,i,o,l;const a=t.length;for(r=0;r<a;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nh=t=>t.__isTeleport,oe=Symbol.for("v-fgt"),Wr=Symbol.for("v-txt"),Pn=Symbol.for("v-cmt"),Cs=Symbol.for("v-stc"),Tn=[];let zt=null;function ha(t=!1){Tn.push(zt=t?null:[])}function rh(){Tn.pop(),zt=Tn[Tn.length-1]||null}let An=1;function Eo(t){An+=t}function sh(t){return t.dynamicChildren=An>0?zt||Qe:null,rh(),An>0&&zt&&zt.push(t),t}function fa(t,e,n,r,s,i){return sh(xt(t,e,n,r,s,i,!0))}function ih(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const Gr="__vInternal",da=({key:t})=>t??null,wr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||yt(t)||L(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function xt(t,e=null,n=null,r=0,s=null,i=t===oe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&da(e),ref:e&&wr(e),scopeId:Ur,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return l?(Ii(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=dt(n)?8:16),An>0&&!o&&zt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&zt.push(a),a}const vt=oh;function oh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Lu)&&(t=Pn),ih(t)){const l=en(t,e,!0);return n&&Ii(l,n),An>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag|=-2,l}if(vh(t)&&(t=t.__vccOpts),e){e=lh(e);let{class:l,style:a}=e;l&&!dt(l)&&(e.class=vi(l)),at(a)&&(zl(a)&&!A(a)&&(a=ht({},a)),e.style=bi(a))}const o=dt(t)?1:xu(t)?128:nh(t)?64:at(t)?4:L(t)?2:0;return xt(t,e,n,r,s,o,i,!0)}function lh(t){return t?zl(t)||Gr in t?ht({},t):t:null}function en(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?ah(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&da(l),ref:e&&e.ref?n&&s?A(s)?s.concat(wr(e)):[s,wr(e)]:wr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==oe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pa(t=" ",e=0){return vt(Wr,null,t,e)}function Zt(t){return t==null||typeof t=="boolean"?vt(Pn):A(t)?vt(oe,null,t.slice()):typeof t=="object"?ge(t):vt(Wr,null,String(t))}function ge(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:en(t)}function Ii(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(A(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ii(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Gr in e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),r&64?(n=16,e=[pa(e)]):n=8);t.children=e,t.shapeFlag|=n}function ah(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vi([e.class,r.class]));else if(s==="style")e.style=bi([e.style,r.style]);else if(Lr(s)){const i=e[s],o=r[s];o&&i!==o&&!(A(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){qt(t,e,7,[n,r])}const ch=sa();let uh=0;function hh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ch,i={uid:uh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oa(r,s),emitsOptions:Ql(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pu.bind(null,i),t.ce&&t.ce(i),i}let ft=null,ki,We,Oo="__VUE_INSTANCE_SETTERS__";(We=Ws()[Oo])||(We=Ws()[Oo]=[]),We.push(t=>ft=t),ki=t=>{We.length>1?We.forEach(e=>e(t)):We[0](t)};const nn=t=>{ki(t),t.scope.on()},Le=()=>{ft&&ft.scope.off(),ki(null)};function ga(t){return t.vnode.shapeFlag&4}let Ln=!1;function fh(t,e=!1){Ln=e;const{props:n,children:r}=t.vnode,s=ga(t);Yu(t,n,s,e),Xu(t,r);const i=s?dh(t,e):void 0;return Ln=!1,i}function dh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ul(new Proxy(t.ctx,Bu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?gh(t):null;nn(t),an();const i=me(r,t,0,[t.props,s]);if(cn(),Le(),_l(i)){if(i.then(Le,Le),e)return i.then(o=>{Po(t,o,e)}).catch(o=>{jr(o,t,0)});t.asyncDep=i}else Po(t,i,e)}else ba(t,e)}function Po(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=ql(e)),ba(t,n)}let Ao;function ba(t,e,n){const r=t.type;if(!t.render){if(!e&&Ao&&!r.render){const s=r.template||Ri(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=r,c=ht(ht({isCustomElement:i,delimiters:l},o),a);r.render=Ao(s,c)}}t.render=r.render||Ut}nn(t),an(),Mu(t),cn(),Le()}function ph(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ct(t,"get","$attrs"),e[n]}}))}function gh(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ph(t)},slots:t.slots,emit:t.emit,expose:e}}function Ei(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ql(Ul(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dn)return Dn[n](t)},has(e,n){return n in e||n in Dn}}))}function bh(t,e=!0){return L(t)?t.displayName||t.name:t.name||e&&t.__name}function vh(t){return L(t)&&"__vccOpts"in t}const mh=(t,e)=>lu(t,e,Ln),yh=Symbol.for("v-scx"),wh=()=>yr(yh),xh="3.3.4",$h="http://www.w3.org/2000/svg",Ee=typeof document<"u"?document:null,Lo=Ee&&Ee.createElement("template"),Fh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ee.createElementNS($h,t):Ee.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ee.createTextNode(t),createComment:t=>Ee.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ee.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lo.innerHTML=r?`<svg>${t}</svg>`:t;const l=Lo.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Sh(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ch(t,e,n){const r=t.style,s=dt(n);if(n&&!s){if(e&&!dt(e))for(const i in e)n[i]==null&&si(r,i,"");for(const i in n)si(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const No=/\s*!important$/;function si(t,e,n){if(A(n))n.forEach(r=>si(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Dh(t,e);No.test(n)?t.setProperty(ln(r),n.replace(No,""),"important"):t[r]=n}}const Bo=["Webkit","Moz","ms"],Ds={};function Dh(t,e){const n=Ds[e];if(n)return n;let r=te(e);if(r!=="filter"&&r in t)return Ds[e]=r;r=Mr(r);for(let s=0;s<Bo.length;s++){const i=Bo[s]+r;if(i in t)return Ds[e]=i}return e}const Mo="http://www.w3.org/1999/xlink";function Th(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mo,e.slice(6,e.length)):t.setAttributeNS(Mo,e,n);else{const i=Cc(e);n==null||i&&!Il(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Vh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,h=n??"";c!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Il(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Rh(t,e,n,r){t.addEventListener(e,n,r)}function _h(t,e,n,r){t.removeEventListener(e,n,r)}function Ih(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,a]=kh(e);if(r){const c=i[e]=Ph(r,s);Rh(t,l,c,a)}else o&&(_h(t,l,o,a),i[e]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function kh(t){let e;if(Ho.test(t)){e={};let r;for(;r=t.match(Ho);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let Ts=0;const Eh=Promise.resolve(),Oh=()=>Ts||(Eh.then(()=>Ts=0),Ts=Date.now());function Ph(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qt(Ah(r,n.value),e,5,[r])};return n.value=t,n.attached=Oh(),n}function Ah(t,e){if(A(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jo=/^on[a-z]/,Lh=(t,e,n,r,s=!1,i,o,l,a)=>{e==="class"?Sh(t,r,s):e==="style"?Ch(t,n,r):Lr(e)?fi(e)||Ih(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nh(t,e,r,s))?Vh(t,e,r,i,o,l,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Th(t,e,r,s))};function Nh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&jo.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||jo.test(e)&&dt(n)?!1:e in t}const Bh=ht({patchProp:Lh},Fh);let zo;function Mh(){return zo||(zo=Ku(Bh))}const Hh=(...t)=>{const e=Mh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jh(r);if(!s)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jh(t){return dt(t)?document.querySelector(t):t}const zh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Uh={},ee=t=>(gu("data-v-31a6697a"),t=t(),bu(),t),qh={style:{"align-items":"center"}},Wh=ee(()=>xt("h1",null,"News Article Classifier",-1)),Gh={style:{"margin-top":"10%",display:"block"}},Yh=ee(()=>xt("h2",null,"Search",-1)),Jh={style:{display:"flex","margin-top":"5%",float:"left"}},Qh=ee(()=>xt("h2",null,"Instructions",-1)),Xh=ee(()=>xt("p",null,"1. Find an Article that you want to categorize",-1)),Zh=ee(()=>xt("p",null,"2. Copy its web link",-1)),Kh=ee(()=>xt("p",null,"3. Paste the link above and search",-1)),tf=ee(()=>xt("h2",null,"History",-1)),ef={style:{"overflow-y":"scroll","max-height":"300px","margin-top":"10px"}},nf=ee(()=>xt("p",null,"Article: ",-1)),rf=ee(()=>xt("p",null,"Category: ",-1)),sf=ee(()=>xt("h3",{style:{color:"lightgray"}},"© Advait Joglekar",-1));function of(t,e){const n=or("fluent-text-field"),r=or("fluent-button"),s=or("fluent-divider"),i=or("fluent-card");return ha(),fa("main",qh,[Wh,xt("div",Gh,[vt(n,{type:"url",placeholder:"Paste link",style:{display:"block"}},{default:Ge(()=>[Yh]),_:1}),vt(r,{type:"submit",appearance:"accent",style:{"margin-top":"2%"}},{default:Ge(()=>[pa("Go!")]),_:1})]),xt("div",Jh,[vt(i,{style:{height:"400px",width:"500px",padding:"20px","text-align":"start"}},{default:Ge(()=>[Qh,vt(s),Xh,Zh,Kh]),_:1}),vt(i,{class:"outer-card"},{default:Ge(()=>[tf,vt(s),xt("div",ef,[vt(i,{class:"inner-card"},{default:Ge(()=>[nf,rf]),_:1})])]),_:1})]),sf])}const lf=zh(Uh,[["render",of],["__scopeId","data-v-31a6697a"]]),af=Su({__name:"App",setup(t){return(e,n)=>(ha(),fa("main",null,[vt(lf)]))}}),xe=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();xe.trustedTypes===void 0&&(xe.trustedTypes={createPolicy:(t,e)=>e});const va={configurable:!1,enumerable:!1,writable:!1};xe.FAST===void 0&&Reflect.defineProperty(xe,"FAST",Object.assign({value:Object.create(null)},va));const Nn=xe.FAST;if(Nn.getById===void 0){const t=Object.create(null);Reflect.defineProperty(Nn,"getById",Object.assign({value(e,n){let r=t[e];return r===void 0&&(r=n?t[e]=n():null),r}},va))}const Vn=Object.freeze([]);function ma(){const t=new WeakMap;return function(e){let n=t.get(e);if(n===void 0){let r=Reflect.getPrototypeOf(e);for(;n===void 0&&r!==null;)n=t.get(r),r=Reflect.getPrototypeOf(r);n=n===void 0?[]:n.slice(0),t.set(e,n)}return n}}const Vs=xe.FAST.getById(1,()=>{const t=[],e=[];function n(){if(e.length)throw e.shift()}function r(o){try{o.call()}catch(l){e.push(l),setTimeout(n,0)}}function s(){let l=0;for(;l<t.length;)if(r(t[l]),l++,l>1024){for(let a=0,c=t.length-l;a<c;a++)t[a]=t[a+l];t.length-=l,l=0}t.length=0}function i(o){t.length<1&&xe.requestAnimationFrame(s),t.push(o)}return Object.freeze({enqueue:i,process:s})}),ya=xe.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let Rs=ya;const Rn=`fast-${Math.random().toString(36).substring(2,8)}`,wa=`${Rn}{`,Oi=`}${Rn}`,H=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(Rs!==ya)throw new Error("The HTML policy can only be set once.");Rs=t},createHTML(t){return Rs.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(Rn)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${Rn}:`,""))},createInterpolationPlaceholder(t){return`${wa}${t}${Oi}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${Rn}:${t}-->`},queueUpdate:Vs.enqueue,processUpdates:Vs.process,nextUpdate(){return new Promise(Vs.enqueue)},setAttribute(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class ii{constructor(e,n){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=n}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const n=this.spillover;if(n===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else n.indexOf(e)===-1&&n.push(e)}unsubscribe(e){const n=this.spillover;if(n===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}notify(e){const n=this.spillover,r=this.source;if(n===void 0){const s=this.sub1,i=this.sub2;s!==void 0&&s.handleChange(r,e),i!==void 0&&i.handleChange(r,e)}else for(let s=0,i=n.length;s<i;++s)n[s].handleChange(r,e)}}class xa{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var n;const r=this.subscribers[e];r!==void 0&&r.notify(e),(n=this.sourceSubscribers)===null||n===void 0||n.notify(e)}subscribe(e,n){var r;if(n){let s=this.subscribers[n];s===void 0&&(this.subscribers[n]=s=new ii(this.source)),s.subscribe(e)}else this.sourceSubscribers=(r=this.sourceSubscribers)!==null&&r!==void 0?r:new ii(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,n){var r;if(n){const s=this.subscribers[n];s!==void 0&&s.unsubscribe(e)}else(r=this.sourceSubscribers)===null||r===void 0||r.unsubscribe(e)}}const rt=Nn.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,n=H.queueUpdate;let r,s=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(c){let h=c.$fastController||e.get(c);return h===void 0&&(Array.isArray(c)?h=s(c):e.set(c,h=new xa(c))),h}const o=ma();class l{constructor(h){this.name=h,this.field=`_${h}`,this.callback=`${h}Changed`}getValue(h){return r!==void 0&&r.watch(h,this.name),h[this.field]}setValue(h,p){const m=this.field,D=h[m];if(D!==p){h[m]=p;const E=h[this.callback];typeof E=="function"&&E.call(h,D,p),i(h).notify(this.name)}}}class a extends ii{constructor(h,p,m=!1){super(h,p),this.binding=h,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(h,p){this.needsRefresh&&this.last!==null&&this.disconnect();const m=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const D=this.binding(h,p);return r=m,D}disconnect(){if(this.last!==null){let h=this.first;for(;h!==void 0;)h.notifier.unsubscribe(this,h.propertyName),h=h.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(h,p){const m=this.last,D=i(h),E=m===null?this.first:{};if(E.propertySource=h,E.propertyName=p,E.notifier=D,D.subscribe(this,p),m!==null){if(!this.needsRefresh){let R;r=void 0,R=m.propertySource[m.propertyName],r=this,h===R&&(this.needsRefresh=!0)}m.next=E}this.last=E}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let h=this.first;return{next:()=>{const p=h;return p===void 0?{value:void 0,done:!0}:(h=h.next,{value:p,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){s=c},getNotifier:i,track(c,h){r!==void 0&&r.watch(c,h)},trackVolatile(){r!==void 0&&(r.needsRefresh=!0)},notify(c,h){i(c).notify(h)},defineProperty(c,h){typeof h=="string"&&(h=new l(h)),o(c).push(h),Reflect.defineProperty(c,h.name,{enumerable:!0,get:function(){return h.getValue(this)},set:function(p){h.setValue(this,p)}})},getAccessors:o,binding(c,h,p=this.isVolatileBinding(c)){return new a(c,h,p)},isVolatileBinding(c){return t.test(c.toString())}})});function Dt(t,e){rt.defineProperty(t,e)}const Uo=Nn.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class Bn{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Uo.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Uo.set(e)}}rt.defineProperty(Bn.prototype,"index");rt.defineProperty(Bn.prototype,"length");const _n=Object.seal(new Bn);class Pi{constructor(){this.targetIndex=0}}class $a extends Pi{constructor(){super(...arguments),this.createPlaceholder=H.createInterpolationPlaceholder}}class Ai extends Pi{constructor(e,n,r){super(),this.name=e,this.behavior=n,this.options=r}createPlaceholder(e){return H.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function cf(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=rt.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function uf(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function hf(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ff(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function df(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function pf(t){H.setAttribute(this.target,this.targetName,t)}function gf(t){H.setBooleanAttribute(this.target,this.targetName,t)}function bf(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function vf(t){this.target[this.targetName]=t}function mf(t){const e=this.classVersions||Object.create(null),n=this.target;let r=this.version||0;if(t!=null&&t.length){const s=t.split(/\s+/);for(let i=0,o=s.length;i<o;++i){const l=s[i];l!==""&&(e[l]=r,n.classList.add(l))}}if(this.classVersions=e,this.version=r+1,r!==0){r-=1;for(const s in e)e[s]===r&&n.classList.remove(s)}}class Li extends $a{constructor(e){super(),this.binding=e,this.bind=cf,this.unbind=hf,this.updateTarget=pf,this.isBindingVolatile=rt.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=vf,this.cleanedTargetName==="innerHTML"){const n=this.binding;this.binding=(r,s)=>H.createHTML(n(r,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=gf;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=uf,this.unbind=df;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=mf);break}}targetAtContent(){this.updateTarget=bf,this.unbind=ff}createBehavior(e){return new yf(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class yf{constructor(e,n,r,s,i,o,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=n,this.isBindingVolatile=r,this.bind=s,this.unbind=i,this.updateTarget=o,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Bn.setEvent(e);const n=this.binding(this.source,this.context);Bn.setEvent(null),n!==!0&&e.preventDefault()}}let _s=null;class Ni{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){_s=this}static borrow(e){const n=_s||new Ni;return n.directives=e,n.reset(),_s=null,n}}function wf(t){if(t.length===1)return t[0];let e;const n=t.length,r=t.map(o=>typeof o=="string"?()=>o:(e=o.targetName||e,o.binding)),s=(o,l)=>{let a="";for(let c=0;c<n;++c)a+=r[c](o,l);return a},i=new Li(s);return i.targetName=e,i}const xf=Oi.length;function Fa(t,e){const n=e.split(wa);if(n.length===1)return null;const r=[];for(let s=0,i=n.length;s<i;++s){const o=n[s],l=o.indexOf(Oi);let a;if(l===-1)a=o;else{const c=parseInt(o.substring(0,l));r.push(t.directives[c]),a=o.substring(l+xf)}a!==""&&r.push(a)}return r}function qo(t,e,n=!1){const r=e.attributes;for(let s=0,i=r.length;s<i;++s){const o=r[s],l=o.value,a=Fa(t,l);let c=null;a===null?n&&(c=new Li(()=>l),c.targetName=o.name):c=wf(a),c!==null&&(e.removeAttributeNode(o),s--,i--,t.addFactory(c))}}function $f(t,e,n){const r=Fa(t,e.textContent);if(r!==null){let s=e;for(let i=0,o=r.length;i<o;++i){const l=r[i],a=i===0?e:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",t.captureContentBinding(l)),s=a,t.targetIndex++,a!==e&&n.nextNode()}t.targetIndex--}}function Ff(t,e){const n=t.content;document.adoptNode(n);const r=Ni.borrow(e);qo(r,t,!0);const s=r.behaviorFactories;r.reset();const i=H.createTemplateWalker(n);let o;for(;o=i.nextNode();)switch(r.targetIndex++,o.nodeType){case 1:qo(r,o);break;case 3:$f(r,o,i);break;case 8:H.isMarker(o)&&r.addFactory(e[H.extractDirectiveIndexFromMarker(o)])}let l=0;(H.isMarker(n.firstChild)||n.childNodes.length===1&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),l=-1);const a=r.behaviorFactories;return r.release(),{fragment:n,viewBehaviorFactories:a,hostBehaviorFactories:s,targetOffset:l}}const Is=document.createRange();class Sf{constructor(e,n){this.fragment=e,this.behaviors=n,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const n=this.lastChild;if(e.previousSibling===n)return;const r=e.parentNode;let s=this.firstChild,i;for(;s!==n;)i=s.nextSibling,r.insertBefore(s,e),s=i;r.insertBefore(n,e)}}remove(){const e=this.fragment,n=this.lastChild;let r=this.firstChild,s;for(;r!==n;)s=r.nextSibling,e.appendChild(r),r=s;e.appendChild(n)}dispose(){const e=this.firstChild.parentNode,n=this.lastChild;let r=this.firstChild,s;for(;r!==n;)s=r.nextSibling,e.removeChild(r),r=s;e.removeChild(n);const i=this.behaviors,o=this.source;for(let l=0,a=i.length;l<a;++l)i[l].unbind(o)}bind(e,n){const r=this.behaviors;if(this.source!==e)if(this.source!==null){const s=this.source;this.source=e,this.context=n;for(let i=0,o=r.length;i<o;++i){const l=r[i];l.unbind(s),l.bind(e,n)}}else{this.source=e,this.context=n;for(let s=0,i=r.length;s<i;++s)r[s].bind(e,n)}}unbind(){if(this.source===null)return;const e=this.behaviors,n=this.source;for(let r=0,s=e.length;r<s;++r)e[r].unbind(n);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Is.setStartBefore(e[0].firstChild),Is.setEndAfter(e[e.length-1].lastChild),Is.deleteContents();for(let n=0,r=e.length;n<r;++n){const s=e[n],i=s.behaviors,o=s.source;for(let l=0,a=i.length;l<a;++l)i[l].unbind(o)}}}}class Wo{constructor(e,n){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=n}create(e){if(this.fragment===null){let c;const h=this.html;if(typeof h=="string"){c=document.createElement("template"),c.innerHTML=H.createHTML(h);const m=c.content.firstElementChild;m!==null&&m.tagName==="TEMPLATE"&&(c=m)}else c=h;const p=Ff(c,this.directives);this.fragment=p.fragment,this.viewBehaviorFactories=p.viewBehaviorFactories,this.hostBehaviorFactories=p.hostBehaviorFactories,this.targetOffset=p.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const n=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,s=new Array(this.behaviorCount),i=H.createTemplateWalker(n);let o=0,l=this.targetOffset,a=i.nextNode();for(let c=r.length;o<c;++o){const h=r[o],p=h.targetIndex;for(;a!==null;)if(l===p){s[o]=h.createBehavior(a);break}else a=i.nextNode(),l++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let h=0,p=c.length;h<p;++h,++o)s[o]=c[h].createBehavior(e)}return new Sf(n,s)}render(e,n,r){typeof n=="string"&&(n=document.getElementById(n)),r===void 0&&(r=n);const s=this.create(r);return s.bind(e,_n),s.appendTo(n),s}}const Cf=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function kt(t,...e){const n=[];let r="";for(let s=0,i=t.length-1;s<i;++s){const o=t[s];let l=e[s];if(r+=o,l instanceof Wo){const a=l;l=()=>a}if(typeof l=="function"&&(l=new Li(l)),l instanceof $a){const a=Cf.exec(o);a!==null&&(l.targetName=a[2])}l instanceof Pi?(r+=l.createPlaceholder(n.length),n.push(l)):r+=l}return r+=t[t.length-1],new Wo(r,n)}class $t{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}$t.create=(()=>{if(H.supportsAdoptedStyleSheets){const t=new Map;return e=>new Df(e,t)}return t=>new Rf(t)})();function Bi(t){return t.map(e=>e instanceof $t?Bi(e.styles):[e]).reduce((e,n)=>e.concat(n),[])}function Sa(t){return t.map(e=>e instanceof $t?e.behaviors:null).reduce((e,n)=>n===null?e:(e===null&&(e=[]),e.concat(n)),null)}let Ca=(t,e)=>{t.adoptedStyleSheets=[...t.adoptedStyleSheets,...e]},Da=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(n=>e.indexOf(n)===-1)};if(H.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Ca=(t,e)=>{t.adoptedStyleSheets.push(...e)},Da=(t,e)=>{for(const n of e){const r=t.adoptedStyleSheets.indexOf(n);r!==-1&&t.adoptedStyleSheets.splice(r,1)}}}catch{}class Df extends $t{constructor(e,n){super(),this.styles=e,this.styleSheetCache=n,this._styleSheets=void 0,this.behaviors=Sa(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,n=this.styleSheetCache;this._styleSheets=Bi(e).map(r=>{if(r instanceof CSSStyleSheet)return r;let s=n.get(r);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(r),n.set(r,s)),s})}return this._styleSheets}addStylesTo(e){Ca(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Da(e,this.styleSheets),super.removeStylesFrom(e)}}let Tf=0;function Vf(){return`fast-style-class-${++Tf}`}class Rf extends $t{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Sa(e),this.styleSheets=Bi(e),this.styleClass=Vf()}addStylesTo(e){const n=this.styleSheets,r=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<n.length;s++){const i=document.createElement("style");i.innerHTML=n[s],i.className=r,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const n=e.querySelectorAll(`.${this.styleClass}`);for(let r=0,s=n.length;r<s;++r)e.removeChild(n[r]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Vr=Object.freeze({locate:ma()}),_f={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},Mi={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class Rr{constructor(e,n,r=n.toLowerCase(),s="reflect",i){this.guards=new Set,this.Owner=e,this.name=n,this.attribute=r,this.mode=s,this.converter=i,this.fieldName=`_${n}`,this.callbackName=`${n}Changed`,this.hasCallback=this.callbackName in e.prototype,s==="boolean"&&i===void 0&&(this.converter=_f)}setValue(e,n){const r=e[this.fieldName],s=this.converter;s!==void 0&&(n=s.fromView(n)),r!==n&&(e[this.fieldName]=n,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,n),e.$fastController.notify(this.name))}getValue(e){return rt.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,n){this.guards.has(e)||(this.guards.add(e),this.setValue(e,n),this.guards.delete(e))}tryReflectToAttribute(e){const n=this.mode,r=this.guards;r.has(e)||n==="fromView"||H.queueUpdate(()=>{r.add(e);const s=e[this.fieldName];switch(n){case"reflect":const i=this.converter;H.setAttribute(e,this.attribute,i!==void 0?i.toView(s):s);break;case"boolean":H.setBooleanAttribute(e,this.attribute,s);break}r.delete(e)})}static collect(e,...n){const r=[];n.push(Vr.locate(e));for(let s=0,i=n.length;s<i;++s){const o=n[s];if(o!==void 0)for(let l=0,a=o.length;l<a;++l){const c=o[l];typeof c=="string"?r.push(new Rr(e,c)):r.push(new Rr(e,c.property,c.attribute,c.mode,c.converter))}}return r}}function _(t,e){let n;function r(s,i){arguments.length>1&&(n.property=i),Vr.locate(s.constructor).push(n)}if(arguments.length>1){n={},r(t,e);return}return n=t===void 0?{}:t,r}const Go={mode:"open"},Yo={},oi=Nn.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class Yr{constructor(e,n=e.definition){typeof n=="string"&&(n={name:n}),this.type=e,this.name=n.name,this.template=n.template;const r=Rr.collect(e,n.attributes),s=new Array(r.length),i={},o={};for(let l=0,a=r.length;l<a;++l){const c=r[l];s[l]=c.attribute,i[c.name]=c,o[c.attribute]=c}this.attributes=r,this.observedAttributes=s,this.propertyLookup=i,this.attributeLookup=o,this.shadowOptions=n.shadowOptions===void 0?Go:n.shadowOptions===null?void 0:Object.assign(Object.assign({},Go),n.shadowOptions),this.elementOptions=n.elementOptions===void 0?Yo:Object.assign(Object.assign({},Yo),n.elementOptions),this.styles=n.styles===void 0?void 0:Array.isArray(n.styles)?$t.create(n.styles):n.styles instanceof $t?n.styles:$t.create([n.styles])}get isDefined(){return!!oi.getByType(this.type)}define(e=customElements){const n=this.type;if(oi.register(this)){const r=this.attributes,s=n.prototype;for(let i=0,o=r.length;i<o;++i)rt.defineProperty(s,r[i]);Reflect.defineProperty(n,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,n,this.elementOptions),this}}Yr.forType=oi.getByType;const Ta=new WeakMap,If={bubbles:!0,composed:!0,cancelable:!0};function ks(t){return t.shadowRoot||Ta.get(t)||null}class Hi extends xa{constructor(e,n){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=n;const r=n.shadowOptions;if(r!==void 0){const i=e.attachShadow(r);r.mode==="closed"&&Ta.set(e,i)}const s=rt.getAccessors(e);if(s.length>0){const i=this.boundObservables=Object.create(null);for(let o=0,l=s.length;o<l;++o){const a=s[o].name,c=e[a];c!==void 0&&(delete e[a],i[a]=c)}}}get isConnected(){return rt.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,rt.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const n=ks(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.append(e);else if(!e.isAttachedTo(n)){const r=e.behaviors;e.addStylesTo(n),r!==null&&this.addBehaviors(r)}}removeStyles(e){const n=ks(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.removeChild(e);else if(e.isAttachedTo(n)){const r=e.behaviors;e.removeStylesFrom(n),r!==null&&this.removeBehaviors(r)}}addBehaviors(e){const n=this.behaviors||(this.behaviors=new Map),r=e.length,s=[];for(let i=0;i<r;++i){const o=e[i];n.has(o)?n.set(o,n.get(o)+1):(n.set(o,1),s.push(o))}if(this._isConnected){const i=this.element;for(let o=0;o<s.length;++o)s[o].bind(i,_n)}}removeBehaviors(e,n=!1){const r=this.behaviors;if(r===null)return;const s=e.length,i=[];for(let o=0;o<s;++o){const l=e[o];if(r.has(l)){const a=r.get(l)-1;a===0||n?r.delete(l)&&i.push(l):r.set(l,a)}}if(this._isConnected){const o=this.element;for(let l=0;l<i.length;++l)i[l].unbind(o)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,_n);const n=this.behaviors;if(n!==null)for(const[r]of n)r.bind(e,_n);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const n=this.behaviors;if(n!==null){const r=this.element;for(const[s]of n)s.unbind(r)}}onAttributeChangedCallback(e,n,r){const s=this.definition.attributeLookup[e];s!==void 0&&s.onAttributeChangedCallback(this.element,r)}emit(e,n,r){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:n},If),r))):!1}finishInitialization(){const e=this.element,n=this.boundObservables;if(n!==null){const s=Object.keys(n);for(let i=0,o=s.length;i<o;++i){const l=s[i];e[l]=n[l]}this.boundObservables=null}const r=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const n=this.element,r=ks(n)||n;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||H.removeChildNodes(r),e&&(this.view=e.render(n,r,n))}static forCustomElement(e){const n=e.$fastController;if(n!==void 0)return n;const r=Yr.forType(e.constructor);if(r===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new Hi(e,r)}}function Jo(t){return class extends t{constructor(){super(),Hi.forCustomElement(this)}$emit(e,n,r){return this.$fastController.emit(e,n,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,n,r){this.$fastController.onAttributeChangedCallback(e,n,r)}}}const Jr=Object.assign(Jo(HTMLElement),{from(t){return Jo(t)},define(t,e){return new Yr(t,e).define().type}});class ji{createCSS(){return""}createBehavior(){}}function Va(t,e){const n=[];let r="";const s=[];for(let i=0,o=t.length-1;i<o;++i){r+=t[i];let l=e[i];if(l instanceof ji){const a=l.createBehavior();l=l.createCSS(),a&&s.push(a)}l instanceof $t||l instanceof CSSStyleSheet?(r.trim()!==""&&(n.push(r),r=""),n.push(l)):r+=l}return r+=t[t.length-1],r.trim()!==""&&n.push(r),{styles:n,behaviors:s}}function J(t,...e){const{styles:n,behaviors:r}=Va(t,e),s=$t.create(n);return r.length&&s.withBehaviors(...r),s}class kf extends ji{constructor(e,n){super(),this.behaviors=n,this.css="";const r=e.reduce((s,i)=>(typeof i=="string"?this.css+=i:s.push(i),s),[]);r.length&&(this.styles=$t.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function _t(t,...e){const{styles:n,behaviors:r}=Va(t,e);return new kf(n,r)}class Ef{constructor(e,n){this.target=e,this.propertyName=n}bind(e){e[this.propertyName]=this.target}unbind(){}}function Et(t){return new Ai("fast-ref",Ef,t)}const Ra=t=>typeof t=="function",Of=()=>null;function Qo(t){return t===void 0?Of:Ra(t)?t:()=>t}function Xo(t,e,n){const r=Ra(t)?t:()=>t,s=Qo(e),i=Qo(n);return(o,l)=>r(o,l)?s(o,l):i(o,l)}function Pf(t){return t?function(e,n,r){return e.nodeType===1&&e.matches(t)}:function(e,n,r){return e.nodeType===1}}class _a{constructor(e,n){this.target=e,this.options=n,this.source=null}bind(e){const n=this.options.property;this.shouldUpdate=rt.getAccessors(e).some(r=>r.name===n),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Vn),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Af extends _a{constructor(e,n){super(e,n)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Qr(t){return typeof t=="string"&&(t={property:t}),new Ai("fast-slotted",Af,t)}class Lf extends _a{constructor(e,n){super(e,n),this.observer=null,n.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Nf(t){return typeof t=="string"&&(t={property:t}),new Ai("fast-children",Lf,t)}class zi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Ui=(t,e)=>kt`
    <span
        part="end"
        ${Et("endContainer")}
        class=${n=>e.end?"end":void 0}
    >
        <slot name="end" ${Et("end")} @slotchange="${n=>n.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,qi=(t,e)=>kt`
    <span
        part="start"
        ${Et("startContainer")}
        class="${n=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Et("start")}
            @slotchange="${n=>n.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;kt`
    <span part="end" ${Et("endContainer")}>
        <slot
            name="end"
            ${Et("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`;kt`
    <span part="start" ${Et("startContainer")}>
        <slot
            name="start"
            ${Et("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function V(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}const Es=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let r=Es.get(n);r===void 0&&Es.set(n,r=new Map),r.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=Es.get(e);if(n!==void 0)return n.get(t)});class Bf{constructor(e,n){this.container=e,this.key=n}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,ka(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,n){const{container:r,key:s}=this;return this.container=this.key=void 0,r.registerResolver(s,new It(s,e,n))}}function mn(t){const e=t.slice(),n=Object.keys(t),r=n.length;let s;for(let i=0;i<r;++i)s=n[i],Ea(s)||(e[s]=t[s]);return e}const Mf=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new It(t,1,t)},transient(t){return new It(t,2,t)}}),Os=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Mf.singleton})}),Zo=new Map;function Ko(t){return e=>Reflect.getOwnMetadata(t,e)}let tl=null;const tt=Object.freeze({createContainer(t){return new In(null,Object.assign({},Os.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:tt.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(Ia,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||tt.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new In(t,Object.assign({},Os.default,e,{parentLocator:tt.findParentContainer})):tl||(tl=new In(null,Object.assign({},Os.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Ko("design:paramtypes"),getAnnotationParamtypes:Ko("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=Zo.get(t);if(e===void 0){const n=t.inject;if(n===void 0){const r=tt.getDesignParamtypes(t),s=tt.getAnnotationParamtypes(t);if(r===void 0)if(s===void 0){const i=Object.getPrototypeOf(t);typeof i=="function"&&i!==Function.prototype?e=mn(tt.getDependencies(i)):e=[]}else e=mn(s);else if(s===void 0)e=mn(r);else{e=mn(r);let i=s.length,o;for(let c=0;c<i;++c)o=s[c],o!==void 0&&(e[c]=o);const l=Object.keys(s);i=l.length;let a;for(let c=0;c<i;++c)a=l[c],Ea(a)||(e[a]=s[a])}}else e=mn(n);Zo.set(t,e)}return e},defineProperty(t,e,n,r=!1){const s=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let i=this[s];if(i===void 0&&(i=(this instanceof HTMLElement?tt.findResponsibleContainer(this):tt.getOrCreateDOMContainer()).get(n),this[s]=i,r&&this instanceof Jr)){const l=this.$fastController,a=()=>{const h=tt.findResponsibleContainer(this).get(n),p=this[s];h!==p&&(this[s]=i,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return i}})},createInterface(t,e){const n=typeof t=="function"?t:e,r=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||sl,s=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,i=function(o,l,a){if(o==null||new.target!==void 0)throw new Error(`No registration for interface: '${i.friendlyName}'`);if(l)tt.defineProperty(o,l,i,s);else{const c=tt.getOrCreateAnnotationParamTypes(o);c[a]=i}};return i.$isInterface=!0,i.friendlyName=r??"(anonymous)",n!=null&&(i.register=function(o,l){return n(new Bf(o,l??i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject(...t){return function(e,n,r){if(typeof r=="number"){const s=tt.getOrCreateAnnotationParamTypes(e),i=t[0];i!==void 0&&(s[r]=i)}else if(n)tt.defineProperty(e,n,t[0]);else{const s=r?tt.getOrCreateAnnotationParamTypes(r.value):tt.getOrCreateAnnotationParamTypes(e);let i;for(let o=0;o<t.length;++o)i=t[o],i!==void 0&&(s[o]=i)}}},transient(t){return t.register=function(n){return Mn.transient(t,t).register(n)},t.registerInRequestor=!1,t},singleton(t,e=jf){return t.register=function(r){return Mn.singleton(t,t).register(r)},t.registerInRequestor=e.scoped,t}}),Hf=tt.createInterface("Container");tt.inject;const jf={scoped:!1};class It{constructor(e,n,r){this.key=e,this.strategy=n,this.state=r,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,n){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(n),this.strategy=0,this.resolving=!1,this.state}case 2:{const r=e.getFactory(this.state);if(r===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return r.construct(n)}case 3:return this.state(e,n,this);case 4:return this.state[0].resolve(e,n);case 5:return n.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var n,r,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(s=(r=(n=e.getResolver(this.state))===null||n===void 0?void 0:n.getFactory)===null||r===void 0?void 0:r.call(n,e))!==null&&s!==void 0?s:null;default:return null}}}function el(t){return this.get(t)}function zf(t,e){return e(t)}class Uf{constructor(e,n){this.Type=e,this.dependencies=n,this.transformers=null}construct(e,n){let r;return n===void 0?r=new this.Type(...this.dependencies.map(el,e)):r=new this.Type(...this.dependencies.map(el,e),...n),this.transformers==null?r:this.transformers.reduce(zf,r)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const qf={$isResolver:!0,resolve(t,e){return e}};function xr(t){return typeof t.register=="function"}function Wf(t){return xr(t)&&typeof t.registerInRequestor=="boolean"}function nl(t){return Wf(t)&&t.registerInRequestor}function Gf(t){return t.prototype!==void 0}const Yf=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ia="__DI_LOCATE_PARENT__",Ps=new Map;class In{constructor(e,n){this.owner=e,this.config=n,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Hf,qf),e instanceof Node&&e.addEventListener(Ia,r=>{r.composedPath()[0]!==this.owner&&(r.detail.container=this,r.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...n){return this.context=e,this.register(...n),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let n,r,s,i,o;const l=this.context;for(let a=0,c=e.length;a<c;++a)if(n=e[a],!!il(n))if(xr(n))n.register(this,l);else if(Gf(n))Mn.singleton(n,n).register(this);else for(r=Object.keys(n),i=0,o=r.length;i<o;++i)s=n[r[i]],il(s)&&(xr(s)?s.register(this,l):this.register(s));return--this.registerDepth,this}registerResolver(e,n){lr(e);const r=this.resolvers,s=r.get(e);return s==null?r.set(e,n):s instanceof It&&s.strategy===4?s.state.push(n):r.set(e,new It(e,4,[s,n])),n}registerTransformer(e,n){const r=this.getResolver(e);if(r==null)return!1;if(r.getFactory){const s=r.getFactory(this);return s==null?!1:(s.registerTransformer(n),!0)}return!1}getResolver(e,n=!0){if(lr(e),e.resolve!==void 0)return e;let r=this,s;for(;r!=null;)if(s=r.resolvers.get(e),s==null){if(r.parent==null){const i=nl(e)?this:r;return n?this.jitRegister(e,i):null}r=r.parent}else return s;return null}has(e,n=!1){return this.resolvers.has(e)?!0:n&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(lr(e),e.$isResolver)return e.resolve(this,this);let n=this,r;for(;n!=null;)if(r=n.resolvers.get(e),r==null){if(n.parent==null){const s=nl(e)?this:n;return r=this.jitRegister(e,s),r.resolve(n,this)}n=n.parent}else return r.resolve(n,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,n=!1){lr(e);const r=this;let s=r,i;if(n){let o=Vn;for(;s!=null;)i=s.resolvers.get(e),i!=null&&(o=o.concat(rl(i,s,r))),s=s.parent;return o}else for(;s!=null;)if(i=s.resolvers.get(e),i==null){if(s=s.parent,s==null)return Vn}else return rl(i,s,r);return Vn}getFactory(e){let n=Ps.get(e);if(n===void 0){if(Jf(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ps.set(e,n=new Uf(e,tt.getDependencies(e)))}return n}registerFactory(e,n){Ps.set(e,n)}createChild(e){return new In(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,n){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Yf.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(xr(e)){const r=e.register(n);if(!(r instanceof Object)||r.resolve==null){const s=n.resolvers.get(e);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return r}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const r=this.config.defaultResolver(e,n);return n.resolvers.set(e,r),r}}}}const As=new WeakMap;function ka(t){return function(e,n,r){if(As.has(r))return As.get(r);const s=t(e,n,r);return As.set(r,s),s}}const Mn=Object.freeze({instance(t,e){return new It(t,0,e)},singleton(t,e){return new It(t,1,e)},transient(t,e){return new It(t,2,e)},callback(t,e){return new It(t,3,e)},cachedCallback(t,e){return new It(t,3,ka(e))},aliasTo(t,e){return new It(e,5,t)}});function lr(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function rl(t,e,n){if(t instanceof It&&t.strategy===4){const r=t.state;let s=r.length;const i=new Array(s);for(;s--;)i[s]=r[s].resolve(e,n);return i}return[t.resolve(e,n)]}const sl="(anonymous)";function il(t){return typeof t=="object"&&t!==null||typeof t=="function"}const Jf=function(){const t=new WeakMap;let e=!1,n="",r=0;return function(s){return e=t.get(s),e===void 0&&(n=s.toString(),r=n.length,e=r>=29&&r<=100&&n.charCodeAt(r-1)===125&&n.charCodeAt(r-2)<=32&&n.charCodeAt(r-3)===93&&n.charCodeAt(r-4)===101&&n.charCodeAt(r-5)===100&&n.charCodeAt(r-6)===111&&n.charCodeAt(r-7)===99&&n.charCodeAt(r-8)===32&&n.charCodeAt(r-9)===101&&n.charCodeAt(r-10)===118&&n.charCodeAt(r-11)===105&&n.charCodeAt(r-12)===116&&n.charCodeAt(r-13)===97&&n.charCodeAt(r-14)===110&&n.charCodeAt(r-15)===88,t.set(s,e)),e}}(),ar={};function Ea(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=ar[t];if(e!==void 0)return e;const n=t.length;if(n===0)return ar[t]=!1;let r=0;for(let s=0;s<n;++s)if(r=t.charCodeAt(s),s===0&&r===48&&n>1||r<48||r>57)return ar[t]=!1;return ar[t]=!0}default:return!1}}function ol(t){return`${t.toLowerCase()}:presentation`}const cr=new Map,Oa=Object.freeze({define(t,e,n){const r=ol(t);cr.get(r)===void 0?cr.set(r,e):cr.set(r,!1),n.register(Mn.instance(r,e))},forTag(t,e){const n=ol(t),r=cr.get(n);return r===!1?tt.findResponsibleContainer(e).get(n):r||null}});class Qf{constructor(e,n){this.template=e||null,this.styles=n===void 0?null:Array.isArray(n)?$t.create(n):n instanceof $t?n:$t.create([n])}applyTo(e){const n=e.$fastController;n.template===null&&(n.template=this.template),n.styles===null&&(n.styles=this.styles)}}class Ot extends Jr{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Oa.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(n={})=>new Xf(this===Ot?class extends Ot{}:this,e,n)}}V([Dt],Ot.prototype,"template",void 0);V([Dt],Ot.prototype,"styles",void 0);function yn(t,e,n){return typeof t=="function"?t(e,n):t}class Xf{constructor(e,n,r){this.type=e,this.elementDefinition=n,this.overrideDefinition=r,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,n){const r=this.definition,s=this.overrideDefinition,o=`${r.prefix||n.elementPrefix}-${r.baseName}`;n.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new Qf(yn(r.template,l,r),yn(r.styles,l,r));l.definePresentation(a);let c=yn(r.shadowOptions,l,r);l.shadowRootMode&&(c?s.shadowOptions||(c.mode=l.shadowRootMode):c!==null&&(c={mode:l.shadowRootMode})),l.defineElement({elementOptions:yn(r.elementOptions,l,r),shadowOptions:c,attributes:yn(r.attributes,l,r)})}})}}function qn(t,...e){const n=Vr.locate(t);e.forEach(r=>{Object.getOwnPropertyNames(r.prototype).forEach(i=>{i!=="constructor"&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(r.prototype,i))}),Vr.locate(r).forEach(i=>n.push(i))})}const Zf={horizontal:"horizontal",vertical:"vertical"};function Kf(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Wi(...t){return t.every(e=>e instanceof HTMLElement)}function td(t,e){return!t||!e||!Wi(t)?void 0:Array.from(t.querySelectorAll(e)).filter(r=>r.offsetParent!==null)}function ed(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let Re;function nd(){if(typeof Re=="boolean")return Re;if(!Kf())return Re=!1,Re;const t=document.createElement("style"),e=ed();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Re=!0}catch{Re=!1}finally{document.head.removeChild(t)}return Re}var ll;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(ll||(ll={}));const rd="ArrowDown",sd="ArrowLeft",id="ArrowRight",od="ArrowUp",Pa="Enter",ld="Home",ad="End";var li;(function(t){t.ltr="ltr",t.rtl="rtl"})(li||(li={}));var F;(function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"})(F||(F={}));class it{}V([_({attribute:"aria-atomic"})],it.prototype,"ariaAtomic",void 0);V([_({attribute:"aria-busy"})],it.prototype,"ariaBusy",void 0);V([_({attribute:"aria-controls"})],it.prototype,"ariaControls",void 0);V([_({attribute:"aria-current"})],it.prototype,"ariaCurrent",void 0);V([_({attribute:"aria-describedby"})],it.prototype,"ariaDescribedby",void 0);V([_({attribute:"aria-details"})],it.prototype,"ariaDetails",void 0);V([_({attribute:"aria-disabled"})],it.prototype,"ariaDisabled",void 0);V([_({attribute:"aria-errormessage"})],it.prototype,"ariaErrormessage",void 0);V([_({attribute:"aria-flowto"})],it.prototype,"ariaFlowto",void 0);V([_({attribute:"aria-haspopup"})],it.prototype,"ariaHaspopup",void 0);V([_({attribute:"aria-hidden"})],it.prototype,"ariaHidden",void 0);V([_({attribute:"aria-invalid"})],it.prototype,"ariaInvalid",void 0);V([_({attribute:"aria-keyshortcuts"})],it.prototype,"ariaKeyshortcuts",void 0);V([_({attribute:"aria-label"})],it.prototype,"ariaLabel",void 0);V([_({attribute:"aria-labelledby"})],it.prototype,"ariaLabelledby",void 0);V([_({attribute:"aria-live"})],it.prototype,"ariaLive",void 0);V([_({attribute:"aria-owns"})],it.prototype,"ariaOwns",void 0);V([_({attribute:"aria-relevant"})],it.prototype,"ariaRelevant",void 0);V([_({attribute:"aria-roledescription"})],it.prototype,"ariaRoledescription",void 0);const cd=(t,e)=>kt`
    <button
        class="control"
        part="control"
        ?autofocus="${n=>n.autofocus}"
        ?disabled="${n=>n.disabled}"
        form="${n=>n.formId}"
        formaction="${n=>n.formaction}"
        formenctype="${n=>n.formenctype}"
        formmethod="${n=>n.formmethod}"
        formnovalidate="${n=>n.formnovalidate}"
        formtarget="${n=>n.formtarget}"
        name="${n=>n.name}"
        type="${n=>n.type}"
        value="${n=>n.value}"
        aria-atomic="${n=>n.ariaAtomic}"
        aria-busy="${n=>n.ariaBusy}"
        aria-controls="${n=>n.ariaControls}"
        aria-current="${n=>n.ariaCurrent}"
        aria-describedby="${n=>n.ariaDescribedby}"
        aria-details="${n=>n.ariaDetails}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-errormessage="${n=>n.ariaErrormessage}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-flowto="${n=>n.ariaFlowto}"
        aria-haspopup="${n=>n.ariaHaspopup}"
        aria-hidden="${n=>n.ariaHidden}"
        aria-invalid="${n=>n.ariaInvalid}"
        aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
        aria-label="${n=>n.ariaLabel}"
        aria-labelledby="${n=>n.ariaLabelledby}"
        aria-live="${n=>n.ariaLive}"
        aria-owns="${n=>n.ariaOwns}"
        aria-pressed="${n=>n.ariaPressed}"
        aria-relevant="${n=>n.ariaRelevant}"
        aria-roledescription="${n=>n.ariaRoledescription}"
        ${Et("control")}
    >
        ${qi(t,e)}
        <span class="content" part="content">
            <slot ${Qr("defaultSlottedContent")}></slot>
        </span>
        ${Ui(t,e)}
    </button>
`,al="form-associated-proxy",cl="ElementInternals",ul=cl in window&&"setFormValue"in window[cl].prototype,hl=new WeakMap;function Aa(t){const e=class extends t{constructor(...n){super(...n),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return ul}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const n=this.proxy.labels,r=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=n?r.concat(Array.from(n)):r;return Object.freeze(s)}else return Vn}valueChanged(n,r){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(n,r){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),H.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),H.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!ul)return null;let n=hl.get(this);return n||(n=this.attachInternals(),hl.set(this,n)),n}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(n=>this.proxy.removeEventListener(n,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(n,r,s){this.elementInternals?this.elementInternals.setValidity(n,r,s):typeof r=="string"&&this.proxy.setCustomValidity(r)}formDisabledCallback(n){this.disabled=n}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var n;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(r=>this.proxy.addEventListener(r,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",al),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",al)),(n=this.shadowRoot)===null||n===void 0||n.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var n;this.removeChild(this.proxy),(n=this.shadowRoot)===null||n===void 0||n.removeChild(this.proxySlot)}validate(n){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,n)}setFormValue(n,r){this.elementInternals&&this.elementInternals.setFormValue(n,r||n)}_keypressHandler(n){switch(n.key){case Pa:if(this.form instanceof HTMLFormElement){const r=this.form.querySelector("[type=submit]");r==null||r.click()}break}}stopPropagation(n){n.stopPropagation()}};return _({mode:"boolean"})(e.prototype,"disabled"),_({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),_({attribute:"current-value"})(e.prototype,"currentValue"),_(e.prototype,"name"),_({mode:"boolean"})(e.prototype,"required"),Dt(e.prototype,"value"),e}class ud extends Ot{}class hd extends Aa(ud){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Pt=class extends hd{constructor(){super(...arguments),this.handleClick=e=>{var n;this.disabled&&((n=this.defaultSlottedContent)===null||n===void 0?void 0:n.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,n){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),n==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),n==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(r=>{r.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(r=>{r.removeEventListener("click",this.handleClick)})}};V([_({mode:"boolean"})],Pt.prototype,"autofocus",void 0);V([_({attribute:"form"})],Pt.prototype,"formId",void 0);V([_],Pt.prototype,"formaction",void 0);V([_],Pt.prototype,"formenctype",void 0);V([_],Pt.prototype,"formmethod",void 0);V([_({mode:"boolean"})],Pt.prototype,"formnovalidate",void 0);V([_],Pt.prototype,"formtarget",void 0);V([_],Pt.prototype,"type",void 0);V([Dt],Pt.prototype,"defaultSlottedContent",void 0);class Xr{}V([_({attribute:"aria-expanded"})],Xr.prototype,"ariaExpanded",void 0);V([_({attribute:"aria-pressed"})],Xr.prototype,"ariaPressed",void 0);qn(Xr,it);qn(Pt,zi,Xr);const fd=(t,e)=>kt`
    <slot></slot>
`;let La=class extends Ot{};function _r(t){const e=t.parentElement;if(e)return e;{const n=t.getRootNode();if(n.host instanceof HTMLElement)return n.host}return null}function dd(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=_r(n)}return!1}const le=document.createElement("div");function pd(t){return t instanceof Jr}class Gi{setProperty(e,n){H.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){H.queueUpdate(()=>this.target.removeProperty(e))}}class gd extends Gi{constructor(e){super();const n=new CSSStyleSheet;this.target=n.cssRules[n.insertRule(":host{}")].style,e.$fastController.addStyles($t.create([n]))}}class bd extends Gi{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class vd extends Gi{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const n=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[n].style}}}class Na{constructor(e){this.store=new Map,this.target=null;const n=e.$fastController;this.style=document.createElement("style"),n.addStyles(this.style),rt.getNotifier(n).subscribe(this,"isConnected"),this.handleChange(n,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,n]of this.store.entries())this.target.setProperty(e,n)}setProperty(e,n){this.store.set(e,n),H.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,n)})}removeProperty(e){this.store.delete(e),H.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,n){const{sheet:r}=this.style;if(r){const s=r.insertRule(":host{}",r.cssRules.length);this.target=r.cssRules[s].style}else this.target=null}}V([Dt],Na.prototype,"target",void 0);class md{constructor(e){this.target=e.style}setProperty(e,n){H.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){H.queueUpdate(()=>this.target.removeProperty(e))}}class ct{setProperty(e,n){ct.properties[e]=n;for(const r of ct.roots.values())Je.getOrCreate(ct.normalizeRoot(r)).setProperty(e,n)}removeProperty(e){delete ct.properties[e];for(const n of ct.roots.values())Je.getOrCreate(ct.normalizeRoot(n)).removeProperty(e)}static registerRoot(e){const{roots:n}=ct;if(!n.has(e)){n.add(e);const r=Je.getOrCreate(this.normalizeRoot(e));for(const s in ct.properties)r.setProperty(s,ct.properties[s])}}static unregisterRoot(e){const{roots:n}=ct;if(n.has(e)){n.delete(e);const r=Je.getOrCreate(ct.normalizeRoot(e));for(const s in ct.properties)r.removeProperty(s)}}static normalizeRoot(e){return e===le?document:e}}ct.roots=new Set;ct.properties={};const Ls=new WeakMap,yd=H.supportsAdoptedStyleSheets?gd:Na,Je=Object.freeze({getOrCreate(t){if(Ls.has(t))return Ls.get(t);let e;return t===le?e=new ct:t instanceof Document?e=H.supportsAdoptedStyleSheets?new bd:new vd:pd(t)?e=new yd(t):e=new md(t),Ls.set(t,e),e}});class mt extends ji{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=mt.uniqueId(),mt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new mt({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return mt.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const n=nt.getOrCreate(e).get(this);if(n!==void 0)return n;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,n){return this._appliedTo.add(e),n instanceof mt&&(n=this.alias(n)),nt.getOrCreate(e).set(this,n),this}deleteValueFor(e){return this._appliedTo.delete(e),nt.existsFor(e)&&nt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(le,e),this}subscribe(e,n){const r=this.getOrCreateSubscriberSet(n);n&&!nt.existsFor(n)&&nt.getOrCreate(n),r.has(e)||r.add(e)}unsubscribe(e,n){const r=this.subscribers.get(n||this);r&&r.has(e)&&r.delete(e)}notify(e){const n=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(r=>r.handleChange(n)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(r=>r.handleChange(n))}alias(e){return n=>e.getValueFor(n)}}mt.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();mt.tokensById=new Map;class wd{startReflection(e,n){e.subscribe(this,n),this.handleChange({token:e,target:n})}stopReflection(e,n){e.unsubscribe(this,n),this.remove(e,n)}handleChange(e){const{token:n,target:r}=e;this.add(n,r)}add(e,n){Je.getOrCreate(n).setProperty(e.cssCustomProperty,this.resolveCSSValue(nt.getOrCreate(n).get(e)))}remove(e,n){Je.getOrCreate(n).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class xd{constructor(e,n,r){this.source=e,this.token=n,this.node=r,this.dependencies=new Set,this.observer=rt.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,_n))}}class $d{constructor(){this.values=new Map}set(e,n){this.values.get(e)!==n&&(this.values.set(e,n),rt.getNotifier(this).notify(e.id))}get(e){return rt.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const wn=new WeakMap,xn=new WeakMap;class nt{constructor(e){this.target=e,this.store=new $d,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(n,r)=>{const s=mt.getTokenById(r);if(s&&(s.notify(this.target),mt.isCSSDesignToken(s))){const i=this.parent,o=this.isReflecting(s);if(i){const l=i.get(s),a=n.get(s);l!==a&&!o?this.reflectToCSS(s):l===a&&o&&this.stopReflectToCSS(s)}else o||this.reflectToCSS(s)}}},wn.set(e,this),rt.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Jr?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return wn.get(e)||new nt(e)}static existsFor(e){return wn.has(e)}static findParent(e){if(le!==e.target){let n=_r(e.target);for(;n!==null;){if(wn.has(n))return wn.get(n);n=_r(n)}return nt.getOrCreate(le)}return null}static findClosestAssignedNode(e,n){let r=n;do{if(r.has(e))return r;r=r.parent?r.parent:r.target!==le?nt.getOrCreate(le):null}while(r!==null);return null}get parent(){return xn.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const n=this.store.get(e);if(n!==void 0)return n;const r=this.getRaw(e);if(r!==void 0)return this.hydrate(e,r),this.get(e)}getRaw(e){var n;return this.assignedValues.has(e)?this.assignedValues.get(e):(n=nt.findClosestAssignedNode(e,this))===null||n===void 0?void 0:n.getRaw(e)}set(e,n){mt.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,n),mt.isDerivedDesignTokenValue(n)?this.setupBindingObserver(e,n):this.store.set(e,n)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const n=this.getRaw(e);n?this.hydrate(e,n):this.store.delete(e)}bind(){const e=nt.findParent(this);e&&e.appendChild(this);for(const n of this.assignedValues.keys())n.notify(this.target)}unbind(){this.parent&&xn.get(this).removeChild(this)}appendChild(e){e.parent&&xn.get(e).removeChild(e);const n=this.children.filter(r=>e.contains(r));xn.set(e,this),this.children.push(e),n.forEach(r=>e.appendChild(r)),rt.getNotifier(this.store).subscribe(e);for(const[r,s]of this.store.all())e.hydrate(r,this.bindingObservers.has(r)?this.getRaw(r):s)}removeChild(e){const n=this.children.indexOf(e);return n!==-1&&this.children.splice(n,1),rt.getNotifier(this.store).unsubscribe(e),e.parent===this?xn.delete(e):!1}contains(e){return dd(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),nt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),nt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,n){const r=mt.getTokenById(n);r&&this.hydrate(r,this.getRaw(r))}hydrate(e,n){if(!this.has(e)){const r=this.bindingObservers.get(e);mt.isDerivedDesignTokenValue(n)?r?r.source!==n&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,n)):this.setupBindingObserver(e,n):(r&&this.tearDownBindingObserver(e),this.store.set(e,n))}}setupBindingObserver(e,n){const r=new xd(n,e,this);return this.bindingObservers.set(e,r),r}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}nt.cssCustomPropertyReflector=new wd;V([Dt],nt.prototype,"children",void 0);function Fd(t){return mt.from(t)}const K=Object.freeze({create:Fd,notifyConnection(t){return!t.isConnected||!nt.existsFor(t)?!1:(nt.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!nt.existsFor(t)?!1:(nt.getOrCreate(t).unbind(),!0)},registerRoot(t=le){ct.registerRoot(t)},unregisterRoot(t=le){ct.unregisterRoot(t)}}),Ns=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Bs=new Map,$r=new Map;let Ke=null;const $n=tt.createInterface(t=>t.cachedCallback(e=>(Ke===null&&(Ke=new Ma(null,e)),Ke))),Ba=Object.freeze({tagFor(t){return $r.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||tt.findResponsibleContainer(t).get($n)},getOrCreate(t){if(!t)return Ke===null&&(Ke=tt.getOrCreateDOMContainer().get($n)),Ke;const e=t.$$designSystem$$;if(e)return e;const n=tt.getOrCreateDOMContainer(t);if(n.has($n,!1))return n.get($n);{const r=new Ma(t,n);return n.register(Mn.instance($n,r)),r}}});function Sd(t,e,n){return typeof t=="string"?{name:t,type:e,callback:n}:t}class Ma{constructor(e,n){this.owner=e,this.container=n,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ns.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const n=this.container,r=[],s=this.disambiguate,i=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(l,a,c){const h=Sd(l,a,c),{name:p,callback:m,baseClass:D}=h;let{type:E}=h,R=p,M=Bs.get(R),X=!0;for(;M;){const z=s(R,E,M);switch(z){case Ns.ignoreDuplicate:return;case Ns.definitionCallbackOnly:X=!1,M=void 0;break;default:R=z,M=Bs.get(R);break}}X&&(($r.has(E)||E===Ot)&&(E=class extends E{}),Bs.set(R,E),$r.set(E,R),D&&$r.set(D,R)),r.push(new Cd(n,R,E,i,m,X))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&K.registerRoot(this.designTokenRoot)),n.registerWithContext(o,...e);for(const l of r)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class Cd{constructor(e,n,r,s,i,o){this.container=e,this.name=n,this.type=r,this.shadowRootMode=s,this.callback=i,this.willDefine=o,this.definition=null}definePresentation(e){Oa.define(this.name,e,this.container)}defineElement(e){this.definition=new Yr(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Ba.tagFor(e)}}const Dd=(t,e)=>kt`
    <template role="${n=>n.role}" aria-orientation="${n=>n.orientation}"></template>
`,Td={separator:"separator",presentation:"presentation"};class Yi extends Ot{constructor(){super(...arguments),this.role=Td.separator,this.orientation=Zf.horizontal}}V([_],Yi.prototype,"role",void 0);V([_],Yi.prototype,"orientation",void 0);class Vd extends Ot{}class Rd extends Aa(Vd){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const _d={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let Tt=class extends Rd{constructor(){super(...arguments),this.type=_d.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&H.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};V([_({attribute:"readonly",mode:"boolean"})],Tt.prototype,"readOnly",void 0);V([_({mode:"boolean"})],Tt.prototype,"autofocus",void 0);V([_],Tt.prototype,"placeholder",void 0);V([_],Tt.prototype,"type",void 0);V([_],Tt.prototype,"list",void 0);V([_({converter:Mi})],Tt.prototype,"maxlength",void 0);V([_({converter:Mi})],Tt.prototype,"minlength",void 0);V([_],Tt.prototype,"pattern",void 0);V([_({converter:Mi})],Tt.prototype,"size",void 0);V([_({mode:"boolean"})],Tt.prototype,"spellcheck",void 0);V([Dt],Tt.prototype,"defaultSlottedNodes",void 0);class Ha{}qn(Ha,it);qn(Tt,zi,Ha);function Id(t,e,n){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}const kd=(t,e)=>kt`
    <template
        class="
            ${n=>n.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Qr({property:"defaultSlottedNodes",filter:Id})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${qi(t,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${n=>n.handleTextInput()}"
                @change="${n=>n.handleChange()}"
                ?autofocus="${n=>n.autofocus}"
                ?disabled="${n=>n.disabled}"
                list="${n=>n.list}"
                maxlength="${n=>n.maxlength}"
                minlength="${n=>n.minlength}"
                pattern="${n=>n.pattern}"
                placeholder="${n=>n.placeholder}"
                ?readonly="${n=>n.readOnly}"
                ?required="${n=>n.required}"
                size="${n=>n.size}"
                ?spellcheck="${n=>n.spellcheck}"
                :value="${n=>n.value}"
                type="${n=>n.type}"
                aria-atomic="${n=>n.ariaAtomic}"
                aria-busy="${n=>n.ariaBusy}"
                aria-controls="${n=>n.ariaControls}"
                aria-current="${n=>n.ariaCurrent}"
                aria-describedby="${n=>n.ariaDescribedby}"
                aria-details="${n=>n.ariaDetails}"
                aria-disabled="${n=>n.ariaDisabled}"
                aria-errormessage="${n=>n.ariaErrormessage}"
                aria-flowto="${n=>n.ariaFlowto}"
                aria-haspopup="${n=>n.ariaHaspopup}"
                aria-hidden="${n=>n.ariaHidden}"
                aria-invalid="${n=>n.ariaInvalid}"
                aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
                aria-label="${n=>n.ariaLabel}"
                aria-labelledby="${n=>n.ariaLabelledby}"
                aria-live="${n=>n.ariaLive}"
                aria-owns="${n=>n.ariaOwns}"
                aria-relevant="${n=>n.ariaRelevant}"
                aria-roledescription="${n=>n.ariaRoledescription}"
                ${Et("control")}
            />
            ${Ui(t,e)}
        </div>
    </template>
`,Ed=(t,e)=>kt`
    <template
        role="treeitem"
        slot="${n=>n.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${n=>n.expanded?"expanded":""} ${n=>n.selected?"selected":""} ${n=>n.nested?"nested":""}
            ${n=>n.disabled?"disabled":""}"
        aria-expanded="${n=>n.childItems&&n.childItemLength()>0?n.expanded:void 0}"
        aria-selected="${n=>n.selected}"
        aria-disabled="${n=>n.disabled}"
        @focusin="${(n,r)=>n.handleFocus(r.event)}"
        @focusout="${(n,r)=>n.handleBlur(r.event)}"
        ${Nf({property:"childItems",filter:Pf()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${Xo(n=>n.childItems&&n.childItemLength()>0,kt`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(n,r)=>n.handleExpandCollapseButtonClick(r.event)}"
                            ${Et("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${e.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${qi(t,e)}
                <slot></slot>
                ${Ui(t,e)}
            </div>
        </div>
        ${Xo(n=>n.childItems&&n.childItemLength()>0&&(n.expanded||n.renderCollapsedChildren),kt`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Qr("items")}></slot>
                </div>
            `)}
    </template>
`;function be(t){return Wi(t)&&t.getAttribute("role")==="treeitem"}class lt extends Ot{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>be(this.parentElement),this.handleExpandCollapseButtonClick=e=>{!this.disabled&&!e.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,n){this.$fastController.isConnected&&this.items.forEach(r=>{be(r)&&(r.nested=!0)})}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter(n=>be(n));return e?e.length:0}}V([_({mode:"boolean"})],lt.prototype,"expanded",void 0);V([_({mode:"boolean"})],lt.prototype,"selected",void 0);V([_({mode:"boolean"})],lt.prototype,"disabled",void 0);V([Dt],lt.prototype,"focusable",void 0);V([Dt],lt.prototype,"childItems",void 0);V([Dt],lt.prototype,"items",void 0);V([Dt],lt.prototype,"nested",void 0);V([Dt],lt.prototype,"renderCollapsedChildren",void 0);qn(lt,zi);const Od=(t,e)=>kt`
    <template
        role="tree"
        ${Et("treeView")}
        @keydown="${(n,r)=>n.handleKeyDown(r.event)}"
        @focusin="${(n,r)=>n.handleFocus(r.event)}"
        @focusout="${(n,r)=>n.handleBlur(r.event)}"
        @click="${(n,r)=>n.handleClick(r.event)}"
        @selected-change="${(n,r)=>n.handleSelectedChange(r.event)}"
    >
        <slot ${Qr("slottedTreeItems")}></slot>
    </template>
`;class Zr extends Ot{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1)){if(e.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&lt.focusItem(this.currentFocused);return}this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target)}},this.handleBlur=e=>{e.target instanceof HTMLElement&&(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const n=this.getVisibleNodes();switch(e.key){case ld:n.length&&lt.focusItem(n[0]);return;case ad:n.length&&lt.focusItem(n[n.length-1]);return;case sd:if(e.target&&this.isFocusableElement(e.target)){const r=e.target;r instanceof lt&&r.childItemLength()>0&&r.expanded?r.expanded=!1:r instanceof lt&&r.parentElement instanceof lt&&lt.focusItem(r.parentElement)}return!1;case id:if(e.target&&this.isFocusableElement(e.target)){const r=e.target;r instanceof lt&&r.childItemLength()>0&&!r.expanded?r.expanded=!0:r instanceof lt&&r.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case rd:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target);return;case od:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target);return;case Pa:this.handleClick(e);return}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!be(e.target))return!0;const n=e.target;n.selected?(this.currentSelected&&this.currentSelected!==n&&(this.currentSelected.selected=!1),this.currentSelected=n):!n.selected&&this.currentSelected===n&&(this.currentSelected=null)},this.setItems=()=>{const e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(r=>{be(r)&&(r.nested=this.nested)})},this.isFocusableElement=e=>be(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),H.queueUpdate(()=>{this.setItems()})}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!be(e.target))return!0;const n=e.target;n.disabled||(n.selected=!n.selected)}focusNextNode(e,n){const r=this.getVisibleNodes();if(!r)return;const s=r[r.indexOf(n)+e];Wi(s)&&lt.focusItem(s)}getValidFocusableItem(){const e=this.getVisibleNodes();let n=e.findIndex(this.isSelectedElement);return n===-1&&(n=e.findIndex(this.isFocusableElement)),n!==-1?e[n]:null}checkForNestedItems(){return this.slottedTreeItems.some(e=>be(e)&&e.querySelector("[role='treeitem']"))}getVisibleNodes(){return td(this,"[role='treeitem']")||[]}}V([_({attribute:"render-collapsed-nodes"})],Zr.prototype,"renderCollapsedNodes",void 0);V([Dt],Zr.prototype,"currentSelected",void 0);V([Dt],Zr.prototype,"slottedTreeItems",void 0);class Pd{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:n}=this,r=this.constructListener(e);r.bind(n)(),n.addListener(r),this.listenerCache.set(e,r)}unbind(e){const n=this.listenerCache.get(e);n&&(this.query.removeListener(n),this.listenerCache.delete(e))}}class Wn extends Pd{constructor(e,n){super(e),this.styles=n}static with(e){return n=>new Wn(e,n)}constructListener(e){let n=!1;const r=this.styles;return function(){const{matches:i}=this;i&&!n?(e.$fastController.addStyles(r),n=i):!i&&n&&(e.$fastController.removeStyles(r),n=i)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const Fe=Wn.with(window.matchMedia("(forced-colors)"));Wn.with(window.matchMedia("(prefers-color-scheme: dark)"));Wn.with(window.matchMedia("(prefers-color-scheme: light)"));class Ad{constructor(e,n,r){this.propertyName=e,this.value=n,this.styles=r}bind(e){rt.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){rt.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,n){e[n]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}const Ji="not-allowed",Ld=":host([hidden]){display:none}";function un(t){return`${Ld}:host{display:${t}}`}const ce=nd()?"focus-visible":"focus";function Oe(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function Ms(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function _e(t,e,n){return isNaN(t)?e:e+t*(n-e)}function Nd(t){const e=Math.round(Oe(t,0,255)).toString(16);return e.length===1?"0"+e:e}function ur(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function wt(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}class Hn{constructor(e,n,r){this.h=e,this.s=n,this.l=r}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new Hn(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Hn(wt(this.h,e),wt(this.s,e),wt(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class ut{constructor(e,n,r){this.l=e,this.a=n,this.b=r}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new ut(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new ut(wt(this.l,e),wt(this.a,e),wt(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}ut.epsilon=216/24389;ut.kappa=24389/27;class st{constructor(e,n,r,s){this.r=e,this.g=n,this.b=r,this.a=typeof s=="number"&&!isNaN(s)?s:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new st(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(_e(this.r,0,255))},${Math.round(_e(this.g,0,255))},${Math.round(_e(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(_e(this.r,0,255))},${Math.round(_e(this.g,0,255))},${Math.round(_e(this.b,0,255))},${Oe(this.a,0,1)})`}roundToPrecision(e){return new st(wt(this.r,e),wt(this.g,e),wt(this.b,e),wt(this.a,e))}clamp(){return new st(Oe(this.r,0,1),Oe(this.g,0,1),Oe(this.b,0,1),Oe(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return Nd(_e(e,0,255))}}class Rt{constructor(e,n,r){this.x=e,this.y=n,this.z=r}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new Rt(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Rt(wt(this.x,e),wt(this.y,e),wt(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}Rt.whitePoint=new Rt(.95047,1,1.08883);function Bd(t){return t.r*.2126+t.g*.7152+t.b*.0722}function ja(t){function e(n){return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return Bd(new st(e(t.r),e(t.g),e(t.b),1))}function Hs(t,e,n){return n-e===0?0:(t-e)/(n-e)}function js(t,e,n){const r=Hs(t.r,e.r,n.r),s=Hs(t.g,e.g,n.g),i=Hs(t.b,e.b,n.b);return(r+s+i)/3}function Md(t,e,n=null){let r=0,s=n;return s!==null?r=js(t,e,s):(s=new st(0,0,0,1),r=js(t,e,s),r<=0&&(s=new st(1,1,1,1),r=js(t,e,s))),r=Math.round(r*1e3)/1e3,new st(s.r,s.g,s.b,r)}function fl(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),r=e-n;let s=0;r!==0&&(e===t.r?s=60*((t.g-t.b)/r%6):e===t.g?s=60*((t.b-t.r)/r+2):s=60*((t.r-t.g)/r+4)),s<0&&(s+=360);const i=(e+n)/2;let o=0;return r!==0&&(o=r/(1-Math.abs(2*i-1))),new Hn(s,o,i)}function Hd(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,r=n*(1-Math.abs(t.h/60%2-1)),s=t.l-n/2;let i=0,o=0,l=0;return t.h<60?(i=n,o=r,l=0):t.h<120?(i=r,o=n,l=0):t.h<180?(i=0,o=n,l=r):t.h<240?(i=0,o=r,l=n):t.h<300?(i=r,o=0,l=n):t.h<360&&(i=n,o=0,l=r),new st(i+s,o+s,l+s,e)}function jd(t){const e=(t.l+16)/116,n=e+t.a/500,r=e-t.b/200,s=Math.pow(n,3),i=Math.pow(e,3),o=Math.pow(r,3);let l=0;s>ut.epsilon?l=s:l=(116*n-16)/ut.kappa;let a=0;t.l>ut.epsilon*ut.kappa?a=i:a=t.l/ut.kappa;let c=0;return o>ut.epsilon?c=o:c=(116*r-16)/ut.kappa,l=Rt.whitePoint.x*l,a=Rt.whitePoint.y*a,c=Rt.whitePoint.z*c,new Rt(l,a,c)}function zd(t){function e(a){return a>ut.epsilon?Math.pow(a,1/3):(ut.kappa*a+16)/116}const n=e(t.x/Rt.whitePoint.x),r=e(t.y/Rt.whitePoint.y),s=e(t.z/Rt.whitePoint.z),i=116*r-16,o=500*(n-r),l=200*(r-s);return new ut(i,o,l)}function Ud(t){function e(a){return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}const n=e(t.r),r=e(t.g),s=e(t.b),i=n*.4124564+r*.3575761+s*.1804375,o=n*.2126729+r*.7151522+s*.072175,l=n*.0193339+r*.119192+s*.9503041;return new Rt(i,o,l)}function qd(t,e=1){function n(o){return o<=.0031308?o*12.92:1.055*Math.pow(o,1/2.4)-.055}const r=n(t.x*3.2404542-t.y*1.5371385-t.z*.4985314),s=n(t.x*-.969266+t.y*1.8760108+t.z*.041556),i=n(t.x*.0556434-t.y*.2040259+t.z*1.0572252);return new st(r,s,i,e)}function Wd(t){return zd(Ud(t))}function zs(t,e=1){return qd(jd(t),e)}var dl;(function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"})(dl||(dl={}));function Gd(t,e){if(e.a>=1)return e;if(e.a<=0)return new st(t.r,t.g,t.b,1);const n=e.a*e.r+(1-e.a)*t.r,r=e.a*e.g+(1-e.a)*t.g,s=e.a*e.b+(1-e.a)*t.b;return new st(n,r,s,1)}function hr(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new st(ur(t,e.r,n.r),ur(t,e.g,n.g),ur(t,e.b,n.b),ur(t,e.a,n.a))}var pl;(function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"})(pl||(pl={}));const Yd=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function tn(t){const e=Yd.exec(t);if(e===null)return null;let n=e[1];if(n.length===3){const s=n.charAt(0),i=n.charAt(1),o=n.charAt(2);n=s.concat(s,i,i,o,o)}const r=parseInt(n,16);return isNaN(r)?null:new st(Ms((r&16711680)>>>16,0,255),Ms((r&65280)>>>8,0,255),Ms(r&255,0,255),1)}function Ir(t,e){const n=t.relativeLuminance>e.relativeLuminance?t:e,r=t.relativeLuminance>e.relativeLuminance?e:t;return(n.relativeLuminance+.05)/(r.relativeLuminance+.05)}const Wt=Object.freeze({create(t,e,n){return new kr(t,e,n)},from(t){return new kr(t.r,t.g,t.b)}});function Jd(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const n in e)if(typeof e[n]!=typeof t[n])return!1;return!0}class kr extends st{constructor(e,n,r){super(e,n,r,1),this.toColorString=this.toStringHexRGB,this.contrast=Ir.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ja(this)}static fromObject(e){return new kr(e.r,e.g,e.b)}}function ai(t,e,n=0,r=t.length-1){if(r===n)return t[n];const s=Math.floor((r-n)/2)+n;return e(t[s])?ai(t,e,n,s):ai(t,e,s+1,r)}const Qd=(-.1+Math.sqrt(.21))/2;function Gn(t){return t.relativeLuminance<=Qd}function Me(t){return Gn(t)?-1:1}const gl={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function Xd(t,e,n){return typeof t=="number"?jn.from(Wt.create(t,e,n)):jn.from(t)}function Zd(t,e){return Jd(t)?Xt.from(t,e):Xt.from(Wt.create(t.r,t.g,t.b),e)}const jn=Object.freeze({create:Xd,from:Zd});class Xt{constructor(e,n){this.closestIndexCache=new Map,this.source=e,this.swatches=n,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,n,r,s){r===void 0&&(r=this.closestIndexOf(e));let i=this.swatches;const o=this.lastIndex;let l=r;s===void 0&&(s=Me(e));const a=c=>Ir(e,c)>=n;return s===-1&&(i=this.reversedSwatches,l=o-l),ai(i,a,l,o)}get(e){return this.swatches[e]||this.swatches[Oe(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let n=this.swatches.indexOf(e);if(n!==-1)return this.closestIndexCache.set(e.relativeLuminance,n),n;const r=this.swatches.reduce((s,i)=>Math.abs(i.relativeLuminance-e.relativeLuminance)<Math.abs(s.relativeLuminance-e.relativeLuminance)?i:s);return n=this.swatches.indexOf(r),this.closestIndexCache.set(e.relativeLuminance,n),n}static saturationBump(e,n){const s=fl(e).s,i=fl(n);if(i.s<s){const o=new Hn(i.h,s,i.l);return Hd(o)}return n}static ramp(e){const n=e/100;return n>.5?(n-.5)/.5:2*n}static createHighResolutionPalette(e){const n=[],r=Wd(st.fromObject(e).roundToPrecision(4)),s=zs(new ut(0,r.a,r.b)).clamp().roundToPrecision(4),i=zs(new ut(50,r.a,r.b)).clamp().roundToPrecision(4),o=zs(new ut(100,r.a,r.b)).clamp().roundToPrecision(4),l=new st(0,0,0),a=new st(1,1,1),c=o.equalValue(a)?0:14,h=s.equalValue(l)?0:14;for(let p=100+c;p>=0-h;p-=.5){let m;if(p<0){const D=p/h+1;m=hr(D,l,s)}else if(p<=50)m=hr(Xt.ramp(p),s,i);else if(p<=100)m=hr(Xt.ramp(p),i,o);else{const D=(p-100)/c;m=hr(D,o,a)}m=Xt.saturationBump(i,m).roundToPrecision(4),n.push(Wt.from(m))}return new Xt(e,n)}static adjustEnd(e,n,r,s){const i=s===-1?n.swatches:n.reversedSwatches,o=c=>{const h=n.closestIndexOf(c);return s===1?n.lastIndex-h:h};s===1&&r.reverse();const l=e(r[r.length-2]);if(wt(Ir(r[r.length-1],r[r.length-2]),2)<l){r.pop();const c=n.colorContrast(i[n.lastIndex],l,void 0,s),h=o(c),p=o(r[r.length-2]),m=h-p;let D=1;for(let E=r.length-m-1;E<r.length;E++){const R=o(r[E]),M=E===r.length-1?n.lastIndex:R+D;r[E]=i[M],D++}}s===1&&r.reverse()}static createColorPaletteByContrast(e,n){const r=Xt.createHighResolutionPalette(e),s=l=>{const a=n.stepContrast+n.stepContrast*(1-l.relativeLuminance)*n.stepContrastRamp;return wt(a,2)},i=[];let o=n.preserveSource?e:r.swatches[0];i.push(o);do{const l=s(o);o=r.colorContrast(o,l,void 0,1),i.push(o)}while(o.relativeLuminance>0);if(n.preserveSource){o=e;do{const l=s(o);o=r.colorContrast(o,l,void 0,-1),i.unshift(o)}while(o.relativeLuminance<1)}return this.adjustEnd(s,r,i,-1),n.preserveSource&&this.adjustEnd(s,r,i,1),i}static from(e,n){const r=n===void 0?gl:Object.assign(Object.assign({},gl),n);return new Xt(e,Object.freeze(Xt.createColorPaletteByContrast(e,r)))}}const Er=Wt.create(1,1,1),Qi=Wt.create(0,0,0),Kd=Wt.create(.5,.5,.5),Us=tn("#0078D4"),tp=Wt.create(Us.r,Us.g,Us.b);function za(t,e,n,r,s){const i=h=>h.contrast(Er)>=s?Er:Qi,o=i(t),l=i(e),a=o.relativeLuminance===l.relativeLuminance?o:i(n),c=i(r);return{rest:o,hover:l,active:a,focus:c}}class Kr{constructor(e,n,r,s){this.toColorString=()=>this.cssGradient,this.contrast=Ir.bind(null,this),this.createCSS=this.toColorString,this.color=new st(e,n,r),this.cssGradient=s,this.relativeLuminance=ja(this.color),this.r=e,this.g=n,this.b=r}static fromObject(e,n){return new Kr(e.r,e.g,e.b,n)}}const ep=new st(0,0,0),np=new st(1,1,1);function Ua(t,e,n,r,s,i,o,l,a=10,c=!1){const h=t.closestIndexOf(e);l===void 0&&(l=Me(e));function p(q){if(c){const P=t.closestIndexOf(e),Ft=t.get(P),Gt=q.relativeLuminance<e.relativeLuminance?ep:np,re=Md(tn(q.toColorString()),tn(Ft.toColorString()),Gt).roundToPrecision(2),At=Gd(tn(e.toColorString()),re);return Wt.from(At)}else return q}const m=h+l*n,D=m+l*(r-n),E=m+l*(s-n),R=m+l*(i-n),M=l===-1?0:100-a,X=l===-1?a:100;function z(q,P){const Ft=t.get(q);if(P){const Gt=t.get(q+l*o),re=l===-1?Gt:Ft,At=l===-1?Ft:Gt,pn=`linear-gradient(${p(re).toColorString()} ${M}%, ${p(At).toColorString()} ${X}%)`;return Kr.fromObject(re,pn)}else return p(Ft)}return{rest:z(m,!0),hover:z(D,!0),active:z(E,!1),focus:z(R,!0)}}function rp(t,e,n,r,s,i,o,l){const a=t.closestIndexOf(e),c=Me(e),h=a+c*n,p=h+c*(r-n),m=h+c*(s-n),D=h+c*(i-n),E=`calc(100% - ${l})`;function R(M,X){const z=t.get(M);if(X){const q=t.get(M+c*o),P=`linear-gradient(${z.toColorString()} ${E}, ${q.toColorString()} ${E}, ${q.toColorString()})`;return Kr.fromObject(z,P)}else return z}return{rest:R(h,!0),hover:R(p,!0),active:R(m,!1),focus:R(D,!0)}}function sp(t,e,n){return t.colorContrast(e,n)}function rn(t,e,n,r,s,i,o,l){l==null&&(l=Me(e));const a=t.closestIndexOf(t.colorContrast(e,n));return{rest:t.get(a+l*r),hover:t.get(a+l*s),active:t.get(a+l*i),focus:t.get(a+l*o)}}function ip(t,e,n,r,s,i,o,l=void 0,a,c,h,p,m,D=void 0){return Gn(e)?rn(t,e,a,c,h,p,m,D):rn(t,e,n,r,s,i,o,l)}function op(t,e,n){return t.get(t.closestIndexOf(e)+Me(e)*n)}function $e(t,e,n,r,s,i,o){const l=t.closestIndexOf(e);return o==null&&(o=Me(e)),{rest:t.get(l+o*n),hover:t.get(l+o*r),active:t.get(l+o*s),focus:t.get(l+o*i)}}function Xi(t,e,n,r,s,i,o=void 0,l,a,c,h,p=void 0){return Gn(e)?$e(t,e,l,a,c,h,p):$e(t,e,n,r,s,i,o)}function lp(t,e){return Gn(e)?Er:Qi}function ap(t,e,n){return Gn(e)?Qi:Er}function cp(t){return Wt.create(t,t,t)}var ci;(function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"})(ci||(ci={}));function Yn(t,e){return t.closestIndexOf(cp(e))}function up(t,e){return t.get(Yn(t,e))}function hp(t,e,n){return t.get(Yn(t,e)+n)}function qa(t,e,n){return t.get(Yn(t,e)+n*-1)}function fp(t,e,n){return t.get(Yn(t,e)+n*-1*2)}function dp(t,e,n){return t.get(Yn(t,e)+n*-1*3)}const pp={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:d}=K;function x(t){return K.create({name:t,cssCustomPropertyName:null})}const qs=d("direction").withDefault(li.ltr),Zi=d("disabled-opacity").withDefault(.3),Wa=d("base-height-multiplier").withDefault(8);d("base-horizontal-spacing-multiplier").withDefault(3);const Ki=d("density").withDefault(0),Bt=d("design-unit").withDefault(4),Ne=d("control-corner-radius").withDefault(4),gp=d("layer-corner-radius").withDefault(8),He=d("stroke-width").withDefault(1),ue=d("focus-stroke-width").withDefault(2),ne=d("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),bp=d("font-weight").withDefault(pp.Normal);function fe(t){return e=>{const n=t.getValueFor(e),r=bp.getValueFor(e);if(n.endsWith("px")){const s=Number.parseFloat(n.replace("px",""));if(s<=12)return`"wght" ${r}, "opsz" 8`;if(s>24)return`"wght" ${r}, "opsz" 36`}return`"wght" ${r}, "opsz" 10.5`}}const Ga=d("type-ramp-base-font-size").withDefault("14px"),vp=d("type-ramp-base-line-height").withDefault("20px"),mp=d("type-ramp-base-font-variations").withDefault(fe(Ga)),Ya=d("type-ramp-minus-1-font-size").withDefault("12px"),yp=d("type-ramp-minus-1-line-height").withDefault("16px"),wp=d("type-ramp-minus-1-font-variations").withDefault(fe(Ya)),Ja=d("type-ramp-minus-2-font-size").withDefault("10px"),xp=d("type-ramp-minus-2-line-height").withDefault("14px"),$p=d("type-ramp-minus-2-font-variations").withDefault(fe(Ja)),Qa=d("type-ramp-plus-1-font-size").withDefault("16px"),Fp=d("type-ramp-plus-1-line-height").withDefault("22px"),Sp=d("type-ramp-plus-1-font-variations").withDefault(fe(Qa)),Xa=d("type-ramp-plus-2-font-size").withDefault("20px"),Cp=d("type-ramp-plus-2-line-height").withDefault("26px"),Dp=d("type-ramp-plus-2-font-variations").withDefault(fe(Xa)),Za=d("type-ramp-plus-3-font-size").withDefault("24px"),Tp=d("type-ramp-plus-3-line-height").withDefault("32px"),Vp=d("type-ramp-plus-3-font-variations").withDefault(fe(Za)),Ka=d("type-ramp-plus-4-font-size").withDefault("28px"),Rp=d("type-ramp-plus-4-line-height").withDefault("36px"),_p=d("type-ramp-plus-4-font-variations").withDefault(fe(Ka)),tc=d("type-ramp-plus-5-font-size").withDefault("32px"),Ip=d("type-ramp-plus-5-line-height").withDefault("40px"),kp=d("type-ramp-plus-5-font-variations").withDefault(fe(tc)),ec=d("type-ramp-plus-6-font-size").withDefault("40px"),Ep=d("type-ramp-plus-6-line-height").withDefault("52px"),Op=d("type-ramp-plus-6-font-variations").withDefault(fe(ec)),hn=d("base-layer-luminance").withDefault(ci.LightMode),bl=x("accent-fill-rest-delta").withDefault(0),vl=x("accent-fill-hover-delta").withDefault(-2),ml=x("accent-fill-active-delta").withDefault(-5),yl=x("accent-fill-focus-delta").withDefault(0),Pp=x("accent-foreground-rest-delta").withDefault(0),Ap=x("accent-foreground-hover-delta").withDefault(3),Lp=x("accent-foreground-active-delta").withDefault(-8),Np=x("accent-foreground-focus-delta").withDefault(0),Bp=x("neutral-fill-rest-delta").withDefault(-1),Mp=x("neutral-fill-hover-delta").withDefault(1),Hp=x("neutral-fill-active-delta").withDefault(0),jp=x("neutral-fill-focus-delta").withDefault(0),zp=x("neutral-fill-input-rest-delta").withDefault(-1),Up=x("neutral-fill-input-hover-delta").withDefault(1),qp=x("neutral-fill-input-active-delta").withDefault(0),Wp=x("neutral-fill-input-focus-delta").withDefault(-2),fr=x("neutral-fill-input-alt-rest-delta").withDefault(2),wl=x("neutral-fill-input-alt-hover-delta").withDefault(4),xl=x("neutral-fill-input-alt-active-delta").withDefault(6),$l=x("neutral-fill-input-alt-focus-delta").withDefault(2),Be=x("neutral-fill-layer-rest-delta").withDefault(-2),Gp=x("neutral-fill-layer-hover-delta").withDefault(-3),Yp=x("neutral-fill-layer-active-delta").withDefault(-3),dr=x("neutral-fill-layer-alt-rest-delta").withDefault(-1),Jp=x("neutral-fill-secondary-rest-delta").withDefault(3),Qp=x("neutral-fill-secondary-hover-delta").withDefault(2),Xp=x("neutral-fill-secondary-active-delta").withDefault(1),Zp=x("neutral-fill-secondary-focus-delta").withDefault(3),Kp=x("neutral-fill-stealth-rest-delta").withDefault(0),tg=x("neutral-fill-stealth-hover-delta").withDefault(3),eg=x("neutral-fill-stealth-active-delta").withDefault(2),ng=x("neutral-fill-stealth-focus-delta").withDefault(0),rg=x("neutral-fill-strong-rest-delta").withDefault(0),sg=x("neutral-fill-strong-hover-delta").withDefault(8),ig=x("neutral-fill-strong-active-delta").withDefault(-5),og=x("neutral-fill-strong-focus-delta").withDefault(0),lg=x("neutral-stroke-rest-delta").withDefault(8),ag=x("neutral-stroke-hover-delta").withDefault(12),cg=x("neutral-stroke-active-delta").withDefault(6),ug=x("neutral-stroke-focus-delta").withDefault(8),nc=x("neutral-stroke-control-rest-delta").withDefault(3),rc=x("neutral-stroke-control-hover-delta").withDefault(5),sc=x("neutral-stroke-control-active-delta").withDefault(5),ic=x("neutral-stroke-control-focus-delta").withDefault(5),hg=x("neutral-stroke-divider-rest-delta").withDefault(4),Fl=x("neutral-stroke-layer-rest-delta").withDefault(3),fg=x("neutral-stroke-layer-hover-delta").withDefault(3),dg=x("neutral-stroke-layer-active-delta").withDefault(3),pg=x("neutral-stroke-strong-hover-delta").withDefault(0),gg=x("neutral-stroke-strong-active-delta").withDefault(0),bg=x("neutral-stroke-strong-focus-delta").withDefault(0),vg=d("neutral-base-color").withDefault(Kd),Q=x("neutral-palette").withDefault(t=>jn.from(vg.getValueFor(t))),mg=d("accent-base-color").withDefault(tp),to=x("accent-palette").withDefault(t=>jn.from(mg.getValueFor(t))),yg=x("neutral-layer-card-container-recipe").withDefault({evaluate:t=>qa(Q.getValueFor(t),hn.getValueFor(t),Be.getValueFor(t))});d("neutral-layer-card-container").withDefault(t=>yg.getValueFor(t).evaluate(t));const wg=x("neutral-layer-floating-recipe").withDefault({evaluate:t=>hp(Q.getValueFor(t),hn.getValueFor(t),Be.getValueFor(t))});d("neutral-layer-floating").withDefault(t=>wg.getValueFor(t).evaluate(t));const xg=x("neutral-layer-1-recipe").withDefault({evaluate:t=>up(Q.getValueFor(t),hn.getValueFor(t))}),$g=d("neutral-layer-1").withDefault(t=>xg.getValueFor(t).evaluate(t)),Fg=x("neutral-layer-2-recipe").withDefault({evaluate:t=>qa(Q.getValueFor(t),hn.getValueFor(t),Be.getValueFor(t))});d("neutral-layer-2").withDefault(t=>Fg.getValueFor(t).evaluate(t));const Sg=x("neutral-layer-3-recipe").withDefault({evaluate:t=>fp(Q.getValueFor(t),hn.getValueFor(t),Be.getValueFor(t))});d("neutral-layer-3").withDefault(t=>Sg.getValueFor(t).evaluate(t));const Cg=x("neutral-layer-4-recipe").withDefault({evaluate:t=>dp(Q.getValueFor(t),hn.getValueFor(t),Be.getValueFor(t))});d("neutral-layer-4").withDefault(t=>Cg.getValueFor(t).evaluate(t));const Y=d("fill-color").withDefault(t=>$g.getValueFor(t));var Or;(function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"})(Or||(Or={}));const ts=x("accent-fill-recipe").withDefault({evaluate:(t,e)=>ip(to.getValueFor(t),e||Y.getValueFor(t),5,bl.getValueFor(t),vl.getValueFor(t),ml.getValueFor(t),yl.getValueFor(t),void 0,8,bl.getValueFor(t),vl.getValueFor(t),ml.getValueFor(t),yl.getValueFor(t),void 0)}),ye=d("accent-fill-rest").withDefault(t=>ts.getValueFor(t).evaluate(t).rest),sn=d("accent-fill-hover").withDefault(t=>ts.getValueFor(t).evaluate(t).hover),on=d("accent-fill-active").withDefault(t=>ts.getValueFor(t).evaluate(t).active),es=d("accent-fill-focus").withDefault(t=>ts.getValueFor(t).evaluate(t).focus),ns=x("foreground-on-accent-recipe").withDefault({evaluate:t=>za(ye.getValueFor(t),sn.getValueFor(t),on.getValueFor(t),es.getValueFor(t),Or.normal)}),Dg=d("foreground-on-accent-rest").withDefault(t=>ns.getValueFor(t).evaluate(t).rest),Tg=d("foreground-on-accent-hover").withDefault(t=>ns.getValueFor(t).evaluate(t).hover),Vg=d("foreground-on-accent-active").withDefault(t=>ns.getValueFor(t).evaluate(t).active);d("foreground-on-accent-focus").withDefault(t=>ns.getValueFor(t).evaluate(t).focus);const rs=x("accent-foreground-recipe").withDefault({evaluate:(t,e)=>rn(to.getValueFor(t),e||Y.getValueFor(t),9.5,Pp.getValueFor(t),Ap.getValueFor(t),Lp.getValueFor(t),Np.getValueFor(t))}),Rg=d("accent-foreground-rest").withDefault(t=>rs.getValueFor(t).evaluate(t).rest),_g=d("accent-foreground-hover").withDefault(t=>rs.getValueFor(t).evaluate(t).hover),Ig=d("accent-foreground-active").withDefault(t=>rs.getValueFor(t).evaluate(t).active);d("accent-foreground-focus").withDefault(t=>rs.getValueFor(t).evaluate(t).focus);const ss=x("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>Ua(Q.getValueFor(t),e||Y.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)}),kg=d("accent-stroke-control-rest").withDefault(t=>ss.getValueFor(t).evaluate(t,ye.getValueFor(t)).rest),Eg=d("accent-stroke-control-hover").withDefault(t=>ss.getValueFor(t).evaluate(t,sn.getValueFor(t)).hover),Og=d("accent-stroke-control-active").withDefault(t=>ss.getValueFor(t).evaluate(t,on.getValueFor(t)).active);d("accent-stroke-control-focus").withDefault(t=>ss.getValueFor(t).evaluate(t,es.getValueFor(t)).focus);const is=x("neutral-fill-recipe").withDefault({evaluate:(t,e)=>Xi(Q.getValueFor(t),e||Y.getValueFor(t),Bp.getValueFor(t),Mp.getValueFor(t),Hp.getValueFor(t),jp.getValueFor(t),void 0,2,3,1,2,void 0)}),pr=d("neutral-fill-rest").withDefault(t=>is.getValueFor(t).evaluate(t).rest),Sl=d("neutral-fill-hover").withDefault(t=>is.getValueFor(t).evaluate(t).hover),Cl=d("neutral-fill-active").withDefault(t=>is.getValueFor(t).evaluate(t).active);d("neutral-fill-focus").withDefault(t=>is.getValueFor(t).evaluate(t).focus);const fn=x("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>Xi(Q.getValueFor(t),e||Y.getValueFor(t),zp.getValueFor(t),Up.getValueFor(t),qp.getValueFor(t),Wp.getValueFor(t),void 0,2,3,1,0,void 0)}),gr=d("neutral-fill-input-rest").withDefault(t=>fn.getValueFor(t).evaluate(t).rest),Dl=d("neutral-fill-input-hover").withDefault(t=>fn.getValueFor(t).evaluate(t).hover);d("neutral-fill-input-active").withDefault(t=>fn.getValueFor(t).evaluate(t).active);const Tl=d("neutral-fill-input-focus").withDefault(t=>fn.getValueFor(t).evaluate(t).focus),os=x("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>Xi(Q.getValueFor(t),e||Y.getValueFor(t),fr.getValueFor(t),wl.getValueFor(t),xl.getValueFor(t),$l.getValueFor(t),1,fr.getValueFor(t),fr.getValueFor(t)-wl.getValueFor(t),fr.getValueFor(t)-xl.getValueFor(t),$l.getValueFor(t),1)});d("neutral-fill-input-alt-rest").withDefault(t=>os.getValueFor(t).evaluate(t).rest);d("neutral-fill-input-alt-hover").withDefault(t=>os.getValueFor(t).evaluate(t).hover);d("neutral-fill-input-alt-active").withDefault(t=>os.getValueFor(t).evaluate(t).active);d("neutral-fill-input-alt-focus").withDefault(t=>os.getValueFor(t).evaluate(t).focus);const ls=x("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>$e(Q.getValueFor(t),e||Y.getValueFor(t),Be.getValueFor(t),Gp.getValueFor(t),Yp.getValueFor(t),Be.getValueFor(t),1)});d("neutral-fill-layer-rest").withDefault(t=>ls.getValueFor(t).evaluate(t).rest);d("neutral-fill-layer-hover").withDefault(t=>ls.getValueFor(t).evaluate(t).hover);d("neutral-fill-layer-active").withDefault(t=>ls.getValueFor(t).evaluate(t).active);const Pg=x("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>$e(Q.getValueFor(t),e||Y.getValueFor(t),dr.getValueFor(t),dr.getValueFor(t),dr.getValueFor(t),dr.getValueFor(t))});d("neutral-fill-layer-alt-rest").withDefault(t=>Pg.getValueFor(t).evaluate(t).rest);const je=x("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>$e(Q.getValueFor(t),e||Y.getValueFor(t),Jp.getValueFor(t),Qp.getValueFor(t),Xp.getValueFor(t),Zp.getValueFor(t))}),ui=d("neutral-fill-secondary-rest").withDefault(t=>je.getValueFor(t).evaluate(t).rest),Ag=d("neutral-fill-secondary-hover").withDefault(t=>je.getValueFor(t).evaluate(t).hover);d("neutral-fill-secondary-active").withDefault(t=>je.getValueFor(t).evaluate(t).active);const Lg=d("neutral-fill-secondary-focus").withDefault(t=>je.getValueFor(t).evaluate(t).focus),dn=x("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>$e(Q.getValueFor(t),e||Y.getValueFor(t),Kp.getValueFor(t),tg.getValueFor(t),eg.getValueFor(t),ng.getValueFor(t))}),zn=d("neutral-fill-stealth-rest").withDefault(t=>dn.getValueFor(t).evaluate(t).rest),eo=d("neutral-fill-stealth-hover").withDefault(t=>dn.getValueFor(t).evaluate(t).hover),no=d("neutral-fill-stealth-active").withDefault(t=>dn.getValueFor(t).evaluate(t).active);d("neutral-fill-stealth-focus").withDefault(t=>dn.getValueFor(t).evaluate(t).focus);const as=x("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>rn(Q.getValueFor(t),e||Y.getValueFor(t),4.5,rg.getValueFor(t),sg.getValueFor(t),ig.getValueFor(t),og.getValueFor(t))});d("neutral-fill-strong-rest").withDefault(t=>as.getValueFor(t).evaluate(t).rest);d("neutral-fill-strong-hover").withDefault(t=>as.getValueFor(t).evaluate(t).hover);d("neutral-fill-strong-active").withDefault(t=>as.getValueFor(t).evaluate(t).active);d("neutral-fill-strong-focus").withDefault(t=>as.getValueFor(t).evaluate(t).focus);const cs=x("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>rn(Q.getValueFor(t),e||Y.getValueFor(t),16,0,-19,-30,0)}),Un=d("neutral-foreground-rest").withDefault(t=>cs.getValueFor(t).evaluate(t).rest);d("neutral-foreground-hover").withDefault(t=>cs.getValueFor(t).evaluate(t).hover);d("neutral-foreground-active").withDefault(t=>cs.getValueFor(t).evaluate(t).active);d("neutral-foreground-focus").withDefault(t=>cs.getValueFor(t).evaluate(t).focus);const Jn=x("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>sp(Q.getValueFor(t),e||Y.getValueFor(t),4.5)});d("neutral-foreground-hint").withDefault(t=>Jn.getValueFor(t).evaluate(t));const us=x("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>$e(Q.getValueFor(t),e||Y.getValueFor(t),lg.getValueFor(t),ag.getValueFor(t),cg.getValueFor(t),ug.getValueFor(t))}),Pr=d("neutral-stroke-rest").withDefault(t=>us.getValueFor(t).evaluate(t).rest),Ng=d("neutral-stroke-hover").withDefault(t=>us.getValueFor(t).evaluate(t).hover),Bg=d("neutral-stroke-active").withDefault(t=>us.getValueFor(t).evaluate(t).active);d("neutral-stroke-focus").withDefault(t=>us.getValueFor(t).evaluate(t).focus);const hs=x("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>Ua(Q.getValueFor(t),e||Y.getValueFor(t),nc.getValueFor(t),rc.getValueFor(t),sc.getValueFor(t),ic.getValueFor(t),5)}),Mg=d("neutral-stroke-control-rest").withDefault(t=>hs.getValueFor(t).evaluate(t).rest),Hg=d("neutral-stroke-control-hover").withDefault(t=>hs.getValueFor(t).evaluate(t).hover),jg=d("neutral-stroke-control-active").withDefault(t=>hs.getValueFor(t).evaluate(t).active);d("neutral-stroke-control-focus").withDefault(t=>hs.getValueFor(t).evaluate(t).focus);const zg=x("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>op(Q.getValueFor(t),e||Y.getValueFor(t),hg.getValueFor(t))}),Ug=d("neutral-stroke-divider-rest").withDefault(t=>zg.getValueFor(t).evaluate(t)),fs=x("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>rp(Q.getValueFor(t),e||Y.getValueFor(t),nc.getValueFor(t),rc.getValueFor(t),sc.getValueFor(t),ic.getValueFor(t),20,He.getValueFor(t)+"px")}),Vl=d("neutral-stroke-input-rest").withDefault(t=>fs.getValueFor(t).evaluate(t).rest),qg=d("neutral-stroke-input-hover").withDefault(t=>fs.getValueFor(t).evaluate(t).hover);d("neutral-stroke-input-active").withDefault(t=>fs.getValueFor(t).evaluate(t).active);d("neutral-stroke-input-focus").withDefault(t=>fs.getValueFor(t).evaluate(t).focus);const ro=x("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>$e(Q.getValueFor(t),e||Y.getValueFor(t),Fl.getValueFor(t),fg.getValueFor(t),dg.getValueFor(t),Fl.getValueFor(t))}),Wg=d("neutral-stroke-layer-rest").withDefault(t=>ro.getValueFor(t).evaluate(t).rest);d("neutral-stroke-layer-hover").withDefault(t=>ro.getValueFor(t).evaluate(t).hover);d("neutral-stroke-layer-active").withDefault(t=>ro.getValueFor(t).evaluate(t).active);const ds=x("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>rn(Q.getValueFor(t),e||Y.getValueFor(t),5.5,0,pg.getValueFor(t),gg.getValueFor(t),bg.getValueFor(t))});d("neutral-stroke-strong-rest").withDefault(t=>ds.getValueFor(t).evaluate(t).rest);d("neutral-stroke-strong-hover").withDefault(t=>ds.getValueFor(t).evaluate(t).hover);d("neutral-stroke-strong-active").withDefault(t=>ds.getValueFor(t).evaluate(t).active);d("neutral-stroke-strong-focus").withDefault(t=>ds.getValueFor(t).evaluate(t).focus);const Gg=x("focus-stroke-outer-recipe").withDefault({evaluate:t=>lp(Q.getValueFor(t),Y.getValueFor(t))}),so=d("focus-stroke-outer").withDefault(t=>Gg.getValueFor(t).evaluate(t)),Yg=x("focus-stroke-inner-recipe").withDefault({evaluate:t=>ap(to.getValueFor(t),Y.getValueFor(t),so.getValueFor(t))}),Jg=d("focus-stroke-inner").withDefault(t=>Yg.getValueFor(t).evaluate(t)),ps=x("foreground-on-accent-large-recipe").withDefault({evaluate:t=>za(ye.getValueFor(t),sn.getValueFor(t),on.getValueFor(t),es.getValueFor(t),Or.large)});d("foreground-on-accent-rest-large").withDefault(t=>ps.getValueFor(t).evaluate(t).rest);d("foreground-on-accent-hover-large").withDefault(t=>ps.getValueFor(t).evaluate(t,sn.getValueFor(t)).hover);d("foreground-on-accent-active-large").withDefault(t=>ps.getValueFor(t).evaluate(t,on.getValueFor(t)).active);d("foreground-on-accent-focus-large").withDefault(t=>ps.getValueFor(t).evaluate(t,es.getValueFor(t)).focus);const Qg=d("neutral-fill-inverse-rest-delta").withDefault(0),Xg=d("neutral-fill-inverse-hover-delta").withDefault(-3),Zg=d("neutral-fill-inverse-active-delta").withDefault(7),Kg=d("neutral-fill-inverse-focus-delta").withDefault(0);function tb(t,e,n,r,s,i){const o=Me(e),l=t.closestIndexOf(t.colorContrast(e,14)),a=l+o*Math.abs(n-r),c=o===1?n<r:o*n>o*r;let h,p;return c?(h=l,p=a):(h=a,p=l),{rest:t.get(h),hover:t.get(p),active:t.get(h+o*s),focus:t.get(h+o*i)}}const gs=x("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>tb(Q.getValueFor(t),e||Y.getValueFor(t),Qg.getValueFor(t),Xg.getValueFor(t),Zg.getValueFor(t),Kg.getValueFor(t))});d("neutral-fill-inverse-rest").withDefault(t=>gs.getValueFor(t).evaluate(t).rest);d("neutral-fill-inverse-hover").withDefault(t=>gs.getValueFor(t).evaluate(t).hover);d("neutral-fill-inverse-active").withDefault(t=>gs.getValueFor(t).evaluate(t).active);d("neutral-fill-inverse-focus").withDefault(t=>gs.getValueFor(t).evaluate(t).focus);const Ar=_t`
  font-family: ${ne};
  font-size: ${Ga};
  line-height: ${vp};
  font-weight: initial;
  font-variation-settings: ${mp};
`;_t`
  font-family: ${ne};
  font-size: ${Ya};
  line-height: ${yp};
  font-weight: initial;
  font-variation-settings: ${wp};
`;_t`
  font-family: ${ne};
  font-size: ${Ja};
  line-height: ${xp};
  font-weight: initial;
  font-variation-settings: ${$p};
`;_t`
  font-family: ${ne};
  font-size: ${Qa};
  line-height: ${Fp};
  font-weight: initial;
  font-variation-settings: ${Sp};
`;_t`
  font-family: ${ne};
  font-size: ${Xa};
  line-height: ${Cp};
  font-weight: initial;
  font-variation-settings: ${Dp};
`;_t`
  font-family: ${ne};
  font-size: ${Za};
  line-height: ${Tp};
  font-weight: initial;
  font-variation-settings: ${Vp};
`;_t`
  font-family: ${ne};
  font-size: ${Ka};
  line-height: ${Rp};
  font-weight: initial;
  font-variation-settings: ${_p};
`;_t`
  font-family: ${ne};
  font-size: ${tc};
  line-height: ${Ip};
  font-weight: initial;
  font-variation-settings: ${kp};
`;_t`
  font-family: ${ne};
  font-size: ${ec};
  line-height: ${Ep};
  font-weight: initial;
  font-variation-settings: ${Op};
`;const io=_t`
  outline: calc(${ue} * 1px) solid ${so};
  outline-offset: calc(${ue} * -1px);
`;_t`
  outline: calc(${ue} * 1px) solid ${so};
  outline-offset: calc(${He} * 1px);
`;const Mt=_t`(${Wa} + ${Ki}) * ${Bt}`;function bs(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}class eb{constructor(e,n){this.cache=new WeakMap,this.ltr=e,this.rtl=n}bind(e){this.attach(e)}unbind(e){const n=this.cache.get(e);n&&qs.unsubscribe(n)}attach(e){const n=this.cache.get(e)||new nb(this.ltr,this.rtl,e),r=qs.getValueFor(e);qs.subscribe(n),n.attach(r),this.cache.set(e,n)}}class nb{constructor(e,n,r){this.ltr=e,this.rtl=n,this.source=r,this.attached=null}handleChange({target:e,token:n}){this.attach(n.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const ze=K.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,n)=>{let r=.12,s=.14;e>16&&(r=.2,s=.24);const i=`0 0 2px rgba(0, 0, 0, ${r})`,o=`0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${s})`;return`${i}, ${o}`}}),rb=K.create("elevation-shadow-card-rest-size").withDefault(4),sb=K.create("elevation-shadow-card-hover-size").withDefault(8),ib=K.create("elevation-shadow-card-active-size").withDefault(0),ob=K.create("elevation-shadow-card-focus-size").withDefault(8),lb=K.create("elevation-shadow-card-rest").withDefault(t=>ze.getValueFor(t).evaluate(t,rb.getValueFor(t)));K.create("elevation-shadow-card-hover").withDefault(t=>ze.getValueFor(t).evaluate(t,sb.getValueFor(t)));K.create("elevation-shadow-card-active").withDefault(t=>ze.getValueFor(t).evaluate(t,ib.getValueFor(t)));K.create("elevation-shadow-card-focus").withDefault(t=>ze.getValueFor(t).evaluate(t,ob.getValueFor(t)));const ab=K.create("elevation-shadow-tooltip-size").withDefault(16);K.create("elevation-shadow-tooltip").withDefault(t=>ze.getValueFor(t).evaluate(t,ab.getValueFor(t)));const cb=K.create("elevation-shadow-flyout-size").withDefault(32);K.create("elevation-shadow-flyout").withDefault(t=>ze.getValueFor(t).evaluate(t,cb.getValueFor(t)));const ub=K.create("elevation-shadow-dialog-size").withDefault(128);K.create("elevation-shadow-dialog").withDefault(t=>ze.getValueFor(t).evaluate(t,ub.getValueFor(t)));const hb=(t,e,n,r="[disabled]")=>J`
    ${un("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Ar}
      height: calc(${Mt} * 1px);
      min-width: calc(${Mt} * 1px);
      color: ${Un};
      border-radius: calc(${Ne} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${He} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Bt} * 2 * ${Ki})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${ce} {
      ${io}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,fb=(t,e,n,r="[disabled]")=>J`
    .control {
      background: padding-box linear-gradient(${pr}, ${pr}),
        border-box ${Mg};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${Sl}, ${Sl}),
        border-box ${Hg};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${Cl}, ${Cl}),
        border-box ${jg};
    }

    :host(${r}) .control {
      background: padding-box linear-gradient(${pr}, ${pr}),
        border-box ${Pr};
    }
  `.withBehaviors(Fe(J`
        .control {
          background: ${F.ButtonFace};
          border-color: ${F.ButtonText};
          color: ${F.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          forced-color-adjust: none;
          background: ${F.HighlightText};
          border-color: ${F.Highlight};
          color: ${F.Highlight};
        }

        :host(${r}) .control {
          background: transparent;
          border-color: ${F.GrayText};
          color: ${F.GrayText};
        }

        .control:${ce} {
          outline-color: ${F.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${F.LinkText};
          color: ${F.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${F.CanvasText};
          color: ${F.CanvasText};
        }
    `)),db=(t,e,n,r="[disabled]")=>J`
    .control {
      background: padding-box linear-gradient(${ye}, ${ye}),
        border-box ${kg};
      color: ${Dg};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${sn}, ${sn}),
        border-box ${Eg};
      color: ${Tg};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${on}, ${on}),
        border-box ${Og};
      color: ${Vg};
    }

    :host(${r}) .control {
      background: ${ye};
    }

    .control:${ce} {
      box-shadow: 0 0 0 calc(${ue} * 1px) ${Jg} inset !important;
    }
  `.withBehaviors(Fe(J`
        .control {
          forced-color-adjust: none;
          background: ${F.Highlight};
          color: ${F.HighlightText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${F.HighlightText};
          border-color: ${F.Highlight};
          color: ${F.Highlight};
        }

        :host(${r}) .control {
          background: transparent;
          border-color: ${F.GrayText};
          color: ${F.GrayText};
        }

        .control:${ce} {
          outline-color: ${F.CanvasText};
          box-shadow: 0 0 0 calc(${ue} * 1px) ${F.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${F.LinkText};
          color: ${F.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${F.ButtonFace};
          border-color: ${F.LinkText};
          color: ${F.LinkText};
        }
      `)),pb=(t,e,n,r="[disabled]")=>J`
    :host {
      color: ${Rg};
    }

    .control {
      background: ${zn};
    }

    :host(${n}:hover) .control {
      background: ${eo};
      color: ${_g};
    }

    :host(${n}:active) .control {
      background: ${no};
      color: ${Ig};
    }

    :host(${r}) .control {
      background: ${zn};
    }
  `.withBehaviors(Fe(J`
        :host {
          color: ${F.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${F.ButtonText};
          color: ${F.ButtonText};
        }

        :host(${r}) .control {
          background: transparent;
          color: ${F.GrayText};
        }

        .control:${ce} {
          outline-color: ${F.CanvasText};
        }

        :host([href]) .control {
          color: ${F.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${F.LinkText};
          color: ${F.LinkText};
        }
      `)),gb=(t,e,n,r="[disabled]")=>J`
    .control {
      background: transparent !important;
      border-color: ${Pr};
    }

    :host(${n}:hover) .control {
      border-color: ${Ng};
    }

    :host(${n}:active) .control {
      border-color: ${Bg};
    }

    :host(${r}) .control {
      background: transparent !important;
      border-color: ${Pr};
    }
  `.withBehaviors(Fe(J`
        .control {
          border-color: ${F.ButtonText};
          color: ${F.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${F.HighlightText};
          border-color: ${F.Highlight};
          color: ${F.Highlight};
        }

        :host(${r}) .control {
          border-color: ${F.GrayText};
          color: ${F.GrayText};
        }

        .control:${ce} {
          outline-color: ${F.CanvasText};
        }

        :host([href]) .control {
          border-color: ${F.LinkText};
          color: ${F.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${F.CanvasText};
          color: ${F.CanvasText};
        }
      `)),bb=(t,e,n,r="[disabled]")=>J`
    .control {
      background: ${zn};
    }

    :host(${n}:hover) .control {
      background: ${eo};
    }

    :host(${n}:active) .control {
      background: ${no};
    }

    :host(${r}) .control {
      background: ${zn};
    }
  `.withBehaviors(Fe(J`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${F.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${F.ButtonText};
          color: ${F.ButtonText};
        }

        :host(${r}) .control {
          background: transparent;
          color: ${F.GrayText};
        }
        
        .control:${ce} {
          outline-color: ${F.CanvasText};
        }

        :host([href]) .control {
          color: ${F.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${F.LinkText};
          color: ${F.LinkText};
        }
      `)),vb=K.create("input-placeholder-rest").withDefault(t=>{const e=fn.getValueFor(t);return Jn.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),mb=K.create("input-placeholder-hover").withDefault(t=>{const e=fn.getValueFor(t);return Jn.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),yb=K.create("input-filled-placeholder-rest").withDefault(t=>{const e=je.getValueFor(t);return Jn.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),wb=K.create("input-filled-placeholder-hover").withDefault(t=>{const e=je.getValueFor(t);return Jn.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),xb=(t,e,n)=>J`
  :host {
    ${Ar}
    color: ${Un};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${n} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${He} * 1px) solid transparent;
    border-radius: calc(${Ne} * 1px);
    height: calc(${Mt} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Un};
    cursor: pointer;
    ${Ar}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${n},
  :host([readonly]) ${n},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${Ji};
  }

  :host([disabled]) {
    opacity: ${Zi};
  }
`,$b=(t,e,n)=>J`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${ue} * 1px);
      bottom: 0;
      border-bottom: calc(${ue} * 1px) solid ${ye};
      border-bottom-left-radius: calc(${Ne} * 1px);
      border-bottom-right-radius: calc(${Ne} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Fb=(t,e,n,r=":not([disabled]):not(:focus-within)")=>J`
  ${n} {
    background: padding-box linear-gradient(${gr}, ${gr}),
      border-box ${Vl};
  }

  :host(${r}:hover) ${n} {
    background: padding-box linear-gradient(${Dl}, ${Dl}),
      border-box ${qg};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: padding-box linear-gradient(${Tl}, ${Tl}),
      border-box ${Vl};
  }
  
  :host([disabled]) ${n} {
    background: padding-box linear-gradient(${gr}, ${gr}),
      border-box ${Pr};
  }

  .control::placeholder {
    color: ${vb};
  }

  :host(${r}:hover) .control::placeholder {
    color: ${mb};
  }
`,Sb=(t,e,n,r=":not([disabled]):not(:focus-within)")=>J`
  ${n} {
    background: ${ui};
  }

  :host(${r}:hover) ${n} {
    background: ${Ag};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: ${Lg};
  }

  :host([disabled]) ${n} {
    background: ${ui};
  }

  .control::placeholder {
    color: ${yb};
  }

  :host(${r}:hover) .control::placeholder {
    color: ${wb};
  }
`,Cb=(t,e,n,r=":not([disabled]):not(:focus-within)")=>J`
  :host {
    color: ${F.ButtonText};
  }

  ${n} {
    background: ${F.ButtonFace};
    border-color: ${F.ButtonText};
  }

  :host(${r}:hover) ${n},
  :host(:not([disabled]):focus-within) ${n} {
    border-color: ${F.Highlight};
  }

  :host([disabled]) ${n} {
    opacity: 1;
    background: ${F.ButtonFace};
    border-color: ${F.GrayText};
  }

  .control::placeholder,
  :host(${r}:hover) .control::placeholder {
    color: ${F.CanvasText};
  }

  :host(:not([disabled]):focus) ${n} {
    ${io}
    outline-color: ${F.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${F.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${F.GrayText};
  }
`;function Pe(t,e){return new Ad("appearance",t,e)}const Ie=":not([disabled])",pe="[disabled]",Db=(t,e)=>J`
    :host(${Ie}) .control {
      cursor: pointer;
    }

    :host(${pe}) .control {
      cursor: ${Ji};
    }

    @media (forced-colors: none) {
      :host(${pe}) .control {
        opacity: ${Zi};
      }
    }

    ${hb(t,e,Ie,pe)}
  `.withBehaviors(Pe("neutral",fb(t,e,Ie,pe)),Pe("accent",db(t,e,Ie,pe)),Pe("lightweight",pb(t,e,Ie,pe)),Pe("outline",gb(t,e,Ie,pe)),Pe("stealth",bb(t,e,Ie,pe)));class oc extends Pt{appearanceChanged(e,n){e!==n&&(this.classList.add(n),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);e.length===1&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}bs([_],oc.prototype,"appearance",void 0);const Tb=oc.compose({baseName:"button",baseClass:Pt,template:cd,styles:Db,shadowOptions:{delegatesFocus:!0}}),Vb=(t,e)=>J`
    ${un("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Y};
      color: ${Un};
      border: calc(${He} * 1px) solid ${Wg};
      border-radius: calc(${gp} * 1px);
      box-shadow: ${lb};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Fe(J`
        :host {
          background: ${F.Canvas};
          color: ${F.CanvasText};
        }
      `));class oo extends La{cardFillColorChanged(e,n){if(n){const r=tn(n);r!==null&&(this.neutralPaletteSource=n,Y.setValueFor(this,Wt.create(r.r,r.g,r.b)))}}neutralPaletteSourceChanged(e,n){if(n){const r=tn(n),s=Wt.create(r.r,r.g,r.b);Q.setValueFor(this,jn.create(s))}}handleChange(e,n){this.cardFillColor||Y.setValueFor(this,r=>ls.getValueFor(r).evaluate(r,Y.getValueFor(e)).rest)}connectedCallback(){super.connectedCallback();const e=_r(this);if(e){const n=rt.getNotifier(e);n.subscribe(this,"fillColor"),n.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}bs([_({attribute:"card-fill-color",mode:"fromView"})],oo.prototype,"cardFillColor",void 0);bs([_({attribute:"neutral-palette-source",mode:"fromView"})],oo.prototype,"neutralPaletteSource",void 0);const Rb=oo.compose({baseName:"card",baseClass:La,template:fd,styles:Vb}),_b=(t,e)=>J`
    ${un("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${He} * 1px) solid ${Ug};
    }
  `,Ib=Yi.compose({baseName:"divider",template:Dd,styles:_b}),br=".root",kb=(t,e)=>J`
    ${un("inline-block")}

    ${xb(t,e,br)}

    ${$b()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Bt} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(Pe("outline",Fb(t,e,br)),Pe("filled",Sb(t,e,br)),Fe(Cb(t,e,br)));class lc extends Tt{appearanceChanged(e,n){e!==n&&(this.classList.add(n),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}bs([_],lc.prototype,"appearance",void 0);const Eb=lc.compose({baseName:"text-field",baseClass:Tt,template:kd,styles:kb,shadowOptions:{delegatesFocus:!0}}),Ob=(t,e)=>J`
  :host([hidden]) {
    display: none;
  }

  ${un("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,Pb=Zr.compose({baseName:"tree-view",template:Od,styles:Ob}),Ab=J`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${Mt} * -1px));
  }
  :host([selected])::after {
    left: calc(${ue} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Lb=J`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${Mt} * -1px));
  }
  :host([selected])::after {
    right: calc(${ue} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Rl=_t`((${Wa} / 2) * ${Bt}) + ((${Bt} * ${Ki}) / 2)`,Nb=K.create("tree-item-expand-collapse-hover").withDefault(t=>{const e=dn.getValueFor(t);return e.evaluate(t,e.evaluate(t).hover).hover}),Bb=K.create("tree-item-expand-collapse-selected-hover").withDefault(t=>{const e=je.getValueFor(t);return dn.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),Mb=(t,e)=>J`
    ${un("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Un};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${ne};
      --expand-collapse-button-size: calc(${Mt} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${zn};
      border: calc(${He} * 1px) solid transparent;
      border-radius: calc(${Ne} * 1px);
      height: calc((${Mt} + 1) * 1px);
    }

    :host(:${ce}) .positioning-region {
      ${io}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${eo};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${no};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${Mt} * 1px);
      margin-inline-start: calc(${Bt} * 2px + 8px);
      ${Ar}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${Bt} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Ne} * 1px);
      ${""} width: calc((${Rl} + (${Bt} * 2)) * 1px);
      height: calc((${Rl} + (${Bt} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${Bt} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${Bt} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Zi};
      cursor: ${Ji};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Nb};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${ui};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Bb};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${Mt} / 4) * 1px);
      width: 3px;
      height: calc((${Mt} / 2) * 1px);
      ${""} background: ${ye};
      border-radius: calc(${Ne} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${Mt} * -1px);
    }
  `.withBehaviors(new eb(Ab,Lb),Fe(J`
        :host {
          color: ${F.ButtonText};
        }
        .positioning-region {
          border-color: ${F.ButtonFace};
          background: ${F.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${F.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${F.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${F.GrayText};
        }
        :host([selected])::after {
          background: ${F.HighlightText};
        }
        :host(:${ce}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${F.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${F.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${F.ButtonFace};
          fill: ${F.ButtonText};
        }
      `)),Hb=lt.compose({baseName:"tree-item",template:Ed,styles:Mb,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `});function jb(t){return Ba.getOrCreate(t).withPrefix("fluent")}jb().register(Rb(),Tb(),Eb(),Pb(),Hb(),Ib());Hh(af).mount("#app");
