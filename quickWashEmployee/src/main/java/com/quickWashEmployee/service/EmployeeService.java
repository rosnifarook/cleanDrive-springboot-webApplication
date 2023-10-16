package com.quickWashEmployee.service;

import com.quickWashEmployee.data.Employee;
import com.quickWashEmployee.data.EmployeeRepository;
import com.quickWashEmployee.exception.EmployeeNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeService() {
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        List<Employee> employee = employeeRepository.findAll();
        return employee;
    }

    public Employee getEmployeeById(int id) {
        Optional<Employee> stu = this.employeeRepository.findById(id);
        return stu.get();
    }

    public Employee updateEmployee(Employee employee, int id) {
        return employeeRepository.findById(id)
                .map(employee1 -> {
                    employee1.setName(employee.getName());
                    employee1.setAddress(employee.getAddress());
                    employee1.setMobileNumber(employee.getMobileNumber());
                    return employeeRepository.save(employee1);
                }).orElseThrow(()-> new EmployeeNotFoundException(id));
    }

    public void deleteEmployee(int id) {

        employeeRepository.deleteById(id);
    }
}