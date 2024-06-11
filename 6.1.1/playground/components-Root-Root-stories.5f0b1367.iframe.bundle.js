"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3049],{"./src/components/CellButton/CellButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>CellButton});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),SimpleCell=__webpack_require__("./src/components/SimpleCell/SimpleCell.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),CellButton_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CellButton/CellButton.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CellButton_module.A,options);const CellButton_CellButton_module=CellButton_module.A&&CellButton_module.A.locals?CellButton_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CellButton=function(_param){var _param_centered=_param.centered,centered=void 0!==_param_centered&&_param_centered,_param_mode=_param.mode,mode=void 0===_param_mode?"primary":_param_mode,className=_param.className,restProps=_object_without_properties(_param,["centered","mode","className"]);return(0,jsx_runtime.jsx)(SimpleCell.T,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{className:(0,es6.xW)(CellButton_CellButton_module.CellButton,"danger"===mode&&CellButton_CellButton_module["CellButton--mode-danger"],centered&&CellButton_CellButton_module["CellButton--centered"],className)}))};try{CellButton.displayName="CellButton",CellButton.__docgenInfo={description:"",displayName:"CellButton",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'}]}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},expandable:{defaultValue:null,description:"В режиме `auto` в iOS добавляет chevron справа.\nПередавать `always`, если предполагается переход при клике по ячейке.",name:"expandable",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"always"'}]}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CellButton/CellButton.tsx#CellButton"]={docgenInfo:CellButton.__docgenInfo,name:"CellButton",path:"src/components/CellButton/CellButton.tsx#CellButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Root/Root.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Root_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),VKUIDecorators=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),CellButton=__webpack_require__("./src/components/CellButton/CellButton.tsx"),Group=__webpack_require__("./src/components/Group/Group.tsx"),Panel=__webpack_require__("./src/components/Panel/Panel.tsx"),PanelHeader=__webpack_require__("./src/components/PanelHeader/PanelHeader.tsx"),View=__webpack_require__("./src/components/View/View.tsx"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),useTimeout=__webpack_require__("./src/hooks/useTimeout.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),getNavId=__webpack_require__("./src/lib/getNavId.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),ScrollContext=__webpack_require__("./src/components/AppRoot/ScrollContext.tsx"),ConfigProviderContext=__webpack_require__("./src/components/ConfigProvider/ConfigProviderContext.tsx"),NavTransitionContext=__webpack_require__("./src/components/NavTransitionContext/NavTransitionContext.tsx"),NavTransitionDirectionContext=__webpack_require__("./src/components/NavTransitionDirectionContext/NavTransitionDirectionContext.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),SplitColContext=__webpack_require__("./src/components/SplitCol/SplitColContext.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Root_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Root/Root.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Root_module.A,options);const Root_Root_module=Root_module.A&&Root_module.A.locals?Root_module.A.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var warn=(0,warnOnce.m)("Root"),Root=function(_param){var children=_param.children,_activeView=_param.activeView,onTransition=_param.onTransition,restProps=(_param.nav,_object_without_properties(_param,["children","activeView","onTransition","nav"])),scroll=react.useContext(ScrollContext.z_),platform=(0,usePlatform.V)(),document=(0,dom.a4)().document,scrolls=react.useRef({}).current,viewNodes=react.useRef({}).current,_useConfigProvider_transitionMotionEnabled=(0,ConfigProviderContext.h)().transitionMotionEnabled,transitionMotionEnabled=void 0===_useConfigProvider_transitionMotionEnabled||_useConfigProvider_transitionMotionEnabled,animate=react.useContext(SplitColContext.E).animate,disableAnimation=!transitionMotionEnabled||!animate,views=react.Children.toArray(children),_React_useState=_sliced_to_array(react.useState({activeView:_activeView,transition:!1}),2),_React_useState_=_React_useState[0],prevView=_React_useState_.prevView,activeView=_React_useState_.activeView,transition=_React_useState_.transition,isBack=_React_useState_.isBack,_setState=_React_useState[1],finishTransition=react.useCallback((function(){return _setState({activeView,prevView,isBack,transition:!1})}),[activeView,isBack,prevView]);(0,useIsomorphicLayoutEffect.E)((function(){document.activeElement.blur()}),[activeView]),(0,useIsomorphicLayoutEffect.E)((function(){return function(panel){if(panel!==activeView){var viewIds=views.map((function(view){return(0,getNavId.p)(view.props,warn)})),isBack=viewIds.indexOf(panel)<viewIds.indexOf(activeView);scrolls[activeView]=scroll.getScroll().y,_setState({activeView:panel,prevView:activeView,transition:!disableAnimation,isBack})}}(_activeView)}),[_activeView]),(0,useIsomorphicLayoutEffect.E)((function(){!transition&&prevView&&(scroll.scrollTo(0,isBack?scrolls[activeView]:0),onTransition&&onTransition({isBack:Boolean(isBack),from:prevView,to:activeView}))}),[transition,prevView]);var fallbackTransition=(0,useTimeout.Z)(finishTransition,"ios"===platform?600:300);react.useEffect((function(){transition?fallbackTransition.set():fallbackTransition.clear()}),[fallbackTransition,transition]);var onAnimationEnd=function(e){[Root_Root_module["root-android-animation-hide-back"],Root_Root_module["root-android-animation-show-forward"],Root_Root_module["root-ios-animation-hide-back"],Root_Root_module["root-ios-animation-show-forward"]].includes(e.animationName)&&finishTransition()};return(0,jsx_runtime.jsx)(RootComponent.I,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{baseClassName:(0,es6.xW)(Root_Root_module.Root,"ios"===platform&&Root_Root_module["Root--ios"],transition&&Root_Root_module["Root--transition"]),children:views.map((function(view){var viewId=(0,getNavId.p)(view.props,warn);if(viewId!==activeView&&(!transition||viewId!==prevView))return null;var _scrolls_viewId,isTransitionTarget=transition&&viewId===(isBack?prevView:activeView),compensateScroll=transition&&(viewId===prevView||isBack&&viewId===activeView);return(0,jsx_runtime.jsx)("div",{ref:function(e){return viewId&&(viewNodes[viewId]=e)},onAnimationEnd:isTransitionTarget?onAnimationEnd:void 0,className:(0,es6.xW)(Root_Root_module.Root__view,transition&&viewId===prevView&&isBack&&Root_Root_module["Root__view--hide-back"],transition&&viewId===prevView&&!isBack&&Root_Root_module["Root__view--hide-forward"],transition&&viewId===activeView&&isBack&&Root_Root_module["Root__view--show-back"],transition&&viewId===activeView&&!isBack&&Root_Root_module["Root__view--show-forward"]),children:(0,jsx_runtime.jsx)(NavTransitionDirectionContext.F,{isBack,children:(0,jsx_runtime.jsx)(NavTransitionContext.O,{entering:transition&&viewId===activeView,children:(0,jsx_runtime.jsx)("div",{className:Root_Root_module.Root__scrollCompensation,style:{marginTop:compensateScroll?viewId&&-(null!==(_scrolls_viewId=scrolls[viewId])&&void 0!==_scrolls_viewId?_scrolls_viewId:0):void 0},children:view})})})},viewId)}))}))};try{Root.displayName="Root",Root.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Root/Root.tsx#Root"]={docgenInfo:Root.__docgenInfo,name:"Root",path:"src/components/Root/Root.tsx#Root"})}catch(__react_docgen_typescript_loader_error){}function Root_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Root_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Root_stories_sliced_to_array(arr,i){return function Root_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function Root_stories_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function Root_stories_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return Root_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Root_stories_array_like_to_array(o,minLen)}(arr,i)||function Root_stories_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var story={title:"Layout/Root",component:Root,parameters:function Root_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Root_stories_define_property(target,key,source[key])}))}return target}({},constants.eb,constants.eC),decorators:[VKUIDecorators.E4]};const Root_stories=story;var Example={render:function Render(){var _React_useState=Root_stories_sliced_to_array(react.useState("view1"),2),activeView=_React_useState[0],setActiveView=_React_useState[1];return(0,jsx_runtime.jsxs)(Root,{activeView,children:[(0,jsx_runtime.jsx)(View.S,{activePanel:"panel1.1",id:"view1",children:(0,jsx_runtime.jsxs)(Panel.Z,{id:"panel1.1",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{children:"View 1"}),(0,jsx_runtime.jsxs)(Group.Y,{children:[(0,jsx_runtime.jsx)("div",{style:{height:200}}),(0,jsx_runtime.jsx)(CellButton.D,{onClick:function(){return setActiveView("view2")},children:"Open View 2"}),(0,jsx_runtime.jsx)("div",{style:{height:600}})]})]})}),(0,jsx_runtime.jsx)(View.S,{activePanel:"panel2.1",id:"view2",children:(0,jsx_runtime.jsxs)(Panel.Z,{id:"panel2.1",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{children:"View 2"}),(0,jsx_runtime.jsxs)(Group.Y,{children:[(0,jsx_runtime.jsx)("div",{style:{height:200}}),(0,jsx_runtime.jsx)(CellButton.D,{onClick:function(){return setActiveView("view1")},children:"Back to View 1"}),(0,jsx_runtime.jsx)("div",{style:{height:600}})]})]})})]})}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [activeView, setActiveView] = React.useState(\'view1\');\n    return <Root activeView={activeView}>\n        <View activePanel="panel1.1" id="view1">\n          <Panel id="panel1.1">\n            <PanelHeader>View 1</PanelHeader>\n            <Group>\n              <div style={{\n              height: 200\n            }} />\n              <CellButton onClick={() => setActiveView(\'view2\')}>Open View 2</CellButton>\n              <div style={{\n              height: 600\n            }} />\n            </Group>\n          </Panel>\n        </View>\n        <View activePanel="panel2.1" id="view2">\n          <Panel id="panel2.1">\n            <PanelHeader>View 2</PanelHeader>\n            <Group>\n              <div style={{\n              height: 200\n            }} />\n              <CellButton onClick={() => setActiveView(\'view1\')}>Back to View 1</CellButton>\n              <div style={{\n              height: 600\n            }} />\n            </Group>\n          </Panel>\n        </View>\n      </Root>;\n  }\n}',...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Icon16Chevron});var Icon16Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Icon24ChevronCompactRight});var Icon24ChevronCompactRight=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a1 1 0 0 1 0 1.416l-5.084 5.084a1 1 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CellButton/CellButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CellButton--CQtgU{background:transparent;border:0;box-sizing:border-box;inline-size:100%;margin:0;padding-block:0;text-align:start;text-decoration:none}.vkuiInternalFormItem .CellButton--CQtgU{box-sizing:initial;inline-size:100%;margin-block:0;margin-inline:calc(-1 * var(--vkui--size_base_padding_horizontal--regular))}.CellButton--CQtgU[disabled]{opacity:.4}.CellButton--centered--D3Sgc{justify-content:center;text-align:center}.CellButton--centered--D3Sgc>*{flex-grow:0;max-inline-size:none}.CellButton--centered--D3Sgc .vkuiIcon{-webkit-padding-end:8px;padding-inline-end:8px}.CellButton--CQtgU{--vkui_internal--icon_color:var(--vkui--color_icon_accent);color:var(--vkui--color_text_accent)}.CellButton--mode-danger--lHkB0{--vkui_internal--icon_color:var(--vkui--color_text_negative);color:var(--vkui--color_text_negative)}","",{version:3,sources:["webpack://./src/components/CellButton/CellButton.module.css"],names:[],mappings:"AAAA,mBAME,sBAAuB,CAFvB,QAAS,CAHT,qBAAsB,CAItB,gBAAiB,CAFjB,QAAS,CAKT,eAAgB,CADhB,gBAAiB,CALjB,oBAOF,CAOA,yCAEE,kBAAuB,CADvB,gBAAiB,CAEjB,cAAe,CACf,2EACF,CAEA,6BACE,UACF,CAEA,6BACE,sBAAuB,CACvB,iBACF,CAGA,+BACE,WAAkB,CAClB,oBACF,CAGA,uCACE,uBAAuB,CAAvB,sBACF,CAEA,mBACE,0DAA2D,CAE3D,oCACF,CAEA,gCACE,4DAA6D,CAE7D,sCACF",sourcesContent:[".CellButton {\n  box-sizing: border-box;\n  text-decoration: none;\n  margin: 0;\n  border: 0;\n  inline-size: 100%;\n  background: transparent;\n  text-align: start;\n  padding-block: 0;\n}\n\n/**\n * CMP:\n * FormItem\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem) .CellButton {\n  inline-size: 100%;\n  box-sizing: content-box;\n  margin-block: 0;\n  margin-inline: calc(-1 * var(--vkui--size_base_padding_horizontal--regular));\n}\n\n.CellButton[disabled] {\n  opacity: 0.4;\n}\n\n.CellButton--centered {\n  justify-content: center;\n  text-align: center;\n}\n\n/* stylelint-disable-next-line selector-max-universal -- отключаем растягивание элементов внутри */\n.CellButton--centered > * {\n  flex-grow: initial;\n  max-inline-size: initial;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.CellButton--centered :global(.vkuiIcon) {\n  padding-inline-end: 8px;\n}\n\n.CellButton {\n  --vkui_internal--icon_color: var(--vkui--color_icon_accent);\n\n  color: var(--vkui--color_text_accent);\n}\n\n.CellButton--mode-danger {\n  --vkui_internal--icon_color: var(--vkui--color_text_negative);\n\n  color: var(--vkui--color_text_negative);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CellButton:"CellButton--CQtgU","CellButton--centered":"CellButton--centered--D3Sgc","CellButton--mode-danger":"CellButton--mode-danger--lHkB0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Root/Root.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Root--hqYZG{block-size:100%;inline-size:100%;position:relative}.Root--transition--Yt7U2{pointer-events:none}.Root__view--gmn_u{block-size:100%;inline-size:100%;position:relative}.Root--transition--Yt7U2 .Root__view--gmn_u{inset-block-start:0;inset-inline-start:0;overflow:hidden;position:fixed}.Root__scrollCompensation--dt7ZC{block-size:100%;inline-size:100%}.Root__view--show-forward--NM3lO{animation:root-android-animation-show-forward--dVwmT .3s var(--vkui--animation_easing_platform)}.Root__view--hide-back--NUP7f{animation:root-android-animation-hide-back--fJV8G .3s var(--vkui--animation_easing_platform) forwards}.Root--ios--XJKQH .Root__view--hide-forward--nQGky:after,.Root--ios--XJKQH .Root__view--show-back--j_QIo:after{background-color:#000;block-size:100%;content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}.Root--ios--XJKQH .Root__view--show-back--j_QIo:after{animation:root-ios-animation-show-back--m1uTL .6s var(--vkui--animation_easing_platform) forwards}.Root--ios--XJKQH .Root__view--hide-forward--nQGky:after{animation:root-ios-animation-hide-forward--XGABd .6s var(--vkui--animation_easing_platform)}.Root--ios--XJKQH .Root__view--show-forward--NM3lO{animation:root-ios-animation-show-forward--mPJ0A .6s var(--vkui--animation_easing_platform)}.Root--ios--XJKQH .Root__view--hide-back--NUP7f{animation:root-ios-animation-hide-back--eGvAN .6s var(--vkui--animation_easing_platform) forwards}@keyframes root-ios-animation-show-back--m1uTL{0%{opacity:.3}to{opacity:0}}@keyframes root-ios-animation-hide-forward--XGABd{0%{opacity:0}to{opacity:.3}}@keyframes root-ios-animation-hide-back--eGvAN{0%{transform:translateZ(0)}to{transform:translate3d(0,100%,0)}}@keyframes root-ios-animation-show-forward--mPJ0A{0%{transform:translate3d(0,100%,0)}to{transform:translateZ(0)}}@keyframes root-android-animation-hide-back--fJV8G{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.05)}}@keyframes root-android-animation-show-forward--dVwmT{0%{opacity:0;transform:scale(1.05)}to{opacity:1;transform:scale(1)}}',"",{version:3,sources:["webpack://./src/components/Root/Root.module.css"],names:[],mappings:"AAAA,aAEE,eAAgB,CADhB,gBAAiB,CAEjB,iBACF,CAEA,yBACE,mBACF,CAEA,mBAEE,eAAgB,CADhB,gBAAiB,CAEjB,iBACF,CAEA,4CAGE,mBAAoB,CADpB,oBAAqB,CAErB,eAAgB,CAHhB,cAIF,CAEA,iCAEE,eAAgB,CADhB,gBAEF,CAEA,iCACE,+FACF,CAEA,8BACE,qGACF,CAMA,+GASE,qBAAsB,CALtB,eAAgB,CAIhB,UAAW,CADX,aAAc,CAJd,gBAAiB,CAGjB,mBAAoB,CADpB,oBAAqB,CAHrB,iBAQF,CAEA,sDACE,iGACF,CAEA,yDACE,2FACF,CAEA,mDACE,2FACF,CAEA,gDACE,iGACF,CAEA,+CACE,GACE,UACF,CAEA,GACE,SACF,CACF,CACA,kDACE,GACE,SACF,CAEA,GACE,UACF,CACF,CACA,+CACE,GACE,uBACF,CAEA,GACE,+BACF,CACF,CACA,kDACE,GACE,+BACF,CAEA,GACE,uBACF,CACF,CAMA,mDACE,GAEE,SAAU,CADV,kBAEF,CAEA,GAEE,SAAU,CADV,qBAEF,CACF,CACA,sDACE,GAEE,SAAU,CADV,qBAEF,CAEA,GAEE,SAAU,CADV,kBAEF,CACF",sourcesContent:[".Root {\n  inline-size: 100%;\n  block-size: 100%;\n  position: relative;\n}\n\n.Root--transition {\n  pointer-events: none;\n}\n\n.Root__view {\n  inline-size: 100%;\n  block-size: 100%;\n  position: relative;\n}\n\n.Root--transition .Root__view {\n  position: fixed;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  overflow: hidden;\n}\n\n.Root__scrollCompensation {\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n.Root__view--show-forward {\n  animation: root-android-animation-show-forward 0.3s var(--vkui--animation_easing_platform);\n}\n\n.Root__view--hide-back {\n  animation: root-android-animation-hide-back 0.3s var(--vkui--animation_easing_platform) forwards;\n}\n\n/**\n * iOS\n */\n\n.Root--ios .Root__view--show-back::after,\n.Root--ios .Root__view--hide-forward::after {\n  position: absolute;\n  inline-size: 100%;\n  block-size: 100%;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  display: block;\n  content: '';\n  background-color: #000;\n}\n\n.Root--ios .Root__view--show-back::after {\n  animation: root-ios-animation-show-back 0.6s var(--vkui--animation_easing_platform) forwards;\n}\n\n.Root--ios .Root__view--hide-forward::after {\n  animation: root-ios-animation-hide-forward 0.6s var(--vkui--animation_easing_platform);\n}\n\n.Root--ios .Root__view--show-forward {\n  animation: root-ios-animation-show-forward 0.6s var(--vkui--animation_easing_platform);\n}\n\n.Root--ios .Root__view--hide-back {\n  animation: root-ios-animation-hide-back 0.6s var(--vkui--animation_easing_platform) forwards;\n}\n\n@keyframes root-ios-animation-show-back {\n  from {\n    opacity: 0.3;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n@keyframes root-ios-animation-hide-forward {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 0.3;\n  }\n}\n@keyframes root-ios-animation-hide-back {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes root-ios-animation-show-forward {\n  from {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n/**\n * Android\n */\n\n@keyframes root-android-animation-hide-back {\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(1.05);\n    opacity: 0;\n  }\n}\n@keyframes root-android-animation-show-forward {\n  from {\n    transform: scale(1.05);\n    opacity: 0;\n  }\n\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Root:"Root--hqYZG","Root--transition":"Root--transition--Yt7U2",Root__view:"Root__view--gmn_u",Root__scrollCompensation:"Root__scrollCompensation--dt7ZC","Root__view--show-forward":"Root__view--show-forward--NM3lO","root-android-animation-show-forward":"root-android-animation-show-forward--dVwmT","Root__view--hide-back":"Root__view--hide-back--NUP7f","root-android-animation-hide-back":"root-android-animation-hide-back--fJV8G","Root--ios":"Root--ios--XJKQH","Root__view--hide-forward":"Root__view--hide-forward--nQGky","Root__view--show-back":"Root__view--show-back--j_QIo","root-ios-animation-show-back":"root-ios-animation-show-back--m1uTL","root-ios-animation-hide-forward":"root-ios-animation-hide-forward--XGABd","root-ios-animation-show-forward":"root-ios-animation-show-forward--mPJ0A","root-ios-animation-hide-back":"root-ios-animation-hide-back--eGvAN"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);