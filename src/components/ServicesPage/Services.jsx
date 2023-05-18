import React from "react";
import styles from "./Services.module.css";
import searchPic from "../../Images/cards-illustrations/tokyo-magnifier-web-search-with-elements 2.png";
import ppcPic from "../../Images/cards-illustrations/tokyo-selecting-a-value-in-the-browser-window 1.png";
import emojiPic from "../../Images/cards-illustrations/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png";
import marketingPic from "../../Images/cards-illustrations/tokyo-sending-messages-from-one-place-to-another 1.png";
import contentCreationPic from "../../Images/cards-illustrations/tokyo-many-browser-windows-with-different-information 1.png";
import analyticsPic from "../../Images/cards-illustrations/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const cardsData = [
  {
    title: { lineOne: "Search engine", lineTwo: "optimization" },
    image: searchPic,
  },
  {
    title: { lineOne: "Pay-per-click", lineTwo: "advertising" },
    image: ppcPic,
  },
  {
    title: { lineOne: "Social Media", lineTwo: "Marketing" },
    image: emojiPic,
  },
  {
    title: { lineOne: "Email", lineTwo: "Marketing" },
    image: marketingPic,
  },
  {
    title: { lineOne: "Content", lineTwo: "Creation" },
    image: contentCreationPic,
  },
  {
    title: { lineOne: "Analytics and", lineTwo: "Tracking" },
    image: analyticsPic,
  },
];

const Services = ({ servicesRef }) => {
  return (
    <section ref={servicesRef} className={styles.services}>
      <div className="title">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className={styles.cards}>
        {cardsData.map((card, index) => (
          <div className={styles.card} key={index}>
            <h3>
              <span>{card.title.lineOne}</span>
              <br />
              <span>{card.title.lineTwo}</span>
            </h3>
            <button>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles.arrow}
                  d="M1.25005 13.7009C0.532613 14.1151 0.2868 15.0325 0.701013 15.75C1.11523 16.4674 2.03261 16.7132 2.75005 16.299L1.25005 13.7009ZM20.7694 5.38819C20.9839 4.58799 20.509 3.76548 19.7088 3.55107L6.66879 0.0570103C5.86859 -0.157403 5.04608 0.317471 4.83167 1.11767C4.61726 1.91787 5.09213 2.74038 5.89233 2.95479L17.4834 6.06062L14.3776 17.6517C14.1632 18.4519 14.6381 19.2744 15.4383 19.4888C16.2385 19.7033 17.061 19.2284 17.2754 18.4282L20.7694 5.38819ZM2.75005 16.299L20.0706 6.29899L18.5706 3.70092L1.25005 13.7009L2.75005 16.299Z"
                  fill="black"
                />
              </svg>
            </button>
            <LazyLoadImage src={card.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
