import React from 'react';
import './Project.css';
import Files from './File'



const Projects = ({ id }) => {

  return (
    <div className='projects-cont' id={id}>
      <h1>Projects</h1>
      <Files/>
    </div>
  );
};

export default Projects;
