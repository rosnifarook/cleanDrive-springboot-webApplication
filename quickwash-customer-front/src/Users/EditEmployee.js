import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditEmployee() {
  
  let navigate = useNavigate();

  const {id} = useParams()

  const [employee, setEmployee] = useState({
      name:"",
      address:"",
      mobileNumber:""
  });

  const {name, address,  mobileNumber} = employee;

  const onInputChange = (e) => {
      setEmployee({...employee, [e.target.name]: e.target.value});
  };

  useEffect(()=>{
      loadEmployee();
  },[]);

  const onSubmit = async (e) => {
      e.preventDefault(); 
      await axios.put(`http://localhost:8082/employees/${id}`, employee);
      navigate("/employee");
  }

  const loadEmployee = async ()=>{
      const result= await axios.get(`http://localhost:8082/employees/${id}`)
      setEmployee(result.data);
  }

  return (
      <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
          <h2 className="text-center m-4">Edit Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                name="name"
                value={name}
                required
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                required
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
                Mobile Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your mobile number"
                name="mobileNumber"
                value={mobileNumber}
                required
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary p-3 m-3">
              Submit
            </button>
            <Link className="btn btn-danger p-3 m-3" to="/employee">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
)
}
