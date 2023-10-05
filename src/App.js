import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './projects/Projects';
import Contacts from './Contacts/Contacts';
import CursorComponent from './Contacts/CursorComponent'

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
   
    const listenToScroll = () => {
      const heightToHideFrom = 400;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

    };

    window.addEventListener('scroll', listenToScroll);

    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };


  }, []); 

  return (
    <div className="App">
      <Header id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <CursorComponent/>
      <Contacts id="contacts" />
      <div className={`path ${isVisible ? 'hidden':''} `} >
        <ul>
          <li><a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Home
            </a></li>
          <li>
          
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#skills").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacts").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;