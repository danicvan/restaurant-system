import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard'
import Purchase from './Pages/Purchase/Purchase'
import Products from './Pages/Products/Products'
import Label from './Pages/Label/Label'
import Settings from './Pages/Settings/Settings'
import Logout from './Pages/Logout/Logout'

function App() {
  return (
    <>
      <Router>
        <div className="nav__routes">
          <Navbar />
          <Routes>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/purchase" Component={Purchase} />
            <Route path="/products" Component={Products} />
            <Route path="/label" Component={Label} />
            <Route path="/settings" Component={Settings} />
            <Route path="/logout" Component={Logout} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
