"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2753,9495],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,o)=>{o.d(t,{_:()=>n});function n(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,o)=>{o.d(t,{De:()=>g});var n,s=o("../../node_modules/@swc/helpers/esm/_object_spread.js"),r=o("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=o("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),l=o("../../node_modules/react/index.js"),a=o("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=o("../../node_modules/@swc/helpers/esm/_create_class.js"),u=o("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(t){var o=t.content;(0,a._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,o=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(o,!0):o}(o)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var o=new e({content:""});return o.node=t,o}}]),e}(),m="http://www.w3.org/2000/svg",h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var t=this.symbols,o=t.has(e.id);return t.set(e.id,e),!o}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var o=c.createFromExistingNode(e);t.add(o)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var f="__SVG_SPRITE_NODE__";n=new h({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?n.attach(e):n.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else n=null;var _=p?l.useLayoutEffect:l.useEffect,y=function(e){var t=e.width,o=void 0===t?0:t,n=e.height,a=void 0===n?0:n,d=e.viewBox,u=e.id,c=e.className,m=e.fill,h=e.getRootRef,p=e.style,f=e.title,v=e.children,_=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=Math.max(o,a),g=(0,s._)({width:o,height:a},void 0===p?{}:p);return l.createElement("svg",(0,r._)((0,s._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(y),"vkuiIcon--w-".concat(o),"vkuiIcon--h-".concat(a),"vkuiIcon--".concat(u),void 0===c?"":c].join(" ").trim(),viewBox:d,width:o,height:a,style:g,ref:h}),f&&l.createElement("title",null,f),l.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:m}},v))};function g(e,t,o,i,a,d,u,m){var h=function(){p||(!function(e){n&&n.add(e)}(new c({content:i})),p=!0)},p=!1,f=function(e){var t={};return function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[o]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(o)),t[o]=!0)}}(e),v=function(e){return _(h,[]),u&&f("Иконка устарела"+(m?". Замените на ".concat(m):"")),l.createElement(y,(0,r._)((0,s._)({},e),{viewBox:o,id:t,width:void 0===e.width||isNaN(e.width)?a:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return v.mountIcon=h,v.displayName=e,v}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,t,o)=>{o.d(t,{r:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,t,o)=>{o.d(t,{o:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":(e,t,o)=>{o.d(t,{P:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(e,t,o)=>{o.d(t,{Z:()=>l});var n=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=o.n(n),r=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(r)()(s());i.push([e.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),i.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};let l=i},"./src/components/Typography/Footnote/Footnote.tsx":(e,t,o)=>{o.d(t,{w:()=>g});var n=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var s=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=o("./src/components/Typography/Typography.tsx"),i=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=o.n(i),a=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=o.n(a),u=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=o.n(u),m=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=o.n(m),p=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=o.n(p),v=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=h(),_.insert=c().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=f(),l()(v.Z,_);let y=v.Z&&v.Z.locals?v.Z.locals:void 0;var g=function(e){var t=e.className,o=e.caps,i=e.Component,l=e.normalize,a=function(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}(e,["className","caps","Component","normalize"]);return(0,n.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:void 0===i?"span":i,normalize:void 0===l||l,className:(0,s.AK)(t,y.Footnote,o&&y["Footnote--caps"])},a))};try{g.displayName="Footnote",g.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:g.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}}}]);