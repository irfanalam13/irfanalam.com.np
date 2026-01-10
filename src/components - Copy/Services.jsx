import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";

export default function Services() {
  return (
    <section className="services-section">
      <h2>My Services</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card reveal" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.shortDescription}</p>
            <Link to={`/services/${service.id}`} className="details-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
