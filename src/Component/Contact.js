import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../Component/contact.css";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Meerchi2754",
      color: "#000"
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/meetrajparmar",
      color: "#0070FF"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:meetrajparmar556@gmail.com",
      color: "#ec1111"
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ color: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>© Meetraj {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;