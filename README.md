# Employee Management System

A full-stack **Employee Management System** developed using **Spring Boot** for the backend and **React (Vite)** for the frontend.  
The application provides **role-based login** functionality for Admin and Employee roles.

---

## 🚀 Features

- Role-based authentication (Admin & Employee)

- **Admin can:**
  - Add employees
  - Update employee details
  - Delete employees

- **Employees can:**
  - View employee list

- RESTful APIs using Spring Boot
- Modern React frontend with clean UI

---

## 🔐 Login Details

### 👑 Admin Login

- **Username:** `admin`
- **Password:** `admin`

> Admin has full access (Add / Update / Delete employees)

---

### 👤 Employee Login

- **Username:** Any **first name** from the employee list  
- **Password:** Any first name

> Employee has read-only access (View employee list only)

---

## 🛠 Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- MySQL

### Frontend
- React
- Vite
- CSS

---

## 📂 Project Structure
employee-management-system/
│
├── backend/ # Spring Boot backend
└── frontend/ # React frontend


---

## ▶️ How to Run the Project

### Backend
1. Open backend project in IDE  
2. Configure MySQL database  
3. Run Spring Boot application  

### Frontend
```bash
npm install
npm run dev
