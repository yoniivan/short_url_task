"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/ListOfUrls/List.js":
/*!***************************************!*\
  !*** ./components/ListOfUrls/List.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/app/components/ListOfUrls/List.js\";\n\n\nfunction ListItem(props) {\n  let list = props.items.map((item, index) => {\n    let long = item.originalUrl.length > 40 ? item.originalUrl.substring(0, 60) + \" . . .\" : item.originalUrl;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Row, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {\n        children: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {\n        children: long\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {\n        children: item.shortUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Cell, {\n        children: item.date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this)]\n    }, item._id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 15\n    }, this);\n  });\n\n  if (props.items.length > 0) {\n    return list;\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"List is empty\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 16\n    }, this);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RPZlVybHMvTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFDcEIsTUFBSUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDeEMsUUFBSUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLFdBQUwsQ0FBaUJDLE1BQWpCLEdBQTBCLEVBQTFCLEdBQStCSixJQUFJLENBQUNHLFdBQUwsQ0FBaUJFLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLEVBQTlCLElBQW9DLFFBQW5FLEdBQThFTCxJQUFJLENBQUNHLFdBQTlGO0FBQ0Esd0JBRU0sOERBQUMsd0RBQUQ7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUFBLGtCQUFhRjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHlEQUFEO0FBQUEsa0JBQWFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMseURBQUQ7QUFBQSxrQkFBYUYsSUFBSSxDQUFDTTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQyx5REFBRDtBQUFBLGtCQUFhTixJQUFJLENBQUNPO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBLE9BQWdCUCxJQUFJLENBQUNRLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGTjtBQVVILEdBWlUsQ0FBWDs7QUFjQSxNQUFHWixLQUFLLENBQUNFLEtBQU4sQ0FBWU0sTUFBWixHQUFxQixDQUF4QixFQUEwQjtBQUN0QixXQUFPUCxJQUFQO0FBQ0gsR0FGRCxNQUVLO0FBQ0Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIO0FBQ0o7O0FBRUQsaUVBQWVGLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0xpc3RPZlVybHMvTGlzdC5qcz8zOTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMaXN0SXRlbShwcm9wcyl7XHJcbiAgICBsZXQgbGlzdCA9IHByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgbG9uZyA9IGl0ZW0ub3JpZ2luYWxVcmwubGVuZ3RoID4gNDAgPyBpdGVtLm9yaWdpbmFsVXJsLnN1YnN0cmluZygwLCA2MCkgKyBcIiAuIC4gLlwiIDogaXRlbS5vcmlnaW5hbFVybDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VGFibGUuUm93IGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2luZGV4fTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPntsb25nfTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPntpdGVtLnNob3J0VXJsfTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPntpdGVtLmRhdGV9PC9UYWJsZS5DZWxsPlxyXG4gICAgICAgICAgICAgIDwvVGFibGUuUm93PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihwcm9wcy5pdGVtcy5sZW5ndGggPiAwKXtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiA8aDE+TGlzdCBpcyBlbXB0eTwvaDE+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtOyJdLCJuYW1lcyI6WyJUYWJsZSIsIkxpc3RJdGVtIiwicHJvcHMiLCJsaXN0IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsb25nIiwib3JpZ2luYWxVcmwiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJzaG9ydFVybCIsImRhdGUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ListOfUrls/List.js\n");

/***/ }),

