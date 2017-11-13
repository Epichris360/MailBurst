import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { LinkContainer }    from 'react-router-bootstrap'
import { withRouter }       from 'react-router'

class NewNavBar extends Component{
    constructor(props){
        super(props)
    }
    logout(){
        this.props.logout()
        .then(date => {
            this.props.history.push('/')
        })
        .catch(err => {
            console.log('err',err.message)
        })
    }
    render(){ 
        return(
            <header id="header" >
                <h1 id="logo"><Link className="navbar-brand" to="/">MailMeteor</Link></h1>
                <nav id="nav">
                    <ul>
                        <li className="current"><a href="index.html">Welcome</a></li>
                        {
                            this.props.user.id == '' ?
                            <li><Link to="/signin">Sign In</Link></li> : null
                        }
                        {
                            this.props.user.id == '' ? 
                            <li><Link to="/signup" >Sign Up</Link></li> : null
                        }
                        {
                            this.props.user.id != '' ?
                            <li><Link onClick={this.logout.bind(this)} to="">Logout</Link></li>:null
                        }
                        <li className="submenu">
                            <a href="#">Layouts</a>
                            <ul>
                                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                                <li><a href="right-sidebar.html">Right Sidebar</a></li>
                                <li><a href="no-sidebar.html">No Sidebar</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li className="submenu">
                                    <a href="#">Submenu</a>
                                    <ul>
                                        <li><a href="#">Dolore Sed</a></li>
                                        <li><a href="#">Consequat</a></li>
                                        <li><a href="#">Lorem Magna</a></li>
                                        <li><a href="#">Sed Magna</a></li>
                                        <li><a href="#">Ipsum Nisl</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#" className="button special">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
const mapStateToProps = state => {
    const { user } = state
    return{
        user
    }
}

const dispatchToProps = dispatch => {
    return{
        logout: () => dispatch(actions.logoutUser())
    }
}

export default connect(mapStateToProps,dispatchToProps)( withRouter(NewNavBar))