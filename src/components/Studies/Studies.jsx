import styles from "./Studies.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "../Carousel.css";
import { useEffect, useState } from "react";

const studies = [
  {
    id: 1,
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 2,
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 3,
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const Studies = ({ studiesRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={studiesRef} className={styles.studies}>
      <div className="title">
        <h2>Case Studies</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <Splide
        options={{
          width: "200%",
          gap: "1rem",
          drag: isMobile,
          autoWidth: true,
        }}
        tag="section"
        aria-label="case studies"
        className="myslide"
      >
        {studies.map((study) => (
          <SplideSlide className="single__slide" key={study.id}>
            <div className={styles.slider}>
              <p>{study.text}</p>
              <button>
                Learn more{" "}
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={styles.arrow}
                    d="M1.25005 13.7009C0.532613 14.1151 0.2868 15.0325 0.701013 15.75C1.11523 16.4674 2.03261 16.7132 2.75005 16.299L1.25005 13.7009ZM20.7694 5.38819C20.9839 4.58799 20.509 3.76548 19.7088 3.55107L6.66879 0.0570103C5.86859 -0.157403 5.04608 0.317471 4.83167 1.11767C4.61726 1.91787 5.09213 2.74038 5.89233 2.95479L17.4834 6.06062L14.3776 17.6517C14.1632 18.4519 14.6381 19.2744 15.4383 19.4888C16.2385 19.7033 17.061 19.2284 17.2754 18.4282L20.7694 5.38819ZM2.75005 16.299L20.0706 6.29899L18.5706 3.70092L1.25005 13.7009L2.75005 16.299Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Studies;
