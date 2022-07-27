import React from "react";
import { Link, useParams } from "react-router-dom";

const Welcome = () => {
  const { name } = useParams();

  //   console.log(name);

  const helloWorldHandler = async (name) => {
    // const data = await fetch(`http://localhost:8080/hello-world-bean/${name}`);

    console.log(name);
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
    </>
  );
};

export default Welcome;
