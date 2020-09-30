import React from "react";
import vascepabackground from "../images/vascepa.png";
import sciencefoundry from "../images/sciencefoundry.png";
import praluent from "../images/praluent.png";
import praluenthcp from "../images/praluenthcp.png";
import gatsby from "../images/gatsby.png";
import mailgun from "../images/mailgun.png";
import reactjs from "../images/reactjs.png";
import sass from "../images/sass.png";

const myWork = [
  {
    name: "Science Foundry",
    background: sciencefoundry,
    URL: "https://theblocsciencefoundry.com/",
    tech: ["gatsby + ", "mailgun + ", "sass"],
  },
  {
    name: "Praluent",
    background: praluent,
    URL: "https://praluent.com/",
    tech: ["gatsby + ", "sass"],
  },
  {
    name: "Praluent HCP",
    background: praluenthcp,
    URL: "https://praluenthcp.com/",
    tech: ["gatsby + ", "sass"],
  },
  {
    name: "VASCEPA",
    background: vascepabackground,
    URL: "https://vascepa.com/",
    tech: ["reactjs + ", "sass"],
  },
];

const Work = () => {
  return (
    <div className="gray-region">
      <div className="work-container">
        <h2 className="m-0">Work</h2>
        <h3>
          With experience in Ruby on Rails, ReactJS and a background in Java
          <br />I have been a part of a <strong>team</strong> that has created
          some memorable products.
        </h3>
        <div className="showcase-container">
          {myWork.map((work) => (
            <div className="work">
              <div className="techlist">
                {work.tech.map((tech) => (
                  <span className="tech">{tech}</span>
                  //   <img src={tech} alt={`${tech} logo`} />
                ))}
              </div>
              <div className="image-container" style={{ marginTop: "20px" }}>
                <img src={work.background} alt="client background" />
              </div>
              <div style={{ textTransform: "uppercase" }}>
                <a href={work.URL} target="_blank" rel="noopener noreferrer">
                  {work.name} &#x2192;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
