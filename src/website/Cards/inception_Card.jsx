import React, { useState } from "react";
import '../data/projects'
// import { projects } from "./data/projects";
import '../Button.module.css';
import '../background.modules.css';
import IceptionProject from "../projects/inception";
import FT_TranscedenceProject from "../projects/Minishell";
import FT_irc from "../projects/ft_irc";
function InceptionCard() {
    return (
        <>
            <div className="Card-div lineUp">
                <div>
                <div className="infos">
                        <div><h2 className="heads-project ">INCEPTION</h2></div>
                        <div><p className="overview-decription">This project is a tutorial on system administration using 
                            Docker. It involves creating a personal virtual machine 
                            and virtualizing several Docker images...</p></div>
                        <div><h2 className="heads-project " style={{fontSize : '20px'}}>Skills :</h2></div>
                        <ul style={{marginRight : '35px'}}>
                                    <li>learn how to set up and manage Docker containers within a virtualized environment.</li>
                                    <li>gain skills in configuring and securing services like NGINX, MariaDB, and WordPress.</li>
                                    <li>understanding networking and service interaction in a containerized setup.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default InceptionCard