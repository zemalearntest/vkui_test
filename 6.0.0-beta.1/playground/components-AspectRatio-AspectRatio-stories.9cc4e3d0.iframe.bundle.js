"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3779],{"./src/components/AspectRatio/AspectRatio.stories.tsx":(e,t,o)=>{o.r(t),o.d(t,{Playground:()=>L,WithModeNone:()=>N,__namedExportsOrder:()=>W,default:()=>H});var s,n,r,i,l,a,c=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var d=o("./src/storybook/VKUIDecorators.tsx"),u=o("./src/storybook/constants.ts"),p=o("./src/components/Div/Div.tsx"),m=o("./src/components/Group/Group.tsx"),y=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),v=o("./src/components/RootComponent/RootComponent.tsx"),f=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=o.n(f),g=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),b=o.n(g),O=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_=o.n(O),h=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),R=o.n(h),S=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=o.n(S),D=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/AspectRatio/AspectRatio.module.css"),x={attributes:{class:"vkui-style"}};x.setAttributes=R(),x.insert=_().bind(null,"head"),x.domAPI=b(),x.insertStyleElement=A(),j()(D.Z,x);let P=D.Z&&D.Z.locals?D.Z.locals:void 0;function k(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){k(e,t,o[t])})}return e}function T(e){var t=e.ratio,o=e.mode,s=e.style,n=function(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["ratio","mode","style"]),r=k({},"--vkui_internal--aspect_ratio",String(t));return(0,c.jsx)(v.U,w({baseClassName:(0,y.AK)(P.AspectRatio,"stretch"===(void 0===o?"stretch":o)&&P["AspectRatio--mode-stretch"]),style:w({},s,r)},n))}try{T.displayName="AspectRatio",T.__docgenInfo={description:"`AspectRatio` позволяет поддерживать постоянное соотношение ширины и высоты.\nЕго можно использовать для отображения изображений, карт, видео и других медиафайлов.",displayName:"AspectRatio",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"stretch"},description:"По умолчанию, вложенный контент будет растягиваться и заполнять весь блок.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"stretch"'}]}},ratio:{defaultValue:null,description:"Например 16 / 9, 4 / 3, 1920 / 1080",name:"ratio",required:!0,type:{name:"number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AspectRatio/AspectRatio.tsx#AspectRatio"]={docgenInfo:T.__docgenInfo,name:"AspectRatio",path:"src/components/AspectRatio/AspectRatio.tsx#AspectRatio"})}catch(e){}function E(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function C(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,s)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}let H={title:"Layout/AspectRatio",component:T,parameters:u.tW,argTypes:{ratio:{control:{type:"select"},options:["16/9","1/1","3/4","None"],mapping:{None:16/9,"1/1":1,"3/4":3/4,"16/9":16/9}}}};var L={args:{children:(0,c.jsx)("img",{loading:"lazy",alt:"Лаунж зона в розовом неоне",src:"https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"}),ratio:"16/9"},decorators:[function(e,t){return(0,c.jsx)(m.Z,{children:(0,c.jsx)(p.Z,{children:(0,c.jsx)(e,E({},t.args))})})},d.vO,d.Z0]},N=C(E({},L),{args:{ratio:"16/9",mode:"none",children:(0,c.jsx)("img",{loading:"lazy",style:{height:"100%"},alt:"Лаунж зона в розовом неоне",src:"https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"})}});L.parameters=C(E({},L.parameters),{docs:C(E({},null===(s=L.parameters)||void 0===s?void 0:s.docs),{source:E({originalSource:'{\n  args: {\n    children: <img loading="lazy" alt="Лаунж зона в розовом неоне" src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg" />,\n    ratio: \'16/9\'\n  },\n  decorators: [(Component, context) => <Group>\n        <Div>\n          <Component {...context.args} />\n        </Div>\n      </Group>, withSinglePanel, withVKUILayout]\n}'},null===(r=L.parameters)||void 0===r?void 0:null===(n=r.docs)||void 0===n?void 0:n.source)})}),N.parameters=C(E({},N.parameters),{docs:C(E({},null===(i=N.parameters)||void 0===i?void 0:i.docs),{source:E({originalSource:"{\n  ...Playground,\n  args: {\n    ratio: '16/9',\n    mode: 'none',\n    children: <img loading=\"lazy\" style={{\n      height: '100%'\n    }} alt=\"Лаунж зона в розовом неоне\" src=\"https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg\" />\n  }\n}"},null===(a=N.parameters)||void 0===a?void 0:null===(l=a.docs)||void 0===l?void 0:l.source)})});let W=["Playground","WithModeNone"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/AspectRatio/AspectRatio.module.css":(e,t,o)=>{o.d(t,{Z:()=>l});var s=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(s),r=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(r)()(n());i.push([e.id,'.AspectRatio--siH29{--vkui_internal--aspect_ratio:1;max-width:100%;position:relative}.AspectRatio--siH29:before{content:"";display:block;height:0;padding-bottom:calc((1 / var(--vkui_internal--aspect_ratio, 1)) * 100%)}.AspectRatio--siH29>*{left:0;position:absolute;top:0}.AspectRatio--mode-stretch--y6iWy>*{height:100%;width:100%}.AspectRatio--mode-stretch--y6iWy>img,.AspectRatio--mode-stretch--y6iWy>video{object-fit:cover}',""]),i.locals={AspectRatio:"AspectRatio--siH29","AspectRatio--mode-stretch":"AspectRatio--mode-stretch--y6iWy"};let l=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Div/Div.module.css":(e,t,o)=>{o.d(t,{Z:()=>l});var s=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(s),r=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(r)()(n());i.push([e.id,".Div--jWBVN{padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}",""]),i.locals={Div:"Div--jWBVN"};let l=i},"./src/components/Div/Div.tsx":(e,t,o)=>{o.d(t,{Z:()=>g});var s=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var n=o("./src/components/RootComponent/RootComponent.tsx"),r=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=o.n(r),l=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),a=o.n(l),c=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=o.n(c),u=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=o.n(u),m=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(m),v=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Div/Div.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=p(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=y(),i()(v.Z,f);let j=v.Z&&v.Z.locals?v.Z.locals:void 0;var g=function(e){return(0,s.jsx)(n.U,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({baseClassName:j.Div},e))};try{g.displayName="Div",g.__docgenInfo={description:"",displayName:"Div",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Div/Div.tsx#Div"]={docgenInfo:g.__docgenInfo,name:"Div",path:"src/components/Div/Div.tsx#Div"})}catch(e){}},"./src/storybook/constants.ts":(e,t,o)=>{o.d(t,{R0:()=>r,nB:()=>n,tW:()=>s});var s={layout:"fullscreen",centered:!0},n={cartesian:{disable:!0}},r={control:{type:"text"}}}}]);