import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
          onClick={(e) => toggle(e)}
          srcset=""
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
              <Link to="/contact">Get in Touch</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="page">
          <div className="details">
            <h1>Sandeep Nautiyal</h1>
            <h2>Mern Stack Devloper</h2>
            <p>
              Hello there, am Sandeep Nautiyal <strong>AKA</strong> Aarush am
              glad that you could make it this is my potfolio website just to
              showcase my work and stuff.
            </p>
          </div>
          <div className="hero">
            <img
              className="profile-left"
              src="./images/profile-left.jpg"
              alt="profile"
            />
            <img
              className="profile-right"
              src="./images/profile-right.jpg"
              alt="profile"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
