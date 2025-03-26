import React from "react";
import PropTypes from "prop-types";
import "../Component/project.css";

// Separate component for technology tags
const TechTags = ({ technologies }) => (
  <div className="tech-icons">
    {technologies.map((tech, index) => (
      <span key={index} className="tech-icon">{tech}</span>
    ))}
  </div>
);

// Separate component for project links
const ProjectLinks = ({ liveLink, githubLink }) => (
  <div className="project-links">
    {liveLink && (
      <a 
        href={liveLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-btn"
      >
        View Project
      </a>
    )}
    {githubLink && (
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-btn outline"
      >
        GitHub
      </a>
    )}
  </div>
);

// Main ProjectCard component with improved prop validation
const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageSrc, 
  imageAlt, 
  reverse, 
  githubLink, 
  liveLink 
}) => {
  return (
    <div className={`project-container ${reverse ? 'reverse' : ''}`}>
      <div className={`project-image-wrapper ${reverse ? 'order-2' : ''}`}>
        <div className="project-image-overlay">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="project-image" 
            loading="lazy" 
          />
        </div>
      </div>
      <div className={`project-details ${reverse ? 'order-1' : ''}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tech-section">
          <span className="tech-label">Technologies:</span>
          <TechTags technologies={technologies} />
        </div>
        <ProjectLinks liveLink={liveLink} githubLink={githubLink} />
      </div>
    </div>
  );
};

// Add prop type validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string
};

const Projects = () => {
  const projectsData = [
    {
      title: "Climax",
      description: "A basic clothing website showcasing responsive design and interactive features.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageSrc: "/project1.png",
      imageAlt: "Climax Project",
      reverse: false,
      githubLink: "https://github.com/YourUsername/Climax",
      liveLink: "https://github.com/Meerchi2754/Climax"
    },
    {
      title: "Agrocraft",
      description: "A platform for sustainable farming practices, connecting farmers and agricultural resources.",
      technologies: ["React", "Node.js", "PHP", "HTML", "CSS"],
      imageSrc: "/agrocraft.png",
      imageAlt: "Agrocraft Project",
      reverse: true,
      githubLink: "https://github.com/Meerchi2754/Agrocraft",
      liveLink: "https://github.com/Meerchi2754/Agrocraft"
    },
    {
      title: "ZeeCare",
      description: "A comprehensive appointment booking platform for healthcare services.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      imageSrc: "/HMS.png",
      imageAlt: "ZeeCare Project",
      reverse: false,
      githubLink: "https://github.com/YourUsername/ZeeCare",
      liveLink: "https://hospital-management-system-zk.netlify.app/"
    }
  ];

  return (
    <div className="projects-section">
      <h1 className="section-title">MY <span>PROJECTS</span></h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            {...project} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;