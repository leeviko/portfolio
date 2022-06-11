import React from "react";

import ProgressBar from "./SkillProgress";

const Skill = ({ name, progress }) => {
  return (
    <div className="skill">
      <span className="skill-name">{name}</span>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Skill;
