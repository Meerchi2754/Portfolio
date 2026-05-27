import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "../Component/contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/ and get your credentials
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your public key

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Meerchi2754",
      color: "#000",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/meetrajparmar",
      color: "#0070FF",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:meetrajparmar556@gmail.com",
      color: "#ec1111",
      label: "Email"
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope />
            <span>meetrajparmar556@gmail.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Based in Surat, Gujarat, India</span>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="form-textarea"
            />
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="status-message success">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="status-message error">Failed to send message. Please try again.</p>
          )}
        </form>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ color: social.color }}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>© Meetraj Parmar {new Date().getFullYear()} • All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
