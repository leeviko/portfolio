import Image from "next/image";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className="footer-wrapper">
            <div className={styles.someButtons}>
              <a
                href="https://github.com/leeviko"
                className={styles.someBtn}
                draggable={false}
              >
                <Image
                  className="icon"
                  alt="Github"
                  src="/images/github.svg"
                  width={32}
                  height={32}
                  draggable={false}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/leevi-kotilainen/"
                className={styles.someBtn}
                draggable={false}
              >
                <Image
                  className="icon"
                  alt="Linkedin"
                  src="/images/linkedin.svg"
                  width={32}
                  height={32}
                  draggable={false}
                />
              </a>
              <a
                href="mailto:leevi.j.kotilainen@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles.someBtn}
                draggable={false}
              >
                <Image
                  className="icon"
                  alt="Mail"
                  src="/images/mail.svg"
                  width={32}
                  height={32}
                  draggable={false}
                />
              </a>
            </div>
            <p className="cc">© 2022 Leevi Kotilainen</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
