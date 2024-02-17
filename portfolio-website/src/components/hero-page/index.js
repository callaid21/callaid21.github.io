import React from "react";
import './index.css';
import Reveal from '../Reveal';

const HeroPage = () =>{

    return(
        <div className='bg-image-dark' id="home">
            <div className="wrapper">
                <div className="hero-container">
                    <Reveal>
                        <h1>HELLO, I'M</h1>
                    </Reveal>
                    <Reveal>
                        <h1>AIDAN CALLAHAN</h1>
                    </Reveal>
                    <Reveal>
                       <p>A software engineer & full stack developer, looking to make dreams a reality.</p> 
                    </Reveal>
                </div>
            </div>   
        </div>
        
    )
}

export default HeroPage;