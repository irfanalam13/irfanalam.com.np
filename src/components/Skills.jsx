
import React from "react";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

function Skills() {
  return (
    <section id="skills" className="skills-section py-16 max-w-5xl mx-auto px-4">
      {/* Section Title */}
      <h2 className="skills-title">Skills</h2>

      {/* Skills Grid */}
      <div className="skills-grid mt-6">
        {Object.entries(PROFILE.skills).map(([category, items]) => (
          <div key={category} className="skills-card">
            {/* Category Name */}
            <h3 className="skills-category">{category.replace("_", " & ")}</h3>

            {/* Skills List */}
            <ul className="skills-list">
              {items.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
