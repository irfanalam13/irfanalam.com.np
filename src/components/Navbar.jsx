
import React from "react";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

function Navbar() {
  return (
    <header className="navbar-section sticky top-0">
      <div className="navbar-container max-w-5xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="navbar-logo">
          {PROFILE.name}
        </a>
        <nav className="navbar-links hidden md:flex gap-6">
          <a href="#about" className="navbar-link">About</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
