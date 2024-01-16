"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4984],{"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),Tappable=__webpack_require__("./src/components/Tappable/Tappable.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),IconButton_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/IconButton/IconButton.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(IconButton_module.Z,options);let IconButton_IconButton_module=IconButton_module.Z&&IconButton_module.Z.locals?IconButton_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var sizeYClassNames={none:IconButton_IconButton_module["IconButton--sizeY-none"],compact:IconButton_IconButton_module["IconButton--sizeY-compact"]};(0,warnOnce.O)("IconButton");var IconButton=function(_param){var label=_param.label,children=_param.children,className=_param.className,restProps=_object_without_properties(_param,["label","children","className"]),platform=(0,usePlatform.F)(),_useAdaptivity_sizeY=(0,useAdaptivity.g)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY;return react.createElement(Tappable.K,_object_spread_props(_object_spread({activeEffectDelay:200,activeMode:"background",Component:restProps.href?"a":"button"},restProps),{className:(0,es6.AK)(IconButton_IconButton_module.IconButton,"regular"!==sizeY&&sizeYClassNames[sizeY],"ios"===platform&&IconButton_IconButton_module["IconButton--ios"],className)}),label&&react.createElement(VisuallyHidden.T,null,label),children)};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{label:{defaultValue:null,description:"Текст кнопки-иконки. Делает ее доступной для ассистивных технологий",name:"label",required:!1,type:{name:"string"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHidden_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(VisuallyHidden_module.Z,options);let VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.Z&&VisuallyHidden_module.Z.locals?VisuallyHidden_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var VisuallyHidden=function(_param){var _param_Component=_param.Component,Component=void 0===_param_Component?"span":_param_Component,restProps=_object_without_properties(_param,["Component"]);return react.createElement(RootComponent.U,_object_spread_props(_object_spread({Component:Component},restProps),{baseClassName:(0,es6.AK)(VisuallyHidden_VisuallyHidden_module.VisuallyHidden,"input"===Component&&VisuallyHidden_VisuallyHidden_module["VisuallyHidden--focusable-input"])}))};try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/IconButton/IconButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".IconButton--PgPFw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:9999px;box-shadow:none;color:currentColor;display:block;height:48px;margin:0;padding:0;position:relative}.IconButton--sizeY-compact--xpjui{height:44px}.IconButton--PgPFw[disabled]{opacity:var(--vkui--opacity_disable_accessibility)}.IconButton--ios--fXtvM{border-radius:var(--vkui--size_border_radius--regular)}.IconButton--PgPFw .vkuiIcon--16{padding:16px}.IconButton--PgPFw .vkuiIcon--16.vkuiIcon--w-8{padding:16px 14px}.IconButton--sizeY-compact--xpjui .vkuiIcon--16,.IconButton--sizeY-compact--xpjui .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--PgPFw .vkuiIcon--24{padding:12px}.IconButton--sizeY-compact--xpjui .vkuiIcon--24{padding:10px}.IconButton--PgPFw .vkuiIcon--28{padding:10px}.IconButton--sizeY-compact--xpjui .vkuiIcon--28{padding:8px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.IconButton--sizeY-none--_mhUD{height:44px}.IconButton--sizeY-none--_mhUD .vkuiIcon--16,.IconButton--sizeY-none--_mhUD .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--sizeY-none--_mhUD .vkuiIcon--24{padding:10px}.IconButton--sizeY-none--_mhUD .vkuiIcon--28{padding:8px}}.vkuiInternalFormField__after .IconButton--PgPFw,.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--PgPFw,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--PgPFw{align-content:center;align-items:center;border-radius:var(--vkui--size_border_radius--regular);display:flex;height:var(--vkui--size_field_height--regular);justify-content:center;width:var(--vkui--size_field_height--regular)}.vkuiInternalFormField__after .IconButton--PgPFw .vkuiIcon.vkuiIcon.vkuiIcon{padding:0}.vkuiInternalFormField__after .IconButton--sizeY-compact--xpjui{height:var(--vkui--size_field_height--compact);width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui{height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.vkuiInternalFormField__after .IconButton--sizeY-none--_mhUD{height:var(--vkui--size_field_height--compact);width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD{height:var(--vkui--size_field_height--compact)}}.vkuiInternalSimpleCell__after .IconButton--PgPFw:last-child{margin-right:-12px}.vkuiInternalSimpleCell__after .IconButton--ios--fXtvM:last-child{margin-right:-9px}.vkuiInternalAlert__dismiss.IconButton--PgPFw{height:36px;padding:8px}","",{version:3,sources:["webpack://./src/components/IconButton/IconButton.module.css"],names:[],mappings:"AAAA,mBACE,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CAChB,eAAgB,CAChB,QAAS,CAaT,oBAAqB,CAZrB,eAAgB,CAEhB,kBAAmB,CADnB,aAAc,CAKd,WAAgB,CAFhB,QAAS,CADT,SAAU,CAEV,iBAQF,CAEA,kCACE,WACF,CAEA,6BACE,kDACF,CAEA,wBACE,sDACF,CAGA,iCACE,YACF,CAGA,+CAEE,iBACF,CAGA,8GAEE,YACF,CAGA,iCACE,YACF,CAGA,gDACE,YACF,CAGA,iCACE,YACF,CAGA,gDACE,WACF,CAEA,iEACE,+BACE,WACF,CAGA,wGAEE,YACF,CAGA,6CACE,YACF,CAGA,6CACE,WACF,CACF,CASA,gOAOE,oBAAqB,CADrB,kBAAmB,CAKnB,sDAAuD,CANvD,YAAa,CAKb,8CAAmD,CAFnD,sBAAuB,CACvB,6CAGF,CAGA,6EAGE,SACF,CAGA,gEAEE,8CAAmD,CADnD,6CAEF,CAGA,6MAME,8CACF,CAEA,iEAEE,6DAEE,8CAAmD,CADnD,6CAEF,CAGA,uMAME,8CACF,CACF,CAOA,6DACE,kBACF,CAGA,kEACE,iBACF,CAOA,8CACE,WAAgB,CAChB,WACF",sourcesContent:[".IconButton {\n  appearance: none;\n  background: none;\n  border: 0;\n  box-shadow: none;\n  display: block;\n  color: currentColor;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  block-size: 48px;\n\n  /**\n   * Чтобы закргуление было равно половине высоты.\n   * см. https://stackoverflow.com/questions/27233295/possible-to-make-border-radius-equal-to-half-the-total-height-without-javascript\n   */\n  border-radius: 9999px;\n}\n\n.IconButton--sizeY-compact {\n  block-size: 44px;\n}\n\n.IconButton[disabled] {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.IconButton--ios {\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.IconButton :global(.vkuiIcon--16) {\n  padding: 16px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.IconButton :global(.vkuiIcon--16.vkuiIcon--w-8) {\n  padding-block: 16px;\n  padding-inline: 14px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.IconButton--sizeY-compact :global(.vkuiIcon--16),\n.IconButton--sizeY-compact :global(.vkuiIcon--16.vkuiIcon--w-8) {\n  padding: 14px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.IconButton :global(.vkuiIcon--24) {\n  padding: 12px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.IconButton--sizeY-compact :global(.vkuiIcon--24) {\n  padding: 10px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.IconButton :global(.vkuiIcon--28) {\n  padding: 10px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.IconButton--sizeY-compact :global(.vkuiIcon--28) {\n  padding: 8px;\n}\n\n@media (--sizeY-compact) {\n  .IconButton--sizeY-none {\n    block-size: 44px;\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  .IconButton--sizeY-none :global(.vkuiIcon--16),\n  .IconButton--sizeY-none :global(.vkuiIcon--16.vkuiIcon--w-8) {\n    padding: 14px;\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  .IconButton--sizeY-none :global(.vkuiIcon--24) {\n    padding: 10px;\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  .IconButton--sizeY-none :global(.vkuiIcon--28) {\n    padding: 8px;\n  }\n}\n\n/**\n * CMP:\n * - FormItem\n * - FormLayoutGroup\n * - FormField\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--removable) :global(.vkuiInternalRemovable__content) > .IconButton,\n:global(.vkuiInternalFormLayoutGroup--removable)\n  :global(.vkuiInternalRemovable__content)\n  > .IconButton,\n:global(.vkuiInternalFormField__after) .IconButton {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  inline-size: var(--vkui--size_field_height--regular);\n  block-size: var(--vkui--size_field_height--regular);\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormField__after)\n  .IconButton\n  :global(.vkuiIcon):global(.vkuiIcon):global(.vkuiIcon) {\n  padding: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormField__after) .IconButton--sizeY-compact {\n  inline-size: var(--vkui--size_field_height--compact);\n  block-size: var(--vkui--size_field_height--compact);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--removable)\n  :global(.vkuiInternalRemovable__content)\n  > .IconButton--sizeY-compact,\n:global(.vkuiInternalFormLayoutGroup--removable)\n  :global(.vkuiInternalRemovable__content)\n  > .IconButton--sizeY-compact {\n  block-size: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalFormField__after) .IconButton--sizeY-none {\n    inline-size: var(--vkui--size_field_height--compact);\n    block-size: var(--vkui--size_field_height--compact);\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalFormItem--removable)\n    :global(.vkuiInternalRemovable__content)\n    > .IconButton--sizeY-none,\n  :global(.vkuiInternalFormLayoutGroup--removable)\n    :global(.vkuiInternalRemovable__content)\n    > .IconButton--sizeY-none {\n    block-size: var(--vkui--size_field_height--compact);\n  }\n}\n\n/**\n * CMP:\n * SimpleCell\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalSimpleCell__after) .IconButton:last-child {\n  margin-inline-end: -12px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalSimpleCell__after) .IconButton--ios:last-child {\n  margin-inline-end: -9px;\n}\n\n/**\n * CMP:\n * Alert\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalAlert__dismiss).IconButton {\n  block-size: 36px;\n  padding: 8px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={IconButton:"IconButton--PgPFw","IconButton--sizeY-compact":"IconButton--sizeY-compact--xpjui","IconButton--ios":"IconButton--ios--fXtvM","IconButton--sizeY-none":"IconButton--sizeY-none--_mhUD"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VisuallyHidden--bAIOu{height:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}.VisuallyHidden--focusable-input--gqp5y{height:100%!important;left:0;top:0;width:100%!important;clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AACA,uBAEE,oBAA0B,CAG1B,qBAAuB,CADvB,mBAAqB,CAHrB,2BAA6B,CAK7B,4BAA8B,CAH9B,mBAA2B,CAI3B,4BAAiC,CAGjC,kBAAoB,CAFpB,4BAAqB,CAArB,oBAAqB,CAGrB,SAAU,CAFV,yBAGF,CAIA,wCAGE,qBAA2B,CAF3B,MAAqB,CACrB,KAAoB,CAEpB,oBAA4B,CAC5B,mBAAqB,CACrB,gCAA0B,CAA1B,wBAA0B,CAC1B,mBACF",sourcesContent:["/* stylelint-disable declaration-no-important */\n.VisuallyHidden {\n  position: absolute !important;\n  block-size: 1px !important;\n  inline-size: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; /* Fix for https://github.com/twbs/bootstrap/issues/25686 */\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%);\n  overflow: hidden !important;\n  border: 0 !important;\n  opacity: 0;\n}\n\n/* Чтобы фокус скринридера, попавший на скрытый инпут был виден.\n * Особенно актуально для Android TalkBack */\n.VisuallyHidden--focusable-input {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  block-size: 100% !important;\n  inline-size: 100% !important;\n  clip: auto !important;\n  clip-path: none !important;\n  pointer-events: none;\n}\n/* stylelint-enable declaration-no-important */\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHidden:"VisuallyHidden--bAIOu","VisuallyHidden--focusable-input":"VisuallyHidden--focusable-input--gqp5y"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);