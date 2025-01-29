"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6807],{"./src/components/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,WithBadge:()=>WithBadge,WithOverlay:()=>WithOverlay,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx")),_storybook_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/storybook/constants.ts"),_testing_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/testing/icons.tsx"),_testing_mock__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/testing/mock.ts"),_ImageBase_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ImageBase/types.ts"),_Avatar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Avatar/Avatar.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Avatar",component:_Avatar__WEBPACK_IMPORTED_MODULE_3__.e,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_4__.eb,argTypes:{size:{control:{type:"select"},options:[..._ImageBase_types__WEBPACK_IMPORTED_MODULE_5__.j]},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e.BadgeWithPreset,{preset:"online-mobile"}),Icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e.Badge,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_testing_icons__WEBPACK_IMPORTED_MODULE_6__.Fb,{})})},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e.Overlay,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_testing_icons__WEBPACK_IMPORTED_MODULE_6__.MJ,{})}),Always:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e.Overlay,{visibility:"always",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_testing_icons__WEBPACK_IMPORTED_MODULE_6__.MJ,{})})},control:{type:"inline-radio"}}},decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_2__.L1]},Playground={args:{alt:"Фотография Татьяны Плуталовой"},render:({badge,overlay,children,size=48,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e,{src:args.initials?void 0:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_7__.TW)("user_id34"),...args,size,children:[size>=24&&badge,overlay,children]})},WithBadge={...Playground,args:{...Playground.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e.Badge,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_testing_icons__WEBPACK_IMPORTED_MODULE_6__.Fb,{})})}},WithOverlay={...Playground,args:{...Playground.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_3__.e.Overlay,{"aria-label":"Кнопка для изображения",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_testing_icons__WEBPACK_IMPORTED_MODULE_6__.MJ,{})})}},__namedExportsOrder=["Playground","WithBadge","WithOverlay"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    alt: 'Фотография Татьяны Плуталовой'\n  },\n  render: ({\n    badge,\n    overlay,\n    children,\n    size = 48,\n    ...args\n  }) => <Avatar src={args.initials ? undefined : getAvatarUrl('user_id34')} {...args} size={size}>\n      {size >= 24 && badge}\n      {overlay}\n      {children}\n    </Avatar>\n}",...Playground.parameters?.docs?.source}}},WithBadge.parameters={...WithBadge.parameters,docs:{...WithBadge.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    children: <Avatar.Badge>\n        <IconExampleForBadgeBasedOnImageBaseSize />\n      </Avatar.Badge>\n  }\n}",...WithBadge.parameters?.docs?.source}}},WithOverlay.parameters={...WithOverlay.parameters,docs:{...WithOverlay.parameters?.docs,source:{originalSource:'{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    children: <Avatar.Overlay aria-label="Кнопка для изображения">\n        <IconExampleForOverlayBasedOnImageBaseSize />\n      </Avatar.Overlay>\n  }\n}',...WithOverlay.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/12/circle_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Icon12Circle});var Icon12Circle=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/12/online_mobile_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Icon12OnlineMobile});var Icon12OnlineMobile=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.5.5 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.5.5 0 0 0 .502-.502V3.503A.5.5 0 0 0 5.997 3" /></symbol>',8,12,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Avatar/Avatar.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Avatar__host--GsLlr{border-radius:50%}.Avatar__hasGradient--Mtna_{color:var(--vkui--color_text_contrast)}.Avatar__gradientRed--ywLc7{background-color:#e52e40;background-image:linear-gradient(135deg,#ff7583,#e52e40)}.Avatar__gradientPink--UgYw_{background-color:#e62e6b;background-image:linear-gradient(135deg,#ff8880,#e62e6b)}.Avatar__gradientOrange--Ypzz6{background-color:#e66b2e;background-image:linear-gradient(135deg,#ffbf80,#e66b2e)}.Avatar__gradientYellow--QiCwF{background-color:#e7a902;background-image:linear-gradient(135deg,#ffd54f,#e7a902)}.Avatar__gradientGreen--c92UT{background-color:#6cd97e;background-image:linear-gradient(135deg,#6cd97e,#12b212)}.Avatar__gradientLBlue--vhj2q{background-color:#2bb4d6;background-image:linear-gradient(135deg,#7df1fa,#2bb4d6)}.Avatar__gradientBlue--Zy57a{background-color:#3f8ae0;background-image:linear-gradient(135deg,#6cf,#3f8ae0)}.Avatar__gradientViolet--hmL2Z{background-color:#8f3fe0;background-image:linear-gradient(135deg,#d3a6ff,#8f3fe0)}.Avatar__initials--YRK_t{font-family:var(--vkui--font_family_accent);font-weight:600;line-height:1;text-align:center;text-transform:uppercase}","",{version:3,sources:["webpack://./src/components/Avatar/Avatar.module.css"],names:[],mappings:"AAAA,qBACE,iBACF,CAEA,4BACE,sCACF,CAEA,4BACE,wBAAyB,CACzB,wDACF,CAEA,6BACE,wBAAyB,CACzB,wDACF,CAEA,+BACE,wBAAyB,CACzB,wDACF,CAEA,+BACE,wBAAyB,CACzB,wDACF,CAEA,8BACE,wBAAyB,CACzB,wDACF,CAEA,8BACE,wBAAyB,CACzB,wDACF,CAEA,6BACE,wBAAyB,CACzB,qDACF,CAEA,+BACE,wBAAyB,CACzB,wDACF,CAEA,yBACE,2CAA4C,CAC5C,eAAgB,CAChB,aAAc,CAEd,iBAAkB,CADlB,wBAEF",sourcesContent:[".host {\n  border-radius: 50%;\n}\n\n.hasGradient {\n  color: var(--vkui--color_text_contrast);\n}\n\n.gradientRed {\n  background-color: #e52e40;\n  background-image: linear-gradient(135deg, #ff7583, #e52e40);\n}\n\n.gradientPink {\n  background-color: #e62e6b;\n  background-image: linear-gradient(135deg, #ff8880, #e62e6b);\n}\n\n.gradientOrange {\n  background-color: #e66b2e;\n  background-image: linear-gradient(135deg, #ffbf80, #e66b2e);\n}\n\n.gradientYellow {\n  background-color: #e7a902;\n  background-image: linear-gradient(135deg, #ffd54f, #e7a902);\n}\n\n.gradientGreen {\n  background-color: #6cd97e;\n  background-image: linear-gradient(135deg, #6cd97e, #12b212);\n}\n\n.gradientLBlue {\n  background-color: #2bb4d6;\n  background-image: linear-gradient(135deg, #7df1fa, #2bb4d6);\n}\n\n.gradientBlue {\n  background-color: #3f8ae0;\n  background-image: linear-gradient(135deg, #6cf, #3f8ae0);\n}\n\n.gradientViolet {\n  background-color: #8f3fe0;\n  background-image: linear-gradient(135deg, #d3a6ff, #8f3fe0);\n}\n\n.initials {\n  font-family: var(--vkui--font_family_accent);\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  text-align: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Avatar__host--GsLlr",hasGradient:"Avatar__hasGradient--Mtna_",gradientRed:"Avatar__gradientRed--ywLc7",gradientPink:"Avatar__gradientPink--UgYw_",gradientOrange:"Avatar__gradientOrange--Ypzz6",gradientYellow:"Avatar__gradientYellow--QiCwF",gradientGreen:"Avatar__gradientGreen--c92UT",gradientLBlue:"Avatar__gradientLBlue--vhj2q",gradientBlue:"Avatar__gradientBlue--Zy57a",gradientViolet:"Avatar__gradientViolet--hmL2Z",initials:"Avatar__initials--YRK_t"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Avatar/AvatarBadge/AvatarBadge.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".AvatarBadge__host--Qh5FN{inset-block-end:0;inset-inline-end:0}.AvatarBadge__shifted--bcoVT{inset-block-end:-2px;inset-inline-end:-2px}.AvatarBadge__presetOnline--dpmBq,.AvatarBadge__presetOnlineMobile--Tscvv{color:var(--vkui--color_accent_green);inset-block-end:14%;inset-inline-end:14%;transform:translate(50%,50%)}.AvatarBadge__presetOnline--dpmBq{padding:0}.AvatarBadge__presetOnlineMobile--Tscvv{border-radius:3px}","",{version:3,sources:["webpack://./src/components/Avatar/AvatarBadge/AvatarBadge.module.css"],names:[],mappings:"AAAA,0BAEE,iBAAkB,CADlB,kBAEF,CAEA,6BAEE,oBAAqB,CADrB,qBAEF,CAEA,0EAIE,qCAAsC,CADtC,mBAAoB,CADpB,oBAAqB,CAGrB,4BACF,CAKA,kCACE,SACF,CAEA,wCACE,iBACF",sourcesContent:[".host {\n  inset-inline-end: 0;\n  inset-block-end: 0;\n}\n\n.shifted {\n  inset-inline-end: -2px;\n  inset-block-end: -2px;\n}\n\n.presetOnline,\n.presetOnlineMobile {\n  inset-inline-end: 14%;\n  inset-block-end: 14%;\n  color: var(--vkui--color_accent_green);\n  transform: translate(50%, 50%);\n}\n\n/**\n * Перебиваем свойства `ImageBaseBadge` для этих кейсов\n */\n.presetOnline {\n  padding: 0;\n}\n\n.presetOnlineMobile {\n  border-radius: 3px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"AvatarBadge__host--Qh5FN",shifted:"AvatarBadge__shifted--bcoVT",presetOnline:"AvatarBadge__presetOnline--dpmBq",presetOnlineMobile:"AvatarBadge__presetOnlineMobile--Tscvv"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar_Avatar});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),ImageBase=__webpack_require__("./src/components/ImageBase/ImageBase.tsx"),ImageBaseOverlay=__webpack_require__("./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),context=__webpack_require__("./src/components/ImageBase/context.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),AvatarBadge_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Avatar/AvatarBadge/AvatarBadge.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AvatarBadge_module.A,options);const AvatarBadge_AvatarBadge_module=AvatarBadge_module.A&&AvatarBadge_module.A.locals?AvatarBadge_module.A.locals:void 0,AvatarBadge=({className,...restProps})=>{const{size}=react.useContext(context.S);return(0,jsx_runtime.jsx)(ImageBase.vO.Badge,{...restProps,className:(0,lib.xW)(AvatarBadge_AvatarBadge_module.host,size<96&&AvatarBadge_AvatarBadge_module.shifted,className)})};AvatarBadge.displayName="Avatar.Badge";try{AvatarBadge.displayName="Avatar.Badge",AvatarBadge.__docgenInfo={description:"",displayName:"Avatar.Badge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/AvatarBadge/AvatarBadge.tsx#Avatar.Badge"]={docgenInfo:Avatar.Badge.__docgenInfo,name:"Avatar.Badge",path:"src/components/Avatar/AvatarBadge/AvatarBadge.tsx#Avatar.Badge"})}catch(__react_docgen_typescript_loader_error){}var helpers=__webpack_require__("./src/components/ImageBase/helpers.ts"),circle_12=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/12/circle_12.js"),online_mobile_12=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/12/online_mobile_12.js");const Icon12Circle=({width,height,...restProps})=>(0,jsx_runtime.jsx)(circle_12.p,{...restProps,width:width>=24?15:12,height:height>=24?15:12}),Icon12OnlineMobile=({width,height,...restProps})=>(0,jsx_runtime.jsx)(online_mobile_12.Y,{...restProps,width:width>=24?9:8,height:height>=24?15:12});try{Icon12Circle.displayName="Icon12Circle",Icon12Circle.__docgenInfo={description:"",displayName:"Icon12Circle",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/AvatarBadge/icons.tsx#Icon12Circle"]={docgenInfo:Icon12Circle.__docgenInfo,name:"Icon12Circle",path:"src/components/Avatar/AvatarBadge/icons.tsx#Icon12Circle"})}catch(__react_docgen_typescript_loader_error){}try{Icon12OnlineMobile.displayName="Icon12OnlineMobile",Icon12OnlineMobile.__docgenInfo={description:"",displayName:"Icon12OnlineMobile",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/AvatarBadge/icons.tsx#Icon12OnlineMobile"]={docgenInfo:Icon12OnlineMobile.__docgenInfo,name:"Icon12OnlineMobile",path:"src/components/Avatar/AvatarBadge/icons.tsx#Icon12OnlineMobile"})}catch(__react_docgen_typescript_loader_error){}const AvatarBadgeWithPreset=({preset="online",className,...restProps})=>{const{size}=react.useContext(context.S),badgeSize=(0,helpers.Q3)(size),isOnlinePreset="online"===preset,presetClassName=isOnlinePreset?AvatarBadge_AvatarBadge_module.presetOnline:AvatarBadge_AvatarBadge_module.presetOnlineMobile,Icon=isOnlinePreset?Icon12Circle:Icon12OnlineMobile;return(0,jsx_runtime.jsx)(ImageBase.vO.Badge,{background:"stroke",className:(0,lib.xW)(AvatarBadge_AvatarBadge_module.host,presetClassName,className),...restProps,children:(0,jsx_runtime.jsx)(Icon,{width:badgeSize,height:badgeSize})})};AvatarBadgeWithPreset.displayName="Avatar.BadgeWithPreset";try{AvatarBadgeWithPreset.displayName="Avatar.BadgeWithPreset",AvatarBadgeWithPreset.__docgenInfo={description:"",displayName:"Avatar.BadgeWithPreset",props:{preset:{defaultValue:{value:"online"},description:"Использует предзаданные настройки.\n\nЗа каждым пресетом закреплена своя иконка и стили.",name:"preset",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"online-mobile"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/AvatarBadge/AvatarBadgeWithPreset.tsx#Avatar.BadgeWithPreset"]={docgenInfo:Avatar.BadgeWithPreset.__docgenInfo,name:"Avatar.BadgeWithPreset",path:"src/components/Avatar/AvatarBadge/AvatarBadgeWithPreset.tsx#Avatar.BadgeWithPreset"})}catch(__react_docgen_typescript_loader_error){}const getInitialsFontSize=avatarSize=>{if(avatarSize<=16)return 5;if(avatarSize<=24)return 8;if(avatarSize<=32)return 10;if(avatarSize<=36)return 13;if(avatarSize<=44)return 14;if(avatarSize<=48)return 17;if(avatarSize<56)return 18;if(avatarSize<=64)return 21;if(avatarSize<=88)return 26;if(avatarSize<=96)return 30;const calculatedFontSize=Math.ceil(.3125*avatarSize);return calculatedFontSize+calculatedFontSize%2};var Avatar_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Avatar/Avatar.module.css"),Avatar_module_options={attributes:{class:"vkui-style"}};Avatar_module_options.setAttributes=setAttributesWithAttributesAndNonce_default(),Avatar_module_options.insert=insertBySelector_default().bind(null,"head"),Avatar_module_options.domAPI=singletonStyleDomAPI_default(),Avatar_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.A,Avatar_module_options);const Avatar_Avatar_module=Avatar_module.A&&Avatar_module.A.locals?Avatar_module.A.locals:void 0,COLORS_NUMBER_TO_TEXT_MAP={1:"red",2:"orange",3:"yellow",4:"green",5:"l-blue",6:"violet"},gradientStyles={red:Avatar_Avatar_module.gradientRed,orange:Avatar_Avatar_module.gradientOrange,yellow:Avatar_Avatar_module.gradientYellow,green:Avatar_Avatar_module.gradientGreen,blue:Avatar_Avatar_module.gradientBlue,"l-blue":Avatar_Avatar_module.gradientLBlue,violet:Avatar_Avatar_module.gradientViolet},Avatar_Avatar=({size=48,className,gradientColor,initials,fallbackIcon:fallbackIconProp,children,...restProps})=>{const gradientName="number"==typeof gradientColor?COLORS_NUMBER_TO_TEXT_MAP[gradientColor]:gradientColor,isGradientNotCustom=gradientName&&"custom"!==gradientName,fallbackIcon=initials?(0,jsx_runtime.jsx)("div",{className:Avatar_Avatar_module.initials,style:{fontSize:getInitialsFontSize(size)},children:initials}):fallbackIconProp;return(0,jsx_runtime.jsx)(ImageBase.vO,{...restProps,size,fallbackIcon,className:(0,lib.xW)(Avatar_Avatar_module.host,gradientName&&Avatar_Avatar_module.hasGradient,isGradientNotCustom&&gradientStyles[gradientName],className),children})};Avatar_Avatar.displayName="Avatar",Avatar_Avatar.Badge=AvatarBadge,Avatar_Avatar.Badge.displayName="Avatar.Badge",Avatar_Avatar.BadgeWithPreset=AvatarBadgeWithPreset,Avatar_Avatar.BadgeWithPreset.displayName="Avatar.BadgeWithPreset",Avatar_Avatar.Overlay=ImageBaseOverlay.D,Avatar_Avatar.Overlay.displayName="Avatar.Overlay",Avatar_Avatar.getInitialsFontSize=getInitialsFontSize;try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{initials:{defaultValue:null,description:"Инициалы пользователя.\n\n> Note: Если аватарка не прогрузится, то пользователь увидит инициалы.\n\n> ⚠️ Перебивает `fallbackIcon`.",name:"initials",required:!1,type:{name:"string"}},gradientColor:{defaultValue:null,description:"Задаёт градиент для фона.\n\nЕсли передано число, то оно будет сконвертировано в строчное представление цвета по следующей схеме:\n\n1: 'red'\n2: 'orange'\n3: 'yellow'\n4: 'green'\n5: 'l-blue'\n6: 'violet'\n\n> Если необходимо задать свой градиент, то используйте значение `\"custom\"` и определите цвет градиента либо через\n> свой класс в `className`, либо через `style={{ backgroundImage: \"...\" }}`.",name:"gradientColor",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"custom"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"l-blue"'},{value:'"violet"'},{value:'"blue"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLImageElement>"}},size:{defaultValue:{value:"48"},description:"Задаёт размер картинки.\n\nИспользуйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.\n\n> ⚠️ Использование кастомного размера – это пограничный кейс.",name:"size",required:!1,type:{name:"LiteralUnion<16 | 32 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},objectFit:{defaultValue:null,description:"Пользовательское значения стиля object-fit\nПодробнее можно почитать в [документации](https://developer.mozilla.org/ru/docs/Web/CSS/object-fit)",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"contain"'},{value:'"none"'},{value:'"inherit"'},{value:'"fill"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"cover"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"Пользовательское значения стиля object-position\nПодробнее можно почитать в [документации](https://developer.mozilla.org/ru/docs/Web/CSS/object-position)",name:"objectPosition",required:!1,type:{name:"ObjectPosition<string | number>"}},noBorder:{defaultValue:null,description:"Отключает обводку.",name:"noBorder",required:!1,type:{name:"boolean"}},fallbackIcon:{defaultValue:null,description:"Фолбек на случай, если картинка не прогрузилась.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getFallbackIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.\n\n> ⚠️ Может перекрывать `children`.",name:"fallbackIcon",required:!1,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},withTransparentBackground:{defaultValue:null,description:"Отключает фон, заданный по умолчанию. Полезен для отображения картинок с прозрачностью.\n@since 5.10.0",name:"withTransparentBackground",required:!1,type:{name:"boolean"}},keepAspectRatio:{defaultValue:null,description:"Флаг для сохранения пропорций картинки.\nДля корректной работы необходимо задать размеры хотя бы одной стороны картинки",name:"keepAspectRatio",required:!1,type:{name:"boolean"}},elementTiming:{defaultValue:null,description:"см. https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/elementtiming",name:"elementTiming",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}}}]);