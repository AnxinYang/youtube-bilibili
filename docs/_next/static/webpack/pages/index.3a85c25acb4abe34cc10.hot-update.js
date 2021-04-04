webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Category */ "./components/Category.tsx");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Head */ "./components/Head.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Player */ "./components/Player.tsx");
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Layout.module.css */ "./styles/Layout.module.css");
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ax_react_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ax-react-lib */ "./node_modules/ax-react-lib/dist/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");





var _jsxFileName = "D:\\youtube-bilibili\\components\\Layout.tsx",
    _s = $RefreshSig$();









function Layout(_ref) {
  _s();

  var children = _ref.children;

  var _useStore = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"])('windowWidth'),
      _useStore2 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore, 2),
      setWindowWidth = _useStore2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    setWindowWidth(window.innerWidth);

    var listener = function listener() {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', listener);
    return function () {
      window.removeEventListener('resize', listener);
    };
  }, []);

  var _useStore3 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"])('gapi'),
      _useStore4 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore3, 2),
      setGAPI = _useStore4[1];

  var _useStore5 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"])('player'),
      _useStore6 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore5, 2),
      setPlayer = _useStore6[1];

  var _useStore7 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"])('playerReady'),
      _useStore8 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore7, 2),
      setPlayeReady = _useStore8[1];

  var _useStore9 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"])('playerState'),
      _useStore10 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore9, 2),
      setPlayerStage = _useStore10[1];

  var _useStore11 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"])('apiKey'),
      _useStore12 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore11, 1),
      apiKey = _useStore12[0];

  Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useAsync"])( /*#__PURE__*/Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    return D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (gapi) {
              _context2.next = 3;
              break;
            }

            alert('Failed to load GAPI');
            return _context2.abrupt("return");

          case 3:
            gapi.load('client', /*#__PURE__*/Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
              return D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return gapi.client.init({
                        'apiKey': apiKey,
                        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
                      });

                    case 2:
                      setGAPI(!!gapi.client.youtube);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useAsync"])( /*#__PURE__*/Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
    var player;
    return D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (YT) {
              _context3.next = 3;
              break;
            }

            alert('Failed to load YT');
            return _context3.abrupt("return");

          case 3:
            player = new YT.Player('player', {
              height: '390',
              width: '640',
              events: {
                'onReady': function onReady(e) {},
                'onStateChange': function onStateChange(e) {}
              }
            });
            setPlayer(player);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Category__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Player__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, this);
}

