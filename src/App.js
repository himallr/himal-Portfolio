import React from "react";
import Header from "./header";
import Footer from "./footers";
import Projects from "./Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Skill from "./Skill";
import Experience from "./Experience";
import Contact from "./Contact";
import Resume from "./Resume";
// import 'bootstrap/dist/js/bootstrap.esm.js';

function App() {
    return (
        <div>
            <Header />
            <div className="pt-5 mt-5 bg-dark">
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
                <Route path="/Skill" element={<Skill />}></Route>
                <Route path="/Experiences" element={<Experience />}></Route>
                <Route path="/Contacts" element={<Contact />}></Route>
                <Route path="/Resume" element={<Resume />}></Route>
            </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;