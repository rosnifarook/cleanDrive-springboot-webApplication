import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Viewcustomer() {

    const [customer, setCustomer] = useState({
        name:"",
        address:"",
        vehicleNo:"",
        mobileNo:""
    });

    const {id} = useParams();

    useEffect(() => {
        const loadCustomer = async () => {
          const result = await axios.get(`http://localhost:8081/customers/${id}`);
          setCustomer(result.data);
        };
      
        loadCustomer();
      }, [id]);

  return (
    <div className="container position-absolute top-50 start-50 translate-middle" >
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h2 className="text-center m-4">Customer Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Details of customer id : {customer.id}</h5>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <h5><b>Name :   </b>
                                {customer.name}</h5>
                            </li>
                            <li className='list-group-item'>
                                <h5><b>address :   </b>
                                {customer.address}</h5>
                            </li>
                            <li className='list-group-item'>
                                <h5><b>Vehicle Number :   </b>
                                {customer.vehicleNo}</h5>
                            </li>
                            <li className='list-group-item'>
                                <h5><b>Mobile Number :   </b>
                                {customer.mobileNo}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link type='Button' className='btn btn-primary p-3 m-3' to={"/customer"}>Go Back</Link>
            </div>
        </div>
    </div>
  )
}
