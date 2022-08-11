import React from "react";
import { useParams } from "react-router";

const TodoComponent = () => {
  const { id } = useParams();
  return <div>{`TodoComponent ${id}`}</div>;
};

export default TodoComponent;
