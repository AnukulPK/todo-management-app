import axios from "axios";

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Authenticateion service called");
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors();
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

  setupAxiosInterceptors() {
    let username = "user";
    let password = "password";

    let basicAuthHeader = `Basic ${window.btoa(`${username}:${password}`)} `;
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
