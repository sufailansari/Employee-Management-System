package com.employee.employeemangement.Respository;

import com.employee.employeemangement.entity.Employees;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employees,Long> {
}
