"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9407,2513],{"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Card",component:__webpack_require__("./src/components/Card/Card.tsx").Z,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC},decorators:[_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__.fd,_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__.E4]},Playground={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:96}})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <div style={{\n      height: 96\n    }} />\n  }\n}",...Playground.parameters?.docs?.source}}}},"./src/components/CardScroll/CardScroll.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InsideGroup:()=>InsideGroup,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardScroll_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),VKUIDecorators=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),Card=__webpack_require__("./src/components/Card/Card.tsx"),Card_stories=__webpack_require__("./src/components/Card/Card.stories.tsx"),Group=__webpack_require__("./src/components/Group/Group.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),dom=__webpack_require__("./src/lib/dom.tsx"),HorizontalScroll=__webpack_require__("./src/components/HorizontalScroll/HorizontalScroll.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),CardScroll_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CardScroll/CardScroll.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CardScroll_module.A,options);const CardScroll_CardScroll_module=CardScroll_module.A&&CardScroll_module.A.locals?CardScroll_module.A.locals:void 0,stylesSize={s:"vkuiInternalCardScroll--size-s",m:"vkuiInternalCardScroll--size-m",l:"vkuiInternalCardScroll--size-l"},CardScroll=({children,size="s",showArrows=!0,padding=!1,Component="ul",...restProps})=>{const refContainer=react.useRef(null),gapRef=react.useRef(null),{window}=(0,dom.a4)();return(0,jsx_runtime.jsx)(RootComponent.I,{...restProps,Component,baseClassName:(0,es6.xW)(CardScroll_CardScroll_module.host,"vkuiInternalCardScroll",!1!==size&&stylesSize[size],padding&&CardScroll_CardScroll_module.withPaddings),children:(0,jsx_runtime.jsx)(HorizontalScroll.o,{getScrollToLeft:function getScrollToLeft(offset){if(!refContainer.current||!gapRef.current)return offset;const containerWidth=refContainer.current.offsetWidth,slideIndex=[...refContainer.current.children].findIndex((el=>el.offsetLeft+el.offsetWidth+parseInt(window.getComputedStyle(el).marginRight)-offset>=0));if(-1===slideIndex)return offset;if(0===slideIndex)return 0;const slide=refContainer.current.children[slideIndex],scrollTo=slide.offsetLeft-(containerWidth-slide.offsetWidth)+gapRef.current.offsetWidth;return scrollTo<=2*gapRef.current.offsetWidth?0:scrollTo},getScrollToRight:function getScrollToRight(offset){if(!refContainer.current||!gapRef.current)return offset;const containerWidth=refContainer.current.offsetWidth,slide=Array.prototype.find.call(refContainer.current.children,(el=>el.offsetLeft+el.offsetWidth-offset>containerWidth));return slide?slide.offsetLeft-gapRef.current.offsetWidth:offset},showArrows,children:(0,jsx_runtime.jsxs)("div",{className:CardScroll_CardScroll_module.in,ref:refContainer,children:[(0,jsx_runtime.jsx)("span",{className:CardScroll_CardScroll_module.gap,ref:gapRef}),children,(0,jsx_runtime.jsx)("span",{className:CardScroll_CardScroll_module.gap})]})})})};try{CardScroll.displayName="CardScroll",CardScroll.__docgenInfo={description:"",displayName:"CardScroll",props:{size:{defaultValue:{value:"s"},description:"При `size=false` ширина `Card` будет регулироваться контентом внутри. В остальных случаях — будет явно задана в процентах.",name:"size",required:!1,type:{name:'false | "s" | "m" | "l"'}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},padding:{defaultValue:{value:"false"},description:"Добавляет отступы по краям слева и справа",name:"padding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},Component:{defaultValue:{value:"ul"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardScroll/CardScroll.tsx#CardScroll"]={docgenInfo:CardScroll.__docgenInfo,name:"CardScroll",path:"src/components/CardScroll/CardScroll.tsx#CardScroll"})}catch(__react_docgen_typescript_loader_error){}const CardScroll_stories={title:"Blocks/CardScroll",component:CardScroll,parameters:{...constants.eb,...constants.eC},argTypes:{count:{control:{type:"number"}}}},Playground={render:({count,...args})=>(0,jsx_runtime.jsx)(CardScroll,{...args,children:Array(count).fill(null).map(((_,index)=>(0,jsx_runtime.jsx)(Card.Z,{...Card_stories.Playground.args},index)))}),args:{count:3},decorators:[VKUIDecorators.fd,VKUIDecorators.E4]},InsideGroup={...Playground,decorators:[(Component,context)=>(0,jsx_runtime.jsx)(Group.Y,{children:(0,jsx_runtime.jsx)(Component,{...context.args})}),...(0,es6.cy)(Playground.decorators)?Playground.decorators:[]]},__namedExportsOrder=["Playground","InsideGroup"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: ({\n    count,\n    ...args\n  }) => <CardScroll {...args}>\n      {Array(count).fill(null).map((_, index) => <BasicCard key={index} {...BasicCardStory.args} />)}\n    </CardScroll>,\n  args: {\n    count: 3\n  },\n  decorators: [withSinglePanel, withVKUILayout]\n}",...Playground.parameters?.docs?.source}}},InsideGroup.parameters={...InsideGroup.parameters,docs:{...InsideGroup.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]\n}",...InsideGroup.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/16/chevron_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Icon16Chevron});var Icon16Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/chevron_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Icon24Chevron});var Icon24Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a1 1 0 0 1 0 1.416l-5.084 5.084a1 1 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></g></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Card/Card.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Card__host--omX2p{background:var(--vkui--color_background_secondary);border-radius:var(--vkui--size_card_border_radius--regular);display:block;list-style-type:none;position:relative}.Card__modeShadow--iMDCy{box-shadow:var(\n    --vkui--elevation3,0 2px 24px 0 rgba(0,0,0,.08),0 0 2px 0 rgba(0,0,0,.08)\n  )}.Card__modeOutline--vPiWk,.Card__modeShadow--iMDCy{background:var(--vkui--color_background_contrast_themed)}.Card__withBorder--z0_Q0:after{block-size:100%;border:var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);border-radius:inherit;box-sizing:border-box;content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;pointer-events:none;position:absolute}.vkuiInternalCardScroll .Card__host--omX2p{-webkit-margin-end:var(--vkui--size_cardgrid_padding--regular);flex-shrink:0;margin-inline-end:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardScroll .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalCardScroll--size-s .Card__host--omX2p{inline-size:40%}.vkuiInternalCardScroll--size-m .Card__host--omX2p{inline-size:62%}.vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - var(--vkui--size_base_padding_horizontal--regular) * 2);-webkit-margin-end:var(--vkui--size_base_padding_horizontal--regular);margin-inline-end:var(--vkui--size_base_padding_horizontal--regular)}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card__host--omX2p,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - 32px);-webkit-margin-end:16px;margin-inline-end:16px}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - 32px);-webkit-margin-end:16px;margin-inline-end:16px}}.vkuiInternalGroup--mode-card .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type,.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}}@media (min-width:768px){.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card__host--omX2p:last-of-type{-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalGroup--mode-none .vkuiInternalCardScroll--size-l .Card__host--omX2p{inline-size:calc(100% - 32px);-webkit-margin-end:16px;margin-inline-end:16px}}.vkuiInternalCardGrid .Card__host--omX2p{-webkit-margin-end:var(--vkui--size_cardgrid_padding--regular);margin-inline-end:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-l .Card__host--omX2p{inline-size:100%;-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalCardGrid--size-l .Card__host--omX2p:not(:first-child){-webkit-margin-before:var(--vkui--size_cardgrid_padding--regular);margin-block-start:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card__host--omX2p{inline-size:calc(50% - (var(--vkui--size_cardgrid_padding--regular) / 2))}.vkuiInternalCardGrid--size-m .Card__host--omX2p:nth-child(n+3){-webkit-margin-before:var(--vkui--size_cardgrid_padding--regular);margin-block-start:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-m .Card__host--omX2p:nth-child(2n){-webkit-margin-end:0;margin-inline-end:0}.vkuiInternalCardGrid--size-s .Card__host--omX2p{inline-size:calc((100% - 2 * var(--vkui--size_cardgrid_padding--regular)) / 3)}.vkuiInternalCardGrid--size-s .Card__host--omX2p:nth-child(n+4){-webkit-margin-before:var(--vkui--size_cardgrid_padding--regular);margin-block-start:var(--vkui--size_cardgrid_padding--regular)}.vkuiInternalCardGrid--size-s .Card__host--omX2p:nth-child(3n){-webkit-margin-end:0;margin-inline-end:0}',"",{version:3,sources:["webpack://./src/components/Card/Card.module.css"],names:[],mappings:"AAAA,mBAEE,kDAAmD,CACnD,2DAA4D,CAE5D,aAAc,CADd,oBAAqB,CAHrB,iBAKF,CAEA,yBACE;;GAMF,CAEA,mDAHE,wDAKF,CAEA,+BAKE,eAAgB,CAGhB,oFAAqF,CAGrF,qBAAsB,CADtB,qBAAsB,CAJtB,UAAW,CACX,aAAc,CAHd,gBAAiB,CADjB,mBAAoB,CADpB,oBAAqB,CAOrB,mBAAoB,CARpB,iBAWF,CAOA,2CACE,8DAA8D,CAC9D,aAAc,CADd,6DAEF,CAGA,wDACE,oBAAoB,CAApB,mBACF,CAGA,mDACE,eACF,CAGA,mDACE,eACF,CAGA,mDACE,+EAAgF,CAChF,qEAAqE,CAArE,oEACF,CAQA,kNAIE,6BAA8B,CAC9B,uBAAuB,CAAvB,sBACF,CAEA,yBAEE,2HAGE,6BAA8B,CAC9B,uBAAuB,CAAvB,sBACF,CACF,CAGA,4OAIE,oBAAoB,CAApB,mBACF,CAEA,yBAEE,wIAGE,oBAAoB,CAApB,mBACF,CACF,CACA,yBAEE,8FAGE,oBAAoB,CAApB,mBACF,CAGA,iFACE,6BAA8B,CAC9B,uBAAuB,CAAvB,sBACF,CACF,CAOA,yCACE,8DAA8D,CAA9D,6DACF,CAGA,iDACE,gBAAiB,CACjB,oBAAoB,CAApB,mBACF,CAGA,mEACE,iEAA+D,CAA/D,8DACF,CAGA,iDACE,yEACF,CAGA,gEACE,iEAA+D,CAA/D,8DACF,CAGA,+DACE,oBAAoB,CAApB,mBACF,CAGA,iDACE,8EACF,CAGA,gEACE,iEAA+D,CAA/D,8DACF,CAGA,+DACE,oBAAoB,CAApB,mBACF",sourcesContent:[".host {\n  position: relative;\n  background: var(--vkui--color_background_secondary);\n  border-radius: var(--vkui--size_card_border_radius--regular);\n  list-style-type: none;\n  display: block;\n}\n\n.modeShadow {\n  box-shadow: var(\n    --vkui--elevation3,\n    0 2px 24px 0 rgba(0, 0, 0, 0.08),\n    0 0 2px 0 rgba(0, 0, 0, 0.08)\n  );\n  background: var(--vkui--color_background_contrast_themed);\n}\n\n.modeOutline {\n  background: var(--vkui--color_background_contrast_themed);\n}\n\n.withBorder::after {\n  position: absolute;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  content: '';\n  display: block;\n  border: var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);\n  pointer-events: none;\n  box-sizing: border-box;\n  border-radius: inherit;\n}\n\n/**\n * CMP:\n * CardScroll\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll) .host {\n  margin-inline-end: var(--vkui--size_cardgrid_padding--regular);\n  flex-shrink: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll) .host:last-of-type {\n  margin-inline-end: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll--size-s) .host {\n  inline-size: 40%;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll--size-m) .host {\n  inline-size: 62%;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardScroll--size-l) .host {\n  inline-size: calc(100% - var(--vkui--size_base_padding_horizontal--regular) * 2);\n  margin-inline-end: var(--vkui--size_base_padding_horizontal--regular);\n}\n\n/**\n * CMP:\n * Group\n * SplitCol\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) :global(.vkuiInternalCardScroll--size-l) .host,\n:global(.vkuiInternalSplitCol--viewWidth-tabletPlus):global(.vkuiInternalSplitCol--spaced-auto)\n  :global(.vkuiInternalCardScroll--size-l)\n  .host {\n  inline-size: calc(100% - 32px);\n  margin-inline-end: 16px;\n}\n\n@media (--viewWidth-smallTabletPlus) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalSplitCol--viewWidth-none):global(.vkuiInternalSplitCol--spaced-auto)\n    :global(.vkuiInternalCardScroll--size-l)\n    .host {\n    inline-size: calc(100% - 32px);\n    margin-inline-end: 16px;\n  }\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) :global(.vkuiInternalCardScroll--size-l) .host:last-of-type,\n:global(.vkuiInternalSplitCol--viewWidth-tabletPlus):global(.vkuiInternalSplitCol--spaced-auto)\n  :global(.vkuiInternalCardScroll--size-l)\n  .host:last-of-type {\n  margin-inline-end: 0;\n}\n\n@media (--viewWidth-smallTabletPlus) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalSplitCol--viewWidth-none):global(.vkuiInternalSplitCol--spaced-auto)\n    :global(.vkuiInternalCardScroll--size-l)\n    .host:last-of-type {\n    margin-inline-end: 0;\n  }\n}\n@media (--sizeX-regular) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--mode-none)\n    :global(.vkuiInternalCardScroll--size-l)\n    .host:last-of-type {\n    margin-inline-end: 0;\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--mode-none) :global(.vkuiInternalCardScroll--size-l) .host {\n    inline-size: calc(100% - 32px);\n    margin-inline-end: 16px;\n  }\n}\n\n/**\n * CMP:\n * CardGrid\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid) .host {\n  margin-inline-end: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-l) .host {\n  inline-size: 100%;\n  margin-inline-end: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-l) .host:not(:first-child) {\n  margin-block-start: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-m) .host {\n  inline-size: calc(50% - (var(--vkui--size_cardgrid_padding--regular) / 2));\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-m) .host:nth-child(n + 3) {\n  margin-block-start: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-m) .host:nth-child(2n) {\n  margin-inline-end: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-s) .host {\n  inline-size: calc((100% - 2 * var(--vkui--size_cardgrid_padding--regular)) / 3);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-s) .host:nth-child(n + 4) {\n  margin-block-start: var(--vkui--size_cardgrid_padding--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCardGrid--size-s) .host:nth-child(3n) {\n  margin-inline-end: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Card__host--omX2p",modeShadow:"Card__modeShadow--iMDCy",modeOutline:"Card__modeOutline--vPiWk",withBorder:"Card__withBorder--z0_Q0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CardScroll/CardScroll.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CardScroll__host--A2gHN{list-style-type:none;margin:0;padding:0}.CardScroll__in--yWXw0{align-items:stretch;display:flex;inline-size:100%}.CardScroll__gap--eME3g{display:block;flex-shrink:0}.CardScroll__host--A2gHN+.CardScroll__host--A2gHN{-webkit-margin-before:16px;margin-block-start:16px}.CardScroll__withPaddings--BG8kp .CardScroll__gap--eME3g{inline-size:var(--vkui--size_base_padding_horizontal--regular)}.vkuiInternalSplitCol--viewWidth-tabletPlus.vkuiInternalSplitCol--spaced-auto .CardScroll__withPaddings--BG8kp .CardScroll__gap--eME3g{inline-size:16px}@media (min-width:768px){.vkuiInternalSplitCol--viewWidth-none.vkuiInternalSplitCol--spaced-auto .CardScroll__withPaddings--BG8kp .CardScroll__gap--eME3g{inline-size:16px}}.vkuiInternalGroup--mode-card .CardScroll__withPaddings--BG8kp{margin-inline:-8px}.vkuiInternalGroup--mode-card .CardScroll__withPaddings--BG8kp:first-child{-webkit-padding-before:var(--vkui--size_cardgrid_padding_vertical--regular);padding-block-start:var(--vkui--size_cardgrid_padding_vertical--regular)}.vkuiInternalGroup--mode-card .CardScroll__withPaddings--BG8kp:last-child{-webkit-padding-after:var(--vkui--size_cardgrid_padding_vertical--regular);padding-block-end:var(--vkui--size_cardgrid_padding_vertical--regular)}@media (min-width:768px){.vkuiInternalGroup--mode-none .CardScroll__withPaddings--BG8kp{margin-inline:-8px}.vkuiInternalGroup--mode-none .CardScroll__withPaddings--BG8kp:first-child{-webkit-padding-before:var(--vkui--size_cardgrid_padding_vertical--regular);padding-block-start:var(--vkui--size_cardgrid_padding_vertical--regular)}.vkuiInternalGroup--mode-none .CardScroll__withPaddings--BG8kp:last-child{-webkit-padding-after:var(--vkui--size_cardgrid_padding_vertical--regular);padding-block-end:var(--vkui--size_cardgrid_padding_vertical--regular)}}","",{version:3,sources:["webpack://./src/components/CardScroll/CardScroll.module.css"],names:[],mappings:"AAAA,yBAGE,oBAAqB,CAFrB,QAAS,CACT,SAEF,CAEA,uBAEE,mBAAoB,CADpB,YAAa,CAEb,gBACF,CAEA,wBACE,aAAc,CACd,aACF,CAEA,kDACE,0BAAwB,CAAxB,uBACF,CAEA,yDACE,8DACF,CAOA,uIAGE,gBACF,CAEA,yBAEE,iIAGE,gBACF,CACF,CAOA,+DACE,kBACF,CAGA,2EACE,2EAAyE,CAAzE,wEACF,CAGA,0EACE,0EAAuE,CAAvE,sEACF,CAEA,yBAEE,+DACE,kBACF,CAGA,2EACE,2EAAyE,CAAzE,wEACF,CAGA,0EACE,0EAAuE,CAAvE,sEACF,CACF",sourcesContent:[".host {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.in {\n  display: flex;\n  align-items: stretch;\n  inline-size: 100%;\n}\n\n.gap {\n  display: block;\n  flex-shrink: 0;\n}\n\n.host + .host {\n  margin-block-start: 16px;\n}\n\n.withPaddings .gap {\n  inline-size: var(--vkui--size_base_padding_horizontal--regular);\n}\n\n/**\n * CMP:\n * SplitCol\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalSplitCol--viewWidth-tabletPlus):global(.vkuiInternalSplitCol--spaced-auto)\n  .withPaddings\n  .gap {\n  inline-size: 16px;\n}\n\n@media (--viewWidth-smallTabletPlus) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalSplitCol--viewWidth-none):global(.vkuiInternalSplitCol--spaced-auto)\n    .withPaddings\n    .gap {\n    inline-size: 16px;\n  }\n}\n\n/**\n * CMP:\n * Group\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) .withPaddings {\n  margin-inline: -8px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) .withPaddings:first-child {\n  padding-block-start: var(--vkui--size_cardgrid_padding_vertical--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) .withPaddings:last-child {\n  padding-block-end: var(--vkui--size_cardgrid_padding_vertical--regular);\n}\n\n@media (--sizeX-regular) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--mode-none) .withPaddings {\n    margin-inline: -8px;\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--mode-none) .withPaddings:first-child {\n    padding-block-start: var(--vkui--size_cardgrid_padding_vertical--regular);\n  }\n\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--mode-none) .withPaddings:last-child {\n    padding-block-end: var(--vkui--size_cardgrid_padding_vertical--regular);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"CardScroll__host--A2gHN",in:"CardScroll__in--yWXw0",gap:"CardScroll__gap--eME3g",withPaddings:"CardScroll__withPaddings--BG8kp"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VisuallyHidden__host--wquH2{block-size:1px!important;inline-size:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important;-webkit-user-select:none;-moz-user-select:none;user-select:none}.VisuallyHidden__focusableInput--U4i40{block-size:100%!important;inline-size:100%!important;inset-block-start:0;inset-inline-start:0;clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AACA,6BAEE,wBAA0B,CAC1B,yBAA2B,CAE3B,qBAAuB,CADvB,mBAAqB,CAHrB,2BAA6B,CAK7B,4BAA8B,CAC9B,4BAAiC,CAGjC,kBAAoB,CAFpB,4BAAqB,CAArB,oBAAqB,CAGrB,SAAU,CAFV,yBAA2B,CAG3B,wBAAiB,CAAjB,qBAAiB,CAAjB,gBACF,CAIA,uCAGE,yBAA2B,CAC3B,0BAA4B,CAF5B,mBAAoB,CADpB,oBAAqB,CAIrB,mBAAqB,CACrB,gCAA0B,CAA1B,wBAA0B,CAC1B,mBACF",sourcesContent:["/* stylelint-disable declaration-no-important */\n.host {\n  position: absolute !important;\n  block-size: 1px !important;\n  inline-size: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; /* Fix for https://github.com/twbs/bootstrap/issues/25686 */\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%);\n  overflow: hidden !important;\n  border: 0 !important;\n  opacity: 0;\n  user-select: none;\n}\n\n/* Чтобы фокус скринридера, попавший на скрытый инпут был виден.\n * Особенно актуально для Android TalkBack */\n.focusableInput {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  block-size: 100% !important;\n  inline-size: 100% !important;\n  clip: auto !important;\n  clip-path: none !important;\n  pointer-events: none;\n}\n/* stylelint-enable declaration-no-important */\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"VisuallyHidden__host--wquH2",focusableInput:"VisuallyHidden__focusableInput--U4i40"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Card_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Card/Card.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Card_module.A,options);const Card_Card_module=Card_module.A&&Card_module.A.locals?Card_module.A.locals:void 0,Card=({mode="tint",Component="li",...restProps})=>{const withBorder="outline"===mode||"outline-tint"===mode;return(0,jsx_runtime.jsx)(RootComponent.I,{...restProps,Component,baseClassName:(0,es6.xW)(Card_Card_module.host,"outline"===mode&&Card_Card_module.modeOutline,"shadow"===mode&&Card_Card_module.modeShadow,withBorder&&Card_Card_module.withBorder)})};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{mode:{defaultValue:{value:"tint"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"outline"'},{value:'"tint"'},{value:'"outline-tint"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},Component:{defaultValue:{value:"li"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>VisuallyHidden});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHidden_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VisuallyHidden_module.A,options);const VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.A&&VisuallyHidden_module.A.locals?VisuallyHidden_module.A.locals:void 0,VisuallyHidden=({Component="span",baseClassName,...restProps})=>(0,jsx_runtime.jsx)(RootComponent.I,{Component,...restProps,baseClassName:(0,es6.xW)(baseClassName,VisuallyHidden_VisuallyHidden_module.host,"input"===Component&&VisuallyHidden_VisuallyHidden_module.focusableInput)});try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useAdaptivityHasPointer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useAdaptivityHasPointer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),_useIsClient__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useIsClient.ts");function useAdaptivityHasPointer(deferDetect=!0){const{hasPointer:hasPointerContext}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__.D),needTwoPassRendering=deferDetect||void 0===hasPointerContext;return(0,_useIsClient__WEBPACK_IMPORTED_MODULE_3__.D)(!needTwoPassRendering)&&void 0===hasPointerContext?_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.Wt:hasPointerContext}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}}}]);