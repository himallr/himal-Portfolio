import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
            <Link to="/" className="navbar-brand mx-5 my-4">HIMAL</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/Skill" className="nav-link">My Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Projects" className="nav-link">My Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Experiences">My Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Resume">My Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contacts">My Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}

export default Header