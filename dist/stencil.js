(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("assign-deep"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "assign-deep"], factory);
	else if(typeof exports === 'object')
		exports["stencil"] = factory(require("react"), require("prop-types"), require("assign-deep"));
	else
		root["stencil"] = factory(root["react"], root["prop-types"], root["assign-deep"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//    className : string -> string -> string
var className = function className(element, modifier) {
  return 'stencil' + (element ? '__' + element : '') + (modifier ? '--' + modifier : '');
};

exports.default = className;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(9);

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _merge.merge;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Documenter = __webpack_require__(4);

var _Documenter2 = _interopRequireDefault(_Documenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//    stencil : object -> component -> component
var stencil = function stencil(specs) {
  return function (wrappedComponent) {
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
            _react2.default.createElement('wrappedComponent', extendedProps)
          );
        }
      }]);

      return Stencil;
    }(_react.Component);
  };
};

exports.default = stencil;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Notes = __webpack_require__(6);

var _Notes2 = _interopRequireDefault(_Notes);

var _Preview = __webpack_require__(7);

var _Preview2 = _interopRequireDefault(_Preview);

var _Examples = __webpack_require__(5);

var _Examples2 = _interopRequireDefault(_Examples);

var _Properties = __webpack_require__(8);

var _Properties2 = _interopRequireDefault(_Properties);

var _className = __webpack_require__(2);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Documenter = function Documenter(_ref) {
  var name = _ref.name,
      notes = _ref.notes,
      propDefs = _ref.propDefs,
      examples = _ref.examples,
      setExample = _ref.setExample,
      setProp = _ref.setProp,
      componentProps = _ref.componentProps,
      swatches = _ref.swatches,
      Component = _ref.children;
  return _react2.default.createElement(
    'section',
    {
      className: (0, _className2.default)('layout') },
    _react2.default.createElement(
      'h1',
      {
        className: (0, _className2.default)('title') },
      name
    ),
    _react2.default.createElement(
      'section',
      {
        className: (0, _className2.default)('body') },
      _react2.default.createElement(
        _Preview2.default,
        {
          swatches: swatches },
        Component
      ),
      _react2.default.createElement(_Examples2.default, {
        setExample: setExample,
        examples: examples }),
      _react2.default.createElement(_Properties2.default, {
        state: componentProps,
        propDefs: propDefs,
        setProp: setProp }),
      _react2.default.createElement(_Notes2.default, {
        notes: notes })
    )
  );
};

Documenter.propTypes = {
  children: _propTypes2.default.element.isRequired,
  setExample: _propTypes2.default.func.isRequired,
  setProp: _propTypes2.default.func.isRequired,
  componentProps: _propTypes2.default.object.isRequired,
  propDefs: _propTypes2.default.object,
  swatches: _propTypes2.default.arrayOf(_propTypes2.default.string),
  name: _propTypes2.default.string,
  notes: _propTypes2.default.object,
  examples: _propTypes2.default.object
};

exports.default = Documenter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _className = __webpack_require__(2);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Examples = function (_Component) {
  _inherits(Examples, _Component);

  function Examples(props) {
    _classCallCheck(this, Examples);

    var _this = _possibleConstructorReturn(this, (Examples.__proto__ || Object.getPrototypeOf(Examples)).call(this, props));

    _this.state = {
      current: 'default'
    };
    return _this;
  }

  _createClass(Examples, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          setExample = _props.setExample,
          examples = _props.examples;


      return examples && _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h2',
          {
            className: (0, _className2.default)('title') },
          'Examples'
        ),
        _react2.default.createElement(
          'div',
          null,
          Object.keys(examples).map(function (example) {
            return _react2.default.createElement(
              'button',
              {
                key: example,
                className: [(0, _className2.default)('example'), (0, _className2.default)('example', example === _this2.state.current && 'current')].join(' '),
                onClick: function onClick() {
                  _this2.setState({ current: example });
                  setExample(example);
                } },
              example
            );
          })
        )
      ) || null;
    }
  }]);

  return Examples;
}(_react.Component);

Examples.propTypes = {
  setExample: _propTypes2.default.func.isRequired,
  examples: _propTypes2.default.object
};

exports.default = Examples;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notes = function Notes(_ref) {
  var notes = _ref.notes;
  return notes && _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Notes'
    ),
    Object.keys(notes).map(function (group) {
      return _react2.default.createElement(
        'div',
        {
          key: group },
        _react2.default.createElement(
          'h3',
          null,
          group
        ),
        notes[group]
      );
    })
  ) || null;
};

