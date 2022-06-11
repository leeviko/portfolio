import React, { useEffect, useRef, useState } from "react";

import Expand from "../assets/images/expand.svg";

const Project = ({ name, description, link, code }) => {
  const [expand, setExpand] = useState(false);
  const [height, setHeight] = useState(null);
  const descRef = useRef(null);

  const handleClick = () => {
    setExpand(!expand);
  };

  const handleMouseDown = (e) => {
    console.log(e);
    if (e.detail > 1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (descRef.current && descRef.current.clientHeight !== 0 && expand) {
      setHeight(descRef.current.clientHeight);
    }
  }, [descRef, expand]);

  return (
    <div className={`project-item ${expand ? "expanded" : "minified"}`} onClick={handleClick}>
      <div className="project-item-header">
        <h4 className="project-name" onMouseDown={handleMouseDown}>
          {name}
        </h4>
      </div>
      <div
        ref={descRef}
        className={`project-item-content ${expand ? "visible" : "hidden"}`}
        style={expand ? { height } : { height: "0px" }}
      >
        <p className="project-description">{description}</p>
        <p className="project-links">
          <a href={link || "#"}>Link</a>
          <a href={code || "#"}>Code</a>
        </p>
      </div>
      <img className="expand-btn" alt="" src={Expand} />
    </div>
  );
};

export default Project;
