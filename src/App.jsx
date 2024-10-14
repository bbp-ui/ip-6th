import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './App.css';

function App() {
  const skills = ["Team Management", "Public Relation", "Web Development", "Python", "React", "Critical Thinking"];

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
  <Route path="/" element={<Profile />} />
  <Route path="/work-experience" element={<WorkExperience />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/education" element={<Education />} />
  <Route path="/skills" element={<Skills skills={skills} />} />
  <Route path="/achievements" element={<Achievements />} />
</Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
