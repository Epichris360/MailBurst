import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'

class MyEmailsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            tempArr:[], private: false
        }
    }
    componentDidMount(){
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
                this.setState({tempArr: filtered})
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
    }
    render(){
        //fix public/private setting
        return(
            <div className="container" >
                <div className="row" >
                    <h1>My Emails List: {this.state.private ? 'Private' : 'Public!'}</h1>
                    <hr/>
                    <div>
                    {
                        this.state.private ?  
                            <button className="btn btn-success col-md-12 col-xs-12" 
                                onClick={ this.switch.bind(this,'private') }
                            >Switch to Private Email Templates</button> : 
                            <button className="btn btn-success col-md-12 col-xs-12" 
                                onClick={ this.switch.bind(this,'public') }
                            >Switch to Public Email Templates</button> 
                    }
                    </div>
                    <br/>
                    <ul className="list-group" style={{marginTop:'30px'}} >
                        {
                            this.state.tempArr.map( (temp,i) => {
                                return(
                                    <li className="list-group-item" key={i}>{temp.emailTitle}</li>
                                )
                            })
                        }
                    </ul>
                </div>
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
        getEmails: (params) => dispatch(actions.getEmails(params))
    }
}

export default connect(mapStateToProps,propsToState)(MyEmailsList)