import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import experienceData from "../data/experienceData";
import "../App.css"; // import CSS

export default function Experience() {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <span className="experience-icon">{exp.icon}</span>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <Link to={`/experience/${exp.id}`} className="details-link">
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

