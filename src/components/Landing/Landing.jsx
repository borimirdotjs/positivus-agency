import React from "react";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import styles from "./Landing.module.css";
import Logos from "./Logos/Logos";

const Landing = ({
  quoteRef,
  servicesRef,
  studiesRef,
  processesRef,
  teamRef,
  testimonialsRef,
}) => {
  return (
    <div className={styles.wrapper}>
      <Nav
        quoteRef={quoteRef}
        servicesRef={servicesRef}
        studiesRef={studiesRef}
        processesRef={processesRef}
        teamRef={teamRef}
        testimonialsRef={testimonialsRef}
      />
      <Hero />
      <Logos />
    </div>
  );
};

export default Landing;
