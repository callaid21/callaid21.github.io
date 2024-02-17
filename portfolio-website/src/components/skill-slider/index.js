import React from "react";
import Slider from 'react-infinite-logo-slider';
import './styles.css';

const SkillsSlider = () => {

    const logos = [
        './icons/aws.svg',
        './icons/csharp.svg',
        './icons/css3.svg',
        './icons/expo-go-app.svg',
        './icons/express.webp',
        './icons/html5.svg',
        './icons/java.svg',
        './icons/javascript.svg',
        './icons/mongodb.svg',
        './icons/Node.js.svg',
        './icons/react.svg',
        './icons/reactrouter.svg',
        './icons/styled-components.png',
        './icons/github.svg',
    ]

    return (
        <Slider>
            {logos.map((logo, index) => (
                <Slider.Slide key={index} className="logos-slide">
                    <img src={logo} alt="logo"/>
                </Slider.Slide>
            ))}
        </Slider>
    )
}

export default SkillsSlider;