import './App.css';
// import TodoApp from './components/todo/TodoApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/login/LoginComponent';
import Welcome from './components/welcome/Welcome';
import Error from './components/error/Error';

function App() {
  return (
    <div className="TodoApp">
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
