import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Nav.module.css";
import logo from "../../../Images/logo-black.svg";
import { SlArrowUp } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { handleScroll } from "../../../utils";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Nav = ({
  quoteRef,
  servicesRef,
  studiesRef,
  processesRef,
  teamRef,
  testimonialsRef,
}) => {
  const [fixed, setFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const appWidth = window.innerWidth;
      const minWidthThreshold = 920; // Define your desired threshold value
      if (appWidth >= minWidthThreshold) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const FIXED__CHANGE = 230;
    const changeFixed = () => {
      if (window.scrollY >= FIXED__CHANGE && fixed !== true) {
        setFixed(true);
      }
      if (window.scrollY < FIXED__CHANGE && fixed !== false) {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", changeFixed);
  }, [fixed]);

  return (
    <div className={styles.nav__container}>
      {isOpen ? disableBodyScroll(document) : enableBodyScroll(document)}
      <nav
        className={
          isOpen ? `${styles.header__nav} ${styles.mobile}` : styles.header__nav
        }
      >
        <div className={styles.logo} onClick={handleToTop}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.links}>
          <NavLink
            onClick={() => {
              handleScroll(servicesRef);
              setIsOpen(false);
            }}
          >
            Services
          </NavLink>
          <NavLink
            onClick={() => {
              handleScroll(studiesRef);
              setIsOpen(false);
            }}
          >
            Case Studies
          </NavLink>
          <NavLink
            onClick={() => {
              handleScroll(processesRef);
              setIsOpen(false);
            }}
          >
            Processes
          </NavLink>
          <NavLink
            onClick={() => {
              handleScroll(teamRef);
              setIsOpen(false);
            }}
          >
            Team
          </NavLink>
          <NavLink
            onClick={() => {
              handleScroll(testimonialsRef);
              setIsOpen(false);
            }}
          >
            Testimonials
          </NavLink>

          <button
            onClick={() => {
              handleScroll(quoteRef);
              setIsOpen(false);
            }}
          >
            Request a quote
          </button>
        </div>
        {isOpen ? (
          <GrClose
            onClick={() => setIsOpen(!isOpen)}
            className={styles.burger_menu}
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            className={styles.burger_menu}
          />
        )}
      </nav>
      {!isOpen && (
        <button
          style={
            fixed
              ? { right: "2rem", opacity: 1 }
              : { right: "-5rem", opacity: 0 }
          }
          className={styles.scroll__top}
          onClick={handleToTop}
        >
          <SlArrowUp className={styles.scroll__top__icon} />
        </button>
      )}
    </div>
  );
};

export default Nav;
