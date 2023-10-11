"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4865],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,n,t){function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}t.d(n,{De:function(){return b}});var i,l=t("../../node_modules/react/index.js");function s(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n,t){return n&&d(e.prototype,n),t&&d(e,t),e}var c=function(){function e(n){var t=n.content;s(this,e),o(this,"isMounted",!1),o(this,"node",void 0),this.node=function(e){var n=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return n?document.importNode(t,!0):t}(t)}return u(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(n){var t=new e({content:""});return t.node=n,t}}]),e}(),p="http://www.w3.org/2000/svg",m=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),o(this,"symbols",new Map),o(this,"config",{attrs:{xmlns:p,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),o(this,"node",null),Object.assign(this.config.attrs,n.attrs)}return u(e,[{key:"push",value:function(e){var n=this.symbols,t=n.has(e.id);return n.set(e.id,e),!t}},{key:"add",value:function(e){var n=this.push(e);return this.node&&n&&e.mount(this.node),n}},{key:"attach",value:function(e){var n=this;this.node||(this.node=e,this.symbols.forEach(function(n){n.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=c.createFromExistingNode(e);n.add(t)}))}},{key:"mount",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),n&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(p,"svg");return Object.entries(this.config.attrs).forEach(function(n){return e.setAttribute(n[0],n[1])}),this.symbols.forEach(function(n){return e.appendChild(n.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),f=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(f){var v="__SVG_SPRITE_NODE__";i=new m({attrs:{id:v}});var h=function(){var e=document.getElementById(v);e?i.attach(e):i.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else i=null;var y=f?l.useLayoutEffect:l.useEffect,g=function(e){var n=e.width,t=void 0===n?0:n,o=e.height,i=void 0===o?0:o,s=e.viewBox,d=e.id,u=e.className,c=e.fill,p=e.getRootRef,m=e.style,f=e.title,v=e.children,h=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=r({width:t,height:i},void 0===m?{}:m);return l.createElement("svg",a(r({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(t,i)),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(i),"vkuiIcon--".concat(d),void 0===u?"":u].join(" ").trim(),viewBox:s,width:t,height:i,style:y,ref:p}),f&&l.createElement("title",null,f),l.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:c}},v))};function b(e,n,t,o,s,d,u,p){var m=function(){f||(!function(e){i&&i.add(e)}(new c({content:o})),f=!0)},f=!1,v=function(e){var n={};return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";n[t]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(t)),n[t]=!0)}}(e),h=function(e){return y(m,[]),u&&v("Иконка устарела"+(p?". Замените на ".concat(p):"")),l.createElement(g,a(r({},e),{viewBox:t,id:n,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return h.mountIcon=m,h.displayName=e,h}},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js":function(e,n,t){t.d(n,{P:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="spinner_16"><path fill="currentColor" fill-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js":function(e,n,t){t.d(n,{j:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Cancel","cancel_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727 7.536 6.264Z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js":function(e,n,t){t.d(n,{R:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Done","done_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="done_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="m9 16.2-3.5-3.5a.99.99 0 1 0-1.4 1.4l4.193 4.193a1 1 0 0 0 1.414 0L20.3 7.7a.99.99 0 0 0-1.4-1.4L9 16.2Z" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js":function(e,n,t){t.d(n,{h:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js":function(e,n,t){t.d(n,{X:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js":function(e,n,t){t.d(n,{C:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css":function(e,n,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),a=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(a)()(r());i.push([e.id,".Div--jWBVN{padding:12px 16px;padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}",""]),i.locals={Div:"Div--jWBVN"},n.Z=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/PanelHeaderButton/PanelHeaderButton.module.css":function(e,n,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),a=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(a)()(r());i.push([e.id,".PanelHeaderButton--awVrq{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-shadow:none;color:currentColor;display:block;margin:0;padding:0;position:relative}.PanelHeaderButton--awVrq[disabled]{opacity:.6}.PanelHeaderButton--primitive--n0JJp{height:48px;line-height:48px;padding:0 10px}.PanelHeaderButton--ios--rWeMG{align-items:center;display:flex;font-size:17px;position:relative}.PanelHeaderButton--ios--rWeMG.PanelHeaderButton--primitive--n0JJp{height:44px;line-height:44px}.PanelHeaderButton--ios--rWeMG .vkuiIcon--24{padding:10px}.PanelHeaderButton--ios--rWeMG .vkuiIcon--28{padding:8px}.PanelHeaderBack--ios--Lo_1T .vkuiIcon--w-20{padding-left:4px}.PanelHeaderButton--android--hqSgb.PanelHeaderButton--notPrimitive--cA70O{border-radius:50%}.PanelHeaderButton--android--hqSgb .vkuiIcon--24{padding:12px}.PanelHeaderButton--android--hqSgb .vkuiIcon--28{padding:10px}.PanelHeaderButton--vkcom--XYtjH{color:#818c99;color:var(--vkui--color_text_secondary)}.PanelHeaderButton--vkcom--XYtjH>:not(.vkuiInternalCounter){opacity:.7;transition:opacity .3s}.PanelHeaderButton--vkcom--XYtjH.PanelHeaderButton--active--F56Og>:not(.vkuiInternalCounter),.PanelHeaderButton--vkcom--XYtjH.PanelHeaderButton--hover--YOuOU>:not(.vkuiInternalCounter){opacity:1}.PanelHeaderButton--vkcom--XYtjH{align-items:center;display:flex;padding:10px}.PanelHeaderButton--vkcom--XYtjH.PanelHeaderButton--notPrimitive--cA70O{border-radius:50%}.PanelHeaderBack--vkcom--vWeki.PanelHeaderBack--has-label--Ft8WF{padding-right:11px}@media (min-width:768px){.PanelHeaderBack--ios--Lo_1T.PanelHeaderBack--has-label--Ft8WF:not(.PanelHeaderBack--sizeX-compact--k2wGP){padding-right:8px}}.PanelHeaderBack--sizeX-compact--k2wGP.PanelHeaderBack--ios--Lo_1T .PanelHeaderButton__label--HLm3E{display:none}@media (max-width:767.9px){.PanelHeaderBack--sizeX-none--Hgl20.PanelHeaderBack--ios--Lo_1T .PanelHeaderButton__label--HLm3E{display:none}}",""]),i.locals={PanelHeaderButton:"PanelHeaderButton--awVrq","PanelHeaderButton--primitive":"PanelHeaderButton--primitive--n0JJp","PanelHeaderButton--ios":"PanelHeaderButton--ios--rWeMG","PanelHeaderBack--ios":"PanelHeaderBack--ios--Lo_1T","PanelHeaderButton--android":"PanelHeaderButton--android--hqSgb","PanelHeaderButton--notPrimitive":"PanelHeaderButton--notPrimitive--cA70O","PanelHeaderButton--vkcom":"PanelHeaderButton--vkcom--XYtjH","PanelHeaderButton--active":"PanelHeaderButton--active--F56Og","PanelHeaderButton--hover":"PanelHeaderButton--hover--YOuOU","PanelHeaderBack--vkcom":"PanelHeaderBack--vkcom--vWeki","PanelHeaderBack--has-label":"PanelHeaderBack--has-label--Ft8WF","PanelHeaderBack--sizeX-compact":"PanelHeaderBack--sizeX-compact--k2wGP",PanelHeaderButton__label:"PanelHeaderButton__label--HLm3E","PanelHeaderBack--sizeX-none":"PanelHeaderBack--sizeX-none--Hgl20"},n.Z=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Headline/Headline.module.css":function(e,n,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),a=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(a)()(r());i.push([e.id,".Headline--level-1--qhWG1{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_headline1--font_family--regular);font-size:16px;font-size:var(--vkui--font_headline1--font_size--regular);font-weight:500;font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:20px;line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:15px;font-size:var(--vkui--font_headline1--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:15px;font-size:var(--vkui--font_headline1--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_headline2--font_family--regular);font-size:15px;font-size:var(--vkui--font_headline2--font_size--regular);font-weight:500;font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:20px;line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:14px;font-size:var(--vkui--font_headline2--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:14px;font-size:var(--vkui--font_headline2--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline2--line_height--compact)}}",""]),i.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"},n.Z=i},"../../node_modules/mitt/dist/mitt.mjs":function(e,n,t){t.d(n,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(n,t){var o=e.get(n);o?o.push(t):e.set(n,[t])},off:function(n,t){var o=e.get(n);o&&(t?o.splice(o.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var o=e.get(n);o&&o.slice().map(function(e){e(t)}),(o=e.get("*"))&&o.slice().map(function(e){e(n,t)})}}}},"./src/components/ModalPageHeader/ModalPageHeader.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Example:function(){return O}});var o,r,a,i=t("../../node_modules/react/jsx-runtime.js"),l=t("../../node_modules/react/index.js"),s=t("../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js"),d=t("../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js"),u=t("./src/hooks/usePlatform.ts"),c=t("./src/lib/platform.ts"),p=t("./src/storybook/ModalWrapper.tsx"),m=t("./src/storybook/VKUIDecorators.tsx"),f=t("./src/storybook/constants.ts"),v=t("./src/components/Div/Div.tsx"),h=t("./src/components/ModalPage/ModalPage.tsx"),y=t("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),g=t("./src/components/ModalPageHeader/ModalPageHeader.tsx");function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function P(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var j={title:"Modals/ModalPageHeader",component:g.W,parameters:b({},f.tW,f.nB),decorators:[m.Z0]};n.default=j;var _="MODAL_ID",O={render:function(e){var n=(0,u.F)();return(0,i.jsx)(p.A,{modalId:_,children:(0,i.jsx)(h.P,{id:_,header:(0,i.jsx)(g.W,P(b({before:(0,i.jsx)(l.Fragment,{children:(n===c.t.ANDROID||n===c.t.VKCOM)&&(0,i.jsx)(y.C,{children:(0,i.jsx)(s.j,{})})}),after:(0,i.jsxs)(l.Fragment,{children:[(n===c.t.ANDROID||n===c.t.VKCOM)&&(0,i.jsx)(y.C,{children:(0,i.jsx)(d.R,{})}),n===c.t.IOS&&(0,i.jsx)(y.C,{children:"Готово"})]})},e),{children:"Заголовок модальной страницы"})),children:(0,i.jsx)(v.Z,{style:{height:1e3},children:"Example"})})})}};O.parameters=P(b({},O.parameters),{docs:P(b({},null===(o=O.parameters)||void 0===o?void 0:o.docs),{source:b({originalSource:"{\n  render: function Render(args) {\n    const platform = usePlatform();\n    return <ModalWrapper modalId={MODAL_ID}>\n        <ModalPage id={MODAL_ID} header={<ModalPageHeader before={<React.Fragment>\n                  {(platform === Platform.ANDROID || platform === Platform.VKCOM) && <PanelHeaderButton>\n                      <Icon24Cancel />\n                    </PanelHeaderButton>}\n                </React.Fragment>} after={<React.Fragment>\n                  {(platform === Platform.ANDROID || platform === Platform.VKCOM) && <PanelHeaderButton>\n                      <Icon24Done />\n                    </PanelHeaderButton>}\n                  {platform === Platform.IOS && <PanelHeaderButton>Готово</PanelHeaderButton>}\n                </React.Fragment>} {...args}>\n              Заголовок модальной страницы\n            </ModalPageHeader>}>\n          <Div style={{\n          height: 1000\n        }}>Example</Div>\n        </ModalPage>\n      </ModalWrapper>;\n  }\n}"},null===(a=O.parameters)||void 0===a?void 0:null===(r=a.docs)||void 0===r?void 0:r.source)})})},"./src/components/Div/Div.tsx":function(e,n,t){t.d(n,{Z:function(){return g}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("./src/components/RootComponent/RootComponent.tsx"),a=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=t.n(a),l=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),s=t.n(l),d=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),u=t.n(d),c=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=t.n(c),m=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=t.n(m),v=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css"),h={attributes:{class:"vkui-style"}};h.setAttributes=p(),h.insert=u().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),i()(v.Z,h);var y=v.Z&&v.Z.locals?v.Z.locals:void 0,g=function(e){return(0,o.jsx)(r.U,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({baseClassName:y.Div},e))};try{g.displayName="Div",g.__docgenInfo={description:"",displayName:"Div",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Div/Div.tsx#Div"]={docgenInfo:g.__docgenInfo,name:"Div",path:"src/components/Div/Div.tsx#Div"})}catch(e){}},"./src/components/PanelHeaderButton/PanelHeaderButton.tsx":function(e,n,t){t.d(n,{C:function(){return f}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=t("./src/hooks/usePlatform.ts"),i=t("./src/lib/platform.ts"),l=t("./src/lib/warnOnce.ts"),s=t("./src/components/Tappable/Tappable.tsx"),d=t("./src/components/Typography/Text/Text.tsx"),u=t("./src/components/Typography/Title/Title.tsx"),c=t("./src/components/PanelHeaderButton/PanelHeaderButton.module.css"),p={ios:c.Z["PanelHeaderButton--ios"],android:c.Z["PanelHeaderButton--android"],vkcom:c.Z["PanelHeaderButton--vkcom"]},m=function(e){var n=e.primary,t=e.children,r=(0,a.F)();return r===i.t.IOS?(0,o.jsx)(u.D,{Component:"span",level:"3",weight:n?"1":"3",children:t}):(0,o.jsx)(d.x,{weight:r===i.t.VKCOM?void 0:"2",children:t})};(0,l.O)("PanelHeaderButton");var f=function(e){var n,t,l=e.children,d=e.primary,u=void 0!==d&&d,f=e.label,v=e.className,h=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["children","primary","label","className"]),y=(0,r.D$)(l),g=(0,r.D$)(f),b=(0,a.F)();switch(b){case i.t.IOS:n="background",t="opacity";break;case i.t.VKCOM:n=c.Z["PanelHeaderButton--hover"],t=c.Z["PanelHeaderButton--active"];break;default:n="background",t="background"}return(0,o.jsxs)(s.KR,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({Component:h.href?"a":"button"},h),{hoverMode:n,activeEffectDelay:200,activeMode:t,className:(0,r.AK)("vkuiInternalPanelHeaderButton",c.Z.PanelHeaderButton,p.hasOwnProperty(b)?p[b]:p.android,y&&c.Z["PanelHeaderButton--primitive"],!y&&!g&&c.Z["PanelHeaderButton--notPrimitive"],v),children:[y?(0,o.jsx)(m,{primary:u,children:l}):l,g?(0,o.jsx)(m,{primary:u,className:c.Z.PanelHeaderButton__label,children:f}):f]}))};try{f.displayName="PanelHeaderButton",f.__docgenInfo={description:"",displayName:"PanelHeaderButton",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderButton/PanelHeaderButton.tsx#PanelHeaderButton"]={docgenInfo:f.__docgenInfo,name:"PanelHeaderButton",path:"src/components/PanelHeaderButton/PanelHeaderButton.tsx#PanelHeaderButton"})}catch(e){}},"./src/components/Typography/Headline/Headline.tsx":function(e,n,t){t.d(n,{s:function(){return k}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=t("./src/hooks/useAdaptivity.ts"),i=t("./src/lib/adaptivity/constants.ts"),l=t("./src/components/Typography/Typography.tsx"),s=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=t.n(s),u=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=t.n(u),p=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=t.n(p),f=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),v=t.n(f),h=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=t.n(h),g=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Headline/Headline.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=v(),b.insert=m().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=y(),d()(g.Z,b);var P=g.Z&&g.Z.locals?g.Z.locals:void 0;function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var _={1:P["Headline--level-1"],2:P["Headline--level-2"]},O=j({none:P["Headline--sizeY-none"]},i.n$.COMPACT,P["Headline--sizeY-compact"]),k=function(e){var n=e.className,t=e.weight,s=e.level,d=e.Component,u=e.normalize,c=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["className","weight","level","Component","normalize"]),p=(0,a.g)().sizeY,m=void 0===p?"none":p;return(0,o.jsx)(l.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){j(e,n,t[n])})}return e}({Component:void 0===d?"h4":d,normalize:void 0===u||u,weight:void 0===t?"3":t,className:(0,r.AK)(n,m!==i.n$.REGULAR&&O[m],_[void 0===s?"1":s])},c))};try{k.displayName="Headline",k.__docgenInfo={description:"",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"h4"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:k.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(e){}},"./src/storybook/ModalWrapper.tsx":function(e,n,t){t.d(n,{A:function(){return c}});var o=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/react/index.js"),a=t("./src/components/Button/Button.tsx"),i=t("./src/components/ModalRoot/ModalRootAdaptive.tsx"),l=t("./src/components/Placeholder/Placeholder.tsx"),s=t("./src/components/SplitCol/SplitCol.tsx"),d=t("./src/components/SplitLayout/SplitLayout.tsx");function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var c=function(e){var n=e.children,t=e.modalId,c=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.useState(t),2),p=c[0],m=c[1],f=(0,o.jsx)(i.Y,{activeModal:p,onClose:function(){return m(null)},children:n});return(0,o.jsx)(d.K,{modal:f,children:(0,o.jsx)(s.q,{children:(0,o.jsx)(l.V,{stretched:!0,children:(0,o.jsx)(a.z,{onClick:function(){return m(t)},children:"Открыть"})})})})};try{c.displayName="ModalWrapper",c.__docgenInfo={description:"",displayName:"ModalWrapper",props:{modalId:{defaultValue:null,description:"",name:"modalId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook/ModalWrapper.tsx#ModalWrapper"]={docgenInfo:c.__docgenInfo,name:"ModalWrapper",path:"src/storybook/ModalWrapper.tsx#ModalWrapper"})}catch(e){}},"./src/components/PanelHeaderButton/PanelHeaderButton.module.css":function(e,n,t){var o=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(o),a=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),i=t.n(a),l=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),s=t.n(l),d=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),u=t.n(d),c=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(c),m=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/PanelHeaderButton/PanelHeaderButton.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=u(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),r()(m.Z,f),n.Z=m.Z&&m.Z.locals?m.Z.locals:void 0}}]);