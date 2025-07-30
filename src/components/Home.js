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
          I have 2 years of experience at Capgemini as a Full Stack Java Developer. I specialize in
          Java, Spring Boot, React.js, Angular, and database technologies like MySQL and Oracle.
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
              'https://prabhat7802.hackerresume.io/7e8a6cd6-66ef-4e82-819d-158a57e57e23',
              '_blank'
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
