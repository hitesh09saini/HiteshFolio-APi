import React from 'react';

const ProgressBar = ({ title, percentage, color }) => {
  const progressBarStyle = {
    width: `${percentage}%`,
    backgroundColor: color,
  };

  const backgroundStyle = {
    background: `linear-gradient(90deg, ${color} ${percentage}%, #fff ${percentage}%)`,
  };

  return (
    <div>
      <h3 className="progress-title">{title}</h3>
      <div className={`progress ${color}`} style={backgroundStyle}>
        <div className="progress-bar" style={progressBarStyle}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
