webpackHotUpdate_N_E(1,{

/***/ "./src/screens/Home/components/ChartPage/ChartPage.tsx":
/*!*************************************************************!*\
  !*** ./src/screens/Home/components/ChartPage/ChartPage.tsx ***!
  \*************************************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChartPage\", function() { return ChartPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ \"./node_modules/highcharts/highstock.js\");\n/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @screens/Home/components/ChartBar */ \"./src/screens/Home/components/ChartBar/index.tsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar chartOptions = {\n  title: null,\n  tooltip: {\n    enabled: false\n  },\n  series: [{\n    data: [1, 2, 3, 10]\n  }]\n}; //colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',\n//'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']\n\nvar chartOptionsBar = {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Teste'\n  },\n  legend: {\n    enabled: false\n  },\n  caption: null,\n  xAxis: [{\n    labels: {\n      enabled: false\n    }\n  }],\n  yAxis: [{\n    title: {\n      enabled: false\n    }\n  }],\n  series: [{\n    data: [{\n      name: \"Chrome\",\n      y: 90,\n      drilldown: \"Chrome\",\n      color: '#000'\n    }, {\n      name: \"Firefox\",\n      y: 75,\n      drilldown: \"Firefox\"\n    }, {\n      name: \"Internet Explorer\",\n      y: 70,\n      drilldown: \"Internet Explorer\"\n    }, {\n      name: \"Safari\",\n      y: 60,\n      drilldown: \"Safari\"\n    }, {\n      name: \"Edge\",\n      y: 10,\n      drilldown: \"Edge\"\n    }, {\n      name: \"Opera\",\n      y: 15,\n      drilldown: \"Opera\"\n    }, {\n      name: \"Other\",\n      y: 35,\n      drilldown: null\n    }]\n  }]\n};\nvar data = [1, 2, 3, 4, 5];\n/**\n * @exports\n * @function\n * @components HomeScreen\n * @param {string} id\n * @namespace screens screens/Workflow\n *\n * @description\n * Responsável pela página de montagem do workflow.\n */\n\nvar ChartPage = function ChartPage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", null, __jsx(_screens_Home_components_ChartBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    options: chartOptionsBar,\n    highcharts: highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default.a\n  })));\n};\n_c = ChartPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0UGFnZS9DaGFydFBhZ2UudHN4PzZiZWYiXSwibmFtZXMiOlsiY2hhcnRPcHRpb25zIiwidGl0bGUiLCJ0b29sdGlwIiwiZW5hYmxlZCIsInNlcmllcyIsImRhdGEiLCJjaGFydE9wdGlvbnNCYXIiLCJjaGFydCIsInR5cGUiLCJ0ZXh0IiwibGVnZW5kIiwiY2FwdGlvbiIsInhBeGlzIiwibGFiZWxzIiwieUF4aXMiLCJuYW1lIiwieSIsImRyaWxsZG93biIsImNvbG9yIiwiQ2hhcnRQYWdlIiwiSGlnaGNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFLQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRSxJQURZO0FBRW5CQyxTQUFPLEVBQUM7QUFDTkMsV0FBTyxFQUFDO0FBREYsR0FGVztBQUtuQkMsUUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQVEsRUFBUjtBQURDLEdBQUQ7QUFMVyxDQUFyQixDLENBV0E7QUFDQTs7QUFFQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUU7QUFERCxHQURlO0FBSXRCUCxPQUFLLEVBQUU7QUFDTFEsUUFBSSxFQUFFO0FBREQsR0FKZTtBQU90QkMsUUFBTSxFQUFFO0FBQ05QLFdBQU8sRUFBQztBQURGLEdBUGM7QUFVdEJRLFNBQU8sRUFBQyxJQVZjO0FBV3RCQyxPQUFLLEVBQUMsQ0FBQztBQUFDQyxVQUFNLEVBQUM7QUFBQ1YsYUFBTyxFQUFDO0FBQVQ7QUFBUixHQUFELENBWGdCO0FBWXRCVyxPQUFLLEVBQUMsQ0FBQztBQUFDYixTQUFLLEVBQUM7QUFBQ0UsYUFBTyxFQUFDO0FBQVQ7QUFBUCxHQUFELENBWmdCO0FBYXRCQyxRQUFNLEVBQUUsQ0FBQztBQUNQQyxRQUFJLEVBQUUsQ0FDSjtBQUNJVSxVQUFJLEVBQUUsUUFEVjtBQUVJQyxPQUFDLEVBQUUsRUFGUDtBQUdJQyxlQUFTLEVBQUUsUUFIZjtBQUlJQyxXQUFLLEVBQUM7QUFKVixLQURJLEVBT0o7QUFDSUgsVUFBSSxFQUFFLFNBRFY7QUFFSUMsT0FBQyxFQUFFLEVBRlA7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FQSSxFQVlKO0FBQ0lGLFVBQUksRUFBRSxtQkFEVjtBQUVJQyxPQUFDLEVBQUUsRUFGUDtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQVpJLEVBaUJKO0FBQ0lGLFVBQUksRUFBRSxRQURWO0FBRUlDLE9BQUMsRUFBRSxFQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBakJJLEVBc0JKO0FBQ0lGLFVBQUksRUFBRSxNQURWO0FBRUlDLE9BQUMsRUFBRSxFQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBdEJJLEVBMkJKO0FBQ0lGLFVBQUksRUFBRSxPQURWO0FBRUlDLE9BQUMsRUFBRSxFQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBM0JJLEVBZ0NKO0FBQ0lGLFVBQUksRUFBRSxPQURWO0FBRUlDLE9BQUMsRUFBRSxFQUZQO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBaENJO0FBREMsR0FBRDtBQWJjLENBQXhCO0FBd0RBLElBQU1aLElBQUksR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQWI7QUFHQTs7Ozs7Ozs7Ozs7QUFVTyxJQUFNYyxTQUFtQixHQUFHLFNBQXRCQSxTQUFzQjtBQUFBLFNBQ2pDLG1FQUVFLG1CQUNBLE1BQUMseUVBQUQ7QUFBVyxXQUFPLEVBQUViLGVBQXBCO0FBQXFDLGNBQVUsRUFBRWMsMkRBQVVBO0FBQTNELElBREEsQ0FGRixDQURpQztBQUFBLENBQTVCO0tBQU1ELFMiLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9Ib21lL2NvbXBvbmVudHMvQ2hhcnRQYWdlL0NoYXJ0UGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cy9oaWdoc3RvY2snXG5cbmltcG9ydCBDaGFydExpbmUgZnJvbSAnQHNjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0TGluZSc7XG5pbXBvcnQgQ2hhcnRCYXIgZnJvbSAnQHNjcmVlbnMvSG9tZS9jb21wb25lbnRzL0NoYXJ0QmFyJztcblxuXG5cblxuY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICB0aXRsZTogbnVsbCxcbiAgdG9vbHRpcDp7XG4gICAgZW5hYmxlZDpmYWxzZVxuICB9LFxuICBzZXJpZXM6IFt7XG4gICAgZGF0YTogWzEsMiwzLCAxMF0sXG5cbiAgfV1cbn1cblxuLy9jb2xvcnM6IFsnIzJmN2VkOCcsICcjMGQyMzNhJywgJyM4YmJjMjEnLCAnIzkxMDAwMCcsICcjMWFhZGNlJyxcbi8vJyM0OTI5NzAnLCAnI2YyOGY0MycsICcjNzdhMWU1JywgJyNjNDI1MjUnLCAnI2E2Yzk2YSddXG5cbmNvbnN0IGNoYXJ0T3B0aW9uc0JhciA9IHtcbiAgY2hhcnQ6IHtcbiAgICB0eXBlOiAnY29sdW1uJ1xufSxcbiAgdGl0bGU6IHtcbiAgICB0ZXh0OiAnVGVzdGUnXG4gIH0sXG4gIGxlZ2VuZDoge1xuICAgIGVuYWJsZWQ6ZmFsc2VcbiAgfSxcbiAgY2FwdGlvbjpudWxsLFxuICB4QXhpczpbe2xhYmVsczp7ZW5hYmxlZDpmYWxzZX0sIH1dLFxuICB5QXhpczpbe3RpdGxlOntlbmFibGVkOmZhbHNlfSwgfV0sXG4gIHNlcmllczogW3tcbiAgICBkYXRhOiBbXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJDaHJvbWVcIixcbiAgICAgICAgICB5OiA5MCxcbiAgICAgICAgICBkcmlsbGRvd246IFwiQ2hyb21lXCIsXG4gICAgICAgICAgY29sb3I6JyMwMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiRmlyZWZveFwiLFxuICAgICAgICAgIHk6IDc1LFxuICAgICAgICAgIGRyaWxsZG93bjogXCJGaXJlZm94XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJJbnRlcm5ldCBFeHBsb3JlclwiLFxuICAgICAgICAgIHk6IDcwLFxuICAgICAgICAgIGRyaWxsZG93bjogXCJJbnRlcm5ldCBFeHBsb3JlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiU2FmYXJpXCIsXG4gICAgICAgICAgeTogNjAsXG4gICAgICAgICAgZHJpbGxkb3duOiBcIlNhZmFyaVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiRWRnZVwiLFxuICAgICAgICAgIHk6IDEwLFxuICAgICAgICAgIGRyaWxsZG93bjogXCJFZGdlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJPcGVyYVwiLFxuICAgICAgICAgIHk6IDE1LFxuICAgICAgICAgIGRyaWxsZG93bjogXCJPcGVyYVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiT3RoZXJcIixcbiAgICAgICAgICB5OiAzNSxcbiAgICAgICAgICBkcmlsbGRvd246IG51bGxcbiAgICAgIH1cbiAgXSxcblxuICB9XVxufVxuXG5jb25zdCBkYXRhID0gWzEsMiwzLDQsNV07XG5cblxuLyoqXG4gKiBAZXhwb3J0c1xuICogQGZ1bmN0aW9uXG4gKiBAY29tcG9uZW50cyBIb21lU2NyZWVuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBuYW1lc3BhY2Ugc2NyZWVucyBzY3JlZW5zL1dvcmtmbG93XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXNwb25zw6F2ZWwgcGVsYSBww6FnaW5hIGRlIG1vbnRhZ2VtIGRvIHdvcmtmbG93LlxuICovXG5leHBvcnQgY29uc3QgQ2hhcnRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPD5cbiAgICBcbiAgICA8ZGl2PlxuICAgIDxDaGFydEJhciAgb3B0aW9ucz17Y2hhcnRPcHRpb25zQmFyfSBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfS8+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC8+XG4pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Home/components/ChartPage/ChartPage.tsx\n");

/***/ })

})