
import React from "react";

const EDUCATION = [
  { title: "ACCA (Ongoing)", org: "Nepal", period: "2025 — Present" },
  { title: "Self-study: Python, C++, AI/ML", org: "Online", period: "2024 — 2025" },
];

function Education() {
  return (
    <section id="education" className="education-section py-16 max-w-5xl mx-auto px-4">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline mt-6">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="education-item relative pl-8">
            <span className="education-marker absolute left-0 top-2 rounded-full"></span>
            <h3 className="education-degree">{edu.title}</h3>
            <p className="education-org">{edu.org}</p>
            <p className="education-period">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
