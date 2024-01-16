"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6103],{"./src/components/Gradient/Gradient.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Gradient",component:__webpack_require__("./src/components/Gradient/Gradient.tsx").p,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.tW,_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.nB)};var Playground={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"100%",height:"200px"}})},decorators:[function(Component,context){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"50%",height:"50%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{args:context.args}))}]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <div style={{\n      width: '100%',\n      height: '200px'\n    }} />\n  },\n  decorators: [(Component, context) => <div style={{\n    width: '50%',\n    height: '50%'\n  }}>\n        <Component args={context.args} />\n      </div>]\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./src/components/Gradient/Gradient.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Gradient});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Gradient_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Gradient/Gradient.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Gradient_module.Z,options);let Gradient_Gradient_module=Gradient_module.Z&&Gradient_module.Z.locals?Gradient_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Gradient=function(_param){var _param_mode=_param.mode,_param_to=_param.to,restProps=_object_without_properties(_param,["mode","to"]);return react.createElement(RootComponent.U,_object_spread_props(_object_spread({role:"presentation"},restProps),{baseClassName:(0,es6.AK)(Gradient_Gradient_module.Gradient,"default"!==(void 0===_param_mode?"default":_param_mode)&&Gradient_Gradient_module["Gradient--mode-tint"],"bottom"===(void 0===_param_to?"top":_param_to)&&Gradient_Gradient_module["Gradient--to-bottom"])}))};try{Gradient.displayName="Gradient",Gradient.__docgenInfo={description:"",displayName:"Gradient",props:{mode:{defaultValue:{value:"default"},description:"Тип градиента",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"tint"'}]}},to:{defaultValue:{value:"top"},description:"Направление градиента",name:"to",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gradient/Gradient.tsx#Gradient"]={docgenInfo:Gradient.__docgenInfo,name:"Gradient",path:"src/components/Gradient/Gradient.tsx#Gradient"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R0:()=>StringArg,nB:()=>DisableCartesianParam,tW:()=>CanvasFullLayout});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Gradient/Gradient.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Gradient--ea0fa{background:linear-gradient(to bottom,var(--vkui--gradient))}.Gradient--ea0fa.Gradient--to-bottom--iDuie{background:linear-gradient(to top,var(--vkui--gradient))}.Gradient--mode-tint--CcPSg{background:linear-gradient(to bottom,var(--vkui--gradient_tint))}.Gradient--mode-tint--CcPSg.Gradient--to-bottom--iDuie{background:linear-gradient(to top,var(--vkui--gradient_tint))}","",{version:3,sources:["webpack://./src/components/Gradient/Gradient.module.css"],names:[],mappings:"AAAA,iBACE,2DACF,CAEA,4CACE,wDACF,CAEA,4BACE,gEACF,CAEA,uDACE,6DACF",sourcesContent:[".Gradient {\n  background: linear-gradient(to bottom, var(--vkui--gradient));\n}\n\n.Gradient.Gradient--to-bottom {\n  background: linear-gradient(to top, var(--vkui--gradient));\n}\n\n.Gradient--mode-tint {\n  background: linear-gradient(to bottom, var(--vkui--gradient_tint));\n}\n\n.Gradient--mode-tint.Gradient--to-bottom {\n  background: linear-gradient(to top, var(--vkui--gradient_tint));\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Gradient:"Gradient--ea0fa","Gradient--to-bottom":"Gradient--to-bottom--iDuie","Gradient--mode-tint":"Gradient--mode-tint--CcPSg"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);