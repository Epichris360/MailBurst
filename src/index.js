import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/Intro'
import { Switch, BrowserRouter as Router, Route  } from 'react-router-dom'
import { AutomatedEmailCreator, SignIn, SignUp, NavBar, EmailEdit, Prices, Footer,
	MainPage, MyEmailsList, EmailTemplateShow, NewNavBar, HomePage } from './components/containers'

const app = (
	<Provider store={store.configure(null)}>
		<Router>
			<div  >
				<NavBar />
				<div>
					<Switch>
						<Route exact path="/" 		 			component={HomePage} />
						<Route path='/email-creator' 			component={AutomatedEmailCreator} />
						<Route path="/emails-list"   			component={MyEmailsList}/>
						<Route exact path="/email/:email_id" 	component={EmailTemplateShow}/>
						<Route path="/email/:email_id/edit" 	component={EmailEdit} />
						<Route path="/signin"        			component={SignIn} />
						<Route path="/signup"        			component={SignUp}/>
						<Route path="/prices"					component={Prices} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))