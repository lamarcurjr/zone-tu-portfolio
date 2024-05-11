// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: '1000' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <a href="#webapps" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>WebApps</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="#projects" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>Projects</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>About</a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a href="#links" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>Links</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
