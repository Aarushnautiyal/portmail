import React from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zalfq1n",
        "template_2wiemyw",
        e.target,
        "user_vBrUxJPSRpUGjPrF2JNzW"
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
      alert("thank you for contacting i'll be in touch");
  }
   // for email
  const toggle = (e) => {
    const small = document.querySelector(".small-nav");
      small.classList.contains("navigation")
        ? small.classList.remove("navigation")
        : small.classList.add("navigation");
  };
  return (
    <div className="portfolio">
      <nav>
        <Link to="/">
          <h3 className="logo">Sandeep Nautiyal</h3>
        </Link>
        <img
          className="hamburger"
          src="./images/menu.svg"
          alt="Menu"
          srcset=""
          onClick={(e) => toggle(e)}
        />
        <div className="small-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a href="resume.pdf">Resume</a>
            </li>
            <li>
              <Link to="/contact">Get in Touch</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="about">
          <div className="detail">
            <h1>Form</h1>
            <section className="sec" id="contact">
              <div className="content">
                <div className="mxw800p">
                  <h3>Send Me A Message</h3>

                  <h4>Or Call Me : 8433171172</h4>
                </div>
                <div className="contactform">
                  <form onSubmit={sendEmail}>
                    <div className="row100">
                      <div className="inputBx50">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="inputBx50">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="row100">
                      <div className="inputBx100">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row100">
                      <div className="inputBx100">
                        <input type="submit" value="Send" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className="hero2">
            <img
              className="profile-left"
              src="./images/about-left.jpg"
              alt="profile"
            />
            <img
              className="profile-right"
              src="./images/about-right.jpg"
              alt="profile"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
