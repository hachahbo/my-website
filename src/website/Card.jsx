import React, { useState } from "react";
import './data/projects'
import { projects } from "./data/projects";
import './Button.module.css';
import './background.modules.css';
import IceptionProject from "./projects/inception";
import FT_TranscedenceProject from "./projects/Minishell";
import FT_irc from "./projects/ft_irc";
import InceptionCard from "./Cards/inception_Card";
import Ft_irc_Card from "./Cards/ft_irc_Card";
import Minishell_Card from "./Cards/Minishell_Card";
import Cub3D_Card from "./Cards/Cub3D_Crad";
function CardInfo({project}) {
    return (
        <>
                {console.log('project ->>>>>>\'', project,'\'')}
                {console.log('FT_      TRANSCENDENCE')}

                {project == 'INCEPTION' && <InceptionCard/>} 
                {project == 'Minishell' && <Minishell_Card/>}
                {project == 'FT_IRC' && <Ft_irc_Card/>}
                {project == 'Cub3D' && <Cub3D_Card/>}
                {/* <div className="information-div lineUp scroll-container">
                <div style={{margin: 'auto'}}>

                {project == 'INCEPTION' && <InceptionCard/>}
            </div>
            </div> */}
            {/* <Ft_irc_Card/> */}
            {/* <Ft_trascendence_Card/> */}
        </>
    )
}

export default CardInfo