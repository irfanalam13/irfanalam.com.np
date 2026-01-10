import React from "react";
import { Link } from "react-router-dom";
import footerData from "../data/footerData";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

export default function Footer() {
  return (
    <footer className="footer-section">
      <h2>Footer</h2>
      <div className="footer-grid">
        {footerData.map((item) => (
          <div className="footer-card reveal" key={item.id}>
            <span className="footer-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.shortDescription}</p>
            <Link to={`/footer/${item.id}`} className="details-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}
