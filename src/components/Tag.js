import React from "react";

const Tag = ({ name }) => {
  return (
    <li className="tag">
      <span className="tag-name">{name}</span>
    </li>
  );
};

export default Tag;
