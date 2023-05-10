import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import logo from '../../assets/logo.png'
function Footer() {
    return (
        <div className="section-footer" id="footer">
            <hr />
            <div className="footer">
            <div className="social-links">
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={github} alt="" />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Footer
