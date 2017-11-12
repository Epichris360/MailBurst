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
var Loader = _interopRequire(require("./Loader"));

var _reactBootstrap = require("react-bootstrap");

var Tabs = _reactBootstrap.Tabs;
var Tab = _reactBootstrap.Tab;
var JsAxios = _interopRequire(require("./JsAxios"));

var JsSuperAgent = _interopRequire(require("./JsSuperAgent"));

var EmailTemplateShow = (function (Component) {
    function EmailTemplateShow(props) {
        _classCallCheck(this, EmailTemplateShow);

        _get(Object.getPrototypeOf(EmailTemplateShow.prototype), "constructor", this).call(this, props);
        this.state = {
            email: null, loading: true
        };
    }

    _inherits(EmailTemplateShow, Component);

    _prototypeProperties(EmailTemplateShow, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                //will have to change if srr
                var email = this.props.emails.filter(function (e) {
                    return e.email_id == _this.props.match.params.email_id;
                })[0];
                this.setState({ email: email, loading: false });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        this.state.loading ? React.createElement(Loader, null) : React.createElement(
                            "div",
                            { className: "col-md-12 col-sm-12 col-xs-12" },
                            React.createElement(
                                "h1",
                                null,
                                "Need Info on an Email Template?"
                            ),
                            React.createElement("hr", null),
                            React.createElement(
                                "h3",
                                null,
                                "Email Title: ",
                                this.state.email.emailTitle
                            ),
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "h3",
                                    null,
                                    "Email Body:"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-10 col-sm-12 col-xs-12", style: { padding: "2px", backgroundColor: "#cecccc" } },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-12 col-sm-12 col-xs-12", style: { backgroundColor: "white", padding: "10px" } },
                                        this.state.email.emailBody.split("\n").map(function (item, key) {
                                            return React.createElement(
                                                "span",
                                                { style: { fontSize: "15px" }, key: key },
                                                item,
                                                React.createElement("br", null)
                                            );
                                        })
                                    )
                                )
                            ),
                            React.createElement("br", null),
                            " ",
                            React.createElement("br", null),
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "h3",
                                    null,
                                    "Variables:"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-10 col-sm-12 col-xs-12", style: { padding: "2px", backgroundColor: "#cecccc" } },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-12 col-sm-12 col-xs-12", style: { backgroundColor: "white", padding: "10px" } },
                                        this.state.email.variablesComma
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-10 col-sm-12 col-xs-12" },
                                React.createElement("hr", null),
                                React.createElement(
                                    "h3",
                                    null,
                                    "Examples of calling the Api!"
                                ),
                                React.createElement(
                                    "span",
                                    null,
                                    "Note: examples only available in Javascript, more coming soon!"
                                ),
                                React.createElement("br", null),
                                React.createElement(
                                    "span",
                                    null,
                                    "NO API KEY NECESSARY FOR NOW!"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-10 col-sm-12 col-xs-12" },
                                React.createElement(
                                    Tabs,
                                    { defaultActiveKey: 2, id: "uncontrolled-tab-example" },
                                    React.createElement(
                                        Tab,
                                        { eventKey: 1, title: "JS-Axios" },
                                        React.createElement(JsAxios, { email: this.state.email })
                                    ),
                                    React.createElement(
                                        Tab,
                                        { eventKey: 2, title: "JS-SuperAgent" },
                                        React.createElement(JsSuperAgent, { email: this.state.email })
                                    )
                                )
                            ),
                            React.createElement("div", { className: "col-md-12 col-sm-12 col-xs-12",
                                style: { height: "10px", marginTop: "15px", marginBottom: "15px" } })
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return EmailTemplateShow;
})(Component);

var mapStateToProps = function (state) {
    var emails = state.emails;
    return {
        emails: emails
    };
};

module.exports = connect(mapStateToProps, null)(EmailTemplateShow);