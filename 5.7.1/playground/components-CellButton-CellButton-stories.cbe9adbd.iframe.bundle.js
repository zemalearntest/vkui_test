"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2753],{"../../node_modules/@vkontakte/icons/dist/es6/16/chevron.js":function(e,t,n){n.d(t,{r:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right.js":function(e,t,n){n.d(t,{o:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline.js":function(e,t,n){n.d(t,{P:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CellButton/CellButton.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),l=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(l)()(r());i.push([e.id,".CellButton--CQtgU{background:transparent;border:0;box-sizing:border-box;cursor:pointer;margin:0;padding-bottom:0;padding-top:0;text-align:left;text-decoration:none;width:100%}.vkuiInternalFormItem .CellButton--CQtgU{box-sizing:initial;margin:0 calc(-1 * 16px);margin:0 calc(-1 * var(--vkui--size_base_padding_horizontal--regular));width:100%}.CellButton--CQtgU[disabled]{opacity:.4}.CellButton--centered--D3Sgc{justify-content:center;text-align:center}.CellButton--centered--D3Sgc .vkuiInternalSimpleCell__main{flex-grow:0;max-width:none}.CellButton--centered--D3Sgc>.vkuiIcon{padding-right:8px}.CellButton--CQtgU{color:#2688eb;color:var(--vkui--color_text_accent)}.CellButton--CQtgU>.vkuiIcon{color:#2688eb;color:var(--vkui--color_icon_accent)}.CellButton--mode-danger--lHkB0{color:#e64646;color:var(--vkui--color_text_negative)}.CellButton--mode-danger--lHkB0>.vkuiIcon{color:#e64646;color:var(--vkui--color_icon_negative)}",""]),i.locals={CellButton:"CellButton--CQtgU","CellButton--centered":"CellButton--centered--D3Sgc","CellButton--mode-danger":"CellButton--mode-danger--lHkB0"},t.Z=i},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/CellButton/CellButton.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return m}});var o,r,l,i=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var a=n("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline.js"),u=n("./src/storybook/constants.ts");function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var c={title:"Blocks/CellButton",component:n("./src/components/CellButton/CellButton.tsx").S,parameters:d({},u.tW,u.nB)};t.default=c;var m={args:{children:"Создать беседу",before:(0,i.jsx)(a.P,{})}};m.parameters=s(d({},m.parameters),{docs:s(d({},null===(o=m.parameters)||void 0===o?void 0:o.docs),{source:d({originalSource:"{\n  args: {\n    children: 'Создать беседу',\n    before: <Icon28AddOutline />\n  }\n}"},null===(l=m.parameters)||void 0===l?void 0:null===(r=l.docs)||void 0===r?void 0:r.source)})})},"./src/components/CellButton/CellButton.tsx":function(e,t,n){n.d(t,{S:function(){return h}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=n("./src/components/SimpleCell/SimpleCell.tsx"),i=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(i),u=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=n.n(u),s=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(s),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(m),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=n.n(f),b=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CellButton/CellButton.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=p(),y.insert=c().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=v(),a()(b.Z,y);var g=b.Z&&b.Z.locals?b.Z.locals:void 0,h=function(e){var t=e.centered,n=void 0!==t&&t,i=e.mode,a=void 0===i?"primary":i,u=e.className,d=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["centered","mode","className"]);return(0,o.jsx)(l.q,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({stopPropagation:!0},d),{className:(0,r.AK)(g.CellButton,"vkuiInternalCellButton","danger"===a&&(0,r.AK)(g["CellButton--mode-danger"],"vkuiInternalCellButton--mode-danger"),n&&g["CellButton--centered"],u)}))};try{h.displayName="CellButton",h.__docgenInfo={description:"",displayName:"CellButton",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'}]}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},expandable:{defaultValue:null,description:"В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.",name:"expandable",required:!1,type:{name:'boolean | "auto" | "always"'}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CellButton/CellButton.tsx#CellButton"]={docgenInfo:h.__docgenInfo,name:"CellButton",path:"src/components/CellButton/CellButton.tsx#CellButton"})}catch(e){}}}]);