"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1037,7518],{"./src/components/Card/Card.stories.tsx":(r,e,t)=>{t.r(e),t.d(e,{Playground:()=>p,__namedExportsOrder:()=>v,default:()=>c});var n,o,a,i=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var d=t("./src/storybook/VKUIDecorators.tsx"),s=t("./src/storybook/constants.ts");function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(e){!function(r,e,t){e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t}(r,e,t[e])})}return r}function u(r,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):(function(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t})(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}),r}let c={title:"Blocks/Card",component:t("./src/components/Card/Card.tsx").Z,parameters:l({},s.tW,s.nB),decorators:[d.vO,d.Z0]};var p={args:{children:(0,i.jsx)("div",{style:{height:96}})}};p.parameters=u(l({},p.parameters),{docs:u(l({},null===(n=p.parameters)||void 0===n?void 0:n.docs),{source:l({originalSource:"{\n  args: {\n    children: <div style={{\n      height: 96\n    }} />\n  }\n}"},null===(a=p.parameters)||void 0===a?void 0:null===(o=a.docs)||void 0===o?void 0:o.source)})});let v=["Playground"]},"./src/components/CardGrid/CardGrid.stories.tsx":(r,e,t)=>{t.r(e),t.d(e,{InsideGroup:()=>W,Playground:()=>K,__namedExportsOrder:()=>N,default:()=>Z});var n,o,a,i,d,s,l=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var u=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),c=t("./src/storybook/VKUIDecorators.tsx"),p=t("./src/storybook/constants.ts"),v=t("./src/components/Card/Card.tsx"),m=t("./src/components/Card/Card.stories.tsx"),g=t("./src/components/Group/Group.tsx"),y=t("./src/hooks/useAdaptivity.ts"),b=t("./src/components/RootComponent/RootComponent.tsx"),f=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=t.n(f),j=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),O=t.n(j),h=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_=t.n(h),k=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),S=t.n(k),w=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=t.n(w),P=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CardGrid/CardGrid.module.css"),x={attributes:{class:"vkui-style"}};x.setAttributes=S(),x.insert=_().bind(null,"head"),x.domAPI=O(),x.insertStyleElement=I(),C()(P.Z,x);let z=P.Z&&P.Z.locals?P.Z.locals:void 0;function G(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var T=G({none:z["CardGrid--sizeX-none"]},"compact",z["CardGrid--sizeX-compact"]),A={s:"vkuiInternalCardGrid--size-s",m:"vkuiInternalCardGrid--size-m",l:"vkuiInternalCardGrid--size-l"},D=function(r){var e=r.size,t=r.spaced,n=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(r,["size","spaced"]),o=(0,y.g)().sizeX,a=void 0===o?"none":o;return(0,l.jsx)(b.U,function(r,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):(function(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t})(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}),r}(function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(e){G(r,e,t[e])})}return r}({},n),{baseClassName:(0,u.AK)(z.CardGrid,"vkuiInternalCardGrid",void 0!==t&&t&&z["CardGrid--spaced"],A[void 0===e?"s":e],"regular"!==a&&T[a])}))};try{D.displayName="CardGrid",D.__docgenInfo={description:"",displayName:"CardGrid",props:{size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},spaced:{defaultValue:{value:"false"},description:"Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа",name:"spaced",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardGrid/CardGrid.tsx#CardGrid"]={docgenInfo:D.__docgenInfo,name:"CardGrid",path:"src/components/CardGrid/CardGrid.tsx#CardGrid"})}catch(r){}function E(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function R(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(e){!function(r,e,t){e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t}(r,e,t[e])})}return r}function B(r,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):(function(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t})(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}),r}let Z={title:"Blocks/CardGrid",component:D,parameters:R({},p.tW,p.nB),argTypes:{count:{control:{type:"number"}}}};var K={render:function(r){var e=r.count,t=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(r,["count"]);return(0,l.jsx)(D,B(R({},t),{children:Array(e).fill(null).map(function(r,e){return(0,l.jsx)(v.Z,R({},m.Playground.args),e)})}))},args:{count:3},decorators:[c.vO,c.Z0]},W=B(R({},K),{decorators:[function(r,e){return(0,l.jsx)(g.Z,{children:(0,l.jsx)(r,R({},e.args))})}].concat(function(r){return function(r){if(Array.isArray(r))return E(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return E(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if("Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(r,e)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,u.kJ)(K.decorators)?K.decorators:[]))});K.parameters=B(R({},K.parameters),{docs:B(R({},null===(n=K.parameters)||void 0===n?void 0:n.docs),{source:R({originalSource:"{\n  render: ({\n    count,\n    ...args\n  }) => <CardGrid {...args}>\n      {Array(count).fill(null).map((_, index) => <BasicCard key={index} {...BasicCardStory.args} />)}\n    </CardGrid>,\n  args: {\n    count: 3\n  },\n  decorators: [withSinglePanel, withVKUILayout]\n}"},null===(a=K.parameters)||void 0===a?void 0:null===(o=a.docs)||void 0===o?void 0:o.source)})}),W.parameters=B(R({},W.parameters),{docs:B(R({},null===(i=W.parameters)||void 0===i?void 0:i.docs),{source:R({originalSource:"{\n  ...Playground,\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]\n}"},null===(s=W.parameters)||void 0===s?void 0:null===(d=s.docs)||void 0===d?void 0:d.source)})});let N=["Playground","InsideGroup"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Card/Card.module.css":(r,e,t)=>{t.d(e,{Z:()=>d});var n=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(n),a=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(a)()(o());i.push([r.id,`.Card--jvlT0{background:var(--vkui--color_background_secondary);border-radius:var(--vkui--size_card_border_radius--regular);position:relative}.Card--mode-shadow--_j9pa{box-shadow:var(
    --vkui--elevation3,0 2px 24px 0 rgba(0,0,0,.08),0 0 2px 0 rgba(0,0,0,.08)
  )}.Card--mode-outline--vTtkl,.Card--mode-shadow--_j9pa{background:var(--vkui--color_background_modal)}.Card--withBorder--kDVkv:after{border:var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);border-radius:inherit;box-sizing:border-box;content:"";display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.vkuiInternalCardScroll .Card--jvlT0{flex-shrink:0;margin-right:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardScroll .Card--jvlT0:last-of-type{margin-right:0}.vkuiInternalCardScroll--size-s .Card--jvlT0{width:40%}.vkuiInternalCardScroll--size-m .Card--jvlT0{width:62%}.vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:var(--vkui--size_base_padding_horizontal--regular);width:calc(100% - var(--vkui--size_base_padding_horizontal--regular) * 2)}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card--jvlT0,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:16px;width:calc(100% - 32px)}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:16px;width:calc(100% - 32px)}}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type{margin-right:0}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type{margin-right:0}}@media (min-width:768px){.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card--jvlT0:last-of-type{margin-right:0}.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card--jvlT0{margin-right:16px;width:calc(100% - 32px)}}.vkuiInternalCardGrid .Card--jvlT0{margin-right:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-l .Card--jvlT0{margin-right:0;width:100%}.vkuiInternalCardGrid--size-l .Card--jvlT0:not(:first-child){margin-top:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card--jvlT0{width:calc(50% - (var(--vkui--size_cardgrid_padding--regular) / 2))}.vkuiInternalCardGrid--size-m .Card--jvlT0:nth-child(n+3){margin-top:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card--jvlT0:nth-child(2n){margin-right:0}.vkuiInternalCardGrid--size-s .Card--jvlT0{width:calc((100% - 2 * var(--vkui--size_cardgrid_padding--regular)) / 3)}.vkuiInternalCardGrid--size-s .Card--jvlT0:nth-child(n+4){margin-top:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-s .Card--jvlT0:nth-child(3n){margin-right:0}`,""]),i.locals={Card:"Card--jvlT0","Card--mode-shadow":"Card--mode-shadow--_j9pa","Card--mode-outline":"Card--mode-outline--vTtkl","Card--withBorder":"Card--withBorder--kDVkv"};let d=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CardGrid/CardGrid.module.css":(r,e,t)=>{t.d(e,{Z:()=>d});var n=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(n),a=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(a)()(o());i.push([r.id,".CardGrid--lIvr8{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.CardGrid--spaced--ljNuk{padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}.CardGrid--sizeX-compact--RKFUL{padding-left:var(--vkui--size_base_padding_horizontal--regular);padding-right:var(--vkui--size_base_padding_horizontal--regular)}@media (max-width:767.9px){.CardGrid--sizeX-none--SpWm2{padding-left:var(--vkui--size_base_padding_horizontal--regular);padding-right:var(--vkui--size_base_padding_horizontal--regular)}}.CardGrid--lIvr8+.CardGrid--lIvr8{margin-top:calc(var(--vkui--size_cardgrid_padding_vertical--regular) * 2)}.vkuiInternalGroup--mode-card .CardGrid--lIvr8{padding-left:var(--vkui--size_base_padding_horizontal--regular);padding-right:var(--vkui--size_base_padding_horizontal--regular)}@media (min-width:768px){.vkuiInternalGroup--mode-none .CardGrid--lIvr8{padding-left:8px;padding-right:8px}}.vkuiInternalGroup .CardGrid--lIvr8:first-child{margin-top:var(--vkui--size_cardgrid_padding_vertical--regular)}.vkuiInternalGroup .CardGrid--lIvr8:last-child{margin-bottom:var(--vkui--size_cardgrid_padding_vertical--regular)}",""]),i.locals={CardGrid:"CardGrid--lIvr8","CardGrid--spaced":"CardGrid--spaced--ljNuk","CardGrid--sizeX-compact":"CardGrid--sizeX-compact--RKFUL","CardGrid--sizeX-none":"CardGrid--sizeX-none--SpWm2"};let d=i},"./src/components/Card/Card.tsx":(r,e,t)=>{t.d(e,{Z:()=>C});var n=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var o=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=t("./src/components/RootComponent/RootComponent.tsx"),i=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=t.n(i),s=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),l=t.n(s),u=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=t.n(u),p=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),v=t.n(p),m=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=t.n(m),y=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Card/Card.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=v(),b.insert=c().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),d()(y.Z,b);let f=y.Z&&y.Z.locals?y.Z.locals:void 0;var C=function(r){var e=r.mode,t=void 0===e?"tint":e,i=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(r,["mode"]);return(0,n.jsx)(a.U,function(r,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):(function(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t})(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}),r}(function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(e){!function(r,e,t){e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t}(r,e,t[e])})}return r}({},i),{baseClassName:(0,o.AK)(f.Card,"outline"===t&&f["Card--mode-outline"],"shadow"===t&&f["Card--mode-shadow"],("outline"===t||"outline-tint"===t)&&f["Card--withBorder"])}))};try{C.displayName="Card",C.__docgenInfo={description:"",displayName:"Card",props:{mode:{defaultValue:{value:"tint"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"outline"'},{value:'"tint"'},{value:'"outline-tint"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:C.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(r){}},"./src/storybook/constants.ts":(r,e,t)=>{t.d(e,{R0:()=>a,nB:()=>o,tW:()=>n});var n={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},a={control:{type:"text"}}}}]);