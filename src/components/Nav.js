import React from "react";
import NavLink from "./NavLink";

const Nav = ({ currentPage }) => {
  return (
    <nav>
      <div className="nav-items">
        <NavLink to="/" text="Koti" active={currentPage === "/"} />
        <NavLink to="/about" text="Minusta" active={currentPage === "/about"} />
        <NavLink to="/skills" text="Taidot" active={currentPage === "/skills"} />
        <NavLink to="/projects" text="Projektit" active={currentPage === "/projects"} />
      </div>
    </nav>
  );
};

export default Nav;
