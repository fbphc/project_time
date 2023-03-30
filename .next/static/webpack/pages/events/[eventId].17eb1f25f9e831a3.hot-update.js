"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[eventId]",{

/***/ "./pages/events/[eventId].js":
/*!***********************************!*\
  !*** ./pages/events/[eventId].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction EventDetailPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const eventId = router.query.eventId;\n    const event = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.getEventById)(eventId);\n    if (!event) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No event Found!\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[eventId].js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[eventId].js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: event.title\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[eventId].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: event.date,\n                address: event.location,\n                image: event.image,\n                imageAlt: event.title\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[eventId].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: event.description\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[eventId].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[eventId].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Documents/Fabio/Coding/nextjs/project_time/pages/events/[eventId].js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(EventDetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EventDetailPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDetailPage);\nvar _c;\n$RefreshReg$(_c, \"EventDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNQO0FBQ2U7QUFDdUI7QUFDSTtBQUNKO0FBQ2Q7QUFFekQsU0FBU08sa0JBQWtCOztJQUN6QixNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTVMsVUFBVUQsT0FBT0UsS0FBSyxDQUFDRCxPQUFPO0lBQ3BDLE1BQU1FLFFBQVFULHlEQUFZQSxDQUFDTztJQUUzQixJQUFJLENBQUNFLE9BQU87UUFDVixxQkFDRSw4REFBQ0wsa0VBQVVBO3NCQUNULDRFQUFDTTswQkFBRTs7Ozs7Ozs7Ozs7SUFHVCxDQUFDO0lBRUQscUJBQ0UsOERBQUNYLDJDQUFRQTs7MEJBQ1AsOERBQUNFLDhFQUFZQTtnQkFBQ1UsT0FBT0YsTUFBTUUsS0FBSzs7Ozs7OzBCQUNoQyw4REFBQ1QsZ0ZBQWNBO2dCQUNiVSxNQUFNSCxNQUFNRyxJQUFJO2dCQUNoQkMsU0FBU0osTUFBTUssUUFBUTtnQkFDdkJDLE9BQU9OLE1BQU1NLEtBQUs7Z0JBQ2xCQyxVQUFVUCxNQUFNRSxLQUFLOzs7Ozs7MEJBRXZCLDhEQUFDUiw4RUFBWUE7MEJBQ1gsNEVBQUNPOzhCQUFHRCxNQUFNUSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QjtHQTNCU1o7O1FBQ1FQLGtEQUFTQTs7O0tBRGpCTzs7QUFnQ1QsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tldmVudElkXS5qcz9hMjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RXZlbnRCeUlkIH0gZnJvbSAnLi4vLi4vZHVtbXktZGF0YSc7XG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LXN1bW1hcnknO1xuaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcyc7XG5pbXBvcnQgRXZlbnRDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQnO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9lcnJvci1hbGVydCc7XG5cbmZ1bmN0aW9uIEV2ZW50RGV0YWlsUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGV2ZW50SWQgPSByb3V0ZXIucXVlcnkuZXZlbnRJZDtcbiAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEJ5SWQoZXZlbnRJZCk7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgPHA+Tm8gZXZlbnQgRm91bmQhPC9wPlxuICAgICAgPC9FcnJvckFsZXJ0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxFdmVudFN1bW1hcnkgdGl0bGU9e2V2ZW50LnRpdGxlfSAvPlxuICAgICAgPEV2ZW50TG9naXN0aWNzXG4gICAgICAgIGRhdGU9e2V2ZW50LmRhdGV9XG4gICAgICAgIGFkZHJlc3M9e2V2ZW50LmxvY2F0aW9ufVxuICAgICAgICBpbWFnZT17ZXZlbnQuaW1hZ2V9XG4gICAgICAgIGltYWdlQWx0PXtldmVudC50aXRsZX1cbiAgICAgIC8+XG4gICAgICA8RXZlbnRDb250ZW50PlxuICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9FdmVudENvbnRlbnQ+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KXtcbmNvbnN0IGV2ZW50SWQgPSBjb250ZXh0LnBhcmFtc1xuXG59XG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRnJhZ21lbnQiLCJnZXRFdmVudEJ5SWQiLCJFdmVudFN1bW1hcnkiLCJFdmVudExvZ2lzdGljcyIsIkV2ZW50Q29udGVudCIsIkVycm9yQWxlcnQiLCJFdmVudERldGFpbFBhZ2UiLCJyb3V0ZXIiLCJldmVudElkIiwicXVlcnkiLCJldmVudCIsInAiLCJ0aXRsZSIsImRhdGUiLCJhZGRyZXNzIiwibG9jYXRpb24iLCJpbWFnZSIsImltYWdlQWx0IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[eventId].js\n"));

/***/ })

});