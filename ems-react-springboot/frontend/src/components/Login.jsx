import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("role", data.role);
      navigate("/employees");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container login-box">
      <h2>{role} Login</h2>

      <div className="form-group">
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="btn-group">
        <button onClick={handleLogin}>Login</button>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Login;