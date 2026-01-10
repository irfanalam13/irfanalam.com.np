import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import contactData from "../data/ContactData";

export default function ContactDetail() {
  const { id } = useParams();
  const contact = contactData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contact) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Contact Info Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <motion.section
      className="contact-detail"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="contact-detail-icon">{contact.icon}</span>
      <h2>{contact.type}</h2>
      <p className="value">{contact.value}</p>
      <p className="description">{contact.description}</p>
      <Link to="/" className="back-link">← Back to Home</Link>
    </motion.section>
  );
}
