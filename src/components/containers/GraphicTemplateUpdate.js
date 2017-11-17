import React, { Component }        from 'react'
import { connect }                 from 'react-redux'
import actions                     from '../../actions'
import { backgroundShadow, input } from './Css'
import Loader                      from './Loader'
import DangerAlert                 from './DangerAlert'
import ent                         from 'ent'
import LoaderBar                   from './LoaderBar'

class GraphicTemplateUpdate extends Component{
    constructor(props){
        super(props)
        this.state = {
            template:null, loading: true, name:'', html:'',
            category:'', error:false, errorMessage:'', updating: false
        }
    }
    componentDidMount() {
        const template = this.props.templates.filter(t => t.id == this.props.match.params.template_id)[0]
        const { name, html, category } = template
        this.setState({name, html, category, template, loading:false})
        return
    }
    updateGraphicTemplate(){
        this.setState({updating:true})
        const { name, html, category, template } = this.state
        const updated = { name, html:ent.decode(html), category }
        this.props.updateTemplate(template, updated)
        .then(data => {
            this.props.history.push(`/template/show/${template.id}`)
            return
        })
        .catch(err => {
            this.setState({error:true, errorMessage:err.message,updating:false})
            return
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12" 
                        style={Object.assign( {},backgroundShadow,{marginTop:'30px'})} >
                        
                        {
                            this.state.loading ? <Loader /> : 
                            <div>

                                <DangerAlert error={this.state.error} errorMessage={this.state.errorMessage} />
                                <h1>Update A Template!: </h1>
                                <span style={{fontSize:'20px'}} >For the best experience, create your templates the way you normally would and paste them here</span>
                                <hr/>
                                <label htmlFor="">Name of Template:</label>
                                <input type="text" className="12u" 
                                    placeholder="Title for the Email!"
                                    required={true}
                                    style={input}
                                    value={this.state.name}
                                    onChange={ e => this.setState({ name: e.target.value }) }
                                />
                                <label htmlFor="">Body of Template:</label>
                                <textarea cols="30" rows="10" className="12u"
                                    required={true}
                                    style={input}
                                    placeholder="Paste your HTML!!! All styling must be in a style tag or inline. no cdn's or anything else!"
                                    value={this.state.html}
                                    onChange={ e => this.setState({ html: e.target.value }) }
                                ></textarea>
                                <br/>

                                {
                                    this.props.user.role == "admin" ? 
                                        <select className="btn btn-default" value={this.state.category} 
                                                onChange={e => this.setState({category: e .target.value}) }>
                                            <option value="public">Public</option>
                                            <option value="private">Private</option>
                                        </select> : null
                                }

                                {
                                    this.state.updating ? <LoaderBar /> :
                                    <button className="btn btn-success pull-right"
                                        onClick={ this.updateGraphicTemplate.bind(this) } 
                                    >
                                        Update It!
                                    </button> 
                                }
                                <div className="col-md-12 col-sm-12 col-xs-12" 
                                    style={{height:'10px',marginTop:'15px', marginBottom:'15px'}} >
                                </div>

                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { templates, user } = state 
    return{
        templates, user
    }
}

const propsToState = dispatch => {
    return{
        updateTemplate: (orig,update) => dispatch( actions.updateTemplate(orig,update) )
    }
}

export default connect(mapStateToProps, propsToState)(GraphicTemplateUpdate)