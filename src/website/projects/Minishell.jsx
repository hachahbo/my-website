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
                            <div style={{ marginBottom:'40px', width: '400px', display:'flex', justifyContent: 'center', border:'solid', borderColor:  'rgb(73, 72, 72)'}} className="edit-paragraph lineRight">
                            <p>
                            <h2 style={{marginTop: '0px'}}>Checkout more resources </h2>
                                <ul>
                                    <li> <a style={{color: 'white'}} target="_blank" href="https://www.one-tab.com/page/z4g_bNlpQNyUhg6Azcbz_Q">Inception Docker SSL... </a></li>
                                    <li> <a style={{color: 'white'}} target="_blank" href="https://github.com/hachahbo/Inception_42">Inception_42 from my Github</a></li>
                                    <li> <a style={{color: 'white'}} target="_blank" href="https://tuto.grademe.fr/inception/">Inception tutorial</a></li>
                                    <li> <a style={{color: 'white'}} target="_blank" href="https://www.youtube.com/watch?v=PrusdhS2lmo">Docker and Kubernetes</a></li>
                                    <li> <a style={{color: 'white'}} target="_blank" href="https://www.youtube.com/watch?v=-YnMr1lj4Z8&t=22s">How Docker Works - Namespaces</a></li>
                                </ul>
                            </p> 
                            </div>
                        </div>

        </>
    )
}

export default MnishellProject