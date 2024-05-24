import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <ul>
        <li>
          <a
            href="https://wa.me/087782015410"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a href="mailto:youremail@example.com">Email</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
