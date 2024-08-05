import React from 'react';
import { Link } from 'react-scroll';
import './App.css';

const Header = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <header>
        <nav className="navbar">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" />
          </div>
          <div className={`nav-links ${isSidebarOpen ? 'nav-active' : ''}`}>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={1000}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={1000}>
                  About
                </Link>
              </li>
              <li>
                <Link to="courses" smooth={true} duration={1000}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="gallery" smooth={true} duration={1000}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="review" smooth={true} duration={1000}>
                  Review
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={`burger ${isSidebarOpen ? 'toggle' : ''}`} onClick={toggleSidebar}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
    </header>
  )
}

export default Header
