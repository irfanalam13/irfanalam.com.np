// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import educationData from "../data/EducationData";

// export default function EducationDetail() {
//   const { id } = useParams();
//   const edu = educationData.find((item) => item.id === parseInt(id));

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!edu) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h2>Education Record Not Found</h2>
//         <Link to="/">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <section className="education-detail">
//       <span className="education-detail-icon">{edu.icon}</span>
//       <h2>{edu.degree}</h2>
//       <p className="institution">{edu.institution}</p>
//       <p className="duration">{edu.duration}</p>
//       <p className="description">{edu.description}</p>
//       <Link to="/" className="back-link">← Back to Home</Link>
//     </section>
//   );
// }


















import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EducationDetail() {
  const { id } = useParams();
  const [education, setEducation] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/education/${id}/`)
      .then(res => res.json())
      .then(data => setEducation(data));
  }, [id]);

  if (!education) return <p>Loading...</p>;

  return (
    <div>
      <h2>{education.degree}</h2>
      <p>{education.institution}</p>
      <p>{education.start_year} - {education.end_year}</p>
    </div>
  );
}
