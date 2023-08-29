import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../contexts/auth';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { signed } = useAuth();

  return (
    <Route
      {...rest}
      element={signed ? <Element /> : <Navigate to="/signin" />}
    />
  );
};

export default PrivateRoute;