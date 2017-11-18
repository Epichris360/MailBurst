import React, { Component } from 'react'
import Modal                from 'react-modal';

class ShowModalEmailTemplate extends Component{
    render(){
        return(
            <Modal isOpen={this.props.modalOpen} >
                
                    <div className="row" style={{overflowX:'hidden'}}>
                        <div className="col-md-12 col-sm-12 col-xs-12" style={{overflowY:'scroll'}}>
                            <h1>Preview of the Email+Template</h1>
                            <hr/>
                            <div style={{border:'1px solid #757372', padding:'10px'}} dangerouslySetInnerHTML={{__html:this.props.template.html}} ></div>
                            <hr/>
                            <button onClick={ this.props.switchModal } className="btn btn-primary col-md-6 col-sm-6 col-xs-12">
                                Close!
                            </button>
                        </div>
                    </div>
                
            </Modal>
        )
    }
}

export default ShowModalEmailTemplate