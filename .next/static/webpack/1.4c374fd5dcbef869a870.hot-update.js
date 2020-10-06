webpackHotUpdate_N_E(1,{

/***/ "./src/screens/Home/components/ChartPage/ChartPage.tsx":
/*!*************************************************************!*\
  !*** ./src/screens/Home/components/ChartPage/ChartPage.tsx ***!
  \*************************************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChartPage\", function() { return ChartPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ \"./node_modules/highcharts/highstock.js\");\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screens_Home_components_ChartLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @screens/Home/components/ChartLine */ \"./src/screens/Home/components/ChartLine/index.tsx\");\n/* harmony import */ var _screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @screens/Home/components/ChartBar */ \"./src/screens/Home/components/ChartBar/index.tsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar chartOptions = {\n  title: {\n    text: 'Tendência'\n  },\n  legend: {\n    enabled: false\n  },\n  tooltip: {\n    enabled: false\n  },\n  series: [{\n    data: [1, 2, 3]\n  }]\n}; //colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',\n//'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']\n\nvar chartOptionsBar = {\n  chart: {\n    type: 'column',\n    borderRadius: 5\n  },\n  title: null,\n  legend: {\n    enabled: false\n  },\n  plotOptions: {\n    column: {\n      borderRadius: 5\n    }\n  },\n  tooltip: {\n    enabled: false\n  },\n  caption: null,\n  xAxis: [{\n    labels: {\n      enabled: false\n    }\n  }],\n  yAxis: [{\n    title: {\n      enabled: false\n    },\n    labels: {\n      formatter: function formatter() {\n        return this.value + '%';\n      }\n    }\n  }],\n  series: [{\n    data: [{\n      y: 90,\n      color: '#1890FC'\n    }, {\n      y: 75,\n      color: '#1FC2C2'\n    }, {\n      y: 70,\n      color: '#52C422'\n    }, {\n      y: 60,\n      color: '#A0D92A'\n    }, {\n      y: 10,\n      color: '#FADB31'\n    }, {\n      y: 15,\n      color: '#FAAD29'\n    }, {\n      y: 35,\n      color: '#FA8C24'\n    }, {\n      y: 39,\n      color: '#FA541E'\n    }, {\n      y: 39,\n      color: '#F5222D'\n    }]\n  }]\n};\nvar data = [1, 2, 3, 4, 5];\n/**\n * @exports\n * @function\n * @components HomeScreen\n * @param {string} id\n * @namespace screens screens/Workflow\n *\n * @description\n * Responsável pela página de montagem do workflow.\n */\n\nvar ChartPage = function ChartPage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_screens_Home_components_ChartLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: chartOptions,\n    highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n  }), __jsx(\"div\", null, __jsx(_screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    options: chartOptionsBar,\n    highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n  })));\n};\n_c = ChartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0UGFnZS9DaGFydFBhZ2UudHN4PzZiZWYiXSwibmFtZXMiOlsiY2hhcnRPcHRpb25zIiwidGl0bGUiLCJ0ZXh0IiwibGVnZW5kIiwiZW5hYmxlZCIsInRvb2x0aXAiLCJzZXJpZXMiLCJkYXRhIiwiY2hhcnRPcHRpb25zQmFyIiwiY2hhcnQiLCJ0eXBlIiwiYm9yZGVyUmFkaXVzIiwicGxvdE9wdGlvbnMiLCJjb2x1bW4iLCJjYXB0aW9uIiwieEF4aXMiLCJsYWJlbHMiLCJ5QXhpcyIsImZvcm1hdHRlciIsInZhbHVlIiwieSIsImNvbG9yIiwiQ2hhcnRQYWdlIiwiSGlnaGNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFLQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUM7QUFEQSxHQURZO0FBSW5CQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFDO0FBREYsR0FKVztBQU9uQkMsU0FBTyxFQUFDO0FBQ05ELFdBQU8sRUFBQztBQURGLEdBUFc7QUFVbkJFLFFBQU0sRUFBRSxDQUFDO0FBQ1BDLFFBQUksRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTDtBQURDLEdBQUQ7QUFWVyxDQUFyQixDLENBa0JBO0FBQ0E7O0FBRUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLFFBREQ7QUFFTEMsZ0JBQVksRUFBRTtBQUZULEdBRGU7QUFLdEJWLE9BQUssRUFBRSxJQUxlO0FBTXRCRSxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFDO0FBREYsR0FOYztBQVN0QlEsYUFBVyxFQUFDO0FBQ1ZDLFVBQU0sRUFBQztBQUNMRixrQkFBWSxFQUFFO0FBRFQ7QUFERyxHQVRVO0FBY3RCTixTQUFPLEVBQUM7QUFDTkQsV0FBTyxFQUFDO0FBREYsR0FkYztBQWlCdEJVLFNBQU8sRUFBQyxJQWpCYztBQWtCdEJDLE9BQUssRUFBQyxDQUFDO0FBQUNDLFVBQU0sRUFBQztBQUFDWixhQUFPLEVBQUM7QUFBVDtBQUFSLEdBQUQsQ0FsQmdCO0FBbUJ0QmEsT0FBSyxFQUFDLENBQUM7QUFBQ2hCLFNBQUssRUFBQztBQUFDRyxhQUFPLEVBQUM7QUFBVCxLQUFQO0FBQXVCWSxVQUFNLEVBQUM7QUFDbkNFLGVBQVMsRUFBRSxxQkFBVztBQUN0QixlQUFPLEtBQUtDLEtBQUwsR0FBYSxHQUFwQjtBQUNEO0FBSG9DO0FBQTlCLEdBQUQsQ0FuQmdCO0FBdUJ0QmIsUUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBSSxFQUFFLENBQ0o7QUFDRWEsT0FBQyxFQUFFLEVBREw7QUFFRUMsV0FBSyxFQUFDO0FBRlIsS0FESSxFQUtKO0FBQ0lELE9BQUMsRUFBRSxFQURQO0FBRUlDLFdBQUssRUFBRTtBQUZYLEtBTEksRUFTSjtBQUNJRCxPQUFDLEVBQUUsRUFEUDtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQVRJLEVBYUo7QUFDSUQsT0FBQyxFQUFFLEVBRFA7QUFFSUMsV0FBSyxFQUFFO0FBRlgsS0FiSSxFQWlCSjtBQUNJRCxPQUFDLEVBQUUsRUFEUDtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQWpCSSxFQXFCSjtBQUNJRCxPQUFDLEVBQUUsRUFEUDtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQXJCSSxFQXlCSjtBQUNJRCxPQUFDLEVBQUUsRUFEUDtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQXpCSSxFQTZCSjtBQUNJRCxPQUFDLEVBQUUsRUFEUDtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQTdCSSxFQWlDSjtBQUNJRCxPQUFDLEVBQUUsRUFEUDtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQWpDSTtBQURDLEdBQUQ7QUF2QmMsQ0FBeEI7QUFrRUEsSUFBTWQsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBYjtBQUdBOzs7Ozs7Ozs7OztBQVVPLElBQU1lLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCO0FBQUEsU0FDakMsbUVBQ0UsTUFBQywwRUFBRDtBQUFXLFdBQU8sRUFBRXRCLFlBQXBCO0FBQWtDLGNBQVUsRUFBRXVCLDJEQUFVQTtBQUF4RCxJQURGLEVBRUUsbUJBQ0EsTUFBQyx5RUFBRDtBQUFXLFdBQU8sRUFBRWYsZUFBcEI7QUFBcUMsY0FBVSxFQUFFZSwyREFBVUE7QUFBM0QsSUFEQSxDQUZGLENBRGlDO0FBQUEsQ0FBNUI7S0FBTUQsUyIsImZpbGUiOiIuL3NyYy9zY3JlZW5zL0hvbWUvY29tcG9uZW50cy9DaGFydFBhZ2UvQ2hhcnRQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzL2hpZ2hzdG9jaydcblxuaW1wb3J0IENoYXJ0TGluZSBmcm9tICdAc2NyZWVucy9Ib21lL2NvbXBvbmVudHMvQ2hhcnRMaW5lJztcbmltcG9ydCBDaGFydEJhciBmcm9tICdAc2NyZWVucy9Ib21lL2NvbXBvbmVudHMvQ2hhcnRCYXInO1xuXG5cblxuXG5jb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gIHRpdGxlOiB7XG4gICAgdGV4dDonVGVuZMOqbmNpYSdcbiAgfSxcbiAgbGVnZW5kOiB7XG4gICAgZW5hYmxlZDpmYWxzZVxuICB9LFxuICB0b29sdGlwOntcbiAgICBlbmFibGVkOmZhbHNlXG4gIH0sXG4gIHNlcmllczogW3tcbiAgICBkYXRhOiBbMSwyLDNdLFxuXG4gIH1dXG59XG5cblxuXG4vL2NvbG9yczogWycjMmY3ZWQ4JywgJyMwZDIzM2EnLCAnIzhiYmMyMScsICcjOTEwMDAwJywgJyMxYWFkY2UnLFxuLy8nIzQ5Mjk3MCcsICcjZjI4ZjQzJywgJyM3N2ExZTUnLCAnI2M0MjUyNScsICcjYTZjOTZhJ11cblxuY29uc3QgY2hhcnRPcHRpb25zQmFyID0ge1xuICBjaGFydDoge1xuICAgIHR5cGU6ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogNVxufSxcbiAgdGl0bGU6IG51bGwsXG4gIGxlZ2VuZDoge1xuICAgIGVuYWJsZWQ6ZmFsc2VcbiAgfSxcbiAgcGxvdE9wdGlvbnM6e1xuICAgIGNvbHVtbjp7XG4gICAgICBib3JkZXJSYWRpdXM6IDVcbiAgICB9XG4gIH0sXG4gIHRvb2x0aXA6e1xuICAgIGVuYWJsZWQ6ZmFsc2VcbiAgfSxcbiAgY2FwdGlvbjpudWxsLFxuICB4QXhpczpbe2xhYmVsczp7ZW5hYmxlZDpmYWxzZX0sIH1dLFxuICB5QXhpczpbe3RpdGxlOntlbmFibGVkOmZhbHNlfSxsYWJlbHM6e1xuICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnJSc7XG4gIH19IH1dLFxuICBzZXJpZXM6IFt7XG4gICAgZGF0YTogW1xuICAgICAge1xuICAgICAgICB5OiA5MCxcbiAgICAgICAgY29sb3I6JyMxODkwRkMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHk6IDc1LFxuICAgICAgICAgIGNvbG9yOiAnIzFGQzJDMidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgeTogNzAsXG4gICAgICAgICAgY29sb3I6ICcjNTJDNDIyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB5OiA2MCxcbiAgICAgICAgICBjb2xvcjogJyNBMEQ5MkEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHk6IDEwLFxuICAgICAgICAgIGNvbG9yOiAnI0ZBREIzMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgeTogMTUsXG4gICAgICAgICAgY29sb3I6ICcjRkFBRDI5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB5OiAzNSxcbiAgICAgICAgICBjb2xvcjogJyNGQThDMjQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHk6IDM5LFxuICAgICAgICAgIGNvbG9yOiAnI0ZBNTQxRSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgeTogMzksXG4gICAgICAgICAgY29sb3I6ICcjRjUyMjJEJ1xuICAgICAgfVxuICBdLFxuXG4gIH1dXG59XG5cbmNvbnN0IGRhdGEgPSBbMSwyLDMsNCw1XTtcblxuXG4vKipcbiAqIEBleHBvcnRzXG4gKiBAZnVuY3Rpb25cbiAqIEBjb21wb25lbnRzIEhvbWVTY3JlZW5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQG5hbWVzcGFjZSBzY3JlZW5zIHNjcmVlbnMvV29ya2Zsb3dcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlc3BvbnPDoXZlbCBwZWxhIHDDoWdpbmEgZGUgbW9udGFnZW0gZG8gd29ya2Zsb3cuXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFydFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8PlxuICAgIDxDaGFydExpbmUgb3B0aW9ucz17Y2hhcnRPcHRpb25zfSBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfSAvPlxuICAgIDxkaXY+XG4gICAgPENoYXJ0QmFyICBvcHRpb25zPXtjaGFydE9wdGlvbnNCYXJ9IGhpZ2hjaGFydHM9e0hpZ2hjaGFydHN9Lz5cbiAgICAgIFxuICAgIDwvZGl2PlxuICA8Lz5cbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/screens/Home/components/ChartPage/ChartPage.tsx\n");

/***/ })

})