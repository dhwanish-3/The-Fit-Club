import React, { useState } from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll/modules";

const Header=()=>{
    const mobile=window.innerWidth<=768?true:false;
    const [menuOpened,setMenuOpened]=useState(false);
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            {(mobile===true && menuOpened===false)?(
            <div className='bars-container'
            onClick={()=>setMenuOpened(true)}
            >
                <img className='bars' src={Bars} alt="" />
            </div>
            ):(
            <ul className="header-menu">
                <li>
                    <Link onClick={()=>setMenuOpened(false)}
                        to="hero"
                        activeClass="active"
                        spy={true}
                        smooth={true}>
                            Home</Link>
                </li>
                <li>
                    <Link onClick={()=>setMenuOpened(false)}
                        to="Programs"
                        spy={true}
                        smooth={true}>
                            Programs</Link>
                </li>
                <li>
                    <Link onClick={()=>setMenuOpened(false)}
                        to="Reasons"
                        spy={true}
                        smooth={true}>
                            Why us</Link>
                </li>
                <li>
                    <Link onClick={()=>setMenuOpened(false)}
                        to="Plans"
                        spy={true}
                        smooth={true}>
                            Plans</Link>
                </li>
                <li>
                    <Link onClick={()=>setMenuOpened(false)}
                        to="Testimonials"
                        spy={true}
                        smooth={true}>
                            Testimonials</Link>
                </li>
            </ul>
            )}            
        </div>
    )
}

export default Header;