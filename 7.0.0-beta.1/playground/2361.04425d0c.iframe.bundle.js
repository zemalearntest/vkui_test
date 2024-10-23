"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2361],{"./src/components/FormLayoutGroup/FormLayoutGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FormLayoutGroup});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),Removable=__webpack_require__("./src/components/Removable/Removable.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FormLayoutGroup_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FormLayoutGroup/FormLayoutGroup.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FormLayoutGroup_module.A,options);const FormLayoutGroup_FormLayoutGroup_module=FormLayoutGroup_module.A&&FormLayoutGroup_module.A.locals?FormLayoutGroup_module.A.locals:void 0,sizeYClassNames={none:(0,es6.xW)(FormLayoutGroup_FormLayoutGroup_module.sizeYNone,"vkuiInternalFormLayoutGroup--sizeY-none"),compact:(0,es6.xW)(FormLayoutGroup_FormLayoutGroup_module.sizeYCompact,"vkuiInternalFormLayoutGroup--sizeY-compact")},FormLayoutGroup=({children,mode="vertical",removable,segmented,removePlaceholder="Удалить",onRemove,getRootRef,...restProps})=>{const{sizeY="none"}=(0,useAdaptivity.L)(),isRemovable=removable&&"horizontal"===mode,rootEl=(0,useExternRef.Z)(getRootRef);return(0,jsx_runtime.jsx)(RootComponent.I,{getRootRef:rootEl,Component:"fieldset",baseClassName:(0,es6.xW)(FormLayoutGroup_FormLayoutGroup_module.host,"regular"!==sizeY&&sizeYClassNames[sizeY],"horizontal"===mode&&(0,es6.xW)(FormLayoutGroup_FormLayoutGroup_module.modeHorizontal,"vkuiInternalFormLayoutGroup--mode-horizontal"),"vertical"===mode&&"vkuiInternalFormLayoutGroup--mode-vertical",isRemovable&&(0,es6.xW)(FormLayoutGroup_FormLayoutGroup_module.withRemovable,"vkuiInternalFormLayoutGroup--removable"),segmented&&(0,es6.xW)(FormLayoutGroup_FormLayoutGroup_module.segmented,"vkuiInternalFormLayoutGroup--segmented")),...restProps,children:isRemovable?(0,jsx_runtime.jsx)(Removable.k,{className:FormLayoutGroup_FormLayoutGroup_module.removable,align:"start",removePlaceholder,onRemove:e=>{rootEl?.current&&onRemove?.(e,rootEl.current)},indent:"indent"===removable,children}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[children,(0,jsx_runtime.jsx)("span",{className:FormLayoutGroup_FormLayoutGroup_module.offset,"aria-hidden":!0})]})})};try{FormLayoutGroup.displayName="FormLayoutGroup",FormLayoutGroup.__docgenInfo={description:"",displayName:"FormLayoutGroup",props:{mode:{defaultValue:{value:"vertical"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},removable:{defaultValue:null,description:"Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.\n\nРежим `indent` предназначен для визуального отступа.",name:"removable",required:!1,type:{name:'boolean | "indent"'}},segmented:{defaultValue:null,description:"Дает возможность склеить несколько `FormItem`.",name:"segmented",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},removePlaceholder:{defaultValue:{value:"Удалить"},description:"Текст кнопки удаления ячейки. Визуально скрыт везде, кроме iOS. На iOS появляется в выезжающей кнопке для удаления ячейки.",name:"removePlaceholder",required:!1,type:{name:"ReactNode"}},onRemove:{defaultValue:null,description:"Коллбэк срабатывает при клике на контрол удаления.",name:"onRemove",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>, rootEl?: HTMLElement | null) => void)"}},toggleButtonTestId:{defaultValue:null,description:"(test) iOS only. testId кнопки, которая активирует кнопку удаления",name:"toggleButtonTestId",required:!1,type:{name:"string"}},removeButtonTestId:{defaultValue:null,description:"(test) testId кнопки удаления",name:"removeButtonTestId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Ячейка превращается в неактивную",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormLayoutGroup/FormLayoutGroup.tsx#FormLayoutGroup"]={docgenInfo:FormLayoutGroup.__docgenInfo,name:"FormLayoutGroup",path:"src/components/FormLayoutGroup/FormLayoutGroup.tsx#FormLayoutGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),FormField=__webpack_require__("./src/components/FormField/FormField.tsx"),UnstyledTextField=__webpack_require__("./src/components/UnstyledTextField/UnstyledTextField.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Input_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Input/Input.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.A,options);const Input_Input_module=Input_module.A&&Input_module.A.locals?Input_module.A.locals:void 0,sizeYClassNames={none:Input_Input_module.sizeYNone,compact:Input_Input_module.sizeYCompact},Input=({type="text",align="left",getRef,className,getRootRef,style,before,after,status,mode,...restProps})=>{const{sizeY="none"}=(0,useAdaptivity.L)();return(0,jsx_runtime.jsx)(FormField.z,{style,className:(0,es6.xW)(Input_Input_module.host,"right"===align&&Input_Input_module.alignRight,"center"===align&&Input_Input_module.alignCenter,"regular"!==sizeY&&sizeYClassNames[sizeY],before&&Input_Input_module.hasBefore,after&&Input_Input_module.hasAfter,className),getRootRef,before,after,disabled:restProps.disabled,mode,status,children:(0,jsx_runtime.jsx)(UnstyledTextField.K,{...restProps,as:"input",type,className:Input_Input_module.el,getRootRef:getRef})})};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},mode:{defaultValue:null,description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},beforeAlign:{defaultValue:null,description:"Вертикальное выравнивание иконки слева",name:"beforeAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},afterAlign:{defaultValue:null,description:"Вертикальное выравнивание иконки справа",name:"afterAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/UnstyledTextField/UnstyledTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>UnstyledTextField});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),UnstyledTextField_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/UnstyledTextField/UnstyledTextField.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UnstyledTextField_module.A,options);const UnstyledTextField_UnstyledTextField_module=UnstyledTextField_module.A&&UnstyledTextField_module.A.locals?UnstyledTextField_module.A.locals:void 0,UnstyledTextField=({as,noPadding=!1,className,...restProps})=>(0,jsx_runtime.jsx)(Text.E,{Component:as,normalize:!1,className:(0,es6.xW)(UnstyledTextField_UnstyledTextField_module.host,noPadding&&UnstyledTextField_UnstyledTextField_module.noPadding,className),...restProps});try{UnstyledTextField.displayName="UnstyledTextField",UnstyledTextField.__docgenInfo={description:'Компонент сбрасывает [User-agent stylesheets](https://www.geeksforgeeks.org/what-is-a-user-agent-stylesheet/)\nполей ввода.\n\nИспользуется в <a href="?path=/story/forms-input--playground" data-prod-href="https://vkcom.github.io/VKUI/playground/?path=/story/forms-input--playground">Input</a> и <a href="?path=/story/forms-textarea--playground" data-prod-href="https://vkcom.github.io/VKUI/playground/?path=/story/forms-textarea--playground">Textarea</a>.',displayName:"UnstyledTextField",props:{as:{defaultValue:null,description:"Задаёт какой из DOM-элементов для ввода текста использовать.",name:"as",required:!0,type:{name:"enum",value:[{value:'"input"'},{value:'"textarea"'}]}},noPadding:{defaultValue:{value:"false"},description:"По умолчанию отключено во избежание проблем из-за очередности загрузки стилей.",name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | ((instance: HTMLInputElement | null) => void) | RefObject<...> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnstyledTextField/UnstyledTextField.tsx#UnstyledTextField"]={docgenInfo:UnstyledTextField.__docgenInfo,name:"UnstyledTextField",path:"src/components/UnstyledTextField/UnstyledTextField.tsx#UnstyledTextField"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/@vkontakte/icons/dist_es6/16/spinner_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon16Spinner});var Icon16Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="spinner_16"><path fill-rule="evenodd" d="M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/cancel_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Icon24Cancel});var Icon24Cancel=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Cancel","cancel_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/spinner_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Icon24Spinner});var Icon24Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/32/spinner_32.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Icon32Spinner});var Icon32Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 16 16 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/44/spinner_44.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Icon44Spinner});var Icon44Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A22 22 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FormLayoutGroup/FormLayoutGroup.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".FormLayoutGroup__host--hzXpt{border:0;margin:0;padding:0}.FormLayoutGroup__modeHorizontal--belFq{align-items:flex-start;display:flex;flex-wrap:wrap;padding-block:var(--vkui--size_form_item_padding_vertical--regular);padding-inline:var(--vkui--size_base_padding_horizontal--regular)}.FormLayoutGroup__removable--ylroF{flex-grow:1;max-inline-size:100%;min-inline-size:0}.FormLayoutGroup__offset--C5Se1{display:none}.FormLayoutGroup__modeHorizontal--belFq .vkuiInternalFormItem--withTop~.FormLayoutGroup__offset--C5Se1{block-size:calc(2px + var(--vkui--font_subhead--line_height--regular) + 8px);display:block;min-inline-size:100%;order:-1}.FormLayoutGroup__sizeYCompact--bP28j.FormLayoutGroup__modeHorizontal--belFq .vkuiInternalFormItem--withTop~.FormLayoutGroup__offset--C5Se1{block-size:calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormLayoutGroup__sizeYNone--X46pJ.FormLayoutGroup__modeHorizontal--belFq .vkuiInternalFormItem--withTop~.FormLayoutGroup__offset--C5Se1{block-size:calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px)}}.FormLayoutGroup__withRemovable--WaPYb{padding-inline:0}.FormLayoutGroup__segmented--ciUd1{position:relative}","",{version:3,sources:["webpack://./src/components/FormLayoutGroup/FormLayoutGroup.module.css"],names:[],mappings:"AAAA,8BACE,QAAS,CAET,QAAS,CADT,SAEF,CAEA,wCAKE,sBAAuB,CAJvB,YAAa,CAGb,cAAe,CAFf,mEAAoE,CACpE,iEAGF,CAEA,mCACE,WAAY,CAEZ,oBAAqB,CADrB,iBAEF,CAEA,gCACE,YACF,CAGA,uGAIE,4EAA6E,CAF7E,aAAc,CACd,oBAAqB,CAFrB,QAIF,CAGA,4IACE,4EACF,CAEA,iEAEE,yIACE,4EACF,CACF,CAEA,uCACE,gBACF,CAEA,mCACE,iBACF",sourcesContent:[".host {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.modeHorizontal {\n  display: flex;\n  padding-block: var(--vkui--size_form_item_padding_vertical--regular);\n  padding-inline: var(--vkui--size_base_padding_horizontal--regular);\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n\n.removable {\n  flex-grow: 1;\n  min-inline-size: 0;\n  max-inline-size: 100%;\n}\n\n.offset {\n  display: none;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.modeHorizontal :global(.vkuiInternalFormItem--withTop) ~ .offset {\n  order: -1;\n  display: block;\n  min-inline-size: 100%;\n  block-size: calc(2px + var(--vkui--font_subhead--line_height--regular) + 8px);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.sizeYCompact.modeHorizontal :global(.vkuiInternalFormItem--withTop) ~ .offset {\n  block-size: calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px);\n}\n\n@media (--sizeY-compact) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  .sizeYNone.modeHorizontal :global(.vkuiInternalFormItem--withTop) ~ .offset {\n    block-size: calc(2px + var(--vkui--font_subhead--line_height--compact) + 6px);\n  }\n}\n\n.withRemovable {\n  padding-inline: 0;\n}\n\n.segmented {\n  position: relative;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"FormLayoutGroup__host--hzXpt",modeHorizontal:"FormLayoutGroup__modeHorizontal--belFq",removable:"FormLayoutGroup__removable--ylroF",offset:"FormLayoutGroup__offset--C5Se1",sizeYCompact:"FormLayoutGroup__sizeYCompact--bP28j",sizeYNone:"FormLayoutGroup__sizeYNone--X46pJ",withRemovable:"FormLayoutGroup__withRemovable--WaPYb",segmented:"FormLayoutGroup__segmented--ciUd1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Input/Input.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Input__host--cGIzK{font-size:16px;line-height:20px;position:relative}.Input__alignCenter--FZvGv .Input__el--Ifos7{text-align:center}.Input__alignRight--WmGhs .Input__el--Ifos7{text-align:end}.Input__el--Ifos7{block-size:var(--vkui--size_field_height--regular);border-radius:inherit;box-sizing:border-box;color:var(--vkui--color_text_primary);inline-size:100%;padding-block:0;padding-inline:12px;position:relative;z-index:var(--vkui_internal--z_index_form_field_element)}.Input__sizeYCompact--ZtPS9 .Input__el--Ifos7{block-size:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Input__sizeYNone--GH_Ai .Input__el--Ifos7{block-size:var(--vkui--size_field_height--compact)}}.Input__hasBefore--pgUP0 .Input__el--Ifos7{-webkit-padding-start:0;padding-inline-start:0}.Input__hasAfter--pUfUA .Input__el--Ifos7{-webkit-padding-end:0;padding-inline-end:0}.Input__el--Ifos7:disabled{opacity:var(--vkui--opacity_disable_accessibility)}.Input__el--Ifos7::placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Input__el--Ifos7:disabled::placeholder{color:var(--vkui--color_text_secondary)}","",{version:3,sources:["webpack://./src/components/Input/Input.module.css"],names:[],mappings:"AAAA,oBAGE,cAAe,CADf,gBAAiB,CADjB,iBAGF,CAEA,6CACE,iBACF,CAEA,4CACE,cACF,CAEA,kBAME,kDAAmD,CAEnD,qBAAsB,CADtB,qBAAsB,CAEtB,qCAAsC,CAJtC,gBAAiB,CAFjB,eAAgB,CAChB,mBAAoB,CAHpB,iBAAkB,CAClB,wDAQF,CAEA,8CACE,kDACF,CAEA,iEACE,2CACE,kDACF,CACF,CAEA,2CACE,uBAAuB,CAAvB,sBACF,CAEA,0CACE,qBAAqB,CAArB,oBACF,CAEA,2BACE,kDACF,CAEA,+BACE,uCAAwC,CAExC,SACF,CAEA,wCACE,uCACF",sourcesContent:[".host {\n  position: relative;\n  line-height: 20px;\n  font-size: 16px;\n}\n\n.alignCenter .el {\n  text-align: center;\n}\n\n.alignRight .el {\n  text-align: end;\n}\n\n.el {\n  position: relative;\n  z-index: var(--vkui_internal--z_index_form_field_element);\n  padding-block: 0;\n  padding-inline: 12px;\n  inline-size: 100%;\n  block-size: var(--vkui--size_field_height--regular);\n  box-sizing: border-box;\n  border-radius: inherit;\n  color: var(--vkui--color_text_primary);\n}\n\n.sizeYCompact .el {\n  block-size: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone .el {\n    block-size: var(--vkui--size_field_height--compact);\n  }\n}\n\n.hasBefore .el {\n  padding-inline-start: 0;\n}\n\n.hasAfter .el {\n  padding-inline-end: 0;\n}\n\n.el:disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.el::placeholder {\n  color: var(--vkui--color_text_secondary);\n  /* Для Firefox */\n  opacity: 1;\n}\n\n.el:disabled::placeholder {\n  color: var(--vkui--color_text_secondary);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Input__host--cGIzK",alignCenter:"Input__alignCenter--FZvGv",el:"Input__el--Ifos7",alignRight:"Input__alignRight--WmGhs",sizeYCompact:"Input__sizeYCompact--ZtPS9",sizeYNone:"Input__sizeYNone--GH_Ai",hasBefore:"Input__hasBefore--pgUP0",hasAfter:"Input__hasAfter--pUfUA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/UnstyledTextField/UnstyledTextField.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UnstyledTextField__host--uysHu{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;box-shadow:none;margin:0;-webkit-tap-highlight-color:transparent;outline:none;resize:none}.UnstyledTextField__noPadding--Lnqhr{padding:0}.UnstyledTextField__host--uysHu:focus{outline:none}.UnstyledTextField__host--uysHu::-webkit-inner-spin-button,.UnstyledTextField__host--uysHu::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}.UnstyledTextField__host--uysHu[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}","",{version:3,sources:["webpack://./src/components/UnstyledTextField/UnstyledTextField.module.css"],names:[],mappings:"AAAA,gCAKE,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CADhB,sBAAuB,CAFvB,QAAS,CACT,eAAgB,CAFhB,QAAS,CAKT,uCAAwC,CACxC,YAAa,CACb,WACF,CAEA,qCACE,SACF,CAEA,sCACE,YACF,CAOA,sHAEE,uBAAgB,CAAhB,eACF,CAEA,6CACE,4BAAqB,CAArB,yBAAqB,CAArB,oBACF",sourcesContent:[".host {\n  margin: 0;\n  border: 0;\n  box-shadow: none;\n  background: transparent;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  resize: none;\n}\n\n.noPadding {\n  padding: 0;\n}\n\n.host:focus {\n  outline: none;\n}\n\n/*\n * Отключаем нативные элементы для <input type=\"number\" />\n *\n * см. https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp\n */\n.host::-webkit-outer-spin-button,\n.host::-webkit-inner-spin-button {\n  appearance: none;\n}\n\n.host[type='number'] {\n  appearance: textfield;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"UnstyledTextField__host--uysHu",noPadding:"UnstyledTextField__noPadding--Lnqhr"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);