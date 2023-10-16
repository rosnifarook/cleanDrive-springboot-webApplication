package com.Quick.CarService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuickServiceFinishedRepository extends JpaRepository<QuickServiceFinished,Integer>
{
    @Modifying
    @Query(value = "INSERT INTO dequeue_service (service_id, vehicle_number, service_type, service_cost, service_enqueue_time, service_dequeue_time) " +
            "VALUES (:#{#serv.serviceId}, :#{#serv.vehicleNumber}, :#{#serv.serviceName}, :#{#serv.serviceCost}, :#{#serv.serviceEnqueueTime}, NOW())", nativeQuery = true)
    void saveWithExtraAttribute(@Param("serv") QuickService serv);

}