
import React from "react";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

function Footer() {
  return (
    <footer className="footer-section py-6 mt-10">
      <div className="footer-content max-w-5xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
