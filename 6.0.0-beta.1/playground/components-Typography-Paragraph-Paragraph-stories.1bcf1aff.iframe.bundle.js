"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3046],{"./src/components/Typography/Paragraph/Paragraph.stories.tsx":(e,r,t)=>{t.r(r),t.d(r,{Playground:()=>y,__namedExportsOrder:()=>f,default:()=>d});var n,o,a,s=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var l=t("../../tools/storybook-addon-cartesian/src/index.tsx"),i=t("./src/storybook/constants.ts"),u=t("./src/components/Typography/Paragraph/Paragraph.tsx");function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){!function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])})}return e}function p(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}let d={title:"Typography/Paragraph",component:u.n,parameters:i.tW,decorators:[l.nW]};var y={render:function(e){return(0,s.jsx)(u.n,p(c({},e),{children:"Paragraph"}))}};y.parameters=p(c({},y.parameters),{docs:p(c({},null===(n=y.parameters)||void 0===n?void 0:n.docs),{source:c({originalSource:"{\n  render: args => <Paragraph {...args}>Paragraph</Paragraph>\n}"},null===(a=y.parameters)||void 0===a?void 0:null===(o=a.docs)||void 0===o?void 0:o.source)})});let f=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Paragraph/Paragraph.module.css":(e,r,t)=>{t.d(r,{Z:()=>l});var n=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(n),a=t("../../node_modules/css-loader/dist/runtime/api.js"),s=t.n(a)()(o());s.push([e.id,".Paragraph--lkCTy{font-family:var(--vkui--font_paragraph--font_family--regular);font-size:var(--vkui--font_paragraph--font_size--regular);font-weight:var(--vkui--font_paragraph--font_weight--regular);line-height:var(--vkui--font_paragraph--line_height--regular)}",""]),s.locals={Paragraph:"Paragraph--lkCTy"};let l=s},"./src/components/Typography/Paragraph/Paragraph.tsx":(e,r,t)=>{t.d(r,{n:()=>O});var n=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var o=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=t("./src/components/Typography/Typography.tsx"),s=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(s),i=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=t.n(i),c=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=t.n(c),d=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),y=t.n(d),f=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=t.n(f),m=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Paragraph/Paragraph.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=y(),b.insert=p().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=g(),l()(m.Z,b);let h=m.Z&&m.Z.locals?m.Z.locals:void 0;var O=function(e){var r=e.className,t=e.Component,s=e.normalize,l=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["className","Component","normalize"]);return(0,n.jsx)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){!function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])})}return e}({Component:void 0===t?"span":t,normalize:void 0!==s&&s,className:(0,o.AK)(r,h.Paragraph)},l))};try{O.displayName="Paragraph",O.__docgenInfo={description:"Используется для основного текста.",displayName:"Paragraph",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"false"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"]={docgenInfo:O.__docgenInfo,name:"Paragraph",path:"src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"})}catch(e){}},"./src/storybook/constants.ts":(e,r,t)=>{t.d(r,{R0:()=>a,nB:()=>o,tW:()=>n});var n={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},a={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":(e,r,t)=>{t.d(r,{nW:()=>i});var n=t("../../node_modules/react/jsx-runtime.js");function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){a(e,r,t[r])})}return e}t("../../node_modules/react/index.js");var l={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},i=function(e,r){var t=r.argTypes,i=r.args.cartesian,u=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(r.args,["cartesian"]);if(i){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,t){var n=function(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,l=!1;try{for(o=o.call(e);!(s=(t=o.next()).done)&&(a.push(t.value),!r||a.length!==r);s=!0);}catch(e){l=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(l)throw n}}return a}}(e,r)||function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),l=n[0],i=n[1],u=[];return e.forEach(function(e){i.forEach(function(t){u.push(function(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}(s({},e),a({},l,r[l].mapping?r[l].mapping[t]:t)))})}),u},[{}])}(i,t);return(0,n.jsx)("div",{style:l,children:c.map(function(r,t){return(0,n.jsx)(e,{args:s({},u,r)},t)})})}return(0,n.jsx)(e,{args:u})}}}]);