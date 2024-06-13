import React, { useState } from "react";
import './data/projects'
import { projects } from "./data/projects";
import './Button.module.css'
import './background.modules.css'
import ProfileInfo from "./profileInfo";
function AllProfile() {
    
    return (
        <>
              <div className="banner" role="banner">
                        <div className="wrapper-width">
                            <div className="headerStyle lineUp">
                                <div className="lineStyle"></div>
                                <div className="divStyles">2002-04-26</div>
                                <div className="lineStyle"></div>
                                <div className="divStyles">lab</div>
                                <div className="lineStyle"></div>
                            </div>
                                <ProfileInfo/>
                            <div className="scroll-widget lineUp">
                                <div className="scroll-widget-text-top">
                                    0101101
                                </div>
                                <div className="line-scroll lineUp"></div>
                            </div>
                        </div>
            <div className="mode lineUp"><p className="btn">MODE</p></div>
            <div className="mode lineDown"><h2>MOST POPULAR PROJECTS</h2></div>
            </div>
        </>
    )
}

export default AllProfile