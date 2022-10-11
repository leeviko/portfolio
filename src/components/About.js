import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "Leevi Kotilainen";
  }, []);

  return (
    <div className="about page">
      <div className="page-container">
        <h1 className="page-heading" lang="fi">
          Minusta
        </h1>
        <p className="about-section-text section-text" lang="fi">
          Moro, oon Leevi Kotilainen. Opiskelen Kaukovainion OSAO:ssa ohjelmistokehittäjäksi.
          Tykkään suunnitella ja luoda nettisivuja. Tavoitteenani on kehittyä ohjelmoijana ja oppia
          uusia asioita. Harrastuksiini kuuluu mm. lukeminen, juokseminen, videopelaaminen ja
          koodaus.
        </p>
        <Link className="resume-link" to="/files/CV_LeeviKotilainen.pdf" target="_blank" download>
          CV
        </Link>
      </div>
    </div>
  );
};

export default About;
