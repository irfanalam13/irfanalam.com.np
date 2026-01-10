
// import React from "react";
// import PROFILE from "../data/profile";
// // import "../components/Hero/Hero"; // import CSS

// function Hero() {
//   return (
//     <section id="home" className="hero-section flex flex-col md:flex-row items-center justify-between gap-8 py-16 max-w-5xl mx-auto px-4">
      
//       {/* Avatar */}
//       <img
//         alt="Profile"
//         src="/profile.JPG"
//         className="hero-avatar"
//       /> 

//       {/* Info */}
//       <div className="hero-info">
//         <h1 className="hero-name">{PROFILE.name}</h1>
//         <p className="hero-tagline">{PROFILE.tagline}</p>
//         <p className="hero-location">Based in {PROFILE.location}.</p>

//         <div className="hero-buttons mt-4 flex flex-wrap gap-3">
//           <a
//             href={PROFILE.links.resume}
//             className="hero-button bg-gray-900 text-white"
//           >
//             Download CV
//           </a>
//           <a
//             href={`mailto:${PROFILE.email}`}
//             className="hero-button-outline"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;












import React from "react";
import PROFILE from "../data/profile";

function Hero() {
  return (
    <section 
      id="home" 
      className="hero-section flex flex-col md:flex-row items-center justify-between gap-12 py-16 max-w-6xl mx-auto px-6"
    >
      
      {/* Avatar Container: Adding 'order' ensures text comes first on mobile if desired */}
      <div className="flex-shrink-0 md:order-2">
        <img
          alt={`${PROFILE.name}'s profile`}
          src="/profile.JPG"
          className="hero-avatar w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-gray-100"
        />
      </div>

      {/* Info Content */}
      <div className="hero-info text-center md:text-left md:order-1">
        <h1 className="hero-name text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          {PROFILE.name}
        </h1>
        <p className="hero-tagline mt-4 text-xl text-gray-600 max-w-lg leading-relaxed">
          {PROFILE.tagline}
        </p>
        <p className="hero-location mt-2 text-gray-500 font-medium">
          📍 Based in {PROFILE.location}
        </p>

        <div className="hero-buttons mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href={PROFILE.links.resume}
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-button px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md"
          >
            Download CV
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hero-button-outline px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;