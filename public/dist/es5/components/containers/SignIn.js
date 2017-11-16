"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Loader = _interopRequire(require("./Loader"));

var DangerAlert = _interopRequire(require("./DangerAlert"));

var _Css = require("./Css");

var backgroundShadow = _Css.backgroundShadow;
var input = _Css.input;
var SignIn = (function (Component) {
    function SignIn(props) {
        _classCallCheck(this, SignIn);

        _get(Object.getPrototypeOf(SignIn.prototype), "constructor", this).call(this, props);
        this.state = {
            username: "",
            password: "",
            error: false,
            errorMessage: "",
            submitted: false
        };
    }

    _inherits(SignIn, Component);

    _prototypeProperties(SignIn, null, {
        loginUser: {
            value: function loginUser() {
                var _this = this;
                var _state = this.state;
                var username = _state.username;
                var password = _state.password;
                this.setState({ submitted: true });
                this.props.signIn({ username: username, password: password }).then(function (response) {
                    _this.props.history.push("/emails-list");
                    return;
                })["catch"](function (err) {
                    _this.setState({ error: true, submitted: false, errorMessage: err.message });
                    return;
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement("div", { style: { height: "40px" } }),
                    React.createElement(
                        "div",
                        { className: "row" },
                        this.state.submitted ? React.createElement(Loader, null) : React.createElement(
                            "div",
                            { className: "col-xs-12 col-sm-12 col-md-10", style: backgroundShadow },
                            React.createElement(DangerAlert, { error: this.state.error, errorMessage: this.state.errorMessage }),
                            React.createElement(
                                "h1",
                                { className: "topmargin-sm nobottommargin" },
                                React.createElement(
                                    "strong",
                                    null,
                                    "Sign In!"
                                )
                            ),
                            React.createElement("hr", null),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Username:"
                            ),
                            React.createElement("input", { className: "12u",
                                type: "text",
                                placeholder: "username",
                                style: input,
                                onChange: function (e) {
                                    return _this.setState({ username: e.target.value });
                                }
                            }),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Password:"
                            ),
                            React.createElement("input", { className: "12u",
                                type: "password",
                                placeholder: "password",
                                style: input,
                                onChange: function (e) {
                                    return _this.setState({ password: e.target.value });
                                }
                            }),
                            React.createElement("br", null),
                            React.createElement(
                                "button",
                                {
                                    className: "btn btn-lg btn-success col-xs-12",
                                    onClick: this.loginUser.bind(this)
                                },
                                "Submit"
                            ),
                            React.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12", style: { height: "50px" } })
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return SignIn;
})(Component);

var dispatchToProps = function (dispatch) {
    return {
        signIn: function (credentials) {
            return dispatch(actions.loginUser(credentials));
        },
        currentUser: function () {
            return dispatch(actions.currentUser());
        },
        allUsers: function () {
            return dispatch(actions.fetchUsers(null));
        }
    };
};



module.exports = connect(null, dispatchToProps)(SignIn);