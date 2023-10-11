"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1975],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{De:function(){return g}});var a,u=n("../../node_modules/react/index.js");function l(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}var d=function(){function e(t){var n=t.content;l(this,e),r(this,"isMounted",!1),r(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return s(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),f="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,e),r(this,"symbols",new Map),r(this,"config",{attrs:{xmlns:f,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),r(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return s(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=d.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(f,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var y="__SVG_SPRITE_NODE__";a=new p({attrs:{id:y}});var v=function(){var e=document.getElementById(y);e?a.attach(e):a.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else a=null;var b=m?u.useLayoutEffect:u.useEffect,h=function(e){var t=e.width,n=void 0===t?0:t,r=e.height,a=void 0===r?0:r,l=e.viewBox,c=e.id,s=e.className,d=e.fill,f=e.getRootRef,p=e.style,m=e.title,y=e.children,v=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),b=o({width:n,height:a},void 0===p?{}:p);return u.createElement("svg",i(o({"aria-hidden":"true",display:"block"},v),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,a)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(a),"vkuiIcon--".concat(c),void 0===s?"":s].join(" ").trim(),viewBox:l,width:n,height:a,style:b,ref:f}),m&&u.createElement("title",null,m),u.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:d}},y))};function g(e,t,n,r,l,c,s,f){var p=function(){m||(!function(e){a&&a.add(e)}(new d({content:r})),m=!0)},m=!1,y=function(e){var t={};return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),v=function(e){return b(p,[]),s&&y("Иконка устарела"+(f?". Замените на ".concat(f):"")),u.createElement(h,i(o({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?c:+e.height}))};return v.mountIcon=p,v.displayName=e,v}},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js":function(e,t,n){n.d(t,{P:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="spinner_16"><path fill="currentColor" fill-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js":function(e,t,n){n.d(t,{h:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js":function(e,t,n){n.d(t,{X:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js":function(e,t,n){n.d(t,{C:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" /></symbol>',44,44,!1,void 0)},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(e){e(n)}),(r=e.get("*"))&&r.slice().map(function(e){e(t,n)})}}}},"./src/components/File/File.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return y},default:function(){return m}});var r,o,i,a=n("../../tools/storybook-addon-cartesian/src/index.tsx"),u=n("./src/storybook/constants.ts"),l=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var c=n("./src/components/Button/Button.tsx"),s=n("./src/components/VisuallyHidden/VisuallyHidden.tsx"),d=function(e){var t=e.children,n=e.align,r=e.size,o=e.mode,i=e.stretched,a=e.before,u=e.after,d=e.loading,f=e.className,p=e.style,m=e.getRef,y=e.getRootRef,v=e.appearance,b=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children","align","size","mode","stretched","before","after","loading","className","style","getRef","getRootRef","appearance"]);return(0,l.jsxs)(c.z,{Component:"label",align:void 0===n?"left":n,className:f,stretched:i,mode:o,appearance:v,size:r,before:a,after:u,loading:d,style:p,getRootRef:y,disabled:b.disabled,children:[(0,l.jsx)(s.T,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},b),{Component:"input",type:"file",getRootRef:m})),void 0===t?"Выберите файл":t]})};try{d.displayName="File",d.__docgenInfo={description:"",displayName:"File",props:{mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"outline"'},{value:'"secondary"'},{value:'"primary"'},{value:'"tertiary"'}]}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"",name:"after",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"positive"'},{value:'"negative"'},{value:'"overlay"'},{value:'"accent-invariable"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},stretched:{defaultValue:null,description:"",name:"stretched",required:!1,type:{name:"boolean"}},disableSpinnerAnimation:{defaultValue:null,description:"",name:"disableSpinnerAnimation",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/File/File.tsx#File"]={docgenInfo:d.__docgenInfo,name:"File",path:"src/components/File/File.tsx#File"})}catch(e){}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var m={title:"Forms/File",component:d,parameters:u.tW,decorators:[a.nW]},y={};y.parameters=p(f({},y.parameters),{docs:p(f({},null===(r=y.parameters)||void 0===r?void 0:r.docs),{source:f({originalSource:"{}"},null===(i=y.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"../../tools/storybook-addon-cartesian/src/index.tsx":function(e,t,n){n.d(t,{nW:function(){return l}});var r=n("../../node_modules/react/jsx-runtime.js");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}n("../../node_modules/react/index.js");var u={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},l=function(e,t){var n=t.argTypes,l=t.args.cartesian,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t.args,["cartesian"]);if(l){var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,n){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,u=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n,2),u=r[0],l=r[1],c=[];return e.forEach(function(e){l.forEach(function(n){c.push(function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(a({},e),i({},u,t[u].mapping?t[u].mapping[n]:n)))})}),c},[{}])}(l,n);return(0,r.jsx)("div",{style:u,children:s.map(function(t,n){return(0,r.jsx)(e,{args:a({},c,t)},n)})})}return(0,r.jsx)(e,{args:c})}}}]);