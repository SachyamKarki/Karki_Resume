(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function r0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uf={exports:{}},ra={},df={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),i0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),Wc=Symbol.iterator;function m0(e){return e===null||typeof e!="object"?null:(e=Wc&&e[Wc]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pf=Object.assign,mf={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=mf,this.updater=n||ff}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hf(){}hf.prototype=Pr.prototype;function Pl(e,t,n){this.props=e,this.context=t,this.refs=mf,this.updater=n||ff}var Cl=Pl.prototype=new hf;Cl.constructor=Pl;pf(Cl,Pr.prototype);Cl.isPureReactComponent=!0;var $c=Array.isArray,gf=Object.prototype.hasOwnProperty,El={current:null},vf={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)gf.call(t,r)&&!vf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ti,type:e,key:o,ref:a,props:i,_owner:El.current}}function h0(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function g0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kc=/\/+/g;function Na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g0(""+e.key):t.toString(36)}function co(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ti:case i0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Na(a,0):r,$c(i)?(n="",e!=null&&(n=e.replace(Kc,"$&/")+"/"),co(i,t,n,"",function(c){return c})):i!=null&&(Tl(i)&&(i=h0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Kc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",$c(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Na(o,s);a+=co(o,t,n,l,i)}else if(l=m0(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Na(o,s++),a+=co(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Hi(e,t,n){if(e==null)return e;var r=[],i=0;return co(e,r,"","",function(o){return t.call(n,o,i++)}),r}function v0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},uo={transition:null},y0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:uo,ReactCurrentOwner:El};function xf(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Hi,forEach:function(e,t,n){Hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!Tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Pr;Y.Fragment=o0;Y.Profiler=s0;Y.PureComponent=Pl;Y.StrictMode=a0;Y.Suspense=d0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;Y.act=xf;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=El.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)gf.call(t,l)&&!vf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Ti,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:c0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l0,_context:e},e.Consumer=e};Y.createElement=yf;Y.createFactory=function(e){var t=yf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:u0,render:e}};Y.isValidElement=Tl;Y.lazy=function(e){return{$$typeof:p0,_payload:{_status:-1,_result:e},_init:v0}};Y.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=uo.transition;uo.transition={};try{e()}finally{uo.transition=t}};Y.unstable_act=xf;Y.useCallback=function(e,t){return Be.current.useCallback(e,t)};Y.useContext=function(e){return Be.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Be.current.useEffect(e,t)};Y.useId=function(){return Be.current.useId()};Y.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Be.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};Y.useRef=function(e){return Be.current.useRef(e)};Y.useState=function(e){return Be.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Be.current.useTransition()};Y.version="18.3.1";df.exports=Y;var b=df.exports;const Ct=r0(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0=b,w0=Symbol.for("react.element"),b0=Symbol.for("react.fragment"),k0=Object.prototype.hasOwnProperty,S0=x0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)k0.call(t,r)&&!j0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w0,type:e,key:o,ref:a,props:i,_owner:S0.current}}ra.Fragment=b0;ra.jsx=wf;ra.jsxs=wf;uf.exports=ra;var u=uf.exports,gs={},bf={exports:{}},nt={},kf={exports:{}},Sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,B){var U=M.length;M.push(B);e:for(;0<U;){var O=U-1>>>1,ne=M[O];if(0<i(ne,B))M[O]=B,M[U]=ne,U=O;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var B=M[0],U=M.pop();if(U!==B){M[0]=U;e:for(var O=0,ne=M.length,Mt=ne>>>1;O<Mt;){var Qe=2*(O+1)-1,zt=M[Qe],ze=Qe+1,ot=M[ze];if(0>i(zt,U))ze<ne&&0>i(ot,zt)?(M[O]=ot,M[ze]=U,O=ze):(M[O]=zt,M[Qe]=U,O=Qe);else if(ze<ne&&0>i(ot,U))M[O]=ot,M[ze]=U,O=ze;else break e}}return B}function i(M,B){var U=M.sortIndex-B.sortIndex;return U!==0?U:M.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],f=1,d=null,p=3,g=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(M){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=M)r(c),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(c)}}function w(M){if(x=!1,h(M),!y)if(n(l)!==null)y=!0,ce(S);else{var B=n(c);B!==null&&Ee(w,B.startTime-M)}}function S(M,B){y=!1,x&&(x=!1,v(P),P=-1),g=!0;var U=p;try{for(h(B),d=n(l);d!==null&&(!(d.expirationTime>B)||M&&!ae());){var O=d.callback;if(typeof O=="function"){d.callback=null,p=d.priorityLevel;var ne=O(d.expirationTime<=B);B=e.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&r(l),h(B)}else r(l);d=n(l)}if(d!==null)var Mt=!0;else{var Qe=n(c);Qe!==null&&Ee(w,Qe.startTime-B),Mt=!1}return Mt}finally{d=null,p=U,g=!1}}var T=!1,C=null,P=-1,F=5,_=-1;function ae(){return!(e.unstable_now()-_<F)}function xe(){if(C!==null){var M=e.unstable_now();_=M;var B=!0;try{B=C(!0,M)}finally{B?we():(T=!1,C=null)}}else T=!1}var we;if(typeof m=="function")we=function(){m(xe)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,it=ve.port2;ve.port1.onmessage=xe,we=function(){it.postMessage(null)}}else we=function(){k(xe,0)};function ce(M){C=M,T||(T=!0,we())}function Ee(M,B){P=k(function(){M(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,ce(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var U=p;p=B;try{return M()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,B){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=p;p=M;try{return B()}finally{p=U}},e.unstable_scheduleCallback=function(M,B,U){var O=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?O+U:O):U=O,M){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=U+ne,M={id:f++,callback:B,priorityLevel:M,startTime:U,expirationTime:ne,sortIndex:-1},U>O?(M.sortIndex=U,t(c,M),n(l)===null&&M===n(c)&&(x?(v(P),P=-1):x=!0,Ee(w,U-O))):(M.sortIndex=ne,t(l,M),y||g||(y=!0,ce(S))),M},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(M){var B=p;return function(){var U=p;p=B;try{return M.apply(this,arguments)}finally{p=U}}}})(Sf);kf.exports=Sf;var P0=kf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=b,et=P0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jf=new Set,ai={};function Hn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(ai[e]=t,e=0;e<t.length;e++)jf.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,E0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yc={},Xc={};function T0(e){return vs.call(Xc,e)?!0:vs.call(Yc,e)?!1:E0.test(e)?Xc[e]=!0:(Yc[e]=!0,!1)}function N0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M0(e,t,n,r){if(t===null||typeof t>"u"||N0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function Ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nl,Ml);Me[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nl,Ml);Me[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nl,Ml);Me[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zl(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M0(t,n,i,r)&&(n=null),r||i===null?T0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),ys=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),Cf=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),xs=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Ef=Symbol.for("react.offscreen"),Qc=Symbol.iterator;function Dr(e){return e===null||typeof e!="object"?null:(e=Qc&&e[Qc]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Ma;function Hr(e){if(Ma===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ma=t&&t[1]||""}return`
`+Ma+e}var za=!1;function Da(e,t){if(!e||za)return"";za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hr(e):""}function z0(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=Da(e.type,!1),e;case 11:return e=Da(e.type.render,!1),e;case 1:return e=Da(e.type,!0),e;default:return""}}function bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Yn:return"Portal";case ys:return"Profiler";case Dl:return"StrictMode";case xs:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cf:return(e.displayName||"Context")+".Consumer";case Pf:return(e._context.displayName||"Context")+".Provider";case Ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Al:return t=e.displayName||null,t!==null?t:bs(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return bs(e(t))}catch{}}return null}function D0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bs(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L0(e){var t=Tf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=L0(e))}function Nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ks(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mf(e,t){t=t.checked,t!=null&&zl(e,"checked",t,!1)}function Ss(e,t){Mf(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?js(e,t.type,n):t.hasOwnProperty("defaultValue")&&js(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function js(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ur=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ur(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function zf(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wi,Lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A0=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){A0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Af(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Rf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Af(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var R0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Es(e,t){if(t){if(R0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ts(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ms=null,dr=null,fr=null;function tu(e){if(e=zi(e)){if(typeof Ms!="function")throw Error(j(280));var t=e.stateNode;t&&(t=la(t),Ms(e.stateNode,e.type,t))}}function Vf(e){dr?fr?fr.push(e):fr=[e]:dr=e}function If(){if(dr){var e=dr,t=fr;if(fr=dr=null,tu(e),t)for(e=0;e<t.length;e++)tu(t[e])}}function Ff(e,t){return e(t)}function _f(){}var La=!1;function Bf(e,t,n){if(La)return e(t,n);La=!0;try{return Ff(e,t,n)}finally{La=!1,(dr!==null||fr!==null)&&(_f(),If())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=la(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var zs=!1;if(Ht)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{zs=!1}function V0(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Yr=!1,Po=null,Co=!1,Ds=null,I0={onError:function(e){Yr=!0,Po=e}};function F0(e,t,n,r,i,o,a,s,l){Yr=!1,Po=null,V0.apply(I0,arguments)}function _0(e,t,n,r,i,o,a,s,l){if(F0.apply(this,arguments),Yr){if(Yr){var c=Po;Yr=!1,Po=null}else throw Error(j(198));Co||(Co=!0,Ds=c)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(Un(e)!==e)throw Error(j(188))}function B0(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return nu(i),e;if(o===r)return nu(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Hf(e){return e=B0(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Gf=et.unstable_scheduleCallback,ru=et.unstable_cancelCallback,O0=et.unstable_shouldYield,H0=et.unstable_requestPaint,ye=et.unstable_now,U0=et.unstable_getCurrentPriorityLevel,Vl=et.unstable_ImmediatePriority,Wf=et.unstable_UserBlockingPriority,Eo=et.unstable_NormalPriority,G0=et.unstable_LowPriority,$f=et.unstable_IdlePriority,ia=null,Et=null;function W0(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ia,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Y0,$0=Math.log,K0=Math.LN2;function Y0(e){return e>>>=0,e===0?32:31-($0(e)/K0|0)|0}var $i=64,Ki=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Gr(s):(o&=a,o!==0&&(r=Gr(o)))}else a=n&~i,a!==0?r=Gr(a):o!==0&&(r=Gr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function X0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-yt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=X0(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kf(){var e=$i;return $i<<=1,!($i&4194240)&&($i=64),e}function Aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function q0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function Yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xf,Fl,Qf,qf,Jf,As=!1,Yi=[],on=null,an=null,sn=null,ci=new Map,ui=new Map,en=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iu(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(t.pointerId)}}function Ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&Fl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Z0(e,t,n,r,i){switch(t){case"focusin":return on=Ar(on,e,t,n,r,i),!0;case"dragenter":return an=Ar(an,e,t,n,r,i),!0;case"mouseover":return sn=Ar(sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ci.set(o,Ar(ci.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ui.set(o,Ar(ui.get(o)||null,e,t,n,r,i)),!0}return!1}function Zf(e){var t=zn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Of(n),t!==null){e.blockedOn=t,Jf(e.priority,function(){Qf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ns=r,n.target.dispatchEvent(r),Ns=null}else return t=zi(n),t!==null&&Fl(t),e.blockedOn=n,!1;t.shift()}return!0}function ou(e,t,n){fo(e)&&n.delete(t)}function e1(){As=!1,on!==null&&fo(on)&&(on=null),an!==null&&fo(an)&&(an=null),sn!==null&&fo(sn)&&(sn=null),ci.forEach(ou),ui.forEach(ou)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,e1)))}function di(e){function t(i){return Rr(i,e)}if(0<Yi.length){Rr(Yi[0],e);for(var n=1;n<Yi.length;n++){var r=Yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Rr(on,e),an!==null&&Rr(an,e),sn!==null&&Rr(sn,e),ci.forEach(t),ui.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Zf(n),n.blockedOn===null&&en.shift()}var pr=Kt.ReactCurrentBatchConfig,No=!0;function t1(e,t,n,r){var i=te,o=pr.transition;pr.transition=null;try{te=1,_l(e,t,n,r)}finally{te=i,pr.transition=o}}function n1(e,t,n,r){var i=te,o=pr.transition;pr.transition=null;try{te=4,_l(e,t,n,r)}finally{te=i,pr.transition=o}}function _l(e,t,n,r){if(No){var i=Rs(e,t,n,r);if(i===null)Ga(e,t,r,Mo,n),iu(e,r);else if(Z0(i,e,t,n,r))r.stopPropagation();else if(iu(e,r),t&4&&-1<J0.indexOf(e)){for(;i!==null;){var o=zi(i);if(o!==null&&Xf(o),o=Rs(e,t,n,r),o===null&&Ga(e,t,r,Mo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ga(e,t,r,null,n)}}var Mo=null;function Rs(e,t,n,r){if(Mo=null,e=Rl(r),e=zn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Of(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U0()){case Vl:return 1;case Wf:return 4;case Eo:case G0:return 16;case $f:return 536870912;default:return 16}default:return 16}}var nn=null,Bl=null,po=null;function tp(){if(po)return po;var e,t=Bl,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return po=i.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function au(){return!1}function rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xi:au,this.isPropagationStopped=au,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=rt(Cr),Mi=me({},Cr,{view:0,detail:0}),r1=rt(Mi),Ra,Va,Vr,oa=me({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Ra=e.screenX-Vr.screenX,Va=e.screenY-Vr.screenY):Va=Ra=0,Vr=e),Ra)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),su=rt(oa),i1=me({},oa,{dataTransfer:0}),o1=rt(i1),a1=me({},Mi,{relatedTarget:0}),Ia=rt(a1),s1=me({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),l1=rt(s1),c1=me({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u1=rt(c1),d1=me({},Cr,{data:0}),lu=rt(d1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m1[e])?!!t[e]:!1}function Hl(){return h1}var g1=me({},Mi,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v1=rt(g1),y1=me({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=rt(y1),x1=me({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),w1=rt(x1),b1=me({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),k1=rt(b1),S1=me({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j1=rt(S1),P1=[9,13,27,32],Ul=Ht&&"CompositionEvent"in window,Xr=null;Ht&&"documentMode"in document&&(Xr=document.documentMode);var C1=Ht&&"TextEvent"in window&&!Xr,np=Ht&&(!Ul||Xr&&8<Xr&&11>=Xr),uu=String.fromCharCode(32),du=!1;function rp(e,t){switch(e){case"keyup":return P1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function E1(e,t){switch(e){case"compositionend":return ip(t);case"keypress":return t.which!==32?null:(du=!0,uu);case"textInput":return e=t.data,e===uu&&du?null:e;default:return null}}function T1(e,t){if(Qn)return e==="compositionend"||!Ul&&rp(e,t)?(e=tp(),po=Bl=nn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return np&&t.locale!=="ko"?null:t.data;default:return null}}var N1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!N1[e.type]:t==="textarea"}function op(e,t,n,r){Vf(r),t=zo(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,fi=null;function M1(e){gp(e,0)}function aa(e){var t=Zn(e);if(Nf(t))return e}function z1(e,t){if(e==="change")return t}var ap=!1;if(Ht){var Fa;if(Ht){var _a="oninput"in document;if(!_a){var pu=document.createElement("div");pu.setAttribute("oninput","return;"),_a=typeof pu.oninput=="function"}Fa=_a}else Fa=!1;ap=Fa&&(!document.documentMode||9<document.documentMode)}function mu(){Qr&&(Qr.detachEvent("onpropertychange",sp),fi=Qr=null)}function sp(e){if(e.propertyName==="value"&&aa(fi)){var t=[];op(t,fi,e,Rl(e)),Bf(M1,t)}}function D1(e,t,n){e==="focusin"?(mu(),Qr=t,fi=n,Qr.attachEvent("onpropertychange",sp)):e==="focusout"&&mu()}function L1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(fi)}function A1(e,t){if(e==="click")return aa(t)}function R1(e,t){if(e==="input"||e==="change")return aa(t)}function V1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:V1;function pi(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vs.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gu(e,t){var n=hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hu(n)}}function lp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cp(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function Gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I1(e){var t=cp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lp(n.ownerDocument.documentElement,n)){if(r!==null&&Gl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=gu(n,o);var a=gu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var F1=Ht&&"documentMode"in document&&11>=document.documentMode,qn=null,Vs=null,qr=null,Is=!1;function vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Is||qn==null||qn!==jo(r)||(r=qn,"selectionStart"in r&&Gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&pi(qr,r)||(qr=r,r=zo(Vs,"onSelect"),0<r.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Ba={},up={};Ht&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function sa(e){if(Ba[e])return Ba[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in up)return Ba[e]=t[n];return e}var dp=sa("animationend"),fp=sa("animationiteration"),pp=sa("animationstart"),mp=sa("transitionend"),hp=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){hp.set(e,t),Hn(t,[e])}for(var Oa=0;Oa<yu.length;Oa++){var Ha=yu[Oa],_1=Ha.toLowerCase(),B1=Ha[0].toUpperCase()+Ha.slice(1);wn(_1,"on"+B1)}wn(dp,"onAnimationEnd");wn(fp,"onAnimationIteration");wn(pp,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(mp,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_0(r,t,void 0,e),e.currentTarget=null}function gp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;xu(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;xu(i,s,c),o=l}}}if(Co)throw e=Ds,Co=!1,Ds=null,e}function se(e,t){var n=t[Hs];n===void 0&&(n=t[Hs]=new Set);var r=e+"__bubble";n.has(r)||(vp(t,e,2,!1),n.add(r))}function Ua(e,t,n){var r=0;t&&(r|=4),vp(n,e,r,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[qi]){e[qi]=!0,jf.forEach(function(n){n!=="selectionchange"&&(O1.has(n)||Ua(n,!1,e),Ua(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,Ua("selectionchange",!1,t))}}function vp(e,t,n,r){switch(ep(t)){case 1:var i=t1;break;case 4:i=n1;break;default:i=_l}n=i.bind(null,t,n,e),i=void 0,!zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ga(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=zn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Bf(function(){var c=o,f=Rl(n),d=[];e:{var p=hp.get(e);if(p!==void 0){var g=Ol,y=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":g=v1;break;case"focusin":y="focus",g=Ia;break;case"focusout":y="blur",g=Ia;break;case"beforeblur":case"afterblur":g=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=o1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=w1;break;case dp:case fp:case pp:g=l1;break;case mp:g=k1;break;case"scroll":g=r1;break;case"wheel":g=j1;break;case"copy":case"cut":case"paste":g=u1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=cu}var x=(t&4)!==0,k=!x&&e==="scroll",v=x?p!==null?p+"Capture":null:p;x=[];for(var m=c,h;m!==null;){h=m;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,v!==null&&(w=li(m,v),w!=null&&x.push(hi(m,w,h)))),k)break;m=m.return}0<x.length&&(p=new g(p,y,null,n,f),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ns&&(y=n.relatedTarget||n.fromElement)&&(zn(y)||y[Ut]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?zn(y):null,y!==null&&(k=Un(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(x=su,w="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=cu,w="onPointerLeave",v="onPointerEnter",m="pointer"),k=g==null?p:Zn(g),h=y==null?p:Zn(y),p=new x(w,m+"leave",g,n,f),p.target=k,p.relatedTarget=h,w=null,zn(f)===c&&(x=new x(v,m+"enter",y,n,f),x.target=h,x.relatedTarget=k,w=x),k=w,g&&y)t:{for(x=g,v=y,m=0,h=x;h;h=Kn(h))m++;for(h=0,w=v;w;w=Kn(w))h++;for(;0<m-h;)x=Kn(x),m--;for(;0<h-m;)v=Kn(v),h--;for(;m--;){if(x===v||v!==null&&x===v.alternate)break t;x=Kn(x),v=Kn(v)}x=null}else x=null;g!==null&&wu(d,p,g,x,!1),y!==null&&k!==null&&wu(d,k,y,x,!0)}}e:{if(p=c?Zn(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var S=z1;else if(fu(p))if(ap)S=R1;else{S=L1;var T=D1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=A1);if(S&&(S=S(e,c))){op(d,S,n,f);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&js(p,"number",p.value)}switch(T=c?Zn(c):window,e){case"focusin":(fu(T)||T.contentEditable==="true")&&(qn=T,Vs=c,qr=null);break;case"focusout":qr=Vs=qn=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,vu(d,n,f);break;case"selectionchange":if(F1)break;case"keydown":case"keyup":vu(d,n,f)}var C;if(Ul)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qn?rp(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(np&&n.locale!=="ko"&&(Qn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qn&&(C=tp()):(nn=f,Bl="value"in nn?nn.value:nn.textContent,Qn=!0)),T=zo(c,P),0<T.length&&(P=new lu(P,e,null,n,f),d.push({event:P,listeners:T}),C?P.data=C:(C=ip(n),C!==null&&(P.data=C)))),(C=C1?E1(e,n):T1(e,n))&&(c=zo(c,"onBeforeInput"),0<c.length&&(f=new lu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}gp(d,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=li(e,n),o!=null&&r.unshift(hi(e,o,i)),o=li(e,t),o!=null&&r.push(hi(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=li(n,o),l!=null&&a.unshift(hi(n,l,s))):i||(l=li(n,o),l!=null&&a.push(hi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var H1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(H1,`
`).replace(U1,"")}function Ji(e,t,n){if(t=bu(t),bu(e)!==t&&n)throw Error(j(425))}function Do(){}var Fs=null,_s=null;function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Os=typeof setTimeout=="function"?setTimeout:void 0,G1=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch($1)}:Os;function $1(e){setTimeout(function(){throw e})}function Wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);di(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Er,gi="__reactProps$"+Er,Ut="__reactContainer$"+Er,Hs="__reactEvents$"+Er,K1="__reactListeners$"+Er,Y1="__reactHandles$"+Er;function zn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Su(e);e!==null;){if(n=e[Pt])return n;e=Su(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[Pt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function la(e){return e[gi]||null}var Us=[],er=-1;function bn(e){return{current:e}}function le(e){0>er||(e.current=Us[er],Us[er]=null,er--)}function ie(e,t){er++,Us[er]=e.current,e.current=t}var vn={},Ve=bn(vn),We=bn(!1),In=vn;function vr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Lo(){le(We),le(Ve)}function ju(e,t,n){if(Ve.current!==vn)throw Error(j(168));ie(Ve,t),ie(We,n)}function yp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,D0(e)||"Unknown",i));return me({},n,r)}function Ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,In=Ve.current,ie(Ve,e),ie(We,We.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=yp(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,le(We),le(Ve),ie(Ve,e)):le(We),ie(We,n)}var Rt=null,ca=!1,$a=!1;function xp(e){Rt===null?Rt=[e]:Rt.push(e)}function X1(e){ca=!0,xp(e)}function kn(){if(!$a&&Rt!==null){$a=!0;var e=0,t=te;try{var n=Rt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,ca=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),Gf(Vl,kn),i}finally{te=t,$a=!1}}return null}var tr=[],nr=0,Ro=null,Vo=0,lt=[],ct=0,Fn=null,Vt=1,It="";function Cn(e,t){tr[nr++]=Vo,tr[nr++]=Ro,Ro=e,Vo=t}function wp(e,t,n){lt[ct++]=Vt,lt[ct++]=It,lt[ct++]=Fn,Fn=e;var r=Vt;e=It;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var o=32-yt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Vt=1<<32-yt(t)+i|n<<i|r,It=o+e}else Vt=1<<o|n<<i|r,It=e}function Wl(e){e.return!==null&&(Cn(e,1),wp(e,1,0))}function $l(e){for(;e===Ro;)Ro=tr[--nr],tr[nr]=null,Vo=tr[--nr],tr[nr]=null;for(;e===Fn;)Fn=lt[--ct],lt[ct]=null,It=lt[--ct],lt[ct]=null,Vt=lt[--ct],lt[ct]=null}var Ze=null,Je=null,ue=!1,vt=null;function bp(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Je=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Vt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Je=null,!0):!1;default:return!1}}function Gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ws(e){if(ue){var t=Je;if(t){var n=t;if(!Cu(e,t)){if(Gs(e))throw Error(j(418));t=ln(n.nextSibling);var r=Ze;t&&Cu(e,t)?bp(r,n):(e.flags=e.flags&-4097|2,ue=!1,Ze=e)}}else{if(Gs(e))throw Error(j(418));e.flags=e.flags&-4097|2,ue=!1,Ze=e}}}function Eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Zi(e){if(e!==Ze)return!1;if(!ue)return Eu(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bs(e.type,e.memoizedProps)),t&&(t=Je)){if(Gs(e))throw kp(),Error(j(418));for(;t;)bp(e,t),t=ln(t.nextSibling)}if(Eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ze?ln(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=Je;e;)e=ln(e.nextSibling)}function yr(){Je=Ze=null,ue=!1}function Kl(e){vt===null?vt=[e]:vt.push(e)}var Q1=Kt.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tu(e){var t=e._init;return t(e._payload)}function Sp(e){function t(v,m){if(e){var h=v.deletions;h===null?(v.deletions=[m],v.flags|=16):h.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=fn(v,m),v.index=0,v.sibling=null,v}function o(v,m,h){return v.index=h,e?(h=v.alternate,h!==null?(h=h.index,h<m?(v.flags|=2,m):h):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,m,h,w){return m===null||m.tag!==6?(m=Za(h,v.mode,w),m.return=v,m):(m=i(m,h),m.return=v,m)}function l(v,m,h,w){var S=h.type;return S===Xn?f(v,m,h.props.children,w,h.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&Tu(S)===m.type)?(w=i(m,h.props),w.ref=Ir(v,m,h),w.return=v,w):(w=bo(h.type,h.key,h.props,null,v.mode,w),w.ref=Ir(v,m,h),w.return=v,w)}function c(v,m,h,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=es(h,v.mode,w),m.return=v,m):(m=i(m,h.children||[]),m.return=v,m)}function f(v,m,h,w,S){return m===null||m.tag!==7?(m=Vn(h,v.mode,w,S),m.return=v,m):(m=i(m,h),m.return=v,m)}function d(v,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Za(""+m,v.mode,h),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:return h=bo(m.type,m.key,m.props,null,v.mode,h),h.ref=Ir(v,null,m),h.return=v,h;case Yn:return m=es(m,v.mode,h),m.return=v,m;case qt:var w=m._init;return d(v,w(m._payload),h)}if(Ur(m)||Dr(m))return m=Vn(m,v.mode,h,null),m.return=v,m;eo(v,m)}return null}function p(v,m,h,w){var S=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(v,m,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:return h.key===S?l(v,m,h,w):null;case Yn:return h.key===S?c(v,m,h,w):null;case qt:return S=h._init,p(v,m,S(h._payload),w)}if(Ur(h)||Dr(h))return S!==null?null:f(v,m,h,w,null);eo(v,h)}return null}function g(v,m,h,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(h)||null,s(m,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ui:return v=v.get(w.key===null?h:w.key)||null,l(m,v,w,S);case Yn:return v=v.get(w.key===null?h:w.key)||null,c(m,v,w,S);case qt:var T=w._init;return g(v,m,h,T(w._payload),S)}if(Ur(w)||Dr(w))return v=v.get(h)||null,f(m,v,w,S,null);eo(m,w)}return null}function y(v,m,h,w){for(var S=null,T=null,C=m,P=m=0,F=null;C!==null&&P<h.length;P++){C.index>P?(F=C,C=null):F=C.sibling;var _=p(v,C,h[P],w);if(_===null){C===null&&(C=F);break}e&&C&&_.alternate===null&&t(v,C),m=o(_,m,P),T===null?S=_:T.sibling=_,T=_,C=F}if(P===h.length)return n(v,C),ue&&Cn(v,P),S;if(C===null){for(;P<h.length;P++)C=d(v,h[P],w),C!==null&&(m=o(C,m,P),T===null?S=C:T.sibling=C,T=C);return ue&&Cn(v,P),S}for(C=r(v,C);P<h.length;P++)F=g(C,v,P,h[P],w),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?P:F.key),m=o(F,m,P),T===null?S=F:T.sibling=F,T=F);return e&&C.forEach(function(ae){return t(v,ae)}),ue&&Cn(v,P),S}function x(v,m,h,w){var S=Dr(h);if(typeof S!="function")throw Error(j(150));if(h=S.call(h),h==null)throw Error(j(151));for(var T=S=null,C=m,P=m=0,F=null,_=h.next();C!==null&&!_.done;P++,_=h.next()){C.index>P?(F=C,C=null):F=C.sibling;var ae=p(v,C,_.value,w);if(ae===null){C===null&&(C=F);break}e&&C&&ae.alternate===null&&t(v,C),m=o(ae,m,P),T===null?S=ae:T.sibling=ae,T=ae,C=F}if(_.done)return n(v,C),ue&&Cn(v,P),S;if(C===null){for(;!_.done;P++,_=h.next())_=d(v,_.value,w),_!==null&&(m=o(_,m,P),T===null?S=_:T.sibling=_,T=_);return ue&&Cn(v,P),S}for(C=r(v,C);!_.done;P++,_=h.next())_=g(C,v,P,_.value,w),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?P:_.key),m=o(_,m,P),T===null?S=_:T.sibling=_,T=_);return e&&C.forEach(function(xe){return t(v,xe)}),ue&&Cn(v,P),S}function k(v,m,h,w){if(typeof h=="object"&&h!==null&&h.type===Xn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:e:{for(var S=h.key,T=m;T!==null;){if(T.key===S){if(S=h.type,S===Xn){if(T.tag===7){n(v,T.sibling),m=i(T,h.props.children),m.return=v,v=m;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&Tu(S)===T.type){n(v,T.sibling),m=i(T,h.props),m.ref=Ir(v,T,h),m.return=v,v=m;break e}n(v,T);break}else t(v,T);T=T.sibling}h.type===Xn?(m=Vn(h.props.children,v.mode,w,h.key),m.return=v,v=m):(w=bo(h.type,h.key,h.props,null,v.mode,w),w.ref=Ir(v,m,h),w.return=v,v=w)}return a(v);case Yn:e:{for(T=h.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(v,m.sibling),m=i(m,h.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=es(h,v.mode,w),m.return=v,v=m}return a(v);case qt:return T=h._init,k(v,m,T(h._payload),w)}if(Ur(h))return y(v,m,h,w);if(Dr(h))return x(v,m,h,w);eo(v,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,h),m.return=v,v=m):(n(v,m),m=Za(h,v.mode,w),m.return=v,v=m),a(v)):n(v,m)}return k}var xr=Sp(!0),jp=Sp(!1),Io=bn(null),Fo=null,rr=null,Yl=null;function Xl(){Yl=rr=Fo=null}function Ql(e){var t=Io.current;le(Io),e._currentValue=t}function $s(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){Fo=e,Yl=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(Yl!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Fo===null)throw Error(j(308));rr=e,Fo.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var Dn=null;function ql(e){Dn===null?Dn=[e]:Dn.push(e)}function Pp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ql(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,ql(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Il(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,f=c=l=null,s=o;do{var p=s.lane,g=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(p=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(g,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(g,d,p):y,p==null)break e;d=me({},d,p);break e;case 2:Jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=g,l=d):f=f.next=g,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=a,e.lanes=a,e.memoizedState=d}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Di={},Tt=bn(Di),vi=bn(Di),yi=bn(Di);function Ln(e){if(e===Di)throw Error(j(174));return e}function Zl(e,t){switch(ie(yi,t),ie(vi,e),ie(Tt,Di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cs(t,e)}le(Tt),ie(Tt,t)}function wr(){le(Tt),le(vi),le(yi)}function Ep(e){Ln(yi.current);var t=Ln(Tt.current),n=Cs(t,e.type);t!==n&&(ie(vi,e),ie(Tt,n))}function ec(e){vi.current===e&&(le(Tt),le(vi))}var de=bn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function tc(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var go=Kt.ReactCurrentDispatcher,Ya=Kt.ReactCurrentBatchConfig,_n=0,pe=null,Se=null,Pe=null,Oo=!1,Jr=!1,xi=0,q1=0;function De(){throw Error(j(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function rc(e,t,n,r,i,o){if(_n=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?tg:ng,e=n(r,i),Jr){o=0;do{if(Jr=!1,xi=0,25<=o)throw Error(j(301));o+=1,Pe=Se=null,t.updateQueue=null,go.current=rg,e=n(r,i)}while(Jr)}if(go.current=Ho,t=Se!==null&&Se.next!==null,_n=0,Pe=Se=pe=null,Oo=!1,t)throw Error(j(300));return e}function ic(){var e=xi!==0;return xi=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?pe.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function pt(){if(Se===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Pe===null?pe.memoizedState:Pe.next;if(t!==null)Pe=t,Se=e;else{if(e===null)throw Error(j(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Pe===null?pe.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function wi(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=pt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var f=c.lane;if((_n&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,pe.lanes|=f,Bn|=f}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,wt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qa(e){var t=pt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);wt(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Tp(){}function Np(e,t){var n=pe,r=pt(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,oc(Dp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,bi(9,zp.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(j(349));_n&30||Mp(n,t,i)}return i}function Mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zp(e,t,n,r){t.value=n,t.getSnapshot=r,Lp(t)&&Ap(e)}function Dp(e,t,n){return n(function(){Lp(t)&&Ap(e)})}function Lp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Ap(e){var t=Gt(e,1);t!==null&&xt(t,e,1,-1)}function zu(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},t.queue=e,e=e.dispatch=eg.bind(null,pe,e),[t.memoizedState,e]}function bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rp(){return pt().memoizedState}function vo(e,t,n,r){var i=jt();pe.flags|=e,i.memoizedState=bi(1|t,n,void 0,r===void 0?null:r)}function ua(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(Se!==null){var a=Se.memoizedState;if(o=a.destroy,r!==null&&nc(r,a.deps)){i.memoizedState=bi(t,n,o,r);return}}pe.flags|=e,i.memoizedState=bi(1|t,n,o,r)}function Du(e,t){return vo(8390656,8,e,t)}function oc(e,t){return ua(2048,8,e,t)}function Vp(e,t){return ua(4,2,e,t)}function Ip(e,t){return ua(4,4,e,t)}function Fp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,n){return n=n!=null?n.concat([e]):null,ua(4,4,Fp.bind(null,t,e),n)}function ac(){}function Bp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Op(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hp(e,t,n){return _n&21?(wt(n,t)||(n=Kf(),pe.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function J1(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Ya.transition;Ya.transition={};try{e(!1),t()}finally{te=n,Ya.transition=r}}function Up(){return pt().memoizedState}function Z1(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gp(e))Wp(t,n);else if(n=Pp(e,t,n,r),n!==null){var i=_e();xt(n,e,r,i),$p(n,t,r)}}function eg(e,t,n){var r=dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))Wp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,wt(s,a)){var l=t.interleaved;l===null?(i.next=i,ql(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Pp(e,t,i,r),n!==null&&(i=_e(),xt(n,e,r,i),$p(n,t,r))}}function Gp(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Wp(e,t){Jr=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $p(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Il(e,n)}}var Ho={readContext:ft,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},tg={readContext:ft,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vo(4194308,4,Fp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return vo(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z1.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:ac,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=J1.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=jt();if(ue){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Ce===null)throw Error(j(349));_n&30||Mp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Du(Dp.bind(null,r,o,e),[e]),r.flags|=2048,bi(9,zp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=jt(),t=Ce.identifierPrefix;if(ue){var n=It,r=Vt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ng={readContext:ft,useCallback:Bp,useContext:ft,useEffect:oc,useImperativeHandle:_p,useInsertionEffect:Vp,useLayoutEffect:Ip,useMemo:Op,useReducer:Xa,useRef:Rp,useState:function(){return Xa(wi)},useDebugValue:ac,useDeferredValue:function(e){var t=pt();return Hp(t,Se.memoizedState,e)},useTransition:function(){var e=Xa(wi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Tp,useSyncExternalStore:Np,useId:Up,unstable_isNewReconciler:!1},rg={readContext:ft,useCallback:Bp,useContext:ft,useEffect:oc,useImperativeHandle:_p,useInsertionEffect:Vp,useLayoutEffect:Ip,useMemo:Op,useReducer:Qa,useRef:Rp,useState:function(){return Qa(wi)},useDebugValue:ac,useDeferredValue:function(e){var t=pt();return Se===null?t.memoizedState=e:Hp(t,Se.memoizedState,e)},useTransition:function(){var e=Qa(wi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Tp,useSyncExternalStore:Np,useId:Up,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var da={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=dn(e),o=_t(r,i);o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(xt(t,e,i,r),ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=dn(e),o=_t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(xt(t,e,i,r),ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=dn(e),i=_t(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(xt(t,e,r,n),ho(t,e,r))}};function Lu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(i,o):!0}function Kp(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=ft(o):(i=$e(t)?In:Ve.current,r=t.contextTypes,o=(r=r!=null)?vr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=da,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&da.enqueueReplaceState(t,t.state,null)}function Ys(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Jl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ft(o):(o=$e(t)?In:Ve.current,i.context=vr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ks(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&da.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,t){try{var n="",r=t;do n+=z0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function Yp(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,ol=r),Xs(e,t)},n}function Xp(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xs(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ig;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yg.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var og=Kt.ReactCurrentOwner,Ge=!1;function Fe(e,t,n,r){t.child=e===null?jp(t,null,n,r):xr(t,e.child,n,r)}function Fu(e,t,n,r,i){n=n.render;var o=t.ref;return mr(t,i),r=rc(e,t,n,r,o,i),n=ic(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ue&&n&&Wl(t),t.flags|=1,Fe(e,t,r,i),t.child)}function _u(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qp(e,t,o,r,i)):(e=bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(a,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(pi(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return Qs(e,t,n,r,i)}function qp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(or,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(or,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(or,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(or,qe),qe|=r;return Fe(e,t,i,n),t.child}function Jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qs(e,t,n,r,i){var o=$e(n)?In:Ve.current;return o=vr(t,o),mr(t,i),n=rc(e,t,n,r,o,i),r=ic(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ue&&r&&Wl(t),t.flags|=1,Fe(e,t,n,i),t.child)}function Bu(e,t,n,r,i){if($e(n)){var o=!0;Ao(t)}else o=!1;if(mr(t,i),t.stateNode===null)yo(e,t),Kp(t,n,r),Ys(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ft(c):(c=$e(n)?In:Ve.current,c=vr(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&Au(t,a,r,c),Jt=!1;var p=t.memoizedState;a.state=p,_o(t,r,a,i),l=t.memoizedState,s!==r||p!==l||We.current||Jt?(typeof f=="function"&&(Ks(t,n,f,r),l=t.memoizedState),(s=Jt||Lu(t,n,s,r,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cp(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ht(t.type,s),a.props=c,d=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=$e(n)?In:Ve.current,l=vr(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==l)&&Au(t,a,r,l),Jt=!1,p=t.memoizedState,a.state=p,_o(t,r,a,i);var y=t.memoizedState;s!==d||p!==y||We.current||Jt?(typeof g=="function"&&(Ks(t,n,g,r),y=t.memoizedState),(c=Jt||Lu(t,n,c,r,p,y,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return qs(e,t,n,r,o,i)}function qs(e,t,n,r,i,o){Jp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Pu(t,n,!1),Wt(e,t,o);r=t.stateNode,og.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xr(t,e.child,null,o),t.child=xr(t,null,s,o)):Fe(e,t,s,o),t.memoizedState=r.state,i&&Pu(t,n,!0),t.child}function Zp(e){var t=e.stateNode;t.pendingContext?ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ju(e,t.context,!1),Zl(e,t.containerInfo)}function Ou(e,t,n,r,i){return yr(),Kl(i),t.flags|=256,Fe(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function em(e,t,n){var r=t.pendingProps,i=de.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(de,i&1),e===null)return Ws(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ma(a,r,0,null),e=Vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zs(n),t.memoizedState=Js,e):sc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ag(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=fn(s,o):(o=Vn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Zs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sc(e,t){return t=ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&Kl(r),xr(t,e.child,null,n),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ag(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=qa(Error(j(422))),to(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ma({mode:"visible",children:r.children},i,0,null),o=Vn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&xr(t,e.child,null,a),t.child.memoizedState=Zs(a),t.memoizedState=Js,o);if(!(t.mode&1))return to(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=qa(o,r,void 0),to(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ge||s){if(r=Ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),xt(r,e,i,-1))}return pc(),r=qa(Error(j(421))),to(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Je=ln(i.nextSibling),Ze=t,ue=!0,vt=null,e!==null&&(lt[ct++]=Vt,lt[ct++]=It,lt[ct++]=Fn,Vt=e.id,It=e.overflow,Fn=t),t=sc(t,r.children),t.flags|=4096,t)}function Hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$s(e.return,t,n)}function Ja(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function tm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Fe(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,n,t);else if(e.tag===19)Hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ja(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ja(t,!0,n,null,o);break;case"together":Ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sg(e,t,n){switch(t.tag){case 3:Zp(t),yr();break;case 5:Ep(t);break;case 1:$e(t.type)&&Ao(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?em(e,t,n):(ie(de,de.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,qp(e,t,n)}return Wt(e,t,n)}var nm,el,rm,im;nm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};el=function(){};rm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Tt.current);var o=null;switch(n){case"input":i=ks(e,i),r=ks(e,r),o=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),o=[];break;case"textarea":i=Ps(e,i),r=Ps(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Do)}Es(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ai.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ai.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&se("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};im=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lg(e,t,n){var r=t.pendingProps;switch($l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return $e(t.type)&&Lo(),Le(t),null;case 3:return r=t.stateNode,wr(),le(We),le(Ve),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(ll(vt),vt=null))),el(e,t),Le(t),null;case 5:ec(t);var i=Ln(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)rm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Le(t),null}if(e=Ln(Tt.current),Zi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[gi]=o,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Wr.length;i++)se(Wr[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":qc(r,o),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},se("invalid",r);break;case"textarea":Zc(r,o),se("invalid",r)}Es(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ji(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ji(r.textContent,s,e),i=["children",""+s]):ai.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&se("scroll",r)}switch(n){case"input":Gi(r),Jc(r,o,!0);break;case"textarea":Gi(r),eu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Do)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Df(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Pt]=t,e[gi]=r,nm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ts(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wr.length;i++)se(Wr[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":qc(e,r),i=ks(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),se("invalid",e);break;case"textarea":Zc(e,r),i=Ps(e,r),se("invalid",e);break;default:i=r}Es(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Rf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lf(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&si(e,l):typeof l=="number"&&si(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&se("scroll",e):l!=null&&zl(e,o,l,a))}switch(n){case"input":Gi(e),Jc(e,r,!1);break;case"textarea":Gi(e),eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ur(e,!!r.multiple,o,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)im(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ln(yi.current),Ln(Tt.current),Zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ji(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Le(t),null;case 13:if(le(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Je!==null&&t.mode&1&&!(t.flags&128))kp(),yr(),t.flags|=98560,o=!1;else if(o=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Pt]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else vt!==null&&(ll(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?je===0&&(je=3):pc())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return wr(),el(e,t),e===null&&mi(t.stateNode.containerInfo),Le(t),null;case 10:return Ql(t.type._context),Le(t),null;case 17:return $e(t.type)&&Lo(),Le(t),null;case 19:if(le(de),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Fr(o,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Bo(e),a!==null){for(t.flags|=128,Fr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(de,de.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>kr&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Le(t),null}else 2*ye()-o.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return fc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function cg(e,t){switch($l(t),t.tag){case 1:return $e(t.type)&&Lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),le(We),le(Ve),tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ec(t),null;case 13:if(le(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(de),null;case 4:return wr(),null;case 10:return Ql(t.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var no=!1,Re=!1,ug=typeof WeakSet=="function"?WeakSet:Set,L=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){he(e,t,r)}}var Uu=!1;function dg(e,t){if(Fs=No,e=cp(),Gl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++c===i&&(s=a),p===o&&++f===r&&(l=a),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_s={focusedElem:e,selectionRange:n},No=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:ht(t.type,x),k);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){he(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Uu,Uu=!1,y}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tl(t,n,o)}i=i.next}while(i!==r)}}function fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function om(e){var t=e.alternate;t!==null&&(e.alternate=null,om(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[gi],delete t[Hs],delete t[K1],delete t[Y1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function am(e){return e.tag===5||e.tag===3||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Do));else if(r!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}var Te=null,gt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)sm(e,t,n),n=n.sibling}function sm(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ia,n)}catch{}switch(n.tag){case 5:Re||ir(n,t);case 6:var r=Te,i=gt;Te=null,Xt(e,t,n),Te=r,gt=i,Te!==null&&(gt?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(gt?(e=Te,n=n.stateNode,e.nodeType===8?Wa(e.parentNode,n):e.nodeType===1&&Wa(e,n),di(e)):Wa(Te,n.stateNode));break;case 4:r=Te,i=gt,Te=n.stateNode.containerInfo,gt=!0,Xt(e,t,n),Te=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&tl(n,t,a),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!Re&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){he(n,t,s)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Xt(e,t,n),Re=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function Wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ug),t.forEach(function(r){var i=wg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Te=s.stateNode,gt=!1;break e;case 3:Te=s.stateNode.containerInfo,gt=!0;break e;case 4:Te=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(Te===null)throw Error(j(160));sm(o,a,i),Te=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){he(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lm(t,e),t=t.sibling}function lm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),St(e),r&4){try{Zr(3,e,e.return),fa(3,e)}catch(x){he(e,e.return,x)}try{Zr(5,e,e.return)}catch(x){he(e,e.return,x)}}break;case 1:mt(t,e),St(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(mt(t,e),St(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var i=e.stateNode;try{si(i,"")}catch(x){he(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Mf(i,o),Ts(s,a);var c=Ts(s,o);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?Rf(i,d):f==="dangerouslySetInnerHTML"?Lf(i,d):f==="children"?si(i,d):zl(i,f,d,c)}switch(s){case"input":Ss(i,o);break;case"textarea":zf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?ur(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?ur(i,!!o.multiple,o.defaultValue,!0):ur(i,!!o.multiple,o.multiple?[]:"",!1))}i[gi]=o}catch(x){he(e,e.return,x)}}break;case 6:if(mt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){he(e,e.return,x)}}break;case 3:if(mt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(x){he(e,e.return,x)}break;case 4:mt(t,e),St(e);break;case 13:mt(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=ye())),r&4&&Wu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||f,mt(t,e),Re=c):mt(t,e),St(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(L=e,f=e.child;f!==null;){for(d=L=f;L!==null;){switch(p=L,g=p.child,p.tag){case 0:case 11:case 14:case 15:Zr(4,p,p.return);break;case 1:ir(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){he(r,n,x)}}break;case 5:ir(p,p.return);break;case 22:if(p.memoizedState!==null){Ku(d);continue}}g!==null?(g.return=p,L=g):Ku(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Af("display",a))}catch(x){he(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){he(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(t,e),St(e),r&4&&Wu(e);break;case 21:break;default:mt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(am(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(si(i,""),r.flags&=-33);var o=Gu(e);il(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Gu(e);rl(e,s,a);break;default:throw Error(j(161))}}catch(l){he(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fg(e,t,n){L=e,cm(e)}function cm(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||no;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Re;s=no;var c=Re;if(no=a,(Re=l)&&!c)for(L=i;L!==null;)a=L,l=a.child,a.tag===22&&a.memoizedState!==null?Yu(i):l!==null?(l.return=a,L=l):Yu(i);for(;o!==null;)L=o,cm(o),o=o.sibling;L=i,no=s,Re=c}$u(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):$u(e)}}function $u(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||fa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&di(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Re||t.flags&512&&nl(t)}catch(p){he(t,t.return,p)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Ku(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Yu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fa(4,t)}catch(l){he(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){he(t,i,l)}}var o=t.return;try{nl(t)}catch(l){he(t,o,l)}break;case 5:var a=t.return;try{nl(t)}catch(l){he(t,a,l)}}}catch(l){he(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var pg=Math.ceil,Uo=Kt.ReactCurrentDispatcher,lc=Kt.ReactCurrentOwner,dt=Kt.ReactCurrentBatchConfig,J=0,Ce=null,ke=null,Ne=0,qe=0,or=bn(0),je=0,ki=null,Bn=0,pa=0,cc=0,ei=null,Ue=null,uc=0,kr=1/0,At=null,Go=!1,ol=null,un=null,ro=!1,rn=null,Wo=0,ti=0,al=null,xo=-1,wo=0;function _e(){return J&6?ye():xo!==-1?xo:xo=ye()}function dn(e){return e.mode&1?J&2&&Ne!==0?Ne&-Ne:Q1.transition!==null?(wo===0&&(wo=Kf()),wo):(e=te,e!==0||(e=window.event,e=e===void 0?16:ep(e.type)),e):1}function xt(e,t,n,r){if(50<ti)throw ti=0,al=null,Error(j(185));Ni(e,n,r),(!(J&2)||e!==Ce)&&(e===Ce&&(!(J&2)&&(pa|=n),je===4&&tn(e,Ne)),Ke(e,r),n===1&&J===0&&!(t.mode&1)&&(kr=ye()+500,ca&&kn()))}function Ke(e,t){var n=e.callbackNode;Q0(e,t);var r=To(e,e===Ce?Ne:0);if(r===0)n!==null&&ru(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ru(n),t===1)e.tag===0?X1(Xu.bind(null,e)):xp(Xu.bind(null,e)),W1(function(){!(J&6)&&kn()}),n=null;else{switch(Yf(r)){case 1:n=Vl;break;case 4:n=Wf;break;case 16:n=Eo;break;case 536870912:n=$f;break;default:n=Eo}n=vm(n,um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function um(e,t){if(xo=-1,wo=0,J&6)throw Error(j(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=To(e,e===Ce?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=J;J|=2;var o=fm();(Ce!==e||Ne!==t)&&(At=null,kr=ye()+500,Rn(e,t));do try{gg();break}catch(s){dm(e,s)}while(1);Xl(),Uo.current=o,J=i,ke!==null?t=0:(Ce=null,Ne=0,t=je)}if(t!==0){if(t===2&&(i=Ls(e),i!==0&&(r=i,t=sl(e,i))),t===1)throw n=ki,Rn(e,0),tn(e,r),Ke(e,ye()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!mg(i)&&(t=$o(e,r),t===2&&(o=Ls(e),o!==0&&(r=o,t=sl(e,o))),t===1))throw n=ki,Rn(e,0),tn(e,r),Ke(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:En(e,Ue,At);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=uc+500-ye(),10<t)){if(To(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Os(En.bind(null,e,Ue,At),t);break}En(e,Ue,At);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-yt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pg(r/1960))-r,10<r){e.timeoutHandle=Os(En.bind(null,e,Ue,At),r);break}En(e,Ue,At);break;case 5:En(e,Ue,At);break;default:throw Error(j(329))}}}return Ke(e,ye()),e.callbackNode===n?um.bind(null,e):null}function sl(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&ll(t)),e}function ll(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function mg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~cc,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Xu(e){if(J&6)throw Error(j(327));hr();var t=To(e,0);if(!(t&1))return Ke(e,ye()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=sl(e,r))}if(n===1)throw n=ki,Rn(e,0),tn(e,t),Ke(e,ye()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Ue,At),Ke(e,ye()),null}function dc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(kr=ye()+500,ca&&kn())}}function On(e){rn!==null&&rn.tag===0&&!(J&6)&&hr();var t=J;J|=1;var n=dt.transition,r=te;try{if(dt.transition=null,te=1,e)return e()}finally{te=r,dt.transition=n,J=t,!(J&6)&&kn()}}function fc(){qe=or.current,le(or)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,G1(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch($l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:wr(),le(We),le(Ve),tc();break;case 5:ec(r);break;case 4:wr();break;case 13:le(de);break;case 19:le(de);break;case 10:Ql(r.type._context);break;case 22:case 23:fc()}n=n.return}if(Ce=e,ke=e=fn(e.current,null),Ne=qe=t,je=0,ki=null,cc=pa=Bn=0,Ue=ei=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Dn=null}return e}function dm(e,t){do{var n=ke;try{if(Xl(),go.current=Ho,Oo){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oo=!1}if(_n=0,Pe=Se=pe=null,Jr=!1,xi=0,lc.current=null,n===null||n.return===null){je=1,ki=t,ke=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ne,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Vu(a);if(g!==null){g.flags&=-257,Iu(g,a,s,o,t),g.mode&1&&Ru(o,c,t),t=g,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Ru(o,c,t),pc();break e}l=Error(j(426))}}else if(ue&&s.mode&1){var k=Vu(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Iu(k,a,s,o,t),Kl(br(l,s));break e}}o=l=br(l,s),je!==4&&(je=2),ei===null?ei=[o]:ei.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Yp(o,l,t);Nu(o,v);break e;case 1:s=l;var m=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(un===null||!un.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Xp(o,s,t);Nu(o,w);break e}}o=o.return}while(o!==null)}mm(n)}catch(S){t=S,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function fm(){var e=Uo.current;return Uo.current=Ho,e===null?Ho:e}function pc(){(je===0||je===3||je===2)&&(je=4),Ce===null||!(Bn&268435455)&&!(pa&268435455)||tn(Ce,Ne)}function $o(e,t){var n=J;J|=2;var r=fm();(Ce!==e||Ne!==t)&&(At=null,Rn(e,t));do try{hg();break}catch(i){dm(e,i)}while(1);if(Xl(),J=n,Uo.current=r,ke!==null)throw Error(j(261));return Ce=null,Ne=0,je}function hg(){for(;ke!==null;)pm(ke)}function gg(){for(;ke!==null&&!O0();)pm(ke)}function pm(e){var t=gm(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?mm(e):ke=t,lc.current=null}function mm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cg(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,ke=null;return}}else if(n=lg(n,t,qe),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);je===0&&(je=5)}function En(e,t,n){var r=te,i=dt.transition;try{dt.transition=null,te=1,vg(e,t,n,r)}finally{dt.transition=i,te=r}return null}function vg(e,t,n,r){do hr();while(rn!==null);if(J&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(q0(e,o),e===Ce&&(ke=Ce=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,vm(Eo,function(){return hr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var a=te;te=1;var s=J;J|=4,lc.current=null,dg(e,n),lm(n,e),I1(_s),No=!!Fs,_s=Fs=null,e.current=n,fg(n),H0(),J=s,te=a,dt.transition=o}else e.current=n;if(ro&&(ro=!1,rn=e,Wo=i),o=e.pendingLanes,o===0&&(un=null),W0(n.stateNode),Ke(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,e=ol,ol=null,e;return Wo&1&&e.tag!==0&&hr(),o=e.pendingLanes,o&1?e===al?ti++:(ti=0,al=e):ti=0,kn(),null}function hr(){if(rn!==null){var e=Yf(Wo),t=dt.transition,n=te;try{if(dt.transition=null,te=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Wo=0,J&6)throw Error(j(331));var i=J;for(J|=4,L=e.current;L!==null;){var o=L,a=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(L=c;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:Zr(8,f,o)}var d=f.child;if(d!==null)d.return=f,L=d;else for(;L!==null;){f=L;var p=f.sibling,g=f.return;if(om(f),f===c){L=null;break}if(p!==null){p.return=g,L=p;break}L=g}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}L=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,L=a;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,L=v;break e}L=o.return}}var m=e.current;for(L=m;L!==null;){a=L;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,L=h;else e:for(a=m;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fa(9,s)}}catch(S){he(s,s.return,S)}if(s===a){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(J=i,kn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ia,e)}catch{}r=!0}return r}finally{te=n,dt.transition=t}}return!1}function Qu(e,t,n){t=br(n,t),t=Yp(e,t,1),e=cn(e,t,1),t=_e(),e!==null&&(Ni(e,1,t),Ke(e,t))}function he(e,t,n){if(e.tag===3)Qu(e,e,n);else for(;t!==null;){if(t.tag===3){Qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=br(n,e),e=Xp(t,e,1),t=cn(t,e,1),e=_e(),t!==null&&(Ni(t,1,e),Ke(t,e));break}}t=t.return}}function yg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Ne&n)===n&&(je===4||je===3&&(Ne&130023424)===Ne&&500>ye()-uc?Rn(e,0):cc|=n),Ke(e,t)}function hm(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=_e();e=Gt(e,t),e!==null&&(Ni(e,t,n),Ke(e,n))}function xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hm(e,n)}function wg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),hm(e,n)}var gm;gm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,sg(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,ue&&t.flags&1048576&&wp(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yo(e,t),e=t.pendingProps;var i=vr(t,Ve.current);mr(t,n),i=rc(null,t,r,e,i,n);var o=ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,Ao(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(t),i.updater=da,t.stateNode=i,i._reactInternals=t,Ys(t,r,e,n),t=qs(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Wl(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kg(r),e=ht(r,e),i){case 0:t=Qs(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=Fu(null,t,r,e,n);break e;case 14:t=_u(null,t,r,ht(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Qs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Bu(e,t,r,i,n);case 3:e:{if(Zp(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Cp(e,t),_o(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=br(Error(j(423)),t),t=Ou(e,t,r,n,i);break e}else if(r!==i){i=br(Error(j(424)),t),t=Ou(e,t,r,n,i);break e}else for(Je=ln(t.stateNode.containerInfo.firstChild),Ze=t,ue=!0,vt=null,n=jp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){t=Wt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Ep(t),e===null&&Ws(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Bs(r,i)?a=null:o!==null&&Bs(r,o)&&(t.flags|=32),Jp(e,t),Fe(e,t,a,n),t.child;case 6:return e===null&&Ws(t),null;case 13:return em(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Fu(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ie(Io,r._currentValue),r._currentValue=a,o!==null)if(wt(o.value,a)){if(o.children===i.children&&!We.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=_t(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$s(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),$s(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=ft(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),_u(e,t,r,i,n);case 15:return Qp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),yo(e,t),t.tag=1,$e(r)?(e=!0,Ao(t)):e=!1,mr(t,n),Kp(t,r,i),Ys(t,r,i,n),qs(null,t,r,!0,e,n);case 19:return tm(e,t,n);case 22:return qp(e,t,n)}throw Error(j(156,t.tag))};function vm(e,t){return Gf(e,t)}function bg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new bg(e,t,n,r)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kg(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ll)return 11;if(e===Al)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")mc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xn:return Vn(n.children,i,o,t);case Dl:a=8,i|=8;break;case ys:return e=ut(12,n,t,i|2),e.elementType=ys,e.lanes=o,e;case xs:return e=ut(13,n,t,i),e.elementType=xs,e.lanes=o,e;case ws:return e=ut(19,n,t,i),e.elementType=ws,e.lanes=o,e;case Ef:return ma(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pf:a=10;break e;case Cf:a=9;break e;case Ll:a=11;break e;case Al:a=14;break e;case qt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function ma(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Ef,e.lanes=n,e.stateNode={isHidden:!1},e}function Za(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function es(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hc(e,t,n,r,i,o,a,s,l){return e=new Sg(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(o),e}function jg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ym(e){if(!e)return vn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if($e(n))return yp(e,n,t)}return t}function xm(e,t,n,r,i,o,a,s,l){return e=hc(n,r,!0,e,i,o,a,s,l),e.context=ym(null),n=e.current,r=_e(),i=dn(n),o=_t(r,i),o.callback=t??null,cn(n,o,i),e.current.lanes=i,Ni(e,i,r),Ke(e,r),e}function ha(e,t,n,r){var i=t.current,o=_e(),a=dn(i);return n=ym(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,a),e!==null&&(xt(e,i,a,o),ho(e,i,a)),a}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}function Pg(){return null}var wm=typeof reportError=="function"?reportError:function(e){console.error(e)};function vc(e){this._internalRoot=e}ga.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ha(e,t,null,null)};ga.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){ha(null,e,null,null)}),t[Ut]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Zf(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function Cg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ko(a);o.call(c)}}var a=xm(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=a,e[Ut]=a.current,mi(e.nodeType===8?e.parentNode:e),On(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Ko(l);s.call(c)}}var l=hc(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=l,e[Ut]=l.current,mi(e.nodeType===8?e.parentNode:e),On(function(){ha(t,l,n,r)}),l}function ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ko(a);s.call(l)}}ha(t,a,e,i)}else a=Cg(n,t,e,i,r);return Ko(a)}Xf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(Il(t,n|1),Ke(t,ye()),!(J&6)&&(kr=ye()+500,kn()))}break;case 13:On(function(){var r=Gt(e,1);if(r!==null){var i=_e();xt(r,e,1,i)}}),gc(e,1)}};Fl=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=_e();xt(t,e,134217728,n)}gc(e,134217728)}};Qf=function(e){if(e.tag===13){var t=dn(e),n=Gt(e,t);if(n!==null){var r=_e();xt(n,e,t,r)}gc(e,t)}};qf=function(){return te};Jf=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ms=function(e,t,n){switch(t){case"input":if(Ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=la(r);if(!i)throw Error(j(90));Nf(r),Ss(r,i)}}}break;case"textarea":zf(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};Ff=dc;_f=On;var Eg={usingClientEntryPoint:!1,Events:[zi,Zn,la,Vf,If,dc]},_r={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tg={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hf(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Pg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ia=io.inject(Tg),Et=io}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(t))throw Error(j(200));return jg(e,t,null,n)};nt.createRoot=function(e,t){if(!yc(e))throw Error(j(299));var n=!1,r="",i=wm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,mi(e.nodeType===8?e.parentNode:e),new vc(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Hf(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return On(e)};nt.hydrate=function(e,t,n){if(!va(t))throw Error(j(200));return ya(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!yc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=wm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=xm(t,null,e,1,n??null,i,!1,o,a),e[Ut]=t.current,mi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ga(t)};nt.render=function(e,t,n){if(!va(t))throw Error(j(200));return ya(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!va(e))throw Error(j(40));return e._reactRootContainer?(On(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};nt.unstable_batchedUpdates=dc;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!va(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ya(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bm)}catch(e){console.error(e)}}bm(),bf.exports=nt;var km=bf.exports,Zu=km;gs.createRoot=Zu.createRoot,gs.hydrateRoot=Zu.hydrateRoot;const Ng={nav:{home:"Home",about:"About",experience:"Experience",skills:"Skills",education:"Education",projects:"Projects",contact:"Contact"},hero:{title:"Mobile App Full-Stack Developer",subtitle:"Building innovative mobile experiences with robust backend solutions",summary:"I am a passionate Mobile App Full-Stack Developer with hands-on experience in building cross-platform mobile applications and backend services. I am skilled in React Native development with a growing expertise in server-side technologies and database management.",availability:"Open to opportunities",viewResume:"View Resume",downloadResume:"Download Resume",getInTouch:"Get In Touch",socialLabel:"Get in Touch with me",greeting:"Hi, I'm"},about:{title:"About Me",subtitle:"Passionate developer creating innovative solutions",description:"I enjoy creating user-friendly mobile experiences while ensuring robust backend functionality. Currently expanding my knowledge in full-stack development while pursuing my Computer Science degree.",summary:"Passionate Mobile App Full-Stack Developer with hands-on experience in building cross-platform mobile applications and backend services. Skilled in React Native development with growing expertise in server-side technologies and database management. Currently pursuing Computer Science degree while expanding knowledge in full-stack development.",location:"Based in Sunakothi, Lalitpur, Nepal, I'm passionate about creating innovative solutions and continuously learning new technologies. I enjoy working on projects that challenge me and help me grow as a developer.",stats:{projects:"Projects Completed",skills:"Skills Mastered",experience:"Years Experience",learning:"Always Learning"},features:{cleanCode:"Clean Code",cleanCodeDesc:"I write maintainable, scalable, and well-documented code following best practices and industry standards.",creativeDesign:"Creative Design",creativeDesignDesc:"I create beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",performance:"Performance",performanceDesc:"I optimize applications for speed and efficiency, ensuring fast loading times and smooth interactions.",collaboration:"Collaboration",collaborationDesc:"I work effectively in teams, communicate clearly, and contribute to a positive development environment."}},experience:{title:"Work Experience",subtitle:"My professional journey in web development and software engineering",current:"Present",achievements:"Achievements:",technologies:"Technologies:",data:{mobileAppDeveloper:{title:"Mobile App Developer",company:"Tridev Innovation",location:"Lalitpur, Nepal",period:"June 2024 - Present",description:"Developed mobile applications using React Native with focus on user-friendly interfaces and smooth performance. Implemented secure user authentication, real-time features, and third-party API integrations.",achievements:["Built backend services using Node.js to support mobile app functionality and data management","Worked on advanced mobile features including push notifications, Face ID authentication, and complex navigation systems","Collaborated with team members using Git and GitHub for version control and project management","Delivered projects on time while maintaining code quality and following best practices"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"Technical Skills",subtitle:"Technologies I work with",frontend:"Frontend Development",backend:"Backend Development",mobile:"Mobile Development",tools:"Tools & Platforms",soft:"Soft Skills",whySkillsMatter:"Why These Skills Matter",skillsDescription:"I continuously update my skill set to stay current with the latest technologies and best practices. This diverse range of skills allows me to work across the entire development stack and deliver comprehensive solutions."},projects:{title:"Featured Projects",subtitle:"Some of my recent work",viewProject:"View Project",viewCode:"View Code",technologies:"Technologies Used"},contact:{title:"Get In Touch",subtitle:"Let's work together on your next project",getInTouch:"Get In Touch",description:"I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!",email:"Email",phone:"Phone",location:"Location",followMe:"Follow Me",form:{name:"Name",email:"Email",subject:"Subject",message:"Message",namePlaceholder:"Your full name",emailPlaceholder:"your.email@example.com",subjectPlaceholder:"What's this about?",messagePlaceholder:"Tell me about your project or just say hello!",send:"Send Message",sending:"Sending...",success:"Message sent successfully! I'll get back to you soon.",error:"Failed to send message. Please try again later."},social:{github:"GitHub",linkedin:"LinkedIn",email:"Email"}},footer:{tagline:"Full-Stack Developer & UI/UX Designer",rights:"All rights reserved",builtWith:"Built with React & Vite",description:"Creating beautiful, functional, and user-centered digital experiences that bring ideas to life. Let's build something amazing together.",quickLinks:"Quick Links",connect:"Connect With Me",copyright:"All rights reserved. Built with React & Vite.",trademark:"All content, designs, and intellectual property belong to Shaksham Karki. This portfolio website and its contents are proprietary and protected under copyright law."},education:{title:"Education & Leadership",subtitle:"Academic background and leadership experience",academic:"Academic Background",leadership:"Leadership & Activities",languages:"Languages",gpa:"GPA:",data:{universityWestGeorgia:{degree:"BS in Computer and Information Science",institution:"University of West Georgia",location:"Online",period:"July 2025 - Present",description:"Coursework: Computer Architecture, Algorithms, Computational Theory, Database Systems. Focus on software development principles and full-stack web technologies.",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"Exchange Student with GRSP",institution:"University of North Georgia",location:"Georgia, USA",period:"Aug 2024 - May 2025",description:"Coursework: Python Programming, Java, Calculus I & II, Elementary Portuguese. Cultural ambassador representing Nepal among international students.",gpa:"3.51/4.0"},highSchool:{degree:"High School Diploma",institution:"Prasadi Academy",location:"Nepal",period:"March 2021 - June 2023",description:"Strong foundation in mathematics and science with focus on STEM subjects.",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"Georgia Rotary Student Program Scholar",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"Cultural ambassador representing Nepal among 39 students from 22 countries, developing leadership and cross-cultural communication skills."},rotaractMember:{title:"Active Member",organization:"Rotaract Club of Patan Heritage",period:"2023 - Present",description:"Participating in community service projects, fundraising events, and cultural preservation initiatives in Lalitpur."},leoMember:{title:"Former Member",organization:"Leo Club of Kathmandu Manasalu",period:"2021 - 2023",description:"Engaged in social work and leadership development activities for community betterment."}}},common:{loading:"Loading Portfolio...",readMore:"Read More",showLess:"Show Less",scrollDown:"Scroll Down",toggleMenu:"Toggle menu",scrollToTop:"Scroll to top",resumeTitle:"Shaksham Karki Resume"}},Mg={nav:{home:"Inicio",about:"Acerca de",experience:"Experiencia",skills:"Habilidades",education:"Educación",projects:"Proyectos",contact:"Contacto"},hero:{title:"Desarrollador Full-Stack de Aplicaciones Móviles",subtitle:"Construyendo experiencias móviles innovadoras con soluciones backend robustas",summary:"Soy un Desarrollador Full-Stack de Aplicaciones Móviles apasionado con experiencia práctica en la construcción de aplicaciones móviles multiplataforma y servicios backend. Tengo habilidades en desarrollo React Native con una creciente experiencia en tecnologías del lado del servidor y gestión de bases de datos.",availability:"Abierto a oportunidades",viewResume:"Ver Currículum",downloadResume:"Descargar Currículum",getInTouch:"Ponerse en Contacto",socialLabel:"Ponte en contacto conmigo",greeting:"Hola, soy"},about:{title:"Acerca de Mí",subtitle:"Desarrollador apasionado creando soluciones innovadoras",description:"Disfruto creando experiencias móviles fáciles de usar mientras aseguro una funcionalidad backend robusta. Actualmente expandiendo mi conocimiento en desarrollo full-stack mientras persigo mi grado en Ciencias de la Computación.",summary:"Desarrollador Full-Stack de Aplicaciones Móviles apasionado con experiencia práctica en la construcción de aplicaciones móviles multiplataforma y servicios backend. Habilidades en desarrollo React Native con creciente experiencia en tecnologías del lado del servidor y gestión de bases de datos. Actualmente cursando grado en Ciencias de la Computación mientras expando conocimiento en desarrollo full-stack.",location:"Ubicado en Sunakothi, Lalitpur, Nepal, soy apasionado por crear soluciones innovadoras y aprender continuamente nuevas tecnologías. Disfruto trabajando en proyectos que me desafían y me ayudan a crecer como desarrollador.",stats:{projects:"Proyectos Completados",skills:"Habilidades Dominadas",experience:"Años de Experiencia",learning:"Siempre Aprendiendo"},features:{cleanCode:"Código Limpio",cleanCodeDesc:"Escribo código mantenible, escalable y bien documentado siguiendo las mejores prácticas y estándares de la industria.",creativeDesign:"Diseño Creativo",creativeDesignDesc:"Creo interfaces de usuario hermosas e intuitivas que brindan experiencias de usuario excepcionales en todos los dispositivos.",performance:"Rendimiento",performanceDesc:"Optimizo aplicaciones para velocidad y eficiencia, asegurando tiempos de carga rápidos e interacciones suaves.",collaboration:"Colaboración",collaborationDesc:"Trabajo efectivamente en equipos, me comunico claramente y contribuyo a un ambiente de desarrollo positivo."}},experience:{title:"Experiencia Laboral",subtitle:"Mi trayectoria profesional en desarrollo web e ingeniería de software",current:"Presente",achievements:"Logros:",technologies:"Tecnologías:",data:{mobileAppDeveloper:{title:"Desarrollador de Aplicaciones Móviles",company:"Tridev Innovation",location:"Lalitpur, Nepal",period:"Junio 2024 - Presente",description:"Desarrollé aplicaciones móviles usando React Native con enfoque en interfaces amigables para el usuario y rendimiento fluido. Implementé autenticación segura de usuarios, características en tiempo real e integraciones de API de terceros.",achievements:["Construí servicios backend usando Node.js para soportar la funcionalidad de aplicaciones móviles y gestión de datos","Trabajé en características móviles avanzadas incluyendo notificaciones push, autenticación Face ID y sistemas de navegación complejos","Colaboré con miembros del equipo usando Git y GitHub para control de versiones y gestión de proyectos","Entregué proyectos a tiempo manteniendo la calidad del código y siguiendo las mejores prácticas"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"Habilidades Técnicas",subtitle:"Tecnologías con las que trabajo",frontend:"Desarrollo Frontend",backend:"Desarrollo Backend",mobile:"Desarrollo Móvil",tools:"Herramientas y Plataformas",soft:"Habilidades Blandas",whySkillsMatter:"Por Qué Importan Estas Habilidades",skillsDescription:"Actualizo continuamente mi conjunto de habilidades para mantenerme al día con las últimas tecnologías y mejores prácticas. Esta amplia gama de habilidades me permite trabajar en toda la pila de desarrollo y entregar soluciones integrales."},projects:{title:"Proyectos Destacados",subtitle:"Algunos de mis trabajos recientes",viewProject:"Ver Proyecto",viewCode:"Ver Código",technologies:"Tecnologías Utilizadas"},contact:{title:"Ponerse en Contacto",subtitle:"Trabajemos juntos en tu próximo proyecto",getInTouch:"Ponerse en Contacto",description:"Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré mi mejor esfuerzo para responderte!",email:"Email",phone:"Teléfono",location:"Ubicación",followMe:"Sígueme",form:{name:"Nombre",email:"Email",subject:"Asunto",message:"Mensaje",namePlaceholder:"Tu nombre completo",emailPlaceholder:"tu.email@ejemplo.com",subjectPlaceholder:"¿De qué se trata?",messagePlaceholder:"¡Cuéntame sobre tu proyecto o simplemente saluda!",send:"Enviar Mensaje",sending:"Enviando...",success:"¡Mensaje enviado exitosamente! Te responderé pronto.",error:"Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."},social:{github:"GitHub",linkedin:"LinkedIn",email:"Email"}},footer:{tagline:"Desarrollador Full-Stack y Diseñador UI/UX",rights:"Todos los derechos reservados",builtWith:"Construido con React & Vite",description:"Creando experiencias digitales hermosas, funcionales y centradas en el usuario que dan vida a las ideas. Construyamos algo increíble juntos.",quickLinks:"Enlaces Rápidos",connect:"Conéctate Conmigo",copyright:"Todos los derechos reservados. Construido con React & Vite.",trademark:"Todo el contenido, diseños y propiedad intelectual pertenecen a Shaksham Karki. Este sitio web de portafolio y su contenido son propietarios y están protegidos por la ley de derechos de autor."},education:{title:"Educación y Liderazgo",subtitle:"Formación académica y experiencia de liderazgo",academic:"Formación Académica",leadership:"Liderazgo y Actividades",languages:"Idiomas",gpa:"GPA:",data:{universityWestGeorgia:{degree:"Licenciatura en Ciencias de la Computación e Información",institution:"Universidad de West Georgia",location:"En línea",period:"Julio 2025 - Presente",description:"Cursos: Arquitectura de Computadoras, Algoritmos, Teoría Computacional, Sistemas de Base de Datos. Enfoque en principios de desarrollo de software y tecnologías web full-stack.",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"Estudiante de Intercambio con GRSP",institution:"Universidad de North Georgia",location:"Georgia, EE.UU.",period:"Ago 2024 - May 2025",description:"Cursos: Programación en Python, Java, Cálculo I y II, Portugués Elemental. Embajador cultural representando a Nepal entre estudiantes internacionales.",gpa:"3.51/4.0"},highSchool:{degree:"Diploma de Escuela Secundaria",institution:"Academia Prasadi",location:"Nepal",period:"Marzo 2021 - Junio 2023",description:"Base sólida en matemáticas y ciencias con enfoque en materias STEM.",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"Becario del Programa de Estudiantes Rotarios de Georgia",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"Embajador cultural representando a Nepal entre 39 estudiantes de 22 países, desarrollando habilidades de liderazgo y comunicación intercultural."},rotaractMember:{title:"Miembro Activo",organization:"Club Rotaract de Patan Heritage",period:"2023 - Presente",description:"Participando en proyectos de servicio comunitario, eventos de recaudación de fondos e iniciativas de preservación cultural en Lalitpur."},leoMember:{title:"Ex Miembro",organization:"Club Leo de Kathmandu Manasalu",period:"2021 - 2023",description:"Comprometido en trabajo social y actividades de desarrollo de liderazgo para el mejoramiento de la comunidad."}}},common:{loading:"Cargando Portafolio...",readMore:"Leer Más",showLess:"Mostrar Menos",scrollDown:"Desplazarse Hacia Abajo",toggleMenu:"Alternar menú",scrollToTop:"Desplázate hacia arriba",resumeTitle:"Currículum de Shaksham Karki"}},zg={nav:{home:"घर",about:"मेरो बारेमा",experience:"अनुभव",skills:"कौशल",education:"शिक्षा",projects:"परियोजना",contact:"सम्पर्क"},hero:{title:"मोबाइल एप फुल-स्ट्याक डेभलपर",subtitle:"दृढ ब्याकएन्ड समाधानहरूसँग नवीन मोबाइल अनुभवहरू निर्माण गर्दै",summary:"म एक जुनसाँल मोबाइल एप फुल-स्ट्याक डेभलपर हुँ जसको क्रस-प्लेटफर्म मोबाइल अनुप्रयोगहरू र ब्याकएन्ड सेवाहरू निर्माण गर्ने व्यावहारिक अनुभव छ। म रिएक्ट नेटिभ डेभलपमेन्टमा कुशल छु र सर्भर-साइड टेक्नोलोजीहरू र डेटाबेस व्यवस्थापनमा बढ्दो विशेषज्ञता छ।",availability:"अवसरहरूका लागि खुला",viewResume:"रिज्युम हेर्नुहोस्",downloadResume:"रिज्युम डाउनलोड गर्नुहोस्",getInTouch:"सम्पर्कमा आउनुहोस्",socialLabel:"मसँग सम्पर्क गर्नुहोस्",greeting:"नमस्ते, म"},about:{title:"मेरो बारेमा",subtitle:"नवीन समाधानहरू सिर्जना गर्ने जुनसाँल डेभलपर",description:"म दृढ ब्याकएन्ड कार्यक्षमता सुनिश्चित गर्दै प्रयोगकर्ता-मैत्री मोबाइल अनुभवहरू सिर्जना गर्न मजा लिन्छु। हाल मेरो कम्प्युटर साइन्स डिग्रीको पछि लाग्दै फुल-स्ट्याक डेभलपमेन्टमा मेरो ज्ञान विस्तार गर्दैछु।",summary:"क्रस-प्लेटफर्म मोबाइल अनुप्रयोगहरू र ब्याकएन्ड सेवाहरू निर्माण गर्ने व्यावहारिक अनुभव भएको जुनसाँल मोबाइल एप फुल-स्ट्याक डेभलपर। सर्भर-साइड टेक्नोलोजीहरू र डेटाबेस व्यवस्थापनमा बढ्दो विशेषज्ञतासँग रिएक्ट नेटिभ डेभलपमेन्टमा कुशल। हाल कम्प्युटर साइन्स डिग्रीको पछि लाग्दै फुल-स्ट्याक डेभलपमेन्टमा ज्ञान विस्तार गर्दै।",location:"सुनकोठी, ललितपुर, नेपालमा आधारित, म नवीन समाधानहरू सिर्जना गर्न र निरन्तर नयाँ टेक्नोलोजीहरू सिक्न जुनसाँल छु। म त्यस्ता परियोजनाहरूमा काम गर्न मजा लिन्छु जसले मलाई चुनौती दिन्छन् र मलाई डेभलपरको रूपमा बढ्न मद्दत गर्छन्।",stats:{projects:"पूरा भएका परियोजना",skills:"कौशलहरू महारत",experience:"वर्ष अनुभव",learning:"सधैं सिक्दै"},features:{cleanCode:"सफा कोड",cleanCodeDesc:"म उत्तम अभ्यास र उद्योग मानकहरूको पालना गर्दै राखराख योग्य, स्केलेबल र राम्रोसँग प्रलेखित कोड लेख्छु।",creativeDesign:"रचनात्मक डिजाइन",creativeDesignDesc:"म सुन्दर, सहज ज्ञान युक्त प्रयोगकर्ता इन्टरफेस सिर्जना गर्छु जसले सबै उपकरणहरूमा असाधारण प्रयोगकर्ता अनुभव प्रदान गर्छ।",performance:"प्रदर्शन",performanceDesc:"म गति र दक्षताका लागि अनुप्रयोगहरू अनुकूलित गर्छु, छिटो लोडिंग समय र सुचारू अन्तरक्रिया सुनिश्चित गर्दै।",collaboration:"सहयोग",collaborationDesc:"म टोलीहरूमा प्रभावकारी रूपमा काम गर्छु, स्पष्ट रूपमा संवाद गर्छु र सकारात्मक विकास वातावरणमा योगदान दिन्छु।"}},experience:{title:"कामको अनुभव",subtitle:"वेब डेभलपमेन्ट र सफ्टवेयर इन्जिनियरिङमा मेरो व्यावसायिक यात्रा",current:"वर्तमान",achievements:"उपलब्धिहरू:",technologies:"टेक्नोलोजीहरू:",data:{mobileAppDeveloper:{title:"मोबाइल एप डेभलपर",company:"ट्राइडेव इनोभेसन",location:"ललितपुर, नेपाल",period:"जुन २०२४ - वर्तमान",description:"प्रयोगकर्ता-मैत्री इन्टरफेस र सुगम प्रदर्शनमा ध्यान दिएर React Native प्रयोग गरेर मोबाइल अनुप्रयोगहरू विकसित गरे। सुरक्षित प्रयोगकर्ता प्रमाणीकरण, वास्तविक समयका सुविधाहरू, र तेस्रो पक्ष API एकीकरणहरू कार्यान्वयन गरे।",achievements:["मोबाइल एप कार्यक्षमता र डेटा व्यवस्थापनलाई समर्थन गर्न Node.js प्रयोग गरेर ब्याकएन्ड सेवाहरू निर्माण गरे","पुश सूचनाहरू, Face ID प्रमाणीकरण, र जटिल नेभिगेसन प्रणालीहरू सहित उन्नत मोबाइल सुविधाहरूमा काम गरे","संस्करण नियन्त्रण र परियोजना व्यवस्थापनका लागि Git र GitHub प्रयोग गरेर टोलीका सदस्यहरूसँग सहयोग गरे","कोड गुणस्तर राख्दै र उत्तम अभ्यासहरू पालन गर्दै परियोजनाहरू समयमै वितरण गरे"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"प्राविधिक कौशल",subtitle:"म काम गर्ने टेक्नोलोजीहरू",frontend:"फ्रन्टएन्ड डेभलपमेन्ट",backend:"ब्याकएन्ड डेभलपमेन्ट",mobile:"मोबाइल डेभलपमेन्ट",tools:"उपकरण र प्लेटफर्महरू",soft:"नरम कौशल",whySkillsMatter:"यी कौशलहरू किन महत्वपूर्ण छन्",skillsDescription:"म नवीनतम टेक्नोलोजीहरू र उत्तम अभ्यासहरूसँग अद्यावधिक रहनका लागि मेरो कौशल सेटलाई निरन्तर अपडेट गर्छु। यो विविध कौशलहरूको दायराले मलाई सम्पूर्ण डेभलपमेन्ट स्ट्याकमा काम गर्न र व्यापक समाधानहरू प्रदान गर्न अनुमति दिन्छ।"},projects:{title:"विशेष परियोजनाहरू",subtitle:"मेरो हालका कामहरूको केही",viewProject:"परियोजना हेर्नुहोस्",viewCode:"कोड हेर्नुहोस्",technologies:"प्रयोग भएका टेक्नोलोजीहरू"},contact:{title:"सम्पर्कमा आउनुहोस्",subtitle:"तपाईंको अर्को परियोजनामा सँगै काम गरौं",getInTouch:"सम्पर्कमा आउनुहोस्",description:"म सधैं नयाँ अवसरहरू र रोमाञ्चक परियोजनाहरूमा रुचि राख्छु। तपाईंसँग प्रश्न छ वा केवल नमस्कार गर्न चाहनुहुन्छ, म तपाईंलाई जवाफ दिन पूरा प्रयास गर्छु!",email:"इमेल",phone:"फोन",location:"स्थान",followMe:"मलाई फलो गर्नुहोस्",form:{name:"नाम",email:"इमेल",subject:"विषय",message:"सन्देश",namePlaceholder:"तपाईंको पूरा नाम",emailPlaceholder:"तपाईंको.इमेल@उदाहरण.com",subjectPlaceholder:"यो केको बारेमा हो?",messagePlaceholder:"मलाई आफ्नो परियोजनाको बारेमा भन्नुहोस् वा केवल नमस्कार गर्नुहोस्!",send:"सन्देश पठाउनुहोस्",sending:"पठाइरहेको...",success:"सन्देश सफलतापूर्वक पठाइयो! म चाँडै तपाईंसँग सम्पर्क गर्छु।",error:"सन्देश पठाउन असफल। कृपया पछि फेरि प्रयास गर्नुहोस्।"},social:{github:"गिटहब",linkedin:"लिंक्डइन",email:"इमेल"}},footer:{tagline:"फुल-स्ट्याक डेभलपर र UI/UX डिजाइनर",rights:"सबै अधिकार सुरक्षित",builtWith:"रिएक्ट र भाइटसँग निर्मित",description:"सुन्दर, कार्यात्मक र प्रयोगकर्ता-केन्द्रित डिजिटल अनुभवहरू सिर्जना गर्दै जसले विचारहरूलाई जीवन दिन्छ। आउनुहोस्, सँगै केही अद्भुत निर्माण गरौं।",quickLinks:"छिटो लिंकहरू",connect:"मसँग जोडिनुहोस्",copyright:"सबै अधिकार सुरक्षित। रिएक्ट र भाइटसँग निर्मित।",trademark:"सबै सामग्री, डिजाइन र बौद्धिक सम्पत्ति शक्शम कार्कीको अन्तर्गत आउँछ। यो पोर्टफोलियो वेबसाइट र यसको सामग्री स्वामित्वमा छ र कपीराइट कानूनद्वारा संरक्षित छ।"},education:{title:"शिक्षा र नेतृत्व",subtitle:"शैक्षिक पृष्ठभूमि र नेतृत्व अनुभव",academic:"शैक्षिक पृष्ठभूमि",leadership:"नेतृत्व र गतिविधिहरू",languages:"भाषाहरू",gpa:"GPA:",data:{universityWestGeorgia:{degree:"कम्प्युटर र सूचना विज्ञानमा स्नातक",institution:"वेस्ट जर्जिया विश्वविद्यालय",location:"अनलाइन",period:"जुलाई २०२५ - वर्तमान",description:"कोर्सवर्क: कम्प्युटर आर्किटेक्चर, एल्गोरिदम, कम्प्युटेशनल थियरी, डेटाबेस सिस्टम। सफ्टवेयर विकास सिद्धान्तहरू र फुल-स्ट्याक वेब टेक्नोलोजीहरूमा ध्यान।",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"GRSP सँग विनिमय विद्यार्थी",institution:"नर्थ जर्जिया विश्वविद्यालय",location:"जर्जिया, अमेरिका",period:"अगस्ट २०२४ - मे २०२५",description:"कोर्सवर्क: पाइथन प्रोग्रामिङ, जाभा, क्यालकुलस I र II, प्राथमिक पोर्तुगाली। अन्तर्राष्ट्रिय विद्यार्थीहरू बीच नेपालको प्रतिनिधित्व गर्ने सांस्कृतिक राजदूत।",gpa:"3.51/4.0"},highSchool:{degree:"उच्च विद्यालय डिप्लोमा",institution:"प्रसादी एकेडमी",location:"नेपाल",period:"मार्च २०२१ - जुन २०२३",description:"STEM विषयहरूमा ध्यान दिएर गणित र विज्ञानमा मजबुत आधार।",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"जर्जिया रोटरी विद्यार्थी कार्यक्रम छात्रवृत्ति",organization:"GRSP २०२४-२०२५",period:"२०२४ - २०२५",description:"२२ देशका ३९ विद्यार्थीहरू बीच नेपालको प्रतिनिधित्व गर्ने सांस्कृतिक राजदूत, नेतृत्व र अन्तर-सांस्कृतिक संचार कौशल विकास गर्दै।"},rotaractMember:{title:"सक्रिय सदस्य",organization:"पाटन हेरिटेज रोटर्याक्ट क्लब",period:"२०२३ - वर्तमान",description:"ललितपुरमा सामुदायिक सेवा परियोजनाहरू, फण्ड उठाउने कार्यक्रमहरू र सांस्कृतिक संरक्षण पहलहरूमा सहभागिता।"},leoMember:{title:"पूर्व सदस्य",organization:"काठमाडौं मनास्लु लियो क्लब",period:"२०२१ - २०२३",description:"सामुदायिक सुधारका लागि सामाजिक कार्य र नेतृत्व विकास गतिविधिहरूमा संलग्न।"}}},common:{loading:"पोर्टफोलियो लोड गर्दै...",readMore:"थप पढ्नुहोस्",showLess:"कम देखाउनुहोस्",scrollDown:"तल स्क्रोल गर्नुहोस्",scrollToTop:"माथि स्क्रोल गर्नुहोस्"}},Dg={nav:{home:"होम",about:"मेरे बारे में",experience:"अनुभव",skills:"कौशल",education:"शिक्षा",projects:"प्रोजेक्ट",contact:"संपर्क"},hero:{title:"मोबाइल ऐप फुल-स्टैक डेवलपर",subtitle:"मजबूत बैकएंड समाधानों के साथ नवीन मोबाइल अनुभव बनाना",summary:"मैं एक भावुक मोबाइल ऐप फुल-स्टैक डेवलपर हूं जिसे क्रॉस-प्लेटफॉर्म मोबाइल अनुप्रयोगों और बैकएंड सेवाओं के निर्माण में व्यावहारिक अनुभव है। मैं रिएक्ट नेटिव डेवलपमेंट में कुशल हूं और सर्वर-साइड तकनीकों और डेटाबेस प्रबंधन में बढ़ती विशेषज्ञता रखता हूं।",availability:"अवसरों के लिए खुला",viewResume:"रिज्यूम देखें",downloadResume:"रिज्यूम डाउनलोड करें",getInTouch:"संपर्क में आएं",socialLabel:"मेरे साथ संपर्क में रहें",greeting:"नमस्ते, मैं"},about:{title:"मेरे बारे में",subtitle:"नवीन समाधान बनाने वाला भावुक डेवलपर",description:"मैं मजबूत बैकएंड कार्यक्षमता सुनिश्चित करते हुए उपयोगकर्ता-अनुकूल मोबाइल अनुभव बनाने का आनंद लेता हूं। वर्तमान में मैं अपनी कंप्यूटर साइंस डिग्री का पीछा करते हुए फुल-स्टैक डेवलपमेंट में अपने ज्ञान का विस्तार कर रहा हूं।",summary:"क्रॉस-प्लेटफॉर्म मोबाइल अनुप्रयोगों और बैकएंड सेवाओं के निर्माण में व्यावहारिक अनुभव के साथ भावुक मोबाइल ऐप फुल-स्टैक डेवलपर। सर्वर-साइड तकनीकों और डेटाबेस प्रबंधन में बढ़ती विशेषज्ञता के साथ रिएक्ट नेटिव डेवलपमेंट में कुशल। वर्तमान में कंप्यूटर साइंस डिग्री का पीछा करते हुए फुल-स्टैक डेवलपमेंट में ज्ञान का विस्तार कर रहा हूं।",location:"सुनकोठी, ललितपुर, नेपाल में स्थित, मैं नवीन समाधान बनाने और निरंतर नई तकनीकों सीखने का जुनून रखता हूं। मैं उन परियोजनाओं पर काम करना पसंद करता हूं जो मुझे चुनौती देती हैं और मुझे एक डेवलपर के रूप में बढ़ने में मदद करती हैं।",stats:{projects:"पूर्ण प्रोजेक्ट",skills:"कौशल महारत",experience:"वर्षों का अनुभव",learning:"हमेशा सीखते रहना"},features:{cleanCode:"साफ कोड",cleanCodeDesc:"मैं सर्वोत्तम प्रथाओं और उद्योग मानकों का पालन करते हुए रखरखाव योग्य, स्केलेबल और अच्छी तरह से प्रलेखित कोड लिखता हूं।",creativeDesign:"रचनात्मक डिजाइन",creativeDesignDesc:"मैं सुंदर, सहज ज्ञान युक्त उपयोगकर्ता इंटरफेस बनाता हूं जो सभी डिवाइसों पर असाधारण उपयोगकर्ता अनुभव प्रदान करते हैं।",performance:"प्रदर्शन",performanceDesc:"मैं गति और दक्षता के लिए अनुप्रयोगों को अनुकूलित करता हूं, तेज़ लोडिंग समय और सुचारू इंटरैक्शन सुनिश्चित करता हूं।",collaboration:"सहयोग",collaborationDesc:"मैं टीमों में प्रभावी रूप से काम करता हूं, स्पष्ट रूप से संवाद करता हूं और सकारात्मक विकास वातावरण में योगदान देता हूं।"}},experience:{title:"कार्य अनुभव",subtitle:"वेब डेवलपमेंट और सॉफ्टवेयर इंजीनियरिंग में मेरी व्यावसायिक यात्रा",current:"वर्तमान",achievements:"उपलब्धियां:",technologies:"तकनीकें:",data:{mobileAppDeveloper:{title:"मोबाइल ऐप डेवलपर",company:"ट्राइडेव इनोवेशन",location:"ललितपुर, नेपाल",period:"जून 2024 - वर्तमान",description:"उपयोगकर्ता-अनुकूल इंटरफेस और सुगम प्रदर्शन पर ध्यान केंद्रित करते हुए React Native का उपयोग करके मोबाइल अनुप्रयोग विकसित किए। सुरक्षित उपयोगकर्ता प्रमाणीकरण, वास्तविक समय सुविधाएं, और तृतीय-पक्ष API एकीकरण लागू किए।",achievements:["मोबाइल ऐप कार्यक्षमता और डेटा प्रबंधन का समर्थन करने के लिए Node.js का उपयोग करके बैकएंड सेवाएं बनाईं","पुश नोटिफिकेशन, Face ID प्रमाणीकरण, और जटिल नेविगेशन सिस्टम सहित उन्नत मोबाइल सुविधाओं पर काम किया","संस्करण नियंत्रण और परियोजना प्रबंधन के लिए Git और GitHub का उपयोग करके टीम के सदस्यों के साथ सहयोग किया","कोड गुणवत्ता बनाए रखते हुए और सर्वोत्तम प्रथाओं का पालन करते हुए परियोजनाओं को समय पर वितरित किया"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"तकनीकी कौशल",subtitle:"तकनीकें जिनके साथ मैं काम करता हूं",frontend:"फ्रंटएंड डेवलपमेंट",backend:"बैकएंड डेवलपमेंट",mobile:"मोबाइल डेवलपमेंट",tools:"उपकरण और प्लेटफॉर्म",soft:"सॉफ्ट स्किल्स",whySkillsMatter:"ये कौशल क्यों महत्वपूर्ण हैं",skillsDescription:"मैं नवीनतम तकनीकों और सर्वोत्तम प्रथाओं के साथ अद्यतन रहने के लिए अपने कौशल सेट को लगातार अपडेट करता हूं। कौशलों की यह विविध श्रेणी मुझे पूरे डेवलपमेंट स्टैक में काम करने और व्यापक समाधान प्रदान करने की अनुमति देती है।"},projects:{title:"विशेष प्रोजेक्ट",subtitle:"मेरे हाल के कामों में से कुछ",viewProject:"प्रोजेक्ट देखें",viewCode:"कोड देखें",technologies:"उपयोग की गई तकनीकें"},contact:{title:"संपर्क में आएं",subtitle:"आइए आपके अगले प्रोजेक्ट पर एक साथ काम करें",getInTouch:"संपर्क में आएं",description:"मैं हमेशा नए अवसरों और रोमांचक परियोजनाओं में रुचि रखता हूं। चाहे आपके पास कोई प्रश्न हो या आप बस हैलो कहना चाहते हों, मैं आपको जवाब देने की पूरी कोशिश करूंगा!",email:"ईमेल",phone:"फोन",location:"स्थान",followMe:"मुझे फॉलो करें",form:{name:"नाम",email:"ईमेल",subject:"विषय",message:"संदेश",namePlaceholder:"आपका पूरा नाम",emailPlaceholder:"आपका.ईमेल@उदाहरण.com",subjectPlaceholder:"यह किस बारे में है?",messagePlaceholder:"मुझे अपने प्रोजेक्ट के बारे में बताएं या बस हैलो कहें!",send:"संदेश भेजें",sending:"भेजा जा रहा है...",success:"संदेश सफलतापूर्वक भेजा गया! मैं जल्द ही आपसे संपर्क करूंगा।",error:"संदेश भेजने में विफल। कृपया बाद में पुनः प्रयास करें।"},social:{github:"गिटहब",linkedin:"लिंक्डइन",email:"ईमेल"}},footer:{tagline:"फुल-स्टैक डेवलपर और UI/UX डिज़ाइनर",rights:"सभी अधिकार सुरक्षित",builtWith:"रिएक्ट और वाइट के साथ निर्मित",description:"विचारों को जीवन देने वाले सुंदर, कार्यात्मक और उपयोगकर्ता-केंद्रित डिजिटल अनुभव बना रहा हूं। आइए मिलकर कुछ अद्भुत बनाएं।",quickLinks:"त्वरित लिंक",connect:"मुझसे जुड़ें",copyright:"सभी अधिकार सुरक्षित। रिएक्ट और वाइट के साथ निर्मित।",trademark:"सभी सामग्री, डिज़ाइन और बौद्धिक संपदा शक्शम कार्की के अंतर्गत आती है। यह पोर्टफोलियो वेबसाइट और इसकी सामग्री स्वामित्व में है और कॉपीराइट कानून द्वारा संरक्षित है।"},education:{title:"शिक्षा और नेतृत्व",subtitle:"शैक्षिक पृष्ठभूमि और नेतृत्व अनुभव",academic:"शैक्षिक पृष्ठभूमि",leadership:"नेतृत्व और गतिविधियां",languages:"भाषाएं",gpa:"GPA:",data:{universityWestGeorgia:{degree:"कंप्यूटर और सूचना विज्ञान में स्नातक",institution:"वेस्ट जॉर्जिया विश्वविद्यालय",location:"ऑनलाइन",period:"जुलाई 2025 - वर्तमान",description:"पाठ्यक्रम: कंप्यूटर आर्किटेक्चर, एल्गोरिदम, कम्प्यूटेशनल थ्योरी, डेटाबेस सिस्टम। सॉफ्टवेयर विकास सिद्धांतों और फुल-स्टैक वेब तकनीकों पर ध्यान।",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"GRSP के साथ एक्सचेंज छात्र",institution:"नॉर्थ जॉर्जिया विश्वविद्यालय",location:"जॉर्जिया, यूएसए",period:"अगस्त 2024 - मई 2025",description:"पाठ्यक्रम: पायथन प्रोग्रामिंग, जावा, कैलकुलस I और II, प्राथमिक पुर्तगाली। अंतर्राष्ट्रीय छात्रों के बीच नेपाल का प्रतिनिधित्व करने वाले सांस्कृतिक राजदूत।",gpa:"3.51/4.0"},highSchool:{degree:"हाई स्कूल डिप्लोमा",institution:"प्रसादी अकादमी",location:"नेपाल",period:"मार्च 2021 - जून 2023",description:"STEM विषयों पर ध्यान देकर गणित और विज्ञान में मजबूत आधार।",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"जॉर्जिया रोटरी छात्र कार्यक्रम छात्रवृत्ति",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"22 देशों के 39 छात्रों के बीच नेपाल का प्रतिनिधित्व करने वाले सांस्कृतिक राजदूत, नेतृत्व और अंतर-सांस्कृतिक संचार कौशल विकसित करते हुए।"},rotaractMember:{title:"सक्रिय सदस्य",organization:"पाटन हेरिटेज रोटरैक्ट क्लब",period:"2023 - वर्तमान",description:"ललितपुर में सामुदायिक सेवा परियोजनाओं, फंडरेजिंग कार्यक्रमों और सांस्कृतिक संरक्षण पहलों में भागीदारी।"},leoMember:{title:"पूर्व सदस्य",organization:"काठमांडू मनास्लु लियो क्लब",period:"2021 - 2023",description:"सामुदायिक सुधार के लिए सामाजिक कार्य और नेतृत्व विकास गतिविधियों में संलग्न।"}}},common:{loading:"पोर्टफोलियो लोड हो रहा है...",readMore:"और पढ़ें",showLess:"कम दिखाएं",scrollDown:"नीचे स्क्रॉल करें",toggleMenu:"मेनू टॉगल करें",scrollToTop:"शीर्ष पर स्क्रॉल करें",resumeTitle:"शक्शम कार्की रिज्यूम"}},Lg={nav:{home:"ホーム",about:"私について",experience:"経験",skills:"スキル",education:"教育",projects:"プロジェクト",contact:"お問い合わせ"},hero:{title:"モバイルアプリ フルスタック開発者",subtitle:"堅牢なバックエンドソリューションで革新的なモバイル体験を構築",summary:"クロスプラットフォームモバイルアプリケーションとバックエンドサービスの構築に実践的な経験を持つ情熱的なモバイルアプリフルスタック開発者です。React Native開発に熟練し、サーバーサイド技術とデータベース管理の専門知識を高めています。",availability:"機会に開放",viewResume:"履歴書を見る",downloadResume:"履歴書をダウンロード",getInTouch:"お問い合わせ",socialLabel:"私と連絡を取ってください",greeting:"こんにちは、私は"},about:{title:"私について",subtitle:"革新的なソリューションを作成する情熱的な開発者",description:"堅牢なバックエンド機能を確保しながら、ユーザーフレンドリーなモバイル体験を作成することを楽しんでいます。現在、コンピューターサイエンスの学位を取得しながら、フルスタック開発の知識を拡大しています。",summary:"クロスプラットフォームモバイルアプリケーションとバックエンドサービスの構築に実践的な経験を持つ情熱的なモバイルアプリフルスタック開発者。サーバーサイド技術とデータベース管理の専門知識を高めながら、React Native開発に熟練。現在、コンピューターサイエンスの学位を取得しながら、フルスタック開発の知識を拡大しています。",location:"ネパールのスナコティ、ラリトプールを拠点とし、革新的なソリューションの作成と新しい技術の継続的な学習に情熱を注いでいます。私を挑戦し、開発者として成長するのに役立つプロジェクトに取り組むことを楽しんでいます。",stats:{projects:"完了プロジェクト",skills:"習得スキル",experience:"年の経験",learning:"常に学習中"},features:{cleanCode:"クリーンコード",cleanCodeDesc:"ベストプラクティスと業界標準に従って、保守性、スケーラビリティ、適切に文書化されたコードを書きます。",creativeDesign:"クリエイティブデザイン",creativeDesignDesc:"すべてのデバイスで優れたユーザーエクスペリエンスを提供する美しく直感的なユーザーインターフェースを作成します。",performance:"パフォーマンス",performanceDesc:"アプリケーションを速度と効率のために最適化し、高速な読み込み時間とスムーズなインタラクションを保証します。",collaboration:"コラボレーション",collaborationDesc:"チームで効果的に働き、明確にコミュニケーションを取り、ポジティブな開発環境に貢献します。"}},experience:{title:"職歴",subtitle:"ウェブ開発とソフトウェアエンジニアリングにおける私の専門的な旅路",current:"現在",achievements:"成果:",technologies:"技術:",data:{mobileAppDeveloper:{title:"モバイルアプリ開発者",company:"トライデブ・イノベーション",location:"ラリトプル、ネパール",period:"2024年6月 - 現在",description:"ユーザーフレンドリーなインターフェースとスムーズなパフォーマンスに焦点を当てて、React Nativeを使用してモバイルアプリケーションを開発しました。安全なユーザー認証、リアルタイム機能、サードパーティAPI統合を実装しました。",achievements:["モバイルアプリの機能とデータ管理をサポートするためにNode.jsを使用してバックエンドサービスを構築しました","プッシュ通知、Face ID認証、複雑なナビゲーションシステムを含む高度なモバイル機能に取り組みました","バージョン管理とプロジェクト管理のためにGitとGitHubを使用してチームメンバーと協力しました","コード品質を維持し、ベストプラクティスに従いながら、プロジェクトを時間通りに配信しました"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"技術スキル",subtitle:"使用する技術",frontend:"フロントエンド開発",backend:"バックエンド開発",mobile:"モバイル開発",tools:"ツールとプラットフォーム",soft:"ソフトスキル",whySkillsMatter:"これらのスキルが重要な理由",skillsDescription:"最新の技術とベストプラクティスに追いつくために、スキルセットを継続的に更新しています。この多様なスキル範囲により、開発スタック全体で作業し、包括的なソリューションを提供することができます。"},projects:{title:"注目のプロジェクト",subtitle:"最近の作品の一部",viewProject:"プロジェクトを見る",viewCode:"コードを見る",technologies:"使用技術"},contact:{title:"お問い合わせ",subtitle:"次のプロジェクトで一緒に働きましょう",getInTouch:"お問い合わせ",description:"新しい機会やエキサイティングなプロジェクトに常に興味があります。質問がある場合でも、単に挨拶したい場合でも、できる限りお返事いたします！",email:"メール",phone:"電話",location:"所在地",followMe:"フォローしてください",form:{name:"名前",email:"メール",subject:"件名",message:"メッセージ",namePlaceholder:"お名前を入力してください",emailPlaceholder:"your.email@example.com",subjectPlaceholder:"件名を入力してください",messagePlaceholder:"プロジェクトについて教えてください、または挨拶してください！",send:"メッセージを送信",sending:"送信中...",success:"メッセージが正常に送信されました！すぐにご連絡いたします。",error:"メッセージの送信に失敗しました。後でもう一度お試しください。"},social:{github:"GitHub",linkedin:"LinkedIn",email:"メール"}},footer:{tagline:"フルスタック開発者＆UI/UXデザイナー",rights:"全著作権所有",builtWith:"React & Viteで構築",description:"アイデアを形にする美しく、機能的でユーザー中心のデジタル体験を作成しています。一緒に素晴らしいものを作りましょう。",quickLinks:"クイックリンク",connect:"お問い合わせ",copyright:"全著作権所有。React & Viteで構築。",trademark:"すべてのコンテンツ、デザイン、知的財産はShaksham Karkiに帰属します。このポートフォリオウェブサイトとその内容は専有物であり、著作権法により保護されています。"},education:{title:"教育とリーダーシップ",subtitle:"学歴とリーダーシップ経験",academic:"学歴",leadership:"リーダーシップと活動",languages:"言語",gpa:"GPA:",data:{universityWestGeorgia:{degree:"コンピューター・情報科学学士",institution:"ウェストジョージア大学",location:"オンライン",period:"2025年7月 - 現在",description:"履修科目: コンピューターアーキテクチャ、アルゴリズム、計算理論、データベースシステム。ソフトウェア開発原理とフルスタックWeb技術に焦点。",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"GRSP交換留学生",institution:"ノースジョージア大学",location:"ジョージア州、アメリカ",period:"2024年8月 - 2025年5月",description:"履修科目: Pythonプログラミング、Java、微積分I・II、初級ポルトガル語。国際学生の中でネパールを代表する文化大使。",gpa:"3.51/4.0"},highSchool:{degree:"高校卒業証書",institution:"プラサディアカデミー",location:"ネパール",period:"2021年3月 - 2023年6月",description:"STEM科目に焦点を当てた数学と科学の強固な基盤。",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"ジョージアロータリー学生プログラム奨学生",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"22カ国39名の学生の中でネパールを代表する文化大使として、リーダーシップと異文化間コミュニケーションスキルを開発。"},rotaractMember:{title:"アクティブメンバー",organization:"パタンヘリテージロータラクトクラブ",period:"2023 - 現在",description:"ラリトプールでのコミュニティサービスプロジェクト、資金調達イベント、文化保存イニシアチブに参加。"},leoMember:{title:"元メンバー",organization:"カトマンズマナスルレオクラブ",period:"2021 - 2023",description:"コミュニティ改善のための社会奉仕活動とリーダーシップ開発活動に従事。"}}},common:{loading:"ポートフォリオを読み込み中...",readMore:"続きを読む",showLess:"折りたたむ",scrollDown:"下にスクロール",toggleMenu:"メニューを切り替え",scrollToTop:"トップにスクロール",resumeTitle:"Shaksham Karki履歴書"}},Ag={nav:{home:"Startseite",about:"Über mich",experience:"Erfahrung",skills:"Fähigkeiten",education:"Bildung",projects:"Projekte",contact:"Kontakt"},hero:{title:"Mobile App Full-Stack Entwickler",subtitle:"Innovative mobile Erfahrungen mit robusten Backend-Lösungen erstellen",summary:"Ich bin ein leidenschaftlicher Mobile App Full-Stack Entwickler mit praktischer Erfahrung in der Entwicklung plattformübergreifender mobiler Anwendungen und Backend-Services. Ich bin versiert in React Native Entwicklung mit wachsender Expertise in serverseitigen Technologien und Datenbankmanagement.",availability:"Offen für Möglichkeiten",viewResume:"Lebenslauf anzeigen",downloadResume:"Lebenslauf herunterladen",getInTouch:"Kontakt aufnehmen",socialLabel:"Kontaktieren Sie mich",greeting:"Hallo, ich bin"},about:{title:"Über mich",subtitle:"Leidenschaftlicher Entwickler, der innovative Lösungen schafft",description:"Ich genieße es, benutzerfreundliche mobile Erfahrungen zu schaffen und gleichzeitig robuste Backend-Funktionalität sicherzustellen. Derzeit erweitere ich mein Wissen in der Full-Stack-Entwicklung während ich meinen Informatik-Abschluss verfolge.",summary:"Leidenschaftlicher Mobile App Full-Stack Entwickler mit praktischer Erfahrung in der Entwicklung plattformübergreifender mobiler Anwendungen und Backend-Services. Versiert in React Native Entwicklung mit wachsender Expertise in serverseitigen Technologien und Datenbankmanagement. Derzeit verfolge ich einen Informatik-Abschluss und erweitere mein Wissen in der Full-Stack-Entwicklung.",location:"Ansässig in Sunakothi, Lalitpur, Nepal, bin ich leidenschaftlich daran interessiert, innovative Lösungen zu schaffen und kontinuierlich neue Technologien zu lernen. Ich arbeite gerne an Projekten, die mich herausfordern und mir helfen, als Entwickler zu wachsen.",stats:{projects:"Abgeschlossene Projekte",skills:"Beherrschte Fähigkeiten",experience:"Jahre Erfahrung",learning:"Immer lernend"},features:{cleanCode:"Sauberer Code",cleanCodeDesc:"Ich schreibe wartbaren, skalierbaren und gut dokumentierten Code, der Best Practices und Industriestandards befolgt.",creativeDesign:"Kreatives Design",creativeDesignDesc:"Ich erstelle schöne, intuitive Benutzeroberflächen, die außergewöhnliche Benutzererfahrungen auf allen Geräten bieten.",performance:"Leistung",performanceDesc:"Ich optimiere Anwendungen für Geschwindigkeit und Effizienz und stelle schnelle Ladezeiten und reibungslose Interaktionen sicher.",collaboration:"Zusammenarbeit",collaborationDesc:"Ich arbeite effektiv in Teams, kommuniziere klar und trage zu einer positiven Entwicklungsumgebung bei."}},experience:{title:"Berufserfahrung",subtitle:"Meine berufliche Reise in der Webentwicklung und Softwareentwicklung",current:"Gegenwart",achievements:"Erfolge:",technologies:"Technologien:",data:{mobileAppDeveloper:{title:"Mobile App Entwickler",company:"Tridev Innovation",location:"Lalitpur, Nepal",period:"Juni 2024 - Gegenwart",description:"Entwickelte mobile Anwendungen mit React Native mit Fokus auf benutzerfreundliche Oberflächen und reibungslose Leistung. Implementierte sichere Benutzerauthentifizierung, Echtzeitfunktionen und Drittanbieter-API-Integrationen.",achievements:["Backend-Services mit Node.js entwickelt, um mobile App-Funktionalität und Datenverwaltung zu unterstützen","An fortgeschrittenen mobilen Funktionen gearbeitet, einschließlich Push-Benachrichtigungen, Face ID-Authentifizierung und komplexen Navigationssystemen","Mit Teammitgliedern mit Git und GitHub für Versionskontrolle und Projektmanagement zusammengearbeitet","Projekte pünktlich geliefert und dabei Codequalität beibehalten und Best Practices befolgt"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"Technische Fähigkeiten",subtitle:"Technologien, mit denen ich arbeite",frontend:"Frontend-Entwicklung",backend:"Backend-Entwicklung",mobile:"Mobile Entwicklung",tools:"Tools & Plattformen",soft:"Soft Skills",whySkillsMatter:"Warum diese Fähigkeiten wichtig sind",skillsDescription:"Ich aktualisiere kontinuierlich meine Fähigkeiten, um mit den neuesten Technologien und Best Practices Schritt zu halten. Diese vielfältige Palette von Fähigkeiten ermöglicht es mir, über den gesamten Entwicklungsstack zu arbeiten und umfassende Lösungen zu liefern."},projects:{title:"Ausgewählte Projekte",subtitle:"Einige meiner neuesten Arbeiten",viewProject:"Projekt anzeigen",viewCode:"Code anzeigen",technologies:"Verwendete Technologien"},contact:{title:"Kontakt aufnehmen",subtitle:"Lassen Sie uns zusammen an Ihrem nächsten Projekt arbeiten",getInTouch:"Kontakt aufnehmen",description:"Ich bin immer an neuen Möglichkeiten und aufregenden Projekten interessiert. Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten, ich werde mein Bestes geben, um Ihnen zu antworten!",email:"E-Mail",phone:"Telefon",location:"Standort",followMe:"Folgen Sie mir",form:{name:"Name",email:"E-Mail",subject:"Betreff",message:"Nachricht",namePlaceholder:"Ihr vollständiger Name",emailPlaceholder:"ihre.email@beispiel.com",subjectPlaceholder:"Worum geht es?",messagePlaceholder:"Erzählen Sie mir von Ihrem Projekt oder sagen Sie einfach Hallo!",send:"Nachricht senden",sending:"Wird gesendet...",success:"Nachricht erfolgreich gesendet! Ich werde mich bald bei Ihnen melden.",error:"Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut."},social:{github:"GitHub",linkedin:"LinkedIn",email:"E-Mail"}},footer:{tagline:"Full-Stack Entwickler & UI/UX Designer",rights:"Alle Rechte vorbehalten",builtWith:"Erstellt mit React & Vite",description:"Erstelle schöne, funktionale und benutzerzentrierte digitale Erfahrungen, die Ideen zum Leben erwecken. Lassen Sie uns gemeinsam etwas Erstaunliches schaffen.",quickLinks:"Schnelllinks",connect:"Kontaktieren Sie mich",copyright:"Alle Rechte vorbehalten. Erstellt mit React & Vite.",trademark:"Alle Inhalte, Designs und geistiges Eigentum gehören Shaksham Karki. Diese Portfolio-Website und ihre Inhalte sind proprietär und durch das Urheberrecht geschützt."},education:{title:"Bildung und Führung",subtitle:"Akademischer Hintergrund und Führungserfahrung",academic:"Akademischer Hintergrund",leadership:"Führung und Aktivitäten",languages:"Sprachen",gpa:"GPA:",data:{universityWestGeorgia:{degree:"Bachelor in Computer- und Informationswissenschaften",institution:"University of West Georgia",location:"Online",period:"Juli 2025 - Gegenwart",description:"Kurse: Computerarchitektur, Algorithmen, Berechnungstheorie, Datenbanksysteme. Fokus auf Softwareentwicklungsprinzipien und Full-Stack-Web-Technologien.",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"Austauschstudent mit GRSP",institution:"University of North Georgia",location:"Georgia, USA",period:"Aug 2024 - Mai 2025",description:"Kurse: Python-Programmierung, Java, Analysis I & II, Elementares Portugiesisch. Kultureller Botschafter, der Nepal unter internationalen Studenten vertritt.",gpa:"3.51/4.0"},highSchool:{degree:"Abitur",institution:"Prasadi Academy",location:"Nepal",period:"März 2021 - Juni 2023",description:"Starke Grundlage in Mathematik und Naturwissenschaften mit Fokus auf MINT-Fächer.",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"Georgia Rotary Student Program Stipendiat",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"Kultureller Botschafter, der Nepal unter 39 Studenten aus 22 Ländern vertritt und Führungs- und interkulturelle Kommunikationsfähigkeiten entwickelt."},rotaractMember:{title:"Aktives Mitglied",organization:"Rotaract Club Patan Heritage",period:"2023 - Gegenwart",description:"Teilnahme an Gemeinschaftsprojekten, Fundraising-Veranstaltungen und kulturellen Erhaltungsinitiativen in Lalitpur."},leoMember:{title:"Ehemaliges Mitglied",organization:"Leo Club Kathmandu Manasalu",period:"2021 - 2023",description:"Engagiert in sozialer Arbeit und Führungsentwicklungsaktivitäten für die Verbesserung der Gemeinschaft."}}},common:{loading:"Portfolio wird geladen...",readMore:"Mehr lesen",showLess:"Weniger anzeigen",scrollDown:"Nach unten scrollen",toggleMenu:"Menü umschalten",scrollToTop:"Nach oben scrollen",resumeTitle:"Shaksham Karki Lebenslauf"}},Rg={nav:{home:"首页",about:"关于我",experience:"经验",skills:"技能",education:"教育",projects:"项目",contact:"联系"},hero:{title:"移动应用全栈开发者",subtitle:"使用强大的后端解决方案构建创新的移动体验",summary:"我是一名充满激情的移动应用全栈开发者，在构建跨平台移动应用程序和后端服务方面拥有实践经验。我精通React Native开发，在服务器端技术和数据库管理方面不断增长专业知识。",availability:"开放机会",viewResume:"查看简历",downloadResume:"下载简历",getInTouch:"联系我",socialLabel:"与我联系",greeting:"你好，我是"},about:{title:"关于我",subtitle:"充满激情的开发者创造创新解决方案",description:"我喜欢创建用户友好的移动体验，同时确保强大的后端功能。目前正在攻读计算机科学学位的同时扩展我在全栈开发方面的知识。",summary:"充满激情的移动应用全栈开发者，在构建跨平台移动应用程序和后端服务方面拥有实践经验。精通React Native开发，在服务器端技术和数据库管理方面不断增长专业知识。目前正在攻读计算机科学学位，同时扩展全栈开发知识。",location:"位于尼泊尔拉利特普尔苏纳科蒂，我热衷于创造创新解决方案并持续学习新技术。我喜欢从事挑战我并帮助我作为开发者成长的项目。",stats:{projects:"完成项目",skills:"掌握技能",experience:"年经验",learning:"持续学习"},features:{cleanCode:"清洁代码",cleanCodeDesc:"我编写可维护、可扩展且文档完善的代码，遵循最佳实践和行业标准。",creativeDesign:"创意设计",creativeDesignDesc:"我创建美观、直观的用户界面，在所有设备上提供卓越的用户体验。",performance:"性能",performanceDesc:"我优化应用程序的速度和效率，确保快速加载时间和流畅的交互。",collaboration:"协作",collaborationDesc:"我在团队中高效工作，清晰沟通，为积极的开发环境做出贡献。"}},experience:{title:"工作经验",subtitle:"我在Web开发和软件工程中的专业历程",current:"现在",achievements:"成就：",technologies:"技术：",data:{mobileAppDeveloper:{title:"移动应用开发者",company:"Tridev Innovation",location:"拉利特普尔，尼泊尔",period:"2024年6月 - 现在",description:"使用React Native开发移动应用程序，专注于用户友好的界面和流畅的性能。实现了安全的用户认证、实时功能和第三方API集成。",achievements:["使用Node.js构建后端服务，支持移动应用功能和数据管理","开发高级移动功能，包括推送通知、Face ID认证和复杂的导航系统","使用Git和GitHub与团队成员协作，进行版本控制和项目管理","按时交付项目，同时保持代码质量并遵循最佳实践"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"技术技能",subtitle:"我使用的技术",frontend:"前端开发",backend:"后端开发",mobile:"移动开发",tools:"工具和平台",soft:"软技能",whySkillsMatter:"为什么这些技能很重要",skillsDescription:"我不断更新我的技能组合，以跟上最新技术和最佳实践。这种多样化的技能范围使我能够在整个开发堆栈中工作并提供全面的解决方案。"},projects:{title:"精选项目",subtitle:"我最近的一些作品",viewProject:"查看项目",viewCode:"查看代码",technologies:"使用技术"},contact:{title:"联系我",subtitle:"让我们在您的下一个项目中合作",getInTouch:"联系我",description:"我总是对新的机会和令人兴奋的项目感兴趣。无论您有疑问还是只是想打个招呼，我都会尽力回复您！",email:"邮箱",phone:"电话",location:"位置",followMe:"关注我",form:{name:"姓名",email:"邮箱",subject:"主题",message:"消息",namePlaceholder:"您的全名",emailPlaceholder:"your.email@example.com",subjectPlaceholder:"这是关于什么的？",messagePlaceholder:"告诉我您的项目或只是打个招呼！",send:"发送消息",sending:"发送中...",success:"消息发送成功！我会尽快回复您。",error:"消息发送失败。请稍后再试。"},social:{github:"GitHub",linkedin:"LinkedIn",email:"邮箱"}},footer:{tagline:"全栈开发者和UI/UX设计师",rights:"版权所有",builtWith:"使用React & Vite构建",description:"创造美丽、功能性和以用户为中心的数字体验，让想法变为现实。让我们一起创造一些令人惊叹的东西。",quickLinks:"快速链接",connect:"与我联系",copyright:"版权所有。使用React & Vite构建。",trademark:"所有内容、设计和知识产权均属于 Shaksham Karki。此作品集网站及其内容为专有财产，受版权法保护。"},education:{title:"教育与领导力",subtitle:"学术背景和领导经验",academic:"学术背景",leadership:"领导力与活动",languages:"语言",gpa:"GPA:",data:{universityWestGeorgia:{degree:"计算机与信息科学学士",institution:"西乔治亚大学",location:"在线",period:"2025年7月 - 现在",description:"课程：计算机架构、算法、计算理论、数据库系统。专注于软件开发原理和全栈Web技术。",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"GRSP交换生",institution:"北乔治亚大学",location:"乔治亚州，美国",period:"2024年8月 - 2025年5月",description:"课程：Python编程、Java、微积分I和II、初级葡萄牙语。在国际学生中代表尼泊尔的文化大使。",gpa:"3.51/4.0"},highSchool:{degree:"高中文凭",institution:"普拉萨迪学院",location:"尼泊尔",period:"2021年3月 - 2023年6月",description:"在数学和科学方面有坚实的基础，专注于STEM学科。",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"乔治亚扶轮学生项目学者",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"在来自22个国家的39名学生中代表尼泊尔的文化大使，发展领导力和跨文化沟通技能。"},rotaractMember:{title:"活跃成员",organization:"帕坦遗产扶轮青年服务团俱乐部",period:"2023 - 现在",description:"参与拉利特普尔的社区服务项目、筹款活动和文化保护倡议。"},leoMember:{title:"前成员",organization:"加德满都马纳斯鲁狮子会俱乐部",period:"2021 - 2023",description:"从事社会工作和领导力发展活动，促进社区改善。"}}},common:{loading:"正在加载作品集...",readMore:"阅读更多",showLess:"显示更少",scrollDown:"向下滚动",toggleMenu:"切换菜单",scrollToTop:"滚动到顶部",resumeTitle:"Shaksham Karki 简历"}},Vg={nav:{home:"Accueil",about:"À propos",experience:"Expérience",skills:"Compétences",education:"Éducation",projects:"Projets",contact:"Contact"},hero:{title:"Développeur Full-Stack d'Applications Mobiles",subtitle:"Créer des expériences mobiles innovantes avec des solutions backend robustes",summary:"Je suis un Développeur Full-Stack d'Applications Mobiles passionné avec une expérience pratique dans la construction d'applications mobiles multiplateformes et de services backend. Je suis compétent en développement React Native avec une expertise croissante dans les technologies côté serveur et la gestion de bases de données.",availability:"Ouvert aux opportunités",viewResume:"Voir le CV",downloadResume:"Télécharger le CV",getInTouch:"Me Contacter",socialLabel:"Entrez en contact avec moi",greeting:"Salut, je suis"},about:{title:"À propos de moi",subtitle:"Développeur passionné créant des solutions innovantes",description:"J'aime créer des expériences mobiles conviviales tout en assurant une fonctionnalité backend robuste. J'étends actuellement mes connaissances en développement full-stack tout en poursuivant mon diplôme en Informatique.",summary:"Développeur Full-Stack d'Applications Mobiles passionné avec une expérience pratique dans la construction d'applications mobiles multiplateformes et de services backend. Compétent en développement React Native avec une expertise croissante dans les technologies côté serveur et la gestion de bases de données. Actuellement en train de poursuivre un diplôme en Informatique tout en élargissant mes connaissances en développement full-stack.",location:"Basé à Sunakothi, Lalitpur, Népal, je suis passionné par la création de solutions innovantes et l'apprentissage continu de nouvelles technologies. J'aime travailler sur des projets qui me défient et m'aident à grandir en tant que développeur.",stats:{projects:"Projets Terminés",skills:"Compétences Maîtrisées",experience:"Années d'Expérience",learning:"Toujours en Apprentissage"},features:{cleanCode:"Code Propre",cleanCodeDesc:"J'écris du code maintenable, évolutif et bien documenté en suivant les meilleures pratiques et les standards de l'industrie.",creativeDesign:"Design Créatif",creativeDesignDesc:"Je crée des interfaces utilisateur belles et intuitives qui offrent des expériences utilisateur exceptionnelles sur tous les appareils.",performance:"Performance",performanceDesc:"J'optimise les applications pour la vitesse et l'efficacité, en assurant des temps de chargement rapides et des interactions fluides.",collaboration:"Collaboration",collaborationDesc:"Je travaille efficacement en équipe, communique clairement et contribue à un environnement de développement positif."}},experience:{title:"Expérience Professionnelle",subtitle:"Mon parcours professionnel dans le développement web et l'ingénierie logicielle",current:"Présent",achievements:"Réalisations :",technologies:"Technologies :",data:{mobileAppDeveloper:{title:"Développeur d'Applications Mobiles",company:"Tridev Innovation",location:"Lalitpur, Népal",period:"Juin 2024 - Présent",description:"Développé des applications mobiles en utilisant React Native avec un accent sur les interfaces conviviales et les performances fluides. Implémenté l'authentification sécurisée des utilisateurs, les fonctionnalités en temps réel et les intégrations d'API tierces.",achievements:["Construit des services backend en utilisant Node.js pour supporter la fonctionnalité des applications mobiles et la gestion des données","Travaillé sur des fonctionnalités mobiles avancées incluant les notifications push, l'authentification Face ID et les systèmes de navigation complexes","Collaboré avec les membres de l'équipe en utilisant Git et GitHub pour le contrôle de version et la gestion de projet","Livré des projets à temps tout en maintenant la qualité du code et en suivant les meilleures pratiques"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}}},skills:{title:"Compétences Techniques",subtitle:"Technologies avec lesquelles je travaille",frontend:"Développement Frontend",backend:"Développement Backend",mobile:"Développement Mobile",tools:"Outils et Plateformes",soft:"Compétences Douces",whySkillsMatter:"Pourquoi ces compétences sont importantes",skillsDescription:"Je mets continuellement à jour mon ensemble de compétences pour rester à jour avec les dernières technologies et meilleures pratiques. Cette gamme diversifiée de compétences me permet de travailler sur toute la pile de développement et de fournir des solutions complètes."},projects:{title:"Projets en Vedette",subtitle:"Quelques-uns de mes travaux récents",viewProject:"Voir le Projet",viewCode:"Voir le Code",technologies:"Technologies Utilisées"},contact:{title:"Me Contacter",subtitle:"Travaillons ensemble sur votre prochain projet",getInTouch:"Me Contacter",description:"Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",email:"Email",phone:"Téléphone",location:"Localisation",followMe:"Suivez-moi",form:{name:"Nom",email:"Email",subject:"Sujet",message:"Message",namePlaceholder:"Votre nom complet",emailPlaceholder:"votre.email@exemple.com",subjectPlaceholder:"De quoi s'agit-il ?",messagePlaceholder:"Parlez-moi de votre projet ou dites simplement bonjour !",send:"Envoyer le Message",sending:"Envoi en cours...",success:"Message envoyé avec succès ! Je vous répondrai bientôt.",error:"Échec de l'envoi du message. Veuillez réessayer plus tard."},social:{github:"GitHub",linkedin:"LinkedIn",email:"Email"}},footer:{tagline:"Développeur Full-Stack et Designer UI/UX",rights:"Tous droits réservés",builtWith:"Construit avec React & Vite",description:"Créer de belles expériences numériques fonctionnelles et centrées sur l'utilisateur qui donnent vie aux idées. Construisons quelque chose d'incroyable ensemble.",quickLinks:"Liens rapides",connect:"Contactez-moi",copyright:"Tous droits réservés. Construit avec React & Vite.",trademark:"Tout le contenu, les designs et la propriété intellectuelle appartiennent à Shaksham Karki. Ce site web de portfolio et son contenu sont propriétaires et protégés par la loi sur le droit d'auteur."},education:{title:"Éducation et Leadership",subtitle:"Formation académique et expérience de leadership",academic:"Formation académique",leadership:"Leadership et activités",languages:"Langues",gpa:"GPA:",data:{universityWestGeorgia:{degree:"Licence en Informatique et Sciences de l'Information",institution:"Université de West Georgia",location:"En ligne",period:"Juillet 2025 - Présent",description:"Cours : Architecture informatique, Algorithmes, Théorie computationnelle, Systèmes de base de données. Focus sur les principes de développement logiciel et les technologies web full-stack.",gpa:"3.51/4.0"},universityNorthGeorgia:{degree:"Étudiant d'échange avec GRSP",institution:"Université de North Georgia",location:"Géorgie, États-Unis",period:"Août 2024 - Mai 2025",description:"Cours : Programmation Python, Java, Calcul I et II, Portugais élémentaire. Ambassadeur culturel représentant le Népal parmi les étudiants internationaux.",gpa:"3.51/4.0"},highSchool:{degree:"Diplôme d'études secondaires",institution:"Académie Prasadi",location:"Népal",period:"Mars 2021 - Juin 2023",description:"Base solide en mathématiques et sciences avec focus sur les matières STEM.",gpa:"3.51/4.0"}},leadershipData:{grspScholar:{title:"Boursier du Programme d'Étudiants Rotary de Géorgie",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"Ambassadeur culturel représentant le Népal parmi 39 étudiants de 22 pays, développant des compétences de leadership et de communication interculturelle."},rotaractMember:{title:"Membre Actif",organization:"Club Rotaract Patan Heritage",period:"2023 - Présent",description:"Participation à des projets de service communautaire, des événements de collecte de fonds et des initiatives de préservation culturelle à Lalitpur."},leoMember:{title:"Ancien Membre",organization:"Club Leo Kathmandu Manasalu",period:"2021 - 2023",description:"Engagé dans le travail social et les activités de développement du leadership pour l'amélioration de la communauté."}}},common:{loading:"Chargement du Portfolio...",readMore:"Lire Plus",showLess:"Afficher Moins",scrollDown:"Faire défiler vers le bas",toggleMenu:"Basculer le menu",scrollToTop:"Faire défiler vers le haut",resumeTitle:"CV de Shaksham Karki"}},jn={en:Ng,es:Mg,ne:zg,hi:Dg,ja:Lg,de:Ag,zh:Rg,fr:Vg},Ig=[{code:"en",name:"English",flag:"🇺🇸"},{code:"es",name:"Español",flag:"🇪🇸"},{code:"ne",name:"नेपाली",flag:"🇳🇵"},{code:"ja",name:"日本語",flag:"🇯🇵"},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"zh",name:"中文",flag:"🇨🇳"},{code:"fr",name:"Français",flag:"🇫🇷"},{code:"hi",name:"हिन्दी",flag:"🇮🇳"}],Sm=b.createContext(),Xe=()=>{const e=b.useContext(Sm);if(!e)throw new Error("useI18n must be used within an I18nProvider");return e},Fg=({children:e})=>{const[t,n]=b.useState(()=>{if(typeof window<"u"){const l=localStorage.getItem("portfolio-language");return l&&jn[l]?l:"en"}return"en"}),[r,i]=b.useState(()=>{if(typeof window<"u"){const l=localStorage.getItem("portfolio-language");return l&&jn[l]?jn[l]:jn.en}return jn.en}),s={language:t,t:l=>{const c=l.split(".");let f=r;for(const d of c)if(f&&typeof f=="object"&&d in f)f=f[d];else return l;return f},changeLanguage:l=>{jn[l]&&(n(l),i(jn[l]),localStorage.setItem("portfolio-language",l))},availableLanguages:Ig};return u.jsx(Sm.Provider,{value:s,children:e})},jm=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),xa=b.createContext({}),wa=b.createContext(null),ba=typeof document<"u",xc=ba?b.useLayoutEffect:b.useEffect,Pm=b.createContext({strict:!1}),wc=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),_g="framerAppearId",Cm="data-"+wc(_g);function Bg(e,t,n,r){const{visualElement:i}=b.useContext(xa),o=b.useContext(Pm),a=b.useContext(wa),s=b.useContext(jm).reducedMotion,l=b.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:s}));const c=l.current;b.useInsertionEffect(()=>{c&&c.update(n,a)});const f=b.useRef(!!(n[Cm]&&!window.HandoffComplete));return xc(()=>{c&&(c.render(),f.current&&c.animationState&&c.animationState.animateChanges())}),b.useEffect(()=>{c&&(c.updateFeatures(),!f.current&&c.animationState&&c.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),c}function ar(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Og(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ar(n)&&(n.current=r))},[t])}function Si(e){return typeof e=="string"||Array.isArray(e)}function ka(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const bc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],kc=["initial",...bc];function Sa(e){return ka(e.animate)||kc.some(t=>Si(e[t]))}function Em(e){return!!(Sa(e)||e.variants)}function Hg(e,t){if(Sa(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Si(n)?n:void 0,animate:Si(r)?r:void 0}}return e.inherit!==!1?t:{}}function Ug(e){const{initial:t,animate:n}=Hg(e,b.useContext(xa));return b.useMemo(()=>({initial:t,animate:n}),[ed(t),ed(n)])}function ed(e){return Array.isArray(e)?e.join(" "):e}const td={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ji={};for(const e in td)ji[e]={isEnabled:t=>td[e].some(n=>!!t[n])};function Gg(e){for(const t in e)ji[t]={...ji[t],...e[t]}}const Sc=b.createContext({}),Tm=b.createContext({}),Wg=Symbol.for("motionComponentSymbol");function $g({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Gg(e);function o(s,l){let c;const f={...b.useContext(jm),...s,layoutId:Kg(s)},{isStatic:d}=f,p=Ug(s),g=r(s,d);if(!d&&ba){p.visualElement=Bg(i,g,f,t);const y=b.useContext(Tm),x=b.useContext(Pm).strict;p.visualElement&&(c=p.visualElement.loadFeatures(f,x,e,y))}return b.createElement(xa.Provider,{value:p},c&&p.visualElement?b.createElement(c,{visualElement:p.visualElement,...f}):null,n(i,s,Og(g,p.visualElement,l),g,d,p.visualElement))}const a=b.forwardRef(o);return a[Wg]=i,a}function Kg({layoutId:e}){const t=b.useContext(Sc).id;return t&&e!==void 0?t+"-"+e:e}function Yg(e){function t(r,i={}){return $g(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Xg=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jc(e){return typeof e!="string"||e.includes("-")?!1:!!(Xg.indexOf(e)>-1||/[A-Z]/.test(e))}const Yo={};function Qg(e){Object.assign(Yo,e)}const Li=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gn=new Set(Li);function Nm(e,{layout:t,layoutId:n}){return Gn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Yo[e]||e==="opacity")}const Ye=e=>!!(e&&e.getVelocity),qg={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Jg=Li.length;function Zg(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let a=0;a<Jg;a++){const s=Li[a];if(e[s]!==void 0){const l=qg[s]||s;o+=`${l}(${e[s]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Mm=e=>t=>typeof t=="string"&&t.startsWith(e),zm=Mm("--"),cl=Mm("var(--"),e2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,t2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,yn=(e,t,n)=>Math.min(Math.max(n,e),t),Wn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ni={...Wn,transform:e=>yn(0,1,e)},oo={...Wn,default:1},ri=e=>Math.round(e*1e5)/1e5,ja=/(-)?([\d]*\.?[\d])+/g,Dm=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,n2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ai(e){return typeof e=="string"}const Ri=e=>({test:t=>Ai(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Qt=Ri("deg"),Nt=Ri("%"),H=Ri("px"),r2=Ri("vh"),i2=Ri("vw"),nd={...Nt,parse:e=>Nt.parse(e)/100,transform:e=>Nt.transform(e*100)},rd={...Wn,transform:Math.round},Lm={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,radius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,size:H,top:H,right:H,bottom:H,left:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scale:oo,scaleX:oo,scaleY:oo,scaleZ:oo,skew:Qt,skewX:Qt,skewY:Qt,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:ni,originX:nd,originY:nd,originZ:H,zIndex:rd,fillOpacity:ni,strokeOpacity:ni,numOctaves:rd};function Pc(e,t,n,r){const{style:i,vars:o,transform:a,transformOrigin:s}=e;let l=!1,c=!1,f=!0;for(const d in t){const p=t[d];if(zm(d)){o[d]=p;continue}const g=Lm[d],y=t2(p,g);if(Gn.has(d)){if(l=!0,a[d]=y,!f)continue;p!==(g.default||0)&&(f=!1)}else d.startsWith("origin")?(c=!0,s[d]=y):i[d]=y}if(t.transform||(l||r?i.transform=Zg(e.transform,n,f,r):i.transform&&(i.transform="none")),c){const{originX:d="50%",originY:p="50%",originZ:g=0}=s;i.transformOrigin=`${d} ${p} ${g}`}}const Cc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Am(e,t,n){for(const r in t)!Ye(t[r])&&!Nm(r,n)&&(e[r]=t[r])}function o2({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Cc();return Pc(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function a2(e,t,n){const r=e.style||{},i={};return Am(i,r,e),Object.assign(i,o2(e,t,n)),e.transformValues?e.transformValues(i):i}function s2(e,t,n){const r={},i=a2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const l2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Xo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||l2.has(e)}let Rm=e=>!Xo(e);function c2(e){e&&(Rm=t=>t.startsWith("on")?!Xo(t):e(t))}try{c2(require("@emotion/is-prop-valid").default)}catch{}function u2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Rm(i)||n===!0&&Xo(i)||!t&&!Xo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function id(e,t,n){return typeof e=="string"?e:H.transform(t+n*e)}function d2(e,t,n){const r=id(t,e.x,e.width),i=id(n,e.y,e.height);return`${r} ${i}`}const f2={offset:"stroke-dashoffset",array:"stroke-dasharray"},p2={offset:"strokeDashoffset",array:"strokeDasharray"};function m2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?f2:p2;e[o.offset]=H.transform(-r);const a=H.transform(t),s=H.transform(n);e[o.array]=`${a} ${s}`}function Ec(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...c},f,d,p){if(Pc(e,c,f,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:y,dimensions:x}=e;g.transform&&(x&&(y.transform=g.transform),delete g.transform),x&&(i!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=d2(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),a!==void 0&&m2(g,a,s,l,!1)}const Vm=()=>({...Cc(),attrs:{}}),Tc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function h2(e,t,n,r){const i=b.useMemo(()=>{const o=Vm();return Ec(o,t,{enableHardwareAcceleration:!1},Tc(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Am(o,e.style,e),i.style={...o,...i.style}}return i}function g2(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=(jc(n)?h2:s2)(r,o,a,n),f={...u2(r,typeof n=="string",e),...l,ref:i},{children:d}=r,p=b.useMemo(()=>Ye(d)?d.get():d,[d]);return b.createElement(n,{...f,children:p})}}function Im(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Fm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _m(e,t,n,r){Im(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Fm.has(i)?i:wc(i),t.attrs[i])}function Nc(e,t){const{style:n}=e,r={};for(const i in n)(Ye(n[i])||t.style&&Ye(t.style[i])||Nm(i,e))&&(r[i]=n[i]);return r}function Bm(e,t){const n=Nc(e,t);for(const r in e)if(Ye(e[r])||Ye(t[r])){const i=Li.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Mc(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Om(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const Qo=e=>Array.isArray(e),v2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),y2=e=>Qo(e)?e[e.length-1]||0:e;function ko(e){const t=Ye(e)?e.get():e;return v2(t)?t.toValue():t}function x2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:w2(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const Hm=e=>(t,n)=>{const r=b.useContext(xa),i=b.useContext(wa),o=()=>x2(e,t,r,i);return n?o():Om(o)};function w2(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=ko(o[p]);let{initial:a,animate:s}=e;const l=Sa(e),c=Em(e);t&&c&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let f=n?n.initial===!1:!1;f=f||a===!1;const d=f?s:a;return d&&typeof d!="boolean"&&!ka(d)&&(Array.isArray(d)?d:[d]).forEach(g=>{const y=Mc(e,g);if(!y)return;const{transitionEnd:x,transition:k,...v}=y;for(const m in v){let h=v[m];if(Array.isArray(h)){const w=f?h.length-1:0;h=h[w]}h!==null&&(i[m]=h)}for(const m in x)i[m]=x[m]}),i}const ge=e=>e;class od{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function b2(e){let t=new od,n=new od,r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:(l,c=!1,f=!1)=>{const d=f&&i,p=d?t:n;return c&&a.add(l),p.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),a.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const f=t.order[c];f(l),a.has(f)&&(s.schedule(f),e())}i=!1,o&&(o=!1,s.process(l))}};return s}const ao=["prepare","read","update","preRender","render","postRender"],k2=40;function S2(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=ao.reduce((d,p)=>(d[p]=b2(()=>n=!0),d),{}),a=d=>o[d].process(i),s=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,k2),1),i.timestamp=d,i.isProcessing=!0,ao.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=()=>{n=!0,r=!0,i.isProcessing||e(s)};return{schedule:ao.reduce((d,p)=>{const g=o[p];return d[p]=(y,x=!1,k=!1)=>(n||l(),g.schedule(y,x,k)),d},{}),cancel:d=>ao.forEach(p=>o[p].cancel(d)),state:i,steps:o}}const{schedule:oe,cancel:$t,state:Ae,steps:ts}=S2(typeof requestAnimationFrame<"u"?requestAnimationFrame:ge,!0),j2={useVisualState:Hm({scrapeMotionValuesFromProps:Bm,createRenderState:Vm,onMount:(e,t,{renderState:n,latestValues:r})=>{oe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),oe.render(()=>{Ec(n,r,{enableHardwareAcceleration:!1},Tc(t.tagName),e.transformTemplate),_m(t,n)})}})},P2={useVisualState:Hm({scrapeMotionValuesFromProps:Nc,createRenderState:Cc})};function C2(e,{forwardMotionProps:t=!1},n,r){return{...jc(e)?j2:P2,preloadedFeatures:n,useRender:g2(t),createVisualElement:r,Component:e}}function Ft(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Um=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Pa(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const E2=e=>t=>Um(t)&&e(t,Pa(t));function Bt(e,t,n,r){return Ft(e,t,E2(n),r)}const T2=(e,t)=>n=>t(e(n)),pn=(...e)=>e.reduce(T2);function Gm(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const ad=Gm("dragHorizontal"),sd=Gm("dragVertical");function Wm(e){let t=!1;if(e==="y")t=sd();else if(e==="x")t=ad();else{const n=ad(),r=sd();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function $m(){const e=Wm(!0);return e?(e(),!1):!0}class Sn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function ld(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,a)=>{if(o.pointerType==="touch"||$m())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t),s[r]&&oe.update(()=>s[r](o,a))};return Bt(e.current,n,i,{passive:!e.getProps()[r]})}class N2 extends Sn{mount(){this.unmount=pn(ld(this.node,!0),ld(this.node,!1))}unmount(){}}class M2 extends Sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pn(Ft(this.node.current,"focus",()=>this.onFocus()),Ft(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Km=(e,t)=>t?e===t?!0:Km(e,t.parentElement):!1;function ns(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Pa(n))}class z2 extends Sn{constructor(){super(...arguments),this.removeStartListeners=ge,this.removeEndListeners=ge,this.removeAccessibleListeners=ge,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Bt(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:f,globalTapTarget:d}=this.node.getProps();oe.update(()=>{!d&&!Km(this.node.current,s.target)?f&&f(s,l):c&&c(s,l)})},{passive:!(r.onTap||r.onPointerUp)}),a=Bt(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=pn(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||ns("up",(l,c)=>{const{onTap:f}=this.node.getProps();f&&oe.update(()=>f(l,c))})};this.removeEndListeners(),this.removeEndListeners=Ft(this.node.current,"keyup",a),ns("down",(s,l)=>{this.startPress(s,l)})},n=Ft(this.node.current,"keydown",t),r=()=>{this.isPressing&&ns("cancel",(o,a)=>this.cancelPress(o,a))},i=Ft(this.node.current,"blur",r);this.removeAccessibleListeners=pn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&oe.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!$m()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&oe.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Bt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Ft(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=pn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ul=new WeakMap,rs=new WeakMap,D2=e=>{const t=ul.get(e.target);t&&t(e)},L2=e=>{e.forEach(D2)};function A2({root:e,...t}){const n=e||document;rs.has(n)||rs.set(n,{});const r=rs.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(L2,{root:e,...t})),r[i]}function R2(e,t,n){const r=A2(t);return ul.set(e,n),r.observe(e),()=>{ul.delete(e),r.unobserve(e)}}const V2={some:0,all:1};class I2 extends Sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:V2[i]},s=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),p=c?f:d;p&&p(l)};return R2(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(F2(t,n))&&this.startObserver()}unmount(){}}function F2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const _2={inView:{Feature:I2},tap:{Feature:z2},focus:{Feature:M2},hover:{Feature:N2}};function Ym(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function B2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function O2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ca(e,t,n){const r=e.getProps();return Mc(r,t,n!==void 0?n:r.custom,B2(e),O2(e))}let H2=ge,Ea=ge;const mn=e=>e*1e3,Ot=e=>e/1e3,U2={current:!1},Xm=e=>Array.isArray(e)&&typeof e[0]=="number";function Qm(e){return!!(!e||typeof e=="string"&&qm[e]||Xm(e)||Array.isArray(e)&&e.every(Qm))}const $r=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,qm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:$r([0,.65,.55,1]),circOut:$r([.55,0,1,.45]),backIn:$r([.31,.01,.66,-.59]),backOut:$r([.33,1.53,.69,.99])};function Jm(e){if(e)return Xm(e)?$r(e):Array.isArray(e)?e.map(Jm):qm[e]}function G2(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){const c={[t]:n};l&&(c.offset=l);const f=Jm(s);return Array.isArray(f)&&(c.easing=f),e.animate(c,{delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function W2(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Zm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$2=1e-7,K2=12;function Y2(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=Zm(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>$2&&++s<K2);return a}function Vi(e,t,n,r){if(e===t&&n===r)return ge;const i=o=>Y2(o,0,1,e,n);return o=>o===0||o===1?o:Zm(i(o),t,r)}const X2=Vi(.42,0,1,1),Q2=Vi(0,0,.58,1),eh=Vi(.42,0,.58,1),q2=e=>Array.isArray(e)&&typeof e[0]!="number",th=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,nh=e=>t=>1-e(1-t),zc=e=>1-Math.sin(Math.acos(e)),rh=nh(zc),J2=th(zc),ih=Vi(.33,1.53,.69,.99),Dc=nh(ih),Z2=th(Dc),ev=e=>(e*=2)<1?.5*Dc(e):.5*(2-Math.pow(2,-10*(e-1))),tv={linear:ge,easeIn:X2,easeInOut:eh,easeOut:Q2,circIn:zc,circInOut:J2,circOut:rh,backIn:Dc,backInOut:Z2,backOut:ih,anticipate:ev},cd=e=>{if(Array.isArray(e)){Ea(e.length===4);const[t,n,r,i]=e;return Vi(t,n,r,i)}else if(typeof e=="string")return tv[e];return e},Lc=(e,t)=>n=>!!(Ai(n)&&n2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),oh=(e,t,n)=>r=>{if(!Ai(r))return r;const[i,o,a,s]=r.match(ja);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},nv=e=>yn(0,255,e),is={...Wn,transform:e=>Math.round(nv(e))},An={test:Lc("rgb","red"),parse:oh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+is.transform(e)+", "+is.transform(t)+", "+is.transform(n)+", "+ri(ni.transform(r))+")"};function rv(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const dl={test:Lc("#"),parse:rv,transform:An.transform},sr={test:Lc("hsl","hue"),parse:oh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Nt.transform(ri(t))+", "+Nt.transform(ri(n))+", "+ri(ni.transform(r))+")"},Ie={test:e=>An.test(e)||dl.test(e)||sr.test(e),parse:e=>An.test(e)?An.parse(e):sr.test(e)?sr.parse(e):dl.parse(e),transform:e=>Ai(e)?e:e.hasOwnProperty("red")?An.transform(e):sr.transform(e)},fe=(e,t,n)=>-n*e+n*t+e;function os(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function iv({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=os(l,s,e+1/3),o=os(l,s,e),a=os(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}const as=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},ov=[dl,An,sr],av=e=>ov.find(t=>t.test(e));function ud(e){const t=av(e);let n=t.parse(e);return t===sr&&(n=iv(n)),n}const ah=(e,t)=>{const n=ud(e),r=ud(t),i={...n};return o=>(i.red=as(n.red,r.red,o),i.green=as(n.green,r.green,o),i.blue=as(n.blue,r.blue,o),i.alpha=fe(n.alpha,r.alpha,o),An.transform(i))};function sv(e){var t,n;return isNaN(e)&&Ai(e)&&(((t=e.match(ja))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Dm))===null||n===void 0?void 0:n.length)||0)>0}const sh={regex:e2,countKey:"Vars",token:"${v}",parse:ge},lh={regex:Dm,countKey:"Colors",token:"${c}",parse:Ie.parse},ch={regex:ja,countKey:"Numbers",token:"${n}",parse:Wn.parse};function ss(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function qo(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ss(n,sh),ss(n,lh),ss(n,ch),n}function uh(e){return qo(e).values}function dh(e){const{values:t,numColors:n,numVars:r,tokenised:i}=qo(e),o=t.length;return a=>{let s=i;for(let l=0;l<o;l++)l<r?s=s.replace(sh.token,a[l]):l<r+n?s=s.replace(lh.token,Ie.transform(a[l])):s=s.replace(ch.token,ri(a[l]));return s}}const lv=e=>typeof e=="number"?0:e;function cv(e){const t=uh(e);return dh(e)(t.map(lv))}const xn={test:sv,parse:uh,createTransformer:dh,getAnimatableNone:cv},fh=(e,t)=>n=>`${n>0?t:e}`;function ph(e,t){return typeof e=="number"?n=>fe(e,t,n):Ie.test(e)?ah(e,t):e.startsWith("var(")?fh(e,t):hh(e,t)}const mh=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,a)=>ph(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}},uv=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ph(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},hh=(e,t)=>{const n=xn.createTransformer(t),r=qo(e),i=qo(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?pn(mh(r.values,i.values),n):fh(e,t)},Pi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},dd=(e,t)=>n=>fe(e,t,n);function dv(e){return typeof e=="number"?dd:typeof e=="string"?Ie.test(e)?ah:hh:Array.isArray(e)?mh:typeof e=="object"?uv:dd}function fv(e,t,n){const r=[],i=n||dv(e[0]),o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||ge:t;s=pn(l,s)}r.push(s)}return r}function gh(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Ea(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=fv(t,r,i),s=a.length,l=c=>{let f=0;if(s>1)for(;f<e.length-2&&!(c<e[f+1]);f++);const d=Pi(e[f],e[f+1],c);return a[f](d)};return n?c=>l(yn(e[0],e[o-1],c)):l}function pv(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Pi(0,t,r);e.push(fe(n,1,i))}}function mv(e){const t=[0];return pv(t,e.length-1),t}function hv(e,t){return e.map(n=>n*t)}function gv(e,t){return e.map(()=>t||eh).splice(0,e.length-1)}function Jo({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=q2(r)?r.map(cd):cd(r),o={done:!1,value:t[0]},a=hv(n&&n.length===t.length?n:mv(t),e),s=gh(a,t,{ease:Array.isArray(i)?i:gv(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}function vh(e,t){return t?e*(1e3/t):0}const vv=5;function yh(e,t,n){const r=Math.max(t-vv,0);return vh(n-e(r),t-r)}const ls=.001,yv=.01,fd=10,xv=.05,wv=1;function bv({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;H2(e<=mn(fd));let a=1-t;a=yn(xv,wv,a),e=yn(yv,fd,Ot(e)),a<1?(i=c=>{const f=c*a,d=f*e,p=f-n,g=fl(c,a),y=Math.exp(-d);return ls-p/g*y},o=c=>{const d=c*a*e,p=d*n+n,g=Math.pow(a,2)*Math.pow(c,2)*e,y=Math.exp(-d),x=fl(Math.pow(c,2),a);return(-i(c)+ls>0?-1:1)*((p-g)*y)/x}):(i=c=>{const f=Math.exp(-c*e),d=(c-n)*e+1;return-ls+f*d},o=c=>{const f=Math.exp(-c*e),d=(n-c)*(e*e);return f*d});const s=5/e,l=Sv(i,o,s);if(e=mn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:e}}}const kv=12;function Sv(e,t,n){let r=n;for(let i=1;i<kv;i++)r=r-e(r)/t(r);return r}function fl(e,t){return e*Math.sqrt(1-t*t)}const jv=["duration","bounce"],Pv=["stiffness","damping","mass"];function pd(e,t){return t.some(n=>e[n]!==void 0)}function Cv(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!pd(e,Pv)&&pd(e,jv)){const n=bv(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function xh({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:s,damping:l,mass:c,duration:f,velocity:d,isResolvedFromDuration:p}=Cv({...r,velocity:-Ot(r.velocity||0)}),g=d||0,y=l/(2*Math.sqrt(s*c)),x=o-i,k=Ot(Math.sqrt(s/c)),v=Math.abs(x)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let m;if(y<1){const h=fl(k,y);m=w=>{const S=Math.exp(-y*k*w);return o-S*((g+y*k*x)/h*Math.sin(h*w)+x*Math.cos(h*w))}}else if(y===1)m=h=>o-Math.exp(-k*h)*(x+(g+k*x)*h);else{const h=k*Math.sqrt(y*y-1);m=w=>{const S=Math.exp(-y*k*w),T=Math.min(h*w,300);return o-S*((g+y*k*x)*Math.sinh(T)+h*x*Math.cosh(T))/h}}return{calculatedDuration:p&&f||null,next:h=>{const w=m(h);if(p)a.done=h>=f;else{let S=g;h!==0&&(y<1?S=yh(m,h,w):S=0);const T=Math.abs(S)<=n,C=Math.abs(o-w)<=t;a.done=T&&C}return a.value=a.done?o:w,a}}}function md({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:c=.5,restSpeed:f}){const d=e[0],p={done:!1,value:d},g=P=>s!==void 0&&P<s||l!==void 0&&P>l,y=P=>s===void 0?l:l===void 0||Math.abs(s-P)<Math.abs(l-P)?s:l;let x=n*t;const k=d+x,v=a===void 0?k:a(k);v!==k&&(x=v-d);const m=P=>-x*Math.exp(-P/r),h=P=>v+m(P),w=P=>{const F=m(P),_=h(P);p.done=Math.abs(F)<=c,p.value=p.done?v:_};let S,T;const C=P=>{g(p.value)&&(S=P,T=xh({keyframes:[p.value,y(p.value)],velocity:yh(h,P,p.value),damping:i,stiffness:o,restDelta:c,restSpeed:f}))};return C(0),{calculatedDuration:null,next:P=>{let F=!1;return!T&&S===void 0&&(F=!0,w(P),C(P)),S!==void 0&&P>S?T.next(P-S):(!F&&w(P),p)}}}const Ev=e=>{const t=({timestamp:n})=>e(n);return{start:()=>oe.update(t,!0),stop:()=>$t(t),now:()=>Ae.isProcessing?Ae.timestamp:performance.now()}},hd=2e4;function gd(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<hd;)t+=n,r=e.next(t);return t>=hd?1/0:t}const Tv={decay:md,inertia:md,tween:Jo,keyframes:Jo,spring:xh};function Zo({autoplay:e=!0,delay:t=0,driver:n=Ev,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:s="loop",onPlay:l,onStop:c,onComplete:f,onUpdate:d,...p}){let g=1,y=!1,x,k;const v=()=>{k=new Promise(O=>{x=O})};v();let m;const h=Tv[i]||Jo;let w;h!==Jo&&typeof r[0]!="number"&&(w=gh([0,100],r,{clamp:!1}),r=[0,100]);const S=h({...p,keyframes:r});let T;s==="mirror"&&(T=h({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let C="idle",P=null,F=null,_=null;S.calculatedDuration===null&&o&&(S.calculatedDuration=gd(S));const{calculatedDuration:ae}=S;let xe=1/0,we=1/0;ae!==null&&(xe=ae+a,we=xe*(o+1)-a);let ve=0;const it=O=>{if(F===null)return;g>0&&(F=Math.min(F,O)),g<0&&(F=Math.min(O-we/g,F)),P!==null?ve=P:ve=Math.round(O-F)*g;const ne=ve-t*(g>=0?1:-1),Mt=g>=0?ne<0:ne>we;ve=Math.max(ne,0),C==="finished"&&P===null&&(ve=we);let Qe=ve,zt=S;if(o){const bt=Math.min(ve,we)/xe;let $n=Math.floor(bt),kt=bt%1;!kt&&bt>=1&&(kt=1),kt===1&&$n--,$n=Math.min($n,o+1),!!($n%2)&&(s==="reverse"?(kt=1-kt,a&&(kt-=a/xe)):s==="mirror"&&(zt=T)),Qe=yn(0,1,kt)*xe}const ze=Mt?{done:!1,value:r[0]}:zt.next(Qe);w&&(ze.value=w(ze.value));let{done:ot}=ze;!Mt&&ae!==null&&(ot=g>=0?ve>=we:ve<=0);const Ii=P===null&&(C==="finished"||C==="running"&&ot);return d&&d(ze.value),Ii&&M(),ze},ce=()=>{m&&m.stop(),m=void 0},Ee=()=>{C="idle",ce(),x(),v(),F=_=null},M=()=>{C="finished",f&&f(),ce(),x()},B=()=>{if(y)return;m||(m=n(it));const O=m.now();l&&l(),P!==null?F=O-P:(!F||C==="finished")&&(F=O),C==="finished"&&v(),_=F,P=null,C="running",m.start()};e&&B();const U={then(O,ne){return k.then(O,ne)},get time(){return Ot(ve)},set time(O){O=mn(O),ve=O,P!==null||!m||g===0?P=O:F=m.now()-O/g},get duration(){const O=S.calculatedDuration===null?gd(S):S.calculatedDuration;return Ot(O)},get speed(){return g},set speed(O){O===g||!m||(g=O,U.time=Ot(ve))},get state(){return C},play:B,pause:()=>{C="paused",P=ve},stop:()=>{y=!0,C!=="idle"&&(C="idle",c&&c(),Ee())},cancel:()=>{_!==null&&it(_),Ee()},complete:()=>{C="finished"},sample:O=>(F=0,it(O))};return U}function Nv(e){let t;return()=>(t===void 0&&(t=e()),t)}const Mv=Nv(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),zv=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),so=10,Dv=2e4,Lv=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Qm(t.ease);function Av(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Mv()&&zv.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let a=!1,s,l,c=!1;const f=()=>{l=new Promise(h=>{s=h})};f();let{keyframes:d,duration:p=300,ease:g,times:y}=i;if(Lv(t,i)){const h=Zo({...i,repeat:0,delay:0});let w={done:!1,value:d[0]};const S=[];let T=0;for(;!w.done&&T<Dv;)w=h.sample(T),S.push(w.value),T+=so;y=void 0,d=S,p=T-so,g="linear"}const x=G2(e.owner.current,t,d,{...i,duration:p,ease:g,times:y}),k=()=>{c=!1,x.cancel()},v=()=>{c=!0,oe.update(k),s(),f()};return x.onfinish=()=>{c||(e.set(W2(d,i)),r&&r(),v())},{then(h,w){return l.then(h,w)},attachTimeline(h){return x.timeline=h,x.onfinish=null,ge},get time(){return Ot(x.currentTime||0)},set time(h){x.currentTime=mn(h)},get speed(){return x.playbackRate},set speed(h){x.playbackRate=h},get duration(){return Ot(p)},play:()=>{a||(x.play(),$t(k))},pause:()=>x.pause(),stop:()=>{if(a=!0,x.playState==="idle")return;const{currentTime:h}=x;if(h){const w=Zo({...i,autoplay:!1});e.setWithVelocity(w.sample(h-so).value,w.sample(h).value,so)}v()},complete:()=>{c||x.finish()},cancel:v}}function Rv({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ge,pause:ge,stop:ge,then:o=>(o(),Promise.resolve()),cancel:ge,complete:ge});return t?Zo({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Vv={type:"spring",stiffness:500,damping:25,restSpeed:10},Iv=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Fv={type:"keyframes",duration:.8},_v={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Bv=(e,{keyframes:t})=>t.length>2?Fv:Gn.has(e)?e.startsWith("scale")?Iv(t[1]):Vv:_v,pl=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(xn.test(t)||t==="0")&&!t.startsWith("url(")),Ov=new Set(["brightness","contrast","saturate","opacity"]);function Hv(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ja)||[];if(!r)return e;const i=n.replace(r,"");let o=Ov.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Uv=/([a-z-]*)\(.*?\)/g,ml={...xn,getAnimatableNone:e=>{const t=e.match(Uv);return t?t.map(Hv).join(" "):e}},Gv={...Lm,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:ml,WebkitFilter:ml},Ac=e=>Gv[e];function wh(e,t){let n=Ac(e);return n!==ml&&(n=xn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bh=e=>/^0[^.\s]+$/.test(e);function Wv(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||bh(e)}function $v(e,t,n,r){const i=pl(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const a=r.from!==void 0?r.from:e.get();let s;const l=[];for(let c=0;c<o.length;c++)o[c]===null&&(o[c]=c===0?a:o[c-1]),Wv(o[c])&&l.push(c),typeof o[c]=="string"&&o[c]!=="none"&&o[c]!=="0"&&(s=o[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++){const f=l[c];o[f]=wh(t,s)}return o}function Kv({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:c,...f}){return!!Object.keys(f).length}function Rc(e,t){return e[t]||e.default||e}const Yv={skipAnimations:!1},Vc=(e,t,n,r={})=>i=>{const o=Rc(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s=s-mn(a);const l=$v(t,e,n,o),c=l[0],f=l[l.length-1],d=pl(e,c),p=pl(e,f);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:y=>{t.set(y),o.onUpdate&&o.onUpdate(y)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Kv(o)||(g={...g,...Bv(e,g)}),g.duration&&(g.duration=mn(g.duration)),g.repeatDelay&&(g.repeatDelay=mn(g.repeatDelay)),!d||!p||U2.current||o.type===!1||Yv.skipAnimations)return Rv(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=Av(t,e,g);if(y)return y}return Zo(g)};function ea(e){return!!(Ye(e)&&e.add)}const kh=e=>/^\-?\d*\.?\d+$/.test(e);function Ic(e,t){e.indexOf(t)===-1&&e.push(t)}function Fc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _c{constructor(){this.subscriptions=[]}add(t){return Ic(this.subscriptions,t),()=>Fc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xv=e=>!isNaN(parseFloat(e));class Qv{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:a}=Ae;this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,oe.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>oe.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Xv(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new _c);const r=this.events[t].add(n);return t==="change"?()=>{r(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?vh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Sr(e,t){return new Qv(e,t)}const Sh=e=>t=>t.test(e),qv={test:e=>e==="auto",parse:e=>e},jh=[Wn,H,Nt,Qt,i2,r2,qv],Br=e=>jh.find(Sh(e)),Jv=[...jh,Ie,xn],Zv=e=>Jv.find(Sh(e));function ey(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Sr(n))}function ty(e,t){const n=Ca(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){const s=y2(o[a]);ey(e,a,s)}}function ny(e,t,n){var r,i;const o=Object.keys(t).filter(s=>!e.hasValue(s)),a=o.length;if(a)for(let s=0;s<a;s++){const l=o[s],c=t[l];let f=null;Array.isArray(c)&&(f=c[0]),f===null&&(f=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),f!=null&&(typeof f=="string"&&(kh(f)||bh(f))?f=parseFloat(f):!Zv(f)&&xn.test(c)&&(f=wh(l,c)),e.addValue(l,Sr(f,{owner:e})),n[l]===void 0&&(n[l]=f),f!==null&&e.setBaseTarget(l,f))}}function ry(e,t){return t?(t[e]||t.default||t).from:void 0}function iy(e,t,n){const r={};for(const i in e){const o=ry(i,t);if(o!==void 0)r[i]=o;else{const a=n.getValue(i);a&&(r[i]=a.get())}}return r}function oy({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ay(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Ph(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const c=[],f=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const p=e.getValue(d),g=s[d];if(!p||g===void 0||f&&oy(f,d))continue;const y={delay:n,elapsed:0,...Rc(o||{},d)};if(window.HandoffAppearAnimations){const v=e.getProps()[Cm];if(v){const m=window.HandoffAppearAnimations(v,d,p,oe);m!==null&&(y.elapsed=m,y.isHandoff=!0)}}let x=!y.isHandoff&&!ay(p,g);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(Vc(d,p,g,e.shouldReduceMotion&&Gn.has(d)?{type:!1}:y));const k=p.animation;ea(l)&&(l.add(d),k.then(()=>l.remove(d))),c.push(k)}return a&&Promise.all(c).then(()=>{a&&ty(e,a)}),c}function hl(e,t,n={}){const r=Ca(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Ph(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=i;return sy(e,t,c+l,f,d,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[l,c]=s==="beforeChildren"?[o,a]:[a,o];return l().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function sy(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>s-c*r;return Array.from(e.variantChildren).sort(ly).forEach((c,f)=>{c.notify("AnimationStart",t),a.push(hl(c,t,{...o,delay:n+l(f)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(a)}function ly(e,t){return e.sortNodePosition(t)}function cy(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>hl(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=hl(e,t,n);else{const i=typeof t=="function"?Ca(e,t,n.custom):t;r=Promise.all(Ph(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const uy=[...bc].reverse(),dy=bc.length;function fy(e){return t=>Promise.all(t.map(({animation:n,options:r})=>cy(e,n,r)))}function py(e){let t=fy(e);const n=hy();let r=!0;const i=(l,c)=>{const f=Ca(e,c);if(f){const{transition:d,transitionEnd:p,...g}=f;l={...l,...g,...p}}return l};function o(l){t=l(e)}function a(l,c){const f=e.getProps(),d=e.getVariantContext(!0)||{},p=[],g=new Set;let y={},x=1/0;for(let v=0;v<dy;v++){const m=uy[v],h=n[m],w=f[m]!==void 0?f[m]:d[m],S=Si(w),T=m===c?h.isActive:null;T===!1&&(x=v);let C=w===d[m]&&w!==f[m]&&S;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...y},!h.isActive&&T===null||!w&&!h.prevProp||ka(w)||typeof w=="boolean")continue;let F=my(h.prevProp,w)||m===c&&h.isActive&&!C&&S||v>x&&S,_=!1;const ae=Array.isArray(w)?w:[w];let xe=ae.reduce(i,{});T===!1&&(xe={});const{prevResolvedValues:we={}}=h,ve={...we,...xe},it=ce=>{F=!0,g.has(ce)&&(_=!0,g.delete(ce)),h.needsAnimating[ce]=!0};for(const ce in ve){const Ee=xe[ce],M=we[ce];if(y.hasOwnProperty(ce))continue;let B=!1;Qo(Ee)&&Qo(M)?B=!Ym(Ee,M):B=Ee!==M,B?Ee!==void 0?it(ce):g.add(ce):Ee!==void 0&&g.has(ce)?it(ce):h.protectedKeys[ce]=!0}h.prevProp=w,h.prevResolvedValues=xe,h.isActive&&(y={...y,...xe}),r&&e.blockInitialAnimation&&(F=!1),F&&(!C||_)&&p.push(...ae.map(ce=>({animation:ce,options:{type:m,...l}})))}if(g.size){const v={};g.forEach(m=>{const h=e.getBaseTarget(m);h!==void 0&&(v[m]=h)}),p.push({animation:v})}let k=!!p.length;return r&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(p):Promise.resolve()}function s(l,c,f){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const p=a(f,l);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n}}function my(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ym(t,e):!1}function Pn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hy(){return{animate:Pn(!0),whileInView:Pn(),whileHover:Pn(),whileTap:Pn(),whileDrag:Pn(),whileFocus:Pn(),exit:Pn()}}class gy extends Sn{constructor(t){super(t),t.animationState||(t.animationState=py(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ka(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let vy=0;class yy extends Sn{constructor(){super(...arguments),this.id=vy++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const xy={animation:{Feature:gy},exit:{Feature:yy}},vd=(e,t)=>Math.abs(e-t);function wy(e,t){const n=vd(e.x,t.x),r=vd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Ch{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=us(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=wy(d.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:y}=d,{timestamp:x}=Ae;this.history.push({...y,timestamp:x});const{onStart:k,onMove:v}=this.handlers;p||(k&&k(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=cs(p,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=us(d.type==="pointercancel"?this.lastMoveEventInfo:cs(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,k),y&&y(d,k)},!Um(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Pa(t),s=cs(a,this.transformPagePoint),{point:l}=s,{timestamp:c}=Ae;this.history=[{...l,timestamp:c}];const{onSessionStart:f}=n;f&&f(t,us(s,this.history)),this.removeListeners=pn(Bt(this.contextWindow,"pointermove",this.handlePointerMove),Bt(this.contextWindow,"pointerup",this.handlePointerUp),Bt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$t(this.updatePoint)}}function cs(e,t){return t?{point:t(e.point)}:e}function yd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function us({point:e},t){return{point:e,delta:yd(e,Eh(t)),offset:yd(e,by(t)),velocity:ky(t,.1)}}function by(e){return e[0]}function Eh(e){return e[e.length-1]}function ky(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Eh(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>mn(t)));)n--;if(!r)return{x:0,y:0};const o=Ot(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function tt(e){return e.max-e.min}function gl(e,t=0,n=.01){return Math.abs(e-t)<=n}function xd(e,t,n,r=.5){e.origin=r,e.originPoint=fe(t.min,t.max,e.origin),e.scale=tt(n)/tt(t),(gl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=fe(n.min,n.max,e.origin)-e.originPoint,(gl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ii(e,t,n,r){xd(e.x,t.x,n.x,r?r.originX:void 0),xd(e.y,t.y,n.y,r?r.originY:void 0)}function wd(e,t,n){e.min=n.min+t.min,e.max=e.min+tt(t)}function Sy(e,t,n){wd(e.x,t.x,n.x),wd(e.y,t.y,n.y)}function bd(e,t,n){e.min=t.min-n.min,e.max=e.min+tt(t)}function oi(e,t,n){bd(e.x,t.x,n.x),bd(e.y,t.y,n.y)}function jy(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?fe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?fe(n,e,r.max):Math.min(e,n)),e}function kd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Py(e,{top:t,left:n,bottom:r,right:i}){return{x:kd(e.x,n,i),y:kd(e.y,t,r)}}function Sd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Cy(e,t){return{x:Sd(e.x,t.x),y:Sd(e.y,t.y)}}function Ey(e,t){let n=.5;const r=tt(e),i=tt(t);return i>r?n=Pi(t.min,t.max-r,e.min):r>i&&(n=Pi(e.min,e.max-i,t.min)),yn(0,1,n)}function Ty(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const vl=.35;function Ny(e=vl){return e===!1?e=0:e===!0&&(e=vl),{x:jd(e,"left","right"),y:jd(e,"top","bottom")}}function jd(e,t,n){return{min:Pd(e,t),max:Pd(e,n)}}function Pd(e,t){return typeof e=="number"?e:e[t]||0}const Cd=()=>({translate:0,scale:1,origin:0,originPoint:0}),lr=()=>({x:Cd(),y:Cd()}),Ed=()=>({min:0,max:0}),be=()=>({x:Ed(),y:Ed()});function st(e){return[e("x"),e("y")]}function Th({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function My({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function zy(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ds(e){return e===void 0||e===1}function yl({scale:e,scaleX:t,scaleY:n}){return!ds(e)||!ds(t)||!ds(n)}function Tn(e){return yl(e)||Nh(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Nh(e){return Td(e.x)||Td(e.y)}function Td(e){return e&&e!=="0%"}function ta(e,t,n){const r=e-n,i=t*r;return n+i}function Nd(e,t,n,r,i){return i!==void 0&&(e=ta(e,i,r)),ta(e,n,r)+t}function xl(e,t=0,n=1,r,i){e.min=Nd(e.min,t,n,r,i),e.max=Nd(e.max,t,n,r,i)}function Mh(e,{x:t,y:n}){xl(e.x,t.translate,t.scale,t.originPoint),xl(e.y,n.translate,n.scale,n.originPoint)}function Dy(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&cr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Mh(e,a)),r&&Tn(o.latestValues)&&cr(e,o.latestValues))}t.x=Md(t.x),t.y=Md(t.y)}function Md(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Zt(e,t){e.min=e.min+t,e.max=e.max+t}function zd(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,a=fe(e.min,e.max,o);xl(e,t[n],t[r],a,t.scale)}const Ly=["x","scaleX","originX"],Ay=["y","scaleY","originY"];function cr(e,t){zd(e.x,t,Ly),zd(e.y,t,Ay)}function zh(e,t){return Th(zy(e.getBoundingClientRect(),t))}function Ry(e,t,n){const r=zh(e,n),{scroll:i}=t;return i&&(Zt(r.x,i.offset.x),Zt(r.y,i.offset.y)),r}const Dh=({current:e})=>e?e.ownerDocument.defaultView:null,Vy=new WeakMap;class Iy{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=be(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Pa(f,"page").point)},o=(f,d)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Wm(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),st(k=>{let v=this.getAxisMotionValue(k).get()||0;if(Nt.test(v)){const{projection:m}=this.visualElement;if(m&&m.layout){const h=m.layout.layoutBox[k];h&&(v=tt(h)*(parseFloat(v)/100))}}this.originPoint[k]=v}),y&&oe.update(()=>y(f,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(f,d)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:k}=d;if(g&&this.currentDirection===null){this.currentDirection=Fy(k),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,k),this.updateAxis("y",d.point,k),this.visualElement.render(),x&&x(f,d)},s=(f,d)=>this.stop(f,d),l=()=>st(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ch(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Dh(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&oe.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!lo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=jy(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&ar(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Py(i.layoutBox,n):this.constraints=!1,this.elastic=Ny(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&st(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=Ty(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ar(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Ry(r,i.root,this.visualElement.getTransformPagePoint());let a=Cy(i.layout.layoutBox,o);if(n){const s=n(My(a));this.hasMutatedConstraints=!!s,s&&(a=Th(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},c=st(f=>{if(!lo(f,n,this.currentDirection))return;let d=l&&l[f]||{};a&&(d={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,y={type:"inertia",velocity:r?t[f]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(f,y)});return Promise.all(c).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Vc(t,r,0,n))}stopAnimation(){st(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){st(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){st(n=>{const{drag:r}=this.getProps();if(!lo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-fe(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ar(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};st(a=>{const s=this.getAxisMotionValue(a);if(s){const l=s.get();i[a]=Ey({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),st(a=>{if(!lo(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];s.set(fe(l,c,i[a]))})}addListeners(){if(!this.visualElement.current)return;Vy.set(this.visualElement,this);const t=this.visualElement.current,n=Bt(t,"pointerdown",l=>{const{drag:c,dragListener:f=!0}=this.getProps();c&&f&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ar(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const a=Ft(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(st(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=l[f].translate,d.set(d.get()+l[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=vl,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function lo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Fy(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class _y extends Sn{constructor(t){super(t),this.removeGroupControls=ge,this.removeListeners=ge,this.controls=new Iy(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ge}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dd=e=>(t,n)=>{e&&oe.update(()=>e(t,n))};class By extends Sn{constructor(){super(...arguments),this.removePointerDownListener=ge}onPointerDown(t){this.session=new Ch(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Dh(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Dd(t),onStart:Dd(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&oe.update(()=>i(o,a))}}}mount(){this.removePointerDownListener=Bt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Oy(){const e=b.useContext(wa);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const So={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ld(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Or={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const n=Ld(e,t.target.x),r=Ld(e,t.target.y);return`${n}% ${r}%`}},Hy={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=xn.parse(e);if(i.length>5)return r;const o=xn.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const c=fe(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=c),typeof i[3+a]=="number"&&(i[3+a]/=c),o(i)}};class Uy extends Ct.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Qg(Gy),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),So.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||oe.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Lh(e){const[t,n]=Oy(),r=b.useContext(Sc);return Ct.createElement(Uy,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Tm),isPresent:t,safeToRemove:n})}const Gy={borderRadius:{...Or,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Or,borderTopRightRadius:Or,borderBottomLeftRadius:Or,borderBottomRightRadius:Or,boxShadow:Hy},Ah=["TopLeft","TopRight","BottomLeft","BottomRight"],Wy=Ah.length,Ad=e=>typeof e=="string"?parseFloat(e):e,Rd=e=>typeof e=="number"||H.test(e);function $y(e,t,n,r,i,o){i?(e.opacity=fe(0,n.opacity!==void 0?n.opacity:1,Ky(r)),e.opacityExit=fe(t.opacity!==void 0?t.opacity:1,0,Yy(r))):o&&(e.opacity=fe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<Wy;a++){const s=`border${Ah[a]}Radius`;let l=Vd(t,s),c=Vd(n,s);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Rd(l)===Rd(c)?(e[s]=Math.max(fe(Ad(l),Ad(c),r),0),(Nt.test(c)||Nt.test(l))&&(e[s]+="%")):e[s]=c}(t.rotate||n.rotate)&&(e.rotate=fe(t.rotate||0,n.rotate||0,r))}function Vd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Ky=Rh(0,.5,rh),Yy=Rh(.5,.95,ge);function Rh(e,t,n){return r=>r<e?0:r>t?1:n(Pi(e,t,r))}function Id(e,t){e.min=t.min,e.max=t.max}function at(e,t){Id(e.x,t.x),Id(e.y,t.y)}function Fd(e,t,n,r,i){return e-=t,e=ta(e,1/n,r),i!==void 0&&(e=ta(e,1/i,r)),e}function Xy(e,t=0,n=1,r=.5,i,o=e,a=e){if(Nt.test(t)&&(t=parseFloat(t),t=fe(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=fe(o.min,o.max,r);e===o&&(s-=t),e.min=Fd(e.min,t,n,s,i),e.max=Fd(e.max,t,n,s,i)}function _d(e,t,[n,r,i],o,a){Xy(e,t[n],t[r],t[i],t.scale,o,a)}const Qy=["x","scaleX","originX"],qy=["y","scaleY","originY"];function Bd(e,t,n,r){_d(e.x,t,Qy,n?n.x:void 0,r?r.x:void 0),_d(e.y,t,qy,n?n.y:void 0,r?r.y:void 0)}function Od(e){return e.translate===0&&e.scale===1}function Vh(e){return Od(e.x)&&Od(e.y)}function Jy(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Ih(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Hd(e){return tt(e.x)/tt(e.y)}class Zy{constructor(){this.members=[]}add(t){Ic(this.members,t),t.scheduleRender()}remove(t){if(Fc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ud(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:f}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),f&&(r+=`rotateY(${f}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return(a!==1||s!==1)&&(r+=`scale(${a}, ${s})`),r||"none"}const e4=(e,t)=>e.depth-t.depth;class t4{constructor(){this.children=[],this.isDirty=!1}add(t){Ic(this.children,t),this.isDirty=!0}remove(t){Fc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(e4),this.isDirty=!1,this.children.forEach(t)}}function n4(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&($t(r),e(o-t))};return oe.read(r,!0),()=>$t(r)}function r4(e){window.MotionDebug&&window.MotionDebug.record(e)}function i4(e){return e instanceof SVGElement&&e.tagName!=="svg"}function o4(e,t,n){const r=Ye(e)?e:Sr(e);return r.start(Vc("",r,t,n)),r.animation}const Gd=["","X","Y","Z"],a4={visibility:"hidden"},Wd=1e3;let s4=0;const Nn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Fh({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=s4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Nn.totalNodes=Nn.resolvedTargetDeltas=Nn.recalculatedProjection=0,this.nodes.forEach(u4),this.nodes.forEach(h4),this.nodes.forEach(g4),this.nodes.forEach(d4),r4(Nn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new t4)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new _c),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=i4(a),this.instance=a;const{layoutId:l,layout:c,visualElement:f}=this.options;if(f&&!f.current&&f.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(c||l)&&(this.isLayoutDirty=!0),e){let d;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=n4(p,250),So.hasAnimatedSinceResize&&(So.hasAnimatedSinceResize=!1,this.nodes.forEach(Kd))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&f&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||f.getDefaultTransition()||b4,{onLayoutAnimationStart:k,onLayoutAnimationComplete:v}=f.getProps(),m=!this.targetLayout||!Ih(this.targetLayout,y)||g,h=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const w={...Rc(x,"layout"),onPlay:k,onComplete:v};(f.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||Kd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(v4),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($d);return}this.isUpdating||this.nodes.forEach(p4),this.isUpdating=!1,this.nodes.forEach(m4),this.nodes.forEach(l4),this.nodes.forEach(c4),this.clearAllSnapshots();const s=performance.now();Ae.delta=yn(0,1e3/60,s-Ae.timestamp),Ae.timestamp=s,Ae.isProcessing=!0,ts.update.process(Ae),ts.preRender.process(Ae),ts.render.process(Ae),Ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(f4),this.sharedNodes.forEach(y4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=be(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform,s=this.projectionDelta&&!Vh(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;a&&(s||Tn(this.latestValues)||f)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),k4(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return be();const s=a.measureViewportBox(),{scroll:l}=this.root;return l&&(Zt(s.x,l.offset.x),Zt(s.y,l.offset.y)),s}removeElementScroll(a){const s=be();at(s,a);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:f,options:d}=c;if(c!==this.root&&f&&d.layoutScroll){if(f.isRoot){at(s,a);const{scroll:p}=this.root;p&&(Zt(s.x,-p.offset.x),Zt(s.y,-p.offset.y))}Zt(s.x,f.offset.x),Zt(s.y,f.offset.y)}}return s}applyTransform(a,s=!1){const l=be();at(l,a);for(let c=0;c<this.path.length;c++){const f=this.path[c];!s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&cr(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Tn(f.latestValues)&&cr(l,f.latestValues)}return Tn(this.latestValues)&&cr(l,this.latestValues),l}removeTransform(a){const s=be();at(s,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Tn(c.latestValues))continue;yl(c.latestValues)&&c.updateSnapshot();const f=be(),d=c.measurePageBox();at(f,d),Bd(s,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,f)}return Tn(this.latestValues)&&Bd(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=Ae.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=be(),this.relativeTargetOrigin=be(),oi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=be(),this.targetWithTransforms=be()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sy(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):at(this.target,this.layout.layoutBox),Mh(this.target,this.targetDelta)):at(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=be(),this.relativeTargetOrigin=be(),oi(this.relativeTargetOrigin,this.target,g.target),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Nn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||yl(this.parent.latestValues)||Nh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ae.timestamp&&(c=!1),c)return;const{layout:f,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||d))return;at(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;Dy(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox);const{target:y}=s;if(!y){this.projectionTransform&&(this.projectionDelta=lr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=lr(),this.projectionDeltaWithTransform=lr());const x=this.projectionTransform;ii(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Ud(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Nn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const s=this.getStack();s&&s.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,s=!1){const l=this.snapshot,c=l?l.latestValues:{},f={...this.latestValues},d=lr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=be(),g=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=g!==y,k=this.getStack(),v=!k||k.members.length<=1,m=!!(x&&!v&&this.options.crossfade===!0&&!this.path.some(w4));this.animationProgress=0;let h;this.mixTargetDelta=w=>{const S=w/1e3;Yd(d.x,a.x,S),Yd(d.y,a.y,S),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(oi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),x4(this.relativeTarget,this.relativeTargetOrigin,p,S),h&&Jy(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=be()),at(h,this.relativeTarget)),x&&(this.animationValues=f,$y(f,c,this.latestValues,S,m,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{So.hasAnimatedSinceResize=!0,this.currentAnimation=o4(0,Wd,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Wd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:c,latestValues:f}=a;if(!(!s||!l||!c)){if(this!==a&&this.layout&&c&&_h(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||be();const d=tt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+d;const p=tt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}at(s,l),cr(s,f),ii(this.projectionDeltaWithTransform,this.layoutCorrected,s,f)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Zy),this.sharedNodes.get(a).add(s);const c=s.options.initialPromotionConfig;s.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const c={};for(let f=0;f<Gd.length;f++){const d="rotate"+Gd[f];l[d]&&(c[d]=l[d],a.setStaticValue(d,0))}a.render();for(const f in c)a.setStaticValue(f,c[f]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return a4;const c={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ko(a==null?void 0:a.pointerEvents)||"",c.transform=f?f(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=ko(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Tn(this.latestValues)&&(x.transform=f?f({},""):"none",this.hasProjected=!1),x}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=Ud(this.projectionDeltaWithTransform,this.treeScale,p),f&&(c.transform=f(p,c.transform));const{x:g,y}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Yo){if(p[x]===void 0)continue;const{correct:k,applyTo:v}=Yo[x],m=c.transform==="none"?p[x]:k(p[x],d);if(v){const h=v.length;for(let w=0;w<h;w++)c[v[w]]=m}else c[x]=m}return this.options.layoutId&&(c.pointerEvents=d===this?ko(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach($d),this.root.sharedNodes.clear()}}}function l4(e){e.updateLayout()}function c4(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?st(d=>{const p=a?n.measuredBox[d]:n.layoutBox[d],g=tt(p);p.min=r[d].min,p.max=p.min+g}):_h(o,n.layoutBox,r)&&st(d=>{const p=a?n.measuredBox[d]:n.layoutBox[d],g=tt(r[d]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const s=lr();ii(s,r,n.layoutBox);const l=lr();a?ii(l,e.applyTransform(i,!0),n.measuredBox):ii(l,r,n.layoutBox);const c=!Vh(s);let f=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:g}=d;if(p&&g){const y=be();oi(y,n.layoutBox,p.layoutBox);const x=be();oi(x,r,g.layoutBox),Ih(y,x)||(f=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:c,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function u4(e){Nn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function d4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function f4(e){e.clearSnapshot()}function $d(e){e.clearMeasurements()}function p4(e){e.isLayoutDirty=!1}function m4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Kd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function h4(e){e.resolveTargetDelta()}function g4(e){e.calcProjection()}function v4(e){e.resetRotation()}function y4(e){e.removeLeadSnapshot()}function Yd(e,t,n){e.translate=fe(t.translate,0,n),e.scale=fe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Xd(e,t,n,r){e.min=fe(t.min,n.min,r),e.max=fe(t.max,n.max,r)}function x4(e,t,n,r){Xd(e.x,t.x,n.x,r),Xd(e.y,t.y,n.y,r)}function w4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const b4={duration:.45,ease:[.4,0,.1,1]},Qd=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),qd=Qd("applewebkit/")&&!Qd("chrome/")?Math.round:ge;function Jd(e){e.min=qd(e.min),e.max=qd(e.max)}function k4(e){Jd(e.x),Jd(e.y)}function _h(e,t,n){return e==="position"||e==="preserve-aspect"&&!gl(Hd(t),Hd(n),.2)}const S4=Fh({attachResizeListener:(e,t)=>Ft(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fs={current:void 0},Bh=Fh({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fs.current){const e=new S4({});e.mount(window),e.setOptions({layoutScroll:!0}),fs.current=e}return fs.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),j4={pan:{Feature:By},drag:{Feature:_y,ProjectionNode:Bh,MeasureLayout:Lh}},P4=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function C4(e){const t=P4.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function wl(e,t,n=1){const[r,i]=C4(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return kh(a)?parseFloat(a):a}else return cl(i)?wl(i,t,n+1):i}function E4(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!cl(o))return;const a=wl(o,r);a&&i.set(a)});for(const i in t){const o=t[i];if(!cl(o))continue;const a=wl(o,r);a&&(t[i]=a,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const T4=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Oh=e=>T4.has(e),N4=e=>Object.keys(e).some(Oh),Zd=e=>e===Wn||e===H,ef=(e,t)=>parseFloat(e.split(", ")[t]),tf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return ef(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?ef(o[1],e):0}},M4=new Set(["x","y","z"]),z4=Li.filter(e=>!M4.has(e));function D4(e){const t=[];return z4.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const jr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:tf(4,13),y:tf(5,14)};jr.translateX=jr.x;jr.translateY=jr.y;const L4=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{s[c]=jr[c](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const f=t.getValue(c);f&&f.jump(s[c]),e[c]=jr[c](l,o)}),e},A4=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Oh);let o=[],a=!1;const s=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let f=n[l],d=Br(f);const p=t[l];let g;if(Qo(p)){const y=p.length,x=p[0]===null?1:0;f=p[x],d=Br(f);for(let k=x;k<y&&p[k]!==null;k++)g?Ea(Br(p[k])===g):g=Br(p[k])}else g=Br(p);if(d!==g)if(Zd(d)&&Zd(g)){const y=c.get();typeof y=="string"&&c.set(parseFloat(y)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&g===H&&(t[l]=p.map(parseFloat))}else d!=null&&d.transform&&(g!=null&&g.transform)&&(f===0||p===0)?f===0?c.set(g.transform(f)):t[l]=d.transform(p):(a||(o=D4(e),a=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],c.jump(p))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,c=L4(t,e,s);return o.length&&o.forEach(([f,d])=>{e.getValue(f).set(d)}),e.render(),ba&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function R4(e,t,n,r){return N4(t)?A4(e,t,n,r):{target:t,transitionEnd:r}}const V4=(e,t,n,r)=>{const i=E4(e,t,r);return t=i.target,r=i.transitionEnd,R4(e,t,n,r)},bl={current:null},Hh={current:!1};function I4(){if(Hh.current=!0,!!ba)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>bl.current=e.matches;e.addListener(t),t()}else bl.current=!1}function F4(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(Ye(o))e.addValue(i,o),ea(r)&&r.add(i);else if(Ye(a))e.addValue(i,Sr(o,{owner:e})),ea(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const s=e.getValue(i);!s.hasAnimated&&s.set(o)}else{const s=e.getStaticValue(i);e.addValue(i,Sr(s!==void 0?s:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const nf=new WeakMap,Uh=Object.keys(ji),_4=Uh.length,rf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],B4=kc.length;class O4{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>oe.render(this.render,!1,!0);const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=Sa(n),this.isVariantNode=Em(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...f}=this.scrapeMotionValuesFromProps(n,{});for(const d in f){const p=f[d];s[d]!==void 0&&Ye(p)&&(p.set(s[d],!1),ea(c)&&c.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,nf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Hh.current||I4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:bl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){nf.delete(this.current),this.projection&&this.projection.unmount(),$t(this.notifyUpdate),$t(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Gn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&oe.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let a,s;for(let l=0;l<_4;l++){const c=Uh[l],{isEnabled:f,Feature:d,ProjectionNode:p,MeasureLayout:g}=ji[c];p&&(a=p),f(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),g&&(s=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:f,dragConstraints:d,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!f||d&&ar(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:p,layoutRoot:g})}return s}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):be()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<rf.length;r++){const i=rf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=F4(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<B4;r++){const i=kc[r],o=this.props[i];(Si(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Sr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Mc(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ye(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new _c),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Gh extends O4{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let a=iy(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),a&&(a=i(a))),o){ny(this,r,a);const s=V4(this,r,a,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function H4(e){return window.getComputedStyle(e)}class U4 extends Gh{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Gn.has(n)){const r=Ac(n);return r&&r.default||0}else{const r=H4(t),i=(zm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return zh(t,n)}build(t,n,r,i){Pc(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Nc(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ye(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Im(t,n,r,i)}}class G4 extends Gh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Gn.has(n)){const r=Ac(n);return r&&r.default||0}return n=Fm.has(n)?n:wc(n),t.getAttribute(n)}measureInstanceViewportBox(){return be()}scrapeMotionValuesFromProps(t,n){return Bm(t,n)}build(t,n,r,i){Ec(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){_m(t,n,r,i)}mount(t){this.isSVGTag=Tc(t.tagName),super.mount(t)}}const W4=(e,t)=>jc(e)?new G4(t,{enableHardwareAcceleration:!1}):new U4(t,{enableHardwareAcceleration:!0}),$4={layout:{ProjectionNode:Bh,MeasureLayout:Lh}},K4={...xy,..._2,...j4,...$4},D=Yg((e,t)=>C2(e,t,K4,W4));function Wh(){const e=b.useRef(!1);return xc(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Y4(){const e=Wh(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>oe.postRender(r),[r]),t]}class X4 extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Q4({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:o,height:a,top:s,left:l}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),b.createElement(X4,{isPresent:t,childRef:r,sizeRef:i},b.cloneElement(e,{ref:r}))}const ps=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=Om(q4),l=b.useId(),c=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:f=>{s.set(f,!0);for(const d of s.values())if(!d)return;r&&r()},register:f=>(s.set(f,!1),()=>s.delete(f))}),o?void 0:[n]);return b.useMemo(()=>{s.forEach((f,d)=>s.set(d,!1))},[n]),b.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=b.createElement(Q4,{isPresent:n},e)),b.createElement(wa.Provider,{value:c},e)};function q4(){return new Map}function J4(e){return b.useEffect(()=>()=>e(),[])}const Mn=e=>e.key||"";function Z4(e,t){e.forEach(n=>{const r=Mn(n);t.set(r,n)})}function e5(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const t5=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const s=b.useContext(Sc).forceRender||Y4()[0],l=Wh(),c=e5(e);let f=c;const d=b.useRef(new Map).current,p=b.useRef(f),g=b.useRef(new Map).current,y=b.useRef(!0);if(xc(()=>{y.current=!1,Z4(c,g),p.current=f}),J4(()=>{y.current=!0,g.clear(),d.clear()}),y.current)return b.createElement(b.Fragment,null,f.map(m=>b.createElement(ps,{key:Mn(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:a},m)));f=[...f];const x=p.current.map(Mn),k=c.map(Mn),v=x.length;for(let m=0;m<v;m++){const h=x[m];k.indexOf(h)===-1&&!d.has(h)&&d.set(h,void 0)}return a==="wait"&&d.size&&(f=[]),d.forEach((m,h)=>{if(k.indexOf(h)!==-1)return;const w=g.get(h);if(!w)return;const S=x.indexOf(h);let T=m;if(!T){const C=()=>{d.delete(h);const P=Array.from(g.keys()).filter(F=>!k.includes(F));if(P.forEach(F=>g.delete(F)),p.current=c.filter(F=>{const _=Mn(F);return _===h||P.includes(_)}),!d.size){if(l.current===!1)return;s(),r&&r()}};T=b.createElement(ps,{key:Mn(w),isPresent:!1,onExitComplete:C,custom:t,presenceAffectsLayout:o,mode:a},w),d.set(h,T)}f.splice(S,0,T)}),f=f.map(m=>{const h=m.key;return d.has(h)?m:b.createElement(ps,{key:Mn(m),isPresent:!0,presenceAffectsLayout:o,mode:a},m)}),b.createElement(b.Fragment,null,d.size?f:f.map(m=>b.cloneElement(m)))};function n5(e,t,n){var r;if(typeof e=="string"){let i=document;t&&(Ea(!!t.current),i=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const r5={some:0,all:1};function i5(e,t,{root:n,margin:r,amount:i="some"}={}){const o=n5(e),a=new WeakMap,s=c=>{c.forEach(f=>{const d=a.get(f.target);if(f.isIntersecting!==!!d)if(f.isIntersecting){const p=t(f);typeof p=="function"?a.set(f.target,p):l.unobserve(f.target)}else d&&(d(f),a.delete(f.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:r5[i]});return o.forEach(c=>l.observe(c)),()=>l.disconnect()}function Tr(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,a]=b.useState(!1);return b.useEffect(()=>{if(!e.current||i&&o)return;const s=()=>(a(!0),i?void 0:()=>a(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return i5(e.current,s,l)},[t,e,n,i,r]),o}var $h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},of=Ct.createContext&&Ct.createContext($h),hn=globalThis&&globalThis.__assign||function(){return hn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hn.apply(this,arguments)},o5=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Kh(e){return e&&e.map(function(t,n){return Ct.createElement(t.tag,hn({key:n},t.attr),Kh(t.child))})}function $(e){return function(t){return Ct.createElement(a5,hn({attr:hn({},e.attr)},t),Kh(e.child))}}function a5(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=o5(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ct.createElement("svg",hn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:hn(hn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&Ct.createElement("title",null,o),e.children)};return of!==void 0?Ct.createElement(of.Consumer,null,function(n){return t(n)}):t($h)}function s5(e){return $({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"}}]})(e)}function l5(e){return $({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}}]})(e)}function ms(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"}}]})(e)}function Ci(e){return $({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function c5(e){return $({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}}]})(e)}function af(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"}}]})(e)}function Bc(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function u5(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"}}]})(e)}function d5(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"}}]})(e)}function sf(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(e)}function f5(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"}}]})(e)}function p5(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"}}]})(e)}function m5(e){return $({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"}}]})(e)}function h5(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function g5(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"}}]})(e)}function v5(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function lf(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"}}]})(e)}function y5(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function x5(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(e)}function w5(e){return $({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"}}]})(e)}function na(e){return $({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function kl(e){return $({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"}}]})(e)}function b5(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function Ei(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function hs(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function cf(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function Yh(e){return $({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"}}]})(e)}function Xh(e){return $({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"}}]})(e)}function Qh(e){return $({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(e)}function k5(e){return $({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"}}]})(e)}function Oc(e){return $({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function Sl(e){return $({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function S5(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function j5(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"}}]})(e)}function jl(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"}}]})(e)}function P5(e){return $({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(e)}function qh(e){return $({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function Jh(e){return $({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const C5=()=>{const{language:e,changeLanguage:t,availableLanguages:n}=Xe(),[r,i]=b.useState(!1),[o,a]=b.useState({top:0,right:0}),s=b.useRef(null),l=b.useRef(null),c=n.find(g=>g.code===e)||n[0],f=g=>{t(g.code),i(!1)},d=()=>{i(!r),r||setTimeout(p,0)},p=()=>{if(s.current){const g=s.current.getBoundingClientRect(),y=window.innerHeight,x=400,k=y-g.bottom,v=g.top;let m,h;k>=x||k>v?m=g.bottom+8:m=g.top-x-8,h=window.innerWidth-g.right,a({top:m,right:h})}};return b.useEffect(()=>{const g=k=>{s.current&&!s.current.contains(k.target)&&l.current&&!l.current.contains(k.target)&&i(!1)},y=()=>{r&&p()},x=()=>{r&&p()};return r&&(p(),document.addEventListener("mousedown",g),window.addEventListener("resize",x),window.addEventListener("scroll",y,{passive:!0}),document.addEventListener("scroll",y,{passive:!0})),()=>{document.removeEventListener("mousedown",g),window.removeEventListener("resize",x),window.removeEventListener("scroll",y),document.removeEventListener("scroll",y)}},[r]),u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"language-selector",children:u.jsxs("button",{ref:s,className:"language-button",onClick:d,children:[u.jsx(Xh,{}),u.jsx("span",{children:c.name}),u.jsx(x5,{style:{transform:r?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"}})]})}),r&&km.createPortal(u.jsx("div",{ref:l,className:"language-dropdown",style:{position:"fixed",top:o.top,right:o.right,zIndex:100002},children:n.map(g=>u.jsxs("button",{className:`language-option ${e===g.code?"selected":""}`,onClick:()=>f(g),children:[u.jsx("span",{className:"flag",children:g.flag}),u.jsx("span",{className:"name",children:g.name})]},g.code))}),document.body),u.jsx("style",{children:`
        .language-selector {
          position: relative;
          display: inline-block;
          z-index: 100001;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 0.75rem;
          color: rgba(255, 255, 255, 0.95);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
          min-width: 180px;
          max-width: 200px;
          justify-content: space-between;
          flex-shrink: 0;
          min-height: 48px;
          letter-spacing: 0.025em;
        }

        .language-button:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1));
          border-color: rgba(59, 130, 246, 0.6);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
        }

        .language-button svg:first-child {
          color: var(--accent-color);
          font-size: 1.1rem;
        }

        .language-button svg:last-child {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .language-dropdown {
          background: var(--bg-dark);
          border: 2px solid var(--border-color);
          border-radius: 0.6rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          min-width: 200px;
          max-width: 250px;
          max-height: 400px;
          overflow-y: auto;
          overflow-x: hidden;
          backdrop-filter: blur(10px);
          z-index: 100002 !important;
          position: fixed !important;
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 1rem 1.2rem;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          white-space: nowrap;
        }

        .language-option:hover {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-color);
          transform: translateX(5px);
        }

        .language-option.selected {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-color);
          border-left: 3px solid var(--accent-color);
        }

        .flag {
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .name {
          font-weight: 600;
        }

        .language-dropdown::-webkit-scrollbar {
          width: 6px;
        }

        .language-dropdown::-webkit-scrollbar-track {
          background: var(--bg-darker);
          border-radius: 3px;
        }

        .language-dropdown::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 3px;
        }

        .language-dropdown::-webkit-scrollbar-thumb:hover {
          background: var(--accent-color);
        }

        @media (max-width: 1024px) {
          .language-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            min-width: 130px;
            max-width: 160px;
          }

          .language-dropdown {
            min-width: 200px;
            max-width: 250px;
            right: 0;
            left: auto;
          }
        }

        @media (max-width: 768px) {
          .language-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            min-width: 120px;
            max-width: 140px;
          }

          .language-button span {
            display: none;
          }

          .language-dropdown {
            right: 0;
            left: auto;
            min-width: 100%;
            max-width: 100%;
            max-height: 350px;
          }
        }

        @media (max-width: 480px) {
          .language-button {
            padding: 0.3rem 0.6rem;
            font-size: 0.75rem;
            min-width: 100px;
            max-width: 120px;
          }

          .language-dropdown {
            min-width: 100%;
            max-width: 100%;
            max-height: 300px;
          }
        }

        @media (max-width: 1600px) {
          .language-button {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
            min-height: 44px;
            min-width: 170px;
            max-width: 190px;
          }
        }

        @media (max-width: 1024px) {
          .language-button {
            padding: 0.5rem 0.8rem;
            font-size: 0.85rem;
            min-height: 40px;
            min-width: 140px;
            max-width: 160px;
          }
        }

        @media (max-width: 1100px) {
          .language-button {
            padding: 0.4rem 0.7rem;
            font-size: 0.8rem;
            min-height: 38px;
            min-width: 130px;
            max-width: 150px;
          }
        }

        @media (max-width: 1200px) {
          .language-button {
            font-size: 0.8rem;
            padding: 0.4rem 0.7rem;
            min-height: 38px;
            min-width: 120px;
            max-width: 140px;
          }
        }

        @media (max-width: 900px) {
          .language-button {
            padding: 0.5rem 0.9rem;
            font-size: 0.8rem;
            min-height: 40px;
            min-width: 110px;
            max-width: 130px;
          }
        }

        @media (max-width: 768px) {
          .language-button {
            width: 100%;
            max-width: 100%;
            justify-content: center;
            padding: 0.8rem 1.6rem;
            font-size: 1rem;
            font-weight: 600;
            min-height: 48px;
            min-width: auto;
          }
        }

        @media (max-width: 480px) {
          .language-button {
            max-width: 100%;
            padding: 0.7rem 1.3rem;
            font-size: 0.9rem;
            min-height: 44px;
          }
        }

        @media (max-width: 360px) {
          .language-button {
            max-width: 100%;
            padding: 0.6rem 1.1rem;
            font-size: 0.85rem;
            min-height: 40px;
          }
        }
      `})]})},E5=()=>{const{t:e}=Xe(),[t,n]=b.useState(!1),[r,i]=b.useState(!1);b.useEffect(()=>{const s=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);const o=[{name:e("nav.home"),href:"#home"},{name:e("nav.experience"),href:"#experience"},{name:e("nav.education"),href:"#education"},{name:e("nav.projects"),href:"#projects"},{name:e("nav.contact"),href:"#contact"}],a=s=>{const l=document.querySelector(s);l&&l.scrollIntoView({behavior:"smooth"}),n(!1)};return u.jsxs(D.header,{initial:{y:0,opacity:1},animate:{y:0,opacity:1},transition:{duration:.3,ease:"easeInOut"},className:`header ${r?"scrolled":""}`,children:[u.jsxs("div",{className:"header-content",children:[u.jsx(D.div,{whileHover:{scale:1.05},className:"logo",children:u.jsx("a",{href:"#home",onClick:s=>{s.preventDefault(),a("#home")},children:u.jsx("img",{src:"/logo.jpg",alt:"Shaksham Karki",className:"logo-image"})})}),u.jsxs("nav",{className:`nav ${t?"nav-open":""}`,children:[u.jsx("ul",{className:"nav-list",children:o.map((s,l)=>u.jsx(D.li,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:l*.1},children:u.jsx("a",{href:s.href,onClick:c=>{c.preventDefault(),a(s.href)},className:"nav-link",children:s.name})},s.name))}),u.jsxs("div",{className:"header-actions",children:[u.jsx(C5,{}),u.jsxs(D.button,{onClick:()=>window.open("/ShakshamKarkiResume.pdf","_blank"),whileHover:{scale:1.05},whileTap:{scale:.95},className:"resume-btn","aria-label":"View Resume",children:[u.jsx(Yh,{}),u.jsx("span",{children:"View Resume"})]})]})]}),u.jsx("button",{className:"menu-toggle",onClick:()=>n(!t),"aria-label":t?"Close menu":"Open menu",children:t?u.jsx(qh,{}):u.jsx(h5,{})})]}),u.jsx("style",{children:`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          height: 80px;
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.98);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          gap: 2rem;
        }

        .logo {
          flex-shrink: 0;
        }

        .logo a {
          display: block;
          text-decoration: none;
        }

        .logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(59, 130, 246, 0.3);
          transition: border-color 0.3s ease;
        }

        .logo a:hover .logo-image {
          border-color: rgba(59, 130, 246, 0.6);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex: 1;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: rgba(59, 130, 246, 1);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .resume-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(59, 130, 246, 0.1);
          color: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 0.65rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .resume-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .menu-toggle {
          display: none;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          padding: 0.5rem;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .header {
            height: 70px;
          }

          .header-content {
            padding: 0 1.5rem;
          }

          .nav-list {
            gap: 1.5rem;
          }

          .nav-link {
            font-size: 0.9rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .header {
            height: 60px;
          }

          .header-content {
            padding: 0 1rem;
          }

          .logo-image {
            width: 40px;
            height: 40px;
          }

          .menu-toggle {
            display: flex;
          }

          .nav {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 1.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            max-height: calc(100vh - 60px);
            overflow-y: auto;
            gap: 2rem;
          }

          .nav.nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-list {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }

          .nav-link {
            display: block;
            padding: 0.875rem 1rem;
            text-align: center;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 0.5rem;
            font-size: 1rem;
          }

          .nav-link:hover {
            background: rgba(59, 130, 246, 0.1);
          }

          .header-actions {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }

          .language-selector {
            width: 100%;
          }

          .resume-btn {
            width: 100%;
            justify-content: center;
            padding: 0.875rem;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .header-content {
            padding: 0 0.75rem;
          }

          .logo-image {
            width: 36px;
            height: 36px;
          }

          .menu-toggle {
            width: 40px;
            height: 40px;
          }
        }
      `})]})},ee={personal:{name:"Shaksham Karki",title:"Mobile App Full-Stack Developer",location:"Sunakothi, Lalitpur, Nepal",email:"sachyamkarki@gmail.com",summary:"Passionate Mobile App Full-Stack Developer with hands-on experience in building cross-platform mobile applications and backend services. Skilled in React Native development with growing expertise in server-side technologies and database management. Currently pursuing Computer Science degree while expanding knowledge in full-stack development.",availability:"Available for opportunities"},social:{linkedin:"https://www.linkedin.com/in/shaksham-karki/",github:"https://github.com/shakshamkarki",email:"mailto:sachyamkarki@gmail.com"},experience:[{title:"Mobile App Developer",company:"Tridev Innovation",location:"Lalitpur, Nepal",period:"June 2024 - Present",description:"Developed mobile applications using React Native with focus on user-friendly interfaces and smooth performance. Implemented secure user authentication, real-time features, and third-party API integrations.",achievements:["Built backend services using Node.js to support mobile app functionality and data management","Worked on advanced mobile features including push notifications, Face ID authentication, and complex navigation systems","Collaborated with team members using Git and GitHub for version control and project management","Delivered projects on time while maintaining code quality and following best practices"],technologies:["React Native","Node.js","Express.js","MongoDB","Firebase","Git"]}],education:[{degree:"BS in Computer and Information Science",institution:"University of West Georgia",location:"Online",period:"July 2025 - Present",description:"Coursework: Computer Architecture, Algorithms, Computational Theory, Database Systems. Focus on software development principles and full-stack web technologies.",gpa:"3.51/4.0"},{degree:"Exchange Student with GRSP",institution:"University of North Georgia",location:"Georgia, USA",period:"Aug 2024 - May 2025",description:"Coursework: Python Programming, Java, Calculus I & II, Elementary Portuguese. Cultural ambassador representing Nepal among international students.",gpa:"3.51/4.0"},{degree:"High School Diploma",institution:"Prasadi Academy",location:"Nepal",period:"March 2021 - June 2023",description:"Strong foundation in mathematics and science with focus on STEM subjects.",gpa:"3.51/4.0"}],leadership:[{title:"Georgia Rotary Student Program Scholar",organization:"GRSP 2024-2025",period:"2024 - 2025",description:"Cultural ambassador representing Nepal among 39 students from 22 countries, developing leadership and cross-cultural communication skills."},{title:"Active Member",organization:"Rotaract Club of Patan Heritage",period:"2023 - Present",description:"Participating in community service projects, fundraising events, and cultural preservation initiatives in Lalitpur."},{title:"Former Member",organization:"Leo Club of Kathmandu Manasalu",period:"2021 - 2023",description:"Engaged in social work and leadership development activities for community betterment."}],languages:[{name:"Nepali",level:"Native fluency"},{name:"English",level:"Professional fluent (IELTS: 7 band)"},{name:"Hindi",level:"Professional fluent"},{name:"Spanish",level:"Elementary"},{name:"Portuguese",level:"Elementary"}],skills:{frontend:[{name:"React Native",level:90},{name:"Expo",level:85},{name:"JavaScript",level:90},{name:"TypeScript",level:80},{name:"NativeWind",level:75},{name:"HTML5",level:85},{name:"CSS3",level:85}],backend:[{name:"Node.js",level:85},{name:"Express.js",level:80},{name:"Python",level:75},{name:"Java",level:70},{name:"RESTful APIs",level:85},{name:"MongoDB",level:80},{name:"Firebase Firestore",level:85},{name:"SQLite",level:75},{name:"MySQL",level:65}],mobile:[{name:"iOS Development",level:80},{name:"Android Development",level:80},{name:"Push Notifications",level:85}],tools:[{name:"GitHub",level:90},{name:"Android Studio",level:80},{name:"Firebase",level:85},{name:"AWS",level:60}]},projects:[{id:1,title:"Online Shopping Mobile App",description:"Built a full-stack e-commerce mobile application with product browsing, cart management, and order tracking. Developed backend API using Node.js and Express.js to handle user authentication and order management.",image:"/api/placeholder/400/300",technologies:["React Native","Node.js","Express.js","MongoDB","Firebase"],category:"fullstack",github:"https://github.com/shakshamkarki",live:"https://example.com",featured:!0},{id:2,title:"Task Management App",description:"Created a productivity app for task organization with categories, deadlines, and priority levels. Built RESTful API backend for task CRUD operations and user data synchronization.",image:"/api/placeholder/400/300",technologies:["React Native","Node.js","SQLite","Firebase Cloud Messaging"],category:"mobile",github:"https://github.com/shakshamkarki",live:"https://example.com",featured:!0},{id:3,title:"Image Gallery App",description:"Developed mobile app for image management with gallery features and basic editing tools. Integrated image upload functionality with backend storage and retrieval system.",image:"/api/placeholder/400/300",technologies:["React Native","Expo","Node.js","Firebase Storage"],category:"mobile",github:"https://github.com/shakshamkarki",live:"https://example.com",featured:!1},{id:4,title:"Banking System Simulator",description:"Built a Java-based ATM simulator with core banking operations like deposit, withdrawal, and transfers. Implemented secure user authentication and transaction history tracking.",image:"/api/placeholder/400/300",technologies:["Java","Object-Oriented Programming","File I/O"],category:"backend",github:"https://github.com/shakshamkarki",live:"https://example.com",featured:!1}],education:[{degree:"BS in Computer and Information Science",institution:"University of West Georgia",location:"Online",period:"July 2025 - Present",description:"Coursework: Computer Architecture, Algorithms, Computational Theory, Database Systems. Focus on software development principles and full-stack web technologies."},{degree:"Exchange Student with GRSP",institution:"University of North Georgia",location:"Georgia, USA",period:"Aug 2024 - May 2025",description:"Coursework: Python Programming, Java, Calculus I & II, Elementary Portuguese. Cultural ambassador representing Nepal among international students."},{degree:"High School Diploma",institution:"Prasadi Academy",location:"Nepal",period:"March 2021 - June 2023",description:"GPA: 3.51/4.0. Strong foundation in mathematics and science."}],certifications:[{name:"JavaScript Algorithms and Data Structures",issuer:"freeCodeCamp",date:"2023",credential:"Certificate"},{name:"Responsive Web Design",issuer:"freeCodeCamp",date:"2023",credential:"Certificate"},{name:"React Development",issuer:"Online Platform",date:"2023",credential:"Certificate"}],interests:["Mobile App Development","Cross-platform Development","Backend Services","Database Management","User Experience Design","Problem Solving"],languages:[{name:"Nepali",level:"Native fluency"},{name:"English",level:"Professional fluent (IELTS: 7 band)"},{name:"Hindi",level:"Professional fluent"},{name:"Spanish",level:"Elementary"},{name:"Portuguese",level:"Elementary"}],leadership:[{title:"Georgia Rotary Student Program Scholar",organization:"GRSP 2024-2025",description:"Cultural ambassador representing Nepal among 39 students from 22 countries, developing leadership and cross-cultural communication skills"},{title:"Active Member",organization:"Rotaract Club of Patan Heritage",description:"Participating in community service projects, fundraising events, and cultural preservation initiatives in Lalitpur"},{title:"Former Member",organization:"Leo Club of Kathmandu Manasalu",description:"Engaged in social work and leadership development activities for community betterment"}],certifications:[{id:1,title:"React Native Development",issuer:"Meta (Facebook)",date:"2024",type:"programming",description:"Comprehensive course covering React Native fundamentals, navigation, state management, and deployment.",credentialId:"RN-2024-001",verificationUrl:"https://example.com"},{id:2,title:"AWS Cloud Practitioner",issuer:"Amazon Web Services",date:"2024",type:"cloud",description:"Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",credentialId:"AWS-CLF-2024-002"},{id:3,title:"MongoDB Developer",issuer:"MongoDB University",date:"2023",type:"database",description:"Database design, querying, indexing, and performance optimization using MongoDB.",credentialId:"MDB-DEV-2023-003"}]},T5=()=>{const{t:e}=Xe(),[t,n]=b.useState(!1),r=()=>{const i=document.createElement("a");i.href="/ShakshamKarkiResume.pdf",i.download="Shaksham_Karki_Resume.pdf",document.body.appendChild(i),i.click(),document.body.removeChild(i)};return u.jsxs(u.Fragment,{children:[u.jsxs(D.button,{onClick:()=>n(!0),whileHover:{scale:1.05},whileTap:{scale:.95},className:"resume-button",children:[u.jsx(Yh,{}),u.jsx("span",{children:e("hero.viewResume")})]}),u.jsx(t5,{children:t&&u.jsx(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"resume-overlay",onClick:()=>n(!1),children:u.jsxs(D.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},className:"resume-modal",onClick:i=>i.stopPropagation(),children:[u.jsxs("div",{className:"resume-header",children:[u.jsx("h3",{children:"Shaksham Karki - Resume"}),u.jsxs("div",{className:"resume-actions",children:[u.jsxs(D.button,{onClick:r,whileHover:{scale:1.05},whileTap:{scale:.95},className:"download-btn",children:[u.jsx(b5,{}),e("hero.downloadResume")]}),u.jsx(D.button,{onClick:()=>n(!1),whileHover:{scale:1.05},whileTap:{scale:.95},className:"close-btn",children:u.jsx(qh,{})})]})]}),u.jsx("div",{className:"resume-content",children:u.jsx("iframe",{src:"/ShakshamKarkiResume.pdf#toolbar=0&navpanes=0&scrollbar=1",className:"pdf-viewer",title:e("common.resumeTitle")})})]})})}),u.jsx("style",{children:`
        .resume-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: none;
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .resume-button:hover {
          background: linear-gradient(135deg, var(--bg-darker), var(--bg-dark));
          transform: translateY(-1px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-color);
        }

        .resume-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(15px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }

        .resume-modal {
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          border-radius: 1.5rem;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--border-color);
          width: 100%;
          max-width: 1100px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 2px solid var(--border-color);
        }

        .resume-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          background: linear-gradient(135deg, var(--bg-secondary), var(--bg-dark));
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .resume-header h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .resume-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .download-btn:hover {
          background: linear-gradient(135deg, var(--bg-darker), var(--bg-dark));
          border-color: var(--accent-color);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        .close-btn {
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .close-btn:hover {
          background: linear-gradient(135deg, var(--bg-darker), var(--bg-dark));
          border-color: var(--accent-color);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        .resume-content {
          flex: 1;
          padding: 1.5rem;
          overflow: hidden;
          background: var(--bg-primary);
        }

        .pdf-viewer {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 0.75rem;
          box-shadow: var(--shadow-lg);
          background: white;
          border: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .resume-overlay {
            padding: 1.5rem 1rem;
          }

          .resume-modal {
            height: 90vh;
            border-radius: 1rem;
          }

          .resume-header {
            padding: 1.5rem 1.5rem;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .resume-actions {
            width: 100%;
            justify-content: space-between;
          }

          .resume-header h3 {
            font-size: 1.25rem;
          }

          .resume-content {
            padding: 1rem;
          }
        }
      `})]})},N5=()=>{const{t:e}=Xe(),t=b.useRef(null);b.useEffect(()=>{const r=()=>{const o=window.pageYOffset*.5;t.current&&(t.current.style.transform=`translateY(${o}px)`)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{const r=document.querySelector("#about");r&&r.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{id:"home",className:"profile",children:[u.jsx("div",{className:"profile-background",children:u.jsxs("div",{className:"profile-shapes",children:[u.jsx("div",{className:"shape shape-1"}),u.jsx("div",{className:"shape shape-2"}),u.jsx("div",{className:"shape shape-3"})]})}),u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"profile-content",ref:t,children:u.jsxs("div",{className:"profile-grid",children:[u.jsxs("div",{className:"profile-text",children:[u.jsxs("h1",{className:"profile-title",children:[e("hero.greeting")," ",u.jsx("span",{className:"highlight",children:ee.personal.name})]}),u.jsx(D.h2,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.2,delay:.1},className:"profile-subtitle",children:e("hero.title")}),u.jsx(D.p,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.2,delay:.1},className:"profile-description",children:e("hero.summary")}),u.jsxs(D.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.2,delay:.1},className:"profile-buttons",children:[u.jsxs(D.a,{href:"#contact",whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},className:"btn btn-primary",children:[e("hero.getInTouch"),u.jsx("span",{className:"btn-arrow",children:"→"})]}),u.jsx(T5,{})]}),u.jsxs(D.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.2,delay:.1},className:"profile-social",children:[u.jsx("span",{className:"social-label",children:e("hero.socialLabel")}),u.jsxs("div",{className:"social-links",children:[u.jsx(D.a,{href:ee.social.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,y:-2},whileTap:{scale:.9},className:"social-link",children:u.jsx(Ci,{})}),u.jsx(D.a,{href:ee.social.linkedin,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,y:-2},whileTap:{scale:.9},className:"social-link",children:u.jsx(Bc,{})}),u.jsx(D.a,{href:ee.social.email,whileHover:{scale:1.1,y:-2},whileTap:{scale:.9},className:"social-link",children:u.jsx(Ei,{})})]})]})]}),u.jsx(D.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.2,delay:.1},className:"profile-image",children:u.jsxs("div",{className:"image-container",children:[u.jsxs("div",{className:"profile-photo-container",children:[u.jsx("img",{src:"/logo.jpg",alt:"Shaksham Karki - Professional Headshot",className:"profile-photo",onError:r=>{r.target.style.display="none",r.target.nextSibling.style.display="flex"}}),u.jsx("div",{className:"image-placeholder",style:{display:"none"},children:u.jsx("span",{children:"SK"})})]}),u.jsxs("div",{className:"floating-elements",children:[u.jsx(D.div,{className:"floating-element element-1",animate:{y:[0,-10,0]},transition:{duration:1,repeat:1/0,ease:"easeInOut"},children:"React"}),u.jsx(D.div,{className:"floating-element element-2",animate:{y:[0,-15,0]},transition:{duration:1.2,repeat:1/0,ease:"easeInOut",delay:.2},children:"Node.js"}),u.jsx(D.div,{className:"floating-element element-3",animate:{y:[0,-12,0]},transition:{duration:1.1,repeat:1/0,ease:"easeInOut",delay:.3},children:"Python"}),u.jsx(D.div,{className:"floating-element element-4",animate:{y:[0,-8,0]},transition:{duration:.9,repeat:1/0,ease:"easeInOut",delay:.1},children:"Design"})]})]})})]})}),u.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:.1},className:"scroll-indicator",onClick:n,children:[u.jsx(D.div,{animate:{y:[0,10,0]},transition:{duration:1,repeat:1/0},className:"scroll-arrow",children:u.jsx(f5,{})}),u.jsx("span",{children:"Scroll Down"})]})]}),u.jsx("style",{children:`
        .profile {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #000000 0%, #111111 25%, #1a1a1a 50%, #0a0a0a 75%, #000000 100%);
          padding: 40px 0 40px; 
        }

        @media (min-width: 480px) {
          .profile {
            padding: 25px 0 50px;
          }
        }

        @media (min-width: 768px) {
          .profile {
            padding: 30px 0 60px;
          }
        }

        @media (min-width: 1024px) {
          .profile {
            padding: 35px 0 px;
          }
        }

        .profile-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .profile-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .profile-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: -3rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1600px;
          margin: -10 auto;
        }

        @media (min-width: 1024px) {
          .profile-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 8rem;
          }
        }

        .profile-text {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        @media (min-width: 768px) {
          .profile-text {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-text {
            text-align: left;
            margin: 0;
            padding: -3rem -2rem;
          }
        }

        .profile-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .profile-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .profile-title {
            font-size: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-title {
            font-size: 4.5rem;
          }
        }

        .highlight {
          background: linear-gradient(135deg, #b8860b, #daa520, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .profile-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .profile-subtitle {
            font-size: 1.75rem;
          }
        }

        .profile-description {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 3.5rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
        }

        @media (min-width: 1024px) {
          .profile-description {
            margin-left: 0;
            margin-right: 0;
            font-size: 1.375rem;
          }
        }

        .profile-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .profile-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-buttons {
            justify-content: flex-start;
          }
        }

        .profile-buttons .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .profile-social {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem 0 8rem 0;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .profile-social {
            padding: 2rem 0 6rem 0;
            margin-bottom: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-social {
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            padding: 2rem 0 8rem 0;
            margin-bottom: 4rem;
          }
        }

        .social-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          width: 3rem;
          height: 3rem;
          background: var(--bg-secondary);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--bg-dark);
          border-color: var(--accent-color);
          color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .social-link:nth-child(1):hover {
          color: #333;
          border-color: #333;
          box-shadow: 0 4px 12px rgba(51, 51, 51, 0.3);
        }

        .social-link:nth-child(2):hover {
          color: #0077b5;
          border-color: #0077b5;
          box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
        }

        .social-link:nth-child(3):hover {
          color: #ea4335;
          border-color: #ea4335;
          box-shadow: 0 4px 12px rgba(234, 67, 53, 0.3);
        }

        .profile-image {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          padding: 1rem;
          margin: 0 auto;
          max-width: 100%;
          padding-top: 0rem;
        }

        @media (max-width: 768px) {
          .profile-image {
            padding: 0.5rem;
            padding-top: 0rem;
          }
        }

        @media (max-width: 480px) {
          .profile-image {
            padding: 0.25rem;
            padding-top: 0rem;
          }
        }

        .image-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
          margin-top: -5rem;
          padding: 1.5rem;
        }

        @media (min-width: 480px) {
          .image-container {
            width: 320px;
            height: 320px;
            padding: 1.75rem;
            margin-top: -6rem;
          }
        }

        @media (min-width: 768px) {
          .image-container {
            width: 350px;
            height: 350px;
            padding: 2rem;
            margin-top: -7rem;
          }
        }

        @media (min-width: 1024px) {
          .image-container {
            width: 400px;
            height: 400px;
            padding: 2.5rem;
            margin-top: -8rem;
          }
        }

        .profile-photo-container {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
          border: 3px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .profile-photo-container:hover {
          transform: scale(1.02);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }

        .profile-photo-container:hover .profile-photo {
          transform: scale(1.05);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-color), var(--primary-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 700;
          color: white;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.25rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
          z-index: 3;
        }

        .element-1 {
          top: 10%;
          right: -5%;
        }

        .element-2 {
          bottom: 20%;
          left: -10%;
        }

        .element-3 {
          top: 50%;
          right: -8%;
        }

        .element-4 {
          bottom: 10%;
          right: 10%;
        }

        @media (max-width: 768px) {
          .floating-element {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }

          .element-1 {
            top: 8%;
            right: -2%;
          }

          .element-2 {
            bottom: 18%;
            left: -5%;
          }

          .element-3 {
            top: 48%;
            right: -3%;
          }

          .element-4 {
            bottom: 8%;
            right: 8%;
          }
        }

        @media (max-width: 480px) {
          .floating-element {
            padding: 0.5rem 0.8rem;
            font-size: 0.75rem;
          }

          .element-1 {
            top: 5%;
            right: 0%;
          }

          .element-2 {
            bottom: 15%;
            left: -2%;
          }

          .element-3 {
            top: 45%;
            right: 0%;
          }

          .element-4 {
            bottom: 5%;
            right: 5%;
          }
        }

        @media (max-width: 360px) {
          .floating-element {
            padding: 0.4rem 0.6rem;
            font-size: 0.7rem;
          }

          .element-1 {
            top: 3%;
            right: 2%;
          }

          .element-2 {
            bottom: 12%;
            left: 0%;
          }

          .element-3 {
            top: 42%;
            right: 2%;
          }

          .element-4 {
            bottom: 3%;
            right: 3%;
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: white;
          cursor: pointer;
          z-index: 2;
        }

        .scroll-arrow {
          font-size: 1.5rem;
        }

        .scroll-indicator span {
          font-size: 0.875rem;
          opacity: 0.8;
        }
      `})]})},M5=()=>{const{t:e}=Xe(),t=b.useRef(null),n=Tr(t,{once:!0,margin:"0px 0px -100px 0px"}),[r,i]=b.useState({projects:0,skills:0,experience:0,learning:0});b.useEffect(()=>{if(n){const a=setTimeout(()=>{i({projects:ee.projects.length,skills:Object.keys(ee.skills).length*5,experience:2,learning:100})},500);return()=>clearTimeout(a)}},[n]);const o=[{icon:u.jsx(na,{}),title:e("about.features.cleanCode"),description:e("about.features.cleanCodeDesc")},{icon:u.jsx(S5,{}),title:e("about.features.creativeDesign"),description:e("about.features.creativeDesignDesc")},{icon:u.jsx(j5,{}),title:e("about.features.performance"),description:e("about.features.performanceDesc")},{icon:u.jsx(Jh,{}),title:e("about.features.collaboration"),description:e("about.features.collaborationDesc")}];return u.jsxs("section",{id:"about",className:"section section-alt about-section",children:[u.jsx("div",{className:"container",children:u.jsxs(D.div,{ref:t,initial:{opacity:0,y:50},animate:n?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.8},className:"about-content",children:[u.jsxs("div",{className:"about-text",children:[u.jsxs(D.div,{initial:{opacity:0,scale:.8},animate:n?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{duration:.8,delay:.2},className:"about-image",children:[u.jsx("img",{src:"/logo.jpg",alt:"Shaksham Karki",className:"about-photo",onError:a=>{a.target.style.display="none",a.target.nextSibling.style.display="flex"}}),u.jsx("div",{className:"about-placeholder",style:{display:"none"},children:u.jsx("span",{children:"SK"})})]}),u.jsx(D.h2,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.2},className:"section-title about-title",children:e("about.title")}),u.jsx(D.p,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.4},className:"about-description",children:e("about.summary")}),u.jsx(D.p,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.6},className:"about-description",children:e("about.location")}),u.jsxs(D.div,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.8},className:"about-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsxs("div",{className:"stat-number",children:[r.projects,"+"]}),u.jsx("div",{className:"stat-label",children:e("about.stats.projects")})]}),u.jsxs("div",{className:"stat-item",children:[u.jsxs("div",{className:"stat-number",children:[r.skills,"+"]}),u.jsx("div",{className:"stat-label",children:e("about.stats.skills")})]}),u.jsxs("div",{className:"stat-item",children:[u.jsxs("div",{className:"stat-number",children:[r.experience,"+"]}),u.jsx("div",{className:"stat-label",children:e("about.stats.experience")})]}),u.jsxs("div",{className:"stat-item",children:[u.jsxs("div",{className:"stat-number",children:[r.learning,"%"]}),u.jsx("div",{className:"stat-label",children:e("about.stats.learning")})]})]})]}),u.jsx(D.div,{initial:{opacity:0,x:50},animate:n?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.8,delay:.4},className:"about-features",children:o.map((a,s)=>u.jsxs(D.div,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.6+s*.2},className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:a.icon}),u.jsx("h3",{className:"feature-title",children:a.title}),u.jsx("p",{className:"feature-description",children:a.description})]},a.title))})]})}),u.jsx("style",{children:`
        .about-section {
          background: var(--bg-secondary);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 480px) {
          .about-content {
            gap: 4rem;
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .about-content {
            padding: 0 2rem;
          }
        }

        @media (min-width: 1024px) {
          .about-content {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 6rem;
            align-items: flex-start;
            padding: 0;
          }
        }

        .about-text {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-text {
            text-align: left;
            align-items: flex-start;
          }
        }

        .about-image {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          order: -1;
        }

        @media (min-width: 1024px) {
          .about-image {
            justify-content: flex-start;
            order: 0;
            margin-bottom: 2.5rem;
          }
        }

        .about-photo {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--border-color);
          transition: transform 0.3s ease;
        }

        @media (min-width: 480px) {
          .about-photo {
            width: 200px;
            height: 200px;
          }
        }

        @media (min-width: 1024px) {
          .about-photo {
            width: 220px;
            height: 220px;
          }
        }

        .about-photo:hover {
          transform: scale(1.05);
        }

        .about-placeholder {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-color), var(--primary-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--border-color);
        }

        @media (min-width: 480px) {
          .about-placeholder {
            width: 200px;
            height: 200px;
            font-size: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .about-placeholder {
            width: 220px;
            height: 220px;
            font-size: 3.5rem;
          }
        }

        .about-title {
          margin-bottom: 2rem;
          text-align: center;
        }

        @media (min-width: 1024px) {
          .about-title {
            text-align: left;
            margin-bottom: 2.5rem;
          }
        }

        .about-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 100%;
        }

        @media (min-width: 1024px) {
          .about-description {
            max-width: 90%;
          }
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
          width: 100%;
        }

        @media (min-width: 640px) {
          .about-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .about-stats {
            max-width: 90%;
          }
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 768px) {
          .about-features {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .about-features {
            padding-top: 1rem;
          }
        }

        .feature-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 4rem;
          height: 4rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--accent-color);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          border-color: var(--accent-color);
          background: var(--bg-dark);
          color: var(--text-primary);
          transform: scale(1.05);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `})]})},z5=()=>{const{t:e}=Xe(),t=b.useRef(null),n=Tr(t,{once:!0,margin:"0px 0px -100px 0px"}),r=e("experience.data.mobileAppDeveloper");return u.jsxs("section",{id:"experience",className:"section experience-section",children:[u.jsx("div",{className:"experience-background",children:u.jsxs("div",{className:"experience-shapes",children:[u.jsx("div",{className:"shape shape-1"}),u.jsx("div",{className:"shape shape-2"}),u.jsx("div",{className:"shape shape-3"}),u.jsx("div",{className:"shape shape-4"}),u.jsx("div",{className:"shape shape-5"})]})}),u.jsxs("div",{className:"container",children:[u.jsxs(D.div,{initial:{opacity:0,y:50},animate:n?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.8},className:"section-header",children:[u.jsx("h2",{className:"section-title",children:e("experience.title")}),u.jsx("p",{className:"section-subtitle",children:e("experience.subtitle")})]}),u.jsx("div",{ref:t,className:"experience-timeline",children:u.jsx(D.div,{initial:{opacity:0,x:-50},animate:n?{opacity:1,x:0}:{opacity:0,x:-50},transition:{duration:.8,delay:.1},className:"timeline-item left",children:u.jsxs("div",{className:"timeline-content",children:[u.jsxs("div",{className:"timeline-header",children:[u.jsx("div",{className:"timeline-icon",children:u.jsx(g5,{})}),u.jsxs("div",{className:"timeline-meta",children:[u.jsx("h3",{className:"job-title",children:r.title}),u.jsxs("div",{className:"company-info",children:[u.jsx("span",{className:"company-name",children:r.company}),u.jsxs("div",{className:"job-details",children:[u.jsxs("span",{className:"job-period",children:[u.jsx(v5,{})," ",r.period]}),u.jsxs("span",{className:"job-location",children:[u.jsx(Oc,{})," ",r.location]})]})]})]})]}),u.jsx("p",{className:"job-description",children:r.description}),u.jsxs("div",{className:"job-achievements",children:[u.jsx("h4",{children:e("experience.achievements")}),u.jsx("ul",{children:r.achievements.map((i,o)=>u.jsx("li",{children:i},o))})]}),u.jsxs("div",{className:"job-technologies",children:[u.jsx("h4",{children:e("experience.technologies")}),u.jsx("div",{className:"tech-tags",children:r.technologies.map((i,o)=>u.jsx("span",{className:"tech-tag",children:i},o))})]})]})})})]}),u.jsx("style",{children:`
        .experience-section {
          background: linear-gradient(135deg, #000000 0%, #111111 25%, #1a1a1a 50%, #0a0a0a 75%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .experience-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .experience-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          top: 30%;
          right: 8%;
          animation-delay: 1s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 10%;
          animation-delay: 2s;
        }

        .shape-4 {
          width: 70px;
          height: 70px;
          top: 60%;
          right: 15%;
          animation-delay: 0.8s;
        }

        .shape-5 {
          width: 50px;
          height: 50px;
          bottom: 40%;
          right: 5%;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .experience-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-color);
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          .experience-timeline::before {
            left: 2rem;
          }
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 50%;
        }

        @media (max-width: 768px) {
          .timeline-item {
            width: 100%;
            padding-left: 4rem;
          }
        }

        .timeline-item.left {
          left: 0;
          padding-right: 2rem;
        }

        .timeline-item.right {
          left: 50%;
          padding-left: 2rem;
        }

        @media (max-width: 768px) {
          .timeline-item.left,
          .timeline-item.right {
            left: 0;
            padding-right: 0;
            padding-left: 4rem;
          }
        }

        .timeline-content {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-5px);
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 2rem;
          width: 0;
          height: 0;
          border: 15px solid transparent;
        }

        .timeline-item.left .timeline-content::before {
          right: -30px;
          border-left-color: white;
        }

        .timeline-item.right .timeline-content::before {
          left: -30px;
          border-right-color: white;
        }

        @media (max-width: 768px) {
          .timeline-content::before {
            left: -30px;
            right: auto;
            border-right-color: white;
            border-left-color: transparent;
          }
        }

        .timeline-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .timeline-icon {
          width: 3rem;
          height: 3rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.25rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-icon {
          border-color: var(--accent-color);
          background: var(--bg-dark);
          color: var(--text-primary);
          transform: scale(1.05);
        }

        .timeline-meta {
          flex: 1;
        }

        .job-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .company-name {
          font-size: 1.125rem;
          font-weight: 500;
          color: var(--primary-color);
        }

        .job-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-top: 0.5rem;
        }

        .job-period,
        .job-location {
          font-size: 0.875rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .job-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .job-achievements {
          margin-bottom: 1.5rem;
        }

        .job-achievements h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .job-achievements ul {
          list-style: none;
          padding: 0;
        }

        .job-achievements li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .job-achievements li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        .job-technologies h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-secondary);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          top: 2rem;
          width: 1rem;
          height: 1rem;
          background: var(--primary-color);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px var(--primary-color);
        }

        .timeline-item.left::after {
          right: -0.5rem;
        }

        .timeline-item.right::after {
          left: -0.5rem;
        }

        @media (max-width: 768px) {
          .timeline-item::after {
            left: 1.5rem;
            right: auto;
          }
        }
      `})]})};const D5=()=>{const{t:e}=Xe(),t=b.useRef(null),n=Tr(t,{once:!0,margin:"0px 0px -100px 0px"}),[r,i]=b.useState([]),[o,a]=b.useState(!1),[s,l]=b.useState({x:0,y:0});b.useState(!1),b.useState([]);const[c,f]=b.useState([]),[d,p]=b.useState({ballRadius:50,containerWidth:window.innerWidth,containerHeight:600,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight}),g=b.useRef(null);b.useRef(null),b.useRef(null);const[y,x]=b.useState(!1),[k,v]=b.useState(null),[m,h]=b.useState({x:0,y:0}),[w,S]=b.useState({}),[T,C]=b.useState(!1),[P,F]=b.useState(new Set),_=.5,ae=.4,xe=.7,we=.8,ve=.98,it=12,ce=.5,Ee=1,M=200,B=.25,U=40,O=.3,ne=.8,Mt=.2,Qe=.99,zt=.1;b.useEffect(()=>{const E=()=>{const A=window.innerWidth<768,X=window.innerWidth<1024;p({ballRadius:A?35:X?40:50,containerWidth:window.innerWidth,containerHeight:A?400:X?500:600,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight})};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const ze=b.useCallback(()=>Array.from({length:200},(A,X)=>({id:`star-${X}`,x:Math.random()*d.containerWidth,y:Math.random()*d.containerHeight,size:Math.random()*2+.5,opacity:Math.random()*.8+.2,speed:Math.random()*.5+.1,twinklePhase:Math.random()*Math.PI*2})),[d.containerWidth,d.containerHeight]),ot=[{title:e("skills.frontend"),icon:u.jsx(sf,{}),skills:ee.skills.frontend.map(E=>({...E,icon:E.name==="React"?u.jsx(sf,{}):E.name==="JavaScript"?u.jsx(af,{}):E.name==="HTML5"?u.jsx(c5,{}):E.name==="CSS3"?u.jsx(l5,{}):u.jsx(af,{})}))},{title:e("skills.backend"),icon:u.jsx(jl,{}),skills:ee.skills.backend.map(E=>({...E,icon:E.name==="Node.js"?u.jsx(u5,{}):E.name==="Python"?u.jsx(d5,{}):E.name==="MongoDB"?u.jsx(kl,{}):u.jsx(jl,{})}))},{title:e("skills.mobile"),icon:u.jsx(Sl,{}),skills:ee.skills.mobile.map(E=>({...E,icon:u.jsx(Sl,{})}))},{title:e("skills.tools"),icon:u.jsx(ms,{}),skills:ee.skills.tools.map(E=>({...E,icon:E.name==="GitHub"?u.jsx(ms,{}):E.name==="AWS"?u.jsx(s5,{}):E.name==="Firebase"?u.jsx(kl,{}):u.jsx(ms,{})}))}],Ii=b.useCallback(()=>{try{if(!ot||ot.length===0)return console.warn("No skill categories available"),[];const E=ot.flatMap(V=>!V||!V.skills?[]:V.skills.map(z=>({...z,category:V})));if(E.length===0)return console.warn("No skills available"),[];const A=[],X=d.ballRadius*2+60,K=150;E.forEach(V=>{if(!V||!V.name)return;let z=0,N=!1,R,G;for(;!N&&z<K;){R=Math.random()*(d.containerWidth-d.ballRadius*2)+d.ballRadius,G=Math.random()*(d.containerHeight-d.ballRadius*2)+d.ballRadius,N=!0;for(const W of A){const Q=R-W.x,q=G-W.y;if(Math.sqrt(Q*Q+q*q)<X){N=!1;break}}z++}N||(R=Math.random()*(d.containerWidth-d.ballRadius*2)+d.ballRadius,G=Math.random()*(d.containerHeight-d.ballRadius*2)+d.ballRadius),A.push({id:V.name,x:R,y:G,vx:(Math.random()-.5)*4,vy:(Math.random()-.5)*4,skill:V,radius:d.ballRadius,isDragging:!1})});const I={};return A.forEach(V=>{V&&V.id&&(I[V.id]={x:V.x,y:V.y})}),S(I),A}catch(E){return console.error("Error initializing balls:",E),[]}},[ot,d]);b.useEffect(()=>{if(!o||c.length===0)return;const A=setInterval(()=>{f(X=>X.map(K=>{let I=K.x+K.speed;K.y,I>d.containerWidth&&(I=0);const V=Date.now()/1e3,z=K.opacity*(.3+.7*Math.sin(V*3+K.twinklePhase));return{...K,x:I,opacity:z}}))},50);return()=>clearInterval(A)},[o,c.length,d]),b.useEffect(()=>{if(!o||r.length===0)return;let E;const A=()=>{try{i(X=>{if(!X||X.length===0)return X;const K=[...X].map(I=>{if(I.isDragging)return I;let{x:V,y:z,vx:N,vy:R}=I;const G=w[I.id];if(G){const Q=G.x-V,q=G.y-z,Z=Math.sqrt(Q*Q+q*q);if(Z>0){const re=_*(1+Z*.01)/(Z*.003+1);if(N+=Q/Z*re,R+=q/Z*re,Z>100){const Dt=B*(Z-100)/100;N+=Q/Z*Dt,R+=q/Z*Dt}}}if(V>=0&&V<=d.viewportWidth&&z>=0&&z<=d.containerHeight){F(q=>{const Z=new Set(q);return Z.delete(I.id),Z});const Q=z-I.radius;if(Q>U){const q=ae*(1-Q/d.containerHeight);R-=q}if(z>d.containerHeight/2){const q=ae*.5;R-=q}}else{R+=Mt,N*=Qe,R*=Qe;const Q=d.viewportWidth/2,q=d.containerHeight/2,Z=(Q-V)*zt,re=(q-z)*zt;N+=Z,R+=re,F(Dt=>new Set(Dt).add(I.id))}for(let Q of X)if(Q.id!==I.id&&!Q.isDragging){const q=I.x-Q.x,Z=I.y-Q.y,re=Math.sqrt(q*q+Z*Z);if(re<M&&re>0){const Dt=re/M,Nr=Ee*Math.pow(1-Dt,5);if(N+=q/re*Nr,R+=Z/re*Nr,re<M*.6){const He=Ee*3;N+=q/re*He,R+=Z/re*He}if(re<(I.radius+Q.radius)*1.5){const He=Ee*5;N+=q/re*He,R+=Z/re*He}if(re<(I.radius+Q.radius)*1.1){const He=Ee*8;N+=q/re*He,R+=Z/re*He}const Fi=(Q.vx-I.vx)*ne*.2,_i=(Q.vy-I.vy)*ne*.2;N+=Fi,R+=_i;const Yt=1;N+=q/re*Yt,R+=Z/re*Yt}}N*=ve,R*=ve;const W=Math.sqrt(N*N+R*R);return W>it&&(N=N/W*it,R=R/W*it),V+=N,z+=R,V<I.radius?(V=I.radius,N=Math.abs(N)*we,N+=ce):V>d.viewportWidth-I.radius&&(V=d.viewportWidth-I.radius,N=-Math.abs(N)*we,N-=ce),z<I.radius?(z=I.radius,R=Math.abs(R)*we):z>d.containerHeight-I.radius&&(z=d.containerHeight-I.radius,R=-Math.abs(R)*we),{...I,x:V,y:z,vx:N,vy:R}});for(let I=0;I<K.length;I++)for(let V=I+1;V<K.length;V++){const z=K[I],N=K[V];if(z.isDragging||N.isDragging)continue;const R=N.x-z.x,G=N.y-z.y,W=Math.sqrt(R*R+G*G),Q=z.radius+N.radius+80;if(W<Q&&W>0){const q=Q-W,Z=Math.min(q*2,60),re=R/W*Z,Dt=G/W*Z;z.x-=re,z.y-=Dt,N.x+=re,N.y+=Dt;const Nr=3,Fi=R/W*Nr,_i=G/W*Nr;if(z.vx-=Fi,z.vy-=_i,N.vx+=Fi,N.vy+=_i,W<(z.radius+N.radius)*1.2){const Mr=R/W*80,zr=G/W*80;z.x-=Mr,z.y-=zr,N.x+=Mr,N.y+=zr;const Lt=5;z.vx-=R/W*Lt,z.vy-=G/W*Lt,N.vx+=R/W*Lt,N.vy+=G/W*Lt}if(W<(z.radius+N.radius)*1.05){const Mr=R/W*120,zr=G/W*120;z.x-=Mr,z.y-=zr,N.x+=Mr,N.y+=zr;const Lt=8;z.vx-=R/W*Lt,z.vy-=G/W*Lt,N.vx+=R/W*Lt,N.vy+=G/W*Lt}const Yt=R/W,He=G/W,e0=N.vx-z.vx,t0=N.vy-z.vy,Gc=e0*Yt+t0*He;if(Gc<0)continue;const Bi=Gc*2;z.vx+=Bi*Yt,z.vy+=Bi*He,N.vx-=Bi*Yt,N.vy-=Bi*He;const Oi=1.5;z.vx+=Yt*Oi,z.vy+=He*Oi,N.vx-=Yt*Oi,N.vy-=He*Oi}}return K})}catch(X){console.error("Animation error:",X)}E=requestAnimationFrame(A)};return E=requestAnimationFrame(A),()=>{E&&cancelAnimationFrame(E)}},[o,r.length,d,w]),b.useEffect(()=>{n&&!o&&(a(!0),i(Ii()),f(ze()))},[n,o,Ii,ze]),b.useEffect(()=>(y&&(document.addEventListener("mousemove",kt),document.addEventListener("mouseup",Ta),document.addEventListener("touchmove",Hc),document.addEventListener("touchend",Uc),document.addEventListener("click",bt,!0),document.addEventListener("mousedown",bt,!0),document.addEventListener("touchstart",bt,!0)),()=>{document.removeEventListener("mousemove",kt),document.removeEventListener("mouseup",Ta),document.removeEventListener("touchmove",Hc),document.removeEventListener("touchend",Uc),document.removeEventListener("click",bt,!0),document.removeEventListener("mousedown",bt,!0),document.removeEventListener("touchstart",bt,!0)}),[y,k,m,d]);const bt=E=>{if(y&&k){const A=E.target;if(A.tagName==="BUTTON"||A.tagName==="A"||A.tagName==="INPUT"||A.tagName==="SELECT"||A.tagName==="TEXTAREA"||A.closest("button")||A.closest("a")||A.closest('[role="button"]')||A.closest("[onclick]"))return E.preventDefault(),E.stopPropagation(),E.stopImmediatePropagation(),!1}},$n=(E,A)=>{try{E.preventDefault();const X=E.clientX,K=E.clientY;if(!r.find(z=>z.id===A)){console.warn("Ball not found:",A);return}const V=E.target.closest(".planet-skill");if(V){const z=V.getBoundingClientRect(),N=z.left+z.width/2,R=z.top+z.height/2;i(G=>G.map(W=>W.id===A?{...W,isDragging:!0}:W)),v(A),h({x:X-N,y:K-R}),x(!0)}}catch(X){console.error("Error in handleMouseDown:",X)}},kt=E=>{try{if(y&&k){const A=E.clientX,X=E.clientY;l({x:A,y:X}),i(K=>K.map(I=>{if(I.id===k){let V=A-m.x,z=X-m.y;const N=V-I.x,R=z-I.y,G=N*O,W=R*O,Q=w[I.id];if(Q&&z>Q.y&&V>=0&&V<=d.viewportWidth&&z>=0&&z<=d.containerHeight){const q=z-Q.y,Z=Math.min(xe,q*.01);z=Q.y+q*(1-Z),C(!0)}else C(!1);return{...I,x:V,y:z,vx:G,vy:W}}return I}))}}catch(A){console.error("Error in handleGlobalMouseMove:",A)}},Ta=E=>{try{if(y&&k){const A=w[k];A&&i(X=>X.map(K=>{if(K.id===k){const I=A.x-K.x,V=A.y-K.y,z=Math.sqrt(I*I+V*V),N=Math.min(.3,z*.001);let R=I*N,G=V*N;return K.y>A.y?G-=ae*.5:G-=ae*.2,z>200&&(R=Math.max(.15,Math.abs(R))*Math.sign(R),G=Math.max(.15,Math.abs(G))*Math.sign(G)),{...K,isDragging:!1,vx:R,vy:G}}return K}))}x(!1),v(null)}catch(A){console.error("Error in handleGlobalMouseUp:",A),x(!1),v(null)}},Zh=(E,A)=>{try{if(E.preventDefault(),E.touches.length>0){const X=E.touches[0],K=X.clientX,I=X.clientY;if(!r.find(N=>N.id===A)){console.warn("Ball not found for touch:",A);return}const z=E.target.closest(".planet-skill");if(z){const N=z.getBoundingClientRect(),R=N.left+N.width/2,G=N.top+N.height/2;i(W=>W.map(Q=>Q.id===A?{...Q,isDragging:!0}:Q)),v(A),h({x:K-R,y:I-G}),x(!0)}}}catch(X){console.error("Error in handleTouchStart:",X)}},Hc=E=>{try{if(E.touches.length>0){const A=E.touches[0],X=A.clientX,K=A.clientY;l({x:X,y:K}),y&&k&&i(I=>I.map(V=>{if(V.id===k){let z=X-m.x,N=K-m.y;const R=z-V.x,G=N-V.y,W=R*O,Q=G*O,q=w[V.id];if(q&&N>q.y&&z>=0&&z<=d.viewportWidth&&N>=0&&N<=d.containerHeight){const Z=N-q.y,re=Math.min(xe,Z*.01);N=q.y+Z*(1-re),C(!0)}else C(!1);return{...V,x:z,y:N,vx:W,vy:Q}}return V}))}}catch(A){console.error("Error in handleTouchMove:",A)}},Uc=E=>{try{if(y&&k){const A=w[k];A&&i(X=>X.map(K=>{if(K.id===k){const I=A.x-K.x,V=A.y-K.y,z=Math.sqrt(I*I+V*V),N=Math.min(.3,z*.001);let R=I*N,G=V*N;return K.y>A.y?G-=ae*.5:G-=ae*.2,z>200&&(R=Math.max(.15,Math.abs(R))*Math.sign(R),G=Math.max(.15,Math.abs(G))*Math.sign(G)),{...K,isDragging:!1,vx:R,vy:G}}return K}))}x(!1),v(null)}catch(A){console.error("Error in handleTouchEnd:",A),x(!1),v(null)}};return u.jsx("section",{id:"skills",className:"skills-section",ref:t,children:u.jsxs("div",{className:"container",children:[u.jsxs(D.div,{className:"section-header",initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.6},children:[u.jsx("h2",{className:"section-title",children:e("skills.title")}),u.jsx("p",{className:"section-subtitle",children:e("skills.subtitle")})]}),u.jsxs(D.div,{ref:g,className:"professional-skills-container",initial:{opacity:0,scale:.95},animate:n?{opacity:1,scale:1}:{opacity:0,scale:.95},transition:{duration:.6,delay:.2},style:{height:d.containerHeight+"px"},children:[c.map(E=>u.jsx("div",{className:"space-star",style:{position:"absolute",left:E.x+"px",top:E.y+"px",width:E.size+"px",height:E.size+"px",opacity:E.opacity}},E.id)),r&&r.length>0&&r.map(E=>!E||!E.id||!E.skill?(console.warn("Invalid ball data:",E),null):u.jsx(D.div,{className:`planet-skill ${E.isDragging?"dragging":""} ${E.isDragging&&T?"downward":""} ${P.has(E.id)?"freefall":""}`,style:{position:E.isDragging?"fixed":"absolute",left:E.x-E.radius+"px",top:E.y-E.radius+"px",width:E.radius*2+"px",height:E.radius*2+"px",cursor:E.isDragging?"grabbing":"grab",zIndex:E.isDragging?999999:99999},onMouseDown:A=>$n(A,E.id),onTouchStart:A=>Zh(A,E.id),whileHover:{scale:E.isDragging?1:1.1},whileTap:{scale:.95},children:u.jsxs("div",{className:"planet-content",children:[u.jsx("div",{className:"planet-icon",children:E.skill.icon}),u.jsx("span",{className:"planet-name",children:E.skill.name})]})},E.id)),u.jsx("div",{className:"gravity-center",style:{position:"absolute",left:d.containerWidth/2-20+"px",top:d.containerHeight/2-20+"px",width:"40px",height:"40px"}})]})]})})},L5=()=>{const{t:e}=Xe(),t=b.useRef(null),n=Tr(t,{once:!0,margin:"0px 0px -100px 0px"}),r=[e("education.data.universityWestGeorgia"),e("education.data.universityNorthGeorgia"),e("education.data.highSchool")],i=[e("education.leadershipData.grspScholar"),e("education.leadershipData.rotaractMember"),e("education.leadershipData.leoMember")];return u.jsxs("section",{id:"education",className:"section education-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs(D.div,{ref:t,initial:{opacity:0,y:50},animate:n?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.2},className:"section-header",children:[u.jsx("h2",{className:"section-title",children:e("education.title")}),u.jsx("p",{className:"section-subtitle",children:e("education.subtitle")})]}),u.jsxs("div",{className:"education-grid",children:[u.jsxs(D.div,{initial:{opacity:0,x:-50},animate:n?{opacity:1,x:0}:{opacity:0,x:-50},transition:{duration:.2,delay:.05},className:"education-column",children:[u.jsxs("div",{className:"education-header",children:[u.jsx(Qh,{className:"section-icon"}),u.jsx("h3",{children:e("education.academic")})]}),u.jsx("div",{className:"education-timeline",children:r.map((o,a)=>u.jsx(D.div,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.2,delay:.1+a*.02},className:"education-item",children:u.jsxs("div",{className:"education-content",children:[u.jsx("h4",{children:o.degree}),u.jsx("h5",{children:o.institution}),u.jsx("p",{className:"education-location",children:o.location}),u.jsx("p",{className:"education-period",children:o.period}),u.jsx("p",{className:"education-description",children:o.description})]})},a))})]}),u.jsxs(D.div,{initial:{opacity:0,x:50},animate:n?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.2,delay:.1},className:"education-column",children:[u.jsxs("div",{className:"education-header",children:[u.jsx(Jh,{className:"section-icon"}),u.jsx("h3",{children:e("education.leadership")})]}),u.jsx("div",{className:"leadership-timeline",children:i.map((o,a)=>u.jsx(D.div,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.2,delay:.1+a*.02},className:"leadership-item",children:u.jsxs("div",{className:"leadership-content",children:[u.jsx("h4",{children:o.title}),u.jsx("h5",{children:o.organization}),u.jsx("p",{className:"leadership-period",children:o.period}),u.jsx("p",{className:"leadership-description",children:o.description})]})},a))})]})]}),u.jsxs(D.div,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.2,delay:.1},className:"languages-section",children:[u.jsxs("div",{className:"languages-header",children:[u.jsx(Xh,{className:"section-icon"}),u.jsx("h3",{children:e("education.languages")})]}),u.jsx("div",{className:"languages-grid",children:ee.languages.map((o,a)=>u.jsxs(D.div,{initial:{opacity:0,scale:.8},animate:n?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{duration:.2,delay:.1+a*.02},className:"language-item",children:[u.jsx("h4",{children:o.name}),u.jsx("p",{children:o.level})]},a))})]})]}),u.jsx("style",{children:`
        .education-section {
          padding: 5rem 0;
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin: 0 auto;
        }

        .section-icon {
          font-size: 2rem;
          color: var(--accent-color);
          margin-right: 1rem;
        }

        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .education-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .education-column {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
        }

        .education-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--accent-color);
        }

        .education-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .education-timeline {
          position: relative;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent-color);
        }

        .education-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 3rem;
        }

        .education-item::before {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--accent-color);
          border-radius: 50%;
          border: 3px solid var(--bg-secondary);
        }

        .education-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .education-content h5 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }

        .education-location,
        .education-period {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .education-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .leadership-timeline {
          position: relative;
        }

        .leadership-timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent-color);
        }

        .leadership-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 3rem;
        }

        .leadership-item::before {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--accent-color);
          border-radius: 50%;
          border: 3px solid var(--bg-secondary);
        }

        .leadership-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .leadership-content h5 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }

        .leadership-period {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .leadership-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .languages-section {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
        }

        .languages-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--accent-color);
        }

        .languages-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .language-item {
          background: var(--bg-primary);
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .language-item:hover {
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        .language-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .language-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `})]})},A5=()=>{Xe();const e=b.useRef(null),t=Tr(e,{once:!0,margin:"0px 0px -100px 0px"}),n=ee.certifications||[],r=i=>{switch(i){case"programming":return u.jsx(na,{});case"cloud":return u.jsx(w5,{});case"database":return u.jsx(kl,{});case"academic":return u.jsx(Qh,{});default:return u.jsx(lf,{})}};return u.jsxs("section",{id:"certifications",className:"section section-alt certifications-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs(D.div,{initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.8},className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"Certifications & Achievements"}),u.jsx("p",{className:"section-subtitle",children:"Professional certifications and notable achievements"})]}),u.jsx("div",{ref:e,className:"certifications-grid",children:n.map((i,o)=>u.jsxs(D.div,{initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.8,delay:o*.1},className:"certification-card",children:[u.jsx("div",{className:"cert-icon",children:r(i.type)}),u.jsxs("div",{className:"cert-content",children:[u.jsx("h3",{className:"cert-title",children:i.title}),u.jsx("p",{className:"cert-issuer",children:i.issuer}),u.jsx("p",{className:"cert-date",children:i.date}),i.description&&u.jsx("p",{className:"cert-description",children:i.description}),i.credentialId&&u.jsxs("p",{className:"cert-credential",children:[u.jsx("span",{className:"credential-label",children:"Credential ID:"})," ",i.credentialId]}),i.verificationUrl&&u.jsxs("a",{href:i.verificationUrl,target:"_blank",rel:"noopener noreferrer",className:"cert-verify",children:[u.jsx(m5,{}),"Verify Certificate"]})]})]},i.id))}),n.length===0&&u.jsxs(D.div,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{duration:.8,delay:.3},className:"no-certifications",children:[u.jsx(lf,{}),u.jsx("p",{children:"Certifications will be displayed here"}),u.jsx("small",{children:"Add certifications to profile data to see them here"})]})]}),u.jsx("style",{children:`
        .certifications-section {
          background: var(--bg-secondary);
          padding: 4rem 0;
        }

        .container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 0.5rem;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          text-align: center;
          background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .certifications-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .certifications-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .certification-card {
          background: linear-gradient(145deg, var(--bg-primary), var(--bg-dark));
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .certification-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--accent-color);
        }

        .cert-icon {
          font-size: 3rem;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--bg-secondary), var(--bg-dark));
          border-radius: 50%;
          border: 2px solid var(--accent-color);
        }

        .cert-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cert-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .cert-issuer {
          font-size: 1rem;
          color: var(--accent-color);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .cert-date {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .cert-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }

        .cert-credential {
          font-size: 0.8rem;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .credential-label {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .cert-verify {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--accent-color), var(--primary-dark));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .cert-verify:hover {
          background: linear-gradient(135deg, var(--primary-dark), var(--accent-color));
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .no-certifications {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .no-certifications svg {
          font-size: 4rem;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .no-certifications p {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .no-certifications small {
          font-size: 0.875rem;
          color: var(--text-light);
        }
      `})]})},R5=()=>{var l;const e=b.useRef(null),t=Tr(e,{once:!0,margin:"0px 0px -100px 0px"}),[n,r]=b.useState("all"),i=ee.projects,o=[{id:"all",name:"All Projects",icon:na,count:i.length},{id:"frontend",name:"Frontend",icon:k5,count:i.filter(c=>c.category==="frontend").length},{id:"backend",name:"Backend",icon:jl,count:i.filter(c=>c.category==="backend").length},{id:"fullstack",name:"Fullstack",icon:na,count:i.filter(c=>c.category==="fullstack").length},{id:"mobile",name:"Mobile",icon:Sl,count:i.filter(c=>c.category==="mobile").length}],a=n==="all"?i:i.filter(c=>c.category===n),s=i.filter(c=>c.featured);return u.jsxs("section",{id:"projects",className:"section projects-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs(D.div,{initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.2},className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"Featured Projects"}),u.jsx("p",{className:"section-subtitle",children:"A showcase of my recent work and side projects"})]}),u.jsxs("div",{ref:e,className:"projects-layout",children:[u.jsx(D.div,{initial:{opacity:0,x:-50},animate:t?{opacity:1,x:0}:{opacity:0,x:-50},transition:{duration:.2,delay:.05},className:"projects-sidebar",children:u.jsxs("div",{className:"filter-section",children:[u.jsx("h3",{className:"filter-title",children:"Filter by Category"}),u.jsx("div",{className:"filter-buttons",children:o.map(c=>{const f=c.icon;return u.jsxs(D.button,{onClick:()=>{console.log("Filter button clicked:",c.id),r(c.id)},className:`filter-button ${n===c.id?"active":""}`,whileHover:{scale:1.02},whileTap:{scale:.98},children:[u.jsx(f,{className:"filter-icon"}),u.jsx("span",{className:"filter-text",children:c.name}),u.jsx("span",{className:"filter-count",children:c.count})]},c.id)})})]})}),u.jsxs(D.div,{initial:{opacity:0,x:50},animate:t?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.2,delay:.1},className:"projects-content",children:[n==="all"&&u.jsxs("div",{className:"featured-section",children:[u.jsx("h3",{className:"content-section-title",children:"Featured Projects"}),u.jsx("div",{className:"featured-projects",children:s.map((c,f)=>u.jsxs(D.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.2,delay:f*.02},className:"featured-project",children:[u.jsxs("div",{className:"project-image",children:[u.jsx("div",{className:"image-placeholder",children:u.jsx("span",{children:c.title.charAt(0)})}),u.jsx("div",{className:"project-overlay",children:u.jsxs("div",{className:"project-links",children:[u.jsx(D.a,{href:c.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:"project-link",children:u.jsx(Ci,{})}),u.jsx(D.a,{href:c.live,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:"project-link",children:u.jsx(cf,{})})]})})]}),u.jsxs("div",{className:"project-content",children:[u.jsx("div",{className:"project-category",children:u.jsx("span",{className:"category-badge",children:c.category})}),u.jsx("h3",{className:"project-title",children:c.title}),u.jsx("p",{className:"project-description",children:c.description}),u.jsx("div",{className:"project-technologies",children:c.technologies.map((d,p)=>u.jsx("span",{className:"tech-tag",children:d},p))})]})]},c.id))})]}),u.jsxs("div",{className:"all-projects-section",children:[u.jsxs("h3",{className:"content-section-title",children:[n==="all"?"All Projects":`${(l=o.find(c=>c.id===n))==null?void 0:l.name} Projects`,u.jsxs("span",{className:"project-count",children:["(",a.length,")"]})]}),u.jsx("div",{className:"projects-grid",children:a.map((c,f)=>u.jsxs(D.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2,delay:f*.02},className:"project-card",children:[u.jsxs("div",{className:"card-image",children:[u.jsx("div",{className:"image-placeholder",children:u.jsx("span",{children:c.title.charAt(0)})}),u.jsx("div",{className:"card-overlay",children:u.jsxs("div",{className:"card-links",children:[u.jsx(D.a,{href:c.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:"card-link",children:u.jsx(Ci,{})}),u.jsx(D.a,{href:c.live,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},className:"card-link",children:u.jsx(cf,{})})]})})]}),u.jsxs("div",{className:"card-content",children:[u.jsx("div",{className:"card-category",children:u.jsx("span",{className:"category-badge",children:c.category})}),u.jsx("h4",{className:"card-title",children:c.title}),u.jsx("p",{className:"card-description",children:c.description}),u.jsxs("div",{className:"card-technologies",children:[c.technologies.slice(0,3).map((d,p)=>u.jsx("span",{className:"tech-tag",children:d},p)),c.technologies.length>3&&u.jsxs("span",{className:"tech-tag",children:["+",c.technologies.length-3]})]})]})]},c.id))})]})]})]})]}),u.jsx("style",{children:`
        .projects-section {
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .projects-layout {
            grid-template-columns: 300px 1fr;
            gap: 4rem;
          }
        }

        .projects-sidebar {
          order: 2;
        }

        @media (min-width: 1024px) {
          .projects-sidebar {
            order: 1;
          }
        }

        .filter-section {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
          position: sticky;
          top: 2rem;
        }

        .filter-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .filter-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 1024px) {
          .filter-buttons {
            gap: 0.5rem;
          }
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .filter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .filter-button:hover::before {
          left: 100%;
        }

        .filter-button:hover {
          background: var(--bg-dark);
          border-color: var(--accent-color);
          color: var(--text-primary);
          transform: translateX(6px) scale(1.02);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        .filter-button.active {
          background: var(--accent-color);
          border-color: var(--accent-color);
          color: white;
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
          transform: translateX(2px);
        }

        .filter-button.active:hover {
          transform: translateX(6px) scale(1.02);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
        }

        .filter-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-button:hover .filter-icon {
          transform: scale(1.1) rotate(5deg);
          color: var(--accent-color);
        }

        .filter-text {
          flex: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-button:hover .filter-text {
          transform: translateX(2px);
        }

        .filter-count {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-button:hover .filter-count {
          background: rgba(59, 130, 246, 0.2);
          transform: scale(1.05);
        }

        .filter-button.active .filter-count {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .projects-content {
          order: 1;
        }

        @media (min-width: 1024px) {
          .projects-content {
            order: 2;
          }
        }

        .content-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-count {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .featured-section {
          margin-bottom: 3rem;
        }

        .featured-projects {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .featured-projects {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .featured-project {
          background: 
            linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%),
            linear-gradient(135deg, rgba(64, 64, 64, 0.3) 0%, rgba(32, 32, 32, 0.2) 100%);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 32px rgba(128, 128, 128, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(128, 128, 128, 0.2);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .featured-project::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(128, 128, 128, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(96, 96, 96, 0.03) 0%, transparent 50%);
          pointer-events: none;
          animation: projectGlow 8s ease-in-out infinite;
        }

        @keyframes projectGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .featured-project:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 25px 70px rgba(0, 0, 0, 0.5),
            0 12px 40px rgba(128, 128, 128, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .project-image {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .project-image {
            height: 150px;
          }
        }

        .image-placeholder {
          width: 120px;
          height: 120px;
          background: 
            radial-gradient(circle at 30% 30%, rgba(128, 128, 128, 0.3), rgba(64, 64, 64, 0.8)),
            radial-gradient(circle at 70% 70%, rgba(96, 96, 96, 0.2), rgba(32, 32, 32, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
          cursor: grab;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(128, 128, 128, 0.2),
            inset 0 2px 8px rgba(255, 255, 255, 0.1);
          animation: placeholderFloat 6s ease-in-out infinite;
        }

        .image-placeholder:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.7),
            0 0 50px rgba(128, 128, 128, 0.3),
            inset 0 2px 12px rgba(255, 255, 255, 0.2);
        }

        .image-placeholder:active {
          cursor: grabbing;
          transform: scale(0.95);
        }

        @keyframes placeholderFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(2deg);
          }
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .featured-project:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 3rem;
          height: 3rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .project-link:nth-child(1):hover {
          background: var(--bg-dark);
          border-color: #333;
          box-shadow: 0 4px 12px rgba(51, 51, 51, 0.3);
        }

        .project-link:nth-child(2):hover {
          background: var(--accent-color);
          border-color: #0077b5;
          box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-category {
          margin-bottom: 0.75rem;
        }

        .category-badge {
          background: var(--bg-secondary);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-secondary);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }

        .all-projects-section {
          margin-top: 2rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1023px) {
          .projects-layout {
            gap: 1.5rem;
          }

          .filter-section {
            padding: 1.25rem;
            position: static;
            margin-bottom: 1rem;
            overflow: visible;
          }

          .filter-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .filter-buttons {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 0.5rem;
          }

          .filter-button {
            padding: 0.6rem 0.8rem;
            font-size: 0.8rem;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            gap: 0.3rem;
            min-height: 60px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.2);
          }

          .filter-button.active {
            transform: translateY(-1px);
          }

          .filter-button.active:hover {
            transform: translateY(-3px) scale(1.02);
          }

          .filter-icon {
            font-size: 1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-icon {
            transform: scale(1.15) rotate(8deg);
          }

          .filter-text {
            font-size: 0.75rem;
            line-height: 1.2;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-text {
            transform: translateY(-1px);
          }

          .filter-count {
            font-size: 0.7rem;
            padding: 0.2rem 0.4rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-count {
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .projects-layout {
            gap: 1rem;
          }

          .filter-section {
            padding: 1rem;
            border-radius: 0.75rem;
            overflow: visible;
          }

          .filter-title {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          .filter-buttons {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.4rem;
          }

          .filter-button {
            padding: 0.5rem 0.6rem;
            font-size: 0.75rem;
            min-height: 50px;
            border-radius: 0.5rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover {
            transform: translateY(-2px) scale(1.03);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
          }

          .filter-button.active {
            transform: translateY(-1px);
          }

          .filter-button.active:hover {
            transform: translateY(-2px) scale(1.03);
          }

          .filter-icon {
            font-size: 0.9rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-icon {
            transform: scale(1.2) rotate(10deg);
          }

          .filter-text {
            font-size: 0.7rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-text {
            transform: translateY(-1px);
          }

          .filter-count {
            font-size: 0.65rem;
            padding: 0.15rem 0.3rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-count {
            transform: scale(1.15);
          }

          .content-section-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .featured-projects {
            gap: 1rem;
          }

          .projects-grid {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .projects-layout {
            gap: 0.75rem;
          }

          .filter-section {
            padding: 0.75rem;
            margin-bottom: 0.75rem;
            overflow: visible;
          }

          .filter-title {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }

          .filter-buttons {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.3rem;
          }

          .filter-button {
            padding: 0.4rem 0.5rem;
            font-size: 0.7rem;
            min-height: 45px;
            gap: 0.2rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover {
            transform: translateY(-1px) scale(1.02);
            box-shadow: 0 3px 12px rgba(59, 130, 246, 0.3);
          }

          .filter-button.active {
            transform: translateY(-0.5px);
          }

          .filter-button.active:hover {
            transform: translateY(-1px) scale(1.02);
          }

          .filter-icon {
            font-size: 0.8rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-icon {
            transform: scale(1.25) rotate(12deg);
          }

          .filter-text {
            font-size: 0.65rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-text {
            transform: translateY(-0.5px);
          }

          .filter-count {
            font-size: 0.6rem;
            padding: 0.1rem 0.25rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-count {
            transform: scale(1.2);
          }

          .content-section-title {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          .project-count {
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
          }

          .featured-projects {
            gap: 0.75rem;
          }

          .projects-grid {
            gap: 0.75rem;
          }
        }

        .project-card {
          background: 
            linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%),
            linear-gradient(135deg, rgba(64, 64, 64, 0.3) 0%, rgba(32, 32, 32, 0.2) 100%);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 32px rgba(128, 128, 128, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(128, 128, 128, 0.2);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(128, 128, 128, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(96, 96, 96, 0.03) 0%, transparent 50%);
          pointer-events: none;
          animation: projectGlow 8s ease-in-out infinite;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 25px 70px rgba(0, 0, 0, 0.5),
            0 12px 40px rgba(128, 128, 128, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .card-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .card-image {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .card-image {
            height: 150px;
          }
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .card-links {
          display: flex;
          gap: 1rem;
        }

        .card-link {
          width: 3rem;
          height: 3rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .card-link:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .card-link:nth-child(1):hover {
          background: var(--bg-dark);
          border-color: #333;
          box-shadow: 0 4px 12px rgba(51, 51, 51, 0.3);
        }

        .card-link:nth-child(2):hover {
          background: var(--accent-color);
          border-color: #0077b5;
          box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-category {
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .card-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .card-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .card-content {
            padding: 1.25rem;
          }

          .card-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            line-height: 1.3;
          }

          .card-description {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }

          .card-technologies {
            gap: 0.3rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
          }

          .category-badge {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .card-content {
            padding: 1rem;
          }

          .card-title {
            font-size: 1rem;
            margin-bottom: 0.4rem;
            line-height: 1.2;
          }

          .card-description {
            font-size: 0.75rem;
            line-height: 1.3;
            margin-bottom: 0.6rem;
          }

          .card-technologies {
            gap: 0.25rem;
          }

          .tech-tag {
            font-size: 0.7rem;
            padding: 0.15rem 0.4rem;
          }

          .category-badge {
            font-size: 0.7rem;
            padding: 0.15rem 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .project-content {
            padding: 1.25rem;
          }

          .project-title {
            font-size: 1.3rem;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }

          .project-description {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }

          .project-technologies {
            gap: 0.4rem;
          }

          .project-technologies .tech-tag {
            font-size: 0.8rem;
            padding: 0.25rem 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            line-height: 1.2;
          }

          .project-description {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }

          .project-technologies {
            gap: 0.3rem;
          }

          .project-technologies .tech-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
          }
        }
      `})]})};const V5=()=>{const{t:e}=Xe(),t=[{icon:u.jsx(Ei,{}),title:e("contact.email"),value:ee.personal.email,link:`mailto:${ee.personal.email}`,ariaLabel:`Send email to ${ee.personal.email}`},{icon:u.jsx(Oc,{}),title:e("contact.location"),value:ee.personal.location,link:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ee.personal.location)}`,ariaLabel:`View location on Google Maps: ${ee.personal.location}`}],n=[{icon:u.jsx(Ci,{}),name:e("contact.social.github"),url:ee.social.github,color:"#333",ariaLabel:"Visit GitHub profile"},{icon:u.jsx(Bc,{}),name:e("contact.social.linkedin"),url:ee.social.linkedin,color:"#0077b5",ariaLabel:"Visit LinkedIn profile"},{icon:u.jsx(Ei,{}),name:e("contact.social.email"),url:`mailto:${ee.personal.email}`,color:"#ea4335",ariaLabel:`Send email to ${ee.personal.email}`}];return u.jsxs(D.div,{className:"contact-info",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[u.jsx("h3",{children:e("contact.getInTouch")}),u.jsx("p",{children:e("contact.description")}),u.jsx("div",{className:"contact-details",children:t.map((r,i)=>u.jsxs(D.div,{className:"contact-item",whileHover:{scale:1.05},transition:{duration:.2},children:[u.jsx("div",{className:"contact-icon","aria-hidden":"true",children:r.icon}),u.jsxs("div",{className:"contact-text",children:[u.jsx("h4",{children:r.title}),u.jsx("a",{href:r.link,target:"_blank",rel:"noopener noreferrer","aria-label":r.ariaLabel,children:r.value})]})]},i))}),u.jsx("div",{className:"social-links",children:u.jsx("div",{className:"social-icons",role:"list","aria-label":"Social media links",children:n.map((r,i)=>u.jsx(D.a,{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"social-link",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},"aria-label":r.ariaLabel,role:"listitem",children:r.icon},i))})})]})},I5={name:{required:!0,minLength:2,maxLength:50,pattern:/^[a-zA-Z\s]+$/,message:"Name must be 2-50 characters and contain only letters and spaces"},email:{required:!0,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Please enter a valid email address"},subject:{required:!0,minLength:5,maxLength:100,message:"Subject must be 5-100 characters"},message:{required:!0,minLength:10,maxLength:1e3,message:"Message must be 10-1000 characters"}},F5=()=>{const[e,t]=b.useState({name:"",email:"",subject:"",message:""}),[n,r]=b.useState({}),[i,o]=b.useState(!1),[a,s]=b.useState(null),l=b.useCallback((g,y)=>{const x=I5[g];return x?x.required&&(!y||y.trim()==="")?`${g.charAt(0).toUpperCase()+g.slice(1)} is required`:!y||y.trim()===""?null:x.minLength&&y.length<x.minLength?`${g.charAt(0).toUpperCase()+g.slice(1)} must be at least ${x.minLength} characters`:x.maxLength&&y.length>x.maxLength?`${g.charAt(0).toUpperCase()+g.slice(1)} must be no more than ${x.maxLength} characters`:x.pattern&&!x.pattern.test(y)?x.message:null:null},[]),c=b.useCallback(()=>{const g={};let y=!0;return Object.keys(e).forEach(x=>{const k=l(x,e[x]);k&&(g[x]=k,y=!1)}),r(g),y},[e,l]),f=b.useCallback(g=>{const{name:y,value:x}=g.target;t(k=>({...k,[y]:x})),n[y]&&r(k=>({...k,[y]:null})),a&&s(null)},[n,a]),d=b.useCallback(async g=>{if(g.preventDefault(),!!c()){o(!0),s(null);try{const x=await fetch("http://localhost:5001/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(x.ok)s("success"),t({name:"",email:"",subject:"",message:""}),r({});else{const k=await x.json();s("error"),console.error("Server error:",k.message)}}catch(y){console.error("Error sending message:",y),s("error")}finally{o(!1)}}},[e,c]),p=b.useCallback(()=>{t({name:"",email:"",subject:"",message:""}),r({}),s(null),o(!1)},[]);return{formData:e,errors:n,isSubmitting:i,submitStatus:a,handleInputChange:f,handleSubmit:d,resetForm:p,validateField:l}},_5=()=>{const{t:e}=Xe(),{formData:t,errors:n,isSubmitting:r,submitStatus:i,handleInputChange:o,handleSubmit:a}=F5(),s=[{name:"name",type:"text",label:e("contact.form.name"),placeholder:e("contact.form.namePlaceholder")},{name:"email",type:"email",label:e("contact.form.email"),placeholder:e("contact.form.emailPlaceholder")},{name:"subject",type:"text",label:e("contact.form.subject"),placeholder:e("contact.form.subjectPlaceholder")}];return u.jsx(D.div,{className:"contact-form-container",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.4},viewport:{once:!0},children:u.jsxs("form",{className:"contact-form",onSubmit:a,noValidate:!0,children:[s.map(l=>u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:l.name,children:l.label}),u.jsx("input",{type:l.type,id:l.name,name:l.name,value:t[l.name],onChange:o,placeholder:l.placeholder,className:n[l.name]?"error":"",disabled:r,"aria-describedby":n[l.name]?`${l.name}-error`:void 0,"aria-invalid":n[l.name]?"true":"false"}),n[l.name]&&u.jsxs("div",{id:`${l.name}-error`,className:"error-message",role:"alert","aria-live":"polite",children:[u.jsx(hs,{}),n[l.name]]})]},l.name)),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",children:e("contact.form.message")}),u.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:o,placeholder:e("contact.form.messagePlaceholder"),className:n.message?"error":"",disabled:r,"aria-describedby":n.message?"message-error":void 0,"aria-invalid":n.message?"true":"false"}),n.message&&u.jsxs("div",{id:"message-error",className:"error-message",role:"alert","aria-live":"polite",children:[u.jsx(hs,{}),n.message]})]}),u.jsx(D.button,{type:"submit",className:`btn btn-primary submit-btn ${r?"loading":""}`,disabled:r,whileHover:r?{}:{scale:1.02,y:-2},whileTap:r?{}:{scale:.98},"aria-describedby":"submit-status",children:r?u.jsxs(u.Fragment,{children:[u.jsx(P5,{className:"animate-spin"}),e("contact.form.sending")]}):u.jsxs(u.Fragment,{children:[e("contact.form.send"),u.jsx("span",{className:"btn-arrow",children:"→"})]})}),i==="success"&&u.jsxs(D.div,{id:"submit-status",className:"status-message success",initial:{opacity:0,y:10},animate:{opacity:1,y:0},role:"alert","aria-live":"polite",children:[u.jsx(y5,{}),e("contact.form.success")]}),i==="error"&&u.jsxs(D.div,{id:"submit-status",className:"status-message error",initial:{opacity:0,y:10},animate:{opacity:1,y:0},role:"alert","aria-live":"polite",children:[u.jsx(hs,{}),e("contact.form.error")]})]})})},B5=()=>{const{t:e}=Xe();return u.jsx("section",{id:"contact",className:"section contact-section",children:u.jsxs("div",{className:"container",children:[u.jsxs(D.div,{className:"section-header",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[u.jsx("h2",{className:"section-title",children:e("contact.title")}),u.jsx("p",{className:"section-subtitle",children:e("contact.subtitle")})]}),u.jsxs("div",{className:"contact-content",children:[u.jsx(V5,{}),u.jsx(_5,{})]})]})})},O5=()=>{const{t:e}=Xe(),t=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=new Date().getFullYear(),r=[{icon:u.jsx(Ci,{}),name:"GitHub",url:ee.social.github,ariaLabel:"Visit GitHub profile"},{icon:u.jsx(Bc,{}),name:"LinkedIn",url:ee.social.linkedin,ariaLabel:"Visit LinkedIn profile"},{icon:u.jsx(Ei,{}),name:"Email",url:`mailto:${ee.personal.email}`,ariaLabel:"Send an email"}],i=[{name:e("nav.about"),href:"#about"},{name:e("nav.experience"),href:"#experience"},{name:e("nav.skills"),href:"#skills"},{name:e("nav.projects"),href:"#projects"},{name:e("nav.contact"),href:"#contact"}];return u.jsxs("footer",{className:"footer",children:[u.jsx("div",{className:"container",children:u.jsxs("div",{className:"footer-content",children:[u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{className:"footer-section",children:[u.jsx("h3",{className:"footer-brand",children:ee.personal.name}),u.jsx("p",{className:"footer-tagline",children:e("footer.tagline")})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{className:"footer-heading",children:e("footer.quickLinks")}),u.jsx("ul",{className:"footer-links",children:i.map((o,a)=>u.jsx("li",{children:u.jsx("a",{href:o.href,children:o.name})},a))})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{className:"footer-heading",children:e("footer.connect")}),u.jsx("div",{className:"social-links",children:r.map((o,a)=>u.jsx(D.a,{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"social-link",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},"aria-label":o.ariaLabel,children:o.icon},a))}),u.jsxs("div",{className:"contact-info",children:[u.jsxs("p",{children:[u.jsx(Ei,{className:"icon"}),u.jsx("span",{children:ee.personal.email})]}),u.jsxs("p",{children:[u.jsx(Oc,{className:"icon"}),u.jsx("span",{children:ee.personal.location})]})]})]})]}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("div",{className:"copyright",children:[u.jsxs("p",{children:["© ",n," ",ee.personal.name,". ",e("footer.copyright")]}),u.jsxs("p",{className:"trademark",children:["™ ",e("footer.trademark")]})]}),u.jsx(D.button,{onClick:t,whileHover:{scale:1.1},whileTap:{scale:.9},className:"scroll-to-top","aria-label":"Scroll to top",children:u.jsx(p5,{})})]})]})}),u.jsx("style",{children:`
        .footer {
          background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
          color: #ffffff;
          padding: 4rem 0 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-brand {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #64b5f6, #2196f3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .footer-tagline {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin: 0;
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #64b5f6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: rgba(100, 181, 246, 0.1);
          border-color: #64b5f6;
          color: #64b5f6;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          font-size: 0.95rem;
        }

        .contact-info .icon {
          flex-shrink: 0;
          color: #64b5f6;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .copyright {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .copyright p {
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          font-size: 0.9rem;
        }

        .trademark {
          font-size: 0.75rem;
          opacity: 0.6;
        }

        .scroll-to-top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #64b5f6, #2196f3);
          border: none;
          color: #ffffff;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);
        }

        .scroll-to-top:hover {
          box-shadow: 0 6px 16px rgba(100, 181, 246, 0.3);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .social-links {
            justify-content: flex-start;
          }

          .scroll-to-top {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 2.5rem 0 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }

          .footer-brand {
            font-size: 1.3rem;
          }

          .footer-heading {
            font-size: 1rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }

          .scroll-to-top {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }
      `})]})};function H5(){return Xe(),u.jsxs("div",{className:"App",children:[u.jsx(E5,{}),u.jsxs("main",{children:[u.jsx(N5,{}),u.jsx(M5,{}),u.jsx(z5,{}),u.jsx(R5,{}),u.jsx(D5,{}),u.jsx(L5,{}),u.jsx(A5,{}),u.jsx(B5,{})]}),u.jsx(O5,{})]})}gs.createRoot(document.getElementById("root")).render(u.jsx(Ct.StrictMode,{children:u.jsx(Fg,{children:u.jsx(H5,{})})}));
