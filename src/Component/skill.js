import React from "react";
import "../Component/skill.css";

const skillsData = [
  { name: "HTML", icon: "/html.png", color: "#E44D26" },
  { name: "CSS", icon: "/css.png", color: "#1572B6" },
  { name: "JavaScript", icon: "/js.png", color: "#F7DF1E" },
  { name: "React", icon: "/logo192.png", color: "#61DAFB" },
  { name: "MongoDB", icon: "/m2.png", color: "#4DB33D" },
  { name: "GitHub", icon: "/git.png", color: "#181717" },
  { name: "Three.js", icon: "/3js.png", color: "#000000" }
];

const SkillCard = ({ name, icon, color }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-inner">
        <div className="skill-card-front">
          <img 
            src={icon} 
            alt={`${name} logo`} 
            className="skill-logo" 
            style={{ borderColor: color }}
          />
          <span>{name}</span>
        </div>
        <div 
          className="skill-card-back" 
          style={{ backgroundColor: color }}
        >
          <p>Proficient in {name}</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-title">MY <span>SKILLS</span></h1>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;