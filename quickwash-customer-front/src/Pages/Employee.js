import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Employee() {

  const [employees, setEmployees] = useState([])

    useEffect(()=>{
          loadEmployee();
    },[]);

    const loadEmployee = async()=>{
        const result=await axios.get("http://localhost:8082/employees")
        setEmployees(result.data);
    }

  return (
    <div>
      <h1 className='mt-2'>Employees Site</h1>
        <hr></hr>
        <Link type="button" class="btn btn-primary text-nowrap mx-auto" to="/newemployee">Register New Employee</Link><br/><br/> 
    <table class="table">
    <thead className='table-secondary'>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile Number</th>
            <th scope='col'>Actions</th>
        </tr>
    </thead>
    <tbody className='table-light'>
        {
            employees.map((employee, index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{employee.name}</td>
                <td>{employee.address}</td>
                <td>{employee.mobileNumber}</td>
                <td>
                    <Link type="button" class="btn btn-primary mx-2" to={`/viewemployee/${employee.id}`}>View</Link>
                    <Link type="button" class="btn btn-outline-primary mx-2" to={`/editemployee/${employee.id}`}>Edit</Link>
                </td>
            </tr>
            ))
        }
    </tbody>
    </table>
    </div>
  )
}
