'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexKeypad = require('./FlexKeypad');

var _SizeHOC = require('./SizeHOC');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexKeypadHOC = (0, _SizeHOC.withSizeUpdates)(_FlexKeypad.FlexKeypad);

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

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
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Test Page for FlexKeypad'
      ),
      _react2.default.createElement(FlexKeypadHOC, { open: this.state.open, close: this.CloseFlexKeypad.bind(this) }),
      _react2.default.createElement(
        'h1',
        null,
        'FlexKeypad value: ',
        this.state.value
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.OpenFlexKeypad.bind(this) },
        'Open Keypad'
      )
    );
  };

  return _default;
}(_react.Component);

exports.default = _default;
module.exports = exports['default'];