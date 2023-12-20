"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5739],{"./src/components/PanelHeaderContext/PanelHeaderContext.stories.tsx":(e,n,t)=>{t.r(n),t.d(n,{Example:()=>W,__namedExportsOrder:()=>G,default:()=>K});var o,a=t("../../node_modules/react/index.js"),r=t("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js"),l=t("../../node_modules/@vkontakte/icons/dist/es6/16/dropdown_16.js"),s=t("../../node_modules/@vkontakte/icons/dist/es6/28/users_outline_28.js"),i=t("../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js"),d=t("../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js"),c=t("./src/storybook/VKUIDecorators.tsx"),u=t("./src/storybook/constants.ts"),m=t("./src/components/Cell/Cell.tsx"),p=t("./src/components/Div/Div.tsx"),f=t("./src/components/Panel/Panel.tsx"),_=t("./src/components/PanelHeader/PanelHeader.tsx"),C=t("./src/components/PanelHeaderBack/PanelHeaderBack.tsx"),P=t("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),x=t("./src/components/PanelHeaderContent/PanelHeaderContent.tsx"),H=t("./src/components/View/View.tsx"),y=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),v=t("./src/hooks/useAdaptivity.ts"),b=t("./src/hooks/useGlobalEventListener.ts"),g=t("./src/hooks/usePlatform.ts"),h=t("./src/hooks/useTimeout.ts"),j=t("./src/lib/dom.tsx"),k=t("./src/lib/useIsomorphicLayoutEffect.ts"),O=t("./src/components/AppRoot/ScrollContext.tsx"),w=t("./src/components/FixedLayout/FixedLayout.tsx"),S=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=t.n(S),A=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),z=t.n(A),D=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),R=t.n(D),X=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),T=t.n(X),M=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=t.n(M),I=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContext/PanelHeaderContext.module.css"),B={attributes:{class:"vkui-style"}};B.setAttributes=T(),B.insert=R().bind(null,"head"),B.domAPI=z(),B.insertStyleElement=N(),E()(I.Z,B);let Z=I.Z&&I.Z.locals?I.Z.locals:void 0;function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function Y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var U=(Y(o={none:Z["PanelHeaderContext--sizeX-none"]},"compact",Z["PanelHeaderContext--sizeX-compact"]),Y(o,"regular",Z["PanelHeaderContext--sizeX-regular"]),o),F=function(e){var n=e.children,t=e.onClose,o=e.opened,r=void 0!==o&&o,l=e.className,s=function(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["children","onClose","opened","className"]),i=(0,j.NG)().document,d=(0,g.F)(),c=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],l=!0,s=!1;try{for(a=a.call(e);!(l=(t=a.next()).done)&&(r.push(t.value),!n||r.length!==n);l=!0);}catch(e){s=!0,o=e}finally{try{l||null==a.return||a.return()}finally{if(s)throw o}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(r),2),u=c[0],m=c[1],p=u&&!r,f=(0,v.g)().sizeX,_=a.useRef(null);(0,k.L)(function(){r&&m(!0)},[r]),(0,O.Pr)("vkcom"!==d&&r),(0,b.J)(i,"click",r&&!p&&function(e){_.current&&!_.current.contains(e.target)&&(e.stopPropagation(),t())},{capture:!0});var C=function(){return m(!1)},P=(0,h.K)(C,200);return a.useEffect(function(){return p?P.set():P.clear()},[P,p]),a.createElement(w.e,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){Y(e,n,t[n])})}return e}({},s),{className:(0,y.AK)(Z.PanelHeaderContext,"ios"===d&&Z["PanelHeaderContext--ios"],r&&Z["PanelHeaderContext--opened"],p&&Z["PanelHeaderContext--closing"],U[void 0===f?"none":f],l),vertical:"top"}),u&&a.createElement("div",{onClick:function(e){e.stopPropagation(),t()},className:Z.PanelHeaderContext__fade}),a.createElement("div",{className:Z.PanelHeaderContext__in,ref:_,onAnimationEnd:p?C:void 0},u&&a.createElement("div",{className:Z.PanelHeaderContext__content},n)))};try{F.displayName="PanelHeaderContext",F.__docgenInfo={description:"",displayName:"PanelHeaderContext",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"VoidFunction"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderContext/PanelHeaderContext.tsx#PanelHeaderContext"]={docgenInfo:F.__docgenInfo,name:"PanelHeaderContext",path:"src/components/PanelHeaderContext/PanelHeaderContext.tsx#PanelHeaderContext"})}catch(e){}function V(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],l=!0,s=!1;try{for(a=a.call(e);!(l=(t=a.next()).done)&&(r.push(t.value),!n||r.length!==n);l=!0);}catch(e){s=!0,o=e}finally{try{l||null==a.return||a.return()}finally{if(s)throw o}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return V(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}let K={title:"Layout/PanelHeaderContext",component:F,parameters:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({},u.tW,u.nB),decorators:[c.Z0]};var W={render:function(){var e=q(a.useState(!0),2),n=e[0],t=e[1],o=q(a.useState("all"),2),c=o[0],u=o[1],y=function(){t(function(e){return!e})},v=function(e){u(e.currentTarget.dataset.mode),requestAnimationFrame(y)};return a.createElement(H.G,{id:"main",activePanel:"panel1"},a.createElement(f.s,{id:"panel1"},a.createElement(_.V,{before:a.createElement(C.b,null),after:a.createElement(P.C,null,a.createElement(r.P,null))},a.createElement(x.S,{aside:a.createElement(l.T,{style:{transform:"rotate(".concat(n?"180deg":"0",")")}}),onClick:y},"Communities")),a.createElement(F,{opened:n,onClose:y},a.createElement(m.b,{before:a.createElement(s.T,null),after:"all"===c?a.createElement(i.R,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:v,"data-mode":"all"},"Communities"),a.createElement(m.b,{before:a.createElement(d.R,null),after:"managed"===c?a.createElement(i.R,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:v,"data-mode":"managed"},"Managed Communities")),a.createElement(p.Z,null,"PanelHeaderContext")))}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [contextOpened, setContextOpened] = React.useState(true);\n    const [mode, setMode] = React.useState<string | undefined>(\'all\');\n    const toggleContext = () => {\n      setContextOpened(prev => !prev);\n    };\n    const select = (e: React.MouseEvent<HTMLElement>) => {\n      const mode = e.currentTarget.dataset.mode;\n      setMode(mode);\n      requestAnimationFrame(toggleContext);\n    };\n    return <View id="main" activePanel="panel1">\n        <Panel id="panel1">\n          <PanelHeader before={<PanelHeaderBack />} after={<PanelHeaderButton>\n                <Icon28AddOutline />\n              </PanelHeaderButton>}>\n            <PanelHeaderContent aside={<Icon16Dropdown style={{\n            transform: `rotate(${contextOpened ? \'180deg\' : \'0\'})`\n          }} />} onClick={toggleContext}>\n              Communities\n            </PanelHeaderContent>\n          </PanelHeader>\n          <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>\n            <Cell before={<Icon28UsersOutline />} after={mode === \'all\' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="all">\n              Communities\n            </Cell>\n            <Cell before={<Icon28SettingsOutline />} after={mode === \'managed\' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="managed">\n              Managed Communities\n            </Cell>\n          </PanelHeaderContext>\n          <Div>PanelHeaderContext</Div>\n        </Panel>\n      </View>;\n  }\n}',...W.parameters?.docs?.source}}};let G=["Example"]},"../../node_modules/@vkontakte/icons/dist/es6/16/dropdown_16.js":(e,n,t)=>{t.d(n,{T:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Dropdown","dropdown_16","0 0 16 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12" id="dropdown_16"><path fill="currentColor" d="M4.454 3.691a.9.9 0 0 0-1.108 1.418l4.096 3.203a.9.9 0 0 0 1.109 0l4.1-3.203a.9.9 0 1 0-1.109-1.418L7.997 6.46l-3.543-2.77Z" /></symbol>',16,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js":(e,n,t)=>{t.d(n,{R:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Done","done_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="done_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="m9 16.2-3.5-3.5a.99.99 0 1 0-1.4 1.4l4.193 4.193a1 1 0 0 0 1.414 0L20.3 7.7a.99.99 0 0 0-1.4-1.4L9 16.2" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":(e,n,t)=>{t.d(n,{P:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js":(e,n,t)=>{t.d(n,{R:()=>o});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28SettingsOutline","settings_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_outline_28"><g fill="none" fill-rule="nonzero"><path d="M0 0h28v28H0z" /><path fill="currentColor" d="M15.148 2.04c.428.07.832.233 1.195.523.595.476.878 1.076 1.097 1.952.056.224.153.486.275.74.278.117.55.249.815.393.262-.065.513-.15.714-.244 1.412-.658 2.597-.623 3.567.423.082.089.131.148.238.28l.629.776c.17.21.241.305.348.482.692 1.152.422 2.224-.452 3.386a4.112 4.112 0 0 0-.417.71c.078.283.143.57.195.86.222.178.46.334.668.441.804.41 1.325.821 1.655 1.508.202.42.27.85.24 1.282a3.48 3.48 0 0 1-.106.64l-.225.975c-.065.285-.099.41-.185.622a2.515 2.515 0 0 1-.778 1.047c-.598.473-1.246.614-2.148.63-.229.004-.502.04-.773.1-.177.243-.364.478-.563.704.003.275.03.544.077.764.187.884.196 1.547-.13 2.236-.2.42-.491.744-.845.993a3.48 3.48 0 0 1-.565.32l-.899.44a3.48 3.48 0 0 1-.6.247c-.414.126-.85.156-1.303.054-.744-.167-1.261-.582-1.842-1.273a4.103 4.103 0 0 0-.591-.561 9.627 9.627 0 0 1-.878 0c-.228.18-.437.378-.591.56-.58.692-1.098 1.107-1.842 1.274a2.515 2.515 0 0 1-1.303-.054 3.48 3.48 0 0 1-.6-.248l-.899-.438a7.152 7.152 0 0 1-.185-.093c-1.312-.683-1.696-1.847-1.355-3.457.047-.22.074-.49.077-.764a9.535 9.535 0 0 1-.563-.705 4.066 4.066 0 0 0-.773-.099c-.902-.016-1.55-.157-2.148-.63a2.515 2.515 0 0 1-.778-1.047 3.48 3.48 0 0 1-.185-.622l-.225-.974a3.381 3.381 0 0 1-.109-.681 2.509 2.509 0 0 1 .296-1.346c.339-.629.84-1.015 1.602-1.404a4.09 4.09 0 0 0 .668-.441c.052-.29.117-.577.195-.86a4.112 4.112 0 0 0-.417-.71c-.874-1.162-1.144-2.234-.452-3.386.107-.177.179-.273.348-.482l.63-.777c.106-.131.155-.19.237-.279.97-1.046 2.155-1.08 3.567-.423.201.093.452.18.714.244.265-.144.537-.276.815-.394.122-.253.219-.515.275-.74.219-.875.502-1.475 1.097-1.95.363-.291.767-.455 1.195-.523.18-.03.3-.038.49-.04L14.5 2c.292 0 .422.005.648.04M14.586 4H13.5c-.5 0-.75 0-1 1a6.347 6.347 0 0 1-.836 1.87 7.47 7.47 0 0 0-1.8.872 6.35 6.35 0 0 1-1.952-.525c-.934-.435-1.092-.24-1.406.148l-.63.777c-.314.389-.472.583.148 1.406.35.464.721 1.15.937 1.857a7.458 7.458 0 0 0-.429 1.894 6.345 6.345 0 0 1-1.643 1.245c-.918.468-.862.712-.75 1.199l.225.974c.113.487.169.731 1.2.75.57.01 1.323.135 2.003.39.345.575.765 1.1 1.247 1.56a6.35 6.35 0 0 1-.072 2.032c-.213 1.008.011 1.118.46 1.337l.9.439c.449.219.674.328 1.337-.46a6.343 6.343 0 0 1 1.59-1.327 7.571 7.571 0 0 0 1.942 0 6.343 6.343 0 0 1 1.59 1.326c.663.79.888.68 1.337.46l.9-.438c.449-.219.673-.329.46-1.337a6.35 6.35 0 0 1-.072-2.031 7.533 7.533 0 0 0 1.247-1.56 6.348 6.348 0 0 1 2.003-.391c1.031-.019 1.087-.263 1.2-.75l.225-.974c.112-.487.168-.73-.75-1.2a6.345 6.345 0 0 1-1.643-1.244 7.458 7.458 0 0 0-.43-1.894 6.342 6.342 0 0 1 .938-1.857c.62-.823.462-1.017.148-1.406l-.63-.777c-.314-.389-.472-.583-1.406-.148a6.35 6.35 0 0 1-1.952.525 7.47 7.47 0 0 0-1.8-.871A6.347 6.347 0 0 1 15.5 5c-.235-.941-.47-.997-.914-1M14 9.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Div/Div.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(o),r=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(r)()(a());l.push([e.id,".Div--jWBVN{padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}",""]),l.locals={Div:"Div--jWBVN"};let s=l},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContent/PanelHeaderContent.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(o),r=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(r)()(a());l.push([e.id,".PanelHeaderContent--MqYO8{align-items:center;box-sizing:border-box;display:flex;font-family:var(--vkui--font_family_base);height:100%;justify-content:flex-start;line-height:normal;max-width:100%}.PanelHeaderContent__before--HWMCZ{flex-shrink:0;margin-right:12px}.PanelHeaderContent__in--S0Mkj{align-items:flex-start;display:flex;flex-direction:column;flex-grow:1;height:100%;justify-content:center;min-width:0}.PanelHeaderContent__children-in--k2Xl0,.PanelHeaderContent__childrenText--bZBrH,.PanelHeaderContent__status--iX7UP{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.PanelHeaderContent__status--iX7UP{color:var(--vkui--color_text_secondary);margin-top:1px;max-width:100%;order:1}.PanelHeaderContent__children--eg0La{align-items:center;display:flex;max-width:100%}.PanelHeaderContent__children-in--k2Xl0{flex-grow:0;min-width:0}.PanelHeaderContent__aside--vJFXy{align-items:center;color:var(--vkui--color_icon_accent);display:flex;justify-content:flex-start;margin-left:2px}.PanelHeaderContent__width--LN74e{width:1000px}.PanelHeaderContent__in--centered--xoBj0{align-items:center}.PanelHeaderContent--ios--qVDio .PanelHeaderContent__children-in--k2Xl0{font-family:var(--vkui--font_family_accent);font-size:21px;font-weight:500;line-height:var(--vkui_internal--panel_header_height)}.PanelHeaderContent--android--wRw_h .PanelHeaderContent__children-in--k2Xl0{font-family:var(--vkui--font_family_accent);font-size:23px;font-weight:500;line-height:var(--vkui_internal--panel_header_height)}.vkuiInternalPanelHeader--no-before .PanelHeaderContent--vkcom--zKWjz{padding-left:16px}.PanelHeaderContent--sizeY-compact--qo58X:not(.PanelHeaderContent--vkcom--zKWjz) .PanelHeaderContent__children-in--k2Xl0{font-size:20px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.PanelHeaderContent--sizeY-none--ls3mr:not(.PanelHeaderContent--vkcom--zKWjz) .PanelHeaderContent__children-in--k2Xl0{font-size:20px}}",""]),l.locals={PanelHeaderContent:"PanelHeaderContent--MqYO8",PanelHeaderContent__before:"PanelHeaderContent__before--HWMCZ",PanelHeaderContent__in:"PanelHeaderContent__in--S0Mkj","PanelHeaderContent__children-in":"PanelHeaderContent__children-in--k2Xl0",PanelHeaderContent__childrenText:"PanelHeaderContent__childrenText--bZBrH",PanelHeaderContent__status:"PanelHeaderContent__status--iX7UP",PanelHeaderContent__children:"PanelHeaderContent__children--eg0La",PanelHeaderContent__aside:"PanelHeaderContent__aside--vJFXy",PanelHeaderContent__width:"PanelHeaderContent__width--LN74e","PanelHeaderContent__in--centered":"PanelHeaderContent__in--centered--xoBj0","PanelHeaderContent--ios":"PanelHeaderContent--ios--qVDio","PanelHeaderContent--android":"PanelHeaderContent--android--wRw_h","PanelHeaderContent--vkcom":"PanelHeaderContent--vkcom--zKWjz","PanelHeaderContent--sizeY-compact":"PanelHeaderContent--sizeY-compact--qo58X","PanelHeaderContent--sizeY-none":"PanelHeaderContent--sizeY-none--ls3mr"};let s=l},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContext/PanelHeaderContext.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(o),r=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(r)()(a());l.push([e.id,".PanelHeaderContext--ZdWHR{z-index:var(--vkui_internal--z_index_panel_header_context)}.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--opened--OHMZF{height:100%;width:100%}.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--opened--OHMZF{height:auto}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--opened--OHMZF{height:auto}}.PanelHeaderContext__in--MufTw{box-sizing:border-box;left:0;padding:8px;pointer-events:none;position:absolute;width:100%}.PanelHeaderContext__fade--NtCLo{background:rgba(0,0,0,.4);display:none;height:100%;left:0;position:absolute;top:0;width:100%}.PanelHeaderContext--sizeX-compact--lZYFw .PanelHeaderContext__fade--NtCLo{display:block}@media (max-width:767.9px){.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__fade--NtCLo{display:block}}.PanelHeaderContext--opened--OHMZF .PanelHeaderContext__fade--NtCLo{animation:animation-panelheadercontext-fade-in--PhfhU .2s ease}.PanelHeaderContext--closing--U1Xrk .PanelHeaderContext__fade--NtCLo{animation:animation-panelheadercontext-fade-out--XC2Na .2s ease}.PanelHeaderContext--opened--OHMZF .PanelHeaderContext__in--MufTw{animation:animation-panelheadercontext-translate-in--U7OfA .2s ease;pointer-events:auto}.PanelHeaderContext--closing--U1Xrk .PanelHeaderContext__in--MufTw{animation:animation-panelheadercontext-translate-out--tkQ0b .2s ease}.PanelHeaderContext__content--o2C9j{background:var(--vkui--color_background_content);overflow:hidden}.PanelHeaderContext--ios--Psolf .PanelHeaderContext__in--MufTw{padding:0}.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--ios--Psolf .PanelHeaderContext__content--o2C9j,.PanelHeaderContext--ZdWHR:not(.PanelHeaderContext--ios--Psolf) .PanelHeaderContext__content--o2C9j{border-radius:12px;padding:8px 0}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--ios--Psolf .PanelHeaderContext__content--o2C9j{border-radius:12px;padding:8px 0}}.PanelHeaderContext--sizeX-regular--ijBpw .PanelHeaderContext__in--MufTw{padding:12px 8px}.PanelHeaderContext--sizeX-regular--ijBpw .PanelHeaderContext__content--o2C9j{border-radius:12px;box-shadow:0 0 4px rgba(0,0,0,.08),0 8px 8px rgba(0,0,0,.16)}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__in--MufTw{padding:12px 8px}.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__content--o2C9j{border-radius:12px;box-shadow:0 0 4px rgba(0,0,0,.08),0 8px 8px rgba(0,0,0,.16)}}@keyframes animation-panelheadercontext-translate-in--U7OfA{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes animation-panelheadercontext-translate-out--tkQ0b{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes animation-panelheadercontext-fade-in--PhfhU{0%{opacity:0}to{opacity:1}}@keyframes animation-panelheadercontext-fade-out--XC2Na{0%{opacity:1}to{opacity:0}}",""]),l.locals={PanelHeaderContext:"PanelHeaderContext--ZdWHR","PanelHeaderContext--closing":"PanelHeaderContext--closing--U1Xrk","PanelHeaderContext--opened":"PanelHeaderContext--opened--OHMZF","PanelHeaderContext--sizeX-regular":"PanelHeaderContext--sizeX-regular--ijBpw","PanelHeaderContext--sizeX-none":"PanelHeaderContext--sizeX-none--r5fbx",PanelHeaderContext__in:"PanelHeaderContext__in--MufTw",PanelHeaderContext__fade:"PanelHeaderContext__fade--NtCLo","PanelHeaderContext--sizeX-compact":"PanelHeaderContext--sizeX-compact--lZYFw","animation-panelheadercontext-fade-in":"animation-panelheadercontext-fade-in--PhfhU","animation-panelheadercontext-fade-out":"animation-panelheadercontext-fade-out--XC2Na","animation-panelheadercontext-translate-in":"animation-panelheadercontext-translate-in--U7OfA","animation-panelheadercontext-translate-out":"animation-panelheadercontext-translate-out--tkQ0b",PanelHeaderContext__content:"PanelHeaderContext__content--o2C9j","PanelHeaderContext--ios":"PanelHeaderContext--ios--Psolf"};let s=l},"./src/components/Div/Div.tsx":(e,n,t)=>{t.d(n,{Z:()=>x});var o=t("../../node_modules/react/index.js"),a=t("./src/components/RootComponent/RootComponent.tsx"),r=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(r),s=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),i=t.n(s),d=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=t.n(d),u=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=t.n(u),p=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=t.n(p),_=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Div/Div.module.css"),C={attributes:{class:"vkui-style"}};C.setAttributes=m(),C.insert=c().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=f(),l()(_.Z,C);let P=_.Z&&_.Z.locals?_.Z.locals:void 0;var x=function(e){return o.createElement(a.U,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({baseClassName:P.Div},e))};try{x.displayName="Div",x.__docgenInfo={description:"",displayName:"Div",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Div/Div.tsx#Div"]={docgenInfo:x.__docgenInfo,name:"Div",path:"src/components/Div/Div.tsx#Div"})}catch(e){}},"./src/components/PanelHeaderContent/PanelHeaderContent.tsx":(e,n,t)=>{t.d(n,{S:()=>S});var o=t("../../node_modules/react/index.js"),a=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=t("./src/hooks/useAdaptivity.ts"),l=t("./src/hooks/usePlatform.ts"),s=t("./src/components/RootComponent/RootComponent.tsx"),i=t("./src/components/Tappable/Tappable.tsx"),d=t("./src/components/Typography/Footnote/Footnote.tsx"),c=t("./src/components/Typography/Text/Text.tsx"),u=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=t.n(u),p=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=t.n(p),_=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),C=t.n(_),P=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),x=t.n(P),H=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=t.n(H),v=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContent/PanelHeaderContent.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=x(),b.insert=C().bind(null,"head"),b.domAPI=f(),b.insertStyleElement=y(),m()(v.Z,b);let g=v.Z&&v.Z.locals?v.Z.locals:void 0;function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function j(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var k={ios:g["PanelHeaderContent--ios"],android:g["PanelHeaderContent--android"],vkcom:g["PanelHeaderContent--vkcom"]},O={none:g["PanelHeaderContent--sizeY-none"],compact:g["PanelHeaderContent--sizeY-compact"]},w=function(e){var n=e.hasStatus,t=e.hasBefore,a=e.children,r=(0,l.F)();return n||t?o.createElement(c.x,{className:g.PanelHeaderContent__childrenText,Component:"div",weight:"vkcom"===r?"2":void 0},a):o.createElement("div",{className:g["PanelHeaderContent__children-in"]},a)},S=function(e){var n=e.aside,t=e.status,c=e.before,u=e.children,m=e.onClick,p=function(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["aside","status","before","children","onClick"]),f=(0,r.g)().sizeY,_=void 0===f?"none":f,C=m?i.K:"div",P=m?{}:p,x=(0,l.F)(),H=m?j(h({},p),{onClick:m,activeEffectDelay:200,hasActive:"ios"===x,activeMode:"opacity"}):{};return o.createElement(s.U,j(h({},P),{baseClassName:(0,a.AK)(g.PanelHeaderContent,k.hasOwnProperty(x)?k[x]:k.android,"regular"!==_&&O[_])}),(0,a.p7)(c)&&o.createElement("div",{className:g.PanelHeaderContent__before},c),o.createElement(C,j(h({},H),{className:(0,a.AK)(g.PanelHeaderContent__in,!c&&"android"!==x&&g["PanelHeaderContent__in--centered"])}),(0,a.p7)(t)&&o.createElement(d.w,{className:g.PanelHeaderContent__status},t),o.createElement("div",{className:g.PanelHeaderContent__children},o.createElement(w,{hasStatus:(0,a.p7)(t),hasBefore:(0,a.p7)(c)},u),(0,a.p7)(n)&&o.createElement("div",{className:g.PanelHeaderContent__aside},n)),(0,a.p7)(c)&&o.createElement("div",{className:g.PanelHeaderContent__width})))};try{S.displayName="PanelHeaderContent",S.__docgenInfo={description:"",displayName:"PanelHeaderContent",props:{aside:{defaultValue:null,description:"",name:"aside",required:!1,type:{name:"ReactNode"}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderContent/PanelHeaderContent.tsx#PanelHeaderContent"]={docgenInfo:S.__docgenInfo,name:"PanelHeaderContent",path:"src/components/PanelHeaderContent/PanelHeaderContent.tsx#PanelHeaderContent"})}catch(e){}}}]);