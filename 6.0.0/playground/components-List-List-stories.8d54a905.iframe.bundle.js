"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8101],{"./src/components/List/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/privacy_outline_28.js"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_Cell_Cell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Cell/Cell.tsx"),_Group_Group__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Group/Group.tsx"),_List__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/List/List.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/List",component:_List__WEBPACK_IMPORTED_MODULE_1__.a,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.tW,_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.nB)};var Playground={render:function Render(_param){var items=_param.items,args=_object_without_properties(_param,["items"]),_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(items),2),draggingList=_React_useState[0],updateDraggingList=_React_useState[1],onDragFinish=function(param){var from=param.from,to=param.to,_list=_to_consumable_array(draggingList);_list.splice(from,1),_list.splice(to,0,draggingList[from]),updateDraggingList(_list)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_List__WEBPACK_IMPORTED_MODULE_1__.a,args,draggingList.map(function(item){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cell_Cell__WEBPACK_IMPORTED_MODULE_3__.b,{key:item.title,before:item.before,draggable:!0,onDragFinish:onDragFinish},item.title)}))},args:{items:[{before:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__.R,null),title:"Учетная запись"},{before:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.R,null),title:"Основные"},{before:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__.E,null),title:"Приватность"}]},decorators:[function(Component,context){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Group_Group__WEBPACK_IMPORTED_MODULE_7__.Z,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,context.args))},_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__.vO,_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__.Z0]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    items,\n    ...args\n  }) {\n    const [draggingList, updateDraggingList] = React.useState(items);\n    const onDragFinish = ({\n      from,\n      to\n    }: {\n      from: number;\n      to: number;\n    }) => {\n      const _list = [...draggingList];\n      _list.splice(from, 1);\n      _list.splice(to, 0, draggingList[from]);\n      updateDraggingList(_list);\n    };\n    return <List {...args}>\n        {draggingList.map(item => <Cell key={item.title} before={item.before} draggable onDragFinish={onDragFinish}>\n            {item.title}\n          </Cell>)}\n      </List>;\n  },\n  args: {\n    items: [{\n      before: <Icon28UserOutline />,\n      title: 'Учетная запись'\n    }, {\n      before: <Icon28SettingsOutline />,\n      title: 'Основные'\n    }, {\n      before: <Icon28PrivacyOutline />,\n      title: 'Приватность'\n    }]\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./src/components/List/List.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>List});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_useDraggableWithDomApi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useDraggableWithDomApi/constants.ts"),_RootComponent_RootComponent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/RootComponent/RootComponent.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var List=function(_param){var children=_param.children,restProps=_object_without_properties(_param,["children"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RootComponent_RootComponent__WEBPACK_IMPORTED_MODULE_1__.U,_object_spread({role:"list"},restProps),children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_object_spread({"aria-hidden":!0},_hooks_useDraggableWithDomApi__WEBPACK_IMPORTED_MODULE_2__.Lm)))};try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}}}]);