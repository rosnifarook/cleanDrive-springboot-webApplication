package com.Quick.CarService.service;

import com.Quick.CarService.data.QuickService;
import com.Quick.CarService.data.QuickServiceFinished;
import com.Quick.CarService.data.QuickServiceFinishedRepository;
import com.Quick.CarService.data.QuickServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class QuickService_Service
{
    @Autowired
    private QuickServiceRepository quickServiceRepository;

    @Autowired
    private QuickServiceFinishedRepository quickServiceFinishedRepository;

    @Transactional
    public void createService(QuickService serv)
    {
        quickServiceRepository.saveWithoutEnqueueTime(serv);
    }

    @Transactional
    public QuickService getServiceByVehicleNumber(String vehicleNum)
    {
        Optional<QuickService> serv = Optional.ofNullable(quickServiceRepository.findByVehicleNumber(vehicleNum));//
        return serv.get();
    }

    @Transactional
    public void deleteServiceByVehicleNumber(String vehicleNum)
    {
        quickServiceRepository.deleteByVehicleNumber(vehicleNum);
    }

    public List<QuickService> displayAllOngoingServices()
    {
        List<QuickService> Qserv = quickServiceRepository.findAll();
        return Qserv;
    }

    @Transactional
    public void createServiceFinished(QuickService serv)
    {
         quickServiceFinishedRepository.saveWithExtraAttribute(serv);
    }

    public List<QuickServiceFinished> displayAllFinishedService()
    {
        List<QuickServiceFinished> Qserv = quickServiceFinishedRepository.findAll();
        return Qserv;
    }


}
