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
exports.id = "pages/api/short";
exports.ids = ["pages/api/short"];
exports.modules = {

/***/ "./models/Urls.js":
/*!************************!*\
  !*** ./models/Urls.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst UrlsSchema = new mongoose.Schema({\n  originalUrl: {\n    type: String,\n    require: [true, 'Please add URL'],\n    unique: true,\n    trim: true\n  },\n  urlCode: String,\n  shortUrl: String,\n  date: {\n    type: String,\n    default: Date.now\n  }\n});\nmodule.exports = mongoose.models.Urls || mongoose.model('Urls', UrlsSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvVXJscy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlGLFFBQVEsQ0FBQ0csTUFBYixDQUFvQjtBQUNuQ0MsRUFBQUEsV0FBVyxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRUMsTUFERztBQUVUTCxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sZ0JBQVAsQ0FGQTtBQUdUTSxJQUFBQSxNQUFNLEVBQUUsSUFIQztBQUlUQyxJQUFBQSxJQUFJLEVBQUU7QUFKRyxHQURzQjtBQU9uQ0MsRUFBQUEsT0FBTyxFQUFFSCxNQVAwQjtBQVFuQ0ksRUFBQUEsUUFBUSxFQUFFSixNQVJ5QjtBQVNuQ0ssRUFBQUEsSUFBSSxFQUFFO0FBQ0ZOLElBQUFBLElBQUksRUFBRUMsTUFESjtBQUVGTSxJQUFBQSxPQUFPLEVBQUVDLElBQUksQ0FBQ0M7QUFGWjtBQVQ2QixDQUFwQixDQUFuQjtBQWdCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsUUFBUSxDQUFDaUIsTUFBVCxDQUFnQkMsSUFBaEIsSUFBd0JsQixRQUFRLENBQUNtQixLQUFULENBQWUsTUFBZixFQUF1QmpCLFVBQXZCLENBQXpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbW9kZWxzL1VybHMuanM/NmUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBVcmxzU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBvcmlnaW5hbFVybDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgVVJMJ10sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICAgIHRyaW06IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdXJsQ29kZTogU3RyaW5nLFxyXG4gICAgc2hvcnRVcmw6IFN0cmluZyxcclxuICAgIGRhdGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3csXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVybHMgfHwgbW9uZ29vc2UubW9kZWwoJ1VybHMnLCBVcmxzU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXJsc1NjaGVtYSIsIlNjaGVtYSIsIm9yaWdpbmFsVXJsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInRyaW0iLCJ1cmxDb2RlIiwic2hvcnRVcmwiLCJkYXRlIiwiZGVmYXVsdCIsIkRhdGUiLCJub3ciLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiVXJscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/Urls.js\n");

/***/ }),

/***/ "./next.config.js":
/*!************************!*\
  !*** ./next.config.js ***!
  \************************/
/***/ ((module) => {

eval("module.exports = {\n  webpackDevMiddleware: config => {\n    config.watchOptions = {\n      poll: 1000,\n      aggregateTimeout: 300\n    };\n    return config;\n  }\n};\nmodule.exports = {\n  env: {\n    MONGO_URI: \"\",\n    REDIRECT_DOMAIN: \"http://srt.il\"\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9uZXh0LmNvbmZpZy5qcz8xMzgzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ3ZWJwYWNrRGV2TWlkZGxld2FyZSIsImNvbmZpZyIsIndhdGNoT3B0aW9ucyIsInBvbGwiLCJhZ2dyZWdhdGVUaW1lb3V0IiwiZW52IiwiTU9OR09fVVJJIiwiUkVESVJFQ1RfRE9NQUlOIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLG9CQUFvQixFQUFFQyxNQUFNLElBQUk7QUFDOUJBLElBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxHQUFzQjtBQUNwQkMsTUFBQUEsSUFBSSxFQUFFLElBRGM7QUFFcEJDLE1BQUFBLGdCQUFnQixFQUFFO0FBRkUsS0FBdEI7QUFJQSxXQUFPSCxNQUFQO0FBQ0Q7QUFQYyxDQUFqQjtBQVVBSCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZk0sRUFBQUEsR0FBRyxFQUFFO0FBQ0hDLElBQUFBLFNBQVMsRUFBRSxFQURSO0FBRUhDLElBQUFBLGVBQWUsRUFBRTtBQUZkO0FBRFUsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgd2VicGFja0Rldk1pZGRsZXdhcmU6IGNvbmZpZyA9PiB7XG4gICAgY29uZmlnLndhdGNoT3B0aW9ucyA9IHtcbiAgICAgIHBvbGw6IDEwMDAsXG4gICAgICBhZ2dyZWdhdGVUaW1lb3V0OiAzMDAsXG4gICAgfVxuICAgIHJldHVybiBjb25maWdcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnY6IHtcbiAgICBNT05HT19VUkk6IFwiXCIsXG4gICAgUkVESVJFQ1RfRE9NQUlOOiBcImh0dHA6Ly9zcnQuaWxcIixcbiAgfVxufVxuIl0sImZpbGUiOiIuL25leHQuY29uZmlnLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next.config.js\n");

/***/ }),

