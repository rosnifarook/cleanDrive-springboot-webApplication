import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Services() {

  const [services, setServices] = useState([])

    useEffect(()=>{
          loadService();
    },[]);

    const loadService = async()=>{
        const result = await axios.get("http://localhost:8083/quickServices")
        setServices(result.data);
    }

  return (
    <div>
        <h1>Services Site</h1>
        <hr></hr>
        <Link type="button" class="btn btn-primary text-nowrap mx-auto" to="/newservice">Add new Services</Link>
        <Link type="button" class="btn btn-primary ms-4  text-nowrap mx-auto" to="/servicesfinished">View All Finished Services</Link>
        <Link type="button" class="btn btn-primary ms-4 text-nowrap mx-auto" to={`/finishaservice`}>Finish A Service</Link><br/><br/> 
    <table class="table">
    <thead className='table-secondary'>
        <tr>
            <th scope="col">Service ID</th>
            <th scope="col">Vehicle Number</th>
            <th scope="col">Service Type</th>
            <th scope="col">Service Cost</th>
            <th scope="col">Service Added Time</th>
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
                <td>
                    <Link type="button" class="btn btn-primary mx-2" to={`/viewservice/${service.vehicleNumber}`}>View</Link>
                </td>
            </tr>
            ))
        }
    </tbody>
    </table>
    </div>
  )
}
