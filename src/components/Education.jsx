import React from "react";
import { Link } from "react-router-dom";
import EducationData from "../data/EducationData";

export default function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-grid">
        {EducationData.map((edu) => (
          <div className="education-card reveal " key={edu.id}>
            <span className="education-icon">{edu.icon}</span>
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
            <Link to={`/education/${edu.id}`} className="details-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
