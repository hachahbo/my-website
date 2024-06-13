// import React, { useState } from "react";
// import './data/projects'
// import { projects } from "./data/projects";
// import './Button.module.css'
// import './background.modules.css'
import React, { useState } from "react";
import './data/projects'
import { projects } from "./data/projects";
import './Button.module.css';
import './background.modules.css';
import IceptionProject from "./projects/inception";
import FT_TranscedenceProject from "./projects/ft_trascendence";
import FT_irc from "./projects/ft_irc";
function infofAboutProject({project}) {
    return (
        <>
            <div className="information-div lineUp scroll-container">
                <div style={{margin: 'auto'}}>

                {project == 'INCEPTION' && <IceptionProject/>}
                {project == 'FT_\
                    TRANSCENDENCE' && <FT_TranscedenceProject/>}
                {project == 'FT_IRC' && <FT_irc/>}
            </div>
            </div>
        </>
    )
}

export default infofAboutProject