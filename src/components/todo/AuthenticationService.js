import axios from "axios";

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/basicauth", {
      headers: {
        authorization: this.createBasicAuthToken(username, password),
      },
    });
  }

  createBasicAuthToken(username, password) {
    return `Basic ${window.btoa(`${username}:${password}`)} `;
  }

  registerSuccessfulLogin(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password);
    // console.log("Register Successfull Login");
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  logout() {
    console.log("Log out");
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    } else return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return "";
    } else return user;
  }

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
