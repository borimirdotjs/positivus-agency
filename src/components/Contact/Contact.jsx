import { useState } from "react";
import styles from "./Contact.module.css";
import { toast } from "react-hot-toast";
import contactFormPic from "../../Images/contact-form.svg";

export const isValidEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const Contact = ({ quoteRef }) => {
  const [reason, setReason] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    reason === "quote"
      ? toast.success(
          `Hey, ${
            name ? name : "stranger"
          }. A member of our team will contact you back at ${email}`
        )
      : toast.success(
          `Hey, ${name ? name : "stranger"}. Thank's for stopping by :)`
        );

    setEmail("");
    setName("");
    setMessage("");
  };

  const disabledButton = !reason || !email || !message;

  return (
    <section ref={quoteRef} className={styles.contact}>
      <div className="title">
        <h2>Contact Us</h2>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <div className={styles.form__container}>
        <form id={styles.contact__form} onSubmit={handleSubmit}>
          <div className={styles.radio__buttons}>
            <div className={styles.greeting}>
              <label htmlFor="greeting">
                <input
                  id="greeting"
                  type="radio"
                  name="selection"
                  value="greeting"
                  onChange={(e) => setReason(e.target.value)}
                />
                Say Hi
              </label>
            </div>
            <div className={styles.quote}>
              <label htmlFor="quote">
                <input
                  id="quote"
                  type="radio"
                  name="selection"
                  value="quote"
                  onChange={(e) => setReason(e.target.value)}
                />
                Get a Quote
              </label>
            </div>
          </div>
          <div className={styles.inputs__container}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className={`${styles.submit__btn} ${styles.inner}`}
            type="submit"
            form={styles.contact__form}
            disabled={disabledButton}
          >
            Send Message
          </button>
        </form>
        <button
          className={`${styles.submit__btn} ${styles.outer}`}
          type="submit"
          form={styles.contact__form}
          disabled={disabledButton}
        >
          Send Message
        </button>
        <div className={styles.image__container}>
          <img src={contactFormPic} alt="contact form" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
