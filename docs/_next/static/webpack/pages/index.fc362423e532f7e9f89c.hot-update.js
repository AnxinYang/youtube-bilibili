webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Player.tsx":
/*!*******************************!*\
  !*** ./components/Player.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var ax_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ax-react-lib */ "./node_modules/ax-react-lib/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\youtube-bilibili\\components\\Player.tsx",
    _s = $RefreshSig$();



function Player() {
  _s();

  var _useStore = Object(ax_react_lib__WEBPACK_IMPORTED_MODULE_2__["useStore"])('playID', ''),
      _useStore2 = Object(D_youtube_bilibili_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useStore, 2),
      playID = _useStore2[0],
      setID = _useStore2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      player = _useState[0],
      setPlayer = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    try {
      if (player) {
        playID && player.loadVideoById(playID);
      } else {
        var newPlayer = new YT.Player('player', {
          height: '390',
          width: '640',
          events: {
            'onReady': function onReady(e) {},
            'onStateChange': function onStateChange(e) {}
          }
        });
        playID && newPlayer.loadVideoById(playID);
        setPlayer(newPlayer);
      }

      !playID && player.stopVideo();
    } catch (e) {}
  }, [playID, player]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(0,0,0,0.3)',
      position: 'fixed',
      top: 0,
      left: 0,
      display: !!playID ? '' : 'none'
    },
    onClick: function onClick() {
      setID('');
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "player",
      style: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(Player, "TwaqbL+YVT+HPdi41XUSgKppoAQ=", false, function () {
  return [ax_react_lib__WEBPACK_IMPORTED_MODULE_2__["useStore"]];
});

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIudHN4Il0sIm5hbWVzIjpbIlBsYXllciIsInVzZVN0b3JlIiwicGxheUlEIiwic2V0SUQiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInBsYXllciIsInNldFBsYXllciIsInVzZUVmZmVjdCIsImxvYWRWaWRlb0J5SWQiLCJuZXdQbGF5ZXIiLCJZVCIsImhlaWdodCIsIndpZHRoIiwiZXZlbnRzIiwiZSIsInN0b3BWaWRlbyIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImRpc3BsYXkiLCJib3R0b20iLCJyaWdodCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDTEMsNkRBQVEsQ0FBQyxRQUFELEVBQVcsRUFBWCxDQURIO0FBQUE7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxLQURjOztBQUFBLGtCQUVEQyxzREFBUSxDQUFNQyxTQUFOLENBRlA7QUFBQSxNQUV0QkMsTUFGc0I7QUFBQSxNQUVkQyxTQUZjOztBQUc3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSTtBQUNBLFVBQUlGLE1BQUosRUFBWTtBQUNSSixjQUFNLElBQUlJLE1BQU0sQ0FBQ0csYUFBUCxDQUFxQlAsTUFBckIsQ0FBVjtBQUNILE9BRkQsTUFFTztBQUNILFlBQU1RLFNBQVMsR0FBRyxJQUFJQyxFQUFFLENBQUNYLE1BQVAsQ0FBYyxRQUFkLEVBQXdCO0FBQ3RDWSxnQkFBTSxFQUFFLEtBRDhCO0FBRXRDQyxlQUFLLEVBQUUsS0FGK0I7QUFHdENDLGdCQUFNLEVBQUU7QUFDSix1QkFBVyxpQkFBQ0MsQ0FBRCxFQUFPLENBRWpCLENBSEc7QUFJSiw2QkFBaUIsdUJBQUNBLENBQUQsRUFBTyxDQUV2QjtBQU5HO0FBSDhCLFNBQXhCLENBQWxCO0FBWUFiLGNBQU0sSUFBSVEsU0FBUyxDQUFDRCxhQUFWLENBQXdCUCxNQUF4QixDQUFWO0FBQ0FLLGlCQUFTLENBQUNHLFNBQUQsQ0FBVDtBQUNIOztBQUNELE9BQUNSLE1BQUQsSUFBV0ksTUFBTSxDQUFDVSxTQUFQLEVBQVg7QUFDSCxLQXBCRCxDQW9CRSxPQUFPRCxDQUFQLEVBQVUsQ0FFWDtBQUNKLEdBeEJRLEVBd0JOLENBQUNiLE1BQUQsRUFBU0ksTUFBVCxDQXhCTSxDQUFUO0FBeUJBLHNCQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hNLFlBQU0sRUFBRSxPQURMO0FBRUhDLFdBQUssRUFBRSxPQUZKO0FBR0hJLHFCQUFlLEVBQUUsaUJBSGQ7QUFJSEMsY0FBUSxFQUFFLE9BSlA7QUFLSEMsU0FBRyxFQUFFLENBTEY7QUFNSEMsVUFBSSxFQUFFLENBTkg7QUFPSEMsYUFBTyxFQUFFLENBQUMsQ0FBQ25CLE1BQUYsR0FBVyxFQUFYLEdBQWdCO0FBUHRCLEtBRFg7QUFVSSxXQUFPLEVBQUUsbUJBQU07QUFDWEMsV0FBSyxDQUFDLEVBQUQsQ0FBTDtBQUNILEtBWkw7QUFBQSwyQkFjSTtBQUNJLFFBQUUsRUFBQyxRQURQO0FBRUksV0FBSyxFQUFFO0FBQ0hlLGdCQUFRLEVBQUUsT0FEUDtBQUVIQyxXQUFHLEVBQUUsQ0FGRjtBQUdIRyxjQUFNLEVBQUUsQ0FITDtBQUlIRixZQUFJLEVBQUUsQ0FKSDtBQUtIRyxhQUFLLEVBQUUsQ0FMSjtBQU1IQyxjQUFNLEVBQUU7QUFOTDtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Qkg7O0dBekR1QnhCLE07VUFDSUMscUQ7OztLQURKRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjMzYyNDIzZTUzMmY3ZTlmODljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJheC1yZWFjdC1saWJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmRlY2xhcmUgdmFyIFlUOiBhbnk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIoKSB7XHJcbiAgICBjb25zdCBbcGxheUlELCBzZXRJRF0gPSB1c2VTdG9yZSgncGxheUlEJywgJycpO1xyXG4gICAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgcGxheUlEICYmIHBsYXllci5sb2FkVmlkZW9CeUlkKHBsYXlJRClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ3BsYXllcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczOTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjQwJyxcclxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ29uUmVhZHknOiAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGxheUlEICYmIG5ld1BsYXllci5sb2FkVmlkZW9CeUlkKHBsYXlJRCk7XHJcbiAgICAgICAgICAgICAgICBzZXRQbGF5ZXIobmV3UGxheWVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICFwbGF5SUQgJiYgcGxheWVyLnN0b3BWaWRlbygpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbcGxheUlELCBwbGF5ZXJdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC4zKScsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAhIXBsYXlJRCA/ICcnIDogJ25vbmUnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElEKCcnKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgaWQ9J3BsYXllcidcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==