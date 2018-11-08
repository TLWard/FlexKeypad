'use strict';

exports.__esModule = true;
exports.FlexKeypad = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexKeypadStyle = require('./FlexKeypadStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexKeypad = exports.FlexKeypad = function (_React$Component) {
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

        return _react2.default.createElement(
            'div',
            { style: sFlexItem },
            _react2.default.createElement(
                'button',
                { className: 'btn btn-transparent center', style: _FlexKeypadStyle.btnCircle, onClick: this.handleEnter.bind(this, value) },
                value
            )
        );
    };

    FlexKeypad.prototype.render = function render() {

        if (this.props.open === false) return null;else {

            var s = this.GetSize();
            var sFlexItem = (0, _FlexKeypadStyle.flexItem)(s.btnHeight, s.btnWidth);
            var iFlexItem = (0, _FlexKeypadStyle.flexItem)(s.btnHeight * .50, s.btnWidth);

            return _react2.default.createElement(
                'div',
                { className: 'backdrop', style: (0, _FlexKeypadStyle.GetBackdropStyle)() },
                _react2.default.createElement(
                    'div',
                    { style: (0, _FlexKeypadStyle.SetModalStyle)(this.props.width * s.width, this.props.height * s.height) },
                    _react2.default.createElement(
                        'div',
                        { style: (0, _FlexKeypadStyle.flexContainer)('flex', 'center', _FlexKeypadStyle.cColors.crBackground) },
                        _react2.default.createElement(
                            'div',
                            { style: iFlexItem },
                            _react2.default.createElement('input', { id: 'numValue', style: _FlexKeypadStyle.textInput, value: this.state.numValue })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: (0, _FlexKeypadStyle.flexContainer)('flex', 'center', _FlexKeypadStyle.cColors.crBackground) },
                        this.GetInputItem(1, sFlexItem),
                        this.GetInputItem(2, sFlexItem),
                        this.GetInputItem(3, sFlexItem)
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: (0, _FlexKeypadStyle.flexContainer)('flex', 'center', _FlexKeypadStyle.cColors.crBackground) },
                        this.GetInputItem(4, sFlexItem),
                        this.GetInputItem(5, sFlexItem),
                        this.GetInputItem(6, sFlexItem)
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: (0, _FlexKeypadStyle.flexContainer)('flex', 'center', _FlexKeypadStyle.cColors.crBackground) },
                        this.GetInputItem(7, sFlexItem),
                        this.GetInputItem(8, sFlexItem),
                        this.GetInputItem(9, sFlexItem)
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: (0, _FlexKeypadStyle.flexContainer)('flex', 'center', _FlexKeypadStyle.cColors.crBackground) },
                        _react2.default.createElement(
                            'div',
                            { style: sFlexItem },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-transparent center', style: _FlexKeypadStyle.btnCircle,
                                    onClick: this.closeModal.bind(this) },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok' })
                            )
                        ),
                        this.GetInputItem(0, sFlexItem),
                        _react2.default.createElement(
                            'div',
                            { style: sFlexItem },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-transparent center', style: _FlexKeypadStyle.btnCircle,
                                    onClick: this.handleBack.bind(this) },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
                            )
                        )
                    )
                )
            );
        }
    };

    return FlexKeypad;
}(_react2.default.Component);