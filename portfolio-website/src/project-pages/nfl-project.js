import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

//Components
import ImageCarousel from "../components/image-carousel";

//Icons
import { IoMdReturnLeft } from "react-icons/io";

const NFLProject = () => {
  const data = [
    { src: "../../website-mockups/NFLl1.PNG", alt: "" },
    { src: "../../website-mockups/NFLl2.PNG", alt: "" },
    { src: "../../website-mockups/NFLl3.PNG", alt: "" },
    { src: "../../website-mockups/NFLfav.PNG", alt: "" },
    { src: "../..//website-mockups/NFLdash.png", alt: "" },
    { src: "../..//website-mockups/NFLdash2.png", alt: "" },
    { src: "../../website-mockups/NFLdash4.PNG", alt: "" },
    { src: "../../website-mockups/NFLpick.PNG", alt: "" },
    { src: "../../website-mockups/NFLstandings.PNG", alt: "" },
    { src: "../../website-mockups/NFLsetting.PNG", alt: "" },
  ];

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="return-button" onClick={goBack}>
          <div className="icon">
            <IoMdReturnLeft size={"25px"} />
          </div>
          <h2>Back</h2>
        </div>
        <div className="p-content-container">
          <div className="header">
            <h1>NFL Central</h1>
            <div className="red-divider" />
          </div>
          <div className="carousel-container">
            <ImageCarousel data={data} />
          </div>
          <div className="p-content">
            <div className="red-divider" />
            <h2>Project Overview</h2>
            <p>
              The NFL Fan Hub is a comprehensive web app for NFL enthusiasts,
              designed to offer an all-in-one platform for fans to engage with
              team updates, track standings, play interactive games, and
              personalize their viewing experience. Built with React, this
              application combines a clean, intuitive front end with a robust
              backend, leveraging multiple APIs to deliver real-time scores,
              news, and data updates. This project is unfinished as I am
              constantly adding to it but I feel it is at a good point to share!
            </p>
            <p>
              Some key features include: User Authentication and Profile
              Management, Fans can create personal accounts, securely log in,
              and manage profile settings. A dashboard with Real-Time Updates,
              The user dashboard features sections like standings, live game
              scores, and NFL news, updated dynamically through API calls.
              Pick’em Games, Users can make weekly predictions on game outcomes.
              Selections and scores are saved and tracked in the backend,
              allowing fans to monitor their accuracy and performance throughout
              the season. Customizable Themes, To enhance user experience, the
              app offers light mode, dark mode, and team-specific themes. Users
              can set their theme preferences and personalize the apps look to
              match their favorite team. Backend Integration, The apps backend
              supports user authentication, stores user data securely, and
              communicates with external APIs to provide up-to-date information.
            </p>
            <p>
              This project demonstrates strong skills in full-stack development,
              including frontend design, state management, API integration, and
              backend services that support personalized, real-time user
              experiences.
            </p>
            <button className="button">
              <a
                href="https://nf-lapp-final.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFLProject;
