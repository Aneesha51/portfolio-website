import React from "react";
import  './intro.css';
import bg from '../../Assets/bgImage.png';
import video from '../../Assets/motionBg.mp4';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
const Intro = () => {
    return (
       <section id="intro">
        <div className="overlay">
        <video src={video} autoPlay loop muted type="video/mp4"/>
        </div>
        <div className="introContent">
            <span className="greeting">Hello</span>
            <span className="introText"> I'm <span className="introName">Aneesha</span> <br/> Front-end Developer</span>
            <p className="introParagraph">I'm a Front-End Developer with a flair for creating <br/> visually appealing and user-friendly websites.</p>
            <Link><button className="btn"><FontAwesomeIcon icon={faBriefcase} beatFade style={{color: "#74C0FC",}} className="btnImg" />Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
       </section>
    )
}

export default Intro