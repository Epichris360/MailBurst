import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { v4 }               from 'uuid'
import { backgroundShadow, input } from './Css'

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            username:'',
            password:'',
            email:'',
            error: false,
            errorMessage:'',
            passwordConfirm:''
        }
    }
    newUser(){
        const { firstName, lastName, username, 
                password, email, passwordConfirm } = this.state
        if(password !== passwordConfirm){
            this.setState({ error: true })
            this.setState({ errorMessage: 'Passwords Don\'t Match!' })
            return
        }
        const apiKey = v4().split('-').join('')
        const params = { firstName, lastName, username, password, email, apiKey:apiKey, role:'normal' }
        this.props.signUp(params)
        .then(response => {
            this.setState({error: false})
            this.setState({errorMessage: ''})
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({error: false})
            this.setState({errorMessage: 'Please Check Your Info!'})
            return
        })
    }
    render(){
        return(
            <div className="container" >
                <div  ></div>
                <div className="row" style={{marginTop:'-20px'}} >
                    {
                        this.state.error ? 
                        <div className="alert alert-danger">
                            <strong>Danger!</strong> {this.state.errorMessage}
                        </div> : null
                    }
                    <div className="col-md-12 col-sm-12 col-xs-12" style={backgroundShadow}>
                        <h2>Sign Up!</h2>
                        <label htmlFor=""></label>
                        <input className="6u 12u(mobile)"  
                            type="text" 
                            placeholder="User Name" 
                            style={input}
                            onChange={ e => this.setState({username: e.target.value}) }
                            required
                        /> 
                        <input className="6u 12u(mobile)"  
                            type="text" 
                            placeholder="First Name" 
                            style={input}
                            onChange={ e => this.setState({firstName: e.target.value}) }
                            required
                        />
                        <input className="6u 12u(mobile)"  
                            type="text" 
                            placeholder="Last Name" 
                            style={input}
                            onChange={ e => this.setState({lastName: e.target.value}) }
                            required
                        /> 
                        <input className="6u 12u(mobile)"  
                            type="text" 
                            placeholder="Email" 
                            style={input}
                            onChange={ e => this.setState({email: e.target.value}) }
                            required
                        />
                        <input className="6u 12u(mobile)"  
                            type="password" 
                            placeholder="Password"
                            style={input}
                            onChange={ e => this.setState({password: e.target.value}) } 
                            required
                        /> 
                        <input className="6u 12u(mobile)"  
                            type="password" 
                            placeholder="Password Confirm" 
                            style={input}
                            onChange={ e => this.setState({passwordConfirm: e.target.value}) }
                            required
                        />
                        <button 
                            className="btn btn-lg btn-success"
                            onClick={ this.newUser.bind(this) }
                        >Sign Up!</button>
                        <div className="col-md-12 col-sm-12 col-xs-12" style={{height:'20px'}} ></div>
                    </div> 
                </div>
            </div>
        )
    }
}
const dispatchToProps = dispatch => {
    return{
        signUp: params => dispatch(actions.addUser(params))
    }
}


export default connect(null, dispatchToProps)(SignUp)