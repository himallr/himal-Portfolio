import React from "react";

const Skill = ({
    title = '',
    types = [],
}) => (
    <div className="bg-dark">
        <div className="row pt-5 mx-4">
            <div className="card border align-content-center my-4 bg-dark">
                <div className="col-md-12 text-center">
                    <h3 className="card-title text-white">{title}</h3>
                </div>
                <div className="row my-4">
                    {types.map((types, index) => (
                        <div key={index} className="col-md-2">
                            <h3 className="badge bg-secondary">{types}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Skill;