"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5928],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,n,t)=>{t.d(n,{_:()=>o});function o(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,n,t)=>{t.d(n,{De:()=>b});var o,r=t("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=t("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),a=t("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=t("../../node_modules/react/index.js"),l=t("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=t("../../node_modules/@swc/helpers/esm/_create_class.js"),u=t("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(n){var t=n.content;(0,l._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var n=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return n?document.importNode(t,!0):t}(t)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(n){var t=new e({content:""});return t.node=n,t}}]),e}(),m="http://www.w3.org/2000/svg",p=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,n.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var n=this.symbols,t=n.has(e.id);return n.set(e.id,e),!t}},{key:"add",value:function(e){var n=this.push(e);return this.node&&n&&e.mount(this.node),n}},{key:"attach",value:function(e){var n=this;this.node||(this.node=e,this.symbols.forEach(function(n){n.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=c.createFromExistingNode(e);n.add(t)}))}},{key:"mount",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),n&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(n){return e.setAttribute(n[0],n[1])}),this.symbols.forEach(function(n){return e.appendChild(n.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),h=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(h){var v="__SVG_SPRITE_NODE__";o=new p({attrs:{id:v}});var f=function(){var e=document.getElementById(v);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else o=null;var _=h?s.useLayoutEffect:s.useEffect,y=function(e){var n=e.width,t=void 0===n?0:n,o=e.height,l=void 0===o?0:o,d=e.viewBox,u=e.id,c=e.className,m=e.fill,p=e.getRootRef,h=e.style,v=e.title,f=e.children,_=(0,a._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=Math.max(t,l),b=(0,r._)({width:t,height:l},void 0===h?{}:h);return s.createElement("svg",(0,i._)((0,r._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(y),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(u),void 0===c?"":c].join(" ").trim(),viewBox:d,width:t,height:l,style:b,ref:p}),v&&s.createElement("title",null,v),s.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:m}},f))};function b(e,n,t,a,l,d,u,m){var p=function(){h||(!function(e){o&&o.add(e)}(new c({content:a})),h=!0)},h=!1,v=function(e){var n={};return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";n[t]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(t)),n[t]=!0)}}(e),f=function(e){return _(p,[]),u&&v("Иконка устарела"+(m?". Замените на ".concat(m):"")),s.createElement(y,(0,i._)((0,r._)({},e),{viewBox:t,id:n,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return f.mountIcon=p,f.displayName=e,f}},"../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js":(e,n,t)=>{t.d(n,{j:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Cancel","cancel_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js":(e,n,t)=>{t.d(n,{P:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706" /></g></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/dismiss_24.js":(e,n,t)=>{t.d(n,{a:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Dismiss","dismiss_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="dismiss_24"><g fill="currentColor"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12" opacity=".12" /><path d="M16.736 7.264a.9.9 0 0 1 0 1.272L13.273 12l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L12 13.273l-3.464 3.463a.9.9 0 1 1-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L12 10.727l3.464-3.463a.9.9 0 0 1 1.272 0z" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Banner/Banner.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(r());a.push([e.id,'.Banner--S2NMD{color:var(--vkui--color_text_primary);isolation:isolate}.Banner__in--RI80I{align-items:stretch;background-color:var(--vkui--color_background_secondary);border-radius:var(--vkui--size_border_radius--regular);display:flex;flex-flow:row nowrap;overflow:hidden;padding:12px;position:relative}.Banner__in--RI80I:before{border:var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);border-radius:inherit;box-sizing:border-box;content:"";display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:var(--vkui_internal--z_index_banner_content)}.Banner__before--aqrFX{margin-right:12px}.Banner__before--aqrFX,.Banner__content--FQHT8{position:relative;z-index:var(--vkui_internal--z_index_banner_content)}.Banner__content--FQHT8{display:flex;flex:1;flex-direction:column;justify-content:center;min-width:0}.Banner__subheader--xInbu,.Banner__text--RpTi6{color:var(--vkui--color_text_subhead)}.Banner__bg--FHXx2{left:0;position:absolute;top:0;z-index:var(--vkui_internal--z_index_banner_background)}.Banner__bg--FHXx2,.Banner__bg--FHXx2>*{height:100%;width:100%}.Banner__aside--rqzu9{justify-content:flex-end;width:28px}.Banner__aside--rqzu9,.Banner__dismiss--JTuyj{align-content:center;align-items:center;color:var(--vkui--color_icon_secondary);display:flex;flex-flow:row nowrap}.Banner__dismiss--JTuyj{justify-content:center;position:absolute;right:2px;top:2px;z-index:var(--vkui_internal--z_index_banner_hover)}.Banner__actions--unTjH{margin-top:12px}.Banner__subheader--xInbu:not(:first-child),.Banner__text--RpTi6:not(:first-child){margin-top:2px}.Banner--mode-image--vR9mO .Banner__in--RI80I{background-color:var(--vkui--color_background_secondary)}.Banner--inverted--Eabbb,.Banner--inverted--Eabbb .Banner__dismiss--JTuyj,.Banner--inverted--Eabbb .Banner__expand--E84zU,.Banner--inverted--Eabbb .Banner__subheader--xInbu{color:var(--vkui--color_text_contrast)}.Banner--inverted--Eabbb .Banner__subheader--xInbu{opacity:.72}.Banner--size-m--OkXHU .Banner__in--RI80I{padding:16px}.Banner--size-m--OkXHU .Banner__subheader--xInbu:not(:first-child),.Banner--size-m--OkXHU .Banner__text--RpTi6:not(:first-child){margin-top:4px}.Banner--ios--c2Lva .Banner__dismiss--JTuyj,.Banner--ios--c2Lva.Banner--mode-image--vR9mO .Banner__dismiss--JTuyj{color:var(--vkui--color_icon_secondary)}.vkuiInternalFormStatus .Banner__in--RI80I:before{border:0}.vkuiInternalFormStatus--mode-error .Banner__in--RI80I{background-color:var(--vkui--color_background_negative_tint)}.vkuiInternalFormStatus--mode-error .Banner__subheader--xInbu{color:var(--vkui--color_background_negative)}',""]),a.locals={Banner:"Banner--S2NMD",Banner__in:"Banner__in--RI80I",Banner__before:"Banner__before--aqrFX",Banner__content:"Banner__content--FQHT8",Banner__subheader:"Banner__subheader--xInbu",Banner__text:"Banner__text--RpTi6",Banner__bg:"Banner__bg--FHXx2",Banner__aside:"Banner__aside--rqzu9",Banner__dismiss:"Banner__dismiss--JTuyj",Banner__actions:"Banner__actions--unTjH","Banner--mode-image":"Banner--mode-image--vR9mO","Banner--inverted":"Banner--inverted--Eabbb",Banner__expand:"Banner__expand--E84zU","Banner--size-m":"Banner--size-m--OkXHU","Banner--ios":"Banner--ios--c2Lva"};let s=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(r());a.push([e.id,".Headline--level-1--qhWG1{font-family:var(--vkui--font_headline1--font_family--regular);font-size:var(--vkui--font_headline1--font_size--regular);font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:var(--vkui--font_headline2--font_family--regular);font-size:var(--vkui--font_headline2--font_size--regular);font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}}",""]),a.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"};let s=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(r());a.push([e.id,".Subhead--aLKgN{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);font-weight:var(--vkui--font_subhead--font_weight--regular);line-height:var(--vkui--font_subhead--line_height--regular)}.Subhead--sizeY-compact--bY5aX{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Subhead--sizeY-none--zWIAB{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}}",""]),a.locals={Subhead:"Subhead--aLKgN","Subhead--sizeY-compact":"Subhead--sizeY-compact--bY5aX","Subhead--sizeY-none":"Subhead--sizeY-none--zWIAB"};let s=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Title/Title.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(r());a.push([e.id,".Title--level-1--TJIWX{font-family:var(--vkui--font_title1--font_family--regular);font-size:var(--vkui--font_title1--font_size--regular);font-weight:var(--vkui--font_title1--font_weight--regular);line-height:var(--vkui--font_title1--line_height--regular)}.Title--level-2--btQdj{font-family:var(--vkui--font_title2--font_family--regular);font-size:var(--vkui--font_title2--font_size--regular);font-weight:var(--vkui--font_title2--font_weight--regular);line-height:var(--vkui--font_title2--line_height--regular)}.Title--level-3--eS9fO{font-family:var(--vkui--font_title3--font_family--regular);font-size:var(--vkui--font_title3--font_size--regular);font-weight:var(--vkui--font_title3--font_weight--regular);line-height:var(--vkui--font_title3--line_height--regular)}",""]),a.locals={"Title--level-1":"Title--level-1--TJIWX","Title--level-2":"Title--level-2--btQdj","Title--level-3":"Title--level-3--eS9fO"};let s=a},"./src/components/Banner/Banner.tsx":(e,n,t)=>{t.d(n,{j:()=>E});var o=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/react/index.js"),i=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24DismissDark","dismiss_dark_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="dismiss_dark_24"><path fill="#000" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12" opacity=".24" /><path fill="#fff" d="M16.736 7.264a.9.9 0 0 1 0 1.272L13.273 12l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L12 13.273l-3.464 3.463a.9.9 0 1 1-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L12 10.727l3.464-3.463a.9.9 0 0 1 1.272 0z" /></symbol>',24,24,!1,void 0),a=t("../../node_modules/@vkontakte/icons/dist/es6/24/dismiss_24.js"),s=t("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js"),l=t("../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js"),d=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),u=t("./src/hooks/usePlatform.ts"),c=t("./src/components/IconButton/IconButton.tsx"),m=t("./src/components/RootComponent/RootComponent.tsx"),p=t("./src/components/Tappable/Tappable.tsx"),h=t("./src/components/Typography/Headline/Headline.tsx"),v=t("./src/components/Typography/Subhead/Subhead.tsx"),f=t("./src/components/Typography/Text/Text.tsx"),_=t("./src/components/Typography/Title/Title.tsx"),y=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(y),g=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),j=t.n(g),x=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),k=t.n(x),O=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),S=t.n(O),w=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=t.n(w),T=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Banner/Banner.module.css"),z={attributes:{class:"vkui-style"}};z.setAttributes=S(),z.insert=k().bind(null,"head"),z.domAPI=j(),z.insertStyleElement=B(),b()(T.Z,z);let I=T.Z&&T.Z.locals?T.Z.locals:void 0;var E=function(e){var n=e.mode,t=void 0===n?"tint":n,y=e.imageTheme,b=e.size,g=void 0===b?"s":b,j=e.before,x=e.asideMode,k=e.header,O=e.subheader,S=e.text,w=(e.children,e.background),B=e.actions,T=e.onDismiss,z=e.dismissLabel,E=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["mode","imageTheme","size","before","asideMode","header","subheader","text","children","background","actions","onDismiss","dismissLabel"]),R=(0,u.F)(),N="m"===g?_.D:h.s,P="m"===g?f.x:v.v,H="image"===t?i:a.a,C=(0,o.jsxs)(o.Fragment,{children:["image"===t&&w&&(0,o.jsx)("div",{"aria-hidden":!0,className:I.Banner__bg,children:w}),j&&(0,o.jsx)("div",{className:I.Banner__before,children:j}),(0,o.jsxs)("div",{className:I.Banner__content,children:[(0,d.p7)(k)&&(0,o.jsx)(N,{Component:"p",weight:"2",level:"m"===g?"2":"1",children:k}),(0,d.p7)(O)&&(0,o.jsx)(P,{Component:"p",className:I.Banner__subheader,children:O}),(0,d.p7)(S)&&(0,o.jsx)(f.x,{Component:"p",className:I.Banner__text,children:S}),(0,d.p7)(B)&&r.Children.count(B)>0&&(0,o.jsx)("div",{className:I.Banner__actions,children:B})]})]});return(0,o.jsx)(m.U,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({Component:"section"},E),{baseClassName:(0,d.AK)(I.Banner,"ios"===R&&I["Banner--ios"],"image"===t&&I["Banner--mode-image"],"m"===g&&I["Banner--size-m"],"image"===t&&"dark"===(void 0===y?"dark":y)&&I["Banner--inverted"]),children:"expand"===x?(0,o.jsxs)(p.K,{className:I.Banner__in,activeMode:"ios"===R?"opacity":"background",onClick:d.ZT,children:[C,(0,o.jsx)("div",{className:I.Banner__aside,children:(0,o.jsx)(s.P,{className:I.Banner__expand})})]}):(0,o.jsxs)("div",{className:I.Banner__in,children:[C,"dismiss"===x&&(0,o.jsx)("div",{className:I.Banner__aside,children:(0,o.jsx)(c.h,{label:void 0===z?"Скрыть":z,className:I.Banner__dismiss,onClick:T,hoverMode:"opacity",hasActive:!1,children:"ios"===R?(0,o.jsx)(H,{}):(0,o.jsx)(l.j,{})})})]})}))};try{E.displayName="Banner",E.__docgenInfo={description:"",displayName:"Banner",props:{mode:{defaultValue:{value:"tint"},description:"Тип баннера.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"image"'},{value:'"tint"'}]}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},asideMode:{defaultValue:null,description:"Тип действия в правой части баннера.\n\n- `dismiss` – отображается иконка крестика, при клике на неё сработает свойство `onDismiss`.\n- `expand` – отображается иконка шеврона, которая подразумевает, что при клике на баннер можно куда-то перейти.",name:"asideMode",required:!1,type:{name:"enum",value:[{value:'"dismiss"'},{value:'"expand"'}]}},onDismiss:{defaultValue:null,description:'Срабатывает при клике на иконку крестика при `asideMode="dismiss"`.',name:"onDismiss",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},dismissLabel:{defaultValue:{value:"Скрыть"},description:"Текст кнопки закрытия. Делает ее доступной для ассистивных технологий",name:"dismissLabel",required:!1,type:{name:"string"}},before:{defaultValue:null,description:"Содержимое, отображаемое в левой части баннера.",name:"before",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Заголовок.",name:"header",required:!1,type:{name:"ReactNode"}},subheader:{defaultValue:null,description:"Подзаголовок.",name:"subheader",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Текст баннера.",name:"text",required:!1,type:{name:"ReactNode"}},imageTheme:{defaultValue:{value:"dark"},description:'При использовании `mode="image"`.\n\n- `light` – в качестве фона используется светлое изображение, цвет текста в баннере будет тёмным.\n- `dark` – в качестве фона используется тёмное изображение, цвет текста будет светлым.',name:"imageTheme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},background:{defaultValue:null,description:'При использовании `mode="image"`.\n\nЭлемент, который нужно стилизовать цветом и/или фоном. Этот элемент будет растянут на 100% ширины и высоты баннера.',name:"background",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:'Кнопки-действия. Принимает [`Button`](https://vkcom.github.io/VKUI/#/Button).\n\n- В режиме `tint` или `image` со светлым фоном используйте только с параметрами:\n   - `mode="primary"`\n   - `mode="secondary"`\n- В режиме `image` с тёмным фоном используйте с параметрами:\n   - `appearance="overlay"`.\n\nДля набора кнопок используйте [`ButtonGroup`](https://vkcom.github.io/VKUI/#/ButtonGroup) с параметрами:\n\n- `gap="m" mode="horizontal" stretched`\n- `gap="m" mode="vertical" stretched`',name:"actions",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Banner/Banner.tsx#Banner"]={docgenInfo:E.__docgenInfo,name:"Banner",path:"src/components/Banner/Banner.tsx#Banner"})}catch(e){}},"./src/components/Typography/Headline/Headline.tsx":(e,n,t)=>{t.d(n,{s:()=>k});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/hooks/useAdaptivity.ts"),a=t("./src/components/Typography/Typography.tsx"),s=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(s),d=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=t.n(d),c=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=t.n(c),p=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=t.n(p),v=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=t.n(v),_=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Headline/Headline.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=h(),y.insert=m().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=f(),l()(_.Z,y);let b=_.Z&&_.Z.locals?_.Z.locals:void 0;function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j={1:b["Headline--level-1"],2:b["Headline--level-2"]},x=g({none:b["Headline--sizeY-none"]},"compact",b["Headline--sizeY-compact"]),k=function(e){var n=e.className,t=e.weight,s=e.level,l=e.Component,d=e.normalize,u=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["className","weight","level","Component","normalize"]),c=(0,i.g)().sizeY,m=void 0===c?"none":c;return(0,o.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){g(e,n,t[n])})}return e}({Component:void 0===l?"span":l,normalize:void 0===d||d,weight:void 0===t?"3":t,className:(0,r.AK)(n,"regular"!==m&&x[m],j[void 0===s?"1":s])},u))};try{k.displayName="Headline",k.__docgenInfo={description:"Используется для подзаголовков.",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:k.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(e){}},"./src/components/Typography/Subhead/Subhead.tsx":(e,n,t)=>{t.d(n,{v:()=>x});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/hooks/useAdaptivity.ts"),a=t("./src/components/Typography/Typography.tsx"),s=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(s),d=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=t.n(d),c=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=t.n(c),p=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=t.n(p),v=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=t.n(v),_=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=h(),y.insert=m().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=f(),l()(_.Z,y);let b=_.Z&&_.Z.locals?_.Z.locals:void 0;function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j=g({none:b["Subhead--sizeY-none"]},"compact",b["Subhead--sizeY-compact"]),x=function(e){var n=e.className,t=e.Component,s=e.normalize,l=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["className","Component","normalize"]),d=(0,i.g)().sizeY,u=void 0===d?"none":d;return(0,o.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){g(e,n,t[n])})}return e}({Component:void 0===t?"span":t,normalize:void 0===s||s,className:(0,r.AK)(n,b.Subhead,"regular"!==u&&j[u])},l))};try{x.displayName="Subhead",x.__docgenInfo={description:"Используется для подзаголовков 2 уровня.",displayName:"Subhead",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Subhead/Subhead.tsx#Subhead"]={docgenInfo:x.__docgenInfo,name:"Subhead",path:"src/components/Typography/Subhead/Subhead.tsx#Subhead"})}catch(e){}},"./src/components/Typography/Title/Title.tsx":(e,n,t)=>{t.d(n,{D:()=>g});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/components/Typography/Typography.tsx"),a=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(a),l=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=t.n(l),u=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=t.n(u),m=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=t.n(m),h=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=t.n(h),f=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Title/Title.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=p(),_.insert=c().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=v(),s()(f.Z,_);let y=f.Z&&f.Z.locals?f.Z.locals:void 0;var b={1:y["Title--level-1"],2:y["Title--level-2"],3:y["Title--level-3"]},g=function(e){var n=e.className,t=e.level,a=e.Component,s=e.normalize,l=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["className","level","Component","normalize"]);return(0,o.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({Component:void 0===a?"span":a,normalize:void 0===s||s,className:(0,r.AK)(n,b[void 0===t?"1":t])},l))};try{g.displayName="Title",g.__docgenInfo={description:"Используется для заголовков.",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:g.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(e){}},"../../tools/storybook-addon-cartesian/src/index.tsx":(e,n,t)=>{t.d(n,{nW:()=>l});var o=t("../../node_modules/react/jsx-runtime.js");function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){i(e,n,t[n])})}return e}t("../../node_modules/react/index.js");var s={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},l=function(e,n){var t=n.argTypes,l=n.args.cartesian,d=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(n.args,["cartesian"]);if(l){var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,t){var o=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),s=o[0],l=o[1],d=[];return e.forEach(function(e){l.forEach(function(t){d.push(function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(a({},e),i({},s,n[s].mapping?n[s].mapping[t]:t)))})}),d},[{}])}(l,t);return(0,o.jsx)("div",{style:s,children:u.map(function(n,t){return(0,o.jsx)(e,{args:a({},d,n)},t)})})}return(0,o.jsx)(e,{args:d})}}}]);