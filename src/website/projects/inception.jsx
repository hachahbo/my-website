import React, { useState } from "react";
import '../data/projects'
import { projects } from "../data/projects";
import '../Button.module.css'
import '../background.modules.css'

function IceptionProject() {
    return (
        <>
               

                <div className="head-titele">
                    <h1 className="head-information-project">INCEPTION <img className="image-project-info" src="/images/DOKER-INFO-500.png" ></img>
                    </h1>
                    <div style={{display:'flex'}}>
                        <div className="edit-paragraph lineRight">
                        <p>
                        <h2 style={{marginTop: '0px'}}> What is Docker ?</h2>
                        Docker is a free and open-source platform
                        that allows developers to package applications
                        with all their dependencies into standardized
                        units called containers. These containers are
                        lightweight, portable, and self-sufficient,
                        meaning they include everything an application
                        needs to run  code, runtime, system tools, and settings -
                        regardless of the underlying infrastructure.
                        </p> 
                        </div>
                        <img className="image-infos lineDown"  src="/images/container (1).png"></img>
                    </div>
                    <div style={{display:'flex'}}>
                        <img className="image-infos lineDown"  src="/images/container (2).png"></img>
                        <div className="edit-paragraph lineRight">
                        <p >
                        <h2 style={{marginTop: '0px'}}> What is Container ?</h2>
                        a container is a standardized unit that packages up
                        an application's code and all its dependencies. 
                        Imagine it like a shipping container for physical goods 
                        – it ensures everything an application needs 
                        to run (its code, libraries, settings) is bundled 
                        together neatly. This allows the application to run 
                        reliably and consistently across different 
                        computing environments, from a developer's laptop t
                        o a large cloud server.
                        </p>
                        </div>
                    </div>
                    <div className="cont-ver lineDown">
                        <h2 style={{margin: 'auto'}}> Virtualization  VS  Containerization</h2>
                        <div>
                        <img className="image-cont-ver "  src="/images/1024x512 (1).png"></img>
                        </div>
                    </div>
                    <div className="content-para">
                        <div className="first-side">
                            <p>
                            - Imagine creating virtual machines (VMs) – 
                            software-based computers that act like
                            physical computers. <br/> <br/>
                            - Each VM has its own virtual CPU, memory, storage,
                            and even operating system . <br/> <br/>
                            - VMs are isolated from each other and the physical server,
                             preventing conflicts and ensuring consistent behavior. <br/> <br/>
                            - Allows running multiple operating systems on a 
                            single server, maximizing hardware utilization.


                            </p>
                        </div>
                        <div className="first-side">
                            <p>
                             - Imagine packaging an application with all its
                                dependencies (code, libraries) into a lightweight,
                                self-contained unit called a container. <br/> <br/>
                             - Unlike VMs, containers share the host system's
                                operating system kernel, making them much faster
                                and more efficient. <br/> <br/>
                            - Containers are portable and can run on any system with a
                                compatible container engine (like Docker). <br/> <br/>
                            - Containers are much faster to start 
                                and use fewer resources compared to VMs.
                            </p>

                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="edit-paragraph lineRight">
                        <p >
                        <h2 style={{marginTop: '0px'}}> What is Mriadb ?</h2>
                        MariaDB is a free and open-source relational
                        database management system (RDBMS) known for
                        its reliability, performance, and ease of use.
                        It's a popular choice for many web applications 
                        and websites, especially those that require a powerful 
                        and scalable database solution .
                        </p>
                        </div>
                        <img style={{marginTop: '0px'}} className="image-infos lineDown"  src="/images/icons8-mariadb-480 (1).png"></img>
                    </div>
                    <div style={{display:'flex'}}>
                        <img style={{marginTop: '0px'}} className="image-infos lineDown"  src="/images/pngwing.com (1).png"></img>
                        <div className="edit-paragraph lineRight">
                        <p >
                        <h2 style={{marginTop: '0px'}}> What is Nginx ?</h2>
                        Nginx (pronounced "engine-ex") is a free, open-source, 
                        high-performance web server and reverse proxy, 
                        also capable of functioning as a mail proxy, HTTP cache, 
                        and load balancer. It's known for its stability, efficiency, 
                        and ability to handle high traffic loads . Nginx excels at
                        serving static content like HTML, CSS, and JavaScript files 
                        to web browsers efficiently.
                        </p>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="edit-paragraph lineRight">
                        <p >
                        <h2 style={{marginTop: '40px'}}> What is WordPress ?</h2>
                        WordPress is a free and open-source content management
                        system (CMS) widely used for creating websites and blogs.
                        It's known for its user-friendly interface, extensive
                        functionality, . WordPress offers a user-friendly and versatile 
                        platform for creating and managing websites of various types.
                        </p>
                        </div>
                        <img style={{marginTop: '60px', width:'300px', height:'200px'}} className="image-infos lineDown"  src="/images/pngwing.com (2) (1).png"></img>
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
                </div>

        </>
    )
}

export default IceptionProject