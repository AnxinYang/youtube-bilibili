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

  useAsync( /*#__PURE__*/Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
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
  useAsync( /*#__PURE__*/Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
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

_s(Layout, "+eReDlervW7lItMHzjbgNHFTKcI=", true, function () {
  return [ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_10__["useStore"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidXNlU3RvcmUiLCJzZXRXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0R0FQSSIsInNldFBsYXllciIsInNldFBsYXllUmVhZHkiLCJzZXRQbGF5ZXJTdGFnZSIsImFwaUtleSIsInVzZUFzeW5jIiwiZ2FwaSIsImFsZXJ0IiwibG9hZCIsImNsaWVudCIsImluaXQiLCJ5b3V0dWJlIiwiWVQiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJoZWlnaHQiLCJ3aWR0aCIsImV2ZW50cyIsImUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDZEMsOERBQVEsQ0FBQyxhQUFELENBRE07QUFBQTtBQUFBLE1BQ2hDQyxjQURnQzs7QUFHekNDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxrQkFBYyxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBZDs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CSixvQkFBYyxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBZDtBQUNILEtBRkQ7O0FBR0FELFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1RGLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFFBQXJDO0FBQ0gsS0FGRDtBQUdILEdBVFEsRUFTTixFQVRNLENBQVQ7O0FBSHlDLG1CQWNyQkwsOERBQVEsQ0FBQyxNQUFELENBZGE7QUFBQTtBQUFBLE1BY2hDUSxPQWRnQzs7QUFBQSxtQkFlbkJSLDhEQUFRLENBQUMsUUFBRCxDQWZXO0FBQUE7QUFBQSxNQWVoQ1MsU0FmZ0M7O0FBQUEsbUJBZ0JmVCw4REFBUSxDQUFDLGFBQUQsQ0FoQk87QUFBQTtBQUFBLE1BZ0JoQ1UsYUFoQmdDOztBQUFBLG1CQWlCZFYsOERBQVEsQ0FBQyxhQUFELENBakJNO0FBQUE7QUFBQSxNQWlCaENXLGNBakJnQzs7QUFBQSxvQkFrQnhCWCw4REFBUSxDQUFTLFFBQVQsQ0FsQmdCO0FBQUE7QUFBQSxNQWtCbENZLE1BbEJrQzs7QUFtQnpDQyxVQUFRLDhQQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDQUMsSUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFFREMsaUJBQUssQ0FBQyxxQkFBRCxDQUFMO0FBRkM7O0FBQUE7QUFLTEQsZ0JBQUksQ0FBQ0UsSUFBTCxDQUFVLFFBQVYsOFBBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUNWRixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsSUFBWixDQUFpQjtBQUNuQixrQ0FBVU4sTUFEUztBQUVuQix5Q0FBaUIsQ0FBQyw4REFBRDtBQUZFLHVCQUFqQixDQURVOztBQUFBO0FBS2hCSiw2QkFBTyxDQUFDLENBQUMsQ0FBQ00sSUFBSSxDQUFDRyxNQUFMLENBQVlFLE9BQWYsQ0FBUDs7QUFMZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEI7O0FBTEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVlMLEVBWkssQ0FBUjtBQWNBTixVQUFRLDhQQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNBTyxFQURBO0FBQUE7QUFBQTtBQUFBOztBQUVETCxpQkFBSyxDQUFDLG1CQUFELENBQUw7QUFGQzs7QUFBQTtBQUtDTSxrQkFMRCxHQUtVLElBQUlELEVBQUUsQ0FBQ0UsTUFBUCxDQUFjLFFBQWQsRUFBd0I7QUFDbkNDLG9CQUFNLEVBQUUsS0FEMkI7QUFFbkNDLG1CQUFLLEVBQUUsS0FGNEI7QUFHbkNDLG9CQUFNLEVBQUU7QUFDSiwyQkFBVyxpQkFBQ0MsQ0FBRCxFQUFPLENBRWpCLENBSEc7QUFJSixpQ0FBaUIsdUJBQUNBLENBQUQsRUFBTyxDQUV2QjtBQU5HO0FBSDJCLGFBQXhCLENBTFY7QUFpQkxqQixxQkFBUyxDQUFDWSxNQUFELENBQVQ7O0FBakJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFrQkwsRUFsQkssQ0FBUjtBQXFCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRU0sZ0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDSSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFLLGVBQVMsRUFBRUQsZ0VBQU0sQ0FBQ0UsT0FBdkI7QUFBQSw4QkFDSSxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSzlCLFFBRkwsZUFHSSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFRSSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FsRXVCRCxNO1VBQ09FLHNELEVBYVBBLHNELEVBQ0VBLHNELEVBQ0lBLHNELEVBQ0NBLHNELEVBQ1ZBLHNEOzs7S0FsQkdGLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzU3ZTkxNDVhYTUwMWYxNDBlN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgUGFnZUhlYWQgZnJvbSBcIi4vSGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgSGVhZGxpbmUgZnJvbSBcIi4vSGVhZGxpbmVcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJheC1yZWFjdC1saWJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFssIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0b3JlKCd3aW5kb3dXaWR0aCcpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBsaXN0ZW5lcilcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbGlzdGVuZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgWywgc2V0R0FQSV0gPSB1c2VTdG9yZSgnZ2FwaScpXHJcbiAgICBjb25zdCBbLCBzZXRQbGF5ZXJdID0gdXNlU3RvcmUoJ3BsYXllcicpXHJcbiAgICBjb25zdCBbLCBzZXRQbGF5ZVJlYWR5XSA9IHVzZVN0b3JlKCdwbGF5ZXJSZWFkeScpXHJcbiAgICBjb25zdCBbLCBzZXRQbGF5ZXJTdGFnZV0gPSB1c2VTdG9yZSgncGxheWVyU3RhdGUnKVxyXG4gICAgY29uc3QgW2FwaUtleV0gPSB1c2VTdG9yZTxzdHJpbmc+KCdhcGlLZXknKVxyXG4gICAgdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghZ2FwaSkge1xyXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGxvYWQgR0FQSScpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGdhcGkuY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICAgICAgJ2FwaUtleSc6IGFwaUtleSxcclxuICAgICAgICAgICAgICAgICdkaXNjb3ZlcnlEb2NzJzogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy95b3V0dWJlL3YzL3Jlc3QnXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0R0FQSSghIWdhcGkuY2xpZW50LnlvdXR1YmUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghWVQpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBsb2FkIFlUJyk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKCdwbGF5ZXInLCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzM5MCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjQwJyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAnb25SZWFkeSc6IChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRQbGF5ZXIocGxheWVyKVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8UGFnZUhlYWQgLz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5IC8+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8UGxheWVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9