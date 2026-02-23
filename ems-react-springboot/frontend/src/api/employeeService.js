const API_URL = "http://localhost:8080/api/employees";

export const getEmployees = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addEmployee = async (employee) => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
};

export const updateEmployee = async (id, employee) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
};

export const deleteEmployee = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};