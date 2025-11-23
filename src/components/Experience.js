import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">

        {/* Experience 1 */}
        <div className="experience-card">
          <h3>Capgemini</h3>
          <p className="role">Full Stack Developer</p>
          <p className="date">Oct 2023 – Oct 2025</p>
          <ul>
            <li>Worked on full-stack web applications using Java, Spring Boot, and Angular/React.</li>
            <li>Handled REST API integrations, Spring Security for authentication, and role-based authorization.</li>
            <li>Involved in writing unit tests using JUnit and Mockito.</li>
            <li>Used GitHub for version control and Maven for build management.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="experience-card">
          <h3>Capgemini</h3>
          <p className="role">Full Stack Developer Trainee</p>
          <p className="date">Jan 2023 – Jun 2023 | Remote / College</p>
          <ul>
            <li>Completed intensive industrial training focused on Enterprise Java Development and Frontend integration.</li>
            <li>Built secure RESTful services using Spring Boot and connected them with dynamic React UIs.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
