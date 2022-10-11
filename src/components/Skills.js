import React, { useEffect } from "react";

import Skill from "./Skill";

const Skills = () => {
  useEffect(() => {
    document.title = "Leevi - Taidot";
  }, []);

  return (
    <div className="skills page">
      <div className="page-container">
        <h1 className="page-heading" lang="fi">
          Taidot
        </h1>
        <p className="skills-section-text section-text" lang="fi">
          Tässä on jotain kieliä ja muita työkaluja joita osaan.
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
                <Skill progress="95%" name="Node.js" />
                <Skill progress="95%" name="Express" />
                <Skill progress="90%" name="MySQL" />
                <Skill progress="80%" name="PostgreSQL" />
                <Skill progress="70%" name="PHP" />
              </div>
            </div>
          </div>

          <div className="skills-list-section other">
            <div className="skills-section">
              <h3 className="skills-section-title" lang="fi">
                Muut
              </h3>
              <div className="skills-list">
                <Skill progress="90%" name="Git" />
                <Skill progress="90%" name="Linux" />
                <Skill progress="70%" name="Docker" />
                <Skill progress="70%" name="Nginx" />
                <Skill progress="60%" name="Python" />
                <Skill progress="40%" name="C++" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
