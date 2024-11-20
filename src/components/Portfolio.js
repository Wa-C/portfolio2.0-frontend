// src/components/Portfolio.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../actions/portfolioActions';

function Portfolio() {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.project_name}</h3>
            <p>{project.description}</p>
            {project.image_url && <img src={project.image_url} alt={project.project_name} />}
            {project.project_url && (
              <p>
                <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
