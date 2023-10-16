package com.Quick.CarService.controller;

import com.Quick.CarService.data.QuickService;
import com.Quick.CarService.data.QuickServiceFinished;
import com.Quick.CarService.service.QuickService_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class QuickServiceController {
    @Autowired
    QuickService_Service quickServiceService;

    @PostMapping(path = "/quickServices") // New Service
    public void createService(@RequestBody @Valid QuickService serv) {
        quickServiceService.createService(serv);
    }

    @GetMapping(path = "/quickServices") // Displaying all onGoing services
    public List<QuickService> getAllServices() {
        return quickServiceService.displayAllOngoingServices();
    }

    @GetMapping(path = "/quickServices/{vehicleNum}") // Displaying selected onGoing services
    public QuickService getServiceByVehicleNumber(@PathVariable String vehicleNum) {
        return quickServiceService.getServiceByVehicleNumber(vehicleNum);
    }

    public void createServiceFinished(String vehicleNum) // Services moving to finishedService table
    {
        QuickService ser = getServiceByVehicleNumber(vehicleNum);
        quickServiceService.createServiceFinished(ser);
    }

    @DeleteMapping(path = "/quickServices/{vehicleNum}") // when a service is finished it will be inserted in the
                                                         // dequeue_service_tbl
    public void deleteService(@PathVariable String vehicleNum)// dequeue // and delete from the service table
    {
        createServiceFinished(vehicleNum);// calling method
        quickServiceService.deleteServiceByVehicleNumber(vehicleNum);// deleting the service from the service queue.
    }

    @GetMapping(path = "/quickFinishedServices") // Displaying all Finished services
    public List<QuickServiceFinished> getAllFinishedServices() {
        return quickServiceService.displayAllFinishedService();
    }
}
