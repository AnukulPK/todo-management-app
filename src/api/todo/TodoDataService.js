import axios from "axios";

export const RetrieveAllTodos = (name) => {
  return axios.get(`http://localhost:8080/users/${name}/todos`);
};

export const DeleteTodo = (name, id) => {
  return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
};

export const RetrieveTodo = (name, id) => {
  return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
};

export const UpdateTodoDetails = (name, id, todo) => {
  return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
};
