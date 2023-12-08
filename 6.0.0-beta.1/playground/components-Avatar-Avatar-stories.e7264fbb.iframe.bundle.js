"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5989],{"./src/components/Avatar/Avatar.stories.tsx":(e,r,n)=>{n.r(r),n.d(r,{Playground:()=>x,WithBadge:()=>B,WithOverlay:()=>w,__namedExportsOrder:()=>P,default:()=>h});var t,o,a,s,i,l,c,d,u,p=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var v=n("../../tools/storybook-addon-cartesian/src/index.tsx"),g=n("./src/storybook/constants.ts"),y=n("./src/testing/icons.tsx"),O=n("./src/testing/mock.ts"),b=n("./src/components/ImageBase/types.ts"),m=n("./src/components/Avatar/Avatar.tsx");function j(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){!function(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}(e,r,n[r])})}return e}function f(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}let h={title:"Blocks/Avatar",component:m.q,parameters:g.tW,argTypes:{size:{control:{type:"select"},options:b.R},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:(0,p.jsx)(m.q.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:(0,p.jsx)(m.q.BadgeWithPreset,{preset:"online-mobile"}),Icon:(0,p.jsx)(m.q.Badge,{children:(0,p.jsx)(y.BZ,{})})},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:(0,p.jsx)(m.q.Overlay,{children:(0,p.jsx)(y.w9,{})}),Always:(0,p.jsx)(m.q.Overlay,{visibility:"always",children:(0,p.jsx)(y.w9,{})})},control:{type:"inline-radio"}}},decorators:[v.nW]};var x={render:function(e){var r=e.badge,n=e.overlay,t=e.children,o=e.size,a=void 0===o?48:o,s=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["badge","overlay","children","size"]);return(0,p.jsxs)(m.q,f(j({src:s.initials?void 0:(0,O.E$)("user_id34")},s),{size:a,children:[a>=24&&r,n,t]}))}},B=f(j({},x),{args:{children:(0,p.jsx)(m.q.Badge,{children:(0,p.jsx)(y.BZ,{})})}}),w=f(j({},x),{args:{children:(0,p.jsx)(m.q.Overlay,{children:(0,p.jsx)(y.w9,{})})}});x.parameters=f(j({},x.parameters),{docs:f(j({},null===(t=x.parameters)||void 0===t?void 0:t.docs),{source:j({originalSource:"{\n  render: ({\n    badge,\n    overlay,\n    children,\n    size = 48,\n    ...args\n  }) => <Avatar src={args.initials ? undefined : getAvatarUrl('user_id34')} {...args} size={size}>\n      {size >= 24 && badge}\n      {overlay}\n      {children}\n    </Avatar>\n}"},null===(a=x.parameters)||void 0===a?void 0:null===(o=a.docs)||void 0===o?void 0:o.source)})}),B.parameters=f(j({},B.parameters),{docs:f(j({},null===(s=B.parameters)||void 0===s?void 0:s.docs),{source:j({originalSource:"{\n  ...Playground,\n  args: {\n    children: <Avatar.Badge>\n        <IconExampleForBadgeBasedOnImageBaseSize />\n      </Avatar.Badge>\n  }\n}"},null===(l=B.parameters)||void 0===l?void 0:null===(i=l.docs)||void 0===i?void 0:i.source)})}),w.parameters=f(j({},w.parameters),{docs:f(j({},null===(c=w.parameters)||void 0===c?void 0:c.docs),{source:j({originalSource:"{\n  ...Playground,\n  args: {\n    children: <Avatar.Overlay>\n        <IconExampleForOverlayBasedOnImageBaseSize />\n      </Avatar.Overlay>\n  }\n}"},null===(u=w.parameters)||void 0===u?void 0:null===(d=u.docs)||void 0===d?void 0:d.source)})});let P=["Playground","WithBadge","WithOverlay"]}}]);