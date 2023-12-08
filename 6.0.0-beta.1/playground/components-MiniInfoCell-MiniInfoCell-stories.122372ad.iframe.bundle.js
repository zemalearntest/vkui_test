"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3551],{"./src/components/MiniInfoCell/MiniInfoCell.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>L,__namedExportsOrder:()=>z,default:()=>D});var o,r,a,i=n("../../node_modules/react/jsx-runtime.js"),l=n("../../node_modules/react/index.js"),s=n("../../tools/storybook-addon-cartesian/src/index.tsx"),c=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon20ArticleOutline","article_outline_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="article_outline_20"><defs><path id="article_outline_20_a" d="M17.5 5.25a.752.752 0 0 0-.744-.75H3.244a.745.745 0 0 0-.744.75c0 .414.341.75.744.75h13.512c.411 0 .744-.333.744-.75m0 5a.752.752 0 0 0-.744-.75H3.244a.745.745 0 0 0-.744.75c0 .414.341.75.744.75h13.512c.411 0 .744-.333.744-.75m-15 5c0 .414.337.75.755.75h8.99a.75.75 0 0 0 .755-.75.752.752 0 0 0-.755-.75h-8.99a.75.75 0 0 0-.755.75" /></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><use xlink:href="#article_outline_20_a" fill="currentColor" fill-rule="nonzero" /></g></symbol>',20,20,!1,void 0),d=n("./src/storybook/constants.ts"),p=n("../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js"),u=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),f=n("./src/components/RootComponent/RootComponent.tsx"),m=n("./src/components/Tappable/Tappable.tsx"),b=n("./src/components/Typography/Paragraph/Paragraph.tsx"),y=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=n.n(y),h=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_=n.n(h),g=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),O=n.n(g),j=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),T=n.n(j),C=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=n.n(C),w=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/MiniInfoCell/MiniInfoCell.module.css"),x={attributes:{class:"vkui-style"}};x.setAttributes=T(),x.insert=O().bind(null,"head"),x.domAPI=_(),x.insertStyleElement=S(),v()(w.Z,x);let k=w.Z&&w.Z.locals?w.Z.locals:void 0;function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function M(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var P={add:k["MiniInfoCell--mode-add"],accent:k["MiniInfoCell--mode-accent"],more:k["MiniInfoCell--mode-more"]},R={nowrap:k["MiniInfoCell--textWrap-nowrap"],full:k["MiniInfoCell--textWrap-full"],short:k["MiniInfoCell--textWrap-short"]},E=function(e){var t=e.before,n=e.after,o=e.children,r=e.mode,a=void 0===r?"base":r,s=e.textWrap,c=e.expandable,d=e.className,y=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["before","after","children","mode","textWrap","expandable","className"]),v=(0,u.AK)(k.MiniInfoCell,R[void 0===s?"nowrap":s],"base"!==a&&P[a],d),h=(0,i.jsxs)(l.Fragment,{children:[(0,u.p7)(t)&&(0,i.jsx)("span",{className:k.MiniInfoCell__before,children:t}),(0,i.jsxs)("div",{className:k.MiniInfoCell__middle,children:[(0,i.jsx)(b.n,{className:k.MiniInfoCell__content,weight:"more"===a?"2":void 0,children:o}),void 0!==c&&c&&(0,i.jsx)(p.r,{})]}),(0,u.p7)(n)&&(0,i.jsx)("span",{className:k.MiniInfoCell__after,children:n})]});return y.onClick?(0,i.jsx)(m.K,M(I({Component:"div",role:"button"},y),{className:v,children:h})):(0,i.jsx)(f.U,M(I({},y),{baseClassName:v,children:h}))};try{E.displayName="MiniInfoCell",E.__docgenInfo={description:"",displayName:"MiniInfoCell",props:{before:{defaultValue:null,description:"Иконка слева.<br />\nРекомендуется использовать иконки размера 20.",name:"before",required:!0,type:{name:"ReactNode"}},after:{defaultValue:null,description:'Содержимое справа.<br />\n`<UsersStack size="s" />` или `<Avatar size={24} />`',name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"base"},description:"Тип ячейки:\n\n- `base` – базовая ячейка с серой иконкой и серым текстом.<br />\nВ компонент можно передать `Link`, чтобы визуально сделать часть текста ссылкой.\n- `add` – тип ячейки, который показывает, что взаимодействие с ней должно вызывать действие добавления чего-то.\n- `more` – взаимодействие с такой ячейкой должно открывать какую-то подробную информацию.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"accent"'},{value:'"add"'},{value:'"more"'}]}},textWrap:{defaultValue:{value:"nowrap"},description:"Тип отображения текста:\n\n- `nowrap` – в одну строку, текст не переносится и обрезается.\n- `short` – максимально отображается 3 строки, остальное обрезается.\n- `full` – текст отображается полностью.",name:"textWrap",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"short"'},{value:'"full"'}]}},expandable:{defaultValue:{value:"false"},description:"Передавать `true`, если предполагается переход при клике по ячейке.",name:"expandable",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MiniInfoCell/MiniInfoCell.tsx#MiniInfoCell"]={docgenInfo:E.__docgenInfo,name:"MiniInfoCell",path:"src/components/MiniInfoCell/MiniInfoCell.tsx#MiniInfoCell"})}catch(e){}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function N(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let D={title:"Blocks/MiniInfoCell",component:E,parameters:d.tW,decorators:[s.nW]};var L={args:{before:(0,i.jsx)(c,{}),children:"ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей."}};L.parameters=N(A({},L.parameters),{docs:N(A({},null===(o=L.parameters)||void 0===o?void 0:o.docs),{source:A({originalSource:"{\n  args: {\n    before: <Icon20ArticleOutline />,\n    children: 'ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.'\n  }\n}"},null===(a=L.parameters)||void 0===a?void 0:null===(r=a.docs)||void 0===r?void 0:r.source)})});let z=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>o});function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{De:()=>_});var o,r=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),a=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),l=n("../../node_modules/react/index.js"),s=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),c=n("../../node_modules/@swc/helpers/esm/_create_class.js"),d=n("../../node_modules/@swc/helpers/esm/_define_property.js"),p=function(){function e(t){var n=t.content;(0,s._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,c._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),u="http://www.w3.org/2000/svg",f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:u,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,c._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=p.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(u,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var b="__SVG_SPRITE_NODE__";o=new f({attrs:{id:b}});var y=function(){var e=document.getElementById(b);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",y)};document.querySelector("body")?y():document.addEventListener("DOMContentLoaded",y)}else o=null;var v=m?l.useLayoutEffect:l.useEffect,h=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,s=void 0===o?0:o,c=e.viewBox,d=e.id,p=e.className,u=e.fill,f=e.getRootRef,m=e.style,b=e.title,y=e.children,v=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),h=Math.max(n,s),_=(0,r._)({width:n,height:s},void 0===m?{}:m);return l.createElement("svg",(0,a._)((0,r._)({"aria-hidden":"true",display:"block"},v),{className:["vkuiIcon","vkuiIcon--".concat(h),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(d),void 0===p?"":p].join(" ").trim(),viewBox:c,width:n,height:s,style:_,ref:f}),b&&l.createElement("title",null,b),l.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:u}},y))};function _(e,t,n,i,s,c,d,u){var f=function(){m||(!function(e){o&&o.add(e)}(new p({content:i})),m=!0)},m=!1,b=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),y=function(e){return v(f,[]),d&&b("Иконка устарела"+(u?". Замените на ".concat(u):"")),l.createElement(h,(0,a._)((0,r._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?c:+e.height}))};return y.mountIcon=f,y.displayName=e,y}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,t,n)=>{n.d(t,{r:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/MiniInfoCell/MiniInfoCell.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),a=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(a)()(r());i.push([e.id,".MiniInfoCell--SJvRm{color:var(--vkui--color_text_subhead);display:flex;padding-bottom:6px;padding-left:var(--vkui--size_base_padding_horizontal--regular);padding-right:var(--vkui--size_base_padding_horizontal--regular);padding-top:6px}.MiniInfoCell--mode-accent--JFmes{color:var(--vkui--color_text_primary)}.MiniInfoCell__before--N5j9b{color:var(--vkui--color_icon_secondary);margin-right:12px}.MiniInfoCell__middle--nXGLh{align-items:center;display:flex;flex:1;min-width:0;overflow:hidden}.MiniInfoCell__content--sYWLD{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-word}.MiniInfoCell--textWrap-short--A2Yqf .MiniInfoCell__content--sYWLD{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;max-height:60px;white-space:normal}.MiniInfoCell--textWrap-full--D6RTF .MiniInfoCell__content--sYWLD{overflow:inherit;white-space:normal}.MiniInfoCell--textWrap-nowrap--IQGlL .MiniInfoCell__content--sYWLD{flex:0 1 auto}.MiniInfoCell__after--noglh{margin-bottom:-2px;margin-left:12px;margin-top:-2px}.MiniInfoCell--mode-add--_RQkz,.MiniInfoCell--mode-more--C7FZx{color:var(--vkui--color_text_link_themed)}.MiniInfoCell--mode-add--_RQkz .MiniInfoCell__before--N5j9b,.MiniInfoCell--mode-more--C7FZx .MiniInfoCell__before--N5j9b{color:var(--vkui--color_icon_accent_themed)}.MiniInfoCell--mode-more--C7FZx{padding-bottom:10px;padding-top:10px}.MiniInfoCell__middle--nXGLh .vkuiIcon{color:var(--vkui--color_text_accent);margin-left:4px}.MiniInfoCell--mode-add--_RQkz .MiniInfoCell__middle--nXGLh .vkuiIcon,.MiniInfoCell--mode-more--C7FZx .MiniInfoCell__middle--nXGLh .vkuiIcon{color:var(--vkui--color_icon_accent_themed)}",""]),i.locals={MiniInfoCell:"MiniInfoCell--SJvRm","MiniInfoCell--mode-accent":"MiniInfoCell--mode-accent--JFmes",MiniInfoCell__before:"MiniInfoCell__before--N5j9b",MiniInfoCell__middle:"MiniInfoCell__middle--nXGLh",MiniInfoCell__content:"MiniInfoCell__content--sYWLD","MiniInfoCell--textWrap-short":"MiniInfoCell--textWrap-short--A2Yqf","MiniInfoCell--textWrap-full":"MiniInfoCell--textWrap-full--D6RTF","MiniInfoCell--textWrap-nowrap":"MiniInfoCell--textWrap-nowrap--IQGlL",MiniInfoCell__after:"MiniInfoCell__after--noglh","MiniInfoCell--mode-add":"MiniInfoCell--mode-add--_RQkz","MiniInfoCell--mode-more":"MiniInfoCell--mode-more--C7FZx"};let l=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),a=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(a)()(r());i.push([e.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;transition:background-color .15s ease-out;will-change:transform;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);border-radius:50%;content:"";height:24px;left:0;margin:-12px -12px 0 0;opacity:0;position:absolute;top:0;width:24px}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',""]),i.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};let l=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Paragraph/Paragraph.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),a=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(a)()(r());i.push([e.id,".Paragraph--lkCTy{font-family:var(--vkui--font_paragraph--font_family--regular);font-size:var(--vkui--font_paragraph--font_size--regular);font-weight:var(--vkui--font_paragraph--font_weight--regular);line-height:var(--vkui--font_paragraph--line_height--regular)}",""]),i.locals={Paragraph:"Paragraph--lkCTy"};let l=i},"./src/components/Tappable/Tappable.tsx":(e,t,n)=>{n.d(t,{K:()=>L});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/hooks/useAdaptivity.ts"),l=n("./src/lib/adaptivity/constants.ts"),s=n("./src/lib/mergeCalls.ts"),c=n("./src/components/Clickable/Clickable.tsx"),d=n("./src/hooks/usePlatform.ts"),p=n("./src/hooks/useTimeout.ts"),u=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=n.n(u),m=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),b=n.n(m),y=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),v=n.n(y),h=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_=n.n(h),g=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=n.n(g),j=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css"),T={attributes:{class:"vkui-style"}};T.setAttributes=_(),T.insert=v().bind(null,"head"),T.domAPI=b(),T.insertStyleElement=O(),f()(j.Z,T);let C=j.Z&&j.Z.locals?j.Z.locals:void 0;function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function w(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}}var x=function(e,t){return"android"===(0,d.F)()&&!t&&"background"===e},k=function(e,t){var n=function(e,t,n){var o=Date.now();l((function(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(i.filter(function(e){return e.id+225>o})).concat([{x:e,y:t,id:o,pointerId:n}])),c.set(),s.delete(n)},o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||w(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.useState([]),2),i=o[0],l=o[1],s=r.useMemo(function(){return new Map},[]),c=(0,p.K)(function(){return l([])},225),d=(!a.RX||!1===t)&&e;return{clicks:i,onPointerDown:d?function(e){var t=function(e){var t=null==e?void 0:e.getBoundingClientRect();return{top:null==t?void 0:t.top,left:null==t?void 0:t.left,width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight}}(e.currentTarget),o=t.top,r=t.left,a=e.clientX-(null!=r?r:0),i=e.clientY-(null!=o?o:0);s.set(e.pointerId,setTimeout(function(){return n(a,i,e.pointerId)},70))}:a.ZT,onPointerCancel:d?function(e){clearTimeout(s.get(e.pointerId)),s.delete(e.pointerId)}:a.ZT}},I=function(e){var t=e.needRipple,n=e.clicks;return(0,o.jsx)("span",{"aria-hidden":!0,className:(0,a.AK)(C.Tappable__stateLayer,(void 0===t||t)&&C.Tappable__ripple),children:n.map(function(e){return(0,o.jsx)("span",{className:C.Tappable__wave,style:{top:e.y,left:e.x}},e.id)})})};try{x.displayName="useMaybeNeedRipple",x.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:x.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(e){}try{k.displayName="useRipple",k.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:k.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(e){}try{I.displayName="Ripple",I.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:I.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(e){}var M="background",P={background:C["Tappable--hovered-background"],opacity:C["Tappable--hovered-opacity"],none:""};function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=P[e];return void 0!==t?t:e}var E={background:C["Tappable--activated-background"],opacity:C["Tappable--activated-opacity"],none:""};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=E[e];return void 0!==t?t:e}try{R.displayName="hoverClass",R.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:R.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(e){}try{A.displayName="activeClass",A.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:A.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(e){}try{M.displayName="DEFAULT_STATE_MODE",M.__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:M.__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(e){}function N(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D={none:C["Tappable--sizeX-none"],compact:C["Tappable--sizeX-compact"]},L=function(e){var t=e.baseClassName,n=e.borderRadiusMode,r=e.children,d=e.hoverMode,p=void 0===d?M:d,u=e.activeMode,f=void 0===u?M:u,m=e.onPointerDown,b=e.onPointerCancel,y=N(e,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]),v=(0,c.T)(y),h=(0,i.g)(),_=h.sizeX,g=void 0===_?"none":_,O=h.hasPointer,j=x(f,O),T=k(j,O),S=T.clicks,w=N(T,["clicks"]),P=(0,s.O)(w,{onPointerDown:m,onPointerCancel:b});return(0,o.jsxs)(c.P,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({baseClassName:(0,a.AK)(t,C.Tappable,g!==l.n$.REGULAR&&D[g],"inherit"===(void 0===n?"auto":n)&&C["Tappable--borderRadiusInherit"],function(e){switch(e){case void 0:return C["Tappable--hasPointer-none"];case!1:return C["Tappable--hasPointer-false"]}}(O)),hoverClassName:R(p),activeClassName:A(f)},P,y),{children:[r,v&&("background"===p||"background"===f)&&(0,o.jsx)(I,{needRipple:j,clicks:S})]}))};try{L.displayName="Tappable",L.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:L.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(e){}},"./src/components/Typography/Paragraph/Paragraph.tsx":(e,t,n)=>{n.d(t,{n:()=>_});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=n("./src/components/Typography/Typography.tsx"),i=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(i),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=n.n(s),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=n.n(d),u=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(u),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=n.n(m),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Paragraph/Paragraph.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=f(),v.insert=p().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=b(),l()(y.Z,v);let h=y.Z&&y.Z.locals?y.Z.locals:void 0;var _=function(e){var t=e.className,n=e.Component,i=e.normalize,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","Component","normalize"]);return(0,o.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===n?"span":n,normalize:void 0!==i&&i,className:(0,r.AK)(t,h.Paragraph)},l))};try{_.displayName="Paragraph",_.__docgenInfo={description:"Используется для основного текста.",displayName:"Paragraph",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"false"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"]={docgenInfo:_.__docgenInfo,name:"Paragraph",path:"src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"})}catch(e){}},"../../tools/storybook-addon-cartesian/src/index.tsx":(e,t,n)=>{n.d(t,{nW:()=>s});var o=n("../../node_modules/react/jsx-runtime.js");function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}n("../../node_modules/react/index.js");var l={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},s=function(e,t){var n=t.argTypes,s=t.args.cartesian,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t.args,["cartesian"]);if(s){var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,n){var o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n,2),l=o[0],s=o[1],c=[];return e.forEach(function(e){s.forEach(function(n){c.push(function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(i({},e),a({},l,t[l].mapping?t[l].mapping[n]:n)))})}),c},[{}])}(s,n);return(0,o.jsx)("div",{style:l,children:d.map(function(t,n){return(0,o.jsx)(e,{args:i({},c,t)},n)})})}return(0,o.jsx)(e,{args:c})}}}]);