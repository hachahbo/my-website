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
import CardInfo from "./Card";
import './data/projects'
function Portfolio() {


    const [ShowHome, setSHowHome] = useState('1')
    // const [ShowHomeResume, setSHowHomeResume] = useState("")
    const [project, setProject] = useState("")

    const handleButtonClick = (name) =>
    {
        setProject(name)
        setSHowHome('3');
    }
    const handleButtonClickResume = (name) =>
    {
        setProject(name)
        setSHowHome('2');
    }
    const handleButtonClick_true = () =>
    {
        setSHowHome('1');
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
                {ShowHome == '1' &&
                    <div id="home" className="main">
                            <AllProfile/>
                            <RendringProjects projects={projects} handleButtonClickResume={handleButtonClickResume}
                                      handleButtonClick={handleButtonClick} />
                    </div>
                }
                {ShowHome == '2' &&
                    <div id="home" className="main">
                        <div className="center-resume">
                            <CardInfo project={project}/>
                            <div className="Button-Choice">
                                <div  className="trace lineDown" id="clickButton"> <h4 class=" btn" onClick={() => handleButtonClick(project)}>MORE</h4></div>
                                <div className="trace  lineDown"> <h4 class="btn" onClick={handleButtonClick_true}>BACK</h4></div>
                             </div>
                        </div>
                    </div>
                }
                {ShowHome == '3' &&
                    <div className="main with-back">
                        <InfofAboutProject project={project}/>
                        <div className="back-button  lineDown"> <h4 class="back-button-1 btn" onClick={handleButtonClick_true}>BACK</h4></div>
                    </div>
                }
        </>)}
  
export default Portfolio