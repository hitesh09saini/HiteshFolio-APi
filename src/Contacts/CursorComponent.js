import React, { useState } from 'react';
import './CursorComponent.css';

function CursorComponent() {
  const [message, setMessage] = useState('');

  const handleBackground = (e) => {
    const cursorBody = document.querySelector('.cursorBody');
   

    const xOffset = e.pageX - cursorBody.offsetWidth / 2;
    const yOffset = e.pageY - cursorBody.offsetHeight / 2;
    cursorBody.style.backgroundPosition = `${xOffset}px ${yOffset}px`;
  };

 

  const handleClick = () => {
    setMessage(
      "🚀 Fresh full-stack engineer, eager to learn and grow. Let's chat about how I can bring value to your team! 😊👩‍💻"
    );
  };

  return (
    <div
      className="cursorBody"
      onMouseMove={handleBackground}
     
      onClick={handleClick}
    >
      <p>Tap here</p>
      <div>{message}</div>
    </div>

  );
}

export default CursorComponent;
