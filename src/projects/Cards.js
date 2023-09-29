import React from 'react'

const Cards = ({img,title,Description,Vlink,link}) => {
  return (
   
    <div className="project-card">
      <img src={img} alt="Project Image" />
      <h2>{title}</h2>
      <p>{Description}</p>
      <div className='cards-btn'>
      <a href={Vlink}>Visit</a>
      <a href={link}>Code</a>
      </div>
    </div>
  
  )
}

export default Cards
