import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { BsArrowDown } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import "./Home.css";

const Home = () => {
  const Navigate = useNavigate();

  const navigateToContactMe = () => {
    Navigate("./contact");
  };

  return (
    <>
      <section id="home" className="home">
        <div className="home_body">
          <h1>
            Hello, I am Hasan <br /> MERN stack developer
          </h1>

          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateY(550px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <div className="home-contact-me">
              <button onClick={navigateToContactMe}>Hire Me </button>
              <button> Get Resume</button>
            </div>
          </Animate>
        </div>

        <div className="social-media-container">
          <div className="social-media-text">
            <p>Follow </p>
            <BsArrowDown size={30} className="Arrow-icon" />
          </div>
          <div className="soical-media-links">
            <ul>
              <li>
                <a
                  target="blank"
                  href="https://www.facebook.com/profile.php?id=100069593825824"
                >
                  <FaFacebookSquare size={25} className="social-media-icon" />
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.linkedin.com/in/hasanmd91/">
                  <FaLinkedin size={25} className="social-media-icon" />
                </a>
              </li>
              <li>
                <a target="blank" href=" https://github.com/hasanmd91">
                  <FaGithub size={25} className="social-media-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="allsection">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
