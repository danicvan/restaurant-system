import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here
    if (username === "123" && password === "123") {
      // Authentication successful, call the onLogin function provided by props
      onLogin();
      navigate("/dashboard");
    } else {
      // Authentication failed, display error message
      setError("Invalid username or password");
    }
  };

  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="main__login">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
          {error && <div className="error-message">{error}</div>}

          <div className="or-container">
            <span className="left-line"></span>
            <span className="text">or</span>
            <span className="right-line"></span>
          </div>
          <span className="create-account">Create Account</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
