import "./home.css";
import CV from "../../assets/frontend-developer-cv.pdf";
import clipart from "../../assets/hey.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home-container">
      <div className="info-container-left">
        <div className="socials">
          <a
            href="https://github.com/aimonimran"
            target="_blank"
            title="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aimon-imran-420b091a6/"
            target="_blank"
            title="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className="info">
          <h1 className="name">Aimon Imran</h1>
          <h4 className="about-me">
            I'm a React developer and a Computer Science student, constantly
            looking for new opportunities to expand my skill set.
          </h4>
        </div>
        <div className="cta">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn">
            GET IN TOUCH
          </a>
        </div>
        <div className="scroll">
          <a href="#about">
            <AiOutlineDown />
          </a>
        </div>
      </div>
      <div className="info-container-right">
        <img className="clipart" src={clipart} />
      </div>
    </div>
  );
};

export default Home;
