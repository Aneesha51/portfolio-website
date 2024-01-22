import React from "react";
import './skills.css';
import WebDesign from '../../Assets/web-design.png';
import JavaDesign from '../../Assets/Java-development.png';
import ReactDesign from '../../Assets/React-development.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do </span>
            <span className="skillDesc">Competent Front-End Developer that is passionate about crafting seamless user experiences and eager to 
            contribute creative solutions and technical expertise to dynamic web development projects. Well versed in 
            HTML5, CSS3, and JavaScript ES6, React and equipped in hands-on experience in Java and Android development.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Front-end Web Development</h2>
                        <p>Passionate Front-End Developer with a strong foundation in HTML5, CSS3, and JavaScript ES6, complemented by hands-on experience in Java and Android development. Proven track record in crafting seamless user experiences and contributing creative solutions to dynamic web development projects. </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={JavaDesign} alt="JavaDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Java Development</h2>
                        <p>Enthusiastic and skilled Front-End Developer with a strong emphasis on Java development. Proficient in leveraging Java to create dynamic and responsive user interfaces, demonstrating hands-on experience in crafting seamless web applications. Well-versed in Java's versatility for both frontend and backend development, showcasing a deep understanding of the language's object-oriented principles and design patterns. Practical experience in Android development further enhances my capability to create versatile and engaging mobile applications. Actively engaged in continuous learning. Results-driven and collaborative, with a proven ability to troubleshoot and debug, ensuring the delivery of high-quality, efficient, and scalable Java-based solutions. Eager to contribute my Java expertise to dynamic development projects and contribute to the success of forward-thinking teams.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={ReactDesign} alt="ReactDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>React Development</h2>
                        <p>Experienced Front-End Developer with a strong focus on React.js, a powerful JavaScript library for building user interfaces. Proficient in developing robust and interactive web applications by utilizing React's component-based architecture. Skilled in creating dynamic and responsive user interfaces that enhance the overall user experience. Well-versed in state management, component lifecycle, and the virtual DOM, enabling the efficient rendering of UI elements. Practical experience in leveraging React for building single-page applications (SPAs) and integrating with RESTful APIs to fetch and display data seamlessly. Adept at incorporating React Router for navigation and maintaining a clean and modular codebase. Actively engaged in continuous learning, as demonstrated by completion of SheCodes React – React Development course. Eager to apply React expertise to contribute creative solutions and technical excellence to innovative web development projects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;