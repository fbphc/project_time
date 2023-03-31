"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nfunction EventItem(props) {\n    const { title , image , date , location , id  } = props;\n    const humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const formattedAddress = location.replace(\",\", \"\\n\");\n    const exploreLink = \"/events/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().item),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                src: \"/\" + image,\n                alt: title,\n                width: 340,\n                height: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().summary),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_date_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                        children: humanReadableDate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().address),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_address_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                                        children: formattedAddress\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            link: exploreLink,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Explore Event\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_event_item_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 44\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/components/events/event-item.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\nvar _c;\n$RefreshReg$(_c, \"EventItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNLO0FBQ1E7QUFDTTtBQUNPO0FBQ1Q7QUFDZjtBQUUvQixTQUFTTyxVQUFVQyxLQUFLLEVBQUU7SUFDeEIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUVDLEdBQUUsRUFBRSxHQUFHTDtJQUM3QyxNQUFNTSxvQkFBb0IsSUFBSUMsS0FBS0osTUFBTUssa0JBQWtCLENBQUMsU0FBUztRQUNuRUMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBLE1BQU1DLG1CQUFtQlIsU0FBU1MsT0FBTyxDQUFDLEtBQUs7SUFDL0MsTUFBTUMsY0FBYyxXQUFjLE9BQUhUO0lBRS9CLHFCQUNFLDhEQUFDVTtRQUFHQyxXQUFXbkIsb0VBQVk7OzBCQUN6Qiw4REFBQ0MsbURBQUtBO2dCQUFDb0IsS0FBSyxNQUFNaEI7Z0JBQU9pQixLQUFLbEI7Z0JBQU9tQixPQUFPO2dCQUFLQyxRQUFPOzs7Ozs7MEJBQ3hELDhEQUFDQztnQkFBSU4sV0FBV25CLHVFQUFlOztrQ0FDN0IsOERBQUN5Qjt3QkFBSU4sV0FBV25CLHVFQUFlOzswQ0FDN0IsOERBQUM0QjswQ0FBSXhCOzs7Ozs7MENBQ0wsOERBQUNxQjtnQ0FBSU4sV0FBV25CLG9FQUFZOztrREFDMUIsOERBQUNILHdEQUFRQTs7Ozs7a0RBQ1QsOERBQUNnQztrREFBTXBCOzs7Ozs7Ozs7Ozs7MENBRVQsOERBQUNnQjtnQ0FBSU4sV0FBV25CLHVFQUFlOztrREFDN0IsOERBQUNGLDJEQUFXQTs7Ozs7a0RBQ1osOERBQUNnQztrREFBU2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZCw4REFBQ1U7d0JBQUlOLFdBQVduQix1RUFBZTtrQ0FDN0IsNEVBQUNKLGtEQUFNQTs0QkFBQ29DLE1BQU1mOzs4Q0FDWiw4REFBQ2dCOzhDQUFLOzs7Ozs7OENBQ04sOERBQUNBO29DQUFLZCxXQUFXbkIsb0VBQVk7OENBQUUsNEVBQUNELCtEQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFEO0tBbkNTRztBQXFDVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtLmpzPzZmZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvYnV0dG9uJztcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9kYXRlLWljb24nO1xuaW1wb3J0IEFkZHJlc3NJY29uIGZyb20gJy4uL2ljb25zL2FkZHJlc3MtaWNvbic7XG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnLi4vaWNvbnMvYXJyb3ctcmlnaHQtaWNvbic7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWl0ZW0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmZ1bmN0aW9uIEV2ZW50SXRlbShwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgZGF0ZSwgbG9jYXRpb24sIGlkIH0gPSBwcm9wcztcbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KTtcbiAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywnLCAnXFxuJyk7XG4gIGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxJbWFnZSBzcmM9eycvJyArIGltYWdlfSBhbHQ9e3RpdGxlfSB3aWR0aD17MzQwfSBoZWlnaHQ9XCJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT5cbiAgICAgICAgICAgIDxEYXRlSWNvbiAvPlxuICAgICAgICAgICAgPHRpbWU+e2h1bWFuUmVhZGFibGVEYXRlfTwvdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cbiAgICAgICAgICAgIDxBZGRyZXNzSWNvbiAvPlxuICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9e2V4cGxvcmVMaW5rfT5cbiAgICAgICAgICAgIDxzcGFuPkV4cGxvcmUgRXZlbnQ8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0+PEFycm93UmlnaHRJY29uIC8+PC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SXRlbTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiQnV0dG9uIiwiRGF0ZUljb24iLCJBZGRyZXNzSWNvbiIsIkFycm93UmlnaHRJY29uIiwiY2xhc3NlcyIsIkltYWdlIiwiRXZlbnRJdGVtIiwicHJvcHMiLCJ0aXRsZSIsImltYWdlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaWQiLCJodW1hblJlYWRhYmxlRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWRBZGRyZXNzIiwicmVwbGFjZSIsImV4cGxvcmVMaW5rIiwibGkiLCJjbGFzc05hbWUiLCJpdGVtIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJjb250ZW50Iiwic3VtbWFyeSIsImgyIiwidGltZSIsImFkZHJlc3MiLCJhY3Rpb25zIiwibGluayIsInNwYW4iLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n"));

/***/ })

});