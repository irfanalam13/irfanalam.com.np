// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import aboutData from "../data/AboutData";

// export default function AboutDetail() {
//   const { id } = useParams();
//   const aboutItem = aboutData.find((a) => a.id === parseInt(id));

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!aboutItem) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h2>About Section Not Found</h2>
//         <Link to="/">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <section className="about-detail">
//       <img src={aboutItem.image} alt={aboutItem.title} className="about-detail-img" />
//       <h2>{aboutItem.title}</h2>
//       <p>{aboutItem.fullDescription}</p>
//       <Link to="/" className="back-link">← Back to Home</Link>
//     </section>
//   );
// }





// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import AboutData from "../data/AboutData";
// import "../App.css";

// export default function AboutDetail() {
//   const { id } = useParams();
//   const item = AboutData.find((about) => about.id === parseInt(id));

//   if (!item) {
//     return (
//       <section className="about-detail not-found">
//         <h2>Detail Not Found</h2>
//         <Link to="/#about" className="back-link">
//           ← Back to About
//         </Link>
//       </section>
//     );
//   }

//   return (
//     <section className="about-detail">
//       <div className="about-detail-container">
//         <img src={item.image} alt={item.title} className="about-detail-img" />
//         <div className="about-detail-content">
//           <h2>{item.title}</h2>
//           <p>{item.fullDescription}</p>
//           <Link to="/#about" className="back-link">
//             ← Back to About
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useParams, Link } from "react-router-dom";
import AboutData from "../data/AboutData";

export default function AboutDetail() {
  const { id } = useParams();
  const item = AboutData.find((about) => about.id === parseInt(id));

  if (!item) return (
    <section className="about-detail not-found">
      <h2>Detail Not Found</h2>
      <Link to="/#about" className="back-link">← Back to About</Link>
    </section>
  );

  return (
    <section className="about-detail">
      <div className="about-detail-container reveal">
        <img src={item.image} alt={item.title} className="about-detail-img" />
        <div className="about-detail-content">
          <h2>{item.title}</h2>
          <p>{item.fullDescription}</p>
          <Link to="/#about" className="back-link">← Back to About</Link>
        </div>
      </div>
    </section>
  );
}
