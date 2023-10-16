package com.quickWashEmployee.controller;

import com.quickWashEmployee.data.Employee;
import com.quickWashEmployee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = {"/employees"}    )
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @GetMapping(path = "/employees")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping(path = "/employees/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return employeeService.getEmployeeById(id);
    }

    @PutMapping(path = "/employees/{id}")
    public Employee updateEmployee(@RequestBody Employee employee, @PathVariable int id) {
        return this.employeeService.updateEmployee(employee, id);
    }

    @DeleteMapping(path = "/employees/{id}")
    public void deleteEmployee(@PathVariable int id) {
        this.employeeService.deleteEmployee(id);
    }
}

