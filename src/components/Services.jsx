
import React from "react";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS
import { FaPython, FaCuttlefish, FaRobot, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { SiDjango, SiReact, SiFlutter, SiTensorflow } from "react-icons/si";

function Services() {
  const services = [
    {
      title: "Python Development",
      desc: "Building applications, automation scripts, and data analysis projects using Python.",
      icon: <FaPython className="service-icon" />,
    },
    {
      title: "C++ Programming",
      desc: "Strong foundation in C++ for problem solving, logic building, and system-level programming.",
      icon: <FaCuttlefish className="service-icon" />,
    },
    {
      title: "AI & Machine Learning",
      desc: "Experience in ML algorithms, probability, and calculus for building intelligent solutions.",
      icon: <SiTensorflow className="service-icon" />,
    },
    {
      title: "IoT & Robotics",
      desc: "Knowledge of IoT systems, Arduino, and sensor integration for real-world automation.",
      icon: <FaRobot className="service-icon" />,
    },
    {
      title: "Web Development",
      desc: "React and Django-based apps, including e-commerce, study platforms, and portfolios.",
      icon: <SiReact className="service-icon" />,
    },
    {
      title: "Mobile Development",
      desc: "Learning Flutter to create cross-platform apps with modern UI and smooth performance.",
      icon: <SiFlutter className="service-icon" />,
    },
    {
      title: "Educational Apps",
      desc: "Designing apps with MCQs, notes, Q&A, video lectures, and interactive study tools.",
      icon: <SiDjango className="service-icon" />,
    },
    {
      title: "Database & SQL",
      desc: "Experience in SQL queries, data management, and backend integration with web apps.",
      icon: <FaDatabase className="service-icon" />,
    },
  ];

  return (
    <section id="services" className="services-container">
      <h2 className="services-title">My Programming Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
