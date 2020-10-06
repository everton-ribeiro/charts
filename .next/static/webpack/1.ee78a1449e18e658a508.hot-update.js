webpackHotUpdate_N_E(1,{

/***/ "./src/screens/Home/components/ChartPage/ChartPage.tsx":
/*!*************************************************************!*\
  !*** ./src/screens/Home/components/ChartPage/ChartPage.tsx ***!
  \*************************************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChartPage\", function() { return ChartPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ \"./node_modules/highcharts/highstock.js\");\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screens_Home_components_ChartLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @screens/Home/components/ChartLine */ \"./src/screens/Home/components/ChartLine/index.tsx\");\n/* harmony import */ var _screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @screens/Home/components/ChartBar */ \"./src/screens/Home/components/ChartBar/index.tsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar chartOptions = {\n  title: {\n    text: 'Tendência'\n  },\n  tooltip: {\n    enabled: false\n  },\n  series: [{\n    data: [1, 2, 3]\n  }],\n  xAxis: [{\n    labels: {\n      enabled: false\n    }\n  }]\n}; //colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',\n//'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']\n\nvar chartOptionsBar = {\n  chart: {\n    type: 'column',\n    borderRadius: 5\n  },\n  title: null,\n  legend: {\n    enabled: false\n  },\n  plotOptions: {\n    column: {\n      borderRadius: 5\n    }\n  },\n  tooltip: {\n    enabled: false\n  },\n  caption: null,\n  xAxis: [{\n    labels: {\n      enabled: false\n    }\n  }],\n  yAxis: [{\n    title: {\n      enabled: false\n    },\n    labels: {\n      formatter: function formatter() {\n        return this.value + '%';\n      }\n    }\n  }],\n  series: [{\n    data: [{\n      y: 90,\n      color: '#1890FC'\n    }, {\n      y: 75,\n      color: '#1FC2C2'\n    }, {\n      y: 70,\n      color: '#52C422'\n    }, {\n      y: 60,\n      color: '#A0D92A'\n    }, {\n      y: 10,\n      color: '#FADB31'\n    }, {\n      y: 15,\n      color: '#FAAD29'\n    }, {\n      y: 35,\n      color: '#FA8C24'\n    }, {\n      y: 39,\n      color: '#FA541E'\n    }, {\n      y: 39,\n      color: '#F5222D'\n    }]\n  }]\n};\nvar data = [1, 2, 3, 4, 5];\n/**\n * @exports\n * @function\n * @components HomeScreen\n * @param {string} id\n * @namespace screens screens/Workflow\n *\n * @description\n * Responsável pela página de montagem do workflow.\n */\n\nvar ChartPage = function ChartPage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_screens_Home_components_ChartLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: chartOptions,\n    highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n  }), __jsx(\"div\", null, __jsx(_screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    options: chartOptionsBar,\n    highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n  })));\n};\n_c = ChartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0UGFnZS9DaGFydFBhZ2UudHN4PzZiZWYiXSwibmFtZXMiOlsiY2hhcnRPcHRpb25zIiwidGl0bGUiLCJ0ZXh0IiwidG9vbHRpcCIsImVuYWJsZWQiLCJzZXJpZXMiLCJkYXRhIiwieEF4aXMiLCJsYWJlbHMiLCJjaGFydE9wdGlvbnNCYXIiLCJjaGFydCIsInR5cGUiLCJib3JkZXJSYWRpdXMiLCJsZWdlbmQiLCJwbG90T3B0aW9ucyIsImNvbHVtbiIsImNhcHRpb24iLCJ5QXhpcyIsImZvcm1hdHRlciIsInZhbHVlIiwieSIsImNvbG9yIiwiQ2hhcnRQYWdlIiwiSGlnaGNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFLQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUM7QUFEQSxHQURZO0FBSW5CQyxTQUFPLEVBQUM7QUFDTkMsV0FBTyxFQUFDO0FBREYsR0FKVztBQU9uQkMsUUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBREMsR0FBRCxDQVBXO0FBV25CQyxPQUFLLEVBQUMsQ0FBQztBQUFDQyxVQUFNLEVBQUM7QUFBQ0osYUFBTyxFQUFDO0FBQVQ7QUFBUixHQUFEO0FBWGEsQ0FBckIsQyxDQWdCQTtBQUNBOztBQUVBLElBQU1LLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxDLGdCQUFZLEVBQUU7QUFGVCxHQURlO0FBS3RCWCxPQUFLLEVBQUUsSUFMZTtBQU10QlksUUFBTSxFQUFFO0FBQ05ULFdBQU8sRUFBQztBQURGLEdBTmM7QUFTdEJVLGFBQVcsRUFBQztBQUNWQyxVQUFNLEVBQUM7QUFDTEgsa0JBQVksRUFBRTtBQURUO0FBREcsR0FUVTtBQWN0QlQsU0FBTyxFQUFDO0FBQ05DLFdBQU8sRUFBQztBQURGLEdBZGM7QUFpQnRCWSxTQUFPLEVBQUMsSUFqQmM7QUFrQnRCVCxPQUFLLEVBQUMsQ0FBQztBQUFDQyxVQUFNLEVBQUM7QUFBQ0osYUFBTyxFQUFDO0FBQVQ7QUFBUixHQUFELENBbEJnQjtBQW1CdEJhLE9BQUssRUFBQyxDQUFDO0FBQUNoQixTQUFLLEVBQUM7QUFBQ0csYUFBTyxFQUFDO0FBQVQsS0FBUDtBQUF1QkksVUFBTSxFQUFDO0FBQ25DVSxlQUFTLEVBQUUscUJBQVc7QUFDdEIsZUFBTyxLQUFLQyxLQUFMLEdBQWEsR0FBcEI7QUFDRDtBQUhvQztBQUE5QixHQUFELENBbkJnQjtBQXVCdEJkLFFBQU0sRUFBRSxDQUFDO0FBQ1BDLFFBQUksRUFBRSxDQUNKO0FBQ0VjLE9BQUMsRUFBRSxFQURMO0FBRUVDLFdBQUssRUFBQztBQUZSLEtBREksRUFLSjtBQUNJRCxPQUFDLEVBQUUsRUFEUDtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQUxJLEVBU0o7QUFDSUQsT0FBQyxFQUFFLEVBRFA7QUFFSUMsV0FBSyxFQUFFO0FBRlgsS0FUSSxFQWFKO0FBQ0lELE9BQUMsRUFBRSxFQURQO0FBRUlDLFdBQUssRUFBRTtBQUZYLEtBYkksRUFpQko7QUFDSUQsT0FBQyxFQUFFLEVBRFA7QUFFSUMsV0FBSyxFQUFFO0FBRlgsS0FqQkksRUFxQko7QUFDSUQsT0FBQyxFQUFFLEVBRFA7QUFFSUMsV0FBSyxFQUFFO0FBRlgsS0FyQkksRUF5Qko7QUFDSUQsT0FBQyxFQUFFLEVBRFA7QUFFSUMsV0FBSyxFQUFFO0FBRlgsS0F6QkksRUE2Qko7QUFDSUQsT0FBQyxFQUFFLEVBRFA7QUFFSUMsV0FBSyxFQUFFO0FBRlgsS0E3QkksRUFpQ0o7QUFDSUQsT0FBQyxFQUFFLEVBRFA7QUFFSUMsV0FBSyxFQUFFO0FBRlgsS0FqQ0k7QUFEQyxHQUFEO0FBdkJjLENBQXhCO0FBa0VBLElBQU1mLElBQUksR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQWI7QUFHQTs7Ozs7Ozs7Ozs7QUFVTyxJQUFNZ0IsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0I7QUFBQSxTQUNqQyxtRUFDRSxNQUFDLDBFQUFEO0FBQVcsV0FBTyxFQUFFdEIsWUFBcEI7QUFBa0MsY0FBVSxFQUFFdUIsMkRBQVVBO0FBQXhELElBREYsRUFFRSxtQkFDQSxNQUFDLHlFQUFEO0FBQVcsV0FBTyxFQUFFZCxlQUFwQjtBQUFxQyxjQUFVLEVBQUVjLDJEQUFVQTtBQUEzRCxJQURBLENBRkYsQ0FEaUM7QUFBQSxDQUE1QjtLQUFNRCxTIiwiZmlsZSI6Ii4vc3JjL3NjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0UGFnZS9DaGFydFBhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMvaGlnaHN0b2NrJ1xuXG5pbXBvcnQgQ2hhcnRMaW5lIGZyb20gJ0BzY3JlZW5zL0hvbWUvY29tcG9uZW50cy9DaGFydExpbmUnO1xuaW1wb3J0IENoYXJ0QmFyIGZyb20gJ0BzY3JlZW5zL0hvbWUvY29tcG9uZW50cy9DaGFydEJhcic7XG5cblxuXG5cbmNvbnN0IGNoYXJ0T3B0aW9ucyA9IHtcbiAgdGl0bGU6IHtcbiAgICB0ZXh0OidUZW5kw6puY2lhJ1xuICB9LFxuICB0b29sdGlwOntcbiAgICBlbmFibGVkOmZhbHNlXG4gIH0sXG4gIHNlcmllczogW3tcbiAgICBkYXRhOiBbMSwyLDNdLFxuXG4gIH1dLFxuICB4QXhpczpbe2xhYmVsczp7ZW5hYmxlZDpmYWxzZX0sIH1dLFxufVxuXG5cblxuLy9jb2xvcnM6IFsnIzJmN2VkOCcsICcjMGQyMzNhJywgJyM4YmJjMjEnLCAnIzkxMDAwMCcsICcjMWFhZGNlJyxcbi8vJyM0OTI5NzAnLCAnI2YyOGY0MycsICcjNzdhMWU1JywgJyNjNDI1MjUnLCAnI2E2Yzk2YSddXG5cbmNvbnN0IGNoYXJ0T3B0aW9uc0JhciA9IHtcbiAgY2hhcnQ6IHtcbiAgICB0eXBlOiAnY29sdW1uJyxcbiAgICBib3JkZXJSYWRpdXM6IDVcbn0sXG4gIHRpdGxlOiBudWxsLFxuICBsZWdlbmQ6IHtcbiAgICBlbmFibGVkOmZhbHNlXG4gIH0sXG4gIHBsb3RPcHRpb25zOntcbiAgICBjb2x1bW46e1xuICAgICAgYm9yZGVyUmFkaXVzOiA1XG4gICAgfVxuICB9LFxuICB0b29sdGlwOntcbiAgICBlbmFibGVkOmZhbHNlXG4gIH0sXG4gIGNhcHRpb246bnVsbCxcbiAgeEF4aXM6W3tsYWJlbHM6e2VuYWJsZWQ6ZmFsc2V9LCB9XSxcbiAgeUF4aXM6W3t0aXRsZTp7ZW5hYmxlZDpmYWxzZX0sbGFiZWxzOntcbiAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlICsgJyUnO1xuICB9fSB9XSxcbiAgc2VyaWVzOiBbe1xuICAgIGRhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgeTogOTAsXG4gICAgICAgIGNvbG9yOicjMTg5MEZDJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB5OiA3NSxcbiAgICAgICAgICBjb2xvcjogJyMxRkMyQzInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHk6IDcwLFxuICAgICAgICAgIGNvbG9yOiAnIzUyQzQyMidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgeTogNjAsXG4gICAgICAgICAgY29sb3I6ICcjQTBEOTJBJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB5OiAxMCxcbiAgICAgICAgICBjb2xvcjogJyNGQURCMzEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHk6IDE1LFxuICAgICAgICAgIGNvbG9yOiAnI0ZBQUQyOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgeTogMzUsXG4gICAgICAgICAgY29sb3I6ICcjRkE4QzI0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB5OiAzOSxcbiAgICAgICAgICBjb2xvcjogJyNGQTU0MUUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHk6IDM5LFxuICAgICAgICAgIGNvbG9yOiAnI0Y1MjIyRCdcbiAgICAgIH1cbiAgXSxcblxuICB9XVxufVxuXG5jb25zdCBkYXRhID0gWzEsMiwzLDQsNV07XG5cblxuLyoqXG4gKiBAZXhwb3J0c1xuICogQGZ1bmN0aW9uXG4gKiBAY29tcG9uZW50cyBIb21lU2NyZWVuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBuYW1lc3BhY2Ugc2NyZWVucyBzY3JlZW5zL1dvcmtmbG93XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXNwb25zw6F2ZWwgcGVsYSBww6FnaW5hIGRlIG1vbnRhZ2VtIGRvIHdvcmtmbG93LlxuICovXG5leHBvcnQgY29uc3QgQ2hhcnRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPD5cbiAgICA8Q2hhcnRMaW5lIG9wdGlvbnM9e2NoYXJ0T3B0aW9uc30gaGlnaGNoYXJ0cz17SGlnaGNoYXJ0c30gLz5cbiAgICA8ZGl2PlxuICAgIDxDaGFydEJhciAgb3B0aW9ucz17Y2hhcnRPcHRpb25zQmFyfSBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfS8+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC8+XG4pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Home/components/ChartPage/ChartPage.tsx\n");

/***/ })

})