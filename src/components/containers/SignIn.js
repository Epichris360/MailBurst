import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import Loader               from './Loader'
import DangerAlert          from './DangerAlert'
import { backgroundShadow, input } from './Css'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            error: false,
            errorMessage:'',
            submitted: false
        }
    }
    loginUser(){
        const { username, password } = this.state
        this.setState({submitted:true})
        this.props.signIn({username:username,password:password})
        .then(response => {
            this.props.history.push('/emails-list')
            return
        })
        .catch(err => {
            this.setState({error: true, submitted:false, errorMessage: err.message})
            return
        })
    }
    render(){
        return(
            <div className="container"  >
                <div style={{height:'40px'}} ></div>
                <div className="row" > 
                    {
                        this.state.submitted ? <Loader /> :
                        <div  className="col-xs-12 col-sm-12 col-md-10" style={backgroundShadow} >
                            <DangerAlert error={this.state.error} errorMessage={this.state.errorMessage} />
                            <h1 className="topmargin-sm nobottommargin"><strong>Sign In!</strong></h1>
                            <hr/>
                            <label htmlFor="">Username:</label>
                            <input className="12u" 
                                type="text" 
                                placeholder="username" 
                                style={input}
                                onChange={ e => this.setState({username:e.target.value }) }
                            />
                            
                            <label htmlFor="">Password:</label>
                            <input className="12u" 
                                type="password" 
                                placeholder="password" 
                                style={input}
                                onChange={ e => this.setState({password: e.target.value}) }
                            />
                            <br />
                            <button 
                                className="btn btn-lg btn-success col-xs-12"
                                onClick={ this.loginUser.bind(this) }
                            >Submit</button>
                            <div className="col-md-12 col-sm-12 col-xs-12" style={{height:'50px'}} ></div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const dispatchToProps = dispatch => {
    return{
        signIn: (credentials) => dispatch(actions.loginUser(credentials)),
        currentUser: () => dispatch(actions.currentUser()),
        allUsers: () => dispatch(actions.fetchUsers(null))
    }
}



export default connect(null,dispatchToProps)(SignIn)