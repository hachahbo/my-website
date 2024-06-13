import React, { useState } from "react";
import './Button.module.css'
import './background.modules.css'
import './data/projects.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "./data/projects.js";
import RendringProjects from "./rendring_Project.jsx";
import ProfileInfo from "./profileInfo.jsx";
import InfofAboutProject from "./information.jsx";
import AllProfile from "./Profile.jsx";
import './data/projects'
function Portfolio() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const [ShowHome, setSHowHome] = useState(true)
    const [project, setProject] = useState("")

    const handleButtonClick = (name) =>
    {
        setProject(name)
        console.log("->>>>>>>>", name);
        setSHowHome(false);
    }
    const handleButtonClick_true = () =>
    {
        setSHowHome(true);
    }


    return (
        <>

                <div className="light-grid">
                    <div className="grid-container">
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                        <div className="light-grid-column"></div>
                    </div>
                </div>
                {ShowHome &&
                    <div id="home" className="main">
                        
                            <AllProfile/>
                            <RendringProjects projects={projects} handleButtonClick={handleButtonClick} />
                            
                    </div>
                }
                {!ShowHome &&
                <div className="main with-back">
                        <InfofAboutProject project={project}/>
                        <div className="back-button  lineDown"> <h4 class="back-button-1 btn" onClick={handleButtonClick_true}>BACK</h4></div>
                </div>
                }
        </>)}
  
export default Portfolio