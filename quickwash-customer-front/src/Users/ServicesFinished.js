import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function FinishedServices() {

    const [services, setService] = useState([])

    useEffect(()=>{
          loadService();
    },[]);

    const loadService = async()=>{
        const result=await axios.get("http://localhost:8083/quickFinishedServices")
        setService(result.data);
    }

  return (
    <div>
      <h1>All Finished Services</h1>
        <hr></hr>
    <Link type="button" class="btn btn-primary text-nowrap mx-auto" to="/service">Go To Services Site</Link><br/><br/>
    <table class="table">
    <thead className='table-secondary'>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Vehicle Number</th>
            <th scope="col">Service Type</th>
            <th scope="col">Service Cost</th>
            <th scope="col">Service Added Time</th>
            <th scope="col">Service Finished Time</th>
            <th scope='col'>Actions</th>
        </tr>
    </thead>
    <tbody className='table-light'>
        {
            services.map((service, index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{service.vehicleNumber}</td>
                <td>{service.serviceName}</td>
                <td>{service.serviceCost}</td>
                <td>{service.serviceEnqueueTime}</td>
                <td>{service.serviceDequeueTime}</td>
                <td>
                    <Link type="button" class="btn btn-primary mx-2" to={`/viewfinishedservice/${service.serviceId}`}>View</Link>
                </td>
            </tr>
            ))
        }
    </tbody>
    </table>
    </div>
  )
}
