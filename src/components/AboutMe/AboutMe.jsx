import "./aboutme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div id="about">
      <h1 data-aos="fade-up" className="who-am-i">
        who am i?
      </h1>
      <h2 data-aos="fade-up" className="intro-name">
        Hello, I am <span>Aimon Imran</span>.
      </h2>
      <h3 data-aos="fade-up" className="intro">
        I am a skilled <span>Full Stack Developer </span>with extensive experience in creating high-performance, responsive applications using modern technologies like <span>Next.js, React.js, and React Native</span>. My expertise spans both frontend and backend development. I excel in delivering clean, maintainable code and have a proven track record of building scalable and robust solutions.
      </h3>
      <h3 data-aos="fade-up" className="intro">
        Throughout my career, I've gained a deep understanding of the full development lifecycle, from initial design to deployment. My work demonstrates my ability to enhance user engagement and optimize application performance. I&apos;m proficient in integrating tools like <span>Prisma</span> for database management, <span>Next Auth</span> for authentication, and <span>Stripe</span> for payments, which have led to significant improvements in user satisfaction and transaction success rates.
      </h3>
    </div>
  );
};

export default AboutMe;
