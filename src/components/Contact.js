// src/components/Contact.js
import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>You can reach me at: [Your Contact Info]</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
