import React from "react";
import './styles.css';
import { useNavigate } from 'react-router-dom';

//Components
import ImageCarousel from "../components/image-carousel";

//Icons
import { IoMdReturnLeft } from "react-icons/io";

const Portfolio = () => {

    const data = [
        {src: '../..//website-mockups/portfolioDesktop.png', alt:''},
        {src: '../../website-mockups/potfolioPhone.png', alt:''},
        {src: '../..//website-mockups/portfolioTablet.png', alt:''},
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
                    <h1>aidancallahan.com</h1>
                    <div className="red-divider"/>
                </div>
                <div className="carousel-container">
                    <ImageCarousel data={data}/>
                </div>
                <div className="p-content">
                    <div className="red-divider"/>
                    <h2>Project Overview</h2>
                    <p>Finally, my portfolio site.</p>
                    <p>This site is a reflection of my passion for creating beautiful and functioning web experiences. My goal was to create a simple, yet sophisticated site that isnt too over the top with animations, yet still has enough to provide something interesting for the user to view.</p>
                    <p>The site was created using React to make use of some of the animation libraries such as framer motion and many other features.</p>
                    <p>I hope you have enjoyed my portfolo website and please feel free to reach out!</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;