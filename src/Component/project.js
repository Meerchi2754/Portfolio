import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
        <FaExternalLinkAlt /> Live Demo
      </a>
    )}
    {githubLink && (
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-btn outline"
      >
        <FaGithub /> GitHub
      </a>
    )}
  </div>
);

// Main ProjectCard component
const ProjectCard = ({ 
  title, 
  description, 
  problem,
  role,
  features,
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
        <p className="project-description">{description}</p>
        
        {problem && (
          <div className="project-problem">
            <strong>Problem:</strong> {problem}
          </div>
        )}
        
        {role && (
          <div className="project-role">
            <strong>My Role:</strong> {role}
          </div>
        )}
        
        {features && features.length > 0 && (
          <div className="project-features">
            <strong>Key Features:</strong>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="tech-section">
          <span className="tech-label">Tech Stack:</span>
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
  problem: PropTypes.string,
  role: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
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
      title: "ZeeCare: Health Appointment Booking",
      description: "A real-time appointment booking system with dynamic time slot availability and status management.",
      problem: "Healthcare providers needed an efficient system to manage appointments and payments online",
      role: "Full Stack Developer - Built the complete application from frontend to backend",
      features: [
        "Integrated Razorpay payment gateway with online and cash modes",
        "Order creation and payment verification with webhook handling",
        "Real-time appointment slot management",
        "User authentication and role-based access"
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "React", "Prisma ORM", "Razorpay"],
      imageSrc: "/HMS.png",
      imageAlt: "ZeeCare Project",
      reverse: false,
      githubLink: "https://github.com/Meerchi2754/ZeeCare",
      liveLink: "https://hospital-management-system-zk.netlify.app/"
    },
    {
      title: "Bughive: Open Source Contribution Portfolio",
      description: "A platform for developers to showcase their open-source contributions with peer review and impact scoring.",
      problem: "Developers needed a credible way to showcase their open-source contributions to potential employers",
      role: "Full Stack Developer - Designed and implemented the entire contribution tracking system",
      features: [
        "Contribution claim system with PR-linked submissions and proof uploads",
        "GitHub integration via Octokit API for PR metadata (additions, deletions, file changes)",
        "Three-role ecosystem (Contributors, Verifiers, Maintainers/Hiring Managers)",
        "GitHub OAuth and 4-step onboarding flow",
        "Structured impact scoring for credibility assessment"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "GitHub API", "Octokit"],
      imageSrc: "/project1.png",
      imageAlt: "Bughive Project",
      reverse: true,
      githubLink: "https://github.com/Meerchi2754/Bughive",
      liveLink: "https://bughive.vercel.app"
    },
    {
      title: "Urban Rozgar: Service Booking Platform",
      description: "A comprehensive service booking platform with multi-role system and commission-based revenue model.",
      problem: "Service providers and consumers needed a unified platform to connect and transact efficiently",
      role: "Full Stack Developer - Built the multi-role system, payment integration, and admin dashboard",
      features: [
        "Multi-role system (Consumer, Provider, Sub-admin, Admin) with RBAC",
        "Commission-based revenue model with Bronze-to-Diamond provider tiers",
        "Loyalty rewards system with points earning/redemption",
        "Razorpay integration with loyalty discount support",
        "Admin dashboard with analytics and dispute resolution",
        "Real-time notifications and provider withdrawal handling"
      ],
      technologies: ["React", "Express", "TypeScript", "Supabase", "Prisma ORM", "Razorpay"],
      imageSrc: "/agrocraft.png",
      imageAlt: "Urban Rozgar Project",
      reverse: false,
      githubLink: "https://github.com/Meerchi2754/UrbanRozgar",
      liveLink: "https://urbanrozgar.vercel.app"
    },
    {
      title: "Climax: Clothing Website",
      description: "A responsive clothing e-commerce website with interactive features and modern design.",
      problem: "Created a modern, user-friendly interface for browsing and purchasing clothing items",
      role: "Frontend Developer - Designed and implemented the complete UI/UX",
      features: [
        "Responsive design for all devices",
        "Interactive product galleries",
        "Smooth animations and transitions"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      imageSrc: "/project1.png",
      imageAlt: "Climax Project",
      reverse: true,
      githubLink: "https://github.com/Meerchi2754/Climax",
      liveLink: "https://meerchi2754.github.io/Climax/"
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
