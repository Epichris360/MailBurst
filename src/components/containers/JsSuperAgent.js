import React, {Component} from 'react'

class JsAxios extends Component{
    render(){
        return(
            <div  >
                
                <div style={{marginTop:'15px',marginLeft:'10px'}} >
                        {`axios.get('/vectorAddress?', {`} <br/>
                            &nbsp;&nbsp;{`params: {`} <br/>
                            <span>&nbsp;&nbsp;&nbsp;{`email_id: ${this.props.email.email_id}`}</span> <br/>
                            <span>&nbsp;&nbsp;&nbsp;{`to: awesomecustomer@something.com`}</span> <br/>
                            <span>&nbsp;&nbsp;&nbsp;{`from: unpaidintern@bigstartup.com`}</span>
                            {
                                
                                this.props.email.variablesComma.split(',').map( (v,i) => {
                                    return(
                                        <div key={i}>
                                            <span >&nbsp;&nbsp;&nbsp;{`${v}: 'somevalue'`}</span>
                                            <br/>
                                        </div>
                                    )
                                })
                            }
                            &nbsp;&nbsp;{`}`} <br/>
                        {`})`} <br/>
                        {`.then(function (response) {`} <br/>
                            &nbsp;&nbsp;{`console.log(response);`} <br/>
                        {`})`} <br/>
                        {`.catch(function (error) {`} <br/>
                            &nbsp;&nbsp;{`console.log(error);`} <br/>
                        {`});`} <br/>
                </div>
            </div>
        )
    }
}

export default JsAxios