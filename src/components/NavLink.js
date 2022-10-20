import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ text, to, active }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nav-item ${isHover ? "hover" : "not-hover"} ${active ? "active" : "inactive"}`}
    >
      <Link
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="nav-item-link"
        to={to}
      >
        {text}
      </Link>
      <div className="line"></div>
      <div className="inactive-line"></div>
    </div>
  );
};

export default NavLink;
