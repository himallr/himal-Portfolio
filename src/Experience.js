import React from "react";
import sih from "./images/sih.png";
import cliqtrix from "./images/trix.jpg";

function Experience() {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col md-8">
                        <h1 className="text-white my-5">Experience</h1>
                        <div className="card border my-4 bg-dark">
                            <div className="card-header my-2">
                                <h2 className="card-title text-white">Smart India Hackathon</h2>
                            </div>
                            <div className="row my-3">
                                <div className="col md-6">
                                    <div className="card-body bg-dark">
                                        <img src={sih} alt="sih" className="img-fluid"></img>
                                        <h3 className="card-text text-white"></h3>

                                    </div>
                                </div>
                                <div className="col md-6">
                                    <div className="card-body bg-dark">
                                        <h3 className="card-text text-white">We as a team participated in Smart India Hackathon held at our institution in 2022(June-October) took a topic on AICTE web development.We got selected college level and our team got shortlisted for the final round which took place in Odisha.</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border my-5 bg-dark">
                            <div className="card-header my-2">
                                <h2 className="card-title text-white">Zoho Cliq trix</h2>
                            </div>
                            <div className="row my-3">
                                <div className="col md-6">
                                    <div className="card-body bg-dark">
                                        <h3 className="card-text text-white">We as a pair participated in bot building contest held by Zoho cliq trix to make a chat bot either with coding/codeless... Do you think we prefer coding?😃 </h3><br></br>
                                        <h3 className="card-text text-white">Absolutely not! We just took codeless to make easy and beautiful bot for E-commerce website which allows customers to get products using bots.</h3>
                                    </div>
                                </div>
                                <div className="col md-6">
                                    <div className="card-body bg-dark">
                                        <img src={cliqtrix} alt="sih" className="img-fluid"></img>
                                        <h3 className="card-text text-white"></h3>

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


export default Experience;