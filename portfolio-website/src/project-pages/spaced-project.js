import React from "react";
import './styles.css';
import { useNavigate } from 'react-router-dom';

//Components
import ImageCarousel from "../components/image-carousel";

//Icons
import { IoMdReturnLeft } from "react-icons/io";

const SpacedPage = () => {

    const data = [
        {src: '../..//website-mockups/SpacedDesktop.png', alt:''},
        {src: '../..//website-mockups/SpacedLaptop.png', alt:''},
        {src: '../../website-mockups/SpacedPhone.png', alt:''},
        {src: '../..//website-mockups/SpacedTablet.png', alt:''},
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
                        <h1>Spaced</h1>
                        <div className="red-divider"/>
                    </div>
                    <div className="carousel-container">
                        <ImageCarousel data={data}/>
                    </div>
                    <div className="p-content">
                        <div className="red-divider"/>
                        <h2>Project Overview</h2>
                        <p>Spaced is a design I found online and felt it would be a great project to demonstrate my skills in frontend web development, particularly in crafting visually stunning and interactive websites.</p>
                        <p>The site is completely responsive and comes equipped with a variety of features such as subtle animations, interactive elements like hover effects and dropdown menus, and dynamic page content switching, which make for a much more enjoyable browsing experience.</p>
                        <p>Everything was built using HTML and CSS, with some of the more complex elements needing JavaScript to work.</p>
                        <p>Feel free to check out the live site by clicking the button below!</p>
                        <button className="button"><a href="https://callaid21.github.io/spaced.github.io/" target="_blank" rel="noopener noreferrer">Live Site</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpacedPage;