"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7712,3778],{"./src/components/Tabbar/Tabbar.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>v,__namedExportsOrder:()=>_,default:()=>b});var o=n("../../node_modules/react/index.js"),a=n("../../node_modules/@vkontakte/icons/dist/es6/28/newsfeed_outline_28.js"),r=n("../../node_modules/@vkontakte/icons/dist/es6/28/services_outline_28.js"),l=n("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),i=n("../../node_modules/@vkontakte/icons/dist/es6/28/clip_outline_28.js"),s=n("../../node_modules/@vkontakte/icons/dist/es6/28/user_circle_outline_28.js"),d=n("./src/storybook/VKUIDecorators.tsx"),c=n("./src/storybook/constants.ts"),u=n("./src/components/Badge/Badge.tsx"),p=n("./src/components/Counter/Counter.tsx"),m=n("./src/components/TabbarItem/TabbarItem.tsx"),f=n("./src/components/Tabbar/Tabbar.tsx");function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}let b={title:"Layout/Tabbar",component:f.E,parameters:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},c.tW,c.nB),decorators:[d.Z0]};var v={render:function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==a.return||a.return()}finally{if(i)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.useState("profile"),2),n=t[0],d=t[1],c=function(e){return d(e.currentTarget.dataset.story)};return o.createElement(f.E,e,o.createElement(m.Q,{onClick:c,selected:"feed"===n,"data-story":"feed",text:"Новости"},o.createElement(a.O,null)),o.createElement(m.Q,{onClick:c,selected:"services"===n,"data-story":"services",text:"Сервисы"},o.createElement(r.k,null)),o.createElement(m.Q,{onClick:c,selected:"messages"===n,"data-story":"messages",indicator:o.createElement(p.A,{size:"s",mode:"prominent"},"12"),text:"Сообщения"},o.createElement(l.C,null)),o.createElement(m.Q,{onClick:c,selected:"clips"===n,"data-story":"clips",text:"Клипы"},o.createElement(i.S,null)),o.createElement(m.Q,{onClick:c,selected:"profile"===n,"data-story":"profile",indicator:o.createElement(u.C,{mode:"prominent"},"Есть обновления"),text:"Профиль"},o.createElement(s.W,null)))}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const [activeStory, setActiveStory] = React.useState<string>(\'profile\');\n    const onStoryChange = (e: React.MouseEvent<HTMLElement>) => setActiveStory(e.currentTarget.dataset.story!);\n    return <Tabbar {...args}>\n        <TabbarItem onClick={onStoryChange} selected={activeStory === \'feed\'} data-story="feed" text="Новости">\n          <Icon28NewsfeedOutline />\n        </TabbarItem>\n        <TabbarItem onClick={onStoryChange} selected={activeStory === \'services\'} data-story="services" text="Сервисы">\n          <Icon28ServicesOutline />\n        </TabbarItem>\n        <TabbarItem onClick={onStoryChange} selected={activeStory === \'messages\'} data-story="messages" indicator={<Counter size="s" mode="prominent">\n              12\n            </Counter>} text="Сообщения">\n          <Icon28MessageOutline />\n        </TabbarItem>\n        <TabbarItem onClick={onStoryChange} selected={activeStory === \'clips\'} data-story="clips" text="Клипы">\n          <Icon28ClipOutline />\n        </TabbarItem>\n        <TabbarItem onClick={onStoryChange} selected={activeStory === \'profile\'} data-story="profile" indicator={<Badge mode="prominent">Есть обновления</Badge>} text="Профиль">\n          <Icon28UserCircleOutline />\n        </TabbarItem>\n      </Tabbar>;\n  }\n}',...v.parameters?.docs?.source}}};let _=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css":(e,t,n)=>{n.d(t,{Z:()=>i});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),l=n.n(r)()(a());l.push([e.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;transition:background-color .15s ease-out;will-change:transform;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);border-radius:50%;content:"";height:24px;left:0;margin:-12px -12px 0 0;opacity:0;position:absolute;top:0;width:24px}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',""]),l.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};let i=l},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(e,t,n)=>{n.d(t,{Z:()=>i});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),l=n.n(r)()(a());l.push([e.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),l.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};let i=l},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css":(e,t,n)=>{n.d(t,{Z:()=>i});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),l=n.n(r)()(a());l.push([e.id,".Headline--level-1--qhWG1{font-family:var(--vkui--font_headline1--font_family--regular);font-size:var(--vkui--font_headline1--font_size--regular);font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:var(--vkui--font_headline2--font_family--regular);font-size:var(--vkui--font_headline2--font_size--regular);font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}}",""]),l.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"};let i=l},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(e,t,n)=>{n.d(t,{Z:()=>i});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),l=n.n(r)()(a());l.push([e.id,".VisuallyHidden--bAIOu{height:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}",""]),l.locals={VisuallyHidden:"VisuallyHidden--bAIOu"};let i=l},"./src/components/Tappable/Tappable.tsx":(e,t,n)=>{n.d(t,{K:()=>V}),n("./src/components/Clickable/Clickable.module.css");var o=n("../../node_modules/react/index.js"),a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),l=n("./src/lib/adaptivity/constants.ts"),i=n("./src/lib/mergeCalls.ts"),s=n("./src/components/Clickable/Clickable.tsx"),d=n("./src/hooks/usePlatform.ts"),c=n("./src/hooks/useTimeout.ts"),u=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=n.n(u),m=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=n.n(m),y=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),b=n.n(y),v=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_=n.n(v),h=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=n.n(h),T=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css"),S={attributes:{class:"vkui-style"}};S.setAttributes=_(),S.insert=b().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=g(),p()(T.Z,S);let O=T.Z&&T.Z.locals?T.Z.locals:void 0;function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function k(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}}var C=function(e,t){return"android"===(0,d.F)()&&!t&&"background"===e},E=function(e,t){var n=function(e,t,n){var o=Date.now();i((function(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(l.filter(function(e){return e.id+225>o})).concat([{x:e,y:t,id:o,pointerId:n}])),d.set(),s.delete(n)},r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==a.return||a.return()}finally{if(i)throw o}}return r}}(e,t)||k(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.useState([]),2),l=r[0],i=r[1],s=o.useMemo(function(){return new Map},[]),d=(0,c.K)(function(){return i([])},225),u=(!a.RX||!1===t)&&e;return{clicks:l,onPointerDown:u?function(e){var t=function(e){var t=null==e?void 0:e.getBoundingClientRect();return{top:null==t?void 0:t.top,left:null==t?void 0:t.left,width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight}}(e.currentTarget),o=t.top,a=t.left,r=e.clientX-(null!=a?a:0),l=e.clientY-(null!=o?o:0);s.set(e.pointerId,setTimeout(function(){return n(r,l,e.pointerId)},70))}:a.ZT,onPointerCancel:u?function(e){clearTimeout(s.get(e.pointerId)),s.delete(e.pointerId)}:a.ZT}},R=function(e){var t=e.needRipple,n=e.clicks;return o.createElement("span",{"aria-hidden":!0,className:(0,a.AK)(O.Tappable__stateLayer,(void 0===t||t)&&O.Tappable__ripple)},n.map(function(e){return o.createElement("span",{key:e.id,className:O.Tappable__wave,style:{top:e.y,left:e.x}})}))};try{C.displayName="useMaybeNeedRipple",C.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:C.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(e){}try{E.displayName="useRipple",E.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:E.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(e){}try{R.displayName="Ripple",R.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:R.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(e){}var A="background",I={background:O["Tappable--hovered-background"],opacity:O["Tappable--hovered-opacity"],none:""};function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=I[e];return void 0!==t?t:e}var x={background:O["Tappable--activated-background"],opacity:O["Tappable--activated-opacity"],none:""};function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=x[e];return void 0!==t?t:e}try{w.displayName="hoverClass",w.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:w.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(e){}try{H.displayName="activeClass",H.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:H.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(e){}try{A.displayName="DEFAULT_STATE_MODE",A.__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:A.__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(e){}function P(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N={none:O["Tappable--sizeX-none"],compact:O["Tappable--sizeX-compact"]},V=function(e){var t=e.baseClassName,n=e.borderRadiusMode,d=e.children,c=e.hoverMode,u=void 0===c?A:c,p=e.activeMode,m=void 0===p?A:p,f=e.onPointerDown,y=e.onPointerCancel,b=P(e,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]),v=(0,s.T)(b),_=(0,r.g)(),h=_.sizeX,g=void 0===h?"none":h,T=_.hasPointer,S=C(m,T),j=E(S,T),k=j.clicks,I=P(j,["clicks"]),x=(0,i.O)(I,{onPointerDown:f,onPointerCancel:y});return o.createElement(s.P,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({baseClassName:(0,a.AK)(t,O.Tappable,g!==l.n$.REGULAR&&N[g],"inherit"===(void 0===n?"auto":n)&&O["Tappable--borderRadiusInherit"],function(e){switch(e){case void 0:return O["Tappable--hasPointer-none"];case!1:return O["Tappable--hasPointer-false"]}}(T)),hoverClassName:w(u),activeClassName:H(m)},x,b),d,v&&("background"===u||"background"===m)&&o.createElement(R,{needRipple:S,clicks:k}))};try{V.displayName="Tappable",V.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:V.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":(e,t,n)=>{n.d(t,{w:()=>h});var o=n("../../node_modules/react/index.js"),a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/components/Typography/Typography.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(l),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=n.n(s),c=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),u=n.n(c),p=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=n.n(p),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(f),b=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=m(),v.insert=u().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=y(),i()(b.Z,v);let _=b.Z&&b.Z.locals?b.Z.locals:void 0;var h=function(e){var t=e.className,n=e.caps,l=e.Component,i=e.normalize,s=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["className","caps","Component","normalize"]);return o.createElement(r.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===l?"span":l,normalize:void 0===i||i,className:(0,a.AK)(t,_.Footnote,n&&_["Footnote--caps"])},s))};try{h.displayName="Footnote",h.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:h.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/components/Typography/Headline/Headline.tsx":(e,t,n)=>{n.d(t,{s:()=>O});var o=n("../../node_modules/react/index.js"),a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),l=n("./src/components/Typography/Typography.tsx"),i=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(i),d=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(d),u=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=n.n(u),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(m),y=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=n.n(y),v=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=f(),_.insert=p().bind(null,"head"),_.domAPI=c(),_.insertStyleElement=b(),s()(v.Z,_);let h=v.Z&&v.Z.locals?v.Z.locals:void 0;function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T={1:h["Headline--level-1"],2:h["Headline--level-2"]},S=g({none:h["Headline--sizeY-none"]},"compact",h["Headline--sizeY-compact"]),O=function(e){var t=e.className,n=e.weight,i=e.level,s=e.Component,d=e.normalize,c=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["className","weight","level","Component","normalize"]),u=(0,r.g)().sizeY,p=void 0===u?"none":u;return o.createElement(l.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){g(e,t,n[t])})}return e}({Component:void 0===s?"span":s,normalize:void 0===d||d,weight:void 0===n?"3":n,className:(0,a.AK)(t,"regular"!==p&&S[p],T[void 0===i?"1":i])},c))};try{O.displayName="Headline",O.__docgenInfo={description:"Используется для подзаголовков.",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:O.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(e){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(e,t,n)=>{n.d(t,{T:()=>_});var o=n("../../node_modules/react/index.js"),a=n("./src/components/RootComponent/RootComponent.tsx"),r=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(r),i=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),s=n.n(i),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(d),u=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(u),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=n.n(m),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=f(),l()(y.Z,b);let v=y.Z&&y.Z.locals?y.Z.locals:void 0;var _=function(e){var t=e.Component,n=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["Component"]);return o.createElement(a.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===t?"span":t},n),{baseClassName:v.VisuallyHidden}))};try{_.displayName="VisuallyHidden",_.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:_.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}}}]);