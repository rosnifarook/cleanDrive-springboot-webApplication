package com.Quick.CarService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuickServiceRepository extends JpaRepository<QuickService,Integer>
{
    @Modifying
    @Query(value = "DELETE FROM enqueue_service WHERE vehicle_number = :vehicleNum", nativeQuery = true)
    void deleteByVehicleNumber(@Param("vehicleNum") String vehicleNum);

    @Query("SELECT e FROM QuickService e WHERE e.vehicleNumber = :vehicleNum")
    QuickService findByVehicleNumber(@Param("vehicleNum") String vehicleNum);

    @Modifying
    @Query(value = "INSERT INTO enqueue_service (vehicle_number, service_type, service_cost, service_enqueue_time) " +
            "VALUES (:#{#serv.vehicleNumber}, :#{#serv.serviceName}, :#{#serv.serviceCost}, NOW())", nativeQuery = true)
    void saveWithoutEnqueueTime(@Param("serv") QuickService serv);
}
