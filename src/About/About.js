import React, { useEffect, useState } from 'react'
import './about.css';


const About = ({ id }) => {
  const [like, setLike] = useState('fa-regular pop-up')
  const [Likes, setLikes] = useState('...');
  const [clicked, setClicked] = useState(false);


  

  const addLikes = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response status:', response.status);

      if (response.ok) {
        console.log('Like added to the server successfully');
      } else {
        console.error('Failed to add like to the server');
      }
    } catch (error) {
      console.error('Error adding likes to the server:', error);
    }
  }

  const handleLikes = async () => {
    if (!clicked) {
      setLike('fa-solid fill');
      await addLikes();
      await  fetchLikes();
      setClicked(true);
    }
  }

  const fetchLikes = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/likes`, {
        method: 'GET',
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const responseData = await response.json();
        setLikes(responseData.like); 
        console.log('Like fetched from the server successfully');
      } else {
        console.error('Failed to fetch like from the server');
      }
    } catch (error) {
      console.error('Error fetching like:', error);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, []);

  return (
    <div className="about-container" id={id}>


      <div className="about-me">
        <div className="left">About

          <div className='left-btn'>
            <a href="https://drive.google.com/file/d/1otqogxi3_-A5XOISpITj1ABcbROAWEVM/view" target="_blank" rel="noopener noreferrer" >
              <button class="button">Download Resume</button>
            </a>

            <div id='likes'>
              <i onClick={handleLikes} className={`${like} fa-heart fa-sm`} ></i>
            </div>

          </div>
        </div>
        <div className="right">
          <h2 style={{display:'flex', gap:'20px'}}>
            Hitesh Saini <div>
              <div style={{ fontSize: '15px', margin:'5px'}}>{Likes}<i style={{marginLeft:'10px'}} className={`fa-solid fill-regular fa-heart fa-sm`} ></i></div>
              <div style={{ fontSize: '15px', margin:'5px' }}>(HE/HIM)</div>
            </div>
        
          </h2>
          <p>
            A tech enthusiast and a student, Hitesh Saini is on a mission to fuse
            the world of electrical engineering with the art of software development.
            Using Java, fullStack development skills, and an unyielding passion for
            problem-solving, Hitesh crafts digital solutions that light up the web.
            Currently on an educational journey, Hitesh seeks to enhance his skills
            while embracing new challenges in the ever-evolving tech landscape.
            Join Hitesh on this exciting journey of continuous learning and innovation! 💡
          </p>
        </div>
      </div>

      <div className="timeline">
        <h2 className="timeline__item timeline__item--year">2004</h2>
        <div className="timeline__item">
          <h3 className="timeline__title">Born (Mahwa, Dausa, Rajasthan)</h3>
        </div>

        <h2 className="timeline__item timeline__item--year">2018</h2>
        <div className="timeline__item">
          <h3 className="timeline__title">10th Class - 70%</h3>
        </div>

        <h2 className="timeline__item timeline__item--year">2020</h2>
        <div className="timeline__item">
          <h3 className="timeline__title">12th Class - 80%</h3>
        </div>

        <h2 className="timeline__item timeline__item--year">2020-2024</h2>
        <div className="timeline__item">
          <h3 className="timeline__title">Electrical Engineering - (9.4 CGPA)</h3>
        </div>
      </div>
    </div>
  )
}

export default About
