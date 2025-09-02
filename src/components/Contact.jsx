import React from "react";
import PROFILE from "../data/profile";
import "../App.css"; // import CSS

function Contact() {
  return (
    <section id="contact" className="contact-section py-16 max-w-5xl mx-auto px-4">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-card mt-6 p-6">
        <p className="contact-text">
          Want to collaborate or have a question? Reach out any time.
        </p>
        <div className="contact-details mt-4">
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${PROFILE.email}`} className="contact-link">
              {PROFILE.email}
            </a>
          </p>
          <p>
            <strong>Phone:</strong> {PROFILE.phone}
          </p>
          <p>
            <strong>Location:</strong> {PROFILE.location}
          </p>
          <div className="contact-links mt-4 flex gap-4">
            {PROFILE.links.github && (
              <a
                href={PROFILE.links.github}
                target="_blank"
                className="contact-link"
              >
                GitHub
              </a>
            )}
            {PROFILE.links.linkedin && (
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                className="contact-link"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

