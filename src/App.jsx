import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <MainLayout>
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <WhyHireMe />
        <Contact />
      </MainLayout>
    </Router>
  );
}

export default App;
