"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _like_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like-button */ \"(app-pages-browser)/./app/like-button.js\");\n/* harmony import */ var _dislike_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dislike-button */ \"(app-pages-browser)/./app/dislike-button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n/*\r\n\r\nfunction Button({ children, color, onClick }) {\r\n    return (\r\n        <>\r\n            <button onClick={onClick}\r\n                style={{ backgroundColor: color, borderRadius: '5px', padding: '10px', fontSize: '16px', border: 'none', cursor: 'pointer' }}\r\n            >{children}</button>\r\n        </>\r\n    );\r\n}\r\n\r\n*/ function Header(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"This is the title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\demia\\\\source\\\\repos\\\\FrontEnd\\\\CSS\\\\react\\\\app\\\\page.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function increaseLikes() {\n        setLikes(likes + 1);\n    }\n    function decreaseLikes() {\n        setLikes(likes - 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Demetrio\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\demia\\\\source\\\\repos\\\\FrontEnd\\\\CSS\\\\react\\\\app\\\\page.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_like_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                /* children='+' color='green' */ likes: likes,\n                onClick: increaseLikes\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\demia\\\\source\\\\repos\\\\FrontEnd\\\\CSS\\\\react\\\\app\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    display: \"inline-block\",\n                    marginLeft: \"5px\"\n                },\n                children: [\n                    likes,\n                    \" likes\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\demia\\\\source\\\\repos\\\\FrontEnd\\\\CSS\\\\react\\\\app\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dislike_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"-\",\n                color: \"red\",\n                onClick: decreaseLikes\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\demia\\\\source\\\\repos\\\\FrontEnd\\\\CSS\\\\react\\\\app\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"4HomzEVtWsqJHJd0WxO35OUPRVA=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ007QUFDTTtBQUU3Qzs7Ozs7Ozs7Ozs7O0FBWUEsR0FFQSxTQUFTRyxPQUFPLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDtJQUNaLHFCQUNJLDhEQUFDQztrQkFBSUQsUUFBUUEsUUFBUTs7Ozs7O0FBRTdCO0tBSlNEO0FBTU0sU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0YsT0FBT0csU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkMsU0FBU1U7UUFDTEQsU0FBU0QsUUFBUTtJQUNyQjtJQUVBLFNBQVNHO1FBQ0xGLFNBQVNELFFBQVE7SUFDckI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNMO2dCQUFPQyxPQUFNOzs7Ozs7MEJBQ2QsOERBQUNILG9EQUFVQTtnQkFBQyw4QkFBOEIsR0FBR08sT0FBT0E7Z0JBQU9JLFNBQVNGOzs7Ozs7MEJBQ3BFLDhEQUFDRztnQkFBRUMsT0FBTztvQkFBRUMsU0FBUztvQkFBZ0JDLFlBQVk7Z0JBQU07O29CQUFJUjtvQkFBTTs7Ozs7OzswQkFDakUsOERBQUNOLHVEQUFhQTtnQkFBQ2UsVUFBUztnQkFBSUMsT0FBTTtnQkFBTU4sU0FBU0Q7Ozs7Ozs7O0FBRzdEO0dBcEJ3Qkw7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpa2VCdXR0b24gZnJvbSAnLi9saWtlLWJ1dHRvbic7XHJcbmltcG9ydCBEaXNsaWtlQnV0dG9uIGZyb20gJy4vZGlzbGlrZS1idXR0b24nO1xyXG5cclxuLypcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7IGNoaWxkcmVuLCBjb2xvciwgb25DbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IsIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICcxMHB4JywgZm9udFNpemU6ICcxNnB4JywgYm9yZGVyOiAnbm9uZScsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgID57Y2hpbGRyZW59PC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG4qL1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+e3RpdGxlID8gdGl0bGUgOiAnVGhpcyBpcyB0aGUgdGl0bGUnfTwvaDE+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbmNyZWFzZUxpa2VzKCkge1xyXG4gICAgICAgIHNldExpa2VzKGxpa2VzICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVjcmVhc2VMaWtlcygpIHtcclxuICAgICAgICBzZXRMaWtlcyhsaWtlcyAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT0nRGVtZXRyaW8nIC8+XHJcbiAgICAgICAgICAgIDxMaWtlQnV0dG9uIC8qIGNoaWxkcmVuPScrJyBjb2xvcj0nZ3JlZW4nICovIGxpa2VzPXtsaWtlc30gb25DbGljaz17aW5jcmVhc2VMaWtlc30gLz5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG1hcmdpbkxlZnQ6ICc1cHgnIH19PntsaWtlc30gbGlrZXM8L3A+XHJcbiAgICAgICAgICAgIDxEaXNsaWtlQnV0dG9uIGNoaWxkcmVuPSctJyBjb2xvcj0ncmVkJyBvbkNsaWNrPXtkZWNyZWFzZUxpa2VzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpa2VCdXR0b24iLCJEaXNsaWtlQnV0dG9uIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwic2V0VGl0bGUiLCJsaWtlcyIsInNldExpa2VzIiwiaW5jcmVhc2VMaWtlcyIsImRlY3JlYXNlTGlrZXMiLCJvbkNsaWNrIiwicCIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJjaGlsZHJlbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});