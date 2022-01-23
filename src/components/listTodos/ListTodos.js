import React, { useState } from 'react';

const ListTodos = () => {
  const initToDos = [
    {
      id: 1,
      description: 'Learn React',
    },
    {
      id: 2,
      description: 'Learn DSA',
    },
    {
      id: 3,
      description: 'Visit Canada',
    },
  ];
  const [todos, setTodos] = useState(initToDos);
  return (
    <div>
      <h1>List Todos</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
