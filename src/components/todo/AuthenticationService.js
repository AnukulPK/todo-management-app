class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Authenticateion service called");
    sessionStorage.setItem("authenticatedUser", username);
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
}

export default new AuthenticationService();
