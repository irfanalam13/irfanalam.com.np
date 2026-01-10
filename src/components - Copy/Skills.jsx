import React from "react";
import { Link } from "react-router-dom";
import SkillsData from "../data/SkillsData";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {SkillsData.map((skill) => (
          <div className="skill-card reveal" key={skill.id}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <h3>{skill.name}</h3>
            <p>{skill.shortDescription}</p>
            <Link to={`/skills/${skill.id}`} className="details-link">
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
