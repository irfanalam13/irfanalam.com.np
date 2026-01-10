
import React from "react";
import PROFILE from "../data/profile";
// import "../components/Hero/Hero"; // import CSS

function Hero() {
  return (
    <section id="home" className="hero-section flex flex-col md:flex-row items-center justify-between gap-8 py-16 max-w-5xl mx-auto px-4">
      
      {/* Avatar */}
      <img
        alt="Profile"
        src="/profile.JPG"
        className="hero-avatar"
      /> 

      {/* Info */}
      <div className="hero-info">
        <h1 className="hero-name">{PROFILE.name}</h1>
        <p className="hero-tagline">{PROFILE.tagline}</p>
        <p className="hero-location">Based in {PROFILE.location}.</p>

        <div className="hero-buttons mt-4 flex flex-wrap gap-3">
          <a
            href={PROFILE.links.resume}
            className="hero-button bg-gray-900 text-white"
          >
            Download CV
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hero-button-outline"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


