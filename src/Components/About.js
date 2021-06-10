import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/contact">Get in Touch</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="about">
          <div className="detail">
            <h1>About</h1>
            <h2>(hi, this is about me hope u like a lil story)</h2>
            <p>
              There are alot of things that i love to do and programming is one
              of them, I also like <strong>Graphic & logo Designing</strong>{" "}
              stuff but i always have a itch for solving things up u know
              &#128521;, but apart from computers i also like{" "}
              <strong>dancing</strong> and <strong>reading</strong> and Most of
              all watching <strong>Anime</strong>
              and that's sums it up for now don't forget to check my{" "}
              <strong>Projects</strong>
            </p>
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

export default About;
