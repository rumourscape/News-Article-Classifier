(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const X={},Ze=[],Ut=()=>{},Tc=()=>!1,Vc=/^on[^a-z]/,zr=t=>Vc.test(t),$i=t=>t.startsWith("onUpdate:"),ft=Object.assign,Fi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rc=Object.prototype.hasOwnProperty,B=(t,e)=>Rc.call(t,e),O=Array.isArray,Ke=t=>Ur(t)==="[object Map]",Ml=t=>Ur(t)==="[object Set]",L=t=>typeof t=="function",ct=t=>typeof t=="string",Si=t=>typeof t=="symbol",et=t=>t!==null&&typeof t=="object",Hl=t=>et(t)&&L(t.then)&&L(t.catch),jl=Object.prototype.toString,Ur=t=>jl.call(t),_c=t=>Ur(t).slice(8,-1),zl=t=>Ur(t)==="[object Object]",Ci=t=>ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xr=xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kc=/-(\w)/g,ee=qr(t=>t.replace(kc,(e,n)=>n?n.toUpperCase():"")),Ic=/\B([A-Z])/g,hn=qr(t=>t.replace(Ic,"-$1").toLowerCase()),Wr=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ts=qr(t=>t?`on${Wr(t)}`:""),Ln=(t,e)=>!Object.is(t,e),$r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ei=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $o;const ni=()=>$o||($o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Di(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ct(r)?Ac(r):Di(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ct(t))return t;if(et(t))return t}}const Ec=/;(?![^(]*\))/g,Oc=/:([^]+)/,Pc=/\/\*[^]*?\*\//g;function Ac(t){const e={};return t.replace(Pc,"").split(Ec).forEach(n=>{if(n){const r=n.split(Oc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ti(t){let e="";if(ct(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const r=Ti(t[n]);r&&(e+=r+" ")}else if(et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nc=xi(Lc);function Ul(t){return!!t||t===""}const Vs=t=>ct(t)?t:t==null?"":O(t)||et(t)&&(t.toString===jl||!L(t.toString))?JSON.stringify(t,ql,2):String(t),ql=(t,e)=>e&&e.__v_isRef?ql(t,e.value):Ke(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ml(e)?{[`Set(${e.size})`]:[...e.values()]}:et(e)&&!O(e)&&!zl(e)?String(e):e;let Bt;class Bc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Mc(t,e=Bt){e&&e.active&&e.effects.push(t)}function Hc(){return Bt}const Vi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wl=t=>(t.w&ye)>0,Gl=t=>(t.n&ye)>0,jc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ye},zc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Wl(s)&&!Gl(s)?s.delete(t):e[n++]=s,s.w&=~ye,s.n&=~ye}e.length=n}},ri=new WeakMap;let Tn=0,ye=1;const si=30;let jt;const Le=Symbol(""),ii=Symbol("");class Ri{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mc(this,r)}run(){if(!this.active)return this.fn();let e=jt,n=be;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,be=!0,ye=1<<++Tn,Tn<=si?jc(this):Fo(this),this.fn()}finally{Tn<=si&&zc(this),ye=1<<--Tn,jt=this.parent,be=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(Fo(this),this.onStop&&this.onStop(),this.active=!1)}}function Fo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let be=!0;const Yl=[];function fn(){Yl.push(be),be=!1}function dn(){const t=Yl.pop();be=t===void 0?!0:t}function Ct(t,e,n){if(be&&jt){let r=ri.get(t);r||ri.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Vi()),Jl(s)}}function Jl(t,e){let n=!1;Tn<=si?Gl(t)||(t.n|=ye,n=!Wl(t)):n=!t.has(jt),n&&(t.add(jt),jt.deps.push(t))}function le(t,e,n,r,s,i){const o=ri.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t)){const a=Number(r);o.forEach((c,h)=>{(h==="length"||h>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?Ci(n)&&l.push(o.get("length")):(l.push(o.get(Le)),Ke(t)&&l.push(o.get(ii)));break;case"delete":O(t)||(l.push(o.get(Le)),Ke(t)&&l.push(o.get(ii)));break;case"set":Ke(t)&&l.push(o.get(Le));break}if(l.length===1)l[0]&&oi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);oi(Vi(a))}}function oi(t,e){const n=O(t)?t:[...t];for(const r of n)r.computed&&So(r);for(const r of n)r.computed||So(r)}function So(t,e){(t!==jt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Uc=xi("__proto__,__v_isRef,__isVue"),Ql=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Si)),qc=_i(),Wc=_i(!1,!0),Gc=_i(!0),Co=Yc();function Yc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=M(this);for(let i=0,o=this.length;i<o;i++)Ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(M)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fn();const r=M(this)[e].apply(this,n);return dn(),r}}),t}function Jc(t){const e=M(this);return Ct(e,"has",t),e.hasOwnProperty(t)}function _i(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?hu:ea:e?ta:Kl).get(r))return r;const o=O(r);if(!t){if(o&&B(Co,s))return Reflect.get(Co,s,i);if(s==="hasOwnProperty")return Jc}const l=Reflect.get(r,s,i);return(Si(s)?Ql.has(s):Uc(s))||(t||Ct(r,"get",s),e)?l:gt(l)?o&&Ci(s)?l:l.value:et(l)?t?na(l):Ei(l):l}}const Qc=Xl(),Xc=Xl(!0);function Xl(t=!1){return function(n,r,s,i){let o=n[r];if(sn(o)&&gt(o)&&!gt(s))return!1;if(!t&&(!_r(s)&&!sn(s)&&(o=M(o),s=M(s)),!O(n)&&gt(o)&&!gt(s)))return o.value=s,!0;const l=O(n)&&Ci(r)?Number(r)<n.length:B(n,r),a=Reflect.set(n,r,s,i);return n===M(i)&&(l?Ln(s,o)&&le(n,"set",r,s):le(n,"add",r,s)),a}}function Zc(t,e){const n=B(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&le(t,"delete",e,void 0),r}function Kc(t,e){const n=Reflect.has(t,e);return(!Si(e)||!Ql.has(e))&&Ct(t,"has",e),n}function tu(t){return Ct(t,"iterate",O(t)?"length":Le),Reflect.ownKeys(t)}const Zl={get:qc,set:Qc,deleteProperty:Zc,has:Kc,ownKeys:tu},eu={get:Gc,set(t,e){return!0},deleteProperty(t,e){return!0}},nu=ft({},Zl,{get:Wc,set:Xc}),ki=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function ir(t,e,n=!1,r=!1){t=t.__v_raw;const s=M(t),i=M(e);n||(e!==i&&Ct(s,"get",e),Ct(s,"get",i));const{has:o}=Gr(s),l=r?ki:n?Pi:Nn;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function or(t,e=!1){const n=this.__v_raw,r=M(n),s=M(t);return e||(t!==s&&Ct(r,"has",t),Ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lr(t,e=!1){return t=t.__v_raw,!e&&Ct(M(t),"iterate",Le),Reflect.get(t,"size",t)}function Do(t){t=M(t);const e=M(this);return Gr(e).has.call(e,t)||(e.add(t),le(e,"add",t,t)),this}function To(t,e){e=M(e);const n=M(this),{has:r,get:s}=Gr(n);let i=r.call(n,t);i||(t=M(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ln(e,o)&&le(n,"set",t,e):le(n,"add",t,e),this}function Vo(t){const e=M(this),{has:n,get:r}=Gr(e);let s=n.call(e,t);s||(t=M(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&le(e,"delete",t,void 0),i}function Ro(){const t=M(this),e=t.size!==0,n=t.clear();return e&&le(t,"clear",void 0,void 0),n}function ar(t,e){return function(r,s){const i=this,o=i.__v_raw,l=M(o),a=e?ki:t?Pi:Nn;return!t&&Ct(l,"iterate",Le),o.forEach((c,h)=>r.call(s,a(c),a(h),i))}}function cr(t,e,n){return function(...r){const s=this.__v_raw,i=M(s),o=Ke(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...r),h=n?ki:e?Pi:Nn;return!e&&Ct(i,"iterate",a?ii:Le),{next(){const{value:p,done:m}=c.next();return m?{value:p,done:m}:{value:l?[h(p[0]),h(p[1])]:h(p),done:m}},[Symbol.iterator](){return this}}}}function fe(t){return function(...e){return t==="delete"?!1:this}}function ru(){const t={get(i){return ir(this,i)},get size(){return lr(this)},has:or,add:Do,set:To,delete:Vo,clear:Ro,forEach:ar(!1,!1)},e={get(i){return ir(this,i,!1,!0)},get size(){return lr(this)},has:or,add:Do,set:To,delete:Vo,clear:Ro,forEach:ar(!1,!0)},n={get(i){return ir(this,i,!0)},get size(){return lr(this,!0)},has(i){return or.call(this,i,!0)},add:fe("add"),set:fe("set"),delete:fe("delete"),clear:fe("clear"),forEach:ar(!0,!1)},r={get(i){return ir(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return or.call(this,i,!0)},add:fe("add"),set:fe("set"),delete:fe("delete"),clear:fe("clear"),forEach:ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=cr(i,!1,!1),n[i]=cr(i,!0,!1),e[i]=cr(i,!1,!0),r[i]=cr(i,!0,!0)}),[t,n,e,r]}const[su,iu,ou,lu]=ru();function Ii(t,e){const n=e?t?lu:ou:t?iu:su;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(B(n,s)&&s in r?n:r,s,i)}const au={get:Ii(!1,!1)},cu={get:Ii(!1,!0)},uu={get:Ii(!0,!1)},Kl=new WeakMap,ta=new WeakMap,ea=new WeakMap,hu=new WeakMap;function fu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function du(t){return t.__v_skip||!Object.isExtensible(t)?0:fu(_c(t))}function Ei(t){return sn(t)?t:Oi(t,!1,Zl,au,Kl)}function pu(t){return Oi(t,!1,nu,cu,ta)}function na(t){return Oi(t,!0,eu,uu,ea)}function Oi(t,e,n,r,s){if(!et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=du(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function tn(t){return sn(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function sn(t){return!!(t&&t.__v_isReadonly)}function _r(t){return!!(t&&t.__v_isShallow)}function ra(t){return tn(t)||sn(t)}function M(t){const e=t&&t.__v_raw;return e?M(e):t}function sa(t){return Rr(t,"__v_skip",!0),t}const Nn=t=>et(t)?Ei(t):t,Pi=t=>et(t)?na(t):t;function ia(t){be&&jt&&(t=M(t),Jl(t.dep||(t.dep=Vi())))}function oa(t,e){t=M(t);const n=t.dep;n&&oi(n)}function gt(t){return!!(t&&t.__v_isRef===!0)}function Rs(t){return gu(t,!1)}function gu(t,e){return gt(t)?t:new bu(t,e)}class bu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:M(e),this._value=n?e:Nn(e)}get value(){return ia(this),this._value}set value(e){const n=this.__v_isShallow||_r(e)||sn(e);e=n?e:M(e),Ln(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Nn(e),oa(this))}}function Vn(t){return gt(t)?t.value:t}const vu={get:(t,e,n)=>Vn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return gt(s)&&!gt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function la(t){return tn(t)?t:new Proxy(t,vu)}class mu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ri(e,()=>{this._dirty||(this._dirty=!0,oa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=M(this);return ia(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yu(t,e,n=!1){let r,s;const i=L(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new mu(r,s,i||!s,n)}function ve(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Yr(i,e,n)}return s}function qt(t,e,n,r){if(L(t)){const i=ve(t,e,n,r);return i&&Hl(i)&&i.catch(o=>{Yr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(qt(t[i],e,n,r));return s}function Yr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const c=i.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){ve(a,null,10,[t,o,l]);return}}wu(t,n,s,r)}function wu(t,e,n,r=!0){console.error(t)}let Bn=!1,li=!1;const bt=[];let te=0;const en=[];let ie=null,Ie=0;const aa=Promise.resolve();let Ai=null;function xu(t){const e=Ai||aa;return t?e.then(this?t.bind(this):t):e}function $u(t){let e=te+1,n=bt.length;for(;e<n;){const r=e+n>>>1;Mn(bt[r])<t?e=r+1:n=r}return e}function Li(t){(!bt.length||!bt.includes(t,Bn&&t.allowRecurse?te+1:te))&&(t.id==null?bt.push(t):bt.splice($u(t.id),0,t),ca())}function ca(){!Bn&&!li&&(li=!0,Ai=aa.then(ha))}function Fu(t){const e=bt.indexOf(t);e>te&&bt.splice(e,1)}function Su(t){O(t)?en.push(...t):(!ie||!ie.includes(t,t.allowRecurse?Ie+1:Ie))&&en.push(t),ca()}function _o(t,e=Bn?te+1:0){for(;e<bt.length;e++){const n=bt[e];n&&n.pre&&(bt.splice(e,1),e--,n())}}function ua(t){if(en.length){const e=[...new Set(en)];if(en.length=0,ie){ie.push(...e);return}for(ie=e,ie.sort((n,r)=>Mn(n)-Mn(r)),Ie=0;Ie<ie.length;Ie++)ie[Ie]();ie=null,Ie=0}}const Mn=t=>t.id==null?1/0:t.id,Cu=(t,e)=>{const n=Mn(t)-Mn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ha(t){li=!1,Bn=!0,bt.sort(Cu);const e=Ut;try{for(te=0;te<bt.length;te++){const n=bt[te];n&&n.active!==!1&&ve(n,null,14)}}finally{te=0,bt.length=0,ua(),Bn=!1,Ai=null,(bt.length||en.length)&&ha()}}function Du(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[h]||X;m&&(s=n.map(D=>ct(D)?D.trim():D)),p&&(s=n.map(ei))}let l,a=r[l=Ts(e)]||r[l=Ts(ee(e))];!a&&i&&(a=r[l=Ts(hn(e))]),a&&qt(a,t,6,s);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qt(c,t,6,s)}}function fa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!L(t)){const a=c=>{const h=fa(c,e,!0);h&&(l=!0,ft(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(et(t)&&r.set(t,null),null):(O(i)?i.forEach(a=>o[a]=null):ft(o,i),et(t)&&r.set(t,o),o)}function Jr(t,e){return!t||!zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,hn(e))||B(t,e))}let It=null,Qr=null;function kr(t){const e=It;return It=t,Qr=t&&t.type.__scopeId||null,e}function Tu(t){Qr=t}function Vu(){Qr=null}function Rn(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ho(-1);const i=kr(e);let o;try{o=t(...s)}finally{kr(i),r._d&&Ho(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _s(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:p,data:m,setupState:D,ctx:E,inheritAttrs:R}=t;let H,Z;const z=kr(t);try{if(n.shapeFlag&4){const A=s||r;H=Kt(h.call(A,A,p,i,D,m,E)),Z=a}else{const A=e;H=Kt(A.length>1?A(i,{attrs:a,slots:l,emit:c}):A(i,null)),Z=e.props?a:Ru(a)}}catch(A){In.length=0,Yr(A,t,1),H=wt(Me)}let q=H;if(Z&&R!==!1){const A=Object.keys(Z),{shapeFlag:Ft}=q;A.length&&Ft&7&&(o&&A.some($i)&&(Z=_u(Z,o)),q=on(q,Z))}return n.dirs&&(q=on(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),H=q,kr(z),H}const Ru=t=>{let e;for(const n in t)(n==="class"||n==="style"||zr(n))&&((e||(e={}))[n]=t[n]);return e},_u=(t,e)=>{const n={};for(const r in t)(!$i(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ku(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?ko(r,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const m=h[p];if(o[m]!==r[m]&&!Jr(c,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?ko(r,o,c):!0:!!o;return!1}function ko(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Jr(n,i))return!0}return!1}function Iu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Eu=t=>t.__isSuspense;function Ou(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):Su(t)}const ur={};function ks(t,e,n){return da(t,e,n)}function da(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=X){var l;const a=Hc()===((l=pt)==null?void 0:l.scope)?pt:null;let c,h=!1,p=!1;if(gt(t)?(c=()=>t.value,h=_r(t)):tn(t)?(c=()=>t,r=!0):O(t)?(p=!0,h=t.some(A=>tn(A)||_r(A)),c=()=>t.map(A=>{if(gt(A))return A.value;if(tn(A))return Ae(A);if(L(A))return ve(A,a,2)})):L(t)?e?c=()=>ve(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return m&&m(),qt(t,a,3,[D])}:c=Ut,e&&r){const A=c;c=()=>Ae(A())}let m,D=A=>{m=z.onStop=()=>{ve(A,a,4)}},E;if(jn)if(D=Ut,e?n&&qt(e,a,3,[c(),p?[]:void 0,D]):c(),s==="sync"){const A=Ih();E=A.__watcherHandles||(A.__watcherHandles=[])}else return Ut;let R=p?new Array(t.length).fill(ur):ur;const H=()=>{if(z.active)if(e){const A=z.run();(r||h||(p?A.some((Ft,Gt)=>Ln(Ft,R[Gt])):Ln(A,R)))&&(m&&m(),qt(e,a,3,[A,R===ur?void 0:p&&R[0]===ur?[]:R,D]),R=A)}else z.run()};H.allowRecurse=!!e;let Z;s==="sync"?Z=H:s==="post"?Z=()=>St(H,a&&a.suspense):(H.pre=!0,a&&(H.id=a.uid),Z=()=>Li(H));const z=new Ri(c,Z);e?n?H():R=z.run():s==="post"?St(z.run.bind(z),a&&a.suspense):z.run();const q=()=>{z.stop(),a&&a.scope&&Fi(a.scope.effects,z)};return E&&E.push(q),q}function Pu(t,e,n){const r=this.proxy,s=ct(t)?t.includes(".")?pa(r,t):()=>r[t]:t.bind(r,r);let i;L(e)?i=e:(i=e.handler,n=e);const o=pt;ln(this);const l=da(s,i.bind(r),n);return o?ln(o):Ne(),l}function pa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ae(t,e){if(!et(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),gt(t))Ae(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)Ae(t[n],e);else if(Ml(t)||Ke(t))t.forEach(n=>{Ae(n,e)});else if(zl(t))for(const n in t)Ae(t[n],e);return t}function Au(t,e){const n=It;if(n===null)return t;const r=ts(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,a,c=X]=e[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&Ae(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Te(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(fn(),qt(a,n,8,[t.el,l,t,e]),dn())}}function ga(t,e){return L(t)?(()=>ft({name:t.name},e,{setup:t}))():t}const Fr=t=>!!t.type.__asyncLoader,ba=t=>t.type.__isKeepAlive;function Lu(t,e){va(t,"a",e)}function Nu(t,e){va(t,"da",e)}function va(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&Bu(r,e,n,s),s=s.parent}}function Bu(t,e,n,r){const s=Xr(e,t,r,!0);ya(()=>{Fi(r[e],s)},n)}function Xr(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fn(),ln(n);const l=qt(e,n,t,o);return Ne(),dn(),l});return r?s.unshift(i):s.push(i),i}}const ue=t=>(e,n=pt)=>(!jn||t==="sp")&&Xr(t,(...r)=>e(...r),n),Mu=ue("bm"),ma=ue("m"),Hu=ue("bu"),ju=ue("u"),zu=ue("bum"),ya=ue("um"),Uu=ue("sp"),qu=ue("rtg"),Wu=ue("rtc");function Gu(t,e=pt){Xr("ec",t,e)}const wa="components";function Is(t,e){return Ju(wa,t,!0,e)||t}const Yu=Symbol.for("v-ndc");function Ju(t,e,n=!0,r=!1){const s=It||pt;if(s){const i=s.type;if(t===wa){const l=Vh(i,!1);if(l&&(l===e||l===ee(e)||l===Wr(ee(e))))return i}const o=Io(s[t]||i[t],e)||Io(s.appContext[t],e);return!o&&r?i:o}}function Io(t,e){return t&&(t[e]||t[ee(e)]||t[Wr(ee(e))])}function Qu(t,e,n,r){let s;const i=n&&n[r];if(O(t)||ct(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(et(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}const ai=t=>t?Ia(t)?ts(t)||t.proxy:ai(t.parent):null,kn=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ai(t.parent),$root:t=>ai(t.root),$emit:t=>t.emit,$options:t=>Ni(t),$forceUpdate:t=>t.f||(t.f=()=>Li(t.update)),$nextTick:t=>t.n||(t.n=xu.bind(t.proxy)),$watch:t=>Pu.bind(t)}),Es=(t,e)=>t!==X&&!t.__isScriptSetup&&B(t,e),Xu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const D=o[e];if(D!==void 0)switch(D){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Es(r,e))return o[e]=1,r[e];if(s!==X&&B(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&B(c,e))return o[e]=3,i[e];if(n!==X&&B(n,e))return o[e]=4,n[e];ci&&(o[e]=0)}}const h=kn[e];let p,m;if(h)return e==="$attrs"&&Ct(t,"get",e),h(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==X&&B(n,e))return o[e]=4,n[e];if(m=a.config.globalProperties,B(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Es(s,e)?(s[e]=n,!0):r!==X&&B(r,e)?(r[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==X&&B(t,o)||Es(e,o)||(l=i[0])&&B(l,o)||B(r,o)||B(kn,o)||B(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eo(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ci=!0;function Zu(t){const e=Ni(t),n=t.proxy,r=t.ctx;ci=!1,e.beforeCreate&&Oo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:p,mounted:m,beforeUpdate:D,updated:E,activated:R,deactivated:H,beforeDestroy:Z,beforeUnmount:z,destroyed:q,unmounted:A,render:Ft,renderTracked:Gt,renderTriggered:re,errorCaptured:Lt,serverPrefetch:mn,expose:Se,inheritAttrs:yn,components:er,directives:nr,filters:Ss}=e;if(c&&Ku(c,r,null),o)for(const nt in o){const W=o[nt];L(W)&&(r[nt]=W.bind(n))}if(s){const nt=s.call(n,n);et(nt)&&(t.data=Ei(nt))}if(ci=!0,i)for(const nt in i){const W=i[nt],Ce=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ut,rr=!L(W)&&L(W.set)?W.set.bind(n):Ut,De=_h({get:Ce,set:rr});Object.defineProperty(r,nt,{enumerable:!0,configurable:!0,get:()=>De.value,set:Yt=>De.value=Yt})}if(l)for(const nt in l)xa(l[nt],r,n,nt);if(a){const nt=L(a)?a.call(n):a;Reflect.ownKeys(nt).forEach(W=>{ih(W,nt[W])})}h&&Oo(h,t,"c");function vt(nt,W){O(W)?W.forEach(Ce=>nt(Ce.bind(n))):W&&nt(W.bind(n))}if(vt(Mu,p),vt(ma,m),vt(Hu,D),vt(ju,E),vt(Lu,R),vt(Nu,H),vt(Gu,Lt),vt(Wu,Gt),vt(qu,re),vt(zu,z),vt(ya,A),vt(Uu,mn),O(Se))if(Se.length){const nt=t.exposed||(t.exposed={});Se.forEach(W=>{Object.defineProperty(nt,W,{get:()=>n[W],set:Ce=>n[W]=Ce})})}else t.exposed||(t.exposed={});Ft&&t.render===Ut&&(t.render=Ft),yn!=null&&(t.inheritAttrs=yn),er&&(t.components=er),nr&&(t.directives=nr)}function Ku(t,e,n=Ut){O(t)&&(t=ui(t));for(const r in t){const s=t[r];let i;et(s)?"default"in s?i=Sr(s.from||r,s.default,!0):i=Sr(s.from||r):i=Sr(s),gt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Oo(t,e,n){qt(O(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,r){const s=r.includes(".")?pa(n,r):()=>n[r];if(ct(t)){const i=e[t];L(i)&&ks(s,i)}else if(L(t))ks(s,t.bind(n));else if(et(t))if(O(t))t.forEach(i=>xa(i,e,n,r));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&ks(s,i,t)}}function Ni(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(c=>Ir(a,c,o,!0)),Ir(a,e,o)),et(e)&&i.set(e,a),a}function Ir(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ir(t,i,n,!0),s&&s.forEach(o=>Ir(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=th[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const th={data:Po,props:Ao,emits:Ao,methods:_n,computed:_n,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:_n,directives:_n,watch:nh,provide:Po,inject:eh};function Po(t,e){return e?t?function(){return ft(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function eh(t,e){return _n(ui(t),ui(e))}function ui(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function _n(t,e){return t?ft(Object.create(null),t,e):e}function Ao(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:ft(Object.create(null),Eo(t),Eo(e??{})):e}function nh(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function $a(){return{app:null,config:{isNativeTag:Tc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rh=0;function sh(t,e){return function(r,s=null){L(r)||(r=ft({},r)),s!=null&&!et(s)&&(s=null);const i=$a(),o=new Set;let l=!1;const a=i.app={_uid:rh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Eh,get config(){return i.config},set config(c){},use(c,...h){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(a,...h)):L(c)&&(o.add(c),c(a,...h))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,h){return h?(i.components[c]=h,a):i.components[c]},directive(c,h){return h?(i.directives[c]=h,a):i.directives[c]},mount(c,h,p){if(!l){const m=wt(r,s);return m.appContext=i,h&&e?e(m,c):t(m,c,p),l=!0,a._container=c,c.__vue_app__=a,ts(m.component)||m.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return i.provides[c]=h,a},runWithContext(c){Er=a;try{return c()}finally{Er=null}}};return a}}let Er=null;function ih(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function Sr(t,e,n=!1){const r=pt||It;if(r||Er){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Er._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&L(e)?e.call(r&&r.proxy):e}}function oh(t,e,n,r=!1){const s={},i={};Rr(i,Kr,1),t.propsDefaults=Object.create(null),Fa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=M(s),[a]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let m=h[p];if(Jr(t.emitsOptions,m))continue;const D=e[m];if(a)if(B(i,m))D!==i[m]&&(i[m]=D,c=!0);else{const E=ee(m);s[E]=hi(a,l,E,D,t,!1)}else D!==i[m]&&(i[m]=D,c=!0)}}}else{Fa(t,e,s,i)&&(c=!0);let h;for(const p in l)(!e||!B(e,p)&&((h=hn(p))===p||!B(e,h)))&&(a?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=hi(a,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!B(e,p))&&(delete i[p],c=!0)}c&&le(t,"set","$attrs")}function Fa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(xr(a))continue;const c=e[a];let h;s&&B(s,h=ee(a))?!i||!i.includes(h)?n[h]=c:(l||(l={}))[h]=c:Jr(t.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(i){const a=M(n),c=l||X;for(let h=0;h<i.length;h++){const p=i[h];n[p]=hi(s,a,p,c[p],t,!B(c,p))}}return o}function hi(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=B(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&L(a)){const{propsDefaults:c}=s;n in c?r=c[n]:(ln(s),r=c[n]=a.call(null,e),Ne())}else r=a}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===hn(n))&&(r=!0))}return r}function Sa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let a=!1;if(!L(t)){const h=p=>{a=!0;const[m,D]=Sa(p,e,!0);ft(o,m),D&&l.push(...D)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!a)return et(t)&&r.set(t,Ze),Ze;if(O(i))for(let h=0;h<i.length;h++){const p=ee(i[h]);Lo(p)&&(o[p]=X)}else if(i)for(const h in i){const p=ee(h);if(Lo(p)){const m=i[h],D=o[p]=O(m)||L(m)?{type:m}:ft({},m);if(D){const E=Mo(Boolean,D.type),R=Mo(String,D.type);D[0]=E>-1,D[1]=R<0||E<R,(E>-1||B(D,"default"))&&l.push(p)}}}const c=[o,l];return et(t)&&r.set(t,c),c}function Lo(t){return t[0]!=="$"}function No(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Bo(t,e){return No(t)===No(e)}function Mo(t,e){return O(e)?e.findIndex(n=>Bo(n,t)):L(e)&&Bo(e,t)?0:-1}const Ca=t=>t[0]==="_"||t==="$stable",Bi=t=>O(t)?t.map(Kt):[Kt(t)],ah=(t,e,n)=>{if(e._n)return e;const r=Rn((...s)=>Bi(e(...s)),n);return r._c=!1,r},Da=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ca(s))continue;const i=t[s];if(L(i))e[s]=ah(s,i,r);else if(i!=null){const o=Bi(i);e[s]=()=>o}}},Ta=(t,e)=>{const n=Bi(e);t.slots.default=()=>n},ch=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=M(e),Rr(e,"_",n)):Da(e,t.slots={})}else t.slots={},e&&Ta(t,e);Rr(t.slots,Kr,1)},uh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=X;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(ft(s,e),!n&&l===1&&delete s._):(i=!e.$stable,Da(e,s)),o=e}else e&&(Ta(t,e),o={default:1});if(i)for(const l in s)!Ca(l)&&!(l in o)&&delete s[l]};function fi(t,e,n,r,s=!1){if(O(t)){t.forEach((m,D)=>fi(m,e&&(O(e)?e[D]:e),n,r,s));return}if(Fr(r)&&!s)return;const i=r.shapeFlag&4?ts(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:a}=t,c=e&&e.r,h=l.refs===X?l.refs={}:l.refs,p=l.setupState;if(c!=null&&c!==a&&(ct(c)?(h[c]=null,B(p,c)&&(p[c]=null)):gt(c)&&(c.value=null)),L(a))ve(a,l,12,[o,h]);else{const m=ct(a),D=gt(a);if(m||D){const E=()=>{if(t.f){const R=m?B(p,a)?p[a]:h[a]:a.value;s?O(R)&&Fi(R,i):O(R)?R.includes(i)||R.push(i):m?(h[a]=[i],B(p,a)&&(p[a]=h[a])):(a.value=[i],t.k&&(h[t.k]=a.value))}else m?(h[a]=o,B(p,a)&&(p[a]=o)):D&&(a.value=o,t.k&&(h[t.k]=o))};o?(E.id=-1,St(E,n)):E()}}}const St=Ou;function hh(t){return fh(t)}function fh(t,e){const n=ni();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:p,nextSibling:m,setScopeId:D=Ut,insertStaticContent:E}=t,R=(u,f,g,v=null,b=null,$=null,C=!1,w=null,S=!!f.dynamicChildren)=>{if(u===f)return;u&&!xn(u,f)&&(v=sr(u),Yt(u,b,$,!0),u=null),f.patchFlag===-2&&(S=!1,f.dynamicChildren=null);const{type:y,ref:k,shapeFlag:T}=f;switch(y){case Zr:H(u,f,g,v);break;case Me:Z(u,f,g,v);break;case Os:u==null&&z(f,g,v,C);break;case Zt:er(u,f,g,v,b,$,C,w,S);break;default:T&1?Ft(u,f,g,v,b,$,C,w,S):T&6?nr(u,f,g,v,b,$,C,w,S):(T&64||T&128)&&y.process(u,f,g,v,b,$,C,w,S,We)}k!=null&&b&&fi(k,u&&u.ref,$,f||u,!f)},H=(u,f,g,v)=>{if(u==null)r(f.el=l(f.children),g,v);else{const b=f.el=u.el;f.children!==u.children&&c(b,f.children)}},Z=(u,f,g,v)=>{u==null?r(f.el=a(f.children||""),g,v):f.el=u.el},z=(u,f,g,v)=>{[u.el,u.anchor]=E(u.children,f,g,v,u.el,u.anchor)},q=({el:u,anchor:f},g,v)=>{let b;for(;u&&u!==f;)b=m(u),r(u,g,v),u=b;r(f,g,v)},A=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=m(u),s(u),u=g;s(f)},Ft=(u,f,g,v,b,$,C,w,S)=>{C=C||f.type==="svg",u==null?Gt(f,g,v,b,$,C,w,S):mn(u,f,b,$,C,w,S)},Gt=(u,f,g,v,b,$,C,w)=>{let S,y;const{type:k,props:T,shapeFlag:I,transition:P,dirs:N}=u;if(S=u.el=o(u.type,$,T&&T.is,T),I&8?h(S,u.children):I&16&&Lt(u.children,S,null,v,b,$&&k!=="foreignObject",C,w),N&&Te(u,null,v,"created"),re(S,u,u.scopeId,C,v),T){for(const U in T)U!=="value"&&!xr(U)&&i(S,U,null,T[U],$,u.children,v,b,se);"value"in T&&i(S,"value",null,T.value),(y=T.onVnodeBeforeMount)&&Qt(y,v,u)}N&&Te(u,null,v,"beforeMount");const G=(!b||b&&!b.pendingBranch)&&P&&!P.persisted;G&&P.beforeEnter(S),r(S,f,g),((y=T&&T.onVnodeMounted)||G||N)&&St(()=>{y&&Qt(y,v,u),G&&P.enter(S),N&&Te(u,null,v,"mounted")},b)},re=(u,f,g,v,b)=>{if(g&&D(u,g),v)for(let $=0;$<v.length;$++)D(u,v[$]);if(b){let $=b.subTree;if(f===$){const C=b.vnode;re(u,C,C.scopeId,C.slotScopeIds,b.parent)}}},Lt=(u,f,g,v,b,$,C,w,S=0)=>{for(let y=S;y<u.length;y++){const k=u[y]=w?pe(u[y]):Kt(u[y]);R(null,k,f,g,v,b,$,C,w)}},mn=(u,f,g,v,b,$,C)=>{const w=f.el=u.el;let{patchFlag:S,dynamicChildren:y,dirs:k}=f;S|=u.patchFlag&16;const T=u.props||X,I=f.props||X;let P;g&&Ve(g,!1),(P=I.onVnodeBeforeUpdate)&&Qt(P,g,f,u),k&&Te(f,u,g,"beforeUpdate"),g&&Ve(g,!0);const N=b&&f.type!=="foreignObject";if(y?Se(u.dynamicChildren,y,w,g,v,N,$):C||W(u,f,w,null,g,v,N,$,!1),S>0){if(S&16)yn(w,f,T,I,g,v,b);else if(S&2&&T.class!==I.class&&i(w,"class",null,I.class,b),S&4&&i(w,"style",T.style,I.style,b),S&8){const G=f.dynamicProps;for(let U=0;U<G.length;U++){const lt=G[U],Nt=T[lt],Ge=I[lt];(Ge!==Nt||lt==="value")&&i(w,lt,Nt,Ge,b,u.children,g,v,se)}}S&1&&u.children!==f.children&&h(w,f.children)}else!C&&y==null&&yn(w,f,T,I,g,v,b);((P=I.onVnodeUpdated)||k)&&St(()=>{P&&Qt(P,g,f,u),k&&Te(f,u,g,"updated")},v)},Se=(u,f,g,v,b,$,C)=>{for(let w=0;w<f.length;w++){const S=u[w],y=f[w],k=S.el&&(S.type===Zt||!xn(S,y)||S.shapeFlag&70)?p(S.el):g;R(S,y,k,null,v,b,$,C,!0)}},yn=(u,f,g,v,b,$,C)=>{if(g!==v){if(g!==X)for(const w in g)!xr(w)&&!(w in v)&&i(u,w,g[w],null,C,f.children,b,$,se);for(const w in v){if(xr(w))continue;const S=v[w],y=g[w];S!==y&&w!=="value"&&i(u,w,y,S,C,f.children,b,$,se)}"value"in v&&i(u,"value",g.value,v.value)}},er=(u,f,g,v,b,$,C,w,S)=>{const y=f.el=u?u.el:l(""),k=f.anchor=u?u.anchor:l("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:P}=f;P&&(w=w?w.concat(P):P),u==null?(r(y,g,v),r(k,g,v),Lt(f.children,g,k,b,$,C,w,S)):T>0&&T&64&&I&&u.dynamicChildren?(Se(u.dynamicChildren,I,g,b,$,C,w),(f.key!=null||b&&f===b.subTree)&&Va(u,f,!0)):W(u,f,g,k,b,$,C,w,S)},nr=(u,f,g,v,b,$,C,w,S)=>{f.slotScopeIds=w,u==null?f.shapeFlag&512?b.ctx.activate(f,g,v,C,S):Ss(f,g,v,b,$,C,S):bo(u,f,S)},Ss=(u,f,g,v,b,$,C)=>{const w=u.component=Fh(u,v,b);if(ba(u)&&(w.ctx.renderer=We),Sh(w),w.asyncDep){if(b&&b.registerDep(w,vt),!u.el){const S=w.subTree=wt(Me);Z(null,S,f,g)}return}vt(w,u,f,g,b,$,C)},bo=(u,f,g)=>{const v=f.component=u.component;if(ku(u,f,g))if(v.asyncDep&&!v.asyncResolved){nt(v,f,g);return}else v.next=f,Fu(v.update),v.update();else f.el=u.el,v.vnode=f},vt=(u,f,g,v,b,$,C)=>{const w=()=>{if(u.isMounted){let{next:k,bu:T,u:I,parent:P,vnode:N}=u,G=k,U;Ve(u,!1),k?(k.el=N.el,nt(u,k,C)):k=N,T&&$r(T),(U=k.props&&k.props.onVnodeBeforeUpdate)&&Qt(U,P,k,N),Ve(u,!0);const lt=_s(u),Nt=u.subTree;u.subTree=lt,R(Nt,lt,p(Nt.el),sr(Nt),u,b,$),k.el=lt.el,G===null&&Iu(u,lt.el),I&&St(I,b),(U=k.props&&k.props.onVnodeUpdated)&&St(()=>Qt(U,P,k,N),b)}else{let k;const{el:T,props:I}=f,{bm:P,m:N,parent:G}=u,U=Fr(f);if(Ve(u,!1),P&&$r(P),!U&&(k=I&&I.onVnodeBeforeMount)&&Qt(k,G,f),Ve(u,!0),T&&Ds){const lt=()=>{u.subTree=_s(u),Ds(T,u.subTree,u,b,null)};U?f.type.__asyncLoader().then(()=>!u.isUnmounted&&lt()):lt()}else{const lt=u.subTree=_s(u);R(null,lt,g,v,u,b,$),f.el=lt.el}if(N&&St(N,b),!U&&(k=I&&I.onVnodeMounted)){const lt=f;St(()=>Qt(k,G,lt),b)}(f.shapeFlag&256||G&&Fr(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&St(u.a,b),u.isMounted=!0,f=g=v=null}},S=u.effect=new Ri(w,()=>Li(y),u.scope),y=u.update=()=>S.run();y.id=u.uid,Ve(u,!0),y()},nt=(u,f,g)=>{f.component=u;const v=u.vnode.props;u.vnode=f,u.next=null,lh(u,f.props,v,g),uh(u,f.children,g),fn(),_o(),dn()},W=(u,f,g,v,b,$,C,w,S=!1)=>{const y=u&&u.children,k=u?u.shapeFlag:0,T=f.children,{patchFlag:I,shapeFlag:P}=f;if(I>0){if(I&128){rr(y,T,g,v,b,$,C,w,S);return}else if(I&256){Ce(y,T,g,v,b,$,C,w,S);return}}P&8?(k&16&&se(y,b,$),T!==y&&h(g,T)):k&16?P&16?rr(y,T,g,v,b,$,C,w,S):se(y,b,$,!0):(k&8&&h(g,""),P&16&&Lt(T,g,v,b,$,C,w,S))},Ce=(u,f,g,v,b,$,C,w,S)=>{u=u||Ze,f=f||Ze;const y=u.length,k=f.length,T=Math.min(y,k);let I;for(I=0;I<T;I++){const P=f[I]=S?pe(f[I]):Kt(f[I]);R(u[I],P,g,null,b,$,C,w,S)}y>k?se(u,b,$,!0,!1,T):Lt(f,g,v,b,$,C,w,S,T)},rr=(u,f,g,v,b,$,C,w,S)=>{let y=0;const k=f.length;let T=u.length-1,I=k-1;for(;y<=T&&y<=I;){const P=u[y],N=f[y]=S?pe(f[y]):Kt(f[y]);if(xn(P,N))R(P,N,g,null,b,$,C,w,S);else break;y++}for(;y<=T&&y<=I;){const P=u[T],N=f[I]=S?pe(f[I]):Kt(f[I]);if(xn(P,N))R(P,N,g,null,b,$,C,w,S);else break;T--,I--}if(y>T){if(y<=I){const P=I+1,N=P<k?f[P].el:v;for(;y<=I;)R(null,f[y]=S?pe(f[y]):Kt(f[y]),g,N,b,$,C,w,S),y++}}else if(y>I)for(;y<=T;)Yt(u[y],b,$,!0),y++;else{const P=y,N=y,G=new Map;for(y=N;y<=I;y++){const Vt=f[y]=S?pe(f[y]):Kt(f[y]);Vt.key!=null&&G.set(Vt.key,y)}let U,lt=0;const Nt=I-N+1;let Ge=!1,yo=0;const wn=new Array(Nt);for(y=0;y<Nt;y++)wn[y]=0;for(y=P;y<=T;y++){const Vt=u[y];if(lt>=Nt){Yt(Vt,b,$,!0);continue}let Jt;if(Vt.key!=null)Jt=G.get(Vt.key);else for(U=N;U<=I;U++)if(wn[U-N]===0&&xn(Vt,f[U])){Jt=U;break}Jt===void 0?Yt(Vt,b,$,!0):(wn[Jt-N]=y+1,Jt>=yo?yo=Jt:Ge=!0,R(Vt,f[Jt],g,null,b,$,C,w,S),lt++)}const wo=Ge?dh(wn):Ze;for(U=wo.length-1,y=Nt-1;y>=0;y--){const Vt=N+y,Jt=f[Vt],xo=Vt+1<k?f[Vt+1].el:v;wn[y]===0?R(null,Jt,g,xo,b,$,C,w,S):Ge&&(U<0||y!==wo[U]?De(Jt,g,xo,2):U--)}}},De=(u,f,g,v,b=null)=>{const{el:$,type:C,transition:w,children:S,shapeFlag:y}=u;if(y&6){De(u.component.subTree,f,g,v);return}if(y&128){u.suspense.move(f,g,v);return}if(y&64){C.move(u,f,g,We);return}if(C===Zt){r($,f,g);for(let T=0;T<S.length;T++)De(S[T],f,g,v);r(u.anchor,f,g);return}if(C===Os){q(u,f,g);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter($),r($,f,g),St(()=>w.enter($),b);else{const{leave:T,delayLeave:I,afterLeave:P}=w,N=()=>r($,f,g),G=()=>{T($,()=>{N(),P&&P()})};I?I($,N,G):G()}else r($,f,g)},Yt=(u,f,g,v=!1,b=!1)=>{const{type:$,props:C,ref:w,children:S,dynamicChildren:y,shapeFlag:k,patchFlag:T,dirs:I}=u;if(w!=null&&fi(w,null,g,u,!0),k&256){f.ctx.deactivate(u);return}const P=k&1&&I,N=!Fr(u);let G;if(N&&(G=C&&C.onVnodeBeforeUnmount)&&Qt(G,f,u),k&6)Dc(u.component,g,v);else{if(k&128){u.suspense.unmount(g,v);return}P&&Te(u,null,f,"beforeUnmount"),k&64?u.type.remove(u,f,g,b,We,v):y&&($!==Zt||T>0&&T&64)?se(y,f,g,!1,!0):($===Zt&&T&384||!b&&k&16)&&se(S,f,g),v&&vo(u)}(N&&(G=C&&C.onVnodeUnmounted)||P)&&St(()=>{G&&Qt(G,f,u),P&&Te(u,null,f,"unmounted")},g)},vo=u=>{const{type:f,el:g,anchor:v,transition:b}=u;if(f===Zt){Cc(g,v);return}if(f===Os){A(u);return}const $=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:w}=b,S=()=>C(g,$);w?w(u.el,$,S):S()}else $()},Cc=(u,f)=>{let g;for(;u!==f;)g=m(u),s(u),u=g;s(f)},Dc=(u,f,g)=>{const{bum:v,scope:b,update:$,subTree:C,um:w}=u;v&&$r(v),b.stop(),$&&($.active=!1,Yt(C,u,f,g)),w&&St(w,f),St(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},se=(u,f,g,v=!1,b=!1,$=0)=>{for(let C=$;C<u.length;C++)Yt(u[C],f,g,v,b)},sr=u=>u.shapeFlag&6?sr(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),mo=(u,f,g)=>{u==null?f._vnode&&Yt(f._vnode,null,null,!0):R(f._vnode||null,u,f,null,null,null,g),_o(),ua(),f._vnode=u},We={p:R,um:Yt,m:De,r:vo,mt:Ss,mc:Lt,pc:W,pbc:Se,n:sr,o:t};let Cs,Ds;return e&&([Cs,Ds]=e(We)),{render:mo,hydrate:Cs,createApp:sh(mo,Cs)}}function Ve({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Va(t,e,n=!1){const r=t.children,s=e.children;if(O(r)&&O(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=pe(s[i]),l.el=o.el),n||Va(o,l)),l.type===Zr&&(l.el=o.el)}}function dh(t){const e=t.slice(),n=[0];let r,s,i,o,l;const a=t.length;for(r=0;r<a;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ph=t=>t.__isTeleport,Zt=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),Me=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),In=[];let zt=null;function Qe(t=!1){In.push(zt=t?null:[])}function gh(){In.pop(),zt=In[In.length-1]||null}let Hn=1;function Ho(t){Hn+=t}function Ra(t){return t.dynamicChildren=Hn>0?zt||Ze:null,gh(),Hn>0&&zt&&zt.push(t),t}function Cr(t,e,n,r,s,i){return Ra(dt(t,e,n,r,s,i,!0))}function _a(t,e,n,r,s){return Ra(wt(t,e,n,r,s,!0))}function bh(t){return t?t.__v_isVNode===!0:!1}function xn(t,e){return t.type===e.type&&t.key===e.key}const Kr="__vInternal",ka=({key:t})=>t??null,Dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ct(t)||gt(t)||L(t)?{i:It,r:t,k:e,f:!!n}:t:null);function dt(t,e=null,n=null,r=0,s=null,i=t===Zt?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ka(e),ref:e&&Dr(e),scopeId:Qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return l?(Mi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ct(n)?8:16),Hn>0&&!o&&zt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&zt.push(a),a}const wt=vh;function vh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yu)&&(t=Me),bh(t)){const l=on(t,e,!0);return n&&Mi(l,n),Hn>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag|=-2,l}if(Rh(t)&&(t=t.__vccOpts),e){e=mh(e);let{class:l,style:a}=e;l&&!ct(l)&&(e.class=Ti(l)),et(a)&&(ra(a)&&!O(a)&&(a=ft({},a)),e.style=Di(a))}const o=ct(t)?1:Eu(t)?128:ph(t)?64:et(t)?4:L(t)?2:0;return dt(t,e,n,r,s,o,i,!0)}function mh(t){return t?ra(t)||Kr in t?ft({},t):t:null}function on(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?wh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ka(l),ref:e&&e.ref?n&&s?O(s)?s.concat(Dr(e)):[s,Dr(e)]:Dr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Zt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function di(t=" ",e=0){return wt(Zr,null,t,e)}function yh(t="",e=!1){return e?(Qe(),_a(Me,null,t)):wt(Me,null,t)}function Kt(t){return t==null||typeof t=="boolean"?wt(Me):O(t)?wt(Zt,null,t.slice()):typeof t=="object"?pe(t):wt(Zr,null,String(t))}function pe(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:on(t)}function Mi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Kr in e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[di(e)]):n=8);t.children=e,t.shapeFlag|=n}function wh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ti([e.class,r.class]));else if(s==="style")e.style=Di([e.style,r.style]);else if(zr(s)){const i=e[s],o=r[s];o&&i!==o&&!(O(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){qt(t,e,7,[n,r])}const xh=$a();let $h=0;function Fh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xh,i={uid:$h++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(r,s),emitsOptions:fa(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Du.bind(null,i),t.ce&&t.ce(i),i}let pt=null,Hi,Ye,jo="__VUE_INSTANCE_SETTERS__";(Ye=ni()[jo])||(Ye=ni()[jo]=[]),Ye.push(t=>pt=t),Hi=t=>{Ye.length>1?Ye.forEach(e=>e(t)):Ye[0](t)};const ln=t=>{Hi(t),t.scope.on()},Ne=()=>{pt&&pt.scope.off(),Hi(null)};function Ia(t){return t.vnode.shapeFlag&4}let jn=!1;function Sh(t,e=!1){jn=e;const{props:n,children:r}=t.vnode,s=Ia(t);oh(t,n,s,e),ch(t,r);const i=s?Ch(t,e):void 0;return jn=!1,i}function Ch(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sa(new Proxy(t.ctx,Xu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Th(t):null;ln(t),fn();const i=ve(r,t,0,[t.props,s]);if(dn(),Ne(),Hl(i)){if(i.then(Ne,Ne),e)return i.then(o=>{zo(t,o,e)}).catch(o=>{Yr(o,t,0)});t.asyncDep=i}else zo(t,i,e)}else Ea(t,e)}function zo(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:et(e)&&(t.setupState=la(e)),Ea(t,n)}let Uo;function Ea(t,e,n){const r=t.type;if(!t.render){if(!e&&Uo&&!r.render){const s=r.template||Ni(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=r,c=ft(ft({isCustomElement:i,delimiters:l},o),a);r.render=Uo(s,c)}}t.render=r.render||Ut}ln(t),fn(),Zu(t),dn(),Ne()}function Dh(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ct(t,"get","$attrs"),e[n]}}))}function Th(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Dh(t)},slots:t.slots,emit:t.emit,expose:e}}function ts(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(la(sa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kn)return kn[n](t)},has(e,n){return n in e||n in kn}}))}function Vh(t,e=!0){return L(t)?t.displayName||t.name:t.name||e&&t.__name}function Rh(t){return L(t)&&"__vccOpts"in t}const _h=(t,e)=>yu(t,e,jn),kh=Symbol.for("v-scx"),Ih=()=>Sr(kh),Eh="3.3.4",Oh="http://www.w3.org/2000/svg",Ee=typeof document<"u"?document:null,qo=Ee&&Ee.createElement("template"),Ph={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ee.createElementNS(Oh,t):Ee.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ee.createTextNode(t),createComment:t=>Ee.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ee.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qo.innerHTML=r?`<svg>${t}</svg>`:t;const l=qo.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ah(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lh(t,e,n){const r=t.style,s=ct(n);if(n&&!s){if(e&&!ct(e))for(const i in e)n[i]==null&&pi(r,i,"");for(const i in n)pi(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Wo=/\s*!important$/;function pi(t,e,n){if(O(n))n.forEach(r=>pi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nh(t,e);Wo.test(n)?t.setProperty(hn(r),n.replace(Wo,""),"important"):t[r]=n}}const Go=["Webkit","Moz","ms"],Ps={};function Nh(t,e){const n=Ps[e];if(n)return n;let r=ee(e);if(r!=="filter"&&r in t)return Ps[e]=r;r=Wr(r);for(let s=0;s<Go.length;s++){const i=Go[s]+r;if(i in t)return Ps[e]=i}return e}const Yo="http://www.w3.org/1999/xlink";function Bh(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yo,e.slice(6,e.length)):t.setAttributeNS(Yo,e,n);else{const i=Nc(e);n==null||i&&!Ul(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Mh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,h=n??"";c!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ul(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Je(t,e,n,r){t.addEventListener(e,n,r)}function Hh(t,e,n,r){t.removeEventListener(e,n,r)}function jh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,a]=zh(e);if(r){const c=i[e]=Wh(r,s);Je(t,l,c,a)}else o&&(Hh(t,l,o,a),i[e]=void 0)}}const Jo=/(?:Once|Passive|Capture)$/;function zh(t){let e;if(Jo.test(t)){e={};let r;for(;r=t.match(Jo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hn(t.slice(2)),e]}let As=0;const Uh=Promise.resolve(),qh=()=>As||(Uh.then(()=>As=0),As=Date.now());function Wh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qt(Gh(r,n.value),e,5,[r])};return n.value=t,n.attached=qh(),n}function Gh(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qo=/^on[a-z]/,Yh=(t,e,n,r,s=!1,i,o,l,a)=>{e==="class"?Ah(t,r,s):e==="style"?Lh(t,n,r):zr(e)?$i(e)||jh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jh(t,e,r,s))?Mh(t,e,r,i,o,l,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bh(t,e,r,s))};function Jh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Qo.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qo.test(e)&&ct(n)?!1:e in t}const Xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>$r(e,n):e};function Qh(t){t.target.composing=!0}function Zo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Xo(s);const i=r||s.props&&s.props.type==="number";Je(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ei(l)),t._assign(l)}),n&&Je(t,"change",()=>{t.value=t.value.trim()}),e||(Je(t,"compositionstart",Qh),Je(t,"compositionend",Zo),Je(t,"change",Zo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Xo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ei(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Zh=ft({patchProp:Yh},Ph);let Ko;function Kh(){return Ko||(Ko=hh(Zh))}const tf=(...t)=>{const e=Kh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ef(r);if(!s)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ef(t){return ct(t)?document.querySelector(t):t}const $e=t=>(Tu("data-v-b233afc9"),t=t(),Vu(),t),nf={id:"Home",style:{"align-items":"center"}},rf=$e(()=>dt("h1",null,"News Article Classifier",-1)),sf={style:{"margin-top":"10%",display:"block"}},of=$e(()=>dt("h2",null,"Search",-1)),lf={key:0},af={style:{display:"flex","margin-top":"5%",float:"left"}},cf=$e(()=>dt("h2",null,"Instructions",-1)),uf=$e(()=>dt("p",null,"1. Find an Article that you want to categorize",-1)),hf=$e(()=>dt("p",null,"2. Copy its web link",-1)),ff=$e(()=>dt("p",null,"3. Paste the link above and search",-1)),df=$e(()=>dt("h2",null,"History",-1)),pf={style:{"overflow-y":"scroll","max-height":"250px","margin-top":"10px"}},gf={href:"{{item.url}}"},bf=$e(()=>dt("h3",{style:{color:"lightgray"}},"© Advait Joglekar",-1)),vf=ga({__name:"Home",setup(t){var e=Rs(""),n=Rs([]),r=Rs();function s(){console.log(e.value),fetch("/api/url",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({url:e.value})}).then(l=>l.json()).then(l=>{n.value=l,i(),console.log(n.value)})}function i(){fetch("/api/history").then(l=>l.json()).then(l=>{console.log(l),r.value=l.reverse()})}return ma(()=>{i()}),(o,l)=>{const a=Is("fluent-button"),c=Is("fluent-divider"),h=Is("fluent-card");return Qe(),Cr("main",nf,[rf,dt("div",sf,[of,Au(dt("input",{type:"url","onUpdate:modelValue":l[0]||(l[0]=p=>gt(e)?e.value=p:e=p),placeholder:"Paste link",style:{display:"block"}},null,512),[[Xh,Vn(e)]]),wt(a,{type:"submit",onClick:s,appearance:"accent",style:{"margin-top":"2%"}},{default:Rn(()=>[di("Go!")]),_:1})]),Vn(n).length>0?(Qe(),Cr("h2",lf,"Category: "+Vs(Vn(n)),1)):yh("",!0),dt("div",af,[wt(h,{style:{height:"400px",width:"500px",padding:"20px","text-align":"start"}},{default:Rn(()=>[cf,wt(c),uf,hf,ff]),_:1}),wt(h,{class:"outer-card"},{default:Rn(()=>[df,wt(c),dt("div",pf,[(Qe(!0),Cr(Zt,null,Qu(Vn(r),p=>(Qe(),_a(h,{class:"inner-card"},{default:Rn(()=>[dt("p",null,[di("Article: "),dt("a",gf,Vs(p.url),1)]),dt("p",null,"Category: "+Vs(p.category),1)]),_:2},1024))),256))])]),_:1})]),bf])}}});const mf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yf=mf(vf,[["__scopeId","data-v-b233afc9"]]),wf={id:"app"},xf=ga({__name:"App",setup(t){return(e,n)=>(Qe(),Cr("main",wf,[wt(yf)]))}}),we=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();we.trustedTypes===void 0&&(we.trustedTypes={createPolicy:(t,e)=>e});const Oa={configurable:!1,enumerable:!1,writable:!1};we.FAST===void 0&&Reflect.defineProperty(we,"FAST",Object.assign({value:Object.create(null)},Oa));const zn=we.FAST;if(zn.getById===void 0){const t=Object.create(null);Reflect.defineProperty(zn,"getById",Object.assign({value(e,n){let r=t[e];return r===void 0&&(r=n?t[e]=n():null),r}},Oa))}const En=Object.freeze([]);function Pa(){const t=new WeakMap;return function(e){let n=t.get(e);if(n===void 0){let r=Reflect.getPrototypeOf(e);for(;n===void 0&&r!==null;)n=t.get(r),r=Reflect.getPrototypeOf(r);n=n===void 0?[]:n.slice(0),t.set(e,n)}return n}}const Ls=we.FAST.getById(1,()=>{const t=[],e=[];function n(){if(e.length)throw e.shift()}function r(o){try{o.call()}catch(l){e.push(l),setTimeout(n,0)}}function s(){let l=0;for(;l<t.length;)if(r(t[l]),l++,l>1024){for(let a=0,c=t.length-l;a<c;a++)t[a]=t[a+l];t.length-=l,l=0}t.length=0}function i(o){t.length<1&&we.requestAnimationFrame(s),t.push(o)}return Object.freeze({enqueue:i,process:s})}),Aa=we.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let Ns=Aa;const On=`fast-${Math.random().toString(36).substring(2,8)}`,La=`${On}{`,ji=`}${On}`,j=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(Ns!==Aa)throw new Error("The HTML policy can only be set once.");Ns=t},createHTML(t){return Ns.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(On)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${On}:`,""))},createInterpolationPlaceholder(t){return`${La}${t}${ji}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${On}:${t}-->`},queueUpdate:Ls.enqueue,processUpdates:Ls.process,nextUpdate(){return new Promise(Ls.enqueue)},setAttribute(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class gi{constructor(e,n){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=n}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const n=this.spillover;if(n===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else n.indexOf(e)===-1&&n.push(e)}unsubscribe(e){const n=this.spillover;if(n===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}notify(e){const n=this.spillover,r=this.source;if(n===void 0){const s=this.sub1,i=this.sub2;s!==void 0&&s.handleChange(r,e),i!==void 0&&i.handleChange(r,e)}else for(let s=0,i=n.length;s<i;++s)n[s].handleChange(r,e)}}class Na{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var n;const r=this.subscribers[e];r!==void 0&&r.notify(e),(n=this.sourceSubscribers)===null||n===void 0||n.notify(e)}subscribe(e,n){var r;if(n){let s=this.subscribers[n];s===void 0&&(this.subscribers[n]=s=new gi(this.source)),s.subscribe(e)}else this.sourceSubscribers=(r=this.sourceSubscribers)!==null&&r!==void 0?r:new gi(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,n){var r;if(n){const s=this.subscribers[n];s!==void 0&&s.unsubscribe(e)}else(r=this.sourceSubscribers)===null||r===void 0||r.unsubscribe(e)}}const st=zn.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,n=j.queueUpdate;let r,s=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(c){let h=c.$fastController||e.get(c);return h===void 0&&(Array.isArray(c)?h=s(c):e.set(c,h=new Na(c))),h}const o=Pa();class l{constructor(h){this.name=h,this.field=`_${h}`,this.callback=`${h}Changed`}getValue(h){return r!==void 0&&r.watch(h,this.name),h[this.field]}setValue(h,p){const m=this.field,D=h[m];if(D!==p){h[m]=p;const E=h[this.callback];typeof E=="function"&&E.call(h,D,p),i(h).notify(this.name)}}}class a extends gi{constructor(h,p,m=!1){super(h,p),this.binding=h,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(h,p){this.needsRefresh&&this.last!==null&&this.disconnect();const m=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const D=this.binding(h,p);return r=m,D}disconnect(){if(this.last!==null){let h=this.first;for(;h!==void 0;)h.notifier.unsubscribe(this,h.propertyName),h=h.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(h,p){const m=this.last,D=i(h),E=m===null?this.first:{};if(E.propertySource=h,E.propertyName=p,E.notifier=D,D.subscribe(this,p),m!==null){if(!this.needsRefresh){let R;r=void 0,R=m.propertySource[m.propertyName],r=this,h===R&&(this.needsRefresh=!0)}m.next=E}this.last=E}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let h=this.first;return{next:()=>{const p=h;return p===void 0?{value:void 0,done:!0}:(h=h.next,{value:p,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){s=c},getNotifier:i,track(c,h){r!==void 0&&r.watch(c,h)},trackVolatile(){r!==void 0&&(r.needsRefresh=!0)},notify(c,h){i(c).notify(h)},defineProperty(c,h){typeof h=="string"&&(h=new l(h)),o(c).push(h),Reflect.defineProperty(c,h.name,{enumerable:!0,get:function(){return h.getValue(this)},set:function(p){h.setValue(this,p)}})},getAccessors:o,binding(c,h,p=this.isVolatileBinding(c)){return new a(c,h,p)},isVolatileBinding(c){return t.test(c.toString())}})});function Dt(t,e){st.defineProperty(t,e)}const tl=zn.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class Un{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return tl.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){tl.set(e)}}st.defineProperty(Un.prototype,"index");st.defineProperty(Un.prototype,"length");const Pn=Object.seal(new Un);class zi{constructor(){this.targetIndex=0}}class Ba extends zi{constructor(){super(...arguments),this.createPlaceholder=j.createInterpolationPlaceholder}}class Ui extends zi{constructor(e,n,r){super(),this.name=e,this.behavior=n,this.options=r}createPlaceholder(e){return j.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function $f(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=st.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Ff(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Sf(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Cf(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Df(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Tf(t){j.setAttribute(this.target,this.targetName,t)}function Vf(t){j.setBooleanAttribute(this.target,this.targetName,t)}function Rf(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function _f(t){this.target[this.targetName]=t}function kf(t){const e=this.classVersions||Object.create(null),n=this.target;let r=this.version||0;if(t!=null&&t.length){const s=t.split(/\s+/);for(let i=0,o=s.length;i<o;++i){const l=s[i];l!==""&&(e[l]=r,n.classList.add(l))}}if(this.classVersions=e,this.version=r+1,r!==0){r-=1;for(const s in e)e[s]===r&&n.classList.remove(s)}}class qi extends Ba{constructor(e){super(),this.binding=e,this.bind=$f,this.unbind=Sf,this.updateTarget=Tf,this.isBindingVolatile=st.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=_f,this.cleanedTargetName==="innerHTML"){const n=this.binding;this.binding=(r,s)=>j.createHTML(n(r,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Vf;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Ff,this.unbind=Df;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=kf);break}}targetAtContent(){this.updateTarget=Rf,this.unbind=Cf}createBehavior(e){return new If(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class If{constructor(e,n,r,s,i,o,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=n,this.isBindingVolatile=r,this.bind=s,this.unbind=i,this.updateTarget=o,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Un.setEvent(e);const n=this.binding(this.source,this.context);Un.setEvent(null),n!==!0&&e.preventDefault()}}let Bs=null;class Wi{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Bs=this}static borrow(e){const n=Bs||new Wi;return n.directives=e,n.reset(),Bs=null,n}}function Ef(t){if(t.length===1)return t[0];let e;const n=t.length,r=t.map(o=>typeof o=="string"?()=>o:(e=o.targetName||e,o.binding)),s=(o,l)=>{let a="";for(let c=0;c<n;++c)a+=r[c](o,l);return a},i=new qi(s);return i.targetName=e,i}const Of=ji.length;function Ma(t,e){const n=e.split(La);if(n.length===1)return null;const r=[];for(let s=0,i=n.length;s<i;++s){const o=n[s],l=o.indexOf(ji);let a;if(l===-1)a=o;else{const c=parseInt(o.substring(0,l));r.push(t.directives[c]),a=o.substring(l+Of)}a!==""&&r.push(a)}return r}function el(t,e,n=!1){const r=e.attributes;for(let s=0,i=r.length;s<i;++s){const o=r[s],l=o.value,a=Ma(t,l);let c=null;a===null?n&&(c=new qi(()=>l),c.targetName=o.name):c=Ef(a),c!==null&&(e.removeAttributeNode(o),s--,i--,t.addFactory(c))}}function Pf(t,e,n){const r=Ma(t,e.textContent);if(r!==null){let s=e;for(let i=0,o=r.length;i<o;++i){const l=r[i],a=i===0?e:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",t.captureContentBinding(l)),s=a,t.targetIndex++,a!==e&&n.nextNode()}t.targetIndex--}}function Af(t,e){const n=t.content;document.adoptNode(n);const r=Wi.borrow(e);el(r,t,!0);const s=r.behaviorFactories;r.reset();const i=j.createTemplateWalker(n);let o;for(;o=i.nextNode();)switch(r.targetIndex++,o.nodeType){case 1:el(r,o);break;case 3:Pf(r,o,i);break;case 8:j.isMarker(o)&&r.addFactory(e[j.extractDirectiveIndexFromMarker(o)])}let l=0;(j.isMarker(n.firstChild)||n.childNodes.length===1&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),l=-1);const a=r.behaviorFactories;return r.release(),{fragment:n,viewBehaviorFactories:a,hostBehaviorFactories:s,targetOffset:l}}const Ms=document.createRange();class Lf{constructor(e,n){this.fragment=e,this.behaviors=n,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const n=this.lastChild;if(e.previousSibling===n)return;const r=e.parentNode;let s=this.firstChild,i;for(;s!==n;)i=s.nextSibling,r.insertBefore(s,e),s=i;r.insertBefore(n,e)}}remove(){const e=this.fragment,n=this.lastChild;let r=this.firstChild,s;for(;r!==n;)s=r.nextSibling,e.appendChild(r),r=s;e.appendChild(n)}dispose(){const e=this.firstChild.parentNode,n=this.lastChild;let r=this.firstChild,s;for(;r!==n;)s=r.nextSibling,e.removeChild(r),r=s;e.removeChild(n);const i=this.behaviors,o=this.source;for(let l=0,a=i.length;l<a;++l)i[l].unbind(o)}bind(e,n){const r=this.behaviors;if(this.source!==e)if(this.source!==null){const s=this.source;this.source=e,this.context=n;for(let i=0,o=r.length;i<o;++i){const l=r[i];l.unbind(s),l.bind(e,n)}}else{this.source=e,this.context=n;for(let s=0,i=r.length;s<i;++s)r[s].bind(e,n)}}unbind(){if(this.source===null)return;const e=this.behaviors,n=this.source;for(let r=0,s=e.length;r<s;++r)e[r].unbind(n);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Ms.setStartBefore(e[0].firstChild),Ms.setEndAfter(e[e.length-1].lastChild),Ms.deleteContents();for(let n=0,r=e.length;n<r;++n){const s=e[n],i=s.behaviors,o=s.source;for(let l=0,a=i.length;l<a;++l)i[l].unbind(o)}}}}class nl{constructor(e,n){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=n}create(e){if(this.fragment===null){let c;const h=this.html;if(typeof h=="string"){c=document.createElement("template"),c.innerHTML=j.createHTML(h);const m=c.content.firstElementChild;m!==null&&m.tagName==="TEMPLATE"&&(c=m)}else c=h;const p=Af(c,this.directives);this.fragment=p.fragment,this.viewBehaviorFactories=p.viewBehaviorFactories,this.hostBehaviorFactories=p.hostBehaviorFactories,this.targetOffset=p.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const n=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,s=new Array(this.behaviorCount),i=j.createTemplateWalker(n);let o=0,l=this.targetOffset,a=i.nextNode();for(let c=r.length;o<c;++o){const h=r[o],p=h.targetIndex;for(;a!==null;)if(l===p){s[o]=h.createBehavior(a);break}else a=i.nextNode(),l++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let h=0,p=c.length;h<p;++h,++o)s[o]=c[h].createBehavior(e)}return new Lf(n,s)}render(e,n,r){typeof n=="string"&&(n=document.getElementById(n)),r===void 0&&(r=n);const s=this.create(r);return s.bind(e,Pn),s.appendTo(n),s}}const Nf=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Et(t,...e){const n=[];let r="";for(let s=0,i=t.length-1;s<i;++s){const o=t[s];let l=e[s];if(r+=o,l instanceof nl){const a=l;l=()=>a}if(typeof l=="function"&&(l=new qi(l)),l instanceof Ba){const a=Nf.exec(o);a!==null&&(l.targetName=a[2])}l instanceof zi?(r+=l.createPlaceholder(n.length),n.push(l)):r+=l}return r+=t[t.length-1],new nl(r,n)}class $t{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}$t.create=(()=>{if(j.supportsAdoptedStyleSheets){const t=new Map;return e=>new Bf(e,t)}return t=>new jf(t)})();function Gi(t){return t.map(e=>e instanceof $t?Gi(e.styles):[e]).reduce((e,n)=>e.concat(n),[])}function Ha(t){return t.map(e=>e instanceof $t?e.behaviors:null).reduce((e,n)=>n===null?e:(e===null&&(e=[]),e.concat(n)),null)}let ja=(t,e)=>{t.adoptedStyleSheets=[...t.adoptedStyleSheets,...e]},za=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(n=>e.indexOf(n)===-1)};if(j.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),ja=(t,e)=>{t.adoptedStyleSheets.push(...e)},za=(t,e)=>{for(const n of e){const r=t.adoptedStyleSheets.indexOf(n);r!==-1&&t.adoptedStyleSheets.splice(r,1)}}}catch{}class Bf extends $t{constructor(e,n){super(),this.styles=e,this.styleSheetCache=n,this._styleSheets=void 0,this.behaviors=Ha(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,n=this.styleSheetCache;this._styleSheets=Gi(e).map(r=>{if(r instanceof CSSStyleSheet)return r;let s=n.get(r);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(r),n.set(r,s)),s})}return this._styleSheets}addStylesTo(e){ja(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){za(e,this.styleSheets),super.removeStylesFrom(e)}}let Mf=0;function Hf(){return`fast-style-class-${++Mf}`}class jf extends $t{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Ha(e),this.styleSheets=Gi(e),this.styleClass=Hf()}addStylesTo(e){const n=this.styleSheets,r=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<n.length;s++){const i=document.createElement("style");i.innerHTML=n[s],i.className=r,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const n=e.querySelectorAll(`.${this.styleClass}`);for(let r=0,s=n.length;r<s;++r)e.removeChild(n[r]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Or=Object.freeze({locate:Pa()}),zf={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},Yi={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class Pr{constructor(e,n,r=n.toLowerCase(),s="reflect",i){this.guards=new Set,this.Owner=e,this.name=n,this.attribute=r,this.mode=s,this.converter=i,this.fieldName=`_${n}`,this.callbackName=`${n}Changed`,this.hasCallback=this.callbackName in e.prototype,s==="boolean"&&i===void 0&&(this.converter=zf)}setValue(e,n){const r=e[this.fieldName],s=this.converter;s!==void 0&&(n=s.fromView(n)),r!==n&&(e[this.fieldName]=n,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,n),e.$fastController.notify(this.name))}getValue(e){return st.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,n){this.guards.has(e)||(this.guards.add(e),this.setValue(e,n),this.guards.delete(e))}tryReflectToAttribute(e){const n=this.mode,r=this.guards;r.has(e)||n==="fromView"||j.queueUpdate(()=>{r.add(e);const s=e[this.fieldName];switch(n){case"reflect":const i=this.converter;j.setAttribute(e,this.attribute,i!==void 0?i.toView(s):s);break;case"boolean":j.setBooleanAttribute(e,this.attribute,s);break}r.delete(e)})}static collect(e,...n){const r=[];n.push(Or.locate(e));for(let s=0,i=n.length;s<i;++s){const o=n[s];if(o!==void 0)for(let l=0,a=o.length;l<a;++l){const c=o[l];typeof c=="string"?r.push(new Pr(e,c)):r.push(new Pr(e,c.property,c.attribute,c.mode,c.converter))}}return r}}function _(t,e){let n;function r(s,i){arguments.length>1&&(n.property=i),Or.locate(s.constructor).push(n)}if(arguments.length>1){n={},r(t,e);return}return n=t===void 0?{}:t,r}const rl={mode:"open"},sl={},bi=zn.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class es{constructor(e,n=e.definition){typeof n=="string"&&(n={name:n}),this.type=e,this.name=n.name,this.template=n.template;const r=Pr.collect(e,n.attributes),s=new Array(r.length),i={},o={};for(let l=0,a=r.length;l<a;++l){const c=r[l];s[l]=c.attribute,i[c.name]=c,o[c.attribute]=c}this.attributes=r,this.observedAttributes=s,this.propertyLookup=i,this.attributeLookup=o,this.shadowOptions=n.shadowOptions===void 0?rl:n.shadowOptions===null?void 0:Object.assign(Object.assign({},rl),n.shadowOptions),this.elementOptions=n.elementOptions===void 0?sl:Object.assign(Object.assign({},sl),n.elementOptions),this.styles=n.styles===void 0?void 0:Array.isArray(n.styles)?$t.create(n.styles):n.styles instanceof $t?n.styles:$t.create([n.styles])}get isDefined(){return!!bi.getByType(this.type)}define(e=customElements){const n=this.type;if(bi.register(this)){const r=this.attributes,s=n.prototype;for(let i=0,o=r.length;i<o;++i)st.defineProperty(s,r[i]);Reflect.defineProperty(n,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,n,this.elementOptions),this}}es.forType=bi.getByType;const Ua=new WeakMap,Uf={bubbles:!0,composed:!0,cancelable:!0};function Hs(t){return t.shadowRoot||Ua.get(t)||null}class Ji extends Na{constructor(e,n){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=n;const r=n.shadowOptions;if(r!==void 0){const i=e.attachShadow(r);r.mode==="closed"&&Ua.set(e,i)}const s=st.getAccessors(e);if(s.length>0){const i=this.boundObservables=Object.create(null);for(let o=0,l=s.length;o<l;++o){const a=s[o].name,c=e[a];c!==void 0&&(delete e[a],i[a]=c)}}}get isConnected(){return st.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,st.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const n=Hs(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.append(e);else if(!e.isAttachedTo(n)){const r=e.behaviors;e.addStylesTo(n),r!==null&&this.addBehaviors(r)}}removeStyles(e){const n=Hs(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.removeChild(e);else if(e.isAttachedTo(n)){const r=e.behaviors;e.removeStylesFrom(n),r!==null&&this.removeBehaviors(r)}}addBehaviors(e){const n=this.behaviors||(this.behaviors=new Map),r=e.length,s=[];for(let i=0;i<r;++i){const o=e[i];n.has(o)?n.set(o,n.get(o)+1):(n.set(o,1),s.push(o))}if(this._isConnected){const i=this.element;for(let o=0;o<s.length;++o)s[o].bind(i,Pn)}}removeBehaviors(e,n=!1){const r=this.behaviors;if(r===null)return;const s=e.length,i=[];for(let o=0;o<s;++o){const l=e[o];if(r.has(l)){const a=r.get(l)-1;a===0||n?r.delete(l)&&i.push(l):r.set(l,a)}}if(this._isConnected){const o=this.element;for(let l=0;l<i.length;++l)i[l].unbind(o)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Pn);const n=this.behaviors;if(n!==null)for(const[r]of n)r.bind(e,Pn);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const n=this.behaviors;if(n!==null){const r=this.element;for(const[s]of n)s.unbind(r)}}onAttributeChangedCallback(e,n,r){const s=this.definition.attributeLookup[e];s!==void 0&&s.onAttributeChangedCallback(this.element,r)}emit(e,n,r){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:n},Uf),r))):!1}finishInitialization(){const e=this.element,n=this.boundObservables;if(n!==null){const s=Object.keys(n);for(let i=0,o=s.length;i<o;++i){const l=s[i];e[l]=n[l]}this.boundObservables=null}const r=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const n=this.element,r=Hs(n)||n;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||j.removeChildNodes(r),e&&(this.view=e.render(n,r,n))}static forCustomElement(e){const n=e.$fastController;if(n!==void 0)return n;const r=es.forType(e.constructor);if(r===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new Ji(e,r)}}function il(t){return class extends t{constructor(){super(),Ji.forCustomElement(this)}$emit(e,n,r){return this.$fastController.emit(e,n,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,n,r){this.$fastController.onAttributeChangedCallback(e,n,r)}}}const ns=Object.assign(il(HTMLElement),{from(t){return il(t)},define(t,e){return new es(t,e).define().type}});class Qi{createCSS(){return""}createBehavior(){}}function qa(t,e){const n=[];let r="";const s=[];for(let i=0,o=t.length-1;i<o;++i){r+=t[i];let l=e[i];if(l instanceof Qi){const a=l.createBehavior();l=l.createCSS(),a&&s.push(a)}l instanceof $t||l instanceof CSSStyleSheet?(r.trim()!==""&&(n.push(r),r=""),n.push(l)):r+=l}return r+=t[t.length-1],r.trim()!==""&&n.push(r),{styles:n,behaviors:s}}function J(t,...e){const{styles:n,behaviors:r}=qa(t,e),s=$t.create(n);return r.length&&s.withBehaviors(...r),s}class qf extends Qi{constructor(e,n){super(),this.behaviors=n,this.css="";const r=e.reduce((s,i)=>(typeof i=="string"?this.css+=i:s.push(i),s),[]);r.length&&(this.styles=$t.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function _t(t,...e){const{styles:n,behaviors:r}=qa(t,e);return new qf(n,r)}class Wf{constructor(e,n){this.target=e,this.propertyName=n}bind(e){e[this.propertyName]=this.target}unbind(){}}function Ot(t){return new Ui("fast-ref",Wf,t)}const Wa=t=>typeof t=="function",Gf=()=>null;function ol(t){return t===void 0?Gf:Wa(t)?t:()=>t}function ll(t,e,n){const r=Wa(t)?t:()=>t,s=ol(e),i=ol(n);return(o,l)=>r(o,l)?s(o,l):i(o,l)}function Yf(t){return t?function(e,n,r){return e.nodeType===1&&e.matches(t)}:function(e,n,r){return e.nodeType===1}}class Ga{constructor(e,n){this.target=e,this.options=n,this.source=null}bind(e){const n=this.options.property;this.shouldUpdate=st.getAccessors(e).some(r=>r.name===n),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(En),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Jf extends Ga{constructor(e,n){super(e,n)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function rs(t){return typeof t=="string"&&(t={property:t}),new Ui("fast-slotted",Jf,t)}class Qf extends Ga{constructor(e,n){super(e,n),this.observer=null,n.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Xf(t){return typeof t=="string"&&(t={property:t}),new Ui("fast-children",Qf,t)}class Xi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Zi=(t,e)=>Et`
    <span
        part="end"
        ${Ot("endContainer")}
        class=${n=>e.end?"end":void 0}
    >
        <slot name="end" ${Ot("end")} @slotchange="${n=>n.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Ki=(t,e)=>Et`
    <span
        part="start"
        ${Ot("startContainer")}
        class="${n=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ot("start")}
            @slotchange="${n=>n.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;Et`
    <span part="end" ${Ot("endContainer")}>
        <slot
            name="end"
            ${Ot("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`;Et`
    <span part="start" ${Ot("startContainer")}>
        <slot
            name="start"
            ${Ot("start")}
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
***************************************************************************** */function V(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}const js=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let r=js.get(n);r===void 0&&js.set(n,r=new Map),r.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=js.get(e);if(n!==void 0)return n.get(t)});class Zf{constructor(e,n){this.container=e,this.key=n}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ja(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,n){const{container:r,key:s}=this;return this.container=this.key=void 0,r.registerResolver(s,new kt(s,e,n))}}function $n(t){const e=t.slice(),n=Object.keys(t),r=n.length;let s;for(let i=0;i<r;++i)s=n[i],Qa(s)||(e[s]=t[s]);return e}const Kf=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new kt(t,1,t)},transient(t){return new kt(t,2,t)}}),zs=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Kf.singleton})}),al=new Map;function cl(t){return e=>Reflect.getOwnMetadata(t,e)}let ul=null;const tt=Object.freeze({createContainer(t){return new An(null,Object.assign({},zs.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:tt.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(Ya,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||tt.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new An(t,Object.assign({},zs.default,e,{parentLocator:tt.findParentContainer})):ul||(ul=new An(null,Object.assign({},zs.default,e,{parentLocator:()=>null})))},getDesignParamtypes:cl("design:paramtypes"),getAnnotationParamtypes:cl("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=al.get(t);if(e===void 0){const n=t.inject;if(n===void 0){const r=tt.getDesignParamtypes(t),s=tt.getAnnotationParamtypes(t);if(r===void 0)if(s===void 0){const i=Object.getPrototypeOf(t);typeof i=="function"&&i!==Function.prototype?e=$n(tt.getDependencies(i)):e=[]}else e=$n(s);else if(s===void 0)e=$n(r);else{e=$n(r);let i=s.length,o;for(let c=0;c<i;++c)o=s[c],o!==void 0&&(e[c]=o);const l=Object.keys(s);i=l.length;let a;for(let c=0;c<i;++c)a=l[c],Qa(a)||(e[a]=s[a])}}else e=$n(n);al.set(t,e)}return e},defineProperty(t,e,n,r=!1){const s=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let i=this[s];if(i===void 0&&(i=(this instanceof HTMLElement?tt.findResponsibleContainer(this):tt.getOrCreateDOMContainer()).get(n),this[s]=i,r&&this instanceof ns)){const l=this.$fastController,a=()=>{const h=tt.findResponsibleContainer(this).get(n),p=this[s];h!==p&&(this[s]=i,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return i}})},createInterface(t,e){const n=typeof t=="function"?t:e,r=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||pl,s=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,i=function(o,l,a){if(o==null||new.target!==void 0)throw new Error(`No registration for interface: '${i.friendlyName}'`);if(l)tt.defineProperty(o,l,i,s);else{const c=tt.getOrCreateAnnotationParamTypes(o);c[a]=i}};return i.$isInterface=!0,i.friendlyName=r??"(anonymous)",n!=null&&(i.register=function(o,l){return n(new Zf(o,l??i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject(...t){return function(e,n,r){if(typeof r=="number"){const s=tt.getOrCreateAnnotationParamTypes(e),i=t[0];i!==void 0&&(s[r]=i)}else if(n)tt.defineProperty(e,n,t[0]);else{const s=r?tt.getOrCreateAnnotationParamTypes(r.value):tt.getOrCreateAnnotationParamTypes(e);let i;for(let o=0;o<t.length;++o)i=t[o],i!==void 0&&(s[o]=i)}}},transient(t){return t.register=function(n){return qn.transient(t,t).register(n)},t.registerInRequestor=!1,t},singleton(t,e=ed){return t.register=function(r){return qn.singleton(t,t).register(r)},t.registerInRequestor=e.scoped,t}}),td=tt.createInterface("Container");tt.inject;const ed={scoped:!1};class kt{constructor(e,n,r){this.key=e,this.strategy=n,this.state=r,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,n){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(n),this.strategy=0,this.resolving=!1,this.state}case 2:{const r=e.getFactory(this.state);if(r===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return r.construct(n)}case 3:return this.state(e,n,this);case 4:return this.state[0].resolve(e,n);case 5:return n.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var n,r,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(s=(r=(n=e.getResolver(this.state))===null||n===void 0?void 0:n.getFactory)===null||r===void 0?void 0:r.call(n,e))!==null&&s!==void 0?s:null;default:return null}}}function hl(t){return this.get(t)}function nd(t,e){return e(t)}class rd{constructor(e,n){this.Type=e,this.dependencies=n,this.transformers=null}construct(e,n){let r;return n===void 0?r=new this.Type(...this.dependencies.map(hl,e)):r=new this.Type(...this.dependencies.map(hl,e),...n),this.transformers==null?r:this.transformers.reduce(nd,r)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const sd={$isResolver:!0,resolve(t,e){return e}};function Tr(t){return typeof t.register=="function"}function id(t){return Tr(t)&&typeof t.registerInRequestor=="boolean"}function fl(t){return id(t)&&t.registerInRequestor}function od(t){return t.prototype!==void 0}const ld=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ya="__DI_LOCATE_PARENT__",Us=new Map;class An{constructor(e,n){this.owner=e,this.config=n,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(td,sd),e instanceof Node&&e.addEventListener(Ya,r=>{r.composedPath()[0]!==this.owner&&(r.detail.container=this,r.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...n){return this.context=e,this.register(...n),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let n,r,s,i,o;const l=this.context;for(let a=0,c=e.length;a<c;++a)if(n=e[a],!!gl(n))if(Tr(n))n.register(this,l);else if(od(n))qn.singleton(n,n).register(this);else for(r=Object.keys(n),i=0,o=r.length;i<o;++i)s=n[r[i]],gl(s)&&(Tr(s)?s.register(this,l):this.register(s));return--this.registerDepth,this}registerResolver(e,n){hr(e);const r=this.resolvers,s=r.get(e);return s==null?r.set(e,n):s instanceof kt&&s.strategy===4?s.state.push(n):r.set(e,new kt(e,4,[s,n])),n}registerTransformer(e,n){const r=this.getResolver(e);if(r==null)return!1;if(r.getFactory){const s=r.getFactory(this);return s==null?!1:(s.registerTransformer(n),!0)}return!1}getResolver(e,n=!0){if(hr(e),e.resolve!==void 0)return e;let r=this,s;for(;r!=null;)if(s=r.resolvers.get(e),s==null){if(r.parent==null){const i=fl(e)?this:r;return n?this.jitRegister(e,i):null}r=r.parent}else return s;return null}has(e,n=!1){return this.resolvers.has(e)?!0:n&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(hr(e),e.$isResolver)return e.resolve(this,this);let n=this,r;for(;n!=null;)if(r=n.resolvers.get(e),r==null){if(n.parent==null){const s=fl(e)?this:n;return r=this.jitRegister(e,s),r.resolve(n,this)}n=n.parent}else return r.resolve(n,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,n=!1){hr(e);const r=this;let s=r,i;if(n){let o=En;for(;s!=null;)i=s.resolvers.get(e),i!=null&&(o=o.concat(dl(i,s,r))),s=s.parent;return o}else for(;s!=null;)if(i=s.resolvers.get(e),i==null){if(s=s.parent,s==null)return En}else return dl(i,s,r);return En}getFactory(e){let n=Us.get(e);if(n===void 0){if(ad(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Us.set(e,n=new rd(e,tt.getDependencies(e)))}return n}registerFactory(e,n){Us.set(e,n)}createChild(e){return new An(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,n){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(ld.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Tr(e)){const r=e.register(n);if(!(r instanceof Object)||r.resolve==null){const s=n.resolvers.get(e);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return r}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const r=this.config.defaultResolver(e,n);return n.resolvers.set(e,r),r}}}}const qs=new WeakMap;function Ja(t){return function(e,n,r){if(qs.has(r))return qs.get(r);const s=t(e,n,r);return qs.set(r,s),s}}const qn=Object.freeze({instance(t,e){return new kt(t,0,e)},singleton(t,e){return new kt(t,1,e)},transient(t,e){return new kt(t,2,e)},callback(t,e){return new kt(t,3,e)},cachedCallback(t,e){return new kt(t,3,Ja(e))},aliasTo(t,e){return new kt(e,5,t)}});function hr(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function dl(t,e,n){if(t instanceof kt&&t.strategy===4){const r=t.state;let s=r.length;const i=new Array(s);for(;s--;)i[s]=r[s].resolve(e,n);return i}return[t.resolve(e,n)]}const pl="(anonymous)";function gl(t){return typeof t=="object"&&t!==null||typeof t=="function"}const ad=function(){const t=new WeakMap;let e=!1,n="",r=0;return function(s){return e=t.get(s),e===void 0&&(n=s.toString(),r=n.length,e=r>=29&&r<=100&&n.charCodeAt(r-1)===125&&n.charCodeAt(r-2)<=32&&n.charCodeAt(r-3)===93&&n.charCodeAt(r-4)===101&&n.charCodeAt(r-5)===100&&n.charCodeAt(r-6)===111&&n.charCodeAt(r-7)===99&&n.charCodeAt(r-8)===32&&n.charCodeAt(r-9)===101&&n.charCodeAt(r-10)===118&&n.charCodeAt(r-11)===105&&n.charCodeAt(r-12)===116&&n.charCodeAt(r-13)===97&&n.charCodeAt(r-14)===110&&n.charCodeAt(r-15)===88,t.set(s,e)),e}}(),fr={};function Qa(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=fr[t];if(e!==void 0)return e;const n=t.length;if(n===0)return fr[t]=!1;let r=0;for(let s=0;s<n;++s)if(r=t.charCodeAt(s),s===0&&r===48&&n>1||r<48||r>57)return fr[t]=!1;return fr[t]=!0}default:return!1}}function bl(t){return`${t.toLowerCase()}:presentation`}const dr=new Map,Xa=Object.freeze({define(t,e,n){const r=bl(t);dr.get(r)===void 0?dr.set(r,e):dr.set(r,!1),n.register(qn.instance(r,e))},forTag(t,e){const n=bl(t),r=dr.get(n);return r===!1?tt.findResponsibleContainer(e).get(n):r||null}});class cd{constructor(e,n){this.template=e||null,this.styles=n===void 0?null:Array.isArray(n)?$t.create(n):n instanceof $t?n:$t.create([n])}applyTo(e){const n=e.$fastController;n.template===null&&(n.template=this.template),n.styles===null&&(n.styles=this.styles)}}class Pt extends ns{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Xa.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(n={})=>new ud(this===Pt?class extends Pt{}:this,e,n)}}V([Dt],Pt.prototype,"template",void 0);V([Dt],Pt.prototype,"styles",void 0);function Fn(t,e,n){return typeof t=="function"?t(e,n):t}class ud{constructor(e,n,r){this.type=e,this.elementDefinition=n,this.overrideDefinition=r,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,n){const r=this.definition,s=this.overrideDefinition,o=`${r.prefix||n.elementPrefix}-${r.baseName}`;n.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new cd(Fn(r.template,l,r),Fn(r.styles,l,r));l.definePresentation(a);let c=Fn(r.shadowOptions,l,r);l.shadowRootMode&&(c?s.shadowOptions||(c.mode=l.shadowRootMode):c!==null&&(c={mode:l.shadowRootMode})),l.defineElement({elementOptions:Fn(r.elementOptions,l,r),shadowOptions:c,attributes:Fn(r.attributes,l,r)})}})}}function Qn(t,...e){const n=Or.locate(t);e.forEach(r=>{Object.getOwnPropertyNames(r.prototype).forEach(i=>{i!=="constructor"&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(r.prototype,i))}),Or.locate(r).forEach(i=>n.push(i))})}const hd={horizontal:"horizontal",vertical:"vertical"};function fd(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function to(...t){return t.every(e=>e instanceof HTMLElement)}function dd(t,e){return!t||!e||!to(t)?void 0:Array.from(t.querySelectorAll(e)).filter(r=>r.offsetParent!==null)}function pd(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let Re;function gd(){if(typeof Re=="boolean")return Re;if(!fd())return Re=!1,Re;const t=document.createElement("style"),e=pd();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Re=!0}catch{Re=!1}finally{document.head.removeChild(t)}return Re}var vl;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(vl||(vl={}));const bd="ArrowDown",vd="ArrowLeft",md="ArrowRight",yd="ArrowUp",Za="Enter",wd="Home",xd="End";var vi;(function(t){t.ltr="ltr",t.rtl="rtl"})(vi||(vi={}));var F;(function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"})(F||(F={}));class ot{}V([_({attribute:"aria-atomic"})],ot.prototype,"ariaAtomic",void 0);V([_({attribute:"aria-busy"})],ot.prototype,"ariaBusy",void 0);V([_({attribute:"aria-controls"})],ot.prototype,"ariaControls",void 0);V([_({attribute:"aria-current"})],ot.prototype,"ariaCurrent",void 0);V([_({attribute:"aria-describedby"})],ot.prototype,"ariaDescribedby",void 0);V([_({attribute:"aria-details"})],ot.prototype,"ariaDetails",void 0);V([_({attribute:"aria-disabled"})],ot.prototype,"ariaDisabled",void 0);V([_({attribute:"aria-errormessage"})],ot.prototype,"ariaErrormessage",void 0);V([_({attribute:"aria-flowto"})],ot.prototype,"ariaFlowto",void 0);V([_({attribute:"aria-haspopup"})],ot.prototype,"ariaHaspopup",void 0);V([_({attribute:"aria-hidden"})],ot.prototype,"ariaHidden",void 0);V([_({attribute:"aria-invalid"})],ot.prototype,"ariaInvalid",void 0);V([_({attribute:"aria-keyshortcuts"})],ot.prototype,"ariaKeyshortcuts",void 0);V([_({attribute:"aria-label"})],ot.prototype,"ariaLabel",void 0);V([_({attribute:"aria-labelledby"})],ot.prototype,"ariaLabelledby",void 0);V([_({attribute:"aria-live"})],ot.prototype,"ariaLive",void 0);V([_({attribute:"aria-owns"})],ot.prototype,"ariaOwns",void 0);V([_({attribute:"aria-relevant"})],ot.prototype,"ariaRelevant",void 0);V([_({attribute:"aria-roledescription"})],ot.prototype,"ariaRoledescription",void 0);const $d=(t,e)=>Et`
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
        ${Ot("control")}
    >
        ${Ki(t,e)}
        <span class="content" part="content">
            <slot ${rs("defaultSlottedContent")}></slot>
        </span>
        ${Zi(t,e)}
    </button>
`,ml="form-associated-proxy",yl="ElementInternals",wl=yl in window&&"setFormValue"in window[yl].prototype,xl=new WeakMap;function Ka(t){const e=class extends t{constructor(...n){super(...n),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return wl}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const n=this.proxy.labels,r=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=n?r.concat(Array.from(n)):r;return Object.freeze(s)}else return En}valueChanged(n,r){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(n,r){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),j.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(n,r){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),j.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!wl)return null;let n=xl.get(this);return n||(n=this.attachInternals(),xl.set(this,n)),n}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(n=>this.proxy.removeEventListener(n,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(n,r,s){this.elementInternals?this.elementInternals.setValidity(n,r,s):typeof r=="string"&&this.proxy.setCustomValidity(r)}formDisabledCallback(n){this.disabled=n}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var n;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(r=>this.proxy.addEventListener(r,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ml),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ml)),(n=this.shadowRoot)===null||n===void 0||n.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var n;this.removeChild(this.proxy),(n=this.shadowRoot)===null||n===void 0||n.removeChild(this.proxySlot)}validate(n){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,n)}setFormValue(n,r){this.elementInternals&&this.elementInternals.setFormValue(n,r||n)}_keypressHandler(n){switch(n.key){case Za:if(this.form instanceof HTMLFormElement){const r=this.form.querySelector("[type=submit]");r==null||r.click()}break}}stopPropagation(n){n.stopPropagation()}};return _({mode:"boolean"})(e.prototype,"disabled"),_({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),_({attribute:"current-value"})(e.prototype,"currentValue"),_(e.prototype,"name"),_({mode:"boolean"})(e.prototype,"required"),Dt(e.prototype,"value"),e}class Fd extends Pt{}class Sd extends Ka(Fd){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let At=class extends Sd{constructor(){super(...arguments),this.handleClick=e=>{var n;this.disabled&&((n=this.defaultSlottedContent)===null||n===void 0?void 0:n.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,n){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),n==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),n==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(r=>{r.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(r=>{r.removeEventListener("click",this.handleClick)})}};V([_({mode:"boolean"})],At.prototype,"autofocus",void 0);V([_({attribute:"form"})],At.prototype,"formId",void 0);V([_],At.prototype,"formaction",void 0);V([_],At.prototype,"formenctype",void 0);V([_],At.prototype,"formmethod",void 0);V([_({mode:"boolean"})],At.prototype,"formnovalidate",void 0);V([_],At.prototype,"formtarget",void 0);V([_],At.prototype,"type",void 0);V([Dt],At.prototype,"defaultSlottedContent",void 0);class ss{}V([_({attribute:"aria-expanded"})],ss.prototype,"ariaExpanded",void 0);V([_({attribute:"aria-pressed"})],ss.prototype,"ariaPressed",void 0);Qn(ss,ot);Qn(At,Xi,ss);const Cd=(t,e)=>Et`
    <slot></slot>
`;let tc=class extends Pt{};function Ar(t){const e=t.parentElement;if(e)return e;{const n=t.getRootNode();if(n.host instanceof HTMLElement)return n.host}return null}function Dd(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=Ar(n)}return!1}const oe=document.createElement("div");function Td(t){return t instanceof ns}class eo{setProperty(e,n){j.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){j.queueUpdate(()=>this.target.removeProperty(e))}}class Vd extends eo{constructor(e){super();const n=new CSSStyleSheet;this.target=n.cssRules[n.insertRule(":host{}")].style,e.$fastController.addStyles($t.create([n]))}}class Rd extends eo{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class _d extends eo{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const n=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[n].style}}}class ec{constructor(e){this.store=new Map,this.target=null;const n=e.$fastController;this.style=document.createElement("style"),n.addStyles(this.style),st.getNotifier(n).subscribe(this,"isConnected"),this.handleChange(n,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,n]of this.store.entries())this.target.setProperty(e,n)}setProperty(e,n){this.store.set(e,n),j.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,n)})}removeProperty(e){this.store.delete(e),j.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,n){const{sheet:r}=this.style;if(r){const s=r.insertRule(":host{}",r.cssRules.length);this.target=r.cssRules[s].style}else this.target=null}}V([Dt],ec.prototype,"target",void 0);class kd{constructor(e){this.target=e.style}setProperty(e,n){j.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){j.queueUpdate(()=>this.target.removeProperty(e))}}class ut{setProperty(e,n){ut.properties[e]=n;for(const r of ut.roots.values())Xe.getOrCreate(ut.normalizeRoot(r)).setProperty(e,n)}removeProperty(e){delete ut.properties[e];for(const n of ut.roots.values())Xe.getOrCreate(ut.normalizeRoot(n)).removeProperty(e)}static registerRoot(e){const{roots:n}=ut;if(!n.has(e)){n.add(e);const r=Xe.getOrCreate(this.normalizeRoot(e));for(const s in ut.properties)r.setProperty(s,ut.properties[s])}}static unregisterRoot(e){const{roots:n}=ut;if(n.has(e)){n.delete(e);const r=Xe.getOrCreate(ut.normalizeRoot(e));for(const s in ut.properties)r.removeProperty(s)}}static normalizeRoot(e){return e===oe?document:e}}ut.roots=new Set;ut.properties={};const Ws=new WeakMap,Id=j.supportsAdoptedStyleSheets?Vd:ec,Xe=Object.freeze({getOrCreate(t){if(Ws.has(t))return Ws.get(t);let e;return t===oe?e=new ut:t instanceof Document?e=j.supportsAdoptedStyleSheets?new Rd:new _d:Td(t)?e=new Id(t):e=new kd(t),Ws.set(t,e),e}});class yt extends Qi{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=yt.uniqueId(),yt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new yt({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return yt.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const n=rt.getOrCreate(e).get(this);if(n!==void 0)return n;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,n){return this._appliedTo.add(e),n instanceof yt&&(n=this.alias(n)),rt.getOrCreate(e).set(this,n),this}deleteValueFor(e){return this._appliedTo.delete(e),rt.existsFor(e)&&rt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(oe,e),this}subscribe(e,n){const r=this.getOrCreateSubscriberSet(n);n&&!rt.existsFor(n)&&rt.getOrCreate(n),r.has(e)||r.add(e)}unsubscribe(e,n){const r=this.subscribers.get(n||this);r&&r.has(e)&&r.delete(e)}notify(e){const n=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(r=>r.handleChange(n)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(r=>r.handleChange(n))}alias(e){return n=>e.getValueFor(n)}}yt.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();yt.tokensById=new Map;class Ed{startReflection(e,n){e.subscribe(this,n),this.handleChange({token:e,target:n})}stopReflection(e,n){e.unsubscribe(this,n),this.remove(e,n)}handleChange(e){const{token:n,target:r}=e;this.add(n,r)}add(e,n){Xe.getOrCreate(n).setProperty(e.cssCustomProperty,this.resolveCSSValue(rt.getOrCreate(n).get(e)))}remove(e,n){Xe.getOrCreate(n).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Od{constructor(e,n,r){this.source=e,this.token=n,this.node=r,this.dependencies=new Set,this.observer=st.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Pn))}}class Pd{constructor(){this.values=new Map}set(e,n){this.values.get(e)!==n&&(this.values.set(e,n),st.getNotifier(this).notify(e.id))}get(e){return st.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Sn=new WeakMap,Cn=new WeakMap;class rt{constructor(e){this.target=e,this.store=new Pd,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(n,r)=>{const s=yt.getTokenById(r);if(s&&(s.notify(this.target),yt.isCSSDesignToken(s))){const i=this.parent,o=this.isReflecting(s);if(i){const l=i.get(s),a=n.get(s);l!==a&&!o?this.reflectToCSS(s):l===a&&o&&this.stopReflectToCSS(s)}else o||this.reflectToCSS(s)}}},Sn.set(e,this),st.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof ns?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Sn.get(e)||new rt(e)}static existsFor(e){return Sn.has(e)}static findParent(e){if(oe!==e.target){let n=Ar(e.target);for(;n!==null;){if(Sn.has(n))return Sn.get(n);n=Ar(n)}return rt.getOrCreate(oe)}return null}static findClosestAssignedNode(e,n){let r=n;do{if(r.has(e))return r;r=r.parent?r.parent:r.target!==oe?rt.getOrCreate(oe):null}while(r!==null);return null}get parent(){return Cn.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const n=this.store.get(e);if(n!==void 0)return n;const r=this.getRaw(e);if(r!==void 0)return this.hydrate(e,r),this.get(e)}getRaw(e){var n;return this.assignedValues.has(e)?this.assignedValues.get(e):(n=rt.findClosestAssignedNode(e,this))===null||n===void 0?void 0:n.getRaw(e)}set(e,n){yt.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,n),yt.isDerivedDesignTokenValue(n)?this.setupBindingObserver(e,n):this.store.set(e,n)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const n=this.getRaw(e);n?this.hydrate(e,n):this.store.delete(e)}bind(){const e=rt.findParent(this);e&&e.appendChild(this);for(const n of this.assignedValues.keys())n.notify(this.target)}unbind(){this.parent&&Cn.get(this).removeChild(this)}appendChild(e){e.parent&&Cn.get(e).removeChild(e);const n=this.children.filter(r=>e.contains(r));Cn.set(e,this),this.children.push(e),n.forEach(r=>e.appendChild(r)),st.getNotifier(this.store).subscribe(e);for(const[r,s]of this.store.all())e.hydrate(r,this.bindingObservers.has(r)?this.getRaw(r):s)}removeChild(e){const n=this.children.indexOf(e);return n!==-1&&this.children.splice(n,1),st.getNotifier(this.store).unsubscribe(e),e.parent===this?Cn.delete(e):!1}contains(e){return Dd(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),rt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),rt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,n){const r=yt.getTokenById(n);r&&this.hydrate(r,this.getRaw(r))}hydrate(e,n){if(!this.has(e)){const r=this.bindingObservers.get(e);yt.isDerivedDesignTokenValue(n)?r?r.source!==n&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,n)):this.setupBindingObserver(e,n):(r&&this.tearDownBindingObserver(e),this.store.set(e,n))}}setupBindingObserver(e,n){const r=new Od(n,e,this);return this.bindingObservers.set(e,r),r}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}rt.cssCustomPropertyReflector=new Ed;V([Dt],rt.prototype,"children",void 0);function Ad(t){return yt.from(t)}const K=Object.freeze({create:Ad,notifyConnection(t){return!t.isConnected||!rt.existsFor(t)?!1:(rt.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!rt.existsFor(t)?!1:(rt.getOrCreate(t).unbind(),!0)},registerRoot(t=oe){ut.registerRoot(t)},unregisterRoot(t=oe){ut.unregisterRoot(t)}}),Gs=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ys=new Map,Vr=new Map;let nn=null;const Dn=tt.createInterface(t=>t.cachedCallback(e=>(nn===null&&(nn=new rc(null,e)),nn))),nc=Object.freeze({tagFor(t){return Vr.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||tt.findResponsibleContainer(t).get(Dn)},getOrCreate(t){if(!t)return nn===null&&(nn=tt.getOrCreateDOMContainer().get(Dn)),nn;const e=t.$$designSystem$$;if(e)return e;const n=tt.getOrCreateDOMContainer(t);if(n.has(Dn,!1))return n.get(Dn);{const r=new rc(t,n);return n.register(qn.instance(Dn,r)),r}}});function Ld(t,e,n){return typeof t=="string"?{name:t,type:e,callback:n}:t}class rc{constructor(e,n){this.owner=e,this.container=n,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Gs.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const n=this.container,r=[],s=this.disambiguate,i=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(l,a,c){const h=Ld(l,a,c),{name:p,callback:m,baseClass:D}=h;let{type:E}=h,R=p,H=Ys.get(R),Z=!0;for(;H;){const z=s(R,E,H);switch(z){case Gs.ignoreDuplicate:return;case Gs.definitionCallbackOnly:Z=!1,H=void 0;break;default:R=z,H=Ys.get(R);break}}Z&&((Vr.has(E)||E===Pt)&&(E=class extends E{}),Ys.set(R,E),Vr.set(E,R),D&&Vr.set(D,R)),r.push(new Nd(n,R,E,i,m,Z))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&K.registerRoot(this.designTokenRoot)),n.registerWithContext(o,...e);for(const l of r)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class Nd{constructor(e,n,r,s,i,o){this.container=e,this.name=n,this.type=r,this.shadowRootMode=s,this.callback=i,this.willDefine=o,this.definition=null}definePresentation(e){Xa.define(this.name,e,this.container)}defineElement(e){this.definition=new es(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return nc.tagFor(e)}}const Bd=(t,e)=>Et`
    <template role="${n=>n.role}" aria-orientation="${n=>n.orientation}"></template>
`,Md={separator:"separator",presentation:"presentation"};class no extends Pt{constructor(){super(...arguments),this.role=Md.separator,this.orientation=hd.horizontal}}V([_],no.prototype,"role",void 0);V([_],no.prototype,"orientation",void 0);class Hd extends Pt{}class jd extends Ka(Hd){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const zd={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let Tt=class extends jd{constructor(){super(...arguments),this.type=zd.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&j.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};V([_({attribute:"readonly",mode:"boolean"})],Tt.prototype,"readOnly",void 0);V([_({mode:"boolean"})],Tt.prototype,"autofocus",void 0);V([_],Tt.prototype,"placeholder",void 0);V([_],Tt.prototype,"type",void 0);V([_],Tt.prototype,"list",void 0);V([_({converter:Yi})],Tt.prototype,"maxlength",void 0);V([_({converter:Yi})],Tt.prototype,"minlength",void 0);V([_],Tt.prototype,"pattern",void 0);V([_({converter:Yi})],Tt.prototype,"size",void 0);V([_({mode:"boolean"})],Tt.prototype,"spellcheck",void 0);V([Dt],Tt.prototype,"defaultSlottedNodes",void 0);class sc{}Qn(sc,ot);Qn(Tt,Xi,sc);function Ud(t,e,n){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}const qd=(t,e)=>Et`
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
                ${rs({property:"defaultSlottedNodes",filter:Ud})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Ki(t,e)}
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
                ${Ot("control")}
            />
            ${Zi(t,e)}
        </div>
    </template>
`,Wd=(t,e)=>Et`
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
        ${Xf({property:"childItems",filter:Yf()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${ll(n=>n.childItems&&n.childItemLength()>0,Et`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(n,r)=>n.handleExpandCollapseButtonClick(r.event)}"
                            ${Ot("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${e.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${Ki(t,e)}
                <slot></slot>
                ${Zi(t,e)}
            </div>
        </div>
        ${ll(n=>n.childItems&&n.childItemLength()>0&&(n.expanded||n.renderCollapsedChildren),Et`
                <div role="group" class="items" part="items">
                    <slot name="item" ${rs("items")}></slot>
                </div>
            `)}
    </template>
`;function ge(t){return to(t)&&t.getAttribute("role")==="treeitem"}class at extends Pt{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>ge(this.parentElement),this.handleExpandCollapseButtonClick=e=>{!this.disabled&&!e.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,n){this.$fastController.isConnected&&this.items.forEach(r=>{ge(r)&&(r.nested=!0)})}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter(n=>ge(n));return e?e.length:0}}V([_({mode:"boolean"})],at.prototype,"expanded",void 0);V([_({mode:"boolean"})],at.prototype,"selected",void 0);V([_({mode:"boolean"})],at.prototype,"disabled",void 0);V([Dt],at.prototype,"focusable",void 0);V([Dt],at.prototype,"childItems",void 0);V([Dt],at.prototype,"items",void 0);V([Dt],at.prototype,"nested",void 0);V([Dt],at.prototype,"renderCollapsedChildren",void 0);Qn(at,Xi);const Gd=(t,e)=>Et`
    <template
        role="tree"
        ${Ot("treeView")}
        @keydown="${(n,r)=>n.handleKeyDown(r.event)}"
        @focusin="${(n,r)=>n.handleFocus(r.event)}"
        @focusout="${(n,r)=>n.handleBlur(r.event)}"
        @click="${(n,r)=>n.handleClick(r.event)}"
        @selected-change="${(n,r)=>n.handleSelectedChange(r.event)}"
    >
        <slot ${rs("slottedTreeItems")}></slot>
    </template>
`;class is extends Pt{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1)){if(e.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&at.focusItem(this.currentFocused);return}this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target)}},this.handleBlur=e=>{e.target instanceof HTMLElement&&(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const n=this.getVisibleNodes();switch(e.key){case wd:n.length&&at.focusItem(n[0]);return;case xd:n.length&&at.focusItem(n[n.length-1]);return;case vd:if(e.target&&this.isFocusableElement(e.target)){const r=e.target;r instanceof at&&r.childItemLength()>0&&r.expanded?r.expanded=!1:r instanceof at&&r.parentElement instanceof at&&at.focusItem(r.parentElement)}return!1;case md:if(e.target&&this.isFocusableElement(e.target)){const r=e.target;r instanceof at&&r.childItemLength()>0&&!r.expanded?r.expanded=!0:r instanceof at&&r.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case bd:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target);return;case yd:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target);return;case Za:this.handleClick(e);return}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!ge(e.target))return!0;const n=e.target;n.selected?(this.currentSelected&&this.currentSelected!==n&&(this.currentSelected.selected=!1),this.currentSelected=n):!n.selected&&this.currentSelected===n&&(this.currentSelected=null)},this.setItems=()=>{const e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(r=>{ge(r)&&(r.nested=this.nested)})},this.isFocusableElement=e=>ge(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),j.queueUpdate(()=>{this.setItems()})}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!ge(e.target))return!0;const n=e.target;n.disabled||(n.selected=!n.selected)}focusNextNode(e,n){const r=this.getVisibleNodes();if(!r)return;const s=r[r.indexOf(n)+e];to(s)&&at.focusItem(s)}getValidFocusableItem(){const e=this.getVisibleNodes();let n=e.findIndex(this.isSelectedElement);return n===-1&&(n=e.findIndex(this.isFocusableElement)),n!==-1?e[n]:null}checkForNestedItems(){return this.slottedTreeItems.some(e=>ge(e)&&e.querySelector("[role='treeitem']"))}getVisibleNodes(){return dd(this,"[role='treeitem']")||[]}}V([_({attribute:"render-collapsed-nodes"})],is.prototype,"renderCollapsedNodes",void 0);V([Dt],is.prototype,"currentSelected",void 0);V([Dt],is.prototype,"slottedTreeItems",void 0);class Yd{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:n}=this,r=this.constructListener(e);r.bind(n)(),n.addListener(r),this.listenerCache.set(e,r)}unbind(e){const n=this.listenerCache.get(e);n&&(this.query.removeListener(n),this.listenerCache.delete(e))}}class Xn extends Yd{constructor(e,n){super(e),this.styles=n}static with(e){return n=>new Xn(e,n)}constructListener(e){let n=!1;const r=this.styles;return function(){const{matches:i}=this;i&&!n?(e.$fastController.addStyles(r),n=i):!i&&n&&(e.$fastController.removeStyles(r),n=i)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const Fe=Xn.with(window.matchMedia("(forced-colors)"));Xn.with(window.matchMedia("(prefers-color-scheme: dark)"));Xn.with(window.matchMedia("(prefers-color-scheme: light)"));class Jd{constructor(e,n,r){this.propertyName=e,this.value=n,this.styles=r}bind(e){st.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){st.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,n){e[n]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}const ro="not-allowed",Qd=":host([hidden]){display:none}";function pn(t){return`${Qd}:host{display:${t}}`}const ae=gd()?"focus-visible":"focus";function Oe(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function Js(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function _e(t,e,n){return isNaN(t)?e:e+t*(n-e)}function Xd(t){const e=Math.round(Oe(t,0,255)).toString(16);return e.length===1?"0"+e:e}function pr(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function xt(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}class Wn{constructor(e,n,r){this.h=e,this.s=n,this.l=r}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new Wn(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Wn(xt(this.h,e),xt(this.s,e),xt(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class ht{constructor(e,n,r){this.l=e,this.a=n,this.b=r}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new ht(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new ht(xt(this.l,e),xt(this.a,e),xt(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}ht.epsilon=216/24389;ht.kappa=24389/27;class it{constructor(e,n,r,s){this.r=e,this.g=n,this.b=r,this.a=typeof s=="number"&&!isNaN(s)?s:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new it(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(_e(this.r,0,255))},${Math.round(_e(this.g,0,255))},${Math.round(_e(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(_e(this.r,0,255))},${Math.round(_e(this.g,0,255))},${Math.round(_e(this.b,0,255))},${Oe(this.a,0,1)})`}roundToPrecision(e){return new it(xt(this.r,e),xt(this.g,e),xt(this.b,e),xt(this.a,e))}clamp(){return new it(Oe(this.r,0,1),Oe(this.g,0,1),Oe(this.b,0,1),Oe(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return Xd(_e(e,0,255))}}class Rt{constructor(e,n,r){this.x=e,this.y=n,this.z=r}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new Rt(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Rt(xt(this.x,e),xt(this.y,e),xt(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}Rt.whitePoint=new Rt(.95047,1,1.08883);function Zd(t){return t.r*.2126+t.g*.7152+t.b*.0722}function ic(t){function e(n){return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return Zd(new it(e(t.r),e(t.g),e(t.b),1))}function Qs(t,e,n){return n-e===0?0:(t-e)/(n-e)}function Xs(t,e,n){const r=Qs(t.r,e.r,n.r),s=Qs(t.g,e.g,n.g),i=Qs(t.b,e.b,n.b);return(r+s+i)/3}function Kd(t,e,n=null){let r=0,s=n;return s!==null?r=Xs(t,e,s):(s=new it(0,0,0,1),r=Xs(t,e,s),r<=0&&(s=new it(1,1,1,1),r=Xs(t,e,s))),r=Math.round(r*1e3)/1e3,new it(s.r,s.g,s.b,r)}function $l(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),r=e-n;let s=0;r!==0&&(e===t.r?s=60*((t.g-t.b)/r%6):e===t.g?s=60*((t.b-t.r)/r+2):s=60*((t.r-t.g)/r+4)),s<0&&(s+=360);const i=(e+n)/2;let o=0;return r!==0&&(o=r/(1-Math.abs(2*i-1))),new Wn(s,o,i)}function tp(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,r=n*(1-Math.abs(t.h/60%2-1)),s=t.l-n/2;let i=0,o=0,l=0;return t.h<60?(i=n,o=r,l=0):t.h<120?(i=r,o=n,l=0):t.h<180?(i=0,o=n,l=r):t.h<240?(i=0,o=r,l=n):t.h<300?(i=r,o=0,l=n):t.h<360&&(i=n,o=0,l=r),new it(i+s,o+s,l+s,e)}function ep(t){const e=(t.l+16)/116,n=e+t.a/500,r=e-t.b/200,s=Math.pow(n,3),i=Math.pow(e,3),o=Math.pow(r,3);let l=0;s>ht.epsilon?l=s:l=(116*n-16)/ht.kappa;let a=0;t.l>ht.epsilon*ht.kappa?a=i:a=t.l/ht.kappa;let c=0;return o>ht.epsilon?c=o:c=(116*r-16)/ht.kappa,l=Rt.whitePoint.x*l,a=Rt.whitePoint.y*a,c=Rt.whitePoint.z*c,new Rt(l,a,c)}function np(t){function e(a){return a>ht.epsilon?Math.pow(a,1/3):(ht.kappa*a+16)/116}const n=e(t.x/Rt.whitePoint.x),r=e(t.y/Rt.whitePoint.y),s=e(t.z/Rt.whitePoint.z),i=116*r-16,o=500*(n-r),l=200*(r-s);return new ht(i,o,l)}function rp(t){function e(a){return a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}const n=e(t.r),r=e(t.g),s=e(t.b),i=n*.4124564+r*.3575761+s*.1804375,o=n*.2126729+r*.7151522+s*.072175,l=n*.0193339+r*.119192+s*.9503041;return new Rt(i,o,l)}function sp(t,e=1){function n(o){return o<=.0031308?o*12.92:1.055*Math.pow(o,1/2.4)-.055}const r=n(t.x*3.2404542-t.y*1.5371385-t.z*.4985314),s=n(t.x*-.969266+t.y*1.8760108+t.z*.041556),i=n(t.x*.0556434-t.y*.2040259+t.z*1.0572252);return new it(r,s,i,e)}function ip(t){return np(rp(t))}function Zs(t,e=1){return sp(ep(t),e)}var Fl;(function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"})(Fl||(Fl={}));function op(t,e){if(e.a>=1)return e;if(e.a<=0)return new it(t.r,t.g,t.b,1);const n=e.a*e.r+(1-e.a)*t.r,r=e.a*e.g+(1-e.a)*t.g,s=e.a*e.b+(1-e.a)*t.b;return new it(n,r,s,1)}function gr(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new it(pr(t,e.r,n.r),pr(t,e.g,n.g),pr(t,e.b,n.b),pr(t,e.a,n.a))}var Sl;(function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"})(Sl||(Sl={}));const lp=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function rn(t){const e=lp.exec(t);if(e===null)return null;let n=e[1];if(n.length===3){const s=n.charAt(0),i=n.charAt(1),o=n.charAt(2);n=s.concat(s,i,i,o,o)}const r=parseInt(n,16);return isNaN(r)?null:new it(Js((r&16711680)>>>16,0,255),Js((r&65280)>>>8,0,255),Js(r&255,0,255),1)}function Lr(t,e){const n=t.relativeLuminance>e.relativeLuminance?t:e,r=t.relativeLuminance>e.relativeLuminance?e:t;return(n.relativeLuminance+.05)/(r.relativeLuminance+.05)}const Wt=Object.freeze({create(t,e,n){return new Nr(t,e,n)},from(t){return new Nr(t.r,t.g,t.b)}});function ap(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const n in e)if(typeof e[n]!=typeof t[n])return!1;return!0}class Nr extends it{constructor(e,n,r){super(e,n,r,1),this.toColorString=this.toStringHexRGB,this.contrast=Lr.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ic(this)}static fromObject(e){return new Nr(e.r,e.g,e.b)}}function mi(t,e,n=0,r=t.length-1){if(r===n)return t[n];const s=Math.floor((r-n)/2)+n;return e(t[s])?mi(t,e,n,s):mi(t,e,s+1,r)}const cp=(-.1+Math.sqrt(.21))/2;function Zn(t){return t.relativeLuminance<=cp}function je(t){return Zn(t)?-1:1}const Cl={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function up(t,e,n){return typeof t=="number"?Gn.from(Wt.create(t,e,n)):Gn.from(t)}function hp(t,e){return ap(t)?Xt.from(t,e):Xt.from(Wt.create(t.r,t.g,t.b),e)}const Gn=Object.freeze({create:up,from:hp});class Xt{constructor(e,n){this.closestIndexCache=new Map,this.source=e,this.swatches=n,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,n,r,s){r===void 0&&(r=this.closestIndexOf(e));let i=this.swatches;const o=this.lastIndex;let l=r;s===void 0&&(s=je(e));const a=c=>Lr(e,c)>=n;return s===-1&&(i=this.reversedSwatches,l=o-l),mi(i,a,l,o)}get(e){return this.swatches[e]||this.swatches[Oe(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let n=this.swatches.indexOf(e);if(n!==-1)return this.closestIndexCache.set(e.relativeLuminance,n),n;const r=this.swatches.reduce((s,i)=>Math.abs(i.relativeLuminance-e.relativeLuminance)<Math.abs(s.relativeLuminance-e.relativeLuminance)?i:s);return n=this.swatches.indexOf(r),this.closestIndexCache.set(e.relativeLuminance,n),n}static saturationBump(e,n){const s=$l(e).s,i=$l(n);if(i.s<s){const o=new Wn(i.h,s,i.l);return tp(o)}return n}static ramp(e){const n=e/100;return n>.5?(n-.5)/.5:2*n}static createHighResolutionPalette(e){const n=[],r=ip(it.fromObject(e).roundToPrecision(4)),s=Zs(new ht(0,r.a,r.b)).clamp().roundToPrecision(4),i=Zs(new ht(50,r.a,r.b)).clamp().roundToPrecision(4),o=Zs(new ht(100,r.a,r.b)).clamp().roundToPrecision(4),l=new it(0,0,0),a=new it(1,1,1),c=o.equalValue(a)?0:14,h=s.equalValue(l)?0:14;for(let p=100+c;p>=0-h;p-=.5){let m;if(p<0){const D=p/h+1;m=gr(D,l,s)}else if(p<=50)m=gr(Xt.ramp(p),s,i);else if(p<=100)m=gr(Xt.ramp(p),i,o);else{const D=(p-100)/c;m=gr(D,o,a)}m=Xt.saturationBump(i,m).roundToPrecision(4),n.push(Wt.from(m))}return new Xt(e,n)}static adjustEnd(e,n,r,s){const i=s===-1?n.swatches:n.reversedSwatches,o=c=>{const h=n.closestIndexOf(c);return s===1?n.lastIndex-h:h};s===1&&r.reverse();const l=e(r[r.length-2]);if(xt(Lr(r[r.length-1],r[r.length-2]),2)<l){r.pop();const c=n.colorContrast(i[n.lastIndex],l,void 0,s),h=o(c),p=o(r[r.length-2]),m=h-p;let D=1;for(let E=r.length-m-1;E<r.length;E++){const R=o(r[E]),H=E===r.length-1?n.lastIndex:R+D;r[E]=i[H],D++}}s===1&&r.reverse()}static createColorPaletteByContrast(e,n){const r=Xt.createHighResolutionPalette(e),s=l=>{const a=n.stepContrast+n.stepContrast*(1-l.relativeLuminance)*n.stepContrastRamp;return xt(a,2)},i=[];let o=n.preserveSource?e:r.swatches[0];i.push(o);do{const l=s(o);o=r.colorContrast(o,l,void 0,1),i.push(o)}while(o.relativeLuminance>0);if(n.preserveSource){o=e;do{const l=s(o);o=r.colorContrast(o,l,void 0,-1),i.unshift(o)}while(o.relativeLuminance<1)}return this.adjustEnd(s,r,i,-1),n.preserveSource&&this.adjustEnd(s,r,i,1),i}static from(e,n){const r=n===void 0?Cl:Object.assign(Object.assign({},Cl),n);return new Xt(e,Object.freeze(Xt.createColorPaletteByContrast(e,r)))}}const Br=Wt.create(1,1,1),so=Wt.create(0,0,0),fp=Wt.create(.5,.5,.5),Ks=rn("#0078D4"),dp=Wt.create(Ks.r,Ks.g,Ks.b);function oc(t,e,n,r,s){const i=h=>h.contrast(Br)>=s?Br:so,o=i(t),l=i(e),a=o.relativeLuminance===l.relativeLuminance?o:i(n),c=i(r);return{rest:o,hover:l,active:a,focus:c}}class os{constructor(e,n,r,s){this.toColorString=()=>this.cssGradient,this.contrast=Lr.bind(null,this),this.createCSS=this.toColorString,this.color=new it(e,n,r),this.cssGradient=s,this.relativeLuminance=ic(this.color),this.r=e,this.g=n,this.b=r}static fromObject(e,n){return new os(e.r,e.g,e.b,n)}}const pp=new it(0,0,0),gp=new it(1,1,1);function lc(t,e,n,r,s,i,o,l,a=10,c=!1){const h=t.closestIndexOf(e);l===void 0&&(l=je(e));function p(q){if(c){const A=t.closestIndexOf(e),Ft=t.get(A),Gt=q.relativeLuminance<e.relativeLuminance?pp:gp,re=Kd(rn(q.toColorString()),rn(Ft.toColorString()),Gt).roundToPrecision(2),Lt=op(rn(e.toColorString()),re);return Wt.from(Lt)}else return q}const m=h+l*n,D=m+l*(r-n),E=m+l*(s-n),R=m+l*(i-n),H=l===-1?0:100-a,Z=l===-1?a:100;function z(q,A){const Ft=t.get(q);if(A){const Gt=t.get(q+l*o),re=l===-1?Gt:Ft,Lt=l===-1?Ft:Gt,mn=`linear-gradient(${p(re).toColorString()} ${H}%, ${p(Lt).toColorString()} ${Z}%)`;return os.fromObject(re,mn)}else return p(Ft)}return{rest:z(m,!0),hover:z(D,!0),active:z(E,!1),focus:z(R,!0)}}function bp(t,e,n,r,s,i,o,l){const a=t.closestIndexOf(e),c=je(e),h=a+c*n,p=h+c*(r-n),m=h+c*(s-n),D=h+c*(i-n),E=`calc(100% - ${l})`;function R(H,Z){const z=t.get(H);if(Z){const q=t.get(H+c*o),A=`linear-gradient(${z.toColorString()} ${E}, ${q.toColorString()} ${E}, ${q.toColorString()})`;return os.fromObject(z,A)}else return z}return{rest:R(h,!0),hover:R(p,!0),active:R(m,!1),focus:R(D,!0)}}function vp(t,e,n){return t.colorContrast(e,n)}function an(t,e,n,r,s,i,o,l){l==null&&(l=je(e));const a=t.closestIndexOf(t.colorContrast(e,n));return{rest:t.get(a+l*r),hover:t.get(a+l*s),active:t.get(a+l*i),focus:t.get(a+l*o)}}function mp(t,e,n,r,s,i,o,l=void 0,a,c,h,p,m,D=void 0){return Zn(e)?an(t,e,a,c,h,p,m,D):an(t,e,n,r,s,i,o,l)}function yp(t,e,n){return t.get(t.closestIndexOf(e)+je(e)*n)}function xe(t,e,n,r,s,i,o){const l=t.closestIndexOf(e);return o==null&&(o=je(e)),{rest:t.get(l+o*n),hover:t.get(l+o*r),active:t.get(l+o*s),focus:t.get(l+o*i)}}function io(t,e,n,r,s,i,o=void 0,l,a,c,h,p=void 0){return Zn(e)?xe(t,e,l,a,c,h,p):xe(t,e,n,r,s,i,o)}function wp(t,e){return Zn(e)?Br:so}function xp(t,e,n){return Zn(e)?so:Br}function $p(t){return Wt.create(t,t,t)}var yi;(function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"})(yi||(yi={}));function Kn(t,e){return t.closestIndexOf($p(e))}function Fp(t,e){return t.get(Kn(t,e))}function Sp(t,e,n){return t.get(Kn(t,e)+n)}function ac(t,e,n){return t.get(Kn(t,e)+n*-1)}function Cp(t,e,n){return t.get(Kn(t,e)+n*-1*2)}function Dp(t,e,n){return t.get(Kn(t,e)+n*-1*3)}const Tp={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:d}=K;function x(t){return K.create({name:t,cssCustomPropertyName:null})}const ti=d("direction").withDefault(vi.ltr),oo=d("disabled-opacity").withDefault(.3),cc=d("base-height-multiplier").withDefault(8);d("base-horizontal-spacing-multiplier").withDefault(3);const lo=d("density").withDefault(0),Mt=d("design-unit").withDefault(4),Be=d("control-corner-radius").withDefault(4),Vp=d("layer-corner-radius").withDefault(8),ze=d("stroke-width").withDefault(1),ce=d("focus-stroke-width").withDefault(2),ne=d("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Rp=d("font-weight").withDefault(Tp.Normal);function he(t){return e=>{const n=t.getValueFor(e),r=Rp.getValueFor(e);if(n.endsWith("px")){const s=Number.parseFloat(n.replace("px",""));if(s<=12)return`"wght" ${r}, "opsz" 8`;if(s>24)return`"wght" ${r}, "opsz" 36`}return`"wght" ${r}, "opsz" 10.5`}}const uc=d("type-ramp-base-font-size").withDefault("14px"),_p=d("type-ramp-base-line-height").withDefault("20px"),kp=d("type-ramp-base-font-variations").withDefault(he(uc)),hc=d("type-ramp-minus-1-font-size").withDefault("12px"),Ip=d("type-ramp-minus-1-line-height").withDefault("16px"),Ep=d("type-ramp-minus-1-font-variations").withDefault(he(hc)),fc=d("type-ramp-minus-2-font-size").withDefault("10px"),Op=d("type-ramp-minus-2-line-height").withDefault("14px"),Pp=d("type-ramp-minus-2-font-variations").withDefault(he(fc)),dc=d("type-ramp-plus-1-font-size").withDefault("16px"),Ap=d("type-ramp-plus-1-line-height").withDefault("22px"),Lp=d("type-ramp-plus-1-font-variations").withDefault(he(dc)),pc=d("type-ramp-plus-2-font-size").withDefault("20px"),Np=d("type-ramp-plus-2-line-height").withDefault("26px"),Bp=d("type-ramp-plus-2-font-variations").withDefault(he(pc)),gc=d("type-ramp-plus-3-font-size").withDefault("24px"),Mp=d("type-ramp-plus-3-line-height").withDefault("32px"),Hp=d("type-ramp-plus-3-font-variations").withDefault(he(gc)),bc=d("type-ramp-plus-4-font-size").withDefault("28px"),jp=d("type-ramp-plus-4-line-height").withDefault("36px"),zp=d("type-ramp-plus-4-font-variations").withDefault(he(bc)),vc=d("type-ramp-plus-5-font-size").withDefault("32px"),Up=d("type-ramp-plus-5-line-height").withDefault("40px"),qp=d("type-ramp-plus-5-font-variations").withDefault(he(vc)),mc=d("type-ramp-plus-6-font-size").withDefault("40px"),Wp=d("type-ramp-plus-6-line-height").withDefault("52px"),Gp=d("type-ramp-plus-6-font-variations").withDefault(he(mc)),gn=d("base-layer-luminance").withDefault(yi.LightMode),Dl=x("accent-fill-rest-delta").withDefault(0),Tl=x("accent-fill-hover-delta").withDefault(-2),Vl=x("accent-fill-active-delta").withDefault(-5),Rl=x("accent-fill-focus-delta").withDefault(0),Yp=x("accent-foreground-rest-delta").withDefault(0),Jp=x("accent-foreground-hover-delta").withDefault(3),Qp=x("accent-foreground-active-delta").withDefault(-8),Xp=x("accent-foreground-focus-delta").withDefault(0),Zp=x("neutral-fill-rest-delta").withDefault(-1),Kp=x("neutral-fill-hover-delta").withDefault(1),tg=x("neutral-fill-active-delta").withDefault(0),eg=x("neutral-fill-focus-delta").withDefault(0),ng=x("neutral-fill-input-rest-delta").withDefault(-1),rg=x("neutral-fill-input-hover-delta").withDefault(1),sg=x("neutral-fill-input-active-delta").withDefault(0),ig=x("neutral-fill-input-focus-delta").withDefault(-2),br=x("neutral-fill-input-alt-rest-delta").withDefault(2),_l=x("neutral-fill-input-alt-hover-delta").withDefault(4),kl=x("neutral-fill-input-alt-active-delta").withDefault(6),Il=x("neutral-fill-input-alt-focus-delta").withDefault(2),He=x("neutral-fill-layer-rest-delta").withDefault(-2),og=x("neutral-fill-layer-hover-delta").withDefault(-3),lg=x("neutral-fill-layer-active-delta").withDefault(-3),vr=x("neutral-fill-layer-alt-rest-delta").withDefault(-1),ag=x("neutral-fill-secondary-rest-delta").withDefault(3),cg=x("neutral-fill-secondary-hover-delta").withDefault(2),ug=x("neutral-fill-secondary-active-delta").withDefault(1),hg=x("neutral-fill-secondary-focus-delta").withDefault(3),fg=x("neutral-fill-stealth-rest-delta").withDefault(0),dg=x("neutral-fill-stealth-hover-delta").withDefault(3),pg=x("neutral-fill-stealth-active-delta").withDefault(2),gg=x("neutral-fill-stealth-focus-delta").withDefault(0),bg=x("neutral-fill-strong-rest-delta").withDefault(0),vg=x("neutral-fill-strong-hover-delta").withDefault(8),mg=x("neutral-fill-strong-active-delta").withDefault(-5),yg=x("neutral-fill-strong-focus-delta").withDefault(0),wg=x("neutral-stroke-rest-delta").withDefault(8),xg=x("neutral-stroke-hover-delta").withDefault(12),$g=x("neutral-stroke-active-delta").withDefault(6),Fg=x("neutral-stroke-focus-delta").withDefault(8),yc=x("neutral-stroke-control-rest-delta").withDefault(3),wc=x("neutral-stroke-control-hover-delta").withDefault(5),xc=x("neutral-stroke-control-active-delta").withDefault(5),$c=x("neutral-stroke-control-focus-delta").withDefault(5),Sg=x("neutral-stroke-divider-rest-delta").withDefault(4),El=x("neutral-stroke-layer-rest-delta").withDefault(3),Cg=x("neutral-stroke-layer-hover-delta").withDefault(3),Dg=x("neutral-stroke-layer-active-delta").withDefault(3),Tg=x("neutral-stroke-strong-hover-delta").withDefault(0),Vg=x("neutral-stroke-strong-active-delta").withDefault(0),Rg=x("neutral-stroke-strong-focus-delta").withDefault(0),_g=d("neutral-base-color").withDefault(fp),Q=x("neutral-palette").withDefault(t=>Gn.from(_g.getValueFor(t))),kg=d("accent-base-color").withDefault(dp),ao=x("accent-palette").withDefault(t=>Gn.from(kg.getValueFor(t))),Ig=x("neutral-layer-card-container-recipe").withDefault({evaluate:t=>ac(Q.getValueFor(t),gn.getValueFor(t),He.getValueFor(t))});d("neutral-layer-card-container").withDefault(t=>Ig.getValueFor(t).evaluate(t));const Eg=x("neutral-layer-floating-recipe").withDefault({evaluate:t=>Sp(Q.getValueFor(t),gn.getValueFor(t),He.getValueFor(t))});d("neutral-layer-floating").withDefault(t=>Eg.getValueFor(t).evaluate(t));const Og=x("neutral-layer-1-recipe").withDefault({evaluate:t=>Fp(Q.getValueFor(t),gn.getValueFor(t))}),Pg=d("neutral-layer-1").withDefault(t=>Og.getValueFor(t).evaluate(t)),Ag=x("neutral-layer-2-recipe").withDefault({evaluate:t=>ac(Q.getValueFor(t),gn.getValueFor(t),He.getValueFor(t))});d("neutral-layer-2").withDefault(t=>Ag.getValueFor(t).evaluate(t));const Lg=x("neutral-layer-3-recipe").withDefault({evaluate:t=>Cp(Q.getValueFor(t),gn.getValueFor(t),He.getValueFor(t))});d("neutral-layer-3").withDefault(t=>Lg.getValueFor(t).evaluate(t));const Ng=x("neutral-layer-4-recipe").withDefault({evaluate:t=>Dp(Q.getValueFor(t),gn.getValueFor(t),He.getValueFor(t))});d("neutral-layer-4").withDefault(t=>Ng.getValueFor(t).evaluate(t));const Y=d("fill-color").withDefault(t=>Pg.getValueFor(t));var Mr;(function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"})(Mr||(Mr={}));const ls=x("accent-fill-recipe").withDefault({evaluate:(t,e)=>mp(ao.getValueFor(t),e||Y.getValueFor(t),5,Dl.getValueFor(t),Tl.getValueFor(t),Vl.getValueFor(t),Rl.getValueFor(t),void 0,8,Dl.getValueFor(t),Tl.getValueFor(t),Vl.getValueFor(t),Rl.getValueFor(t),void 0)}),me=d("accent-fill-rest").withDefault(t=>ls.getValueFor(t).evaluate(t).rest),cn=d("accent-fill-hover").withDefault(t=>ls.getValueFor(t).evaluate(t).hover),un=d("accent-fill-active").withDefault(t=>ls.getValueFor(t).evaluate(t).active),as=d("accent-fill-focus").withDefault(t=>ls.getValueFor(t).evaluate(t).focus),cs=x("foreground-on-accent-recipe").withDefault({evaluate:t=>oc(me.getValueFor(t),cn.getValueFor(t),un.getValueFor(t),as.getValueFor(t),Mr.normal)}),Bg=d("foreground-on-accent-rest").withDefault(t=>cs.getValueFor(t).evaluate(t).rest),Mg=d("foreground-on-accent-hover").withDefault(t=>cs.getValueFor(t).evaluate(t).hover),Hg=d("foreground-on-accent-active").withDefault(t=>cs.getValueFor(t).evaluate(t).active);d("foreground-on-accent-focus").withDefault(t=>cs.getValueFor(t).evaluate(t).focus);const us=x("accent-foreground-recipe").withDefault({evaluate:(t,e)=>an(ao.getValueFor(t),e||Y.getValueFor(t),9.5,Yp.getValueFor(t),Jp.getValueFor(t),Qp.getValueFor(t),Xp.getValueFor(t))}),jg=d("accent-foreground-rest").withDefault(t=>us.getValueFor(t).evaluate(t).rest),zg=d("accent-foreground-hover").withDefault(t=>us.getValueFor(t).evaluate(t).hover),Ug=d("accent-foreground-active").withDefault(t=>us.getValueFor(t).evaluate(t).active);d("accent-foreground-focus").withDefault(t=>us.getValueFor(t).evaluate(t).focus);const hs=x("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>lc(Q.getValueFor(t),e||Y.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)}),qg=d("accent-stroke-control-rest").withDefault(t=>hs.getValueFor(t).evaluate(t,me.getValueFor(t)).rest),Wg=d("accent-stroke-control-hover").withDefault(t=>hs.getValueFor(t).evaluate(t,cn.getValueFor(t)).hover),Gg=d("accent-stroke-control-active").withDefault(t=>hs.getValueFor(t).evaluate(t,un.getValueFor(t)).active);d("accent-stroke-control-focus").withDefault(t=>hs.getValueFor(t).evaluate(t,as.getValueFor(t)).focus);const fs=x("neutral-fill-recipe").withDefault({evaluate:(t,e)=>io(Q.getValueFor(t),e||Y.getValueFor(t),Zp.getValueFor(t),Kp.getValueFor(t),tg.getValueFor(t),eg.getValueFor(t),void 0,2,3,1,2,void 0)}),mr=d("neutral-fill-rest").withDefault(t=>fs.getValueFor(t).evaluate(t).rest),Ol=d("neutral-fill-hover").withDefault(t=>fs.getValueFor(t).evaluate(t).hover),Pl=d("neutral-fill-active").withDefault(t=>fs.getValueFor(t).evaluate(t).active);d("neutral-fill-focus").withDefault(t=>fs.getValueFor(t).evaluate(t).focus);const bn=x("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>io(Q.getValueFor(t),e||Y.getValueFor(t),ng.getValueFor(t),rg.getValueFor(t),sg.getValueFor(t),ig.getValueFor(t),void 0,2,3,1,0,void 0)}),yr=d("neutral-fill-input-rest").withDefault(t=>bn.getValueFor(t).evaluate(t).rest),Al=d("neutral-fill-input-hover").withDefault(t=>bn.getValueFor(t).evaluate(t).hover);d("neutral-fill-input-active").withDefault(t=>bn.getValueFor(t).evaluate(t).active);const Ll=d("neutral-fill-input-focus").withDefault(t=>bn.getValueFor(t).evaluate(t).focus),ds=x("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>io(Q.getValueFor(t),e||Y.getValueFor(t),br.getValueFor(t),_l.getValueFor(t),kl.getValueFor(t),Il.getValueFor(t),1,br.getValueFor(t),br.getValueFor(t)-_l.getValueFor(t),br.getValueFor(t)-kl.getValueFor(t),Il.getValueFor(t),1)});d("neutral-fill-input-alt-rest").withDefault(t=>ds.getValueFor(t).evaluate(t).rest);d("neutral-fill-input-alt-hover").withDefault(t=>ds.getValueFor(t).evaluate(t).hover);d("neutral-fill-input-alt-active").withDefault(t=>ds.getValueFor(t).evaluate(t).active);d("neutral-fill-input-alt-focus").withDefault(t=>ds.getValueFor(t).evaluate(t).focus);const ps=x("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>xe(Q.getValueFor(t),e||Y.getValueFor(t),He.getValueFor(t),og.getValueFor(t),lg.getValueFor(t),He.getValueFor(t),1)});d("neutral-fill-layer-rest").withDefault(t=>ps.getValueFor(t).evaluate(t).rest);d("neutral-fill-layer-hover").withDefault(t=>ps.getValueFor(t).evaluate(t).hover);d("neutral-fill-layer-active").withDefault(t=>ps.getValueFor(t).evaluate(t).active);const Yg=x("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>xe(Q.getValueFor(t),e||Y.getValueFor(t),vr.getValueFor(t),vr.getValueFor(t),vr.getValueFor(t),vr.getValueFor(t))});d("neutral-fill-layer-alt-rest").withDefault(t=>Yg.getValueFor(t).evaluate(t).rest);const Ue=x("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>xe(Q.getValueFor(t),e||Y.getValueFor(t),ag.getValueFor(t),cg.getValueFor(t),ug.getValueFor(t),hg.getValueFor(t))}),wi=d("neutral-fill-secondary-rest").withDefault(t=>Ue.getValueFor(t).evaluate(t).rest),Jg=d("neutral-fill-secondary-hover").withDefault(t=>Ue.getValueFor(t).evaluate(t).hover);d("neutral-fill-secondary-active").withDefault(t=>Ue.getValueFor(t).evaluate(t).active);const Qg=d("neutral-fill-secondary-focus").withDefault(t=>Ue.getValueFor(t).evaluate(t).focus),vn=x("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>xe(Q.getValueFor(t),e||Y.getValueFor(t),fg.getValueFor(t),dg.getValueFor(t),pg.getValueFor(t),gg.getValueFor(t))}),Yn=d("neutral-fill-stealth-rest").withDefault(t=>vn.getValueFor(t).evaluate(t).rest),co=d("neutral-fill-stealth-hover").withDefault(t=>vn.getValueFor(t).evaluate(t).hover),uo=d("neutral-fill-stealth-active").withDefault(t=>vn.getValueFor(t).evaluate(t).active);d("neutral-fill-stealth-focus").withDefault(t=>vn.getValueFor(t).evaluate(t).focus);const gs=x("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>an(Q.getValueFor(t),e||Y.getValueFor(t),4.5,bg.getValueFor(t),vg.getValueFor(t),mg.getValueFor(t),yg.getValueFor(t))});d("neutral-fill-strong-rest").withDefault(t=>gs.getValueFor(t).evaluate(t).rest);d("neutral-fill-strong-hover").withDefault(t=>gs.getValueFor(t).evaluate(t).hover);d("neutral-fill-strong-active").withDefault(t=>gs.getValueFor(t).evaluate(t).active);d("neutral-fill-strong-focus").withDefault(t=>gs.getValueFor(t).evaluate(t).focus);const bs=x("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>an(Q.getValueFor(t),e||Y.getValueFor(t),16,0,-19,-30,0)}),Jn=d("neutral-foreground-rest").withDefault(t=>bs.getValueFor(t).evaluate(t).rest);d("neutral-foreground-hover").withDefault(t=>bs.getValueFor(t).evaluate(t).hover);d("neutral-foreground-active").withDefault(t=>bs.getValueFor(t).evaluate(t).active);d("neutral-foreground-focus").withDefault(t=>bs.getValueFor(t).evaluate(t).focus);const tr=x("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>vp(Q.getValueFor(t),e||Y.getValueFor(t),4.5)});d("neutral-foreground-hint").withDefault(t=>tr.getValueFor(t).evaluate(t));const vs=x("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>xe(Q.getValueFor(t),e||Y.getValueFor(t),wg.getValueFor(t),xg.getValueFor(t),$g.getValueFor(t),Fg.getValueFor(t))}),Hr=d("neutral-stroke-rest").withDefault(t=>vs.getValueFor(t).evaluate(t).rest),Xg=d("neutral-stroke-hover").withDefault(t=>vs.getValueFor(t).evaluate(t).hover),Zg=d("neutral-stroke-active").withDefault(t=>vs.getValueFor(t).evaluate(t).active);d("neutral-stroke-focus").withDefault(t=>vs.getValueFor(t).evaluate(t).focus);const ms=x("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>lc(Q.getValueFor(t),e||Y.getValueFor(t),yc.getValueFor(t),wc.getValueFor(t),xc.getValueFor(t),$c.getValueFor(t),5)}),Kg=d("neutral-stroke-control-rest").withDefault(t=>ms.getValueFor(t).evaluate(t).rest),tb=d("neutral-stroke-control-hover").withDefault(t=>ms.getValueFor(t).evaluate(t).hover),eb=d("neutral-stroke-control-active").withDefault(t=>ms.getValueFor(t).evaluate(t).active);d("neutral-stroke-control-focus").withDefault(t=>ms.getValueFor(t).evaluate(t).focus);const nb=x("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>yp(Q.getValueFor(t),e||Y.getValueFor(t),Sg.getValueFor(t))}),rb=d("neutral-stroke-divider-rest").withDefault(t=>nb.getValueFor(t).evaluate(t)),ys=x("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>bp(Q.getValueFor(t),e||Y.getValueFor(t),yc.getValueFor(t),wc.getValueFor(t),xc.getValueFor(t),$c.getValueFor(t),20,ze.getValueFor(t)+"px")}),Nl=d("neutral-stroke-input-rest").withDefault(t=>ys.getValueFor(t).evaluate(t).rest),sb=d("neutral-stroke-input-hover").withDefault(t=>ys.getValueFor(t).evaluate(t).hover);d("neutral-stroke-input-active").withDefault(t=>ys.getValueFor(t).evaluate(t).active);d("neutral-stroke-input-focus").withDefault(t=>ys.getValueFor(t).evaluate(t).focus);const ho=x("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>xe(Q.getValueFor(t),e||Y.getValueFor(t),El.getValueFor(t),Cg.getValueFor(t),Dg.getValueFor(t),El.getValueFor(t))}),ib=d("neutral-stroke-layer-rest").withDefault(t=>ho.getValueFor(t).evaluate(t).rest);d("neutral-stroke-layer-hover").withDefault(t=>ho.getValueFor(t).evaluate(t).hover);d("neutral-stroke-layer-active").withDefault(t=>ho.getValueFor(t).evaluate(t).active);const ws=x("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>an(Q.getValueFor(t),e||Y.getValueFor(t),5.5,0,Tg.getValueFor(t),Vg.getValueFor(t),Rg.getValueFor(t))});d("neutral-stroke-strong-rest").withDefault(t=>ws.getValueFor(t).evaluate(t).rest);d("neutral-stroke-strong-hover").withDefault(t=>ws.getValueFor(t).evaluate(t).hover);d("neutral-stroke-strong-active").withDefault(t=>ws.getValueFor(t).evaluate(t).active);d("neutral-stroke-strong-focus").withDefault(t=>ws.getValueFor(t).evaluate(t).focus);const ob=x("focus-stroke-outer-recipe").withDefault({evaluate:t=>wp(Q.getValueFor(t),Y.getValueFor(t))}),fo=d("focus-stroke-outer").withDefault(t=>ob.getValueFor(t).evaluate(t)),lb=x("focus-stroke-inner-recipe").withDefault({evaluate:t=>xp(ao.getValueFor(t),Y.getValueFor(t),fo.getValueFor(t))}),ab=d("focus-stroke-inner").withDefault(t=>lb.getValueFor(t).evaluate(t)),xs=x("foreground-on-accent-large-recipe").withDefault({evaluate:t=>oc(me.getValueFor(t),cn.getValueFor(t),un.getValueFor(t),as.getValueFor(t),Mr.large)});d("foreground-on-accent-rest-large").withDefault(t=>xs.getValueFor(t).evaluate(t).rest);d("foreground-on-accent-hover-large").withDefault(t=>xs.getValueFor(t).evaluate(t,cn.getValueFor(t)).hover);d("foreground-on-accent-active-large").withDefault(t=>xs.getValueFor(t).evaluate(t,un.getValueFor(t)).active);d("foreground-on-accent-focus-large").withDefault(t=>xs.getValueFor(t).evaluate(t,as.getValueFor(t)).focus);const cb=d("neutral-fill-inverse-rest-delta").withDefault(0),ub=d("neutral-fill-inverse-hover-delta").withDefault(-3),hb=d("neutral-fill-inverse-active-delta").withDefault(7),fb=d("neutral-fill-inverse-focus-delta").withDefault(0);function db(t,e,n,r,s,i){const o=je(e),l=t.closestIndexOf(t.colorContrast(e,14)),a=l+o*Math.abs(n-r),c=o===1?n<r:o*n>o*r;let h,p;return c?(h=l,p=a):(h=a,p=l),{rest:t.get(h),hover:t.get(p),active:t.get(h+o*s),focus:t.get(h+o*i)}}const $s=x("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>db(Q.getValueFor(t),e||Y.getValueFor(t),cb.getValueFor(t),ub.getValueFor(t),hb.getValueFor(t),fb.getValueFor(t))});d("neutral-fill-inverse-rest").withDefault(t=>$s.getValueFor(t).evaluate(t).rest);d("neutral-fill-inverse-hover").withDefault(t=>$s.getValueFor(t).evaluate(t).hover);d("neutral-fill-inverse-active").withDefault(t=>$s.getValueFor(t).evaluate(t).active);d("neutral-fill-inverse-focus").withDefault(t=>$s.getValueFor(t).evaluate(t).focus);const jr=_t`
  font-family: ${ne};
  font-size: ${uc};
  line-height: ${_p};
  font-weight: initial;
  font-variation-settings: ${kp};
`;_t`
  font-family: ${ne};
  font-size: ${hc};
  line-height: ${Ip};
  font-weight: initial;
  font-variation-settings: ${Ep};
`;_t`
  font-family: ${ne};
  font-size: ${fc};
  line-height: ${Op};
  font-weight: initial;
  font-variation-settings: ${Pp};
`;_t`
  font-family: ${ne};
  font-size: ${dc};
  line-height: ${Ap};
  font-weight: initial;
  font-variation-settings: ${Lp};
`;_t`
  font-family: ${ne};
  font-size: ${pc};
  line-height: ${Np};
  font-weight: initial;
  font-variation-settings: ${Bp};
`;_t`
  font-family: ${ne};
  font-size: ${gc};
  line-height: ${Mp};
  font-weight: initial;
  font-variation-settings: ${Hp};
`;_t`
  font-family: ${ne};
  font-size: ${bc};
  line-height: ${jp};
  font-weight: initial;
  font-variation-settings: ${zp};
`;_t`
  font-family: ${ne};
  font-size: ${vc};
  line-height: ${Up};
  font-weight: initial;
  font-variation-settings: ${qp};
`;_t`
  font-family: ${ne};
  font-size: ${mc};
  line-height: ${Wp};
  font-weight: initial;
  font-variation-settings: ${Gp};
`;const po=_t`
  outline: calc(${ce} * 1px) solid ${fo};
  outline-offset: calc(${ce} * -1px);
`;_t`
  outline: calc(${ce} * 1px) solid ${fo};
  outline-offset: calc(${ze} * 1px);
`;const Ht=_t`(${cc} + ${lo}) * ${Mt}`;function Fs(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}class pb{constructor(e,n){this.cache=new WeakMap,this.ltr=e,this.rtl=n}bind(e){this.attach(e)}unbind(e){const n=this.cache.get(e);n&&ti.unsubscribe(n)}attach(e){const n=this.cache.get(e)||new gb(this.ltr,this.rtl,e),r=ti.getValueFor(e);ti.subscribe(n),n.attach(r),this.cache.set(e,n)}}class gb{constructor(e,n,r){this.ltr=e,this.rtl=n,this.source=r,this.attached=null}handleChange({target:e,token:n}){this.attach(n.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const qe=K.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,n)=>{let r=.12,s=.14;e>16&&(r=.2,s=.24);const i=`0 0 2px rgba(0, 0, 0, ${r})`,o=`0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${s})`;return`${i}, ${o}`}}),bb=K.create("elevation-shadow-card-rest-size").withDefault(4),vb=K.create("elevation-shadow-card-hover-size").withDefault(8),mb=K.create("elevation-shadow-card-active-size").withDefault(0),yb=K.create("elevation-shadow-card-focus-size").withDefault(8),wb=K.create("elevation-shadow-card-rest").withDefault(t=>qe.getValueFor(t).evaluate(t,bb.getValueFor(t)));K.create("elevation-shadow-card-hover").withDefault(t=>qe.getValueFor(t).evaluate(t,vb.getValueFor(t)));K.create("elevation-shadow-card-active").withDefault(t=>qe.getValueFor(t).evaluate(t,mb.getValueFor(t)));K.create("elevation-shadow-card-focus").withDefault(t=>qe.getValueFor(t).evaluate(t,yb.getValueFor(t)));const xb=K.create("elevation-shadow-tooltip-size").withDefault(16);K.create("elevation-shadow-tooltip").withDefault(t=>qe.getValueFor(t).evaluate(t,xb.getValueFor(t)));const $b=K.create("elevation-shadow-flyout-size").withDefault(32);K.create("elevation-shadow-flyout").withDefault(t=>qe.getValueFor(t).evaluate(t,$b.getValueFor(t)));const Fb=K.create("elevation-shadow-dialog-size").withDefault(128);K.create("elevation-shadow-dialog").withDefault(t=>qe.getValueFor(t).evaluate(t,Fb.getValueFor(t)));const Sb=(t,e,n,r="[disabled]")=>J`
    ${pn("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${jr}
      height: calc(${Ht} * 1px);
      min-width: calc(${Ht} * 1px);
      color: ${Jn};
      border-radius: calc(${Be} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${ze} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Mt} * 2 * ${lo})) * 1px);
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

    .control:${ae} {
      ${po}
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
  `,Cb=(t,e,n,r="[disabled]")=>J`
    .control {
      background: padding-box linear-gradient(${mr}, ${mr}),
        border-box ${Kg};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${Ol}, ${Ol}),
        border-box ${tb};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${Pl}, ${Pl}),
        border-box ${eb};
    }

    :host(${r}) .control {
      background: padding-box linear-gradient(${mr}, ${mr}),
        border-box ${Hr};
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

        .control:${ae} {
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
    `)),Db=(t,e,n,r="[disabled]")=>J`
    .control {
      background: padding-box linear-gradient(${me}, ${me}),
        border-box ${qg};
      color: ${Bg};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${cn}, ${cn}),
        border-box ${Wg};
      color: ${Mg};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${un}, ${un}),
        border-box ${Gg};
      color: ${Hg};
    }

    :host(${r}) .control {
      background: ${me};
    }

    .control:${ae} {
      box-shadow: 0 0 0 calc(${ce} * 1px) ${ab} inset !important;
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

        .control:${ae} {
          outline-color: ${F.CanvasText};
          box-shadow: 0 0 0 calc(${ce} * 1px) ${F.HighlightText} inset !important;
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
      `)),Tb=(t,e,n,r="[disabled]")=>J`
    :host {
      color: ${jg};
    }

    .control {
      background: ${Yn};
    }

    :host(${n}:hover) .control {
      background: ${co};
      color: ${zg};
    }

    :host(${n}:active) .control {
      background: ${uo};
      color: ${Ug};
    }

    :host(${r}) .control {
      background: ${Yn};
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

        .control:${ae} {
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
      `)),Vb=(t,e,n,r="[disabled]")=>J`
    .control {
      background: transparent !important;
      border-color: ${Hr};
    }

    :host(${n}:hover) .control {
      border-color: ${Xg};
    }

    :host(${n}:active) .control {
      border-color: ${Zg};
    }

    :host(${r}) .control {
      background: transparent !important;
      border-color: ${Hr};
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

        .control:${ae} {
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
      `)),Rb=(t,e,n,r="[disabled]")=>J`
    .control {
      background: ${Yn};
    }

    :host(${n}:hover) .control {
      background: ${co};
    }

    :host(${n}:active) .control {
      background: ${uo};
    }

    :host(${r}) .control {
      background: ${Yn};
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
        
        .control:${ae} {
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
      `)),_b=K.create("input-placeholder-rest").withDefault(t=>{const e=bn.getValueFor(t);return tr.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),kb=K.create("input-placeholder-hover").withDefault(t=>{const e=bn.getValueFor(t);return tr.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),Ib=K.create("input-filled-placeholder-rest").withDefault(t=>{const e=Ue.getValueFor(t);return tr.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),Eb=K.create("input-filled-placeholder-hover").withDefault(t=>{const e=Ue.getValueFor(t);return tr.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),Ob=(t,e,n)=>J`
  :host {
    ${jr}
    color: ${Jn};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${n} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${ze} * 1px) solid transparent;
    border-radius: calc(${Be} * 1px);
    height: calc(${Ht} * 1px);
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
    color: ${Jn};
    cursor: pointer;
    ${jr}
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
    cursor: ${ro};
  }

  :host([disabled]) {
    opacity: ${oo};
  }
`,Pb=(t,e,n)=>J`
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
      height: calc(${ce} * 1px);
      bottom: 0;
      border-bottom: calc(${ce} * 1px) solid ${me};
      border-bottom-left-radius: calc(${Be} * 1px);
      border-bottom-right-radius: calc(${Be} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Ab=(t,e,n,r=":not([disabled]):not(:focus-within)")=>J`
  ${n} {
    background: padding-box linear-gradient(${yr}, ${yr}),
      border-box ${Nl};
  }

  :host(${r}:hover) ${n} {
    background: padding-box linear-gradient(${Al}, ${Al}),
      border-box ${sb};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: padding-box linear-gradient(${Ll}, ${Ll}),
      border-box ${Nl};
  }
  
  :host([disabled]) ${n} {
    background: padding-box linear-gradient(${yr}, ${yr}),
      border-box ${Hr};
  }

  .control::placeholder {
    color: ${_b};
  }

  :host(${r}:hover) .control::placeholder {
    color: ${kb};
  }
`,Lb=(t,e,n,r=":not([disabled]):not(:focus-within)")=>J`
  ${n} {
    background: ${wi};
  }

  :host(${r}:hover) ${n} {
    background: ${Jg};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: ${Qg};
  }

  :host([disabled]) ${n} {
    background: ${wi};
  }

  .control::placeholder {
    color: ${Ib};
  }

  :host(${r}:hover) .control::placeholder {
    color: ${Eb};
  }
`,Nb=(t,e,n,r=":not([disabled]):not(:focus-within)")=>J`
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
    ${po}
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
`;function Pe(t,e){return new Jd("appearance",t,e)}const ke=":not([disabled])",de="[disabled]",Bb=(t,e)=>J`
    :host(${ke}) .control {
      cursor: pointer;
    }

    :host(${de}) .control {
      cursor: ${ro};
    }

    @media (forced-colors: none) {
      :host(${de}) .control {
        opacity: ${oo};
      }
    }

    ${Sb(t,e,ke,de)}
  `.withBehaviors(Pe("neutral",Cb(t,e,ke,de)),Pe("accent",Db(t,e,ke,de)),Pe("lightweight",Tb(t,e,ke,de)),Pe("outline",Vb(t,e,ke,de)),Pe("stealth",Rb(t,e,ke,de)));class Fc extends At{appearanceChanged(e,n){e!==n&&(this.classList.add(n),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);e.length===1&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}Fs([_],Fc.prototype,"appearance",void 0);const Mb=Fc.compose({baseName:"button",baseClass:At,template:$d,styles:Bb,shadowOptions:{delegatesFocus:!0}}),Hb=(t,e)=>J`
    ${pn("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Y};
      color: ${Jn};
      border: calc(${ze} * 1px) solid ${ib};
      border-radius: calc(${Vp} * 1px);
      box-shadow: ${wb};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Fe(J`
        :host {
          background: ${F.Canvas};
          color: ${F.CanvasText};
        }
      `));class go extends tc{cardFillColorChanged(e,n){if(n){const r=rn(n);r!==null&&(this.neutralPaletteSource=n,Y.setValueFor(this,Wt.create(r.r,r.g,r.b)))}}neutralPaletteSourceChanged(e,n){if(n){const r=rn(n),s=Wt.create(r.r,r.g,r.b);Q.setValueFor(this,Gn.create(s))}}handleChange(e,n){this.cardFillColor||Y.setValueFor(this,r=>ps.getValueFor(r).evaluate(r,Y.getValueFor(e)).rest)}connectedCallback(){super.connectedCallback();const e=Ar(this);if(e){const n=st.getNotifier(e);n.subscribe(this,"fillColor"),n.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}Fs([_({attribute:"card-fill-color",mode:"fromView"})],go.prototype,"cardFillColor",void 0);Fs([_({attribute:"neutral-palette-source",mode:"fromView"})],go.prototype,"neutralPaletteSource",void 0);const jb=go.compose({baseName:"card",baseClass:tc,template:Cd,styles:Hb}),zb=(t,e)=>J`
    ${pn("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${ze} * 1px) solid ${rb};
    }
  `,Ub=no.compose({baseName:"divider",template:Bd,styles:zb}),wr=".root",qb=(t,e)=>J`
    ${pn("inline-block")}

    ${Ob(t,e,wr)}

    ${Pb()}

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
      padding: 0 calc(${Mt} * 2px + 1px);
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
  `.withBehaviors(Pe("outline",Ab(t,e,wr)),Pe("filled",Lb(t,e,wr)),Fe(Nb(t,e,wr)));class Sc extends Tt{appearanceChanged(e,n){e!==n&&(this.classList.add(n),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}Fs([_],Sc.prototype,"appearance",void 0);const Wb=Sc.compose({baseName:"text-field",baseClass:Tt,template:qd,styles:qb,shadowOptions:{delegatesFocus:!0}}),Gb=(t,e)=>J`
  :host([hidden]) {
    display: none;
  }

  ${pn("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,Yb=is.compose({baseName:"tree-view",template:Gd,styles:Gb}),Jb=J`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${Ht} * -1px));
  }
  :host([selected])::after {
    left: calc(${ce} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Qb=J`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${Ht} * -1px));
  }
  :host([selected])::after {
    right: calc(${ce} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Bl=_t`((${cc} / 2) * ${Mt}) + ((${Mt} * ${lo}) / 2)`,Xb=K.create("tree-item-expand-collapse-hover").withDefault(t=>{const e=vn.getValueFor(t);return e.evaluate(t,e.evaluate(t).hover).hover}),Zb=K.create("tree-item-expand-collapse-selected-hover").withDefault(t=>{const e=Ue.getValueFor(t);return vn.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover}),Kb=(t,e)=>J`
    ${pn("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Jn};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${ne};
      --expand-collapse-button-size: calc(${Ht} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Yn};
      border: calc(${ze} * 1px) solid transparent;
      border-radius: calc(${Be} * 1px);
      height: calc((${Ht} + 1) * 1px);
    }

    :host(:${ae}) .positioning-region {
      ${po}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${co};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${uo};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${Ht} * 1px);
      margin-inline-start: calc(${Mt} * 2px + 8px);
      ${jr}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${Mt} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Be} * 1px);
      ${""} width: calc((${Bl} + (${Mt} * 2)) * 1px);
      height: calc((${Bl} + (${Mt} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${Mt} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${Mt} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${oo};
      cursor: ${ro};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Xb};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${wi};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Zb};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${Ht} / 4) * 1px);
      width: 3px;
      height: calc((${Ht} / 2) * 1px);
      ${""} background: ${me};
      border-radius: calc(${Be} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${Ht} * -1px);
    }
  `.withBehaviors(new pb(Jb,Qb),Fe(J`
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
        :host(:${ae}) .positioning-region {
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
      `)),tv=at.compose({baseName:"tree-item",template:Wd,styles:Kb,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `});function ev(t){return nc.getOrCreate(t).withPrefix("fluent")}ev().register(jb(),Mb(),Wb(),Yb(),tv(),Ub());tf(xf).mount("#app");
