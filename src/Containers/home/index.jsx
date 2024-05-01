import React from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <div id="home" className="home">
      <div className="home_textWrapper">
        <h1>
          Hello, I'm Sahil. <br />
          Front-End Developer..
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
          transform: "translateX(0px)",
        }}
      >
        <div className="home_toContact">
          <button onClick={handleNavigate}>Hire Me</button>
        </div>
      </Animate>
    </div>
  );
};

export default Home;
