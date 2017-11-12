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

var DangerAlert = _interopRequire(require("./DangerAlert"));

var v4 = require("uuid").v4;
var AutomatedEmailCreator = (function (Component) {
    function AutomatedEmailCreator(props) {
        _classCallCheck(this, AutomatedEmailCreator);

        _get(Object.getPrototypeOf(AutomatedEmailCreator.prototype), "constructor", this).call(this, props);
        this.state = {
            emailTitle: "", emailBody: "", variablesComma: "", turboApiKey: "",
            error: false, errorMessage: "", category: "private"
        };
    }

    _inherits(AutomatedEmailCreator, Component);

    _prototypeProperties(AutomatedEmailCreator, null, {
        emailprototype: {
            value: function emailprototype() {},
            writable: true,
            configurable: true
        },
        formatAndSendEmail: {
            value: function formatAndSendEmail() {
                var _state = this.state;
                var emailTitle = _state.emailTitle;
                var emailBody = _state.emailBody;
                var variablesComma = _state.variablesComma;
                var turboApiKey = _state.turboApiKey;
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
                if (emailTitle == "" && emailBody == "" && variablesComma == "" && turboApiKey == "") {
                    this.setState({ error: true, errorMessage: "Somethings Empty!" });
                    return;
                }
                var emailTemplate = {
                    email_id: v4(),
                    emailTitle: emailTitle, emailBody: emailBody, variablesComma: variablesComma, turboApiKey: turboApiKey,
                    user_id: this.props.user.id, user_email: this.props.user.email, category: category
                };
                this.props.emailTemplateCreator(emailTemplate).then(function (data) {
                    console.log("email: just created", data);
                    return;
                })["catch"](function (err) {
                    console.log("err", err.message);
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
                    }).indexOf("$" + varSplit[x]);
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
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12 col-sm-12 col-xs-12" },
                            React.createElement(DangerAlert, { error: this.state.error, errorMessage: this.state.errorMessage }),
                            React.createElement(
                                "h1",
                                null,
                                "Email for Customers Who Signed Up But Didn't Convert:"
                            ),
                            React.createElement("hr", null),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Title for the Email:"
                            ),
                            React.createElement("input", { type: "text", className: "form-control",
                                placeholder: "Title for the Email!",
                                required: true,
                                onChange: function (e) {
                                    return _this.setState({ emailTitle: e.target.value });
                                }
                            }),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Turbo API Key:"
                            ),
                            React.createElement("input", { type: "text", className: "form-control",
                                required: true,
                                onChange: function (e) {
                                    return _this.setState({ turboApiKey: e.target.value });
                                },
                                placeholder: "Turbo API key please"
                            }),
                            React.createElement("br", null),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Body for the Email:"
                            ),
                            React.createElement("textarea", { cols: "30", rows: "10", className: "form-control",
                                required: true,
                                placeholder: "So format your *$variables* like this!!. So lets say you want to add a customers *$name* and maybe a discountcode *$code*. you know to increase convesion or something",
                                onChange: function (e) {
                                    return _this.setState({ emailBody: e.target.value });
                                }
                            }),
                            React.createElement("br", null),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Write your vars here. Remember that your varibles ",
                                React.createElement(
                                    "b",
                                    null,
                                    "Identical"
                                ),
                                " to the ones in the body. Seperate them by commas no spaces!:  "
                            ),
                            React.createElement("input", { type: "text", className: "form-control",
                                required: true,
                                onChange: function (e) {
                                    return _this.setState({ variablesComma: e.target.value });
                                },
                                placeholder: "seperate your variables by commas"
                            }),
                            React.createElement("br", null),
                            this.props.user.role == "admin" ? React.createElement(
                                "select",
                                { className: "btn btn-default", onChange: function (e) {
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
                                "Create It!"
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return AutomatedEmailCreator;
})(Component);

var mapStateToProps = function (state) {
    var user = state.user;
    return {
        user: user
    };
};
var propsToState = function (dispatch) {
    return {
        emailTemplateCreator: function (params) {
            return dispatch(actions.emailTemplateCreator(params));
        }
    };
};
module.exports = connect(mapStateToProps, propsToState)(AutomatedEmailCreator);
/*
    format will now be *$name*
    have person add standard names customerName, companyName, promoCode
    split array by " ", then replace each of these using a loop. < should be provided by 
    person in the get request >. then email is sent.
    promocode can be persons `${customerName}-${rand-alphanumberic}` its done.
    need two cronjob/ vectors
    - one for sending emails everyday
    -another for scrapping 2 day old promocodes
    -another for removing promocodes after their use // should be done by person?
    -another for generating a promocode // could generate a standar promocode collection
     these could be grouped together
    https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
*/