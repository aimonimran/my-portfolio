import { useEffect, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3t4wp7m",
        "template_hmrtyrf",
        form.current,
        "iJ3TZVJCy1BKjRM5-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <h1 data-aos="fade-up" className="contact-me">
        CONTACT ME
      </h1>

      <div className="contact-container">
        <div className="info-container">
          <p className="available">
            I'm available for work.
            <br />
            Drop me a word at <span>aimon.imran@gmail.com</span>.
          </p>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <Input name="name" type="text" placeholder="Name" />
            <Input name="email" type="email" placeholder="Email Address" />
            <Input name="subject" type="text" placeholder="Subject" />
            <textarea
              id=""
              name="message"
              rows="4"
              placeholder="Message"
              required
            />
            <div className="button-scroll">
              <button type="submit" className="btn" value="Send message">
                Send Message
              </button>
              <div className="scroll-up">
                <a href="#">
                  <AiOutlineUp />
                </a>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="socials-container">
          <div className="socials">
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
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
