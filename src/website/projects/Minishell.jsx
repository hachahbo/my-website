import React, { useState } from "react";
import '../data/projects'
import { projects } from "../data/projects";
import '../Button.module.css'
import '../background.modules.css'

function MnishellProject() {
    return (
        <>
            
                <div className="head-titele">
                    <h1 className="head-information-project">MINISHELL</h1>

                </div>
                    <div style={{display:'flex', justifyContent: 'center',  marginBottom: '30px'}}>
                            <div  style={{ marginBottom:'40px', width: '450px', display:'flex', justifyContent: 'center', border:'solid', borderColor:  'rgb(73, 72, 72)'}} className="edit-paragraph lineRight">
                                <p>
                                <h2 className="font-bold text-xl my-5">Checkout more resources </h2>
                                    <ul>
                                        <li> <a className="underline " style={{color: 'white'}} target="_blank" href="https://m4nnb3ll.medium.com/minishell-building-a-mini-bash-a-42-project-b55a10598218">- Minishell: Building a mini-bash</a></li>
                                        <li> <a className="underline" style={{color: 'white'}} target="_blank" href="https://www.youtube.com/playlist?list=PLGU1kcPKHMKj5yA0RPb5AK4QAhexmQwrW">- Writing Your Own Shell </a></li>
                                        <li> <a className="underline" style={{color: 'white'}} target="_blank" href="https://tuto.grademe.fr/inception/">- Useful playlist (Videos) fro minishel project</a></li>
                                        <li> <a className="underline" style={{color: 'white'}} target="_blank" href="https://minishell.org/index.html">- example pf minishell project </a></li>
                                    </ul>
                                </p> 
                            </div>
                        </div>

        </>
    )
}

export default MnishellProject