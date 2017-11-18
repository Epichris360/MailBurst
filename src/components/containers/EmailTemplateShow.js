import React, {Component}     from 'react'
import { connect }            from 'react-redux'
import Loader                 from './Loader'
import {Tabs, Tab}            from 'react-bootstrap'
import JsAxios                from './JsAxios'
import JsSuperAgent           from './JsSuperAgent'
import { backgroundShadow }   from './Css'
import ShowModalEmailTemplate from './ShowModalEmailTemplate'


class EmailTemplateShow extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:null, loading: true, template_id:'', modalOpen: false, template:{html:'<h1>None Selected. Please Choose another template option!</h1>'}
        }
    }
    componentDidMount(){
        //will have to change if srr
        const email = this.props.emails.filter(e => e.email_id == this.props.match.params.email_id)[0]
        this.setState({email, loading:false})
    }
    switchModal(){
        this.setState({modalOpen: !this.state.modalOpen})
        return
    }
    templatePick(e){
        const template = this.props.templates.filter(t => t.id == e.target.value)[0]
        if(typeof template == "undefined"){
            this.setState({template_id:e.target.value, 
                template:{html:'<h1>None Selected. Please Choose another template option!</h1>'}})
        }else{
            this.setState({template_id: e.target.value, template})
        }
        return
    }
    render(){
        return(
            <div className="container">
                <div className="row" >
                    {
                        this.state.loading ? <Loader /> : 
                        <div>
                            <div className="col-md-10 col-sm-10 col-xs-10" 
                                style={Object.assign({},backgroundShadow,
                                    {marginTop:'20px' })} >
                                <h1><strong>Need Info on an Email Template?</strong></h1>
                                <hr/>
                                <h3><strong>Email Title:</strong> {this.state.email.emailTitle}</h3>
                                <div>
                                    <h3><strong>Email Body:</strong></h3>
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
                                <div className="col-md-12 col-sm-12 col-xs-12" style={{marginTop:'15px'}} >
                                    Which Template?: <select className="btn btn-default" 
                                            onChange={e => this.templatePick(e) }>
                                        <option value={''}>none</option>
                                        {
                                            this.props.templates.map( (t,i) => {
                                                return( 
                                                    <option key={i} value={t.id}>
                                                        {t.name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                    &nbsp;&nbsp;
                                    <button onClick={ this.switchModal.bind(this) } className="btn btn-primary" >
                                        Modal!
                                    </button>
                                    <ShowModalEmailTemplate modalOpen={this.state.modalOpen} 
                                        template={this.state.template}
                                        switchModal={() => this.switchModal()} />
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12" 
                                    style={{height:'10px',marginTop:'10px', marginBottom:'10px'}} >
                                </div>
                            </div>
                            
                            <div className="col-md-10 col-sm-10 col-xs-10" 
                                style={backgroundShadow} >
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <hr/>
                                    <h3>Examples of calling the Api!</h3>
                                    <span>Note: Examples only available in Javascript, more coming soon!</span> <br/>
                                    <span>Note: The Examples already include the variables and your key. You can drop this into your code.</span>
                                    <br/>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                                        <Tab eventKey={1} title="JS-Axios">
                                            <JsAxios apiKey={this.props.user.apiKey} 
                                                template_id={this.state.template_id}
                                                email={this.state.email} 
                                            />
                                        </Tab>
                                        <Tab eventKey={2} title="JS-SuperAgent">
                                            <JsSuperAgent apiKey={this.props.user.apiKey} 
                                                template_id={this.state.template_id}
                                                email={this.state.email} 
                                            />
                                        </Tab>
                                    </Tabs>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12" 
                                    style={{height:'10px',marginTop:'15px', marginBottom:'15px'}} >
                                </div>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { emails,user,templates } = state
    return{
        emails, user, templates
    }
}

export default connect(mapStateToProps,null)(EmailTemplateShow)