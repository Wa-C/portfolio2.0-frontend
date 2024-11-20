// src/components/Portfolio.js
import React from 'react';
import { useSelector } from 'react-redux';

function Portfolio() {
  const projects = useSelector((state) => state.portfolio?.projects || []);

  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </ul>
    </div>
  );
}

export default Portfolio;
