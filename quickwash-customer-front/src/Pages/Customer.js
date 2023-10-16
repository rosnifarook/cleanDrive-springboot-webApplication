import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Customer() {

    const [customers, setCustomers] = useState([])

    useEffect(()=>{
          loadCustomer();
    },[]);

    const loadCustomer = async()=>{
        const result=await axios.get("http://localhost:8081/customers")
        setCustomers(result.data);
    }

  return (
    <div>
        <h1 className='mt-2'>Customers Site</h1>
        <hr></hr>
        <Link type="button" class="btn btn-primary mt-2 text-nowrap mx-auto" to="/newcustomer">Register New Customers</Link><br/><br/>
    <table class="table">
    <thead className='table-secondary'>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Vehicle Number</th>
            <th scope="col">Mobile Number</th>
            <th scope='col'>Actions</th>
        </tr>
    </thead>
    <tbody className='table-light'>
        {
            customers.map((customer, index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.vehicleNo}</td>
                <td>{customer.mobileNo}</td>
                <td>
                    <Link type="button" class="btn btn-primary mx-2" to={`/viewcustomer/${customer.id}`}>View</Link>
                    <Link type="button" class="btn btn-outline-primary mx-2" to={`/editcustomer/${customer.id}`}>Edit</Link>
                </td>
            </tr>
            ))
        }
    </tbody>
    </table>
    </div>
  )
}
