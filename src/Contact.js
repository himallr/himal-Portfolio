import React from "react";
import himal from "./images/himal.jpeg";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import what from "./images/what.png";
import twitter from "./images/twitter.png";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-5">
                        <h1 className="text-white">Contact</h1>
                        <div className="card bg-dark">
                            <div className="row my-5">
                                <div className="col-md-6">
                                    <div className="card-body wd-2">
                                        <img src={himal} alt="himal" className="img-fluid"></img>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body text-white">
                                        <h3 className="card-text my-2">Contact me on:</h3>
                                        <ul>
                                            <li className="list-group-item d-flex justify-content-around align-items-center">
                                                <h4>Whatsapp</h4>
                                                <div className="image-parent">
                                                <Link to="https://www.whatsapp.com"><img src={what} className="img-fluid" alt="lay" /></Link>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-around align-items-center">
                                            <h4>Instagram</h4>
                                                <div className="image-parent">
                                                <Link to="https://www.instagram.com"><img src={instagram} className="img-fluid" alt="lay" /></Link>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-around align-items-center">
                                            <h4>LinkedIn</h4>
                                                <div className="image-parent">
                                                    <Link to="https://www.linkedin.com"><img src={linkedin} className="img-fluid" alt="lay" /></Link>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-around align-items-center">
                                                <h4>Twitter</h4>
                                                <div className="image-parent">
                                                <Link to="https://www.twitter.com"><img src={twitter} className="img-fluid" alt="lay" /></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;