import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card reveal" key={project.id}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <Link to={`/projects/${project.id}`} className="details-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
