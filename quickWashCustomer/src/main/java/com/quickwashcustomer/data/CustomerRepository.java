package com.quickwashcustomer.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query("select cu from Customer cu where cu.vehicleNo=?1")
    List<Customer> findByVehicleNo(String vehicle);
}
