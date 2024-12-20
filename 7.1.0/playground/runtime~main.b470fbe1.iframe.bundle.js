(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({15:"components-Popover-Popover-stories",20:"components-Snackbar-subcomponents-Basic-Basic-stories",83:"components-DateInput-DateInput-stories",289:"components-Gradient-Gradient-stories",291:"components-Badge-Badge-stories",341:"components-PanelHeaderContext-PanelHeaderContext-stories",543:"components-ModalCard-ModalCard-stories",547:"components-Radio-Radio-stories",803:"components-Clickable-Clickable-stories",925:"components-UnstyledTextField-UnstyledTextField-mdx",943:"components-ScrollArrow-ScrollArrow-stories",1041:"components-Search-Search-stories",1109:"components-UsersStack-UsersStack-stories",1171:"components-MiniInfoCell-MiniInfoCell-stories",1195:"components-PanelHeader-PanelHeader-stories",1243:"components-ContentCard-ContentCard-stories",1244:"components-ImageBase-ImageBaseBadge-ImageBaseBadge-stories",1405:"components-Typography-Headline-Headline-stories",1447:"components-NativeSelect-NativeSelect-stories",1455:"components-SubnavigationButton-SubnavigationButton-stories",1519:"components-PullToRefresh-PullToRefresh-stories",1583:"components-Typography-Caption-Caption-stories",1631:"components-FixedLayout-FixedLayout-stories",1759:"components-IconButton-IconButton-stories",1791:"components-Image-Image-stories",1807:"components-Mark-Mark-stories",1907:"components-Gallery-Gallery-stories",1935:"components-View-View-stories",2123:"components-SelectMimicry-SelectMimicry-stories",2130:"components-Typography-EllipsisText-EllipsisText-stories",2175:"components-Skeleton-Skeleton-stories",2461:"components-AppRoot-AppRoot-mdx",2513:"components-Card-Card-stories",2585:"components-ContentBadge-ContentBadge-stories",2735:"components-Counter-Counter-stories",2827:"components-ModalDismissButton-ModalDismissButton-stories",2851:"components-Accordion-Accordion-stories",2857:"components-Switch-Switch-stories",2883:"components-CustomScrollView-CustomScrollView-stories",2925:"components-Select-Select-stories",2959:"components-Typography-Title-Title-stories",3035:"components-Touch-Touch-stories",3049:"components-Root-Root-stories",3113:"components-Popper-Popper-stories",3131:"components-DropZone-DropZone-stories",3151:"components-Footer-Footer-stories",3185:"components-WriteBar-WriteBar-stories",3193:"components-SplitCol-SplitCol-stories",3253:"components-File-File-stories",3339:"components-VisuallyHidden-VisuallyHidden-stories",3375:"components-Slider-Slider-stories",3575:"components-ModalRoot-ModalRoot-stories",3667:"components-ConfigProvider-ConfigProvider-stories",3815:"components-Progress-Progress-stories",3983:"components-SegmentedControl-SegmentedControl-stories",4105:"components-Tabs-Tabs-stories",4287:"components-Alert-Alert-stories",4413:"components-Typography-Footnote-Footnote-stories",4447:"components-WriteBarIcon-WriteBarIcon-stories",4489:"components-SimpleCell-SimpleCell-stories",4619:"components-Tappable-Tappable-stories",4725:"components-CustomSelectOption-CustomSelectOption-stories",4879:"components-Placeholder-Placeholder-stories",5017:"components-HorizontalScroll-HorizontalCellShowMore-HorizontalCellShowMore-stories",5103:"components-ModalPageHeader-ModalPageHeader-stories",5147:"components-Separator-Separator-stories",5311:"components-ColorSchemeProvider-ColorSchemeProvider-stories",5439:"components-Typography-Subhead-Subhead-stories",5457:"components-Link-Link-stories",5477:"components-CardGrid-CardGrid-stories",5511:"components-GridAvatar-GridAvatar-stories",5599:"components-Typography-Text-Text-stories",5633:"components-Banner-Banner-stories",5659:"components-FormField-FormField-stories",5773:"components-FormStatus-FormStatus-stories",5821:"components-FormItem-FormItemTop-FormItemTop-mdx",5966:"components-ImageBase-ImageBaseOverlay-ImageBaseOverlay-stories",6063:"components-Spacing-Spacing-stories",6115:"components-Input-Input-stories",6151:"components-Checkbox-Checkbox-stories",6235:"components-InfoRow-InfoRow-stories",6245:"components-RadioGroup-RadioGroup-stories",6255:"components-SubnavigationBar-SubnavigationBar-stories",6323:"components-Panel-Panel-stories",6343:"components-Snackbar-Snackbar-stories",6383:"components-Group-Group-stories",6443:"components-OnboardingTooltip-OnboardingTooltip-stories",6591:"components-FormItem-FormItem-stories",6657:"components-Textarea-Textarea-stories",6807:"components-Avatar-Avatar-stories",6859:"components-CalendarRange-CalendarRange-stories",6891:"components-AspectRatio-AspectRatio-stories",7031:"components-HorizontalScroll-HorizontalScroll-stories",7204:"components-ImageBase-ImageBaseFloatElement-ImageBaseFloatElement-stories",7279:"components-Header-Header-stories",7317:"components-RichCell-RichCell-stories",7477:"components-Tabbar-Tabbar-stories",7521:"components-AdaptivityProvider-AdaptivityProvider-stories",7539:"components-ChipsSelect-ChipsSelect-stories",7549:"components-Typography-DisplayTitle-DisplayTitle-stories",7615:"components-DateRangeInput-DateRangeInput-stories",7639:"components-ActionSheetItem-ActionSheetItem-stories",7647:"components-Typography-Typography-stories",7721:"components-Button-Button-stories",7751:"components-Div-Div-stories",7831:"components-PanelHeaderButton-PanelHeaderButton-stories",7863:"components-TabsItem-TabsItem-stories",7867:"components-CustomSelect-CustomSelect-stories",7926:"components-ChipsInputBase-Chip-Chip-stories",7957:"lib-animation-useCSSTransition-stories",7971:"components-PopoutWrapper-PopoutWrapper-stories",7981:"components-Cell-Cell-stories",7983:"components-Typography-Paragraph-Paragraph-stories",8059:"components-PanelSpinner-PanelSpinner-stories",8079:"components-ActionSheet-ActionSheet-stories",8175:"components-LocaleProvider-LocaleProvider-stories",8593:"components-CellButton-CellButton-stories",8619:"components-Flex-Flex-stories",8667:"components-TabbarItem-TabbarItem-stories",8727:"components-ModalPage-ModalPage-stories",8875:"components-ButtonGroup-ButtonGroup-stories",8879:"components-Spinner-Spinner-stories",8967:"components-FormLayoutGroup-FormLayoutGroup-stories",8975:"components-Epic-Epic-stories",9009:"components-SimpleGrid-SimpleGrid-stories",9085:"components-PlatformProvider-PlatformProvider-stories",9327:"components-ChipsInput-ChipsInput-stories",9407:"components-CardScroll-CardScroll-stories",9416:"components-Cell-CellCheckbox-CellCheckbox-stories",9445:"components-HorizontalCell-HorizontalCell-stories",9459:"components-Tooltip-Tooltip-stories",9487:"components-ScreenSpinner-ScreenSpinner-stories",9503:"components-ModalCardBase-ModalCardBase-stories",9709:"components-PanelHeaderContent-PanelHeaderContent-stories",9749:"components-List-List-stories",9853:"components-AdaptiveIconRenderer-AdaptiveIconRenderer-stories",9869:"components-ToolButton-ToolButton-stories",9889:"components-Pagination-Pagination-stories",9905:"components-Calendar-Calendar-stories",9996:"components-SplitLayout-SplitLayout-stories"}[chunkId]||chunkId)+"."+{15:"0f324889",20:"d05914bd",83:"253ec4d4",168:"8639678b",289:"ab9a6cf8",291:"2437750e",301:"b243cafc",341:"8208df56",436:"c02e5f19",446:"a37dd86a",452:"937f5123",543:"eb43a261",547:"7a5861be",803:"aeb0269d",849:"a3b6192d",925:"9a4f270d",943:"1ae6389d",1008:"a1ab76b2",1041:"c8688177",1109:"cfc94ed7",1171:"109f0b44",1195:"c0432822",1243:"cbf32f6f",1244:"0a2e5fe1",1260:"4df23499",1356:"c0ef132b",1405:"bc6f900d",1447:"0e6d1fea",1455:"df7e1a22",1519:"5e761224",1583:"828c4496",1631:"4c7d2013",1759:"f2482d85",1791:"292d2c3a",1807:"38122584",1907:"4ab12064",1935:"f611fb60",1953:"218f210c",2123:"41c7f75f",2130:"d8737ae8",2140:"e163d540",2175:"c189bdc6",2194:"dcb256c9",2286:"6424fd8e",2336:"7b64e81e",2411:"a62f07a5",2461:"989a930e",2513:"c56fb4d9",2585:"aa758ddc",2735:"47920098",2744:"95752b0d",2808:"a4a64d12",2827:"46e21d15",2851:"5b248eec",2857:"0999f241",2883:"b7a14313",2893:"8d63da4b",2925:"d609dc65",2959:"4af249a1",3035:"86aababf",3049:"bc3a089c",3096:"438cb4e8",3113:"e51119fe",3131:"8eca9a5e",3151:"1f7a53b1",3185:"52a972ab",3193:"609fb96c",3253:"c420bb99",3339:"febdd8d6",3362:"f0c449f2",3372:"e69eb923",3375:"512938d5",3379:"06c24876",3422:"cd12a195",3575:"26d35ad3",3667:"73c128de",3681:"3cb92a7c",3815:"7511507b",3838:"2a67f1f3",3983:"f44462a9",4046:"f3b97d35",4105:"6bde5a67",4160:"faab01fe",4287:"2c2b7f43",4413:"6f6c8159",4447:"74612bf2",4489:"f27e662c",4585:"a640a3fc",4607:"e69bb9c7",4619:"f534825d",4725:"dfa0ae3f",4851:"f5b1f46e",4876:"de9f2c95",4879:"e5215013",5017:"ff7e5c4e",5103:"c1a53620",5147:"62479b14",5231:"24b63206",5311:"0a694456",5439:"d8e4b1e8",5457:"f01e625c",5477:"91c83204",5511:"9309ff3b",5599:"d6203e57",5633:"89eef603",5659:"7379c5a5",5773:"1bd60abc",5812:"b0b34d34",5821:"429bbff7",5854:"9308b52d",5966:"1f23b0ee",6063:"47175753",6115:"ecf4c29b",6151:"303354fd",6235:"0387e166",6245:"238484d7",6255:"9459dcff",6301:"2af2ab52",6323:"aa893d2e",6343:"cd25150d",6352:"db405c11",6357:"aa105d06",6383:"b24076b8",6443:"b9da58a4",6560:"8c053d60",6591:"8c15df44",6657:"21005a66",6807:"042e944b",6818:"e74d54c0",6859:"782784a3",6891:"5ab1ac28",6952:"05799383",6984:"b5645677",7031:"eb12b17e",7106:"2881786e",7204:"6835e207",7279:"c3399053",7317:"3d5b7274",7372:"cd3798c8",7477:"ecbafbba",7521:"e13d2889",7539:"09d5d1db",7549:"0b40f513",7615:"167f73ac",7632:"cd13a3e5",7634:"caefcdeb",7639:"1b535eae",7647:"5f4ae492",7721:"3de66296",7735:"9de983c2",7751:"f8adbcef",7831:"a12da615",7837:"bcbb513f",7863:"aa23a4e7",7867:"9e5a1470",7926:"2e157c14",7957:"63d5fa24",7971:"133a53cb",7981:"b79f2521",7983:"c454e0a0",8059:"8f8401aa",8079:"5f6147df",8175:"36bab2db",8315:"85977d22",8370:"5dcd0331",8394:"f711a1c6",8593:"7a5861be",8605:"c79c72e5",8619:"03ea849c",8667:"a14feac5",8727:"ba662232",8775:"5e7921da",8805:"a8035f42",8813:"9cdedafd",8873:"2aa73f7c",8875:"ea099c20",8879:"0811d564",8967:"fe999618",8975:"35c82172",8977:"4444e05e",9009:"3336b8fc",9039:"9f1089fe",9085:"f82fd405",9101:"8190bcec",9162:"b0f4315e",9268:"1a46a015",9278:"8b4fbc75",9327:"4f618e94",9407:"234d98f8",9416:"c3889756",9445:"20af7019",9459:"f5f1abd3",9487:"bba81c24",9503:"527be9e5",9545:"d4e24075",9709:"d2af6540",9749:"b9bbb205",9841:"004e52af",9853:"c8decba3",9869:"22791dc1",9889:"fca44c1b",9905:"83a5dc73",9996:"ba53b8ca"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@vkontakte/vkui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@vkontakte/vkui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();