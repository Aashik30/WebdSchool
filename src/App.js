import React, { useState, useEffect } from 'react';
import './App.css';
import NavTwo from './NavTwo';
import Home from './Home';
import Counter from './Counter';
import About from './About';
import Course from './Course';
import Gallery from './Gallery';
import Review from './Review';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleLinkClick = () => {
      setSidebarOpen(false);
    };

    const navLinksList = document.querySelectorAll('.nav-links li');
    navLinksList.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      navLinksList.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div>
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <NavTwo />
      <main>
        <section id="home" className="section">
          <Home />
        </section>
        <section id="counter">
          <Counter />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="courses" className="section">
          <Course /> 
        </section>
        <section id="gallery" className="section">
          <Gallery />
        </section>
        <section id="review" className="section">
          <Review />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
