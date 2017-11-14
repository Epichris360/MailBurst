import React, { Component } from 'react'
import {connect}            from 'react-redux'
import actions              from '../../actions'
import { Link }             from 'react-router-dom'
import Loader               from './Loader'

class MyEmailsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            tempArr:[], private: true, showModal:false, tempToShowInModal:null, loading: true
        }
    }
    componentDidMount(){
        if(this.props.emails.length > 0){
            const filtered = this.props.emails.filter( email => email.category == 'private' )
            this.setState({tempArr: filtered, loading: false})
            return
        }
        this.props.getEmails({user_id: this.props.user.id})
        .then(data => {
            //gets customers private email templates
            return 
        })
        .then( () => {
            this.props.getEmails({category:'public'})
            .then(data => {
                //gets public email templates
                return
            })
            .then( () => {
                //filters for only private email templates
                const filtered = this.props.emails.filter( email => email.category == 'private' )
                this.setState({tempArr: filtered, loading: false})
                return
            })
        })
        .catch(err => {
            console.log('err',err.message)
            return
        })
    }
    switch(which){
        //switches between the categories of templates
        const filtered = this.props.emails.filter( emails => emails.category == which )
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
                                style={{marginBottom:'25px', padding:'20px'}}>
                                <h2 className="col-md-6 col-sm-10 col-xs-10" >My Emails List: 
                                    {this.state.private ? 'Private' : 'Public!'}
                                </h2>
                                <div className="col-md-4 col-sm-10 col-xs-10" 
                                    style={{padding:'10px', borderStyle:'solid',borderWidth:'2px'}} >
                                    <h5>Api Key: {this.props.user.apiKey} </h5>
                                </div>
                            </div>
                        </div>
                        
                        <hr/>
                        <div style={{marginBottom:'50px', padding:'5px'}}  >
                            {
                                this.state.private ? 
                                    <button className="btn btn-success col-md-12 col-sm-12 col-xs-12" 
                                        onClick={ this.switch.bind(this,'public') }
                                    >Switch to Public Email Templates</button> :
                                    <button className="btn btn-success col-md-12 col-sm-12 col-xs-12" 
                                        onClick={ this.switch.bind(this,'private') }
                                    >Switch to Private Email Templates</button> 
                            }
                        </div>
                        <br/>
                        <br/>
                        <ul className="list-group" style={{padding:'5px', marginTop:'15px' }} >
                            {
                                this.state.tempArr.map( (temp,i) => {
                                    return(
                                        <li className="list-group-item col-md-12 col-sm-12 col-xs-12" key={i}>
                                            <b>Email Title:</b>{` ${temp.emailTitle.substr(0,30)}...`}
                                            
                                            <Link className="btn btn-success btn-xs pull-right" to={`/email/${temp.email_id}`}> 
                                                Docs And See
                                            </Link>
                                            {
                                                temp.category == "private" ? 
                                                <Link style={{marginRight:'10px'}} className="btn btn-default btn-xs pull-right" to={`/email/${temp.email_id}/edit`} >
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
    const { emails, user } = state
    return{
        emails, user
    }
}

const propsToState = dispatch => {
    return{
        //user_id or category:public
        getEmails: (params) => dispatch(actions.getEmails(params)),
        updateUser:(user,params) => dispatch(actions.updateUser(user,params))
    }
}

export default connect(mapStateToProps,propsToState)(MyEmailsList)