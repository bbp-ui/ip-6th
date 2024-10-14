import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/work-experience">Work Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
