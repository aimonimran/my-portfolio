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
        Hello, I am <span>Aimon Imran</span>
      </h2>
      <h3 data-aos="fade-up" className="intro">
        I'm a <span>web developer</span> oriented to <span>frontend</span>, I
        rely on the most outstanding opensource library
        <b>
          <i>
            <span> React</span>
          </i>
        </b>
        . I'm passionate about creating modern websites with modern tools. I
        combine clean and simple code with attractive design.
      </h3>
      <h3 data-aos="fade-up" className="intro">
        I'm currently pursuing my degree in <span>Computer Science</span> from
        NED University of Engineering and Technology.
      </h3>
      <h3 data-aos="fade-up" className="intro">
        My aim is to take <span>coding</span> to a professional level and thus,
        I am looking forward to be a part of a team where I can learn and grow.
      </h3>
    </div>
  );
};

export default AboutMe;
