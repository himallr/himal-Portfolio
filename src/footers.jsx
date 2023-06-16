import React from "react";
import { Link } from "react-router-dom";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import what from "./images/what.png";
import ReactWhatsapp from "react-whatsapp";

function Footer() {

    return (
        <footer class="text-center bg-dark text-white pt-5 col-lg-12 md-8 xs-4" style={{ backgroundColor: "#f1f1f1" }}>
            <div class="container pt-4">
                <section class="mb-4">
                    <ReactWhatsapp number="9344449002" message="Hello World!!!" className="bg-dark border-0"><img src={what} className="img-fluid" alt="lay" /></ReactWhatsapp>
                    <Link to="https://www.instagram.com"><img src={instagram} className="img-fluid" alt="lay" /></Link>
                    <Link to="https://www.twitter.com"><img src={twitter} className="img-fluid" alt="lay" /></Link>
                    <Link to="https://www.linkedin.com"><img src={linkedin} className="img-fluid" alt="lay" /></Link>
                </section>
            </div>
            <div class="text-center p-3 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright:
                <Link class="text-white text-decoration-none" to="/">Himal</Link>
            </div>
        </footer>
    )
}

export default Footer;