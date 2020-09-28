import React from "react";
import sagar from "../images/sagar_lg.png";

const Intro = () => {
  return (
    <div className="intro-flex">
      <div className="intro-text">
        <h1>Harpreet Ghotra</h1>
        <h3>Web Developer</h3>
        <p style={{ maxWidth: "500px" }}>
          With experience in Ruby and JavaScript,{" "}
          <span className="nowrap">I have</span> created products that are
          enjoyable to use and are written in code that is maintainable. Working
          alongside senior developers has raised my standards for any web
          application. I’m hardworking, dedicated and always up for learning new
          skills.
        </p>
        <button>Resume</button>
      </div>
      <div className="intro-img">
        <img src={sagar} alt="profile art" />
      </div>
    </div>
  );
};

export default Intro;
