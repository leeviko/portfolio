import Head from "next/head";
import Skill from "../components/Skill";

import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Leevi - Taidot</title>
      </Head>
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
              <Skill name="HTML" />
              <Skill name="CSS" />
              <Skill name="React" />
              <Skill name="Redux" />
            </div>
          </div>
        </div>
        <div className={`${styles.skillsListSection} ${styles.backend}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle}>Backend</h3>
            <div className={styles.skillsList}>
              <Skill name="Node.js" />
              <Skill name="Express" />
              <Skill name="MySQL" />
              <Skill name="PostgreSQL" />
              <Skill name="PHP" />
            </div>
          </div>
        </div>

        <div className={`${styles.skillsListSection} ${styles.other}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle} lang="fi">
              Muut
            </h3>
            <div className={styles.skillsList}>
              <Skill name="Git" />
              <Skill name="Linux" />
              <Skill name="Docker" />
              <Skill name="Nginx" />
              <Skill name="Python" />
              <Skill name="C++" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
