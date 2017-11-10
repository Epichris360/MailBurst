import React, { Component } from 'react'

class AutomatedEmailCreator extends Component{
    constructor(props){
        super(props)
        this.state = {
            emailTitle:'',emailBody:'',promoCode:''
        }
    }
    emailprototype(){
        /*
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
                            onClick={ e => this.setState({ emailTitle: e.target.value }) }
                        />
                        
                        <label htmlFor="">Turbo API Key:</label>
                        <input type="text" className="form-control"/>
                        <br/>

                        <label htmlFor="">Body for the Email:</label>
                        <textarea cols="30" rows="10" className="form-control"
                            placeholder="Body of the Email!"
                            onClick={ e => this.setState({ emailBody: e.target.value }) }
                        ></textarea>
                        <br/>
                        <button className="btn btn-success btn-lg pull-right">
                            Create!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutomatedEmailCreator