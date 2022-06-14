import React from "react";
import { Link } from "react-router-dom";

import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects page">
      <div className="page-container">
        <h1 className="page-heading" lang="fi">
          Projektit
        </h1>
        <p className="projects-section-text section-text" lang="fi">
          Tässä on jotain projekteja mitä on tullut tehtyä.
        </p>
        <div className="page-content">
          <div className="projects-list">
            <Project
              name="Eveloper"
              description="Full stack Dev.to klooni"
              code="https://github.com/leeviko/eveloper"
            />
            <Project
              name="Countries"
              description="Etsi tietoa eri maista"
              link="https://geronimo.okol.org/~kotlee/countries/"
              code="https://github.com/leeviko/countries"
            />
            <Project
              name="E-Kirjasto"
              description="E-kirjastossa käyttäjä voi lainata, etsiä ja palauttaa kirjoja. Admin voi lisätä ja päivittää kirjoja yms."
              code="https://github.com/leeviko/e-kirjasto"
            />
          </div>
          <Link to="/" className="back-link" lang="fi">
            {"<"} Takaisin aloitukseen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
