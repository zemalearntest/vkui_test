"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[278],{"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>h,__namedExportsOrder:()=>v,default:()=>p});var o,r,i,s=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var d=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24SmileOutline","smile_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="smile_outline_24"><path d="M8.438 14.297a.9.9 0 0 1 1.259.133c.013.016.196.223.53.432.383.24.97.488 1.773.488a3.3 3.3 0 0 0 1.773-.488c.191-.12.382-.26.53-.432a.9.9 0 0 1 1.4 1.132 4.045 4.045 0 0 1-.976.826A5.094 5.094 0 0 1 12 17.15a5.094 5.094 0 0 1-2.727-.762 3.987 3.987 0 0 1-.976-.826.9.9 0 0 1 .14-1.265Zm1.812-4.047a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5m-3-9.4c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9ZM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0Z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),c=n("../../node_modules/@vkontakte/icons/dist/es6/28/smile_outline_28.js"),a=n("./src/storybook/constants.ts"),l=n("./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let p={title:"Blocks/AdaptiveIconRenderer",component:l.S,parameters:u({},a.tW,a.nB)};var h={render:function(){return(0,s.jsx)(l.S,{IconCompact:d,IconRegular:c.y})}};h.parameters=m(u({},h.parameters),{docs:m(u({},null===(o=h.parameters)||void 0===o?void 0:o.docs),{source:u({originalSource:"{\n  render: () => <AdaptiveIconRenderer IconCompact={Icon24SmileOutline} IconRegular={Icon28SmileOutline} />\n}"},null===(i=h.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})});let v=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>o});function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{De:()=>g});var o,r=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),d=n("../../node_modules/react/index.js"),c=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),a=n("../../node_modules/@swc/helpers/esm/_create_class.js"),l=n("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var n=t.content;(0,c._)(this,e),(0,l._)(this,"isMounted",!1),(0,l._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,a._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),m="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c._)(this,e),(0,l._)(this,"symbols",new Map),(0,l._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,l._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,a._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=u.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),h=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(h){var v="__SVG_SPRITE_NODE__";o=new p({attrs:{id:v}});var f=function(){var e=document.getElementById(v);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else o=null;var _=h?d.useLayoutEffect:d.useEffect,y=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,c=void 0===o?0:o,a=e.viewBox,l=e.id,u=e.className,m=e.fill,p=e.getRootRef,h=e.style,v=e.title,f=e.children,_=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=Math.max(n,c),g=(0,r._)({width:n,height:c},void 0===h?{}:h);return d.createElement("svg",(0,i._)((0,r._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(y),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(c),"vkuiIcon--".concat(l),void 0===u?"":u].join(" ").trim(),viewBox:a,width:n,height:c,style:g,ref:p}),v&&d.createElement("title",null,v),d.createElement("use",{xlinkHref:"#".concat(l),style:{fill:"currentColor",color:m}},f))};function g(e,t,n,s,c,a,l,m){var p=function(){h||(!function(e){o&&o.add(e)}(new u({content:s})),h=!0)},h=!1,v=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),f=function(e){return _(p,[]),l&&v("Иконка устарела"+(m?". Замените на ".concat(m):"")),d.createElement(y,(0,i._)((0,r._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?c:+e.width,height:void 0===e.height||isNaN(e.height)?a:+e.height}))};return f.mountIcon=p,f.displayName=e,f}},"../../node_modules/@vkontakte/icons/dist/es6/28/smile_outline_28.js":(e,t,n)=>{n.d(t,{y:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28SmileOutline","smile_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="smile_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12m0-2c5.523 0 10-4.477 10-10S19.523 4 14 4 4 8.477 4 14s4.477 10 10 10m-4.388-5.909a1 1 0 1 1 1.463-1.364 4 4 0 0 0 5.85.001 1 1 0 1 1 1.46 1.367 6 6 0 0 1-8.774-.003m7.763-4.841a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25m-6.75 0a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25" /></g></symbol>',28,28,!1,void 0)},"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx":(e,t,n)=>{n.d(t,{S:()=>s});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),i=n("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),s=function(e){var t=e.IconCompact,n=e.IconRegular,s=(0,i.m)().sizeY;return(0,o.jsxs)(r.Fragment,{children:[s.compact&&(0,o.jsx)(t,{className:s.compact.className}),s.regular&&(0,o.jsx)(n,{className:s.regular.className})]})};try{s.displayName="AdaptiveIconRenderer",s.__docgenInfo={description:"",displayName:"AdaptiveIconRenderer",props:{IconCompact:{defaultValue:null,description:"",name:"IconCompact",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}},IconRegular:{defaultValue:null,description:"",name:"IconRegular",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"]={docgenInfo:s.__docgenInfo,name:"AdaptiveIconRenderer",path:"src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"})}catch(e){}},"./src/storybook/constants.ts":(e,t,n)=>{n.d(t,{R0:()=>i,nB:()=>r,tW:()=>o});var o={layout:"fullscreen",centered:!0},r={cartesian:{disable:!0}},i={control:{type:"text"}}}}]);