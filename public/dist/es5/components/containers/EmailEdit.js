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
var EmailEdit = (function (Component) {
    function EmailEdit(props) {
        _classCallCheck(this, EmailEdit);

        _get(Object.getPrototypeOf(EmailEdit.prototype), "constructor", this).call(this, props);
        this.state = {
            emailTemplateOrig: null, loading: true, emailTitle: "", emailBody: "", variablesComma: "",
            error: false, errorMessage: "", category: "private"
        };
    }

    _inherits(EmailEdit, Component);

    _prototypeProperties(EmailEdit, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                //will have to change if srr
                var email = this.props.emails.filter(function (e) {
                    return e.email_id == _this.props.match.params.email_id;
                })[0];
                var emailTitle = email.emailTitle;
                var emailBody = email.emailBody;
                var variablesComma = email.variablesComma;
                var category = email.category;
                this.setState({ emailTemplateOrig: email, emailTitle: emailTitle, emailBody: emailBody, variablesComma: variablesComma, category: category, loading: false });
            },
            writable: true,
            configurable: true
        },
        formatAndSendEmail: {
            value: function formatAndSendEmail() {
                var _this = this;
                this.setState({ loading: true });
                var _state = this.state;
                var emailTemplateOrig = _state.emailTemplateOrig;
                var emailTitle = _state.emailTitle;
                var emailBody = _state.emailBody;
                var variablesComma = _state.variablesComma;
                var category = _state.category;
                if (variablesComma.split(" ") > 1) {
                    this.setState({ error: true, errorMessage: "error! there was a space in your variables!" });
                    return;
                }
                if (this.checkVarsAndBody(emailBody, variablesComma)) {
                    console.log("something wrong");
                    this.setState({ error: true, errorMessage: "Amount of variables in email body and variables input dont match!" });
                    return;
                }
                if (emailTitle == "" && emailBody == "" && variablesComma == "") {
                    this.setState({ error: true, errorMessage: "Somethings Empty!" });
                    return;
                }
                //email_id: emailTemplateOrig.email_id,
                //user_id: emailTemplateOrig.email_id, user_email: emailTemplateOrig.user_email
                var emailTemplateUpdated = {
                    emailTitle: emailTitle, emailBody: emailBody, variablesComma: variablesComma, emailTitle: emailTitle };

                this.props.emailTemplateUpdate(emailTemplateOrig, emailTemplateUpdated).then(function (data) {
                    _this.props.history.push("/email/" + emailTemplateOrig.email_id);
                    return;
                })["catch"](function (err) {
                    console.log("err", err.message);
                    _this.setState({ error: true, errorMessage: err.message });
                    return;
                });

            },
            writable: true,
            configurable: true
        },
        checkVarsAndBody: {
            value: function checkVarsAndBody(emailBody, variablesComma) {
                var emailSplit = emailBody.split("*");
                var varSplit = variablesComma.split(",");
                var howManyVarsFound = 0;
                for (var x = 0; x < varSplit.length; x++) {
                    var indexNum = emailSplit.map(function (emailblock) {
                        return emailblock;
                    }).indexOf("" + varSplit[x]);
                    if (indexNum >= 0) {
                        howManyVarsFound++;
                    }
                }
                if (varSplit.length == howManyVarsFound) {
                    //falsifies the if statment from where the request comes from. so that the parent
                    //function can continue
                    return false;
                } else {
                    //validates the if statement and exists the parent function
                    return true;
                }
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                return React.createElement(
                    "div",
                    null,
                    this.state.loader ? React.createElement(Loader, null) : React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-12 col-sm-12 col-xs-12",
                                    style: Object.assign({}, backgroundShadow, { marginTop: "35px" }) },
                                React.createElement(DangerAlert, { error: this.state.error, errorMessage: this.state.errorMessage }),
                                React.createElement(
                                    "h1",
                                    null,
                                    React.createElement(
                                        "strong",
                                        null,
                                        "Update The Email Template!!!!:"
                                    )
                                ),
                                React.createElement("hr", null),
                                React.createElement(
                                    "label",
                                    { htmlFor: "" },
                                    "Title for the Email:"
                                ),
                                React.createElement("input", { type: "text", className: "12u",
                                    placeholder: "Title for the Email!",
                                    required: true,
                                    style: input,
                                    value: this.state.emailTitle,
                                    onChange: function (e) {
                                        return _this.setState({ emailTitle: e.target.value });
                                    }
                                }),
                                React.createElement("br", null),
                                React.createElement(
                                    "label",
                                    { htmlFor: "" },
                                    "Body for the Email:"
                                ),
                                React.createElement("textarea", { cols: "30", rows: "10", className: "12u",
                                    required: true,
                                    placeholder: "Format your *variables* like this!!, other than that write as you normally would. So lets say you want to add a customers *name* and maybe a discountcode *code*. you know to increase convesion or something",
                                    value: this.state.emailBody,
                                    style: input,
                                    onChange: function (e) {
                                        return _this.setState({ emailBody: e.target.value });
                                    }
                                }),
                                React.createElement("br", null),
                                React.createElement(
                                    "label",
                                    { htmlFor: "" },
                                    "Write your vars here. Remember that your varibles must be ",
                                    React.createElement(
                                        "b",
                                        null,
                                        "Identical"
                                    ),
                                    " to the ones in the body(uppercase, lowercase, camelcase etc). Seperate them by commas no spaces!:  "
                                ),
                                React.createElement("input", { type: "text", className: "12u",
                                    required: true,
                                    value: this.state.variablesComma,
                                    style: input,
                                    onChange: function (e) {
                                        return _this.setState({ variablesComma: e.target.value });
                                    },
                                    placeholder: "seperate your variables by commas"
                                }),
                                React.createElement("br", null),
                                this.props.user.role == "admin" ? React.createElement(
                                    "select",
                                    { className: "btn btn-default", value: this.state.category, onChange: function (e) {
                                            return _this.setState({ category: e.target.value });
                                        } },
                                    React.createElement(
                                        "option",
                                        { value: "public" },
                                        "Public"
                                    ),
                                    React.createElement(
                                        "option",
                                        { value: "private" },
                                        "Private"
                                    )
                                ) : null,
                                React.createElement(
                                    "button",
                                    { onClick: this.formatAndSendEmail.bind(this),
                                        className: "btn btn-success btn-lg pull-right" },
                                    "Update It!"
                                ),
                                React.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12",
                                    style: { height: "10px", marginTop: "15px", marginBottom: "15px" } })
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return EmailEdit;
})(Component);

var mapStatToProps = function (state) {
    var user = state.user;
    var emails = state.emails;
    return {
        user: user, emails: emails
    };
};

var propsToState = function (dispatch) {
    return {
        emailTemplateUpdate: function (emailTemplateOrig, emailTemplateUpdated) {
            return dispatch(actions.emailTemplateUpdate(emailTemplateOrig, emailTemplateUpdated));
        }
    };
};

module.exports = connect(mapStatToProps, propsToState)(EmailEdit);
/*make buttond disappear after clicking while waiting for response*/