"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4602144df7f1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/OGQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQ2MDIxNDRkZjdmMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItems */ \"(app-client)/./components/MenuItems.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst navigation = [\n    {\n        name: \"Home\",\n        href: \"/home\",\n        current: true\n    },\n    {\n        name: \"Work\",\n        href: \"/work\",\n        current: false\n    },\n    {\n        name: \"Exhibition\",\n        href: \"/exhibition\",\n        current: false,\n        submenu: [\n            {\n                name: \"Il tubo\",\n                href: \"/exhibition/il-tubo\"\n            },\n            {\n                name: \"In-sicure stabilit\\xe0\",\n                href: \"/exhibition/insicure-stabilita\"\n            },\n            {\n                name: \"Il cubo\",\n                href: \"/exhibition/il-cubo\"\n            },\n            {\n                name: \"Inside the outside\",\n                href: \"/exhibition/inside-the-outside\"\n            },\n            {\n                name: \"The Belly\",\n                href: \"/exhibition/the-belly\"\n            },\n            {\n                name: \"The Sign\",\n                href: \"/exhibition/the-sign\"\n            },\n            {\n                name: \"Mirror/s\",\n                href: \"/exhibition/mirrors\"\n            }\n        ]\n    },\n    {\n        name: \"About\",\n        href: \"/about\",\n        current: false\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handler = (event)=>{\n            if (toggle && ref.current && !ref.current.contains(event.target)) {\n                setToggle(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handler);\n        document.addEventListener(\"touchstart\", handler);\n        return ()=>{\n            // Cleanup the event listener\n            document.removeEventListener(\"mousedown\", handler);\n            document.removeEventListener(\"touchstart\", handler);\n        };\n    }, [\n        toggle\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex h-16 items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/assets/icons/logo-black.png\",\n                            alt: \"t.\",\n                            height: 50,\n                            width: 70,\n                            className: \"mx-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-none sm:flex hidden justify-end items-center flex-1\",\n                        children: navigation.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                items: menu\n                            }, index, false, {\n                                fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:hidden flex flex-1 justify-end items-center\",\n                        ref: ref,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: toggle ? \"/assets/icons/close.svg\" : \"/assets/icons/menu.svg\",\n                                alt: \"menu\",\n                                width: 28,\n                                height: 28,\n                                className: \"object-contain mx-2\",\n                                \"aria-expanded\": toggle ? \"true\" : \"false\",\n                                onClick: ()=>setToggle((toggle)=>!toggle)\n                            }, void 0, false, {\n                                fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-40 \".concat(!toggle ? \"hidden\" : \"flex\", \" p-6 bg-white-grey-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"list-none flex justify-end items-start flex-1 flex-col\",\n                                    children: navigation.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            items: menu\n                                        }, index, false, {\n                                            fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 26\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/vera/cbd/components/Navbar.jsx\",\n            lineNumber: 80,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n_s(Navbar, \"jNhUNmBx20DHbtLkuoRbRpQlIfw=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ3NCO0FBQ2hCO0FBQ1A7QUFHN0IsTUFBTU0sYUFBYTtJQUNqQjtRQUFFQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztJQUNYO0lBQ0E7UUFBRUYsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7SUFDWDtJQUNBO1FBQUVGLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7WUFDUDtnQkFDRUgsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VELE1BQU07Z0JBQ05DLE1BQU07WUFDUjtZQUNBO2dCQUNFRCxNQUFNO2dCQUNOQyxNQUFNO1lBQ1I7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VELE1BQU07Z0JBQ05DLE1BQU07WUFDUjtZQUNBO2dCQUNFRCxNQUFNO2dCQUNOQyxNQUFNO1lBQ1I7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1NBQ0Q7SUFDSDtJQUNBO1FBQUVELE1BQU07UUFDTkMsTUFBTTtRQUNOQyxTQUFTO0lBQ1g7Q0FDRDtBQUVELE1BQU1FLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3JDLElBQUlhLE1BQU1YLDZDQUFNQTtJQUVoQkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxVQUFVLENBQUNDO1lBQ2hCLElBQUlKLFVBQVVFLElBQUlMLFdBQVcsQ0FBQ0ssSUFBSUwsUUFBUVEsU0FBU0QsTUFBTUUsU0FBUztnQkFDakVMLFVBQVU7WUFDWDtRQUNEO1FBQ0FNLFNBQVNDLGlCQUFpQixhQUFhTDtRQUN2Q0ksU0FBU0MsaUJBQWlCLGNBQWNMO1FBQ3hDLE9BQU87WUFDTiw2QkFBNkI7WUFDN0JJLFNBQVNFLG9CQUFvQixhQUFhTjtZQUMxQ0ksU0FBU0Usb0JBQW9CLGNBQWNOO1FBQzVDO0lBQ0osR0FBRztRQUFDSDtLQUFPO0lBSVQscUJBQ007a0JBQ0UsNEVBQUNVO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ2xCLGtEQUFJQTt3QkFBQ0csTUFBSztrQ0FDWCw0RUFBQ1IsbURBQUtBOzRCQUNKeUIsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkMsUUFBUTs0QkFDUkMsT0FBTzs0QkFDUEwsV0FBVTs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNNO3dCQUFHTixXQUFVO2tDQUNYakIsV0FBV3dCLElBQUksQ0FBQ0MsTUFBTUMsc0JBQ3JCLDhEQUFDNUIsa0RBQVNBO2dDQUFhNkIsT0FBT0Y7K0JBQWRDOzs7Ozs7Ozs7O2tDQUlwQiw4REFBQ1I7d0JBQUlELFdBQVU7d0JBQWlEVCxLQUFLQTs7MENBQ25FLDhEQUFDZCxtREFBS0E7Z0NBQ0p5QixLQUFLYixTQUFTLDRCQUE0QjtnQ0FDMUNjLEtBQUk7Z0NBQ0pFLE9BQU87Z0NBQ1BELFFBQVE7Z0NBQ1JKLFdBQVU7Z0NBQ1ZXLGlCQUFldEIsU0FBUyxTQUFTO2dDQUNqQ3VCLFNBQVMsSUFBTXRCLFVBQVUsQ0FBQ0QsU0FBVyxDQUFDQTs7Ozs7OzBDQUV4Qyw4REFBQ1k7Z0NBQ0NELFdBQVcsUUFFVixPQURDLENBQUNYLFNBQVMsV0FBVyxRQUN0QjswQ0FFRCw0RUFBQ2lCO29DQUFHTixXQUFVOzhDQUNYakIsV0FBV3dCLElBQUksQ0FBQ0MsTUFBTUMsc0JBQ3BCLDhEQUFDNUIsa0RBQVNBOzRDQUFhNkIsT0FBT0Y7MkNBQWRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTekM7R0FsRU1yQjtLQUFBQTtBQW9FTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51SXRlbXMgZnJvbSBcIi4vTWVudUl0ZW1zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAgeyBuYW1lOiAnSG9tZScsIFxuICAgIGhyZWY6ICcvaG9tZScsIFxuICAgIGN1cnJlbnQ6IHRydWUsIFxuICB9LFxuICB7IG5hbWU6ICdXb3JrJyxcbiAgICBocmVmOiAnL3dvcmsnLCBcbiAgICBjdXJyZW50OiBmYWxzZSxcbiAgfSxcbiAgeyBuYW1lOiAnRXhoaWJpdGlvbicsIFxuICAgIGhyZWY6ICcvZXhoaWJpdGlvbicsIFxuICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJJbCB0dWJvXCIsXG4gICAgICAgIGhyZWY6IFwiL2V4aGliaXRpb24vaWwtdHVib1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJJbi1zaWN1cmUgc3RhYmlsaXTDoFwiLFxuICAgICAgICBocmVmOiBcIi9leGhpYml0aW9uL2luc2ljdXJlLXN0YWJpbGl0YVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJJbCBjdWJvXCIsXG4gICAgICAgIGhyZWY6IFwiL2V4aGliaXRpb24vaWwtY3Vib1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJJbnNpZGUgdGhlIG91dHNpZGVcIixcbiAgICAgICAgaHJlZjogXCIvZXhoaWJpdGlvbi9pbnNpZGUtdGhlLW91dHNpZGVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiVGhlIEJlbGx5XCIsXG4gICAgICAgIGhyZWY6IFwiL2V4aGliaXRpb24vdGhlLWJlbGx5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlRoZSBTaWduXCIsXG4gICAgICAgIGhyZWY6IFwiL2V4aGliaXRpb24vdGhlLXNpZ25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiTWlycm9yL3NcIixcbiAgICAgICAgaHJlZjogXCIvZXhoaWJpdGlvbi9taXJyb3JzXCIsXG4gICAgICB9LFxuICAgIF0gXG4gIH0sXG4gIHsgbmFtZTogJ0Fib3V0JywgXG4gICAgaHJlZjogJy9hYm91dCcsIFxuICAgIGN1cnJlbnQ6IGZhbHNlIFxuICB9LFxuXVxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCByZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgaWYgKHRvZ2dsZSAmJiByZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcbiAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAvLyBDbGVhbnVwIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZXIpO1xuICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVyKTtcbiAgICB9O1xufSwgW3RvZ2dsZV0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtMiBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWVcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ljb25zL2xvZ28tYmxhY2sucG5nXCIgXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ0LlwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfSBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgc206ZmxleCBoaWRkZW4ganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChtZW51LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1zIGtleT17aW5kZXh9IGl0ZW1zPXttZW51fSAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gZmxleCBmbGV4LTEganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCIgcmVmPXtyZWZ9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dG9nZ2xlID8gXCIvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Z1wiIDogXCIvYXNzZXRzL2ljb25zL21lbnUuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17Mjh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17Mjh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIG14LTJcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXt0b2dnbGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCh0b2dnbGUpID0+ICF0b2dnbGUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B6LTQwICR7XG4gICAgICAgICAgICAgICAgICAgICAgIXRvZ2dsZSA/IFwiaGlkZGVuXCIgOiBcImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICB9IHAtNiBiZy13aGl0ZS1ncmV5LWdyYWRpZW50IGFic29sdXRlIHRvcC0yMCByaWdodC0wIG14LTQgbXktMiBtaW4tdy1bMTQwcHhdIHJvdW5kZWQteGwgc2lkZWJhcmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLXN0YXJ0IGZsZXgtMSBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgobWVudSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1zIGtleT17aW5kZXh9IGl0ZW1zPXttZW51fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIk1lbnVJdGVtcyIsIkxpbmsiLCJuYXZpZ2F0aW9uIiwibmFtZSIsImhyZWYiLCJjdXJyZW50Iiwic3VibWVudSIsIk5hdmJhciIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZiIsImhhbmRsZXIiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwidWwiLCJtYXAiLCJtZW51IiwiaW5kZXgiLCJpdGVtcyIsImFyaWEtZXhwYW5kZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.jsx\n"));

/***/ })

});