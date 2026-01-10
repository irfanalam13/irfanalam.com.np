import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus("Error sending message.");
        }
      })
      .catch(err => {
        console.error(err);
        setStatus("Error sending message.");
      });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}






// App.json
// import ContactForm from "./components/ContactForm";

// <Route path="/contact" element={<ContactForm />} />
