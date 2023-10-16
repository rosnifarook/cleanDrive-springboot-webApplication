package com.quickwashcustomer.service;

import com.quickwashcustomer.data.Customer;
import com.quickwashcustomer.data.CustomerRepository;
import com.quickwashcustomer.exception.CustomerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer createCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomer()    {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(int id)    {
        return customerRepository.findById(id)
                .orElseThrow(()-> new CustomerNotFoundException(id));
    }

    public Customer updateCustomer(Customer update, int id)    {
        return customerRepository.findById(id)
                .map(customer -> {
                    customer.setName(update.getName());
                    customer.setAddress(update.getAddress());
                    customer.setVehicleNo(update.getVehicleNo());
                    customer.setMobileNo(update.getMobileNo());
                    return customerRepository.save(customer);
                }).orElseThrow(()-> new CustomerNotFoundException(id));
    }
}
