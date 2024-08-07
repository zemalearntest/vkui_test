"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7521],{"./src/components/AdaptivityProvider/AdaptivityProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_AdaptivityProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Service/AdaptivityProvider",component:_AdaptivityProvider__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC}},DisplayAdaptivityProvider=()=>{const{sizeX,sizeY}=(0,_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_3__.V)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[sizeX.compact&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{padding:5},children:"Size X: Compact"}),sizeX.regular&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{padding:5},children:"Size X: Regular"}),sizeY.compact&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{padding:5},children:"Size Y: Compact"}),sizeY.regular&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{padding:5},children:"Size Y: Regular"})]})},Playground={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AdaptivityProvider__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DisplayAdaptivityProvider,{})})},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: args => <AdaptivityProvider {...args}>\n      <DisplayAdaptivityProvider />\n    </AdaptivityProvider>\n}",...Playground.parameters?.docs?.source}}}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}}}]);