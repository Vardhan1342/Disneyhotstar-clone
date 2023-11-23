import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import States from './context/MyStates';
import Home from './components/Home';
import Details from './components/Details';
import LoginAuth from './components/LoginAuth';
function App() {
  return (
      <States>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<LoginAuth />} />
        </Routes>
      </Router>
    
      </States>
  );
}

export default App;
