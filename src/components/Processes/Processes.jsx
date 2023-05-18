import { useState } from "react";
import styles from "./Processes.module.css";

const processes = [
  {
    num: 1,
    name: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    num: 2,
    name: "Research and Strategy Development",
    description:
      "Our research and strategy development process involves in-depth analysis of your industry, target audience, and competition to develop a customized digital marketing plan that aligns with your business goals. We conduct comprehensive market research, analyze customer data, and review industry reports to create a data-driven strategy that maximizes ROI and delivers measurable results.",
  },
  {
    num: 3,
    name: "Implementation",
    description:
      "Designed to bring your digital marketing strategy to life. We utilize a multi-channel approach to execute the tactics outlined in the strategy, which may include social media marketing, content creation, email marketing, paid advertising, and more.",
  },
  {
    num: 4,
    name: "Monitoring and Optimization",
    description:
      "We understand that digital marketing is a dynamic landscape, and campaign performance can change rapidly. That is why we have a dedicated team that continuously monitors your campaigns to identify areas for improvement and optimize performance. We use a data-driven approach to track key metrics and analyze campaign performance, allowing us to make informed decisions and adjust our tactics accordingly.",
  },
  {
    num: 5,
    name: "Reporting and Communication",
    description:
      "We believe that transparency is key to building strong relationships with our clients. That is why we provide regular reporting and communication to keep you informed about the progress of your campaigns. ",
  },
  {
    num: 6,
    name: "Continual Improvement",
    description:
      "We are committed to ongoing improvement and are always looking for ways to optimize your digital marketing campaigns. We use a data-driven approach to track key metrics and identify areas for improvement, allowing us to make informed decisions about how to refine our tactics. ",
  },
];

const plusIcon = (
  <svg
    width="58"
    height="59"
    viewBox="0 0 58 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
    <path
      d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
      fill="#191A23"
    />
  </svg>
);

const minusIcon = (
  <svg
    width="58"
    height="59"
    viewBox="0 0 58 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
    <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
  </svg>
);
const Processes = ({ processesRef }) => {
  const [indexOf, setIndexOf] = useState(null);

  const toggle = (index) => {
    if (indexOf !== index) {
      setIndexOf(index);
    } else {
      setIndexOf(null);
    }
  };

  return (
    <section ref={processesRef} className={styles.processes}>
      <div className="title">
        <h2>Our Working Processes</h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className={styles.accordion}>
        {processes.map((process, index) => (
          <div
            key={process.num}
            className={styles.single__item}
            onClick={() => toggle(index)}
            style={indexOf === index ? { backgroundColor: "#b9ff66" } : null}
          >
            <div className={styles.visible__part}>
              <div className={styles.process__title}>
                <span>0{process.num}</span>
                <h4>{process.name}</h4>
              </div>
              <div className={styles.icon}>
                {indexOf === index ? minusIcon : plusIcon}
              </div>
            </div>
            <div className={styles.description}>
              {/* <hr style={{ display: indexOf === index ? "block" : "none" }} /> */}
              <p
                style={{
                  maxHeight:
                    indexOf === index ? process.description.length + "px" : 0,
                  marginTop: indexOf === index ? "2rem" : null,
                }}
              >
                {process.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Processes;
