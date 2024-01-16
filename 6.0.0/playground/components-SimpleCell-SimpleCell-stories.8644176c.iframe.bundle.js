"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4795],{"./src/components/SimpleCell/SimpleCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SimpleCell_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Icon12Verified=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Verified","verified_12","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="verified_12"><path fill="currentColor" d="M4.5 9.586 2.957 8.043a1 1 0 0 0-1.414 1.414l2.25 2.25a1 1 0 0 0 1.414 0l5.25-5.25a1 1 0 0 0-1.414-1.414z" /></symbol>',16,16,!1,void 0),message_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),VKUIDecorators=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),Group=__webpack_require__("./src/components/Group/Group.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let SimpleCell_stories={title:"Blocks/SimpleCell",component:__webpack_require__("./src/components/SimpleCell/SimpleCell.tsx").q,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},constants.tW,constants.nB)};var Playground={args:{children:"Игорь Фёдоров",before:react.createElement(Avatar.q,{size:48,src:"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"}),badgeAfterTitle:react.createElement(Icon12Verified,null),after:react.createElement(IconButton.h,{label:"Написать сообщение"},react.createElement(message_outline_28.C,null)),subtitle:"Команда ВКонтакте"},decorators:[function(Component,context){return react.createElement(Group.Z,null,react.createElement(Component,context.args))},VKUIDecorators.vO,VKUIDecorators.Z0]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Игорь Фёдоров',\n    before: <Avatar size={48} src=\"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1\" />,\n    badgeAfterTitle: <Icon12Verified />,\n    after: <IconButton label=\"Написать сообщение\">\n        <Icon28MessageOutline />\n      </IconButton>,\n    subtitle: 'Команда ВКонтакте'\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{_:()=>_object_without_properties})},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{De:()=>makeIcon});var browserSprite,_object_spread=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread.js"),_object_spread_props=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),_object_without_properties=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),react=__webpack_require__("../../node_modules/react/index.js"),_class_call_check=__webpack_require__("../../node_modules/@swc/helpers/esm/_class_call_check.js"),_create_class=__webpack_require__("../../node_modules/@swc/helpers/esm/_create_class.js"),_define_property=__webpack_require__("../../node_modules/@swc/helpers/esm/_define_property.js");function parse(content){var hasImportNode=!!document.importNode,el=new DOMParser().parseFromString(content,"image/svg+xml").documentElement;return hasImportNode?document.importNode(el,!0):el}var BrowserSymbol=function(){function BrowserSymbol(param){var content=param.content;(0,_class_call_check._)(this,BrowserSymbol),(0,_define_property._)(this,"isMounted",!1),(0,_define_property._)(this,"node",void 0),this.node=parse(content)}return(0,_create_class._)(BrowserSymbol,[{key:"id",get:function get(){return this.node.id}},{key:"mount",value:function mount(target){return this.isMounted||(this.isMounted=!0,target.appendChild(this.node)),this.node}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function createFromExistingNode(node){var symbol=new BrowserSymbol({content:""});return symbol.node=node,symbol}}]),BrowserSymbol}(),namespaceURI="http://www.w3.org/2000/svg",BrowserSprite=function(){function BrowserSprite(){var config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,_class_call_check._)(this,BrowserSprite),(0,_define_property._)(this,"symbols",new Map),(0,_define_property._)(this,"config",{attrs:{xmlns:namespaceURI,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,_define_property._)(this,"node",null),Object.assign(this.config.attrs,config.attrs)}return(0,_create_class._)(BrowserSprite,[{key:"push",value:function push(symbol){var symbols=this.symbols,existing=symbols.has(symbol.id);return symbols.set(symbol.id,symbol),!existing}},{key:"add",value:function add(symbol){var isNewSymbol=this.push(symbol);return this.node&&isNewSymbol&&symbol.mount(this.node),isNewSymbol}},{key:"attach",value:function attach(target){var _this=this;this.node||(this.node=target,this.symbols.forEach(function(symbol){symbol.mount(target)}),target.querySelectorAll("symbol").forEach(function(symbolNode){var symbol=BrowserSymbol.createFromExistingNode(symbolNode);_this.add(symbol)}))}},{key:"mount",value:function mount(target){var prepend=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),prepend&&target.childNodes[0]?target.insertBefore(this.node,target.firstChild):target.appendChild(this.node)),this.node}},{key:"render",value:function render(){var el=document.createElementNS(namespaceURI,"svg");return Object.entries(this.config.attrs).forEach(function(entry){return el.setAttribute(entry[0],entry[1])}),this.symbols.forEach(function(symbol){return el.appendChild(symbol.node)}),el}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),BrowserSprite}(),canUseDOM=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(canUseDOM){var spriteId="__SVG_SPRITE_NODE__";browserSprite=new BrowserSprite({attrs:{id:spriteId}});var mount=function(){var spriteNode=document.getElementById(spriteId);spriteNode?browserSprite.attach(spriteNode):browserSprite.mount(document.body),document.removeEventListener("DOMContentLoaded",mount)};document.querySelector("body")?mount():document.addEventListener("DOMContentLoaded",mount)}else browserSprite=null;function addSpriteSymbol(symbol){browserSprite&&browserSprite.add(symbol)}var useIsomorphicLayoutEffect=canUseDOM?react.useLayoutEffect:react.useEffect;function warnOnce(componentName){var didWarn={};return function(message){var type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";didWarn[message]||(console[type]("[@vkontakte/icons][".concat(componentName,"] ").concat(message)),didWarn[message]=!0)}}var SvgIcon=function(_param){var _param_width=_param.width,width=void 0===_param_width?0:_param_width,_param_height=_param.height,height=void 0===_param_height?0:_param_height,viewBox=_param.viewBox,id=_param.id,_param_className=_param.className,fill=_param.fill,getRootRef=_param.getRootRef,tmp=_param.style,title=_param.title,children=_param.children,restProps=(0,_object_without_properties._)(_param,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),size=Math.max(width,height),style=(0,_object_spread._)({width:width,height:height},void 0===tmp?{}:tmp);return react.createElement("svg",(0,_object_spread_props._)((0,_object_spread._)({"aria-hidden":"true",display:"block"},restProps),{className:["vkuiIcon","vkuiIcon--".concat(size),"vkuiIcon--w-".concat(width),"vkuiIcon--h-".concat(height),"vkuiIcon--".concat(id),void 0===_param_className?"":_param_className].join(" ").trim(),viewBox:viewBox,width:width,height:height,style:style,ref:getRootRef}),title&&react.createElement("title",null,title),react.createElement("use",{xlinkHref:"#".concat(id),style:{fill:"currentColor",color:fill}},children))};function makeIcon(componentName,id,viewBox,content,width,height,deprecated,replacement){var mountIcon=function(){isMounted||(addSpriteSymbol(new BrowserSymbol({content:content})),isMounted=!0)},isMounted=!1,warn=warnOnce(componentName),Icon=function(props){return useIsomorphicLayoutEffect(mountIcon,[]),deprecated&&warn("Иконка устарела"+(replacement?". Замените на ".concat(replacement):"")),react.createElement(SvgIcon,(0,_object_spread_props._)((0,_object_spread._)({},props),{viewBox:viewBox,id:id,width:void 0===props.width||isNaN(props.width)?width:+props.width,height:void 0===props.height||isNaN(props.height)?height:+props.height}))};return Icon.mountIcon=mountIcon,Icon.displayName=componentName,Icon}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Icon12Circle});var Icon12Circle=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon12OnlineMobile});var Icon12OnlineMobile=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Icon16Chevron});var Icon16Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Icon24ChevronCompactRight});var Icon24ChevronCompactRight=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Icon28MessageOutline});var Icon28MessageOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28MessageOutline","message_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10Zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8" /></g></symbol>',28,28,!1,void 0)}}]);