Notes.propTypes = {
  notes: _propTypes2.default.object
};

exports.default = Notes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _className = __webpack_require__(2);

var _className2 = _interopRequireDefault(_className);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

    _this.state = {
      current: ''
    };

    _this.setSwatch = _this.setSwatch.bind(_this);
    return _this;
  }

  _createClass(Preview, [{
    key: 'setSwatch',
    value: function setSwatch(swatch) {
      this.setState({
        current: swatch
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var current = this.state.current;
      var _props = this.props,
          swatches = _props.swatches,
          Component = _props.children;


      var swatchButtons = void 0;
      if (swatches.length > 0) {
        swatchButtons = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('button', {
            style: { width: 20, height: 20, background: 'linear-gradient(45deg, white 42.5%, red 42.5%, red 57.5%, white 57.5%)', border: '1px solid rgba(0, 0, 0, .5)' },
            onClick: function onClick() {
              return _this2.setSwatch('');
            } }),
          swatches.map(function (swatch) {
            return _react2.default.createElement('button', {
              key: swatch,
              style: { width: 20, height: 20, background: swatch, border: '1px solid rgba(0, 0, 0, .5)' },
              onClick: function onClick() {
                return _this2.setSwatch(swatch);
              } });
          })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        swatchButtons,
        _react2.default.createElement(
          'div',
          {
            style: { background: current },
            className: (0, _className2.default)('preview') },
          Component
        )
      );
    }
  }]);

  return Preview;
}(_react.Component);

exports.default = Preview;


Preview.propTypes = {
  children: _propTypes2.default.element.isRequired,
  swatches: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Properties = function Properties(_ref) {
  var state = _ref.state,
      setProp = _ref.setProp,
      props = _ref.props;
  return props && _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'ul',
      null,
      props.map(function (prop) {
        return _react2.default.createElement(
          'li',
          {
            key: prop.key },
          prop
        );
      })
    )
  );
};

Properties.propTypes = {
  state: _propTypes2.default.object,
  setProp: _propTypes2.default.func,
  props: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    type: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    defaultValue: _propTypes2.default.node,
    description: _propTypes2.default.string
  }))
};

