"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4679],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/FocusVisible/FocusVisible.module.css":function(e,i,t){var s=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(s),n=t("../../node_modules/css-loader/dist/runtime/api.js"),r=t.n(n)()(o());r.push([e.id,".FocusVisible--NGtEI{border-radius:inherit;bottom:0;bottom:var(--vkui_internal--focus_visible_distance,0);left:0;left:var(--vkui_internal--focus_visible_distance,0);overflow:hidden;pointer-events:none;position:absolute;right:0;right:var(--vkui_internal--focus_visible_distance,0);top:0;top:var(--vkui_internal--focus_visible_distance,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden}.FocusVisible--visible--wE6cf{visibility:visible}.FocusVisible--NGtEI.FocusVisible--NGtEI{position:absolute}.FocusVisible--NGtEI{--vkui_internal--focus_visible_thin:2px}.FocusVisible--thin--o_Aqc{--vkui_internal--focus_visible_thin:var(--vkui_internal--thin_border)}.FocusVisible--mode-inside--jbxik,.FocusVisible--mode-outline--nn_01{border-color:#2688eb;border-color:var(--vkui--color_stroke_accent);border-style:solid;border-width:var(--vkui_internal--focus_visible_thin);box-sizing:border-box}.FocusVisible--mode-outline--nn_01{--vkui_internal--focus_visible_distance:0}.FocusVisible--mode-inside--jbxik{--vkui_internal--focus_visible_distance:2px}.FocusVisible--mode-outside--rxeMB{--vkui_internal--focus_visible_distance:-2px;box-shadow:0 0 0 var(--vkui_internal--focus_visible_thin) #2688eb;box-shadow:0 0 0 var(--vkui_internal--focus_visible_thin) var(--vkui--color_stroke_accent)}@media (prefers-reduced-motion:no-preference){.FocusVisible--visible--wE6cf.FocusVisible--mode-inside--jbxik{--vkui_internal--focus_visible_distance:4px;animation:vkui-animation-focus-visible--nhA4c .15s ease-in-out forwards;animation-delay:.01ms;will-change:top,left,bottom,right}.FocusVisible--visible--wE6cf.FocusVisible--mode-outside--rxeMB{--vkui_internal--focus_visible_distance:0;animation-name:vkui-animation-focus-visible-outside--P2Xa4}}@keyframes vkui-animation-focus-visible--nhA4c{0%{}to{bottom:0;left:0;right:0;top:0;will-change:auto}}@keyframes vkui-animation-focus-visible-outside--P2Xa4{0%{}to{bottom:-2px;left:-2px;right:-2px;top:-2px;will-change:auto}}",""]),r.locals={FocusVisible:"FocusVisible--NGtEI","FocusVisible--visible":"FocusVisible--visible--wE6cf","FocusVisible--thin":"FocusVisible--thin--o_Aqc","FocusVisible--mode-inside":"FocusVisible--mode-inside--jbxik","FocusVisible--mode-outline":"FocusVisible--mode-outline--nn_01","FocusVisible--mode-outside":"FocusVisible--mode-outside--rxeMB","vkui-animation-focus-visible":"vkui-animation-focus-visible--nhA4c","vkui-animation-focus-visible-outside":"vkui-animation-focus-visible-outside--P2Xa4"},i.Z=r},"./src/components/Textarea/Textarea.stories.tsx":function(e,i,t){t.r(i),t.d(i,{Playground:function(){return a}});var s,o,n,r=t("./src/storybook/constants.ts");function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.forEach(function(i){!function(e,i,t){i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t}(e,i,t[i])})}return e}function u(e,i){return i=null!=i?i:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):(function(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,s)}return t})(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}),e}var c={title:"Forms/Textarea",component:t("./src/components/Textarea/Textarea.tsx").g,parameters:l({},r.tW,r.nB)};i.default=c;var a={};a.parameters=u(l({},a.parameters),{docs:u(l({},null===(s=a.parameters)||void 0===s?void 0:s.docs),{source:l({originalSource:"{}"},null===(n=a.parameters)||void 0===n?void 0:null===(o=n.docs)||void 0===o?void 0:o.source)})})},"./src/components/FocusVisible/FocusVisible.tsx":function(e,i,t){t.d(i,{W:function(){return y}});var s=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var o=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),n=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(n),l=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=t.n(l),c=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),a=t.n(c),b=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),d=t.n(b),m=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=t.n(m),f=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/FocusVisible/FocusVisible.module.css"),p={attributes:{class:"vkui-style"}};p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=u(),p.insertStyleElement=v(),r()(f.Z,p);var _=f.Z&&f.Z.locals?f.Z.locals:void 0,y=function(e){var i=e.visible,t=e.mode,n=e.thin,r=function(e,i){if(null==e)return{};var t,s,o=function(e,i){if(null==e)return{};var t,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["visible","mode","thin"]);return(0,s.jsx)("span",function(e,i){return i=null!=i?i:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):(function(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,s)}return t})(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}),e}(function(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.forEach(function(i){!function(e,i,t){i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t}(e,i,t[i])})}return e}({},r),{"aria-hidden":!0,className:(0,o.AK)(_.FocusVisible,i&&_["FocusVisible--visible"],n&&_["FocusVisible--thin"],{inside:_["FocusVisible--mode-inside"],outside:_["FocusVisible--mode-outside"],outline:_["FocusVisible--mode-outline"]}[t])}))};try{y.displayName="FocusVisible",y.__docgenInfo={description:"",displayName:"FocusVisible",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean | undefined"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"inside"'},{value:'"outside"'},{value:'"outline"'}]}},thin:{defaultValue:null,description:"",name:"thin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FocusVisible/FocusVisible.tsx#FocusVisible"]={docgenInfo:y.__docgenInfo,name:"FocusVisible",path:"src/components/FocusVisible/FocusVisible.tsx#FocusVisible"})}catch(e){}},"./src/storybook/constants.ts":function(e,i,t){t.d(i,{R0:function(){return n},nB:function(){return o},tW:function(){return s}});var s={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},n={control:{type:"text"}}}}]);