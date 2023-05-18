import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import styles from "./Testimonials.module.css";
import "@splidejs/react-splide/css/core";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    occupation: "Marketing Director at XYZ Corp",
  },
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    occupation: "Marketing Director at XYZ Corp",
  },
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    occupation: "Marketing Director at XYZ Corp",
  },
];

const Testimonials = ({ testimonialsRef }) => {
  return (
    <section ref={testimonialsRef} className={styles.testimonials}>
      <div className="title">
        <h2>Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className={styles.testimonials__carousel}>
        <Splide
          hasTrack={false}
          options={{
            width: "100%",
          }}
        >
          <SplideTrack>
            {testimonials.map((each, index) => (
              <SplideSlide key={index}>
                <div className={styles.testimonial__container}>
                  <div className={styles.text__container}>
                    <p className={styles.text}>
                      <q>{each.text}</q>
                    </p>
                  </div>
                  <div className={styles.testimonial__author}>
                    <h4 className={styles.author__name}>{each.author}</h4>
                    <p className={styles.author__occupation}>
                      {each.occupation}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows" />
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
