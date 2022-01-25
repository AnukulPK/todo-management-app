import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Welcome = () => {
  const { name } = useParams();

  //   console.log(name);

  return (
    <div>
      Welcome {name}.You can manage todos <Link to="/todos">here</Link>
    </div>
  );
};

export default Welcome;
