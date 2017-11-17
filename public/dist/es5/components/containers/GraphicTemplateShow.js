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

var ent = _interopRequire(require("ent"));

var backgroundShadow = require("./Css").backgroundShadow;
var GraphicTemplateShow = (function (Component) {
    function GraphicTemplateShow(props) {
        _classCallCheck(this, GraphicTemplateShow);

        _get(Object.getPrototypeOf(GraphicTemplateShow.prototype), "constructor", this).call(this, props);
        this.state = {
            template: null, loading: true
        };
    }

    _inherits(GraphicTemplateShow, Component);

    _prototypeProperties(GraphicTemplateShow, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                //will have to change if srr
                var template = this.props.templates.filter(function (t) {
                    return t.template_id == _this.props.match.params.template_id;
                })[0];
                this.setState({ template: template, loading: false });
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
                            { className: "col-md-12 col-sm-12 col-xs-12", style: Object.assign({}, backgroundShadow, { marginTop: "35px" }) },
                            React.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.template.html } })
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return GraphicTemplateShow;
})(Component);

var mapStateToProps = function (state) {
    var templates = state.templates;
    return {
        templates: templates
    };
};

var propsToState = function (dispatch) {
    return {};
};

module.exports = connect(mapStateToProps, propsToState)(GraphicTemplateShow);