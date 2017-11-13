"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var MainPage = (function (Component) {
    function MainPage() {
        _classCallCheck(this, MainPage);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(MainPage, Component);

    _prototypeProperties(MainPage, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { style: bgimg },
                        React.createElement(
                            "div",
                            null,
                            React.createElement("img", { style: img, src: "https://images.unsplash.com/photo-1504871632430-520be05a7c1d?auto=format&fit=crop&w=1351&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D", alt: "" })
                        ),
                        React.createElement(
                            "div",
                            { style: caption },
                            React.createElement(
                                "div",
                                { className: "col-md-10 col-sm-10 col-xs-12 mx-auto" },
                                React.createElement(
                                    "div",
                                    { className: "col-lg-10 mx-auto" },
                                    React.createElement(
                                        "h1",
                                        null,
                                        React.createElement(
                                            "strong",
                                            { style: { color: "white", outline: "black" } },
                                            "MailMeteor"
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return MainPage;
})(Component);

var bgimg = {

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    marginTop: "-20px"
};

var caption = {
    position: "absolute",
    left: 0,
    top: "20%",
    width: "100%",
    textAlign: "center",
    color: "#000"
};

var border = {
    backgroundColor: "#111",
    color: "#fff",
    padding: "18px",
    fontSize: "25px",
    letterSpacing: "10px",
    opacity: ".70",
    marginTop: "20px"
};

var img = {
    maxWidth: "100%", height: "auto"
};

module.exports = MainPage;