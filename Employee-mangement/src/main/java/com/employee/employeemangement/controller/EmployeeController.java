package com.employee.employeemangement.controller;

import com.employee.employeemangement.dto.EmployeeDto;
import com.employee.employeemangement.service.EmployeeServices;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    private EmployeeServices employeeServices;
    // BUILD API FOR ADD EMPLOYEE
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee( @RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeServices.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // BUILD GET EMPLOYEE REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") long id){
        EmployeeDto employeeDto = employeeServices.getEmployeeId(id);
        return ResponseEntity.ok(employeeDto);
    }

    // BUILD GET ALL EMPLOYEE REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employeeDtoList = employeeServices.getAllEmployees();
        return ResponseEntity.ok(employeeDtoList);
    }

    // BUILD UPDATE EMPLOYEE REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee( @PathVariable("id") long id ,
                                                       @RequestBody  EmployeeDto updatedEmployeeDto){
        EmployeeDto updatedEmployee = employeeServices.updateEmployee(id, updatedEmployeeDto);
        return ResponseEntity.ok(updatedEmployee);
    }

    //BUILD DELETE EMPLOYEE REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id){
        employeeServices.deleteEmployee(id);
        return ResponseEntity.ok("Employee has been deleted");
    }
}
