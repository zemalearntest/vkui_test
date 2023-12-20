"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6285],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CalendarRange/CalendarRange.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var a=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),l=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(l)()(r());o.push([e.id,".CalendarRange--r0fHe{background:var(--vkui--color_background_modal);border:.5px solid var(--vkui--color_separator_primary);border-radius:8px;box-shadow:var(--vkui--elevation1);box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-around;padding:12px;width:610px}.CalendarRange__inner--MC9iy{display:flex;flex-direction:column;flex-grow:1}.CalendarRange__inner--MC9iy:not(:last-child){margin-right:24px}.CalendarRange__header--ZjxAa{margin-bottom:4px}",""]),o.locals={CalendarRange:"CalendarRange--r0fHe",CalendarRange__inner:"CalendarRange__inner--MC9iy",CalendarRange__header:"CalendarRange__header--ZjxAa"};let s=o},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Spinner/Spinner.module.css":(e,n,t)=>{t.d(n,{Z:()=>s});var a=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),l=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(l)()(r());o.push([e.id,".Spinner--aVS7j{align-items:center;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}",""]),o.locals={Spinner:"Spinner--aVS7j"};let s=o},"./src/components/Spinner/Spinner.module.css":(e,n,t)=>{t.d(n,{Z:()=>b});var a=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(a),l=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),o=t.n(l),s=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),i=t.n(s),u=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),d=t.n(u),c=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(c),m=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Spinner/Spinner.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=p(),r()(m.Z,y);let b=m.Z&&m.Z.locals?m.Z.locals:void 0},"./src/components/CalendarRange/CalendarRange.tsx":(e,n,t)=>{t.d(n,{a:()=>_});var a=t("../../node_modules/react/index.js"),r=t("./src/hooks/useCalendar.ts"),l=t("./src/lib/calendar.ts"),o=t("./src/lib/date.ts"),s=t("./src/components/CalendarDays/CalendarDays.tsx"),i=t("./src/components/CalendarHeader/CalendarHeader.tsx"),u=t("./src/components/RootComponent/RootComponent.tsx"),d=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(d),p=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),m=t.n(p),y=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),b=t.n(y),f=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),g=t.n(f),v=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=t.n(v),S=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CalendarRange/CalendarRange.module.css"),C={attributes:{class:"vkui-style"}};C.setAttributes=g(),C.insert=b().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=h(),c()(S.Z,C);let j=S.Z&&S.Z.locals?S.Z.locals:void 0;function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var D=function(e,n){return null!=n&&!!n[0]&&!!n[1]&&!!(0,o._w)(e,(0,o.b7)(n[0]),(0,o.iX)(n[1]))},_=function(e){var n=e.value,t=e.onChange,d=e.disablePast,c=e.disableFuture,p=e.shouldDisableDate,m=(e.onClose,e.weekStartsOn),y=void 0===m?1:m,b=e.disablePickers,f=e.prevMonthLabel,g=void 0===f?"Предыдущий месяц":f,v=e.nextMonthLabel,h=void 0===v?"Следующий месяц":v,S=e.changeMonthLabel,C=void 0===S?"Изменить месяц":S,_=e.changeYearLabel,k=void 0===_?"Изменить год":_,R=e.changeDayLabel,w=void 0===R?"Изменить день":R,x=e.prevMonthIcon,P=e.nextMonthIcon,M=e.listenDayChangesForUpdate,E=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["value","onChange","disablePast","disableFuture","shouldDisableDate","onClose","weekStartsOn","disablePickers","prevMonthLabel","nextMonthLabel","changeMonthLabel","changeYearLabel","changeDayLabel","prevMonthIcon","nextMonthIcon","listenDayChangesForUpdate"]),A=(0,r.G)({value:n,disableFuture:c,disablePast:d,shouldDisableDate:p}),L=A.viewDate,I=A.setViewDate,V=A.setPrevMonth,q=A.setNextMonth,N=A.focusedDay,T=A.setFocusedDay,F=A.isDayFocused,H=A.isDayDisabled,K=A.resetSelectedDay,Z=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,a,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(l.push(t.value),!n||l.length!==n);o=!0);}catch(e){s=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(),2),B=Z[0],U=Z[1],Y=(0,o.zI)(L,1),z=a.useCallback(function(e){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&e.preventDefault();var t=(0,l.it)(null!=N?N:null==n?void 0:n[1],e.key);!t||(0,o.xj)(t,L)||(0,o.xj)(t,(0,o.zI)(L,1))||I(t),T(t)},[N,T,I,n,L]),X=a.useCallback(function(e){if(!n||null===n[0]&&null===n[1])return[e,null];var t=n[0],a=n[1];return t&&(0,o.KC)(e,t)||a&&(0,o.KC)(e,a)?[(0,l.VB)(e,t),(0,l.VB)(e,a)]:t&&(0,o.RR)(e,t)?[(0,l.VB)(e,t),a]:t&&(0,o.Ax)(e,t)?[t,(0,l.VB)(e,a)]:n},[n]),W=a.useCallback(function(e){null==t||t(X(e)),U(void 0)},[t,X]),$=a.useCallback(function(e){return D(e,n)},[n]),G=a.useCallback(function(e){return!!((null==n?void 0:n[0])&&(0,o.KC)(e,n[0])||(null==n?void 0:n[1])&&(0,o.KC)(e,n[1]))},[n]),J=a.useCallback(function(e,t){return!!((0,l.Rw)(e,t)||(null==n?void 0:n[1])&&(0,o.KC)(e,n[1]))},[n]),Q=a.useCallback(function(e,n){return!!((0,l.Rw)(e,n)||(null==B?void 0:B[1])&&(0,o.KC)(e,B[1]))},[B]),ee=a.useCallback(function(e,t){return!!((0,l.Dk)(e,t)||(null==n?void 0:n[0])&&(0,o.KC)(e,n[0]))},[n]),en=a.useCallback(function(e,n){return!!((0,l.Dk)(e,n)||(null==B?void 0:B[0])&&(0,o.KC)(e,B[0]))},[B]),et=a.useCallback(function(e){return U(X(e))},[U,X]),ea=a.useCallback(function(){return U(void 0)},[U]),er=a.useCallback(function(e){return D(e,B)},[B]);return a.createElement(u.U,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({},E),{baseClassName:j.CalendarRange}),a.createElement("div",{className:j.CalendarRange__inner},a.createElement(i.v,{viewDate:L,onChange:I,nextMonth:!1,onPrevMonth:V,disablePickers:b,className:j.CalendarRange__header,prevMonthLabel:g,nextMonthLabel:h,changeMonthLabel:C,changeYearLabel:k,prevMonthIcon:x}),a.createElement(s.E,{viewDate:L,value:n,weekStartsOn:y,onKeyDown:z,isDayFocused:F,onDayChange:W,isDaySelected:$,isDayActive:G,isDaySelectionEnd:J,isDaySelectionStart:ee,isDayHinted:er,onDayEnter:et,onDayLeave:ea,isHintedDaySelectionEnd:Q,isHintedDaySelectionStart:en,isDayDisabled:H,listenDayChangesForUpdate:M,"aria-label":w})),a.createElement("div",{className:j.CalendarRange__inner},a.createElement(i.v,{viewDate:Y,onChange:I,prevMonth:!1,onNextMonth:q,disablePickers:b,className:j.CalendarRange__header,prevMonthLabel:g,nextMonthLabel:h,changeMonthLabel:C,changeYearLabel:k,nextMonthIcon:P}),a.createElement(s.E,{viewDate:Y,value:n,weekStartsOn:y,"aria-label":w,onKeyDown:z,isDayFocused:F,onDayChange:W,isDaySelected:$,isDayActive:G,isDaySelectionEnd:J,isDaySelectionStart:ee,isDayHinted:er,onDayEnter:et,onDayLeave:ea,isHintedDaySelectionEnd:Q,isHintedDaySelectionStart:en,isDayDisabled:H,listenDayChangesForUpdate:M,tabIndex:0,onBlur:K})))};try{_.displayName="CalendarRange",_.__docgenInfo={description:"",displayName:"CalendarRange",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"DateRangeType"}},disablePast:{defaultValue:null,description:"",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"",name:"disableFuture",required:!1,type:{name:"boolean"}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},changeDayLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayLabel",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:{value:"1"},description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: DateRangeType) => void)"}},shouldDisableDate:{defaultValue:null,description:"",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},prevMonthLabel:{defaultValue:{value:"Предыдущий месяц"},description:"",name:"prevMonthLabel",required:!1,type:{name:"string"}},nextMonthLabel:{defaultValue:{value:"Следующий месяц"},description:"",name:"nextMonthLabel",required:!1,type:{name:"string"}},changeMonthLabel:{defaultValue:{value:"Изменить месяц"},description:"",name:"changeMonthLabel",required:!1,type:{name:"string"}},changeYearLabel:{defaultValue:{value:"Изменить год"},description:"",name:"changeYearLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},listenDayChangesForUpdate:{defaultValue:null,description:"",name:"listenDayChangesForUpdate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalendarRange/CalendarRange.tsx#CalendarRange"]={docgenInfo:_.__docgenInfo,name:"CalendarRange",path:"src/components/CalendarRange/CalendarRange.tsx#CalendarRange"})}catch(e){}},"./src/components/Spinner/Spinner.tsx":(e,n,t)=>{t.d(n,{$:()=>p});var a=t("../../node_modules/react/index.js"),r=t("../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js"),l=t("../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js"),o=t("../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js"),s=t("../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js"),i=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),u=t("./src/components/RootComponent/RootComponent.tsx"),d=t("./src/components/VisuallyHidden/VisuallyHidden.tsx"),c=t("./src/components/Spinner/Spinner.module.css"),p=a.memo(function(e){var n=e.size,t=void 0===n?"regular":n,p=e.children,m=void 0===p?"Загружается...":p,y=e.disableAnimation,b=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["size","children","disableAnimation"]),f={small:r.P,regular:l.h,medium:o.X,large:s.C}[t],g={small:8,regular:12,medium:16,large:22}[t];return a.createElement(u.U,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({Component:"span",role:"status"},b),{baseClassName:c.Z.Spinner}),a.createElement(f,null,!y&&a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 ".concat(g," ").concat(g),to:"360 ".concat(g," ").concat(g),dur:"0.7s",repeatCount:"indefinite"})),(0,i.p7)(m)&&a.createElement(d.T,null,m))});p.displayName="Spinner";try{p.displayName="Spinner",p.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:p.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(e){}}}]);