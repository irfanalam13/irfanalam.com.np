
import React from "react";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

const PROJECTS = [
  {
    title: "E-Commerce (Django)",
    description:
      "A Django-based e-commerce app with product pages, cart, auth, and admin product management.",
    tags: ["Django", "SQLite", "Bootstrap"],
    code: "https://github.com/your-username/django-ecommerce",
  },
  {
    title: "Study Web App",
    description:
      "A study hub with notes, PDFs upload, YouTube embeds, dark mode, MCQs, and timetable planning.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    code: "https://github.com/your-username/study-app",
  },
  {
    title: "Bagels Game (GUI)",
    description:
      "A number-guessing game with a simple GUI; future plan for mobile/web version.",
    tags: ["Python", "Tkinter"],
    code: "https://github.com/your-username/bagels-gui",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section py-16 max-w-5xl mx-auto px-4">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid mt-6">
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-link">
              <a href={p.code} target="_blank" className="project-code-link">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
