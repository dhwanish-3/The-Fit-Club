import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'

const Header=()=>{
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            <ul className="header-menu">
                <li key="1">Home</li>
                <li key="2">Programs</li>
                <li key="3">Why us</li>
                <li key="4">Plans</li>
                <li key="5">Testimonials</li>
            </ul>
        </div>
    )
}

export default Header;