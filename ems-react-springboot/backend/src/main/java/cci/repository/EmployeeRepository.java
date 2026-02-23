package cci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import cci.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}