import React from "react";
import styles from "./Cta.module.css";
import ctaPic from "../../Images/cta-illustration.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.info}>
        <h3>Let's make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button>Get your free proposal</button>
      </div>
      <LazyLoadImage src={ctaPic} alt="call to action" />
    </section>
  );
};

export default Cta;
