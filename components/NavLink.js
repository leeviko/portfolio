import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
export default function NavLink({ text, to, active }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`${styles.navItem} ${
        isHover ? styles.hover : styles.notHover
      } ${active ? styles.active : styles.inactive}`}
    >
      <Link
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={styles.navItemLink}
        href={to}
      >
        {text}
      </Link>
      <div className={styles.line} />
    </div>
  );
}
