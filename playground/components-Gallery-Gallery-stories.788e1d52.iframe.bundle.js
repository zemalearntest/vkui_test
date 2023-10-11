"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4395],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,r){function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r.d(t,{De:function(){return y}});var l,c=r("../../node_modules/react/index.js");function s(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}var d=function(){function e(t){var r=t.content;s(this,e),o(this,"isMounted",!1),o(this,"node",void 0),this.node=function(e){var t=!!document.importNode,r=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(r,!0):r}(r)}return a(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var r=new e({content:""});return r.node=t,r}}]),e}(),f="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),o(this,"symbols",new Map),o(this,"config",{attrs:{xmlns:f,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),o(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return a(e,[{key:"push",value:function(e){var t=this.symbols,r=t.has(e.id);return t.set(e.id,e),!r}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var r=d.createFromExistingNode(e);t.add(r)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(f,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var v="__SVG_SPRITE_NODE__";l=new p({attrs:{id:v}});var h=function(){var e=document.getElementById(v);e?l.attach(e):l.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else l=null;var w=m?c.useLayoutEffect:c.useEffect,g=function(e){var t=e.width,r=void 0===t?0:t,o=e.height,l=void 0===o?0:o,s=e.viewBox,u=e.id,a=e.className,d=e.fill,f=e.getRootRef,p=e.style,m=e.title,v=e.children,h=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),w=n({width:r,height:l},void 0===p?{}:p);return c.createElement("svg",i(n({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(r,l)),"vkuiIcon--w-".concat(r),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(u),void 0===a?"":a].join(" ").trim(),viewBox:s,width:r,height:l,style:w,ref:f}),m&&c.createElement("title",null,m),c.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:d}},v))};function y(e,t,r,o,s,u,a,f){var p=function(){m||(!function(e){l&&l.add(e)}(new d({content:o})),m=!0)},m=!1,v=function(e){var t={};return function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[r]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(r)),t[r]=!0)}}(e),h=function(e){return w(p,[]),a&&v("Иконка устарела"+(f?". Замените на ".concat(f):"")),c.createElement(g,i(n({},e),{viewBox:r,id:t,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return h.mountIcon=p,h.displayName=e,h}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,t,r){r.d(t,{r:function(){return o}});var o=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js":function(e,t,r){r.d(t,{P:function(){return o}});var o=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" /></g></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css":function(e,t,r){var o=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(o),i=r("../../node_modules/css-loader/dist/runtime/api.js"),l=r.n(i)()(n());l.push([e.id,".ScrollArrow--JgxNW{background-color:initial;border:0;cursor:pointer;display:flex;justify-content:center;padding:0;transition:opacity .15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:var(--vkui--animation_easing_platform);-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.ScrollArrow--direction-left--jS38A,.ScrollArrow--direction-right--UIq4o{flex-direction:column;height:100%}.ScrollArrow--direction-down--KQFqm,.ScrollArrow--direction-up--LfNde{flex-direction:row;width:100%}.ScrollArrow__icon--gJpr6{align-items:center;background-color:#fff;background-color:var(--vkui--color_background_modal);box-shadow:0 0 2px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08);box-shadow:var(--vkui--elevation3);color:#99a2ad;color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;position:relative}.ScrollArrow--size-m--c7dtS .ScrollArrow__icon--gJpr6{border-radius:14px;height:28px;width:28px}.ScrollArrow--size-l--f8Hpn .ScrollArrow__icon--gJpr6{border-radius:24px;height:40px;width:40px}.ScrollArrow--direction-left--jS38A{left:0;padding-left:16px;padding-left:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-right--UIq4o{padding-right:16px;padding-right:var(--vkui--size_base_padding_horizontal--regular,16px);right:0}.ScrollArrow--direction-up--LfNde{padding-top:16px;padding-top:var(--vkui--size_base_padding_horizontal--regular,16px);top:0}.ScrollArrow--direction-down--KQFqm{bottom:0;padding-bottom:16px;padding-bottom:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-left--jS38A .ScrollArrow__defaultIcon--k1Jug{transform:rotate(180deg)}.ScrollArrow--direction-up--LfNde .ScrollArrow__defaultIcon--k1Jug{transform:rotate(-90deg)}.ScrollArrow--direction-down--KQFqm .ScrollArrow__defaultIcon--k1Jug{transform:rotate(90deg)}",""]),l.locals={ScrollArrow:"ScrollArrow--JgxNW","ScrollArrow--direction-left":"ScrollArrow--direction-left--jS38A","ScrollArrow--direction-right":"ScrollArrow--direction-right--UIq4o","ScrollArrow--direction-down":"ScrollArrow--direction-down--KQFqm","ScrollArrow--direction-up":"ScrollArrow--direction-up--LfNde",ScrollArrow__icon:"ScrollArrow__icon--gJpr6","ScrollArrow--size-m":"ScrollArrow--size-m--c7dtS","ScrollArrow--size-l":"ScrollArrow--size-l--f8Hpn",ScrollArrow__defaultIcon:"ScrollArrow__defaultIcon--k1Jug"},t.Z=l},"./src/components/Gallery/Gallery.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Playground:function(){return f}});var o,n,i,l=r("../../node_modules/react/jsx-runtime.js");r("../../node_modules/react/index.js");var c=r("./src/storybook/constants.ts"),s=r("./src/components/Gallery/Gallery.tsx");function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var d={title:"Blocks/Gallery",component:s.r,parameters:u({},c.tW,c.nB)};t.default=d;var f={render:function(e){return(0,l.jsxs)(s.r,a(u({},e),{children:[(0,l.jsx)("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),(0,l.jsx)("img",{alt:"image",src:"https://picsum.photos/1024/640",style:{display:"block"}}),(0,l.jsx)("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]}))}};f.parameters=a(u({},f.parameters),{docs:a(u({},null===(o=f.parameters)||void 0===o?void 0:o.docs),{source:u({originalSource:"{\n  render: args => <Gallery {...args}>\n      <div style={{\n      backgroundColor: 'var(--vkui--color_background_negative)'\n    }} />\n      <img alt=\"image\" src=\"https://picsum.photos/1024/640\" style={{\n      display: 'block'\n    }} />\n      <div style={{\n      backgroundColor: 'var(--vkui--color_background_accent)'\n    }} />\n    </Gallery>\n}"},null===(i=f.parameters)||void 0===i?void 0:null===(n=i.docs)||void 0===n?void 0:n.source)})})},"./src/components/ScrollArrow/ScrollArrow.tsx":function(e,t,r){r.d(t,{Q:function(){return O}});var o=r("../../node_modules/react/jsx-runtime.js");r("../../node_modules/react/index.js");var n=r("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js"),i=r("../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js"),l=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),c=r("./src/components/RootComponent/RootComponent.tsx"),s=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=r.n(s),a=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=r.n(a),f=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=r.n(f),m=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),v=r.n(m),h=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=r.n(h),g=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=v(),y.insert=p().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=w(),u()(g.Z,y);var b=g.Z&&g.Z.locals?g.Z.locals:void 0,S={m:b["ScrollArrow--size-m"],l:b["ScrollArrow--size-l"]},j={up:b["ScrollArrow--direction-up"],right:b["ScrollArrow--direction-right"],down:b["ScrollArrow--direction-down"],left:b["ScrollArrow--direction-left"]},_=function(e){var t=e.size,r=n.P;return"m"===t&&(r=i.r),(0,o.jsx)(r,{className:b.ScrollArrow__defaultIcon})},O=function(e){var t=e.size,r=void 0===t?"l":t,n=e.offsetY,i=e.direction,s=e.children,u=void 0===s?(0,o.jsx)(_,{size:r}):s,a=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["size","offsetY","direction","children"]);return(0,o.jsx)(c.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({Component:"button",type:"button",baseClassName:(0,l.AK)(b.ScrollArrow,S[r],j[i])},a),{children:(0,o.jsx)("span",{className:b.ScrollArrow__icon,style:n?{top:n}:void 0,children:u})}))};try{O.displayName="ScrollArrow",O.__docgenInfo={description:"Компонент стрелки из HorizontalScroll",displayName:"ScrollArrow",props:{direction:{defaultValue:null,description:"Направление стрелки",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},size:{defaultValue:{value:"l"},description:"Размер стрелки",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},offsetY:{defaultValue:null,description:"Смещает иконку кнопки навигации по вертикали.",name:"offsetY",required:!1,type:{name:"string | number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"]={docgenInfo:O.__docgenInfo,name:"ScrollArrow",path:"src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"})}catch(e){}},"./src/hooks/useAdaptivityHasPointer.ts":function(e,t,r){r.d(t,{K:function(){return c}});var o=r("../../node_modules/react/index.js"),n=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=r("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),l=r("./src/hooks/useIsClient.ts");function c(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=o.useContext(i.s).hasPointer,r=e||void 0===t;return(0,l.O)(!r)&&void 0===t?n.RX:t}},"./src/lib/fx.ts":function(e,t,r){function o(e){return .5*(1-Math.cos(Math.PI*e))}function n(e,t){return function(r){var o=3*e,n=3*(t-e)-o;return(1-o-n)*Math.pow(r,3)+n*Math.pow(r,2)+o*r}}r.d(t,{F:function(){return o},_:function(){return n}})},"./src/storybook/constants.ts":function(e,t,r){r.d(t,{R0:function(){return i},nB:function(){return n},tW:function(){return o}});var o={layout:"fullscreen",centered:!0},n={cartesian:{disable:!0}},i={control:{type:"text"}}}}]);