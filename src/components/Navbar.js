import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Prabhat.</div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#experience" onClick={toggleMenu}>Experience</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
