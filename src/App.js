import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './projects/Projects';
import Contacts from './Contacts/Contacts';
import CursorComponent from './Contacts/CursorComponent';


function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {



    const listenToScroll = () => {
      const heightToHideFrom = 400;
      const winScroll = window.scrollY;

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


  useEffect(() => {
    const sendLocationToServer = async () => {
      try {
        // Get the user's location
        const position = await getCurrentLocation();
         console.log( position.coords.latitude, position.coords.longitude);
        await sendLocationToBackend('name', position.coords.latitude, position.coords.longitude);
      } catch (error) {
        console.error('Error obtaining or sending location:', error.message);
      }
    };
    

    // Trigger the function when the component mounts
    sendLocationToServer();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const sendLocationToBackend = async (name, latitude, longitude) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/loc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          longitude,
          latitude
        }),
      });
  
      console.log('Response status:', response.status);
  
      if (response.ok) {
        console.log('Location sent to the server successfully');
      } else {
        console.error('Failed to send location to the server');
      }
    } catch (error) {
      console.error('Error sending location to the server:', error);
    }
  };
  
  
  
  return (
    <div className="App" >
      <Header id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <CursorComponent />
      <Contacts id="contacts" />
      <div className={`path ${isVisible ? 'hidden' : ''}`}>
        <ul>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home").scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about").scrollIntoView({
                  behavior: "smooth"
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
                  behavior: "smooth"
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
                  behavior: "smooth"
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
                  behavior: "smooth"
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
