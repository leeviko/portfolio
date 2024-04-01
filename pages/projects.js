import { useState } from "react";
import Head from "next/head";

import Project from "../components/Project";

import styles from "../styles/Projects.module.css";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: 'Quizitor',
      desc: 'Käyttäjät voivat luoda ja pelata tietovisoja.',
      tags: ['Next.js', 'TypeScript', 'tRPC', 'Prisma ORM'],
      link: 'https://quiz.leevi.dev/',
      code: 'https://github.com/leeviko/quizitor',
    },
    {
      title: 'blog.leevi.dev',
      desc: `Henkilökohtainen blogi sivusto. Githubissa CI / CD pipeline. 
             Yhtenä tavoitteena oli opetella Dockerin käyttöä ja hostata 
             itse sivusto käyttäen hyväksi mm. Nginx:iä.`,
      tags: [
        'React',
        'Redux',
        'TypeScript',
        'Express',
        'Rest API',
        'PostgreSQL',
        'Docker',
        'Nginx',
      ],
      link: '',
      code: 'https://github.com/leeviko/blog.leevi.dev',
    },
    {
      title: 'Eveloper',
      desc: 'Full stack Dev.to klooni',
      tags: ['React', 'Redux', 'Express', 'Rest API', 'PostgreSQL'],
      link: '',
      code: 'https://github.com/leeviko/eveloper',
    },
    {
      title: 'Countries',
      desc: 'Etsi tietoa eri maista',
      tags: ['React', 'Rest API'],
      link: 'https://countries.leevi.dev/',
      code: 'https://github.com/leeviko/countries',
    },
    {
      title: 'E-Kirjasto',
      desc: 'E-kirjastossa käyttäjä voi lainata, etsiä ja palauttaa kirjoja. Admin voi lisätä, päivittää ja poistaa kirjoja.',
      tags: ['PHP'],
      link: '',
      code: 'https://github.com/leeviko/e-kirjasto',
    },
  ];

  const tags = [
    'React',
    'Redux',
    'Next.js',
    'TypeScript',
    'Rest API',
    'Express',
    'PostgreSQL',
    'Docker',
    'tRPC',
    'Prisma ORM',
    'PHP',
  ];
  const [filters, setFilters] = useState([]);

  const handleSetFilter = (filter) => {
    let newFilters = [];

    if (filters.includes(filter)) {
      newFilters = filters.filter((item) => item !== filter);
      setFilters(newFilters);
      return;
    }

    setFilters([...filters, filter]);
  };

  return (
    <>
      <Head>
        <title>Leevi - Projektit</title>
      </Head>
      <h1 className="page-heading" lang="fi">
        Projektit
      </h1>
      <p className={styles.filterText}>Suodata</p>
      <div className={styles.projectFilters}>
        {tags.map((tag) => (
          <button
            className={`${styles.filter} ${
              filters.includes(tag) ? styles.active : styles.inactive
            }`}
            key={tag}
            onClick={() => handleSetFilter(tag)}
          >
            {tag}
            {filters.includes(tag) ? (
              <Image src="/images/close.svg" alt="" width={18} height={18} />
            ) : null}
          </button>
        ))}
      </div>
      <div className={`page-content ${styles.projectsContainer}`}>
        <div className={styles.projectsList}>
          {projects.map(
            (item) =>
              (item.tags.some((passed) => filters.indexOf(passed) >= 0) ||
                !filters.length) && (
                <Project
                  key={item.title}
                  name={item.title}
                  description={item.desc}
                  code={item.code}
                  link={item.link}
                  tags={item.tags}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
