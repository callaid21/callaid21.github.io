import React from "react";

//Components
import Navbar from "../navbar";
import HeroPage from "../hero-page";
import AboutPage from "../about-page";
import ProjectsPage from "../projects-page";
import SkillsSection from "../skills-section";
import Footer from "../footer-section";


const HomePage = () => {
    return(
        <>
        <Navbar />
        <HeroPage />
        <AboutPage />
        <SkillsSection />
        <ProjectsPage />
        <Footer />
        </>
    )
}

export default HomePage;