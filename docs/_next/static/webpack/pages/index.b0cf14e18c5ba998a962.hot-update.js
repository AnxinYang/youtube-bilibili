webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Head.tsx":
/*!*****************************!*\
  !*** ./components/Head.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageHead; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var ax_react_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ax-react-lib */ "./node_modules/ax-react-lib/dist/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "D:\\youtube-bilibili\\components\\Head.tsx",
    _s = $RefreshSig$();



function PageHead() {
  _s();

  var _useStore = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"])('gapi'),
      _useStore2 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore, 2),
      setGAPI = _useStore2[1];

  var _useStore3 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"])('player'),
      _useStore4 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore3, 2),
      setPlayer = _useStore4[1];

  var _useStore5 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"])('playerReady'),
      _useStore6 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore5, 2),
      setPlayeReady = _useStore6[1];

  var _useStore7 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"])('playerState'),
      _useStore8 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore7, 2),
      setPlayerStage = _useStore8[1];

  var _useStore9 = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"])('apiKey'),
      _useStore10 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useStore9, 1),
      apiKey = _useStore10[0];

  Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useAsync"])( /*#__PURE__*/Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
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
  Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useAsync"])( /*#__PURE__*/Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_youtube_bilibili_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "YouBili"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://apis.google.com/js/api.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://www.youtube.com/iframe_api"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

_s(PageHead, "NelWk92EnPAwZoAWjV76Y3+t4Qw=", false, function () {
  return [ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useStore"], ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useAsync"], ax_react_lib__WEBPACK_IMPORTED_MODULE_4__["useAsync"]];
});

_c = PageHead;

var _c;

$RefreshReg$(_c, "PageHead");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkLnRzeCJdLCJuYW1lcyI6WyJQYWdlSGVhZCIsInVzZVN0b3JlIiwic2V0R0FQSSIsInNldFBsYXllciIsInNldFBsYXllUmVhZHkiLCJzZXRQbGF5ZXJTdGFnZSIsImFwaUtleSIsInVzZUFzeW5jIiwiZ2FwaSIsImFsZXJ0IiwibG9hZCIsImNsaWVudCIsImluaXQiLCJ5b3V0dWJlIiwiWVQiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJoZWlnaHQiLCJ3aWR0aCIsImV2ZW50cyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUllLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDWEMsNkRBQVEsQ0FBQyxNQUFELENBREc7QUFBQTtBQUFBLE1BQ3RCQyxPQURzQjs7QUFBQSxtQkFFVEQsNkRBQVEsQ0FBQyxRQUFELENBRkM7QUFBQTtBQUFBLE1BRXRCRSxTQUZzQjs7QUFBQSxtQkFHTEYsNkRBQVEsQ0FBQyxhQUFELENBSEg7QUFBQTtBQUFBLE1BR3RCRyxhQUhzQjs7QUFBQSxtQkFJSkgsNkRBQVEsQ0FBQyxhQUFELENBSko7QUFBQTtBQUFBLE1BSXRCSSxjQUpzQjs7QUFBQSxtQkFLZEosNkRBQVEsQ0FBUyxRQUFULENBTE07QUFBQTtBQUFBLE1BS3hCSyxNQUx3Qjs7QUFNL0JDLCtEQUFRLDhQQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDQUMsSUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFFREMsaUJBQUssQ0FBQyxxQkFBRCxDQUFMO0FBRkM7O0FBQUE7QUFLTEQsZ0JBQUksQ0FBQ0UsSUFBTCxDQUFVLFFBQVYsOFBBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUNWRixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsSUFBWixDQUFpQjtBQUNuQixrQ0FBVU4sTUFEUztBQUVuQix5Q0FBaUIsQ0FBQyw4REFBRDtBQUZFLHVCQUFqQixDQURVOztBQUFBO0FBS2hCSiw2QkFBTyxDQUFDLENBQUMsQ0FBQ00sSUFBSSxDQUFDRyxNQUFMLENBQVlFLE9BQWYsQ0FBUDs7QUFMZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEI7O0FBTEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVlMLEVBWkssQ0FBUjtBQWNBTiwrREFBUSw4UEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDQU8sRUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFFREwsaUJBQUssQ0FBQyxtQkFBRCxDQUFMO0FBRkM7O0FBQUE7QUFLQ00sa0JBTEQsR0FLVSxJQUFJRCxFQUFFLENBQUNFLE1BQVAsQ0FBYyxRQUFkLEVBQXdCO0FBQ25DQyxvQkFBTSxFQUFFLEtBRDJCO0FBRW5DQyxtQkFBSyxFQUFFLEtBRjRCO0FBR25DQyxvQkFBTSxFQUFFO0FBQ0osMkJBQVcsaUJBQUNDLENBQUQsRUFBTyxDQUVqQixDQUhHO0FBSUosaUNBQWlCLHVCQUFDQSxDQUFELEVBQU8sQ0FFdkI7QUFORztBQUgyQixhQUF4QixDQUxWO0FBaUJMakIscUJBQVMsQ0FBQ1ksTUFBRCxDQUFUOztBQWpCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBa0JMLEVBbEJLLENBQVI7QUFvQkEsc0JBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQWhEdUJmLFE7VUFDQUMscUQsRUFDRUEscUQsRUFDSUEscUQsRUFDQ0EscUQsRUFDVkEscUQsRUFDakJNLHFELEVBY0FBLHFEOzs7S0FwQm9CUCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwY2YxNGUxOGM1YmE5OThhOTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBc3luYywgdXNlU3RvcmUgfSBmcm9tICdheC1yZWFjdC1saWInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuZGVjbGFyZSB2YXIgWVQ6IGFueTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VIZWFkKCkge1xyXG4gICAgY29uc3QgWywgc2V0R0FQSV0gPSB1c2VTdG9yZSgnZ2FwaScpXHJcbiAgICBjb25zdCBbLCBzZXRQbGF5ZXJdID0gdXNlU3RvcmUoJ3BsYXllcicpXHJcbiAgICBjb25zdCBbLCBzZXRQbGF5ZVJlYWR5XSA9IHVzZVN0b3JlKCdwbGF5ZXJSZWFkeScpXHJcbiAgICBjb25zdCBbLCBzZXRQbGF5ZXJTdGFnZV0gPSB1c2VTdG9yZSgncGxheWVyU3RhdGUnKVxyXG4gICAgY29uc3QgW2FwaUtleV0gPSB1c2VTdG9yZTxzdHJpbmc+KCdhcGlLZXknKVxyXG4gICAgdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghZ2FwaSkge1xyXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGxvYWQgR0FQSScpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGdhcGkuY2xpZW50LmluaXQoe1xyXG4gICAgICAgICAgICAgICAgJ2FwaUtleSc6IGFwaUtleSxcclxuICAgICAgICAgICAgICAgICdkaXNjb3ZlcnlEb2NzJzogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy95b3V0dWJlL3YzL3Jlc3QnXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0R0FQSSghIWdhcGkuY2xpZW50LnlvdXR1YmUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghWVQpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBsb2FkIFlUJyk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKCdwbGF5ZXInLCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzM5MCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNjQwJyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAnb25SZWFkeSc6IChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRQbGF5ZXIocGxheWVyKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZCA+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Zb3VCaWxpPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIj48L3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQgPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9