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
exports.id = "pages/api/short/redirect";
exports.ids = ["pages/api/short/redirect"];
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

eval("module.exports = {\n  webpackDevMiddleware: config => {\n    config.watchOptions = {\n      poll: 1000,\n      aggregateTimeout: 300\n    };\n    return config;\n  }\n};\nmodule.exports = {\n  env: {\n    MONGO_URI: \"mongo\",\n    MONGO_IP: \"27017\",\n    MONGO_PASSWORD: \"pico1288\",\n    MONGO_USER: \"yoniivan\",\n    REDIRECT_DOMAIN: \"http://srt.il\",\n    WEB_DOMIAN: \"http://localhost:3000\"\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9uZXh0LmNvbmZpZy5qcz8xMzgzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ3ZWJwYWNrRGV2TWlkZGxld2FyZSIsImNvbmZpZyIsIndhdGNoT3B0aW9ucyIsInBvbGwiLCJhZ2dyZWdhdGVUaW1lb3V0IiwiZW52IiwiTU9OR09fVVJJIiwiTU9OR09fSVAiLCJNT05HT19QQVNTV09SRCIsIk1PTkdPX1VTRVIiLCJSRURJUkVDVF9ET01BSU4iLCJXRUJfRE9NSUFOIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLG9CQUFvQixFQUFFQyxNQUFNLElBQUk7QUFDOUJBLElBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxHQUFzQjtBQUNwQkMsTUFBQUEsSUFBSSxFQUFFLElBRGM7QUFFcEJDLE1BQUFBLGdCQUFnQixFQUFFO0FBRkUsS0FBdEI7QUFJQSxXQUFPSCxNQUFQO0FBQ0Q7QUFQYyxDQUFqQjtBQVVBSCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZk0sRUFBQUEsR0FBRyxFQUFFO0FBQ0hDLElBQUFBLFNBQVMsRUFBRSxPQURSO0FBRUhDLElBQUFBLFFBQVEsRUFBRSxPQUZQO0FBR0hDLElBQUFBLGNBQWMsRUFBRSxVQUhiO0FBSUhDLElBQUFBLFVBQVUsRUFBRSxVQUpUO0FBS0hDLElBQUFBLGVBQWUsRUFBRSxlQUxkO0FBTUhDLElBQUFBLFVBQVUsRUFBRTtBQU5UO0FBRFUsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgd2VicGFja0Rldk1pZGRsZXdhcmU6IGNvbmZpZyA9PiB7XG4gICAgY29uZmlnLndhdGNoT3B0aW9ucyA9IHtcbiAgICAgIHBvbGw6IDEwMDAsXG4gICAgICBhZ2dyZWdhdGVUaW1lb3V0OiAzMDAsXG4gICAgfVxuICAgIHJldHVybiBjb25maWdcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnY6IHtcbiAgICBNT05HT19VUkk6IFwibW9uZ29cIixcbiAgICBNT05HT19JUDogXCIyNzAxN1wiLFxuICAgIE1PTkdPX1BBU1NXT1JEOiBcInBpY28xMjg4XCIsXG4gICAgTU9OR09fVVNFUjogXCJ5b25paXZhblwiLFxuICAgIFJFRElSRUNUX0RPTUFJTjogXCJodHRwOi8vc3J0LmlsXCIsXG4gICAgV0VCX0RPTUlBTjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgfVxufVxuIl0sImZpbGUiOiIuL25leHQuY29uZmlnLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next.config.js\n");

/***/ }),

