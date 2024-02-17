import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

//Components
import ImageCarousel from "../components/image-carousel";

//Icons
import { IoMdReturnLeft } from "react-icons/io";

const FanFindrM = () => {

    const data = [
        {src: '../..//website-mockups/ffm1.webp', alt:''},
        {src: '../..//website-mockups/ffm2.webp', alt:''},
        {src: '../..//website-mockups/ffm3.webp', alt:''},
        {src: '../..//website-mockups/ffm4.webp', alt:''},
        {src: '../..//website-mockups/ffm5.webp', alt:''},
        {src: '../..//website-mockups/ffm6.webp', alt:''},
        {src: '../..//website-mockups/ffm7.webp', alt:''},
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
                        <h1>FanFindr Mobile</h1>
                        <div className="red-divider"/>
                    </div>
                    <div className="carousel-container">
                        <ImageCarousel data={data}/>
                    </div>
                    <div className="p-content">
                        <div className="red-divider"/>
                        <h2>Project Overview</h2>
                        <p>FanFindr mobile was the second half of my capstone at Arizona State. The mobile side of FanFindr was aimed at the sports fan/customer looking for a new place to enjoy the big game.</p>
                        <p>The app provided users with a variety of tools and ways to personalize their feed in a unique way, such as having the ability to pick their favorite sports teams and see what bars are playing their games, along with much more.</p>
                        <p>Everything was built using React Native, and just like the web app, it is integrated with Amazon Web Services, which acts as the backend for the app.</p>
                        <p>Unfortunately, I am unable to provide a live site as I am no longer in possession of the app, but feel free to ask me any questions!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FanFindrM;