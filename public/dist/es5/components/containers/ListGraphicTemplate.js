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

var Link = require("react-router-dom").Link;
var Loader = _interopRequire(require("./Loader"));

var backgroundShadow = require("./Css").backgroundShadow;
var ListGraphicTemplate = (function (Component) {
    function ListGraphicTemplate(props) {
        _classCallCheck(this, ListGraphicTemplate);

        _get(Object.getPrototypeOf(ListGraphicTemplate.prototype), "constructor", this).call(this, props);
        this.state = {
            tempArr: [], "private": true, showModal: false, tempToShowInModal: null, loading: true
        };
    }

    _inherits(ListGraphicTemplate, Component);

    _prototypeProperties(ListGraphicTemplate, null, {
        componentDidMount: {
            value: function componentDidMount() {
                if (this.props.templates.length > 0) {
                    var filtered = this.props.templates.filter(function (temp) {
                        return temp.category == "private";
                    });
                    this.setState({ tempArr: filtered, loading: false });
                    return;
                }
            },
            writable: true,
            configurable: true
        },
        "switch": {
            value: function _switch(which) {
                //switches between the categories of templates
                var filtered = this.props.templates.filter(function (t) {
                    return t.category == which;
                });
                //false == public and true == private
                if (this.state["private"]) {
                    //was true as in switching from public to private
                    this.setState({ tempArr: filtered, "private": false });
                } else {
                    //was false as in now switching from private to public
                    this.setState({ tempArr: filtered, "private": true });
                }
                return;
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "container" },
                    this.state.loading ? React.createElement(Loader, null) : React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "div",
                                { className: "col-md-12 col-sm-12 col-xs-12",
                                    style: Object.assign({}, { padding: "10px" }, backgroundShadow) },
                                React.createElement(
                                    "h2",
                                    { className: "col-md-6 col-sm-6 col-xs-10" },
                                    "My Templates List:",
                                    this.state["private"] ? "Private" : "Public!"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-6 col-sm-6 col-xs-12",
                                        style: { padding: "5px", borderStyle: "solid", borderWidth: "2px" } },
                                    React.createElement(
                                        "span",
                                        null,
                                        "Api Key: ",
                                        this.props.user.apiKey,
                                        " "
                                    )
                                )
                            )
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "div",
                            { className: "col-md-12 col-sm-12 col-xs-12",
                                style: Object.assign({}, { marginBottom: "20px", padding: "5px",
                                    marginTop: "-15px" }, backgroundShadow) },
                            this.state["private"] ? React.createElement(
                                "button",
                                { className: "btn btn-success col-md-12 col-sm-12 col-xs-12",
                                    onClick: this["switch"].bind(this, "public")
                                },
                                "Switch to Public Graphic Templates"
                            ) : React.createElement(
                                "button",
                                { className: "btn btn-success col-md-12 col-sm-12 col-xs-12",
                                    onClick: this["switch"].bind(this, "private")
                                },
                                "Switch to Private Graphic Templates"
                            )
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "ul",
                            { className: "list-group col-md-12 col-sm-12 col-xs-12",
                                style: { marginTop: "-65px" } },
                            this.state.tempArr.map(function (temp, i) {
                                return React.createElement(
                                    "li",
                                    { className: "list-group-item col-md-12 col-sm-12 col-xs-12",
                                        key: i, style: backgroundShadow },
                                    React.createElement(
                                        "b",
                                        null,
                                        "Template Name:"
                                    ),
                                    " " + temp.name.substr(0, 30) + "...",
                                    React.createElement(
                                        Link,
                                        { className: "btn btn-success btn-xs pull-right", to: "/template/show/" + temp.template_id },
                                        "Docs And See"
                                    ),
                                    temp.category == "private" ? React.createElement(
                                        Link,
                                        { style: { marginRight: "10px" }, className: "btn btn-default btn-xs pull-right",
                                            to: "/template/" + temp.id + "/edit" },
                                        "Update It!!"
                                    ) : null
                                );
                            })
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return ListGraphicTemplate;
})(Component);

var mapStateToProps = function (state) {
    var user = state.user;
    var templates = state.templates;
    return {
        user: user, templates: templates
    };
};

var propsToState = function (dispatch) {
    return {
        getTemplates: function (params) {
            return dispatch(actions.getTemplates(params));
        }
    };
};

module.exports = connect(mapStateToProps, propsToState)(ListGraphicTemplate);