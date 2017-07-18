(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("assign-deep"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "assign-deep"], factory);
	else if(typeof exports === 'object')
		exports["stencil"] = factory(require("react"), require("prop-types"), require("assign-deep"));
	else
		root["stencil"] = factory(root["react"], root["prop-types"], root["assign-deep"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
//    classString : string -> string
var classString = function classString(string) {
  if (typeof string !== 'string') return null;

  return 'stncl' + string;
};

exports.default = classString;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//    transformValue : value : type -> value
var transformValue = function transformValue(value, type) {
  if (type === 'func') return '';
  if (type === 'number') return Number(value);
  if (type === 'bool') return JSON.parse(value || false);

  return value;
};

exports.default = transformValue;

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

var _Notes = __webpack_require__(9);

var _Notes2 = _interopRequireDefault(_Notes);

var _Description = __webpack_require__(6);

var _Description2 = _interopRequireDefault(_Description);

var _Status = __webpack_require__(13);

var _Status2 = _interopRequireDefault(_Status);

var _Preview = __webpack_require__(10);

var _Preview2 = _interopRequireDefault(_Preview);

var _Examples = __webpack_require__(7);

var _Examples2 = _interopRequireDefault(_Examples);

var _Props = __webpack_require__(12);

var _Props2 = _interopRequireDefault(_Props);

var _classString = __webpack_require__(2);

var _classString2 = _interopRequireDefault(_classString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Documenter = function Documenter(_ref) {
  var name = _ref.name,
      description = _ref.description,
      status = _ref.status,
      notes = _ref.notes,
      props = _ref.props,
      examples = _ref.examples,
      setExample = _ref.setExample,
      setProp = _ref.setProp,
      componentProps = _ref.componentProps,
      swatches = _ref.swatches,
      Component = _ref.children;
  return _react2.default.createElement(
    'section',
    {
      className: (0, _classString2.default)('__layout') },
    _react2.default.createElement(
      'h1',
      {
        className: (0, _classString2.default)('__title') },
      name
    ),
    _react2.default.createElement(_Status2.default, {
      status: status }),
    _react2.default.createElement(
      _Description2.default,
      null,
      description
    ),
    _react2.default.createElement(
      'section',
      {
        className: (0, _classString2.default)('__body') },
      _react2.default.createElement(
        _Preview2.default,
        {
          swatches: swatches },
        Component
      ),
      _react2.default.createElement(_Examples2.default, {
        setExample: setExample,
        examples: examples }),
      _react2.default.createElement(_Props2.default, {
        state: componentProps,
        props: props,
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
  props: _propTypes2.default.object,
  swatches: _propTypes2.default.arrayOf(_propTypes2.default.string),
  name: _propTypes2.default.string,
  description: _propTypes2.default.node,
  notes: _propTypes2.default.object,
  examples: _propTypes2.default.object,
  status: _propTypes2.default.oneOf(['DANGEROUS', 'WIP', 'READY'])
};

exports.default = Documenter;

/***/ }),
/* 5 */
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

var _classString = __webpack_require__(2);

var _classString2 = _interopRequireDefault(_classString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description(_ref) {
  var description = _ref.children;
  return description && _react2.default.createElement(
    'section',
    {
      className: (0, _classString2.default)('__description') },
    description
  ) || null;
};

Description.propTypes = {
  children: _propTypes2.default.node
};

exports.default = Description;

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

var _classString = __webpack_require__(2);

var _classString2 = _interopRequireDefault(_classString);

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

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Examples, [{
    key: 'onChange',
    value: function onChange(_ref) {
      var value = _ref.target.value;

      this.props.setExample(value);
      this.setState({ current: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var examples = this.props.examples;

      return examples && _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h2',
          {
            className: (0, _classString2.default)('__title') },
          'Examples'
        ),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classString2.default)('__dropdown') },
          _react2.default.createElement(
            'select',
            {
              className: (0, _classString2.default)('__dropdown__select'),
              onChange: this.onChange,
              value: this.state.current },
            Object.keys(examples).map(function (example) {
              return _react2.default.createElement(
                'option',
                {
                  key: example },
                example
              );
            })
          ),
          _react2.default.createElement('div', { className: (0, _classString2.default)('__dropdown__arrow') })
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

var _classString = __webpack_require__(2);

var _classString2 = _interopRequireDefault(_classString);

var _transformValue = __webpack_require__(3);

var _transformValue2 = _interopRequireDefault(_transformValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var name = _ref.name,
      type = _ref.type,
      onChange = _ref.onChange,
      value = _ref.value;

  var handleOnChange = function handleOnChange(_ref2) {
    var value = _ref2.target.value;

    return onChange(name, (0, _transformValue2.default)(value, type));
  };

  if (type === 'func') {
    return null;
  }

  var inputEl = void 0;
  if (type === 'string') {
    inputEl = _react2.default.createElement('input', {
      type: 'text',
      value: value,
      className: (0, _classString2.default)('__input'),
      onChange: handleOnChange });
  }

  if (type === 'number') {
    inputEl = _react2.default.createElement('input', {
      type: 'number',
      value: value,
      className: (0, _classString2.default)('__input'),
      onChange: handleOnChange });
  }

  return inputEl || null;
};

Input.propTypes = {
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.array]).isRequired
};

exports.default = Input;

/***/ }),
/* 9 */
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
/* 10 */
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

var _classString = __webpack_require__(2);

var _classString2 = _interopRequireDefault(_classString);

var _Swatch = __webpack_require__(14);

var _Swatch2 = _interopRequireDefault(_Swatch);

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
      current: null
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
      if (swatches && swatches.length > 0) {
        swatchButtons = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Swatch2.default, {
            swatch: null,
            onClick: this.setSwatch }),
          swatches.map(function (swatch) {
            return _react2.default.createElement(_Swatch2.default, {
              key: swatch,
              swatch: swatch,
              onClick: _this2.setSwatch });
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
            className: (0, _classString2.default)('__preview') },
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = __webpack_require__(8);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Prop = function Prop(_ref) {
  var name = _ref.name,
      _ref$defs = _ref.defs,
      defs = _ref$defs === undefined ? {} : _ref$defs,
      restProps = _objectWithoutProperties(_ref, ['name', 'defs']);

  var type = defs.type,
      required = defs.required;


  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'div',
      null,
      name
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'b',
        null,
        type
      ),
      required ? _react2.default.createElement(
        'i',
        null,
        ' - is required'
      ) : null
    ),
    _react2.default.createElement(_Input2.default, _extends({
      type: type,
      name: name
    }, restProps))
  );
};

Prop.propTypes = {
  name: _propTypes2.default.string.isRequired,
  defs: _propTypes2.default.shape({
    type: _propTypes2.default.string.isRequired,
    required: _propTypes2.default.bool,
    defaultValue: _propTypes2.default.node,
    description: _propTypes2.default.string
  }).isRequired,
  restProps: _propTypes2.default.object
};

exports.default = Prop;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Prop = __webpack_require__(11);

var _Prop2 = _interopRequireDefault(_Prop);

var _transformValue = __webpack_require__(3);

var _transformValue2 = _interopRequireDefault(_transformValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = function Props(_ref) {
  var state = _ref.state,
      setProp = _ref.setProp,
      props = _ref.props;

  return !!props & !!state && _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Props'
    ),
    _react2.default.createElement(
      'ul',
      null,
      Object.keys(props).map(function (prop) {
        return _react2.default.createElement(_Prop2.default, {
          key: prop,
          name: prop,
          defs: props[prop],
          value: (0, _transformValue2.default)(state[prop], props[prop].type),
          onChange: setProp });
      })
    )
  ) || null;
};

Props.propTypes = {
  setProp: _propTypes2.default.func.isRequired,
  state: _propTypes2.default.object,
  props: _propTypes2.default.object
};

exports.default = Props;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classString = __webpack_require__(2);

var _classString2 = _interopRequireDefault(_classString);

var _status = __webpack_require__(15);

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Status = function Status(_ref) {
  var status = _ref.status;
  return !!status && _react2.default.createElement(
    'span',
    {
      className: (0, _classString2.default)('__status') + ' ' + (0, _classString2.default)('__status--' + _status2.default[status].className) },
    _status2.default[status].text
  ) || null;
};

Status.propTypes = {
  status: _propTypes2.default.oneOf(['DANGEROUS', 'WIP', 'READY'])
};

exports.default = Status;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classString = __webpack_require__(2);

var _classString2 = _interopRequireDefault(_classString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatch = function Swatch(_ref) {
  var swatch = _ref.swatch,
      onClick = _ref.onClick;

  var handleOnClick = function handleOnClick() {
    return onClick(swatch);
  };

  return _react2.default.createElement('button', {
    className: (0, _classString2.default)('__swatch-button'),
    style: { background: swatch },
    onClick: handleOnClick });
};

Swatch.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  swatch: _propTypes2.default.string
};

exports.default = Swatch;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'DANGEROUS': {
    text: 'Dangerous',
    className: 'dangerous'
  },
  'WIP': {
    text: 'Work in progress',
    className: 'wip'
  },
  'READY': {
    text: 'Ready',
    className: 'ready'
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(5);

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_merge).default;
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
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMDg4NGIxNzgyMzY0OTcwOGQxOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jbGFzcy1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvdHJhbnNmb3JtLXZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXhhbXBsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Td2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0ZW5jaWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzaWduLWRlZXBcIiJdLCJuYW1lcyI6WyJjbGFzc1N0cmluZyIsInN0cmluZyIsInRyYW5zZm9ybVZhbHVlIiwidmFsdWUiLCJ0eXBlIiwiTnVtYmVyIiwiSlNPTiIsInBhcnNlIiwiRG9jdW1lbnRlciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm5vdGVzIiwicHJvcHMiLCJleGFtcGxlcyIsInNldEV4YW1wbGUiLCJzZXRQcm9wIiwiY29tcG9uZW50UHJvcHMiLCJzd2F0Y2hlcyIsIkNvbXBvbmVudCIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJmdW5jIiwib2JqZWN0IiwiYXJyYXlPZiIsIm5vZGUiLCJvbmVPZiIsIm1lcmdlIiwiY29tcG9uZW50IiwiRGVzY3JpcHRpb24iLCJFeGFtcGxlcyIsInN0YXRlIiwiY3VycmVudCIsIm9uQ2hhbmdlIiwiYmluZCIsInRhcmdldCIsInNldFN0YXRlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImV4YW1wbGUiLCJJbnB1dCIsImhhbmRsZU9uQ2hhbmdlIiwiaW5wdXRFbCIsIm9uZU9mVHlwZSIsImFycmF5IiwiTm90ZXMiLCJncm91cCIsIlByZXZpZXciLCJzZXRTd2F0Y2giLCJzd2F0Y2giLCJzd2F0Y2hCdXR0b25zIiwibGVuZ3RoIiwiYmFja2dyb3VuZCIsIlByb3AiLCJkZWZzIiwicmVzdFByb3BzIiwicmVxdWlyZWQiLCJzaGFwZSIsImJvb2wiLCJkZWZhdWx0VmFsdWUiLCJQcm9wcyIsInByb3AiLCJTdGF0dXMiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiU3dhdGNoIiwib25DbGljayIsImhhbmRsZU9uQ2xpY2siLCJkZWZhdWx0Iiwic3RlbmNpbCIsInNwZWNzIiwiZXh0ZW5kZWRFeGFtcGxlcyIsImFzc2lnbiIsImV4dGVuZGVkUHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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RDtBQUhsQixlQUlNSCxLQUpOO0FBS0UsMENBQUMsZ0JBQUQsRUFBc0JHLGFBQXRCO0FBTEYsV0FERjtBQVNEO0FBL0JIOztBQUFBO0FBQUE7QUFpQ0QsR0FsQ0Q7QUFtQ0QsQ0FwQ0Q7O2tCQXVDZUosTzs7Ozs7O0FDM0NmLGdEIiwiZmlsZSI6InN0ZW5jaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJhc3NpZ24tZGVlcFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIiwgXCJhc3NpZ24tZGVlcFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdGVuY2lsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwiYXNzaWduLWRlZXBcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN0ZW5jaWxcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcInByb3AtdHlwZXNcIl0sIHJvb3RbXCJhc3NpZ24tZGVlcFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMDg4NGIxNzgyMzY0OTcwOGQxOCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gICAgY2xhc3NTdHJpbmcgOiBzdHJpbmcgLT4gc3RyaW5nXG5jb25zdCBjbGFzc1N0cmluZyA9IChzdHJpbmcpID0+IHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBgc3RuY2wke3N0cmluZ31gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzU3RyaW5nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9jbGFzcy1zdHJpbmcuanMiLCIvLyAgICB0cmFuc2Zvcm1WYWx1ZSA6IHZhbHVlIDogdHlwZSAtPiB2YWx1ZVxuY29uc3QgdHJhbnNmb3JtVmFsdWUgPSAodmFsdWUsIHR5cGUpID0+IHtcbiAgaWYgKHR5cGUgPT09ICdmdW5jJykgcmV0dXJuICcnXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgaWYgKHR5cGUgPT09ICdib29sJykgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUgfHwgZmFsc2UpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVZhbHVlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy90cmFuc2Zvcm0tdmFsdWUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTm90ZXMgZnJvbSAnY29tcG9uZW50cy9Ob3RlcydcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICdjb21wb25lbnRzL0Rlc2NyaXB0aW9uJ1xuaW1wb3J0IFN0YXR1cyBmcm9tICdjb21wb25lbnRzL1N0YXR1cydcbmltcG9ydCBQcmV2aWV3IGZyb20gJ2NvbXBvbmVudHMvUHJldmlldydcbmltcG9ydCBFeGFtcGxlcyBmcm9tICdjb21wb25lbnRzL0V4YW1wbGVzJ1xuaW1wb3J0IFByb3BzIGZyb20gJ2NvbXBvbmVudHMvUHJvcHMnXG5pbXBvcnQgY2xhc3NTdHJpbmcgZnJvbSAnaGVscGVycy9jbGFzcy1zdHJpbmcnXG5cbmNvbnN0IERvY3VtZW50ZXIgPSAoe1xuICBuYW1lLFxuICBkZXNjcmlwdGlvbixcbiAgc3RhdHVzLFxuICBub3RlcyxcbiAgcHJvcHMsXG4gIGV4YW1wbGVzLFxuICBzZXRFeGFtcGxlLFxuICBzZXRQcm9wLFxuICBjb21wb25lbnRQcm9wcyxcbiAgc3dhdGNoZXMsXG4gIGNoaWxkcmVuOiBDb21wb25lbnRcbn0pID0+IChcbiAgPHNlY3Rpb25cbiAgICBjbGFzc05hbWU9e2NsYXNzU3RyaW5nKCdfX2xheW91dCcpfT5cbiAgICA8aDFcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmcoJ19fdGl0bGUnKX0+XG4gICAgICB7bmFtZX1cbiAgICA8L2gxPlxuXG4gICAgPFN0YXR1c1xuICAgICAgc3RhdHVzPXtzdGF0dXN9IC8+XG5cbiAgICA8RGVzY3JpcHRpb24+XG4gICAgICB7ZGVzY3JpcHRpb259XG4gICAgPC9EZXNjcmlwdGlvbj5cblxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e2NsYXNzU3RyaW5nKCdfX2JvZHknKX0+XG4gICAgICA8UHJldmlld1xuICAgICAgICBzd2F0Y2hlcz17c3dhdGNoZXN9PlxuICAgICAgICB7Q29tcG9uZW50fVxuICAgICAgPC9QcmV2aWV3PlxuXG4gICAgICA8RXhhbXBsZXNcbiAgICAgICAgc2V0RXhhbXBsZT17c2V0RXhhbXBsZX1cbiAgICAgICAgZXhhbXBsZXM9e2V4YW1wbGVzfSAvPlxuXG4gICAgICA8UHJvcHNcbiAgICAgICAgc3RhdGU9e2NvbXBvbmVudFByb3BzfVxuICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgIHNldFByb3A9e3NldFByb3B9IC8+XG5cbiAgICAgIDxOb3Rlc1xuICAgICAgICBub3Rlcz17bm90ZXN9IC8+XG4gICAgPC9zZWN0aW9uPlxuICA8L3NlY3Rpb24+XG4pXG5cbkRvY3VtZW50ZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgc2V0RXhhbXBsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2V0UHJvcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY29tcG9uZW50UHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN3YXRjaGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5ub2RlLFxuICBub3RlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZXhhbXBsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnREFOR0VST1VTJywgJ1dJUCcsICdSRUFEWSdcbiAgXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRlci5qcyIsImltcG9ydCBhc3NpZ24gZnJvbSAnYXNzaWduLWRlZXAnXG5cbi8vICAgIG1lcmdlIDogLT4gb2JqZWN0IDogb2JqZWN0IC0+IG9iamVjdFxuY29uc3QgbWVyZ2UgPSAoe3Byb3BzLCBzd2F0Y2hlc30gPSB7fSwgY29tcG9uZW50KSA9PiB7XG4gIHJldHVybiBhc3NpZ24oe30sIHtwcm9wcywgc3dhdGNoZXN9LCBjb21wb25lbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9tZXJnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc1N0cmluZyBmcm9tICdoZWxwZXJzL2NsYXNzLXN0cmluZydcblxuY29uc3QgRGVzY3JpcHRpb24gPSAoe2NoaWxkcmVuOiBkZXNjcmlwdGlvbn0pID0+ICgoZGVzY3JpcHRpb24gJiYgKFxuICA8c2VjdGlvblxuICAgIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmcoJ19fZGVzY3JpcHRpb24nKX0+XG4gICAge2Rlc2NyaXB0aW9ufVxuICA8L3NlY3Rpb24+XG4pKSB8fCBudWxsKVxuXG5EZXNjcmlwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NTdHJpbmcgZnJvbSAnaGVscGVycy9jbGFzcy1zdHJpbmcnXG5cbmNsYXNzIEV4YW1wbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudDogJ2RlZmF1bHQnXG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2UgKHt0YXJnZXQ6IHsgdmFsdWUgfX0pIHtcbiAgICB0aGlzLnByb3BzLnNldEV4YW1wbGUodmFsdWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudDogdmFsdWV9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBleGFtcGxlcyA9IHRoaXMucHJvcHMuZXhhbXBsZXNcblxuICAgIHJldHVybiAoZXhhbXBsZXMgJiYgKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmcoJ19fdGl0bGUnKX0+XG4gICAgICAgICAgRXhhbXBsZXNcbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1N0cmluZygnX19kcm9wZG93bicpfT5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU3RyaW5nKCdfX2Ryb3Bkb3duX19zZWxlY3QnKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudH0+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoZXhhbXBsZXMpLm1hcChleGFtcGxlID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17ZXhhbXBsZX0+XG4gICAgICAgICAgICAgICAge2V4YW1wbGV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTdHJpbmcoJ19fZHJvcGRvd25fX2Fycm93Jyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICkpIHx8IG51bGxcbiAgfVxufVxuXG5FeGFtcGxlcy5wcm9wVHlwZXMgPSB7XG4gIHNldEV4YW1wbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGV4YW1wbGVzOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FeGFtcGxlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc1N0cmluZyBmcm9tICdoZWxwZXJzL2NsYXNzLXN0cmluZydcbmltcG9ydCB0cmFuc2Zvcm1WYWx1ZSBmcm9tICdoZWxwZXJzL3RyYW5zZm9ybS12YWx1ZSdcblxuY29uc3QgSW5wdXQgPSAoe25hbWUsIHR5cGUsIG9uQ2hhbmdlLCB2YWx1ZX0pID0+IHtcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoe3RhcmdldDoge3ZhbHVlfX0pID0+IHtcbiAgICByZXR1cm4gb25DaGFuZ2UobmFtZSwgdHJhbnNmb3JtVmFsdWUodmFsdWUsIHR5cGUpKVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdmdW5jJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsZXQgaW5wdXRFbFxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dEVsID0gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1N0cmluZygnX19pbnB1dCcpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9IC8+XG4gICAgKVxuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgaW5wdXRFbCA9IChcbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1N0cmluZygnX19pbnB1dCcpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9IC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGlucHV0RWwgfHwgbnVsbFxufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ub2RlLFxuICAgIFByb3BUeXBlcy5hcnJheVxuICBdKS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9JbnB1dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgTm90ZXMgPSAoe25vdGVzfSkgPT4gKG5vdGVzICYmIChcbiAgPHNlY3Rpb24+XG4gICAgPGgyPlxuICAgICAgTm90ZXNcbiAgICA8L2gyPlxuXG4gICAge09iamVjdC5rZXlzKG5vdGVzKS5tYXAoZ3JvdXAgPT4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2dyb3VwfT5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIHtncm91cH1cbiAgICAgICAgPC9oMz5cbiAgICAgICAge25vdGVzW2dyb3VwXX1cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICA8L3NlY3Rpb24+XG4pKSB8fCBudWxsXG5cbk5vdGVzLnByb3BUeXBlcyA9IHtcbiAgbm90ZXM6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90ZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL05vdGVzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzU3RyaW5nIGZyb20gJ2hlbHBlcnMvY2xhc3Mtc3RyaW5nJ1xuaW1wb3J0IFN3YXRjaCBmcm9tICdjb21wb25lbnRzL1N3YXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN3YXRjaCA9IHRoaXMuc2V0U3dhdGNoLmJpbmQodGhpcylcbiAgfVxuXG4gIHNldFN3YXRjaCAoc3dhdGNoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50OiBzd2F0Y2hcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50XG4gICAgY29uc3Qge1xuICAgICAgc3dhdGNoZXMsXG4gICAgICBjaGlsZHJlbjogQ29tcG9uZW50XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBzd2F0Y2hCdXR0b25zXG4gICAgaWYgKHN3YXRjaGVzICYmIHN3YXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN3YXRjaEJ1dHRvbnMgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFN3YXRjaFxuICAgICAgICAgICAgc3dhdGNoPXtudWxsfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZXRTd2F0Y2h9IC8+XG5cbiAgICAgICAgICB7c3dhdGNoZXMubWFwKHN3YXRjaCA9PiAoXG4gICAgICAgICAgICA8U3dhdGNoXG4gICAgICAgICAgICAgIGtleT17c3dhdGNofVxuICAgICAgICAgICAgICBzd2F0Y2g9e3N3YXRjaH1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZXRTd2F0Y2h9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7c3dhdGNoQnV0dG9uc31cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kOiBjdXJyZW50fX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU3RyaW5nKCdfX3ByZXZpZXcnKX0+XG4gICAgICAgICAge0NvbXBvbmVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICBzd2F0Y2hlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1ByZXZpZXcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgSW5wdXQgZnJvbSAnY29tcG9uZW50cy9JbnB1dCdcblxuY29uc3QgUHJvcCA9ICh7bmFtZSwgZGVmcyA9IHt9LCAuLi5yZXN0UHJvcHN9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIHJlcXVpcmVkXG4gIH0gPSBkZWZzXG5cbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICA8ZGl2PlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8Yj57dHlwZX08L2I+XG4gICAgICAgIHtyZXF1aXJlZCA/IDxpPiAtIGlzIHJlcXVpcmVkPC9pPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPElucHV0XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9IC8+XG4gICAgPC9saT5cbiAgKVxufVxuXG5Qcm9wLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZWZzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMubm9kZSxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkLFxuICByZXN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBQcm9wIGZyb20gJ2NvbXBvbmVudHMvUHJvcCdcbmltcG9ydCB0cmFuc2Zvcm1WYWx1ZSBmcm9tICdoZWxwZXJzL3RyYW5zZm9ybS12YWx1ZSdcblxuY29uc3QgUHJvcHMgPSAoe3N0YXRlLCBzZXRQcm9wLCBwcm9wc30pID0+IHtcbiAgcmV0dXJuICghIXByb3BzICYgISFzdGF0ZSAmJiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+XG4gICAgICAgIFByb3BzXG4gICAgICA8L2gyPlxuXG4gICAgICA8dWw+XG4gICAgICAgIHtPYmplY3Qua2V5cyhwcm9wcykubWFwKHByb3AgPT4gKFxuICAgICAgICAgIDxQcm9wXG4gICAgICAgICAgICBrZXk9e3Byb3B9XG4gICAgICAgICAgICBuYW1lPXtwcm9wfVxuICAgICAgICAgICAgZGVmcz17cHJvcHNbcHJvcF19XG4gICAgICAgICAgICB2YWx1ZT17dHJhbnNmb3JtVmFsdWUoc3RhdGVbcHJvcF0sIHByb3BzW3Byb3BdLnR5cGUpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldFByb3B9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICkpIHx8IG51bGxcbn1cblxuUHJvcHMucHJvcFR5cGVzID0ge1xuICBzZXRQcm9wOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdGF0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJvcHM6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb3BzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzU3RyaW5nIGZyb20gJ2hlbHBlcnMvY2xhc3Mtc3RyaW5nJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdjb25zdGFudHMvc3RhdHVzJ1xuXG5jb25zdCBTdGF0dXMgPSAoe3N0YXR1c30pID0+ICgoISFzdGF0dXMgJiYgKFxuICA8c3BhblxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmcoJ19fc3RhdHVzJyl9ICR7Y2xhc3NTdHJpbmcoYF9fc3RhdHVzLS0ke2NvbnN0YW50c1tzdGF0dXNdLmNsYXNzTmFtZX1gKX1gfT5cbiAgICB7Y29uc3RhbnRzW3N0YXR1c10udGV4dH1cbiAgPC9zcGFuPlxuKSkgfHwgbnVsbClcblxuU3RhdHVzLnByb3BUeXBlcyA9IHtcbiAgc3RhdHVzOiBQcm9wVHlwZXMub25lT2YoXG4gICAgWydEQU5HRVJPVVMnLCAnV0lQJywgJ1JFQURZJ11cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N0YXR1cy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc1N0cmluZyBmcm9tICdoZWxwZXJzL2NsYXNzLXN0cmluZydcblxuY29uc3QgU3dhdGNoID0gKHtzd2F0Y2gsIG9uQ2xpY2t9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9uQ2xpY2soc3dhdGNoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2NsYXNzU3RyaW5nKCdfX3N3YXRjaC1idXR0b24nKX1cbiAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogc3dhdGNofX1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9IC8+XG4gIClcbn1cblxuU3dhdGNoLnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3dhdGNoOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3YXRjaFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3dhdGNoLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAnREFOR0VST1VTJzoge1xuICAgIHRleHQ6ICdEYW5nZXJvdXMnLFxuICAgIGNsYXNzTmFtZTogJ2Rhbmdlcm91cydcbiAgfSxcbiAgJ1dJUCc6IHtcbiAgICB0ZXh0OiAnV29yayBpbiBwcm9ncmVzcycsXG4gICAgY2xhc3NOYW1lOiAnd2lwJ1xuICB9LFxuICAnUkVBRFknOiB7XG4gICAgdGV4dDogJ1JlYWR5JyxcbiAgICBjbGFzc05hbWU6ICdyZWFkeSdcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy9zdGF0dXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRG9jdW1lbnRlciBmcm9tICdjb21wb25lbnRzL0RvY3VtZW50ZXInXG5cbi8vICAgIHN0ZW5jaWwgOiBvYmplY3QgLT4gY29tcG9uZW50IC0+IGNvbXBvbmVudFxuY29uc3Qgc3RlbmNpbCA9IChzcGVjcyA9IHt9KSA9PiB7XG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICByZXR1cm4gY2xhc3MgU3RlbmNpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XG4gICAgICAgIHRoaXMuZXh0ZW5kZWRFeGFtcGxlcyA9IE9iamVjdC5hc3NpZ24oc3BlY3MuZXhhbXBsZXMgfHwge30sIHtcbiAgICAgICAgICBkZWZhdWx0OiB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRFeGFtcGxlID0gdGhpcy5zZXRFeGFtcGxlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zZXRQcm9wID0gdGhpcy5zZXRQcm9wLmJpbmQodGhpcylcbiAgICAgIH1cblxuICAgICAgc2V0RXhhbXBsZSAoZXhhbXBsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLmV4dGVuZGVkRXhhbXBsZXNbZXhhbXBsZV19KVxuICAgICAgfVxuXG4gICAgICBzZXRQcm9wIChwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtbcHJvcF06IHZhbHVlfSlcbiAgICAgIH1cblxuICAgICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5kZWRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPERvY3VtZW50ZXJcbiAgICAgICAgICAgIHNldEV4YW1wbGU9e3RoaXMuc2V0RXhhbXBsZX1cbiAgICAgICAgICAgIHNldFByb3A9e3RoaXMuc2V0UHJvcH1cbiAgICAgICAgICAgIGNvbXBvbmVudFByb3BzPXtleHRlbmRlZFByb3BzfVxuICAgICAgICAgICAgey4uLnNwZWNzfT5cbiAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5leHRlbmRlZFByb3BzfSAvPlxuICAgICAgICAgIDwvRG9jdW1lbnRlcj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlIH0gZnJvbSAnaGVscGVycy9tZXJnZSdcbmV4cG9ydCBkZWZhdWx0IHN0ZW5jaWxcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGVuY2lsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NpZ24tZGVlcFwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9