/***/ "./pages/api/short/index.js":
/*!**********************************!*\
  !*** ./pages/api/short/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnection */ \"./utils/dbConnection.js\");\n/* harmony import */ var _models_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Urls */ \"./models/Urls.js\");\n/* harmony import */ var _models_Urls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Urls__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar shortid = __webpack_require__(/*! shortid */ \"shortid\");\n\nconst validUrl = __webpack_require__(/*! valid-url */ \"valid-url\");\n\n\n(0,_utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__.default)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      getUrls(res);\n      break;\n\n    case 'POST':\n      try {\n        // I didn't check if the given URL is valid becase i don't any valid URL's.  \n        console.log(\"POST REQUEST\");\n        console.log((_next_config__WEBPACK_IMPORTED_MODULE_2___default().env.REDIRECT_DOMAIN));\n        const originalUrl = req.body.originalUrl;\n\n        if (originalUrl === undefined || originalUrl === \"\") {\n          return res.status(401).json('Invalid URL');\n        }\n\n        console.log(originalUrl);\n        const urlCode = shortid.generate();\n        const baseUrl = (_next_config__WEBPACK_IMPORTED_MODULE_2___default().env.REDIRECT_DOMAIN);\n\n        if (!validUrl.isUri(baseUrl)) {\n          return res.status(401).json('Invalid base URL');\n        }\n\n        let urlFromDB = await _models_Urls__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n          originalUrl\n        });\n\n        if (urlFromDB) {\n          res.json(urlFromDB);\n        } else {\n          const url = await saveObj(baseUrl, urlCode, originalUrl);\n          console.log(url);\n          res.status(201).json({\n            success: true,\n            data: url\n          });\n        }\n      } catch (error) {\n        res.status(400).json({\n          success: false,\n          message: \"Exception from POST: \" + error.message\n        });\n      }\n\n  }\n});\n\nasync function getUrls(res) {\n  try {\n    console.log(\"GET REQUEST\");\n    const get_urls = await _models_Urls__WEBPACK_IMPORTED_MODULE_1___default().find({});\n    res.status(200).json({\n      success: true,\n      data: get_urls\n    });\n  } catch (error) {\n    res.status(400).json({\n      success: false,\n      message: \"Exceprion from getUrls: \" + error.message\n    });\n  }\n}\n\nasync function saveObj(baseUrl, urlCode, originalUrl) {\n  try {\n    const shortUrl = baseUrl + '/' + urlCode;\n    const url = new (_models_Urls__WEBPACK_IMPORTED_MODULE_1___default())({\n      originalUrl,\n      urlCode,\n      shortUrl,\n      date: new Date()\n    });\n    await url.save();\n    console.log(\"Url saved\");\n    return url;\n  } catch (err) {\n    console.log(\"Exception from saveObj: \" + err.message);\n    return false;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBaEIsQ0FBcUI7QUFBRVMsTUFBQUEsT0FBTyxFQUFFLEtBQVg7QUFBa0JHLE1BQUFBLE9BQU8sRUFBRSw2QkFBNkJELEtBQUssQ0FBQ0M7QUFBOUQsS0FBckI7QUFDSDtBQUNKOztBQUVELGVBQWVKLE9BQWYsQ0FBdUJMLE9BQXZCLEVBQWdDRixPQUFoQyxFQUF5Q0wsV0FBekMsRUFBcUQ7QUFDakQsTUFBRztBQUNDLFVBQU1tQixRQUFRLEdBQUdaLE9BQU8sR0FBRyxHQUFWLEdBQWdCRixPQUFqQztBQUNBLFVBQU1NLEdBQUcsR0FBRyxJQUFJeEIscURBQUosQ0FBUztBQUNqQmEsTUFBQUEsV0FEaUI7QUFFakJLLE1BQUFBLE9BRmlCO0FBR2pCYyxNQUFBQSxRQUhpQjtBQUlqQkMsTUFBQUEsSUFBSSxFQUFFLElBQUlDLElBQUo7QUFKVyxLQUFULENBQVo7QUFNQSxVQUFNVixHQUFHLENBQUNXLElBQUosRUFBTjtBQUNBMUIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLFdBQU9jLEdBQVA7QUFDSCxHQVhELENBV0MsT0FBTVksR0FBTixFQUFVO0FBQ1AzQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBNkIwQixHQUFHLENBQUNQLE9BQTdDO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9zaG9ydC9pbmRleC5qcz9kMTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgVXJsc01vZGVsIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvVXJsc1wiO1xyXG5pbXBvcnQgVXJscyBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1VybHNcIjtcclxudmFyIHNob3J0aWQgPSByZXF1aXJlKCdzaG9ydGlkJyk7XHJcbmNvbnN0IHZhbGlkVXJsID0gcmVxdWlyZSgndmFsaWQtdXJsJylcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi8uLi8uLi9uZXh0LmNvbmZpZ1wiO1xyXG5cclxuZGJDb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICBnZXRVcmxzKHJlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAvLyBJIGRpZG4ndCBjaGVjayBpZiB0aGUgZ2l2ZW4gVVJMIGlzIHZhbGlkIGJlY2FzZSBpIGRvbid0IGFueSB2YWxpZCBVUkwncy4gIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQT1NUIFJFUVVFU1RcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXR0aW5ncy5lbnYuUkVESVJFQ1RfRE9NQUlOKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFVybCA9IHJlcS5ib2R5Lm9yaWdpbmFsVXJsO1xyXG4gICAgICAgICAgICAgICAgaWYob3JpZ2luYWxVcmwgPT09IHVuZGVmaW5lZCB8fCBvcmlnaW5hbFVybCA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKCdJbnZhbGlkIFVSTCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3JpZ2luYWxVcmwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsQ29kZSA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZVVybCA9IHNldHRpbmdzLmVudi5SRURJUkVDVF9ET01BSU47XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkVXJsLmlzVXJpKGJhc2VVcmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKCdJbnZhbGlkIGJhc2UgVVJMJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsRnJvbURCID0gYXdhaXQgVXJscy5maW5kT25lKHtvcmlnaW5hbFVybH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHVybEZyb21EQil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24odXJsRnJvbURCKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IHNhdmVPYmooYmFzZVVybCwgdXJsQ29kZSwgb3JpZ2luYWxVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cmwgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFeGNlcHRpb24gZnJvbSBQT1NUOiBcIiArIGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXJscyhyZXMpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBSRVFVRVNUXCIpO1xyXG4gICAgICAgIGNvbnN0IGdldF91cmxzID0gYXdhaXQgVXJsc01vZGVsLmZpbmQoe30pO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgIGRhdGE6IGdldF91cmxzfSk7XHJcbiAgICB9IGNhdGNoKGVycm9yKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkV4Y2VwcmlvbiBmcm9tIGdldFVybHM6IFwiICsgZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZU9iaihiYXNlVXJsLCB1cmxDb2RlLCBvcmlnaW5hbFVybCl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRVcmwgPSBiYXNlVXJsICsgJy8nICsgdXJsQ29kZTtcclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVXJscyh7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsVXJsLFxyXG4gICAgICAgICAgICB1cmxDb2RlLFxyXG4gICAgICAgICAgICBzaG9ydFVybCxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCB1cmwuc2F2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXJsIHNhdmVkXCIpO1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV4Y2VwdGlvbiBmcm9tIHNhdmVPYmo6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVcmxzTW9kZWwiLCJVcmxzIiwic2hvcnRpZCIsInJlcXVpcmUiLCJ2YWxpZFVybCIsInNldHRpbmdzIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0VXJscyIsImNvbnNvbGUiLCJsb2ciLCJlbnYiLCJSRURJUkVDVF9ET01BSU4iLCJvcmlnaW5hbFVybCIsImJvZHkiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJqc29uIiwidXJsQ29kZSIsImdlbmVyYXRlIiwiYmFzZVVybCIsImlzVXJpIiwidXJsRnJvbURCIiwiZmluZE9uZSIsInVybCIsInNhdmVPYmoiLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsImdldF91cmxzIiwiZmluZCIsInNob3J0VXJsIiwiZGF0ZSIsIkRhdGUiLCJzYXZlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/short/index.js\n");

