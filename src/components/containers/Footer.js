import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <div>
                <footer id="footer">
					<ul className="icons">
						<li><a href="#" className="icon circle fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon circle fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon circle fa-google-plus"><span className="label">Google+</span></a></li>
						<li><a href="#" className="icon circle fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon circle fa-dribbble"><span className="label">Dribbble</span></a></li>
					</ul>

					<ul className="copyright">
						<li>&copy; Cristian Segovia: segoviacristian23@hotmail.com</li>
						<li>A big Thank you to: <a href="http://html5up.net">HTML5 UP</a></li>
						<li>And <a href="https://www.turbo360.co">Turbo360</a> </li>
					</ul>
				</footer>
            </div>
        )
    }
}

export default Footer