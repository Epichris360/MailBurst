"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Loader = (function (Component) {
    function Loader() {
        _classCallCheck(this, Loader);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Loader, Component);

    _prototypeProperties(Loader, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-7 col-md-offset-5 col-sm-6 col-sm-offset-4 col-xs-10 col-xs-offset-2" },
                            React.createElement("div", { className: "loader", style: { width: "240px", height: "240px" } })
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Loader;
})(Component);

module.exports = Loader;