import React from 'react';

function SkillsSection() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Redux',
    'Responsive Web Design',
    'Version Control (Git)',
    'Webpack',
    'SASS/SCSS',
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsSection;
