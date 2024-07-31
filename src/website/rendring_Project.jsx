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
        <div className="flex  justify-center items-center ">
            <div className="  my-5 grid grid-cols-3">
                    {projects.map((project) => (
                        <div className="col-span-1 ">
                            <DisProjects  key={project.id}  project={project} handleButtonClickResume={handleButtonClickResume} handleButtonClick={handleButtonClick} />
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default RendringProjects