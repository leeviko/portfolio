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
        Moro, oon Leevi Kotilainen. Opiskelen Kaukovainion OSAO:ssa
        ohjelmistokehittäjäksi. Tykkään suunnitella ja luoda nettisivuja.
        Tavoitteenani on kehittyä ohjelmoijana ja oppia uusia asioita.
        Harrastuksiini kuuluu mm. lukeminen, juokseminen, videopelaaminen ja
        koodaus.
      </p>
      <Link
        className={styles.resumeLink}
        href="/files/CV_LeeviKotilainen.pdf"
        target="_blank"
        download
      >
        Lataa CV
      </Link>
    </>
  );
}
