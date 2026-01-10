// import React from "react";
// import { Link } from "react-router-dom";
// import EducationData from "../data/EducationData";

// export default function Education() {
//   return (
//     <section className="education-section">
//       <h2>Education</h2>
//       <div className="education-grid">
//         {EducationData.map((edu) => (
//           <div className="education-card" key={edu.id}>
//             <span className="education-icon">{edu.icon}</span>
//             <h3>{edu.degree}</h3>
//             <p className="institution">{edu.institution}</p>
//             <p className="duration">{edu.duration}</p>
//             <Link to={`/education/${edu.id}`} className="details-link">
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

export default function EducationList() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/education/")
      .then(res => res.json())
      .then(data => setEducation(data));
  }, []);

  return (
    <div>
      <h2>Education</h2>
      <div className="grid">
        {education.map(edu => (
          <div key={edu.id} className="card">
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.start_year} - {edu.end_year}</p>
            <Link to={`/education/${edu.id}`}>Details →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
