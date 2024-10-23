"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9459],{"./src/components/Tappable/Tappable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Tappable});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),constants=__webpack_require__("./src/lib/adaptivity/constants.ts"),mergeCalls=__webpack_require__("./src/lib/mergeCalls.ts"),Clickable=__webpack_require__("./src/components/Clickable/Clickable.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts");var Tappable_module=__webpack_require__("./src/components/Tappable/Tappable.module.css");const useMaybeNeedRipple=(activeMode,hasPointer)=>"android"===(0,usePlatform.V)()&&!hasPointer&&"background"===activeMode,useRipple=(needRipple,hasPointerContext)=>{const[clicks,setClicks]=react.useState([]),pointerDelayTimers=react.useMemo((()=>new Map),[]);react.useEffect((function setClearClicksTimeout(){const clicksTimeoutId=clicks.length>0?setTimeout((()=>setClicks([])),225):null;return function cancelClearClicksTimeout(){clicksTimeoutId&&clearTimeout(clicksTimeoutId)}}),[clicks]);const reallyNeedRipple=(!es6.Wt||!1===hasPointerContext)&&needRipple;return{clicks,onPointerDown:reallyNeedRipple?e=>{const{top,left}=function getOffsetRect(elem){const box=elem?.getBoundingClientRect();return{top:box?.top,left:box?.left,width:elem?.offsetWidth,height:elem?.offsetHeight}}(e.currentTarget),x=e.clientX-(left??0),y=e.clientY-(top??0);pointerDelayTimers.set(e.pointerId,setTimeout((()=>function addClick(x,y,pointerId){const dateNow=Date.now(),filteredClicks=clicks.filter((click=>click.id+225>dateNow));setClicks([...filteredClicks,{x,y,id:dateNow,pointerId}]),pointerDelayTimers.delete(pointerId)}(x,y,e.pointerId)),70))}:es6.lQ,onPointerCancel:reallyNeedRipple?e=>{const timer=pointerDelayTimers.get(e.pointerId);clearTimeout(timer),pointerDelayTimers.delete(e.pointerId)}:es6.lQ}},Ripple=({needRipple=!0,clicks})=>(0,jsx_runtime.jsx)("span",{"aria-hidden":!0,className:(0,es6.xW)(Tappable_module.A.stateLayer,needRipple&&Tappable_module.A.ripple),children:clicks.map((wave=>(0,jsx_runtime.jsx)("span",{className:Tappable_module.A.wave,style:{top:wave.y,left:wave.x}},wave.id)))});try{useMaybeNeedRipple.displayName="useMaybeNeedRipple",useMaybeNeedRipple.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:useMaybeNeedRipple.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(__react_docgen_typescript_loader_error){}try{useRipple.displayName="useRipple",useRipple.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:useRipple.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(__react_docgen_typescript_loader_error){}try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}const stylesHovered={background:Tappable_module.A.hoveredBackground,opacity:Tappable_module.A.hoveredOpacity,none:""};function hoverClass(hoverMode="background"){const presetClass=stylesHovered[hoverMode];return void 0!==presetClass?presetClass:hoverMode}const stylesActivated={background:Tappable_module.A.activatedBackground,opacity:Tappable_module.A.activatedOpacity,none:""};function activeClass(activeMode="background"){const presetClass=stylesActivated[activeMode];return void 0!==presetClass?presetClass:activeMode}try{hoverClass.displayName="hoverClass",hoverClass.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:hoverClass.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(__react_docgen_typescript_loader_error){}try{activeClass.displayName="activeClass",activeClass.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:activeClass.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(__react_docgen_typescript_loader_error){}try{"background".displayName="DEFAULT_STATE_MODE","background".__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:"background".__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(__react_docgen_typescript_loader_error){}const sizeXClassNames={none:Tappable_module.A.sizeXNone,compact:Tappable_module.A.sizeXCompact};function hasPointerClassName(hasPointer){switch(hasPointer){case void 0:return Tappable_module.A.hasPointerNone;case!1:return Tappable_module.A.hasPointerFalse}}const Tappable=({baseClassName,borderRadiusMode="auto",children,hoverMode="background",activeMode="background",onPointerDown,onPointerCancel,...restProps})=>{const isClickable=(0,Clickable.J)(restProps),{sizeX="none",hasPointer}=(0,useAdaptivity.L)(),needRipple=useMaybeNeedRipple(activeMode,hasPointer),{clicks,...rippleEvents}=useRipple(needRipple,hasPointer),handlers=(0,mergeCalls.i)(rippleEvents,{onPointerDown,onPointerCancel}),typeProps="button"===restProps.Component?{type:"button"}:{};return(0,jsx_runtime.jsxs)(Clickable.D,{baseClassName:(0,es6.xW)(baseClassName,Tappable_module.A.host,sizeX!==constants.qA.REGULAR&&sizeXClassNames[sizeX],"inherit"===borderRadiusMode&&Tappable_module.A.borderRadiusInherit,hasPointerClassName(hasPointer)),hoverClassName:hoverClass(hoverMode),activeClassName:activeClass(activeMode),...typeProps,...handlers,...restProps,children:[children,isClickable&&("background"===hoverMode||"background"===activeMode)&&(0,jsx_runtime.jsx)(Ripple,{needRipple,clicks})]})};try{Tappable.displayName="Tappable",Tappable.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:"Позволяет родительскому компоненту\nиметь hovered-cостояние при наведении\nна любой дочерний элемент.\nПо умолчанию состояние hovered у родителя сбрасывается.\n\nПрисваивается родителькому компоненту.\n@example <Tappable hasHoverWithChildren>\n  <IconButton />\n  <IconButton />\n  <IconButton />\n</Tappable>",name:"hasHoverWithChildren",required:!1,type:{name:"boolean"}},unlockParentHover:{defaultValue:null,description:"Позволяет родительскому компоненту показывать hovered-состояние при наведении\nна текущий дочерний компонент.\n\nПрисваивается дочернему компоненту.\n@example <Tappable>\n  <IconButton unlockParentHover />\n  <IconButton unlockParentHover />\n  <IconButton />\n</Tappable>",name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:Tappable.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InteractiveTooltipWithCloseAction:()=>InteractiveTooltipWithCloseAction,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx"),_Tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Poppers/Tooltip",component:_Tooltip__WEBPACK_IMPORTED_MODULE_1__.m,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC},Playground={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_1__.m,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{style:{margin:20},children:"Наведи"})}),args:{description:"Привет"}},InteractiveTooltipWithCloseAction={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_1__.m,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.$,{style:{margin:20},children:"Наведи"})}),args:{description:"Привет",enableInteractive:!0,closable:!0}},__namedExportsOrder=["Playground","InteractiveTooltipWithCloseAction"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: args => <Tooltip {...args}>\n      <Button style={{\n      margin: 20\n    }}>Наведи</Button>\n    </Tooltip>,\n  args: {\n    description: 'Привет'\n  }\n}",...Playground.parameters?.docs?.source}}},InteractiveTooltipWithCloseAction.parameters={...InteractiveTooltipWithCloseAction.parameters,docs:{...InteractiveTooltipWithCloseAction.parameters?.docs,source:{originalSource:"{\n  render: args => <Tooltip {...args}>\n      <Button style={{\n      margin: 20\n    }}>Наведи</Button>\n    </Tooltip>,\n  args: {\n    description: 'Привет',\n    enableInteractive: true,\n    closable: true\n  }\n}",...InteractiveTooltipWithCloseAction.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/16/spinner_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon16Spinner});var Icon16Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="spinner_16"><path fill-rule="evenodd" d="M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/spinner_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Icon24Spinner});var Icon24Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/32/spinner_32.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Icon32Spinner});var Icon32Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 16 16 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/44/spinner_44.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Icon44Spinner});var Icon44Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A22 22 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Tappable/Tappable.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Tappable__host--fksc3{border-radius:var(--vkui--size_border_radius--regular);isolation:isolate;position:relative}.Tappable__host--fksc3>*{position:relative;z-index:var(--vkui_internal--z_index_tappable_element)}.Tappable__sizeXCompact--GEk1y{border-radius:0}@media (max-width:767.9px){.Tappable__sizeXNone--eX8Lj{border-radius:0}}.Tappable__host--fksc3.Tappable__borderRadiusInherit--WoxAg,.Tappable__stateLayer--b2zbA{border-radius:inherit}.Tappable__stateLayer--b2zbA{inset:0;overflow:hidden;position:absolute;transition:background-color .15s ease-out;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable__hasPointerFalse--J0NLA .Tappable__ripple--OWaXM{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable__hasPointerNone--mZrYR .Tappable__ripple--OWaXM{transition:background-color .15s ease-out .15s}}.Tappable__hoveredBackground--vwYai>.Tappable__stateLayer--b2zbA{background-color:var(--vkui--color_transparent--hover)}.Tappable__activatedBackground--wCNQ5>.Tappable__stateLayer--b2zbA{background-color:var(--vkui--color_transparent--active)}.Tappable__activatedOpacity--uwjpO,.Tappable__hoveredOpacity--s0E_x{transition:opacity .15s ease-out}.Tappable__hoveredOpacity--s0E_x{opacity:.8}.Tappable__activatedOpacity--uwjpO{opacity:.7}.Tappable__wave--UWQ7Y{animation:Tappable__animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);block-size:24px;border-radius:50%;content:"";inline-size:24px;inset-block-start:0;inset-inline-start:0;margin-block:-12px 0;margin-inline:0 -12px;opacity:0;position:absolute}@keyframes Tappable__animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',"",{version:3,sources:["webpack://./src/components/Tappable/Tappable.module.css"],names:[],mappings:"AAAA,uBAGE,sDAAuD,CAFvD,iBAAkB,CAClB,iBAEF,CAYA,yBACE,iBAAkB,CAClB,sDACF,CAKA,+BACE,eACF,CAEA,2BACE,4BACE,eACF,CACF,CASA,yFANE,qBAaF,CAPA,6BAGE,OAAQ,CACR,eAAgB,CAFhB,iBAAkB,CAIlB,yCAA2C,CAL3C,oDAMF,CAKA,2DACE,8CACF,CAEA,uCACE,0DACE,8CACF,CACF,CAEA,iEACE,sDACF,CAEA,mEACE,uDACF,CAEA,oEAEE,gCACF,CAEA,iCACE,UACF,CAEA,mCACE,UACF,CAEA,uBAYE,oFAAqE,CADrE,iDAAkD,CANlD,eAAgB,CAKhB,iBAAkB,CADlB,UAAW,CALX,gBAAiB,CAFjB,mBAAoB,CACpB,oBAAqB,CAGrB,oBAAqB,CACrB,qBAAsB,CACtB,SAAU,CAPV,iBAYF,CAKA,2CACE,GAEE,SAAU,CADV,kBAEF,CAEA,IACE,SACF,CAEA,GAEE,SAAU,CADV,kBAEF,CACF",sourcesContent:[".host {\n  isolation: isolate;\n  position: relative;\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n/*\nПросто поменять местами элементы внутри Tappable нельзя:\n\n- некоторые элементы завязаны на :last-child и :first-child\n- необходимо чтобы все элементы были позиционированные\n\nhttps://developer.mozilla.org/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index\nhttps://github.com/VKCOM/VKUI/pull/3641\n*/\n/* stylelint-disable-next-line selector-max-universal */\n.host > * {\n  position: relative;\n  z-index: var(--vkui_internal--z_index_tappable_element);\n}\n\n/**\n * overrides\n */\n.sizeXCompact {\n  border-radius: 0;\n}\n\n@media (--sizeX-compact) {\n  .sizeXNone {\n    border-radius: 0;\n  }\n}\n\n.host.borderRadiusInherit {\n  border-radius: inherit;\n}\n\n/**\n * hover & active state\n */\n.stateLayer {\n  z-index: var(--vkui_internal--z_index_tappable_state);\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  border-radius: inherit;\n  transition: background-color 0.15s ease-out;\n}\n\n/**\n * Задерживаем отрисовку background-color\n */\n.hasPointerFalse .ripple {\n  transition: background-color 0.15s 0.15s ease-out;\n}\n\n@media (--pointer-has-not) {\n  .hasPointerNone .ripple {\n    transition: background-color 0.15s 0.15s ease-out;\n  }\n}\n\n.hoveredBackground > .stateLayer {\n  background-color: var(--vkui--color_transparent--hover);\n}\n\n.activatedBackground > .stateLayer {\n  background-color: var(--vkui--color_transparent--active);\n}\n\n.hoveredOpacity,\n.activatedOpacity {\n  transition: opacity 0.15s ease-out;\n}\n\n.hoveredOpacity {\n  opacity: 0.8;\n}\n\n.activatedOpacity {\n  opacity: 0.7;\n}\n\n.wave {\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 24px;\n  block-size: 24px;\n  margin-block: -12px 0;\n  margin-inline: 0 -12px;\n  opacity: 0;\n  content: '';\n  border-radius: 50%;\n  background: var(--vkui--color_transparent--active);\n  animation: animation-wave 0.3s var(--vkui--animation_easing_platform);\n}\n\n/**\n * Animations\n */\n@keyframes animation-wave {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  30% {\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(8);\n    opacity: 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Tappable__host--fksc3",sizeXCompact:"Tappable__sizeXCompact--GEk1y",sizeXNone:"Tappable__sizeXNone--eX8Lj",borderRadiusInherit:"Tappable__borderRadiusInherit--WoxAg",stateLayer:"Tappable__stateLayer--b2zbA",hasPointerFalse:"Tappable__hasPointerFalse--J0NLA",ripple:"Tappable__ripple--OWaXM",hasPointerNone:"Tappable__hasPointerNone--mZrYR",hoveredBackground:"Tappable__hoveredBackground--vwYai",activatedBackground:"Tappable__activatedBackground--wCNQ5",activatedOpacity:"Tappable__activatedOpacity--uwjpO",hoveredOpacity:"Tappable__hoveredOpacity--s0E_x",wave:"Tappable__wave--UWQ7Y","animation-wave":"Tappable__animation-wave--Spk35"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Tappable/Tappable.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Tappable_module_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Tappable/Tappable.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Tappable_module_css__WEBPACK_IMPORTED_MODULE_5__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Tappable_module_css__WEBPACK_IMPORTED_MODULE_5__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Tappable_module_css__WEBPACK_IMPORTED_MODULE_5__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_14_use_2_Tappable_module_css__WEBPACK_IMPORTED_MODULE_5__.A.locals:void 0}}]);