"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3843],{"./src/components/Removable/Removable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Removable});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),cancel_24=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useGlobalEventListener=__webpack_require__("./src/hooks/useGlobalEventListener.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),lib_children=__webpack_require__("./src/lib/children.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),Tappable=__webpack_require__("./src/components/Tappable/Tappable.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Removable_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Removable/Removable.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Removable_module.A,options);const Removable_Removable_module=Removable_module.A&&Removable_module.A.locals?Removable_module.A.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var RemovableIos=function(param){var onRemove=param.onRemove,removePlaceholder=param.removePlaceholder,removePlaceholderString=param.removePlaceholderString,childrenProp=param.children,toggleButtonTestId=param.toggleButtonTestId,removeButtonTestId=param.removeButtonTestId,window=(0,dom.a4)().window,removeButtonRef=react.useRef(null),disabledRef=react.useRef(!0),_React_useState=_sliced_to_array(react.useState(0),2),removeOffset=_React_useState[0],updateRemoveOffset=_React_useState[1];(0,useGlobalEventListener.l)(window,"click",(function(){removeOffset>0&&updateRemoveOffset(0)}),{capture:!0});return(0,jsx_runtime.jsxs)("div",{className:(0,es6.xW)(Removable_Removable_module.Removable__content,"vkuiInternalRemovable__content"),style:{transform:"translateX(-".concat(null!=removeOffset?removeOffset:0,"px)")},onTransitionEnd:function(){var _removeButtonRef_current;removeOffset>0?null==removeButtonRef||null===(_removeButtonRef_current=removeButtonRef.current)||void 0===_removeButtonRef_current||_removeButtonRef_current.focus():disabledRef.current=!0},children:[(0,jsx_runtime.jsxs)(IconButton.K,{hasActive:!1,hasHover:!1,className:(0,es6.xW)(Removable_Removable_module.Removable__action,Removable_Removable_module.Removable__toggle,"vkuiInternalRemovable__action"),onClick:function(e){if(e.stopPropagation(),removeButtonRef.current){var offsetWidth=removeButtonRef.current.offsetWidth;disabledRef.current=!1,updateRemoveOffset(offsetWidth)}},disabled:removeOffset>0,"data-testid":toggleButtonTestId,children:[(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:removePlaceholderString}),(0,jsx_runtime.jsx)("i",{className:Removable_Removable_module["Removable__toggle-in"],role:"presentation"})]}),"function"==typeof childrenProp?childrenProp({isRemoving:removeOffset>0}):childrenProp,(0,jsx_runtime.jsx)("span",{className:Removable_Removable_module.Removable__offset,"aria-hidden":!0}),(0,jsx_runtime.jsx)(Tappable.S,{Component:"button",hasActive:!1,hasHover:!1,disabled:disabledRef.current,getRootRef:removeButtonRef,className:Removable_Removable_module.Removable__remove,onClick:onRemove,"data-testid":removeButtonTestId,children:(0,jsx_runtime.jsx)("span",{className:Removable_Removable_module["Removable__remove-in"],children:removePlaceholder})})]})},Removable=function(_param){var children=_param.children,_param_onRemove=_param.onRemove,onRemove=void 0===_param_onRemove?es6.lQ:_param_onRemove,_param_removePlaceholder=_param.removePlaceholder,removePlaceholder=void 0===_param_removePlaceholder?"Удалить":_param_removePlaceholder,_param_align=_param.align,align=void 0===_param_align?"center":_param_align,_param_indent=_param.indent,indent=void 0!==_param_indent&&_param_indent,toggleButtonTestId=_param.toggleButtonTestId,removeButtonTestId=_param.removeButtonTestId,restProps=_object_without_properties(_param,["children","onRemove","removePlaceholder","align","indent","toggleButtonTestId","removeButtonTestId"]),platform=(0,usePlatform.V)(),onRemoveClick=function(e){e.preventDefault(),onRemove(e)},removePlaceholderString=(0,lib_children.D)(removePlaceholder);return(0,jsx_runtime.jsxs)(RootComponent.I,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{baseClassName:(0,es6.xW)("ios"===platform&&Removable_Removable_module["Removable--ios"],"start"===align&&Removable_Removable_module["Removable--align-start"],indent&&Removable_Removable_module["Removable--indent"]),children:["ios"!==platform&&(0,jsx_runtime.jsxs)("div",{className:(0,es6.xW)(Removable_Removable_module.Removable__content,"vkuiInternalRemovable__content"),children:["function"==typeof children?children({isRemoving:!1}):children,(0,jsx_runtime.jsx)(IconButton.K,{activeMode:"opacity",hoverMode:"opacity",className:(0,es6.xW)(Removable_Removable_module.Removable__action,"vkuiInternalRemovable__action"),onClick:onRemoveClick,label:removePlaceholderString,"data-testid":removeButtonTestId,children:(0,jsx_runtime.jsx)(cancel_24.S,{role:"presentation"})}),(0,jsx_runtime.jsx)("span",{className:Removable_Removable_module.Removable__offset,"aria-hidden":!0})]}),"ios"===platform&&(0,jsx_runtime.jsx)(RemovableIos,{onRemove:onRemoveClick,removePlaceholder,removePlaceholderString,toggleButtonTestId,removeButtonTestId,children})]}))};try{Removable.displayName="Removable",Removable.__docgenInfo={description:"",displayName:"Removable",props:{align:{defaultValue:{value:"center"},description:"Расположение кнопки удаления.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'}]}},indent:{defaultValue:{value:"false"},description:"Скрывает кнопку, но оставляет отступ.\n@since 5.4.0",name:"indent",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},removePlaceholder:{defaultValue:{value:"Удалить"},description:"Текст кнопки удаления ячейки. Визуально скрыт везде, кроме iOS. На iOS появляется в выезжающей кнопке для удаления ячейки.",name:"removePlaceholder",required:!1,type:{name:"ReactNode"}},onRemove:{defaultValue:null,description:"Коллбэк срабатывает при клике на контрол удаления.",name:"onRemove",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>, rootEl?: HTMLElement | null) => void)"}},toggleButtonTestId:{defaultValue:null,description:"(test) iOS only. testId кнопки, которая активирует кнопку удаления",name:"toggleButtonTestId",required:!1,type:{name:"string"}},removeButtonTestId:{defaultValue:null,description:"(test) testId кнопки удаления",name:"removeButtonTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Removable/Removable.tsx#Removable"]={docgenInfo:Removable.__docgenInfo,name:"Removable",path:"src/components/Removable/Removable.tsx#Removable"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/children.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>getTextFromChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");var childToString=function(child){return null==child||"boolean"==typeof child||"{}"===JSON.stringify(child)?"":child.toString()},getTextFromChildren=function(children){return function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}(children,Array)||(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce((function(text,child){var newText="",isValidElementResult=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child),hasChildren=isValidElementResult&&"children"in child.props;return newText=isValidElementResult&&hasChildren?getTextFromChildren(child.props.children):isValidElementResult&&!hasChildren?"":childToString(child),text.concat(newText)}),""):childToString(children)}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Removable/Removable.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Removable__content--Vg6EH{align-items:center;display:flex;position:relative;-webkit-padding-start:var(--vkui--size_base_padding_horizontal--regular);padding-inline-start:var(--vkui--size_base_padding_horizontal--regular)}.Removable__action--ceukz{border:0;color:var(--vkui--color_icon_secondary);flex-grow:0;flex-shrink:0;position:relative}.Removable--align-start--H3vNV .Removable__action--ceukz{align-self:flex-start}.Removable--ios--Gffek{overflow:hidden}.Removable__remove--Xe5Yo{background-color:var(--vkui--color_background_negative);block-size:100%;border:0;border-radius:0;color:var(--vkui_internal--white);font-size:15px;inset-block-start:0;inset-inline-start:100%;line-height:45px;padding-block:0;padding-inline:10px;position:absolute}.Removable__remove-in--_1wx0{align-items:center;block-size:100%;display:flex;inline-size:100%;justify-content:center}@media (prefers-reduced-motion:no-preference){.Removable--ios--Gffek .Removable__content--Vg6EH{transition:transform .6s var(--vkui--animation_easing_platform)}}.Removable__toggle--mNDDP{background:none;block-size:44px;display:block;inline-size:44px;margin-block:0;margin-inline:2px}.Removable__toggle-in--puOQ8{align-content:center;align-items:center;block-size:100%;border:0;display:flex;inline-size:100%;justify-content:center;position:relative}.Removable__toggle-in--puOQ8:after{background-color:var(--vkui--color_background_negative);block-size:22px;border-radius:50%;content:"";inline-size:22px}.Removable__toggle-in--puOQ8:before{background-color:var(--vkui_internal--white);block-size:2px;content:"";display:block;inline-size:12px;position:absolute}.Removable--ios--Gffek .Removable__content--Vg6EH{padding-inline:0 var(--vkui--size_base_padding_horizontal--regular)}.Removable--indent--_GPSc .Removable__action--ceukz{pointer-events:none;visibility:hidden}.vkuiInternalFormItem--removable .Removable__content--Vg6EH,.vkuiInternalFormLayoutGroup--removable .Removable__content--Vg6EH{align-items:flex-start;flex-wrap:wrap}.Removable__offset--x9Ov0{display:none}.vkuiInternalFormItem--withTop .vkuiInternalFormItem__removable~.Removable__offset--x9Ov0,.vkuiInternalFormLayoutGroup--removable .vkuiInternalFormItem--withTop~.Removable__offset--x9Ov0{block-size:calc(2px + var(--vkui--font_subhead--line_height--regular) + 8px);display:block;inline-size:100%;order:-1}.vkuiInternalFormItem--sizeY-compact.vkuiInternalFormItem--withTop .vkuiInternalFormItem__removable~.Removable__offset--x9Ov0,.vkuiInternalFormLayoutGroup--sizeY-compact.vkuiInternalFormLayoutGroup--removable .vkuiInternalFormItem--withTop~.Removable__offset--x9Ov0{block-size:calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.vkuiInternalFormItem--sizeY-none.vkuiInternalFormItem--withTop .vkuiInternalFormItem__removable~.Removable__offset--x9Ov0,.vkuiInternalFormLayoutGroup--sizeY-none.vkuiInternalFormLayoutGroup--removable .vkuiInternalFormItem--withTop~.Removable__offset--x9Ov0{block-size:calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px)}}',"",{version:3,sources:["webpack://./src/components/Removable/Removable.module.css"],names:[],mappings:"AAAA,2BAGE,kBAAmB,CADnB,YAAa,CADb,iBAAkB,CAGlB,wEAAwE,CAAxE,uEACF,CAEA,0BAIE,QAAS,CACT,uCAAwC,CAHxC,WAAY,CACZ,aAAc,CAFd,iBAKF,CAEA,yDACE,qBACF,CAKA,uBACE,eACF,CAEA,0BAUE,uDAAwD,CANxD,eAAgB,CAOhB,QAAS,CACT,eAAgB,CAHhB,iCAAkC,CAFlC,cAAe,CAJf,mBAAoB,CADpB,uBAAwB,CAMxB,gBAAiB,CAHjB,eAAgB,CAChB,mBAAoB,CALpB,iBAYF,CAEA,6BAEE,kBAAmB,CAGnB,eAAgB,CAJhB,YAAa,CAGb,gBAAiB,CADjB,sBAGF,CAEA,8CACE,kDACE,+DACF,CACF,CAEA,0BAME,eAAgB,CAHhB,eAAgB,CAFhB,aAAc,CACd,gBAAiB,CAEjB,cAAe,CACf,iBAEF,CAEA,6BAIE,oBAAqB,CADrB,kBAAmB,CAInB,eAAgB,CAChB,QAAS,CANT,YAAa,CAIb,gBAAiB,CADjB,sBAAuB,CAJvB,iBAQF,CAEA,mCAIE,uDAAwD,CADxD,eAAgB,CAEhB,iBAAkB,CAJlB,UAAW,CACX,gBAIF,CAEA,oCAME,4CAA6C,CAD7C,cAAe,CAJf,UAAW,CAEX,aAAc,CACd,gBAAiB,CAFjB,iBAKF,CAEA,kDACE,mEACF,CAEA,oDAEE,mBAAoB,CADpB,iBAEF,CAQA,+HAGE,sBAAuB,CADvB,cAEF,CAEA,0BACE,YACF,CAGA,2LASE,4EAA6E,CAF7E,aAAc,CACd,gBAAiB,CAFjB,QAIF,CAGA,0QAME,4EACF,CAEA,iEAEE,oQAME,4EACF,CACF",sourcesContent:[".Removable__content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-inline-start: var(--vkui--size_base_padding_horizontal--regular);\n}\n\n.Removable__action {\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n  border: 0;\n  color: var(--vkui--color_icon_secondary);\n}\n\n.Removable--align-start .Removable__action {\n  align-self: flex-start;\n}\n\n/**\n * iOS\n */\n.Removable--ios {\n  overflow: hidden;\n}\n\n.Removable__remove {\n  position: absolute;\n  inset-inline-start: 100%;\n  inset-block-start: 0;\n  block-size: 100%;\n  padding-block: 0;\n  padding-inline: 10px;\n  font-size: 15px;\n  line-height: 45px;\n  color: var(--vkui_internal--white);\n  background-color: var(--vkui--color_background_negative);\n  border: 0;\n  border-radius: 0;\n}\n\n.Removable__remove-in {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .Removable--ios .Removable__content {\n    transition: transform 0.6s var(--vkui--animation_easing_platform);\n  }\n}\n\n.Removable__toggle {\n  display: block;\n  inline-size: 44px;\n  block-size: 44px;\n  margin-block: 0;\n  margin-inline: 2px;\n  background: none;\n}\n\n.Removable__toggle-in {\n  position: relative;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  inline-size: 100%;\n  block-size: 100%;\n  border: 0;\n}\n\n.Removable__toggle-in::after {\n  content: '';\n  inline-size: 22px;\n  block-size: 22px;\n  background-color: var(--vkui--color_background_negative);\n  border-radius: 50%;\n}\n\n.Removable__toggle-in::before {\n  content: '';\n  position: absolute;\n  display: block;\n  inline-size: 12px;\n  block-size: 2px;\n  background-color: var(--vkui_internal--white);\n}\n\n.Removable--ios .Removable__content {\n  padding-inline: 0 var(--vkui--size_base_padding_horizontal--regular);\n}\n\n.Removable--indent .Removable__action {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n/**\n * CMP:\n * FormLayoutGroup\n * FormItem\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--removable) .Removable__content,\n:global(.vkuiInternalFormLayoutGroup--removable) .Removable__content {\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.Removable__offset {\n  display: none;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--withTop)\n  :global(.vkuiInternalFormItem__removable)\n  ~ .Removable__offset,\n:global(.vkuiInternalFormLayoutGroup--removable)\n  :global(.vkuiInternalFormItem--withTop)\n  ~ .Removable__offset {\n  order: -1;\n  display: block;\n  inline-size: 100%;\n  block-size: calc(2px + var(--vkui--font_subhead--line_height--regular) + 8px);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--sizeY-compact):global(.vkuiInternalFormItem--withTop)\n  :global(.vkuiInternalFormItem__removable)\n  ~ .Removable__offset,\n:global(.vkuiInternalFormLayoutGroup--sizeY-compact):global(.vkuiInternalFormLayoutGroup--removable)\n  :global(.vkuiInternalFormItem--withTop)\n  ~ .Removable__offset {\n  block-size: calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px);\n}\n\n@media (--sizeY-compact) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalFormItem--sizeY-none):global(.vkuiInternalFormItem--withTop)\n    :global(.vkuiInternalFormItem__removable)\n    ~ .Removable__offset,\n  :global(.vkuiInternalFormLayoutGroup--sizeY-none):global(.vkuiInternalFormLayoutGroup--removable)\n    :global(.vkuiInternalFormItem--withTop)\n    ~ .Removable__offset {\n    block-size: calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Removable__content:"Removable__content--Vg6EH",Removable__action:"Removable__action--ceukz","Removable--align-start":"Removable--align-start--H3vNV","Removable--ios":"Removable--ios--Gffek",Removable__remove:"Removable__remove--Xe5Yo","Removable__remove-in":"Removable__remove-in--_1wx0",Removable__toggle:"Removable__toggle--mNDDP","Removable__toggle-in":"Removable__toggle-in--puOQ8","Removable--indent":"Removable--indent--_GPSc",Removable__offset:"Removable__offset--x9Ov0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);