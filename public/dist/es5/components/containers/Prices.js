"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router-dom").Link;
var Prices = (function (Component) {
    function Prices() {
        _classCallCheck(this, Prices);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Prices, Component);

    _prototypeProperties(Prices, null, {
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
                            { className: "col-md-12 col-sm-12 col-xs-12" },
                            React.createElement(
                                "h2",
                                { style: { textAlign: "center" } },
                                "Amazing Prices for Amazing People!"
                            ),
                            React.createElement(
                                "p",
                                { style: { textAlign: "center" } },
                                "Start Free And Move From There!"
                            ),
                            React.createElement(
                                "div",
                                { className: "columns" },
                                React.createElement(
                                    "ul",
                                    { className: "price" },
                                    React.createElement(
                                        "li",
                                        { className: "header", style: { backgroundColor: "#8eb3e2" } },
                                        "Free"
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "grey" },
                                        "Don't Pick This One"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "1000 Free Emails A Month"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Email Support"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        " "
                                    ),
                                    React.createElement("li", null),
                                    React.createElement(
                                        "li",
                                        { className: "grey" },
                                        React.createElement(
                                            Link,
                                            { to: "/signup", style: { margin: "-20px" }, className: "button special" },
                                            "Sign Up"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "columns" },
                                React.createElement(
                                    "ul",
                                    { className: "price" },
                                    React.createElement(
                                        "li",
                                        { className: "header", style: { backgroundColor: "#4CAF50" } },
                                        "Pro"
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "grey" },
                                        "$ 9 / Month"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Up to 30.000 Emails A Month!"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Slack Channel Support"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Email Support"
                                    ),
                                    React.createElement("li", null),
                                    React.createElement(
                                        "li",
                                        { className: "grey" },
                                        React.createElement(
                                            Link,
                                            { to: "/signup", style: { margin: "-20px" }, className: "button special" },
                                            "Sign Up"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "columns" },
                                React.createElement(
                                    "ul",
                                    { className: "price" },
                                    React.createElement(
                                        "li",
                                        { className: "header", style: { backgroundColor: "#e05138" } },
                                        "Premium"
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "grey" },
                                        "$ 0 / Month"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Up to 200.000 Emails a Month"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Slack Channel Support"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Email Support"
                                    ),
                                    React.createElement("li", null),
                                    React.createElement(
                                        "li",
                                        { className: "grey" },
                                        React.createElement(
                                            Link,
                                            { to: "/signup", style: { margin: "-20px" }, className: "button special" },
                                            "Sign Up"
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Prices;
})(Component);

module.exports = Prices;