class AuthencticationService {
  registerSuccessfulLogin(username, password) {
    console.log('Authenticateion service called');
    sessionStorage.setItem('authenticatedUser', username);
  }
}

export default new AuthencticationService();
