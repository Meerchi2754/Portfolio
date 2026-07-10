import { useState } from "react";
import "./navbar.css";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsMobileMenuOpen(false); // Close menu on link click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Meetrajsinh Parmar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#home" onClick={() => setActiveLink('Home')}>
            <span>Meetraj</span>
          </a>
        </div>
        
        {/* Desktop Navigation - Center */}
        <div className="nav-links-center desktop-nav">
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

        {/* Right Side Controls */}
        <div className="nav-right desktop-nav">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button 
            className="resume-btn" 
            onClick={handleResumeDownload}
          >
            Resume
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button 
            className="theme-toggle-btn mobile-theme-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className={`mobile-navbar-link ${activeLink === link.label ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.label)}
              >
                {link.label}
              </a>
            ))}
            <button 
              className="mobile-resume-btn" 
              onClick={() => {
                handleResumeDownload();
                setIsMobileMenuOpen(false);
              }}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
