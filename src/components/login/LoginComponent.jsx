import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthencticationService from "../todo/AuthenticationService.js";

const LoginComponent = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [loginFailed, setLoginFalied] = useState(false);

  const userNameInputHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginClickHandler = () => {
    AuthencticationService.executeBasicAuthenticationService(userName, password)
      .then(() => {
        AuthencticationService.registerSuccessfulLogin(userName, password);
        navigate(`/welcome/${userName}`);
      })
      .catch((e) => {
        setLoginFalied(true);
        setSuccessMessage(false);
      });
  };

  return (
    <>
      <div>
        <h1>Log In</h1>
        <div className="container login-container">
          {loginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {/* {successMessage && <p>login Successful</p>} */}
          <div>
            {" "}
            User Name:
            <input
              type="text"
              name="username"
              value={userName}
              onChange={userNameInputHandler}
            />
          </div>
          <div>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={password}
              onChange={passwordInputHandler}
            />
          </div>
          <div>
            <button className="btn btn-success" onClick={loginClickHandler}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
