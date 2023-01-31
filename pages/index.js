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
        Moro! Oon Leevi Kotilainen, junior tason web-kehittäjä. Aloitin
        ohjelmoinnin noin 4 vuotta sitten ja valmistuin datanomiksi vuoden 2022
        lopussa. Tavoitteenani on kehittyä ohjelmoijana ja oppia uusia asioita.
        Koodauksen lisäksi harrastan myös lukemista, juoksemista ja
        videopelaamista.
      </p>
      <p>Eniten kokemusta minulla on Reactissa, ja Node.js:ssä.</p>
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
