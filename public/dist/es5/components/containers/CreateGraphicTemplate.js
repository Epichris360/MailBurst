"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var DangerAlert = _interopRequire(require("./DangerAlert"));

var _Css = require("./Css");

var backgroundShadow = _Css.backgroundShadow;
var input = _Css.input;
var v4 = require("uuid").v4;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var ent = _interopRequire(require("ent"));

var CreateGraphicTemplate = (function (Component) {
    function CreateGraphicTemplate(props) {
        _classCallCheck(this, CreateGraphicTemplate);

        _get(Object.getPrototypeOf(CreateGraphicTemplate.prototype), "constructor", this).call(this, props);
        this.state = {
            name: "", html: "", error: false, errorMessage: "", category: "private"
        };
    }

    _inherits(CreateGraphicTemplate, Component);

    _prototypeProperties(CreateGraphicTemplate, null, {
        submitGraphicTemplate: {
            value: function submitGraphicTemplate() {
                var _this = this;
                var _state = this.state;
                var name = _state.name;
                var html = _state.html;
                var category = _state.category;
                var user = this.props.user;
                var template = { name: name, html: ent.decode(html),
                    template_id: v4(), user_id: user.id, category: category };
                this.props.createTemplate(template).then(function (data) {
                    _this.props.history.push("/emails-list");
                    return;
                })["catch"](function (err) {
                    _this.setState({ error: true, errorMessage: err.message });
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
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12 col-sm-12 col-xs-12",
                                style: Object.assign({}, backgroundShadow, { marginTop: "35px" }) },
                            React.createElement(DangerAlert, { error: this.state.error, errorMessage: this.state.errorMessage }),
                            React.createElement(
                                "h1",
                                null,
                                "Create Any Email Template That You Want!!!:"
                            ),
                            React.createElement(
                                "span",
                                { style: { fontSize: "20px" } },
                                "For the best experience, create your templates the way you normally would and paste them here"
                            ),
                            React.createElement("hr", null),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Name of Template:"
                            ),
                            React.createElement("input", { type: "text", className: "12u",
                                placeholder: "Title for the Email!",
                                required: true,
                                style: input,
                                onChange: function (e) {
                                    return _this.setState({ name: e.target.value });
                                }
                            }),
                            React.createElement(
                                "label",
                                { htmlFor: "" },
                                "Body of Template:"
                            ),
                            React.createElement("textarea", { cols: "30", rows: "10", className: "12u",
                                required: true,
                                style: input,
                                placeholder: "Paste your HTML!!! All styling must be in a style tag or inline. no cdn's or anything else!",
                                onChange: function (e) {
                                    return _this.setState({ html: e.target.value });
                                }
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
                                { className: "btn btn-success",
                                    onClick: this.submitGraphicTemplate.bind(this)
                                },
                                "Submit!"
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

    return CreateGraphicTemplate;
})(Component);

var mapStateToProps = function (state) {
    var user = state.user;
    return {
        user: user
    };
};

var propsToState = function (dispatch) {
    return {
        createTemplate: function (params) {
            return dispatch(actions.createTemplate(params));
        }
    };
};

module.exports = connect(mapStateToProps, propsToState)(CreateGraphicTemplate);