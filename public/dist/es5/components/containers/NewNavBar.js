"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router-dom").Link;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var LinkContainer = require("react-router-bootstrap").LinkContainer;
var withRouter = require("react-router").withRouter;
var _reactBootstrap = require("react-bootstrap");

var Navbar = _reactBootstrap.Navbar;
var Nav = _reactBootstrap.Nav;
var NavItem = _reactBootstrap.NavItem;
var NavDropdown = _reactBootstrap.NavDropdown;
var MenuItem = _reactBootstrap.MenuItem;
var NewNavBar = (function (Component) {
    function NewNavBar(props) {
        _classCallCheck(this, NewNavBar);

        _get(Object.getPrototypeOf(NewNavBar.prototype), "constructor", this).call(this, props);
    }

    _inherits(NewNavBar, Component);

    _prototypeProperties(NewNavBar, null, {
        logout: {
            value: function logout() {
                var _this = this;
                this.props.logout().then(function (date) {
                    _this.props.history.push("/");
                })["catch"](function (err) {
                    console.log("err", err.message);
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "header",
                    { id: "header" },
                    React.createElement(
                        "h1",
                        { id: "logo" },
                        React.createElement(
                            Link,
                            { className: "navbar-brand", to: "/" },
                            "MailMeteor"
                        )
                    ),
                    React.createElement(
                        "nav",
                        { id: "nav" },
                        React.createElement(
                            "ul",
                            null,
                            this.props.user.id == "" ? React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    Link,
                                    { to: "/signin" },
                                    "Sign In"
                                )
                            ) : null,
                            this.props.user.id == "" ? React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    Link,
                                    { to: "/signup" },
                                    "Sign Up"
                                )
                            ) : null,
                            this.props.user.id != "" ? React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    Link,
                                    { onClick: this.logout.bind(this), to: "" },
                                    "Logout"
                                )
                            ) : null,
                            React.createElement(
                                "li",
                                { className: "submenu" },
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
                                        { className: "submenu" },
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
                                    { href: "#", className: "button special" },
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

var mapStateToProps = function (state) {
    var user = state.user;
    return {
        user: user
    };
};

var dispatchToProps = function (dispatch) {
    return {
        logout: function () {
            return dispatch(actions.logoutUser());
        }
    };
};

module.exports = connect(mapStateToProps, dispatchToProps)(withRouter(NewNavBar));