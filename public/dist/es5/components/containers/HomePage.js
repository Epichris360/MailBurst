"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router-dom").Link;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var withRouter = require("react-router").withRouter;
var LinkContainer = require("react-router-bootstrap").LinkContainer;
var _reactBootstrap = require("react-bootstrap");

var Navbar = _reactBootstrap.Navbar;
var Nav = _reactBootstrap.Nav;
var NavItem = _reactBootstrap.NavItem;
var NavDropdown = _reactBootstrap.NavDropdown;
var MenuItem = _reactBootstrap.MenuItem;
var HomePage = (function (Component) {
	function HomePage(props) {
		_classCallCheck(this, HomePage);

		_get(Object.getPrototypeOf(HomePage.prototype), "constructor", this).call(this, props);
		this.state = {};
	}

	_inherits(HomePage, Component);

	_prototypeProperties(HomePage, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					{ id: "page-wrapper", style: { marginTop: "-20px" } },
					React.createElement(
						"section",
						{ id: "banner" },
						React.createElement(
							"div",
							{ className: "inner" },
							React.createElement(
								"header",
								null,
								React.createElement(
									"h2",
									null,
									"Mail Meteor"
								)
							),
							React.createElement(
								"p",
								null,
								"Ready to send some ",
								React.createElement(
									"strong",
									null,
									"Emails?"
								),
								", An api ",
								React.createElement(
									"span",
									null,
									" "
								),
								React.createElement("br", null),
								"for awesome people ",
								React.createElement(
									"span",
									null,
									" "
								),
								React.createElement("br", null),
								React.createElement(
									"span",
									null,
									" "
								),
								React.createElement("br", null),
								React.createElement(
									"strong",
									null,
									React.createElement(
										Link,
										{ to: "/signup" },
										"Sign Up Now!"
									)
								)
							),
							React.createElement(
								"footer",
								null,
								React.createElement(
									"ul",
									{ className: "buttons vertical" },
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "#main", className: "button fit scrolly" },
											"Tell Me More"
										)
									)
								)
							)
						)
					),
					React.createElement(
						"article",
						{ id: "main" },
						React.createElement(
							"header",
							{ className: "special container" },
							React.createElement("span", { className: "icon fa-envelope" }),
							React.createElement(
								"h2",
								null,
								"Tired of setting up Mandril or MailGun, All The Time?",
								React.createElement("br", null),
								"And Then Writing An Interface For It? "
							),
							React.createElement("br", null),
							React.createElement(
								"p",
								null,
								React.createElement(
									"span",
									null,
									"How about following good old ",
									React.createElement(
										"span",
										null,
										" "
									),
									React.createElement(
										"a",
										{ href: "https://en.wikipedia.org/wiki/Don't_repeat_yourself" },
										"DRY"
									),
									", and writing once, with placeholders, and then hitting an api to fill in names, promos or anything else"
								),
								React.createElement("br", null),
								"Get ",
								React.createElement(
									"strong",
									null,
									"1000"
								),
								" free emails a month, and pay $9 a month if you need more!",
								React.createElement("br", null),
								"Set up cronjobs or interns to do things on your end(looping and filtering data) and then just hit the api. Boom!",
								React.createElement("br", null),
								"Your good to go! might as well ask for that raise."
							)
						),
						React.createElement(
							"section",
							{ className: "wrapper style2 container special-alt" },
							React.createElement(
								"div",
								{ className: "row 50%" },
								React.createElement(
									"div",
									{ className: "8u 12u(narrower)" },
									React.createElement(
										"header",
										null,
										React.createElement(
											"h2",
											null,
											"Make Your Life Easier With Mail Meteor!"
										)
									),
									React.createElement(
										"p",
										null,
										React.createElement(
											"span",
											null,
											"Get up in running in 10 minutes or less"
										),
										" ",
										React.createElement("br", null),
										React.createElement(
											"span",
											null,
											"Set up as many cronjobs as you want to send different types of emails!"
										),
										" ",
										React.createElement("br", null),
										React.createElement(
											"span",
											null,
											"Create as many templates or use public one's to send invites, promo codes, account sign up confirmations, Reminders or anything else you can think of"
										),
										" ",
										React.createElement("br", null),
										React.createElement(
											"span",
											null,
											"A/B test your email's with your own links"
										)
									),
									React.createElement(
										"footer",
										null,
										React.createElement(
											"ul",
											{ className: "buttons" },
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "#", className: "button" },
													"Find Out More"
												)
											)
										)
									)
								),
								React.createElement(
									"div",
									{ className: "4u 12u(narrower) important(narrower)" },
									React.createElement(
										"ul",
										{ className: "featured-icons" },
										React.createElement(
											"li",
											null,
											React.createElement(
												"span",
												{ className: "icon fa-clock-o" },
												React.createElement(
													"span",
													{ className: "label" },
													"Feature 1"
												)
											)
										),
										React.createElement(
											"li",
											null,
											React.createElement(
												"span",
												{ className: "icon fa-volume-up" },
												React.createElement(
													"span",
													{ className: "label" },
													"Feature 2"
												)
											)
										),
										React.createElement(
											"li",
											null,
											React.createElement(
												"span",
												{ className: "icon fa-laptop" },
												React.createElement(
													"span",
													{ className: "label" },
													"Feature 3"
												)
											)
										),
										React.createElement(
											"li",
											null,
											React.createElement(
												"span",
												{ className: "icon fa-inbox" },
												React.createElement(
													"span",
													{ className: "label" },
													"Feature 4"
												)
											)
										),
										React.createElement(
											"li",
											null,
											React.createElement(
												"span",
												{ className: "icon fa-lock" },
												React.createElement(
													"span",
													{ className: "label" },
													"Feature 5"
												)
											)
										),
										React.createElement(
											"li",
											null,
											React.createElement(
												"span",
												{ className: "icon fa-cog" },
												React.createElement(
													"span",
													{ className: "label" },
													"Feature 6"
												)
											)
										)
									)
								)
							)
						),
						React.createElement(
							"section",
							{ className: "wrapper style1 container special" },
							React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
									"div",
									{ className: "4u 12u(narrower)" },
									React.createElement(
										"section",
										null,
										React.createElement("span", { className: "icon featured fa-server" }),
										React.createElement(
											"header",
											null,
											React.createElement(
												"h3",
												null,
												"Built On To Of Turbo360"
											)
										),
										React.createElement(
											"p",
											null,
											"99.9% uptime, thanks to ",
											React.createElement(
												"a",
												{ href: "https://www.turbo360.co" },
												"Turbo360's"
											),
											" awesome platform constructed on top of AWS"
										),
										React.createElement("br", null),
										React.createElement(
											"p",
											null,
											"This is not a paid promotion..... yet"
										)
									)
								),
								React.createElement(
									"div",
									{ className: "4u 12u(narrower)" },
									React.createElement(
										"section",
										null,
										React.createElement("span", { className: "icon featured fa-commenting" }),
										React.createElement(
											"header",
											null,
											React.createElement(
												"h3",
												null,
												"Don't Feel like Writing A Template?"
											)
										),
										React.createElement(
											"p",
											null,
											"Public Templates Are Here To Help. Customize Them, Use Them, Send Them ",
											React.createElement("br", null),
											"(Note: Only Text Templates Available Now. Graphic Templates Coming soon)"
										),
										React.createElement("br", null),
										React.createElement(
											"p",
											null,
											"Take credit for them, get paid for them, repeat."
										)
									)
								),
								React.createElement(
									"div",
									{ className: "4u 12u(narrower)" },
									React.createElement(
										"section",
										null,
										React.createElement("span", { className: "icon featured fa-cloud-upload" }),
										React.createElement(
											"header",
											null,
											React.createElement(
												"h3",
												null,
												"Easy To Use API"
											)
										),
										React.createElement(
											"p",
											null,
											"Code Examples Include Your APIKEY, and Necesary Variables"
										),
										React.createElement("br", null),
										React.createElement(
											"p",
											null,
											"Just copy and paste. Just like using StackOverFlow"
										)
									)
								)
							)
						)
					),
					React.createElement(
						"section",
						{ id: "cta" },
						React.createElement(
							"header",
							null,
							React.createElement(
								"h2",
								null,
								"Ready to do ",
								React.createElement(
									"strong",
									null,
									"something"
								),
								"?"
							),
							React.createElement(
								"p",
								null,
								"Sign Up and get 1000 free emails a month! immediatly."
							)
						),
						React.createElement(
							"footer",
							null,
							React.createElement(
								"ul",
								{ className: "buttons" },
								React.createElement(
									"li",
									null,
									React.createElement(
										Link,
										{ to: "/signup", className: "button special" },
										"Take My Money"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										Link,
										{ to: "/prices", className: "button" },
										"LOL Wut"
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

	return HomePage;
})(Component);

var mapStateToProps = function (state) {
	var user = state.user;
	return {
		user: user
	};
};

var dispatchToProps = function (dispatch) {
	return {
		logout: function () {
			return dispatch(actions.logoutUser());
		}
	};
};


module.exports = withRouter(connect(mapStateToProps, dispatchToProps)(HomePage));
/*}
<section className="wrapper style3 container special">
	<header className="major">
	<h2>Next look at this <strong>cool stuff</strong></h2>
</header>
	<div className="row">
	<div className="6u 12u(narrower)">
			<section>
			<a href="#" className="image featured"><img src="/images/pic01.jpg" alt="" /></a>
			<header>
				<h3>A Really Fast Train</h3>
			</header>
			<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
		</section>
		</div>
	<div className="6u 12u(narrower)">
			<section>
			<a href="#" className="image featured"><img src="/images/pic02.jpg" alt="" /></a>
			<header>
				<h3>An Airport Terminal</h3>
			</header>
			<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
		</section>
		</div>
</div>
<div className="row">
	<div className="6u 12u(narrower)">
			<section>
			<a href="#" className="image featured"><img src="/images/pic03.jpg" alt="" /></a>
			<header>
				<h3>Hyperspace Travel</h3>
			</header>
			<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
		</section>
		</div>
	<div className="6u 12u(narrower)">
			<section>
			<a href="#" className="image featured"><img src="/images/pic04.jpg" alt="" /></a>
			<header>
				<h3>And Another Train</h3>
			</header>
			<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
		</section>
		</div>
</div>
	<footer className="major">
	<ul className="buttons">
		<li><a href="#" className="button">See More</a></li>
	</ul>
</footer>
</section>
*/