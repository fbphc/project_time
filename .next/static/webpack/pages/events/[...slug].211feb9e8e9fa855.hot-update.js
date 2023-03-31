"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_events_events_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/events-list */ \"./components/events/events-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction FilteredEvents(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const filterData = router.query.slug;\n    // if (!filterData) {\n    //   return <p className=\"center\">Loading</p>;\n    // }\n    // const filteredYear = filterData[0];\n    // const filteredMonth = filterData[1];\n    // const numYear = +filteredYear;\n    // const numMonth = +filteredMonth;\n    if (props.hasError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Invalid filter. Please adjust your values!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Evens\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this);\n    }\n    const filteredEvents = props.events;\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No Events found for the chosen filter!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Evens\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    }\n    const date = new Date(numYear, numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_events_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[...slug].js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(FilteredEvents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FilteredEvents;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEvents);\nvar _c;\n$RefreshReg$(_c, \"FilteredEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0E7QUFFb0I7QUFDSztBQUNqQjtBQUNTO0FBRXpELFNBQVNPLGVBQWVDLEtBQUssRUFBRTs7SUFDN0IsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLHdDQUF3QztJQUV4QyxxQkFBcUI7SUFDckIsOENBQThDO0lBQzlDLElBQUk7SUFFSixzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBRXZDLGlDQUFpQztJQUNqQyxtQ0FBbUM7SUFFbkMsSUFBSU0sTUFBTUUsUUFBUSxFQUFFO1FBQ2xCLHFCQUNFLDhEQUFDVCwyQ0FBUUE7OzhCQUNQLDhEQUFDSyxrRUFBVUE7OEJBQ1QsNEVBQUNLO2tDQUFFOzs7Ozs7Ozs7Ozs4QkFFTCw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNSLDZEQUFNQTt3QkFBQ1MsTUFBSztrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJL0IsQ0FBQztJQUVELE1BQU1DLGlCQUFpQlAsTUFBTVEsTUFBTTtJQUVuQyxJQUFJLENBQUNELGtCQUFrQkEsZUFBZUUsTUFBTSxLQUFLLEdBQUc7UUFDbEQscUJBQ0UsOERBQUNoQiwyQ0FBUUE7OzhCQUNQLDhEQUFDSyxrRUFBVUE7OEJBQ1QsNEVBQUNLO2tDQUFFOzs7Ozs7Ozs7Ozs4QkFFTCw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNSLDZEQUFNQTt3QkFBQ1MsTUFBSztrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJL0IsQ0FBQztJQUVELE1BQU1JLE9BQU8sSUFBSUMsS0FBS0MsU0FBU0MsV0FBVztJQUMxQyxxQkFDRSw4REFBQ3BCLDJDQUFRQTs7MEJBQ1AsOERBQUNHLHdFQUFZQTtnQkFBQ2MsTUFBTUE7Ozs7OzswQkFDcEIsOERBQUNmLHNFQUFTQTtnQkFBQ21CLE9BQU9QOzs7Ozs7Ozs7Ozs7QUFHeEI7R0FqRFNSOztRQUNRTCxrREFBU0E7OztLQURqQks7O0FBeUZULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWxzJztcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLWxpc3QnO1xuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9yZXN1bHRzLXRpdGxlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9lcnJvci1hbGVydCc7XG5cbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbiAgLy8gaWYgKCFmaWx0ZXJEYXRhKSB7XG4gIC8vICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkxvYWRpbmc8L3A+O1xuICAvLyB9XG5cbiAgLy8gY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbiAgLy8gY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbiAgLy8gY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIC8vIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbiAgaWYgKHByb3BzLmhhc0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPEVycm9yQWxlcnQ+XG4gICAgICAgICAgPHA+SW52YWxpZCBmaWx0ZXIuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPlxuICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPVwiL2V2ZW50c1wiPlNob3cgQWxsIEV2ZW5zPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBwcm9wcy5ldmVudHM7XG5cbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgICA8cD5ObyBFdmVudHMgZm91bmQgZm9yIHRoZSBjaG9zZW4gZmlsdGVyITwvcD5cbiAgICAgICAgPC9FcnJvckFsZXJ0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gbGluaz1cIi9ldmVudHNcIj5TaG93IEFsbCBFdmVuczwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShudW1ZZWFyLCBudW1Nb250aCAtIDEpO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0gLz5cbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIGNvbnN0e3BhcmFtc309IGNvbnRleHQ7XG4gIGNvbnN0IGZpbHRlckRhdGEgPSBwYXJhbXMuc2x1ZztcbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG4gIGlmIChcbiAgICBpc05hTihudW1ZZWFyKSB8fFxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuICAgIG51bVllYXIgPiAyMDMwIHx8XG4gICAgbnVtWWVhciA8IDIwMjEgfHxcbiAgICBudW1Nb250aCA+IDEyIHx8XG4gICAgbnVtTW9udGggPCAxXG4gICkge1xuICAgIHJldHVybntcbiAgICAgIHByb3BzOiB7IGhhc0Vycm9yOnRydWV9XG4gICAgICAvLyBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIC8vIHJlZGlyZWN0OiB7XG4gICAgICAvLyAgIGRlc3RpbmF0aW9uOiAnL2Vycm9yJ1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGF3YWl0IGdldEZpbHRlcmVkRXZlbnRzKHtcbiAgICB5ZWFyOiBudW1ZZWFyLFxuICAgIG1vbnRoOiBudW1Nb250aFxuICB9KVxuICByZXR1cm4ge1xuICBwcm9wczp7cHJvcHM6e1xuICAgIGV2ZW50czogZmlsdGVyZWRFdmVudHMsXG4gICAgZGF0ZTp7XG4gICAgICB5ZWFyXG4gICAgfVxuICB9fSAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZVJvdXRlciIsIkV2ZW50TGlzdCIsIlJlc3VsdHNUaXRsZSIsIkJ1dHRvbiIsIkVycm9yQWxlcnQiLCJGaWx0ZXJlZEV2ZW50cyIsInByb3BzIiwicm91dGVyIiwiaGFzRXJyb3IiLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwibGluayIsImZpbHRlcmVkRXZlbnRzIiwiZXZlbnRzIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});