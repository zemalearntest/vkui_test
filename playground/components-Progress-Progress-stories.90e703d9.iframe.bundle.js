"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3815],{"./src/components/Progress/Progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Progress_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),constants=__webpack_require__("./src/storybook/constants.ts"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),math=__webpack_require__("./src/helpers/math.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Progress_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Progress/Progress.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Progress_module.A,options);const Progress_Progress_module=Progress_module.A&&Progress_module.A.locals?Progress_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var stylesAppearance={accent:Progress_Progress_module["Progress--appearance-accent"],positive:Progress_Progress_module["Progress--appearance-positive"],negative:Progress_Progress_module["Progress--appearance-negative"]};var Progress=function(_param){var _param_value=_param.value,value=void 0===_param_value?0:_param_value,_param_appearance=_param.appearance,appearance=void 0===_param_appearance?"accent":_param_appearance,height=_param.height,styleProps=_param.style,restProps=_object_without_properties(_param,["value","appearance","height","style"]),progress=(0,math.qE)(value,0,100),title="".concat(progress," / ").concat(100),style=function progressStyle(height,styleProps){var styleHeight=function progressCustomHeightStyle(height){return height?{height,borderRadius:height/2}:void 0}(height);return styleHeight?_object_spread({},styleProps,styleHeight):styleProps}(height,styleProps);return(0,jsx_runtime.jsx)(RootComponent.I,_object_spread_props(_object_spread({"aria-valuenow":value,title,style},restProps),{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,baseClassName:(0,es6.xW)(Progress_Progress_module.Progress,stylesAppearance[appearance]),children:(0,jsx_runtime.jsx)("div",{className:Progress_Progress_module.Progress__in,style:{width:"".concat(progress,"%")}})}))};try{Progress.displayName="Progress",Progress.__docgenInfo={description:"",displayName:"Progress",props:{appearance:{defaultValue:{value:"accent"},description:"Стиль отображения прогрессбара",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"positive"'},{value:'"negative"'}]}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Высота элемента.",name:"height",required:!1,type:{name:"number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.tsx#Progress"]={docgenInfo:Progress.__docgenInfo,name:"Progress",path:"src/components/Progress/Progress.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}function Progress_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var story={title:"Blocks/Progress",component:Progress,parameters:function Progress_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Progress_stories_define_property(target,key,source[key])}))}return target}({},constants.eb,constants.eC),argTypes:{value:{control:{type:"range",min:0,max:100,step:1}}}};const Progress_stories=story;var Playground={decorators:[function(Component){return(0,jsx_runtime.jsx)("div",{style:{width:"100%",padding:"16px",boxSizing:"border-box"},children:(0,jsx_runtime.jsx)(Component,{})})}]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  decorators: [Component => <div style={{\n    width: '100%',\n    padding: '16px',\n    boxSizing: 'border-box'\n  }}>\n        <Component />\n      </div>]\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Progress/Progress.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Progress--Bx3kN{background:var(--vkui--color_track_background);block-size:2px;border-radius:1px}.Progress__in--T1gr7{block-size:100%;border-radius:inherit;transition:width .2s ease}.Progress--appearance-accent--EaVCo .Progress__in--T1gr7{background:var(--vkui--color_stroke_accent)}.Progress--appearance-positive--qutTA .Progress__in--T1gr7{background:var(--vkui--color_stroke_positive)}.Progress--appearance-negative--Eu6iy .Progress__in--T1gr7{background:var(--vkui--color_stroke_negative)}","",{version:3,sources:["webpack://./src/components/Progress/Progress.module.css"],names:[],mappings:"AAAA,iBAEE,8CAA+C,CAC/C,cAAe,CAFf,iBAGF,CAEA,qBACE,eAAgB,CAChB,qBAAsB,CACtB,yBACF,CAEA,yDACE,2CACF,CAEA,2DACE,6CACF,CAEA,2DACE,6CACF",sourcesContent:[".Progress {\n  border-radius: 1px;\n  background: var(--vkui--color_track_background);\n  block-size: 2px;\n}\n\n.Progress__in {\n  block-size: 100%;\n  border-radius: inherit;\n  transition: width 0.2s ease;\n}\n\n.Progress--appearance-accent .Progress__in {\n  background: var(--vkui--color_stroke_accent);\n}\n\n.Progress--appearance-positive .Progress__in {\n  background: var(--vkui--color_stroke_positive);\n}\n\n.Progress--appearance-negative .Progress__in {\n  background: var(--vkui--color_stroke_negative);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Progress:"Progress--Bx3kN",Progress__in:"Progress__in--T1gr7","Progress--appearance-accent":"Progress--appearance-accent--EaVCo","Progress--appearance-positive":"Progress--appearance-positive--qutTA","Progress--appearance-negative":"Progress--appearance-negative--Eu6iy"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}}}]);