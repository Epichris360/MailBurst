import React, { Component } from 'react'
import {connect}            from 'react-redux'
import actions              from '../../actions'
import { Link }             from 'react-router-dom'
import Loader               from './Loader'
import { backgroundShadow } from './Css'

class ListGraphicTemplate extends Component{
    constructor(props){
        super(props)
        this.state = {
            tempArr:[], private: true, showModal:false, tempToShowInModal:null, loading: true
        }
    }
    componentDidMount(){
        if(this.props.templates.length > 0){
            const filtered = this.props.templates.filter( temp => temp.category == 'private' )
            this.setState({tempArr: filtered, loading: false})
            return
        }
    }
    switch(which){
        //switches between the categories of templates
        const filtered = this.props.templates.filter( t => t.category == which )
        //false == public and true == private
        if(this.state.private){
            //was true as in switching from public to private
            this.setState({tempArr: filtered, private:false})
        }else{
            //was false as in now switching from private to public
            this.setState({tempArr: filtered, private:true})
        }
        return
    }
    render(){
        return(
            <div className="container" >
                {
                    this.state.loading ? <Loader /> : 
                    <div className="row" >
                        <div  >
                            <div className="col-md-12 col-sm-12 col-xs-12" 
                                style={Object.assign({},{ padding:'10px'},backgroundShadow)}>
                                <h2 className="col-md-6 col-sm-6 col-xs-10" >Templates List: 
                                    {this.state.private ? 'Private' : 'Public!'}
                                </h2>
                                <div className="col-md-6 col-sm-6 col-xs-12" 
                                    style={{padding:'5px', borderStyle:'solid',borderWidth:'2px'}} >
                                    <span>Api Key: {this.props.user.apiKey} </span>
                                </div>
                            </div>
                        </div>
                        
                        <hr/>
                        <div className="col-md-12 col-sm-12 col-xs-12" 
                            style={Object.assign({},{marginBottom: '20px' ,padding:'5px', 
                                    marginTop:'-15px'}, backgroundShadow)}  >
                            {
                                this.state.private ? 
                                    <button className="btn btn-success col-md-12 col-sm-12 col-xs-12" 
                                        onClick={ this.switch.bind(this,'public') }
                                    >Switch to Public Graphic Templates</button> :
                                    <button className="btn btn-success col-md-12 col-sm-12 col-xs-12" 
                                        onClick={ this.switch.bind(this,'private') }
                                    >Switch to Private Graphic Templates</button> 
                            }
                        </div>
                        <br/>
                        <br/>
                        <ul className="list-group col-md-12 col-sm-12 col-xs-12" 
                            style={{marginTop:'-65px'}} >
                            {
                                this.state.tempArr.map( (temp,i) => {
                                    return(
                                        <li className="list-group-item col-md-12 col-sm-12 col-xs-12" 
                                            key={i} style={backgroundShadow} >
                                            <b>Template Name:</b>{` ${temp.name.substr(0,30)}...`}
                                            
                                            <Link className="btn btn-success btn-xs pull-right" to={`/template/show/${temp.id}`}> 
                                                Docs And See
                                            </Link>
                                            {
                                                temp.category == "private" ? 
                                                <Link style={{marginRight:'10px'}} className="btn btn-default btn-xs pull-right" 
                                                    to={`/template/${temp.id}/edit`} >
                                                    Update It!!
                                                </Link> : null
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user, templates } = state
    return{
        user, templates
    }
}

const propsToState = dispatch => {
    return{
        getTemplates: params => dispatch( actions.getTemplates(params) )
    }
}

export default connect(mapStateToProps, propsToState)(ListGraphicTemplate)