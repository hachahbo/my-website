import React, { useState } from "react";
import './data/projects'
import { projects } from "./data/projects";
import './Button.module.css'
import './background.modules.css'
function profileInfo() {
    return (
        <>
            <div className="profile-div lineUp broder">
                <div className="profilePicture"> 
                <img className="edite-profile-picture" src="/d12afab43f735d3015f2bb6f52387bf6.jpeg" alt="" /></div>
                <div className="info-profile">
                    <div><h2 style={{ marginTop: '10px',marginBottom : '0px', fontSize: '35px'}} className="font-bold">HAMZA CHAHBOUNE</h2>
                    <p style={{ marginTop: '4px', marginLeft: '4px', marginBottom : '4px'}}>talib 3ilm lpiciyat</p></div>
                    {/* <div className="flex ">
                        <img className="w-9"  src="/images/icons8-c++-50 (2).png"></img>
                        <img className="w-9" src="/images/icons8-c++-50 (1).png"  ></img>
                        <img className="w-9" src="/images/icons8-javascript-50 (1).png"  ></img>
                        <img className="w-9" src="/images/icons8-html-5-50 (2).png"  ></img>
                        <img className="w-9" src="/images/icons8-html-5-50 (3).png"  ></img>
                        <img className="w-9" src="/images/icons8-DOCKER.png"  ></img>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default profileInfo