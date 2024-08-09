"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7867],{"./src/components/DateInput/DateInput.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Playground:function(){return V},default:function(){return R}});var a,r,l,o=t("../../node_modules/react/jsx-runtime.js"),u=t("../../node_modules/react/index.js"),i=t("./src/storybook/constants.ts"),s=t("../../node_modules/@vkontakte/icons/dist/es6/16/clear_16.js"),c=t("../../node_modules/@vkontakte/icons/dist/es6/20/calendar_outline_20.js"),d=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),p=t("./src/hooks/useAdaptivity.ts"),b=t("./src/hooks/useDateInput.ts"),m=t("./src/hooks/useExternRef.ts"),h=t("./src/lib/adaptivity/constants.ts"),v=t("./src/lib/callMultiple.ts"),f=t("./src/lib/date.ts"),g=t("./src/components/Calendar/Calendar.tsx"),y=t("./src/components/FormField/FormField.tsx"),O=t("./src/components/IconButton/IconButton.tsx"),D=t("./src/components/InputLike/InputLike.tsx"),x=t("./src/components/InputLike/InputLikeDivider.tsx"),j=t("./src/components/Popper/Popper.tsx"),Text=t("./src/components/Typography/Text/Text.tsx");t("./src/components/InputLike/InputLike.module.css");var M=t("./src/components/DateInput/DateInput.module.css");function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var L=k({none:M.Z["DateInput--sizeY-none"]},h.n$.COMPACT,M.Z["DateInput--sizeY-compact"]),A=function(e){var n=2,t=1,a=0;switch(e){case 0:a=31;break;case 1:a=12;break;case 2:a=2100,t=1900,n=4;break;case 3:a=23;break;case 4:a=59}return{length:n,min:t,max:a}},I=function(e){var n=["","","","",""];return e&&(n[0]=String(e.getDate()).padStart(2,"0"),n[1]=String(e.getMonth()+1).padStart(2,"0"),n[2]=String(e.getFullYear()).padStart(4,"0"),n[3]=String(e.getHours()).padStart(2,"0"),n[4]=String(e.getMinutes()).padStart(2,"0")),n},P=function(e){var n=e.enableTime,t=e.shouldDisableDate,a=e.disableFuture,r=e.disablePast,l=e.value,i=e.onChange,P=e.calendarPlacement,w=e.style,C=e.className,R=e.doneButtonText,V=e.closeOnChange,S=void 0===V||V,q=e.disablePickers,F=e.getRootRef,E=e.name,_=e.autoFocus,Y=e.disabled,T=e.onClick,N=e.onFocus,H=e.prevMonthAriaLabel,B=e.nextMonthAriaLabel,z=e.showNeighboringMonth,K=e.size,U=e.changeMonthAriaLabel,Z=void 0===U?"Изменить месяц":U,W=e.changeYearAriaLabel,Q=void 0===W?"Изменить год":W,$=e.changeDayAriaLabel,G=void 0===$?"Изменить день":$,J=e.changeHoursAriaLabel,X=void 0===J?"Изменить час":J,ee=e.changeMinutesAriaLabel,en=void 0===ee?"Изменить минуту":ee,et=e.clearFieldAriaLabel,ea=e.showCalendarAriaLabel,er=e.viewDate,el=e.onHeaderChange,eo=e.onNextMonth,eu=e.onPrevMonth,ei=e.prevMonthIcon,es=e.nextMonthIcon,ec=e.disableCalendar,ed=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["enableTime","shouldDisableDate","disableFuture","disablePast","value","onChange","calendarPlacement","style","className","doneButtonText","closeOnChange","disablePickers","getRootRef","name","autoFocus","disabled","onClick","onFocus","prevMonthAriaLabel","nextMonthAriaLabel","showNeighboringMonth","size","changeMonthAriaLabel","changeYearAriaLabel","changeDayAriaLabel","changeHoursAriaLabel","changeMinutesAriaLabel","clearFieldAriaLabel","showCalendarAriaLabel","viewDate","onHeaderChange","onNextMonth","onPrevMonth","prevMonthIcon","nextMonthIcon","disableCalendar"]),ep=u.useRef(null),eb=u.useRef(null),em=u.useRef(null),eh=u.useRef(null),ev=u.useRef(null),ef=n?4:2,eg=u.useCallback(function(e){for(var t=0;t<=ef;t+=1)if(e[t].length<A(t).length)return;var a="".concat(e[0],".").concat(e[1],".").concat(e[2]),r="DD.MM.YYYY";n&&(a+=" ".concat(e[3],":").concat(e[4]),r+=" HH:mm"),(0,f.BD)(a,r)&&(null==i||i((0,f.Qc)(a,r,null!=l?l:new Date)))},[n,ef,i,l]),ey=u.useMemo(function(){return[ep,eb,em,eh,ev]},[ep,eb,em,eh,ev]),eO=(0,b.S)({maxElement:ef,refs:ey,autoFocus:_,disabled:Y,elementsConfig:A,onChange:i,onInternalValueChange:eg,getInternalValue:I,value:l}),eD=eO.rootRef,ex=eO.calendarRef,ej=eO.open,eM=eO.openCalendar,ek=eO.internalValue,eL=eO.handleKeyDown,eA=eO.setFocusedElement,eI=eO.handleFieldEnter,eP=eO.clear,ew=eO.removeFocusFromField,eC=(0,p.g)().sizeY,eR=void 0===eC?"none":eC,eV=(0,m.Q)(eD,F),eS=u.useCallback(function(e){null==i||i(e),S&&!n&&ew()},[i,ew,S,n]);return(0,o.jsxs)(y.W,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){k(e,n,t[n])})}return e}({style:w,className:(0,d.AK)(eR!==h.n$.REGULAR&&L[eR],C),getRootRef:eV,after:l?(0,o.jsx)(O.h,{hoverMode:"opacity","aria-label":void 0===et?"Очистить поле":et,onClick:eP,children:(0,o.jsx)(s.l,{})}):(0,o.jsx)(O.h,{hoverMode:"opacity","aria-label":void 0===ea?"Показать календарь":ea,onClick:eM,children:(0,o.jsx)(c.D,{})}),disabled:Y,onClick:(0,v.C)(eI,T),onFocus:(0,v.C)(eI,N)},ed),{children:[(0,o.jsx)("input",{type:"hidden",name:E,value:l?(0,f.WU)(l,n?"DD.MM.YYYYTHH:mm":"DD.MM.YYYY"):""}),(0,o.jsxs)(Text.x,{className:M.Z.DateInput__input,onKeyDown:eL,children:[(0,o.jsx)(D.E,{length:2,getRootRef:ep,index:0,onElementSelect:eA,value:ek[0],"aria-label":G}),(0,o.jsx)(x.q,{children:"."}),(0,o.jsx)(D.E,{length:2,getRootRef:eb,index:1,onElementSelect:eA,value:ek[1],"aria-label":Z}),(0,o.jsx)(x.q,{children:"."}),(0,o.jsx)(D.E,{length:4,getRootRef:em,index:2,onElementSelect:eA,value:ek[2],"aria-label":Q}),n&&(0,o.jsxs)(u.Fragment,{children:[(0,o.jsx)(x.q,{className:M.Z["DateInput__input--time-divider"],children:" "}),(0,o.jsx)(D.E,{length:2,getRootRef:eh,index:3,onElementSelect:eA,value:ek[3],"aria-label":X}),(0,o.jsx)(x.q,{children:":"}),(0,o.jsx)(D.E,{length:2,getRootRef:ev,index:4,onElementSelect:eA,value:ek[4],"aria-label":en})]})]}),ej&&!(void 0!==ec&&ec)&&(0,o.jsx)(j.r,{targetRef:eD,offsetDistance:8,placement:void 0===P?"bottom-start":P,autoUpdateOnTargetResize:!0,children:(0,o.jsx)(g.f,{value:l,onChange:eS,enableTime:n,disablePast:r,disableFuture:a,shouldDisableDate:t,onClose:ew,getRootRef:ex,doneButtonText:R,disablePickers:q,changeHoursAriaLabel:X,changeMinutesAriaLabel:en,prevMonthAriaLabel:H,nextMonthAriaLabel:B,changeMonthAriaLabel:Z,changeYearAriaLabel:Q,changeDayAriaLabel:G,showNeighboringMonth:z,size:K,viewDate:er,onHeaderChange:el,onNextMonth:eo,onPrevMonth:eu,prevMonthIcon:ei,nextMonthIcon:es})})]}))};try{P.displayName="DateInput",P.__docgenInfo={description:"",displayName:"DateInput",props:{calendarPlacement:{defaultValue:{value:"bottom-start"},description:"",name:"calendarPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},closeOnChange:{defaultValue:{value:"true"},description:"",name:"closeOnChange",required:!1,type:{name:"boolean"}},clearFieldAriaLabel:{defaultValue:{value:"Очистить поле"},description:"",name:"clearFieldAriaLabel",required:!1,type:{name:"string"}},showCalendarAriaLabel:{defaultValue:{value:"Показать календарь"},description:"",name:"showCalendarAriaLabel",required:!1,type:{name:"string"}},disableCalendar:{defaultValue:{value:"false"},description:"",name:"disableCalendar",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: Date) => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disablePast:{defaultValue:null,description:"",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"",name:"disableFuture",required:!1,type:{name:"boolean"}},shouldDisableDate:{defaultValue:null,description:"",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},weekStartsOn:{defaultValue:null,description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},prevMonthAriaLabel:{defaultValue:null,description:"",name:"prevMonthAriaLabel",required:!1,type:{name:"string"}},nextMonthAriaLabel:{defaultValue:null,description:"",name:"nextMonthAriaLabel",required:!1,type:{name:"string"}},changeMonthAriaLabel:{defaultValue:{value:"Изменить месяц"},description:"",name:"changeMonthAriaLabel",required:!1,type:{name:"string"}},changeYearAriaLabel:{defaultValue:{value:"Изменить год"},description:"",name:"changeYearAriaLabel",required:!1,type:{name:"string"}},changeDayAriaLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayAriaLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},enableTime:{defaultValue:null,description:"",name:"enableTime",required:!1,type:{name:"boolean"}},doneButtonText:{defaultValue:null,description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeHoursAriaLabel:{defaultValue:{value:"Изменить час"},description:"",name:"changeHoursAriaLabel",required:!1,type:{name:"string"}},changeMinutesAriaLabel:{defaultValue:{value:"Изменить минуту"},description:"",name:"changeMinutesAriaLabel",required:!1,type:{name:"string"}},showNeighboringMonth:{defaultValue:null,description:"",name:"showNeighboringMonth",required:!1,type:{name:"boolean"}},viewDate:{defaultValue:null,description:"Дата отображаемого месяца.\nПри использовании обновление даты должно происходить вне компонента.",name:"viewDate",required:!1,type:{name:"Date"}},onHeaderChange:{defaultValue:null,description:"Изменение даты в шапке календаря.",name:"onHeaderChange",required:!1,type:{name:"((value: Date) => void)"}},onNextMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на следующий месяц.",name:"onNextMonth",required:!1,type:{name:"(() => void)"}},onPrevMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на предыдущий месяц.",name:"onPrevMonth",required:!1,type:{name:"(() => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateInput/DateInput.tsx#DateInput"]={docgenInfo:P.__docgenInfo,name:"DateInput",path:"src/components/DateInput/DateInput.tsx#DateInput"})}catch(e){}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function C(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var R={title:"Forms/DateInput",component:P,parameters:w({},i.tW,i.nB),argTypes:{value:{control:{type:"date"}}}},V={render:function(e){var n=e.value,t=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["value"]),a=n?new Date(n):n;return(0,o.jsx)(P,w({value:a},t))}};V.parameters=C(w({},V.parameters),{docs:C(w({},null===(a=V.parameters)||void 0===a?void 0:a.docs),{source:w({originalSource:"{\n  render: ({\n    value,\n    ...args\n  }) => {\n    const parsedValue = value ? new Date(value) : value;\n    return <DateInput value={parsedValue} {...args} />;\n  }\n}"},null===(l=V.parameters)||void 0===l?void 0:null===(r=l.docs)||void 0===r?void 0:r.source)})})}}]);