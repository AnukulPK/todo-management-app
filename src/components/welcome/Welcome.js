import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  // ExecuteHelloWorldService,
  // ExecuteHelloWorldBeanService,
  ExecuteHelloWorldPathVariableService,
} from "../../api/todo/HelloWorldService";

const Welcome = () => {
  const { name } = useParams();
  const [welcomeMessage, setWelcomeMessage] = useState("");

  //   console.log(name);

  const helloWorldHandler = async (name) => {
    // const data = await fetch(`http://localhost:8080/hello-world-bean/${name}`);
    // const data = await ExecuteHelloWorldService();
    // setWelcomeMessage(data?.data);
    try {
      const data = await ExecuteHelloWorldPathVariableService(name);
      setWelcomeMessage(data?.data?.message);
    } catch (e) {
      setWelcomeMessage(e.response.data.message);
    }

    // console.log(data);
  };

  return (
    <>
      <h1>Welcome</h1>
      <div className="container">
        Welcome {name}.You can manage todos <Link to="/todos">here</Link>
      </div>
      <div className="container">
        <p>Click here to get a customised welcome message.</p>
        <button
          onClick={() => helloWorldHandler(name)}
          className="btn btn-success"
        >
          Get Welcome Message
        </button>
      </div>
      <div className="container">{welcomeMessage}</div>
    </>
  );
};

export default Welcome;
