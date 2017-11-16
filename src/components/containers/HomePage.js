import React, { Component }                            from 'react'
import { Link }                                        from 'react-router-dom'
import { connect }                                     from 'react-redux'
import actions                                         from '../../actions'
import { withRouter }                                  from 'react-router'
import { LinkContainer }                               from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class HomePage extends Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return ( 
			<div id="page-wrapper" style={{marginTop:'-20px'}} >

				<section id="banner">
					<div className="inner"   >

						<header>
							<h2>Mail Meteor</h2>
						</header>
						<p>Ready to send some <strong>Emails?</strong>, An api <span> </span>
							<br />
							for awesome people <span> </span>
							<br />
							<span> </span>
							<br/>
							<strong><Link to="/signup">Sign Up Now!</Link></strong>
						</p>
						<footer>
							<ul className="buttons vertical">
								<li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
							</ul>
						</footer>
					</div>
				</section>

				<article id="main">
					<header className="special container">
						<span className="icon fa-envelope"></span>
						<h2>Tired of setting up Mandril or MailGun, All The Time?<br />And Then Writing An Interface For It? </h2>
						<br />
						<p>
							<span>How about following good old <span> </span>
								<a href="https://en.wikipedia.org/wiki/Don't_repeat_yourself">DRY</a>, 
								and writing once, with placeholders, and then hitting an api to fill in names, promos or anything else
							</span>
							<br />
								Get <strong>1000</strong> free emails a month, and pay $9 a month if you need more!
							<br />
								Set up cronjobs or interns to do things on your end(looping and filtering data) and then just hit the api. Boom! 
								<br/>
								Your good to go! might as well ask for that raise.
						</p>
					</header>

					<section className="wrapper style2 container special-alt">
						<div className="row 50%">
							<div className="8u 12u(narrower)">

								<header>
									<h2>Make Your Life Easier With Mail Meteor!</h2>
								</header>
								<p>
									<span>Get up in running in 10 minutes or less</span> <br/>
									<span>Set up as many cronjobs as you want to send different types of emails!</span> <br/>
									<span>Create as many templates or use public one's to send invites, promo codes, account sign up confirmations, Reminders or anything else you can think of</span> <br/>
									<span>A/B test your email's with your own links</span>
								</p>
								<footer>
									<ul className="buttons">
										<li><a href="#" className="button">Find Out More</a></li>
									</ul>
								</footer>

							</div>
							<div className="4u 12u(narrower) important(narrower)">

								<ul className="featured-icons">
									<li><span className="icon fa-clock-o"><span className="label">Feature 1</span></span></li>
									<li><span className="icon fa-volume-up"><span className="label">Feature 2</span></span></li>
									<li><span className="icon fa-laptop"><span className="label">Feature 3</span></span></li>
									<li><span className="icon fa-inbox"><span className="label">Feature 4</span></span></li>
									<li><span className="icon fa-lock"><span className="label">Feature 5</span></span></li>
									<li><span className="icon fa-cog"><span className="label">Feature 6</span></span></li>
								</ul>

							</div>
						</div>
					</section>

					<section className="wrapper style1 container special">
						<div className="row">
							<div className="4u 12u(narrower)">

								<section>
									<span className="icon featured fa-server"></span>
									<header>
										<h3>Built On Top Of Turbo360</h3>
									</header>
									<p>99.9% uptime, thanks to <a href="https://www.turbo360.co">Turbo360's</a> awesome platform constructed on top of AWS</p>
									<br/>
									<p>This is not a paid promotion..... yet</p>
								</section>

							</div>
							<div className="4u 12u(narrower)">

								<section>
									<span className="icon featured fa-commenting"></span>
									<header>
										<h3>Don't Feel like Writing A Template?</h3>
									</header>
									<p>Public Templates Are Here To Help. Customize Them, Use Them, Send Them <br/>
										(Note: Only Text Templates Available Now. Graphic Templates Coming soon)
									</p>
									<br/>
									<p>Take credit for them, get paid for them, repeat.</p>
								</section>

							</div>
							<div className="4u 12u(narrower)">

								<section>
									<span className="icon featured fa-cloud-upload"></span>
									<header>
										<h3>Easy To Use API</h3>
									</header>
									<p>Code Examples Include Your APIKEY, and Necesary Variables</p> 
									<br/>
									<p>Copy and paste. Just like using StackOverFlow</p>
								</section>

							</div>
						</div>
					</section>
					{/*}
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
					*/}
				</article>

				<section id="cta">
					<header>
						<h2>Ready to do <strong>something</strong>?</h2>
						<p>Sign Up and get 1000 free emails a month! immediatly.</p>
					</header>
					<footer>
						<ul className="buttons">
							<li><Link to="/signup" className="button special">Take My Money</Link></li>
							<li><Link to="/prices" className="button">LOL Wut</Link></li>
						</ul>
					</footer>

				</section>

			</div>
		)
	}

}
const mapStateToProps = state => {
    const { user } = state
    return{
        user
    }
}

const dispatchToProps = dispatch => {
    return{
        logout: () => dispatch(actions.logoutUser())
    }
}


export default withRouter(connect(mapStateToProps,dispatchToProps)( HomePage ))