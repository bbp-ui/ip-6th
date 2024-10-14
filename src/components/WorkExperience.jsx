import React from 'react';
import './WorkExperience.css'; // Import the CSS for styling

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>Ganit Internship</h3>
        <p><strong>Java Developer</strong> | Jan 2024 - Apr 2024</p>
        <ul>
          <li>Developed and executed questions for students on the Ganit website through Java and Excel sheets.</li>
          <li>Worked with a team of 6 to fulfill the requirements.</li>
        </ul>
      </div>
      {/* You can add more experience items here */}
    </section>
  );
};

export default WorkExperience;
