import React, { useState } from "react";
import '../data/projects'
// import { projects } from "./data/projects";
import '../Button.module.css';
import '../background.modules.css';
function Minishell_Card() {
    return (
        <>
            <div className="Card-div lineUp" style={{height: '450px'}}>
                <div>
                <div className="infos ">
                        <div><h2 className="heads-project font-bold ">Minishell</h2></div>
                        <div><p className="overview-decription"> The Minishell project is designed to teach students
                        about shell programming and system programming in C.
                        It involves creating a simple Unix shell that can interpret
                        and execute commands</p></div>
                        <div><h2 className="heads-project font-bold " style={{fontSize : '20px'}}>Skills :</h2></div>
                        <ul className="px-7">
                                    <li>- Learn how a shell operates and interacts with the operating system.</li>
                                    <li>- Develop skills in parsing and interpreting user input.</li>
                                    <li>- Gain experience with system calls for process management, file operations,
                                         and inter-process communication.</li>
                                    <li>- Manage foreground and background processes, handle signals, and implement features like job control.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Minishell_Card