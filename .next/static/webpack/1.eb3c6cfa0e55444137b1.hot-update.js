webpackHotUpdate_N_E(1,{

/***/ "./src/screens/Home/components/ChartPage/ChartPage.tsx":
/*!*************************************************************!*\
  !*** ./src/screens/Home/components/ChartPage/ChartPage.tsx ***!
  \*************************************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChartPage\", function() { return ChartPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ \"./node_modules/highcharts/highstock.js\");\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @screens/Home/components/ChartBar */ \"./src/screens/Home/components/ChartBar/index.tsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar chartOptions = {\n  title: null,\n  tooltip: {\n    enabled: false\n  },\n  series: [{\n    data: [1, 2, 3, 10]\n  }]\n}; //colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',\n//'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']\n\nvar chartOptionsBar = {\n  chart: {\n    type: 'column',\n    borderRadius: '5'\n  },\n  title: {\n    text: 'Teste'\n  },\n  legend: {\n    enabled: false\n  },\n  caption: null,\n  xAxis: [{\n    labels: {\n      enabled: false\n    }\n  }],\n  yAxis: [{\n    title: {\n      enabled: false\n    },\n    labels: {\n      formatter: function formatter() {\n        return this.value + '%';\n      }\n    }\n  }],\n  series: [{\n    data: [{\n      name: \"Chrome\",\n      y: 90,\n      drilldown: \"Chrome\",\n      color: '#000'\n    }, {\n      name: \"Firefox\",\n      y: 75,\n      drilldown: \"Firefox\"\n    }, {\n      name: \"Internet Explorer\",\n      y: 70,\n      drilldown: \"Internet Explorer\"\n    }, {\n      name: \"Safari\",\n      y: 60,\n      drilldown: \"Safari\"\n    }, {\n      name: \"Edge\",\n      y: 10,\n      drilldown: \"Edge\"\n    }, {\n      name: \"Opera\",\n      y: 15,\n      drilldown: \"Opera\"\n    }, {\n      name: \"Other\",\n      y: 35,\n      drilldown: null\n    }]\n  }]\n};\nvar data = [1, 2, 3, 4, 5];\n/**\n * @exports\n * @function\n * @components HomeScreen\n * @param {string} id\n * @namespace screens screens/Workflow\n *\n * @description\n * Responsável pela página de montagem do workflow.\n */\n\nvar ChartPage = function ChartPage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", null, __jsx(_screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: chartOptionsBar,\n    highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n  })));\n};\n_c = ChartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0UGFnZS9DaGFydFBhZ2UudHN4PzZiZWYiXSwibmFtZXMiOlsiY2hhcnRPcHRpb25zIiwidGl0bGUiLCJ0b29sdGlwIiwiZW5hYmxlZCIsInNlcmllcyIsImRhdGEiLCJjaGFydE9wdGlvbnNCYXIiLCJjaGFydCIsInR5cGUiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0IiwibGVnZW5kIiwiY2FwdGlvbiIsInhBeGlzIiwibGFiZWxzIiwieUF4aXMiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsIm5hbWUiLCJ5IiwiZHJpbGxkb3duIiwiY29sb3IiLCJDaGFydFBhZ2UiLCJIaWdoY2hhcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUtBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLElBRFk7QUFFbkJDLFNBQU8sRUFBQztBQUNOQyxXQUFPLEVBQUM7QUFERixHQUZXO0FBS25CQyxRQUFNLEVBQUUsQ0FBQztBQUNQQyxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBUSxFQUFSO0FBREMsR0FBRDtBQUxXLENBQXJCLEMsQ0FXQTtBQUNBOztBQUVBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxDLGdCQUFZLEVBQUU7QUFGVCxHQURlO0FBS3RCUixPQUFLLEVBQUU7QUFDTFMsUUFBSSxFQUFFO0FBREQsR0FMZTtBQVF0QkMsUUFBTSxFQUFFO0FBQ05SLFdBQU8sRUFBQztBQURGLEdBUmM7QUFXdEJTLFNBQU8sRUFBQyxJQVhjO0FBWXRCQyxPQUFLLEVBQUMsQ0FBQztBQUFDQyxVQUFNLEVBQUM7QUFBQ1gsYUFBTyxFQUFDO0FBQVQ7QUFBUixHQUFELENBWmdCO0FBYXRCWSxPQUFLLEVBQUMsQ0FBQztBQUFDZCxTQUFLLEVBQUM7QUFBQ0UsYUFBTyxFQUFDO0FBQVQsS0FBUDtBQUF1QlcsVUFBTSxFQUFDO0FBQ25DRSxlQUFTLEVBQUUscUJBQVc7QUFDdEIsZUFBTyxLQUFLQyxLQUFMLEdBQWEsR0FBcEI7QUFDRDtBQUhvQztBQUE5QixHQUFELENBYmdCO0FBaUJ0QmIsUUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBSSxFQUFFLENBQ0o7QUFDSWEsVUFBSSxFQUFFLFFBRFY7QUFFSUMsT0FBQyxFQUFFLEVBRlA7QUFHSUMsZUFBUyxFQUFFLFFBSGY7QUFJSUMsV0FBSyxFQUFDO0FBSlYsS0FESSxFQU9KO0FBQ0lILFVBQUksRUFBRSxTQURWO0FBRUlDLE9BQUMsRUFBRSxFQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBUEksRUFZSjtBQUNJRixVQUFJLEVBQUUsbUJBRFY7QUFFSUMsT0FBQyxFQUFFLEVBRlA7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FaSSxFQWlCSjtBQUNJRixVQUFJLEVBQUUsUUFEVjtBQUVJQyxPQUFDLEVBQUUsRUFGUDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQWpCSSxFQXNCSjtBQUNJRixVQUFJLEVBQUUsTUFEVjtBQUVJQyxPQUFDLEVBQUUsRUFGUDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQXRCSSxFQTJCSjtBQUNJRixVQUFJLEVBQUUsT0FEVjtBQUVJQyxPQUFDLEVBQUUsRUFGUDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQTNCSSxFQWdDSjtBQUNJRixVQUFJLEVBQUUsT0FEVjtBQUVJQyxPQUFDLEVBQUUsRUFGUDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQWhDSTtBQURDLEdBQUQ7QUFqQmMsQ0FBeEI7QUE0REEsSUFBTWYsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBYjtBQUdBOzs7Ozs7Ozs7OztBQVVPLElBQU1pQixTQUFtQixHQUFHLFNBQXRCQSxTQUFzQjtBQUFBLFNBQ2pDLG1FQUVFLG1CQUNBLE1BQUMseUVBQUQ7QUFBVyxXQUFPLEVBQUVoQixlQUFwQjtBQUFxQyxjQUFVLEVBQUVpQiwyREFBVUE7QUFBM0QsSUFEQSxDQUZGLENBRGlDO0FBQUEsQ0FBNUI7S0FBTUQsUyIsImZpbGUiOiIuL3NyYy9zY3JlZW5zL0hvbWUvY29tcG9uZW50cy9DaGFydFBhZ2UvQ2hhcnRQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzL2hpZ2hzdG9jaydcblxuaW1wb3J0IENoYXJ0TGluZSBmcm9tICdAc2NyZWVucy9Ib21lL2NvbXBvbmVudHMvQ2hhcnRMaW5lJztcbmltcG9ydCBDaGFydEJhciBmcm9tICdAc2NyZWVucy9Ib21lL2NvbXBvbmVudHMvQ2hhcnRCYXInO1xuXG5cblxuXG5jb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICB0b29sdGlwOntcbiAgICBlbmFibGVkOmZhbHNlXG4gIH0sXG4gIHNlcmllczogW3tcbiAgICBkYXRhOiBbMSwyLDMsIDEwXSxcblxuICB9XVxufVxuXG4vL2NvbG9yczogWycjMmY3ZWQ4JywgJyMwZDIzM2EnLCAnIzhiYmMyMScsICcjOTEwMDAwJywgJyMxYWFkY2UnLFxuLy8nIzQ5Mjk3MCcsICcjZjI4ZjQzJywgJyM3N2ExZTUnLCAnI2M0MjUyNScsICcjYTZjOTZhJ11cblxuY29uc3QgY2hhcnRPcHRpb25zQmFyID0ge1xuICBjaGFydDoge1xuICAgIHR5cGU6ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogJzUnXG59LFxuICB0aXRsZToge1xuICAgIHRleHQ6ICdUZXN0ZSdcbiAgfSxcbiAgbGVnZW5kOiB7XG4gICAgZW5hYmxlZDpmYWxzZVxuICB9LFxuICBjYXB0aW9uOm51bGwsXG4gIHhBeGlzOlt7bGFiZWxzOntlbmFibGVkOmZhbHNlfSwgfV0sXG4gIHlBeGlzOlt7dGl0bGU6e2VuYWJsZWQ6ZmFsc2V9LGxhYmVsczp7XG4gICAgZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSArICclJztcbiAgfX0gfV0sXG4gIHNlcmllczogW3tcbiAgICBkYXRhOiBbXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJDaHJvbWVcIixcbiAgICAgICAgICB5OiA5MCxcbiAgICAgICAgICBkcmlsbGRvd246IFwiQ2hyb21lXCIsXG4gICAgICAgICAgY29sb3I6JyMwMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiRmlyZWZveFwiLFxuICAgICAgICAgIHk6IDc1LFxuICAgICAgICAgIGRyaWxsZG93bjogXCJGaXJlZm94XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJJbnRlcm5ldCBFeHBsb3JlclwiLFxuICAgICAgICAgIHk6IDcwLFxuICAgICAgICAgIGRyaWxsZG93bjogXCJJbnRlcm5ldCBFeHBsb3JlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiU2FmYXJpXCIsXG4gICAgICAgICAgeTogNjAsXG4gICAgICAgICAgZHJpbGxkb3duOiBcIlNhZmFyaVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiRWRnZVwiLFxuICAgICAgICAgIHk6IDEwLFxuICAgICAgICAgIGRyaWxsZG93bjogXCJFZGdlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJPcGVyYVwiLFxuICAgICAgICAgIHk6IDE1LFxuICAgICAgICAgIGRyaWxsZG93bjogXCJPcGVyYVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiT3RoZXJcIixcbiAgICAgICAgICB5OiAzNSxcbiAgICAgICAgICBkcmlsbGRvd246IG51bGxcbiAgICAgIH1cbiAgXSxcblxuICB9XVxufVxuXG5jb25zdCBkYXRhID0gWzEsMiwzLDQsNV07XG5cblxuLyoqXG4gKiBAZXhwb3J0c1xuICogQGZ1bmN0aW9uXG4gKiBAY29tcG9uZW50cyBIb21lU2NyZWVuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBuYW1lc3BhY2Ugc2NyZWVucyBzY3JlZW5zL1dvcmtmbG93XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXNwb25zw6F2ZWwgcGVsYSBww6FnaW5hIGRlIG1vbnRhZ2VtIGRvIHdvcmtmbG93LlxuICovXG5leHBvcnQgY29uc3QgQ2hhcnRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPD5cbiAgICBcbiAgICA8ZGl2PlxuICAgIDxDaGFydEJhciAgb3B0aW9ucz17Y2hhcnRPcHRpb25zQmFyfSBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfS8+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC8+XG4pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Home/components/ChartPage/ChartPage.tsx\n");

/***/ })

})