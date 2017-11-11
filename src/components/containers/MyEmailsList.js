import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'

class MyEmailsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            myEmails:[], publicTemplates:[], switch: false
        }
    }
    componentDidMount(){
        this.props.getEmails({user_id: this.props.user.id})
        .then(data => {
            console.log('data',data)
        })
        .catch(err => {
            console.log('err',err.message)
        })
    }
    render(){
        return(
            <div>
                <h1>My Emails List</h1>
                <hr/>
                <button className="btn btn-success col-md-12 col-xs-12" >Switch to Public Email Templates</button>
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