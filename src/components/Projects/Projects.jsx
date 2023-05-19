import React from "react";
import projects from "../../../projectsMock";

const Projects = () => {
  return (
    <section className="projectsContainer">
      <div className="projectCardsContainer">
        {projects.map((project) => {
          return (
            <div className="projectCard" key={project.name}>
              <img src={project.img} className="projectImg" alt="" />
              <button className="btn projectBtn">More information</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
