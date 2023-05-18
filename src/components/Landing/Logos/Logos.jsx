import React from "react";
import styles from "./Logos.module.css";
import amazonLogo from "../../../Images/company-logos/Company logo.png";
import dribbleLogo from "../../../Images/company-logos/Company logo-1.png";
import hubspotLogo from "../../../Images/company-logos/Company logo-2.png";
import notionLogo from "../../../Images/company-logos/Company logo-3.png";
import netflixLogo from "../../../Images/company-logos/Company logo-4.png";
import zoomLogo from "../../../Images/company-logos/Company logo-5.png";

const Logos = () => {
  return (
    <div className={styles.wrapper}>
      <img src={amazonLogo} alt="amazonlogo" />
      <img src={dribbleLogo} alt="dribblelogo" />
      <img src={hubspotLogo} alt="hubspotlogo" />
      <img src={notionLogo} alt="notionlogo" />
      <img src={netflixLogo} alt="netflixlogo" />
      <img src={zoomLogo} alt="zoomlogo" />
    </div>
  );
};

export default Logos;
