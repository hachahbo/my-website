import React, { useState } from "react";
import '../data/projects'
// import { projects } from "./data/projects";
import '../Button.module.css';
import '../background.modules.css';
import IceptionProject from "../projects/inception";
import FT_TranscedenceProject from "../projects/Minishell";
import FT_irc from "../projects/ft_irc";
function ft_irc_Card() {
    return (
        <>
            <div className="Card-div lineUp">
                <div>
                <div className="infos">
                        <div><h2 className="heads-project font-bold ">FT_IRC</h2></div>
                        <div><p className="overview-decription">This project is typically aimed at understanding network programming,
                            handling multiple connections, and working with the IRC protocol..</p></div>
                        <div><h2 className="heads-project " style={{fontSize : '20px'}}>Skills & Learn :</h2></div>
                        <ul className="px-7">
                                    <li>Understanding the basics of network protocols and communication.</li>
                                    <li>Deepening your knowledge of C++ syntax and semantics.</li>
                                    <li>Working with low-level system calls and understanding their behavior.</li>
                                    <li>Understanding and implementing the IRC protocol (RFC 1459).</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ft_irc_Card