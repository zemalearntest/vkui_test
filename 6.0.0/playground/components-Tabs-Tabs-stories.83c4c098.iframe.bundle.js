"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8620],{"./src/components/Tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,WithHorizontalScroll:()=>WithHorizontalScroll,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_Group_Group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Group/Group.tsx"),_HorizontalScroll_HorizontalScroll__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/HorizontalScroll/HorizontalScroll.tsx"),_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/TabsItem/TabsItem.tsx"),_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/TabsItem/TabsItem.stories.tsx"),_Tabs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tabs/Tabs.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Tabs",component:_Tabs__WEBPACK_IMPORTED_MODULE_2__.m,parameters:_object_spread({},_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.tW,_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.nB),argTypes:{selected:{control:{type:"select"},options:["groups","news","recommendations","friends","photos"]}}};var Playground={render:function Render(_param){var _param_selected=_param.selected,selected=void 0===_param_selected?"groups":_param_selected,args=_object_without_properties(_param,["selected"]),updateArg=_sliced_to_array((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),2)[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__.m,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.Playground.args),{selected:"groups"===selected,onClick:function(){return updateArg({selected:"groups"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithBeforeAfter.args),{selected:"news"===selected,onClick:function(){return updateArg({selected:"news"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithBadge.args),{selected:"recommendations"===selected,onClick:function(){return updateArg({selected:"recommendations"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithCounter.args),{selected:"friends"===selected,onClick:function(){return updateArg({selected:"friends"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithNumberStatus.args),{selected:"photos"===selected,onClick:function(){return updateArg({selected:"photos"})}})))},decorators:[function(Component){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Group_Group__WEBPACK_IMPORTED_MODULE_6__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))}]},WithHorizontalScroll={args:{withScrollToSelectedTab:!0,scrollBehaviorToSelectedTab:"center"},render:function Render(_param){var _param_selected=_param.selected,selected=void 0===_param_selected?"groups":_param_selected,args=_object_without_properties(_param,["selected"]),updateArg=_sliced_to_array((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),2)[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__.m,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HorizontalScroll_HorizontalScroll__WEBPACK_IMPORTED_MODULE_7__.Z,{arrowSize:"m"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.Playground.args),{selected:"groups"===selected,onClick:function(){return updateArg({selected:"groups"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithBeforeAfter.args),{selected:"news"===selected,onClick:function(){return updateArg({selected:"news"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithBadge.args),{selected:"recommendations"===selected,onClick:function(){return updateArg({selected:"recommendations"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithCounter.args),{selected:"friends"===selected,onClick:function(){return updateArg({selected:"friends"})}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabsItem_TabsItem__WEBPACK_IMPORTED_MODULE_4__.L,_object_spread_props(_object_spread({},_TabsItem_TabsItem_stories__WEBPACK_IMPORTED_MODULE_5__.WithNumberStatus.args),{selected:"photos"===selected,onClick:function(){return updateArg({selected:"photos"})}}))))},decorators:[function(Component){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Group_Group__WEBPACK_IMPORTED_MODULE_6__.Z,{style:{maxWidth:500}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null))},_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__.vO]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    selected = 'groups',\n    ...args\n  }) {\n    const [, updateArg] = useArgs();\n    return <Tabs {...args}>\n        <TabsItem {...BasicTabsItemStory.args} selected={selected === 'groups'} onClick={() => updateArg({\n        selected: 'groups'\n      })} />\n        <TabsItem {...BeforeAfterTabsItemStory.args} selected={selected === 'news'} onClick={() => updateArg({\n        selected: 'news'\n      })} />\n        <TabsItem {...BadgeTabsItemStory.args} selected={selected === 'recommendations'} onClick={() => updateArg({\n        selected: 'recommendations'\n      })} />\n        <TabsItem {...CounterTabsItemStory.args} selected={selected === 'friends'} onClick={() => updateArg({\n        selected: 'friends'\n      })} />\n        <TabsItem {...NumberStatusTabsItemStory.args} selected={selected === 'photos'} onClick={() => updateArg({\n        selected: 'photos'\n      })} />\n      </Tabs>;\n  },\n  decorators: [Component => <Group>\n        <Component />\n      </Group>]\n}",...Playground.parameters?.docs?.source}}},WithHorizontalScroll.parameters={...WithHorizontalScroll.parameters,docs:{...WithHorizontalScroll.parameters?.docs,source:{originalSource:"{\n  args: {\n    withScrollToSelectedTab: true,\n    scrollBehaviorToSelectedTab: 'center'\n  },\n  render: function Render({\n    selected = 'groups',\n    ...args\n  }) {\n    const [, updateArg] = useArgs();\n    return <Tabs {...args}>\n        <HorizontalScroll arrowSize=\"m\">\n          <TabsItem {...BasicTabsItemStory.args} selected={selected === 'groups'} onClick={() => updateArg({\n          selected: 'groups'\n        })} />\n          <TabsItem {...BeforeAfterTabsItemStory.args} selected={selected === 'news'} onClick={() => updateArg({\n          selected: 'news'\n        })} />\n          <TabsItem {...BadgeTabsItemStory.args} selected={selected === 'recommendations'} onClick={() => updateArg({\n          selected: 'recommendations'\n        })} />\n          <TabsItem {...CounterTabsItemStory.args} selected={selected === 'friends'} onClick={() => updateArg({\n          selected: 'friends'\n        })} />\n          <TabsItem {...NumberStatusTabsItemStory.args} selected={selected === 'photos'} onClick={() => updateArg({\n          selected: 'photos'\n        })} />\n        </HorizontalScroll>\n      </Tabs>;\n  },\n  decorators: [Component => <Group style={{\n    maxWidth: 500\n  }}>\n        <Component />\n      </Group>, withSinglePanel]\n}",...WithHorizontalScroll.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","WithHorizontalScroll"]},"./src/hooks/useAdaptivityHasPointer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useAdaptivityHasPointer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),_useIsClient__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useIsClient.ts");function useAdaptivityHasPointer(){var deferDetect=!(arguments.length>0)||void 0===arguments[0]||arguments[0],hasPointerContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__.s).hasPointer;return(0,_useIsClient__WEBPACK_IMPORTED_MODULE_3__.O)(!(deferDetect||void 0===hasPointerContext))&&void 0===hasPointerContext?_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.RX:hasPointerContext}}}]);