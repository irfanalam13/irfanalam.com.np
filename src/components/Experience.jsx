
import React from "react";
import "../App.css"; // import CSS

const EXPERIENCE = [
  {
    role: "AI Chatbot for Disaster Guidance — Team Project",
    org: "Hackathon (Nepal)",
    period: "2025",
    bullets: [
      "Designed intents for bilingual (Nepali + English) guidance.",
      "Built a minimal frontend with Django REST backend.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section py-16 max-w-5xl mx-auto px-4">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-timeline mt-6">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="experience-item relative pl-8">
            <span className="experience-marker absolute left-0 top-2 rounded-full"></span>
            <h3 className="experience-role">{e.role}</h3>
            <p className="experience-org">{e.org}</p>
            <p className="experience-period">{e.period}</p>
            <ul className="experience-bullets">
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
