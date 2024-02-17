import React from "react";
import './styles.css';

const Footer = () => {
    return(
        <div className="black-bg">
            <div className="wrapper">
                <div className="even-columns">
                    <div className="left-side">
                        <h2>Aidan Callahan</h2>
                        <p>A frontend focused web developer with experience in backend technologies</p>
                    </div>
                    <div className="right-side">
                        <h1>SOCIAL</h1>
                        <div className="social-container">
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><img src="./icons/linkedIn.png" alt=""/></a>
                            <a href="https://github.com/callaid21" target="_blank" rel="noopener noreferrer"><img src="./icons/githubWhite.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="underline" />
                <div className="overflow-hidden">
                   <p className="end-text">Created by Aidan Callahan</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;