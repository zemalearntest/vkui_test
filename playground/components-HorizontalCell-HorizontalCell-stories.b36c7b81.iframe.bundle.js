"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8034],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Image/ImageBadge/ImageBadge.module.css":function(e,n,t){var r=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(r),o=t("../../node_modules/css-loader/dist/runtime/api.js"),s=t.n(o)()(a());s.push([e.id,".ImageBadge--EYcTk{bottom:-4px;position:absolute;right:-4px}.ImageBadge--shifted--PLhGD{bottom:-3px;right:-3px}",""]),s.locals={ImageBadge:"ImageBadge--EYcTk","ImageBadge--shifted":"ImageBadge--shifted--PLhGD"},n.Z=s},"./src/components/HorizontalCell/HorizontalCell.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Playground:function(){return O}});var r,a,o,s=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var l=t("./src/hooks/usePlatform.ts"),i=t("./src/storybook/VKUIDecorators.tsx"),u=t("./src/storybook/constants.ts"),c=t("./src/testing/mock.ts"),d=t("./src/components/Group/Group.tsx"),m=t("./src/components/Image/Image.tsx"),p=t("./src/components/HorizontalCell/HorizontalCell.tsx");function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function f(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var y={title:"Blocks/HorizontalCell",component:p.u,parameters:g({},u.tW,u.nB)};n.default=y;var O={render:function(e){var n=e.values,t=function(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["values"]),r=(0,l.F)();return(0,s.jsx)(s.Fragment,{children:n.map(function(e){return(0,s.jsx)(p.u,f(g({header:e.title},t),{children:(0,s.jsx)(m.E,{size:"ios"===r?64:56,borderRadius:"l",src:e.icon})}),e.id)})})},args:{values:[{id:1,title:"Промокот",icon:(0,c.E$)("app_promokot")},{id:2,title:"Разделите счёт",icon:(0,c.E$)("app_split_bill")},{id:3,title:"Рассылки",icon:(0,c.E$)("app_emails")},{id:4,title:"Тексты песен",icon:(0,c.E$)("app_lyrics")}]},decorators:[function(e,n){return(0,s.jsx)(d.Z,{children:(0,s.jsx)("div",{style:{display:"flex"},children:(0,s.jsx)(e,g({},n.args))})})},i.vO,i.Z0]};O.parameters=f(g({},O.parameters),{docs:f(g({},null===(r=O.parameters)||void 0===r?void 0:r.docs),{source:g({originalSource:"{\n  render: function Render({\n    values,\n    ...args\n  }) {\n    const platform = usePlatform();\n    return <>\n        {values.map(value => {\n        return <HorizontalCell key={value.id} header={value.title} {...args}>\n              <Image size={platform === 'ios' ? 64 : 56} borderRadius=\"l\" src={value.icon} />\n            </HorizontalCell>;\n      })}\n      </>;\n  },\n  args: {\n    values: [{\n      id: 1,\n      title: 'Промокот',\n      icon: getAvatarUrl('app_promokot')\n    }, {\n      id: 2,\n      title: 'Разделите счёт',\n      icon: getAvatarUrl('app_split_bill')\n    }, {\n      id: 3,\n      title: 'Рассылки',\n      icon: getAvatarUrl('app_emails')\n    }, {\n      id: 4,\n      title: 'Тексты песен',\n      icon: getAvatarUrl('app_lyrics')\n    }]\n  },\n  decorators: [(Component, context) => <Group>\n        <div style={{\n      display: 'flex'\n    }}>\n          <Component {...context.args} />\n        </div>\n      </Group>, withSinglePanel, withVKUILayout]\n}"},null===(o=O.parameters)||void 0===o?void 0:null===(a=o.docs)||void 0===a?void 0:a.source)})})},"./src/components/Image/Image.tsx":function(e,n,t){t.d(n,{E:function(){return _}});var r=t("../../node_modules/react/jsx-runtime.js"),a=t("../../node_modules/react/index.js"),o=t("./src/components/ImageBase/ImageBase.tsx"),s=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=t("./src/components/ImageBase/context.ts"),i=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=t.n(i),c=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=t.n(c),m=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=t.n(m),g=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=t.n(g),y=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=t.n(y),b=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Image/ImageBadge/ImageBadge.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=f(),v.insert=p().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=O(),u()(b.Z,v);var I=b.Z&&b.Z.locals?b.Z.locals:void 0,j=function(e){var n=e.className,t=function(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["className"]),i=a.useContext(l.R).size;return(0,r.jsx)(o.v.Badge,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({},t),{className:(0,s.AK)(I.ImageBadge,i<96&&I["ImageBadge--shifted"],n)}))};try{j.displayName="ImageBadge",j.__docgenInfo={description:"",displayName:"ImageBadge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/ImageBadge/ImageBadge.tsx#ImageBadge"]={docgenInfo:j.__docgenInfo,name:"ImageBadge",path:"src/components/Image/ImageBadge/ImageBadge.tsx#ImageBadge"})}catch(e){}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var B=function(e,n){switch(n){case"s":if(e<=32)return 2;if(e<=56)return 3;return 4;case"m":if(e<=32)return 3;if(e<=48)return 4;if(e<=72)return 6;if(e<=80)return 8;return 10;case"l":if(e<=16)return 4;if(e<=20)return 5;if(e<=32)return 6;if(e<=40)return 8;if(e<=48)return 10;if(e<=56)return 12;if(e<=64)return 14;return 16}},_=function(e){var n=e.size,t=void 0===n?48:n,s=e.borderRadius,l=void 0===s?"m":s,i=e.style,u=e.className,c=function(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["size","borderRadius","style","className"]),d=a.useMemo(function(){return B(t,l)},[t,l]);return(0,r.jsx)(o.v,h(S({},c),{size:t,style:h(S({},i),{borderRadius:d}),className:u}))};_.Badge=j,_.Overlay=o.v.Overlay;try{_.displayName="Image",_.__docgenInfo={description:"",displayName:"Image",props:{borderRadius:{defaultValue:null,description:"Размер закругления.",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLImageElement>"}},size:{defaultValue:{value:"48"},description:"Задаёт размер картинки.\n\nИспользуйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.\n\n> ⚠️ Использование кастомного размера – это пограничный кейс.",name:"size",required:!1,type:{name:"LiteralUnion<16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},withBorder:{defaultValue:null,description:"Включает или отключает обводку.",name:"withBorder",required:!1,type:{name:"boolean"}},fallbackIcon:{defaultValue:null,description:"Фолбек на случай, если картинка не прогрузилась.\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getFallbackIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.\n\n> ⚠️ Может перекрывать `children`.",name:"fallbackIcon",required:!1,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image"]={docgenInfo:_.__docgenInfo,name:"Image",path:"src/components/Image/Image.tsx#Image"})}catch(e){}try{Badge.displayName="Image.Badge",Badge.__docgenInfo={description:"",displayName:"Image.Badge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image.Badge"]={docgenInfo:_.Badge.__docgenInfo,name:"Image.Badge",path:"src/components/Image/Image.tsx#Image.Badge"})}catch(e){}try{Overlay.displayName="Image.Overlay",Overlay.__docgenInfo={description:"Интерактивный оверлей над картинкой.",displayName:"Image.Overlay",props:{theme:{defaultValue:null,description:"Задаёт тему оформления.\n\n> По умолчанию берётся из параметра `appearance` в `ConfigProvider`.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},visibility:{defaultValue:null,description:'Определяет каким образом должен показываться оверлей.\n\n- `"on-hover"` – на наведение указателя мыши.\n- `"always"` – всегда показывать.\n\n> По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.',name:"visibility",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"on-hover"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getOverlayIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image.Overlay"]={docgenInfo:_.Overlay.__docgenInfo,name:"Image.Overlay",path:"src/components/Image/Image.tsx#Image.Overlay"})}catch(e){}}}]);