/***/ }),

/***/ "./utils/dbConnection.js":
/*!*******************************!*\
  !*** ./utils/dbConnection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(`mongodb://yoniivan:pico1288@mongo:27017/?authSource=admin`, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsZUFBZUMsU0FBZixHQUEwQjtBQUN0QixNQUFHRCxVQUFVLENBQUNFLFdBQWQsRUFBMEI7QUFDdEI7QUFDSDs7QUFFRCxRQUFNQyxFQUFFLEdBQUcsTUFBTUosdURBQUEsQ0FBa0IsMkRBQWxCLEVBQThFO0FBQzNGTSxJQUFBQSxlQUFlLEVBQUUsSUFEMEU7QUFFM0ZDLElBQUFBLGtCQUFrQixFQUFFO0FBRnVFLEdBQTlFLENBQWpCO0FBS0FOLEVBQUFBLFVBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDSSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlWLFVBQVUsQ0FBQ0UsV0FBdkI7QUFDSDs7QUFFRCxpRUFBZUQsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3V0aWxzL2RiQ29ubmVjdGlvbi5qcz9lZDgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKXtcclxuICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoYG1vbmdvZGI6Ly95b25paXZhbjpwaWNvMTI4OEBtb25nbzoyNzAxNy8/YXV0aFNvdXJjZT1hZG1pbmAsIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/dbConnection.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("shortid");

/***/ }),

/***/ "valid-url":
/*!****************************!*\
  !*** external "valid-url" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("valid-url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/short/index.js"));
module.exports = __webpack_exports__;

})();