"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2255],{"./src/components/Typography/Caption/Caption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Caption});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Caption_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Caption/Caption.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Caption_module.A,options);const Caption_Caption_module=Caption_module.A&&Caption_module.A.locals?Caption_module.A.locals:void 0,stylesLevel={1:Caption_Caption_module.level1,2:Caption_Caption_module.level2,3:Caption_Caption_module.level3},sizeYClassNames={none:Caption_Caption_module.sizeYNone,compact:Caption_Caption_module.sizeYCompact},Caption=({className,level="1",caps,Component="span",normalize=!0,inline=!1,...restProps})=>{const{sizeY="none"}=(0,useAdaptivity.L)();return(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,className:(0,es6.xW)(className,"regular"!==sizeY&&sizeYClassNames[sizeY],caps&&Caption_Caption_module.caps,stylesLevel[level]),...restProps})};try{Caption.displayName="Caption",Caption.__docgenInfo={description:"Используется для мелких подписей.",displayName:"Caption",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},useAccentWeight:{defaultValue:null,description:"Включает акцентный тип начертания шрифта.\nИспользуются токены fontWeightAccent[1, 2, 3]\nИспользуется только вместе с `weight`",name:"useAccentWeight",required:!1,type:{name:"boolean"}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Caption/Caption.tsx#Caption"]={docgenInfo:Caption.__docgenInfo,name:"Caption",path:"src/components/Typography/Caption/Caption.tsx#Caption"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Caption/Caption.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Caption__caps--XtNpN{text-transform:uppercase}.Caption__level1--BGvyv{font-family:var(--vkui--font_caption1--font_family--regular);font-size:var(--vkui--font_caption1--font_size--regular);font-weight:var(--vkui--font_caption1--font_weight--regular);line-height:var(--vkui--font_caption1--line_height--regular)}.Caption__sizeYCompact--xowKV.Caption__level1--BGvyv{font-family:var(\n    --vkui--font_caption1--font_family--compact,var(--vkui--font_caption1--font_family--regular)\n  );font-size:var(\n    --vkui--font_caption1--font_size--compact,var(--vkui--font_caption1--font_size--regular)\n  );font-weight:var(\n    --vkui--font_caption1--font_weight--compact,var(--vkui--font_caption1--font_weight--regular)\n  );line-height:var(\n    --vkui--font_caption1--line_height--compact,var(--vkui--font_caption1--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Caption__sizeYNone--Ns9Kf.Caption__level1--BGvyv{font-family:var(\n      --vkui--font_caption1--font_family--compact,var(--vkui--font_caption1--font_family--regular)\n    );font-size:var(\n      --vkui--font_caption1--font_size--compact,var(--vkui--font_caption1--font_size--regular)\n    );font-weight:var(\n      --vkui--font_caption1--font_weight--compact,var(--vkui--font_caption1--font_weight--regular)\n    );line-height:var(\n      --vkui--font_caption1--line_height--compact,var(--vkui--font_caption1--line_height--regular)\n    )}}.Caption__level1--BGvyv.Caption__caps--XtNpN{font-family:var(--vkui--font_caption1_caps--font_family--regular);font-size:var(--vkui--font_caption1_caps--font_size--regular);font-weight:var(--vkui--font_caption1_caps--font_weight--regular);line-height:var(--vkui--font_caption1_caps--line_height--regular)}.Caption__sizeYCompact--xowKV.Caption__level1--BGvyv.Caption__caps--XtNpN{font-family:var(\n    --vkui--font_caption1_caps--font_family--compact,var(--vkui--font_caption1_caps--font_family--regular)\n  );font-size:var(\n    --vkui--font_caption1_caps--font_size--compact,var(--vkui--font_caption1_caps--font_size--regular)\n  );font-weight:var(\n    --vkui--font_caption1_caps--font_weight--compact,var(--vkui--font_caption1_caps--font_weight--regular)\n  );line-height:var(\n    --vkui--font_caption1_caps--line_height--compact,var(--vkui--font_caption1_caps--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Caption__sizeYNone--Ns9Kf.Caption__level1--BGvyv.Caption__caps--XtNpN{font-family:var(\n      --vkui--font_caption1_caps--font_family--compact,var(--vkui--font_caption1_caps--font_family--regular)\n    );font-size:var(\n      --vkui--font_caption1_caps--font_size--compact,var(--vkui--font_caption1_caps--font_size--regular)\n    );font-weight:var(\n      --vkui--font_caption1_caps--font_weight--compact,var(--vkui--font_caption1_caps--font_weight--regular)\n    );line-height:var(\n      --vkui--font_caption1_caps--line_height--compact,var(--vkui--font_caption1_caps--line_height--regular)\n    )}}.Caption__level2--eXWy7{font-family:var(--vkui--font_caption2--font_family--regular);font-size:var(--vkui--font_caption2--font_size--regular);font-weight:var(--vkui--font_caption2--font_weight--regular);line-height:var(--vkui--font_caption2--line_height--regular)}.Caption__sizeYCompact--xowKV.Caption__level2--eXWy7{font-family:var(\n    --vkui--font_caption2--font_family--compact,var(--vkui--font_caption2--font_family--regular)\n  );font-size:var(\n    --vkui--font_caption2--font_size--compact,var(--vkui--font_caption2--font_size--regular)\n  );font-weight:var(\n    --vkui--font_caption2--font_weight--compact,var(--vkui--font_caption2--font_weight--regular)\n  );line-height:var(\n    --vkui--font_caption2--line_height--compact,var(--vkui--font_caption2--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Caption__sizeYNone--Ns9Kf.Caption__level2--eXWy7{font-family:var(\n      --vkui--font_caption2--font_family--compact,var(--vkui--font_caption2--font_family--regular)\n    );font-size:var(\n      --vkui--font_caption2--font_size--compact,var(--vkui--font_caption2--font_size--regular)\n    );font-weight:var(\n      --vkui--font_caption2--font_weight--compact,var(--vkui--font_caption2--font_weight--regular)\n    );line-height:var(\n      --vkui--font_caption2--line_height--compact,var(--vkui--font_caption2--line_height--regular)\n    )}}.Caption__level2--eXWy7.Caption__caps--XtNpN{font-family:var(--vkui--font_caption2_caps--font_family--regular);font-size:var(--vkui--font_caption2_caps--font_size--regular);font-weight:var(--vkui--font_caption2_caps--font_weight--regular);line-height:var(--vkui--font_caption2_caps--line_height--regular)}.Caption__sizeYCompact--xowKV.Caption__level2--eXWy7.Caption__caps--XtNpN{font-family:var(\n    --vkui--font_caption2_caps--font_family--compact,var(--vkui--font_caption2_caps--font_family--regular)\n  );font-size:var(\n    --vkui--font_caption2_caps--font_size--compact,var(--vkui--font_caption2_caps--font_size--regular)\n  );font-weight:var(\n    --vkui--font_caption2_caps--font_weight--compact,var(--vkui--font_caption2_caps--font_weight--regular)\n  );line-height:var(\n    --vkui--font_caption2_caps--line_height--compact,var(--vkui--font_caption2_caps--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Caption__sizeYNone--Ns9Kf.Caption__level2--eXWy7.Caption__caps--XtNpN{font-family:var(\n      --vkui--font_caption2_caps--font_family--compact,var(--vkui--font_caption2_caps--font_family--regular)\n    );font-size:var(\n      --vkui--font_caption2_caps--font_size--compact,var(--vkui--font_caption2_caps--font_size--regular)\n    );font-weight:var(\n      --vkui--font_caption2_caps--font_weight--compact,var(--vkui--font_caption2_caps--font_weight--regular)\n    );line-height:var(\n      --vkui--font_caption2_caps--line_height--compact,var(--vkui--font_caption2_caps--line_height--regular)\n    )}}.Caption__level3--ussqe{font-family:var(--vkui--font_caption3--font_family--regular);font-size:var(--vkui--font_caption3--font_size--regular);font-weight:var(--vkui--font_caption3--font_weight--regular);line-height:var(--vkui--font_caption3--line_height--regular)}.Caption__sizeYCompact--xowKV.Caption__level3--ussqe{font-family:var(\n    --vkui--font_caption3--font_family--compact,var(--vkui--font_caption3--font_family--regular)\n  );font-size:var(\n    --vkui--font_caption3--font_size--compact,var(--vkui--font_caption3--font_size--regular)\n  );font-weight:var(\n    --vkui--font_caption3--font_weight--compact,var(--vkui--font_caption3--font_weight--regular)\n  );line-height:var(\n    --vkui--font_caption3--line_height--compact,var(--vkui--font_caption3--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Caption__sizeYNone--Ns9Kf.Caption__level3--ussqe{font-family:var(\n      --vkui--font_caption3--font_family--compact,var(--vkui--font_caption3--font_family--regular)\n    );font-size:var(\n      --vkui--font_caption3--font_size--compact,var(--vkui--font_caption3--font_size--regular)\n    );font-weight:var(\n      --vkui--font_caption3--font_weight--compact,var(--vkui--font_caption3--font_weight--regular)\n    );line-height:var(\n      --vkui--font_caption3--line_height--compact,var(--vkui--font_caption3--line_height--regular)\n    )}}.Caption__level3--ussqe.Caption__caps--XtNpN{font-family:var(--vkui--font_caption3_caps--font_family--regular);font-size:var(--vkui--font_caption3_caps--font_size--regular);font-weight:var(--vkui--font_caption3_caps--font_weight--regular);line-height:var(--vkui--font_caption3_caps--line_height--regular)}.Caption__sizeYCompact--xowKV.Caption__level3--ussqe.Caption__caps--XtNpN{font-family:var(\n    --vkui--font_caption3_caps--font_family--compact,var(--vkui--font_caption3_caps--font_family--regular)\n  );font-size:var(\n    --vkui--font_caption3_caps--font_size--compact,var(--vkui--font_caption3_caps--font_size--regular)\n  );font-weight:var(\n    --vkui--font_caption3_caps--font_weight--compact,var(--vkui--font_caption3_caps--font_weight--regular)\n  );line-height:var(\n    --vkui--font_caption3_caps--line_height--compact,var(--vkui--font_caption3_caps--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Caption__sizeYNone--Ns9Kf.Caption__level3--ussqe.Caption__caps--XtNpN{font-family:var(\n      --vkui--font_caption3_caps--font_family--compact,var(--vkui--font_caption3_caps--font_family--regular)\n    );font-size:var(\n      --vkui--font_caption3_caps--font_size--compact,var(--vkui--font_caption3_caps--font_size--regular)\n    );font-weight:var(\n      --vkui--font_caption3_caps--font_weight--compact,var(--vkui--font_caption3_caps--font_weight--regular)\n    );line-height:var(\n      --vkui--font_caption3_caps--line_height--compact,var(--vkui--font_caption3_caps--line_height--regular)\n    )}}","",{version:3,sources:["webpack://./src/components/Typography/Caption/Caption.module.css"],names:[],mappings:"AAAA,sBACE,wBACF,CAEA,wBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,qDAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,kDAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF,CAEA,6CAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAGF,CAEA,0EAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,uEAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF,CAEA,wBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,qDAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,kDAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF,CAEA,6CAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAGF,CAEA,0EAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,uEAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF,CAEA,wBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,qDAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,kDAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF,CAEA,6CAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAGF,CAEA,0EAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,uEAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF",sourcesContent:[".caps {\n  text-transform: uppercase;\n}\n\n.level1 {\n  font-size: var(--vkui--font_caption1--font_size--regular);\n  line-height: var(--vkui--font_caption1--line_height--regular);\n  font-weight: var(--vkui--font_caption1--font_weight--regular);\n  font-family: var(--vkui--font_caption1--font_family--regular);\n}\n\n.sizeYCompact.level1 {\n  font-size: var(\n    --vkui--font_caption1--font_size--compact,\n    var(--vkui--font_caption1--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_caption1--line_height--compact,\n    var(--vkui--font_caption1--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_caption1--font_weight--compact,\n    var(--vkui--font_caption1--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_caption1--font_family--compact,\n    var(--vkui--font_caption1--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level1 {\n    font-size: var(\n      --vkui--font_caption1--font_size--compact,\n      var(--vkui--font_caption1--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_caption1--line_height--compact,\n      var(--vkui--font_caption1--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_caption1--font_weight--compact,\n      var(--vkui--font_caption1--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_caption1--font_family--compact,\n      var(--vkui--font_caption1--font_family--regular)\n    );\n  }\n}\n\n.level1.caps {\n  font-size: var(--vkui--font_caption1_caps--font_size--regular);\n  line-height: var(--vkui--font_caption1_caps--line_height--regular);\n  font-weight: var(--vkui--font_caption1_caps--font_weight--regular);\n  font-family: var(--vkui--font_caption1_caps--font_family--regular);\n}\n\n.sizeYCompact.level1.caps {\n  font-size: var(\n    --vkui--font_caption1_caps--font_size--compact,\n    var(--vkui--font_caption1_caps--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_caption1_caps--line_height--compact,\n    var(--vkui--font_caption1_caps--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_caption1_caps--font_weight--compact,\n    var(--vkui--font_caption1_caps--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_caption1_caps--font_family--compact,\n    var(--vkui--font_caption1_caps--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level1.caps {\n    font-size: var(\n      --vkui--font_caption1_caps--font_size--compact,\n      var(--vkui--font_caption1_caps--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_caption1_caps--line_height--compact,\n      var(--vkui--font_caption1_caps--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_caption1_caps--font_weight--compact,\n      var(--vkui--font_caption1_caps--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_caption1_caps--font_family--compact,\n      var(--vkui--font_caption1_caps--font_family--regular)\n    );\n  }\n}\n\n.level2 {\n  font-size: var(--vkui--font_caption2--font_size--regular);\n  line-height: var(--vkui--font_caption2--line_height--regular);\n  font-weight: var(--vkui--font_caption2--font_weight--regular);\n  font-family: var(--vkui--font_caption2--font_family--regular);\n}\n\n.sizeYCompact.level2 {\n  font-size: var(\n    --vkui--font_caption2--font_size--compact,\n    var(--vkui--font_caption2--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_caption2--line_height--compact,\n    var(--vkui--font_caption2--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_caption2--font_weight--compact,\n    var(--vkui--font_caption2--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_caption2--font_family--compact,\n    var(--vkui--font_caption2--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level2 {\n    font-size: var(\n      --vkui--font_caption2--font_size--compact,\n      var(--vkui--font_caption2--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_caption2--line_height--compact,\n      var(--vkui--font_caption2--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_caption2--font_weight--compact,\n      var(--vkui--font_caption2--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_caption2--font_family--compact,\n      var(--vkui--font_caption2--font_family--regular)\n    );\n  }\n}\n\n.level2.caps {\n  font-size: var(--vkui--font_caption2_caps--font_size--regular);\n  line-height: var(--vkui--font_caption2_caps--line_height--regular);\n  font-weight: var(--vkui--font_caption2_caps--font_weight--regular);\n  font-family: var(--vkui--font_caption2_caps--font_family--regular);\n}\n\n.sizeYCompact.level2.caps {\n  font-size: var(\n    --vkui--font_caption2_caps--font_size--compact,\n    var(--vkui--font_caption2_caps--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_caption2_caps--line_height--compact,\n    var(--vkui--font_caption2_caps--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_caption2_caps--font_weight--compact,\n    var(--vkui--font_caption2_caps--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_caption2_caps--font_family--compact,\n    var(--vkui--font_caption2_caps--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level2.caps {\n    font-size: var(\n      --vkui--font_caption2_caps--font_size--compact,\n      var(--vkui--font_caption2_caps--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_caption2_caps--line_height--compact,\n      var(--vkui--font_caption2_caps--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_caption2_caps--font_weight--compact,\n      var(--vkui--font_caption2_caps--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_caption2_caps--font_family--compact,\n      var(--vkui--font_caption2_caps--font_family--regular)\n    );\n  }\n}\n\n.level3 {\n  font-size: var(--vkui--font_caption3--font_size--regular);\n  line-height: var(--vkui--font_caption3--line_height--regular);\n  font-weight: var(--vkui--font_caption3--font_weight--regular);\n  font-family: var(--vkui--font_caption3--font_family--regular);\n}\n\n.sizeYCompact.level3 {\n  font-size: var(\n    --vkui--font_caption3--font_size--compact,\n    var(--vkui--font_caption3--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_caption3--line_height--compact,\n    var(--vkui--font_caption3--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_caption3--font_weight--compact,\n    var(--vkui--font_caption3--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_caption3--font_family--compact,\n    var(--vkui--font_caption3--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level3 {\n    font-size: var(\n      --vkui--font_caption3--font_size--compact,\n      var(--vkui--font_caption3--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_caption3--line_height--compact,\n      var(--vkui--font_caption3--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_caption3--font_weight--compact,\n      var(--vkui--font_caption3--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_caption3--font_family--compact,\n      var(--vkui--font_caption3--font_family--regular)\n    );\n  }\n}\n\n.level3.caps {\n  font-size: var(--vkui--font_caption3_caps--font_size--regular);\n  line-height: var(--vkui--font_caption3_caps--line_height--regular);\n  font-weight: var(--vkui--font_caption3_caps--font_weight--regular);\n  font-family: var(--vkui--font_caption3_caps--font_family--regular);\n}\n\n.sizeYCompact.level3.caps {\n  font-size: var(\n    --vkui--font_caption3_caps--font_size--compact,\n    var(--vkui--font_caption3_caps--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_caption3_caps--line_height--compact,\n    var(--vkui--font_caption3_caps--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_caption3_caps--font_weight--compact,\n    var(--vkui--font_caption3_caps--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_caption3_caps--font_family--compact,\n    var(--vkui--font_caption3_caps--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level3.caps {\n    font-size: var(\n      --vkui--font_caption3_caps--font_size--compact,\n      var(--vkui--font_caption3_caps--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_caption3_caps--line_height--compact,\n      var(--vkui--font_caption3_caps--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_caption3_caps--font_weight--compact,\n      var(--vkui--font_caption3_caps--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_caption3_caps--font_family--compact,\n      var(--vkui--font_caption3_caps--font_family--regular)\n    );\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={caps:"Caption__caps--XtNpN",level1:"Caption__level1--BGvyv",sizeYCompact:"Caption__sizeYCompact--xowKV",sizeYNone:"Caption__sizeYNone--Ns9Kf",level2:"Caption__level2--eXWy7",level3:"Caption__level3--ussqe"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);