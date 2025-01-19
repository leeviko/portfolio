import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leevi Kotilainen</title>
      </Head>
      <h1 className="page-heading" lang="fi">
        Minusta
      </h1>
      <p className="section-text" lang="fi">
        Moi! Olen Leevi, junior-tason web-kehittäjä Oulusta. Aloitin
        tietojenkäsittelytieteiden opinnot Oulun yliopistossa syksyllä 2024.
      </p>
      <p className="section-text" lang="fi">
        Ohjelmoinnin pariin päädyin vuonna 2019, ja siitä lähtien olen
        jatkuvasti laajentanut taitojani sekä oppinut uusia teknologioita.
        Erityisesti olen keskittynyt full stack web-kehitykseen.
      </p>
      <p>
        Eniten kokemusta minulla on{' '}
        <span className={styles.highlight}>Reactissa</span>, ja {''}
        <span className={styles.highlight}>Node.js:ssä</span>.
      </p>
      <Link
        className={styles.resumeLink}
        href="/files/CV_LeeviKotilainen.pdf"
        target="_blank"
        download
      >
        CV
      </Link>
    </>
  );
}
