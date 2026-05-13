package com.employee.employeemangement.service.imp;

import com.employee.employeemangement.Exception.ResourceNotFoundException;
import com.employee.employeemangement.Respository.EmployeeRepository;
import com.employee.employeemangement.dto.EmployeeDto;
import com.employee.employeemangement.entity.Employees;
import com.employee.employeemangement.mapper.EmployeeMapper;
import com.employee.employeemangement.service.EmployeeServices;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeImp implements EmployeeServices {
    private EmployeeRepository employeeRepository;

    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employees employee = EmployeeMapper.mapEmployeeDtoToEmployee(employeeDto);
        Employees savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.employeeToEmployeeDto(savedEmployee);

    }

    public EmployeeDto getEmployeeId(long id) {
         Employees employees  = employeeRepository.findById(id).orElseThrow(
                ()->new ResourceNotFoundException("Employee is not exist with given id :  "+ id)
        );
         return EmployeeMapper.employeeToEmployeeDto(employees);
    }


    public List<EmployeeDto> getAllEmployees() {
        List<Employees> employeesList = employeeRepository.findAll();

        return employeesList.stream().map(
                EmployeeMapper::employeeToEmployeeDto).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto updatedEmployeeDto) {
        Employees employees = employeeRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Employee is not exist with given id :  "+ id)
        );
        employees.setFirstName(updatedEmployeeDto.getFirstName());
        employees.setLastName(updatedEmployeeDto.getLastName());
        employees.setEmail(updatedEmployeeDto.getEmail());
       Employees updateEmployee  = employeeRepository.save(employees);
        return EmployeeMapper.employeeToEmployeeDto(updateEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employees employees = employeeRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Employee is not exist with given id :  "+ id)
        );
        employeeRepository.deleteById(id);
    }
}