exports.default = Properties;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignDeep = __webpack_require__(10);

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
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
(function webpackMissingModule() { throw new Error("Cannot find module \"-p\""); }());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NzlkOTk4NmEzMzdhNDE5ZDIxOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jbGFzcy1uYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGVuY2lsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXhhbXBsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL21lcmdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2lnbi1kZWVwXCIiXSwibmFtZXMiOlsiY2xhc3NOYW1lIiwiZWxlbWVudCIsIm1vZGlmaWVyIiwibWVyZ2UiLCJzdGVuY2lsIiwicHJvcHMiLCJzdGF0ZSIsImV4dGVuZGVkRXhhbXBsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJzcGVjcyIsImV4YW1wbGVzIiwiZGVmYXVsdCIsInNldEV4YW1wbGUiLCJiaW5kIiwic2V0UHJvcCIsImV4YW1wbGUiLCJzZXRTdGF0ZSIsInByb3AiLCJ2YWx1ZSIsImV4dGVuZGVkUHJvcHMiLCJEb2N1bWVudGVyIiwibmFtZSIsIm5vdGVzIiwicHJvcERlZnMiLCJjb21wb25lbnRQcm9wcyIsInN3YXRjaGVzIiwiQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCIsImFycmF5T2YiLCJzdHJpbmciLCJFeGFtcGxlcyIsImN1cnJlbnQiLCJrZXlzIiwibWFwIiwiam9pbiIsIk5vdGVzIiwiZ3JvdXAiLCJQcmV2aWV3Iiwic2V0U3dhdGNoIiwic3dhdGNoIiwic3dhdGNoQnV0dG9ucyIsImxlbmd0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsIlByb3BlcnRpZXMiLCJrZXkiLCJzaGFwZSIsInR5cGUiLCJyZXF1aXJlZCIsImJvb2wiLCJkZWZhdWx0VmFsdWUiLCJub2RlIiwiZGVzY3JpcHRpb24iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDdkMsc0JBQWlCRCxpQkFBZUEsT0FBZixHQUEyQixFQUE1QyxLQUFpREMsa0JBQWdCQSxRQUFoQixHQUE2QixFQUE5RTtBQUNELENBRkQ7O2tCQUllRixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNx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QUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNHQSxZQUFNaUMsR0FBTixDQUFVLFVBQUNwQixJQUFEO0FBQUEsZUFDVDtBQUFBO0FBQUE7QUFDRSxpQkFBS0EsS0FBS2tDLEdBRFo7QUFFR2xDO0FBRkgsU0FEUztBQUFBLE9BQVY7QUFESDtBQURGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBYUFpQyxXQUFXdEIsU0FBWCxHQUF1QjtBQUNyQnZCLFNBQU8sb0JBQVUwQixNQURJO0FBRXJCakIsV0FBUyxvQkFBVWdCLElBRkU7QUFHckIxQixTQUFPLG9CQUFVNEIsT0FBVixDQUNMLG9CQUFVb0IsS0FBVixDQUFnQjtBQUNkQyxVQUFNLG9CQUFVcEIsTUFERjtBQUVkcUIsY0FBVSxvQkFBVUMsSUFGTjtBQUdkQyxrQkFBYyxvQkFBVUMsSUFIVjtBQUlkQyxpQkFBYSxvQkFBVXpCO0FBSlQsR0FBaEIsQ0FESztBQUhjLENBQXZCOztrQkFhZWlCLFU7Ozs7Ozs7Ozs7Ozs7QUM3QmY7Ozs7OztBQUVBO0FBQ0EsSUFBTWhELFFBQVEsU0FBUkEsS0FBUSxHQUF1QztBQUFBLGlGQUFsQixFQUFrQjtBQUFBLE1BQXJDRSxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QnFCLFFBQThCLFFBQTlCQSxRQUE4Qjs7QUFBQSxNQUFka0MsU0FBYzs7QUFDbkQsU0FBTywwQkFBTyxFQUFQLEVBQVcsRUFBQ3ZELFlBQUQsRUFBUXFCLGtCQUFSLEVBQVgsRUFBOEJrQyxTQUE5QixDQUFQO0FBQ0QsQ0FGRDs7a0JBSWV6RCxLOzs7Ozs7QUNQZixnRCIsImZpbGUiOiJzdGVuY2lsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwiYXNzaWduLWRlZXBcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCIsIFwiYXNzaWduLWRlZXBcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3RlbmNpbFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcImFzc2lnbi1kZWVwXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdGVuY2lsXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJwcm9wLXR5cGVzXCJdLCByb290W1wiYXNzaWduLWRlZXBcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTc5ZDk5ODZhMzM3YTQxOWQyMTkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vICAgIGNsYXNzTmFtZSA6IHN0cmluZyAtPiBzdHJpbmcgLT4gc3RyaW5nXG5jb25zdCBjbGFzc05hbWUgPSAoZWxlbWVudCwgbW9kaWZpZXIpID0+IHtcbiAgcmV0dXJuIGBzdGVuY2lsJHtlbGVtZW50ID8gYF9fJHtlbGVtZW50fWAgOiAnJ30ke21vZGlmaWVyID8gYC0tJHttb2RpZmllcn1gIDogJyd9YFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzc05hbWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2NsYXNzLW5hbWUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRG9jdW1lbnRlciBmcm9tICdjb21wb25lbnRzL0RvY3VtZW50ZXInXG5cbi8vICAgIHN0ZW5jaWwgOiBvYmplY3QgLT4gY29tcG9uZW50IC0+IGNvbXBvbmVudFxuY29uc3Qgc3RlbmNpbCA9IHNwZWNzID0+IHtcbiAgcmV0dXJuIHdyYXBwZWRDb21wb25lbnQgPT4ge1xuICAgIHJldHVybiBjbGFzcyBTdGVuY2lsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge31cbiAgICAgICAgdGhpcy5leHRlbmRlZEV4YW1wbGVzID0gT2JqZWN0LmFzc2lnbihzcGVjcy5leGFtcGxlcyB8fCB7fSwge1xuICAgICAgICAgIGRlZmF1bHQ6IHsuLi50aGlzLnByb3BzfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldEV4YW1wbGUgPSB0aGlzLnNldEV4YW1wbGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnNldFByb3AgPSB0aGlzLnNldFByb3AuYmluZCh0aGlzKVxuICAgICAgfVxuXG4gICAgICBzZXRFeGFtcGxlIChleGFtcGxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuZXh0ZW5kZWRFeGFtcGxlc1tleGFtcGxlXX0pXG4gICAgICB9XG5cbiAgICAgIHNldFByb3AgKHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1twcm9wXTogdmFsdWV9KVxuICAgICAgfVxuXG4gICAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBleHRlbmRlZFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RG9jdW1lbnRlclxuICAgICAgICAgICAgc2V0RXhhbXBsZT17dGhpcy5zZXRFeGFtcGxlfVxuICAgICAgICAgICAgc2V0UHJvcD17dGhpcy5zZXRQcm9wfVxuICAgICAgICAgICAgY29tcG9uZW50UHJvcHM9e2V4dGVuZGVkUHJvcHN9XG4gICAgICAgICAgICB7Li4uc3BlY3N9PlxuICAgICAgICAgICAgPHdyYXBwZWRDb21wb25lbnQgey4uLmV4dGVuZGVkUHJvcHN9IC8+XG4gICAgICAgICAgPC9Eb2N1bWVudGVyPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IG1lcmdlIH0gZnJvbSAnaGVscGVycy9tZXJnZSdcbmV4cG9ydCBkZWZhdWx0IHN0ZW5jaWxcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGVuY2lsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE5vdGVzIGZyb20gJ2NvbXBvbmVudHMvTm90ZXMnXG5pbXBvcnQgUHJldmlldyBmcm9tICdjb21wb25lbnRzL1ByZXZpZXcnXG5pbXBvcnQgRXhhbXBsZXMgZnJvbSAnY29tcG9uZW50cy9FeGFtcGxlcydcbmltcG9ydCBQcm9wZXJ0aWVzIGZyb20gJ2NvbXBvbmVudHMvUHJvcGVydGllcydcbmltcG9ydCBjbGFzc05hbWUgZnJvbSAnaGVscGVycy9jbGFzcy1uYW1lJ1xuXG5jb25zdCBEb2N1bWVudGVyID0gKHtcbiAgbmFtZSxcbiAgbm90ZXMsXG4gIHByb3BEZWZzLFxuICBleGFtcGxlcyxcbiAgc2V0RXhhbXBsZSxcbiAgc2V0UHJvcCxcbiAgY29tcG9uZW50UHJvcHMsXG4gIHN3YXRjaGVzLFxuICBjaGlsZHJlbjogQ29tcG9uZW50XG59KSA9PiAoXG4gIDxzZWN0aW9uXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWUoJ2xheW91dCcpfT5cbiAgICA8aDFcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lKCd0aXRsZScpfT5cbiAgICAgIHtuYW1lfVxuICAgIDwvaDE+XG5cbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUoJ2JvZHknKX0+XG4gICAgICA8UHJldmlld1xuICAgICAgICBzd2F0Y2hlcz17c3dhdGNoZXN9PlxuICAgICAgICB7Q29tcG9uZW50fVxuICAgICAgPC9QcmV2aWV3PlxuXG4gICAgICA8RXhhbXBsZXNcbiAgICAgICAgc2V0RXhhbXBsZT17c2V0RXhhbXBsZX1cbiAgICAgICAgZXhhbXBsZXM9e2V4YW1wbGVzfSAvPlxuXG4gICAgICA8UHJvcGVydGllc1xuICAgICAgICBzdGF0ZT17Y29tcG9uZW50UHJvcHN9XG4gICAgICAgIHByb3BEZWZzPXtwcm9wRGVmc31cbiAgICAgICAgc2V0UHJvcD17c2V0UHJvcH0gLz5cblxuICAgICAgPE5vdGVzXG4gICAgICAgIG5vdGVzPXtub3Rlc30gLz5cbiAgICA8L3NlY3Rpb24+XG4gIDwvc2VjdGlvbj5cbilcblxuRG9jdW1lbnRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICBzZXRFeGFtcGxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXRQcm9wOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb21wb25lbnRQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwcm9wRGVmczogUHJvcFR5cGVzLm9iamVjdCxcbiAgc3dhdGNoZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub3RlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhhbXBsZXM6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc05hbWUgZnJvbSAnaGVscGVycy9jbGFzcy1uYW1lJ1xuXG5jbGFzcyBFeGFtcGxlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0J1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2V0RXhhbXBsZSxcbiAgICAgIGV4YW1wbGVzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoZXhhbXBsZXMgJiYgKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lKCd0aXRsZScpfT5cbiAgICAgICAgICBFeGFtcGxlc1xuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge09iamVjdC5rZXlzKGV4YW1wbGVzKS5tYXAoZXhhbXBsZSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17ZXhhbXBsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lKCdleGFtcGxlJyksXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lKCdleGFtcGxlJywgZXhhbXBsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50ICYmICdjdXJyZW50JylcbiAgICAgICAgICAgICAgXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50OiBleGFtcGxlfSlcbiAgICAgICAgICAgICAgICBzZXRFeGFtcGxlKGV4YW1wbGUpXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7ZXhhbXBsZX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApKSB8fCBudWxsXG4gIH1cbn1cblxuRXhhbXBsZXMucHJvcFR5cGVzID0ge1xuICBzZXRFeGFtcGxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBleGFtcGxlczogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXhhbXBsZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IE5vdGVzID0gKHtub3Rlc30pID0+IChub3RlcyAmJiAoXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5cbiAgICAgIE5vdGVzXG4gICAgPC9oMj5cblxuICAgIHtPYmplY3Qua2V5cyhub3RlcykubWFwKGdyb3VwID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtncm91cH0+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICB7Z3JvdXB9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIHtub3Rlc1tncm91cF19XG4gICAgICA8L2Rpdj5cbiAgICApKX1cbiAgPC9zZWN0aW9uPlxuKSkgfHwgbnVsbFxuXG5Ob3Rlcy5wcm9wVHlwZXMgPSB7XG4gIG5vdGVzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ob3Rlcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc05hbWUgZnJvbSAnaGVscGVycy9jbGFzcy1uYW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudDogJydcbiAgICB9XG5cbiAgICB0aGlzLnNldFN3YXRjaCA9IHRoaXMuc2V0U3dhdGNoLmJpbmQodGhpcylcbiAgfVxuXG4gIHNldFN3YXRjaCAoc3dhdGNoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50OiBzd2F0Y2hcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50XG4gICAgY29uc3Qge1xuICAgICAgc3dhdGNoZXMsXG4gICAgICBjaGlsZHJlbjogQ29tcG9uZW50XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBzd2F0Y2hCdXR0b25zXG4gICAgaWYgKHN3YXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN3YXRjaEJ1dHRvbnMgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMjAsIGhlaWdodDogMjAsIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlIDQyLjUlLCByZWQgNDIuNSUsIHJlZCA1Ny41JSwgd2hpdGUgNTcuNSUpJywgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjUpJ319XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN3YXRjaCgnJyl9IC8+XG5cbiAgICAgICAgICB7c3dhdGNoZXMubWFwKHN3YXRjaCA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17c3dhdGNofVxuICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAyMCwgaGVpZ2h0OiAyMCwgYmFja2dyb3VuZDogc3dhdGNoLCBib3JkZXI6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNSknfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTd2F0Y2goc3dhdGNoKX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtzd2F0Y2hCdXR0b25zfVxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IGN1cnJlbnR9fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lKCdwcmV2aWV3Jyl9PlxuICAgICAgICAgIHtDb21wb25lbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblByZXZpZXcucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgc3dhdGNoZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9QcmV2aWV3LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBQcm9wZXJ0aWVzID0gKHtzdGF0ZSwgc2V0UHJvcCwgcHJvcHN9KSA9PiAocHJvcHMgJiYgKFxuICA8c2VjdGlvbj5cbiAgICA8dWw+XG4gICAgICB7cHJvcHMubWFwKChwcm9wKSA9PiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGtleT17cHJvcC5rZXl9PlxuICAgICAgICAgIHtwcm9wfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgPC9zZWN0aW9uPlxuKSlcblxuUHJvcGVydGllcy5wcm9wVHlwZXMgPSB7XG4gIHN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZXRQcm9wOiBQcm9wVHlwZXMuZnVuYyxcbiAgcHJvcHM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMubm9kZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0aWVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzLmpzIiwiaW1wb3J0IGFzc2lnbiBmcm9tICdhc3NpZ24tZGVlcCdcblxuLy8gICAgbWVyZ2UgOiAtPiBvYmplY3QgOiBvYmplY3QgLT4gb2JqZWN0XG5jb25zdCBtZXJnZSA9ICh7cHJvcHMsIHN3YXRjaGVzfSA9IHt9LCBjb21wb25lbnQpID0+IHtcbiAgcmV0dXJuIGFzc2lnbih7fSwge3Byb3BzLCBzd2F0Y2hlc30sIGNvbXBvbmVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL21lcmdlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NpZ24tZGVlcFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9