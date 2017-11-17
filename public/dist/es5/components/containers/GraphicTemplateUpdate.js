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

var _Css = require("./Css");

var backgroundShadow = _Css.backgroundShadow;
var input = _Css.input;
var Loader = _interopRequire(require("./Loader"));

var DangerAlert = _interopRequire(require("./DangerAlert"));

var ent = _interopRequire(require("ent"));

var LoaderBar = _interopRequire(require("./LoaderBar"));

var GraphicTemplateUpdate = (function (Component) {
    function GraphicTemplateUpdate(props) {
        _classCallCheck(this, GraphicTemplateUpdate);

        _get(Object.getPrototypeOf(GraphicTemplateUpdate.prototype), "constructor", this).call(this, props);
        this.state = {
            template: null, loading: true, name: "", html: "",
            category: "", error: false, errorMessage: "", updating: false
        };
    }

    _inherits(GraphicTemplateUpdate, Component);

    _prototypeProperties(GraphicTemplateUpdate, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                var template = this.props.templates.filter(function (t) {
                    return t.id == _this.props.match.params.template_id;
                })[0];
                var name = template.name;
                var html = template.html;
                var category = template.category;
                this.setState({ name: name, html: html, category: category, template: template, loading: false });
                return;
            },
            writable: true,
            configurable: true
        },
        updateGraphicTemplate: {
            value: function updateGraphicTemplate() {
                var _this = this;
                this.setState({ updating: true });
                var _state = this.state;
                var name = _state.name;
                var html = _state.html;
                var category = _state.category;
                var template = _state.template;
                var updated = { name: name, html: ent.encode(html), category: category };
                this.props.updateTemplate(template, updated).then(function (data) {
                    console.log("data", data);
                    _this.props.history.push("/template/show/" + template.id);
                    return;
                })["catch"](function (err) {
                    _this.setState({ error: true, errorMessage: err.message, updating: false });
                    return;
                });
                return;
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
                                style: Object.assign({}, backgroundShadow, { marginTop: "30px" }) },
                            this.state.loading ? React.createElement(Loader, null) : React.createElement(
                                "div",
                                null,
                                React.createElement(DangerAlert, { error: this.state.error, errorMessage: this.state.errorMessage }),
                                React.createElement(
                                    "h1",
                                    null,
                                    "Update A Template!: "
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
                                    value: this.state.name,
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
                                    value: this.state.html,
                                    onChange: function (e) {
                                        return _this.setState({ html: e.target.value });
                                    }
                                }),
                                React.createElement("br", null),
                                this.props.user.role == "admin" ? React.createElement(
                                    "select",
                                    { className: "btn btn-default", value: this.state.category,
                                        onChange: function (e) {
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
                                this.state.updating ? React.createElement(LoaderBar, null) : React.createElement(
                                    "button",
                                    { className: "btn btn-success pull-right",
                                        onClick: this.updateGraphicTemplate.bind(this)
                                    },
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

    return GraphicTemplateUpdate;
})(Component);

var mapStateToProps = function (state) {
    var templates = state.templates;
    var user = state.user;
    return {
        templates: templates, user: user
    };
};

var propsToState = function (dispatch) {
    return {
        updateTemplate: function (orig, update) {
            return dispatch(actions.updateTemplate(orig, update));
        }
    };
};

module.exports = connect(mapStateToProps, propsToState)(GraphicTemplateUpdate);