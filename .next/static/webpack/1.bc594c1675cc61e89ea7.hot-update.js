webpackHotUpdate_N_E(1,{

/***/ "./node_modules/highcharts/modules/exporting.js":
false,

/***/ "./src/screens/Home/components/ChartPage/ChartPage.tsx":
/*!*************************************************************!*\
  !*** ./src/screens/Home/components/ChartPage/ChartPage.tsx ***!
  \*************************************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChartPage\", function() { return ChartPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ \"./node_modules/highcharts/highstock.js\");\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screens_Home_components_ChartLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @screens/Home/components/ChartLine */ \"./src/screens/Home/components/ChartLine/index.tsx\");\n/* harmony import */ var _screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @screens/Home/components/ChartBar */ \"./src/screens/Home/components/ChartBar/index.tsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar chartOptions = {\n  title: {\n    text: 'Teste'\n  },\n  series: [{\n    data: [1, 2, 3, 10]\n  }]\n};\nvar chartOptionsBar = {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Teste'\n  },\n  series: [{\n    data: [{\n      name: \"Chrome\",\n      y: 62.74,\n      drilldown: \"Chrome\"\n    }, {\n      name: \"Firefox\",\n      y: 10.57,\n      drilldown: \"Firefox\"\n    }, {\n      name: \"Internet Explorer\",\n      y: 7.23,\n      drilldown: \"Internet Explorer\"\n    }, {\n      name: \"Safari\",\n      y: 5.58,\n      drilldown: \"Safari\"\n    }, {\n      name: \"Edge\",\n      y: 4.02,\n      drilldown: \"Edge\"\n    }, {\n      name: \"Opera\",\n      y: 1.92,\n      drilldown: \"Opera\"\n    }, {\n      name: \"Other\",\n      y: 7.62,\n      drilldown: null\n    }]\n  }]\n};\nvar data = [1, 2, 3, 4, 5];\n/**\n * @exports\n * @function\n * @components HomeScreen\n * @param {string} id\n * @namespace screens screens/Workflow\n *\n * @description\n * Responsável pela página de montagem do workflow.\n */\n\nvar ChartPage = function ChartPage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_screens_Home_components_ChartLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: chartOptions,\n    highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n  }), __jsx(\"div\", null, data.map(function (item) {\n    return __jsx(_screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: item,\n      options: chartOptionsBar,\n      highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n    });\n  })));\n};\n_c = ChartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0UGFnZS9DaGFydFBhZ2UudHN4PzZiZWYiXSwibmFtZXMiOlsiY2hhcnRPcHRpb25zIiwidGl0bGUiLCJ0ZXh0Iiwic2VyaWVzIiwiZGF0YSIsImNoYXJ0T3B0aW9uc0JhciIsImNoYXJ0IiwidHlwZSIsIm5hbWUiLCJ5IiwiZHJpbGxkb3duIiwiQ2hhcnRQYWdlIiwiSGlnaGNoYXJ0cyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBS0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBREQsR0FEWTtBQUluQkMsUUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQVEsRUFBUjtBQURDLEdBQUQ7QUFKVyxDQUFyQjtBQVVBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRTtBQURELEdBRGU7QUFJdEJOLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUU7QUFERCxHQUplO0FBT3RCQyxRQUFNLEVBQUUsQ0FBQztBQUNQQyxRQUFJLEVBQUUsQ0FDSjtBQUNJSSxVQUFJLEVBQUUsUUFEVjtBQUVJQyxPQUFDLEVBQUUsS0FGUDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQURJLEVBTUo7QUFDSUYsVUFBSSxFQUFFLFNBRFY7QUFFSUMsT0FBQyxFQUFFLEtBRlA7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FOSSxFQVdKO0FBQ0lGLFVBQUksRUFBRSxtQkFEVjtBQUVJQyxPQUFDLEVBQUUsSUFGUDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQVhJLEVBZ0JKO0FBQ0lGLFVBQUksRUFBRSxRQURWO0FBRUlDLE9BQUMsRUFBRSxJQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBaEJJLEVBcUJKO0FBQ0lGLFVBQUksRUFBRSxNQURWO0FBRUlDLE9BQUMsRUFBRSxJQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBckJJLEVBMEJKO0FBQ0lGLFVBQUksRUFBRSxPQURWO0FBRUlDLE9BQUMsRUFBRSxJQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBMUJJLEVBK0JKO0FBQ0lGLFVBQUksRUFBRSxPQURWO0FBRUlDLE9BQUMsRUFBRSxJQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBL0JJO0FBREMsR0FBRDtBQVBjLENBQXhCO0FBaURBLElBQU1OLElBQUksR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQWI7QUFHQTs7Ozs7Ozs7Ozs7QUFVTyxJQUFNTyxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQjtBQUFBLFNBQ2pDLG1FQUNFLE1BQUMsMEVBQUQ7QUFBVyxXQUFPLEVBQUVYLFlBQXBCO0FBQWtDLGNBQVUsRUFBRVksMkRBQVVBO0FBQXhELElBREYsRUFFRSxtQkFDR1IsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFRO0FBQ2hCLFdBQU8sTUFBQyx5RUFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBZjtBQUFxQixhQUFPLEVBQUVULGVBQTlCO0FBQStDLGdCQUFVLEVBQUVPLDJEQUFVQTtBQUFyRSxNQUFQO0FBQ0QsR0FGQSxDQURILENBRkYsQ0FEaUM7QUFBQSxDQUE1QjtLQUFNRCxTIiwiZmlsZSI6Ii4vc3JjL3NjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0UGFnZS9DaGFydFBhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMvaGlnaHN0b2NrJ1xuaW1wb3J0IEhpZ2hjaGFydHNFeHBvcnRpbmcgZnJvbSAnaGlnaGNoYXJ0cy9tb2R1bGVzL2V4cG9ydGluZydcblxuaW1wb3J0IENoYXJ0TGluZSBmcm9tICdAc2NyZWVucy9Ib21lL2NvbXBvbmVudHMvQ2hhcnRMaW5lJztcbmltcG9ydCBDaGFydEJhciBmcm9tICdAc2NyZWVucy9Ib21lL2NvbXBvbmVudHMvQ2hhcnRCYXInO1xuXG5cblxuXG5jb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gIHRpdGxlOiB7XG4gICAgdGV4dDogJ1Rlc3RlJ1xuICB9LFxuICBzZXJpZXM6IFt7XG4gICAgZGF0YTogWzEsMiwzLCAxMF0sXG5cbiAgfV1cbn1cblxuY29uc3QgY2hhcnRPcHRpb25zQmFyID0ge1xuICBjaGFydDoge1xuICAgIHR5cGU6ICdjb2x1bW4nXG59LFxuICB0aXRsZToge1xuICAgIHRleHQ6ICdUZXN0ZSdcbiAgfSxcbiAgc2VyaWVzOiBbe1xuICAgIGRhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkNocm9tZVwiLFxuICAgICAgICAgIHk6IDYyLjc0LFxuICAgICAgICAgIGRyaWxsZG93bjogXCJDaHJvbWVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkZpcmVmb3hcIixcbiAgICAgICAgICB5OiAxMC41NyxcbiAgICAgICAgICBkcmlsbGRvd246IFwiRmlyZWZveFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiSW50ZXJuZXQgRXhwbG9yZXJcIixcbiAgICAgICAgICB5OiA3LjIzLFxuICAgICAgICAgIGRyaWxsZG93bjogXCJJbnRlcm5ldCBFeHBsb3JlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiU2FmYXJpXCIsXG4gICAgICAgICAgeTogNS41OCxcbiAgICAgICAgICBkcmlsbGRvd246IFwiU2FmYXJpXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJFZGdlXCIsXG4gICAgICAgICAgeTogNC4wMixcbiAgICAgICAgICBkcmlsbGRvd246IFwiRWRnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiT3BlcmFcIixcbiAgICAgICAgICB5OiAxLjkyLFxuICAgICAgICAgIGRyaWxsZG93bjogXCJPcGVyYVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiT3RoZXJcIixcbiAgICAgICAgICB5OiA3LjYyLFxuICAgICAgICAgIGRyaWxsZG93bjogbnVsbFxuICAgICAgfVxuICBdLFxuXG4gIH1dXG59XG5cbmNvbnN0IGRhdGEgPSBbMSwyLDMsNCw1XTtcblxuXG4vKipcbiAqIEBleHBvcnRzXG4gKiBAZnVuY3Rpb25cbiAqIEBjb21wb25lbnRzIEhvbWVTY3JlZW5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQG5hbWVzcGFjZSBzY3JlZW5zIHNjcmVlbnMvV29ya2Zsb3dcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlc3BvbnPDoXZlbCBwZWxhIHDDoWdpbmEgZGUgbW9udGFnZW0gZG8gd29ya2Zsb3cuXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFydFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8PlxuICAgIDxDaGFydExpbmUgb3B0aW9ucz17Y2hhcnRPcHRpb25zfSBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfS8+XG4gICAgPGRpdj5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgcmV0dXJuIDxDaGFydEJhciBrZXk9e2l0ZW19IG9wdGlvbnM9e2NoYXJ0T3B0aW9uc0Jhcn0gaGlnaGNoYXJ0cz17SGlnaGNoYXJ0c30vPlxuICAgICAgfSl9XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC8+XG4pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Home/components/ChartPage/ChartPage.tsx\n");

/***/ })

})