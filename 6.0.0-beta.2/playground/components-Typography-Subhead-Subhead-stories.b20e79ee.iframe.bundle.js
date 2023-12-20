"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9802],{"./src/components/Typography/Subhead/Subhead.stories.tsx":(e,t,r)=>{r.r(t),r.d(t,{Playground:()=>i,__namedExportsOrder:()=>l,default:()=>u});var n=r("../../node_modules/react/index.js"),o=r("../../tools/storybook-addon-cartesian/src/index.tsx"),a=r("./src/storybook/constants.ts"),s=r("./src/components/Typography/Subhead/Subhead.tsx");let u={title:"Typography/Subhead",component:s.v,parameters:a.tW,decorators:[o.nW]};var i={render:function(e){return n.createElement(s.v,e,"Subhead")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{\n  render: args => <Subhead {...args}>Subhead</Subhead>\n}",...i.parameters?.docs?.source}}};let l=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css":(e,t,r)=>{r.d(t,{Z:()=>u});var n=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=r.n(n),a=r("../../node_modules/css-loader/dist/runtime/api.js"),s=r.n(a)()(o());s.push([e.id,".Subhead--aLKgN{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);font-weight:var(--vkui--font_subhead--font_weight--regular);line-height:var(--vkui--font_subhead--line_height--regular)}.Subhead--sizeY-compact--bY5aX{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Subhead--sizeY-none--zWIAB{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}}",""]),s.locals={Subhead:"Subhead--aLKgN","Subhead--sizeY-compact":"Subhead--sizeY-compact--bY5aX","Subhead--sizeY-none":"Subhead--sizeY-none--zWIAB"};let u=s},"./src/components/Typography/Subhead/Subhead.tsx":(e,t,r)=>{r.d(t,{v:()=>j});var n=r("../../node_modules/react/index.js"),o=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=r("./src/hooks/useAdaptivity.ts"),s=r("./src/components/Typography/Typography.tsx"),u=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=r.n(u),l=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=r.n(l),d=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=r.n(d),f=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=r.n(f),m=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=r.n(m),h=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css"),g={attributes:{class:"vkui-style"}};g.setAttributes=b(),g.insert=p().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=y(),i()(h.Z,g);let v=h.Z&&h.Z.locals?h.Z.locals:void 0;function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=S({none:v["Subhead--sizeY-none"]},"compact",v["Subhead--sizeY-compact"]),j=function(e){var t=e.className,r=e.Component,u=e.normalize,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["className","Component","normalize"]),l=(0,a.g)().sizeY,c=void 0===l?"none":l;return n.createElement(s.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){S(e,t,r[t])})}return e}({Component:void 0===r?"span":r,normalize:void 0===u||u,className:(0,o.AK)(t,v.Subhead,"regular"!==c&&O[c])},i))};try{j.displayName="Subhead",j.__docgenInfo={description:"Используется для подзаголовков 2 уровня.",displayName:"Subhead",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Subhead/Subhead.tsx#Subhead"]={docgenInfo:j.__docgenInfo,name:"Subhead",path:"src/components/Typography/Subhead/Subhead.tsx#Subhead"})}catch(e){}},"./src/storybook/constants.ts":(e,t,r)=>{r.d(t,{R0:()=>a,nB:()=>o,tW:()=>n});var n={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},a={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":(e,t,r)=>{r.d(t,{nW:()=>i});var n=r("../../node_modules/react/index.js");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}var u={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},i=function(e,t){var r=t.argTypes,i=t.args.cartesian,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t.args,["cartesian"]);if(i){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,r){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],s=!0,u=!1;try{for(o=o.call(e);!(s=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(e){u=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(u)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r,2),u=n[0],i=n[1],l=[];return e.forEach(function(e){i.forEach(function(r){l.push(function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(s({},e),a({},u,t[u].mapping?t[u].mapping[r]:r)))})}),l},[{}])}(i,r);return n.createElement("div",{style:u},c.map(function(t,r){return n.createElement(e,{key:r,args:s({},l,t)})}))}return n.createElement(e,{args:l})}}}]);