import React from "react";
import profilePic from "../assests/Demo.jpg";
import "./about.css";

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'MeetrajsinhParmar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-section">
      <h1 className="about-title">
        ABOUT <span>ME</span>
      </h1>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <img src={profilePic} alt="Meetraj Parmar" />
          </div>
        </div>
        <div className="about-text">
          <h2 className="about-heading">My Story</h2>
          <p>
            I'm a passionate Full Stack Developer from Surat, Gujarat, India, specializing in building modern web applications. 
            What drives me is the challenge of turning complex problems into elegant, user-friendly solutions that make a real impact.
          </p>
          
          <h3 className="about-subheading">What I Do</h3>
          <ul className="capabilities-list">
            <li><strong>Frontend Development:</strong> Building responsive, interactive UIs with React, Next.js, and TypeScript</li>
            <li><strong>Backend Development:</strong> Creating scalable APIs and services with Node.js, Express, and Prisma ORM</li>
            <li><strong>Full-Stack Integration:</strong> Implementing payment gateways, authentication systems, and real-time features</li>
          </ul>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>

          <button onClick={handleResumeDownload} className="resume-btn">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
