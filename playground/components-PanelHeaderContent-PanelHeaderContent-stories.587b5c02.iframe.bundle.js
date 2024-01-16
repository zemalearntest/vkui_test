"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9907],{"./src/components/PanelHeaderContent/PanelHeaderContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/usePlatform.ts"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_Div_Div__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Div/Div.tsx"),_Panel_Panel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Panel/Panel.tsx"),_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/PanelHeader/PanelHeader.tsx"),_PanelHeaderBack_PanelHeaderBack__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/PanelHeaderBack/PanelHeaderBack.tsx"),_View_View__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/View/View.tsx"),_PanelHeaderContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PanelHeaderContent/PanelHeaderContent.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let __WEBPACK_DEFAULT_EXPORT__={title:"Layout/PanelHeaderContent",component:_PanelHeaderContent__WEBPACK_IMPORTED_MODULE_1__.S,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.tW,_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.nB),decorators:[_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_3__.Z0]};var PANEL_ID="panel1",Example={render:function Render(){var platform=(0,_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_4__.F)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View_View__WEBPACK_IMPORTED_MODULE_5__.G,{id:"main",activePanel:PANEL_ID},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Panel_Panel__WEBPACK_IMPORTED_MODULE_6__.s,{id:PANEL_ID},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_7__.V,{before:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PanelHeaderBack_PanelHeaderBack__WEBPACK_IMPORTED_MODULE_8__.b,{label:"vkcom"===platform?"Назад":void 0})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PanelHeaderContent__WEBPACK_IMPORTED_MODULE_1__.S,{before:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_9__.q,{size:36}),status:"Был в сети вчера"},"Влад Анесов")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Div_Div__WEBPACK_IMPORTED_MODULE_10__.Z,null,"PanelHeaderContent")))}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const platform = usePlatform();\n    return <View id=\"main\" activePanel={PANEL_ID}>\n        <Panel id={PANEL_ID}>\n          <PanelHeader before={<PanelHeaderBack label={platform === 'vkcom' ? 'Назад' : undefined} />}>\n            <PanelHeaderContent before={<Avatar size={36} />} status=\"Был в сети вчера\">\n              Влад Анесов\n            </PanelHeaderContent>\n          </PanelHeader>\n          <Div>PanelHeaderContent</Div>\n        </Panel>\n      </View>;\n  }\n}",...Example.parameters?.docs?.source}}};let __namedExportsOrder=["Example"]},"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>AdaptiveIconRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),AdaptiveIconRenderer=function(param){var IconCompact=param.IconCompact,IconRegular=param.IconRegular,sizeY=(0,_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_1__.m)().sizeY;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,sizeY.compact&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCompact,{className:sizeY.compact.className}),sizeY.regular&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconRegular,{className:sizeY.regular.className}))};try{AdaptiveIconRenderer.displayName="AdaptiveIconRenderer",AdaptiveIconRenderer.__docgenInfo={description:"",displayName:"AdaptiveIconRenderer",props:{IconCompact:{defaultValue:null,description:"",name:"IconCompact",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}},IconRegular:{defaultValue:null,description:"",name:"IconRegular",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"]={docgenInfo:AdaptiveIconRenderer.__docgenInfo,name:"AdaptiveIconRenderer",path:"src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHidden_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(VisuallyHidden_module.Z,options);let VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.Z&&VisuallyHidden_module.Z.locals?VisuallyHidden_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var VisuallyHidden=function(_param){var _param_Component=_param.Component,Component=void 0===_param_Component?"span":_param_Component,restProps=_object_without_properties(_param,["Component"]);return react.createElement(RootComponent.U,_object_spread_props(_object_spread({Component:Component},restProps),{baseClassName:(0,es6.AK)(VisuallyHidden_VisuallyHidden_module.VisuallyHidden,"input"===Component&&VisuallyHidden_VisuallyHidden_module["VisuallyHidden--focusable-input"])}))};try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{_:()=>_object_without_properties})},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{De:()=>makeIcon});var browserSprite,_object_spread=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread.js"),_object_spread_props=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),_object_without_properties=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),react=__webpack_require__("../../node_modules/react/index.js"),_class_call_check=__webpack_require__("../../node_modules/@swc/helpers/esm/_class_call_check.js"),_create_class=__webpack_require__("../../node_modules/@swc/helpers/esm/_create_class.js"),_define_property=__webpack_require__("../../node_modules/@swc/helpers/esm/_define_property.js");function parse(content){var hasImportNode=!!document.importNode,el=new DOMParser().parseFromString(content,"image/svg+xml").documentElement;return hasImportNode?document.importNode(el,!0):el}var BrowserSymbol=function(){function BrowserSymbol(param){var content=param.content;(0,_class_call_check._)(this,BrowserSymbol),(0,_define_property._)(this,"isMounted",!1),(0,_define_property._)(this,"node",void 0),this.node=parse(content)}return(0,_create_class._)(BrowserSymbol,[{key:"id",get:function get(){return this.node.id}},{key:"mount",value:function mount(target){return this.isMounted||(this.isMounted=!0,target.appendChild(this.node)),this.node}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function createFromExistingNode(node){var symbol=new BrowserSymbol({content:""});return symbol.node=node,symbol}}]),BrowserSymbol}(),namespaceURI="http://www.w3.org/2000/svg",BrowserSprite=function(){function BrowserSprite(){var config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,_class_call_check._)(this,BrowserSprite),(0,_define_property._)(this,"symbols",new Map),(0,_define_property._)(this,"config",{attrs:{xmlns:namespaceURI,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,_define_property._)(this,"node",null),Object.assign(this.config.attrs,config.attrs)}return(0,_create_class._)(BrowserSprite,[{key:"push",value:function push(symbol){var symbols=this.symbols,existing=symbols.has(symbol.id);return symbols.set(symbol.id,symbol),!existing}},{key:"add",value:function add(symbol){var isNewSymbol=this.push(symbol);return this.node&&isNewSymbol&&symbol.mount(this.node),isNewSymbol}},{key:"attach",value:function attach(target){var _this=this;this.node||(this.node=target,this.symbols.forEach(function(symbol){symbol.mount(target)}),target.querySelectorAll("symbol").forEach(function(symbolNode){var symbol=BrowserSymbol.createFromExistingNode(symbolNode);_this.add(symbol)}))}},{key:"mount",value:function mount(target){var prepend=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),prepend&&target.childNodes[0]?target.insertBefore(this.node,target.firstChild):target.appendChild(this.node)),this.node}},{key:"render",value:function render(){var el=document.createElementNS(namespaceURI,"svg");return Object.entries(this.config.attrs).forEach(function(entry){return el.setAttribute(entry[0],entry[1])}),this.symbols.forEach(function(symbol){return el.appendChild(symbol.node)}),el}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),BrowserSprite}(),canUseDOM=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(canUseDOM){var spriteId="__SVG_SPRITE_NODE__";browserSprite=new BrowserSprite({attrs:{id:spriteId}});var mount=function(){var spriteNode=document.getElementById(spriteId);spriteNode?browserSprite.attach(spriteNode):browserSprite.mount(document.body),document.removeEventListener("DOMContentLoaded",mount)};document.querySelector("body")?mount():document.addEventListener("DOMContentLoaded",mount)}else browserSprite=null;function addSpriteSymbol(symbol){browserSprite&&browserSprite.add(symbol)}var useIsomorphicLayoutEffect=canUseDOM?react.useLayoutEffect:react.useEffect;function warnOnce(componentName){var didWarn={};return function(message){var type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";didWarn[message]||(console[type]("[@vkontakte/icons][".concat(componentName,"] ").concat(message)),didWarn[message]=!0)}}var SvgIcon=function(_param){var _param_width=_param.width,width=void 0===_param_width?0:_param_width,_param_height=_param.height,height=void 0===_param_height?0:_param_height,viewBox=_param.viewBox,id=_param.id,_param_className=_param.className,fill=_param.fill,getRootRef=_param.getRootRef,tmp=_param.style,title=_param.title,children=_param.children,restProps=(0,_object_without_properties._)(_param,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),size=Math.max(width,height),style=(0,_object_spread._)({width:width,height:height},void 0===tmp?{}:tmp);return react.createElement("svg",(0,_object_spread_props._)((0,_object_spread._)({"aria-hidden":"true",display:"block"},restProps),{className:["vkuiIcon","vkuiIcon--".concat(size),"vkuiIcon--w-".concat(width),"vkuiIcon--h-".concat(height),"vkuiIcon--".concat(id),void 0===_param_className?"":_param_className].join(" ").trim(),viewBox:viewBox,width:width,height:height,style:style,ref:getRootRef}),title&&react.createElement("title",null,title),react.createElement("use",{xlinkHref:"#".concat(id),style:{fill:"currentColor",color:fill}},children))};function makeIcon(componentName,id,viewBox,content,width,height,deprecated,replacement){var mountIcon=function(){isMounted||(addSpriteSymbol(new BrowserSymbol({content:content})),isMounted=!0)},isMounted=!1,warn=warnOnce(componentName),Icon=function(props){return useIsomorphicLayoutEffect(mountIcon,[]),deprecated&&warn("Иконка устарела"+(replacement?". Замените на ".concat(replacement):"")),react.createElement(SvgIcon,(0,_object_spread_props._)((0,_object_spread._)({},props),{viewBox:viewBox,id:id,width:void 0===props.width||isNaN(props.width)?width:+props.width,height:void 0===props.height||isNaN(props.height)?height:+props.height}))};return Icon.mountIcon=mountIcon,Icon.displayName=componentName,Icon}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Icon12Circle});var Icon12Circle=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon12OnlineMobile});var Icon12OnlineMobile=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/arrow_left_outline_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Icon24ArrowLeftOutline});var Icon24ArrowLeftOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ArrowLeftOutline","arrow_left_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="arrow_left_outline_24"><path fill="currentColor" d="M11.532 4.26a.9.9 0 0 1 .089 1.18l-.08.092L6.05 11.1H20.1a.9.9 0 0 1 .113 1.793l-.113.007H6.05l5.49 5.568a.9.9 0 0 1 .073 1.181l-.081.092a.9.9 0 0 1-1.181.072l-.092-.081-7-7.1a.9.9 0 0 1-.08-1.172l.08-.092 7-7.1a.9.9 0 0 1 1.273-.009" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_left_outline_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Icon24ChevronLeftOutline});var Icon24ChevronLeftOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronLeftOutline","chevron_left_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_left_outline_24"><path d="m8.414 12 7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 1 1 1.414 1.414z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/arrow_left_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Icon28ArrowLeftOutline});var Icon28ArrowLeftOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28ArrowLeftOutline","arrow_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path fill="currentColor" fill-rule="nonzero" d="M12.293 6.293a1 1 0 0 1 1.414 1.414L8.414 13H22a1 1 0 0 1 .993.883L23 14a1 1 0 0 1-1 1H8.414l5.293 5.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-7-7-.073-.082A1.005 1.005 0 0 1 5 14l.004.09A1.006 1.006 0 0 1 5 14.02V14a1.02 1.02 0 0 1 .125-.484.878.878 0 0 1 .071-.111.999.999 0 0 1 .097-.112l-.08.09c.025-.031.051-.062.08-.09Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/chevron_back_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Icon28ChevronBack});var Icon28ChevronBack=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28ChevronBack","chevron_back_28","0 0 20 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v28H0z" /><path fill="currentColor" d="M4.56 12.94 13 4.5a1.414 1.414 0 0 1 2 2L7.5 14l7.5 7.5a1.414 1.414 0 0 1-2 2l-8.44-8.44a1.5 1.5 0 0 1 0-2.12" /></g></symbol>',20,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/chevron_left_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Icon28ChevronLeftOutline});var Icon28ChevronLeftOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28ChevronLeftOutline","chevron_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="chevron_left_outline_28"><path fill="currentColor" d="m12.414 14 5.793-5.793a1 1 0 0 0-1.414-1.414l-6.5 6.5a1 1 0 0 0 0 1.414l6.5 6.5a1 1 0 0 0 1.414-1.414z" /></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VisuallyHidden--bAIOu{height:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}.VisuallyHidden--focusable-input--gqp5y{height:100%!important;left:0;top:0;width:100%!important;clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AACA,uBAEE,oBAA0B,CAG1B,qBAAuB,CADvB,mBAAqB,CAHrB,2BAA6B,CAK7B,4BAA8B,CAH9B,mBAA2B,CAI3B,4BAAiC,CAGjC,kBAAoB,CAFpB,4BAAqB,CAArB,oBAAqB,CAGrB,SAAU,CAFV,yBAGF,CAIA,wCAGE,qBAA2B,CAF3B,MAAqB,CACrB,KAAoB,CAEpB,oBAA4B,CAC5B,mBAAqB,CACrB,gCAA0B,CAA1B,wBAA0B,CAC1B,mBACF",sourcesContent:["/* stylelint-disable declaration-no-important */\n.VisuallyHidden {\n  position: absolute !important;\n  block-size: 1px !important;\n  inline-size: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; /* Fix for https://github.com/twbs/bootstrap/issues/25686 */\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%);\n  overflow: hidden !important;\n  border: 0 !important;\n  opacity: 0;\n}\n\n/* Чтобы фокус скринридера, попавший на скрытый инпут был виден.\n * Особенно актуально для Android TalkBack */\n.VisuallyHidden--focusable-input {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  block-size: 100% !important;\n  inline-size: 100% !important;\n  clip: auto !important;\n  clip-path: none !important;\n  pointer-events: none;\n}\n/* stylelint-enable declaration-no-important */\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHidden:"VisuallyHidden--bAIOu","VisuallyHidden--focusable-input":"VisuallyHidden--focusable-input--gqp5y"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);