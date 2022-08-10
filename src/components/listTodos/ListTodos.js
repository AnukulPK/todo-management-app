import React, { useEffect, useState } from "react";
import { RetrieveAllTodos, DeleteTodo } from "../../api/todo/TodoDataService";
import AuthenticationService from "../todo/AuthenticationService";

const ListTodos = () => {
  // const initToDos = [
  //   {
  //     id: 1,
  //     description: 'Learn React',
  //     done: false,
  //     targetDate: new Date(),
  //   },
  //   {
  //     id: 2,
  //     description: 'Learn DSA',
  //     done: false,
  //     targetDate: new Date(),
  //   },
  //   {
  //     id: 3,
  //     description: 'Visit Canada',
  //     done: false,
  //     targetDate: new Date(),
  //   },
  // ];
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    refreshTodos();
  }, []);

  const refreshTodos = () => {
    let username = AuthenticationService.getLoggedInUserName();
    RetrieveAllTodos(username).then((res) => {
      setTodos(res.data);
      console.log(res);
    });
  };

  const deleteToDoHandler = (id) => {
    let username = AuthenticationService.getLoggedInUserName();
    console.log(id, username);
    DeleteTodo(username, id).then((res) => {
      setMessage(`Deletion of todo ${id} successful`);
      refreshTodos();
    });
  };

  return (
    <div>
      <h1>List Todos</h1>
      {message && <div className="alert alert-success">{message}</div>}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Description</th>
              <th>Is Completed</th>
              <th>Target Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                {/* <td>{todo.id}</td> */}
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteToDoHandler(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodos;
