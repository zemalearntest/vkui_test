"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4758],{"./src/components/Placeholder/Placeholder.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>h,__namedExportsOrder:()=>m,default:()=>u});var o,l,r,i=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var a=n("../../node_modules/@vkontakte/icons/dist/es6/56/users_outline_56.js"),s=n("./src/storybook/constants.ts");function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let u={title:"Blocks/Placeholder",component:n("./src/components/Placeholder/Placeholder.tsx").V,parameters:d({},s.tW,s.nB)};var h={args:{children:"Подключите сообщества, от которых Вы хотите получать уведомления",header:"Уведомления от сообществ",icon:(0,i.jsx)(a.x,{})}};h.parameters=c(d({},h.parameters),{docs:c(d({},null===(o=h.parameters)||void 0===o?void 0:o.docs),{source:d({originalSource:"{\n  args: {\n    children: 'Подключите сообщества, от которых Вы хотите получать уведомления',\n    header: 'Уведомления от сообществ',\n    icon: <Icon56UsersOutline />\n  }\n}"},null===(r=h.parameters)||void 0===r?void 0:null===(l=r.docs)||void 0===l?void 0:l.source)})});let m=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>o});function o(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{De:()=>g});var o,l=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),r=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),a=n("../../node_modules/react/index.js"),s=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=n("../../node_modules/@swc/helpers/esm/_create_class.js"),c=n("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var n=t.content;(0,s._)(this,e),(0,c._)(this,"isMounted",!1),(0,c._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),h="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s._)(this,e),(0,c._)(this,"symbols",new Map),(0,c._)(this,"config",{attrs:{xmlns:h,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,c._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=u.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(h,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var f="__SVG_SPRITE_NODE__";o=new m({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else o=null;var _=p?a.useLayoutEffect:a.useEffect,y=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,s=void 0===o?0:o,d=e.viewBox,c=e.id,u=e.className,h=e.fill,m=e.getRootRef,p=e.style,f=e.title,v=e.children,_=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=Math.max(n,s),g=(0,l._)({width:n,height:s},void 0===p?{}:p);return a.createElement("svg",(0,r._)((0,l._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(y),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(c),void 0===u?"":u].join(" ").trim(),viewBox:d,width:n,height:s,style:g,ref:m}),f&&a.createElement("title",null,f),a.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:h}},v))};function g(e,t,n,i,s,d,c,h){var m=function(){p||(!function(e){o&&o.add(e)}(new u({content:i})),p=!0)},p=!1,f=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),v=function(e){return _(m,[]),c&&f("Иконка устарела"+(h?". Замените на ".concat(h):"")),a.createElement(y,(0,r._)((0,l._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return v.mountIcon=m,v.displayName=e,v}},"../../node_modules/@vkontakte/icons/dist/es6/56/users_outline_56.js":(e,t,n)=>{n.d(t,{x:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon56UsersOutline","users_outline_56","0 0 56 56",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="users_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path fill="currentColor" fill-rule="nonzero" d="M39.5 31c5.609 0 10.5 2.699 10.5 8 0 2.625-1.833 4-4 4h-8.5a1.5 1.5 0 0 1 0-3H46c.667 0 1-.25 1-1 0-3.164-3.328-5-7.5-5-.71 0-1.482.07-2.226.208a1.5 1.5 0 1 1-.548-2.95A15.385 15.385 0 0 1 39.5 31m-19-2c7.356 0 13.5 2.836 13.5 9 0 3.078-1.922 5-4.5 5h-18C8.814 43 7 41.59 7 38.5c0-6.545 6.065-9.5 13.5-9.5m0 3C14.514 32 10 34.2 10 38.5c0 1.244.33 1.5 1.5 1.5h18c.922 0 1.5-.578 1.5-2 0-3.874-4.606-6-10.5-6M39 15a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m-18.5-4a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15M39 18a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-18.5-4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" /></g></symbol>',56,56,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Placeholder/Placeholder.module.css":(e,t,n)=>{n.d(t,{Z:()=>a});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(r)()(l());i.push([e.id,".Placeholder--QT9fK{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;text-align:center}.Placeholder--withPadding--U9MOX{padding:48px 32px}.Placeholder--stretched--t1fH0{flex:1 0;height:100%;padding-bottom:inherit;padding-top:inherit}.Placeholder__icon--if6hr{color:var(--vkui--color_icon_secondary);display:inline-block;margin-bottom:12px;vertical-align:top}.Placeholder__header--WnYo4{color:var(--vkui--color_text_primary)}.Placeholder__text--V1RgX{color:var(--vkui--color_text_secondary)}.Placeholder__header--WnYo4+.Placeholder__text--V1RgX{margin-top:8px}.Placeholder__action--iajYO:not(:first-child){margin-top:16px}",""]),i.locals={Placeholder:"Placeholder--QT9fK","Placeholder--withPadding":"Placeholder--withPadding--U9MOX","Placeholder--stretched":"Placeholder--stretched--t1fH0",Placeholder__icon:"Placeholder__icon--if6hr",Placeholder__header:"Placeholder__header--WnYo4",Placeholder__text:"Placeholder__text--V1RgX",Placeholder__action:"Placeholder__action--iajYO"};let a=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css":(e,t,n)=>{n.d(t,{Z:()=>a});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(r)()(l());i.push([e.id,".Headline--level-1--qhWG1{font-family:var(--vkui--font_headline1--font_family--regular);font-size:var(--vkui--font_headline1--font_size--regular);font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:var(--vkui--font_headline2--font_family--regular);font-size:var(--vkui--font_headline2--font_size--regular);font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}}",""]),i.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"};let a=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Title/Title.module.css":(e,t,n)=>{n.d(t,{Z:()=>a});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(r)()(l());i.push([e.id,".Title--level-1--TJIWX{font-family:var(--vkui--font_title1--font_family--regular);font-size:var(--vkui--font_title1--font_size--regular);font-weight:var(--vkui--font_title1--font_weight--regular);line-height:var(--vkui--font_title1--line_height--regular)}.Title--level-2--btQdj{font-family:var(--vkui--font_title2--font_family--regular);font-size:var(--vkui--font_title2--font_size--regular);font-weight:var(--vkui--font_title2--font_weight--regular);line-height:var(--vkui--font_title2--line_height--regular)}.Title--level-3--eS9fO{font-family:var(--vkui--font_title3--font_family--regular);font-size:var(--vkui--font_title3--font_size--regular);font-weight:var(--vkui--font_title3--font_weight--regular);line-height:var(--vkui--font_title3--line_height--regular)}",""]),i.locals={"Title--level-1":"Title--level-1--TJIWX","Title--level-2":"Title--level-2--btQdj","Title--level-3":"Title--level-3--eS9fO"};let a=i},"./src/components/Placeholder/Placeholder.tsx":(e,t,n)=>{n.d(t,{V:()=>k});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var l=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/components/RootComponent/RootComponent.tsx"),i=n("./src/components/Typography/Headline/Headline.tsx"),a=n("./src/components/Typography/Title/Title.tsx"),s=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=n.n(s),c=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=n.n(c),h=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=n.n(h),p=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(p),v=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=n.n(v),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Placeholder/Placeholder.module.css"),g={attributes:{class:"vkui-style"}};g.setAttributes=f(),g.insert=m().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=_(),d()(y.Z,g);let O=y.Z&&y.Z.locals?y.Z.locals:void 0;function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function j(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var P=function(e){var t=e.stretched,n=e.withPadding,i=j(e,["stretched","withPadding"]);return(0,o.jsx)(r.U,b({baseClassName:(0,l.AK)(O.Placeholder,t&&O["Placeholder--stretched"],(void 0===n||n)&&O["Placeholder--withPadding"])},i))},S=function(e){return(0,o.jsx)(r.U,b({baseClassName:O.Placeholder__icon},e))},w=function(e){var t=e.className,n=j(e,["className"]);return(0,o.jsx)(a.D,b({level:"2",weight:"2",className:(0,l.AK)(t,O.Placeholder__header)},n))},x=function(e){var t=e.className,n=j(e,["className"]);return(0,o.jsx)(i.s,b({weight:"3",className:(0,l.AK)(t,O.Placeholder__text)},n))},T=function(e){return(0,o.jsx)(r.U,b({baseClassName:O.Placeholder__action},e))},k=function(e){var t=e.icon,n=e.header,r=e.children,i=e.action,a=e.withPadding,s=j(e,["icon","header","children","action","withPadding"]);return(0,o.jsxs)(P,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(b({withPadding:void 0===a||a},s),{children:[(0,l.p7)(t)&&(0,o.jsx)(S,{children:t}),(0,l.p7)(n)&&(0,o.jsx)(w,{children:n}),(0,l.p7)(r)&&(0,o.jsx)(x,{children:r}),(0,l.p7)(i)&&(0,o.jsx)(T,{children:i})]}))};k.Container=P,k.Icon=S,k.Header=w,k.Text=x,k.Actions=T;try{k.displayName="Placeholder",k.__docgenInfo={description:"",displayName:"Placeholder",props:{icon:{defaultValue:null,description:"Иконка",name:"icon",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Заголовок плейсхолдера",name:"header",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"Кнопка действия",name:"action",required:!1,type:{name:"ReactNode"}},stretched:{defaultValue:null,description:"Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер",name:"stretched",required:!1,type:{name:"boolean"}},withPadding:{defaultValue:{value:"true"},description:"Добавляет отступы к компоненту",name:"withPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder"]={docgenInfo:k.__docgenInfo,name:"Placeholder",path:"src/components/Placeholder/Placeholder.tsx#Placeholder"})}catch(e){}try{Container.displayName="Placeholder.Container",Container.__docgenInfo={description:"",displayName:"Placeholder.Container",props:{stretched:{defaultValue:null,description:"Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер",name:"stretched",required:!1,type:{name:"boolean"}},withPadding:{defaultValue:{value:"true"},description:"Добавляет отступы к компоненту",name:"withPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Container"]={docgenInfo:k.Container.__docgenInfo,name:"Placeholder.Container",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Container"})}catch(e){}try{Icon.displayName="Placeholder.Icon",Icon.__docgenInfo={description:"",displayName:"Placeholder.Icon",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Icon"]={docgenInfo:k.Icon.__docgenInfo,name:"Placeholder.Icon",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Icon"})}catch(e){}try{Header.displayName="Placeholder.Header",Header.__docgenInfo={description:"",displayName:"Placeholder.Header",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Header"]={docgenInfo:k.Header.__docgenInfo,name:"Placeholder.Header",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Header"})}catch(e){}try{Text.displayName="Placeholder.Text",Text.__docgenInfo={description:"",displayName:"Placeholder.Text",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Text"]={docgenInfo:k.Text.__docgenInfo,name:"Placeholder.Text",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Text"})}catch(e){}try{Actions.displayName="Placeholder.Actions",Actions.__docgenInfo={description:"",displayName:"Placeholder.Actions",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Actions"]={docgenInfo:k.Actions.__docgenInfo,name:"Placeholder.Actions",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Actions"})}catch(e){}},"./src/components/Typography/Headline/Headline.tsx":(e,t,n)=>{n.d(t,{s:()=>P});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var l=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),i=n("./src/components/Typography/Typography.tsx"),a=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(a),d=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(d),u=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=n.n(u),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(m),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=n.n(f),_=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=p(),y.insert=h().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=v(),s()(_.Z,y);let g=_.Z&&_.Z.locals?_.Z.locals:void 0;function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={1:g["Headline--level-1"],2:g["Headline--level-2"]},j=O({none:g["Headline--sizeY-none"]},"compact",g["Headline--sizeY-compact"]),P=function(e){var t=e.className,n=e.weight,a=e.level,s=e.Component,d=e.normalize,c=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["className","weight","level","Component","normalize"]),u=(0,r.g)().sizeY,h=void 0===u?"none":u;return(0,o.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){O(e,t,n[t])})}return e}({Component:void 0===s?"span":s,normalize:void 0===d||d,weight:void 0===n?"3":n,className:(0,l.AK)(t,"regular"!==h&&j[h],b[void 0===a?"1":a])},c))};try{P.displayName="Headline",P.__docgenInfo={description:"Используется для подзаголовков.",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:P.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(e){}},"./src/components/Typography/Title/Title.tsx":(e,t,n)=>{n.d(t,{D:()=>O});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var l=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/components/Typography/Typography.tsx"),i=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(i),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=n.n(s),c=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),u=n.n(c),h=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=n.n(h),p=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=n.n(p),v=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Title/Title.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=m(),_.insert=u().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=f(),a()(v.Z,_);let y=v.Z&&v.Z.locals?v.Z.locals:void 0;var g={1:y["Title--level-1"],2:y["Title--level-2"],3:y["Title--level-3"]},O=function(e){var t=e.className,n=e.level,i=e.Component,a=e.normalize,s=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["className","level","Component","normalize"]);return(0,o.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===i?"span":i,normalize:void 0===a||a,className:(0,l.AK)(t,g[void 0===n?"1":n])},s))};try{O.displayName="Title",O.__docgenInfo={description:"Используется для заголовков.",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:O.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(e){}},"./src/storybook/constants.ts":(e,t,n)=>{n.d(t,{R0:()=>r,nB:()=>l,tW:()=>o});var o={layout:"fullscreen",centered:!0},l={cartesian:{disable:!0}},r={control:{type:"text"}}}}]);