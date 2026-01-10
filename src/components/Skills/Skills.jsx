// import React from "react";
// import { Link } from "react-router-dom";
// import SkillsData from "../data/SkillsData";
// import PROFILE from "../data/profile";
// import "../App.css"; // import CSS

// export default function Skills() {
//   return (
//     <section className="skills-section">
//       <h2>My Skills</h2>
//       <div className="skills-grid">
//         {SkillsData.map((skill) => (
//           <div className="skill-card" key={skill.id}>
//             <img src={skill.icon} alt={skill.name} className="skill-icon" />
//             <h3>{skill.name}</h3>
//             <p>{skill.shortDescription}</p>
//             <Link to={`/skills/${skill.id}`} className="details-link">
//               Learn More →
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }












import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SkillDetail() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/skills/${id}/`)  // create detail API in Django
      .then(res => res.json())
      .then(data => setSkill(data));
  }, [id]);

  if (!skill) return <p>Loading skill...</p>;

  return (
    <div>
      <h2>{skill.name}</h2>
      {skill.icon && <img src={skill.icon} alt={skill.name} />}
      <p>{skill.short_description}</p>
      <p>Level: {skill.level}%</p>
    </div>
  );
}
