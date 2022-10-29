import { useRouter } from "next/router";
import NavLink from "./NavLink";

import styles from "../styles/Nav.module.css";

export default function Nav() {
  const currentPage = useRouter().pathname;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <NavLink
          to="/"
          text="Minusta"
          active={currentPage === "/" || currentPage === "/about"}
        />
        <NavLink
          to="/skills"
          text="Taidot"
          active={currentPage === "/skills"}
        />
        <NavLink
          to="/projects"
          text="Projektit"
          active={currentPage === "/projects"}
        />
      </div>
    </nav>
  );
}
