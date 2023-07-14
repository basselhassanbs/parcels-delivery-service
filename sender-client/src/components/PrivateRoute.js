import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { authenticated } = useSelector((state) => state.auth);
  if (!authenticated) return <Navigate to='/login' replace />;
  return children;
};

export default PrivateRoute;
