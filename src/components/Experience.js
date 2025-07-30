import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        <div className="experience-card">
          <h3>Capgemini</h3>
          <p className="role">Full Stack Developer</p>
          <p className="date">Oct 2023 – Serving Notice Period (Currently 2 Years experienced)</p>
          <ul>
            <li>Worked on  full-stack web applications using Java, Spring Boot, and Angular/React.</li>
            <li>Handled REST API integrations, Spring Security for authentication, and role-based authorization.</li>
            <li>Involved in writing unit tests using JUnit and Mockito.</li>
            <li>Used GitHub for version control and Maven for build management.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

