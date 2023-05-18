"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8036,1238],{"../../node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs":function(t,e,n){function i(t){return t.split("-")[1]}function r(t){return"y"===t?"height":"width"}function o(t){return t.split("-")[0]}function l(t){return["top","bottom"].includes(o(t))?"x":"y"}function a(t,e,n){let a,{reference:f,floating:u}=t,c=f.x+f.width/2-u.width/2,s=f.y+f.height/2-u.height/2,d=l(e),m=r(d),p=f[m]/2-u[m]/2,g="x"===d;switch(o(e)){case"top":a={x:c,y:f.y-u.height};break;case"bottom":a={x:c,y:f.y+f.height};break;case"right":a={x:f.x+f.width,y:s};break;case"left":a={x:f.x-u.width,y:s};break;default:a={x:f.x,y:f.y}}switch(i(e)){case"start":a[d]-=p*(n&&g?-1:1);break;case"end":a[d]+=p*(n&&g?-1:1)}return a}n.d(e,{JB:function(){return c},RR:function(){return L},X5:function(){return R},cv:function(){return T},dp:function(){return k},oo:function(){return f},uY:function(){return E},x7:function(){return g}});let f=async(t,e,n)=>{let{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:l}=n,f=o.filter(Boolean),u=await (null==l.isRTL?void 0:l.isRTL(e)),c=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:s,y:d}=a(c,i,u),m=i,p={},g=0;for(let n=0;n<f.length;n++){let{name:o,fn:h}=f[n],{x:y,y:w,data:x,reset:v}=await h({x:s,y:d,initialPlacement:i,placement:m,strategy:r,middlewareData:p,rects:c,platform:l,elements:{reference:t,floating:e}});s=null!=y?y:s,d=null!=w?w:d,p={...p,[o]:{...p[o],...x}},v&&g<=50&&(g++,"object"==typeof v&&(v.placement&&(m=v.placement),v.rects&&(c=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):v.rects),{x:s,y:d}=a(c,m,u)),n=-1)}return{x:s,y:d,placement:m,strategy:r,middlewareData:p}};function u(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function c(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function s(t,e){var n;void 0===e&&(e={});let{x:i,y:r,platform:o,rects:l,elements:a,strategy:f}=t,{boundary:s="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:p=!1,padding:g=0}=e,h=u(g),y=a[p?"floating"===m?"reference":"floating":m],w=c(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(y)))||n?y:y.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:s,rootBoundary:d,strategy:f})),x="floating"===m?{...l.floating,x:i,y:r}:l.reference,v=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),b=await (null==o.isElement?void 0:o.isElement(v))&&await (null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},R=c(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:v,strategy:f}):x);return{top:(w.top-R.top+h.top)/b.y,bottom:(R.bottom-w.bottom+h.bottom)/b.y,left:(w.left-R.left+h.left)/b.x,right:(R.right-w.right+h.right)/b.x}}let d=Math.min,m=Math.max;function p(t,e,n){return m(t,d(e,n))}let g=t=>({name:"arrow",options:t,async fn(e){let{element:n,padding:o=0}=t||{},{x:a,y:f,placement:c,rects:s,platform:d}=e;if(null==n)return{};let m=u(o),g={x:a,y:f},h=l(c),y=r(h),w=await d.getDimensions(n),x="y"===h?"top":"left",v="y"===h?"bottom":"right",b=s.reference[y]+s.reference[h]-g[h]-s.floating[y],R=g[h]-s.reference[h],L=await (null==d.getOffsetParent?void 0:d.getOffsetParent(n)),T=L?"y"===h?L.clientHeight||0:L.clientWidth||0:0;0===T&&(T=s.floating[y]);let E=m[x],k=T-w[y]-m[v],A=T/2-w[y]/2+(b/2-R/2),P=p(E,A,k),D=null!=i(c)&&A!=P&&s.reference[y]/2-(A<E?m[x]:m[v])-w[y]/2<0;return{[h]:g[h]-(D?A<E?E-A:k-A:0),data:{[h]:P,centerOffset:A-P}}}}),h=["top","right","bottom","left"].reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),y={left:"right",right:"left",bottom:"top",top:"bottom"};function w(t){return t.replace(/left|right|bottom|top/g,t=>y[t])}function x(t,e,n){void 0===n&&(n=!1);let o=i(t),a=l(t),f=r(a),u="x"===a?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[f]>e.floating[f]&&(u=w(u)),{main:u,cross:w(u)}}let v={start:"end",end:"start"};function b(t){return t.replace(/start|end/g,t=>v[t])}let R=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,r,l;let{rects:a,middlewareData:f,placement:u,platform:c,elements:d}=e,{crossAxis:m=!1,alignment:p,allowedPlacements:g=h,autoAlignment:y=!0,...w}=t,v=void 0!==p||g===h?function(t,e,n){return(t?[...n.filter(e=>i(e)===t),...n.filter(e=>i(e)!==t)]:n.filter(t=>o(t)===t)).filter(n=>!t||i(n)===t||!!e&&b(n)!==n)}(p||null,y,g):g,R=await s(e,w),L=(null==(n=f.autoPlacement)?void 0:n.index)||0,T=v[L];if(null==T)return{};let{main:E,cross:k}=x(T,a,await (null==c.isRTL?void 0:c.isRTL(d.floating)));if(u!==T)return{reset:{placement:v[0]}};let A=[R[o(T)],R[E],R[k]],P=[...(null==(r=f.autoPlacement)?void 0:r.overflows)||[],{placement:T,overflows:A}],D=v[L+1];if(D)return{data:{index:L+1,overflows:P},reset:{placement:D}};let O=P.map(t=>{let e=i(t.placement);return[t.placement,e&&m?t.overflows.slice(0,2).reduce((t,e)=>t+e,0):t.overflows[0],t.overflows]}).sort((t,e)=>t[1]-e[1]),C=(null==(l=O.filter(t=>t[2].slice(0,i(t[0])?2:3).every(t=>t<=0))[0])?void 0:l[0])||O[0][0];return C!==u?{data:{index:L+1,overflows:P},reset:{placement:C}}:{}}}},L=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,r,l,a;let{placement:f,middlewareData:u,rects:c,initialPlacement:d,platform:m,elements:p}=e,{mainAxis:g=!0,crossAxis:h=!0,fallbackPlacements:y,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:L=!0,...T}=t,E=o(f),k=o(d)===d,A=await (null==m.isRTL?void 0:m.isRTL(p.floating)),P=y||(k||!L?[w(d)]:function(t){let e=w(t);return[b(t),e,b(e)]}(d));y||"none"===R||P.push(...function(t,e,n,r){let l=i(t),a=function(t,e,n){let i=["left","right"],r=["right","left"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(o(t),"start"===n,r);return l&&(a=a.map(t=>t+"-"+l),e&&(a=a.concat(a.map(b)))),a}(d,L,R,A));let D=[d,...P],O=await s(e,T),C=[],S=(null==(n=u.flip)?void 0:n.overflows)||[];if(g&&C.push(O[E]),h){let{main:t,cross:e}=x(f,c,A);C.push(O[t],O[e])}if(S=[...S,{placement:f,overflows:C}],!C.every(t=>t<=0)){let t=((null==(r=u.flip)?void 0:r.index)||0)+1,e=D[t];if(e)return{data:{index:t,overflows:S},reset:{placement:e}};let n=null==(l=S.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:l.placement;if(!n)switch(v){case"bestFit":{let t=null==(a=S.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:a[0];t&&(n=t);break}case"initialPlacement":n=d}if(f!==n)return{reset:{placement:n}}}return{}}}},T=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:r}=e,a=await async function(t,e){let{placement:n,platform:r,elements:a}=t,f=await (null==r.isRTL?void 0:r.isRTL(a.floating)),u=o(n),c=i(n),s="x"===l(n),d=["left","top"].includes(u)?-1:1,m=f&&s?-1:1,p="function"==typeof e?e(t):e,{mainAxis:g,crossAxis:h,alignmentAxis:y}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&"number"==typeof y&&(h="end"===c?-1*y:y),s?{x:h*m,y:g*d}:{x:g*d,y:h*m}}(e,t);return{x:n+a.x,y:r+a.y,data:a}}}},E=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:i,placement:r}=e,{mainAxis:a=!0,crossAxis:f=!1,limiter:u={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=t,d={x:n,y:i},m=await s(e,c),g=l(o(r)),h=function(t){return"x"===t?"y":"x"}(g),y=d[g],w=d[h];a&&(y=p(y+m["y"===g?"top":"left"],y,y-m["y"===g?"bottom":"right"])),f&&(w=p(w+m["y"===h?"top":"left"],w,w-m["y"===h?"bottom":"right"]));let x=u.fn({...e,[g]:y,[h]:w});return{...x,data:{x:x.x-n,y:x.y-i}}}}},k=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){let n,r;let{placement:a,rects:f,platform:u,elements:c}=e,{apply:p=()=>{},...g}=t,h=await s(e,g),y=o(a),w=i(a),x="x"===l(a),{width:v,height:b}=f.floating;"top"===y||"bottom"===y?(n=y,r=w===(await (null==u.isRTL?void 0:u.isRTL(c.floating))?"start":"end")?"left":"right"):(r=y,n="end"===w?"top":"bottom");let R=b-h[n],L=v-h[r],T=R,E=L;if(x?E=d(v-h.right-h.left,L):T=d(b-h.bottom-h.top,R),!e.middlewareData.shift&&!w){let t=m(h.left,0),e=m(h.right,0),n=m(h.top,0),i=m(h.bottom,0);x?E=v-2*(0!==t||0!==e?t+e:m(h.left,h.right)):T=b-2*(0!==n||0!==i?n+i:m(h.top,h.bottom))}await p({...e,availableWidth:E,availableHeight:T});let k=await u.getDimensions(c.floating);return v!==k.width||b!==k.height?{reset:{rects:!0}}:{}}}}},"../../node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs":function(t,e,n){let i;n.d(e,{Me:function(){return _},oo:function(){return F}});var r=n("../../node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs");function o(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function l(t){return o(t).getComputedStyle(t)}let a=Math.min,f=Math.max,u=Math.round;function c(t){let e=l(t),n=parseFloat(e.width),i=parseFloat(e.height),r=t.offsetWidth,o=t.offsetHeight,a=u(n)!==r||u(i)!==o;return a&&(n=r,i=o),{width:n,height:i,fallback:a}}function s(t){return g(t)?(t.nodeName||"").toLowerCase():""}function d(){if(i)return i;let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?i=t.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function m(t){return t instanceof o(t).HTMLElement}function p(t){return t instanceof o(t).Element}function g(t){return t instanceof o(t).Node}function h(t){return"undefined"!=typeof ShadowRoot&&(t instanceof o(t).ShadowRoot||t instanceof ShadowRoot)}function y(t){let{overflow:e,overflowX:n,overflowY:i,display:r}=l(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function w(t){let e=/firefox/i.test(d()),n=l(t),i=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!i&&"none"!==i||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some(t=>n.willChange.includes(t))||["paint","layout","strict","content"].some(t=>{let e=n.contain;return null!=e&&e.includes(t)})}function x(){return/^((?!chrome|android).)*safari/i.test(d())}function v(t){return["html","body","#document"].includes(s(t))}function b(t){return p(t)?t:t.contextElement}let R={x:1,y:1};function L(t){let e=b(t);if(!m(e))return R;let n=e.getBoundingClientRect(),{width:i,height:r,fallback:o}=c(e),l=(o?u(n.width):n.width)/i,a=(o?u(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}function T(t,e,n,i){var r,l;void 0===e&&(e=!1),void 0===n&&(n=!1);let a=t.getBoundingClientRect(),f=b(t),u=R;e&&(i?p(i)&&(u=L(i)):u=L(t));let c=f?o(f):window,s=x()&&n,d=(a.left+(s&&(null==(r=c.visualViewport)?void 0:r.offsetLeft)||0))/u.x,m=(a.top+(s&&(null==(l=c.visualViewport)?void 0:l.offsetTop)||0))/u.y,g=a.width/u.x,h=a.height/u.y;if(f){let t=o(f),e=i&&p(i)?o(i):i,n=t.frameElement;for(;n&&i&&e!==t;){let t=L(n),e=n.getBoundingClientRect(),i=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(i.paddingTop))*t.y,d*=t.x,m*=t.y,g*=t.x,h*=t.y,d+=e.x,m+=e.y,n=o(n).frameElement}}return{width:g,height:h,top:m,right:d+g,bottom:m+h,left:d,x:d,y:m}}function E(t){return((g(t)?t.ownerDocument:t.document)||window.document).documentElement}function k(t){return p(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function A(t){return T(E(t)).left+k(t).scrollLeft}function P(t){if("html"===s(t))return t;let e=t.assignedSlot||t.parentNode||h(t)&&t.host||E(t);return h(e)?e.host:e}function D(t,e){var n;void 0===e&&(e=[]);let i=function t(e){let n=P(e);return v(n)?n.ownerDocument.body:m(n)&&y(n)?n:t(n)}(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),l=o(i);return r?e.concat(l,l.visualViewport||[],y(i)?i:[]):e.concat(i,D(i))}function O(t,e,n){let i;if("viewport"===e)i=function(t,e){let n=o(t),i=E(t),r=n.visualViewport,l=i.clientWidth,a=i.clientHeight,f=0,u=0;if(r){l=r.width,a=r.height;let t=x();(!t||t&&"fixed"===e)&&(f=r.offsetLeft,u=r.offsetTop)}return{width:l,height:a,x:f,y:u}}(t,n);else if("document"===e)i=function(t){let e=E(t),n=k(t),i=t.ownerDocument.body,r=f(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=f(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),a=-n.scrollLeft+A(t),u=-n.scrollTop;return"rtl"===l(i).direction&&(a+=f(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:a,y:u}}(E(t));else if(p(e))i=function(t,e){let n=T(t,!0,"fixed"===e),i=n.top+t.clientTop,r=n.left+t.clientLeft,o=m(t)?L(t):{x:1,y:1};return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:r*o.x,y:i*o.y}}(e,n);else{let n={...e};if(x()){var a,u;let e=o(t);n.x-=(null==(a=e.visualViewport)?void 0:a.offsetLeft)||0,n.y-=(null==(u=e.visualViewport)?void 0:u.offsetTop)||0}i=n}return(0,r.JB)(i)}function C(t,e){return m(t)&&"fixed"!==l(t).position?e?e(t):t.offsetParent:null}function S(t,e){let n=o(t),i=C(t,e);for(;i&&function(t){return["table","td","th"].includes(s(t))}(i)&&"static"===l(i).position;)i=C(i,e);return i&&("html"===s(i)||"body"===s(i)&&"static"===l(i).position&&!w(i))?n:i||function(t){let e=P(t);for(;m(e)&&!v(e);){if(w(e))return e;e=P(e)}return null}(t)||n}let j={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t,o="clippingAncestors"===n?function(t,e){let n=e.get(t);if(n)return n;let i=D(t).filter(t=>p(t)&&"body"!==s(t)),r=null,o="fixed"===l(t).position,a=o?P(t):t;for(;p(a)&&!v(a);){let t=l(a),e=w(a);"fixed"===t.position?r=null:(o?e||r:e||"static"!==t.position||!r||!["absolute","fixed"].includes(r.position))?r=t:i=i.filter(t=>t!==a),a=P(a)}return e.set(t,i),i}(e,this._c):[].concat(n),u=[...o,i],c=u[0],d=u.reduce((t,n)=>{let i=O(e,n,r);return t.top=f(i.top,t.top),t.right=a(i.right,t.right),t.bottom=a(i.bottom,t.bottom),t.left=f(i.left,t.left),t},O(e,c,r));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t,r=m(n),o=E(n);if(n===o)return e;let l={scrollLeft:0,scrollTop:0},a={x:1,y:1},f={x:0,y:0};if((r||!r&&"fixed"!==i)&&(("body"!==s(n)||y(o))&&(l=k(n)),m(n))){let t=T(n);a=L(n),f.x=t.x+n.clientLeft,f.y=t.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-l.scrollLeft*a.x+f.x,y:e.y*a.y-l.scrollTop*a.y+f.y}},isElement:p,getDimensions:function(t){return m(t)?c(t):t.getBoundingClientRect()},getOffsetParent:S,getDocumentElement:E,getScale:L,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t,r=this.getOffsetParent||S,o=this.getDimensions;return{reference:function(t,e,n){let i=m(e),r=E(e),o=T(t,!0,"fixed"===n,e),l={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(i||!i&&"fixed"!==n){if(("body"!==s(e)||y(r))&&(l=k(e)),m(e)){let t=T(e,!0);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=A(r))}return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}(e,await r(n),i),floating:{x:0,y:0,...await o(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===l(t).direction};function _(t,e,n,i){void 0===i&&(i={});let{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:l=!0,animationFrame:a=!1}=i,f=r&&!a,u=f||o?[...p(t)?D(t):t.contextElement?D(t.contextElement):[],...D(e)]:[];u.forEach(t=>{f&&t.addEventListener("scroll",n,{passive:!0}),o&&t.addEventListener("resize",n)});let c,s=null;if(l){let i=!0;s=new ResizeObserver(()=>{i||n(),i=!1}),p(t)&&!a&&s.observe(t),p(t)||!t.contextElement||a||s.observe(t.contextElement),s.observe(e)}let d=a?T(t):null;return a&&function e(){let i=T(t);d&&(i.x!==d.x||i.y!==d.y||i.width!==d.width||i.height!==d.height)&&n(),d=i,c=requestAnimationFrame(e)}(),n(),()=>{var t;u.forEach(t=>{f&&t.removeEventListener("scroll",n),o&&t.removeEventListener("resize",n)}),null==(t=s)||t.disconnect(),s=null,a&&cancelAnimationFrame(c)}}let F=(t,e,n)=>{let i=new Map,o={platform:j,...n},l={...o.platform,_c:i};return(0,r.oo)(t,e,{...o,platform:l})}},"../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":function(t,e,n){n.d(e,{YF:function(){return s},x7:function(){return a}});var i=n("../../node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),r=n("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),o=n("../../node_modules/react/index.js"),l=n("../../node_modules/react-dom/index.js");let a=t=>{let{element:e,padding:n}=t;return{name:"arrow",options:t,fn(t){if(function(t){return Object.prototype.hasOwnProperty.call(t,"current")}(e)){if(null!=e.current)return(0,i.x7)({element:e.current,padding:n}).fn(t)}else if(e)return(0,i.x7)({element:e,padding:n}).fn(t);return{}}}};var f="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function u(t,e){let n,i,r;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!=e.length)return!1;for(i=n;0!=i--;)if(!u(t[i],e[i]))return!1;return!0}if((n=(r=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(e,r[i]))return!1;for(i=n;0!=i--;){let n=r[i];if(("_owner"!==n||!t.$$typeof)&&!u(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function c(t){let e=o.useRef(t);return f(()=>{e.current=t}),e}function s(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:a,whileElementsMounted:s,open:d}=t,[m,p]=o.useState({x:null,y:null,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[g,h]=o.useState(i);u(g,i)||h(i);let y=o.useRef(null),w=o.useRef(null),x=o.useRef(m),v=c(s),b=c(a),[R,L]=o.useState(null),[T,E]=o.useState(null),k=o.useCallback(t=>{y.current!==t&&(y.current=t,L(t))},[]),A=o.useCallback(t=>{w.current!==t&&(w.current=t,E(t))},[]),P=o.useCallback(()=>{if(!y.current||!w.current)return;let t={placement:e,strategy:n,middleware:g};b.current&&(t.platform=b.current),(0,r.oo)(y.current,w.current,t).then(t=>{let e={...t,isPositioned:!0};D.current&&!u(x.current,e)&&(x.current=e,l.flushSync(()=>{p(e)}))})},[g,e,n,b]);f(()=>{!1===d&&x.current.isPositioned&&(x.current.isPositioned=!1,p(t=>({...t,isPositioned:!1})))},[d]);let D=o.useRef(!1);f(()=>(D.current=!0,()=>{D.current=!1}),[]),f(()=>{if(R&&T){if(v.current)return v.current(R,T,P);P()}},[R,T,P,v]);let O=o.useMemo(()=>({reference:y,floating:w,setReference:k,setFloating:A}),[k,A]),C=o.useMemo(()=>({reference:R,floating:T}),[R,T]);return o.useMemo(()=>({...m,update:P,refs:O,elements:C,reference:k,floating:A}),[m,P,O,C,k,A])}},"../../node_modules/mitt/dist/mitt.mjs":function(t,e,n){n.d(e,{Z:function(){return i}});function i(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i?i.push(n):t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&(n?i.splice(i.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var i=t.get(e);i&&i.slice().map(function(t){t(n)}),(i=t.get("*"))&&i.slice().map(function(t){t(e,n)})}}}}}]);