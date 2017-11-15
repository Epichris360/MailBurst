import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Prices extends Component{
    render(){
        return(
            <div className="container" >

                <div className="row" >

                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h2 style={{textAlign:'center'}}>Amazing Prices for Amazing People!</h2>
                        <p style={{textAlign:'center'}}>Start Free And Move From There!</p>

                        <div className="columns">
                            <ul className="price">
                                <li className="header" style={{backgroundColor:'#8eb3e2'}} >Free</li>
                                <li className="grey">Don't Pick This One</li>
                                <li>1000 Free Emails A Month</li>
                                <li>Email Support</li>
                                <li>&nbsp;</li>
                                <li></li>
                                <li className="grey">
                                    <Link to="/signup" style={{margin:'-20px'}} className="button special">
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="columns">
                            <ul className="price">
                                <li className="header" style={{backgroundColor:'#4CAF50'}}>Pro</li>
                                <li className="grey">$ 9 / Month</li>
                                <li>Up to 20.000 Emails A Month!</li>
                                <li>Slack Channel Support</li>
                                <li>Email Support</li>
                                <li></li>
                                <li className="grey">
                                    <Link to="/signup" style={{margin:'-20px'}} className="button special">
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="columns">
                            <ul className="price">
                                <li className="header" style={{backgroundColor:'#e05138'}} >Premium</li>
                                <li className="grey">$ 27 / Month</li>
                                <li>Up to 200.000 Emails a Month</li>
                                <li>Slack Channel Support</li>
                                <li>Email Support</li>
                                <li></li>
                                <li className="grey">
                                    <Link to="/signup" style={{margin:'-20px'}} className="button special">
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Prices