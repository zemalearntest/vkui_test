"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3424,3778],{"./src/components/ModalDismissButton/ModalDismissButton.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>s,__namedExportsOrder:()=>i,default:()=>r});var o=n("../../node_modules/react/index.js"),a=n("./src/storybook/constants.ts");let r={title:"Modals/ModalDismissButton",component:n("./src/components/ModalDismissButton/ModalDismissButton.tsx").t,parameters:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},a.tW,a.nB)};var s={decorators:[function(e){return o.createElement("div",{style:{position:"relative"}},o.createElement(e,null))}]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  decorators: [Component => <div style={{\n    position: 'relative'\n  }}>\n        <Component />\n      </div>]\n}",...s.parameters?.docs?.source}}};let i=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>o});function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{De:()=>_});var o,a=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),r=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),i=n("../../node_modules/react/index.js"),l=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=n("../../node_modules/@swc/helpers/esm/_create_class.js"),u=n("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(t){var n=t.content;(0,l._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),p="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:p,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=c.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(p,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),b=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(b){var f="__SVG_SPRITE_NODE__";o=new m({attrs:{id:f}});var y=function(){var e=document.getElementById(f);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",y)};document.querySelector("body")?y():document.addEventListener("DOMContentLoaded",y)}else o=null;var v=b?i.useLayoutEffect:i.useEffect,h=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,l=void 0===o?0:o,d=e.viewBox,u=e.id,c=e.className,p=e.fill,m=e.getRootRef,b=e.style,f=e.title,y=e.children,v=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),h=Math.max(n,l),_=(0,a._)({width:n,height:l},void 0===b?{}:b);return i.createElement("svg",(0,r._)((0,a._)({"aria-hidden":"true",display:"block"},v),{className:["vkuiIcon","vkuiIcon--".concat(h),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(u),void 0===c?"":c].join(" ").trim(),viewBox:d,width:n,height:l,style:_,ref:m}),f&&i.createElement("title",null,f),i.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:p}},y))};function _(e,t,n,s,l,d,u,p){var m=function(){b||(!function(e){o&&o.add(e)}(new c({content:s})),b=!0)},b=!1,f=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),y=function(e){return v(m,[]),u&&f("Иконка устарела"+(p?". Замените на ".concat(p):"")),i.createElement(h,(0,r._)((0,a._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return y.mountIcon=m,y.displayName=e,y}},"../../node_modules/@vkontakte/icons/dist/es6/20/cancel_20.js":(e,t,n)=>{n.d(t,{r:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon20Cancel","cancel_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="cancel_20"><path fill="currentColor" fill-rule="evenodd" d="M4.72 4.72a.75.75 0 0 1 1.06 0L10 8.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L11.06 10l4.22 4.22a.75.75 0 1 1-1.06 1.06L10 11.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L8.94 10 4.72 5.78a.75.75 0 0 1 0-1.06z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ModalDismissButton/ModalDismissButton.module.css":(e,t,n)=>{n.d(t,{Z:()=>i});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(r)()(a());s.push([e.id,'.ModalDismissButton--wR4Ll{box-sizing:border-box;color:var(--vkui--color_icon_contrast);height:56px;justify-content:center;padding:18px;position:absolute;right:-56px;top:0;transition:opacity .15s ease-out;width:56px}.ModalDismissButton--wR4Ll:before{background:var(--vkui--color_overlay_primary);border-radius:50%;bottom:14px;content:"";display:block;left:14px;position:absolute;right:14px;top:14px}.ModalDismissButton--wR4Ll .vkuiIcon{transform:translateX(0)}.ModalDismissButton--hover--NGjCj.ModalDismissButton--wR4Ll:before{background:var(--vkui--color_overlay_primary--hover)}.ModalDismissButton--active--fSG9o.ModalDismissButton--wR4Ll:before{background:var(--vkui--color_overlay_primary--active)}',""]),s.locals={ModalDismissButton:"ModalDismissButton--wR4Ll","ModalDismissButton--hover":"ModalDismissButton--hover--NGjCj","ModalDismissButton--active":"ModalDismissButton--active--fSG9o"};let i=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css":(e,t,n)=>{n.d(t,{Z:()=>i});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(r)()(a());s.push([e.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;transition:background-color .15s ease-out;will-change:transform;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);border-radius:50%;content:"";height:24px;left:0;margin:-12px -12px 0 0;opacity:0;position:absolute;top:0;width:24px}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',""]),s.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};let i=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(e,t,n)=>{n.d(t,{Z:()=>i});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(r)()(a());s.push([e.id,".VisuallyHidden--bAIOu{height:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}",""]),s.locals={VisuallyHidden:"VisuallyHidden--bAIOu"};let i=s},"./src/components/ModalDismissButton/ModalDismissButton.tsx":(e,t,n)=>{n.d(t,{t:()=>O});var o=n("../../node_modules/react/index.js"),a=n("../../node_modules/@vkontakte/icons/dist/es6/20/cancel_20.js"),r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=n("./src/components/Tappable/Tappable.tsx"),i=n("./src/components/VisuallyHidden/VisuallyHidden.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=n.n(l),u=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(u),p=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=n.n(p),b=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(b),y=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=n.n(y),h=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ModalDismissButton/ModalDismissButton.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=f(),_.insert=m().bind(null,"head"),_.domAPI=c(),_.insertStyleElement=v(),d()(h.Z,_);let g=h.Z&&h.Z.locals?h.Z.locals:void 0;var O=function(e){var t=e.children,n=void 0===t?"Закрыть":t,l=e.className,d=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["children","className"]);return o.createElement(s.K,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({className:(0,r.AK)(g.ModalDismissButton,l)},d),{activeMode:g["ModalDismissButton--active"],hoverMode:g["ModalDismissButton--hover"]}),n&&o.createElement(i.T,null,n),o.createElement(a.r,null))};try{O.displayName="ModalDismissButton",O.__docgenInfo={description:"",displayName:"ModalDismissButton",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"]={docgenInfo:O.__docgenInfo,name:"ModalDismissButton",path:"src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"})}catch(e){}},"./src/components/Tappable/Tappable.tsx":(e,t,n)=>{n.d(t,{K:()=>I}),n("./src/components/Clickable/Clickable.module.css");var o=n("../../node_modules/react/index.js"),a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),s=n("./src/lib/adaptivity/constants.ts"),i=n("./src/lib/mergeCalls.ts"),l=n("./src/components/Clickable/Clickable.tsx"),d=n("./src/hooks/usePlatform.ts"),u=n("./src/hooks/useTimeout.ts"),c=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=n.n(c),m=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),b=n.n(m),f=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),y=n.n(f),v=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=n.n(v),_=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=n.n(_),O=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css"),T={attributes:{class:"vkui-style"}};T.setAttributes=h(),T.insert=y().bind(null,"head"),T.domAPI=b(),T.insertStyleElement=g(),p()(O.Z,T);let S=O.Z&&O.Z.locals?O.Z.locals:void 0;function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function k(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}}var w=function(e,t){return"android"===(0,d.F)()&&!t&&"background"===e},E=function(e,t){var n=function(e,t,n){var o=Date.now();i((function(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(s.filter(function(e){return e.id+225>o})).concat([{x:e,y:t,id:o,pointerId:n}])),d.set(),l.delete(n)},r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],s=!0,i=!1;try{for(a=a.call(e);!(s=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==a.return||a.return()}finally{if(i)throw o}}return r}}(e,t)||k(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.useState([]),2),s=r[0],i=r[1],l=o.useMemo(function(){return new Map},[]),d=(0,u.K)(function(){return i([])},225),c=(!a.RX||!1===t)&&e;return{clicks:s,onPointerDown:c?function(e){var t=function(e){var t=null==e?void 0:e.getBoundingClientRect();return{top:null==t?void 0:t.top,left:null==t?void 0:t.left,width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight}}(e.currentTarget),o=t.top,a=t.left,r=e.clientX-(null!=a?a:0),s=e.clientY-(null!=o?o:0);l.set(e.pointerId,setTimeout(function(){return n(r,s,e.pointerId)},70))}:a.ZT,onPointerCancel:c?function(e){clearTimeout(l.get(e.pointerId)),l.delete(e.pointerId)}:a.ZT}},R=function(e){var t=e.needRipple,n=e.clicks;return o.createElement("span",{"aria-hidden":!0,className:(0,a.AK)(S.Tappable__stateLayer,(void 0===t||t)&&S.Tappable__ripple)},n.map(function(e){return o.createElement("span",{key:e.id,className:S.Tappable__wave,style:{top:e.y,left:e.x}})}))};try{w.displayName="useMaybeNeedRipple",w.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:w.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(e){}try{E.displayName="useRipple",E.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:E.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(e){}try{R.displayName="Ripple",R.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:R.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(e){}var C="background",M={background:S["Tappable--hovered-background"],opacity:S["Tappable--hovered-opacity"],none:""};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=M[e];return void 0!==t?t:e}var x={background:S["Tappable--activated-background"],opacity:S["Tappable--activated-opacity"],none:""};function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=x[e];return void 0!==t?t:e}try{A.displayName="hoverClass",A.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:A.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(e){}try{N.displayName="activeClass",N.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:N.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(e){}try{C.displayName="DEFAULT_STATE_MODE",C.__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:C.__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(e){}function D(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={none:S["Tappable--sizeX-none"],compact:S["Tappable--sizeX-compact"]},I=function(e){var t=e.baseClassName,n=e.borderRadiusMode,d=e.children,u=e.hoverMode,c=void 0===u?C:u,p=e.activeMode,m=void 0===p?C:p,b=e.onPointerDown,f=e.onPointerCancel,y=D(e,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]),v=(0,l.T)(y),h=(0,r.g)(),_=h.sizeX,g=void 0===_?"none":_,O=h.hasPointer,T=w(m,O),j=E(T,O),k=j.clicks,M=D(j,["clicks"]),x=(0,i.O)(M,{onPointerDown:b,onPointerCancel:f});return o.createElement(l.P,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({baseClassName:(0,a.AK)(t,S.Tappable,g!==s.n$.REGULAR&&P[g],"inherit"===(void 0===n?"auto":n)&&S["Tappable--borderRadiusInherit"],function(e){switch(e){case void 0:return S["Tappable--hasPointer-none"];case!1:return S["Tappable--hasPointer-false"]}}(O)),hoverClassName:A(c),activeClassName:N(m)},x,y),d,v&&("background"===c||"background"===m)&&o.createElement(R,{needRipple:T,clicks:k}))};try{I.displayName="Tappable",I.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:I.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(e){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(e,t,n)=>{n.d(t,{T:()=>h});var o=n("../../node_modules/react/index.js"),a=n("./src/components/RootComponent/RootComponent.tsx"),r=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(r),i=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),l=n.n(i),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),u=n.n(d),c=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(c),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=n.n(m),f=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=b(),s()(f.Z,y);let v=f.Z&&f.Z.locals?f.Z.locals:void 0;var h=function(e){var t=e.Component,n=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["Component"]);return o.createElement(a.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===t?"span":t},n),{baseClassName:v.VisuallyHidden}))};try{h.displayName="VisuallyHidden",h.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:h.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}}}]);