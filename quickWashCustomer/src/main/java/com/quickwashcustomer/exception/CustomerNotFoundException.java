package com.quickwashcustomer.exception;

public class CustomerNotFoundException extends RuntimeException{

    public CustomerNotFoundException(int id)
    {
        super("Could not find the user with the id "+id);
    }

}
