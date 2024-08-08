"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dark/cyberSecurity",{

/***/ "./src/components/CyberSecurity/Portfolio.jsx":
/*!****************************************************!*\
  !*** ./src/components/CyberSecurity/Portfolio.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/loadBackgroudImages */ \"./src/common/loadBackgroudImages.js\");\n/* harmony import */ var _common_isInView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/isInView */ \"./src/common/isInView.js\");\n/* harmony import */ var _data_CyberSecurity_portfolio_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data/CyberSecurity/portfolio.json */ \"./src/data/CyberSecurity/portfolio.json\");\n\nvar _s = $RefreshSig$();\n\n\n//= Scripts\n\n\n//= Data\n\nfunction Portfolio(param) {\n    let { lightMode  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        window.addEventListener(\"scroll\", handleShowTabs);\n        return ()=>window.removeEventListener(\"scroll\", handleShowTabs);\n    }, []);\n    function handleShowTabs() {\n        (0,_common_isInView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            selector: \".portfolio-fixed .sub-bg .cont\",\n            isElements: true,\n            callback (element) {\n                var _document_querySelector;\n                element.classList.add(\"current\");\n                (_document_querySelector = document.querySelector(\"#\" + element.getAttribute(\"data-tab\"))) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.classList.add(\"current\");\n            },\n            whenOutOfView (element) {\n                var _document_querySelector;\n                element.classList.remove(\"current\");\n                (_document_querySelector = document.querySelector(\"#\" + element.getAttribute(\"data-tab\"))) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.classList.remove(\"current\");\n            }\n        });\n        const leftSide = document.getElementById(\"sticky_item\");\n        if (!leftSide) return;\n        const width = leftSide.getBoundingClientRect().width;\n        const portfolio = document.querySelector(\".portfolio-fixed\").getBoundingClientRect();\n        if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom) {\n            leftSide.style.position = \"fixed\";\n            leftSide.style.top = \"0px\";\n            leftSide.style.width = width + \"px\";\n            leftSide.classList.remove(\"is_stuck\");\n        } else if (portfolio.height / 2 > portfolio.bottom) {\n            leftSide.style.position = \"absolute\";\n            leftSide.style.top = \"auto\";\n            leftSide.style.bottom = \"0\";\n            leftSide.style.width = width + \"px\";\n            leftSide.classList.add(\"is_stuck\");\n            document.querySelector(\"#tab-\".concat(document.querySelectorAll(\"[data-tab]\").length)).classList.add(\"current\");\n        } else {\n            leftSide.style.position = \"relative\";\n            leftSide.style.top = \"unset\";\n            leftSide.style.bottom = \"unset\";\n            leftSide.style.width = \"auto\";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"portfolio-fixed\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid rest\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-6 rest\",\n                        style: {\n                            position: \"relative\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            id: \"sticky_item\",\n                            children: _data_CyberSecurity_portfolio_json__WEBPACK_IMPORTED_MODULE_5__.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"tab-\".concat(index + 1),\n                                    className: \"img bg-img\",\n                                    \"data-background\": \"\".concat(lightMode ? \"/light/\" : \"/dark/\").concat(item.image)\n                                }, index, false, {\n                                    fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-6 sub-bg right\",\n                        children: _data_CyberSecurity_portfolio_json__WEBPACK_IMPORTED_MODULE_5__.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cont \".concat(index === 0 ? \"active\" : \"\"),\n                                \"data-tab\": \"tab-\".concat(index + 1),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img-hiden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"\".concat(lightMode ? \"/light/\" : \"/dark/\").concat(item.image),\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sub-title mb-15\",\n                                        children: [\n                                            item.number,\n                                            \" \",\n                                            item.type\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mb-15\",\n                                        children: [\n                                            item.title,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"row\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-md-9\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    item.text,\n                                                    \".\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ahmed/Others/Pledge-Grow/src/components/CyberSecurity/Portfolio.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Portfolio, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DeWJlclNlY3VyaXR5L1BvcnRmb2xpby5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1o7QUFDN0IsV0FBVztBQUNvRDtBQUN0QjtBQUN6QyxRQUFRO0FBQytDO0FBRXZELFNBQVNNLFVBQVUsS0FBYSxFQUFFO1FBQWYsRUFBRUMsVUFBUyxFQUFFLEdBQWI7O0lBQ2pCTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RFLHVFQUFtQkE7UUFDbkJLLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVDO1FBQ2xDLE9BQU8sSUFBTUYsT0FBT0csbUJBQW1CLENBQUMsVUFBVUQ7SUFDcEQsR0FBRyxFQUFFO0lBRUwsU0FBU0EsaUJBQWlCO1FBQ3hCTiw0REFBUUEsQ0FBQztZQUNQUSxVQUFVO1lBQ1ZDLFlBQVksSUFBSTtZQUNoQkMsVUFBU0MsT0FBTyxFQUFFO29CQUVoQkM7Z0JBREFELFFBQVFFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUN0QkYsQ0FBQUEsMEJBQUFBLFNBQVNHLGFBQWEsQ0FBQyxNQUFNSixRQUFRSyxZQUFZLENBQUMsMEJBQWxESixxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQWdFQyxVQUFVQyxHQUFHLENBQUMsVUFBVTtZQUMxRjtZQUNBRyxlQUFjTixPQUFPLEVBQUU7b0JBRXJCQztnQkFEQUQsUUFBUUUsU0FBUyxDQUFDSyxNQUFNLENBQUM7Z0JBQ3pCTixDQUFBQSwwQkFBQUEsU0FBU0csYUFBYSxDQUFDLE1BQU1KLFFBQVFLLFlBQVksQ0FBQywwQkFBbERKLHFDQUFBQSxLQUFBQSxJQUFBQSx3QkFBZ0VDLFVBQVVLLE1BQU0sQ0FBQyxVQUFVO1lBQzdGO1FBQ0Y7UUFFQSxNQUFNQyxXQUFXUCxTQUFTUSxjQUFjLENBQUM7UUFDekMsSUFBSSxDQUFDRCxVQUFVO1FBQ2YsTUFBTUUsUUFBUUYsU0FBU0cscUJBQXFCLEdBQUdELEtBQUs7UUFDcEQsTUFBTUUsWUFBWVgsU0FBU0csYUFBYSxDQUFDLG9CQUFvQk8scUJBQXFCO1FBRWxGLElBQUlDLFVBQVVDLEdBQUcsR0FBRyxNQUFNRCxVQUFVRSxNQUFNLEdBQUcsSUFBSUYsVUFBVUcsTUFBTSxFQUFFO1lBQ2pFUCxTQUFTUSxLQUFLLENBQUNDLFFBQVEsR0FBRztZQUMxQlQsU0FBU1EsS0FBSyxDQUFDSCxHQUFHLEdBQUc7WUFDckJMLFNBQVNRLEtBQUssQ0FBQ04sS0FBSyxHQUFHQSxRQUFRO1lBQy9CRixTQUFTTixTQUFTLENBQUNLLE1BQU0sQ0FBQztRQUM1QixPQUFPLElBQUlLLFVBQVVFLE1BQU0sR0FBRyxJQUFJRixVQUFVRyxNQUFNLEVBQUU7WUFDbERQLFNBQVNRLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1lBQzFCVCxTQUFTUSxLQUFLLENBQUNILEdBQUcsR0FBRztZQUNyQkwsU0FBU1EsS0FBSyxDQUFDRCxNQUFNLEdBQUc7WUFDeEJQLFNBQVNRLEtBQUssQ0FBQ04sS0FBSyxHQUFHQSxRQUFRO1lBQy9CRixTQUFTTixTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUN2QkYsU0FBU0csYUFBYSxDQUFDLFFBQXVELE9BQS9DSCxTQUFTaUIsZ0JBQWdCLENBQUMsY0FBY0MsTUFBTSxHQUFJakIsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDakcsT0FBTztZQUNMSyxTQUFTUSxLQUFLLENBQUNDLFFBQVEsR0FBRztZQUMxQlQsU0FBU1EsS0FBSyxDQUFDSCxHQUFHLEdBQUc7WUFDckJMLFNBQVNRLEtBQUssQ0FBQ0QsTUFBTSxHQUFHO1lBQ3hCUCxTQUFTUSxLQUFLLENBQUNOLEtBQUssR0FBRztRQUN6QixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ1U7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7d0JBQWdCTCxPQUFPOzRCQUFFQyxVQUFVO3dCQUFXO2tDQUMzRCw0RUFBQ0s7NEJBQUlELFdBQVU7NEJBQU9FLElBQUc7c0NBRXJCakMsbUVBQVEsQ0FBQyxDQUFDbUMsTUFBTUMsc0JBQ2QsOERBQUNKO29DQUFJQyxJQUFJLE9BQWlCLE9BQVZHLFFBQVE7b0NBQUtMLFdBQVU7b0NBQWFNLG1CQUFpQixHQUFzQ0YsT0FBbkNqQyxZQUFZLFlBQVksUUFBUSxFQUFjLE9BQVhpQyxLQUFLRyxLQUFLO21DQUFTRjs7Ozs7Ozs7Ozs7Ozs7O2tDQUt0SSw4REFBQ0o7d0JBQUlELFdBQVU7a0NBRVgvQixtRUFBUSxDQUFDLENBQUNtQyxNQUFNQyxzQkFDZCw4REFBQ0o7Z0NBQUlELFdBQVcsUUFBb0MsT0FBNUJLLFVBQVUsSUFBSSxXQUFXLEVBQUU7Z0NBQUlHLFlBQVUsT0FBaUIsT0FBVkgsUUFBUTs7a0RBQzlFLDhEQUFDSjt3Q0FBSUQsV0FBVTtrREFDYiw0RUFBQ1M7NENBQUlDLEtBQUssR0FBc0NOLE9BQW5DakMsWUFBWSxZQUFZLFFBQVEsRUFBYyxPQUFYaUMsS0FBS0csS0FBSzs0Q0FBSUksS0FBSTs7Ozs7Ozs7Ozs7a0RBRXBFLDhEQUFDQzt3Q0FBS1osV0FBVTs7NENBQW1CSSxLQUFLUyxNQUFNOzRDQUFDOzRDQUFFVCxLQUFLVSxJQUFJOzs7Ozs7O2tEQUMxRCw4REFBQ0M7d0NBQUdmLFdBQVU7OzRDQUFTSSxLQUFLWSxLQUFLOzRDQUFDOzs7Ozs7O2tEQUNsQyw4REFBQ2Y7d0NBQUlELFdBQVU7a0RBQ2IsNEVBQUNDOzRDQUFJRCxXQUFVO3NEQUNiLDRFQUFDaUI7O29EQUFHYixLQUFLYyxJQUFJO29EQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBUnNFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQzFHO0dBOUZTbkM7S0FBQUE7QUFnR1QsK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3liZXJTZWN1cml0eS9Qb3J0Zm9saW8uanN4P2I1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLz0gU2NyaXB0c1xuaW1wb3J0IGxvYWRCYWNrZ3JvdWRJbWFnZXMgZnJvbSAnQC9jb21tb24vbG9hZEJhY2tncm91ZEltYWdlcyc7XG5pbXBvcnQgaXNJblZpZXcgZnJvbSAnQC9jb21tb24vaXNJblZpZXcnO1xuLy89IERhdGFcbmltcG9ydCBkYXRhIGZyb20gJ0AvZGF0YS9DeWJlclNlY3VyaXR5L3BvcnRmb2xpby5qc29uJztcblxuZnVuY3Rpb24gUG9ydGZvbGlvKHsgbGlnaHRNb2RlIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQmFja2dyb3VkSW1hZ2VzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNob3dUYWJzKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNob3dUYWJzKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNob3dUYWJzKCkge1xuICAgIGlzSW5WaWV3KHtcbiAgICAgIHNlbGVjdG9yOiAnLnBvcnRmb2xpby1maXhlZCAuc3ViLWJnIC5jb250JyxcbiAgICAgIGlzRWxlbWVudHM6IHRydWUsXG4gICAgICBjYWxsYmFjayhlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJykpPy5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICB9LFxuICAgICAgd2hlbk91dE9mVmlldyhlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJykpPy5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGlja3lfaXRlbScpO1xuICAgIGlmICghbGVmdFNpZGUpIHJldHVybjtcbiAgICBjb25zdCB3aWR0aCA9IGxlZnRTaWRlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IHBvcnRmb2xpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tZml4ZWQnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChwb3J0Zm9saW8udG9wIDwgNzUgJiYgcG9ydGZvbGlvLmhlaWdodCAvIDIgPCBwb3J0Zm9saW8uYm90dG9tKSB7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgIGxlZnRTaWRlLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgbGVmdFNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXNfc3R1Y2snKVxuICAgIH0gZWxzZSBpZiAocG9ydGZvbGlvLmhlaWdodCAvIDIgPiBwb3J0Zm9saW8uYm90dG9tKSB7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS5ib3R0b20gPSAnMCc7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2lzX3N0dWNrJylcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YWItJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFiXVwiKS5sZW5ndGh9YCkuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBsZWZ0U2lkZS5zdHlsZS50b3AgPSAndW5zZXQnO1xuICAgICAgbGVmdFNpZGUuc3R5bGUuYm90dG9tID0gJ3Vuc2V0JztcbiAgICAgIGxlZnRTaWRlLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWZpeGVkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCByZXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiByZXN0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIiBpZD1cInN0aWNreV9pdGVtXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2B0YWItJHtpbmRleCArIDF9YH0gY2xhc3NOYW1lPVwiaW1nIGJnLWltZ1wiIGRhdGEtYmFja2dyb3VuZD17YCR7bGlnaHRNb2RlID8gJy9saWdodC8nIDogJy9kYXJrLyd9JHtpdGVtLmltYWdlfWB9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBzdWItYmcgcmlnaHRcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250ICR7aW5kZXggPT09IDAgPyAnYWN0aXZlJyA6ICcnfWB9IGRhdGEtdGFiPXtgdGFiLSR7aW5kZXggKyAxfWB9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaGlkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2xpZ2h0TW9kZSA/ICcvbGlnaHQvJyA6ICcvZGFyay8nfSR7aXRlbS5pbWFnZX1gfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGUgbWItMTVcIj57aXRlbS5udW1iZXJ9IHtpdGVtLnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTE1XCI+e2l0ZW0udGl0bGV9LjwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGV4dH0uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInZldy1hbGwgbXQtNTAgbWwtMjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFyay9wcm9qZWN0LWRldGFpbHMyXCIgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGxvcmUgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzLjkyMiA0LjVWMTEuODEyNUMxMy45MjIgMTEuOTI0NCAxMy44Nzc2IDEyLjAzMTcgMTMuNzk4NSAxMi4xMTA4QzEzLjcxOTMgMTIuMTg5OSAxMy42MTIgMTIuMjM0NCAxMy41MDAyIDEyLjIzNDRDMTMuMzg4MyAxMi4yMzQ0IDEzLjI4MSAxMi4xODk5IDEzLjIwMTggMTIuMTEwOEMxMy4xMjI3IDEyLjAzMTcgMTMuMDc4MyAxMS45MjQ0IDEzLjA3ODMgMTEuODEyNVY1LjUxOTUzTDQuNzk1NDcgMTMuNzk1M0M0LjcxNzE1IDEzLjg3MzYgNC42MTA5MiAxMy45MTc2IDQuNTAwMTUgMTMuOTE3NkM0LjM4OTM5IDEzLjkxNzYgNC4yODMxNiAxMy44NzM2IDQuMjA0ODQgMTMuNzk1M0M0LjEyNjUyIDEzLjcxNyA0LjA4MjUyIDEzLjYxMDggNC4wODI1MiAxMy41QzQuMDgyNTIgMTMuMzg5MiA0LjEyNjUyIDEzLjI4MyA0LjIwNDg0IDEzLjIwNDdMMTIuNDgwNiA0LjkyMTg4SDYuMTg3NjVDNi4wNzU3NyA0LjkyMTg4IDUuOTY4NDYgNC44Nzc0MyA1Ljg4OTM0IDQuNzk4MzFDNS44MTAyMyA0LjcxOTE5IDUuNzY1NzggNC42MTE4OSA1Ljc2NTc4IDQuNUM1Ljc2NTc4IDQuMzg4MTEgNS44MTAyMyA0LjI4MDgxIDUuODg5MzQgNC4yMDE2OUM1Ljk2ODQ2IDQuMTIyNTcgNi4wNzU3NyA0LjA3ODEzIDYuMTg3NjUgNC4wNzgxMkgxMy41MDAyQzEzLjYxMiA0LjA3ODEzIDEzLjcxOTMgNC4xMjI1NyAxMy43OTg1IDQuMjAxNjlDMTMuODc3NiA0LjI4MDgxIDEzLjkyMiA0LjM4ODExIDEzLjkyMiA0LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTGluayIsImxvYWRCYWNrZ3JvdWRJbWFnZXMiLCJpc0luVmlldyIsImRhdGEiLCJQb3J0Zm9saW8iLCJsaWdodE1vZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2hvd1RhYnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsZWN0b3IiLCJpc0VsZW1lbnRzIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwid2hlbk91dE9mVmlldyIsInJlbW92ZSIsImxlZnRTaWRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvcnRmb2xpbyIsInRvcCIsImhlaWdodCIsImJvdHRvbSIsInN0eWxlIiwicG9zaXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGF0YS1iYWNrZ3JvdW5kIiwiaW1hZ2UiLCJkYXRhLXRhYiIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJudW1iZXIiLCJ0eXBlIiwiaDIiLCJ0aXRsZSIsInAiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CyberSecurity/Portfolio.jsx\n"));

/***/ }),

/***/ "./src/data/CyberSecurity/portfolio.json":
/*!***********************************************!*\
  !*** ./src/data/CyberSecurity/portfolio.json ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('[{"id":1,"image":"assets/imgs/portfolio/gallery/1.jpg","number":"01.","type":"","title":"Expertise en IA","text":"Notre équipe comprend des experts en IA et en apprentissage automatique qui possèdent une connaissance approfondie des dernières technologies et pratiques."},{"id":2,"image":"assets/imgs/portfolio/gallery/2.jpg","number":"02.","type":"","title":"Approche Proactive","text":"Surveillance proactive et optimisation continue pour garantir des performances optimales et anticiper les problèmes potentiels."},{"id":3,"image":"assets/imgs/portfolio/gallery/3.jpg","number":"03.","type":"","title":"Adaptabilité","text":"Services de maintenance personnalisés pour répondre spécifiquement aux besoins de votre entreprise et de vos utilisateurs."},{"id":4,"image":"assets/imgs/portfolio/gallery/1.jpg","number":"01.","type":"","title":"Sécurité et Conformité ","text":"Engagement envers la sécurité des données et la conformité aux normes réglementaires et éthiques."}]');

/***/ })

});