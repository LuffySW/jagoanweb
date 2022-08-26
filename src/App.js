import logo from './logo.svg';
import Home from './views/home';
import Login from './views/Login';
import FBdetails from './views/detailf&b';
import Register from './views/register';
import Test from './views/test';
import Cart from './views/Cart';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import {AuthProvider} from "./Auth"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fbdetails" element={<FBdetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;