/***/ "./pages/api/short/redirect.js":
/*!*************************************!*\
  !*** ./pages/api/short/redirect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnection */ \"./utils/dbConnection.js\");\n/* harmony import */ var _models_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Urls */ \"./models/Urls.js\");\n/* harmony import */ var _models_Urls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Urls__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst validUrl = __webpack_require__(/*! valid-url */ \"valid-url\");\n\n(0,_utils_dbConnection__WEBPACK_IMPORTED_MODULE_0__.default)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  console.log(req.body.path);\n\n  if (req.body.path === undefined) {\n    return;\n  }\n\n  const url = await _models_Urls__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n    urlCode: req.body.path.substring(1)\n  });\n\n  if (url) {\n    const diff = substractDates(url.date, new Date());\n    const munits = millisToMinutesAndSeconds(diff);\n\n    if (munits.split(\":\")[0] > 1440) {\n      console.log(munits);\n      return res.status(200).json({\n        message: \"URL has expiered.\"\n      });\n    }\n\n    if (!validUrl.isUri(url.originalUrl)) {\n      return res.status(401).json('URL does not exist.');\n    }\n\n    return res.redirect(url.originalUrl);\n  } else {\n    return res.json({\n      message: \"No such URI\"\n    });\n  }\n});\n\nfunction millisToMinutesAndSeconds(millis) {\n  var minutes = Math.floor(millis / 60000);\n  var seconds = (millis % 60000 / 1000).toFixed(0);\n  return minutes + \":\" + (seconds < 10 ? '0' : '') + seconds;\n}\n\nfunction substractDates(date, now) {\n  let mongo = new Date(date);\n  let diff = Math.abs(now - mongo);\n  return diff;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2hvcnQvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUUsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDRCQUFELENBQXhCOztBQUVBSCw0REFBUztBQUVULGlFQUFlLE9BQU9JLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxJQUFyQjs7QUFDQSxNQUFHTCxHQUFHLENBQUNJLElBQUosQ0FBU0MsSUFBVCxLQUFrQkMsU0FBckIsRUFBK0I7QUFDM0I7QUFDSDs7QUFDRCxRQUFNQyxHQUFHLEdBQUcsTUFBTVYsMkRBQUEsQ0FBYTtBQUFFWSxJQUFBQSxPQUFPLEVBQUVULEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxJQUFULENBQWNLLFNBQWQsQ0FBd0IsQ0FBeEI7QUFBWCxHQUFiLENBQWxCOztBQUNBLE1BQUdILEdBQUgsRUFBTztBQUNILFVBQU1JLElBQUksR0FBR0MsY0FBYyxDQUFDTCxHQUFHLENBQUNNLElBQUwsRUFBVyxJQUFJQyxJQUFKLEVBQVgsQ0FBM0I7QUFDQSxVQUFNQyxNQUFNLEdBQUdDLHlCQUF5QixDQUFDTCxJQUFELENBQXhDOztBQUNBLFFBQUdJLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsSUFBdUIsSUFBMUIsRUFBK0I7QUFDM0JmLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxNQUFaO0FBQ0EsYUFBT2QsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCLENBQVA7QUFDSDs7QUFFRCxRQUFJLENBQUN0QixRQUFRLENBQUN1QixLQUFULENBQWVkLEdBQUcsQ0FBQ2UsV0FBbkIsQ0FBTCxFQUFzQztBQUNsQyxhQUFPckIsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHFCQUFyQixDQUFQO0FBQ0g7O0FBRUQsV0FBT2xCLEdBQUcsQ0FBQ3NCLFFBQUosQ0FBYWhCLEdBQUcsQ0FBQ2UsV0FBakIsQ0FBUDtBQUVILEdBZEQsTUFjSztBQUNELFdBQU9yQixHQUFHLENBQUNrQixJQUFKLENBQVM7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQVYsS0FBVCxDQUFQO0FBQ0g7QUFDSixDQXZCRDs7QUF5QkEsU0FBU0oseUJBQVQsQ0FBbUNRLE1BQW5DLEVBQTJDO0FBQ3ZDLE1BQUlDLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQU0sR0FBRyxLQUFwQixDQUFkO0FBQ0EsTUFBSUksT0FBTyxHQUFHLENBQUVKLE1BQU0sR0FBRyxLQUFWLEdBQW1CLElBQXBCLEVBQTBCSyxPQUExQixDQUFrQyxDQUFsQyxDQUFkO0FBQ0EsU0FBT0osT0FBTyxHQUFHLEdBQVYsSUFBaUJHLE9BQU8sR0FBRyxFQUFWLEdBQWUsR0FBZixHQUFxQixFQUF0QyxJQUE0Q0EsT0FBbkQ7QUFDRDs7QUFFSCxTQUFTaEIsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEJpQixHQUE5QixFQUFrQztBQUM5QixNQUFJQyxLQUFLLEdBQUcsSUFBSWpCLElBQUosQ0FBU0QsSUFBVCxDQUFaO0FBQ0EsTUFBSUYsSUFBSSxHQUFHZSxJQUFJLENBQUNNLEdBQUwsQ0FBU0YsR0FBRyxHQUFHQyxLQUFmLENBQVg7QUFDQSxTQUFPcEIsSUFBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXBpL3Nob3J0L3JlZGlyZWN0LmpzPzIwNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0aW9uXCI7XHJcbmltcG9ydCBVcmxzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvVXJsc1wiO1xyXG5jb25zdCB2YWxpZFVybCA9IHJlcXVpcmUoJ3ZhbGlkLXVybCcpO1xyXG5cclxuZGJDb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LnBhdGgpO1xyXG4gICAgaWYocmVxLmJvZHkucGF0aCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmwgPSBhd2FpdCBVcmxzLmZpbmRPbmUoeyB1cmxDb2RlOiByZXEuYm9keS5wYXRoLnN1YnN0cmluZygxKSB9KTtcclxuICAgIGlmKHVybCl7XHJcbiAgICAgICAgY29uc3QgZGlmZiA9IHN1YnN0cmFjdERhdGVzKHVybC5kYXRlLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICBjb25zdCBtdW5pdHMgPSBtaWxsaXNUb01pbnV0ZXNBbmRTZWNvbmRzKGRpZmYpO1xyXG4gICAgICAgIGlmKG11bml0cy5zcGxpdChcIjpcIilbMF0gPiAxNDQwKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXVuaXRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJVUkwgaGFzIGV4cGllcmVkLlwiIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF2YWxpZFVybC5pc1VyaSh1cmwub3JpZ2luYWxVcmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbignVVJMIGRvZXMgbm90IGV4aXN0LicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCh1cmwub3JpZ2luYWxVcmwpO1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7bWVzc2FnZTogXCJObyBzdWNoIFVSSVwifSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pbGxpc1RvTWludXRlc0FuZFNlY29uZHMobWlsbGlzKSB7XHJcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IobWlsbGlzIC8gNjAwMDApO1xyXG4gICAgdmFyIHNlY29uZHMgPSAoKG1pbGxpcyAlIDYwMDAwKSAvIDEwMDApLnRvRml4ZWQoMCk7XHJcbiAgICByZXR1cm4gbWludXRlcyArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/ICcwJyA6ICcnKSArIHNlY29uZHM7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc3Vic3RyYWN0RGF0ZXMoZGF0ZSwgbm93KXtcclxuICAgIGxldCBtb25nbyA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgbGV0IGRpZmYgPSBNYXRoLmFicyhub3cgLSBtb25nbyk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxufSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVcmxzIiwidmFsaWRVcmwiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJwYXRoIiwidW5kZWZpbmVkIiwidXJsIiwiZmluZE9uZSIsInVybENvZGUiLCJzdWJzdHJpbmciLCJkaWZmIiwic3Vic3RyYWN0RGF0ZXMiLCJkYXRlIiwiRGF0ZSIsIm11bml0cyIsIm1pbGxpc1RvTWludXRlc0FuZFNlY29uZHMiLCJzcGxpdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaXNVcmkiLCJvcmlnaW5hbFVybCIsInJlZGlyZWN0IiwibWlsbGlzIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJ0b0ZpeGVkIiwibm93IiwibW9uZ28iLCJhYnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/short/redirect.js\n");

