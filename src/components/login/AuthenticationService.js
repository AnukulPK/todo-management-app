class AuthencticationService {
  registerSuccessfulLogin(username, password) {
    console.log('Authenticateion service called');
    sessionStorage.setItem('authenticatedUser', username);
  }

  logout() {
    console.log('Log out');
    sessionStorage.removeItem('authenticatedUser');
  }
}

export default new AuthencticationService();
