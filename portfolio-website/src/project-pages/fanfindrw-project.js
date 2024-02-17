import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

//Components
import ImageCarousel from "../components/image-carousel";

//Icons
import { IoMdReturnLeft } from "react-icons/io";

const FanFindrW = () => {

    const data = [
        {src: '../..//website-mockups/fanfindrwDesktop.png', alt:''},
        {src: '../..//website-mockups/fanfindrwDesktop2.png', alt:''},
        {src: '../../website-mockups/fanfindrwlarge3.PNG', alt:''},
    ]

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return(
        <div>
            <div className="wrapper">
                <div className="return-button" onClick={goBack}>
                    <div className="icon"><IoMdReturnLeft size={'25px'}/></div>
                    <h2>Back</h2>
                </div>
                <div className="p-content-container">
                    <div className="header">
                        <h1>FanFindr Web</h1>
                        <div className="red-divider"/>
                    </div>
                    <div className="carousel-container">
                        <ImageCarousel data={data}/>
                    </div>
                    <div className="p-content">
                        <div className="red-divider"/>
                        <h2>Project Overview</h2>
                        <p>FanFindr was a project I took on during my capstone at Arizona State. The idea of the app was to provide sports fans and sports bar owners a new and innovative way to connect with one another through a set of two apps, a mobile and a web.</p>
                        <p>The web app side was aimed at the business owners and was designed to be a tool to allow the user to add their business to the app and send out notifications and important messages to any customer who was following the business. In a way, it was a form of social media but for sports bars.</p>
                        <p>The app features seamless integration with Amazon Web Services, which acts as the backend for the entire platform. This allowed for easy account creation/authentication, data storage, and connections with the customers, along with many other features.</p>
                        <p>Everything on the frontend was built using React and many of the features within React. Originally, I had built a full backend with Express, Node.js, and MongoDB, but our sponsor had us transfer everything to AWS halfway through the project.</p>
                        <p>Unfortunately, I am unable to provide a live site as I am no longer in possession of the app, but feel free to ask me any questions!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FanFindrW;