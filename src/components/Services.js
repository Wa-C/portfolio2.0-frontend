// src/components/Services.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices } from '../actions/servicesActions';

function Services() {
  const dispatch = useDispatch();
  const { list: services, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
