// src/components/PrivateRoute.js
//import React from 'react';
//import { Navigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';

//function PrivateRoute({ children }) {
//  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//  return isAuthenticated ? children : <Navigate to="/admin/login" />;
//}

//export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/admin/login" />;
}

export default PrivateRoute;