_s(Layout, "+eReDlervW7lItMHzjbgNHFTKcI=", false, function () {
  return [ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useAsync"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useAsync"]];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidXNlU3RvcmUiLCJzZXRXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0R0FQSSIsInNldFBsYXllciIsInNldFBsYXllUmVhZHkiLCJzZXRQbGF5ZXJTdGFnZSIsImFwaUtleSIsInVzZUFzeW5jIiwiZ2FwaSIsImFsZXJ0IiwibG9hZCIsImNsaWVudCIsImluaXQiLCJ5b3V0dWJlIiwiWVQiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJoZWlnaHQiLCJ3aWR0aCIsImV2ZW50cyIsImUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDZEMsOERBQVEsQ0FBQyxhQUFELENBRE07QUFBQTtBQUFBLE1BQ2hDQyxjQURnQzs7QUFHekNDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxrQkFBYyxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBZDs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CSixvQkFBYyxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBZDtBQUNILEtBRkQ7O0FBR0FELFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1RGLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFFBQXJDO0FBQ0gsS0FGRDtBQUdILEdBVFEsRUFTTixFQVRNLENBQVQ7O0FBSHlDLG1CQWNyQkwsOERBQVEsQ0FBQyxNQUFELENBZGE7QUFBQTtBQUFBLE1BY2hDUSxPQWRnQzs7QUFBQSxtQkFlbkJSLDhEQUFRLENBQUMsUUFBRCxDQWZXO0FBQUE7QUFBQSxNQWVoQ1MsU0FmZ0M7O0FBQUEsbUJBZ0JmVCw4REFBUSxDQUFDLGFBQUQsQ0FoQk87QUFBQTtBQUFBLE1BZ0JoQ1UsYUFoQmdDOztBQUFBLG1CQWlCZFYsOERBQVEsQ0FBQyxhQUFELENBakJNO0FBQUE7QUFBQSxNQWlCaENXLGNBakJnQzs7QUFBQSxvQkFrQnhCWCw4REFBUSxDQUFTLFFBQVQsQ0FsQmdCO0FBQUE7QUFBQSxNQWtCbENZLE1BbEJrQzs7QUFtQnpDQyxnRUFBUSw4UEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ0FDLElBREE7QUFBQTtBQUFBO0FBQUE7O0FBRURDLGlCQUFLLENBQUMscUJBQUQsQ0FBTDtBQUZDOztBQUFBO0FBS0xELGdCQUFJLENBQUNFLElBQUwsQ0FBVSxRQUFWLDhQQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDVkYsSUFBSSxDQUFDRyxNQUFMLENBQVlDLElBQVosQ0FBaUI7QUFDbkIsa0NBQVVOLE1BRFM7QUFFbkIseUNBQWlCLENBQUMsOERBQUQ7QUFGRSx1QkFBakIsQ0FEVTs7QUFBQTtBQUtoQkosNkJBQU8sQ0FBQyxDQUFDLENBQUNNLElBQUksQ0FBQ0csTUFBTCxDQUFZRSxPQUFmLENBQVA7O0FBTGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXBCOztBQUxLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFZTCxFQVpLLENBQVI7QUFjQU4sZ0VBQVEsOFBBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ0FPLEVBREE7QUFBQTtBQUFBO0FBQUE7O0FBRURMLGlCQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUZDOztBQUFBO0FBS0NNLGtCQUxELEdBS1UsSUFBSUQsRUFBRSxDQUFDRSxNQUFQLENBQWMsUUFBZCxFQUF3QjtBQUNuQ0Msb0JBQU0sRUFBRSxLQUQyQjtBQUVuQ0MsbUJBQUssRUFBRSxLQUY0QjtBQUduQ0Msb0JBQU0sRUFBRTtBQUNKLDJCQUFXLGlCQUFDQyxDQUFELEVBQU8sQ0FFakIsQ0FIRztBQUlKLGlDQUFpQix1QkFBQ0EsQ0FBRCxFQUFPLENBRXZCO0FBTkc7QUFIMkIsYUFBeEIsQ0FMVjtBQWlCTGpCLHFCQUFTLENBQUNZLE1BQUQsQ0FBVDs7QUFqQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQWtCTCxFQWxCSyxDQUFSO0FBcUJBLHNCQUNJO0FBQUssYUFBUyxFQUFFTSxnRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNJLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUssZUFBUyxFQUFFRCxnRUFBTSxDQUFDRSxPQUF2QjtBQUFBLDhCQUNJLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVLOUIsUUFGTCxlQUdJLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQVFJLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztHQWxFdUJELE07VUFDT0Usc0QsRUFhUEEsc0QsRUFDRUEsc0QsRUFDSUEsc0QsRUFDQ0Esc0QsRUFDVkEsc0QsRUFDakJhLHNELEVBY0FBLHNEOzs7S0FqQ29CZixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhODVjMjVhY2I0YWJlMzRjYzEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFBhZ2VIZWFkIGZyb20gXCIuL0hlYWRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEhlYWRsaW5lIGZyb20gXCIuL0hlYWRsaW5lXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQXN5bmMsIHVzZVN0b3JlIH0gZnJvbSBcImF4LXJlYWN0LWxpYlwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgWywgc2V0V2luZG93V2lkdGhdID0gdXNlU3RvcmUoJ3dpbmRvd1dpZHRoJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGxpc3RlbmVyKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcilcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBbLCBzZXRHQVBJXSA9IHVzZVN0b3JlKCdnYXBpJylcclxuICAgIGNvbnN0IFssIHNldFBsYXllcl0gPSB1c2VTdG9yZSgncGxheWVyJylcclxuICAgIGNvbnN0IFssIHNldFBsYXllUmVhZHldID0gdXNlU3RvcmUoJ3BsYXllclJlYWR5JylcclxuICAgIGNvbnN0IFssIHNldFBsYXllclN0YWdlXSA9IHVzZVN0b3JlKCdwbGF5ZXJTdGF0ZScpXHJcbiAgICBjb25zdCBbYXBpS2V5XSA9IHVzZVN0b3JlPHN0cmluZz4oJ2FwaUtleScpXHJcbiAgICB1c2VBc3luYyhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFnYXBpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gbG9hZCBHQVBJJyk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBnYXBpLmxvYWQoJ2NsaWVudCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAnYXBpS2V5JzogYXBpS2V5LFxyXG4gICAgICAgICAgICAgICAgJ2Rpc2NvdmVyeURvY3MnOiBbJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL3lvdXR1YmUvdjMvcmVzdCddXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRHQVBJKCEhZ2FwaS5jbGllbnQueW91dHViZSlcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VBc3luYyhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFZVCkge1xyXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGxvYWQgWVQnKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ3BsYXllcicsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMzkwJyxcclxuICAgICAgICAgICAgd2lkdGg6ICc2NDAnLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICdvblJlYWR5JzogKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFBsYXllcihwbGF5ZXIpXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZCAvPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDxQbGF5ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=