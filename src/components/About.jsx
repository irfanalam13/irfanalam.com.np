import React from "react";
import "../App.css"; // import CSS

function About() {
  return (
    <section id="about" className="about-section py-16 max-w-5xl mx-auto px-4">
      <h2 className="about-title">About Me</h2>
      <p className="about-text mt-4">
        I’m an ACCA student who codes. I enjoy blending finance knowledge with
        tech to build practical apps. Recently, I’ve worked on Django
        e-commerce, a study web app, and a Python Bagels game (GUI).
      </p>
    </section>
  );
}

export default About;
