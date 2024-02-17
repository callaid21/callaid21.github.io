import React from "react";
import './styles.css';
import { Link } from "react-scroll";

import { motion } from "framer-motion";

const AboutPage = () => {

    const text = "I am a software engineer with a bachelors degree in computer science from Arizona State University. I completed my degree in December of 2023 and am currently looking for a career in web development.\nI have been building websites and applications consitently for 2 years now after falling in love with web development.\nSince then, I have dedicated all of my time into improving in every way I can. When im not programming, you'll find me out on the golf course, building furniture, playing video games, or exploring one of the many other hobbies I have. I am looking for a place where I can grow my skillset, work with other team members, and create the dream platform for any client.".split(" ");
    
    const textWriteAnimation= {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    return(
        <div className='dark' id="about">
            <div className="wrapper">
                <div className="about-page-container">
                    <div className="header">
                        <h1>About me</h1>
                        <div className="red-divider"></div>
                        <p>Writing software for 7 years and 2 years of web development.</p>
                    </div>
                    <div className="even-columns">
                        <div className="left-side">
                            <h2>Get to know me!</h2>
                            <p>
                                {text.map((el, i) => (
                                    <motion.span
                                        variants={textWriteAnimation}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{
                                            duration: 0.25,
                                            delay: i / 14,
                                        }}
                                    key={i}
                                    >
                                        {el}{" "}
                                    </motion.span>
                                ))}
                            </p>
                            <button className="button bottom"><Link to="projects" smooth={true} duration={800} offset={-55}>Projects</Link></button>
                        </div>
                    <div className="right-side">
                        <img src="./images/grad-image.png" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutPage;