
import React from "react";
import PROFILE from "../data/profile";
// import "../components/Hero/Hero"; // import CSS

function Hero() {
  return (
    <section id="home" className="hero-section flex flex-col md:flex-row items-center justify-between gap-8 py-16 max-w-5xl mx-auto px-4">
      
      {/* Avatar */}
      {/* Change the img tag to this */}
      <img
        alt={`${PROFILE.name}'s profile`}
        src={PROFILE.image} // Now it's pulling from your profile.js data
        className="hero-avatar w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-gray-100"
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


