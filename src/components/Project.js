import React, { useState } from "react";

import Expand from "../assets/images/expand.svg";

const Project = ({ name, description }) => {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <div className="project-item">
      <div className="project-item-container">
        <p className="project-name">{name}</p>
        <img className="expand-btn" alt="" src={Expand} />
      </div>
    </div>
  );
};

export default Project;
