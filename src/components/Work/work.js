import React from "react";
import './work.css';
import Carousel from '../Carousels/carousels'


const Work = () => {
    return (
        <section id="work">
            <h2 className="workTitle">My Portfolio</h2>
            <span className="workDesc">I derive satisfaction from meticulously focusing on even the minutest details, ensuring that my work attains perfection at the pixel level. I eagerly look forward to applying my expertise and experience to assist businesses in reaching their objectives and establishing a robust online presence.</span>
            <Carousel />
        </section>
    )
}

export default Work