/***/ "./components/ListOfUrls/header.js":
/*!*****************************************!*\
  !*** ./components/ListOfUrls/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/app/components/ListOfUrls/header.js\";\n\n\nfunction HeaderOfList() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.Header, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.HeaderCell, {\n      children: \"Index\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 11\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.HeaderCell, {\n      children: \"Original\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.HeaderCell, {\n      children: \"Short\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table.HeaderCell, {\n      children: \"Date Created\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderOfList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RPZlVybHMvaGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQyxZQUFULEdBQXVCO0FBQ25CLHNCQUNJLDhEQUFDLDJEQUFEO0FBQUEsNEJBQ0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztBQUVELGlFQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9MaXN0T2ZVcmxzL2hlYWRlci5qcz8yMTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyT2ZMaXN0KCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZS5IZWFkZXI+XHJcbiAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5JbmRleDwvVGFibGUuSGVhZGVyQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPk9yaWdpbmFsPC9UYWJsZS5IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+U2hvcnQ8L1RhYmxlLkhlYWRlckNlbGw+XHJcbiAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5EYXRlIENyZWF0ZWQ8L1RhYmxlLkhlYWRlckNlbGw+XHJcbiAgICAgICAgPC9UYWJsZS5IZWFkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlck9mTGlzdDsiXSwibmFtZXMiOlsiVGFibGUiLCJIZWFkZXJPZkxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ListOfUrls/header.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ListOfUrls_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListOfUrls/header */ \"./components/ListOfUrls/header.js\");\n/* harmony import */ var _components_ListOfUrls_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ListOfUrls/List */ \"./components/ListOfUrls/List.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/app/pages/index.js\";\n\n\n\n\n\n\n\nfunction Index({\n  items\n}) {\n  const {\n    0: stateAdd,\n    1: setStateAdd\n  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n  const {\n    0: stateItems,\n    1: setStateItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(items);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n    setStateItems(items);\n  }, [items]);\n\n  const addUrlHandle = async event => {\n    event.preventDefault();\n    const res = await handlePost(event.target.addurl.value);\n    console.log(res);\n    let allItems = [...stateItems, res];\n    setStateItems(allItems);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      marginLeft: \"10rem\",\n      marginRight: \"10rem\",\n      marginTop: \"5rem\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: addUrlHandle,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n          focus: true,\n          placeholder: \"Search...\",\n          name: \"addurl\",\n          value: stateAdd,\n          style: {\n            width: \"600px\"\n          },\n          onInput: e => setStateAdd(e.target.value),\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n          style: {\n            marginLeft: \"2rem\"\n          },\n          content: \"Click Here\",\n          type: \"submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListOfUrls_header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Body, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListOfUrls_List__WEBPACK_IMPORTED_MODULE_4__.default, {\n          items: stateItems\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\nasync function handlePost(payload) {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:3000/api/short`, {\n    \"originalUrl\": payload\n  });\n  console.log(\"handlePost\");\n  console.log(res.status);\n  console.log(res.data);\n\n  if (res.status !== 201) {\n    return [];\n  }\n\n  const items = await res.data.data;\n  return items;\n}\n\nIndex.getInitialProps = async () => {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:3000/api/short`);\n  const items = await res.data.data;\n  return {\n    items: items\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsTUFBR2hCLEdBQUcsQ0FBQ2UsTUFBSixLQUFlLEdBQWxCLEVBQXNCO0FBQ3BCLFdBQU8sRUFBUDtBQUNEOztBQUNELFFBQU12QixLQUFLLEdBQUcsTUFBTVEsR0FBRyxDQUFDZ0IsSUFBSixDQUFTQSxJQUE3QjtBQUVBLFNBQU94QixLQUFQO0FBQ0Q7O0FBRURELEtBQUssQ0FBQzBCLGVBQU4sR0FBd0IsWUFBWTtBQUNsQyxRQUFNakIsR0FBRyxHQUFHLE1BQU1qQixnREFBQSxDQUFXLGlDQUFYLENBQWxCO0FBQ0EsUUFBTVMsS0FBSyxHQUFHLE1BQU1RLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU0EsSUFBN0I7QUFDQSxTQUFPO0FBQUV4QixJQUFBQSxLQUFLLEVBQUVBO0FBQVQsR0FBUDtBQUNELENBSkQ7O0FBTUEsaUVBQWVELEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlLCBJbnB1dCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IEhlYWRlck9mTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RPZlVybHMvaGVhZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RPZlVybHMvTGlzdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cblxuZnVuY3Rpb24gSW5kZXgoe2l0ZW1zfSkge1xuICBcbiAgY29uc3QgW3N0YXRlQWRkLCBzZXRTdGF0ZUFkZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGF0ZUl0ZW1zLCBzZXRTdGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKGl0ZW1zKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIHNldFN0YXRlSXRlbXMoaXRlbXMpO1xuIH0sIFtpdGVtc10pXG5cbiAgY29uc3QgYWRkVXJsSGFuZGxlID0gYXN5bmMoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhhbmRsZVBvc3QoZXZlbnQudGFyZ2V0LmFkZHVybC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBsZXQgYWxsSXRlbXMgPSBbLi4uc3RhdGVJdGVtcywgcmVzXTtcbiAgICBzZXRTdGF0ZUl0ZW1zKGFsbEl0ZW1zKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTByZW1cIiwgbWFyZ2luUmlnaHQ6IFwiMTByZW1cIiwgbWFyZ2luVG9wOiBcIjVyZW1cIn19PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2FkZFVybEhhbmRsZX0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBmb2N1cyBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2guLi4nXG4gICAgICAgICAgICBuYW1lPVwiYWRkdXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZUFkZH1cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOlwiNjAwcHhcIiB9fVxuICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBzZXRTdGF0ZUFkZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgY29udGVudD0nQ2xpY2sgSGVyZScgXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPEhlYWRlck9mTGlzdC8+XG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIDxMaXN0SXRlbSBpdGVtcz17c3RhdGVJdGVtc30gLz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVBvc3QocGF5bG9hZCl7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2hvcnRgLCB7XCJvcmlnaW5hbFVybFwiOiBwYXlsb2FkfSk7XG4gIGNvbnNvbGUubG9nKFwiaGFuZGxlUG9zdFwiKTtcbiAgY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgaWYocmVzLnN0YXR1cyAhPT0gMjAxKXtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXMuZGF0YS5kYXRhO1xuXG4gIHJldHVybiBpdGVtcztcbn0gXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Nob3J0YClcbiAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXMuZGF0YS5kYXRhO1xuICByZXR1cm4geyBpdGVtczogaXRlbXMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJheGlvcyIsIkJ1dHRvbiIsIlRhYmxlIiwiSW5wdXQiLCJIZWFkZXJPZkxpc3QiLCJMaXN0SXRlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5kZXgiLCJpdGVtcyIsInN0YXRlQWRkIiwic2V0U3RhdGVBZGQiLCJzdGF0ZUl0ZW1zIiwic2V0U3RhdGVJdGVtcyIsImFkZFVybEhhbmRsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJoYW5kbGVQb3N0IiwidGFyZ2V0IiwiYWRkdXJsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYWxsSXRlbXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImUiLCJwYXlsb2FkIiwicG9zdCIsInN0YXR1cyIsImRhdGEiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();