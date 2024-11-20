// src/components/Skills.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkills } from '../actions/skillsActions';

function Skills() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.list);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

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
