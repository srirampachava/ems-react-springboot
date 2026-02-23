import { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../api/employeeService";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  return (
    <div className="container">
      <h2>Employee List</h2>

      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      {role === "ADMIN" && (
        <div className="add-box">
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button
            onClick={async () => {
              await addEmployee({ firstName });
              setFirstName("");
              loadEmployees();
            }}
          >
            Add
          </button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            {role === "ADMIN" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>
                {editId === emp.id ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  emp.firstName
                )}
              </td>
              {role === "ADMIN" && (
                <td>
                  {editId === emp.id ? (
                    <>
                      <button
                        onClick={async () => {
                          await updateEmployee(emp.id, {
                            firstName: editName,
                          });
                          setEditId(null);
                          loadEmployees();
                        }}
                      >
                        Save
                      </button>
                      <button onClick={() => setEditId(null)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditId(emp.id);
                          setEditName(emp.firstName);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={async () => {
                          await deleteEmployee(emp.id);
                          loadEmployees();
                        }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;