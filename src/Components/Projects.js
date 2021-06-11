import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const toggle = (e) => {
    const small = document.querySelector(".small-nav");
      small.classList.contains("navigation")
        ? small.classList.remove("navigation")
        : small.classList.add("navigation");
  };
  return (
    <div className="blue-portfolio">
      <nav>
        <Link to="/">
          <h3 className="logo">Sandeep Nautiyal</h3>
        </Link>
        <img
          class="hamburger"
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
        <section className="projects">
          <h1>
            <u>Projects</u>
          </h1>
          <div className="project">
            <div className="card">
              <a href="https://github.com/Aarushnautiyal/Devlopermedia_app">
                <img src="/images/devloper.jpeg" alt="Avatar" />
              </a>
              <div className="container">
                <a href="http://github.com/Aarushnautiyal/Devlopermedia_app">
                  <h4>
                    <b>Devloper Media</b>
                  </h4>
                </a>
                <p>
                  A <strong>Social Media</strong> project <br />(
                  <strong>tech:</strong> Mern Stack)
                </p>
              </div>
            </div>
            <div className="card">
              <a href="https://github.com/Aarushnautiyal/webScrapper">
                <img src="/images/webscrapper.png" alt="Avatar" />
              </a>
              <div className="container">
                <a href="https://github.com/Aarushnautiyal/webScrapper">
                  <h4>
                    <b>Web Scrapper</b>
                  </h4>
                </a>
                <p>
                  A <strong>Web Scrapping</strong> project <br />(
                  <strong>Lang:</strong> Python)
                </p>
              </div>
            </div>
            <div className="card">
              <a href="https://github.com/Aarushnautiyal/FaceDetection">
                <img src="/images/emotion.jpeg" alt="Avatar" />
              </a>
              <div className="container">
                <a href="https://github.com/Aarushnautiyal/FaceDetection">
                  <h4>
                    <b>Emotional Analysis</b>
                  </h4>
                </a>
                <p>
                  A <strong>Model Based</strong> project <br />(
                  <strong>Lang:</strong> JavaScript)
                </p>
              </div>
            </div>
            <div className="card">
              <Link to="">
                <img src="/images/youtube.png" alt="Avatar" />
              </Link>
              <div className="container">
                <h4>
                  <b>Youtube UI Clone</b>
                </h4>
                <p>
                  A <strong>Cloning</strong> project <br />(
                  <strong>Lang:</strong> React)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
