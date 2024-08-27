import React from 'react';
import Tag from './Tag';

import styles from '../styles/Projects.module.css';

export default function Project({
  name,
  description,
  link,
  code,
  tags,
  featured,
}) {
  return (
    <div
      className={`${styles.projectItem} ${featured && styles.projectFeatured}`}
    >
      <div className={styles.projectItemHeader}>
        <h4 className={styles.projectName}>{name}</h4>
      </div>
      <div className={styles.projectItemContent}>
        <ul className={styles.projectTags}>
          {tags.map((item) => (
            <Tag key={item} name={item} />
          ))}
        </ul>
        <p className={styles.projectDescription}>{description}</p>
        <p className={styles.projectLinks}>
          {link && <a href={link}>Link</a>}
          {code && <a href={code}>Code</a>}
        </p>
      </div>
    </div>
  );
}
