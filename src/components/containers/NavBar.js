import React, { Component }                            from 'react'
import { Link }                                        from 'react-router-dom'
import { connect }                                     from 'react-redux'
import actions                                         from '../../actions'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer }                               from 'react-router-bootstrap'
import { withRouter }                                  from 'react-router'

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    logout(){
        this.props.logout()
        .then(data => { 
            this.props.history.push('/')
            return
        })
        .catch(err => {
            console.log('err',err.message)
            return
        })
    }
    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link className="navbar-brand" to="/"><strong>MailMeteor</strong></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        {
                            this.props.user.id != '' ?  
                            <Nav>
                                <NavDropdown eventKey={1} title="Emails and Template Options" id="basic-nav-dropdown">
                                    <LinkContainer to="/email-creator">
                                        <MenuItem eventKey={1.1}>Email Creator</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="/emails-list">
                                        <MenuItem eventKey={1.2} >Email List</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="createGraphicTemplate" >
                                        <MenuItem eventKey={1.3} >Template Creator</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="/templates-list" >
                                        <MenuItem eventKey={1.4} >Templates List</MenuItem>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav> : null
                        }
                        {
                            this.props.user.id == '' ?
                            <Nav pullRight>
                                <LinkContainer to="/signin">
                                    <NavItem eventKey={1}>Sign In</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/signup">
                                    <NavItem eventKey={2}>Sign Up</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/prices">
                                    <NavItem eventKey={2}>Pricing</NavItem>
                                </LinkContainer>
                            </Nav> :  <Nav pullRight>
                                <NavItem eventKey={1} onClick={this.logout.bind(this)} >Logout</NavItem>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Navbar>
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

const dispatchToProps = dispatch => {
    return{
        logout: () => dispatch(actions.logoutUser())
    }
}

export default connect(mapStateToProps,dispatchToProps)( withRouter(NavBar) )