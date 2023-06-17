import React from "react";
import Project from "./Project";

function Projects() {

    const array = [
        {
            title: "Airline Reservation System",
            image: "/images/projects/airline.png",
            body: "Airline Reservation System is a project which a passenger or user can Signup/Login into their account and can reserve their seats by their own prefernce of flights with class.",
            sub: "HTML, CSS, Php, MySQL",
            link: "https://github.com/himallr/AirlineReservation"
        },
        {
            title: "VegMart",
            image: "/images/projects/vegmart.png",
            body: "VegMart is an E-commerce website using ReactJs as Frontend and the customer can browse the products and add to cart.There is also other electronic gadgets rather that vegies and fruits.The user can login/signin to add the product into their cart and do the payment via online.",
            sub: "ReactJS,NodeJS,ExpressJS,MySQL",
            link: "https://github.com/himallr/twitter-clone"
        },
        // {
        //     title: "Twitter Clone",
        //     image: "/images/projects/dash.png",
        //     body: "Twitter Clone is a clone of Twitter and i tried to make design of twitter using ReactJs as FrontEnd and implemented also my tweets into this clone app.",
        //     sub: "HTML,CSS,Firebase",
        //     link: "https://github.com/himallr/twitter-clone"
        // },
        {
            title: "Dashboard",
            image: "/images/projects/dash.png",
            body: "Dashboard tells the rate of sales increased monthly and shows profit/loss using chartJS. ",
            sub: "ReactJS,ChartJS",
            link: "https://github.com/himallr/Dashboard_App_Economize"
        },
        {
            title: "Dice Challenge",
            image: "/images/projects/dice.png",
            body: "It is a dice challenge game.Everytime the page refreshes the dice number changes which acts like player and the number higher player(dice) will win.",
            sub: "HTML,CSS,JS",
            link: "https://github.com/himallr/Dice-Challenge"
        },
        {
            title: "Drum Stick",
            image: "/images/projects/dice.png",
            body: "It is a drum stick event listener.It plays different types of sounds while clicking the keys.",
            sub: "HTML,CSS,JS",
            link: "https://github.com/himallr/Drum-Kit"
        },
        {
            title: "Online Book Store App",
            image: "/images/projects/bookstore.jpg",
            body: "Online Book store App is an mobile Application that stores all kinds of books like fiction,thriller,non-fiction,etc.. The user can login into app and add to cart for purchase and can choose online paymenst like gpay,paytm and amazonpay",
            sub: "Flutter(Dart Lang),Firebase",
            link: "https://github.com/himallr/Online-book-store"
        }
    ]


    return (
        <div className="bg-dark">
            <div className="container">
                <h1 className="text-white pt-5">Projects</h1>
                <p className="h4 text-white my-4">I have made projects based on my skills and i have presented some of the projects i have done using HTML,CSS,ReactJS,etc.. You can view my projects from my Github which i have provided the link</p>
                {array.map(e => (<Project title={e.title} body={e.body} img={e.image} sub={e.sub} link={e.link} />))}
            </div>
        </div>
    );
}

export default Projects;