"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player",{

/***/ "./pages/player.jsx":
/*!**************************!*\
  !*** ./pages/player.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_web_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-web-share */ \"./node_modules/react-web-share/dist/esm/index.js\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/db */ \"./database/db.jsx\");\n/* harmony import */ var _styles_Player_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Player.module.css */ \"./styles/Player.module.css\");\n/* harmony import */ var _styles_Player_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Player_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    let [prevIndex, setPrevIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [links, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    let [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * 40));\n    let sameLink1 = \"https://www.youtube.com\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Player_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"player\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                flexDir: \"column\",\n                justify: \"center\",\n                paddingBottom: \"38px\",\n                height: \"100vh\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    flexDir: \"column\",\n                    align: \"center\",\n                    marginTop: \"67px\",\n                    marginLeft: \"11\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: \"reactplayer\",\n                            width: \"1016px\",\n                            height: \"579px\",\n                            style: {\n                                zIndex: \"3\"\n                            },\n                            playsInline: true,\n                            playing: true,\n                            controls: true,\n                            volume: 0.75,\n                            pip: true,\n                            url: sameLink1 + _database_db__WEBPACK_IMPORTED_MODULE_4__.arr[id]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            paddingTop: {\n                                base: \"459px\",\n                                md: \"72px\"\n                            },\n                            justifyContent: \"space-between\",\n                            width: \"1016px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                            width: {\n                                                base: \"150px\",\n                                                md: \"170px\"\n                                            },\n                                            border: \"1px solid #383636\",\n                                            color: \"white\",\n                                            background: \"\",\n                                            _hover: {\n                                                backgroundColor: \"#FF3465\",\n                                                color: \"white\"\n                                            },\n                                            onClick: ()=>{\n                                                setId(prevIndex);\n                                                setPrevIndex(prevIndex - 1);\n                                            },\n                                            children: \"Previous\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                            width: {\n                                                base: \"150px\",\n                                                md: \"170px\"\n                                            },\n                                            marginLeft: \"49px\",\n                                            border: \"1px solid #383636\",\n                                            color: \"white\",\n                                            background: \"\",\n                                            _hover: {\n                                                backgroundColor: \"#FF3465\",\n                                                color: \"white\"\n                                            },\n                                            onClick: ()=>{\n                                                setPrevIndex(id);\n                                                setId(Math.floor(Math.random() * 2150));\n                                                console.log(sameLink1 + _database_db__WEBPACK_IMPORTED_MODULE_4__.arr[id], id);\n                                            },\n                                            children: \"Next\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_web_share__WEBPACK_IMPORTED_MODULE_3__.RWebShare, {\n                                        data: {\n                                            text: \"Hey, check out this amazing product Quick Player, Enjoy content the new way. Play random videos add-free.\",\n                                            url: \"https://www.quickplayer.xyz\",\n                                            title: \"QuickPlayer - play random videos ads free.\"\n                                        },\n                                        onClick: ()=>console.log(\"shared successfully!\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                            display: {\n                                                base: \"none\",\n                                                md: \"block\"\n                                            },\n                                            width: \"176px\",\n                                            height: \"44px\",\n                                            color: \"white\",\n                                            background: \"\",\n                                            _hover: {\n                                                backgroundColor: \"white\",\n                                                color: \"#FF3465\"\n                                            },\n                                            children: \"Share with friends ♥️\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Files\\\\quickplayer\\\\quickplayer\\\\pages\\\\player.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"iq127r/lKVgWUHaC7cFHifFsRC8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJEO0FBQ3BCO0FBQ1k7QUFDUDtBQUNQO0FBQ1c7QUFHakMsU0FBU1csT0FBTzs7SUFDN0IsSUFBSSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQTtJQUN4QyxJQUFJLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxJQUFJLENBQUNVLElBQUlDLE1BQU0sR0FBR1gsK0NBQVFBLENBQUNZLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLO0lBQ3RELElBQUlDLFlBQVk7SUFJaEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdiLDRFQUFnQjtrQkFDNUIsNEVBQUNZO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUN2QixrREFBSUE7Z0JBQUN5QixTQUFTO2dCQUFVQyxTQUFTO2dCQUFVQyxlQUFlO2dCQUFRQyxRQUFROzBCQUN6RSw0RUFBQzVCLGtEQUFJQTtvQkFDSHlCLFNBQVM7b0JBQ1RJLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLFlBQVk7O3NDQUVaLDhEQUFDM0Isb0RBQVdBOzRCQUNWbUIsV0FBVTs0QkFDVlMsT0FBTzs0QkFDUEosUUFBUTs0QkFDUkssT0FBTztnQ0FBRUMsUUFBUTs0QkFBSTs0QkFDckJDLGFBQWEsSUFBSTs0QkFDakJDLFNBQVMsSUFBSTs0QkFDYkMsVUFBVSxJQUFJOzRCQUNkQyxRQUFROzRCQUNSQyxLQUFLLElBQUk7NEJBQ1RDLEtBQUtuQixZQUFZWiw2Q0FBRyxDQUFDTyxHQUFHOzs7Ozs7c0NBRTFCLDhEQUFDaEIsa0RBQUlBOzRCQUNIeUMsWUFBWTtnQ0FBQ0MsTUFBSztnQ0FBU0MsSUFBRzs0QkFBTzs0QkFDckNDLGdCQUFnQjs0QkFDaEJaLE9BQU87OzhDQUVQLDhEQUFDaEMsa0RBQUlBOztzREFDSCw4REFBQ0Usb0RBQU1BOzRDQUNMOEIsT0FBTztnREFBQ1UsTUFBSztnREFBU0MsSUFBRzs0Q0FBTzs0Q0FDaENFLFFBQVE7NENBQ1JDLE9BQU87NENBQ1BDLFlBQVk7NENBQ1pDLFFBQVE7Z0RBQUVDLGlCQUFpQjtnREFBV0gsT0FBTzs0Q0FBUTs0Q0FDckRJLFNBQVMsSUFBTTtnREFDYmpDLE1BQU1MO2dEQUNOQyxhQUFhRCxZQUFZOzRDQUMzQjtzREFDRDs7Ozs7O3NEQUdELDhEQUFDVixvREFBTUE7NENBQ0w4QixPQUFPO2dEQUFDVSxNQUFLO2dEQUFTQyxJQUFHOzRDQUFPOzRDQUNoQ1osWUFBWTs0Q0FDWmMsUUFBUTs0Q0FDUkMsT0FBTzs0Q0FDUEMsWUFBWTs0Q0FDWkMsUUFBUTtnREFBRUMsaUJBQWlCO2dEQUFXSCxPQUFPOzRDQUFROzRDQUNyREksU0FBUyxJQUFNO2dEQUNickMsYUFBYUc7Z0RBQ2JDLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLO2dEQUNqQytCLFFBQVFDLEdBQUcsQ0FBQy9CLFlBQVlaLDZDQUFHLENBQUNPLEdBQUcsRUFBRUE7NENBQ25DO3NEQUNEOzs7Ozs7Ozs7Ozs7OENBS0gsOERBQUNNOzhDQUNDLDRFQUFDZCxzREFBU0E7d0NBQ1I2QyxNQUFNOzRDQUNKQyxNQUFNOzRDQUNOZCxLQUFLOzRDQUNMZSxPQUFPO3dDQUNUO3dDQUNBTCxTQUFTLElBQU1DLFFBQVFDLEdBQUcsQ0FBQztrREFFM0IsNEVBQUNsRCxvREFBTUE7NENBQ1BzRCxTQUFTO2dEQUFDZCxNQUFNO2dEQUFRQyxJQUFJOzRDQUFPOzRDQUNqQ1gsT0FBTzs0Q0FDUEosUUFBUTs0Q0FDUmtCLE9BQU87NENBQ1BDLFlBQVk7NENBQ1pDLFFBQVE7Z0RBQUVDLGlCQUFpQjtnREFBU0gsT0FBTzs0Q0FBVTtzREFDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQnJCLENBQUM7R0E3R3VCbkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheWVyLmpzeD82ZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIFRleHQsIEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUldlYlNoYXJlIH0gZnJvbSBcInJlYWN0LXdlYi1zaGFyZVwiO1xyXG5pbXBvcnQgeyBhcnIgfSBmcm9tIFwiLi4vZGF0YWJhc2UvZGJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUGxheWVyLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBsZXQgW3ByZXZJbmRleCwgc2V0UHJldkluZGV4XSA9IHVzZVN0YXRlKCk7XHJcbiAgbGV0IFtsaW5rcywgc2V0TGlua3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwKSk7XHJcbiAgbGV0IHNhbWVMaW5rMSA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb21cIjtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+ICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cclxuICAgICAgICAgIDxGbGV4IGZsZXhEaXI9e1wiY29sdW1uXCJ9IGp1c3RpZnk9e1wiY2VudGVyXCJ9IHBhZGRpbmdCb3R0b209e1wiMzhweFwifSBoZWlnaHQ9e1wiMTAwdmhcIn0+XHJcbiAgICAgICAgICAgIDxGbGV4IFxyXG4gICAgICAgICAgICAgIGZsZXhEaXI9e1wiY29sdW1uXCJ9XHJcbiAgICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtcIjY3cHhcIn1cclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXtcIjExXCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0cGxheWVyXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXtcIjEwMTZweFwifVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjU3OXB4XCJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwiM1wiIH19XHJcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHBsYXlpbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBjb250cm9scz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZvbHVtZT17MC43NX1cclxuICAgICAgICAgICAgICAgIHBpcD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHVybD17c2FtZUxpbmsxICsgYXJyW2lkXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wPXt7YmFzZTpcIjQ1OXB4XCIsIG1kOlwiNzJweFwiIH19XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17XCIxMDE2cHhcIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt7YmFzZTpcIjE1MHB4XCIsIG1kOlwiMTcwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXtcIjFweCBzb2xpZCAjMzgzNjM2XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGMzQ2NVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SWQocHJldkluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFByZXZJbmRleChwcmV2SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17e2Jhc2U6XCIxNTBweFwiLCBtZDpcIjE3MHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9e1wiNDlweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcj17XCIxcHggc29saWQgIzM4MzYzNlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGRjM0NjVcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFByZXZJbmRleChpZClcclxuICAgICAgICAgICAgICAgICAgICAgIHNldElkKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIxNTApKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNhbWVMaW5rMSArIGFycltpZF0sIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8UldlYlNoYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJIZXksIGNoZWNrIG91dCB0aGlzIGFtYXppbmcgcHJvZHVjdCBRdWljayBQbGF5ZXIsIEVuam95IGNvbnRlbnQgdGhlIG5ldyB3YXkuIFBsYXkgcmFuZG9tIHZpZGVvcyBhZGQtZnJlZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5xdWlja3BsYXllci54eXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlF1aWNrUGxheWVyIC0gcGxheSByYW5kb20gdmlkZW9zIGFkcyBmcmVlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJzaGFyZWQgc3VjY2Vzc2Z1bGx5IVwiKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7YmFzZTogXCJub25lXCIsIG1kOiBcImJsb2NrXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMTc2cHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI0NHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgY29sb3I6IFwiI0ZGMzQ2NVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2hhcmUgd2l0aCBmcmllbmRzIOKZpe+4j1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1JXZWJTaGFyZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICAgICAgey8qIDxGbGV4IGZsZXhEaXI9e1wiY29sdW1uXCJ9IGFsaWduPXtcImNlbnRlclwifSBtYXJnaW5Ub3A9e1wiMTAlXCJ9ICBkaXNwbGF5PXt7bWQ6XCJub25lXCIsYmFzZTpcImZsZXhcIn19PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiQXJjaGl0ZWN0cyBEYXVnaHRlciwgY3Vyc2l2ZVwifVxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMTVweFwiLCBtZDogXCIzMnB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1vYmlsZSB2ZXJzaW9uIHVuZGVyIOKaku+4j1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvRmxleD4gKi99XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmxleCIsIlRleHQiLCJCdXR0b24iLCJCb3giLCJSZWFjdFBsYXllciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSV2ViU2hhcmUiLCJhcnIiLCJzdHlsZXMiLCJIb21lIiwicHJldkluZGV4Iiwic2V0UHJldkluZGV4IiwibGlua3MiLCJzZXRMaW5rcyIsImlkIiwic2V0SWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzYW1lTGluazEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmbGV4RGlyIiwianVzdGlmeSIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJhbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsInN0eWxlIiwiekluZGV4IiwicGxheXNJbmxpbmUiLCJwbGF5aW5nIiwiY29udHJvbHMiLCJ2b2x1bWUiLCJwaXAiLCJ1cmwiLCJwYWRkaW5nVG9wIiwiYmFzZSIsIm1kIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJjb2xvciIsImJhY2tncm91bmQiLCJfaG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0ZXh0IiwidGl0bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/player.jsx\n"));

/***/ })

});