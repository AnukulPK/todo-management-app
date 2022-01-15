import React, { useState } from 'react';

const LoginComponent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      User Name:
      <input
        type="text"
        name="username"
        value={userName}
        onChange={userNameInputHandler}
      />
      Password:{' '}
      <input
        type="password"
        name="password"
        value={password}
        onChange={passwordInputHandler}
      />
      <button>Login</button>
    </>
  );
};

export default LoginComponent;
