
// import React from "react";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Education from "../components/Education";
// import Experience from "../components/Experience";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

// export default function Home() {
//   return (
    // <>
    //   <Navbar />
    //   <section id="hero"><Hero /></section>
    //   <section id="about"><About /></section>
    //   <section id="services"><Services /></section>
    //   <section id="skills"><Skills /></section>
    //   <section id="projects"><Projects /></section>
    //   <section id="education"><Education /></section>
    //   <section id="experience"><Experience /></section>
    //   <section id="contact"><Contact /></section>
    //   <section id="footer"><Footer /></section>
    // </>
//   );
// }






import React, { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useScrollReveal(); // activates scroll animations

  return (
    <>
      <Navbar />
      <main>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="education"><Education /></section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contact /></section>
          {/* <section id="footer"><Footer /></section> */}
      </main>
      <Footer />
    </>
  );
}
