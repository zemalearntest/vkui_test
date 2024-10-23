"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2513],{"./src/components/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Card_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Card/Card.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Card_module.A,options);const Card_Card_module=Card_module.A&&Card_module.A.locals?Card_module.A.locals:void 0,Card=({mode="tint",Component="li",...restProps})=>{const withBorder="outline"===mode||"outline-tint"===mode;return(0,jsx_runtime.jsx)(RootComponent.I,{...restProps,Component,baseClassName:(0,es6.xW)(Card_Card_module.host,"outline"===mode&&Card_Card_module.modeOutline,"shadow"===mode&&Card_Card_module.modeShadow,withBorder&&Card_Card_module.withBorder)})};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{mode:{defaultValue:{value:"tint"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"outline"'},{value:'"tint"'},{value:'"outline-tint"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},Component:{defaultValue:{value:"li"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Card",component:__webpack_require__("./src/components/Card/Card.tsx").Z,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC},decorators:[_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__.fd,_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__.E4]},Playground={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:96}})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <div style={{\n      height: 96\n    }} />\n  }\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Card/Card.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Card__host--omX2p{background:var(--vkui--color_background_secondary);border-radius:var(--vkui--size_card_border_radius--regular);display:block;list-style-type:none;position:relative}.Card__modeShadow--iMDCy{box-shadow:var(\n    --vkui--elevation3,0 2px 24px 0 rgba(0,0,0,.08),0 0 2px 0 rgba(0,0,0,.08)\n  )}.Card__modeOutline--vPiWk,.Card__modeShadow--iMDCy{background:var(--vkui--color_background_contrast_themed)}.Card__withBorder--z0_Q0:after{block-size:100%;border:var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);border-radius:inherit;box-sizing:border-box;content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;pointer-events:none;position:absolute}.vkuiInternalCardScroll .Card__host--omX2p{-webkit-margin-end:var(--vkui--size_cardgrid_padding--regular);flex-shrink:0;margin-inline-end:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardScroll .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalCardScroll--size-s .Card__host--omX2p{inline-size:40%}.vkuiInternalCardScroll--size-m .Card__host--omX2p{inline-size:62%}.vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - var(--vkui--size_base_padding_horizontal--regular) * 2);-webkit-margin-end:var(--vkui--size_base_padding_horizontal--regular);margin-inline-end:var(--vkui--size_base_padding_horizontal--regular)}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card__host--omX2p,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - 32px);-webkit-margin-end:16px;margin-inline-end:16px}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - 32px);-webkit-margin-end:16px;margin-inline-end:16px}}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}}@media (min-width:768px){.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - 32px);-webkit-margin-end:16px;margin-inline-end:16px}}.vkuiInternalCardGrid .Card__host--omX2p{-webkit-margin-end:var(--vkui--size_cardgrid_padding--regular);margin-inline-end:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-l .Card__host--omX2p{inline-size:100%;-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalCardGrid--size-l .Card__host--omX2p:not(:first-child){-webkit-margin-before:var(--vkui--size_cardgrid_padding--regular);margin-block-start:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card__host--omX2p{inline-size:calc(50% - (var(--vkui--size_cardgrid_padding--regular) / 2))}.vkuiInternalCardGrid--size-m .Card__host--omX2p:nth-child(n+3){-webkit-margin-before:var(--vkui--size_cardgrid_padding--regular);margin-block-start:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card__host--omX2p:nth-child(2n){-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalCardGrid--size-s .Card__host--omX2p{inline-size:calc((100% - 2 * var(--vkui--size_cardgrid_padding--regular)) / 3)}.vkuiInternalCardGrid--size-s .Card__host--omX2p:nth-child(n+4){-webkit-margin-before:var(--vkui--size_cardgrid_padding--regular);margin-block-start:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-s .Card__host--omX2p:nth-child(3n){-webkit-margin-end:0;margin-inline-end:0}',"",{version:3,sources:["webpack://./src/components/Card/Card.module.css"],names:[],mappings:"AAAA,mBAEE,kDAAmD,CACnD,2DAA4D,CAE5D,aAAc,CADd,oBAAqB,CAHrB,iBAKF,CAEA,yBACE;;GAMF,CAEA,mDAHE,wDAKF,CAEA,+BAKE,eAAgB,CAGhB,oFAAqF,CAGrF,qBAAsB,CADtB,qBAAsB,CAJtB,UAAW,CACX,aAAc,CAHd,gBAAiB,CADjB,mBAAoB,CADpB,oBAAqB,CAOrB,mBAAoB,CARpB,iBAWF,CAOA,2CACE,8DAA8D,CAC9D,aAAc,CADd,6DAEF,CAGA,wDACE,oBAAoB,CAApB,mBACF,CAGA,mDACE,eACF,CAGA,mDACE,eACF,CAGA,mDACE,+EAAgF,CAChF,qEAAqE,CAArE,oEACF,CAQA,kNAIE,6BAA8B,CAC9B,uBAAuB,CAAvB,sBACF,CAEA,yBAEE,2HAGE,6BAA8B,CAC9B,uBAAuB,CAAvB,sBACF,CACF,CAGA,4OAIE,oBAAoB,CAApB,mBACF,CAEA,yBAEE,wIAGE,oBAAoB,CAApB,mBACF,CACF,CACA,yBAEE,8FAGE,oBAAoB,CAApB,mBACF,CAGA,iFACE,6BAA8B,CAC9B,uBAAuB,CAAvB,sBACF,CACF,CAOA,yCACE,8DAA8D,CAA9D,6DACF,CAGA,iDACE,gBAAiB,CACjB,oBAAoB,CAApB,mBACF,CAGA,mEACE,iEAA+D,CAA/D,8DACF,CAGA,iDACE,yEACF,CAGA,gEACE,iEAA+D,CAA/D,8DACF,CAGA,+DACE,oBAAoB,CAApB,mBACF,CAGA,iDACE,8EACF,CAGA,gEACE,iEAA+D,CAA/D,8DACF,CAGA,+DACE,oBAAoB,CAApB,mBACF",sourcesContent:[".host {\n  position: relative;\n  background: var(--vkui--color_background_secondary);\n  border-radius: var(--vkui--size_card_border_radius--regular);\n  list-style-type: none;\n  display: block;\n}\n\n.modeShadow {\n  box-shadow: var(\n    --vkui--elevation3,\n    0 2px 24px 0 rgba(0, 0, 0, 0.08),\n    0 0 2px 0 rgba(0, 0, 0, 0.08)\n  );\n  background: var(--vkui--color_background_contrast_themed);\n}\n\n.modeOutline {\n  background: var(--vkui--color_background_contrast_themed);\n}\n\n.withBorder::after {\n  position: absolute;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  content: '';\n  display: block;\n  border: var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);\n  pointer-events: none;\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n\n/**\n * CMP:\n * CardScroll\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll) .host {\n  margin-inline-end: var(--vkui--size_cardgrid_padding--regular);\n  flex-shrink: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll) .host:last-of-type {\n  margin-inline-end: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll--size-s) .host {\n  inline-size: 40%;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll--size-m) .host {\n  inline-size: 62%;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll--size-l) .host {\n  inline-size: calc(100% - var(--vkui--size_base_padding_horizontal--regular) * 2);\n  margin-inline-end: var(--vkui--size_base_padding_horizontal--regular);\n}\n\n/**\n * CMP:\n * Group\n * SplitCol\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) :global(.vkuiInternalCardScroll--size-l) .host,\n:global(.vkuiInternalSplitCol--viewWidth-tabletPlus):global(.vkuiInternalSplitCol--spaced-auto)\n  :global(.vkuiInternalCardScroll--size-l)\n  .host {\n  inline-size: calc(100% - 32px);\n  margin-inline-end: 16px;\n}\n\n@media (--viewWidth-smallTabletPlus) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalSplitCol--viewWidth-none):global(.vkuiInternalSplitCol--spaced-auto)\n    :global(.vkuiInternalCardScroll--size-l)\n    .host {\n    inline-size: calc(100% - 32px);\n    margin-inline-end: 16px;\n  }\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) :global(.vkuiInternalCardScroll--size-l) .host:last-of-type,\n:global(.vkuiInternalSplitCol--viewWidth-tabletPlus):global(.vkuiInternalSplitCol--spaced-auto)\n  :global(.vkuiInternalCardScroll--size-l)\n  .host:last-of-type {\n  margin-inline-end: 0;\n}\n\n@media (--viewWidth-smallTabletPlus) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalSplitCol--viewWidth-none):global(.vkuiInternalSplitCol--spaced-auto)\n    :global(.vkuiInternalCardScroll--size-l)\n    .host:last-of-type {\n    margin-inline-end: 0;\n  }\n}\n@media (--sizeX-regular) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--mode-none)\n    :global(.vkuiInternalCardScroll--size-l)\n    .host:last-of-type {\n    margin-inline-end: 0;\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--mode-none) :global(.vkuiInternalCardScroll--size-l) .host {\n    inline-size: calc(100% - 32px);\n    margin-inline-end: 16px;\n  }\n}\n\n/**\n * CMP:\n * CardGrid\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid) .host {\n  margin-inline-end: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-l) .host {\n  inline-size: 100%;\n  margin-inline-end: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-l) .host:not(:first-child) {\n  margin-block-start: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-m) .host {\n  inline-size: calc(50% - (var(--vkui--size_cardgrid_padding--regular) / 2));\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-m) .host:nth-child(n + 3) {\n  margin-block-start: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-m) .host:nth-child(2n) {\n  margin-inline-end: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-s) .host {\n  inline-size: calc((100% - 2 * var(--vkui--size_cardgrid_padding--regular)) / 3);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-s) .host:nth-child(n + 4) {\n  margin-block-start: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-s) .host:nth-child(3n) {\n  margin-inline-end: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Card__host--omX2p",modeShadow:"Card__modeShadow--iMDCy",modeOutline:"Card__modeOutline--vPiWk",withBorder:"Card__withBorder--z0_Q0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);