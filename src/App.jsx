import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard'
import Purchase from './Pages/Purchase/Purchase'
import Products from './Pages/Products/Products'
import Label from './Pages/Label/Label'
import Settings from './Pages/Settings/Settings'
import Logout from './Pages/Logout/Logout'
import Login from './Pages/Login/Login'

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here, set authenticated to true if successful
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic here, set authenticated to false
    setAuthenticated(false);
  };

  return (
    <>
      <Router>
        <div className="nav__routes">
          {authenticated && <Navbar authenticated={authenticated} />}
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {!authenticated ? (
              // Redirect to login page if not authenticated
              <Route path="*" element={<Navigate to="/login" />} />
            ) : (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/products" element={<Products />} />
                <Route path="/label" element={<Label />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
