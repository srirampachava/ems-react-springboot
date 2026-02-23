import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Employee Management System</h1>

      <div className="home-btn-group">
        <button onClick={() => navigate("/login/ADMIN")}>
          Admin Login
        </button>
        <button onClick={() => navigate("/login/USER")}>
          User Login
        </button>
      </div>
    </div>
  );
}

export default Home;