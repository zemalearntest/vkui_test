"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[234],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":function(e,t,n){n.d(t,{_:function(){return o}});function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){n.d(t,{De:function(){return y}});var o,r=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),a=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=n("../../node_modules/react/index.js"),l=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),u=n("../../node_modules/@swc/helpers/esm/_create_class.js"),c=n("../../node_modules/@swc/helpers/esm/_define_property.js"),d=function(){function e(t){var n=t.content;(0,l._)(this,e),(0,c._)(this,"isMounted",!1),(0,c._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,u._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),g="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,c._)(this,"symbols",new Map),(0,c._)(this,"config",{attrs:{xmlns:g,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,c._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,u._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=d.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(g,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var f="__SVG_SPRITE_NODE__";o=new p({attrs:{id:f}});var b=function(){var e=document.getElementById(f);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",b)};document.querySelector("body")?b():document.addEventListener("DOMContentLoaded",b)}else o=null;var h=m?s.useLayoutEffect:s.useEffect,v=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,l=void 0===o?0:o,u=e.viewBox,c=e.id,d=e.className,g=e.fill,p=e.getRootRef,m=e.style,f=e.title,b=e.children,h=(0,a._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),v=Math.max(n,l),y=(0,r._)({width:n,height:l},void 0===m?{}:m);return s.createElement("svg",(0,i._)((0,r._)({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(v),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(c),void 0===d?"":d].join(" ").trim(),viewBox:u,width:n,height:l,style:y,ref:p}),f&&s.createElement("title",null,f),s.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:g}},b))};function y(e,t,n,a,l,u,c,g){var p=function(){m||(!function(e){o&&o.add(e)}(new d({content:a})),m=!0)},m=!1,f=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),b=function(e){return h(p,[]),c&&f("Иконка устарела"+(g?". Замените на ".concat(g):"")),s.createElement(v,(0,i._)((0,r._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return b.mountIcon=p,b.displayName=e,b}},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js":function(e,t,n){n.d(t,{P:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="spinner_16"><path fill="currentColor" fill-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":function(e,t,n){n.d(t,{o:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js":function(e,t,n){n.d(t,{h:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js":function(e,t,n){n.d(t,{X:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js":function(e,t,n){n.d(t,{C:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Pagination/Pagination.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,".Pagination__list--A4Uc1{display:flex;list-style-type:none;margin:0;padding:0}.Pagination__prevButtonContainer--uyyo0{margin-right:8px}.Pagination__nextButtonContainer--drcwC{margin-left:8px}",""]),a.locals={Pagination__list:"Pagination__list--A4Uc1",Pagination__prevButtonContainer:"Pagination__prevButtonContainer--uyyo0",Pagination__nextButtonContainer:"Pagination__nextButtonContainer--drcwC"},t.Z=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Pagination/PaginationPage/PaginationPage.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,".PaginationPage--Xyoqv{border-radius:8px;border-radius:var(--vkui--size_border_radius--regular);box-sizing:border-box;color:#818c99;color:var(--vkui--color_text_secondary);height:44px;height:var(--vkui--size_button_large_height--regular);line-height:44px;line-height:var(--vkui--size_button_large_height--regular);min-width:40px;padding-left:8px;padding-right:8px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.PaginationPage--state-hover--Nnxon{background-color:rgba(0,16,61,.04);background-color:var(--vkui--color_transparent--hover)}.PaginationPage--current--B2uDe,.PaginationPage--state-active--L7U15{background-color:rgba(0,16,61,.08);background-color:var(--vkui--color_transparent--active);color:#000;color:var(--vkui--color_text_primary)}.PaginationPage--disabled--WL6dZ{opacity:.4;opacity:var(--vkui--opacity_disable)}.PaginationPage--sizeY-compact--J0MjL{height:36px;height:var(--vkui--size_button_large_height--compact);line-height:36px;line-height:var(--vkui--size_button_large_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.PaginationPage--sizeY-none--SZW5A{height:36px;height:var(--vkui--size_button_large_height--compact);line-height:36px;line-height:var(--vkui--size_button_large_height--compact)}}.PaginationPage--type-ellipsis--EbJb4{min-width:16px;padding-left:0;padding-right:0}",""]),a.locals={PaginationPage:"PaginationPage--Xyoqv","PaginationPage--state-hover":"PaginationPage--state-hover--Nnxon","PaginationPage--current":"PaginationPage--current--B2uDe","PaginationPage--state-active":"PaginationPage--state-active--L7U15","PaginationPage--disabled":"PaginationPage--disabled--WL6dZ","PaginationPage--sizeY-compact":"PaginationPage--sizeY-compact--J0MjL","PaginationPage--sizeY-none":"PaginationPage--sizeY-none--SZW5A","PaginationPage--type-ellipsis":"PaginationPage--type-ellipsis--EbJb4"},t.Z=a},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/Pagination/Pagination.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return J},default:function(){return H}});var o,r,i,a=n("../../node_modules/react/jsx-runtime.js"),s=n("../../node_modules/react/index.js"),l=n("@storybook/preview-api"),u=n("./src/storybook/constants.ts"),c=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactLeft","chevron_compact_left_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_left_24"><path fill="currentColor" d="M11.293 7.706a1 1 0 0 0 0-1.412l-.088-.088a.997.997 0 0 0-1.414.002l-5.084 5.084a.998.998 0 0 0 0 1.416l5.084 5.084c.39.391 1.026.39 1.414.002l.088-.088a.995.995 0 0 0 0-1.412L7 12z" /></symbol>',16,24,!1,void 0),d=n("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js"),g=n("./src/helpers/math.ts"),p=n("./src/helpers/range.ts");function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.currentPage,n=void 0===t?1:t,o=e.siblingCount,r=void 0===o?1:o,i=e.boundaryCount,a=void 0===i?1:i,l=e.totalPages,u=void 0===l?1:l;return s.useMemo(function(){var e=(0,p.C)(1,Math.min(a,u)),t=(0,p.C)(Math.max(u-a+1,a+1),u),o=u-a-1-2*r,i=(0,g.uZ)(n-r,a+2,o),s=Math.min(Math.max(n+r,a+2+2*r),t.length>0?t[0]-2:u-1);return i>a+2?e.push("start-ellipsis"):a+1<u-a&&e.push(a+1),e.push.apply(e,f((0,p.C)(i,s))),s<u-a-1?e.push("end-ellipsis"):u-a>a&&e.push(u-a),e.push.apply(e,f(t)),e},[n,u,r,a])},h=n("./src/components/Button/Button.tsx"),v=n("./src/components/RootComponent/RootComponent.tsx"),y=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),P=n("./src/components/Tappable/Tappable.tsx"),Text=n("./src/components/Typography/Text/Text.tsx");function _(e,t){return t?"".concat(e," страница"):"Перейти на ".concat(e," страницу")}var j=n("./src/hooks/useAdaptivity.ts"),O=n("./src/lib/adaptivity/constants.ts"),w=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=n.n(w),k=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),C=n.n(k),S=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),A=n.n(S),E=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),B=n.n(E),R=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=n.n(R),N=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Pagination/PaginationPage/PaginationPage.module.css"),I={attributes:{class:"vkui-style"}};I.setAttributes=B(),I.insert=A().bind(null,"head"),I.domAPI=C(),I.insertStyleElement=L(),x()(N.Z,I);var M=N.Z&&N.Z.locals?N.Z.locals:void 0;function D(e){var t=e.isCurrent,n=e.disabled,o=(0,j.g)().sizeY,r=void 0===o?"none":o;return(0,y.AK)(M.PaginationPage,"none"===r&&M["PaginationPage--sizeY-none"],r===O.n$.COMPACT&&M["PaginationPage--sizeY-compact"],t&&M["PaginationPage--current"],n&&M["PaginationPage--disabled"])}var z=function(e){var t=e.isCurrent,n=void 0!==t&&t,o=e.getPageAriaLabel,r=e.children,i=e.className,s=e.disabled,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["isCurrent","getPageAriaLabel","children","className","disabled"]),u=D({isCurrent:n,disabled:s});return(0,a.jsx)(P.KR,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({className:(0,y.AK)(u,i),activeMode:M["PaginationPage--state-active"],hoverMode:M["PaginationPage--state-hover"],hasActive:!n,hasHover:!n,focusVisibleMode:"outside","data-page":r,"aria-current":!!n||void 0,"aria-label":(void 0===o?_:o)(r,n),disabled:s},l),{children:(0,a.jsx)(Text.x,{normalize:!1,children:r})}))};try{z.displayName="PaginationPageButton",z.__docgenInfo={description:"",displayName:"PaginationPageButton",props:{isCurrent:{defaultValue:{value:"false"},description:"",name:"isCurrent",required:!1,type:{name:"boolean"}},getPageAriaLabel:{defaultValue:null,description:'Функция для переопределения и/или локализации `aria-label` атрибута.\nПо умолчанию используется текст на "ru_RU".',name:"getPageAriaLabel",required:!1,type:{name:"((page: number, isCurrent: boolean) => string)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/PaginationPage/PaginationPageButton.tsx#PaginationPageButton"]={docgenInfo:z.__docgenInfo,name:"PaginationPageButton",path:"src/components/Pagination/PaginationPage/PaginationPageButton.tsx#PaginationPageButton"})}catch(e){}var T=function(e){var t=e.className,n=e.disabled,o=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","disabled"]),r=D({isCurrent:!1,disabled:n});return(0,a.jsx)(Text.x,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({className:(0,y.AK)(r,M["PaginationPage--type-ellipsis"],t)},o),{children:"…"}))};try{T.displayName="PaginationPageEllipsis",T.__docgenInfo={description:"",displayName:"PaginationPageEllipsis",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/PaginationPage/PaginationPageEllipsis.tsx#PaginationPageEllipsis"]={docgenInfo:T.__docgenInfo,name:"PaginationPageEllipsis",path:"src/components/Pagination/PaginationPage/PaginationPageEllipsis.tsx#PaginationPageEllipsis"})}catch(e){}var q=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Pagination/Pagination.module.css"),Z={attributes:{class:"vkui-style"}};Z.setAttributes=B(),Z.insert=A().bind(null,"head"),Z.domAPI=C(),Z.insertStyleElement=L(),x()(q.Z,Z);var V=q.Z&&q.Z.locals?q.Z.locals:void 0,Y=function(e){var t=e.currentPage,n=void 0===t?1:t,o=e.siblingCount,r=e.boundaryCount,i=e.totalPages,l=void 0===i?1:i,u=e.disabled,g=e.getPageAriaLabel,p=void 0===g?_:g,m=e.prevButtonAriaLabel,f=e.nextButtonAriaLabel,y=e.onChange,P=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["currentPage","siblingCount","boundaryCount","totalPages","disabled","getPageAriaLabel","prevButtonAriaLabel","nextButtonAriaLabel","onChange"]),j=b({currentPage:n,totalPages:l,siblingCount:void 0===o?1:o,boundaryCount:void 0===r?1:r}),O=1===n,w=n===l,x=s.useCallback(function(){y&&!O&&y(n-1)},[n,O,y]),k=s.useCallback(function(e){var t=e.currentTarget.dataset.page||"1";null==y||y(Number(t))},[y]),C=s.useCallback(function(){y&&!w&&y(n+1)},[n,w,y]),S=s.useCallback(function(e){switch(e){case"start-ellipsis":case"end-ellipsis":return(0,a.jsx)("li",{children:(0,a.jsx)(T,{disabled:u})},e);default:var t=e===n;return(0,a.jsx)("li",{children:(0,a.jsx)(z,{getPageAriaLabel:p,isCurrent:t,onClick:k,disabled:u,children:e})},e)}},[n,u,p,k]);return(0,a.jsx)(v.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:"nav",role:"navigation","aria-label":"Навигация по страницам"},P),{children:(0,a.jsxs)("ul",{className:V.Pagination__list,children:[(0,a.jsx)("li",{className:V.Pagination__prevButtonContainer,children:(0,a.jsx)(h.z,{size:"l",before:(0,a.jsx)(c,{width:24}),appearance:"accent",mode:"tertiary",disabled:O||u,"aria-label":void 0===m?"Перейти на предыдущую страницу":m,onClick:x})}),j.map(S),(0,a.jsx)("li",{className:V.Pagination__nextButtonContainer,children:(0,a.jsx)(h.z,{size:"l",after:(0,a.jsx)(d.o,{width:24}),appearance:"accent",mode:"tertiary",disabled:w||u,"aria-label":void 0===f?"Перейти на следующую страницу":f,onClick:C})})]})}))};try{Y.displayName="Pagination",Y.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:{value:"1"},description:"Текущая страница.",name:"currentPage",required:!1,type:{name:"number"}},siblingCount:{defaultValue:{value:"1"},description:"Кол-во всегда видимых страниц по краям текущей страницы.",name:"siblingCount",required:!1,type:{name:"number"}},boundaryCount:{defaultValue:{value:"1"},description:"Кол-во всегда видимых страниц в начале и в конце.",name:"boundaryCount",required:!1,type:{name:"number"}},totalPages:{defaultValue:{value:"1"},description:"Общее кол-во страниц.",name:"totalPages",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Блокировка всех кнопок.",name:"disabled",required:!1,type:{name:"boolean"}},prevButtonAriaLabel:{defaultValue:{value:"Перейти на предыдущую страницу"},description:'Переопределение `aria-label` для кнопки навигации назад.\nПо умолчанию используется текст на "ru_RU".',name:"prevButtonAriaLabel",required:!1,type:{name:"string"}},nextButtonAriaLabel:{defaultValue:{value:"Перейти на следующую страницу"},description:'Переопределение `aria-label` для кнопки навигации вперёд.\nПо умолчанию используется текст на "ru_RU".',name:"nextButtonAriaLabel",required:!1,type:{name:"string"}},getPageAriaLabel:{defaultValue:null,description:'Функция для переопределения и/или локализации `aria-label` атрибута.\nПо умолчанию используется текст на "ru_RU".',name:"getPageAriaLabel",required:!1,type:{name:"((page: number, isCurrent: boolean) => string)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Y.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(e){}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function W(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var H={title:"Blocks/Pagination",component:Y,parameters:K({},u.tW,u.nB)},J={render:function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,l.useArgs)(),2)[1];return(0,a.jsx)(Y,W(K({},e),{onChange:function(e){t({currentPage:e})}}))},args:{currentPage:1,boundaryCount:2,totalPages:25}};J.parameters=W(K({},J.parameters),{docs:W(K({},null===(o=J.parameters)||void 0===o?void 0:o.docs),{source:K({originalSource:"{\n  render: function Render(args) {\n    const [, updateArg] = useArgs();\n    const onPageChange = (page: number) => {\n      updateArg({\n        currentPage: page\n      });\n    };\n    return <Pagination {...args} onChange={onPageChange} />;\n  },\n  args: {\n    currentPage: 1,\n    boundaryCount: 2,\n    totalPages: 25\n  }\n}"},null===(i=J.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/helpers/range.ts":function(e,t,n){function o(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=e<t?1:-1,r=Array(Math.ceil((Math.abs(e-t)+1)/n)),i=0;i<r.length;i++)r[i]=e+i*n*o;return r}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e>t?[]:o(e,t,n)}n.d(t,{C:function(){return r},w:function(){return o}})}}]);