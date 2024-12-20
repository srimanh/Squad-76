import React from "react";
import "../styling/Project.css"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1.",
    image: "IMAGE_URL_1",
    liveDemo: "LINK_1",
    sourceCode: "LINK_2",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2.",
    image: "IMAGE_URL_2",
    liveDemo: "LINK_3",
    sourceCode: "LINK_4",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for Project 3.",
    image: "IMAGE_URL_3",
    liveDemo: "LINK_5",
    sourceCode: "LINK_6",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description for Project 4.",
    image: "IMAGE_URL_4",
    liveDemo: "LINK_7",
    sourceCode: "LINK_8",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description for Project 5.",
    image: "IMAGE_URL_5",
    liveDemo: "LINK_9",
    sourceCode: "LINK_10",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description for Project 6.",
    image: "IMAGE_URL_6",
    liveDemo: "LINK_11",
    sourceCode: "LINK_12",
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ backgroundColor: "#D0FF00", padding: "20px" }}>
      <h2 style={{ textAlign: "center"  }} className="project_name">Our Projects</h2>
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.title} className="card__image" />
            <div className="card__content">
              <p className="card__title">{project.title}</p>
              <p className="card__description">{project.description}</p>
              <button
                className="card__button"
                onClick={() => window.open(project.liveDemo, "_blank")}
              >
                Live Demo
              </button>
              <button
                className="card__button secondary"
                onClick={() => window.open(project.sourceCode, "_blank")}
              >
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
