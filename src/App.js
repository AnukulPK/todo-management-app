// import TodoApp from './components/todo/TodoApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/login/LoginComponent';
import Welcome from './components/welcome/Welcome';
import Error from './components/error/Error';
import ListTodos from './components/listTodos/ListTodos';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Logout from './components/logout/Logout';
import './bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:name" element={<Welcome />} />
          <Route path="/todos" element={<ListTodos />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
