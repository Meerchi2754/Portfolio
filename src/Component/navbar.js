import React, { useState } from "react";
import "../Component/navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About Me', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span>Portfolio</span>
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className={`navbar-links ${activeLink === link.label ? 'active' : ''}`}
              onClick={() => setActiveLink(link.label)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;