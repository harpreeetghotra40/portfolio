import React from "react";

const myProjects = [
  {
    name: "WordsApp",
    desc: "An app to test your vocabulary",
    github: "https://github.com/JakubowskiA/WordsApp",
  },
  {
    name: "Deployable",
    desc: "Explain your code in pics",
    github: "https://github.com/harpreeetghotra40/deployable_app",
  },
  {
    name: "Calendar App",
    desc: "Just a typical calendar app",
    github: "https://github.com/harpreeetghotra40/calendar_app",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="mb-0">Projects</h2>
      <h3>
        I have worked with Sr. Developers who have raised my standards
        <br /> of maintaible and easy to understand code
      </h3>
      <div className="projects-grid">
        {myProjects.map((project) => (
          <div className="project">
            <h3 className="m-0">{project.name}</h3>
            <p className="pt-0 pb-10">{project.desc}</p>
            <div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github &#x2192;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
