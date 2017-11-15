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

var _reactBootstrap = require("react-bootstrap");

var Navbar = _reactBootstrap.Navbar;
var Nav = _reactBootstrap.Nav;
var NavItem = _reactBootstrap.NavItem;
var NavDropdown = _reactBootstrap.NavDropdown;
var MenuItem = _reactBootstrap.MenuItem;
var LinkContainer = require("react-router-bootstrap").LinkContainer;
var withRouter = require("react-router").withRouter;
var NavBar = (function (Component) {
    function NavBar(props) {
        _classCallCheck(this, NavBar);

        _get(Object.getPrototypeOf(NavBar.prototype), "constructor", this).call(this, props);
    }

    _inherits(NavBar, Component);

    _prototypeProperties(NavBar, null, {
        logout: {
            value: function logout() {
                var _this = this;
                this.props.logout().then(function (date) {
                    _this.props.history.push("/");
                    return;
                })["catch"](function (err) {
                    console.log("err", err.message);
                    return;
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        Navbar,
                        { inverse: true, collapseOnSelect: true },
                        React.createElement(
                            Navbar.Header,
                            null,
                            React.createElement(
                                Navbar.Brand,
                                null,
                                React.createElement(
                                    Link,
                                    { className: "navbar-brand", to: "/" },
                                    React.createElement(
                                        "strong",
                                        null,
                                        "MailMeteor"
                                    )
                                )
                            ),
                            React.createElement(Navbar.Toggle, null)
                        ),
                        React.createElement(
                            Navbar.Collapse,
                            null,
                            this.props.user.id != "" ? React.createElement(
                                Nav,
                                null,
                                React.createElement(
                                    NavDropdown,
                                    { eventKey: 1, title: "Emails Options", id: "basic-nav-dropdown" },
                                    React.createElement(
                                        LinkContainer,
                                        { to: "/email-creator" },
                                        React.createElement(
                                            MenuItem,
                                            { eventKey: 1.1 },
                                            "Email Creator"
                                        )
                                    ),
                                    React.createElement(
                                        LinkContainer,
                                        { to: "/emails-list" },
                                        React.createElement(
                                            MenuItem,
                                            { eventKey: 1.2 },
                                            "Email List"
                                        )
                                    )
                                )
                            ) : null,
                            this.props.user.id == "" ? React.createElement(
                                Nav,
                                { pullRight: true },
                                React.createElement(
                                    LinkContainer,
                                    { to: "/signin" },
                                    React.createElement(
                                        NavItem,
                                        { eventKey: 1 },
                                        "Sign In"
                                    )
                                ),
                                React.createElement(
                                    LinkContainer,
                                    { to: "/signup" },
                                    React.createElement(
                                        NavItem,
                                        { eventKey: 2 },
                                        "Sign Up"
                                    )
                                )
                            ) : React.createElement(
                                Nav,
                                { pullRight: true },
                                React.createElement(
                                    NavItem,
                                    { eventKey: 1, onClick: this.logout.bind(this) },
                                    "Logout"
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

    return NavBar;
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

module.exports = connect(mapStateToProps, dispatchToProps)(withRouter(NavBar));