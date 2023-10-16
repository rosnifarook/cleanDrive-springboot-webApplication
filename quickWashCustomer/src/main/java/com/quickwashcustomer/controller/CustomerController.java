package com.quickwashcustomer.controller;

import com.quickwashcustomer.data.Customer;
import com.quickwashcustomer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping(path = "/customers")
    public List<Customer> getAllStudent() {
        return customerService.getAllCustomer();
    }

    @GetMapping(path = "/customers/{id}")
    public Customer getCustomerById(@PathVariable int id) {
        return customerService.getCustomerById(id);
    }

    @PutMapping(path = "/customers/{id}")
    public Customer updateStudent(@RequestBody Customer update, @PathVariable int id) {
        return customerService.updateCustomer(update ,id);
    }

    @PostMapping(path = "/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }
}
