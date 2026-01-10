import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import footerData from "../data/footerData";
import { motion } from "framer-motion";

export default function FooterDetail() {
  const { id } = useParams();
  const item = footerData.find((f) => f.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Footer Item Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <motion.section
      className="footer-detail"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="footer-detail-icon">{item.icon}</span>
      <h2>{item.title}</h2>
      <p>{item.fullDescription}</p>
      <Link to="/" className="back-link">← Back to Home</Link>
    </motion.section>
  );
}
