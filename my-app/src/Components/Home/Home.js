import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { BsArrowDown } from "react-icons/bs";

import "./Home.css";

const Home = () => {
  const Navigate = useNavigate();

  const navigateToContactMe = () => {
    Navigate("./contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text_wrppper">
        <h1>
          Hello, I am Hasan <br /> MERN stack developer
        </h1>
      </div>
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

      <div className="social-media-container">
        <div className="social-media-text">
          <p>Follow</p>
          <BsArrowDown size={30} />
        </div>
        <div className="soical-media-links"></div>
      </div>
    </section>
  );
};

export default Home;
