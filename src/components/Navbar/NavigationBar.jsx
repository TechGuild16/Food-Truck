import React from 'react';
import './Navbar.css'; // Keep this if you have custom styles
import { Nav, NavLink } from 'react-bootstrap';
import logo from '../../../src/assets/Frame 4.svg';
const NavigationBar1 = () => {
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-red py-3 fixed-top">
      <div className="container-fluid">
        {/* Brand Name */}
        <a className="navbar-brand" href="#">
        <img 
            src={logo} 
            alt="Logo" 
            width="220" // Adjust width
            height="120" // Adjust height
            className="d-inline-block align-top"
          />
        </a>

        {/* Toggler Button for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex gap-3">

            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="servicesDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
               Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item" href="#">FAQ</a></li>
                <li><a className="dropdown-item" href="#">404 Page</a></li>
               
                
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="blogDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                <li><a className="dropdown-item" href="#">Blog</a></li>
                <li><a className="dropdown-item" href="#">Single Page</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar1;
