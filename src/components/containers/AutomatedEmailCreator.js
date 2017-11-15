import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import DangerAlert          from './DangerAlert'
import { v4 }               from 'uuid'
import { backgroundShadow, 
                    input } from './Css'

class AutomatedEmailCreator extends Component{
    constructor(props){
        super(props)
        this.state = {
            emailTitle:'',emailBody:'',variablesComma:'',
            error:false, errorMessage:'', category:'private'
        }
    }
    emailprototype(){
        /*
            format will now be *$name*
            have person add standard names customerName, companyName, promoCode
            split array by " ", then replace each of these using a loop. < should be provided by 
            person in the get request >. then email is sent.
            promocode can be persons `${customerName}-${rand-alphanumberic}` its done.
            need two cronjob/ vectors
            - one for sending emails everyday
            -another for scrapping 2 day old promocodes
            -another for removing promocodes after their use // should be done by person?
            -another for generating a promocode // could generate a standar promocode collection

            these could be grouped together
            https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
        */
    }
    formatAndSendEmail(){
        const { emailTitle, emailBody, variablesComma, category } = this.state
        if( variablesComma.split(' ') > 1 ){
            this.setState({error:true, errorMessage:'error! there was a space in your variables!'})
            return
        }
        if(this.checkVarsAndBody(emailBody, variablesComma)){
            console.log('something wrong')
            this.setState({error: true, errorMessage:'Amount of variables in email body and variables input dont match!'})
            return 
        }
        if( emailTitle == '' && emailBody == '' && variablesComma == '' ){
            this.setState({error:true, errorMessage:'Somethings Empty!'})
            return 
        }
        const emailTemplate = {
            email_id:v4(),
            emailTitle, emailBody, variablesComma, 
            user_id: this.props.user.id, user_email: this.props.user.email, category
        }
        this.props.emailTemplateCreator(emailTemplate)
        .then(data => {
            this.props.history.push(`/email/${emailTemplate.email_id}`)
            return
        })
        .catch(err => {
            console.log('err',err.message)
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
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12 col-sm-12 col-xs-12" 
                        style={Object.assign({},backgroundShadow,{marginTop:'35px'})} >
                        <DangerAlert error={this.state.error} errorMessage={this.state.errorMessage} />
                        <h1>Create Any Email Template That You Want!!!:</h1>
                        <hr/>
                        <label htmlFor="">Title for the Email:</label>
                        <input type="text" className="12u" 
                            placeholder="Title for the Email!"
                            required={true}
                            style={input}
                            onChange={ e => this.setState({ emailTitle: e.target.value }) }
                        />

                        <label htmlFor="">Body for the Email:</label>
                        <textarea cols="30" rows="10" className="12u"
                            required={true}
                            style={input}
                            placeholder="Format your *variables* like this!!, other than that write as you normally would. So lets say you want to add a customers *name* and maybe a discountcode *code*. you know to increase convesion or something"
                            onChange={ e => this.setState({ emailBody: e.target.value }) }
                        ></textarea>
                        <br/>
                        <label htmlFor="">Write your vars here. Remember that your varibles must be <b>Identical</b> to the ones in the body(uppercase, lowercase, camelcase etc). Seperate them by commas no spaces!:  </label>
                        <input type="text" className="12u" 
                            required={true}
                            style={input}
                            onChange={ e => this.setState({ variablesComma: e.target.value }) }
                            placeholder="seperate your variables by commas"
                        />
                        <br/>
                        {
                            this.props.user.role == "admin" ? 
                                <select className="btn btn-default" onChange={e => this.setState({category: e .target.value}) }>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select> : null
                        }
                        
                        
                        <button onClick={ this.formatAndSendEmail.bind(this) }
                        className="btn btn-success btn-lg pull-right">
                            Create It!
                        </button>
                        <div className="col-md-12 col-sm-12 col-xs-12" 
                            style={{height:'10px',marginTop:'15px', marginBottom:'15px'}} >
                        </div>
                    </div>
                </div>
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
const propsToState = dispatch => {
    return{
        emailTemplateCreator: params => dispatch(actions.emailTemplateCreator(params))
    }
}
export default connect(mapStateToProps,propsToState)(AutomatedEmailCreator)