import React from "react";
import { Link } from "react-router-dom";
import ContactData from "../data/ContactData";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

export default function Contact() {
  return (
    <section className="contact-section py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="contact-grid max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ContactData.map((contact) => (
          <div
            key={contact.id}
            className="contact-card reveal bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl">{contact.icon}</div>
            <h3 className="text-xl font-semibold mt-3">{contact.title}</h3>
            <p className="text-gray-600">{contact.info}</p>
            <Link
              to={`/contact/${contact.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
