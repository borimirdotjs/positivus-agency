import React from "react";
import illustation from "../../../Images/hero.svg";
import styles from "./Hero.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = ({ handleQuoteScroll }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.title}>
        <h1>Navigating the digital landscape for success</h1>
      </div>
      <div className={styles.illustation}>
        <LazyLoadImage src={illustation} alt="" />
      </div>
      <div className={styles.mission}>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button onClick={handleQuoteScroll}>Book a consultation</button>
      </div>
    </section>
  );
};

export default Hero;
