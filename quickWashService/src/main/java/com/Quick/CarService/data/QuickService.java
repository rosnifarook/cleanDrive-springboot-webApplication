package com.Quick.CarService.data;

import javax.persistence.*;
import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "enqueue_service")
public class QuickService
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int serviceId;
//  @NotNull(message = "Service Type cannot be null")
    @Column(name = "service_type")
    private String serviceName;

    @NotNull(message = "Vehicle Number cannot be null")
    @Column(name = "vehicle_number")
    private String vehicleNumber;
    @Column(name = "service_cost")
    private double serviceCost;
    @Column(name = "service_enqueue_time")
    private LocalDateTime serviceEnqueueTime;

    public int getServiceId() { return serviceId; }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public double getServiceCost() {
        return serviceCost;
    }

    public void setServiceCost(double serviceCost) {
        this.serviceCost = serviceCost;
    }

    public LocalDateTime getServiceEnqueueTime() {
        return serviceEnqueueTime;
    }

    public void setServiceEnqueueTime(LocalDateTime serviceEnqueueTime) {
        this.serviceEnqueueTime = serviceEnqueueTime;
    }
}
