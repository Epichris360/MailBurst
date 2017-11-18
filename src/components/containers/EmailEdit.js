import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import Loader               from './Loader'
import DangerAlert          from './DangerAlert'
import { backgroundShadow, input } from './Css'

class EmailEdit extends Component{
    constructor(props){
        super(props)
        this.state = {
            emailTemplateOrig:null, loading: true, emailTitle:'',emailBody:'',variablesComma:'',
            error:false, errorMessage:'', category:'private'
        }
    }
    componentDidMount(){
        //will have to change if srr
        const email = this.props.emails.filter(e => e.email_id == this.props.match.params.email_id)[0]
        const { emailTitle, emailBody, variablesComma, category } = email
        this.setState({emailTemplateOrig: email, emailTitle, emailBody, variablesComma, category, loading:false})
    }
    formatAndSendEmail(){
        this.setState({loading: true})
        const { emailTemplateOrig, emailTitle, emailBody, variablesComma, category } = this.state
        if( variablesComma.split(' ') > 1 ){
            this.setState({error:true, errorMessage:'error! there was a space in your variables!'})
            return
        }
        if( emailTitle == '' || emailBody == '' || variablesComma == '' ){
            this.setState({error:true, errorMessage:'Somethings Empty!'})
            return 
        }
        if(this.checkVarsAndBody(emailBody, variablesComma)){
            console.log('something wrong')
            this.setState({error: true, errorMessage:'Amount of variables in email body and variables input dont match!'})
            return 
        }
        //email_id: emailTemplateOrig.email_id,
        //user_id: emailTemplateOrig.email_id, user_email: emailTemplateOrig.user_email
        const emailTemplateUpdated = {
            emailTitle, emailBody, variablesComma, emailTitle,
        }
        
        this.props.emailTemplateUpdate(emailTemplateOrig ,emailTemplateUpdated)
        .then(data => {
            this.props.history.push(`/email/${emailTemplateOrig.email_id}`)
            return
        })
        .catch(err => {
            console.log('err',err.message)
            this.setState({error:true, errorMessage: err.message})
            return 
        })


    }
    checkVarsAndBody(emailBody, variablesComma){
        let emailSplit = emailBody.split('*')
        let varSplit   = variablesComma.split(',')
        let howManyVarsFound = 0
        for( let x = 0 ; x < varSplit.length ; x++ ){
            let indexNum = emailSplit.map( emailblock => emailblock ).indexOf(`${varSplit[x]}`)
            if( indexNum >=0 ){
                howManyVarsFound++
            }
        }
        if( varSplit.length == howManyVarsFound ){
            //falsifies the if statment from where the request comes from. so that the parent
            //function can continue
            return false
        }else{
            //validates the if statement and exists the parent function
            return true 
        }
    }
    render(){
        return( 
            <div>
                {
                    this.state.loader ? <Loader /> : 
                    <div className="container" >
                        <div className="row" >
                            <div className="col-md-12 col-sm-12 col-xs-12" 
                                    style={Object.assign({},backgroundShadow,{marginTop:'35px'})} >
                                <DangerAlert error={this.state.error} errorMessage={this.state.errorMessage} />
                                <h1><strong>Update The Email Template!!!!:</strong></h1>
                                <hr/>
                                <label htmlFor="">Title for the Email:</label>
                                <input type="text" className="12u" 
                                    placeholder="Title for the Email!"
                                    required={true}
                                    style={input}
                                    value={this.state.emailTitle}
                                    onChange={ e => this.setState({ emailTitle: e.target.value }) }
                                />
                                <br/>
                                <label htmlFor="">Body for the Email:</label>
                                <textarea cols="30" rows="10" className="12u"
                                    required={true}
                                    placeholder="Format your *variables* like this!!, other than that write as you normally would. So lets say you want to add a customers *name* and maybe a discountcode *code*. you know to increase convesion or something"
                                    value={this.state.emailBody}
                                    style={input}
                                    onChange={ e => this.setState({ emailBody: e.target.value }) }
                                ></textarea>
                                <br/>
                                <label htmlFor="">Write your vars here. Remember that your varibles must be <b>Identical</b> to the ones in the body(uppercase, lowercase, camelcase etc). Seperate them by commas no spaces!:  </label>
                                <input type="text" className="12u" 
                                    required={true}
                                    value={this.state.variablesComma}
                                    style={input}
                                    onChange={ e => this.setState({ variablesComma: e.target.value }) }
                                    placeholder="seperate your variables by commas"
                                />
                                <br/>
                                {
                                    this.props.user.role == "admin" ? 
                                        <select className="btn btn-default" value={this.state.category} onChange={e => this.setState({category: e .target.value}) }>
                                            <option value="public">Public</option>
                                            <option value="private">Private</option>
                                        </select> : null
                                }
                                
                                {/*make buttond disappear after clicking while waiting for response*/}
                                <button onClick={ this.formatAndSendEmail.bind(this) }
                                className="btn btn-success btn-lg pull-right">
                                    Update It!
                                </button>
                                <div className="col-md-12 col-sm-12 col-xs-12" 
                                    style={{height:'10px',marginTop:'15px', marginBottom:'15px'}} >
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStatToProps = state => {
    const { user, emails } = state
    return{
        user, emails
    }
}

const propsToState = dispatch => {
    return{
        emailTemplateUpdate: (emailTemplateOrig,emailTemplateUpdated) => dispatch(actions.emailTemplateUpdate(emailTemplateOrig,emailTemplateUpdated))
    }
}

export default connect(mapStatToProps,propsToState)(EmailEdit)