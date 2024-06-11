"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9853],{"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>AdaptiveIconRenderer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),AdaptiveIconRenderer=function(param){var IconCompact=param.IconCompact,IconRegular=param.IconRegular,sizeY=(0,_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_2__.V)().sizeY;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[sizeY.compact&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCompact,{className:sizeY.compact.className}),sizeY.regular&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconRegular,{className:sizeY.regular.className})]})};try{AdaptiveIconRenderer.displayName="AdaptiveIconRenderer",AdaptiveIconRenderer.__docgenInfo={description:"",displayName:"AdaptiveIconRenderer",props:{IconCompact:{defaultValue:null,description:"",name:"IconCompact",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}},IconRegular:{defaultValue:null,description:"",name:"IconRegular",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"]={docgenInfo:AdaptiveIconRenderer.__docgenInfo,name:"AdaptiveIconRenderer",path:"src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AdaptiveIconRenderer_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Icon24SmileOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24SmileOutline","smile_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="smile_outline_24"><path d="M8.438 14.297a.9.9 0 0 1 1.259.133c.013.016.196.223.53.432.383.24.97.488 1.773.488a3.3 3.3 0 0 0 1.773-.488c.191-.12.382-.26.53-.432a.9.9 0 0 1 1.4 1.132 4 4 0 0 1-.976.826A5.1 5.1 0 0 1 12 17.15a5.1 5.1 0 0 1-2.727-.762 4 4 0 0 1-.976-.826.9.9 0 0 1 .14-1.265Zm1.812-4.047a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5m-3-9.4c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9M3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),smile_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/smile_outline_28.js"),constants=__webpack_require__("./src/storybook/constants.ts"),AdaptiveIconRenderer=__webpack_require__("./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const AdaptiveIconRenderer_stories={title:"Blocks/AdaptiveIconRenderer",component:AdaptiveIconRenderer.p,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},constants.eb,constants.eC)};var Playground={render:function(){return(0,jsx_runtime.jsx)(AdaptiveIconRenderer.p,{IconCompact:Icon24SmileOutline,IconRegular:smile_outline_28.Y})}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: () => <AdaptiveIconRenderer IconCompact={Icon24SmileOutline} IconRegular={Icon28SmileOutline} />\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/@vkontakte/icons/dist/es6/28/smile_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Icon28SmileOutline});var Icon28SmileOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon28SmileOutline","smile_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="smile_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12m0-2c5.523 0 10-4.477 10-10S19.523 4 14 4 4 8.477 4 14s4.477 10 10 10m-4.388-5.909a1 1 0 1 1 1.463-1.364 4 4 0 0 0 5.85.001 1 1 0 1 1 1.46 1.367q-.14.15-.293.293a6 6 0 0 1-8.48-.297m7.763-4.841a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25m-6.75 0a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25" /></g></symbol>',28,28,!1,void 0)}}]);