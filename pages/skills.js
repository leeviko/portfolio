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
      <div className="page-content">
        <div className={`${styles.skillsListSection} ${styles.frontend}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle}>Frontend</h3>
            <div className={styles.skillsList}>
              <Skill name="HTML" icon="html" />
              <Skill name="CSS" icon="css" />
              <Skill name="React" icon="reactjs" />
              <Skill name="Redux" icon="redux" />
              <Skill name="Next.js" icon="nextjs" />
            </div>
          </div>
        </div>
        <div className={`${styles.skillsListSection} ${styles.backend}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle}>Backend</h3>
            <div className={styles.skillsList}>
              <Skill name="Node.js" icon="nodejs" />
              <Skill name="Express" />
              <Skill name="MySQL" icon="mysql" />
              <Skill name="PostgreSQL" icon="postgresql" />
              <Skill name="PHP" icon="php" />
              <Skill name="tRPC" icon="trpc" />
              <Skill name="Prisma ORM" icon="prisma" />
            </div>
          </div>
        </div>

        <div className={`${styles.skillsListSection} ${styles.other}`}>
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsSectionTitle} lang="fi">
              Muut
            </h3>
            <div className={styles.skillsList}>
              <Skill name="Git" icon="git" />
              <Skill name="Linux" icon="linux" />
              <Skill name="Docker" icon="docker" />
              <Skill name="Nginx" icon="nginx" />
              <Skill name="Python" icon="python" />
              <Skill name="C++" icon="cpp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