/***/ }),

/***/ "./utils/dbConnection.js":
/*!*******************************!*\
  !*** ./utils/dbConnection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst connection = {};\n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(`mongodb://${(_next_config__WEBPACK_IMPORTED_MODULE_1___default().env.MONGO_USER)}:${(_next_config__WEBPACK_IMPORTED_MODULE_1___default().env.MONGO_PASSWORD)}@${(_next_config__WEBPACK_IMPORTED_MODULE_1___default().env.MONGO_URI)}:${(_next_config__WEBPACK_IMPORTED_MODULE_1___default().env.MONGO_IP)}/?authSource=admin`, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUUsVUFBVSxHQUFHLEVBQW5COztBQUVBLGVBQWVDLFNBQWYsR0FBMEI7QUFDdEIsTUFBR0QsVUFBVSxDQUFDRSxXQUFkLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU1MLHVEQUFBLENBQWtCLGFBQVlDLG9FQUF3QixJQUFHQSx3RUFBNEIsSUFBR0EsbUVBQXVCLElBQUdBLGtFQUFzQixvQkFBeEksRUFBNko7QUFDMUtXLElBQUFBLGVBQWUsRUFBRSxJQUR5SjtBQUUxS0MsSUFBQUEsa0JBQWtCLEVBQUU7QUFGc0osR0FBN0osQ0FBakI7QUFLQVgsRUFBQUEsVUFBVSxDQUFDRSxXQUFYLEdBQXlCQyxFQUFFLENBQUNTLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxVQUEzQztBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWYsVUFBVSxDQUFDRSxXQUF2QjtBQUNIOztBQUVELGlFQUFlRCxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vdXRpbHMvZGJDb25uZWN0aW9uLmpzP2VkODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL25leHQuY29uZmlnJztcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xyXG4gICAgaWYoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgbW9uZ29kYjovLyR7c2V0dGluZ3MuZW52Lk1PTkdPX1VTRVJ9OiR7c2V0dGluZ3MuZW52Lk1PTkdPX1BBU1NXT1JEfUAke3NldHRpbmdzLmVudi5NT05HT19VUkl9OiR7c2V0dGluZ3MuZW52Lk1PTkdPX0lQfS8/YXV0aFNvdXJjZT1hZG1pbmAsIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNldHRpbmdzIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwiZW52IiwiTU9OR09fVVNFUiIsIk1PTkdPX1BBU1NXT1JEIiwiTU9OR09fVVJJIiwiTU9OR09fSVAiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnection.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/short/redirect.js"));
module.exports = __webpack_exports__;

})();