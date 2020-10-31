import React, { useState, useEffect } from 'react';
import Home from '../AllPages/Home/Home';
import Project from '../AllPages/Project/Project';
import About from '../AllPages/About/About';
import Contact from '../AllPages/Contact/Contact';
import { PortfolioProvider } from '../context/context';
import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Home />
      <Project />
      <About />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
