import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/Intro'
import { Switch, BrowserRouter as Router, Route  } from 'react-router-dom'
import { AutomatedEmailCreator, SignIn, SignUp, NavBar, 
	MainPage, MyEmailsList, EmaiTemplateShow } from './components/containers'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app with Redux
	already implemented. The Intro component is the 
	visual content and most likely, you will want 
	to remove it and replace with your own visual content.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


const app = (
	<Provider store={store.configure(null)}>
		<Router>
			<div >
				<NavBar />
				<div>
					<Switch>
						<Route exact path="/" 		 	component={MainPage} />
						<Route path='/email-creator' 	component={AutomatedEmailCreator} />
						<Route path="/emails-list"   	component={MyEmailsList}/>
						<Route exact path="/email/:email_id" 	component={EmaiTemplateShow}/>
						<Route path="/email/:email_id/edit" />
						<Route path="/signin"        	component={SignIn} />
						<Route path="/signup"        	component={SignUp}/>
					</Switch>
				</div>
			</div>
		</Router>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))