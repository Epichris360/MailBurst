import React, {Component} from 'react'

class JsAxios extends Component{
    render(){
        return(
            <div className="container" >
                <div className="row" style={{marginTop:'20px'}} >
                    <div className="col-md-5 col-sm-5 col-xs-12" style={{padding:'10px'}} >
                        {`const query = {`} <br/>
                            &nbsp;&nbsp;{`'email_id': '${this.props.email.email_id},'`} <br/>
                            &nbsp;&nbsp;{`'to': 'awesomecustomer@something.com',`} <br/>
                            &nbsp;&nbsp;{`'from': 'unpaidintern@bigstartup.com',`} <br/>
                            &nbsp;&nbsp;{`'apiKey': '${this.props.apiKey}',`} <br/>
                            &nbsp;&nbsp;{`'fromName': 'unpaidintern',`} <br/>
                            {  
                                this.props.email.variablesComma.split(',').map( (v,i) => {
                                    return(
                                        <div key={i}>
                                            <span >&nbsp;&nbsp;{`'${v}': 'somevalue',`}</span>
                                            <br/>
                                        </div>
                                    )
                                })
                            }
                        {`}`} <br/> <br/>
                        {`axios.get('/https://production.turbo360-vector.com/mmvectors-qldabj/sendemail', {`} <br/>
                            &nbsp;&nbsp;{`params: {query}`} <br/>
                        {`})`} <br/>
                        {`.then(function (response) {`} <br/>
                            &nbsp;&nbsp;{`//Want some coffee?`}
                            &nbsp;&nbsp;{`console.log(response);`} <br/>
                        {`})`} <br/>
                        {`.catch(function (error) {`} <br/>
                            &nbsp;&nbsp;{`console.log(error);`} <br/>
                        {`});`} <br/>
                    </div>

                    <div className="col-md-5 col-sm-5 col-xs-12" style={{padding:'10px'}} >
                        <span>Just hit the api filling in the required fields, ie: to,from, email_id etc</span> <br/>
                        <span>And have the Email generated and sent. Set a cronjob on your end to execute this</span> <br/>
                        <span>When needed, or get an intern to do it. Note: Intern's run on Hope and Coffee.</span> <br/>
                        <span>You must fill in all the variables besides ApiKey and email_id</span> <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default JsAxios