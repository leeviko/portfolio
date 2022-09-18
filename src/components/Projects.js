import React, { useEffect } from "react";

import Project from "./Project";

const Projects = () => {
  useEffect(() => {
    document.title = "Leevi - Projektit";
  }, []);

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
              tags="React, Redux, Express, Rest API, PostgreSQL"
            />
            <Project
              name="Countries"
              description="Etsi tietoa eri maista"
              link="https://geronimo.okol.org/~kotlee/countries/"
              code="https://github.com/leeviko/countries"
              tags="React, Rest API"
            />
            <Project
              name="E-Kirjasto"
              description="E-kirjastossa käyttäjä voi lainata, etsiä ja palauttaa kirjoja. Admin voi lisätä ja päivittää kirjoja yms."
              code="https://github.com/leeviko/e-kirjasto"
              tags="PHP"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
