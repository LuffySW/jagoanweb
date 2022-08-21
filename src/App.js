import logo from './logo.svg';
import Home from './views/home';
import Login from './views/Login';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
