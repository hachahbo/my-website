import React, { useState } from "react";
import './data/projects'
import { projects } from "./data/projects";
import './Button.module.css'
import './background.modules.css'
function profileInfo() {
    return (
        <>
            <div className="profile-div lineUp">
                <div className="profilePicture"> 
                <img className="edite-profile-picture" src="/d12afab43f735d3015f2bb6f52387bf6.jpeg" alt="" /></div>
                <div className="info-profile">
                    <div><h2 style={{ marginTop: '10px',marginBottom : '0px', fontSize: '35px'}}>HAMZA CHAHBOUNE</h2>
                    <p style={{ marginTop: '4px', marginLeft: '4px', marginBottom : '4px'}}>talib 3ilm lpiciyat</p></div>
                    <img style={{ marginTop: '4px', marginLeft: '4px'}} src="/images/icons8-c++-50 (2).png" className="icons-language"></img>
                    <img src="/images/icons8-c++-50 (1).png"  className="icons-language"></img>
                    {/* <img src="/images/icons8-html-5-50 (1).png"  className="icons-language"></img> */}
                    {/* <img src="/images/icons8-CSS-5-50.png"  className="icons-language" style={{ width: '30px'}}></img> */}
                    <img src="/images/icons8-javascript-50 (1).png"  className="icons-language"></img>
                    <img src="/images/icons8-html-5-50 (2).png"  className="icons-language"></img>
                    <img src="/images/icons8-html-5-50 (3).png"  className="icons-language"></img>
                    <img src="/images/icons8-DOCKER.png"  className="icons-language"></img>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default profileInfo