import React, { useState } from "react";
import './data/projects'

import './display_project'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DisProjects from "./display_project";
import { projects } from "./data/projects";
// import Carousel from 'react-bootstrap/Carousel';


function RendringProjects({projects, handleButtonClickResume,handleButtonClick}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    
    return (
        <div className="projects">
            {projects.map((project) => (
                    <DisProjects  key={project.id}  project={project} handleButtonClickResume={handleButtonClickResume} handleButtonClick={handleButtonClick} />
            ))}
                {/* <DisProjects key={projects.id} project={projects} handleButtonClick={handleButtonClick}/> */}
        </div>)
}

export default RendringProjects