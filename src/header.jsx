import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return <div>
        {/* <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark shadow fixed-top">
            <Link to="/" className="navbar-brand mx-5 my-4">HIMAL</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mx-5 flex-row-reverse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
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
        </nav> */}
        <Navbar expand="lg" className=" d-flex bg-dark fixed-top shadow py-4">
            <Container className="d-flex flex-row-reverse">
                <Navbar.Brand href="/" className="text-bold text-white text-md">HIMAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Skill" className="text-white">My Skills</Nav.Link>
                        <Nav.Link href="/Projects" className="text-white">My Projects</Nav.Link>
                        <Nav.Link href="/Resume" className="text-white">My Resume</Nav.Link>
                        <Nav.Link href="/Experiences" className="text-white">My Experience</Nav.Link>
                        <Nav.Link href="/Contacts" className="text-white">My Contacts</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

}

export default Header;