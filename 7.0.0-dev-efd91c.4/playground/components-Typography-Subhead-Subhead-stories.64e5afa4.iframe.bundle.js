"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5439],{"./src/components/Typography/Subhead/Subhead.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Subhead});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Subhead_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Subhead/Subhead.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Subhead_module.A,options);const Subhead_Subhead_module=Subhead_module.A&&Subhead_module.A.locals?Subhead_module.A.locals:void 0,sizeYClassNames={none:Subhead_Subhead_module.sizeYNone,compact:Subhead_Subhead_module.sizeYCompact},Subhead=({className,Component="span",normalize=!0,inline=!1,...restProps})=>{const{sizeY="none"}=(0,useAdaptivity.L)();return(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,className:(0,lib.xW)(className,Subhead_Subhead_module.host,"regular"!==sizeY&&sizeYClassNames[sizeY]),...restProps})};try{Subhead.displayName="Subhead",Subhead.__docgenInfo={description:"Используется для подзаголовков 2 уровня.",displayName:"Subhead",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},useAccentWeight:{defaultValue:null,description:"Включает акцентный тип начертания шрифта.\nИспользуются токены fontWeightAccent[1, 2, 3]\nИспользуется только вместе с `weight`",name:"useAccentWeight",required:!1,type:{name:"boolean"}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Subhead/Subhead.tsx#Subhead"]={docgenInfo:Subhead.__docgenInfo,name:"Subhead",path:"src/components/Typography/Subhead/Subhead.tsx#Subhead"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};const withCartesian=(StoryFn,context)=>{const{argTypes,args:{cartesian,...restArgs}}=context;if(cartesian){const variants=function cartesianFunc(propDesc=[],argTypes){return Object.entries(propDesc).reduce(((acc,[prop,values])=>{const res=[];return acc.forEach((props=>{values.forEach((value=>{const mapping=argTypes[prop].mapping;res.push({...props,[prop]:mapping?mapping[value]:value})}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map(((ops,index)=>(0,jsx_runtime.jsx)(StoryFn,{args:{...restArgs,...ops}},index)))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})}},"./src/components/Typography/Subhead/Subhead.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_Subhead__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/Subhead/Subhead.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Typography/Subhead",component:_Subhead__WEBPACK_IMPORTED_MODULE_2__.L,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__.L1]},Playground={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Subhead__WEBPACK_IMPORTED_MODULE_2__.L,{...args,children:"Subhead"})},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: args => <Subhead {...args}>Subhead</Subhead>\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Subhead/Subhead.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Subhead__host--lrvDp{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);font-weight:var(--vkui--font_subhead--font_weight--regular);line-height:var(--vkui--font_subhead--line_height--regular)}.Subhead__sizeYCompact--BUPsS{font-family:var(\n    --vkui--font_subhead--font_family--compact,var(--vkui--font_subhead--font_family--regular)\n  );font-size:var(\n    --vkui--font_subhead--font_size--compact,var(--vkui--font_subhead--font_size--regular)\n  );font-weight:var(\n    --vkui--font_subhead--font_weight--compact,var(--vkui--font_subhead--font_weight--regular)\n  );line-height:var(\n    --vkui--font_subhead--line_height--compact,var(--vkui--font_subhead--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Subhead__sizeYNone--xNo2J{font-family:var(\n      --vkui--font_subhead--font_family--compact,var(--vkui--font_subhead--font_family--regular)\n    );font-size:var(\n      --vkui--font_subhead--font_size--compact,var(--vkui--font_subhead--font_size--regular)\n    );font-weight:var(\n      --vkui--font_subhead--font_weight--compact,var(--vkui--font_subhead--font_weight--regular)\n    );line-height:var(\n      --vkui--font_subhead--line_height--compact,var(--vkui--font_subhead--line_height--regular)\n    )}}","",{version:3,sources:["webpack://./src/components/Typography/Subhead/Subhead.module.css"],names:[],mappings:"AAAA,sBAIE,2DAA4D,CAH5D,uDAAwD,CAExD,2DAA4D,CAD5D,2DAGF,CAEA,8BAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,2BAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF",sourcesContent:[".host {\n  font-size: var(--vkui--font_subhead--font_size--regular);\n  line-height: var(--vkui--font_subhead--line_height--regular);\n  font-weight: var(--vkui--font_subhead--font_weight--regular);\n  font-family: var(--vkui--font_subhead--font_family--regular);\n}\n\n.sizeYCompact {\n  font-size: var(\n    --vkui--font_subhead--font_size--compact,\n    var(--vkui--font_subhead--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_subhead--line_height--compact,\n    var(--vkui--font_subhead--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_subhead--font_weight--compact,\n    var(--vkui--font_subhead--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_subhead--font_family--compact,\n    var(--vkui--font_subhead--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone {\n    font-size: var(\n      --vkui--font_subhead--font_size--compact,\n      var(--vkui--font_subhead--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_subhead--line_height--compact,\n      var(--vkui--font_subhead--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_subhead--font_weight--compact,\n      var(--vkui--font_subhead--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_subhead--font_family--compact,\n      var(--vkui--font_subhead--font_family--regular)\n    );\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Subhead__host--lrvDp",sizeYCompact:"Subhead__sizeYCompact--BUPsS",sizeYNone:"Subhead__sizeYNone--xNo2J"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);