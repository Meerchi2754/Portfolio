import React from "react";
import "../Component/skill.css";

const skillsData = {
  frontend: [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/CSS.png" },
    { name: "JavaScript", icon: "/JS.png" },
    { name: "React", icon: "/logo192.png" },
    { name: "Next.js", icon: "/logo192.png" },
    { name: "TypeScript", icon: "/logo192.png" }
  ],
  backend: [
    { name: "Node.js", icon: "/logo192.png" },
    { name: "Express", icon: "/logo192.png" },
    { name: "REST APIs", icon: "/logo192.png" }
  ],
  database: [
    { name: "MongoDB", icon: "/m2.png" },
    { name: "Supabase", icon: "/mdb.png" },
    { name: "Prisma ORM", icon: "/mdb.png" }
  ],
  tools: [
    { name: "Git", icon: "/git.png" },
    { name: "GitHub", icon: "/git.png" },
    { name: "VS Code", icon: "/logo192.png" },
    { name: "Vercel", icon: "/logo192.png" }
  ],
  exploring: [
    { name: "AI APIs", icon: "/3js.png" },
    { name: "Docker", icon: "/logo192.png" },
    { name: "Three.js", icon: "/3js.png" }
  ]
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h3 className="category-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            <img src={skill.icon} alt={skill.name} className="skill-icon-small" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-title">MY <span>SKILLS</span></h1>
      <div className="skills-container-new">
        <SkillCategory title="Frontend" skills={skillsData.frontend} />
        <SkillCategory title="Backend" skills={skillsData.backend} />
        <SkillCategory title="Database & ORM" skills={skillsData.database} />
        <SkillCategory title="Tools & Platforms" skills={skillsData.tools} />
        <SkillCategory title="Currently Exploring" skills={skillsData.exploring} />
      </div>
    </div>
  );
};

export default Skills;
