import React from 'react';
import './Project.css';

const Cards = ({ img, title, description, Vlink, link }) => {
  return (
    <div className="project-card">
      <img
        src={img}
        alt="new"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='cards-btn'>
        <a href={Vlink} target="_blank" rel="noreferrer">Visit</a>
        <a href={link} target="_blank" rel="noreferrer">Code</a>
      </div>
    </div>
  );
};

export default Cards;
