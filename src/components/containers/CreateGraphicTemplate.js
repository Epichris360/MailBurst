import React, { Component }        from 'react'
import DangerAlert                 from './DangerAlert'
import { backgroundShadow, input } from './Css'
import { v4 }                      from 'uuid'
import actions                     from '../../actions'
import { connect }                 from 'react-redux'
import ent                         from 'ent'

class CreateGraphicTemplate extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'', html:'', error: false, errorMessage:'', category:'private',
            variablesComma:''
        }
    }
    submitGraphicTemplate(){ 
        //variables comma check
        //add loading bar
        const { name, html, category, variablesComma } = this.state
        if( variablesComma.split(' ') > 1 ){
            this.setState({error:true, errorMessage:'error! there was a space in your variables!'})
            return
        }
        if( name == '' || html == '' || variablesComma == '' ){
            this.setState({error:true, errorMessage:'Somethings Empty!'})
            return 
        }
        if(this.checkVarsAndBody(html, variablesComma)){
            this.setState({error: true, errorMessage:'Amount of variables in template HTML and variables input dont match!'})
            return 
        }
        const user  = this.props.user
        const template = { name, html:ent.decode(html), 
            template_id:v4(), user_id: user.id, category, variablesComma }
        this.props.createTemplate( template )
        .then(data => {
            this.props.history.push("/templates-list")
            return 
        })
        .catch(err => {
            this.setState({ error:true, errorMessage:err.message })
            return
        })
    }
    checkVarsAndBody(templateHtml, variablesComma){
        let templateSplit = templateHtml.split('*')
        let varSplit   = variablesComma.split(',')
        let howManyVarsFound = 0
        for( let x = 0 ; x < varSplit.length ; x++ ){
            let indexNum = templateSplit.map( t => t ).indexOf(`${varSplit[x]}`)
            if( indexNum >=0 ){
                howManyVarsFound++
            }
        }
        if( varSplit.length == howManyVarsFound ){
            //falsifies the if statment from where the request comes from. so that the parent
            //function can continue
            return false
        }else{
            //validates the if statement and exists the parent function
            return true 
        }
    }
    render(){
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12" 
                    style={Object.assign({},backgroundShadow,{marginTop:'35px'})} >
                        <DangerAlert error={this.state.error} errorMessage={this.state.errorMessage} />
                        <h1>Create Any Email Template That You Want!!!:</h1>
                        <span style={{fontSize:'20px'}} >For the best experience, create your templates the way you normally would and paste them here</span>
                        <hr/>
                        <label htmlFor="">Name of Template:</label>
                        <input type="text" className="12u" 
                            placeholder="Title for the Email!"
                            required={true}
                            style={input}
                            onChange={ e => this.setState({ name: e.target.value }) }
                        />
                        <label htmlFor="">Body of Template. Remember The The PlaceHolders Must Be *Surrounded* by *Asterisk's*:</label>
                        <textarea cols="30" rows="10" className="12u"
                            required={true}
                            style={input}
                            placeholder="Paste your HTML!!! All styling must be in a style tag or inline. no cdn's or anything else!"
                            onChange={ e => this.setState({ html: e.target.value }) }
                        ></textarea>
                        <br/>

                        <label htmlFor="">List of PlaceHolder Variables: Comma seprated,no spaces, Same Spelling as Above</label>
                        <input type="text" className="12u"
                            required={true} style={input}
                            placeholder="CommaSeperated,NoSpaces,WrittenJustLike^^^^"
                            onChange={ e => this.setState({variablesComma: e.target.value}) }
                        />

                        {
                            this.props.user.role == "admin" ? 
                                <select className="btn btn-default" onChange={e => this.setState({category: e .target.value}) }>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select> : null
                        }

                        <button className="btn btn-success" 
                            onClick={ this.submitGraphicTemplate.bind(this) } 
                        >
                            Submit!
                        </button>
                        <div className="col-md-12 col-sm-12 col-xs-12" 
                            style={{height:'10px',marginTop:'15px', marginBottom:'15px'}} >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state
    return{
        user
    }
}

const propsToState = dispatch => {
    return{
        createTemplate: (params) => dispatch(actions.createTemplate(params))
    }
}

export default connect(mapStateToProps,propsToState)(CreateGraphicTemplate)