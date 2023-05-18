import styles from "./Footer.module.css";
import footerLogo from "../../Images/footer-logo.svg";
import fbLogo from "../../Images/sm-logos/fb-logo.svg";
import linkedInLogo from "../../Images/sm-logos/linkedin-logo.svg";
import twitterLogo from "../../Images/sm-logos/twitter-logo.svg";
import { useState } from "react";
import { isValidEmail } from "../Contact/Contact";
import { toast } from "react-hot-toast";
import { handleScroll } from "../../utils";

const Footer = ({
  quoteRef,
  servicesRef,
  studiesRef,
  processesRef,
  teamRef,
  testimonialsRef,
}) => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      return toast.error("Please enter a valid email");
    } else {
      toast.success("Thank you for subscribing !");
      setEmail("");
    }
  };

  return (
    <section className={styles.footer}>
      <nav>
        <img src={footerLogo} alt="footer logo" />
        <ul>
          <li onClick={() => handleScroll(servicesRef)}>Services</li>
          <li onClick={() => handleScroll(studiesRef)}>Case Studies</li>
          <li onClick={() => handleScroll(processesRef)}>Processes</li>
          <li onClick={() => handleScroll(teamRef)}>Team</li>
          <li onClick={() => handleScroll(testimonialsRef)}>Testimonials</li>
        </ul>
        <div className={`${styles.social__logos} ${styles.up}`}>
          <img src={linkedInLogo} alt="linkedIn logo" />
          <img src={fbLogo} alt="facebook logo" />
          <img src={twitterLogo} alt="twitter logo" />
        </div>
      </nav>
      <div className={styles.middle__row}>
        <div className={styles.contact__info}>
          <h4>Contact us:</h4>
          <div className={styles.contact__info__p}>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <form className={styles.newsletter} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe to news</button>
        </form>
      </div>
      <div className={`${styles.social__logos} ${styles.down}`}>
        <img src={linkedInLogo} alt="linkedIn logo" />
        <img src={fbLogo} alt="facebook logo" />
        <img src={twitterLogo} alt="twitter logo" />
      </div>
      <hr />
      <div className={styles.credit}>
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>
          Design by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://olgaaverchenko.design/"
          >
            Olga Averchenko Design
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
