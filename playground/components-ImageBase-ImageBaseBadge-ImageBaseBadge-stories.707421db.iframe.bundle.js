"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7717],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css":function(e,t,n){var r=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(r),o=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(o)()(a());s.push([e.id,'.ImageBaseBadge--xUDhD{border-radius:50%;bottom:0;padding:2px;position:absolute;right:0;transform:translate(2px,2px);z-index:2;z-index:var(--vkui_internal--z_index_image_base_badge)}.ImageBaseBadge--background-stroke--j2dpX{background-color:#fff;background-color:var(--vkui_internal--background,var(--vkui--color_background_content))}.ImageBaseBadge--background-shadow--awA5C:before{border-radius:inherit;bottom:2px;box-shadow:0 0 2px rgba(0,0,0,.03),0 2px 2px rgba(0,0,0,.06);box-shadow:var(--vkui--elevation1);content:"";left:2px;margin:auto;position:absolute;right:2px;top:2px}',""]),s.locals={ImageBaseBadge:"ImageBaseBadge--xUDhD","ImageBaseBadge--background-stroke":"ImageBaseBadge--background-stroke--j2dpX","ImageBaseBadge--background-shadow":"ImageBaseBadge--background-shadow--awA5C"},t.Z=s},"./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return g}});var r,a,o,s=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var d=n("./src/storybook/constants.ts"),c=n("./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var l={title:"Blocks/ImageBaseBadge",component:c.f,parameters:i({},d.tW,d.nB)};t.default=l;var g={render:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["children"]);return(0,s.jsx)(c.f,u(i({},n),{children:t}))},decorators:[function(e,t){return(0,s.jsx)("div",{style:{width:50,height:50,border:"1px dashed red",position:"relative"},children:(0,s.jsx)(e,{args:i({},t.args)})})}]};g.parameters=u(i({},g.parameters),{docs:u(i({},null===(r=g.parameters)||void 0===r?void 0:r.docs),{source:i({originalSource:"{\n  render: ({\n    children,\n    ...args\n  }) => <ImageBaseBadge {...args}>{children}</ImageBaseBadge>,\n  decorators: [(Component, context) => <div style={{\n    width: 50,\n    height: 50,\n    border: '1px dashed red',\n    position: 'relative'\n  }}>\n        <Component args={{\n      ...context.args\n    }} />\n      </div>]\n}"},null===(o=g.parameters)||void 0===o?void 0:null===(a=o.docs)||void 0===a?void 0:a.source)})})},"./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx":function(e,t,n){n.d(t,{f:function(){return O}});var r=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),o=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(o),d=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(d),i=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),u=n.n(i),l=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),g=n.n(l),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=n.n(m),b=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=g(),f.insert=u().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=p(),s()(b.Z,f);var B=b.Z&&b.Z.locals?b.Z.locals:void 0,y={stroke:B["ImageBaseBadge--background-stroke"],shadow:B["ImageBaseBadge--background-shadow"]},O=function(e){var t=e.background,n=e.children,o=e.className,s=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["background","children","className"]);return(0,r.jsx)("div",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},s),{className:(0,a.AK)(B.ImageBaseBadge,y[void 0===t?"shadow":t],o),children:n}))};try{O.displayName="ImageBaseBadge",O.__docgenInfo={description:"Бейдж в правом нижнем углу компонента.\n\n> Не используйте при `size < 24`",displayName:"ImageBaseBadge",props:{background:{defaultValue:{value:"shadow"},description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx#ImageBaseBadge"]={docgenInfo:O.__docgenInfo,name:"ImageBaseBadge",path:"src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx#ImageBaseBadge"})}catch(e){}},"./src/storybook/constants.ts":function(e,t,n){n.d(t,{R0:function(){return o},nB:function(){return a},tW:function(){return r}});var r={layout:"fullscreen",centered:!0},a={cartesian:{disable:!0}},o={control:{type:"text"}}}}]);