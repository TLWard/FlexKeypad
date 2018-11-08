var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';

//This function creates a high order component that will contain tranfer the state as to props to the wrapped component. 
//This function takes a component...
export function withSizeUpdates(WrappedComponent) {
    // ...and returns another component...
    return function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

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
            return React.createElement(WrappedComponent, _extends({ width: this.state.width, height: this.state.height }, this.props));
        };

        return _class;
    }(React.Component);
}