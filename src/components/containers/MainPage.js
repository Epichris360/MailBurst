import React, { Component } from 'react'

class MainPage extends Component{
    render(){
        return(
            <div className="row" >
                <div style={bgimg}>
                    <div>
                        <img style={img} src="https://images.unsplash.com/photo-1504871632430-520be05a7c1d?auto=format&fit=crop&w=1351&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt=""/>
                    </div>
                    <div style={caption} >
                        <div className="col-md-11 col-sm-11 col-xs-12 mx-auto">
                            <span style={border}>Got Mail?</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const bgimg = { 
    
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    marginTop: '-20px'
}
    
const caption =  {
    position: 'absolute',
    left: 0,
    top: '20%',
    width: '100%',
    textAlign: 'center',
    color: '#000'
}
    
const border = {
    backgroundColor: '#111',
    color: '#fff',
    padding: '18px',
    fontSize: '25px',
    letterSpacing: '10px',
    opacity:'.70',
    marginTop:'20px'
}

const img = {
    maxWidth: '100%', height:'auto'
}

export default MainPage