// src/components/Skills.js
import React from 'react';
import { useSelector } from 'react-redux';

function Skills() {
  const skills = useSelector((state) => state.skills.list);
  console.log(skills)

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
