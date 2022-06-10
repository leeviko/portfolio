import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects page">
      <div className="page-container">
        <h1 className="page-heading" lang="fi">
          Projektit
        </h1>
        <div className="page-content">
          <Project name="Eveloper" />
          <Project name="E-Kirjasto" />
          <Project name="Joku" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
