// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import SkillsData from "../data/SkillsData";

// export default function SkillsDetail() {
//   const { id } = useParams();
//   const skill = SkillsData.find((s) => s.id === parseInt(id));

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!skill) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h2>Skill Not Found</h2>
//         <Link to="/">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <section className="skill-detail">
//       <img src={skill.icon} alt={skill.name} className="skill-detail-icon" />
//       <h2>{skill.name}</h2>
//       <p>{skill.fullDescription}</p>
//       <Link to="/" className="back-link">← Back to Home</Link>
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
