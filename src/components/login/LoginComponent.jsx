import React, { useState } from 'react';

const LoginComponent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [loginFailed, setLoginFalied] = useState(false);

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginClickHandler = () => {
    if (userName === 'anukul' && password === 'abcd') {
      setLoginFalied(false);
      setSuccessMessage(true);
    } else {
      setLoginFalied(true);
      setSuccessMessage(false);
    }
  };

  return (
    <>
      {loginFailed && <p>Invalid Credentials</p>}
      {successMessage && <p>login Successful</p>}
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
      <button onClick={loginClickHandler}>Login</button>
    </>
  );
};

export default LoginComponent;
