import axios from "axios";

export const ExecuteHelloWorldService = () => {
  return axios.get("http://localhost:8080/hello-world");
};

export const ExecuteHelloWorldBeanService = () => {
  return axios.get("http://localhost:8080/hello-world-bean");
};

export const ExecuteHelloWorldPathVariableService = (name) => {
  let username = "user";
  let password = "password";

  let basicAuthHeader = `Basic ${window.btoa(`${username}:${password}`)} `;

  return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`, {
    headers: {
      authorization: basicAuthHeader,
    },
  });
};
