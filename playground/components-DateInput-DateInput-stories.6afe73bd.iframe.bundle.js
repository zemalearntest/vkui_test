(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[83],{"./src/components/DateInput/DateInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateInput_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),constants=__webpack_require__("./src/storybook/constants.ts"),react=__webpack_require__("../../node_modules/react/index.js"),clear_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/clear_16.js"),calendar_outline_20=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/20/calendar_outline_20.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useDateInput=__webpack_require__("./src/hooks/useDateInput.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),callMultiple=__webpack_require__("./src/lib/callMultiple.ts"),date=__webpack_require__("./src/lib/date.ts"),Calendar=__webpack_require__("./src/components/Calendar/Calendar.tsx"),FormField=__webpack_require__("./src/components/FormField/FormField.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),InputLike=__webpack_require__("./src/components/InputLike/InputLike.tsx"),InputLikeDivider=__webpack_require__("./src/components/InputLike/InputLikeDivider.tsx"),Popper=__webpack_require__("./src/components/Popper/Popper.tsx"),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx"),DateInput_module=(__webpack_require__("./src/components/InputLike/InputLike.module.css"),__webpack_require__("./src/components/DateInput/DateInput.module.css"));const sizeYClassNames={none:DateInput_module.A["DateInput--sizeY-none"],compact:DateInput_module.A["DateInput--sizeY-compact"]},elementsConfig=index=>{let length=2,min=1,max=0;switch(index){case 0:max=31;break;case 1:max=12;break;case 2:max=2100,min=1900,length=4;break;case 3:max=23;break;case 4:max=59}return{length,min,max}},getInternalValue=value=>{const newValue=["","","","",""];return value&&(newValue[0]=String(value.getDate()).padStart(2,"0"),newValue[1]=String(value.getMonth()+1).padStart(2,"0"),newValue[2]=String(value.getFullYear()).padStart(4,"0"),newValue[3]=String(value.getHours()).padStart(2,"0"),newValue[4]=String(value.getMinutes()).padStart(2,"0")),newValue},DateInput=({enableTime,shouldDisableDate,disableFuture,disablePast,minDateTime,maxDateTime,value,onChange,calendarPlacement="bottom-start",style,className,doneButtonText,closeOnChange=!0,disablePickers,getRootRef,name,autoFocus,disabled,onClick,onFocus,prevMonthLabel="Предыдущий месяц",nextMonthLabel="Следующий месяц",showNeighboringMonth,size,changeMonthLabel="Изменить месяц",changeYearLabel="Изменить год",changeDayLabel="Изменить день",changeHoursLabel="Изменить час",changeMinutesLabel="Изменить минуту",clearFieldLabel="Очистить поле",showCalendarLabel="Показать календарь",viewDate,onHeaderChange,onNextMonth,onPrevMonth,prevMonthIcon,nextMonthIcon,disableCalendar=!1,...props})=>{const daysRef=react.useRef(null),monthsRef=react.useRef(null),yearsRef=react.useRef(null),hoursRef=react.useRef(null),minutesRef=react.useRef(null),maxElement=enableTime?4:2,onInternalValueChange=react.useCallback((internalValue=>{for(let i=0;i<=maxElement;i+=1)if(internalValue[i].length<elementsConfig(i).length)return;let formattedValue=`${internalValue[0]}.${internalValue[1]}.${internalValue[2]}`,mask="dd.MM.yyyy";enableTime&&(formattedValue+=` ${internalValue[3]}:${internalValue[4]}`,mask+=" HH:mm"),(0,date.uv)(formattedValue,mask)&&onChange?.((0,date.qg)(formattedValue,mask,value??new Date))}),[enableTime,maxElement,onChange,value]),refs=react.useMemo((()=>[daysRef,monthsRef,yearsRef,hoursRef,minutesRef]),[daysRef,monthsRef,yearsRef,hoursRef,minutesRef]),{rootRef,calendarRef,open,openCalendar,internalValue,handleKeyDown,setFocusedElement,handleFieldEnter,clear,removeFocusFromField}=(0,useDateInput.e)({maxElement,refs,autoFocus,disabled,elementsConfig,onChange,onInternalValueChange,getInternalValue,value}),{sizeY="none"}=(0,useAdaptivity.L)(),handleRootRef=(0,useExternRef.Z)(rootRef,getRootRef),onCalendarChange=react.useCallback((value=>{onChange?.(value),closeOnChange&&!enableTime&&removeFocusFromField()}),[onChange,removeFocusFromField,closeOnChange,enableTime]);return(0,jsx_runtime.jsxs)(FormField.z,{style,className:(0,es6.xW)("regular"!==sizeY&&sizeYClassNames[sizeY],className),getRootRef:handleRootRef,after:value?(0,jsx_runtime.jsx)(IconButton.K,{hoverMode:"opacity",label:clearFieldLabel,onClick:clear,children:(0,jsx_runtime.jsx)(clear_16.M,{})}):(0,jsx_runtime.jsx)(IconButton.K,{hoverMode:"opacity",label:showCalendarLabel,onClick:openCalendar,children:(0,jsx_runtime.jsx)(calendar_outline_20.Q,{})}),disabled,onClick:(0,callMultiple.j)(handleFieldEnter,onClick),onFocus:(0,callMultiple.j)(handleFieldEnter,onFocus),...props,children:[(0,jsx_runtime.jsx)("input",{type:"hidden",name,value:value?(0,date.GP)(value,enableTime?"dd.MM.yyyy'T'HH:mm":"dd.MM.yyyy"):""}),(0,jsx_runtime.jsxs)(Text.E,{className:DateInput_module.A.DateInput__input,onKeyDown:handleKeyDown,normalize:!1,Component:"span",children:[(0,jsx_runtime.jsx)(InputLike.o,{length:2,getRootRef:daysRef,index:0,onElementSelect:setFocusedElement,value:internalValue[0],label:changeDayLabel}),(0,jsx_runtime.jsx)(InputLikeDivider.J,{children:"."}),(0,jsx_runtime.jsx)(InputLike.o,{length:2,getRootRef:monthsRef,index:1,onElementSelect:setFocusedElement,value:internalValue[1],label:changeMonthLabel}),(0,jsx_runtime.jsx)(InputLikeDivider.J,{children:"."}),(0,jsx_runtime.jsx)(InputLike.o,{length:4,getRootRef:yearsRef,index:2,onElementSelect:setFocusedElement,value:internalValue[2],label:changeYearLabel}),enableTime&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(InputLikeDivider.J,{className:DateInput_module.A["DateInput__input--time-divider"],children:" "}),(0,jsx_runtime.jsx)(InputLike.o,{length:2,getRootRef:hoursRef,index:3,onElementSelect:setFocusedElement,value:internalValue[3],label:changeHoursLabel}),(0,jsx_runtime.jsx)(InputLikeDivider.J,{children:":"}),(0,jsx_runtime.jsx)(InputLike.o,{length:2,getRootRef:minutesRef,index:4,onElementSelect:setFocusedElement,value:internalValue[4],label:changeMinutesLabel})]})]}),open&&!disableCalendar&&(0,jsx_runtime.jsx)(Popper.N,{targetRef:rootRef,offsetByMainAxis:8,placement:calendarPlacement,autoUpdateOnTargetResize:!0,children:(0,jsx_runtime.jsx)(Calendar.V,{value,onChange:onCalendarChange,enableTime,disablePast,disableFuture,shouldDisableDate,onClose:removeFocusFromField,getRootRef:calendarRef,doneButtonText,disablePickers,changeHoursLabel,changeMinutesLabel,prevMonthLabel,nextMonthLabel,changeMonthLabel,changeYearLabel,changeDayLabel,showNeighboringMonth,size,viewDate,onHeaderChange,onNextMonth,onPrevMonth,prevMonthIcon,nextMonthIcon,minDateTime,maxDateTime})})]})};try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{calendarPlacement:{defaultValue:{value:"bottom-start"},description:"",name:"calendarPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"bottom"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},closeOnChange:{defaultValue:{value:"true"},description:"",name:"closeOnChange",required:!1,type:{name:"boolean"}},clearFieldLabel:{defaultValue:{value:"Очистить поле"},description:"",name:"clearFieldLabel",required:!1,type:{name:"string"}},showCalendarLabel:{defaultValue:{value:"Показать календарь"},description:"",name:"showCalendarLabel",required:!1,type:{name:"string"}},disableCalendar:{defaultValue:{value:"false"},description:"",name:"disableCalendar",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: Date) => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},disablePast:{defaultValue:null,description:"Запрещает выбор даты в прошлом.\nПрименяется, если не заданы `shouldDisableDate` и `disableFuture`.",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"Запрещает выбор даты в будущем.\nПрименяется, если не задано `shouldDisableDate`.",name:"disableFuture",required:!1,type:{name:"boolean"}},shouldDisableDate:{defaultValue:null,description:"Позволяет запретить выбор даты.",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},weekStartsOn:{defaultValue:null,description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},prevMonthLabel:{defaultValue:{value:"Предыдущий месяц"},description:"",name:"prevMonthLabel",required:!1,type:{name:"string"}},nextMonthLabel:{defaultValue:{value:"Следующий месяц"},description:"",name:"nextMonthLabel",required:!1,type:{name:"string"}},changeMonthLabel:{defaultValue:{value:"Изменить месяц"},description:"",name:"changeMonthLabel",required:!1,type:{name:"string"}},changeYearLabel:{defaultValue:{value:"Изменить год"},description:"",name:"changeYearLabel",required:!1,type:{name:"string"}},changeDayLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},enableTime:{defaultValue:null,description:"",name:"enableTime",required:!1,type:{name:"boolean"}},doneButtonText:{defaultValue:null,description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeHoursLabel:{defaultValue:{value:"Изменить час"},description:"",name:"changeHoursLabel",required:!1,type:{name:"string"}},changeMinutesLabel:{defaultValue:{value:"Изменить минуту"},description:"",name:"changeMinutesLabel",required:!1,type:{name:"string"}},showNeighboringMonth:{defaultValue:null,description:"",name:"showNeighboringMonth",required:!1,type:{name:"boolean"}},viewDate:{defaultValue:null,description:"Дата отображаемого месяца.\nПри использовании обновление даты должно происходить вне компонента.",name:"viewDate",required:!1,type:{name:"Date"}},onHeaderChange:{defaultValue:null,description:"Изменение даты в шапке календаря.",name:"onHeaderChange",required:!1,type:{name:"((value: Date) => void)"}},onNextMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на следующий месяц.",name:"onNextMonth",required:!1,type:{name:"(() => void)"}},onPrevMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на предыдущий месяц.",name:"onPrevMonth",required:!1,type:{name:"(() => void)"}},minDateTime:{defaultValue:null,description:"Минимальные дата и время, которые можно выбрать\nПрименяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.",name:"minDateTime",required:!1,type:{name:"Date"}},maxDateTime:{defaultValue:null,description:"Максимальные дата и время, которые можно выбрать.\nПрименяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.",name:"maxDateTime",required:!1,type:{name:"Date"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},beforeAlign:{defaultValue:null,description:"Вертикальное выравнивание иконки слева",name:"beforeAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},afterAlign:{defaultValue:null,description:"Вертикальное выравнивание иконки справа",name:"afterAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},mode:{defaultValue:null,description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'}]}},maxHeight:{defaultValue:null,description:"Максимальная высота поля",name:"maxHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateInput/DateInput.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"src/components/DateInput/DateInput.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}const DateInput_stories={title:"Forms/DateInput",component:DateInput,parameters:{...constants.eb,...constants.eC},args:{onChange:(0,dist.fn)()},argTypes:{value:{control:{type:"date"}}}},Playground={render:({value,...args})=>{const parsedValue=value?new Date(value):value;return(0,jsx_runtime.jsx)(DateInput,{value:parsedValue,...args})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: ({\n    value,\n    ...args\n  }) => {\n    const parsedValue = value ? new Date(value) : value;\n    return <DateInput value={parsedValue} {...args} />;\n  }\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Calendar/Calendar.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Calendar--zTx5x{background:var(--vkui--color_background_contrast_themed);border:.5px solid var(--vkui--color_separator_primary);border-radius:8px;box-shadow:var(--vkui--elevation1);box-sizing:border-box;display:flex;flex-direction:column;inline-size:305px;padding:12px}.Calendar__time--CmaHe{-webkit-border-before:1px solid var(--vkui--color_separator_primary);border-block-start:1px solid var(--vkui--color_separator_primary);margin-block:12px 0;margin-inline:-12px;padding-block:12px 0;padding-inline:12px}.Calendar__header--X9nkm{-webkit-margin-after:4px;margin-block-end:4px}.Calendar--size-s--Ywffx{inline-size:220px;padding:8px}.Calendar--size-s--Ywffx .Calendar__header--X9nkm{-webkit-margin-after:0;margin-block-end:0}","",{version:3,sources:["webpack://./src/components/Calendar/Calendar.module.css"],names:[],mappings:"AAAA,iBAGE,wDAAyD,CACzD,sDAAwD,CAGxD,iBAAkB,CADlB,kCAAmC,CADnC,qBAAsB,CAJtB,YAAa,CACb,qBAAsB,CAMtB,iBAAkB,CAClB,YACF,CAEA,uBACE,oEAAkE,CAAlE,iEAAkE,CAClE,mBAAoB,CACpB,mBAAoB,CACpB,oBAAqB,CACrB,mBACF,CAEA,yBACE,wBAAqB,CAArB,oBACF,CAEA,yBACE,iBAAkB,CAClB,WACF,CAEA,kDACE,sBAAmB,CAAnB,kBACF",sourcesContent:[".Calendar {\n  display: flex;\n  flex-direction: column;\n  background: var(--vkui--color_background_contrast_themed);\n  border: 0.5px solid var(--vkui--color_separator_primary);\n  box-sizing: border-box;\n  box-shadow: var(--vkui--elevation1);\n  border-radius: 8px;\n  inline-size: 305px;\n  padding: 12px;\n}\n\n.Calendar__time {\n  border-block-start: 1px solid var(--vkui--color_separator_primary);\n  margin-block: 12px 0;\n  margin-inline: -12px;\n  padding-block: 12px 0;\n  padding-inline: 12px;\n}\n\n.Calendar__header {\n  margin-block-end: 4px;\n}\n\n.Calendar--size-s {\n  inline-size: 220px;\n  padding: 8px;\n}\n\n.Calendar--size-s .Calendar__header {\n  margin-block-end: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Calendar:"Calendar--zTx5x",Calendar__time:"Calendar__time--CmaHe",Calendar__header:"Calendar__header--X9nkm","Calendar--size-s":"Calendar--size-s--Ywffx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CalendarTime/CalendarTime.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CalendarTime--m0_Km{align-items:center;display:flex}.CalendarTime__picker--UXQ5i{inline-size:77px}.CalendarTime__divider--aqVbQ{color:var(--vkui--color_text_primary);font-family:var(--vkui--font_family_base);margin-inline:6px}.CalendarTime__button--wWQWx{-webkit-margin-start:auto;margin-inline-start:auto}","",{version:3,sources:["webpack://./src/components/CalendarTime/CalendarTime.module.css"],names:[],mappings:"AAAA,qBAEE,kBAAmB,CADnB,YAEF,CAEA,6BACE,gBACF,CAEA,8BAEE,qCAAsC,CACtC,yCAA0C,CAF1C,iBAGF,CAEA,6BACE,yBAAyB,CAAzB,wBACF",sourcesContent:[".CalendarTime {\n  display: flex;\n  align-items: center;\n}\n\n.CalendarTime__picker {\n  inline-size: 77px;\n}\n\n.CalendarTime__divider {\n  margin-inline: 6px;\n  color: var(--vkui--color_text_primary);\n  font-family: var(--vkui--font_family_base);\n}\n\n.CalendarTime__button {\n  margin-inline-start: auto;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CalendarTime:"CalendarTime--m0_Km",CalendarTime__picker:"CalendarTime__picker--UXQ5i",CalendarTime__divider:"CalendarTime__divider--aqVbQ",CalendarTime__button:"CalendarTime__button--wWQWx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Calendar/Calendar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Calendar});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),isSameMonth=__webpack_require__("../../node_modules/date-fns/isSameMonth.mjs"),isSameDay=__webpack_require__("../../node_modules/date-fns/isSameDay.mjs"),useCalendar=__webpack_require__("./src/hooks/useCalendar.ts"),calendar=__webpack_require__("./src/lib/calendar.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),CalendarDays=__webpack_require__("./src/components/CalendarDays/CalendarDays.tsx"),CalendarHeader=__webpack_require__("./src/components/CalendarHeader/CalendarHeader.tsx"),toDate=__webpack_require__("../../node_modules/date-fns/toDate.mjs");function setHours(date,hours){const _date=(0,toDate.a)(date);return _date.setHours(hours),_date}function setMinutes(date,minutes){const _date=(0,toDate.a)(date);return _date.setMinutes(minutes),_date}var AdaptivityProvider=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityProvider.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),CustomSelect=__webpack_require__("./src/components/CustomSelect/CustomSelect.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),CalendarTime_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CalendarTime/CalendarTime.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CalendarTime_module.A,options);const CalendarTime_CalendarTime_module=CalendarTime_module.A&&CalendarTime_module.A.locals?CalendarTime_module.A.locals:void 0,hours=[];for(let i=0;i<24;i+=1)hours.push({value:i,label:String(i).padStart(2,"0")});const minutes=[];for(let i=0;i<60;i+=1)minutes.push({value:i,label:String(i).padStart(2,"0")});const CalendarTime=({value,doneButtonText="Готово",onChange,onClose,changeHoursLabel,changeMinutesLabel,isDayDisabled})=>{const localHours=isDayDisabled?hours.map((hour=>({...hour,disabled:isDayDisabled(setHours(value,hour.value),!0)}))):hours,localMinutes=isDayDisabled?minutes.map((minute=>({...minute,disabled:isDayDisabled(setMinutes(value,minute.value),!0)}))):minutes,onHoursChange=react.useCallback((event=>onChange?.(setHours(value,Number(event.target.value)))),[onChange,value]),onMinutesChange=react.useCallback((event=>onChange?.(setMinutes(value,Number(event.target.value)))),[onChange,value]);return(0,jsx_runtime.jsxs)("div",{className:CalendarTime_CalendarTime_module.CalendarTime,children:[(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__picker,children:(0,jsx_runtime.jsx)(AdaptivityProvider.Z,{sizeY:"compact",children:(0,jsx_runtime.jsx)(CustomSelect.A,{value:value.getHours(),options:localHours,onChange:onHoursChange,forceDropdownPortal:!1,"aria-label":changeHoursLabel})})}),(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__divider,children:":"}),(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__picker,children:(0,jsx_runtime.jsx)(AdaptivityProvider.Z,{sizeY:"compact",children:(0,jsx_runtime.jsx)(CustomSelect.A,{value:value.getMinutes(),options:localMinutes,onChange:onMinutesChange,forceDropdownPortal:!1,"aria-label":changeMinutesLabel})})}),(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__button,children:(0,jsx_runtime.jsx)(AdaptivityProvider.Z,{sizeY:"compact",children:(0,jsx_runtime.jsx)(Button.$,{mode:"secondary",onClick:onClose,size:"l",children:doneButtonText})})})]})};try{CalendarTime.displayName="CalendarTime",CalendarTime.__docgenInfo={description:"",displayName:"CalendarTime",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},doneButtonText:{defaultValue:{value:"Готово"},description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeHoursLabel:{defaultValue:null,description:"",name:"changeHoursLabel",required:!1,type:{name:"string"}},changeMinutesLabel:{defaultValue:null,description:"",name:"changeMinutesLabel",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Date) => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},isDayDisabled:{defaultValue:null,description:"",name:"isDayDisabled",required:!1,type:{name:"((day: Date, withTime?: boolean) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalendarTime/CalendarTime.tsx#CalendarTime"]={docgenInfo:CalendarTime.__docgenInfo,name:"CalendarTime",path:"src/components/CalendarTime/CalendarTime.tsx#CalendarTime"})}catch(__react_docgen_typescript_loader_error){}var RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),Calendar_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Calendar/Calendar.module.css"),Calendar_module_options={attributes:{class:"vkui-style"}};Calendar_module_options.setAttributes=setAttributesWithAttributesAndNonce_default(),Calendar_module_options.insert=insertBySelector_default().bind(null,"head"),Calendar_module_options.domAPI=singletonStyleDomAPI_default(),Calendar_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Calendar_module.A,Calendar_module_options);const Calendar_Calendar_module=Calendar_module.A&&Calendar_module.A.locals?Calendar_module.A.locals:void 0,Calendar=((0,warnOnce.m)("Calendar"),({value,onChange,disablePast,disableFuture,shouldDisableDate,onClose,enableTime=!1,doneButtonText,weekStartsOn=1,disablePickers,changeHoursLabel="Изменить час",changeMinutesLabel="Изменить минуту",prevMonthLabel="Предыдущий месяц",nextMonthLabel="Следующий месяц",changeMonthLabel="Изменить месяц",changeYearLabel="Изменить год",showNeighboringMonth,changeDayLabel="Изменить день",size="m",viewDate:externalViewDate,onHeaderChange,onNextMonth,onPrevMonth,prevMonthIcon,nextMonthIcon,prevMonthProps,nextMonthProps,dayProps,listenDayChangesForUpdate,minDateTime,maxDateTime,...props})=>{const{viewDate,setViewDate,setPrevMonth,setNextMonth,focusedDay,setFocusedDay,isDayFocused,isDayDisabled,resetSelectedDay,isMonthDisabled,isYearDisabled}=(0,useCalendar._)({value,disableFuture,disablePast,shouldDisableDate,onHeaderChange,onNextMonth,onPrevMonth,minDateTime,maxDateTime});(0,useIsomorphicLayoutEffect.E)((()=>{value&&setViewDate(value)}),[value]);const handleKeyDown=react.useCallback((event=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(event.key)&&event.preventDefault();const newFocusedDay=(0,calendar.ul)(focusedDay??value,event.key);newFocusedDay&&!(0,isSameMonth.t)(newFocusedDay,viewDate)&&setViewDate(newFocusedDay),setFocusedDay(newFocusedDay)}),[focusedDay,setFocusedDay,setViewDate,value,viewDate]),onDayChange=react.useCallback((date=>{let actualDate=(0,calendar.mf)(date,value);(minDateTime||maxDateTime)&&(actualDate=(0,calendar.qE)(actualDate,{min:minDateTime,max:maxDateTime})),onChange?.(actualDate)}),[value,onChange,maxDateTime,minDateTime]),isDayActive=react.useCallback((day=>Boolean(value&&(0,isSameDay.r)(day,value))),[value]);return(0,jsx_runtime.jsxs)(RootComponent.I,{...props,baseClassName:(0,es6.xW)(Calendar_Calendar_module.Calendar,"s"===size&&Calendar_Calendar_module["Calendar--size-s"]),children:[(0,jsx_runtime.jsx)(CalendarHeader.M,{viewDate:externalViewDate||viewDate,onChange:setViewDate,onNextMonth:setNextMonth,onPrevMonth:setPrevMonth,disablePickers:disablePickers||"s"===size,className:Calendar_Calendar_module.Calendar__header,prevMonthLabel,nextMonthLabel,changeMonthLabel,changeYearLabel,prevMonthIcon,nextMonthIcon,prevMonthProps,nextMonthProps,isMonthDisabled,isYearDisabled}),(0,jsx_runtime.jsx)(CalendarDays.A,{viewDate:externalViewDate||viewDate,value,weekStartsOn,isDayFocused,tabIndex:0,"aria-label":changeDayLabel,onKeyDown:handleKeyDown,onDayChange,isDayActive,isDaySelectionStart:calendar.vP,isDaySelectionEnd:calendar.pE,isDayDisabled,onBlur:resetSelectedDay,showNeighboringMonth,size,dayProps,listenDayChangesForUpdate}),enableTime&&value&&"s"!==size&&(0,jsx_runtime.jsx)("div",{className:Calendar_Calendar_module.Calendar__time,children:(0,jsx_runtime.jsx)(CalendarTime,{value,onChange,onClose,doneButtonText,changeHoursLabel,changeMinutesLabel,isDayDisabled:minDateTime||maxDateTime?isDayDisabled:void 0})})]})});try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},disablePast:{defaultValue:null,description:"Запрещает выбор даты в прошлом.\nПрименяется, если не заданы `shouldDisableDate` и `disableFuture`.",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"Запрещает выбор даты в будущем.\nПрименяется, если не задано `shouldDisableDate`.",name:"disableFuture",required:!1,type:{name:"boolean"}},enableTime:{defaultValue:{value:"false"},description:"",name:"enableTime",required:!1,type:{name:"boolean"}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},doneButtonText:{defaultValue:null,description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeDayLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayLabel",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:{value:"1"},description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},showNeighboringMonth:{defaultValue:null,description:"",name:"showNeighboringMonth",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: Date) => void)"}},shouldDisableDate:{defaultValue:null,description:"Позволяет запретить выбор даты.",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},viewDate:{defaultValue:null,description:"Дата отображаемого месяца.\nПри использовании обновление даты должно происходить вне компонента.",name:"viewDate",required:!1,type:{name:"Date"}},onHeaderChange:{defaultValue:null,description:"Изменение даты в шапке календаря.",name:"onHeaderChange",required:!1,type:{name:"((value: Date) => void)"}},minDateTime:{defaultValue:null,description:"Минимальные дата и время, которые можно выбрать\nПрименяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.",name:"minDateTime",required:!1,type:{name:"Date"}},maxDateTime:{defaultValue:null,description:"Максимальные дата и время, которые можно выбрать.\nПрименяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.",name:"maxDateTime",required:!1,type:{name:"Date"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},changeHoursLabel:{defaultValue:{value:"Изменить час"},description:"",name:"changeHoursLabel",required:!1,type:{name:"string"}},changeMinutesLabel:{defaultValue:{value:"Изменить минуту"},description:"",name:"changeMinutesLabel",required:!1,type:{name:"string"}},prevMonthLabel:{defaultValue:{value:"Предыдущий месяц"},description:"",name:"prevMonthLabel",required:!1,type:{name:"string"}},nextMonthLabel:{defaultValue:{value:"Следующий месяц"},description:"",name:"nextMonthLabel",required:!1,type:{name:"string"}},changeMonthLabel:{defaultValue:{value:"Изменить месяц"},description:"",name:"changeMonthLabel",required:!1,type:{name:"string"}},changeYearLabel:{defaultValue:{value:"Изменить год"},description:"",name:"changeYearLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},onNextMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на следующий месяц.",name:"onNextMonth",required:!1,type:{name:"(() => void)"}},onPrevMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на предыдущий месяц.",name:"onPrevMonth",required:!1,type:{name:"(() => void)"}},prevMonthProps:{defaultValue:null,description:"",name:"prevMonthProps",required:!1,type:{name:"ArrowMonthProps"}},nextMonthProps:{defaultValue:null,description:"",name:"nextMonthProps",required:!1,type:{name:"ArrowMonthProps"}},listenDayChangesForUpdate:{defaultValue:null,description:"",name:"listenDayChangesForUpdate",required:!1,type:{name:"boolean"}},dayProps:{defaultValue:null,description:"",name:"dayProps",required:!1,type:{name:"CalendarDayElementProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/Calendar.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/Calendar/Calendar.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}}}]);