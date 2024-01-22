import React, { useState } from "react";
import './navbar.css';
import logo from '../../Assets/logo.png';
import contactImg from '../../Assets/contact-me.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
       <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="navbarMenu">
         <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="menuItemList">Home</Link>
         <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="menuItemList">About</Link>
         <Link activeClass='active' to="work" spy={true} smooth={true} offset={-5} duration={500} className="menuItemList">Portfolio</Link>
        </div>
        <button className="navbarMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="contact" className="navbarMenuImg"/>Contact Me</button>

             <FontAwesomeIcon icon={faBars} style={{color: "#2391d6",}} alt="Menu" className="burgerMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
         <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="menuList" onClick={()=>setShowMenu(false)}>Home</Link>
         <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="menuList" onClick={()=>setShowMenu(false)}>About</Link>
         <Link activeClass='active' to="work" spy={true} smooth={true} offset={-5} duration={500} className="menuList" onClick={()=>setShowMenu(false)}>Portfolio</Link>
         <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-5} duration={500} className="menuList" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
       </nav>
    )
}

export default Navbar