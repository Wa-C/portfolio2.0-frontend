// src/components/Experience.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExperiences } from '../actions/experienceActions';

function Experience() {
  const dispatch = useDispatch();
  const { list: experiences, loading, error } = useSelector((state) => state.experience);

  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  if (loading) return <p>Loading experiences...</p>;
  if (error) return <p>Error: {error}</p>;

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
