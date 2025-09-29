import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "CNH- Industrial",
      description:
        "I am working on the CNHi project, providing application and maintenance support, ensuring the smooth operation and enhancement of critical systems. In my role, I collaborate with cross-functional teams to understand client requirements, develop efficient code, and ensure seamless integration of technology to deliver high-quality software products.",
      technologies: [
        "java",
        "spring",
        "react",
        "mysql",
        "oracle",
        "Angular",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React.js, Javascript, HTML/CSS showcasing my experience, projects, and skills with a modern UI.",
      technologies: [
        "react",
        "javascript",
        "html5",
        "css3",
      ],
    },
    {
      title: "Online Hotel Rooms Booking Website",
      description:
        "Hotel Rooms Booking System automates hotel operations like room reservations, availability tracking, and room service management. Built using Java, Spring Boot, Spring Security, Thymeleaf, HTML/CSS, Javascript, Bootstrap, and PostgreSQL.",
      technologies: [
        "java",
        "spring",
        "postgresql",
        "thymeleaf",
        "bootstrap",
        "javascript",
      ],
    },
    {
      title: "Bookstore Management System",
      description:
        "Online Bookstore Web Application where users can browse and purchase books, and admins manage inventory. Built using Java, Spring Boot, Spring Security, Thymeleaf, Bootstrap, and MySQL.",
      technologies: [
        "java",
        "spring",
        "mysql",
        "thymeleaf",
        "bootstrap",
      ],
    },
  ];

  const getIconUrl = (tech) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-icons">
              {project.technologies.map((tech, i) => (
                <img
                  key={i}
                  src={getIconUrl(tech)}
                  alt={tech}
                  className="project-icon"
                  title={tech.toUpperCase()}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
