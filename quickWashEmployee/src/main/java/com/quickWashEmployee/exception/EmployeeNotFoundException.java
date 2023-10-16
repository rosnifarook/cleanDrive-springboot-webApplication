package com.quickWashEmployee.exception;

public class EmployeeNotFoundException extends RuntimeException{

    public EmployeeNotFoundException(int id)
    {
        super("Could not find the Employee with the id "+id);
    }

}
