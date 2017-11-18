import React, { Component } from 'react'
import { connect }          from 'react-redux'
import Loader               from './Loader'
import { backgroundShadow } from './Css'

class GraphicTemplateShow extends Component{
    constructor(props){
        super(props)
        this.state = {
            template:null, loading: true
        }
    }
    componentDidMount(){
        //will have to change if srr 
        const template = this.props.templates.filter(t => t.id == this.props.match.params.template_id)[0]
        this.setState({template, loading:false})
    }
    render(){
        return(
            <div className="container" >
                <div className="row">
                    {
                        this.state.loading ? <Loader /> : 
                        <div className="col-md-12 col-sm-12 col-xs-12" style={Object.assign({},backgroundShadow,{marginTop:'35px'})} >
                            <div dangerouslySetInnerHTML={{ __html:this.state.template.html }} ></div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { templates } = state
    return{
        templates
    }
}

const propsToState = dispatch => {
    return{

    }
}

export default connect(mapStateToProps,propsToState)(GraphicTemplateShow)