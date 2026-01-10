// import React from "react";
// import { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import projectsData from "../data/projectsData";

// export default function ProjectsDetail() {
//   const { id } = useParams();
//   const project = projectsData.find((p) => p.id === parseInt(id));



// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

//   if (!project) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h2>Project Not Found</h2>
//         <Link to="/">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <section className="project-detail">
//       <img src={project.image} alt={project.title} className="project-detail-img" />
//       <h2>{project.title}</h2>
//       <p>{project.fullDescription}</p>
//       <Link to="/" className="back-link">← Back to Home</Link>
//     </section>
//   );
// }
















import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/projects/${id}/`)
      .then(res => res.json())
      .then(data => setProject(data));
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h2>{project.title}</h2>
      {project.image && <img src={project.image} alt={project.title} />}
      <p>{project.description}</p>
      <p>Tech Stack: {project.tech_stack}</p>
      {project.github_link && <a href={project.github_link}>GitHub</a>}
      {project.live_link && <a href={project.live_link}>Live Demo</a>}
    </div>
  );
}
