import React from 'react';
import myPhoto from '../assets/IMG_20250718_014426.jpg'; // ✅ Make sure the name matches exactly

function About() {
  return (
    <section className="mt-5">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={myPhoto}
            alt="Profile"
            className="img-fluid rounded-circle mb-3"
            style={{ maxWidth: '200px' }}
          />
        </div>
        <div className="col-md-8">
          <p>
            I am a Full Stack Developer with 2+ years of experience at Capgemini.
            I’ve worked on backend using Spring Boot, Microservices, Hibernate, RestApis and frontend using React and Angular.
          </p>
          <p>
            I’m currently seeking new job opportunities and excited to contribute my skills to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
