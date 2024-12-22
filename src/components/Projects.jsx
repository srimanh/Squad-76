import React from "react";
import "../styling/Project.css"
import lootie from "../assets/lottiefiles.png"
import game from "../assets/memory.jpeg"
import soberity from "../assets/soberity.png"
import food from "../assets/food.jpeg"


// Array of projects with details like title, description, images, and links
const projects = [
  {
    id: 1,
    title: "Lottie 3D Animated Website Clone",
    description: "An interactive, visually stunning clone featuring Lottie 3D animations, delivering a seamless user experience with engaging visuals and modern web design elements",
    image: lootie,
    liveDemo: "https://srimanh.github.io/LottieFlies_Clone/",
    sourceCode: "https://github.com/srimanh/LottieFlies_Clone.git",
  },
  {
    id: 2,
    title: "MemoryMaze Card Game",
    description: "A challenging and fun card game promoting memory skills, featuring dynamic animations, intuitive gameplay, and an addictive maze-like design for endless entertainment.",
    image: game,
    liveDemo: "https://66d5a74301eac81c5a4f81c6--ephemeral-maamoul-2d46a2.netlify.app/",
    sourceCode: "https://github.com/abrahamjeron/game-2.git",
  },
  {
    id: 3,
    title: "Alcohol Awareness Website",
    description: "A comprehensive platform raising awareness about alcohol consumption, offering engaging content, statistics, and resources to educate and empower informed decisions.",
    image: soberity,
    liveDemo: "srimanh.github.io/Sobriety/",
    sourceCode: "https://github.com/srimanh/Sobriety.git",
  },
  {
    id: 4,
    title: "CraveMunch Food Recipe Website",
    description: "A delightful recipe hub showcasing diverse cuisines, with user-friendly navigation, visually appealing layouts, and curated content for food enthusiasts.",
    image: food,
    liveDemo: " https://sriman.wiki/",
    sourceCode: "https://github.com/srimanh/CraveMunch.git",
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ backgroundColor: "#D0FF00", padding: "20px" }}>
      <h2 style={{ textAlign: "center"  }} className="project_name">Our Projects</h2>

      {/* Container for all the project cards */}
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.title} className="card__image" />
            <div className="card__content">
              <p className="card__title">{project.title}</p>
              <p className="card__description">{project.description}</p>

              {/* Live Demo Button */}
              <button
                className="card__button"
                onClick={() => window.open(project.liveDemo, "_blank")}
              >
                Live Demo
              </button>

               {/* Source Code Button */}
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
