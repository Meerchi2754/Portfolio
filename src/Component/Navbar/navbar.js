import { useState } from "react";
import "./navbar.css";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsMobileMenuOpen(false); // Close menu on link click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span>Meetraj</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
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
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
