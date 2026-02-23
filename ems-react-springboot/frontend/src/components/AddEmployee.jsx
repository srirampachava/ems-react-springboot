import { useState } from "react";
import { addEmployee } from "../services/EmployeeService";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    addEmployee(employee)
      .then(() => window.location.reload())
      .catch(err => console.error(err));
  };

  return (
    <form className="employee-form" onSubmit={saveEmployee}>
      <input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;