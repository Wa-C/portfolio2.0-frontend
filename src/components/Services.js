// src/components/Services.js
import React from 'react';
import { useSelector } from 'react-redux';

function Services() {
  const services = useSelector((state) => state.services?.list || []);

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.length > 0 ? (
          services.map((service) => (
            <li key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))
        ) : (
          <p>No services available.</p>
        )}
      </ul>
    </div>
  );
}

export default Services;
