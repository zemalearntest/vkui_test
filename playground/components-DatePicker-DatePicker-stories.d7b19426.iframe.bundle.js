(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2573,547],{"./src/components/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_RootComponent_RootComponent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),_Spinner_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Spinner/Spinner.module.css");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Spinner=react__WEBPACK_IMPORTED_MODULE_1__.memo((function(_param){var _param_size=_param.size,size=void 0===_param_size?"regular":_param_size,_param_children=_param.children,children=void 0===_param_children?"Загружается...":_param_children,disableAnimation=_param.disableAnimation,restProps=_object_without_properties(_param,["size","children","disableAnimation"]),SpinnerIcon={small:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__.I,regular:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.D,medium:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__.G,large:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__.v}[size],center={small:8,regular:12,medium:16,large:22}[size];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RootComponent_RootComponent__WEBPACK_IMPORTED_MODULE_8__.I,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component:"span",role:"status"},restProps),{baseClassName:_Spinner_module_css__WEBPACK_IMPORTED_MODULE_3__.A.Spinner,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerIcon,{children:!disableAnimation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 ".concat(center," ").concat(center),to:"360 ".concat(center," ").concat(center),dur:"0.7s",repeatCount:"indefinite"})}),(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__.G1)(children)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_9__.s,{children})]}))}));Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Footnote/Footnote.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>Footnote});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Footnote_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Footnote_module.A,options);const Footnote_Footnote_module=Footnote_module.A&&Footnote_module.A.locals?Footnote_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Footnote=function(_param){var className=_param.className,caps=_param.caps,_param_Component=_param.Component,Component=void 0===_param_Component?"span":_param_Component,_param_normalize=_param.normalize,normalize=void 0===_param_normalize||_param_normalize,restProps=_object_without_properties(_param,["className","caps","Component","normalize"]);return(0,jsx_runtime.jsx)(Typography.o,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component,normalize,className:(0,es6.xW)(className,Footnote_Footnote_module.Footnote,caps&&Footnote_Footnote_module["Footnote--caps"])},restProps))};try{Footnote.displayName="Footnote",Footnote.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:Footnote.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useAdaptivityHasPointer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>useAdaptivityHasPointer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),_useIsClient__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useIsClient.ts");function useAdaptivityHasPointer(){var deferDetect=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],hasPointerContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__.D).hasPointer,needTwoPassRendering=deferDetect||void 0===hasPointerContext;return(0,_useIsClient__WEBPACK_IMPORTED_MODULE_3__.D)(!needTwoPassRendering)&&void 0===hasPointerContext?_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.Wt:hasPointerContext}},"./src/lib/children.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>getTextFromChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");var childToString=function(child){return null==child||"boolean"==typeof child||"{}"===JSON.stringify(child)?"":child.toString()},getTextFromChildren=function(children){return function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}(children,Array)||(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce((function(text,child){var newText="",isValidElementResult=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child),hasChildren=isValidElementResult&&"children"in child.props;return newText=isValidElementResult&&hasChildren?getTextFromChildren(child.props.children):isValidElementResult&&!hasChildren?"":childToString(child),text.concat(newText)}),""):childToString(children)}},"./src/components/DatePicker/DatePicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/DatePicker",component:__webpack_require__("./src/components/DatePicker/DatePicker.tsx").l,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC),args:{onDateChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};var Playground={args:{min:{day:1,month:1,year:1901},max:{day:1,month:1,year:2006},dayPlaceholder:"ДД",monthPlaceholder:"ММММ",yearPlaceholder:"ГГГГ"}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    min: {\n      day: 1,\n      month: 1,\n      year: 1901\n    },\n    max: {\n      day: 1,\n      month: 1,\n      year: 2006\n    },\n    dayPlaceholder: 'ДД',\n    monthPlaceholder: 'ММММ',\n    yearPlaceholder: 'ГГГГ'\n  }\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Spinner/Spinner.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Spinner--aVS7j{align-items:center;block-size:100%;color:var(--vkui--color_icon_medium);display:flex;inline-size:100%;justify-content:center}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}","",{version:3,sources:["webpack://./src/components/Spinner/Spinner.module.css"],names:[],mappings:"AAAA,gBAIE,kBAAmB,CAFnB,eAAgB,CAIhB,oCAAqC,CAHrC,YAAa,CAFb,gBAAiB,CAIjB,sBAEF,CAOA,yCACE,kBACF",sourcesContent:[".Spinner {\n  inline-size: 100%;\n  block-size: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--vkui--color_icon_medium);\n}\n\n/**\n * CMP:\n * PanelHeader\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalPanelHeader) .Spinner {\n  color: currentColor;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Spinner:"Spinner--aVS7j"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}","",{version:3,sources:["webpack://./src/components/Typography/Footnote/Footnote.module.css"],names:[],mappings:"AAAA,iBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,uBAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAAkE,CAGlE,wBACF",sourcesContent:[".Footnote {\n  font-size: var(--vkui--font_footnote--font_size--regular);\n  line-height: var(--vkui--font_footnote--line_height--regular);\n  font-weight: var(--vkui--font_footnote--font_weight--regular);\n  font-family: var(--vkui--font_footnote--font_family--regular);\n}\n\n.Footnote--caps {\n  font-size: var(--vkui--font_footnote_caps--font_size--regular);\n  line-height: var(--vkui--font_footnote_caps--line_height--regular);\n  font-weight: var(--vkui--font_footnote_caps--font_weight--regular);\n  font-family: var(--vkui--font_footnote_caps--font_family--regular);\n  text-transform: uppercase;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Spinner/Spinner.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Spinner/Spinner.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.A.locals:void 0}}]);