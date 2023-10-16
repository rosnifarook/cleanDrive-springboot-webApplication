import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewFinishedService() {
    const [service, setService] = useState({
        vehicleNumber:"",
        serviceName:"",
        serviceCost:"",
        serviceEnqueueTime: null,
        serviceDequeueTime:null
    });
    
    const {id} = useParams();
    
    useEffect(() => {

        const loadService = async () => {  
          const result = await axios.get(`http://localhost:8083/quickFinishedServices/${id}`);
          setService(result.data);
        };
      
        loadService();
      }, [id]);
    
      return (
        <div className="container position-absolute top-50 start-50 translate-middle" >
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h2 className="text-center m-4">Finished Service Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Details of Service id : {service.serviceId}</h5>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <h5><b>vehicle Number :   </b>
                                {service.vehicleNumber}</h5>
                            </li>
                            <li className='list-group-item'>
                                <h5><b>Service Type :   </b>
                                {service.serviceName}</h5>
                            </li>
                            <li className='list-group-item'>
                                <h5><b>Service Cost :   </b>
                                {service.serviceCost}</h5>
                            </li>
                            <li className='list-group-item'>
                                <h5><b>Service Added Time :   </b>
                                {service.serviceEnqueueTime}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link type='Button' className='btn btn-primary p-3 m-3' to={"/servicesfinished"}>Go Back</Link>
            </div>
        </div>
    </div>
      )
}
