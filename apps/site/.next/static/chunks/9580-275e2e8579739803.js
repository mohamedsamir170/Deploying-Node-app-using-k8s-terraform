"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9580],{77844:(e,t,n)=>{n.d(t,{default:()=>o.a});var r=n(31909),o=n.n(r)},31909:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});let r=n(36800),o=n(6452);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let a=n(97097)._(n(10141));function l(e,t){var n;let l={};"function"==typeof e&&(l.loader=e);let i=r._({},l,t);return(0,a.default)(o._(r._({},i),{modules:null==(n=i.loadableGenerated)?void 0:n.modules}))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67138:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(45838);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},10141:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});let r=n(36800),o=n(6452);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=n(54568),l=n(7620),i=n(67138),u=n(94479);function d(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(d(()=>null)),loading:null,ssr:!0},c=function(e){let t=r._({},s,e),n=(0,l.lazy)(()=>t.loader().then(d)),c=t.loading;function p(e){let d=c?(0,a.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,p=s?l.Suspense:l.Fragment,f=t.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(u.PreloadChunks,{moduleIds:t.modules}):null,(0,a.jsx)(n,r._({},e))]}):(0,a.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(n,r._({},e))});return(0,a.jsx)(p,o._(r._({},s?{fallback:d}:{}),{children:f}))}return p.displayName="LoadableComponent",p}},94479:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return i}});let r=n(54568),o=n(97509),a=n(28240),l=n(23117);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=a.workAsyncStorage.getStore();if(void 0===n)return null;let i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>{let t=n.assetPrefix+"/_next/"+(0,l.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,o.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},33979:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6921),o=n(7620);let a=o.forwardRef(function(e,t){var{title:n,titleId:a}=e,l=(0,r._)(e,["title","titleId"]);return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),n?o.createElement("title",{id:a},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"}))})},50104:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6921),o=n(7620);let a=o.forwardRef(function(e,t){var{title:n,titleId:a}=e,l=(0,r._)(e,["title","titleId"]);return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),n?o.createElement("title",{id:a},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))})},60599:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6921),o=n(7620);let a=o.forwardRef(function(e,t){var{title:n,titleId:a}=e,l=(0,r._)(e,["title","titleId"]);return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),n?o.createElement("title",{id:a},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))})},17275:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6921),o=n(7620);let a=o.forwardRef(function(e,t){var{title:n,titleId:a}=e,l=(0,r._)(e,["title","titleId"]);return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),n?o.createElement("title",{id:a},n):null,o.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))})},32213:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6921),o=n(7620);let a=o.forwardRef(function(e,t){var{title:n,titleId:a}=e,l=(0,r._)(e,["title","titleId"]);return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),n?o.createElement("title",{id:a},n):null,o.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))})},41904:(e,t,n)=>{n.d(t,{UC:()=>eq,q7:()=>ez,ZL:()=>eX,bL:()=>eH,l9:()=>eW});var r=n(36800),o=n(6452),a=n(6921),l=n(7620),i=n(16029),u=n(36329),d=n(27645),s=n(24537),c=n(67307),p=n(38935),f=n(52919),m=n(96167),_=n(39817),v=n(39123),h=n(77705),w=n(13024),g=n(34510),y=n(77429),b=n(82367),x=n(67680),M=n(62085),C=n(23416),j=n(88430),k=n(54568),D=["Enter"," "],R=["ArrowUp","PageDown","End"],E=["ArrowDown","PageUp","Home",...R],P={ltr:[...D,"ArrowRight"],rtl:[...D,"ArrowLeft"]},O={ltr:["ArrowLeft"],rtl:["ArrowRight"]},L="Menu",[S,T,I]=(0,p.N)(L),[A,N]=(0,d.A)(L,[I,w.Bk,b.RG]),F=(0,w.Bk)(),K=(0,b.RG)(),[G,B]=A(L),[V,U]=A(L),Z=e=>{let{__scopeMenu:t,open:n=!1,children:a,dir:i,onOpenChange:u,modal:d=!0}=e,s=F(t),[c,p]=l.useState(null),m=l.useRef(!1),_=(0,M.c)(u),v=(0,f.jH)(i);return l.useEffect(()=>{let e=()=>{m.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>m.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,k.jsx)(w.bL,(0,o._)((0,r._)({},s),{children:(0,k.jsx)(G,{scope:t,open:n,onOpenChange:_,content:c,onContentChange:p,children:(0,k.jsx)(V,{scope:t,onClose:l.useCallback(()=>_(!1),[_]),isUsingKeyboardRef:m,dir:v,modal:d,children:a})})}))};Z.displayName=L;var H=l.forwardRef((e,t)=>{let{__scopeMenu:n}=e,l=(0,a._)(e,["__scopeMenu"]),i=F(n);return(0,k.jsx)(w.Mz,(0,o._)((0,r._)({},i,l),{ref:t}))});H.displayName="MenuAnchor";var W="MenuPortal",[X,q]=A(W,{forceMount:void 0}),z=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:o}=e,a=B(W,t);return(0,k.jsx)(X,{scope:t,forceMount:n,children:(0,k.jsx)(y.C,{present:n||a.open,children:(0,k.jsx)(g.Z,{asChild:!0,container:o,children:r})})})};z.displayName=W;var Y="MenuContent",[J,Q]=A(Y),$=l.forwardRef((e,t)=>{let n=q(Y,e.__scopeMenu),{forceMount:l=n.forceMount}=e,i=(0,a._)(e,["forceMount"]),u=B(Y,e.__scopeMenu),d=U(Y,e.__scopeMenu);return(0,k.jsx)(S.Provider,{scope:e.__scopeMenu,children:(0,k.jsx)(y.C,{present:l||u.open,children:(0,k.jsx)(S.Slot,{scope:e.__scopeMenu,children:d.modal?(0,k.jsx)(ee,(0,o._)((0,r._)({},i),{ref:t})):(0,k.jsx)(et,(0,o._)((0,r._)({},i),{ref:t}))})})})}),ee=l.forwardRef((e,t)=>{let n=B(Y,e.__scopeMenu),a=l.useRef(null),d=(0,u.s)(t,a);return l.useEffect(()=>{let e=a.current;if(e)return(0,C.Eq)(e)},[]),(0,k.jsx)(en,(0,o._)((0,r._)({},e),{ref:d,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,i.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),et=l.forwardRef((e,t)=>{let n=B(Y,e.__scopeMenu);return(0,k.jsx)(en,(0,o._)((0,r._)({},e),{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),en=l.forwardRef((e,t)=>{let{__scopeMenu:n,loop:d=!1,trapFocus:s,onOpenAutoFocus:c,onCloseAutoFocus:p,disableOutsidePointerEvents:f,onEntryFocus:h,onEscapeKeyDown:g,onPointerDownOutside:y,onFocusOutside:M,onInteractOutside:C,onDismiss:D,disableOutsideScroll:P}=e,O=(0,a._)(e,["__scopeMenu","loop","trapFocus","onOpenAutoFocus","onCloseAutoFocus","disableOutsidePointerEvents","onEntryFocus","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","disableOutsideScroll"]),L=B(Y,n),S=U(Y,n),I=F(n),A=K(n),N=T(n),[G,V]=l.useState(null),Z=l.useRef(null),H=(0,u.s)(t,Z,L.onContentChange),W=l.useRef(0),X=l.useRef(""),q=l.useRef(0),z=l.useRef(null),Q=l.useRef("right"),$=l.useRef(0),ee=P?j.A:l.Fragment,et=P?{as:x.DX,allowPinchZoom:!0}:void 0,en=e=>{var t,n;let r=X.current+e,o=N().filter(e=>!e.disabled),a=document.activeElement,l=null===(t=o.find(e=>e.ref.current===a))||void 0===t?void 0:t.textValue,i=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}(o.map(e=>e.textValue),r,l),u=null===(n=o.find(e=>e.textValue===i))||void 0===n?void 0:n.ref.current;!function e(t){X.current=t,window.clearTimeout(W.current),""!==t&&(W.current=window.setTimeout(()=>e(""),1e3))}(r),u&&setTimeout(()=>u.focus())};l.useEffect(()=>()=>window.clearTimeout(W.current),[]),(0,_.Oh)();let er=l.useCallback(e=>{var t,n;return Q.current===(null===(t=z.current)||void 0===t?void 0:t.side)&&function(e,t){return!!t&&function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let l=t[e].x,i=t[e].y,u=t[a].x,d=t[a].y;i>r!=d>r&&n<(u-l)*(r-i)/(d-i)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},t)}(e,null===(n=z.current)||void 0===n?void 0:n.area)},[]);return(0,k.jsx)(J,{scope:n,searchRef:X,onItemEnter:l.useCallback(e=>{er(e)&&e.preventDefault()},[er]),onItemLeave:l.useCallback(e=>{var t;er(e)||(null===(t=Z.current)||void 0===t||t.focus(),V(null))},[er]),onTriggerLeave:l.useCallback(e=>{er(e)&&e.preventDefault()},[er]),pointerGraceTimerRef:q,onPointerGraceIntentChange:l.useCallback(e=>{z.current=e},[]),children:(0,k.jsx)(ee,(0,o._)((0,r._)({},et),{children:(0,k.jsx)(v.n,{asChild:!0,trapped:s,onMountAutoFocus:(0,i.m)(c,e=>{var t;e.preventDefault(),null===(t=Z.current)||void 0===t||t.focus({preventScroll:!0})}),onUnmountAutoFocus:p,children:(0,k.jsx)(m.qW,{asChild:!0,disableOutsidePointerEvents:f,onEscapeKeyDown:g,onPointerDownOutside:y,onFocusOutside:M,onInteractOutside:C,onDismiss:D,children:(0,k.jsx)(b.bL,(0,o._)((0,r._)({asChild:!0},A),{dir:S.dir,orientation:"vertical",loop:d,currentTabStopId:G,onCurrentTabStopIdChange:V,onEntryFocus:(0,i.m)(h,e=>{S.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,k.jsx)(w.UC,(0,o._)((0,r._)({role:"menu","aria-orientation":"vertical","data-state":eR(L.open),"data-radix-menu-content":"",dir:S.dir},I,O),{ref:H,style:(0,r._)({outline:"none"},O.style),onKeyDown:(0,i.m)(O.onKeyDown,e=>{let t=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!n&&r&&en(e.key));let o=Z.current;if(e.target!==o||!E.includes(e.key))return;e.preventDefault();let a=N().filter(e=>!e.disabled).map(e=>e.ref.current);R.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,i.m)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(W.current),X.current="")}),onPointerMove:(0,i.m)(e.onPointerMove,eO(e=>{let t=e.target,n=$.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>$.current?"right":"left";Q.current=t,$.current=e.clientX}}))}))}))})})}))})});$.displayName=Y;var er=l.forwardRef((e,t)=>{let{__scopeMenu:n}=e,l=(0,a._)(e,["__scopeMenu"]);return(0,k.jsx)(c.sG.div,(0,o._)((0,r._)({role:"group"},l),{ref:t}))});er.displayName="MenuGroup";var eo=l.forwardRef((e,t)=>{let{__scopeMenu:n}=e,l=(0,a._)(e,["__scopeMenu"]);return(0,k.jsx)(c.sG.div,(0,o._)((0,r._)({},l),{ref:t}))});eo.displayName="MenuLabel";var ea="MenuItem",el="menu.itemSelect",ei=l.forwardRef((e,t)=>{let{disabled:n=!1,onSelect:d}=e,s=(0,a._)(e,["disabled","onSelect"]),p=l.useRef(null),f=U(ea,e.__scopeMenu),m=Q(ea,e.__scopeMenu),_=(0,u.s)(t,p),v=l.useRef(!1);return(0,k.jsx)(eu,(0,o._)((0,r._)({},s),{ref:_,disabled:n,onClick:(0,i.m)(e.onClick,()=>{let e=p.current;if(!n&&e){let t=new CustomEvent(el,{bubbles:!0,cancelable:!0});e.addEventListener(el,e=>null==d?void 0:d(e),{once:!0}),(0,c.hO)(e,t),t.defaultPrevented?v.current=!1:f.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),v.current=!0},onPointerUp:(0,i.m)(e.onPointerUp,e=>{var t;v.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t=""!==m.searchRef.current;!n&&(!t||" "!==e.key)&&D.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))});ei.displayName=ea;var eu=l.forwardRef((e,t)=>{let{__scopeMenu:n,disabled:d=!1,textValue:s}=e,p=(0,a._)(e,["__scopeMenu","disabled","textValue"]),f=Q(ea,n),m=K(n),_=l.useRef(null),v=(0,u.s)(t,_),[h,w]=l.useState(!1),[g,y]=l.useState("");return l.useEffect(()=>{let e=_.current;if(e){var t;y((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[p.children]),(0,k.jsx)(S.ItemSlot,{scope:n,disabled:d,textValue:null!=s?s:g,children:(0,k.jsx)(b.q7,(0,o._)((0,r._)({asChild:!0},m),{focusable:!d,children:(0,k.jsx)(c.sG.div,(0,o._)((0,r._)({role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":d||void 0,"data-disabled":d?"":void 0},p),{ref:v,onPointerMove:(0,i.m)(e.onPointerMove,eO(e=>{d?f.onItemLeave(e):(f.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,i.m)(e.onPointerLeave,eO(e=>f.onItemLeave(e))),onFocus:(0,i.m)(e.onFocus,()=>w(!0)),onBlur:(0,i.m)(e.onBlur,()=>w(!1))}))}))})}),ed=l.forwardRef((e,t)=>{let{checked:n=!1,onCheckedChange:l}=e,u=(0,a._)(e,["checked","onCheckedChange"]);return(0,k.jsx)(eh,{scope:e.__scopeMenu,checked:n,children:(0,k.jsx)(ei,(0,o._)((0,r._)({role:"menuitemcheckbox","aria-checked":eE(n)?"mixed":n},u),{ref:t,"data-state":eP(n),onSelect:(0,i.m)(u.onSelect,()=>null==l?void 0:l(!!eE(n)||!n),{checkForDefaultPrevented:!1})}))})});ed.displayName="MenuCheckboxItem";var es="MenuRadioGroup",[ec,ep]=A(es,{value:void 0,onValueChange:()=>{}}),ef=l.forwardRef((e,t)=>{let{value:n,onValueChange:l}=e,i=(0,a._)(e,["value","onValueChange"]),u=(0,M.c)(l);return(0,k.jsx)(ec,{scope:e.__scopeMenu,value:n,onValueChange:u,children:(0,k.jsx)(er,(0,o._)((0,r._)({},i),{ref:t}))})});ef.displayName=es;var em="MenuRadioItem",e_=l.forwardRef((e,t)=>{let{value:n}=e,l=(0,a._)(e,["value"]),u=ep(em,e.__scopeMenu),d=n===u.value;return(0,k.jsx)(eh,{scope:e.__scopeMenu,checked:d,children:(0,k.jsx)(ei,(0,o._)((0,r._)({role:"menuitemradio","aria-checked":d},l),{ref:t,"data-state":eP(d),onSelect:(0,i.m)(l.onSelect,()=>{var e;return null===(e=u.onValueChange)||void 0===e?void 0:e.call(u,n)},{checkForDefaultPrevented:!1})}))})});e_.displayName=em;var ev="MenuItemIndicator",[eh,ew]=A(ev,{checked:!1}),eg=l.forwardRef((e,t)=>{let{__scopeMenu:n,forceMount:l}=e,i=(0,a._)(e,["__scopeMenu","forceMount"]),u=ew(ev,n);return(0,k.jsx)(y.C,{present:l||eE(u.checked)||!0===u.checked,children:(0,k.jsx)(c.sG.span,(0,o._)((0,r._)({},i),{ref:t,"data-state":eP(u.checked)}))})});eg.displayName=ev;var ey=l.forwardRef((e,t)=>{let{__scopeMenu:n}=e,l=(0,a._)(e,["__scopeMenu"]);return(0,k.jsx)(c.sG.div,(0,o._)((0,r._)({role:"separator","aria-orientation":"horizontal"},l),{ref:t}))});ey.displayName="MenuSeparator";var eb=l.forwardRef((e,t)=>{let{__scopeMenu:n}=e,l=(0,a._)(e,["__scopeMenu"]),i=F(n);return(0,k.jsx)(w.i3,(0,o._)((0,r._)({},i,l),{ref:t}))});eb.displayName="MenuArrow";var[ex,eM]=A("MenuSub"),eC="MenuSubTrigger",ej=l.forwardRef((e,t)=>{let n=B(eC,e.__scopeMenu),a=U(eC,e.__scopeMenu),d=eM(eC,e.__scopeMenu),s=Q(eC,e.__scopeMenu),c=l.useRef(null),{pointerGraceTimerRef:p,onPointerGraceIntentChange:f}=s,m={__scopeMenu:e.__scopeMenu},_=l.useCallback(()=>{c.current&&window.clearTimeout(c.current),c.current=null},[]);return l.useEffect(()=>_,[_]),l.useEffect(()=>{let e=p.current;return()=>{window.clearTimeout(e),f(null)}},[p,f]),(0,k.jsx)(H,(0,o._)((0,r._)({asChild:!0},m),{children:(0,k.jsx)(eu,(0,o._)((0,r._)({id:d.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":d.contentId,"data-state":eR(n.open)},e),{ref:(0,u.t)(t,d.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,i.m)(e.onPointerMove,eO(t=>{s.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||c.current||(s.onPointerGraceIntentChange(null),c.current=window.setTimeout(()=>{n.onOpenChange(!0),_()},100))})),onPointerLeave:(0,i.m)(e.onPointerLeave,eO(e=>{var t,r;_();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,a="right"===t,l=o[a?"left":"right"],i=o[a?"right":"left"];s.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:l,y:o.top},{x:i,y:o.top},{x:i,y:o.bottom},{x:l,y:o.bottom}],side:t}),window.clearTimeout(p.current),p.current=window.setTimeout(()=>s.onPointerGraceIntentChange(null),300)}else{if(s.onTriggerLeave(e),e.defaultPrevented)return;s.onPointerGraceIntentChange(null)}})),onKeyDown:(0,i.m)(e.onKeyDown,t=>{let r=""!==s.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&P[a.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})}))}))});ej.displayName=eC;var ek="MenuSubContent",eD=l.forwardRef((e,t)=>{let n=q(Y,e.__scopeMenu),{forceMount:d=n.forceMount}=e,s=(0,a._)(e,["forceMount"]),c=B(Y,e.__scopeMenu),p=U(Y,e.__scopeMenu),f=eM(ek,e.__scopeMenu),m=l.useRef(null),_=(0,u.s)(t,m);return(0,k.jsx)(S.Provider,{scope:e.__scopeMenu,children:(0,k.jsx)(y.C,{present:d||c.open,children:(0,k.jsx)(S.Slot,{scope:e.__scopeMenu,children:(0,k.jsx)(en,(0,o._)((0,r._)({id:f.contentId,"aria-labelledby":f.triggerId},s),{ref:_,align:"start",side:"rtl"===p.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;p.isUsingKeyboardRef.current&&(null===(t=m.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,i.m)(e.onFocusOutside,e=>{e.target!==f.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:(0,i.m)(e.onEscapeKeyDown,e=>{p.onClose(),e.preventDefault()}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=O[p.dir].includes(e.key);if(t&&n){var r;c.onOpenChange(!1),null===(r=f.trigger)||void 0===r||r.focus(),e.preventDefault()}})}))})})})});function eR(e){return e?"open":"closed"}function eE(e){return"indeterminate"===e}function eP(e){return eE(e)?"indeterminate":e?"checked":"unchecked"}function eO(e){return t=>"mouse"===t.pointerType?e(t):void 0}eD.displayName=ek;var eL="DropdownMenu",[eS,eT]=(0,d.A)(eL,[N]),eI=N(),[eA,eN]=eS(eL),eF=e=>{let{__scopeDropdownMenu:t,children:n,dir:a,open:i,defaultOpen:u,onOpenChange:d,modal:c=!0}=e,p=eI(t),f=l.useRef(null),[m=!1,_]=(0,s.i)({prop:i,defaultProp:u,onChange:d});return(0,k.jsx)(eA,{scope:t,triggerId:(0,h.B)(),triggerRef:f,contentId:(0,h.B)(),open:m,onOpenChange:_,onOpenToggle:l.useCallback(()=>_(e=>!e),[_]),modal:c,children:(0,k.jsx)(Z,(0,o._)((0,r._)({},p),{open:m,onOpenChange:_,dir:a,modal:c,children:n}))})};eF.displayName=eL;var eK="DropdownMenuTrigger",eG=l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,disabled:l=!1}=e,d=(0,a._)(e,["__scopeDropdownMenu","disabled"]),s=eN(eK,n),p=eI(n);return(0,k.jsx)(H,(0,o._)((0,r._)({asChild:!0},p),{children:(0,k.jsx)(c.sG.button,(0,o._)((0,r._)({type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":l?"":void 0,disabled:l},d),{ref:(0,u.t)(t,s.triggerRef),onPointerDown:(0,i.m)(e.onPointerDown,e=>{l||0!==e.button||!1!==e.ctrlKey||(s.onOpenToggle(),s.open||e.preventDefault())}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{!l&&(["Enter"," "].includes(e.key)&&s.onOpenToggle(),"ArrowDown"===e.key&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})}))}))});eG.displayName=eK;var eB=e=>{let{__scopeDropdownMenu:t}=e,n=(0,a._)(e,["__scopeDropdownMenu"]),o=eI(t);return(0,k.jsx)(z,(0,r._)({},o,n))};eB.displayName="DropdownMenuPortal";var eV="DropdownMenuContent",eU=l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,u=(0,a._)(e,["__scopeDropdownMenu"]),d=eN(eV,n),s=eI(n),c=l.useRef(!1);return(0,k.jsx)($,(0,o._)((0,r._)({id:d.contentId,"aria-labelledby":d.triggerId},s,u),{ref:t,onCloseAutoFocus:(0,i.m)(e.onCloseAutoFocus,e=>{var t;c.current||null===(t=d.triggerRef.current)||void 0===t||t.focus(),c.current=!1,e.preventDefault()}),onInteractOutside:(0,i.m)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!d.modal||r)&&(c.current=!0)}),style:(0,r._)({},e.style,{"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"})}))});eU.displayName=eV,l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(er,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuGroup",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(eo,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuLabel";var eZ=l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(ei,(0,o._)((0,r._)({},i,l),{ref:t}))});eZ.displayName="DropdownMenuItem",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(ed,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuCheckboxItem",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(ef,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuRadioGroup",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(e_,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuRadioItem",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(eg,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuItemIndicator",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(ey,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuSeparator",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(eb,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuArrow",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(ej,(0,o._)((0,r._)({},i,l),{ref:t}))}).displayName="DropdownMenuSubTrigger",l.forwardRef((e,t)=>{let{__scopeDropdownMenu:n}=e,l=(0,a._)(e,["__scopeDropdownMenu"]),i=eI(n);return(0,k.jsx)(eD,(0,o._)((0,r._)({},i,l),{ref:t,style:(0,r._)({},e.style,{"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"})}))}).displayName="DropdownMenuSubContent";var eH=eF,eW=eG,eX=eB,eq=eU,ez=eZ},41060:(e,t,n)=>{n.d(t,{b:()=>d});var r=n(36800),o=n(6452),a=n(7620),l=n(67307),i=n(54568),u=a.forwardRef((e,t)=>(0,i.jsx)(l.sG.label,(0,o._)((0,r._)({},e),{ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}})));u.displayName="Label";var d=u},59598:(e,t,n)=>{n.d(t,{D:()=>p,N:()=>f});var r=n(36800),o=n(6452),a=n(7620),l=(e,t,n,r,o,a,l,i)=>{let u=document.documentElement,d=["light","dark"];function s(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?o.map(e=>a[e]||e):o;n?(u.classList.remove(...r),u.classList.add(t)):u.setAttribute(e,t)}),i&&d.includes(t)&&(u.style.colorScheme=t)}if(r)s(r);else try{let e=localStorage.getItem(t)||n,r=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;s(r)}catch(e){}},i=["light","dark"],u="(prefers-color-scheme: dark)",d="undefined"==typeof window,s=a.createContext(void 0),c={setTheme:e=>{},themes:[]},p=()=>{var e;return null!=(e=a.useContext(s))?e:c},f=e=>a.useContext(s)?a.createElement(a.Fragment,null,e.children):a.createElement(_,(0,r._)({},e)),m=["light","dark"],_=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:o=!0,storageKey:l="theme",themes:d=m,defaultTheme:c=r?"system":"light",attribute:p="data-theme",value:f,children:_,nonce:y,scriptProps:b}=e,[x,M]=a.useState(()=>h(l,c)),[C,j]=a.useState(()=>h(l)),k=f?Object.values(f):d,D=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=g());let a=f?f[t]:t,l=n?w(y):null,u=document.documentElement,d=e=>{"class"===e?(u.classList.remove(...k),a&&u.classList.add(a)):e.startsWith("data-")&&(a?u.setAttribute(e,a):u.removeAttribute(e))};if(Array.isArray(p)?p.forEach(d):d(p),o){let e=i.includes(c)?c:null,n=i.includes(t)?t:e;u.style.colorScheme=n}null==l||l()},[y]),R=a.useCallback(e=>{let t="function"==typeof e?e(x):e;M(t);try{localStorage.setItem(l,t)}catch(e){}},[x]),E=a.useCallback(e=>{j(g(e)),"system"===x&&r&&!t&&D("system")},[x,t]);a.useEffect(()=>{let e=window.matchMedia(u);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),a.useEffect(()=>{let e=e=>{e.key===l&&R(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),a.useEffect(()=>{D(null!=t?t:x)},[t,x]);let P=a.useMemo(()=>({theme:x,setTheme:R,forcedTheme:t,resolvedTheme:"system"===x?C:x,themes:r?[...d,"system"]:d,systemTheme:r?C:void 0}),[x,R,t,C,r,d]);return a.createElement(s.Provider,{value:P},a.createElement(v,{forcedTheme:t,storageKey:l,attribute:p,enableSystem:r,enableColorScheme:o,defaultTheme:c,value:f,themes:d,nonce:y,scriptProps:b}),_)},v=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:u,enableColorScheme:d,defaultTheme:s,value:c,themes:p,nonce:f,scriptProps:m}=e,_=JSON.stringify([i,n,s,t,p,c,u,d]).slice(1,-1);return a.createElement("script",(0,o._)((0,r._)({},m),{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?f:"",dangerouslySetInnerHTML:{__html:"(".concat(l.toString(),")(").concat(_,")")}}))}),h=(e,t)=>{let n;if(!d){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},w=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},g=e=>(e||(e=window.matchMedia(u)),e.matches?"dark":"light")}}]);