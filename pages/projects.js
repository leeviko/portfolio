import styles from "../styles/Projects.module.css";

import Project from "../components/Project";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Leevi - Projektit</title>
      </Head>
      <h1 className="page-heading" lang="fi">
        Projektit
      </h1>
      <p className="section-text" lang="fi">
        Tässä on jotain projekteja mitä on tullut tehtyä.
      </p>
      <div className="page-content">
        <div className={styles.projectsList}>
          <Project
            name="Eveloper"
            description="Full stack Dev.to klooni"
            code="https://github.com/leeviko/eveloper"
            tags="React, Redux, Express, Rest API, PostgreSQL"
          />
          <Project
            name="Countries"
            description="Etsi tietoa eri maista"
            link="https://geronimo.okol.org/~kotlee/countries/"
            code="https://github.com/leeviko/countries"
            tags="React, Rest API"
          />
          <Project
            name="E-Kirjasto"
            description="E-kirjastossa käyttäjä voi lainata, etsiä ja palauttaa kirjoja. Admin voi lisätä ja päivittää kirjoja yms."
            code="https://github.com/leeviko/e-kirjasto"
            tags="PHP"
          />
        </div>
      </div>
    </>
  );
}
