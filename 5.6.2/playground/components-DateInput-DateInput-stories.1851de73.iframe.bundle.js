"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7867],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Calendar/Calendar.module.css":function(e,a,n){var t=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(t),l=n("../../node_modules/css-loader/dist/runtime/api.js"),o=n.n(l)()(r());o.push([e.id,".Calendar--zTx5x{background:#fff;background:var(--vkui--color_background_modal);border:.5px solid #d7d8d9;border:.5px solid var(--vkui--color_separator_primary);border-radius:8px;box-shadow:0 0 2px rgba(0,0,0,.03),0 2px 2px rgba(0,0,0,.06);box-shadow:var(--vkui--elevation1);box-sizing:border-box;display:flex;flex-direction:column;padding:12px;width:305px}.Calendar__time--CmaHe{border-top:1px solid #d7d8d9;border-top:1px solid var(--vkui--color_separator_primary);margin:12px -12px 0;padding:12px 12px 0}.Calendar__header--X9nkm{margin-bottom:4px}.Calendar--size-s--Ywffx{padding:8px;width:220px}.Calendar--size-s--Ywffx .Calendar__header--X9nkm{margin-bottom:0}",""]),o.locals={Calendar:"Calendar--zTx5x",Calendar__time:"Calendar__time--CmaHe",Calendar__header:"Calendar__header--X9nkm","Calendar--size-s":"Calendar--size-s--Ywffx"},a.Z=o},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/CalendarTime/CalendarTime.module.css":function(e,a,n){var t=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(t),l=n("../../node_modules/css-loader/dist/runtime/api.js"),o=n.n(l)()(r());o.push([e.id,".CalendarTime--m0_Km{align-items:center;display:flex}.CalendarTime__picker--UXQ5i{width:77px}.CalendarTime__divider--aqVbQ{color:#000;color:var(--vkui--color_text_primary);font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_family_base);margin-left:6px;margin-right:6px}.CalendarTime__button--wWQWx{margin-left:auto}",""]),o.locals={CalendarTime:"CalendarTime--m0_Km",CalendarTime__picker:"CalendarTime__picker--UXQ5i",CalendarTime__divider:"CalendarTime__divider--aqVbQ",CalendarTime__button:"CalendarTime__button--wWQWx"},a.Z=o},"./src/components/DateInput/DateInput.stories.tsx":function(e,a,n){n.r(a),n.d(a,{Playground:function(){return T},default:function(){return V}});var t,r,l,o=n("../../node_modules/react/jsx-runtime.js"),i=n("../../node_modules/react/index.js"),s=n("./src/storybook/constants.ts"),u=n("../../node_modules/@vkontakte/icons/dist/es6/16/clear.js"),d=n("../../node_modules/@vkontakte/icons/dist/es6/20/calendar_outline.js"),c=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),p=n("./src/hooks/useAdaptivity.ts"),m=n("./src/hooks/useDateInput.ts"),b=n("./src/hooks/useExternRef.ts"),h=n("./src/lib/adaptivity/constants.ts"),v=n("./src/lib/callMultiple.ts"),f=n("./src/lib/date.ts"),g=n("./src/components/Calendar/Calendar.tsx"),y=n("./src/components/FormField/FormField.tsx"),C=n("./src/components/IconButton/IconButton.tsx"),x=n("./src/components/InputLike/InputLike.tsx"),D=n("./src/components/InputLike/InputLikeDivider.tsx"),j=n("./src/components/Popper/Popper.tsx"),O=n("./src/components/Typography/Text/Text.tsx");n("./src/components/InputLike/InputLike.module.css");var M=n("./src/components/DateInput/DateInput.module.css");function A(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var _=A({none:M.Z["DateInput--sizeY-none"]},h.n$.COMPACT,M.Z["DateInput--sizeY-compact"]),P=function(e){var a=2,n=1,t=0;switch(e){case 0:t=31;break;case 1:t=12;break;case 2:t=2100,n=1900,a=4;break;case 3:t=23;break;case 4:t=59}return{length:a,min:n,max:t}},L=function(e){var a=["","","","",""];return e&&(a[0]=String(e.getDate()).padStart(2,"0"),a[1]=String(e.getMonth()+1).padStart(2,"0"),a[2]=String(e.getFullYear()).padStart(4,"0"),a[3]=String(e.getHours()).padStart(2,"0"),a[4]=String(e.getMinutes()).padStart(2,"0")),a},w=function(e){var a=e.enableTime,n=e.shouldDisableDate,t=e.disableFuture,r=e.disablePast,l=e.value,s=e.onChange,w=e.calendarPlacement,k=e.style,S=e.className,V=e.doneButtonText,T=e.closeOnChange,q=void 0===T||T,I=e.disablePickers,R=e.getRootRef,N=e.name,E=e.autoFocus,F=e.disabled,Y=e.onClick,H=e.onFocus,B=e.prevMonthAriaLabel,z=e.nextMonthAriaLabel,K=e.showNeighboringMonth,Z=e.size,U=e.changeMonthAriaLabel,Q=void 0===U?"Изменить месяц":U,W=e.changeYearAriaLabel,X=void 0===W?"Изменить год":W,$=e.changeDayAriaLabel,G=void 0===$?"Изменить день":$,J=e.changeHoursAriaLabel,ee=void 0===J?"Изменить час":J,ea=e.changeMinutesAriaLabel,en=void 0===ea?"Изменить минуту":ea,et=e.clearFieldAriaLabel,er=e.showCalendarAriaLabel,el=e.viewDate,eo=e.onHeaderChange,ei=e.onNextMonth,es=e.onPrevMonth,eu=e.prevMonthIcon,ed=e.nextMonthIcon,ec=e.disableCalendar,ep=function(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["enableTime","shouldDisableDate","disableFuture","disablePast","value","onChange","calendarPlacement","style","className","doneButtonText","closeOnChange","disablePickers","getRootRef","name","autoFocus","disabled","onClick","onFocus","prevMonthAriaLabel","nextMonthAriaLabel","showNeighboringMonth","size","changeMonthAriaLabel","changeYearAriaLabel","changeDayAriaLabel","changeHoursAriaLabel","changeMinutesAriaLabel","clearFieldAriaLabel","showCalendarAriaLabel","viewDate","onHeaderChange","onNextMonth","onPrevMonth","prevMonthIcon","nextMonthIcon","disableCalendar"]),em=i.useRef(null),eb=i.useRef(null),eh=i.useRef(null),ev=i.useRef(null),ef=i.useRef(null),eg=a?4:2,ey=i.useCallback(function(e){for(var n=0;n<=eg;n+=1)if(e[n].length<P(n).length)return;var t="".concat(e[0],".").concat(e[1],".").concat(e[2]),r="DD.MM.YYYY";a&&(t+=" ".concat(e[3],":").concat(e[4]),r+=" HH:mm"),(0,f.BD)(t,r)&&(null==s||s((0,f.Qc)(t,r,null!=l?l:new Date)))},[a,eg,s,l]),eC=i.useMemo(function(){return[em,eb,eh,ev,ef]},[em,eb,eh,ev,ef]),ex=(0,m.S)({maxElement:eg,refs:eC,autoFocus:E,disabled:F,elementsConfig:P,onChange:s,onInternalValueChange:ey,getInternalValue:L,value:l}),eD=ex.rootRef,ej=ex.calendarRef,eO=ex.open,eM=ex.openCalendar,eA=ex.closeCalendar,e_=ex.internalValue,eP=ex.handleKeyDown,eL=ex.setFocusedElement,ew=ex.handleFieldEnter,ek=ex.clear,eS=ex.removeFocusFromField,eV=(0,p.g)().sizeY,eT=void 0===eV?"none":eV,eq=(0,b.Q)(eD,R),eI=i.useCallback(function(e){null==s||s(e),q&&!a&&eS()},[s,eS,q,a]);return(0,o.jsxs)(y.W,function(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):(function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n})(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}),e}(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){A(e,a,n[a])})}return e}({style:k,className:(0,c.AK)(eT!==h.n$.REGULAR&&_[eT],S),getRootRef:eq,after:l?(0,o.jsx)(C.h,{hoverMode:"opacity","aria-label":void 0===et?"Очистить поле":et,onClick:ek,children:(0,o.jsx)(u.l,{})}):(0,o.jsx)(C.h,{hoverMode:"opacity","aria-label":void 0===er?"Показать календарь":er,onClick:eM,children:(0,o.jsx)(d.D,{})}),disabled:F,onClick:(0,v.C)(ew,Y),onFocus:(0,v.C)(ew,H)},ep),{children:[(0,o.jsx)("input",{type:"hidden",name:N,value:l?(0,f.WU)(l,a?"DD.MM.YYYYTHH:mm":"DD.MM.YYYY"):""}),(0,o.jsxs)(O.x,{className:M.Z.DateInput__input,onKeyDown:eP,children:[(0,o.jsx)(x.E,{length:2,getRootRef:em,index:0,onElementSelect:eL,value:e_[0],"aria-label":G}),(0,o.jsx)(D.q,{children:"."}),(0,o.jsx)(x.E,{length:2,getRootRef:eb,index:1,onElementSelect:eL,value:e_[1],"aria-label":Q}),(0,o.jsx)(D.q,{children:"."}),(0,o.jsx)(x.E,{length:4,getRootRef:eh,index:2,onElementSelect:eL,value:e_[2],"aria-label":X}),a&&(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(D.q,{className:M.Z["DateInput__input--time-divider"],children:" "}),(0,o.jsx)(x.E,{length:2,getRootRef:ev,index:3,onElementSelect:eL,value:e_[3],"aria-label":ee}),(0,o.jsx)(D.q,{children:":"}),(0,o.jsx)(x.E,{length:2,getRootRef:ef,index:4,onElementSelect:eL,value:e_[4],"aria-label":en})]})]}),eO&&!(void 0!==ec&&ec)&&(0,o.jsx)(j.r,{targetRef:eD,offsetDistance:8,placement:void 0===w?"bottom-start":w,children:(0,o.jsx)(g.f,{value:l,onChange:eI,enableTime:a,disablePast:r,disableFuture:t,shouldDisableDate:n,onClose:eA,getRootRef:ej,doneButtonText:V,disablePickers:I,changeHoursAriaLabel:ee,changeMinutesAriaLabel:en,prevMonthAriaLabel:B,nextMonthAriaLabel:z,changeMonthAriaLabel:Q,changeYearAriaLabel:X,changeDayAriaLabel:G,showNeighboringMonth:K,size:Z,viewDate:el,onHeaderChange:eo,onNextMonth:ei,onPrevMonth:es,prevMonthIcon:eu,nextMonthIcon:ed})})]}))};try{w.displayName="DateInput",w.__docgenInfo={description:"",displayName:"DateInput",props:{calendarPlacement:{defaultValue:{value:"bottom-start"},description:"",name:"calendarPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},closeOnChange:{defaultValue:{value:"true"},description:"",name:"closeOnChange",required:!1,type:{name:"boolean"}},clearFieldAriaLabel:{defaultValue:{value:"Очистить поле"},description:"",name:"clearFieldAriaLabel",required:!1,type:{name:"string"}},showCalendarAriaLabel:{defaultValue:{value:"Показать календарь"},description:"",name:"showCalendarAriaLabel",required:!1,type:{name:"string"}},disableCalendar:{defaultValue:{value:"false"},description:"",name:"disableCalendar",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: Date) => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disablePast:{defaultValue:null,description:"",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"",name:"disableFuture",required:!1,type:{name:"boolean"}},shouldDisableDate:{defaultValue:null,description:"",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},weekStartsOn:{defaultValue:null,description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},prevMonthAriaLabel:{defaultValue:null,description:"",name:"prevMonthAriaLabel",required:!1,type:{name:"string"}},nextMonthAriaLabel:{defaultValue:null,description:"",name:"nextMonthAriaLabel",required:!1,type:{name:"string"}},changeMonthAriaLabel:{defaultValue:{value:"Изменить месяц"},description:"",name:"changeMonthAriaLabel",required:!1,type:{name:"string"}},changeYearAriaLabel:{defaultValue:{value:"Изменить год"},description:"",name:"changeYearAriaLabel",required:!1,type:{name:"string"}},changeDayAriaLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayAriaLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},enableTime:{defaultValue:null,description:"",name:"enableTime",required:!1,type:{name:"boolean"}},doneButtonText:{defaultValue:null,description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeHoursAriaLabel:{defaultValue:{value:"Изменить час"},description:"",name:"changeHoursAriaLabel",required:!1,type:{name:"string"}},changeMinutesAriaLabel:{defaultValue:{value:"Изменить минуту"},description:"",name:"changeMinutesAriaLabel",required:!1,type:{name:"string"}},showNeighboringMonth:{defaultValue:null,description:"",name:"showNeighboringMonth",required:!1,type:{name:"boolean"}},viewDate:{defaultValue:null,description:"Дата отображаемого месяца.\nПри использовании обновление даты должно происходить вне компонента.",name:"viewDate",required:!1,type:{name:"Date"}},onHeaderChange:{defaultValue:null,description:"Изменение даты в шапке календаря.",name:"onHeaderChange",required:!1,type:{name:"((value: Date) => void)"}},onNextMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на следующий месяц.",name:"onNextMonth",required:!1,type:{name:"(() => void)"}},onPrevMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на предыдущий месяц.",name:"onPrevMonth",required:!1,type:{name:"(() => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateInput/DateInput.tsx#DateInput"]={docgenInfo:w.__docgenInfo,name:"DateInput",path:"src/components/DateInput/DateInput.tsx#DateInput"})}catch(e){}function k(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){!function(e,a,n){a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}(e,a,n[a])})}return e}function S(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):(function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n})(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}),e}var V={title:"Forms/DateInput",component:w,parameters:k({},s.tW,s.nB),argTypes:{value:{control:{type:"date"}}}},T={render:function(e){var a=e.value,n=function(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["value"]),t=a?new Date(a):a;return(0,o.jsx)(w,k({value:t},n))}};T.parameters=S(k({},T.parameters),{docs:S(k({},null===(t=T.parameters)||void 0===t?void 0:t.docs),{source:k({originalSource:"{\n  render: ({\n    value,\n    ...args\n  }) => {\n    const parsedValue = value ? new Date(value) : value;\n    return <DateInput value={parsedValue} {...args} />;\n  }\n}"},null===(l=T.parameters)||void 0===l?void 0:null===(r=l.docs)||void 0===r?void 0:r.source)})})},"./src/components/Calendar/Calendar.tsx":function(e,a,n){n.d(a,{f:function(){return N}});var t=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),l=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),o=n("./src/hooks/useCalendar.ts"),i=n("./src/lib/calendar.ts"),s=n("./src/lib/date.ts"),u=n("./src/lib/useIsomorphicLayoutEffect.ts"),d=n("./src/lib/warnOnce.ts"),c=n("./src/components/CalendarDays/CalendarDays.tsx"),p=n("./src/components/CalendarHeader/CalendarHeader.tsx"),m=n("./src/lib/adaptivity/constants.ts"),b=n("./src/components/AdaptivityProvider/AdaptivityProvider.tsx"),h=n("./src/components/Button/Button.tsx"),v=n("./src/components/CustomSelect/CustomSelect.tsx"),f=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=n.n(f),y=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),C=n.n(y),x=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),D=n.n(x),j=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),O=n.n(j),M=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=n.n(M),_=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/CalendarTime/CalendarTime.module.css"),P={attributes:{class:"vkui-style"}};P.setAttributes=O(),P.insert=D().bind(null,"head"),P.domAPI=C(),P.insertStyleElement=A(),g()(_.Z,P);for(var L=_.Z&&_.Z.locals?_.Z.locals:void 0,w=[],k=0;k<24;k+=1)w.push({value:k,label:String(k).padStart(2,"0")});for(var S=[],V=0;V<60;V+=1)S.push({value:V,label:String(V).padStart(2,"0")});var T=function(e){var a=e.value,n=e.doneButtonText,l=void 0===n?"Готово":n,o=e.onChange,i=e.onClose,u=e.changeHoursAriaLabel,d=e.changeMinutesAriaLabel,c=r.useCallback(function(e){return null==o?void 0:o((0,s.Bq)(a,Number(e.target.value)))},[o,a]),p=r.useCallback(function(e){return null==o?void 0:o((0,s.HZ)(a,Number(e.target.value)))},[o,a]);return(0,t.jsxs)("div",{className:L.CalendarTime,children:[(0,t.jsx)("div",{className:L.CalendarTime__picker,children:(0,t.jsx)(b.x,{sizeY:m.n$.COMPACT,children:(0,t.jsx)(v.A,{value:a.getHours(),options:w,onChange:c,forceDropdownPortal:!1,"aria-label":void 0===u?"Изменить час":u})})}),(0,t.jsx)("div",{className:L.CalendarTime__divider,children:":"}),(0,t.jsx)("div",{className:L.CalendarTime__picker,children:(0,t.jsx)(b.x,{sizeY:m.n$.COMPACT,children:(0,t.jsx)(v.A,{value:a.getMinutes(),options:S,onChange:p,forceDropdownPortal:!1,"aria-label":void 0===d?"Изменить минуту":d})})}),(0,t.jsx)("div",{className:L.CalendarTime__button,children:(0,t.jsx)(b.x,{sizeY:m.n$.COMPACT,children:(0,t.jsx)(h.z,{mode:"secondary",onClick:i,size:"l","aria-label":l,children:l})})})]})};try{T.displayName="CalendarTime",T.__docgenInfo={description:"",displayName:"CalendarTime",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},doneButtonText:{defaultValue:{value:"Готово"},description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeHoursAriaLabel:{defaultValue:{value:"Изменить час"},description:"",name:"changeHoursAriaLabel",required:!1,type:{name:"string"}},changeMinutesAriaLabel:{defaultValue:{value:"Изменить минуту"},description:"",name:"changeMinutesAriaLabel",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Date) => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalendarTime/CalendarTime.tsx#CalendarTime"]={docgenInfo:T.__docgenInfo,name:"CalendarTime",path:"src/components/CalendarTime/CalendarTime.tsx#CalendarTime"})}catch(e){}var q=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Calendar/Calendar.module.css"),I={attributes:{class:"vkui-style"}};I.setAttributes=O(),I.insert=D().bind(null,"head"),I.domAPI=C(),I.insertStyleElement=A(),g()(q.Z,I);var R=q.Z&&q.Z.locals?q.Z.locals:void 0;(0,d.O)("Calendar");var N=function(e){var a=e.value,n=e.onChange,d=e.disablePast,m=e.disableFuture,b=e.shouldDisableDate,h=e.onClose,v=e.enableTime,f=e.doneButtonText,g=e.weekStartsOn,y=e.getRootRef,C=e.disablePickers,x=e.changeHoursAriaLabel,D=e.changeMinutesAriaLabel,j=e.prevMonthAriaLabel,O=e.nextMonthAriaLabel,M=e.changeMonthAriaLabel,A=e.changeYearAriaLabel,_=e.showNeighboringMonth,P=e.changeDayAriaLabel,L=e.size,w=void 0===L?"m":L,k=e.viewDate,S=e.onHeaderChange,V=e.onNextMonth,q=e.onPrevMonth,I=e.prevMonthIcon,N=e.nextMonthIcon,E=e.prevMonthProps,F=e.nextMonthProps,Y=e.dayProps,H=e.className,B=e.listenDayChangesForUpdate,z=function(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["value","onChange","disablePast","disableFuture","shouldDisableDate","onClose","enableTime","doneButtonText","weekStartsOn","getRootRef","disablePickers","changeHoursAriaLabel","changeMinutesAriaLabel","prevMonthAriaLabel","nextMonthAriaLabel","changeMonthAriaLabel","changeYearAriaLabel","showNeighboringMonth","changeDayAriaLabel","size","viewDate","onHeaderChange","onNextMonth","onPrevMonth","prevMonthIcon","nextMonthIcon","prevMonthProps","nextMonthProps","dayProps","className","listenDayChangesForUpdate"]),K=(0,o.G)({value:a,disableFuture:m,disablePast:d,shouldDisableDate:b,onHeaderChange:S,onNextMonth:V,onPrevMonth:q}),Z=K.viewDate,U=K.setViewDate,Q=K.setPrevMonth,W=K.setNextMonth,X=K.focusedDay,$=K.setFocusedDay,G=K.isDayFocused,J=K.isDayDisabled,ee=K.resetSelectedDay;(0,u.L)(function(){a&&U(a)},[a]);var ea=r.useCallback(function(e){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&e.preventDefault();var n=(0,i.it)(null!=X?X:a,e.key);n&&!(0,s.xj)(n,Z)&&U(n),$(n)},[X,$,U,a,Z]),en=r.useCallback(function(e){null==n||n((0,i.VB)(e,a))},[a,n]),et=r.useCallback(function(e){return!!(a&&(0,s.KC)(e,a))},[a]);return(0,t.jsxs)("div",function(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):(function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n})(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}),e}(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){!function(e,a,n){a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}(e,a,n[a])})}return e}({},z),{ref:y,className:(0,l.AK)(R.Calendar,"s"===w&&R["Calendar--size-s"],H),children:[(0,t.jsx)(p.v,{viewDate:k||Z,onChange:U,onNextMonth:W,onPrevMonth:Q,disablePickers:C||"s"===w,className:R.Calendar__header,prevMonthAriaLabel:j,nextMonthAriaLabel:O,changeMonthAriaLabel:M,changeYearAriaLabel:A,prevMonthIcon:I,nextMonthIcon:N,prevMonthProps:E,nextMonthProps:F}),(0,t.jsx)(c.E,{viewDate:k||Z,value:a,weekStartsOn:void 0===g?1:g,isDayFocused:G,tabIndex:0,"aria-label":void 0===P?"Изменить день":P,onKeyDown:ea,onDayChange:en,isDayActive:et,isDaySelectionStart:i.Dk,isDaySelectionEnd:i.Rw,isDayDisabled:J,onBlur:ee,showNeighboringMonth:_,size:w,dayProps:Y,listenDayChangesForUpdate:B}),void 0!==v&&v&&a&&"s"!==w&&(0,t.jsx)("div",{className:R.Calendar__time,children:(0,t.jsx)(T,{value:a,onChange:n,onClose:h,doneButtonText:f,changeHoursAriaLabel:x,changeMinutesAriaLabel:D})})]}))};try{N.displayName="Calendar",N.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},disablePast:{defaultValue:null,description:"",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"",name:"disableFuture",required:!1,type:{name:"boolean"}},enableTime:{defaultValue:{value:"false"},description:"",name:"enableTime",required:!1,type:{name:"boolean"}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},doneButtonText:{defaultValue:null,description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeDayAriaLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayAriaLabel",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:{value:"1"},description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},showNeighboringMonth:{defaultValue:null,description:"",name:"showNeighboringMonth",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: Date) => void)"}},shouldDisableDate:{defaultValue:null,description:"",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},viewDate:{defaultValue:null,description:"Дата отображаемого месяца.\nПри использовании обновление даты должно происходить вне компонента.",name:"viewDate",required:!1,type:{name:"Date"}},onHeaderChange:{defaultValue:null,description:"Изменение даты в шапке календаря.",name:"onHeaderChange",required:!1,type:{name:"((value: Date) => void)"}},changeHoursAriaLabel:{defaultValue:null,description:"",name:"changeHoursAriaLabel",required:!1,type:{name:"string"}},changeMinutesAriaLabel:{defaultValue:null,description:"",name:"changeMinutesAriaLabel",required:!1,type:{name:"string"}},prevMonthAriaLabel:{defaultValue:null,description:"",name:"prevMonthAriaLabel",required:!1,type:{name:"string"}},nextMonthAriaLabel:{defaultValue:null,description:"",name:"nextMonthAriaLabel",required:!1,type:{name:"string"}},changeMonthAriaLabel:{defaultValue:null,description:"",name:"changeMonthAriaLabel",required:!1,type:{name:"string"}},changeYearAriaLabel:{defaultValue:null,description:"",name:"changeYearAriaLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},onNextMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на следующий месяц.",name:"onNextMonth",required:!1,type:{name:"(() => void)"}},onPrevMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на предыдущий месяц.",name:"onPrevMonth",required:!1,type:{name:"(() => void)"}},prevMonthProps:{defaultValue:null,description:"",name:"prevMonthProps",required:!1,type:{name:"ArrowMonthProps"}},nextMonthProps:{defaultValue:null,description:"",name:"nextMonthProps",required:!1,type:{name:"ArrowMonthProps"}},listenDayChangesForUpdate:{defaultValue:null,description:"",name:"listenDayChangesForUpdate",required:!1,type:{name:"boolean"}},dayProps:{defaultValue:null,description:"",name:"dayProps",required:!1,type:{name:"CalendarDayElementProps"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/Calendar.tsx#Calendar"]={docgenInfo:N.__docgenInfo,name:"Calendar",path:"src/components/Calendar/Calendar.tsx#Calendar"})}catch(e){}}}]);