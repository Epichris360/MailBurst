import React, {Component} from 'react'

class JsAxios extends Component{
    
    render(){
        return(
            <div className="container" >
                <div className="row" style={{marginTop:'20px'}}>

                    <div className="col-md-5 col-sm-5 col-xs-12" style={{padding:'10px'}} >
                        {`const query = {`} <br/>
                        &nbsp;&nbsp;&nbsp;{`'email_id': '${this.props.email.email_id},'`} <br/>
                        &nbsp;&nbsp;&nbsp;{`'to': 'awesomecustomer@something.com',`} <br/>
                        &nbsp;&nbsp;&nbsp;{`'from': 'unpaidintern@bigstartup.com',`} <br/>
                        &nbsp;&nbsp;&nbsp;{`'apiKey': '${this.props.apiKey}',`} <br/>
                        {  
                            this.props.email.variablesComma.split(',').map( (v,i) => {
                                return(
                                    <div key={i}>
                                        <span >&nbsp;&nbsp;&nbsp;{`'${v}': 'somevalue',`}</span>
                                        <br/>
                                    </div>
                                )
                            })
                        }
                        {`}`} <br/> <br/>



                        {`superagent`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`.get('vertex.something.com/32213')`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`.query(query)`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`.set('Accept','application/json')`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`.end( (err, response) => {`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`if(err){`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`console.log('Error', err)`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`}`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`//Ask for that raise. You deserver it`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`console.log(response.body.data)`} <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`})`} <br/>
                        {`}`} <br/>
                    </div>

                    <div  className="col-md-5 col-sm-5 col-xs-12" style={{padding:'10px'}}>
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