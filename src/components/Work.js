import React from "react";
import vascepabackground from "../images/vascepa.png";
import sciencefoundry from "../images/sciencefoundry.png";
import praluent from "../images/praluent.png";

const myWork = [
  {
    name: "Science Foundry",
    background: sciencefoundry,
    URL: "https://theblocsciencefoundry.com/",
  },
  {
    name: "Praluent",
    background: praluent,
    URL: "https://praluent.com/",
  },
  {
    name: "VASCEPA",
    background: vascepabackground,
    URL: "https://vascepa.com/",
  },
];

const Work = () => {
  return (
    <div className="gray-region">
      <div className="work-container">
        <h2 className="m-0">Work</h2>
        <div className="showcase-container">
          {myWork.map((work) => (
            <div className="work">
              <div className="image-container">
                <img src={work.background} alt="client background" />
              </div>
              <a href={work.URL} target="_blank" rel="noopener noreferrer">
                {work.name} &#x2192;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
