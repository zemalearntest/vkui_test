"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2753,9495],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){n.d(t,{De:function(){return b}});var o,r=n("../../node_modules/@swc/helpers/esm/_object_spread.js");function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var l=n("../../node_modules/react/index.js"),a=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),s=n("../../node_modules/@swc/helpers/esm/_create_class.js"),u=n("../../node_modules/@swc/helpers/esm/_define_property.js"),d=function(){function e(t){var n=t.content;(0,a._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,s._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),c="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:c,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,s._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=d.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(c,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var f="__SVG_SPRITE_NODE__";o=new m({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else o=null;var y=p?l.useLayoutEffect:l.useEffect,h=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,a=void 0===o?0:o,s=e.viewBox,u=e.id,d=e.className,c=e.fill,m=e.getRootRef,p=e.style,f=e.title,v=e.children,y=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),h=(0,r._)({width:n,height:a},void 0===p?{}:p);return l.createElement("svg",i((0,r._)({"aria-hidden":"true",display:"block"},y),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,a)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(a),"vkuiIcon--".concat(u),void 0===d?"":d].join(" ").trim(),viewBox:s,width:n,height:a,style:h,ref:m}),f&&l.createElement("title",null,f),l.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:c}},v))};function b(e,t,n,a,s,u,c,m){var p=function(){f||(!function(e){o&&o.add(e)}(new d({content:a})),f=!0)},f=!1,v=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),b=function(e){return y(p,[]),c&&v("Иконка устарела"+(m?". Замените на ".concat(m):"")),l.createElement(h,i((0,r._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return b.mountIcon=p,b.displayName=e,b}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,t,n){n.d(t,{r:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":function(e,t,n){n.d(t,{o:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":function(e,t,n){n.d(t,{P:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CellButton/CellButton.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),l=n.n(i)()(r());l.push([e.id,".CellButton--CQtgU{background:transparent;border:0;box-sizing:border-box;cursor:pointer;margin:0;padding-bottom:0;padding-top:0;text-align:left;text-decoration:none;width:100%}.vkuiInternalFormItem .CellButton--CQtgU{box-sizing:initial;margin:0 calc(-1 * 16px);margin:0 calc(-1 * var(--vkui--size_base_padding_horizontal--regular));width:100%}.CellButton--CQtgU[disabled]{opacity:.4}.CellButton--centered--D3Sgc{justify-content:center;text-align:center}.CellButton--centered--D3Sgc>*{flex-grow:0;max-width:none}.CellButton--centered--D3Sgc .vkuiIcon{padding-right:8px}.CellButton--CQtgU{color:#2688eb;color:var(--vkui--color_text_accent)}.CellButton--CQtgU .vkuiIcon{color:#2688eb;color:var(--vkui--color_icon_accent)}.CellButton--mode-danger--lHkB0{color:#e64646;color:var(--vkui--color_text_negative)}.CellButton--mode-danger--lHkB0 .vkuiIcon{color:#e64646;color:var(--vkui--color_icon_negative)}",""]),l.locals={CellButton:"CellButton--CQtgU","CellButton--centered":"CellButton--centered--D3Sgc","CellButton--mode-danger":"CellButton--mode-danger--lHkB0"},t.Z=l},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),l=n.n(i)()(r());l.push([e.id,".Footnote--TsLLT{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),l.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"},t.Z=l},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/CellButton/CellButton.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return m}});var o,r,i,l=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var a=n("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js"),s=n("./src/storybook/constants.ts");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var c={title:"Blocks/CellButton",component:n("./src/components/CellButton/CellButton.tsx").S,parameters:u({},s.tW,s.nB)};t.default=c;var m={args:{children:"Создать беседу",before:(0,l.jsx)(a.P,{})}};m.parameters=d(u({},m.parameters),{docs:d(u({},null===(o=m.parameters)||void 0===o?void 0:o.docs),{source:u({originalSource:"{\n  args: {\n    children: 'Создать беседу',\n    before: <Icon28AddOutline />\n  }\n}"},null===(i=m.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/components/CellButton/CellButton.tsx":function(e,t,n){n.d(t,{S:function(){return g}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/components/SimpleCell/SimpleCell.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(l),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=n.n(s),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(d),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(m),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=n.n(f),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CellButton/CellButton.module.css"),h={attributes:{class:"vkui-style"}};h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=v(),a()(y.Z,h);var b=y.Z&&y.Z.locals?y.Z.locals:void 0,g=function(e){var t=e.centered,n=void 0!==t&&t,l=e.mode,a=void 0===l?"primary":l,s=e.className,u=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["centered","mode","className"]);return(0,o.jsx)(i.q,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({stopPropagation:!0},u),{className:(0,r.AK)(b.CellButton,"vkuiInternalCellButton","danger"===a&&(0,r.AK)(b["CellButton--mode-danger"],"vkuiInternalCellButton--mode-danger"),n&&b["CellButton--centered"],s)}))};try{g.displayName="CellButton",g.__docgenInfo={description:"",displayName:"CellButton",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'}]}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},expandable:{defaultValue:null,description:"В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.",name:"expandable",required:!1,type:{name:'boolean | "auto" | "always"'}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CellButton/CellButton.tsx#CellButton"]={docgenInfo:g.__docgenInfo,name:"CellButton",path:"src/components/CellButton/CellButton.tsx#CellButton"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":function(e,t,n){n.d(t,{w:function(){return g}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/components/Typography/Typography.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(l),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=n.n(s),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(d),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(m),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=n.n(f),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),h={attributes:{class:"vkui-style"}};h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=v(),a()(y.Z,h);var b=y.Z&&y.Z.locals?y.Z.locals:void 0,g=function(e){var t=e.className,n=e.caps,l=e.Component,a=e.normalize,s=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","caps","Component","normalize"]);return(0,o.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===l?"span":l,normalize:void 0===a||a,className:(0,r.AK)(t,b.Footnote,n&&b["Footnote--caps"])},s))};try{g.displayName="Footnote",g.__docgenInfo={description:"",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:g.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}}}]);