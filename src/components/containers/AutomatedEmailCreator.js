import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'

class AutomatedEmailCreator extends Component{
    constructor(props){
        super(props)
        this.state = {
            emailTitle:'',emailBody:'',variablesComma:'', turboApiKey:''
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
        const { emailTitle, emailBody, variablesComma, turboApiKey } = this.state
        if( variablesComma.split(' ') > 1 ){
            console.log('error! there was a space')
            return
        }
        if(this.checkVarsAndBody(emailBody, variablesComma)){
            console.log('something wrong')
            return 
        }
        if( emailTitle == '' && emailBody == '' && variablesComma == '' && turboApiKey == '' ){
            console.log('you forgot something!')
            //this.setState(error:true, errorMessage:'Somethings Empty!')
            return 
        }
        console.log('everything works so far')
        const emailTemplate = {
            emailTitle, emailBody, variablesComma, turboApiKey
        }
        this.props.emailTemplateCreator(emailTemplate)
        .then(data => {
            console.log('email: just created',data)
            return
        })
        .catch(err => {
            console.log('err',err.message)
            return 
        })


    }
    checkVarsAndBody(emailBody, variablesComma){
        //let tasksIndex = projectChange.tasks.map( task => task.task_id ).indexOf( t.task_id )
        let emailSplit = emailBody.split('*')
        let varSplit   = variablesComma.split(',')
        let howManyVarsFound = 0
        for( let x = 0 ; x < varSplit.length ; x++ ){
            let indexNum = emailSplit.map( emailblock => emailblock ).indexOf(`$${varSplit[x]}`)
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
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h1>Email for Customers Who Signed Up But Didn't Convert:</h1>
                        <hr/>
                        <label htmlFor="">Title for the Email:</label>
                        <input type="text" className="form-control" 
                            placeholder="Title for the Email!"
                            required={true}
                            onClick={ e => this.setState({ emailTitle: e.target.value }) }
                        />
                        <label htmlFor="">Turbo API Key:</label>
                        <input type="text" className="form-control" 
                            required={true}
                            onChange={ e => this.setState({turboApiKey: e.target.value}) }
                            placeholder="Turbo API key please"
                        />
                        <br/>

                        <label htmlFor="">Body for the Email:</label>
                        <textarea cols="30" rows="10" className="form-control"
                            required={true}
                            placeholder="So format your *$variables* like this!!. So lets say you want to add a customers *$name* and maybe a discountcode *$code*. you know to increase convesion or something"
                            onChange={ e => this.setState({ emailBody: e.target.value }) }
                        ></textarea>
                        <br/>
                        <label htmlFor="">Write your vars here. Remember that your varibles <b>Identical</b> to the ones in the body. Seperate them by commas no spaces!:  </label>
                        <input type="text" className="form-control" 
                            required={true}
                            onChange={ e => this.setState({ variablesComma: e.target.value }) }
                            placeholder="seperate your variables by commas"
                        />
                        <br/>
                        <button onClick={ this.formatAndSendEmail.bind(this) }
                        className="btn btn-success btn-lg pull-right">
                            Create!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{

    }
}
const propsToState = dispatch => {
    return{
        emailTemplateCreator: params => dispatch(actions.emailTemplateCreator(params))
    }
}
export default connect(mapStateToProps,propsToState)(AutomatedEmailCreator)