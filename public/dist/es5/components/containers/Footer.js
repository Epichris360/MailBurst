"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Footer = (function (Component) {
				function Footer() {
								_classCallCheck(this, Footer);

								if (Component != null) {
												Component.apply(this, arguments);
								}
				}

				_inherits(Footer, Component);

				_prototypeProperties(Footer, null, {
								render: {
												value: function render() {
																return React.createElement(
																				"div",
																				null,
																				React.createElement(
																								"footer",
																								{ id: "footer" },
																								React.createElement(
																												"ul",
																												{ className: "icons" },
																												React.createElement(
																																"li",
																																null,
																																React.createElement(
																																				"a",
																																				{ href: "#", className: "icon circle fa-twitter" },
																																				React.createElement(
																																								"span",
																																								{ className: "label" },
																																								"Twitter"
																																				)
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																React.createElement(
																																				"a",
																																				{ href: "#", className: "icon circle fa-facebook" },
																																				React.createElement(
																																								"span",
																																								{ className: "label" },
																																								"Facebook"
																																				)
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																React.createElement(
																																				"a",
																																				{ href: "#", className: "icon circle fa-google-plus" },
																																				React.createElement(
																																								"span",
																																								{ className: "label" },
																																								"Google+"
																																				)
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																React.createElement(
																																				"a",
																																				{ href: "#", className: "icon circle fa-github" },
																																				React.createElement(
																																								"span",
																																								{ className: "label" },
																																								"Github"
																																				)
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																React.createElement(
																																				"a",
																																				{ href: "#", className: "icon circle fa-dribbble" },
																																				React.createElement(
																																								"span",
																																								{ className: "label" },
																																								"Dribbble"
																																				)
																																)
																												)
																								),
																								React.createElement(
																												"ul",
																												{ className: "copyright" },
																												React.createElement(
																																"li",
																																null,
																																"© Cristian Segovia: segoviacristian23@hotmail.com"
																												),
																												React.createElement(
																																"li",
																																null,
																																"A big Thank you to: ",
																																React.createElement(
																																				"a",
																																				{ href: "http://html5up.net" },
																																				"HTML5 UP"
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																"And ",
																																React.createElement(
																																				"a",
																																				{ href: "https://www.turbo360.co" },
																																				"Turbo360"
																																),
																																" "
																												)
																								)
																				)
																);
												},
												writable: true,
												configurable: true
								}
				});

				return Footer;
})(Component);

module.exports = Footer;