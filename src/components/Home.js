import React from 'react';
import './Home.css';
import profileImg from '../assets/IMG_20250718_014426.jpg';
import bgDecor from '../assets/download.jpg'; // Decorative image for left & right

function Home() {
  return (
    <section className="home-container">
      {/* Decorative background images */}
      <img src={bgDecor} alt="Left Decor" className="decor-left" />
      <img src={bgDecor} alt="Right Decor" className="decor-right" />

      <div className="text-section">
        <h3>Hello, It's Me</h3>
        <h1>Prabhat Garg</h1>
        <h4>And I'm a <span className="highlight">Full Stack Developer</span></h4>
        <p>
          Results-driven Software Engineer with 2+ years of experience in full-stack development,
          cloud-native applications, and AI-powered solutions. Proficient in Java, Spring Boot, React, Angular
          Python, and SQL, with hands-on experience in AWS, CI/CD pipelines, and microservices architecture. Adept at debugging, performance optimization, and collaborating in Agile environments. Passionate about building scalable systems and integrating AI for business impact.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/prabhat-garg-028457238/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Prabhat7802" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:prabhat7802@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <button
          className="download-btn"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1CvNW6xT3fXvmZE-RPC-CHBhTleXNb4h_/view?usp=drivesdk'
            )
          }
        >
          Download CV
        </button>
      </div>

      <div className="image-section">
        <div className="glow-border">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
