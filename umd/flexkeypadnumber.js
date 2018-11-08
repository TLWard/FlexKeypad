/*!
 * flexkeypadnumber v1.0.1
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["FlexKeypad"] = factory(require("react"));
	else
		root["FlexKeypad"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// CONCATENATED MODULE: ./src/FlexKeypadStyle.js
var cColors = {
    crBackground: '#D5EEF7'
};
var textInput = {

    width: '100%',
    height: '100%',
    fontSize: 'large',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: 'none'
};

var btn = {

    width: '100%',
    height: '100%',
    background: '#fff',
    fontSize: 'large'
};
var btnCircle = {

    width: '100%',
    height: '100%',
    background: '#fff',
    fontSize: 'large',
    border: 'none',
    //width: '30px',
    //height: '30px',
    textAlign: 'center',
    padding: '6px 0',
    //fontSize: '12px',
    lineHeight: '1.42',
    borderRadius: '50%'
};
function GetBackdropStyle() {

    return {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };
}
function GetModelStyle() {

    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };
}
function flexContainer(display, align, backColor) {
    return {

        display: display,
        justify: 'spaceAround',
        alignItems: align,
        alignContent: align,
        background: backColor

    };
}
function flexItem(height, width) {

    return {
        flex: 1,
        margin: '10px',
        height: height,
        width: width

    };
}
function SetModalStyle(width, height) {
    return {

        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -30%)',
        width: width,
        height: height
    };
}
// CONCATENATED MODULE: ./src/FlexKeypad.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FlexKeypad_FlexKeypad = function (_React$Component) {
    _inherits(FlexKeypad, _React$Component);

    function FlexKeypad(props) {
        _classCallCheck(this, FlexKeypad);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = { numValue: '' };
        return _this;
    }

    FlexKeypad.prototype.componentWillReceiveProps = function componentWillReceiveProps() {

        this.SetState(0);
    };

    FlexKeypad.prototype.SetState = function SetState(numValue) {

        this.setState({ numValue: numValue });
    };

    FlexKeypad.prototype.closeModal = function closeModal() {

        var minutes = this.state.numValue;
        if (minutes === "") minutes = 0;

        this.SetState(minutes);

        //Call to parent function.
        if (this.props.close !== undefined) this.props.close(minutes);
    };

    FlexKeypad.prototype.handleEnter = function handleEnter(value) {

        if (this.state.numValue === 0) this.SetState(value.toString());else this.SetState(this.state.numValue + value.toString());
    };

    FlexKeypad.prototype.handleBack = function handleBack(value) {

        if (this.state.numValue !== 0) {
            var valueNew = this.state.numValue.substring(0, this.state.numValue.length - 1);
            this.SetState(valueNew);
        }
    };

    FlexKeypad.prototype.GetSize = function GetSize() {

        var btnW = this.props.width * .32;
        var btnH = this.props.height * .10;

        var ph = .50;
        var pw = .50;
        if (this.props.width > 1000) {

            ph = .20;
            pw = .20;
        }

        var s = { width: pw, height: ph, btnWidth: btnW, btnHeight: btnH };
        return s;
    };

    FlexKeypad.prototype.GetInputItem = function GetInputItem(value, sFlexItem) {

        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            'div',
            { style: sFlexItem },
            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                'button',
                { className: 'btn btn-transparent center', style: btnCircle, onClick: this.handleEnter.bind(this, value) },
                value
            )
        );
    };

    FlexKeypad.prototype.render = function render() {

        if (this.props.open === false) return null;else {

            var s = this.GetSize();
            var sFlexItem = flexItem(s.btnHeight, s.btnWidth);
            var iFlexItem = flexItem(s.btnHeight * .50, s.btnWidth);

            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                'div',
                { className: 'backdrop', style: GetBackdropStyle() },
                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                    'div',
                    { style: SetModalStyle(this.props.width * s.width, this.props.height * s.height) },
                    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                        'div',
                        { style: flexContainer('flex', 'center', cColors.crBackground) },
                        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                            'div',
                            { style: iFlexItem },
                            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('input', { id: 'numValue', style: textInput, value: this.state.numValue })
                        )
                    ),
                    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                        'div',
                        { style: flexContainer('flex', 'center', cColors.crBackground) },
                        this.GetInputItem(1, sFlexItem),
                        this.GetInputItem(2, sFlexItem),
                        this.GetInputItem(3, sFlexItem)
                    ),
                    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                        'div',
                        { style: flexContainer('flex', 'center', cColors.crBackground) },
                        this.GetInputItem(4, sFlexItem),
                        this.GetInputItem(5, sFlexItem),
                        this.GetInputItem(6, sFlexItem)
                    ),
                    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                        'div',
                        { style: flexContainer('flex', 'center', cColors.crBackground) },
                        this.GetInputItem(7, sFlexItem),
                        this.GetInputItem(8, sFlexItem),
                        this.GetInputItem(9, sFlexItem)
                    ),
                    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                        'div',
                        { style: flexContainer('flex', 'center', cColors.crBackground) },
                        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                            'div',
                            { style: sFlexItem },
                            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                                'button',
                                { className: 'btn btn-transparent center', style: btnCircle,
                                    onClick: this.closeModal.bind(this) },
                                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('span', { className: 'glyphicon glyphicon-ok' })
                            )
                        ),
                        this.GetInputItem(0, sFlexItem),
                        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                            'div',
                            { style: sFlexItem },
                            external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                                'button',
                                { className: 'btn btn-transparent center', style: btnCircle,
                                    onClick: this.handleBack.bind(this) },
                                external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
                            )
                        )
                    )
                )
            );
        }
    };

    return FlexKeypad;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
// CONCATENATED MODULE: ./src/SizeHOC.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function SizeHOC_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SizeHOC_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SizeHOC_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



//This function creates a high order component that will contain tranfer the state as to props to the wrapped component. 
//This function takes a component...
function withSizeUpdates(WrappedComponent) {
    // ...and returns another component...
    return function (_React$Component) {
        SizeHOC_inherits(_class, _React$Component);

        function _class(props) {
            SizeHOC_classCallCheck(this, _class);

            var _this = SizeHOC_possibleConstructorReturn(this, _React$Component.call(this, props));

            _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);

            _this.state = { width: '0', height: '0' };
            return _this;
        }

        _class.prototype.componentDidMount = function componentDidMount() {

            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
        };

        _class.prototype.componentWillUnmount = function componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
        };

        _class.prototype.updateWindowDimensions = function updateWindowDimensions() {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        };

        _class.prototype.render = function render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](WrappedComponent, _extends({ width: this.state.width, height: this.state.height }, this.props));
        };

        return _class;
    }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);
}
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_default; });
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FlexKeypadHOC = withSizeUpdates(FlexKeypad_FlexKeypad);

var src_default = function (_Component) {
  src_inherits(_default, _Component);

  function _default() {
    src_classCallCheck(this, _default);

    var _this = src_possibleConstructorReturn(this, _Component.call(this));

    _this.state = { open: false, value: 0 };
    return _this;
  }

  _default.prototype.SetState = function SetState(open, value) {

    this.setState({ open: open, value: value });
  };

  _default.prototype.OpenFlexKeypad = function OpenFlexKeypad() {
    this.SetState(true, 0);
  };

  _default.prototype.CloseFlexKeypad = function CloseFlexKeypad(value) {
    this.SetState(false, value);
  };

  _default.prototype.render = function render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'div',
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'h2',
        null,
        'Test Page for FlexKeypad'
      ),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(FlexKeypadHOC, { open: this.state.open, close: this.CloseFlexKeypad.bind(this) }),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'h1',
        null,
        'FlexKeypad value: ',
        this.state.value
      ),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'button',
        { onClick: this.OpenFlexKeypad.bind(this) },
        'Open Keypad'
      )
    );
  };

  return _default;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);



/***/ })
/******/ ])["default"];
});