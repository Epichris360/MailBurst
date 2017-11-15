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

var v4 = require("uuid").v4;
var SignUp = (function (Component) {
    function SignUp(props) {
        _classCallCheck(this, SignUp);

        _get(Object.getPrototypeOf(SignUp.prototype), "constructor", this).call(this, props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            email: "",
            error: false,
            errorMessage: "",
            passwordConfirm: ""
        };
    }

    _inherits(SignUp, Component);

    _prototypeProperties(SignUp, null, {
        newUser: {
            value: function newUser() {
                var _this = this;
                var _state = this.state;
                var firstName = _state.firstName;
                var lastName = _state.lastName;
                var username = _state.username;
                var password = _state.password;
                var email = _state.email;
                var passwordConfirm = _state.passwordConfirm;
                if (password !== passwordConfirm) {
                    this.setState({ error: true });
                    this.setState({ errorMessage: "Passwords Don't Match!" });
                    return;
                }
                var apiKey = v4().split("-").join("");
                var params = { firstName: firstName, lastName: lastName, username: username, password: password, email: email, apiKey: apiKey, role: "normal" };
                this.props.signUp(params).then(function (response) {
                    _this.setState({ error: false });
                    _this.setState({ errorMessage: "" });
                    _this.props.history.push("/");
                })["catch"](function (err) {
                    _this.setState({ error: false });
                    _this.setState({ errorMessage: "Please Check Your Info!" });
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
                    React.createElement(
                        "div",
                        { className: "row backgroundShadow" },
                        this.state.error ? React.createElement(
                            "div",
                            { className: "alert alert-danger" },
                            React.createElement(
                                "strong",
                                null,
                                "Danger!"
                            ),
                            " ",
                            this.state.errorMessage
                        ) : null,
                        React.createElement(
                            "div",
                            { className: "col-md-12 col-sm-12 col-xs-12 " },
                            React.createElement(
                                "h1",
                                null,
                                "Sign Up!"
                            ),
                            React.createElement("hr", null),
                            React.createElement("input", { className: "form-control",
                                type: "text",
                                placeholder: "User Name",
                                style: { background: "white" },
                                onChange: function (e) {
                                    return _this.setState({ username: e.target.value });
                                },
                                required: true
                            }),
                            " ",
                            React.createElement("br", null),
                            React.createElement("input", { className: "form-control",
                                type: "text",
                                placeholder: "First Name",
                                style: { background: "white" },
                                onChange: function (e) {
                                    return _this.setState({ firstName: e.target.value });
                                },
                                required: true
                            }),
                            " ",
                            React.createElement("br", null),
                            React.createElement("input", { className: "form-control",
                                type: "text",
                                placeholder: "Last Name",
                                style: { background: "white" },
                                onChange: function (e) {
                                    return _this.setState({ lastName: e.target.value });
                                },
                                required: true
                            }),
                            " ",
                            React.createElement("br", null),
                            React.createElement("input", { className: "form-control",
                                type: "text",
                                placeholder: "Email",
                                style: { background: "white" },
                                onChange: function (e) {
                                    return _this.setState({ email: e.target.value });
                                },
                                required: true
                            }),
                            React.createElement("br", null),
                            React.createElement("input", { className: "form-control",
                                type: "password",
                                placeholder: "Password",
                                style: { background: "white" },
                                onChange: function (e) {
                                    return _this.setState({ password: e.target.value });
                                },
                                required: true
                            }),
                            " ",
                            React.createElement("br", null),
                            React.createElement("input", { className: "form-control",
                                type: "password",
                                placeholder: "Password Confirm",
                                style: { background: "white" },
                                onChange: function (e) {
                                    return _this.setState({ passwordConfirm: e.target.value });
                                },
                                required: true
                            }),
                            React.createElement("br", null),
                            React.createElement(
                                "button",
                                {
                                    className: "btn btn-lg btn-success",
                                    onClick: this.newUser.bind(this)
                                },
                                "Sign Up!"
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return SignUp;
})(Component);

var dispatchToProps = function (dispatch) {
    return {
        signUp: function (params) {
            return dispatch(actions.addUser(params));
        }
    };
};

module.exports = connect(null, dispatchToProps)(SignUp);