"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9437,9495],{"./src/components/ChipsInputBase/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Chip});var react=__webpack_require__("../../node_modules/react/index.js"),cancel_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/cancel_16.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useFocusVisible=__webpack_require__("./src/hooks/useFocusVisible.ts"),useFocusVisibleClassName=__webpack_require__("./src/hooks/useFocusVisibleClassName.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),Footnote=__webpack_require__("./src/components/Typography/Footnote/Footnote.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Chip_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ChipsInputBase/Chip/Chip.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Chip_module.Z,options);let Chip_Chip_module=Chip_module.Z&&Chip_module.Z.locals?Chip_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var sizeYClassNames={none:Chip_Chip_module["Chip--sizeY-none"],compact:Chip_Chip_module["Chip--sizeY-compact"]},Chip=function(_param){var _param_Component=_param.Component,_param_value=_param.value,value=void 0===_param_value?"":_param_value,_param_removable=_param.removable,_param_onRemove=_param.onRemove,onRemove=void 0===_param_onRemove?es6.ZT:_param_onRemove,_param_removeLabel=_param.removeLabel,before=_param.before,after=_param.after,disabled=_param.disabled,readOnly=_param.readOnly,children=_param.children,className=_param.className,onFocusProp=_param.onFocus,onBlurProp=_param.onBlur,restProps=_object_without_properties(_param,["Component","value","removable","onRemove","removeLabel","before","after","disabled","readOnly","children","className","onFocus","onBlur"]),_useAdaptivity_sizeY=(0,useAdaptivity.g)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY,_useFocusVisible=(0,useFocusVisible._)(),focusVisible=_useFocusVisible.focusVisible,onFocus=_useFocusVisible.onFocus,onBlur=_useFocusVisible.onBlur,focusVisibleClassName=(0,useFocusVisibleClassName.a)({focusVisible:focusVisible}),onRemoveWrapper=react.useCallback(function(event){onRemove(event,value)},[onRemove,value]);return react.createElement(RootComponent.U,_object_spread_props(_object_spread({},restProps),{Component:void 0===_param_Component?"span":_param_Component,className:(0,es6.AK)(Chip_Chip_module.Chip,"regular"!==sizeY&&sizeYClassNames[sizeY],focusVisibleClassName,className),"aria-readonly":readOnly,"aria-disabled":disabled,onFocus:disabled?void 0:function(event){onFocusProp&&onFocusProp(event),onFocus(event)},onBlur:disabled?void 0:function(event){onBlurProp&&onBlurProp(event),onBlur(event)}}),react.createElement("div",{className:Chip_Chip_module.Chip__in},(0,es6.p7)(before)&&react.createElement("div",{className:Chip_Chip_module.Chip__before},before),react.createElement(Footnote.w,{className:Chip_Chip_module.Chip__content},children),(0,es6.p7)(after)&&react.createElement("div",{className:Chip_Chip_module.Chip__after},after)),!readOnly&&(void 0===_param_removable||_param_removable)&&react.createElement("div",{className:Chip_Chip_module.Chip__removable},react.createElement("button",{tabIndex:-1,disabled:disabled,className:Chip_Chip_module.Chip__remove,onClick:disabled?void 0:onRemoveWrapper},react.createElement(VisuallyHidden.T,null,"  ",void 0===_param_removeLabel?"Удалить":_param_removeLabel," ",children),react.createElement(cancel_16.Q,null))))};try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"ChipOptionValue"}},removable:{defaultValue:{value:"true"},description:"",name:"removable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},removeLabel:{defaultValue:{value:"Удалить"},description:"",name:"removeLabel",required:!1,type:{name:"string"}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"",name:"after",required:!1,type:{name:"ReactNode"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>, value: ChipOptionValue) => void)"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChipsInputBase/Chip/Chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/ChipsInputBase/Chip/Chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Footnote/Footnote.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Footnote});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Footnote_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Footnote_module.Z,options);let Footnote_Footnote_module=Footnote_module.Z&&Footnote_module.Z.locals?Footnote_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Footnote=function(_param){var className=_param.className,caps=_param.caps,_param_Component=_param.Component,_param_normalize=_param.normalize,restProps=_object_without_properties(_param,["className","caps","Component","normalize"]);return react.createElement(Typography.Z,_object_spread({Component:void 0===_param_Component?"span":_param_Component,normalize:void 0===_param_normalize||_param_normalize,className:(0,es6.AK)(className,Footnote_Footnote_module.Footnote,caps&&Footnote_Footnote_module["Footnote--caps"])},restProps))};try{Footnote.displayName="Footnote",Footnote.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:Footnote.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ChipsInputBase/Chip/Chip.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Chip--kFOR9{align-items:center;background:var(--vkui--color_background_content);block-size:32px;border:var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);border-radius:6px;box-sizing:border-box;display:inline-flex}.Chip__in--d_e6G,.Chip__removable--w2IV9{align-items:center;block-size:100%;border-radius:inherit;display:flex;position:relative}.Chip__in--d_e6G{-webkit-padding-start:8px;overflow:hidden;padding-inline-start:8px}.Chip__in--d_e6G:last-of-type{-webkit-padding-end:8px;padding-inline-end:8px}.Chip__content--bM9Rw{color:var(--vkui--color_text_primary);display:inline-block;font-family:var(--vkui--font_paragraph--font_family--regular);font-size:var(--vkui--font_paragraph--font_size--regular);font-weight:var(--vkui--font_paragraph--font_weight--regular);line-height:var(--vkui--font_paragraph--line_height--regular);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Chip--sizeY-compact--L7kCr .Chip__content--bM9Rw{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Chip--sizeY-none--IS246 .Chip__content--bM9Rw{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}}.Chip__removable--w2IV9{flex-grow:0;flex-shrink:0}.Chip__remove--Vmed4{background:transparent;border:0;border-radius:inherit;box-sizing:border-box;color:var(--vkui--color_icon_secondary);cursor:pointer;flex:0 0 100%;padding:5px;transform:translateX(-1px)}.Chip__before--UvY43{-webkit-margin-end:6px;margin-inline-end:6px}.Chip__after--ARWaS{-webkit-margin-start:6px;margin-inline-start:6px}.Chip--sizeY-compact--L7kCr{block-size:28px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Chip--sizeY-none--IS246{block-size:28px}}","",{version:3,sources:["webpack://./src/components/ChipsInputBase/Chip/Chip.module.css"],names:[],mappings:"AAAA,aAEE,kBAAmB,CAEnB,gDAAiD,CAEjD,eAAgB,CAHhB,oFAAqF,CAErF,iBAAkB,CAElB,qBAAsB,CANtB,mBAOF,CAEA,yCAIE,kBAAmB,CACnB,eAAgB,CAChB,qBAAsB,CAHtB,YAAa,CADb,iBAKF,CAEA,iBACE,yBAAyB,CACzB,eAAgB,CADhB,wBAEF,CAEA,8BACE,uBAAuB,CAAvB,sBACF,CAEA,sBAIE,qCAAsC,CACtC,oBAAqB,CAMrB,6DAA8D,CAH9D,yDAA0D,CAE1D,6DAA8D,CAD9D,6DAA8D,CAR9D,eAAgB,CAEhB,sBAAuB,CADvB,kBAUF,CAEA,kDAKE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,iEACE,+CAKE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CACF,CAEA,wBACE,WAAY,CACZ,aACF,CAEA,qBAOE,sBAAuB,CAFvB,QAAS,CACT,qBAAsB,CAEtB,qBAAsB,CAJtB,uCAAwC,CAKxC,cAAe,CARf,aAAc,CACd,WAAY,CACZ,0BAOF,CAEA,qBACE,sBAAsB,CAAtB,qBACF,CAEA,oBACE,wBAAwB,CAAxB,uBACF,CAEA,4BACE,eACF,CAEA,iEACE,yBACE,eACF,CACF",sourcesContent:[".Chip {\n  display: inline-flex;\n  align-items: center;\n  border: var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);\n  background: var(--vkui--color_background_content);\n  border-radius: 6px;\n  block-size: 32px;\n  box-sizing: border-box;\n}\n\n.Chip__in,\n.Chip__removable {\n  position: relative;\n  display: flex;\n  align-items: center;\n  block-size: 100%;\n  border-radius: inherit;\n}\n\n.Chip__in {\n  padding-inline-start: 8px;\n  overflow: hidden;\n}\n\n.Chip__in:last-of-type {\n  padding-inline-end: 8px;\n}\n\n.Chip__content {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: var(--vkui--color_text_primary);\n  display: inline-block;\n\n  /* Typography/Paragraph */\n  font-size: var(--vkui--font_paragraph--font_size--regular);\n  line-height: var(--vkui--font_paragraph--line_height--regular);\n  font-weight: var(--vkui--font_paragraph--font_weight--regular);\n  font-family: var(--vkui--font_paragraph--font_family--regular);\n}\n\n.Chip--sizeY-compact .Chip__content {\n  /* Typography/Footnote */\n  font-size: var(--vkui--font_footnote--font_size--regular);\n  line-height: var(--vkui--font_footnote--line_height--regular);\n  font-weight: var(--vkui--font_footnote--font_weight--regular);\n  font-family: var(--vkui--font_footnote--font_family--regular);\n}\n\n@media (--sizeY-compact) {\n  .Chip--sizeY-none .Chip__content {\n    /* Typography/Footnote */\n    font-size: var(--vkui--font_footnote--font_size--regular);\n    line-height: var(--vkui--font_footnote--line_height--regular);\n    font-weight: var(--vkui--font_footnote--font_weight--regular);\n    font-family: var(--vkui--font_footnote--font_family--regular);\n  }\n}\n\n.Chip__removable {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.Chip__remove {\n  flex: 0 0 100%;\n  padding: 5px;\n  transform: translateX(-1px);\n  color: var(--vkui--color_icon_secondary);\n  border: 0;\n  border-radius: inherit;\n  background: transparent;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.Chip__before {\n  margin-inline-end: 6px;\n}\n\n.Chip__after {\n  margin-inline-start: 6px;\n}\n\n.Chip--sizeY-compact {\n  block-size: 28px;\n}\n\n@media (--sizeY-compact) {\n  .Chip--sizeY-none {\n    block-size: 28px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Chip:"Chip--kFOR9",Chip__in:"Chip__in--d_e6G",Chip__removable:"Chip__removable--w2IV9",Chip__content:"Chip__content--bM9Rw","Chip--sizeY-compact":"Chip--sizeY-compact--L7kCr","Chip--sizeY-none":"Chip--sizeY-none--IS246",Chip__remove:"Chip__remove--Vmed4",Chip__before:"Chip__before--UvY43",Chip__after:"Chip__after--ARWaS"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}","",{version:3,sources:["webpack://./src/components/Typography/Footnote/Footnote.module.css"],names:[],mappings:"AAAA,iBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,uBAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAAkE,CAGlE,wBACF",sourcesContent:[".Footnote {\n  font-size: var(--vkui--font_footnote--font_size--regular);\n  line-height: var(--vkui--font_footnote--line_height--regular);\n  font-weight: var(--vkui--font_footnote--font_weight--regular);\n  font-family: var(--vkui--font_footnote--font_family--regular);\n}\n\n.Footnote--caps {\n  font-size: var(--vkui--font_footnote_caps--font_size--regular);\n  line-height: var(--vkui--font_footnote_caps--line_height--regular);\n  font-weight: var(--vkui--font_footnote_caps--font_weight--regular);\n  font-family: var(--vkui--font_footnote_caps--font_family--regular);\n  text-transform: uppercase;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);