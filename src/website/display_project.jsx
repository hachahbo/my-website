import React, { useState } from "react";
import './data/projects'
import { projects } from "./data/projects";
import './Button.module.css'
import './background.modules.css'
function DisProjects({project, handleButtonClickResume, handleButtonClick}) {
    let i = 0;
    return (
        <>
                <div className="project w-[400px] lineDown inline-block m-3" key={project.id}>
                    <div className="infos">
                        <div ><p className="counter w-10">#0{project.counter}</p></div>
                        <div><h2 className="heads-project font-bold ">{project.projectName}</h2></div>
                        <div><p className="so-heads-project">{project.date}</p></div>
                        <div className="m-5 h-9 px-2">
                        <div className="h-full gap-1 flex items-center">
                                {project.icons.map((icon) => (
                                    <img className="size-8" src={icon} alt="" />
                                ))}
                            </div>
                        </div>

                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div onClick={() => handleButtonClickResume(project.projectName)} id="clickButton" className="mode-1"><p className="btn btn1">RESUME</p></div>
                        <div onClick={() => handleButtonClick(project.projectName)} id="clickButton" className="mode-1"><p className="btn btn1">MORE</p></div>
                    </div>
                </div>
        </>
    )
}

export default DisProjects