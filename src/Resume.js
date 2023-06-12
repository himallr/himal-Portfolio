import React from "react";
import resume from "./images/resume.jpg";

function Resume(){
    return(
        <div className="container">
            <img src={resume} alt="resume" className="img-fluid"></img>
        </div>
    )
}

export default Resume;