import Link from "next/link";
import Skill from "../components/Skill";

import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <>
      <h1 className="page-heading" lang="fi">
        Taidot
      </h1>
      <p className="section-text" lang="fi">
        Tässä on jotain kieliä ja muita työkaluja joita osaan.
      </p>
      <div className="page-content">
        <div className={`${styles.skillsListSection} ${styles.frontend}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle}>Frontend</h3>
            <div className={styles.skillsList}>
              <Skill progress="95%" name="HTML" />
              <Skill progress="95%" name="CSS" />
              <Skill progress="90%" name="React" />
              <Skill progress="90%" name="Redux" />
            </div>
          </div>
        </div>
        <div className={`${styles.skillsListSection} ${styles.backend}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle}>Backend</h3>
            <div className={styles.skillsList}>
              <Skill progress="95%" name="Node.js" />
              <Skill progress="95%" name="Express" />
              <Skill progress="90%" name="MySQL" />
              <Skill progress="80%" name="PostgreSQL" />
              <Skill progress="70%" name="PHP" />
            </div>
          </div>
        </div>

        <div className={`${styles.skillsListSection} ${styles.other}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle} lang="fi">
              Muut
            </h3>
            <div className={styles.skillsList}>
              <Skill progress="90%" name="Git" />
              <Skill progress="90%" name="Linux" />
              <Skill progress="70%" name="Docker" />
              <Skill progress="70%" name="Nginx" />
              <Skill progress="60%" name="Python" />
              <Skill progress="40%" name="C++" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
