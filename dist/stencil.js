(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("assign-deep"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "assign-deep"], factory);
	else if(typeof exports === 'object')
		exports["stencil"] = factory(require("react"), require("assign-deep"));
	else
		root["stencil"] = factory(root["react"], root["assign-deep"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(16);

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_merge).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Documenter = __webpack_require__(3);

var _Documenter2 = _interopRequireDefault(_Documenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//    stencil : object -> component -> component
var stencil = function stencil() {
  var specs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (WrappedComponent) {
    return function (_Component) {
      _inherits(Stencil, _Component);

      function Stencil(props) {
        _classCallCheck(this, Stencil);

        var _this = _possibleConstructorReturn(this, (Stencil.__proto__ || Object.getPrototypeOf(Stencil)).call(this, props));

        _this.state = {};
        _this.extendedExamples = Object.assign(specs.examples || {}, {
          default: _extends({}, _this.props)
        });
        _this.setExample = _this.setExample.bind(_this);
        _this.setProp = _this.setProp.bind(_this);
        return _this;
      }

      _createClass(Stencil, [{
        key: 'setExample',
        value: function setExample(example) {
          this.setState(_extends({}, this.extendedExamples[example]));
        }
      }, {
        key: 'setProp',
        value: function setProp(prop, value) {
          this.setState(_defineProperty({}, prop, value));
        }
      }, {
        key: 'render',
        value: function render() {
          var extendedProps = Object.assign({}, this.props, this.state);
          return _react2.default.createElement(
            _Documenter2.default,
            _extends({
              setExample: this.setExample,
              setProp: this.setProp,
              componentProps: extendedProps
            }, specs),
            _react2.default.createElement(WrappedComponent, extendedProps)
          );
        }
      }]);

      return Stencil;
    }(_react.Component);
  };
};

exports.default = stencil;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignDeep = __webpack_require__(17);

var _assignDeep2 = _interopRequireDefault(_assignDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//    merge : -> object : object -> object
var merge = function merge() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      props = _ref.props,
      swatches = _ref.swatches;

  var component = arguments[1];

  return (0, _assignDeep2.default)({}, { props: props, swatches: swatches }, component);
};

exports.default = merge;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:0)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m { renderToStaticMarkup } from \u001b[32m'react-dom/server'\u001b[39m\n \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mPropTypes\u001b[39m from \u001b[32m'prop-types'\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m jsxToString from \u001b[32m'jsx-to-string'\u001b[39m\n \u001b[90m 6 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mCode\u001b[39m from \u001b[32m'components/Code'\u001b[39m\n \u001b[90m 7 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mNotes\u001b[39m from \u001b[32m'components/Notes'\u001b[39m\u001b[0m\n");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzM2FmMDRmOWNhMjE4Mzc3NDBhZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9zdGVuY2lsLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL21lcmdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2lnbi1kZWVwXCIiXSwibmFtZXMiOlsiZGVmYXVsdCIsInN0ZW5jaWwiLCJzcGVjcyIsInByb3BzIiwic3RhdGUiLCJleHRlbmRlZEV4YW1wbGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZXhhbXBsZXMiLCJzZXRFeGFtcGxlIiwiYmluZCIsInNldFByb3AiLCJleGFtcGxlIiwic2V0U3RhdGUiLCJwcm9wIiwidmFsdWUiLCJleHRlbmRlZFByb3BzIiwibWVyZ2UiLCJzd2F0Y2hlcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0MwQ1NBLE87Ozs7QUExQ1Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFnQjtBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTzs7QUFDOUIsU0FBTyw0QkFBb0I7QUFDekI7QUFBQTs7QUFDRSx1QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLHNIQUNaQSxLQURZOztBQUdsQixjQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLGNBQUtDLGdCQUFMLEdBQXdCQyxPQUFPQyxNQUFQLENBQWNMLE1BQU1NLFFBQU4sSUFBa0IsRUFBaEMsRUFBb0M7QUFDMURSLGdDQUFhLE1BQUtHLEtBQWxCO0FBRDBELFNBQXBDLENBQXhCO0FBR0EsY0FBS00sVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQVJrQjtBQVNuQjs7QUFWSDtBQUFBO0FBQUEsbUNBWWNFLE9BWmQsRUFZdUI7QUFDbkIsZUFBS0MsUUFBTCxjQUFrQixLQUFLUixnQkFBTCxDQUFzQk8sT0FBdEIsQ0FBbEI7QUFDRDtBQWRIO0FBQUE7QUFBQSxnQ0FnQldFLElBaEJYLEVBZ0JpQkMsS0FoQmpCLEVBZ0J3QjtBQUNwQixlQUFLRixRQUFMLHFCQUFnQkMsSUFBaEIsRUFBdUJDLEtBQXZCO0FBQ0Q7QUFsQkg7QUFBQTtBQUFBLGlDQW9CWTtBQUNSLGNBQU1DLGdCQUFnQlYsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS0osS0FBdkIsRUFBOEIsS0FBS0MsS0FBbkMsQ0FBdEI7QUFDQSxpQkFDRTtBQUFBO0FBQUE7QUFDRSwwQkFBWSxLQUFLSyxVQURuQjtBQUVFLHVCQUFTLEtBQUtFLE9BRmhCO0FBR0UsOEJBQWdCSztBQUhsQixlQUlNZCxLQUpOO0FBS0UsMENBQUMsZ0JBQUQsRUFBc0JjLGFBQXRCO0FBTEYsV0FERjtBQVNEO0FBL0JIOztBQUFBO0FBQUE7QUFpQ0QsR0FsQ0Q7QUFtQ0QsQ0FwQ0Q7O2tCQXVDZWYsTzs7Ozs7Ozs7Ozs7Ozs7QUMzQ2Y7Ozs7OztBQUVBO0FBQ0EsSUFBTWdCLFFBQVEsU0FBUkEsS0FBUSxHQUF1QztBQUFBLGlGQUFsQixFQUFrQjtBQUFBLE1BQXJDZCxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QmUsUUFBOEIsUUFBOUJBLFFBQThCOztBQUFBLE1BQWRDLFNBQWM7O0FBQ25ELFNBQU8sMEJBQU8sRUFBUCxFQUFXLEVBQUNoQixZQUFELEVBQVFlLGtCQUFSLEVBQVgsRUFBOEJDLFNBQTlCLENBQVA7QUFDRCxDQUZEOztrQkFJZUYsSzs7Ozs7OztBQ1BmLGdEIiwiZmlsZSI6InN0ZW5jaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImFzc2lnbi1kZWVwXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiYXNzaWduLWRlZXBcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3RlbmNpbFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYXNzaWduLWRlZXBcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN0ZW5jaWxcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcImFzc2lnbi1kZWVwXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzNhZjA0ZjljYTIxODM3NzQwYWYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRG9jdW1lbnRlciBmcm9tICdzcmMvY29tcG9uZW50cy9Eb2N1bWVudGVyJ1xuXG4vLyAgICBzdGVuY2lsIDogb2JqZWN0IC0+IGNvbXBvbmVudCAtPiBjb21wb25lbnRcbmNvbnN0IHN0ZW5jaWwgPSAoc3BlY3MgPSB7fSkgPT4ge1xuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gICAgcmV0dXJuIGNsYXNzIFN0ZW5jaWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLmV4dGVuZGVkRXhhbXBsZXMgPSBPYmplY3QuYXNzaWduKHNwZWNzLmV4YW1wbGVzIHx8IHt9LCB7XG4gICAgICAgICAgZGVmYXVsdDogey4uLnRoaXMucHJvcHN9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0RXhhbXBsZSA9IHRoaXMuc2V0RXhhbXBsZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2V0UHJvcCA9IHRoaXMuc2V0UHJvcC5iaW5kKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHNldEV4YW1wbGUgKGV4YW1wbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5leHRlbmRlZEV4YW1wbGVzW2V4YW1wbGVdfSlcbiAgICAgIH1cblxuICAgICAgc2V0UHJvcCAocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W3Byb3BdOiB2YWx1ZX0pXG4gICAgICB9XG5cbiAgICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuZGVkUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxEb2N1bWVudGVyXG4gICAgICAgICAgICBzZXRFeGFtcGxlPXt0aGlzLnNldEV4YW1wbGV9XG4gICAgICAgICAgICBzZXRQcm9wPXt0aGlzLnNldFByb3B9XG4gICAgICAgICAgICBjb21wb25lbnRQcm9wcz17ZXh0ZW5kZWRQcm9wc31cbiAgICAgICAgICAgIHsuLi5zcGVjc30+XG4gICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4uZXh0ZW5kZWRQcm9wc30gLz5cbiAgICAgICAgICA8L0RvY3VtZW50ZXI+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZSB9IGZyb20gJ3NyYy9oZWxwZXJzL21lcmdlJ1xuZXhwb3J0IGRlZmF1bHQgc3RlbmNpbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0ZW5jaWwuanMiLCJpbXBvcnQgYXNzaWduIGZyb20gJ2Fzc2lnbi1kZWVwJ1xuXG4vLyAgICBtZXJnZSA6IC0+IG9iamVjdCA6IG9iamVjdCAtPiBvYmplY3RcbmNvbnN0IG1lcmdlID0gKHtwcm9wcywgc3dhdGNoZXN9ID0ge30sIGNvbXBvbmVudCkgPT4ge1xuICByZXR1cm4gYXNzaWduKHt9LCB7cHJvcHMsIHN3YXRjaGVzfSwgY29tcG9uZW50KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvbWVyZ2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzc2lnbi1kZWVwXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=