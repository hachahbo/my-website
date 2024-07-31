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
import MnishellProject from "./projects/Minishell";
import FT_irc from "./projects/ft_irc";
// import MnishellProject from "./projects/Minishell";
import InceptionCard from "./Cards/inception_Card";
import Cub3D from "./projects/Cub3D";
function infofAboutProject({project}) {
    return (
        <>
            {console.log(project)}
            <div className="information-div lineUp scroll-container">
                <div style={{margin: 'auto'}}>

                {project == 'INCEPTION' && <IceptionProject/>}
                {project == 'Minishell' && <MnishellProject/>}
                {project == 'FT_IRC' && <FT_irc/>}
                {project == 'Cub3D' && <Cub3D/>}
            </div>
            </div>
        </>
    )
}

export default infofAboutProject