
import React, { useState } from "react";
import PROFILE from "../data/profile";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "hero", label: "Hero" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
    { to: "footer", label: "Footer" },
  ];

  // Variants for staggered animation
  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="font-bold text-xl">
          {PROFILE.name}
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Right-side Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <motion.ul
                className="flex flex-col gap-6 mt-8"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.to}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      activeClass="active-link"
                      className="cursor-pointer block hover:text-blue-600 transition-colors text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </ScrollLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;








// import React, { useState, useEffect } from "react";
// import { Link as ScrollLink } from "react-scroll";

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) document.body.classList.add("dark");
//     else document.body.classList.remove("dark");
//   }, [darkMode]);

//   return (
//     <header className="navbar-section">
//       <nav className="navbar-container">
//         <div className="logo">MyPortfolio</div>
//         <div className="nav-links">
//           <ScrollLink to="hero" smooth>Home</ScrollLink>
//           <ScrollLink to="about" smooth>About</ScrollLink>
//           <ScrollLink to="services" smooth>Services</ScrollLink>
//           <ScrollLink to="skills" smooth>Skills</ScrollLink>
//           <ScrollLink to="projects" smooth>Projects</ScrollLink>
//           <ScrollLink to="education" smooth>Education</ScrollLink>
//           <ScrollLink to="experience" smooth>Experience</ScrollLink>
//           <ScrollLink to="contact" smooth>Contact</ScrollLink>
//           <button onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? "Light" : "Dark"}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }
