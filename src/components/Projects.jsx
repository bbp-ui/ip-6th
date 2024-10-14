import React from 'react';
import './Projects.css'; // Ensure this path is correct

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Gadget Green (SIH)</h3>
        <p>Worked on a sustainability-focused project during Smart India Hackathon (SIH).</p>
      </div>
      <div className="project-item">
        <h3>Crypto Hunter</h3>
        <p>A cryptocurrency price tracking and alert system with real-time data visualization.</p>
      </div>
      <div className="project-item">
        <h3>File Transfer Application</h3>
        <p>Built a Python-based file transfer application using socket programming and tkinter.</p>
      </div>
    </section>
  );
};

export default Projects;
