"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5594],{"./src/components/Search/Search.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Search});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),search_outline_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/search_outline_16.js"),clear_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/clear_16.js"),cancel_24=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/24/cancel_24.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useAdaptivityConditionalRender=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),useBooleanState=__webpack_require__("./src/hooks/useBooleanState.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useNativeFormResetListener=__webpack_require__("./src/hooks/useNativeFormResetListener.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),callMultiple=__webpack_require__("./src/lib/callMultiple.ts"),functions=__webpack_require__("./src/lib/touch/functions.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),Button=__webpack_require__("./src/components/Button/Button.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Headline=__webpack_require__("./src/components/Typography/Headline/Headline.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Search_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Search/Search.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Search_module.A,options);const Search_Search_module=Search_module.A&&Search_module.A.locals?Search_module.A.locals:void 0,Search=({id:idProp,before=(0,jsx_runtime.jsx)(search_outline_16.b,{}),className,placeholder="Поиск",after="Отмена",getRef,icon:iconProp,onIconClick,style,autoComplete="off",onChange,iconLabel,clearLabel="Очистить",noPadding,getRootRef,findButtonText="Найти",onFindButtonClick,...inputProps})=>{const inputRef=(0,useExternRef.Z)(getRef),{value:isFocused,setTrue:setFocusedTrue,setFalse:setFocusedFalse}=(0,useBooleanState.B)(!1),generatedId=react.useId(),inputId=idProp||`search-${generatedId}`,[hasValue,setHasValue]=react.useState((()=>Boolean(inputProps.value||inputProps.defaultValue))),{sizeY="none"}=(0,useAdaptivity.L)(),{sizeY:adaptiveSizeY}=(0,useAdaptivityConditionalRender.V)(),platform=(0,usePlatform.V)(),hasAfter="ios"===platform&&(0,es6.G1)(after),onCancel=react.useCallback((()=>{const nativeInputValueSetter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set;nativeInputValueSetter?.call(inputRef.current,"");const ev2=new Event("input",{bubbles:!0});inputRef.current?.dispatchEvent(ev2)}),[inputRef]),onIconClickStart=react.useCallback((e=>onIconClick?.(e)),[onIconClick]),onIconCancelClickStart=react.useCallback((e=>{e.preventDefault(),inputRef.current?.focus(),(0,functions.jl)()&&onCancel()}),[inputRef,onCancel]);(0,useIsomorphicLayoutEffect.E)((()=>{void 0!==inputProps.value&&setHasValue(Boolean(inputProps.value))}),[inputProps.value]),(0,useNativeFormResetListener.g)(inputRef,(()=>{setHasValue(Boolean(inputProps.defaultValue))}));const renderIconButton=(icon,props={})=>(0,jsx_runtime.jsxs)(IconButton.K,{hoverMode:"opacity",onPointerDown:onIconClickStart,className:Search_Search_module.icon,onFocus:setFocusedTrue,onBlur:setFocusedFalse,onClick:es6.lQ,...props,children:[(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:iconLabel}),icon]});return(0,jsx_runtime.jsxs)("div",{className:(0,es6.xW)("vkuiInternalSearch",Search_Search_module.host,"none"===sizeY&&Search_Search_module.sizeYNone,"compact"===sizeY&&Search_Search_module.sizeYCompact,isFocused&&Search_Search_module.focused,hasValue&&Search_Search_module.hasValue,hasAfter&&Search_Search_module.hasAfter,iconProp&&Search_Search_module.hasIcon,inputProps.disabled&&Search_Search_module.disabled,!noPadding&&Search_Search_module.withPadding,className),ref:getRootRef,style,children:[(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.field,children:[(0,jsx_runtime.jsx)("label",{htmlFor:inputId,className:Search_Search_module.label,children:placeholder}),(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.input,children:[before,(0,jsx_runtime.jsx)(Headline.$,{Component:"input",type:"search",level:"1",weight:"3",...inputProps,id:inputId,placeholder,autoComplete,getRootRef:inputRef,className:Search_Search_module.nativeInput,onFocus:e=>{setFocusedTrue(),inputProps.onFocus&&inputProps.onFocus(e)},onBlur:e=>{setFocusedFalse(),inputProps.onBlur&&inputProps.onBlur(e)},onChange:(0,callMultiple.j)(onChange,(e=>setHasValue(Boolean(e.currentTarget.value))))})]}),(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.controls,children:[iconProp&&("function"==typeof iconProp?iconProp(renderIconButton):renderIconButton(iconProp)),(0,jsx_runtime.jsxs)(IconButton.K,{hoverMode:"opacity",onPointerDown:onIconCancelClickStart,onClick:onCancel,className:Search_Search_module.icon,tabIndex:hasValue?void 0:-1,disabled:inputProps.disabled,children:[(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:clearLabel}),"ios"===platform?(0,jsx_runtime.jsx)(clear_16.M,{}):(0,jsx_runtime.jsx)(cancel_24.S,{})]}),adaptiveSizeY.compact&&onFindButtonClick&&(0,jsx_runtime.jsx)(Button.$,{mode:"primary",size:"m",className:(0,es6.xW)(Search_Search_module.findButton,adaptiveSizeY.compact.className),focusVisibleMode:"inside",onClick:onFindButtonClick,tabIndex:hasValue?void 0:-1,children:findButtonText})]})]}),hasAfter&&(0,jsx_runtime.jsx)("div",{className:Search_Search_module.after,children:(0,jsx_runtime.jsx)(Button.$,{mode:"tertiary",size:"m",focusVisibleMode:"inside",hoverMode:"opacity",activeMode:"opacity",onClick:onCancel,onFocus:setFocusedTrue,onBlur:setFocusedFalse,children:(0,jsx_runtime.jsx)("span",{className:Search_Search_module.afterTextClip,children:after})})})]})};try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{after:{defaultValue:{value:"Отмена"},description:'iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.',name:"after",required:!1,type:{name:"ReactNode"}},before:{defaultValue:{value:"<Icon16SearchOutline />"},description:"",name:"before",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode | ((renderFn: RenderIconButtonFn) => ReactNode)"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"PointerEventHandler<HTMLElement>"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"",name:"iconLabel",required:!1,type:{name:"string"}},clearLabel:{defaultValue:{value:"Очистить"},description:"",name:"clearLabel",required:!1,type:{name:"string"}},noPadding:{defaultValue:null,description:"Удаляет отступы у компонента",name:"noPadding",required:!1,type:{name:"boolean"}},findButtonText:{defaultValue:{value:"Найти"},description:"Текст для кнопки Найти",name:"findButtonText",required:!1,type:{name:"string"}},onFindButtonClick:{defaultValue:null,description:"Коллбэк для кнопки Найти",name:"onFindButtonClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search/Search.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"src/components/Search/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useBooleanState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useBooleanState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const useBooleanState=(defaultValue=!1)=>{const[value,setValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),setTrue=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{setValue(!0)}),[]),setFalse=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{setValue(!1)}),[]),toggle=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{setValue(!value)}),[value]);return{value,setTrue,setFalse,toggle}}},"./src/hooks/useNativeFormResetListener.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>useNativeFormResetListener});var _lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");const useNativeFormResetListener=(ref,handler)=>{(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__.E)((()=>{if(!ref.current)return;const formEl=ref.current.closest("form");return formEl?(formEl.addEventListener("reset",handler),()=>{formEl.removeEventListener("reset",handler)}):void 0}),[ref,handler])}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Search/Search.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Search__host--B0nFy{display:flex;overflow:hidden;-webkit-tap-highlight-color:transparent;--vkui_internal--search_height:var(--vkui--size_search_height--regular)}.Search__withPadding--hy1Sk{padding-block:8px;padding-inline:var(--vkui--size_base_padding_horizontal--regular)}.Search__sizeYCompact--tE2jb{--vkui_internal--search_height:var(--vkui--size_search_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Search__sizeYNone--sHBWr{--vkui_internal--search_height:var(--vkui--size_search_height--compact)}}.Search__field--Qr5iN{background-color:var(--vkui--color_search_field_background);block-size:var(--vkui_internal--search_height);border-radius:var(--vkui--size_border_radius--regular);display:flex;flex-basis:0%;flex-grow:2;inline-size:10000px;overflow:hidden;position:relative}.Search__field--Qr5iN:hover{background-color:var(--vkui--color_search_field_background--hover)}.Search__field--Qr5iN:active{background-color:var(--vkui--color_search_field_background--active)}.Search__label--DCjXi{cursor:text;inset:0;opacity:0;position:absolute}.Search__input--hKgr_{-webkit-padding-start:12px;align-items:center;block-size:100%;border-radius:inherit;color:var(--vkui--color_icon_medium);display:flex;inline-size:calc(100% - 1px);justify-content:flex-start;padding-inline-start:12px;position:relative}.Search__nativeInput--cZvvQ{-webkit-appearance:none;-moz-appearance:none;appearance:none;block-size:100%;border:0;inset:0;margin:0;padding:0;position:absolute;-webkit-padding-start:36px;background-color:transparent;border-radius:inherit;box-sizing:border-box;color:var(--vkui--color_text_primary);flex-grow:1;inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;max-inline-size:100%;min-inline-size:0;padding-inline-start:36px}.Search__nativeInput--cZvvQ::-webkit-search-cancel-button,.Search__nativeInput--cZvvQ::-webkit-search-decoration,.Search__nativeInput--cZvvQ::-webkit-search-results-button,.Search__nativeInput--cZvvQ::-webkit-search-results-decoration{display:none}.Search__nativeInput--cZvvQ:focus{outline:var(--vkui_internal--outline-reset)}.Search__hasAfter--KnM49 .Search__nativeInput--cZvvQ{border-end-end-radius:0;border-start-end-radius:0}.Search__disabled--aM6S4{cursor:default;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.Search__nativeInput--cZvvQ:disabled{opacity:var(--vkui--opacity_disable_accessibility)}.Search__nativeInput--cZvvQ::placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Search__nativeInput--cZvvQ:disabled::placeholder{color:var(--vkui--color_text_secondary)}.Search__controls--CUcsm{align-items:center;color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;position:relative;transform:translate3d(100%,0,0);transition:transform .3s var(--vkui--animation_easing_platform);--vkui_internal--search_icon_size:calc(var(--vkui_internal--search_height) + 4px)}.Search__hasIcon--M0kFl .Search__controls--CUcsm{transform:translate3d(calc(100% - var(--vkui_internal--search_icon_size)),0,0)}.Search__hasValue--Dr3F4 .Search__controls--CUcsm{transform:translateZ(0)}.Search__icon--dVCzU{align-items:center;block-size:100%;border-radius:var(--vkui--size_border_radius--regular);display:flex;inline-size:var(--vkui_internal--search_icon_size);justify-content:center}.Search__icon--dVCzU .vkuiIcon{padding:0}.Search__after--on1Ap{display:flex;flex-basis:0%;flex-grow:0;max-inline-size:-webkit-min-content;max-inline-size:-moz-min-content;max-inline-size:min-content;min-inline-size:0;pointer-events:none;position:relative;transition:flex-grow .3s var(--vkui--animation_easing_platform)}.Search__focused--fQMow .Search__after--on1Ap,.Search__hasValue--Dr3F4 .Search__after--on1Ap{flex-grow:1;pointer-events:auto}.Search__after--on1Ap:after,.Search__after--on1Ap:before{block-size:100%;content:"";display:block;flex-shrink:0;inline-size:4px}.Search__withPadding--hy1Sk .Search__after--on1Ap:after{-webkit-margin-end:calc(-1 * var(--vkui--size_base_padding_horizontal--regular));margin-inline-end:calc(-1 * var(--vkui--size_base_padding_horizontal--regular))}.Search__afterTextClip--lm3IK{display:block;overflow:hidden;text-overflow:clip;white-space:nowrap}.Search__findButton--sGnyr{inline-size:auto;max-inline-size:none;min-inline-size:0}.Search__modePlain--vSjVp .Search__host--B0nFy{-webkit-padding-before:4px;padding-block-start:4px}',"",{version:3,sources:["webpack://./src/components/Search/Search.module.css"],names:[],mappings:"AAAA,qBACE,YAAa,CACb,eAAgB,CAChB,uCAAwC,CAExC,uEACF,CAEA,4BACE,iBAAkB,CAClB,iEACF,CAMA,6BACE,uEACF,CAEA,iEACE,0BACE,uEACF,CACF,CAEA,sBAME,2DAA4D,CAD5D,8CAA+C,CAE/C,sDAAuD,CALvD,YAAa,CAEb,aAAc,CADd,WAAY,CAQZ,mBAAoB,CACpB,eAAgB,CAXhB,iBAYF,CAEA,4BACE,kEACF,CAEA,6BACE,mEACF,CAEA,sBAEE,WAAY,CACZ,OAAQ,CACR,SAAU,CAHV,iBAIF,CAEA,sBACE,0BAA0B,CAI1B,kBAAmB,CAEnB,eAAgB,CAChB,qBAAsB,CANtB,oCAAqC,CACrC,YAAa,CAGb,4BAA6B,CAF7B,0BAA2B,CAH3B,yBAA0B,CAQ1B,iBACF,CAEA,4BAIE,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CADhB,eAAgB,CAEhB,QAAS,CAHT,OAAQ,CAIR,QAAS,CACT,SAAU,CANV,iBAAkB,CAOlB,0BAA0B,CAO1B,4BAA6B,CAL7B,qBAAsB,CADtB,qBAAsB,CAOtB,qCAAsC,CAJtC,WAAY,CAEZ,kCAAoB,CAApB,0BAAoB,CAApB,mBAAoB,CAHpB,oBAAqB,CAErB,iBAAkB,CALlB,yBASF,CAEA,2OAIE,YACF,CAEA,kCACE,2CACF,CAEA,qDAEE,uBAAwB,CADxB,yBAEF,CAEA,yBAGE,cAAe,CAFf,kDAAmD,CACnD,mBAEF,CAEA,qCACE,kDACF,CAEA,yCACE,uCAAwC,CAExC,SACF,CAEA,kDACE,uCACF,CAEA,yBAGE,kBAAmB,CAEnB,uCAAwC,CAHxC,YAAa,CAEb,sBAAuB,CAHvB,iBAAkB,CAOlB,+BAAkC,CAFlC,+DAAiE,CAIjE,iFACF,CAEA,iDAEE,8EACF,CAEA,kDACE,uBACF,CAEA,qBAGE,kBAAmB,CAEnB,eAAgB,CAChB,sDAAuD,CAJvD,YAAa,CADb,kDAAmD,CAGnD,sBAGF,CAGA,+BACE,SACF,CAEA,sBAEE,YAAa,CAEb,aAAc,CADd,WAAY,CAGZ,mCAA4B,CAA5B,gCAA4B,CAA5B,2BAA4B,CAD5B,iBAAkB,CAGlB,mBAAoB,CAPpB,iBAAkB,CAMlB,+DAEF,CAEA,6FAEE,WAAY,CACZ,mBACF,CAEA,yDAME,eAAgB,CAJhB,UAAW,CAEX,aAAc,CADd,aAAc,CAEd,eAEF,CAEA,wDACE,gFAAgF,CAAhF,+EACF,CAEA,8BACE,aAAc,CAGd,eAAgB,CAFhB,kBAAmB,CACnB,kBAEF,CAEA,2BAGE,gBAAoB,CADpB,oBAAwB,CADxB,iBAGF,CAGA,+CACE,0BAAwB,CAAxB,uBACF",sourcesContent:[".host {\n  display: flex;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent;\n\n  --vkui_internal--search_height: var(--vkui--size_search_height--regular);\n}\n\n.withPadding {\n  padding-block: 8px;\n  padding-inline: var(--vkui--size_base_padding_horizontal--regular);\n}\n\n/*\n  sizeY-compact\n */\n\n.sizeYCompact {\n  --vkui_internal--search_height: var(--vkui--size_search_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone {\n    --vkui_internal--search_height: var(--vkui--size_search_height--compact);\n  }\n}\n\n.field {\n  position: relative;\n  display: flex;\n  flex-grow: 2;\n  flex-basis: 0%;\n  block-size: var(--vkui_internal--search_height);\n  background-color: var(--vkui--color_search_field_background);\n  border-radius: var(--vkui--size_border_radius--regular);\n  /**\n   * Костыль для PanelHeader. Необходимо для растягивания на всю ширину.\n  */\n  inline-size: 10000px;\n  overflow: hidden;\n}\n\n.field:hover {\n  background-color: var(--vkui--color_search_field_background--hover);\n}\n\n.field:active {\n  background-color: var(--vkui--color_search_field_background--active);\n}\n\n.label {\n  position: absolute;\n  cursor: text;\n  inset: 0;\n  opacity: 0;\n}\n\n.input {\n  padding-inline-start: 12px;\n  color: var(--vkui--color_icon_medium);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  inline-size: calc(100% - 1px);\n  block-size: 100%;\n  border-radius: inherit;\n  position: relative;\n}\n\n.nativeInput {\n  position: absolute;\n  inset: 0;\n  block-size: 100%;\n  appearance: none; /* не используем textfield из-за бага в iOS 15.1 http://www.openradar.me/FB9744107 */\n  border: 0;\n  margin: 0;\n  padding: 0;\n  padding-inline-start: 36px;\n  box-sizing: border-box;\n  border-radius: inherit;\n  max-inline-size: 100%;\n  flex-grow: 1;\n  min-inline-size: 0;\n  inline-size: stretch; /* автопрефиксер добавит фолбеки https://caniuse.com/mdn-css_properties_width_stretch */\n  background-color: transparent;\n  color: var(--vkui--color_text_primary);\n}\n\n.nativeInput::-webkit-search-decoration,\n.nativeInput::-webkit-search-cancel-button,\n.nativeInput::-webkit-search-results-button,\n.nativeInput::-webkit-search-results-decoration {\n  display: none;\n}\n\n.nativeInput:focus {\n  outline: var(--vkui_internal--outline-reset);\n}\n\n.hasAfter .nativeInput {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}\n\n.disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n  pointer-events: none;\n  cursor: default;\n}\n\n.nativeInput:disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.nativeInput::placeholder {\n  color: var(--vkui--color_text_secondary);\n  /* Для Firefox */\n  opacity: 1;\n}\n\n.nativeInput:disabled::placeholder {\n  color: var(--vkui--color_text_secondary);\n}\n\n.controls {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--vkui--color_icon_secondary);\n  transition: transform 0.3s var(--vkui--animation_easing_platform);\n  /* Используем translate3d, чтобы поправить дергание при наведении в Safari */\n  transform: translate3d(100%, 0, 0);\n\n  --vkui_internal--search_icon_size: calc(var(--vkui_internal--search_height) + 4px);\n}\n\n.hasIcon .controls {\n  /* Исключаем параметр icon из расчёта, чтобы он оставался видимым */\n  transform: translate3d(calc(100% - var(--vkui_internal--search_icon_size)), 0, 0);\n}\n\n.hasValue .controls {\n  transform: translate3d(0, 0, 0);\n}\n\n.icon {\n  inline-size: var(--vkui_internal--search_icon_size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  block-size: 100%;\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.icon :global(.vkuiIcon) {\n  padding: 0;\n}\n\n.after {\n  position: relative;\n  display: flex;\n  flex-grow: 0;\n  flex-basis: 0%;\n  min-inline-size: 0;\n  max-inline-size: min-content;\n  transition: flex-grow 0.3s var(--vkui--animation_easing_platform);\n  pointer-events: none;\n}\n\n.focused .after,\n.hasValue .after {\n  flex-grow: 1;\n  pointer-events: initial;\n}\n\n.after::before,\n.after::after {\n  content: '';\n  flex-shrink: 0;\n  display: block;\n  inline-size: 4px;\n  block-size: 100%;\n}\n\n.withPadding .after::after {\n  margin-inline-end: calc(-1 * var(--vkui--size_base_padding_horizontal--regular));\n}\n\n.afterTextClip {\n  display: block;\n  text-overflow: clip;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.findButton {\n  min-inline-size: initial;\n  max-inline-size: initial;\n  inline-size: initial;\n}\n\n/* FIXME поменять на `:global(.vkuiInternalGroup--mode-plain)` */\n.modePlain .host {\n  padding-block-start: 4px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Search__host--B0nFy",withPadding:"Search__withPadding--hy1Sk",sizeYCompact:"Search__sizeYCompact--tE2jb",sizeYNone:"Search__sizeYNone--sHBWr",field:"Search__field--Qr5iN",label:"Search__label--DCjXi",input:"Search__input--hKgr_",nativeInput:"Search__nativeInput--cZvvQ",hasAfter:"Search__hasAfter--KnM49",disabled:"Search__disabled--aM6S4",controls:"Search__controls--CUcsm",hasIcon:"Search__hasIcon--M0kFl",hasValue:"Search__hasValue--Dr3F4",icon:"Search__icon--dVCzU",after:"Search__after--on1Ap",focused:"Search__focused--fQMow",afterTextClip:"Search__afterTextClip--lm3IK",findButton:"Search__findButton--sGnyr",modePlain:"Search__modePlain--vSjVp"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);