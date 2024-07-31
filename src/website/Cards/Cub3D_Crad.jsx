import React, { useState } from "react";
import '../data/projects'
// import { projects } from "./data/projects";
import '../Button.module.css';
import '../background.modules.css';
import IceptionProject from "../projects/inception";
import FT_TranscedenceProject from "../projects/Minishell";
import FT_irc from "../projects/ft_irc";
function Cub3D_Card() {
    return (
        <>
            <div className="border p-5 w-[700px] border-[#494848] rounded-2xl  lineUp">
                        <div><h2 className="heads-project font-bold">Cub3D</h2></div>
                        <div><p className="overview-decription">Cub3D is  3D game  inspired from Wolfenstein 3D and focuses on teaching students the fundamentals of ray-casting to create a simple 3D game engine.</p></div>
                        <div><h2 className="heads-project font-bold my-3 " style={{fontSize : '20px'}}>Skills & Learn :</h2></div>
                        <ul className="px-7">
                                    <li>- Students learn to render 3D graphics by projecting 2D grid maps into a 3D space, creating the illusion of depth and perspective..</li>
                                    <li>- The primary technique used in Cub3D is ray-casting, which simulates a 3D perspective by casting rays from the player's point of view to detect walls and obstacles..</li>
                                    <li>- Handling user inputs, such as keyboard and mouse events, to allow player movement and interaction within the game world..</li>
                        </ul>
            </div>
        </>
    )
}

export default Cub3D_Card