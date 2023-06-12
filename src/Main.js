import React from "react";
import { Link } from "react-router-dom";
import himal1 from "./images/himal.jpeg";


function Main() {
    return (
        <div className="bg-dark">
            <div className="container pt-5">
                <div className="card bg-dark">
                    <div className="row">
                        <div className="col md-6">
                            <h1 className="card-title mx-3 text-white">Hello!</h1>
                            <div className="card-body my-1">
                                <h5 className="card-text text-white">I am Himal.I am a frontEnd Developer with a passion for building scalable and robust web applications. I am currently pursuing my Bachelors degree in Computer Science and Engineering at Velammal College of Engineering and Technology.I am always up for a challenge and I love to work in a fast paced environment. My goal is to work better on the projects which i have skills on the domain. I always take a part of whatever I do, whether I'm a member or leader of the team. Apart from Front End Development, I am also interested in Back End as well as Mobile applications.</h5>
                                <div className="row my-5">
                                    <div className="col-md-4">
                                    <Link to="/Projects" type="button" className="btn btn-dark my-4">Check out my project</Link>
                                    </div>
                                    <div className="col-md-4">
                                    <Link to="/Skill" type="button" className="btn btn-dark my-4">Check out my Skills</Link>
                                    </div>
                                    <div className="col-md-4">
                                    <Link to="/Experiences" type="button" className="btn btn-dark my-4">Check out my Exxperience</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col md-4 lg-8">
                            <img src={himal1} className="img-fluid" alt="himal"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;