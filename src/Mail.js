import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_beb7w28', 'template_00a3muh', form.current, '8KlLkiUM-OgL9lXim')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="row mb-5">
                <div className="form-group col-md-4">
                    <label for="inputEmail4" className="text-white">Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="xyz" name="user_name"></input>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputPassword4" className="text-white">Email</label>
                    <input type="email" className="form-control" id="inputPassword4" placeholder="xyz@gmail.com..." name='user_email'></input>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputAddress2" className="text-white">City</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Madurai..." name="user_city"></input>
                </div>
            </div>
            <div className="row">
                <label for="" className="text-white">My Location</label>
                <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: "500px", width: "200px" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2106828101564!2d78.09671477459398!3d9.916403874468505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfd4830de685%3A0xa64f466d79a3dfc6!2sShivsakthi%20street!5e0!3m2!1sen!2sin!4v1695611065383!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="row form-row mb-5">
                <label for="" className="text-white">Content</label>
                <div className="form-group col-md-10">
                    <textarea type="text" rows="5" cols="10" className="form-control" id="inputCity" placeholder="Ask me any..." name="message"></textarea>
                </div>
            </div>
            <div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-outline-secondary text-white">Contact Me</button>
                </div>
            </div>
        </form >
    );
};
