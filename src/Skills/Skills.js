// import React, { useEffect, useState } from 'react';

import './skills.css'
import ProgressBar from './ProgressBar';

const Skills = ({id}) => {
  // const [i, setI] = useState(0);
  // const [text, setText] = useState('');
  // const str = 'Skills.';

  // useEffect(() => {
  //   const write = () => {
  //     if (i < str.length) {
  //       setText((prevText) => prevText + str.charAt(i));
  //       setI((prevI) => prevI + 1);
  //     }
  //   };

  //   const interval = setInterval(write, 400);

  //   setTimeout(() => {
  //     clearInterval(interval);
  //   }, 1000);
  // }, [i]);

  return (
    <div className="skills-cont" id={id}>
       <h1>Skills.</h1>
      <div className="inner-skills">
       
        <div className="pic"></div>
        <div className="cont">
         
        <ProgressBar title="JAVA-80%" percentage="80" color="#F88708"></ProgressBar>
        <ProgressBar title="HTML-90%" percentage="90" color="red"></ProgressBar>
        <ProgressBar title="CSS-75%" percentage="75" color="skyblue"></ProgressBar>
        <ProgressBar title="JAVASCRIPT-75%" percentage="75" color="yellow"></ProgressBar>
        <ProgressBar title="REACTJS-60%" percentage="60" color="blue"></ProgressBar>
        <ProgressBar title="MONGODB-85%" percentage="85" color="green"></ProgressBar>
        <ProgressBar title="EXPRESSJS-85%" percentage="85" color="yellow"></ProgressBar>
        <ProgressBar title="NODEJS-80%" percentage="80" color="blue"></ProgressBar>
       

        </div>
      </div>

    </div>
  );
};

export default Skills;
