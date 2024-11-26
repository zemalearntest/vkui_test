"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1447],{"./src/components/DropdownIcon/DropdownIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>DropdownIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/20/chevron_up_20.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/20/dropdown_20.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/24/chevron_up_24.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/24/chevron_down_24.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx");const DropdownIcon=({opened=!1,className,...restProps})=>{const{sizeY}=(0,_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_3__.V)(),IconCompact=opened?_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__.o:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.v,IconRegular=opened?_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__.a:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__.r;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[sizeY.compact&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCompact,{className:(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__.xW)(sizeY.compact.className,className),...restProps}),sizeY.regular&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconRegular,{className:(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__.xW)(sizeY.regular.className,className),...restProps})]})};try{DropdownIcon.displayName="DropdownIcon",DropdownIcon.__docgenInfo={description:"",displayName:"DropdownIcon",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<SVGSVGElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownIcon/DropdownIcon.tsx#DropdownIcon"]={docgenInfo:DropdownIcon.__docgenInfo,name:"DropdownIcon",path:"src/components/DropdownIcon/DropdownIcon.tsx#DropdownIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/NativeSelect/NativeSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QW:()=>NOT_SELECTED,cJ:()=>remapFromNativeValueToSelectValue,mh:()=>NativeSelect,w6:()=>remapFromSelectValueToNativeValue});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),_hooks_useAdaptivity__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/hooks/useAdaptivity.ts"),_hooks_useExternRef__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/hooks/useExternRef.ts"),_lib_callMultiple__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/lib/callMultiple.ts"),_lib_select__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/lib/select.ts"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),_DropdownIcon_DropdownIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownIcon/DropdownIcon.tsx"),_FormField_FormField__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/FormField/FormField.tsx"),_SelectTypography_SelectTypography__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/SelectTypography/SelectTypography.tsx"),_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Select/Select.module.css");const sizeYClassNames={none:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.sizeYNone,compact:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.sizeYCompact},NOT_SELECTED={NATIVE:"__vkui_internal_Select_not_selected__",CUSTOM:null},remapFromSelectValueToNativeValue=value=>value===NOT_SELECTED.CUSTOM?NOT_SELECTED.NATIVE:value,remapFromNativeValueToSelectValue=value=>value===NOT_SELECTED.NATIVE?NOT_SELECTED.CUSTOM:value,NativeSelect=({style,align,placeholder,children,className,getRef,getRootRef,disabled,multiline,selectType="default",status,icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownIcon_DropdownIcon__WEBPACK_IMPORTED_MODULE_4__.F,{}),before,onChange,value,defaultValue,...restProps})=>{const[title,setTitle]=react__WEBPACK_IMPORTED_MODULE_1__.useState(""),[empty,setEmpty]=react__WEBPACK_IMPORTED_MODULE_1__.useState(!1),selectRef=(0,_hooks_useExternRef__WEBPACK_IMPORTED_MODULE_5__.Z)(getRef),{sizeY="none"}=(0,_hooks_useAdaptivity__WEBPACK_IMPORTED_MODULE_6__.L)(),checkSelectedOption=()=>{const selectedOption=selectRef.current?.options[selectRef.current.selectedIndex];selectedOption&&(setTitle(selectedOption.text),setEmpty(selectedOption.value===NOT_SELECTED.NATIVE&&null!=placeholder))};return(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__.E)(checkSelectedOption,[children]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FormField_FormField__WEBPACK_IMPORTED_MODULE_8__.z,{Component:"div",className:(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__.xW)(_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.host,"vkuiInternalNativeSelect",before&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.hasBefore,empty&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.empty,multiline&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.multiline,"center"===align&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.alignCenter,"right"===align&&_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.alignRight,"regular"!==sizeY&&sizeYClassNames[sizeY],className),style,getRootRef,disabled,before,after:icon,status,mode:(0,_lib_select__WEBPACK_IMPORTED_MODULE_9__.E)(selectType),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{...restProps,value:void 0!==value?remapFromSelectValueToNativeValue(value):value,defaultValue:void 0!==defaultValue?remapFromSelectValueToNativeValue(defaultValue):defaultValue,disabled,className:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.el,onChange:(0,_lib_callMultiple__WEBPACK_IMPORTED_MODULE_10__.j)((e=>{const newValue=remapFromNativeValueToSelectValue(e.target.value);e.target.value===NOT_SELECTED.NATIVE&&(e.target.value=""),e.currentTarget.value===NOT_SELECTED.NATIVE&&(e.currentTarget.value=""),onChange?.(e,newValue)}),checkSelectedOption),ref:selectRef,children:[placeholder&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:NOT_SELECTED.NATIVE,children:placeholder}),children]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.container,"aria-hidden":!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectTypography_SelectTypography__WEBPACK_IMPORTED_MODULE_11__.Q,{className:_Select_Select_module_css__WEBPACK_IMPORTED_MODULE_3__.A.title,selectType,children:title})})]})};try{remapFromSelectValueToNativeValue.displayName="remapFromSelectValueToNativeValue",remapFromSelectValueToNativeValue.__docgenInfo={description:"",displayName:"remapFromSelectValueToNativeValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NativeSelect/NativeSelect.tsx#remapFromSelectValueToNativeValue"]={docgenInfo:remapFromSelectValueToNativeValue.__docgenInfo,name:"remapFromSelectValueToNativeValue",path:"src/components/NativeSelect/NativeSelect.tsx#remapFromSelectValueToNativeValue"})}catch(__react_docgen_typescript_loader_error){}try{remapFromNativeValueToSelectValue.displayName="remapFromNativeValueToSelectValue",remapFromNativeValueToSelectValue.__docgenInfo={description:"",displayName:"remapFromNativeValueToSelectValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NativeSelect/NativeSelect.tsx#remapFromNativeValueToSelectValue"]={docgenInfo:remapFromNativeValueToSelectValue.__docgenInfo,name:"remapFromNativeValueToSelectValue",path:"src/components/NativeSelect/NativeSelect.tsx#remapFromNativeValueToSelectValue"})}catch(__react_docgen_typescript_loader_error){}try{NativeSelect.displayName="NativeSelect",NativeSelect.__docgenInfo={description:"",displayName:"NativeSelect",props:{value:{defaultValue:null,description:"Выбранное значение.\n\n> ⚠️  Важно: При прокидывании `undefined` компонент будет считаться `Uncontrolled`.\n>\n> Не используйте `undefined`, чтобы показать невыбранное состояние. Вместо этого используйте `null`",name:"value",required:!1,type:{name:"SelectValue"}},defaultValue:{defaultValue:null,description:"см. `value`",name:"defaultValue",required:!1,type:{name:"SelectValue"}},onChange:{defaultValue:null,description:"Коллбэк срабатывающий при изменении выбранного значения.\nВторым параметром прокидывается новое значение\n\n> ⚠️ Лучше использовать второй параметр при работе с компонентом",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLSelectElement>, newValue: SelectValue) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},selectType:{defaultValue:{value:"default"},description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'},{value:'"accent"'}]}},icon:{defaultValue:{value:"<DropdownIcon />"},description:"Иконка раскрывающегося списка",name:"icon",required:!1,type:{name:"ReactNode"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NativeSelect/NativeSelect.tsx#NativeSelect"]={docgenInfo:NativeSelect.__docgenInfo,name:"NativeSelect",path:"src/components/NativeSelect/NativeSelect.tsx#NativeSelect"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SelectTypography/SelectTypography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>SelectTypography});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/Text/Text.tsx");const SelectTypography=({selectType="default",children,...restProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Text_Text__WEBPACK_IMPORTED_MODULE_1__.E,{weight:"accent"===selectType?"2":"3",...restProps,children});try{SelectTypography.displayName="SelectTypography",SelectTypography.__docgenInfo={description:"",displayName:"SelectTypography",props:{selectType:{defaultValue:{value:"default"},description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'},{value:'"accent"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},useAccentWeight:{defaultValue:null,description:"Включает акцентный тип начертания шрифта.\nИспользуются токены fontWeightAccent[1, 2, 3]\nИспользуется только вместе с `weight`",name:"useAccentWeight",required:!1,type:{name:"boolean"}},normalize:{defaultValue:null,description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:null,description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTypography/SelectTypography.tsx#SelectTypography"]={docgenInfo:SelectTypography.__docgenInfo,name:"SelectTypography",path:"src/components/SelectTypography/SelectTypography.tsx#SelectTypography"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/children.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>getTextFromChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const childToString=child=>null==child||"boolean"==typeof child||"{}"===JSON.stringify(child)?"":child.toString(),getTextFromChildren=children=>children instanceof Array||(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((text,child)=>{let newText="";const isValidElementResult=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child),hasChildren=isValidElementResult&&"children"in child.props;return newText=isValidElementResult&&hasChildren?getTextFromChildren(child.props.children):isValidElementResult&&!hasChildren?"":childToString(child),text.concat(newText)}),""):childToString(children)},"./src/lib/select.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>getFormFieldModeFromSelectType,o:()=>defaultFilterFn});var _children__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/children.ts");function defaultFilterFn(...args){const[rawSearchQuery="",option,getOptionLabel]=args,foundRawLabel=getOptionLabel?getOptionLabel(option):function getOptionLabelDefault(option){return option.label}(option);if(void 0===foundRawLabel)return!1;const searchQuery=rawSearchQuery.toLocaleLowerCase(),label=(0,_children__WEBPACK_IMPORTED_MODULE_0__.D)(foundRawLabel).toLocaleLowerCase();if(label.startsWith(searchQuery))return!0;const includes=((target="",search="")=>{const includes=[];let i=target.indexOf(search);for(;-1!==i;)includes.push(i),i=target.indexOf(search,i+1);return includes})(label,searchQuery);if(includes.length){const letterRegexp=new RegExp("\\p{L}","u");for(const index of includes)if(!letterRegexp.test(label[index-1]))return!0}return!1}const getFormFieldModeFromSelectType=(selectType="default")=>"default"===selectType?"default":"plain"},"./src/components/NativeSelect/NativeSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_testing_presets_getFormFieldIconsPresets__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/testing/presets/getFormFieldIconsPresets.tsx"),_NativeSelect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NativeSelect/NativeSelect.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/NativeSelect",component:_NativeSelect__WEBPACK_IMPORTED_MODULE_1__.mh,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC},argTypes:{before:(0,_testing_presets_getFormFieldIconsPresets__WEBPACK_IMPORTED_MODULE_3__.b)()}},Playground={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NativeSelect__WEBPACK_IMPORTED_MODULE_1__.mh,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"m",children:"Мужской"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"f",children:"Женский"})]})},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <NativeSelect {...args}>\n      <option value="m">Мужской</option>\n      <option value="f">Женский</option>\n    </NativeSelect>\n}',...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Select/Select.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Select__host--D9LcS{box-sizing:border-box;cursor:pointer;font-family:var(--vkui--font_family_base);position:relative}.Select__el--NfuOK{-webkit-appearance:none;-moz-appearance:none;appearance:none;block-size:100%;border:0;display:block;font-family:inherit;font-size:var(--vkui--font_paragraph--font_size--regular);inline-size:100%;inset-block-start:0;inset-inline-start:0;opacity:0;position:absolute;z-index:var(--vkui_internal--z_index_form_field_side)}.Select__container--ETGbX{align-self:center;box-sizing:border-box;color:var(--vkui--color_text_primary);flex-grow:1;flex-shrink:1;overflow:hidden;padding-inline:12px 0;position:relative;z-index:var(--vkui_internal--z_index_form_field_element)}.Select__hasBefore--emSkC .Select__container--ETGbX{-webkit-padding-start:0;padding-inline-start:0}.Select__multiline--nGX4w .Select__container--ETGbX{padding-block:12px}.Select__sizeYCompact--lWbZc.Select__multiline--nGX4w .Select__container--ETGbX{padding-block:8px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Select__sizeYNone--wfyyx.Select__multiline--nGX4w .Select__container--ETGbX{padding-block:8px}}.Select__title--wKfgW{display:block}.Select__host--D9LcS:not(.Select__multiline--nGX4w) .Select__title--wKfgW{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select__empty--obJwH .Select__title--wKfgW{color:var(--vkui--color_text_secondary)}.Select__alignRight--VecVe .Select__title--wKfgW{text-align:end}.Select__alignCenter--Pglq9 .Select__title--wKfgW{text-align:center}.vkuiInternalCalendarHeader__picker .Select__container--ETGbX{-webkit-padding-end:4px;padding-inline-end:4px}","",{version:3,sources:["webpack://./src/components/Select/Select.module.css"],names:[],mappings:"AAAA,qBAGE,qBAAsB,CADtB,cAAe,CAEf,yCAA0C,CAH1C,iBAIF,CAEA,mBAGE,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CAKhB,eAAgB,CAJhB,QAAS,CAHT,aAAc,CAWd,mBAAoB,CADpB,yDAA0D,CAJ1D,gBAAiB,CADjB,mBAAoB,CADpB,oBAAqB,CAIrB,SAAU,CAPV,iBAAkB,CAQlB,qDAGF,CAEA,0BACE,iBAAkB,CAKlB,qBAAsB,CADtB,qCAAsC,CAHtC,WAAY,CACZ,aAAc,CAMd,eAAgB,CALhB,qBAAsB,CAGtB,iBAAkB,CAClB,wDAEF,CAEA,oDACE,uBAAuB,CAAvB,sBACF,CAEA,oDACE,kBACF,CAEA,gFACE,iBACF,CAEA,iEACE,6EACE,iBACF,CACF,CAEA,sBACE,aACF,CAEA,0EACE,eAAgB,CAEhB,sBAAuB,CADvB,kBAEF,CAEA,4CACE,uCACF,CAEA,iDACE,cACF,CAEA,kDACE,iBACF,CAOA,8DACE,uBAAuB,CAAvB,sBACF",sourcesContent:[".host {\n  position: relative;\n  cursor: pointer;\n  box-sizing: border-box;\n  font-family: var(--vkui--font_family_base);\n}\n\n.el {\n  display: block;\n  position: absolute;\n  appearance: none;\n  border: 0;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  opacity: 0;\n  z-index: var(--vkui_internal--z_index_form_field_side);\n  font-size: var(--vkui--font_paragraph--font_size--regular);\n  font-family: inherit;\n}\n\n.container {\n  align-self: center;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding-inline: 12px 0;\n  color: var(--vkui--color_text_primary);\n  box-sizing: border-box;\n  position: relative;\n  z-index: var(--vkui_internal--z_index_form_field_element);\n  overflow: hidden;\n}\n\n.hasBefore .container {\n  padding-inline-start: 0;\n}\n\n.multiline .container {\n  padding-block: 12px;\n}\n\n.sizeYCompact.multiline .container {\n  padding-block: 8px;\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.multiline .container {\n    padding-block: 8px;\n  }\n}\n\n.title {\n  display: block;\n}\n\n.host:not(.multiline) .title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.empty .title {\n  color: var(--vkui--color_text_secondary);\n}\n\n.alignRight .title {\n  text-align: end;\n}\n\n.alignCenter .title {\n  text-align: center;\n}\n\n/**\n * CMP:\n * CalendarHeader\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCalendarHeader__picker) .container {\n  padding-inline-end: 4px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Select__host--D9LcS",el:"Select__el--NfuOK",container:"Select__container--ETGbX",hasBefore:"Select__hasBefore--emSkC",multiline:"Select__multiline--nGX4w",sizeYCompact:"Select__sizeYCompact--lWbZc",sizeYNone:"Select__sizeYNone--wfyyx",title:"Select__title--wKfgW",empty:"Select__empty--obJwH",alignRight:"Select__alignRight--VecVe",alignCenter:"Select__alignCenter--Pglq9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Select/Select.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Select/Select.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_5__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_5__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_5__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_5__.A.locals:void 0}}]);