"use strict";(()=>{var e={};e.id=9492,e.ids=[9492],e.modules={10846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{e.exports=require("path")},62045:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>u.default,__next_app__:()=>s,pages:()=>i,routeModule:()=>c,tree:()=>d});var n=r(90735),o=r(91232),u=r(27575),l=r(40085),a={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>l[e]);r.d(t,a);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,68270,23)),"next/dist/client/components/not-found-error"]}]},{}]},{"global-error":[()=>Promise.resolve().then(r.bind(r,27575)),"/home/mohamed-samir/DevOps/Assignment/nodejs.org/apps/site/app/global-error.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,68270,23)),"next/dist/client/components/not-found-error"],layout:[()=>Promise.resolve().then(r.t.bind(r,34347,23)),"next/dist/client/components/default-layout"]}],i=[],s={require:r,loadChunk:()=>Promise.resolve()},c=new n.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},52092:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createProxy",{enumerable:!0,get:function(){return n}});let n=r(72771).createClientModuleProxy},34347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r(21931);let n=r(91069);function o(e){let{children:t}=e;return(0,n.jsx)("html",{children:(0,n.jsx)("body",{children:t})})}r(22728),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},89925:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},96934:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createDedupedByCallsiteServerErrorLoggerDev",{enumerable:!0,get:function(){return d}});let n=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(void 0);if(r&&r.has(e))return r.get(e);var n={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=u?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(n,l,a):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}(r(22728));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}let u={current:null},l="function"==typeof n.cache?n.cache:e=>e,a=console.warn;function d(e){return function(...t){a(e(...t))}}l(e=>{try{a(u.current)}finally{u.current=null}})},91069:(e,t,r)=>{e.exports=r(90735).vendored["react-rsc"].ReactJsxRuntime},72771:(e,t,r)=>{e.exports=r(90735).vendored["react-rsc"].ReactServerDOMWebpackServerEdge},52123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let n=Reflect.get(e,t,r);return"function"==typeof n?n.bind(e):n}static set(e,t,r,n){return Reflect.set(e,t,r,n)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},21931:(e,t,r)=>{function n(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:()=>n})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[8079,530,2760,2592,33],()=>r(62045));module.exports=n})();