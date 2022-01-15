import React from 'react';

const LoginComponent = () => {
  return (
    <>
      User Name:
      <input type="text" name="username" />
      Password: <input type="password" name="password" />
      <button>Login</button>
    </>
  );
};

export default LoginComponent;
