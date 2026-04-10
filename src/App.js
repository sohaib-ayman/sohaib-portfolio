import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import { useEffect, useState } from 'react';

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Education/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contacts/>
      <Footer/>
      <ScrollTop/>
    </>
  );
}

export default App;