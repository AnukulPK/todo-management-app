class AuthencticationService {
  registerSuccessfulLogin(username, password) {
    console.log('Authenticateion service called');
    sessionStorage.setItem('authenticatedUser', username);
  }

  logout() {
    console.log('Log out');
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) {
      return false;
    } else return true;
  }
}

export default new AuthencticationService();
