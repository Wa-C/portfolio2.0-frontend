// src/components/Experience.js
import React from 'react';
import { useSelector } from 'react-redux';

function Experience() {
  const experiences = useSelector((state) => state.experience.list);

  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
