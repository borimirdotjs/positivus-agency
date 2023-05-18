import styles from "./Team.module.css";
import johnsmithpic from "../../Images/team-photos/johnsmith.png";
import janedoepic from "../../Images/team-photos/janedoe.png";
import michaelbrownpic from "../../Images/team-photos/michaelbrown.png";
import emilyjohnsonpic from "../../Images/team-photos/emilyjohnson.png";
import brianwilliamspic from "../../Images/team-photos/brianwilliams.png";
import sarahkimpic from "../../Images/team-photos/sarahkim.png";
import linkedinlogo from "../../Images/linkedinicon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const team = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    info: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    url: johnsmithpic,
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    info: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    url: janedoepic,
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    info: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    url: michaelbrownpic,
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    info: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    url: emilyjohnsonpic,
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    info: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    url: brianwilliamspic,
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    info: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    url: sarahkimpic,
  },
];

const Team = ({ teamRef }) => {
  return (
    <section ref={teamRef} className={styles.team}>
      <div className="title">
        <h2>Team</h2>
        <p>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className={styles.team__members}>
        {team.map((member) => (
          <div className={styles.member} key={member.name}>
            <div className={styles.picture__name}>
              <div className={styles.image__container}>
                <LazyLoadImage src={member.url} alt="team member" />
              </div>
              <div className={styles.name__container}>
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
              <img className={styles.linkedin} src={linkedinlogo} alt="" />
            </div>
            <hr />
            <div className={styles.info}>
              <p>{member.info}</p>
            </div>
          </div>
        ))}
      </div>
      <button>See all team</button>
    </section>
  );
};

export default Team;
