// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import experienceData from "../data/experienceData";

// export default function ExperienceDetail() {
//   const { id } = useParams();
//   const exp = experienceData.find((item) => item.id === parseInt(id));

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!exp) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h2>Experience Not Found</h2>
//         <Link to="/">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <motion.section
//       className="experience-detail"
//       initial={{ opacity: 0, y: 60 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -60 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <span className="experience-detail-icon">{exp.icon}</span>
//       <h2>{exp.role}</h2>
//       <p className="company">{exp.company}</p>
//       <p className="duration">{exp.duration}</p>
//       <p className="description">{exp.description}</p>
//       <Link to="/" className="back-link">← Back to Home</Link>
//     </motion.section>
//   );
// }











import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ExperienceDetail() {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/experience/${id}/`)
      .then(res => res.json())
      .then(data => setExperience(data));
  }, [id]);

  if (!experience) return <p>Loading...</p>;

  return (
    <div>
      <h2>{experience.role} at {experience.company}</h2>
      <p>{experience.start_date} - {experience.end_date || "Present"}</p>
      <p>{experience.description}</p>
    </div>
  );
}
