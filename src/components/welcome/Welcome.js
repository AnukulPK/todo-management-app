import React from 'react';
import { useParams } from 'react-router-dom';

const Welcome = () => {
  const { name } = useParams();

  //   console.log(name);

  return <div>Welcome {name}</div>;
};

export default Welcome;
