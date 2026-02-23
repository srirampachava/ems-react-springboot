package cci.controller;

import cci.dto.LoginRequest;
import cci.dto.LoginResponse;
import cci.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final EmployeeRepository employeeRepository;

    public AuthController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        // ADMIN LOGIN
        if ("ADMIN".equalsIgnoreCase(request.getRole())) {
            if ("admin".equals(request.getUsername()) &&
                    "admin".equals(request.getPassword())) {
                return new LoginResponse(true, "Admin login successful", "ADMIN");
            } else {
                return new LoginResponse(false, "Invalid admin credentials", null);
            }
        }

        // USER LOGIN
        if ("USER".equalsIgnoreCase(request.getRole())) {
            boolean exists = employeeRepository
                    .findAll()
                    .stream()
                    .anyMatch(emp ->
                            emp.getFirstName().equalsIgnoreCase(request.getUsername())
                    );

            if (exists) {
                return new LoginResponse(true, "User login successful", "USER");
            } else {
                return new LoginResponse(false, "User not found", null);
            }
        }

        return new LoginResponse(false, "Invalid role", null);
    }
}