import React from 'react';
import { Route, Navigate } from 'react-router';
import AuthenticationService from './AuthenticationService';

const AuthenticatedRoute = (props) => {
  const userloggedIn = AuthenticationService.isUserLoggedIn ? true : false;

  return userloggedIn ? { ...props.children } : <Navigate to="/login" />;
};
export default AuthenticatedRoute;
