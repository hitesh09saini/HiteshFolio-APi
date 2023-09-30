import React from 'react'
import './about.css';


const About = ({id}) => {
  return (
    <div className="about-container" id={id}>
      

      <div className="about-me">
        <div className="left">About</div>
        <div className="right">
          <h2>
            Hitesh Saini <sub style={{ fontSize: '15px' }}>(HE/HIM)</sub>
          </h2>
          <p>
            A tech enthusiast and a student, Hitesh Saini is on a mission to fuse
            the world of electrical engineering with the art of software development.
            Using Java, frontend development skills, and an unyielding passion for
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
