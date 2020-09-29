import React from "react";
import sagar from "../images/sagar_lg.png";

const Intro = () => {
  return (
    <div className="intro-flex">
      <div className="intro-text">
        <h1>Harpreet Ghotra</h1>
        {/* <h3>Software Developer</h3> */}
        <h3 style={{ maxWidth: "500px" }}>
          Jr. Software Developer currently working at{" "}
          <a
            href="https://thebloc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            theBloc
          </a>
          . I love front-end development and I'm a CSS nerd.
          {/* With experience in Ruby and JavaScript,{" "}
          <span className="nowrap">I have</span> created products that are
          enjoyable to use and are written in code that is maintainable. Working
          alongside senior developers has raised my standards for any web
          application. I’m hardworking, dedicated and always up for learning new
          skills. */}
        </h3>
        <button>Resume</button>
      </div>
      <div className="intro-img">
        <img src={sagar} alt="profile art" />
      </div>
    </div>
  );
};

export default Intro;
