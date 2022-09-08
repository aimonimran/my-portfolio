import "./contact.css";
import { AiOutlineUp } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contact-me">CONTACT ME</h1>
      <p className="available">
        I'm available for work.
        <br />
        Drop me a word.
      </p>
      <p className="email">aimon.imran@gmail.com</p>
      <div className="scroll-up">
        <a href="#">
          <AiOutlineUp />
        </a>
      </div>
    </div>
  );
};

export default Contact;
