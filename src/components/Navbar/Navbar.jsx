import "./navbar.css";
import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        title="Home"
        className={activeNav === "#" ? "active navlink" : "navlink"}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        title="About Me"
        className={activeNav === "#about" ? "active navlink" : "navlink"}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        title="My Skills"
        className={activeNav === "#skills" ? "active navlink" : "navlink"}
      >
        <HiOutlineBadgeCheck />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        title="My Experience"
        className={activeNav === "#experience" ? "active navlink" : "navlink"}
      >
        <IoBriefcaseOutline />
      </a>
      <a
        href="#work"
        onClick={() => setActiveNav("#work")}
        title="My work"
        className={activeNav === "#work" ? "active navlink" : "navlink"}
      >
        <MdOutlineComputer />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        title="Contact Me"
        className={activeNav === "#contact" ? "active navlink" : "navlink"}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
