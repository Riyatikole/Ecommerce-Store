import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';
import NavBar from './components/NavBar';
import PrivateRoute from './utils/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
      <NavBar/>
      <Routes>
      <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
