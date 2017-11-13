"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var NewNavBar = (function (Component) {
    function NewNavBar() {
        _classCallCheck(this, NewNavBar);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(NewNavBar, Component);

    _prototypeProperties(NewNavBar, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "header",
                    { id: "header", "class": "alt" },
                    React.createElement(
                        "h1",
                        { id: "logo" },
                        React.createElement(
                            "a",
                            { href: "index.html" },
                            "Twenty ",
                            React.createElement(
                                "span",
                                null,
                                "by HTML5 UP"
                            )
                        )
                    ),
                    React.createElement(
                        "nav",
                        { id: "nav" },
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                { "class": "current" },
                                React.createElement(
                                    "a",
                                    { href: "index.html" },
                                    "Welcome"
                                )
                            ),
                            React.createElement(
                                "li",
                                { "class": "submenu" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Layouts"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "left-sidebar.html" },
                                            "Left Sidebar"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "right-sidebar.html" },
                                            "Right Sidebar"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "no-sidebar.html" },
                                            "No Sidebar"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "contact.html" },
                                            "Contact"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "submenu" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "Submenu"
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Dolore Sed"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Consequat"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Lorem Magna"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Sed Magna"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Ipsum Nisl"
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#", "class": "button special" },
                                    "Sign Up"
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

    return NewNavBar;
})(Component);

module.exports = NewNavBar;