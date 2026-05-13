package com.employee.employeemangement.mapper;

import com.employee.employeemangement.dto.EmployeeDto;
import com.employee.employeemangement.entity.Employees;

public class EmployeeMapper {

    public static EmployeeDto employeeToEmployeeDto(Employees employees) {
        return new EmployeeDto(
                employees.getId(),
                employees.getFirstName(),
                employees.getLastName(),
                employees.getEmail()
        );
    }

    public static Employees mapEmployeeDtoToEmployee(EmployeeDto employeeDto) {
        return new Employees(
                employeeDto.getEmployeeId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
