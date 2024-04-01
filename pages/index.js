import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

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
        Moro! Oon Leevi, junior tason web-kehittäjä Oulusta. Olen harrastanut
        ohjelmointia vuodesta 2019 asti vaihtelevissa määrin. Keskityn pääosin
        full stack web-ohjelmointiin, mutta minua kiinnostaa myös mm.
        grafiikkaohjelmointi C++ ja OpenGL:ää käyttäen.
      </p>
      <p>Eniten kokemusta minulla on Reactissa, ja Node.js:ssä.</p>
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
