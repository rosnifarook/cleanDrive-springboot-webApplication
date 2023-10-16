package com.Quick.CarService.data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "dequeue_service")
public class QuickServiceFinished
{
    @Id
    private int serviceId;
    @Column(name = "service_type")
    private String serviceName;

    @Column(name = "vehicle_number")
    private String vehicleNumber;
    @Column(name = "service_cost")
    private double serviceCost;
    @Column(name = "service_enqueue_time")
    private LocalDateTime serviceEnqueueTime;
    @Column(name = "service_dequeue_time")
    private LocalDateTime serviceDequeueTime;

    public int getServiceId() {
        return serviceId;
    }

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

    public LocalDateTime getServiceDequeueTime() {
        return serviceDequeueTime;
    }

    public void setServiceDequeueTime(LocalDateTime serviceDequeueTime) {
        this.serviceDequeueTime = serviceDequeueTime;
    }
}
