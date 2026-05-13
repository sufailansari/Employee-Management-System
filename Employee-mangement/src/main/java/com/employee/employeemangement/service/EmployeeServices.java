package com.employee.employeemangement.service;

import com.employee.employeemangement.dto.EmployeeDto;

import java.util.List;

public  interface EmployeeServices {


    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeId(long id);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee( Long id ,EmployeeDto updatedEmployeeDto);
    void deleteEmployee(Long id);

}
