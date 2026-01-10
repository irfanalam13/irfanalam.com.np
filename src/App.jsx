import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/Global.css";
import Home from "./pages/Home";
import AboutDetail from "./pages/AboutDetail";
import SkillsDetail from "./pages/SkillsDetail";
import ServicesDetail from "./pages/ServicesDetail";
import ProjectsDetail from "./pages/ProjectsDetail";
import EducationDetail from "./pages/EducationDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import ContactDetail from "./pages/ContactDetail";
import FooterDetail from "./pages/FooterDetail";

// Slide + fade variants
const slideFadeVariants = (direction) => ({
  initial: { x: direction > 0 ? 300 : -300, opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: direction > 0 ? -300 : 300, opacity: 0 },
});

const slideFadeTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

// Helper to wrap page with motion
const MotionPage = (Component, direction) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={slideFadeVariants(direction)}
    transition={slideFadeTransition}
  >
    <Component />
  </motion.div>
);

// AnimatedRoutes component
function AnimatedRoutes() {
  const location = useLocation();
  const [history, setHistory] = useState([location.pathname]);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const lastIndex = history.indexOf(location.pathname);
    if (lastIndex === -1) {
      // Forward navigation
      setDirection(1);
      setHistory((prev) => [...prev, location.pathname]);
    } else {
      // Backward navigation
      setDirection(-1);
      setHistory((prev) => prev.slice(0, lastIndex + 1));
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={MotionPage(Home, direction)} />
        <Route path="/about/:id" element={MotionPage(AboutDetail, direction)} />
        <Route path="/skills/:id" element={MotionPage(SkillsDetail, direction)} />
        <Route path="/services/:id" element={MotionPage(ServicesDetail, direction)} />
        <Route path="/projects/:id" element={MotionPage(ProjectsDetail, direction)} />
        <Route path="/education/:id" element={MotionPage(EducationDetail, direction)} />
        <Route path="/experience/:id" element={MotionPage(ExperienceDetail, direction)} />
        <Route path="/contact/:id" element={MotionPage(ContactDetail, direction)} />
        <Route path="/footer/:id" element={MotionPage(FooterDetail, direction)} />
      </Routes>
    </AnimatePresence>
  );
}

// App component
export default function App() {
  return (
    <Router basename="/irfanalam.com.np">
      <AnimatedRoutes />
    </Router>
  );
}







