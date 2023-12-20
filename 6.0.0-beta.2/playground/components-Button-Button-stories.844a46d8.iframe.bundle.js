"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1747],{"./src/components/Button/Button.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>v,__namedExportsOrder:()=>y,default:()=>f});var o=n("../../node_modules/react/index.js"),r=n("../../tools/storybook-addon-cartesian/src/index.tsx"),i=n("../../node_modules/@vkontakte/icons-sprite/dist/index.js"),a=(0,i.De)("Icon12Add","add_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 12" id="add_12"><path d="M6.75 1.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z" /></symbol>',12,12,!1,void 0),l=n("../../node_modules/@vkontakte/icons/dist/es6/16/add_16.js"),s=n("../../node_modules/@vkontakte/icons/dist/es6/24/add_24.js"),u=(0,i.De)("Icon12Tag","tag_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="tag_12"><path fill="currentColor" d="M2.918 1C1.858 1 1 1.846 1 2.89v2.402c0 .802.323 1.572.899 2.139l4.073 4.015a1.937 1.937 0 0 0 2.712 0l2.642-2.604a2.246 2.246 0 0 0 0-3.208L7.524 1.886A3.09 3.09 0 0 0 5.354 1zM4.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" /></symbol>',12,12,!1,void 0),c=n("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js"),d=n("./src/storybook/constants.ts"),p=n("./src/components/Counter/Counter.tsx"),m=n("./src/components/Button/Button.tsx");let f={title:"Blocks/Button",component:m.z,parameters:d.tW,argTypes:{before:{control:!1},after:{control:!1},addBefore:{control:{type:"boolean"}},addAfter:{control:{type:"boolean"}}},decorators:[r.nW]};var v={render:function(e){var t=e.addBefore,n=e.addAfter,r=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["addBefore","addAfter"]),i=t&&("s"===r.size?o.createElement(a,null):"m"===r.size?o.createElement(l.n,null):o.createElement(s.n,null)),d=n&&("s"===r.size?o.createElement(u,null):"m"===r.size?o.createElement(c.o,null):o.createElement(p.A,null,"16"));return o.createElement(m.z,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},r),{before:i,after:d}))},args:{children:"Button",size:"s"}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{\n  render: ({\n    addBefore,\n    addAfter,\n    ...args\n  }) => {\n    const buttonBefore = addBefore && (args.size === 's' ? <Icon12Add /> : args.size === 'm' ? <Icon16Add /> : <Icon24Add />);\n    const buttonAfter = addAfter && (args.size === 's' ? <Icon12Tag /> : args.size === 'm' ? <Icon24ChevronCompactRight /> : <Counter>16</Counter>);\n    return <Button {...args} before={buttonBefore} after={buttonAfter} />;\n  },\n  args: {\n    children: 'Button',\n    size: 's'\n  }\n}",...v.parameters?.docs?.source}}};let y=["Playground"]},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,t,n)=>{n.d(t,{o:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Counter/Counter.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,`.Counter--cWvTf{align-items:center;box-sizing:border-box;display:flex;justify-content:center;padding-left:5px;padding-right:5px;text-align:center}.Counter--mode-primary--DL8JD{background:var(--vkui--color_background_accent);color:var(--vkui--color_text_contrast)}.Counter--mode-secondary--Ki0s6{background:var(--vkui--color_icon_secondary);color:var(--vkui--color_text_contrast_themed)}.Counter--mode-prominent--TUi0a{background:var(--vkui--color_accent_red);color:var(--vkui--color_text_contrast)}.Counter--mode-contrast--INnF0{background:var(--vkui--color_background_content);color:var(--vkui--color_text_accent_themed)}.Counter--size-m--VFSgi{border-radius:12px;height:24px;min-width:24px}.Counter--size-s--mWdyb{border-radius:9px;height:18px;min-width:18px}.Counter--mode-inherit--SxeoK{background-color:var(
    --vkui_internal--counter_inherit_background,var(--vkui--color_icon_secondary)
  );color:var(--vkui_internal--counter_inherit_color,var(--vkui--color_text_contrast_themed))}.vkuiInternalPanelHeaderButton .Counter--cWvTf{padding:0;position:absolute;right:2px;top:8px}.vkuiInternalTabbarItem__label .Counter--cWvTf{position:absolute;right:-9px;top:-2px}`,""]),a.locals={Counter:"Counter--cWvTf","Counter--mode-primary":"Counter--mode-primary--DL8JD","Counter--mode-secondary":"Counter--mode-secondary--Ki0s6","Counter--mode-prominent":"Counter--mode-prominent--TUi0a","Counter--mode-contrast":"Counter--mode-contrast--INnF0","Counter--size-m":"Counter--size-m--VFSgi","Counter--size-s":"Counter--size-s--mWdyb","Counter--mode-inherit":"Counter--mode-inherit--SxeoK"};let l=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Caption/Caption.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,".Caption--caps--hL0Xn{text-transform:uppercase}.Caption--level-1--rEY2G{font-family:var(--vkui--font_caption1--font_family--regular);font-size:var(--vkui--font_caption1--font_size--regular);font-weight:var(--vkui--font_caption1--font_weight--regular);line-height:var(--vkui--font_caption1--line_height--regular)}.Caption--level-1--rEY2G.Caption--caps--hL0Xn{font-family:var(--vkui--font_caption1_caps--font_family--regular);font-size:var(--vkui--font_caption1_caps--font_size--regular);font-weight:var(--vkui--font_caption1_caps--font_weight--regular);line-height:var(--vkui--font_caption1_caps--line_height--regular)}.Caption--level-2--HNUmL{font-family:var(--vkui--font_caption2--font_family--regular);font-size:var(--vkui--font_caption2--font_size--regular);font-weight:var(--vkui--font_caption2--font_weight--regular);line-height:var(--vkui--font_caption2--line_height--regular)}.Caption--level-2--HNUmL.Caption--caps--hL0Xn{font-family:var(--vkui--font_caption2_caps--font_family--regular);font-size:var(--vkui--font_caption2_caps--font_size--regular);font-weight:var(--vkui--font_caption2_caps--font_weight--regular);line-height:var(--vkui--font_caption2_caps--line_height--regular)}.Caption--level-3--xTTp4{font-family:var(--vkui--font_caption3--font_family--regular);font-size:var(--vkui--font_caption3--font_size--regular);font-weight:var(--vkui--font_caption3--font_weight--regular);line-height:var(--vkui--font_caption3--line_height--regular)}.Caption--level-3--xTTp4.Caption--caps--hL0Xn{font-family:var(--vkui--font_caption3_caps--font_family--regular);font-size:var(--vkui--font_caption3_caps--font_size--regular);font-weight:var(--vkui--font_caption3_caps--font_weight--regular);line-height:var(--vkui--font_caption3_caps--line_height--regular)}",""]),a.locals={"Caption--caps":"Caption--caps--hL0Xn","Caption--level-1":"Caption--level-1--rEY2G","Caption--level-2":"Caption--level-2--HNUmL","Caption--level-3":"Caption--level-3--xTTp4"};let l=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,".Headline--level-1--qhWG1{font-family:var(--vkui--font_headline1--font_family--regular);font-size:var(--vkui--font_headline1--font_size--regular);font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:var(--vkui--font_headline2--font_family--regular);font-size:var(--vkui--font_headline2--font_size--regular);font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}}",""]),a.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"};let l=a},"./src/components/Counter/Counter.tsx":(e,t,n)=>{n.d(t,{A:()=>j});var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/components/Typography/Caption/Caption.tsx"),a=n("./src/components/Typography/Headline/Headline.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(l),u=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(u),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=n.n(d),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(m),v=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(v),g=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Counter/Counter.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=f(),_.insert=p().bind(null,"head"),_.domAPI=c(),_.insertStyleElement=y(),s()(g.Z,_);let h=g.Z&&g.Z.locals?g.Z.locals:void 0;var b={secondary:h["Counter--mode-secondary"],primary:h["Counter--mode-primary"],prominent:h["Counter--mode-prominent"],contrast:h["Counter--mode-contrast"],inherit:h["Counter--mode-inherit"]},C={s:h["Counter--size-s"],m:h["Counter--size-m"]},j=function(e){var t=e.mode,n=e.size,l=void 0===n?"m":n,s=e.children,u=e.className,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["mode","size","children","className"]);if(0===o.Children.count(s))return null;var d="s"===l?i.Y:a.s;return o.createElement(d,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},c),{Component:"span",className:(0,r.AK)("vkuiInternalCounter",h.Counter,b[void 0===t?"inherit":t],C[l],u),level:"s"===l?"1":"2"}),s)};try{j.displayName="Counter",j.__docgenInfo={description:"",displayName:"Counter",props:{mode:{defaultValue:{value:"inherit"},description:"Тип счетчика.  В режиме `inherit` если компонент находится в кнопке, то\nцвета зависят от кнопки. Если компонент находится вне кнопки, применяется\nрежим `secondary`",name:"mode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"secondary"'},{value:'"primary"'},{value:'"prominent"'},{value:'"contrast"'}]}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.tsx#Counter"]={docgenInfo:j.__docgenInfo,name:"Counter",path:"src/components/Counter/Counter.tsx#Counter"})}catch(e){}},"./src/components/Typography/Caption/Caption.tsx":(e,t,n)=>{n.d(t,{Y:()=>b});var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/components/Typography/Typography.tsx"),a=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(a),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=n.n(s),c=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=n.n(c),p=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=n.n(p),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=n.n(f),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Caption/Caption.module.css"),g={attributes:{class:"vkui-style"}};g.setAttributes=m(),g.insert=d().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=v(),l()(y.Z,g);let _=y.Z&&y.Z.locals?y.Z.locals:void 0;var h={1:_["Caption--level-1"],2:_["Caption--level-2"],3:_["Caption--level-3"]},b=function(e){var t=e.className,n=e.level,a=e.caps,l=e.Component,s=e.normalize,u=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","level","caps","Component","normalize"]);return o.createElement(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===l?"span":l,normalize:void 0===s||s,className:(0,r.AK)(t,a&&_["Caption--caps"],h[void 0===n?"1":n])},u))};try{b.displayName="Caption",b.__docgenInfo={description:"Используется для мелких подписей.",displayName:"Caption",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Caption/Caption.tsx#Caption"]={docgenInfo:b.__docgenInfo,name:"Caption",path:"src/components/Typography/Caption/Caption.tsx#Caption"})}catch(e){}},"./src/components/Typography/Headline/Headline.tsx":(e,t,n)=>{n.d(t,{s:()=>O});var o=n("../../node_modules/react/index.js"),r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/hooks/useAdaptivity.ts"),a=n("./src/components/Typography/Typography.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(l),u=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(u),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=n.n(d),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(m),v=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(v),g=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=f(),_.insert=p().bind(null,"head"),_.domAPI=c(),_.insertStyleElement=y(),s()(g.Z,_);let h=g.Z&&g.Z.locals?g.Z.locals:void 0;function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C={1:h["Headline--level-1"],2:h["Headline--level-2"]},j=b({none:h["Headline--sizeY-none"]},"compact",h["Headline--sizeY-compact"]),O=function(e){var t=e.className,n=e.weight,l=e.level,s=e.Component,u=e.normalize,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","weight","level","Component","normalize"]),d=(0,i.g)().sizeY,p=void 0===d?"none":d;return o.createElement(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){b(e,t,n[t])})}return e}({Component:void 0===s?"span":s,normalize:void 0===u||u,weight:void 0===n?"3":n,className:(0,r.AK)(t,"regular"!==p&&j[p],C[void 0===l?"1":l])},c))};try{O.displayName="Headline",O.__docgenInfo={description:"Используется для подзаголовков.",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:O.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(e){}}}]);