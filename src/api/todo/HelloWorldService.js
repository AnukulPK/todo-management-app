import axios from "axios";

export const ExecuteHelloWorldService = () => {
  return axios.get("http://localhost:8080/hello-world");
};
