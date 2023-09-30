import React from 'react';

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
        <a href={Vlink}>Visit</a>
        <a href={link}>Code</a>
      </div>
    </div>
  );
};

export default Cards;
