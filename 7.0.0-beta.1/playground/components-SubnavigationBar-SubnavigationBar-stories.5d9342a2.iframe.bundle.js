"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6255],{"./src/hooks/useAdaptivityHasPointer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useAdaptivityHasPointer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),_useIsClient__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useIsClient.ts");function useAdaptivityHasPointer(deferDetect=!0){const{hasPointer:hasPointerContext}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__.D),needTwoPassRendering=deferDetect||void 0===hasPointerContext;return(0,_useIsClient__WEBPACK_IMPORTED_MODULE_3__.D)(!needTwoPassRendering)&&void 0===hasPointerContext?_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.Wt:hasPointerContext}},"./src/components/SubnavigationBar/SubnavigationBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SubnavigationBar_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),VKUIDecorators=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),Group=__webpack_require__("./src/components/Group/Group.tsx"),SubnavigationButton=__webpack_require__("./src/components/SubnavigationButton/SubnavigationButton.tsx"),SubnavigationButton_stories=__webpack_require__("./src/components/SubnavigationButton/SubnavigationButton.stories.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),HorizontalScroll=__webpack_require__("./src/components/HorizontalScroll/HorizontalScroll.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),SubnavigationBar_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/SubnavigationBar/SubnavigationBar.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SubnavigationBar_module.A,options);const SubnavigationBar_SubnavigationBar_module=SubnavigationBar_module.A&&SubnavigationBar_module.A.locals?SubnavigationBar_module.A.locals:void 0,defaultScrollToLeft=x=>x-240,defaultScrollToRight=x=>x+240,SubnavigationBar=({fixed=!1,children,showArrows=!0,getScrollToLeft=defaultScrollToLeft,getScrollToRight=defaultScrollToRight,scrollAnimationDuration,...restProps})=>{let ScrollWrapper,scrollWrapperProps={};return fixed?ScrollWrapper="div":(ScrollWrapper=HorizontalScroll.o,scrollWrapperProps={showArrows,getScrollToLeft,getScrollToRight,scrollAnimationDuration}),(0,jsx_runtime.jsx)(RootComponent.I,{baseClassName:fixed&&SubnavigationBar_SubnavigationBar_module.modeFixed,...restProps,children:(0,jsx_runtime.jsx)(ScrollWrapper,{className:SubnavigationBar_SubnavigationBar_module.in,...scrollWrapperProps,children:(0,jsx_runtime.jsx)("ul",{className:SubnavigationBar_SubnavigationBar_module.scrollIn,children:react.Children.map(children,((child,idx)=>(0,es6.G1)(child)?(0,jsx_runtime.jsx)("li",{className:SubnavigationBar_SubnavigationBar_module.item,children:child},idx):null))})})})};try{SubnavigationBar.displayName="SubnavigationBar",SubnavigationBar.__docgenInfo={description:"",displayName:"SubnavigationBar",props:{fixed:{defaultValue:{value:"false"},description:"",name:"fixed",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},getScrollToLeft:{defaultValue:{value:"(x) => x - 240"},description:"Функция для расчета величины прокрутки при клике на левую стрелку.",name:"getScrollToLeft",required:!1,type:{name:"ScrollPositionHandler"}},getScrollToRight:{defaultValue:{value:"(x) => x + 240"},description:"Функция для расчета величины прокрутки при клике на правую стрелку.",name:"getScrollToRight",required:!1,type:{name:"ScrollPositionHandler"}},scrollAnimationDuration:{defaultValue:null,description:"",name:"scrollAnimationDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SubnavigationBar/SubnavigationBar.tsx#SubnavigationBar"]={docgenInfo:SubnavigationBar.__docgenInfo,name:"SubnavigationBar",path:"src/components/SubnavigationBar/SubnavigationBar.tsx#SubnavigationBar"})}catch(__react_docgen_typescript_loader_error){}const SubnavigationBar_stories={title:"Blocks/SubnavigationBar",component:SubnavigationBar,parameters:{...constants.eb,...constants.eC},argTypes:{selected:{control:"select",options:["size","favorite","filters"]}}},Playground={render:function Render({selected,...args}){const[,updateArg]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();return(0,jsx_runtime.jsxs)(SubnavigationBar,{...args,children:[(0,jsx_runtime.jsx)(SubnavigationButton.T,{...SubnavigationButton_stories.Playground.args,selected:"size"===selected,onClick:()=>updateArg({selected:"size"})}),(0,jsx_runtime.jsx)(SubnavigationButton.T,{...SubnavigationButton_stories.WithIcon.args,selected:"favorite"===selected,onClick:()=>updateArg({selected:"favorite"})}),(0,jsx_runtime.jsx)(SubnavigationButton.T,{...SubnavigationButton_stories.WithCounter.args,selected:"filters"===selected,onClick:()=>updateArg({selected:"filters"})})]})},args:{selected:"size"},decorators:[(Component,context)=>(0,jsx_runtime.jsx)(Group.Y,{children:(0,jsx_runtime.jsx)(Component,{...context.args})}),VKUIDecorators.fd,VKUIDecorators.E4]},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    selected,\n    ...args\n  }) {\n    const [, updateArg] = useArgs();\n    return <SubnavigationBar {...args}>\n        <SubnavigationButton {...BasicSubnavigationButtonStory.args} selected={selected === 'size'} onClick={() => updateArg({\n        selected: 'size'\n      })} />\n        <SubnavigationButton {...IconSubnavigationButtonStory.args} selected={selected === 'favorite'} onClick={() => updateArg({\n        selected: 'favorite'\n      })} />\n        <SubnavigationButton {...CounterSubnavigationButtonStory.args} selected={selected === 'filters'} onClick={() => updateArg({\n        selected: 'filters'\n      })} />\n      </SubnavigationBar>;\n  },\n  args: {\n    selected: 'size'\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/SubnavigationBar/SubnavigationBar.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.SubnavigationBar__in--BssXw{margin-block:-8px;margin-inline:0}.SubnavigationBar__scrollIn--hyecl{display:flex;margin:0;padding-block:calc(var(--vkui--size_subnavigation_bar_padding_vertical--regular) + 8px);padding-inline:0}.SubnavigationBar__scrollIn--hyecl:after,.SubnavigationBar__scrollIn--hyecl:before{content:"";min-inline-size:var(--vkui--size_base_padding_horizontal--regular)}.SubnavigationBar__item--_Fa9p{display:flex;list-style-type:none}.SubnavigationBar__item--_Fa9p+.SubnavigationBar__item--_Fa9p{-webkit-margin-start:var(--vkui--size_subnavigation_bar_gap--regular);margin-inline-start:var(--vkui--size_subnavigation_bar_gap--regular)}.SubnavigationBar__modeFixed--Kdx9W .SubnavigationBar__item--_Fa9p{flex:1;min-inline-size:0}',"",{version:3,sources:["webpack://./src/components/SubnavigationBar/SubnavigationBar.module.css"],names:[],mappings:"AAAA,6BAEE,iBAAkB,CAClB,eACF,CAEA,mCAIE,YAAa,CAHb,QAAS,CACT,uFAAwF,CACxF,gBAEF,CAEA,mFAEE,UAAW,CACX,kEACF,CAEA,+BAEE,YAAa,CADb,oBAEF,CAEA,8DACE,qEAAqE,CAArE,oEACF,CAEA,mEACE,MAAO,CACP,iBACF",sourcesContent:[".in {\n  /* Отрицательный margin нужен, чтобы компенсировать увеличенный из-за тени padding (12px -> 20px) */\n  margin-block: -8px;\n  margin-inline: 0;\n}\n\n.scrollIn {\n  margin: 0;\n  padding-block: calc(var(--vkui--size_subnavigation_bar_padding_vertical--regular) + 8px);\n  padding-inline: 0;\n  display: flex;\n}\n\n.scrollIn::before,\n.scrollIn::after {\n  content: '';\n  min-inline-size: var(--vkui--size_base_padding_horizontal--regular);\n}\n\n.item {\n  list-style-type: none;\n  display: flex;\n}\n\n.item + .item {\n  margin-inline-start: var(--vkui--size_subnavigation_bar_gap--regular);\n}\n\n.modeFixed .item {\n  flex: 1;\n  min-inline-size: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={in:"SubnavigationBar__in--BssXw",scrollIn:"SubnavigationBar__scrollIn--hyecl",item:"SubnavigationBar__item--_Fa9p",modeFixed:"SubnavigationBar__modeFixed--Kdx9W"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);