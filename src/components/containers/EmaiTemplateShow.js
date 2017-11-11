import React, {Component} from 'react'
import { connect } from 'react-redux'
import Loader from './Loader'
import {Tabs, Tab} from 'react-bootstrap'
import JsAxios from './JsAxios'
import JsSuperAgent from './JsSuperAgent'


class EmaiTemplateShow extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:null, loading: true
        }
    }
    componentDidMount(){
        //will have to change if srr
        const email = this.props.emails.filter(e => e.email_id == this.props.match.params.email_id)[0]
        this.setState({email, loading:false})
    }
    render(){
        return(
            <div className="container">
                <div className="row" >
                    {
                        this.state.loading ? <Loader /> : 
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h1>Need Info on an Email Template?</h1>
                            <hr/>
                            <h3>Email Title: {this.state.email.emailTitle}</h3>
                            <div>
                                <h3>Email Body:</h3>
                                <div className="col-md-10 col-sm-12 col-xs-12" style={{padding:'2px',backgroundColor:'#cecccc'}} >
                                    <div className="col-md-12 col-sm-12 col-xs-12" style={{backgroundColor:'white',padding:'10px'}} >
                                        {
                                            this.state.email.emailBody.split('\n').map(function(item, key) {
                                                return (
                                                    <span style={{fontSize:'15px'}} key={key}>
                                                    {item}
                                                    <br/>
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <br/> <br/>
                            <div>
                                <h3>Variables:</h3>
                                <div className="col-md-10 col-sm-12 col-xs-12" style={{padding:'2px',backgroundColor:'#cecccc'}} >
                                    
                                    <div className="col-md-12 col-sm-12 col-xs-12" style={{backgroundColor:'white',padding:'10px'}} >
                                        {this.state.email.variablesComma}
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-md-10 col-sm-12 col-xs-12">
                                <hr/>
                                <h3>Examples of calling the Api!</h3>
                                <span>Note: examples only avaiable in Javascript, more coming soon!</span>
                                <br/>
                                <span>NO API KEY NECESSARY FOR NOW!</span>
                            </div>
                            <div className="col-md-10 col-sm-12 col-xs-12">
                                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                                    <Tab eventKey={1} title="JS-Axios"><JsAxios email={this.state.email} /></Tab>
                                    <Tab eventKey={2} title="JS-SuperAgent"><JsSuperAgent email={this.state.email} /></Tab>
                                </Tabs>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12" 
                                style={{height:'10px',marginTop:'15px', marginBottom:'15px'}} >
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { emails } = state
    return{
        emails
    }
}

export default connect(mapStateToProps,null)(EmaiTemplateShow)