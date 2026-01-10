import React from "react";
import { Link } from "react-router-dom";
import AboutData from "../data/AboutData";
import "../App.css"; // import CSS

export default function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-grid">
        {AboutData.map((item) => (
          <div className="about-card" key={item.id}>
            <img src={item.image} alt={item.title} className="about-img" />
            <h3>{item.title}</h3>
            <p>{item.shortDescription}</p>
            <Link to={`/about/${item.id}`} className="details-link">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
