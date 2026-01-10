// import React from "react";
// import { Link } from "react-router-dom";
// import projectsData from "../data/projectsData";
// import PROFILE from "../data/profile";
// import "../App.css"; // import CSS

// export default function Projects() {
//   return (
//     <section className="projects-section">
//       <h2>My Projects</h2>
//       <div className="projects-grid">
//         {projectsData.map((project) => (
//           <div className="project-card" key={project.id}>
//             <img src={project.image} alt={project.title} className="project-img" />
//             <h3>{project.title}</h3>
//             <p>{project.shortDescription}</p>
//             <Link to={`/projects/${project.id}`} className="details-link">
//               View Details →
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
























import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(project => (
          <div key={project.id} className="card">
            {project.image && <img src={project.image} alt={project.title} />}
            <h3>{project.title}</h3>
            <p>{project.tech_stack}</p>
            <Link to={`/projects/${project.id}`}>View Details →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
