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
        I am a skilled <span>Frontend Developer</span> specializing in building high-performance web and mobile applications using <span>React.js, Next.js, React Native, and TypeScript</span>. I excel at crafting reusable components, managing state, and optimizing performance to deliver seamless user experiences.
      </h3>
      <h3 data-aos="fade-up" className="intro">
        Throughout my career, I&apos;ve built production-grade systems including a <span>Visitor Management System</span> with hardware integrations and UAE PASS authentication, integrated payment solutions with <span>Stripe</span>, and collaborated with cross-functional teams on scalable RESTful API-driven applications. I&apos;m adept at delivering maintainable code and smooth user experiences.
      </h3>
    </div>
  );
};

export default AboutMe;
