import React from "react";
import profilePic from "../Component/assests/Demo.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">
        ABOUT <span>ME</span>
      </h1>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <img src={profilePic} alt="Profile" />
            <div className="image-overlay">
              <p>That's me :)</p>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
            I am a passionate and driven Information Technology student with a strong focus on building innovative applications. My expertise lies in web development, AI/ML, and mobile app development, where I leverage cutting-edge technologies to solve real-world problems.
          </p>
          <p>
            Currently, I'm working on Machine Learning projects like skin tone detection and classification model and an LLP model for Gujarati text summarization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;