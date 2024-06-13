import React, { useState } from "react";
import './data/projects'
import { projects } from "./data/projects";
import './Button.module.css'
import './background.modules.css'
function DisProjects({ project, handleButtonClick}) {
    let i = 0;
    return (
        <>
        {/* projects.map((project) => <div>
            { */}
                <div className="project lineDown" key={project.id}>
                    <div className="infos">
                        <div ><p className="counter">#0{project.counter}</p></div>
                        <div><h2 className="heads-project ">{project.projectName}</h2></div>
                        <div><p className="so-heads-project">{project.date}</p></div>
                        {/* <div><p className="overview-decription">{project.overView}</p></div> */}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div onClick={handleButtonClick} id="clickButton" className="mode-1"><p className="btn btn1">RESUME</p></div>
                        <div onClick={() => handleButtonClick(project.projectName)} id="clickButton" className="mode-1"><p className="btn btn1">MORE</p></div>
                    </div>
                </div>
            {/* } */}
         {/* </div>) */}
        </>
    )
}

export default DisProjects