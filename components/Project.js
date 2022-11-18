import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tag from "./Tag";

import styles from "../styles/Projects.module.css";

export default function Project({
  name,
  description,
  link,
  code,
  tags,
  handleExpand,
  expandedItem,
}) {
  const [expand, setExpand] = useState(false);
  const [itemHeight, setItemHeight] = useState(null);
  const descRef = useRef(null);

  const handleClick = () => {
    if (expand === true) {
      handleExpand(null);
    } else {
      handleExpand(name);
    }
  };

  const handleMouseDown = (e) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (descRef.current && descRef.current.clientHeight >= 42 && expand) {
      setItemHeight(descRef.current.clientHeight);
    }
  }, [descRef, expand]);

  useEffect(() => {
    if (expandedItem === name) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }, [expandedItem, name]);

  return (
    <div
      className={`${styles.projectItem} ${
        expand ? styles.expanded : styles.minified
      }`}
    >
      <div className={styles.projectItemHeader}>
        <h4
          className={styles.projectName}
          onMouseDown={handleMouseDown}
          onClick={handleClick}
        >
          {name}
        </h4>
      </div>
      <div
        ref={descRef}
        className={`${styles.projectItemContent} ${
          expand ? styles.visible : styles.hidden
        }`}
        style={expand ? { height: itemHeight } : { height: "0px" }}
      >
        <ul className={styles.projectTags}>
          {tags.split(",").map((item) => (
            <Tag key={item} name={item} />
          ))}
        </ul>
        <p className={styles.projectDescription}>{description}</p>
        <p className={styles.projectLinks}>
          {!link ? null : <a href={link}>Link</a>}
          {!code ? null : <a href={code}>Code</a>}
        </p>
      </div>
      <Image
        className={styles.expandBtn}
        alt=""
        src="/images/expand.svg"
        width={32}
        height={32}
      />
    </div>
  );
}
