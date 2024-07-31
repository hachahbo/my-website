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
                    <div>
                        <div id="home" className="main">
                                <AllProfile/>
                        </div>
                    <div>
                        <RendringProjects projects={projects} handleButtonClickResume={handleButtonClickResume}
                                handleButtonClick={handleButtonClick} />
                    </div>

                    </div>
                }
                {ShowHome == '2' &&
                        <div className=" h-[100vh] flex flex-col justify-center items-center">

                            <CardInfo project={project}/>
                            <div className="Button-Choice ">
                                <div  className="cursor-pointer lineDown" id="clickButton"> <h4 class=" btn" onClick={() => handleButtonClick(project)}>MORE</h4></div>
                                <div className="cursor-pointer trace  lineDown"> <h4 class="btn" onClick={handleButtonClick_true}>BACK</h4></div>
                             </div>
                        </div>
                }
                {ShowHome == '3' &&
                    <div className=" with-back h-[100vh] flex justify-center items-center">
                        <InfofAboutProject project={project}/>
                        <div className=" h-[800px] px-5   lineDown"> <h4 class="cursor-pointer w-20 btn" onClick={handleButtonClick_true}>BACK</h4></div>
                    </div>
                }
        </>)}
  
export default Portfolio