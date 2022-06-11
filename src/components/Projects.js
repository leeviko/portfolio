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
          <div className="projects-list">
            <Project name="Eveloper" description="Full Stack Dev.to klooni (Kesken vielä)" />
            <Project
              name="E-Kirjasto"
              description="E-kirjastossa käyttäjä voi lainata, etsiä ja palauttaa kirjoja. Admin voi lisätä ja päivittää kirjoja yms."
            />
            <Project name="Joku" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
