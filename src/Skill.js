import React from "react";
import Skill from "./Skills";

function Skills() {
    const skills = [
        {
            title: "Programming Languages",
            types: ["C", "C++", "Java"],
        },
        {
            title: "Front End Skills",
            types: ["HTML", "CSS", "JAVASCRIPT", "Bootstrap", "ReactJs", "Flutter basics"],
        },
        {
            title: "Back End Skills",
            types: ["NodeJs", "ExpressJS", "PHP"],
        },
        {
            title: "Databases",
            types: ["MySQL"],
        },
        {
            title: "Project Management Skills",
            types: ["Figma", "Canva", "Visual Studio Code"],
        },
    ]

    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row pt-5 mx-4">
                    <h1 className="text-white">Skills</h1>
                    <div className="my-4">
                        <h4 className="text-white">Here are some of my Skills which I have gained from the projects i have gone through and also technologies with web development world.</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                skills.map(e => <Skill  {...skills} title={e.title} types={e.types} />)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;