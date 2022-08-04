import React, { useEffect, useRef, useState } from "react";

import Tag from "./Tag";

import Expand from "../assets/images/expand.svg";

const Project = ({ name, description, link, code, tags }) => {
  const [expand, setExpand] = useState(false);
  const [height, setHeight] = useState(null);
  const descRef = useRef(null);

  const handleClick = () => {
    setExpand(!expand);
  };

  const handleMouseDown = (e) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (descRef.current && descRef.current.clientHeight >= 42 && expand) {
      setHeight(descRef.current.clientHeight);
    }
  }, [descRef, expand]);

  return (
    <div className={`project-item ${expand ? "expanded" : "minified"}`}>
      <div className="project-item-header">
        <h4 className="project-name" onMouseDown={handleMouseDown} onClick={handleClick}>
          {name}
        </h4>
      </div>
      <div
        ref={descRef}
        className={`project-item-content ${expand ? "visible" : "hidden"}`}
        style={expand ? { height } : { height: "0px" }}
      >
        <ul className="project-tags">
          {tags.split(",").map((item) => (
            <Tag key={item} name={item} />
          ))}
        </ul>
        <p className="project-description">{description}</p>
        <p className="project-links">
          {!link ? null : <a href={link}>Link</a>}
          {!code ? null : <a href={code}>Code</a>}
        </p>
      </div>
      <img className="expand-btn" alt="" src={Expand} />
    </div>
  );
};

export default Project;
