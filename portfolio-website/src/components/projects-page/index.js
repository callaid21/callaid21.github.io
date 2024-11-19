import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

//Icons
import { GoArrowUpRight } from "react-icons/go";

const ProjectsPage = () => {
  return (
    <div className="dark padding-block" id="projects">
      <div className="wrapper">
        <div className="header">
          <h1>Projects</h1>
          <p>
            Here you will find some of the personal and client projects that I
            created.
          </p>
          <div className="red-divider" />
        </div>

        <div className="projects-container">
          <div className="project even-columns">
            <Reveal>
              <img src="./website-screenshots/NFLbg.PNG" alt="spaced" />
            </Reveal>
            <div className="project-info">
              <Link className="title" to="./nfl-project">
                <h2>NFL Central</h2>
                <div className="icon">
                  <GoArrowUpRight size={"20px"} />
                </div>
              </Link>
              <div>
                <p>Everything NFL, always.</p>
              </div>
              <div className="skill-blocks">
                <div className="skill-block">HTML</div>
                <div className="skill-block">CSS</div>
                <div className="skill-block">JavaScript</div>
                <div className="skill-block">React</div>
                <div className="skill-block">MongoDB</div>
                <div className="skill-block">Express</div>
                <div className="skill-block">Node.js</div>
              </div>
            </div>
          </div>

          <div className="project even-columns">
            <Reveal>
              <img src="./website-screenshots/spacedLarge.PNG" alt="spaced" />
            </Reveal>
            <div className="project-info">
              <Link className="title" to="./spaced-project">
                <h2>Spaced</h2>
                <div className="icon">
                  <GoArrowUpRight size={"20px"} />
                </div>
              </Link>
              <div>
                <p>Spaced. Your home for booking your next spaceflight.</p>
              </div>
              <div className="skill-blocks">
                <div className="skill-block">HTML</div>
                <div className="skill-block">CSS</div>
                <div className="skill-block">JavaScript</div>
              </div>
            </div>
          </div>

          <div className="project even-columns">
            <Reveal>
              <img
                src="./website-screenshots/fanfindrwLarge.PNG"
                alt="fan finder web"
              />
            </Reveal>
            <div className="project-info">
              <Link className="title" to="./fanfindrw-project">
                <h2>FanFindr (web)</h2>
                <div className="icon">
                  <GoArrowUpRight size={"20px"} />
                </div>
              </Link>
              <div>
                <p>
                  FanFindr for business. Elevate your sports bar's game with our
                  cutting-edge marketing tool!{" "}
                </p>
              </div>
              <div className="skill-blocks">
                <div className="skill-block">React</div>
                <div className="skill-block">HTML</div>
                <div className="skill-block">CSS</div>
                <div className="skill-block">Styled Components</div>
                <div className="skill-block">JavaScript</div>
                <div className="skill-block">Node.js</div>
                <div className="skill-block">Express</div>
                <div className="skill-block">Mongo DB</div>
              </div>
            </div>
          </div>

          <div className="project even-columns">
            <Reveal>
              <div>
                <img
                  src="./website-screenshots/fanfindr-mobile.png"
                  alt="fan finder mobile"
                />
              </div>
            </Reveal>
            <div className="project-info" id="mobile">
              <Link className="title" to="./fanfindrm-project">
                <h2>FanFindr (mobile)</h2>
                <div className="icon">
                  <GoArrowUpRight size={"20px"} />
                </div>
              </Link>
              <div>
                <p>
                  FanFindr for fans. Score the ultimate sports bar experience
                  tailored to your preferences!
                </p>
              </div>
              <div className="skill-blocks">
                <div className="skill-block">React Native</div>
                <div className="skill-block">Expo</div>
                <div className="skill-block">HTML</div>
                <div className="skill-block">CSS</div>
                <div className="skill-block">JavaScript</div>
                <div className="skill-block">AWS</div>
              </div>
            </div>
          </div>

          <div className="project even-columns">
            <Reveal>
              <div>
                <img
                  src="./website-screenshots/portfolioLarge.PNG"
                  alt="portfolio website"
                />
              </div>
            </Reveal>
            <div className="project-info">
              <Link className="title" to="./portfolio-project">
                <h2>aidancallahan.com</h2>
                <div className="icon">
                  <GoArrowUpRight size={"20px"} />
                </div>
              </Link>
              <div>
                <p>My portfolio website.</p>
              </div>
              <div className="skill-blocks">
                <div className="skill-block">HTML</div>
                <div className="skill-block">CSS</div>
                <div className="skill-block">JavaScript</div>
                <div className="skill-block">React</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
