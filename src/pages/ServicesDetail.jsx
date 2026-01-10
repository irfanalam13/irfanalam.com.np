import React from "react";
import { useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";

export default function ServicesDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));


useEffect(() => {
  window.scrollTo(0, 0);
}, []);



  if (!service) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Service Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="service-detail">
      <h2>{service.title}</h2>
      <p>{service.fullDescription}</p>
      <Link to="/" className="back-link">← Back to Home</Link>
    </section>
  );
}
