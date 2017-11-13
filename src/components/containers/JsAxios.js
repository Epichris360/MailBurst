import React, {Component} from 'react'

class JsAxios extends Component{
    render(){
        return(
            <div className="container" >
                <div className="row" style={{marginTop:'20px'}} >
                    <div className="col-md-5 col-sm-5 col-xs-12" style={{padding:'10px'}} >
                        {`axios.get('/vectorAddress?', {`} <br/>
                            &nbsp;&nbsp;{`params: {`} <br/>
                            <span>&nbsp;&nbsp;&nbsp;{`'email_id: ${this.props.email.email_id}',`}</span> <br/>
                            <span>&nbsp;&nbsp;&nbsp;{`'to: awesomecustomer@something.com',`}</span> <br/>
                            <span>&nbsp;&nbsp;&nbsp;{`'from: unpaidintern@bigstartup.com',`}</span>
                            {
                                
                                this.props.email.variablesComma.split(',').map( (v,i) => {
                                    return(
                                        <div key={i}>
                                            <span >&nbsp;&nbsp;&nbsp;{`${v}: 'somevalue',`}</span>
                                            <br/>
                                        </div>
                                    )
                                })
                            }
                            &nbsp;&nbsp;{`}`} <br/>
                        {`})`} <br/>
                        {`.then(function (response) {`} <br/>
                            &nbsp;&nbsp;{`Want some coffee?`}
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
                    </div>
                </div>
            </div>
        )
    }
}

export default JsAxios