import React from "react";
import { Link } from "react-router-dom";
// import airline from "./images/airline.png";

function Project(props) {
    
    return (

        <div className="row row-cols-1 row-cols-md-2 justify-content-center ">
            <div className="card my-4 bg-secondary">
                <div className="card-header">
                    <h3 className="card-title text-white">{props.title}</h3>
                </div>
                <div className="view overlay">
                    <img className="img-fluid" alt="Card image cap" src={process.env.PUBLIC_URL + props.img} ></img>
                </div>
                <div className="card-body text-center">
                    <h6 className="class-text text-white">{props.body}</h6>
                    <div className="card-footer text-white">{props.sub}</div>
                    <Link to={props.link} alt="btn" className="btn btn-dark">View Project</Link>
                </div>
            </div>
        </div>
    )
}

export default Project;