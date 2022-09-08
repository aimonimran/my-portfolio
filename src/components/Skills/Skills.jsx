import "./skills.css";
import { frontend } from "./../../data";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="my-skills">My Skills</h1>
      <div className="skills-container">
        {frontend.map((skill) => (
          <div key={skill.id} className="skill-name-experience">
            <div className="skill-div">
              <HiOutlineBadgeCheck className="skills__details-icon" />
              <div className="skill-name">{skill.skill}</div>
            </div>
            <div className="experience">
              <small className="text-light">{skill.experience}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
