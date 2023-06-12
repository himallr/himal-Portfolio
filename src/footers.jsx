import React from "react";
import { Link } from "react-router-dom";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import what from "./images/what.png";
import twitter from "./images/twitter.png";
import ReactWhatsapp from "react-whatsapp";
import { useLinkedIn } from 'react-linkedin-login-oauth2';
// import InstagramEmbed from "react-instagram-embed";

function Footer() {

    const { linkedInLogin } = useLinkedIn({
        clientId: "www.linkedin.com/in/himal-l-r-ab0722260",
        redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
        onSuccess: (code) => {
            console.log(code);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <footer class="text-center bg-dark text-white pt-5" style={{ backgroundColor: "#f1f1f1" }}>
            <div class="container pt-4">
                <section class="mb-4">
                    <ReactWhatsapp number="9344449002" message="Hello World!!!" className="bg-dark border-0"><img src={what} className="img-fluid" alt="lay" /></ReactWhatsapp>
                    <Link to="https://www.instagram.com"><img src={instagram} className="img-fluid" alt="lay" /></Link>
                    {/* <InstagramEmbed
                        url='https://instagr.am/p/Zw9o4/'
                        clientAccessToken='123|456'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                    /> */}
                    {/* <img
                        onClick={linkedInLogin}
                        src={linkedin}
                        alt="Sign in with Linked In"
                        style={{ maxWidth: '300px', cursor: 'pointer' }}
                    /> */}
                    <Link to="https://www.twitter.com"><img src={twitter} className="img-fluid" alt="lay" /></Link>
                    <Link to="https://www.linkedin.com"><img src={linkedin} className="img-fluid" alt="lay" /></Link>

                    {/* <Link
                        class="btn btn-link btn-floating btn-lg text-dark m-1 text-white"
                        to="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-instagram"></i></Link>
                    <Link
                        class="btn btn-link btn-floating btn-lg text-dark m-1 text-white"
                        to="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-linkedin"></i></Link>
                    <Link
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        to="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-github"></i>
                    </Link> */}
                </section>
            </div>
            <div class="text-center text-dark p-3 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright:
                <Link class="text-white text-decoration-none" to="/">Himal</Link>
            </div>
        </footer>
    )
}

export default Footer;