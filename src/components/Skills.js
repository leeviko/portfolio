import React from "react";
import { Link } from "react-router-dom";

import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="skills page">
      <div className="page-container">
        <h1 className="page-heading" lang="fi">
          Taidot
        </h1>
        <p className="skills-section-text section-text" lang="fi">
          En tykkää arvostella taitoja prosenttien mukaan, mutta jotta saatte nopean käsityksen,
          että mitä osaan niin tässä ois.
        </p>
        <div className="page-content">
          <div className="skills-list-section frontend">
            <div className="skills-section">
              <h3 className="skills-section-title">Frontend</h3>
              <div className="skills-list">
                <Skill progress="95%" name="HTML" />
                <Skill progress="95%" name="CSS" />
                <Skill progress="90%" name="React" />
                <Skill progress="90%" name="Redux" />
              </div>
            </div>
          </div>
          <div className="skills-list-section backend">
            <div className="skills-section">
              <h3 className="skills-section-title">Backend</h3>
              <div className="skills-list">
                <Skill progress="90%" name="Node.js" />
                <Skill progress="90%" name="Express" />
                <Skill progress="95%" name="MySQL" />
                <Skill progress="95%" name="PostgreSQL" />
                <Skill progress="85%" name="PHP" />
              </div>
            </div>
          </div>

          <div className="skills-list-section other">
            <div className="skills-section">
              <h3 className="skills-section-title" lang="fi">
                Muut
              </h3>
              <div className="skills-list">
                <Skill progress="95%" name="Git" />
                <Skill progress="95%" name="Linux" />
                <Skill progress="60%" name="Python" />
              </div>
            </div>
          </div>
          <Link to="/" className="back-link" lang="fi">
            {"<"} Takaisin aloitukseen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
