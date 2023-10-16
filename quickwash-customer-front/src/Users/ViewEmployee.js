import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewEmployee() {

    const [employee, setEmployee] = useState({
        name:"",
        address:"",
        mobileNumber:""
    });

    const {id} = useParams();

    useEffect(() => {
        const loadEmployee = async () => {
          const result = await axios.get(`http://localhost:8082/employees/${id}`);
          setEmployee(result.data);
        };
      
        loadEmployee();
      }, [id]);

  return (
    <div className="container position-absolute top-50 start-50 translate-middle" >
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h2 className="text-center m-4">Employee Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Details of employee id : {employee.id} </h5>
                    </div>
                    <ul className='list-group list-group-flush  '>
                        <li className='list-group-item '>
                            <h5><b>Name :   </b>
                            {employee.name}</h5>
                        </li>
                        <li className='list-group-item'>
                            <h5><b>address :   </b>
                            {employee.address}</h5>
                        </li>
                        <li className='list-group-item'>
                            <h5><b>Mobile Number :   </b>
                            {employee.mobileNumber}</h5>
                        </li>
                    </ul>
                </div>
                <Link type='Button' className='btn btn-primary p-3 m-3' to={"/employee"}>Go Back</Link>
            </div>
        </div>
    </div>
  )
}
