import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "Leevi - Minusta";
  }, []);

  return (
    <div className="about page">
      <div className="page-container">
        <h1 className="page-heading" lang="fi">
          Minusta
        </h1>
        <p className="about-section-text section-text" lang="fi">
          Morjes, oon Leevi. Opiskelen OSAOn Kaukovainion yksikössä ohjelmistokehittäjäksi.
          Tavoitteenani on kehittyä ohjelmoijana ja oppia uusia asioita. Vapaa-aikana tykkään
          koodata, pelata ja käydä juoksemassa, sekä välillä myös lukea.
        </p>
        <Link className="resume-link" to="/CV_LeeviKotilainen.pdf" target="_blank">
          CV
        </Link>
      </div>
    </div>
  );
};

export default About;
