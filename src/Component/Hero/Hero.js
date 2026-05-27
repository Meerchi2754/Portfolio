import { useEffect } from "react";
import Vara from "vara";
import "./hero.css";

function VaraText({ text }) {
  useEffect(() => {
    // Clear any existing vara container content
    const container = document.getElementById("vara-container");
    if (container) {
      container.innerHTML = "";
    }

    new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 60,
          strokeWidth: 1,
          color: "#6a11cb",
          duration: 6000,
        },
      ]
    );

    return () => {
      // Cleanup on unmount
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [text]);

  return <div id="vara-container" className="vara-container"></div>;
}

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf to the public folder
    link.download = 'Meetraj_Parmar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">Meetraj Parmar</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer & AI Enthusiast</p>
          <p className="hero-value-prop">
            I build full-stack web apps and IT solutions
          </p>
          <p className="hero-description">
            I turn ideas into production-ready products using React, Node.js, and modern AI APIs. 
            Specialized in building scalable web applications with seamless user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <button onClick={handleResumeDownload} className="btn btn-secondary">
              Download Resume
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="vara-wrapper-right">
            <VaraText text="Discover your best." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
