"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var JsAxios = (function (Component) {
    function JsAxios() {
        _classCallCheck(this, JsAxios);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(JsAxios, Component);

    _prototypeProperties(JsAxios, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row", style: { marginTop: "20px" } },
                        React.createElement(
                            "div",
                            { className: "col-md-5 col-sm-5 col-xs-12", style: { padding: "10px" } },
                            "const query = {",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "'email_id': '" + this.props.email.email_id + ",'",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "'to': 'awesomecustomer@something.com',",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "'from': 'unpaidintern@bigstartup.com',",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "'apiKey': '" + this.props.apiKey + "',",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "'temp_id': '" + this.props.template_id + "',",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "'fromName': 'unpaidintern',",
                            " ",
                            React.createElement("br", null),
                            this.props.email.variablesComma.split(",").map(function (v, i) {
                                return React.createElement(
                                    "div",
                                    { key: i },
                                    React.createElement(
                                        "span",
                                        null,
                                        "  ",
                                        "'" + v + "': 'somevalue',"
                                    ),
                                    React.createElement("br", null)
                                );
                            }),
                            "}",
                            " ",
                            React.createElement("br", null),
                            " ",
                            React.createElement("br", null),
                            "axios.get('/https://production.turbo360-vector.com/mmvectors-qldabj/sendemail', {",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "params: {query}",
                            " ",
                            React.createElement("br", null),
                            "})",
                            " ",
                            React.createElement("br", null),
                            ".then(function (response) {",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "//Want some coffee?",
                            "  ",
                            "console.log(response);",
                            " ",
                            React.createElement("br", null),
                            "})",
                            " ",
                            React.createElement("br", null),
                            ".catch(function (error) {",
                            " ",
                            React.createElement("br", null),
                            "  ",
                            "console.log(error);",
                            " ",
                            React.createElement("br", null),
                            "});",
                            " ",
                            React.createElement("br", null)
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-5 col-sm-5 col-xs-12", style: { padding: "10px" } },
                            React.createElement(
                                "span",
                                null,
                                "Just hit the api filling in the required fields, ie: to,from, email_id etc"
                            ),
                            " ",
                            React.createElement("br", null),
                            React.createElement(
                                "span",
                                null,
                                "And have the Email generated and sent. Set a cronjob on your end to execute this"
                            ),
                            " ",
                            React.createElement("br", null),
                            React.createElement(
                                "span",
                                null,
                                "When needed, or get an intern to do it. Note: Intern's run on Hope and Coffee."
                            ),
                            " ",
                            React.createElement("br", null),
                            React.createElement(
                                "span",
                                null,
                                "You must fill in all the variables besides ApiKey and email_id"
                            ),
                            " ",
                            React.createElement("br", null)
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return JsAxios;
})(Component);

module.exports = JsAxios;