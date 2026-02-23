import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/:role" element={<Login />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Routes>
  );
}

export default App;