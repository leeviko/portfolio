import React from "react";

import GithubIcon from "../assets/images/github.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import MailIcon from "../assets/images/mail.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-wrapper">
            <div className="some-buttons">
              <a href="https://github.com/leeviko" className="github some-btn" draggable={false}>
                <img className="icon-img" alt="Github" src={GithubIcon} draggable={false} />
              </a>
              <a
                href="https://www.linkedin.com/in/leevi-kotilainen/"
                className="linkedin some-btn"
                draggable={false}
              >
                <img className="icon-img" alt="Linkedin" src={LinkedinIcon} draggable={false} />
              </a>
              <a
                href="mailto:leevi.j.kotilainen@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="mail some-btn"
                draggable={false}
              >
                <img className="icon-img" alt="Mail" src={MailIcon} draggable={false} />
              </a>
            </div>
            <p className="cc">© 2022 Leevi Kotilainen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
